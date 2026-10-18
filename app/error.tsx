"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected client/server errors
    console.error("[Votage Application Error]:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center font-sans">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-sm font-semibold tracking-widest uppercase text-amber-500">
          Temporary Issue
        </span>
        <h1 className="font-copperplate text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
          Something went wrong
        </h1>
        <p className="text-white/70 text-base leading-relaxed">
          We encountered an unexpected error while loading this page. You can try refreshing or returning to the home page.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            onClick={() => reset()}
            className="px-8 py-3 text-base font-semibold"
          >
            Try Again
          </Button>
          <Button asChild variant="outline" className="px-8 py-3 text-base font-semibold">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
