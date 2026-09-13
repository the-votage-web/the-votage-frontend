"use client";

import { useState, type FormEvent, type ReactNode } from "react";

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
        <span className="absolute -top-[10px] right-[10px] z-10 rounded-full bg-[#f80] px-[10px] py-[2px] font-['Poppins:Medium',sans-serif] text-[10px] leading-[14px] text-white">
          Copied!
        </span>
      )}
    </div>
  );
}

/* ------------------------- Volunteer form ------------------------------ */

const LABEL_CLS = "font-['Poppins:Regular',sans-serif] text-[12px] text-[#242221] w-full";
const INPUT_CLS =
  "h-[45px] w-full border border-[#b3a79b] border-solid bg-[#fafafa] px-[12px] font-['Poppins:Regular',sans-serif] text-[14px] text-black outline-none transition-colors placeholder:text-[#9c9b9b] focus:border-[#f80]";

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
    <svg className="size-[18px] shrink-0" fill="none" height="18" viewBox="0 0 18 18" width="18">
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
      const formData = new FormData();
      formData.append("access_key", "97fc30f1-cae4-45e2-8325-764faf112caf");
      formData.append("full_name", fullName.trim());
      formData.append("phone_number", phone.trim());
      formData.append("serve_roles", roles.join(", "));
      formData.append("form_type", "Apostolic Shift Volunteer");

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
      className={`flex flex-col items-start gap-[24px] ${compact ? "w-full" : "w-[606px] shrink-0"}`}
      noValidate
      onSubmit={onSubmit}
    >
      {/* Full name + Phone number — real inputs */}
      <div className={`w-full ${compact ? "flex flex-col gap-[16px]" : "flex gap-[16px]"}`}>
        <label className="flex min-w-0 flex-1 flex-col gap-[5px]">
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
        <label className="flex min-w-0 flex-1 flex-col gap-[5px]">
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
      <div className="flex w-full flex-col items-start gap-[16px]">
        <span className={LABEL_CLS}>Where would you like to serve?</span>
        {SERVE_OPTIONS.map((role) => {
          const checked = roles.includes(role);
          return (
            <button
              aria-pressed={checked}
              className={`flex h-[45px] w-full cursor-pointer items-center gap-[16px] border border-solid px-[12px] text-left transition-colors ${
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
      <div className="flex w-full flex-col items-start gap-[16px]">
        <p className={`w-full font-['Poppins:Regular',sans-serif] text-[12px] ${statusClass}`}>{statusText}</p>
        <button
          className="flex cursor-pointer items-center disabled:cursor-not-allowed disabled:opacity-60"
          disabled={state === "busy"}
          type="submit"
        >
          {!compact && (
            <span className="flex h-[45px] w-[49px] flex-col items-center justify-center rounded-[27px] bg-[#f80] py-[18px] pl-[14px] pr-[15px]">
              <svg className="block size-full" fill="none" height="18" viewBox="0 0 25 18" width="25">
                <path d="M3.5 9.25H22.5M17.25 14.5L22.5 9.25L17.25 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </span>
          )}
          <span
            className={`flex h-[45px] items-center justify-center rounded-[36px] border border-[#f70] border-solid bg-[#f80] px-[10px] ${
              compact ? "w-[166px]" : "w-[176px]"
            }`}
          >
            <span className="whitespace-nowrap font-['Poppins:Medium',sans-serif] text-[16px] leading-[24px] text-white">
              {state === "busy" ? "Submitting…" : "Sign up to serve"}
            </span>
          </span>
        </button>
      </div>
    </form>
  );
}