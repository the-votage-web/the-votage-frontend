import { Suspense } from "react";
import { MrcCheckinRegisterPortal } from "../components/mrc-checkin-register-portal";

export const metadata = {
  title: "Check-in & Registration | My Relationship Conference (MRC)",
  description:
    "Check in or register for My Relationship Conference (MRC). Free admission, prayer, worship, and encounter.",
};

export default function MrcCheckinPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100dvh", background: "#fffaf7" }} />}>
      <MrcCheckinRegisterPortal initialTab="checkin" />
    </Suspense>
  );
}
