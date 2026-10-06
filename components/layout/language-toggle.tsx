"use client";

import { useLocale } from "@/components/providers/locale-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-xs text-slate-300">
      <button
        aria-pressed={locale === "en"}
        className={`rounded-full px-3 py-1.5 transition ${
          locale === "en"
            ? "bg-white text-slate-950"
            : "text-slate-300 hover:text-white"
        }`}
        onClick={() => setLocale("en")}
        type="button"
      >
        EN
      </button>
      <button
        aria-pressed={locale === "mm"}
        className={`rounded-full px-3 py-1.5 transition ${
          locale === "mm"
            ? "bg-white text-slate-950"
            : "text-slate-300 hover:text-white"
        }`}
        onClick={() => setLocale("mm")}
        type="button"
      >
        MM
      </button>
    </div>
  );
}
