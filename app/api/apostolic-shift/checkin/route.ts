import { NextRequest, NextResponse } from "next/server";

const UPSTREAM_URL =
  process.env.APOSTOLIC_SHIFT_API_BASE ||
  "https://votage-ai-assistant.vercel.app";

const EVENT_SLUG =
  process.env.APOSTOLIC_SHIFT_EVENT_SLUG || "apostolic-shift-conference-2026";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const phoneNumber = (body.phone_number || body.phone || "").trim();

    if (!phoneNumber) {
      return NextResponse.json(
        { detail: "Phone number is required for check-in." },
        { status: 422 }
      );
    }

    const payload = {
      phone_number: phoneNumber,
      event_name: EVENT_SLUG,
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

    return NextResponse.json(
      data || { detail: upstreamRes.statusText },
      { status: upstreamRes.status }
    );
  } catch (error) {
    console.error("Error proxying Apostolic Shift check-in:", error);
    return NextResponse.json(
      { detail: "An unexpected server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
