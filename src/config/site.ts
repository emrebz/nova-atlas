/**
 * SINGLE source of truth for all contact & brand data.
 * Update here — every component reads from this file.
 */
export const site = {
  brand: "NovaAtlas Travel",
  brandTR: "NovaAtlas Turizm",
  domain: "novaatlastur.com",
  url: "https://novaatlastur.com",
  phoneDisplay: "+90 533 266 11 26",
  phoneRaw: "905332661126",
  email: "info@novaatlastur.com", // will forward to kemalboz68@gmail.com via
  // Cloudflare Email Routing once the domain is live
  location: "Çorlu, Tekirdağ",
  hoursTR: "Hafta içi 09:00–18:00",
  hoursEN: "Weekdays 09:00–18:00",
  /** Schema.org openingHours format */
  openingHours: "Mo-Fr 09:00-18:00",
  /** Social links — footer icons render ONLY when this object is non-empty. */
  social: {} as Record<string, string>,
  waMessage: {
    tr: "Merhaba, NovaAtlas hakkında bilgi almak istiyorum.",
    en: "Hello, I'd like to get information about NovaAtlas.",
  },
} as const;

export type WaLocale = keyof typeof site.waMessage;

/** WhatsApp deep link with the locale's prefilled message. */
export function waUrl(locale: WaLocale): string {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(site.waMessage[locale])}`;
}
