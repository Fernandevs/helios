import React from "react";

export function Footer() {
  return (
    <footer className="w-full py-stack-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md border-t border-outline-variant/20 bg-background relative z-10">
      <div className="flex items-center gap-stack-md">
        <span className="font-label-caps text-label-caps text-primary">
          © 2024 Engineering the Digital Universe. System Status: Nominal.
        </span>
      </div>
      <div className="flex gap-stack-lg">
        <a
          className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps transition-colors"
          href="#"
        >
          GitHub
        </a>
        <a
          className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps transition-colors"
          href="#"
        >
          LinkedIn
        </a>
        <a
          className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps transition-colors"
          href="#"
        >
          Documentation
        </a>
        <a
          className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps transition-colors"
          href="#"
        >
          Changelog
        </a>
      </div>
    </footer>
  );
}
