import React from "react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-stack-sm mb-stack-md">
            <span className="w-12 h-px bg-primary"></span>
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em]">
              System Architect / V0.4.2-Alpha
            </span>
          </div>
          <h1 className="text-display text-on-surface mb-stack-lg max-w-4xl">
            Building scalable systems and exploring complex digital universes.
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl font-sans">
            Iván Fernando crafts high-density software architectures that bridge
            the gap between abstract mathematical models and production-ready
            resilience.
          </p>
          <div className="flex flex-wrap gap-stack-lg">
            <div className="flex flex-col">
              <span className="text-headline-md text-primary font-bold">10+</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-headline-md text-primary font-bold">50+</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                Projects Launched
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-headline-md text-primary font-bold">12</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                Certifications
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 relative flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-primary/20 flex items-center justify-center p-4">
            <div className="absolute inset-0 animate-spin-slow border-t border-primary/40 rounded-full"></div>
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/10 relative">
              <Image
                alt="Iván Fernando"
                className="object-cover bg-surface-container-low"
                src="https://lh3.googleusercontent.com/aida/AP1WRLslcYyxRu8CR56LTuKYWgiMtdx5fzZKb6NctTZQpaKle_8KUY-Q2pB-yEBr5sQJAGLQtaKjjnkeH0uJ-4AyGzJXyQTFgGycL-YG8nC72gBx9OS7MwqRxaBwc_dTAEdH6Zv9ybV_VXbbf9jwRwXQQuolNdajGl4Xh9yhqsQVpriPvDLqrEiLkxahCKh5-Rwq0F3sj5HJiJnv6TfpC79GOQhQi64qY_LlaSMIKEBn8KwNcjZXGpeqi20uew"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
