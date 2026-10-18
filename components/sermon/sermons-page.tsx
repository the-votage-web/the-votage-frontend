"use client";

import { SermonHero } from "./sermon-hero";
import MessageSection from "./message-section";
import type { Message } from "./message";

interface SermonsPageClientProps {
  initialSermons?: Message[];
}

export default function SermonsPageClient({ initialSermons }: SermonsPageClientProps) {
  return (
    <main className="min-h-screen">
      <SermonHero />
      <MessageSection initialSermons={initialSermons} />
    </main>
  );
}
