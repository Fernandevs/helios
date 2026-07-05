import React from "react";

export function TechZenithSection() {
  const skills = [
    { name: "Distributed Systems", percentage: 95, width: "w-[95%]" },
    { name: "Cloud Architecture", percentage: 90, width: "w-[90%]" },
    { name: "Full-stack Frameworks", percentage: 85, width: "w-[85%]" },
  ];

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center">
        <div>
          <h2 className="text-headline-lg text-on-surface mb-stack-md font-semibold">
            Technological Zenith
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-stack-lg font-sans">
            Navigating the vast expanse of modern development with a specialized
            toolset calibrated for precision and scale.
          </p>
          <div className="space-y-stack-lg">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-stack-sm">
                  <span className="font-label-caps text-on-surface uppercase">
                    {skill.name}
                  </span>
                  <span className="font-label-caps text-primary">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-surface-container-high h-1 overflow-hidden rounded">
                  <div className={`bg-primary h-full ${skill.width}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0 border border-primary/10 rounded-full animate-pulse"></div>
          <div
            className="absolute inset-8 border border-primary/5 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(192,193,255,0.8)]"></div>
              <span className="font-label-caps text-[10px] mt-2">K8S</span>
            </div>
            <div className="absolute bottom-1/4 right-0 flex flex-col items-center">
              <div className="w-2 h-2 bg-tertiary rounded-full shadow-[0_0_10px_rgba(79,219,200,0.8)]"></div>
              <span className="font-label-caps text-[10px] mt-2">RUST</span>
            </div>
            <div className="absolute bottom-1/4 left-0 flex flex-col items-center">
              <div className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_rgba(221,183,255,0.8)]"></div>
              <span className="font-label-caps text-[10px] mt-2">NODE</span>
            </div>
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              viewBox="0 0 400 400"
            >
              <path
                className="text-primary"
                d="M200,40 L350,300 L50,300 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              ></path>
              <path
                className="text-primary"
                d="M200,40 L200,300"
                fill="none"
                stroke="currentColor"
                strokeDasharray="4 4"
                strokeWidth="0.5"
              ></path>
            </svg>
            <div className="text-center z-10">
              <div className="text-headline-md text-primary font-bold">CORE</div>
              <div className="font-label-caps text-on-surface-variant">
                ENGINE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
