import { Network, Database } from "lucide-react";
import { LanguageSwitcher } from "@/core/presentation/components/LanguageSwitcher";
import { translations, Language } from "@/core/application/translations/dictionary";
import { Helios } from "@/core/presentation/components/Helios";

interface HeaderProps {
  currentLang: Language;
}

export function Header({ currentLang }: HeaderProps) {
  const t = translations[currentLang].nav;

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-margin-desktop h-20 bg-surface/60 backdrop-blur-xl border-b border-white/10 z-50">
      <a href="/" className="flex items-center gap-stack-md">
        <Helios className="w-8 h-8 text-primary hover:rotate-12 transition-transform duration-500 cursor-pointer" />
        <span className="text-headline-md font-bold tracking-tighter text-primary">Helios</span>
      </a>
      <nav className="hidden md:flex items-center gap-stack-lg">
        <a
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors"
          href="/#inicio"
        >
          {t.inicio}
        </a>
        <a
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors"
          href="/#featured-projects"
        >
          {t.projects}
        </a>
        <a
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors"
          href="/#technological-zenith"
        >
          {t.techZenith}
        </a>
        <a
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors"
          href="/#career-trajectory"
        >
          {t.career}
        </a>
      </nav>
      <div className="flex items-center gap-stack-md">
        <LanguageSwitcher />
        <button
          aria-label="Settings Ethernet"
          className="text-on-surface-variant hover:text-primary transition-all p-2 flex items-center justify-center"
        >
          <Network className="w-5 h-5" />
        </button>
        <button
          aria-label="Database Status"
          className="text-on-surface-variant hover:text-primary transition-all p-2 flex items-center justify-center"
        >
          <Database className="w-5 h-5" />
        </button>
        <button className="hidden lg:block bg-primary text-on-primary font-label-caps text-label-caps px-stack-lg py-stack-sm hover:scale-105 active:scale-95 transition-all cursor-pointer">
          {t.contact}
        </button>
      </div>
    </header>
  );
}

