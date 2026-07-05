import React from "react";

export function CareerTimeline() {
  const experiences = [
    {
      period: "2021 — PRESENT",
      title: "Lead Systems Engineer",
      company: "Astra-Tech Solutions",
      description:
        "Spearheading the migration of monolith services to a decentralized micro-frontend architecture using Next.js and Go.",
      alignLeft: true,
    },
    {
      period: "2018 — 2021",
      title: "Senior Backend Developer",
      company: "CloudScale Data",
      description:
        "Architected a proprietary data streaming platform that handles 500k events/sec with minimal jitter.",
      alignLeft: false,
    },
    {
      period: "2014 — 2018",
      title: "Software Engineer",
      company: "Innova Soft",
      description:
        "Implemented responsive dashboard systems and integrated 3rd party financial APIs for global fintech clients.",
      alignLeft: true,
    },
  ];

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <h2 className="text-headline-lg text-on-surface mb-stack-lg text-center font-semibold">
        Career Trajectory
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
