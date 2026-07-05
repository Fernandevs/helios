import React from "react";
import { translations, Language } from "@/core/translations/dictionary";

interface CareerTimelineProps {
  currentLang: Language;
}

export function CareerTimeline({ currentLang }: CareerTimelineProps) {
  const t = translations[currentLang].career;
  const experiences = t.jobs.map((job, idx) => ({
    ...job,
    alignLeft: idx % 2 === 0,
  }));

  return (
    <section
      id="career-trajectory"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop scroll-mt-24"
    >
      <h2 className="text-headline-lg text-on-surface mb-stack-lg text-center font-semibold">
        {t.title}
      </h2>
      <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 orbit-path opacity-30 transform -translate-x-1/2"></div>
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative mb-stack-lg md:mb-section-gap">
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 border-4 border-background"></div>
            <div
              className={`md:w-1/2 ml-4 md:ml-0 ${
                exp.alignLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
              }`}
            >
              <span className="font-label-caps text-label-caps text-primary">
                {exp.period}
              </span>
              <h3 className="text-headline-md text-on-surface mt-1 font-semibold">
                {exp.title}
              </h3>
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-stack-sm">
                {exp.company}
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

