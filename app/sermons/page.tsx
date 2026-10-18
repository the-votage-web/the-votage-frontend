import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import SermonsPageClient from "@/components/sermon/sermons-page";
import { getSermons } from "@/lib/contentful";

export default async function SermonsPage() {
  const sermons = await getSermons();

  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <SermonsPageClient initialSermons={sermons} />
      <Footer />
    </div>
  );
}
