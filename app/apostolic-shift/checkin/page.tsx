"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useEffect } from "react";

type FormState = "idle" | "busy" | "success" | "error";

export default function ApostolicShiftCheckinPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [notRegistered, setNotRegistered] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState<number | null>(null);

  // Pre-fill phone if passed in URL search params
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const p = params.get("phone");
    if (p) setPhone(p);
  }, []);

  // Countdown timer for automatic redirect when not registered
  useEffect(() => {
    if (redirectCountdown === null) return;
    if (redirectCountdown <= 0) {
      router.push(`/apostolic-shift?phone=${encodeURIComponent(phone.trim())}#register`);
      return;
    }
    const timer = setTimeout(() => {
      setRedirectCountdown((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);
    return () => clearTimeout(timer);
  }, [redirectCountdown, phone, router]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "busy") return;

    if (!phone.trim()) {
      setState("error");
      setNotRegistered(false);
      setRedirectCountdown(null);
      setMessage("Please enter your registered phone number to check in.");
      return;
    }

    setState("busy");
    setMessage("");
    setNotRegistered(false);
    setRedirectCountdown(null);

    try {
      const res = await fetch("/api/apostolic-shift/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone_number: phone.trim(),
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        detail?: string;
        error?: string;
        checked_in?: boolean;
      } | null;

      if (res.status === 200) {
        setState("success");
        setNotRegistered(false);
        setRedirectCountdown(null);
        setMessage(
          data?.detail || "Check-in successful! Welcome to Apostolic Shift Conference 2026."
        );
        setPhone("");
        setEmail("");
      } else if (res.status === 404) {
        setState("error");
        setNotRegistered(true);
        setMessage(
          `We couldn't find a registration for ${phone.trim()}. Redirecting you to register...`
        );
        // Start 3-second countdown then auto-navigate
        setRedirectCountdown(3);
      } else {
        setState("error");
        setNotRegistered(false);
        setRedirectCountdown(null);
        setMessage(data?.detail || "Check-in failed. Please verify your number and try again.");
      }
    } catch {
      setState("error");
      setNotRegistered(false);
      setRedirectCountdown(null);
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "36px 10px 48px",
        position: "relative",
        overflow: "hidden",
        background: "#fffaf7",
      }}
    >
      {/* Fixed notice banner */}
      {state === "success" && (
        <div
          role="alert"
          style={{
            position: "fixed",
            top: 16,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 50,
            minWidth: "min(560px, calc(100vw - 24px))",
            maxWidth: "calc(100vw - 24px)",
            borderRadius: 12,
            padding: "12px 14px",
            fontSize: 14,
            fontWeight: 700,
            color: "#0f5132",
            background: "#d1e7dd",
            border: "1px solid #badbcc",
            boxShadow: "0 10px 24px rgba(0, 0, 0, 0.14)",
          }}
        >
          {message}
        </div>
      )}
      {state === "error" && (
        <div
          role="alert"
          style={{
            position: "fixed",
            top: 16,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 50,
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
            <span style={{ fontSize: 22 }}>{notRegistered ? "📋" : "⚠️"}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: "#842029" }}>
                {notRegistered ? "Not Registered Yet" : "Check-in Error"}
              </div>
              <div style={{ color: "#58151c", lineHeight: 1.45 }}>{message}</div>
              {notRegistered && (
                <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                  <Link
                    href={`/apostolic-shift?phone=${encodeURIComponent(phone.trim())}#register`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "#f80",
                      color: "#ffffff",
                      fontWeight: 700,
                      padding: "8px 16px",
                      borderRadius: 24,
                      textDecoration: "none",
                      fontSize: 13,
                      boxShadow: "0 4px 14px rgba(255, 136, 0, 0.3)",
                    }}
                  >
                    <span>Register Now</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  {redirectCountdown !== null && (
                    <span style={{ fontSize: 13, color: "#a02834", fontWeight: 600 }}>
                      Redirecting in {redirectCountdown}s...
                    </span>
                  )}
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

        <header style={{ marginBottom: 18 }}>
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
            Event Check-in
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
            Enter your details below to check in for Apostolic Shift.
          </p>
        </header>

        <div
          style={{
            border: "1px solid #e8e0d8",
            borderRadius: 18,
            background: "#ffffff",
            boxShadow: "0 16px 42px rgba(36, 34, 33, 0.08)",
            padding: 22,
          }}
        >
          <form onSubmit={onSubmit} style={{ display: "grid", gap: 14 }}>
            <label style={{ display: "grid", gap: 7 }}>
              <span
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  color: "#242221",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                Email address (Optional)
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (state === "error") { setState("idle"); setMessage(""); }
                }}
                placeholder="e.g. you@example.com"
                style={{
                  width: "100%",
                  border: "1px solid #b3a79b",
                  background: "#fafafa",
                  borderRadius: 11,
                  padding: "11px 12px",
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
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (state === "error") { setState("idle"); setMessage(""); }
                }}
                placeholder="e.g. 0801 234 5678"
                style={{
                  width: "100%",
                  border: "1px solid #b3a79b",
                  background: "#fafafa",
                  borderRadius: 11,
                  padding: "11px 12px",
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

            <button
              type="submit"
              disabled={state === "busy"}
              style={{
                marginTop: 10,
                border: 0,
                borderRadius: 12,
                padding: "12px 16px",
                background: "#f80",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.96rem",
                letterSpacing: "0.01em",
                fontFamily: "var(--font-poppins)",
                cursor: state === "busy" ? "not-allowed" : "pointer",
                transition: "transform 120ms ease, box-shadow 120ms ease, opacity 120ms ease",
                boxShadow: "0 12px 26px rgba(255, 136, 0, 0.32)",
                opacity: state === "busy" ? 0.75 : 1,
              }}
            >
              {state === "busy" ? "Checking in..." : "Check in"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
