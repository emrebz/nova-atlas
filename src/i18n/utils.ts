import { tr } from "./tr";
import { en } from "./en";

export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

/** Deep-widens the `as const` Turkish dictionary so en.ts can supply its own strings. */
type DeepWiden<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepWiden<U>[]
    : T extends object
      ? { -readonly [K in keyof T]: DeepWiden<T[K]> }
      : T;

export type Dictionary = DeepWiden<typeof tr>;

const dictionaries: Record<Locale, Dictionary> = { tr, en };

/** Get the dictionary for the current locale. */
export function useTranslations(locale: string | undefined): Dictionary {
  return dictionaries[(locale as Locale) ?? defaultLocale] ?? dictionaries[defaultLocale];
}

/** Narrow an Astro.currentLocale string to a known Locale. */
export function asLocale(locale: string | undefined): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
}

/** The other locale (for the TR | EN switcher). */
export function altLocale(locale: Locale): Locale {
  return locale === "tr" ? "en" : "tr";
}

/** Home path for a locale — TR lives at "/", EN at "/en/". */
export function localeHome(locale: Locale): string {
  return locale === "tr" ? "/" : "/en/";
}
