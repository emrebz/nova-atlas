import { site } from "../config/site";
import type { Dictionary } from "./utils";

/** English dictionary — must mirror every key in tr.ts (enforced by `Dictionary`). */
export const en: Dictionary = {
  meta: {
    title: "NovaAtlas Travel — Çorlu's New Travel Companion",
    description:
      "NovaAtlas is a newly established travel agency in Çorlu, Türkiye. Reliable, personal service for your domestic and international journeys. Reach us on WhatsApp.",
    ogLocale: "en_US",
  },
  nav: {
    home: { label: "Home", anchor: "home" },
    about: { label: "About", anchor: "about" },
    services: { label: "Services", anchor: "services" },
    contact: { label: "Contact", anchor: "contact" },
  },
  hero: {
    h1: "NovaAtlas Travel — Çorlu's New Travel Companion",
    sub: "For your domestic and international journeys, we're here to offer reliable, personal service.",
    lead: "NovaAtlas is a newly established travel agency in Çorlu. Our goal is to be your closest and most trustworthy travel partner. Our tour packages are coming very soon — stay tuned!",
    cta: "Contact Us on WhatsApp",
  },
  about: {
    h2: "Who We Are",
    paragraphs: [
      "NovaAtlas is a new-generation travel agency founded in Çorlu. We set out to provide accurate, transparent and personalized solutions for everyone who lives, works and travels in this city at the heart of industry and trade.",
      "We're at the very beginning of our journey, but our vision is clear: to grow into a trusted brand, starting from Çorlu. We combine corporate seriousness with a warm, approachable service philosophy.",
      "You can follow updates about our upcoming tour packages and services here and on our social media accounts.",
    ],
    whyTitle: "Why NovaAtlas?",
    why: [
      { icon: "pin", text: "A local, approachable team in Çorlu" },
      { icon: "sparkle", text: "Transparent, personalized recommendations" },
      { icon: "chat", text: "Fast communication (instant support on WhatsApp)" },
      { icon: "network", text: "A growing service network" },
    ],
    logoAlt: "NovaAtlas Travel logo",
  },
  services: {
    h2: "Coming Very Soon",
    paragraphs: [
      "We're preparing our tour packages and service details. We'll be with you shortly in areas like domestic and international tours, hotel reservations and visa consultancy.",
      "Already have a specific request? Message us on WhatsApp and we'll craft a solution tailored to your needs.",
    ],
    badge: "Coming Soon",
    items: [
      { icon: "compass", title: "Domestic Tours" },
      { icon: "globe", title: "International Tours" },
      { icon: "bed", title: "Hotels & Accommodation" },
      { icon: "passport", title: "Visa Consultancy" },
    ],
    cta: "Message Us on WhatsApp",
  },
  contact: {
    h2: "Get in Touch",
    body: "Don't hesitate to send us your questions, suggestions or special requests. For the fastest response, use our WhatsApp line.",
    rows: {
      location: "Location",
      whatsapp: "WhatsApp",
      email: "Email",
      hours: "Working Hours",
    },
    hoursValue: site.hoursEN,
    cta: "Message Us on WhatsApp Now",
  },
  footer: {
    line: "NovaAtlas Travel — Çorlu",
    note: "A new-generation travel agency. Our tour packages are coming very soon.",
    rights: "All rights reserved.",
  },
  a11y: {
    skip: "Skip to content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    mainNav: "Main navigation",
    langNav: "Language selection",
    waFab: "Message us on WhatsApp",
    waIcon: "WhatsApp",
  },
  brandSuffix: "Travel",
};
