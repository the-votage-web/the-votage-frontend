import { NextRequest, NextResponse } from "next/server";

const UPSTREAM_URL =
  process.env.MRC_API_BASE ||
  process.env.APOSTOLIC_SHIFT_API_BASE ||
  "https://votage-ai-assistant.vercel.app";

const PRIMARY_SLUG = process.env.MRC_EVENT_SLUG || "my-relationship-conference";

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

    const result = await postRegister(PRIMARY_SLUG, payload);
    const { status, data, statusText } = result;

    return NextResponse.json(
      data || { detail: statusText },
      { status }
    );
  } catch (error) {
    console.error("Error proxying MRC registration:", error);
    return NextResponse.json(
      { detail: "An unexpected server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
