"use client";

import { useEffect, useRef, type ReactNode } from "react";

/* Natural width of the desktop Figma canvas in `components/destop`. */
const CANVAS_WIDTH = 1440;

/**
 * Scales the fixed-width (1440px) desktop canvas down to the current
 * viewport so the page never overflows horizontally:
 *   • viewport >= 1440px → rendered at natural size (scale 1)
 *   • 768–1439px         → scaled down proportionally for an exact fit
 *
 * `transform` does not affect layout, so the wrapper's height is set to
 * the *visually scaled* canvas height (measured via ResizeObserver) to
 * avoid a blank gap at the bottom. While the canvas is hidden at the
 * mobile breakpoint its height is 0, so the wrapper collapses to nothing.
 */
export function DesktopFit({ children }: { children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const update = () => {
      const clientW = document.documentElement.clientWidth;
      if (clientW >= CANVAS_WIDTH) {
        inner.style.width = "100%";
        inner.style.transform = "";
        inner.style.transformOrigin = "";
        outer.style.height = "";
      } else {
        const scale = clientW / CANVAS_WIDTH;
        inner.style.width = `${CANVAS_WIDTH}px`;
        inner.style.transformOrigin = "top left";
        inner.style.transform = `scale(${scale})`;
        outer.style.height = `${Math.round(inner.offsetHeight * scale)}px`;
      }
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(inner);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={outerRef}
      className="w-full"
      style={{ overflowX: "clip" }}
    >
      <div
        ref={innerRef}
        className="w-full"
      >
        {children}
      </div>
    </div>
  );
}