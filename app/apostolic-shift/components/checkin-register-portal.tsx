"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import ChatWidget from "@/components/ui/Chatwidget";

type FormState = "idle" | "busy" | "success" | "error";

interface CheckinRegisterPortalProps {
  initialTab?: "checkin" | "register";
}

const REFERRAL_OPTIONS = [
  "Friend or Family",
  "Invited by Someone",
  "Social Media (Instagram, Facebook, X, TikTok)",
  "WhatsApp",
  "Youtube",
  "Church Website",
  "Google Search",
  "Flyer or Poster",
  "Church Announcement / Service",
  "Previous Church Program",
  "Other",
];

export function CheckinRegisterPortal({
  initialTab = "checkin",
}: CheckinRegisterPortalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState<"checkin" | "register">(initialTab);

  // Registration state
  const [fullName, setFullName] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [howDidYouHear, setHowDidYouHear] = useState("");
  const [countryAndState, setCountryAndState] = useState("");
  const [regState, setRegState] = useState<FormState>("idle");
  const [regMessage, setRegMessage] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  // Sync tab with URL search parameter
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "register" || tabParam === "registration") {
      setActiveTab("register");
    } else {
      setActiveTab("checkin");
    }

    const p = searchParams.get("phone");
    if (p) {
      setRegPhone(p);
    }
  }, [searchParams]);

  function switchTab(tab: "checkin" | "register") {
    setActiveTab(tab);
    setRegState("idle");
    setRegMessage("");
    setIsDuplicate(false);

    const params = new URLSearchParams(searchParams.toString());
    if (tab === "register") {
      params.set("tab", "registration");
    } else {
      params.delete("tab");
    }
    const query = params.toString();
    router.replace(query ? `/apostolic-shift/checkin?${query}` : "/apostolic-shift/checkin");
  }

  // Handle Registration submit
  async function handleRegistrationSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (regState === "busy") return;

    if (!fullName.trim() || !regPhone.trim()) {
      setRegState("error");
      setRegMessage("Please provide both your Full name and Phone number.");
      return;
    }

    if (!howDidYouHear) {
      setRegState("error");
      setRegMessage("Please select how you heard about the program.");
      return;
    }

    if (!countryAndState.trim()) {
      setRegState("error");
      setRegMessage("Please enter your Country and State.");
      return;
    }

    setRegState("busy");
    setRegMessage("");
    setIsDuplicate(false);

    try {
      const res = await fetch("/api/apostolic-shift/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName.trim(),
          phone_number: regPhone.trim(),
          heard_about_us: howDidYouHear,
          state_country: countryAndState.trim(),
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        detail?: string;
        session_code?: string;
      } | null;

      if (res.status === 201) {
        setRegState("success");
        setIsDuplicate(false);
        setRegMessage(
          data?.detail || "Registration successful! Welcome to Apostolic Shift 2026."
        );
        setFullName("");
        setRegPhone("");
        setHowDidYouHear("");
        setCountryAndState("");
      } else if (res.status === 409) {
        setRegState("error");
        setIsDuplicate(true);
        setRegMessage(
          data?.detail || "You are already registered for this event! You can proceed directly to check-in."
        );
      } else {
        setRegState("error");
        setIsDuplicate(false);
        setRegMessage(data?.detail || "Registration failed. Please check your details and try again.");
      }
    } catch {
      setRegState("error");
      setIsDuplicate(false);
      setRegMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100dvh",
        padding: "36px 14px 48px",
        position: "relative",
        overflow: "hidden",
        background: "#fffaf7",
      }}
    >
      {/* Alert Banner for Registration */}
      {activeTab === "register" && regMessage && regState === "success" && (
        <div
          role="alert"
          style={{
            position: "fixed",
            top: 16,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 60,
            minWidth: "min(560px, calc(100vw - 24px))",
            maxWidth: "calc(100vw - 24px)",
            borderRadius: 14,
            padding: "14px 18px",
            fontSize: 14,
            fontWeight: 700,
            color: "#0f5132",
            background: "#d1e7dd",
            border: "1px solid #badbcc",
            boxShadow: "0 10px 28px rgba(0, 0, 0, 0.14)",
          }}
        >
          {regMessage}
        </div>
      )}

      {activeTab === "register" && regMessage && regState === "error" && (
        <div
          role="alert"
          style={{
            position: "fixed",
            top: 16,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 60,
            minWidth: "min(560px, calc(100vw - 24px))",
            maxWidth: "calc(100vw - 24px)",
            borderRadius: 14,
            padding: "16px 20px",
            fontSize: 14,
            fontWeight: 500,
            color: "#842029",
            background: "#fff5f5",
            border: "1px solid #f5c2c7",
            boxShadow: "0 14px 32px rgba(0, 0, 0, 0.14)",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <span style={{ fontSize: 20 }}>{isDuplicate ? "📋" : "⚠️"}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: "#842029" }}>
                {isDuplicate ? "Already Registered" : "Registration Notice"}
              </div>
              <div style={{ color: "#58151c", lineHeight: 1.45 }}>{regMessage}</div>

              {isDuplicate && (
                <div style={{ marginTop: 12 }}>
                  <button
                    onClick={() => switchTab("checkin")}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "#f80",
                      color: "#ffffff",
                      fontWeight: 700,
                      padding: "8px 16px",
                      borderRadius: 24,
                      border: 0,
                      cursor: "pointer",
                      fontSize: 13,
                      boxShadow: "0 4px 14px rgba(255, 136, 0, 0.3)",
                    }}
                    type="button"
                  >
                    <span>Go to Check-in</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Link
          href="/apostolic-shift"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 16,
            color: "#f80",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "var(--font-poppins)",
          }}
        >
          <span aria-hidden="true">&larr;</span>
          <span>Back to Apostolic Shift</span>
        </Link>

        {/* Page Header */}
        <header style={{ marginBottom: 20 }}>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(1.7rem, 1.2rem + 1.8vw, 2.45rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#242221",
              fontFamily: "var(--font-copperplate-bold)",
              textTransform: "uppercase",
            }}
          >
            Check-in & Registration
          </h1>
          <p
            style={{
              margin: "10px 0 0",
              maxWidth: "65ch",
              color: "#5c5854",
              lineHeight: 1.5,
              fontSize: "0.97rem",
              fontFamily: "var(--font-poppins)",
            }}
          >
            Already registered? Use the <strong>Check-in</strong> tab to mark your attendance.
            Joining us for the conference? Use the <strong>Registration</strong> tab to save your seat.
          </p>
        </header>

        {/* Tab Switcher - Styled like the main Votage Register tabs */}
        <nav
          aria-label="Attendance tabs"
          style={{
            display: "inline-flex",
            gap: 8,
            marginBottom: 20,
            background: "#ede5dc",
            padding: "5px",
            borderRadius: 14,
          }}
        >
          <button
            onClick={() => switchTab("checkin")}
            type="button"
            style={{
              border: 0,
              padding: "10px 22px",
              borderRadius: 10,
              fontSize: "0.95rem",
              fontWeight: 700,
              fontFamily: "var(--font-poppins)",
              cursor: "pointer",
              transition: "all 180ms ease",
              background: activeTab === "checkin" ? "#ffffff" : "transparent",
              color: activeTab === "checkin" ? "#242221" : "#6c655e",
              boxShadow:
                activeTab === "checkin" ? "0 4px 14px rgba(36, 34, 33, 0.08)" : "none",
            }}
          >
            Check-in
          </button>
          <button
            onClick={() => switchTab("register")}
            type="button"
            style={{
              border: 0,
              padding: "10px 22px",
              borderRadius: 10,
              fontSize: "0.95rem",
              fontWeight: 700,
              fontFamily: "var(--font-poppins)",
              cursor: "pointer",
              transition: "all 180ms ease",
              background: activeTab === "register" ? "#ffffff" : "transparent",
              color: activeTab === "register" ? "#242221" : "#6c655e",
              boxShadow:
                activeTab === "register" ? "0 4px 14px rgba(36, 34, 33, 0.08)" : "none",
            }}
          >
            Registration
          </button>
        </nav>

        {/* Content Card */}
        <div
          style={{
            border: "1px solid #e8e0d8",
            borderRadius: 18,
            background: "#ffffff",
            boxShadow: "0 16px 42px rgba(36, 34, 33, 0.08)",
            padding: activeTab === "checkin" ? 0 : 26,
            overflow: "hidden",
          }}
        >
          {activeTab === "checkin" ? (
            /* =================== CHECK-IN TAB: Conversational Message Bot =================== */
            <ChatWidget
              apiUrl="/api/apostolic-shift/checkin"
              title="Apostolic Shift Check-in Assistant"
              welcomeMessage={`Hi! 👋 I'm here to help you check in for Apostolic Shift Conference 2026.\n\nPlease type your registered phone number to get started (e.g. 08012345678).\n\n`}
              containerStyle={{
                minHeight: "clamp(480px, 68dvh, 620px)",
                height: "clamp(480px, 68dvh, 620px)",
                padding: 0,
                background: "transparent",
              }}
            />
          ) : (
            /* =================== REGISTRATION TAB =================== */
            <form onSubmit={handleRegistrationSubmit} style={{ display: "grid", gap: 16 }}>
              <div>
                <h2
                  style={{
                    margin: "0 0 4px",
                    fontSize: "1.25rem",
                    color: "#242221",
                    fontFamily: "var(--font-copperplate-bold)",
                    textTransform: "uppercase",
                  }}
                >
                  Save Your Seat
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.92rem",
                    color: "#6c655e",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  Registration is free and only takes a minute.
                </p>
              </div>

              {/* 1. Full name */}
              <label style={{ display: "grid", gap: 7 }}>
                <span
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#242221",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  Full name
                </span>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (regState === "error") {
                      setRegState("idle");
                      setRegMessage("");
                    }
                  }}
                  placeholder="e.g. John Doe"
                  style={{
                    width: "100%",
                    border: "1px solid #b3a79b",
                    background: "#fafafa",
                    borderRadius: 11,
                    padding: "12px 14px",
                    fontSize: "0.95rem",
                    color: "#000000",
                    fontFamily: "var(--font-poppins)",
                    transition: "border-color 140ms ease, box-shadow 140ms ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = "none";
                    e.currentTarget.style.borderColor = "#f80";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255, 136, 0, 0.18)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#b3a79b";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </label>

              {/* 2. Phone number */}
              <label style={{ display: "grid", gap: 7 }}>
                <span
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#242221",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  Phone number
                </span>
                <input
                  type="tel"
                  required
                  value={regPhone}
                  onChange={(e) => {
                    setRegPhone(e.target.value);
                    if (regState === "error") {
                      setRegState("idle");
                      setRegMessage("");
                    }
                  }}
                  placeholder="e.g. 0801 234 5678"
                  style={{
                    width: "100%",
                    border: "1px solid #b3a79b",
                    background: "#fafafa",
                    borderRadius: 11,
                    padding: "12px 14px",
                    fontSize: "0.95rem",
                    color: "#000000",
                    fontFamily: "var(--font-poppins)",
                    transition: "border-color 140ms ease, box-shadow 140ms ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = "none";
                    e.currentTarget.style.borderColor = "#f80";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255, 136, 0, 0.18)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#b3a79b";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </label>

              {/* 3. How did you hear about the program (ONLY dropdown) */}
              <label style={{ display: "grid", gap: 7 }}>
                <span
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#242221",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  How did you hear about us
                </span>
                <div style={{ position: "relative", width: "100%" }}>
                  <select
                    required
                    value={howDidYouHear}
                    onChange={(e) => {
                      setHowDidYouHear(e.target.value);
                      if (regState === "error") {
                        setRegState("idle");
                        setRegMessage("");
                      }
                    }}
                    style={{
                      width: "100%",
                      border: "1px solid #b3a79b",
                      background: "#fafafa",
                      borderRadius: 11,
                      padding: "12px 38px 12px 14px",
                      fontSize: "0.95rem",
                      color: howDidYouHear ? "#000000" : "#6c655e",
                      fontFamily: "var(--font-poppins)",
                      appearance: "none",
                      cursor: "pointer",
                      transition: "border-color 140ms ease, box-shadow 140ms ease",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.outline = "none";
                      e.currentTarget.style.borderColor = "#f80";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255, 136, 0, 0.18)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#b3a79b";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <option value="" disabled>
                      Select how you heard about us
                    </option>
                    {REFERRAL_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div
                    style={{
                      position: "absolute",
                      right: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <svg fill="#f80" height="10" viewBox="0 0 12 10" width="12">
                      <path d="M6 10L0 0h12L6 10z" />
                    </svg>
                  </div>
                </div>
              </label>

              {/* 4. Country and state (One input field typed by user) */}
              <label style={{ display: "grid", gap: 7 }}>
                <span
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#242221",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  Country and state
                </span>
                <input
                  type="text"
                  required
                  value={countryAndState}
                  onChange={(e) => {
                    setCountryAndState(e.target.value);
                    if (regState === "error") {
                      setRegState("idle");
                      setRegMessage("");
                    }
                  }}
                  placeholder="e.g. Lagos, Nigeria"
                  style={{
                    width: "100%",
                    border: "1px solid #b3a79b",
                    background: "#fafafa",
                    borderRadius: 11,
                    padding: "12px 14px",
                    fontSize: "0.95rem",
                    color: "#000000",
                    fontFamily: "var(--font-poppins)",
                    transition: "border-color 140ms ease, box-shadow 140ms ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = "none";
                    e.currentTarget.style.borderColor = "#f80";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255, 136, 0, 0.18)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#b3a79b";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </label>

              {/* Submit Button (Apostolic Shift circle arrow + SUBMIT pill design) */}
              <div style={{ paddingTop: 8 }}>
                <button
                  type="submit"
                  disabled={regState === "busy"}
                  className="group"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    border: 0,
                    background: "transparent",
                    padding: 0,
                    cursor: regState === "busy" ? "not-allowed" : "pointer",
                    opacity: regState === "busy" ? 0.65 : 1,
                    transition: "transform 120ms ease",
                  }}
                  onMouseDown={(e) => {
                    if (regState !== "busy") e.currentTarget.style.transform = "scale(0.98)";
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "#f80",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 14px rgba(255, 136, 0, 0.3)",
                      transition: "background 150ms ease",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      style={{ width: 22, height: 22, color: "#ffffff" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      height: 52,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 9999,
                      background: "#f80",
                      padding: "0 36px",
                      boxShadow: "0 4px 14px rgba(255, 136, 0, 0.3)",
                      transition: "background 150ms ease",
                    }}
                  >
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-poppins)",
                        fontWeight: 600,
                        fontSize: 16,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#ffffff",
                      }}
                    >
                      {regState === "busy" ? "Submitting…" : "SUBMIT"}
                    </span>
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
