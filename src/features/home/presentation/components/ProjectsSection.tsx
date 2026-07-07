import React from "react";
import { Activity, Terminal } from "lucide-react";
import {
  LargeProjectCard,
  SmallProjectCard,
  MediumProjectCard,
} from "./ProjectCard";
import { translations, Language } from "@/core/application/translations/dictionary";

interface ProjectsSectionProps {
  currentLang: Language;
}

export function ProjectsSection({ currentLang }: ProjectsSectionProps) {
  const t = translations[currentLang].projects;

  return (
    <section
      id="featured-projects"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap scroll-mt-24"
    >
      <div className="flex justify-between items-end mb-stack-lg">
        <div>
          <h2 className="text-headline-lg text-on-surface font-semibold">
            {t.title}
          </h2>
          <p className="text-body-md text-on-surface-variant">
            {t.subtitle}
          </p>
        </div>
        <a
          className="font-label-caps text-label-caps text-primary hover:underline transition-all"
          href="#"
        >
          {t.viewAll}
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <LargeProjectCard currentLang={currentLang} />
        <SmallProjectCard
          icon={Activity}
          title={t.cardSmall1.title}
          description={t.cardSmall1.description}
          tech="Rust / WebAssembly"
        />
        <SmallProjectCard
          icon={Terminal}
          title={t.cardSmall2.title}
          description={t.cardSmall2.description}
          tech="React / TypeScript"
        />
        <MediumProjectCard currentLang={currentLang} />
      </div>
    </section>
  );
}

