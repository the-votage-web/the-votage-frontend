import { NextRequest, NextResponse } from "next/server";

const UPSTREAM_URL =
  process.env.APOSTOLIC_SHIFT_API_BASE ||
  "https://votage-ai-assistant.vercel.app";

const EVENT_SLUG =
  process.env.APOSTOLIC_SHIFT_EVENT_SLUG || "apostolic-shift-conference-2026";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const fullName = (body.full_name || body.fullName || "").trim();
    const phoneNumber = (body.phone_number || body.phone || "").trim();
    const email = (body.email || "").trim();
    const city = (body.city || "").trim();
    const state = (body.state || "").trim();
    const country = (body.country || "Nigeria").trim();

    if (!fullName || !phoneNumber || !email) {
      return NextResponse.json(
        { detail: "Full name, phone number, and email are required." },
        { status: 422 }
      );
    }

    const payload = {
      full_name: fullName,
      phone_number: phoneNumber,
      email,
      ...(city ? { city } : {}),
      ...(state ? { state } : {}),
      ...(country ? { country } : {}),
    };

    const upstreamRes = await fetch(
      `${UPSTREAM_URL}/api/events/${EVENT_SLUG}/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await upstreamRes.json().catch(() => null);

    return NextResponse.json(
      data || { detail: upstreamRes.statusText },
      { status: upstreamRes.status }
    );
  } catch (error) {
    console.error("Error proxying Apostolic Shift registration:", error);
    return NextResponse.json(
      { detail: "An unexpected server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
