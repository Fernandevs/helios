import React from "react";
import { translations, Language } from "@/core/application/translations/dictionary";

interface FooterProps {
  currentLang: Language;
}

export function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang].footer;

  return (
    <footer className="w-full py-stack-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md border-t border-outline-variant/20 bg-background relative z-10">
      <div className="flex items-center gap-stack-md">
        <span className="font-label-caps text-label-caps text-primary">
          {t.copy}
        </span>
      </div>
      <div className="flex gap-stack-lg">
        <a
          className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps transition-colors"
          href="#"
        >
          {t.links.github}
        </a>
        <a
          className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps transition-colors"
          href="#"
        >
          {t.links.linkedin}
        </a>
        <a
          className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps transition-colors"
          href="#"
        >
          {t.links.docs}
        </a>
        <a
          className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps transition-colors"
          href="#"
        >
          {t.links.changelog}
        </a>
      </div>
    </footer>
  );
}

