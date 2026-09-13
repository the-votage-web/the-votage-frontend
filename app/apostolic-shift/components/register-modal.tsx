"use client";

import { useState, useEffect, type FormEvent } from "react";
import { createPortal } from "react-dom";

const INPUT_CLS =
  "h-[42px] w-full border border-[#b3a79b] border-solid bg-[#fafafa] px-[12px] font-['Poppins:Regular',sans-serif] text-[14px] text-black outline-none transition-colors placeholder:text-[#9c9b9b] focus:border-[#f80]";

const LABEL_CLS =
  "font-['Poppins:Regular',sans-serif] text-[12px] text-[#242221] w-full";

type FormState = "idle" | "busy" | "success" | "error";

export function RegisterModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setFullName("");
      setPhone("");
      setEmail("");
      setCity("");
      setState("");
      setCountry("");
      setFormState("idle");
      setMessage("");
    }
  }, [open]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormState("busy");
    setMessage("");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "APOSTOLIC_SHIFT_REGISTER",
          fullName,
          phone,
          email,
          city,
          state,
          country,
        }),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      setFormState("success");
      setMessage("Registration successful!");
      window.setTimeout(() => onClose(), 1500);
    } catch {
      setFormState("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (!open) return null;

  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[480px] rounded-[20px] bg-white p-[32px] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          className="absolute right-[16px] top-[16px] flex size-[32px] cursor-pointer items-center justify-center rounded-full text-[20px] text-[#9c9b9b] transition-colors hover:bg-[#f5f5f5] hover:text-black"
          onClick={onClose}
          type="button"
        >
          x
        </button>
        <h2 className="mb-[24px] font-['Copperplate:Bold',sans-serif] text-[24px] uppercase text-black">
          Register for Apostolic Shift
        </h2>
        <form className="flex w-full flex-col gap-[16px]" onSubmit={handleSubmit}>
          <label className="flex min-w-0 flex-1 flex-col gap-[5px]">
            <span className={LABEL_CLS}>Full name</span>
            <input
              className={INPUT_CLS}
              name="fullName"
              onChange={(e) => { setFullName(e.target.value); if (formState === "error") { setFormState("idle"); setMessage(""); } }}
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
              onChange={(e) => { setPhone(e.target.value); if (formState === "error") { setFormState("idle"); setMessage(""); } }}
              placeholder="e.g. 0801 234 5678"
              required
              type="tel"
              value={phone}
            />
          </label>
          <label className="flex min-w-0 flex-1 flex-col gap-[5px]">
            <span className={LABEL_CLS}>Email</span>
            <input
              className={INPUT_CLS}
              name="email"
              onChange={(e) => { setEmail(e.target.value); if (formState === "error") { setFormState("idle"); setMessage(""); } }}
              placeholder="you@example.com"
              required
              type="email"
              value={email}
            />
          </label>
          <div className="h-[1px] w-full bg-[#e0dcd8]" />
          <div className="flex w-full gap-[12px]">
            <label className="flex min-w-0 flex-1 flex-col gap-[5px]">
              <span className={LABEL_CLS}>City</span>
              <input
                className={INPUT_CLS}
                name="city"
                onChange={(e) => { setCity(e.target.value); if (formState === "error") { setFormState("idle"); setMessage(""); } }}
                placeholder="City"
                required
                type="text"
                value={city}
              />
            </label>
            <label className="flex min-w-0 flex-1 flex-col gap-[5px]">
              <span className={LABEL_CLS}>State</span>
              <input
                className={INPUT_CLS}
                name="state"
                onChange={(e) => { setState(e.target.value); if (formState === "error") { setFormState("idle"); setMessage(""); } }}
                placeholder="State"
                required
                type="text"
                value={state}
              />
            </label>
            <label className="flex min-w-0 flex-1 flex-col gap-[5px]">
              <span className={LABEL_CLS}>Country</span>
              <input
                className={INPUT_CLS}
                name="country"
                onChange={(e) => { setCountry(e.target.value); if (formState === "error") { setFormState("idle"); setMessage(""); } }}
                placeholder="Country"
                required
                type="text"
                value={country}
              />
            </label>
          </div>
          {message && (
            <p className={`w-full font-['Poppins:Regular',sans-serif] text-[12px] ${formState === "success" ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
          <button
            className="flex h-[48px] w-full cursor-pointer items-center justify-center rounded-[36px] bg-[#f80] font-['Poppins:Medium',sans-serif] text-[16px] text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
            disabled={formState === "busy"}
            type="submit"
          >
            {formState === "busy" ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
