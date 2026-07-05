import type { Metadata } from "next";
import { Header } from "@/features/home/presentation/components/Header";
import { Footer } from "@/features/home/presentation/components/Footer";
import { HeroSection } from "@/features/home/presentation/components/HeroSection";
import { ProjectsSection } from "@/features/home/presentation/components/ProjectsSection";
import { TechZenithSection } from "@/features/home/presentation/components/TechZenithSection";
import { CareerTimeline } from "@/features/home/presentation/components/CareerTimeline";
import { ParticlesBackground } from "@/core/components/ParticlesBackground";
import { SpotlightEffect } from "@/core/components/SpotlightEffect";
import { ScrollReveal } from "@/core/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Iván Fernando | Digital Universe Architect",
  description:
    "Iván Fernando crafts high-density software architectures that bridge the gap between abstract mathematical models and production-ready resilience.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-on-background bg-star-map bg-noise selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <ParticlesBackground />
      <SpotlightEffect />
      <Header />
      <main className="pt-32 pb-section-gap">
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>
        <ScrollReveal>
          <TechZenithSection />
        </ScrollReveal>
        <ScrollReveal>
          <CareerTimeline />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
