"use client";

import { useState, useEffect, type FormEvent, type ReactNode } from "react";

/* ------------------------------------------------------------------------
   Shared interactive pieces for the Apostolic Shift page.
   Used by BOTH the desktop (components/destop) and mobile
   (components/mobile) Figma canvases so behaviour stays in sync.
------------------------------------------------------------------------ */

/* --------------------------- Click to copy ----------------------------- */

/**
 * Wraps a Figma payment row (or any block) and copies `value` to the
 * clipboard when clicked — works on desktop and mobile, with a fallback
 * for non-secure contexts and a transient "Copied!" badge.
 */
export function CopyRow({ value, children }: { value: string; children: ReactNode }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Fallback for browsers/contexts where the async clipboard API is
      // unavailable (e.g. plain http).
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="relative cursor-pointer select-none" onClick={copy} role="button" title={`Click to copy: ${value}`}>
      {children}
      {copied && (
        <span className="absolute -top-2.5 right-2.5 z-10 rounded-full bg-[#f80] px-2.5 py-0.5 font-['Poppins:Medium',sans-serif] text-[10px] leading-3.5 text-white">
          Copied!
        </span>
      )}
    </div>
  );
}

/* ------------------------- Volunteer form ------------------------------ */

const LABEL_CLS = "font-['Poppins:Regular',sans-serif] text-[12px] text-[#242221] w-full";
const INPUT_CLS =
  "h-11.25 w-full border border-[#b3a79b] border-solid bg-[#fafafa] px-3 font-['Poppins:Regular',sans-serif] text-[14px] text-black outline-none transition-colors placeholder:text-[#9c9b9b] focus:border-[#f80]";

const SERVE_OPTIONS = [
  "Ushering & protocol",
  "Media & live stream",
  "Hospitality",
  "Prayer team",
  "Choir",
  "Follow-up team",
  "Anywhere needed",
] as const;

function BoxIcon({ checked }: { checked: boolean }) {
  return (
    <svg className="size-4.5 shrink-0" fill="none" height="18" viewBox="0 0 18 18" width="18">
      <rect fill={checked ? "#FF8800" : "none"} height="14" rx="2" stroke="#FF8800" strokeWidth="2" width="14" x="2" y="2" />
      {checked && <path d="M5.5 9.2L8 11.7L12.8 6.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />}
    </svg>
  );
}

type FormState = "idle" | "busy" | "success" | "error";

/**
 * The "Be a worker" sign-up form. Full name + phone number are real
 * inputs, the serve areas are clickable checkboxes, and the
 * "Sign up to serve" pill submits the form to /api/submit (Google
 * Sheets pipeline, formType: APOSTOLIC_SHIFT_VOLUNTEER).
 */
export function VolunteerForm({ compact = false }: { compact?: boolean }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [roles, setRoles] = useState<string[]>([]);
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  function toggleRole(role: string) {
    setRoles((current) =>
      current.includes(role) ? current.filter((r) => r !== role) : [...current, role]
    );
    if (state === "error") {
      setState("idle");
      setMessage("");
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "busy") return;

    if (!fullName.trim() || !phone.trim()) {
      setState("error");
      setMessage("Please enter your full name and phone number.");
      return;
    }
    if (roles.length === 0) {
      setState("error");
      setMessage("Please select at least one area you would like to serve in.");
      return;
    }

    setState("busy");
    setMessage("");
    try {
      const trimmedName = fullName.trim();
      const trimmedPhone = phone.trim();
      const selectedRoles = roles.join(", ");
      const submissionTime = new Date().toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
      });

      const formData = new FormData();
      formData.append("access_key", "97fc30f1-cae4-45e2-8325-764faf112caf");
      formData.append("subject", `🙌 [Apostolic Shift 2026] New Volunteer Sign-Up — ${trimmedName}`);
      formData.append("from_name", "The VOTAGE Church (Apostolic Shift)");

      // Clean key-value overview fields for the email summary table
      formData.append("Event", "Apostolic Shift Conference 2026");
      formData.append("Volunteer Name", trimmedName);
      formData.append("Phone / WhatsApp", trimmedPhone);
      formData.append("Department(s) to Serve", selectedRoles);
      formData.append(
        "Why You Received This",
        "A website visitor submitted the volunteer workforce sign-up form on the Apostolic Shift conference page."
      );
      formData.append(
        "Action Required",
        `Please call or WhatsApp ${trimmedName} at ${trimmedPhone} to confirm their unit placement and briefing schedule.`
      );
      formData.append("Submitted At", submissionTime);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;
      if (response.ok && data?.success) {
        setState("success");
        setMessage("You have been signed up — a team lead will reach out to confirm your role.");
        setFullName("");
        setPhone("");
        setRoles([]);
      } else {
        setState("error");
        setMessage(data?.message || "Submission failed. Please try again.");
      }
    } catch {
      setState("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  const statusClass =
    state === "success" ? "text-[#1a7f37]" : state === "error" ? "text-[#d43c00]" : "text-[#5c5854]";
  const statusText =
    state === "success"
      ? "You have been signed up — a team lead will reach out to confirm your role."
      : state === "error"
        ? message
        : "A team lead will reach out to confirm your role";

  return (
    <form
      className={`flex flex-col items-start gap-6 ${compact ? "w-full" : "w-full max-w-155 shrink-0"}`}
      noValidate
      onSubmit={onSubmit}
    >
      {/* Full name + Phone number — real inputs */}
      <div className={`w-full ${compact ? "flex flex-col gap-4" : "flex gap-4"}`}>
        <label className="flex min-w-0 flex-1 flex-col gap-1.25">
          <span className={LABEL_CLS}>Full name</span>
          <input
            className={INPUT_CLS}
            name="fullName"
            onChange={(event) => {
              setFullName(event.target.value);
              if (state === "error") { setState("idle"); setMessage(""); }
            }}
            placeholder="Enter your full name"
            required
            type="text"
            value={fullName}
          />
        </label>
        <label className="flex min-w-0 flex-1 flex-col gap-1.25">
          <span className={LABEL_CLS}>Phone number</span>
          <input
            className={INPUT_CLS}
            inputMode="tel"
            name="phone"
            onChange={(event) => {
              setPhone(event.target.value);
              if (state === "error") { setState("idle"); setMessage(""); }
            }}
            placeholder="e.g. 0801 234 5678"
            required
            type="tel"
            value={phone}
          />
        </label>
      </div>

      {/* Serve areas — clickable checkboxes */}
      <div className="flex w-full flex-col items-start gap-4">
        <span className={LABEL_CLS}>Where would you like to serve?</span>
        {SERVE_OPTIONS.map((role) => {
          const checked = roles.includes(role);
          return (
            <button
              aria-pressed={checked}
              className={`flex h-11.25 w-full cursor-pointer items-center gap-4 border border-solid px-3 text-left transition-colors ${
                checked ? "border-[#f80] bg-[#fff3eb]" : "border-[#b3a79b] bg-transparent"
              }`}
              key={role}
              onClick={() => toggleRole(role)}
              type="button"
            >
              <BoxIcon checked={checked} />
              <span className="whitespace-nowrap font-['Poppins:Regular',sans-serif] text-[14px] text-black">
                {role}
              </span>
            </button>
          );
        })}
      </div>

      {/* Note / status + submit CTA */}
      <div className="flex w-full flex-col items-start gap-4">
        <p className={`w-full font-['Poppins:Regular',sans-serif] text-[12px] ${statusClass}`}>{statusText}</p>
        <button
          className="group flex cursor-pointer items-center disabled:cursor-not-allowed disabled:opacity-60 transition-transform active:scale-[0.98]"
          disabled={state === "busy"}
          type="submit"
        >
          {!compact && (
            <span className="flex size-13 items-center justify-center rounded-full bg-[#f80] group-hover:bg-[#ff9500] shadow-md transition-all shrink-0 mr-3">
              <svg className="size-6 text-white transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          )}
          <span
            className={`flex h-13 items-center justify-center rounded-full bg-[#f80] group-hover:bg-[#ff9500] px-9 shadow-md transition-all ${
              compact ? "w-full" : ""
            }`}
          >
            <span className="whitespace-nowrap font-['Poppins:Medium',sans-serif] text-[17px] text-white">
              {state === "busy" ? "Submitting…" : "Sign up to serve"}
            </span>
          </span>
        </button>
      </div>
    </form>
  );
}

/* ------------------------ Registration form ---------------------------- */

export function RegistrationForm({ compact = false }: { compact?: boolean }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [day, setDay] = useState("Both days");
  const [attendees, setAttendees] = useState("1");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [duplicateCountdown, setDuplicateCountdown] = useState<number | null>(null);

  // Pre-fill phone if passed from check-in page
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const p = params.get("phone");
    if (p) {
      setPhone(p);
      const el = document.getElementById("register");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Automatic redirect to check-in when already registered
  useEffect(() => {
    if (duplicateCountdown === null) return;
    if (duplicateCountdown <= 0) {
      window.location.href = `/apostolic-shift/checkin?phone=${encodeURIComponent(phone.trim())}`;
      return;
    }
    const timer = setTimeout(() => {
      setDuplicateCountdown((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);
    return () => clearTimeout(timer);
  }, [duplicateCountdown, phone]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "busy") return;

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setState("error");
      setIsDuplicate(false);
      setDuplicateCountdown(null);
      setMessage("Please fill in all required fields (Full name, Phone number, Email address).");
      return;
    }

    setState("busy");
    setMessage("");
    setIsDuplicate(false);
    setDuplicateCountdown(null);

    try {
      const response = await fetch("/api/apostolic-shift/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName.trim(),
          phone_number: phone.trim(),
          email: email.trim(),
          city: city.trim(),
          state: stateName.trim(),
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        detail?: string;
        error?: string;
      } | null;

      if (response.status === 201) {
        setState("success");
        setIsDuplicate(false);
        setDuplicateCountdown(null);
        setMessage(data?.detail || "Registration successful! We look forward to seeing you.");
        setFullName("");
        setPhone("");
        setEmail("");
        setCity("");
        setStateName("");
        setDay("Both days");
        setAttendees("1");
      } else if (response.status === 409) {
        setState("error");
        setIsDuplicate(true);
        setMessage(
          data?.detail || "You are already registered for this event. Redirecting you to check in..."
        );
        // Start 2-second countdown to auto-navigate
        setDuplicateCountdown(2);
      } else {
        setState("error");
        setIsDuplicate(false);
        setDuplicateCountdown(null);
        setMessage(data?.detail || "Registration failed. Please check your details and try again.");
      }
    } catch {
      setState("error");
      setIsDuplicate(false);
      setDuplicateCountdown(null);
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  const statusClass =
    state === "success" ? "text-[#1a7f37]" : state === "error" ? "text-[#d43c00]" : "text-[#5c5854]";

  return (
    <form
      className={`flex flex-col items-start gap-4 ${compact ? "w-full" : "w-full max-w-155"}`}
      noValidate
      onSubmit={onSubmit}
    >
      {/* Full name */}
      <label className="flex w-full flex-col gap-1.25">
        <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#262422]">Full name *</span>
        <input
          className="h-11.25 w-full border border-[#3e2100]/40 border-solid bg-white px-3.5 font-['Poppins:Regular',sans-serif] text-[14px] text-black outline-none transition-colors placeholder:text-[#9c9b9b] focus:border-[#f80]"
          name="fullName"
          onChange={(e) => {
            setFullName(e.target.value);
            if (state === "error") { setState("idle"); setMessage(""); setIsDuplicate(false); }
          }}
          placeholder="Enter your full name"
          required
          type="text"
          value={fullName}
        />
      </label>

      {/* Phone number */}
      <label className="flex w-full flex-col gap-1.25">
        <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#262422]">Phone number *</span>
        <input
          className="h-11.25 w-full border border-[#3e2100]/40 border-solid bg-white px-3.5 font-['Poppins:Regular',sans-serif] text-[14px] text-black outline-none transition-colors placeholder:text-[#9c9b9b] focus:border-[#f80]"
          inputMode="tel"
          name="phone"
          onChange={(e) => {
            setPhone(e.target.value);
            if (state === "error") { setState("idle"); setMessage(""); setIsDuplicate(false); }
          }}
          placeholder="e.g. 0801 234 5678"
          required
          type="tel"
          value={phone}
        />
      </label>

      {/* Email address */}
      <label className="flex w-full flex-col gap-1.25">
        <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#262422]">Email address *</span>
        <input
          className="h-11.25 w-full border border-[#3e2100]/40 border-solid bg-white px-3.5 font-['Poppins:Regular',sans-serif] text-[14px] text-black outline-none transition-colors placeholder:text-[#9c9b9b] focus:border-[#f80]"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") { setState("idle"); setMessage(""); setIsDuplicate(false); }
          }}
          placeholder="Enter your email address"
          required
          type="email"
          value={email}
        />
      </label>

      {/* City & State (Optional) */}
      <div className="flex w-full gap-3">
        <label className="flex flex-1 flex-col gap-1.25">
          <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#262422]">City</span>
          <input
            className="h-11.25 w-full border border-[#3e2100]/40 border-solid bg-white px-3.5 font-['Poppins:Regular',sans-serif] text-[14px] text-black outline-none transition-colors placeholder:text-[#9c9b9b] focus:border-[#f80]"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Benin City"
            type="text"
            value={city}
          />
        </label>
        <label className="flex flex-1 flex-col gap-1.25">
          <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#262422]">State</span>
          <input
            className="h-11.25 w-full border border-[#3e2100]/40 border-solid bg-white px-3.5 font-['Poppins:Regular',sans-serif] text-[14px] text-black outline-none transition-colors placeholder:text-[#9c9b9b] focus:border-[#f80]"
            name="state"
            onChange={(e) => setStateName(e.target.value)}
            placeholder="e.g. Edo"
            type="text"
            value={stateName}
          />
        </label>
      </div>

      {/* Day attending */}
      <label className="flex w-full flex-col gap-1.25">
        <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#262422]">Will you be attending</span>
        <div className="relative h-11.25 w-full border border-[#3e2100]/40 border-solid bg-white">
          <select
            className="size-full appearance-none bg-transparent px-3.5 font-['Poppins:Regular',sans-serif] text-[14px] text-[#262422] outline-none cursor-pointer pr-10"
            name="day"
            onChange={(e) => setDay(e.target.value)}
            value={day}
          >
            <option value="Both days">Both days</option>
            <option value="Day 1 (22nd September)">Day 1 (22nd September)</option>
            <option value="Day 2 (23rd September)">Day 2 (23rd September)</option>
          </select>
          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
            <svg fill="#FF8800" height="10" viewBox="0 0 12 10" width="12">
              <path d="M6 10L0 0h12L6 10z" />
            </svg>
          </div>
        </div>
      </label>

      {/* Number of Attendees */}
      <label className="flex w-full flex-col gap-1.25">
        <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#262422]">Number of Attendees</span>
        <input
          className="h-11.25 w-full border border-[#3e2100]/40 border-solid bg-white px-3.5 font-['Poppins:Regular',sans-serif] text-[14px] text-black outline-none transition-colors placeholder:text-[#9c9b9b] focus:border-[#f80]"
          min="1"
          name="attendees"
          onChange={(e) => setAttendees(e.target.value)}
          type="number"
          value={attendees}
        />
      </label>

      {/* Status message */}
      {message && (
        <div className="flex flex-col gap-1.5 w-full">
          <p className={`w-full font-['Poppins:Regular',sans-serif] text-[13px] ${statusClass}`}>
            {message}
          </p>
          {isDuplicate && (
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={`/apostolic-shift/checkin?phone=${encodeURIComponent(phone.trim())}`}
                className="inline-flex items-center gap-1.5 text-[13px] font-['Poppins:Medium',sans-serif] text-[#f80] underline hover:text-[#d43c00] transition-colors"
              >
                Proceed to Check-in Now →
              </a>
              {duplicateCountdown !== null && (
                <span className="text-[12px] text-[#888]">
                  (Redirecting automatically in {duplicateCountdown}s...)
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2.5">
        <button
          className="group flex cursor-pointer items-center disabled:cursor-not-allowed disabled:opacity-60 transition-transform active:scale-[0.98]"
          disabled={state === "busy"}
          type="submit"
        >
          {!compact && (
            <span className="flex size-13 items-center justify-center rounded-full bg-[#f80] group-hover:bg-[#ff9500] shadow-md transition-all shrink-0 mr-3">
              <svg className="size-6 text-white transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          )}
          <span
            className={`flex h-13 items-center justify-center rounded-full bg-[#f80] group-hover:bg-[#ff9500] px-9 shadow-md transition-all ${
              compact ? "w-full" : ""
            }`}
          >
            <span className="whitespace-nowrap font-['Poppins:Medium',sans-serif] text-[17px] uppercase tracking-wider text-white">
              {state === "busy" ? "Submitting…" : "SUBMIT"}
            </span>
          </span>
        </button>
      </div>
    </form>
  );
}