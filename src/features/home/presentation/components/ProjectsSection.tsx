import React from "react";
import { Activity, Terminal } from "lucide-react";
import {
  LargeProjectCard,
  SmallProjectCard,
  MediumProjectCard,
} from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
      <div className="flex justify-between items-end mb-stack-lg">
        <div>
          <h2 className="text-headline-lg text-on-surface font-semibold">
            Featured Projects
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Selected mission logs from the software frontier.
          </p>
        </div>
        <a
          className="font-label-caps text-label-caps text-primary hover:underline transition-all"
          href="#"
        >
          View All Archives -&gt;
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <LargeProjectCard />
        <SmallProjectCard
          icon={Activity}
          title="Signal v2.0"
          description="Real-time telemetry engine for IoT constellation tracking."
          tech="Rust / WebAssembly"
        />
        <SmallProjectCard
          icon={Terminal}
          title="Quasar UI"
          description="A high-performance design system for engineering dashboards."
          tech="React / TypeScript"
        />
        <MediumProjectCard />
      </div>
    </section>
  );
}
