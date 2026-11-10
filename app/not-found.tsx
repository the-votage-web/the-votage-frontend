import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center font-sans">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-sm font-semibold tracking-widest uppercase text-[#8B7355]">
          404 &bull; Page Not Found
        </span>
        <h1 className="font-copperplate text-4xl sm:text-5xl font-bold uppercase tracking-wider text-white">
          Lost in the Journey?
        </h1>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed">
          The page you are looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="primary" className="px-8 py-3 text-base font-semibold">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" className="px-8 py-3 text-base font-semibold">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
