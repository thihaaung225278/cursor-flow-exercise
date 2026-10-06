/*
import en from "@/dictionaries/en.json";
import mm from "@/dictionaries/mm.json";
*/
import en from "@/dictionaries/en";
import mm from "@/dictionaries/mm";

export const locales = ["en", "mm"] as const;

export type Locale = (typeof locales)[number];
export const messages = {
  en,
  mm,
} as const satisfies Record<Locale, typeof en | typeof mm>;

export type Messages = (typeof messages)[Locale];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function resolveInitialLocale(value: string | null | undefined): Locale {
  if (!value) {
    return "en";
  }

  const normalized = value.toLowerCase();

  if (normalized.startsWith("my") || normalized === "mm") {
    return "mm";
  }

  return isLocale(normalized) ? normalized : "en";
}
