import { Suspense } from "react";
import { CheckinRegisterPortal } from "../components/checkin-register-portal";

export const metadata = {
  title: "Check-in & Registration | Apostolic Shift Conference 2026",
  description:
    "Check in or register for Apostolic Shift Conference 2026. Free admission, prayer, worship, and encounter.",
};

export default function ApostolicShiftCheckinPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#fffaf7" }} />}>
      <CheckinRegisterPortal initialTab="checkin" />
    </Suspense>
  );
}
