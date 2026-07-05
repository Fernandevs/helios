import React from "react";
import Image from "next/image";
import { Rocket, ArrowRight, Database } from "lucide-react";
import { translations, Language } from "@/core/translations/dictionary";

interface CardProps {
  currentLang: Language;
}

export function LargeProjectCard({ currentLang }: CardProps) {
  const t = translations[currentLang].projects.cardLarge;

  return (
    <div className="md:col-span-8 card-satellite p-stack-lg group overflow-hidden relative">
      <div className="flex justify-between items-start mb-24">
        <div>
          <span className="font-label-caps text-label-caps text-primary bg-primary/10 px-stack-sm py-1 mb-stack-sm inline-block">
            {t.tag}
          </span>
          <h3 className="text-headline-md text-on-surface font-semibold">{t.title}</h3>
        </div>
        <Rocket className="text-on-surface-variant group-hover:text-primary transition-colors w-6 h-6" />
      </div>
      <div className="w-full h-64 bg-surface-container-lowest border border-outline-variant/30 overflow-hidden mb-stack-lg rounded relative">
        <Image
          alt={t.title}
          className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
          src="https://lh3.googleusercontent.com/aida/AP1WRLsHBvWz5qpPqOclEJXP-GvJdydso2DhV5Uys6GpHzHQJLj3Odb1mj59EchY53d6YPnRaJaiAJVvhz4KR9kWW2lw63hLwp0Xfg-3qNrJ58E5S-eKcrtt--9l_ov38lcaVt82A8rjhOgFsDGSkHqcGK3LirGg0fZyxK9f5ApRbgsrnZNMwOwC45ExEMo0MweiTxvkQsAsFGIZM-yFDrq015raIFrpQlRlOYN6JfuFnDROwr8YZMQOF6FuZA"
          fill
        />
      </div>
      <p className="text-body-md text-on-surface-variant mb-stack-md">
        {t.description}
      </p>
      <div className="flex gap-stack-md">
        <code className="text-label-caps text-tertiary">Go</code>
        <code className="text-label-caps text-tertiary">Kubernetes</code>
        <code className="text-label-caps text-tertiary">gRPC</code>
      </div>
    </div>
  );
}

interface SmallCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tech: string;
}

export function SmallProjectCard({ icon: Icon, title, description, tech }: SmallCardProps) {
  return (
    <div className="md:col-span-4 card-satellite p-stack-lg group flex flex-col justify-between">
      <div>
        <Icon className="text-primary mb-stack-md w-6 h-6" />
        <h3 className="text-headline-md text-on-surface mb-stack-sm font-semibold">{title}</h3>
        <p className="text-body-md text-on-surface-variant">{description}</p>
      </div>
      <div className="mt-stack-lg pt-stack-lg border-t border-white/5">
        <div className="flex justify-between items-center">
          <span className="font-label-caps text-on-surface-variant">{tech}</span>
          <ArrowRight className="text-on-surface-variant group-hover:translate-x-1 transition-transform w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export function MediumProjectCard({ currentLang }: CardProps) {
  const t = translations[currentLang].projects.cardMedium;

  return (
    <div className="md:col-span-8 card-satellite p-stack-lg group flex flex-col justify-center">
      <div className="flex flex-col md:flex-row gap-gutter">
        <div className="md:w-1/3">
          <div className="w-full h-full bg-surface-container-highest rounded border border-outline-variant/20 flex items-center justify-center p-stack-md min-h-[120px]">
            <Database className="text-primary/20 w-12 h-12" />
          </div>
        </div>
        <div className="md:w-2/3">
          <h3 className="text-headline-md text-on-surface mb-stack-sm font-semibold">{t.title}</h3>
          <p className="text-body-md text-on-surface-variant mb-stack-lg">
            {t.description}
          </p>
          <div className="flex flex-wrap gap-stack-md">
            <span className="font-label-caps text-on-surface-variant border border-outline-variant/30 px-2 py-1">PostgreSQL</span>
            <span className="font-label-caps text-on-surface-variant border border-outline-variant/30 px-2 py-1">Redis</span>
            <span className="font-label-caps text-on-surface-variant border border-outline-variant/30 px-2 py-1">Python</span>
          </div>
        </div>
      </div>
    </div>
  );
}

