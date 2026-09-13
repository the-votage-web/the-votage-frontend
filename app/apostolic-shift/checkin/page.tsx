"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormState = "idle" | "busy" | "success" | "error";

export default function ApostolicShiftCheckinPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "busy") return;

    setState("busy");
    setMessage("");

    // TODO: Replace with actual API endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setState("success");
      setMessage("You have been checked in successfully!");
      setEmail("");
      setPhone("");
    } catch {
      setState("error");
      setMessage("Check-in failed. Please try again.");
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
            borderRadius: 12,
            padding: "12px 14px",
            fontSize: 14,
            fontWeight: 700,
            color: "#842029",
            background: "#f8d7da",
            border: "1px solid #f5c2c7",
            boxShadow: "0 10px 24px rgba(0, 0, 0, 0.14)",
          }}
        >
          {message}
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
                Email address
              </span>
              <input
                type="email"
                required
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
