import type { Metadata } from "next";
import { Header } from "@/features/home/presentation/components/Header";
import { Footer } from "@/features/home/presentation/components/Footer";
import { HeroSection } from "@/features/home/presentation/components/HeroSection";
import { ProjectsSection } from "@/features/home/presentation/components/ProjectsSection";
import { TechZenithSection } from "@/features/home/presentation/components/TechZenithSection";
import { CareerTimeline } from "@/features/home/presentation/components/CareerTimeline";
import { ParticlesBackground } from "@/core/presentation/components/ParticlesBackground";
import { Constellations } from "@/core/presentation/components/Constellations";
import { SpotlightEffect } from "@/core/presentation/components/SpotlightEffect";
import { ScrollReveal } from "@/core/presentation/components/ScrollReveal";
import { projectsRepositoryImpl } from "@/features/projects/infrastructure/repositories/projects.repository.impl";

export const metadata: Metadata = {
  title: "Iván Fernando | Digital Universe Architect",
  description:
    "Iván Fernando crafts high-density software architectures that bridge the gap between abstract mathematical models and production-ready resilience.",
};

type PageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function Home({ searchParams }: PageProps) {
  const { lang = "en" } = await searchParams;
  const currentLang = lang === "es" ? "es" : "en";
  const featuredProjects = await projectsRepositoryImpl.getFeatured();

  return (
    <div className="relative min-h-screen bg-background text-on-background bg-star-map bg-noise selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <ParticlesBackground />
      <Constellations />
      <SpotlightEffect />
      <Header currentLang={currentLang} />
      <main className="pt-32 pb-section-gap">
        <ScrollReveal>
          <HeroSection currentLang={currentLang} />
        </ScrollReveal>
        <ScrollReveal>
          <ProjectsSection currentLang={currentLang} projects={featuredProjects} />
        </ScrollReveal>
        <ScrollReveal>
          <TechZenithSection currentLang={currentLang} />
        </ScrollReveal>
        <ScrollReveal>
          <CareerTimeline currentLang={currentLang} />
        </ScrollReveal>
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
}

