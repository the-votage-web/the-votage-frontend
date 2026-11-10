"use client";

import { useState, useEffect, type FormEvent } from "react";
import { createPortal } from "react-dom";

const INPUT_CLS =
  "h-10.5 w-full border border-[#b3a79b] border-solid bg-[#fafafa] px-3 font-['Poppins:Regular',sans-serif] text-[14px] text-black outline-none transition-colors placeholder:text-[#9c9b9b] focus:border-[#f80]";

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

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setFormState("error");
      setMessage("Please fill in all required fields (Full name, Phone number, Email).");
      return;
    }

    try {
      const res = await fetch("/api/apostolic-shift/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName.trim(),
          phone_number: phone.trim(),
          email: email.trim(),
          city: city.trim(),
          state: state.trim(),
          country: country.trim() || "Nigeria",
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.status === 201) {
        setFormState("success");
        setMessage(data?.detail || "Registration successful! We look forward to seeing you.");
        window.setTimeout(() => onClose(), 2200);
      } else if (res.status === 409) {
        setFormState("error");
        setMessage(
          data?.detail || "You are already registered for this event! You can proceed directly to check-in."
        );
      } else {
        setFormState("error");
        setMessage(data?.detail || "Registration failed. Please check your details and try again.");
      }
    } catch {
      setFormState("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  if (!open) return null;

  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-120 rounded-[20px] bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          className="absolute right-4 top-4 flex size-8 cursor-pointer items-center justify-center rounded-full text-[20px] text-[#9c9b9b] transition-colors hover:bg-[#f5f5f5] hover:text-black"
          onClick={onClose}
          type="button"
        >
          x
        </button>
        <h2 className="mb-6 font-['Copperplate:Bold',sans-serif] text-[24px] uppercase text-black">
          Register for Apostolic Shift
        </h2>
        <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex min-w-0 flex-1 flex-col gap-1.25">
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
          <label className="flex min-w-0 flex-1 flex-col gap-1.25">
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
          <label className="flex min-w-0 flex-1 flex-col gap-1.25">
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
          <div className="h-px w-full bg-[#e0dcd8]" />
          <div className="flex w-full gap-3">
            <label className="flex min-w-0 flex-1 flex-col gap-1.25">
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
            <label className="flex min-w-0 flex-1 flex-col gap-1.25">
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
            <label className="flex min-w-0 flex-1 flex-col gap-1.25">
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
            className="flex h-12 w-full cursor-pointer items-center justify-center rounded-[36px] bg-[#f80] font-['Poppins:Medium',sans-serif] text-[16px] text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
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
