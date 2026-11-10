import { NextRequest, NextResponse } from "next/server";

const UPSTREAM_URL =
  process.env.APOSTOLIC_SHIFT_API_BASE ||
  "https://votage-ai-assistant.vercel.app";

const PRIMARY_SLUG =
  process.env.APOSTOLIC_SHIFT_EVENT_SLUG || "apostolic-shift-2026";
const FALLBACK_SLUG = "apostolic-shift-conference-2026";

async function postRegister(slug: string, payload: Record<string, unknown>) {
  const upstreamRes = await fetch(
    `${UPSTREAM_URL}/api/events/${slug}/register`,
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
  return { status: upstreamRes.status, data, statusText: upstreamRes.statusText };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const fullName = (body.full_name || body.fullName || "").trim();
    const phoneNumber = (body.phone_number || body.phone || "").trim();
    const heardAboutUs = (
      body.heard_about_us ||
      body.heardAboutUs ||
      body.how_did_you_hear ||
      body.howDidYouHear ||
      body.referral_source ||
      ""
    ).trim();

    const stateCountry = (
      body.state_country ||
      body.stateCountry ||
      body.country_and_state ||
      body.countryAndState ||
      ""
    ).trim();

    if (!fullName || !phoneNumber) {
      return NextResponse.json(
        { detail: "Full name and phone number are required." },
        { status: 422 }
      );
    }

    let country = (body.country || "").trim();
    let state = (body.state || "").trim();

    if (stateCountry) {
      const parts = stateCountry.split(",").map((p: string) => p.trim()).filter(Boolean);
      if (parts.length >= 2) {
        state = state || parts[0];
        country = country || parts[1];
      } else if (parts.length === 1) {
        state = state || parts[0];
        country = country || parts[0];
      }
    }
    if (!country) country = "Nigeria";

    // Build payload supporting both the new 4-field format and backward-compatibility
    const payload: Record<string, unknown> = {
      full_name: fullName,
      phone_number: phoneNumber,
      state_country: stateCountry,
      heard_about_us: heardAboutUs,
      country_and_state: stateCountry,
      country,
      state: state || country,
      how_did_you_hear: heardAboutUs,
      referral_source: heardAboutUs,
    };

    // Attempt registration with primary slug, fallback to legacy slug if event not found
    let result = await postRegister(PRIMARY_SLUG, payload);
    if (result.status === 404 && result.data?.detail?.toLowerCase().includes("not found or is inactive")) {
      result = await postRegister(FALLBACK_SLUG, payload);
    }

    const { status, data, statusText } = result;

    return NextResponse.json(
      data || { detail: statusText },
      { status }
    );
  } catch (error) {
    console.error("Error proxying Apostolic Shift registration:", error);
    return NextResponse.json(
      { detail: "An unexpected server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
