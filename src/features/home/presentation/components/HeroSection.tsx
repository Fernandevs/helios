import React from "react";
import { translations, Language } from "@/features/core/application/translations/dictionary";
import { Helios } from "@/features/core/presentation/components/Helios";

interface HeroSectionProps {
  currentLang: Language;
}

export function HeroSection({ currentLang }: HeroSectionProps) {
  const t = translations[currentLang].hero;

  return (
    <section
      id="inicio"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-stack-sm mb-stack-md">
            <span className="w-12 h-px bg-primary"></span>
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em]">
              {t.tag}
            </span>
          </div>
          <h1 className="text-display text-on-surface mb-stack-lg max-w-4xl">
            {t.title}
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl font-sans">
            {t.description}
          </p>
          <div className="flex flex-wrap gap-stack-lg">
            <div className="flex flex-col">
              <span className="text-headline-md text-primary font-bold">10+</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                {t.stats.experience}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-headline-md text-primary font-bold">50+</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                {t.stats.projects}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-headline-md text-primary font-bold">12</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                {t.stats.certifications}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 relative flex justify-center">
          {/* Glowing Halo Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-primary/30 flex items-center justify-center p-4 shadow-[0_0_40px_rgba(192,193,255,0.15)] bg-surface-container-low/40 backdrop-blur-md">
            <div className="absolute inset-0 animate-spin-slow border-t border-primary/50 rounded-full"></div>
            <div className="w-full h-full rounded-full overflow-hidden border border-primary/20 relative flex items-center justify-center">
              <Helios className="w-full h-full text-primary p-6 animate-pulse duration-3000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

