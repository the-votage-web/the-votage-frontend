import "./apostolic-shift.css";
import DesktopIndex from "./destop";
import MobileIndex from "./mobile";
import { DesktopFit } from "./desktop-fit";

/* ---------------------------------------------------------------------
   Apostolic Shift — breakpoint-based responsive page.

   Both Figma canvases are rendered and toggled at the 768px (md)
   breakpoint:
     • Desktop — the 1440px canvas from `components/destop` (>= 768px),
       scaled down by `DesktopFit` to exactly fit viewports between
       768–1439px so the page never overflows horizontally.
     • Mobile — the 390px canvas from `components/mobile` (< 768px).

   Both variants share the same assets in /public/img/apostolic-shift
   and the same font faces declared in apostolic-shift.css, so their
   styling can never drift apart.
--------------------------------------------------------------------- */
export function ApostolicShiftPage() {
  return (
    <main>
      {/* Desktop canvas (1440px Figma frame), fit to the viewport width */}
      <DesktopFit>
        <div className="hidden md:block">
          <DesktopIndex />
        </div>
      </DesktopFit>

      {/* Mobile canvas (390px Figma frame) */}
      <div className="md:hidden" style={{ overflowX: "clip" }}>
        <MobileIndex />
      </div>
    </main>
  );
}