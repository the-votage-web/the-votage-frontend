import { NextRequest, NextResponse } from "next/server";

const UPSTREAM_URL =
  process.env.APOSTOLIC_SHIFT_API_BASE ||
  "https://votage-ai-assistant.vercel.app";

const PRIMARY_SLUG =
  process.env.APOSTOLIC_SHIFT_EVENT_SLUG || "apostolic-shift-2026";
const FALLBACK_SLUG = "apostolic-shift-conference-2026";

async function postCheckin(phoneNumber: string, eventSlug: string) {
  const payload = {
    phone_number: phoneNumber,
    event_name: eventSlug,
  };

  const upstreamRes = await fetch(`${UPSTREAM_URL}/api/events/checkin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await upstreamRes.json().catch(() => null);
  return { status: upstreamRes.status, data, statusText: upstreamRes.statusText };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check if this request is coming from ChatWidget ({ message, session_id })
    const isChatMessage = typeof body.message === "string";

    let phoneNumber = "";

    if (isChatMessage) {
      const rawText = body.message.trim();

      if (rawText.toLowerCase() === "end session") {
        return NextResponse.json({
          reply:
            "Session ended. Please type your registered phone number whenever you're ready to check in.",
        });
      }

      // Extract phone number from chat message (allow + and digits)
      const phoneMatch = rawText.match(/(?:\+?\d[\d\s-]{6,16}\d|\d{8,15})/);
      if (!phoneMatch) {
        return NextResponse.json({
          reply:
            "Hi! 👋 To check in for Apostolic Shift Conference 2026, please type your registered phone number (e.g. 08012345678).",
        });
      }

      phoneNumber = phoneMatch[0].replace(/[\s-]/g, "");
    } else {
      phoneNumber = (body.phone_number || body.phone || "").trim();
    }

    if (!phoneNumber) {
      if (isChatMessage) {
        return NextResponse.json({
          reply:
            "Please provide your registered phone number to check in (e.g. 08012345678).",
        });
      }
      return NextResponse.json(
        { detail: "Phone number is required for check-in." },
        { status: 422 }
      );
    }

    // Attempt check-in with primary slug, fallback to legacy slug if event not found
    let result = await postCheckin(phoneNumber, PRIMARY_SLUG);
    if (result.status === 404 && result.data?.detail?.toLowerCase().includes("no active event")) {
      result = await postCheckin(phoneNumber, FALLBACK_SLUG);
    }

    const { status, data, statusText } = result;

    if (isChatMessage) {
      if (status === 200) {
        const detailMsg =
          data?.detail || "Check-in successful! Welcome to Apostolic Shift Conference 2026.";
        return NextResponse.json({ reply: detailMsg });
      } else if (status === 404) {
        return NextResponse.json({
          reply: `👋 We couldn't find a registration for ${phoneNumber}.\n\nPlease register here first to save your seat: [Register for Apostolic Shift](/apostolic-shift/checkin?tab=registration)`,
        });
      } else {
        const errMsg =
          data?.detail ||
          data?.message ||
          "Sorry, we couldn't complete your check-in. Please verify your phone number and try again.";
        return NextResponse.json({ reply: errMsg });
      }
    }

    return NextResponse.json(data || { detail: statusText }, { status });
  } catch (error) {
    console.error("Error proxying Apostolic Shift check-in:", error);
    return NextResponse.json(
      { detail: "An unexpected server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
