import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-1">
        <Hero />
        <ServicesGrid />
        <CTASection />
      </main>
    </div>
  );
}
