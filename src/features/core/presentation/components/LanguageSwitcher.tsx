"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentLang = searchParams.get("lang") === "es" ? "es" : "en";

  const toggleLanguage = (lang: "en" | "es") => {
    if (lang === currentLang) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative flex items-center bg-surface-container-low border border-outline-variant/30 rounded-full p-1 h-9 select-none">
      <button
        onClick={() => toggleLanguage("en")}
        className={`px-3 py-1 text-[11px] font-mono font-bold tracking-wider rounded-full cursor-pointer transition-all duration-300 ${
          currentLang === "en"
            ? "bg-primary text-on-primary shadow-[0_0_10px_rgba(192,193,255,0.4)]"
            : "text-on-surface-variant hover:text-on-surface"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => toggleLanguage("es")}
        className={`px-3 py-1 text-[11px] font-mono font-bold tracking-wider rounded-full cursor-pointer transition-all duration-300 ${
          currentLang === "es"
            ? "bg-primary text-on-primary shadow-[0_0_10px_rgba(192,193,255,0.4)]"
            : "text-on-surface-variant hover:text-on-surface"
        }`}
      >
        ES
      </button>
    </div>
  );
}
