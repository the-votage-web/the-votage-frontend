"use client";

import { type ReactNode } from "react";

/**
 * Responsive desktop container wrapper for Apostolic Shift.
 * Uses overflowX: clip to prevent horizontal scrollbars while preserving
 * standard CSS position: sticky behavior for headers and navigation bars.
 */
export function DesktopFit({ children }: { children: ReactNode }) {
  return (
    <div className="w-full" style={{ overflowX: "clip" }}>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}