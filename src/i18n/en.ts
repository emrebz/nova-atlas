import { site } from "../config/site";
import type { Dictionary } from "./utils";

/** English dictionary — must mirror every key in tr.ts (enforced by `Dictionary`). */
export const en: Dictionary = {
  meta: {
    title: "Nova Atlas Travel | Travel Agency in Çorlu",
    description:
      "Nova Atlas Travel in Çorlu provides domestic and international tour planning, visa consultancy, hotel reservations and reliable transport solutions.",
    ogLocale: "en_US",
  },
  nav: {
    home: { label: "Home", anchor: "home" },
    about: { label: "About", anchor: "about" },
    services: { label: "Services", anchor: "services" },
    contact: { label: "Contact", anchor: "contact" },
  },
  hero: {
    h1: "Nova Atlas Travel: Reliable Journeys from Çorlu to the World",
    sub: "An approachable local travel agency for tours, visas, accommodation and transport planning.",
    lead: "We bring our operational experience in employee transportation into tourism with the responsibility of a family-run company. While our domestic and international tours departing from Çorlu are being prepared, you can already contact us for travel planning and visa support.",
    cta: "Contact Us on WhatsApp",
  },
  about: {
    h2: "A Çorlu Travel Agency Built on Experience",
    paragraphs: [
      "Nova Atlas Travel is the tourism brand of a family-run company that understands the transport needs of Çorlu and the wider Tekirdağ region. We apply our experience in employee transportation, scheduling and operational coordination to travel and transport services delivered with our own vehicle fleet.",
      "Our aim is not merely to make a booking. We stay accessible throughout the journey, explain the available options clearly and build a plan around each traveller's needs. Corporate discipline and the care of a family business shape how we work.",
      "Our growing services include domestic and international tours departing from Çorlu, visa consultancy, hotel reservations, employee transportation and VIP transfers. Upcoming tour programmes will be announced on our website and social channels.",
    ],
    whyTitle: "Why Nova Atlas Travel?",
    why: [
      { icon: "pin", text: "A local, approachable team in Çorlu" },
      { icon: "sparkle", text: "Transparent planning tailored to your needs" },
      { icon: "network", text: "Operational experience from employee transportation" },
      { icon: "chat", text: "Family-business responsibility and direct communication" },
    ],
    logoAlt: "Nova Atlas Travel logo",
    tursab: "TÜRSAB member travel agency",
  },
  tours: {
    anchor: "routes",
    h2: "Featured Domestic Routes",
    body: "Sample routes from the domestic tours we are preparing to depart from Çorlu. Dates, meeting points and programme details will be published here when confirmed.",
    badge: "Coming Soon",
    waCta: "Get Info",
    waTemplate: "Hello, I'd like to get information about the {tour} route.",
    carouselLabel: "Featured tour routes",
    previousLabel: "Show previous route",
    nextLabel: "Show next route",
    items: [
      { art: "kapadokya", name: "Cappadocia", desc: "Fairy chimneys and sunrise balloon views" },
      { art: "pamukkale", name: "Pamukkale", desc: "White travertine terraces and ancient Hierapolis" },
      { art: "karadeniz", name: "Black Sea Highlands", desc: "Misty plateaus and lush green nature" },
      { art: "ege", name: "Aegean Coast", desc: "Turquoise bays and the Aegean breeze" },
    ],
  },
  services: {
    h2: "Travel and Transport Services Based in Çorlu",
    paragraphs: [
      "We consider tours, visas, accommodation and transport together so that you can plan domestic and international journeys through one local point of contact.",
      "While tour dates and packages are being prepared, you can contact us on WhatsApp for visa consultancy, hotel reservations, employee transportation and VIP transfer requests.",
    ],
    badge: "Coming Soon",
    items: [
      { icon: "compass", title: "Domestic Tours from Çorlu", desc: "Cultural, nature and day-trip route options." },
      { icon: "globe", title: "International Tours", desc: "Programmes for different budgets and travel expectations." },
      { icon: "passport", title: "Visa Consultancy", desc: "Application document and process support for Schengen, US, UK, Egypt and Dubai visas." },
      { icon: "bed", title: "Hotels & Accommodation", desc: "Accommodation options suited to your travel plans." },
      { icon: "van", title: "Transport & VIP Transfer", desc: "Transport solutions backed by employee transportation experience." },
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
    line: "Nova Atlas Travel — Çorlu",
    note: "A TÜRSAB member travel agency based in Çorlu, providing tour, visa, accommodation and transport services.",
    rights: "All rights reserved.",
  },
  a11y: {
    skip: "Skip to content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
    mainNav: "Main navigation",
    langNav: "Language selection",
    waFab: "Message us on WhatsApp",
    waIcon: "WhatsApp",
  },
  brandSuffix: "Travel",
};
