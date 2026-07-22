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
    routes: { label: "Routes", anchor: "routes" },
    services: { label: "Services", anchor: "services" },
    vip: { label: "VIP Transfer" },
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
    carouselLabel: "Featured tour routes",
    previousLabel: "Show previous route",
    nextLabel: "Show next route",
    cardCta: "Explore route",
    allRoutesCta: "View All Routes",
    items: [
      {
        art: "kapadokya",
        name: "Cappadocia",
        desc: "Fairy chimneys and sunrise balloon views",
        waMessage: "Hello, I'd like to learn about the planned dates, accommodation options, balloon tour information and pricing for the Cappadocia tour departing from Çorlu.",
      },
      {
        art: "pamukkale",
        name: "Pamukkale",
        desc: "White travertine terraces and ancient Hierapolis",
        waMessage: "Hello, I'd like to learn about the planned dates, Hierapolis itinerary, transport and pricing for the Pamukkale tour departing from Çorlu.",
      },
      {
        art: "karadeniz",
        name: "Black Sea Highlands",
        desc: "Misty plateaus and lush green nature",
        waMessage: "Hello, I'd like to learn about the planned dates, highland route, accommodation and pricing for the Black Sea Highlands tour departing from Çorlu.",
      },
      {
        art: "ege",
        name: "Aegean Coast",
        desc: "Turquoise bays and the Aegean breeze",
        waMessage: "Hello, I'd like to learn about the planned dates, bays to be visited, accommodation and pricing for the Aegean Coast tour departing from Çorlu.",
      },
    ],
    detail: {
      metaTitleSuffix: "Tour Route from Çorlu",
      breadcrumbTours: "Routes",
      back: "Back to all routes",
      overview: "Overview",
      highlights: "Highlights",
      itinerary: "Sample Itinerary",
      included: "What Can Be Included",
      goodToKnow: "Good to Know",
      facts: "Quick Facts",
      regionLabel: "Region",
      durationLabel: "Duration",
      seasonLabel: "Best Season",
      ctaTitle: "Interested in this route?",
      ctaBody:
        "Exact dates and pricing are being prepared. Message us on WhatsApp and we'll build a plan around your needs.",
      cta: "Get Info on WhatsApp",
      soonNote:
        "This is a sample programme; it will be updated once exact dates, departure points and content are confirmed.",
      otherTours: "Other Routes",
    },
  },
  routesPage: {
    meta: {
      title: "Tour Routes from Çorlu | Nova Atlas Turizm",
      description:
        "Explore Nova Atlas Travel's sample routes from Çorlu to Cappadocia, Pamukkale, the Black Sea Highlands and the Aegean Coast.",
    },
    breadcrumb: "Routes",
    eyebrow: "Sample tour programmes from Çorlu",
    h1: "Explore All Routes",
    lead:
      "Compare our sample domestic routes, review their highlights and programme details, then contact us about the journey that interests you.",
    countSuffix: "sample routes",
    notice:
      "These are sample programmes; exact dates, departure points, content and pricing will be updated when confirmed.",
    cardCta: "Explore Route",
    waCta: "Ask about this route",
    ctaTitle: "Have another route in mind?",
    ctaBody:
      "Send us the destination you would like to plan and your preferred date range on WhatsApp.",
    cta: "Ask About a Route on WhatsApp",
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
  vip: {
    meta: {
      title: "VIP Transfer in Çorlu | Nova Atlas Turizm",
      description:
        "Plan Çorlu–Istanbul Airport, Çorlu–Sabiha Gökçen, custom-route, wedding and special-day transfers with Nova Atlas Travel's Vito and A5 vehicle options.",
    },
    breadcrumb: "VIP Transfer",
    eyebrow: "Private transport from Çorlu",
    h1: "Let's Plan Your VIP Transfer Around Your Route",
    lead:
      "We plan airport journeys, custom routes, weddings and special-day transport requests with our Vito and A5 vehicle options.",
    heroCta: "Create a VIP Transfer Request",
    heroAlt: "Vito and A5 vehicle options for VIP transfers",
    chips: ["Vito", "A5", "Planning from Çorlu"],
    servicesTitle: "VIP Transport for Your Needs",
    servicesBody:
      "Send your date, time, departure and destination on WhatsApp; we will clarify the route and vehicle preference around your request.",
    services: [
      {
        icon: "plane",
        title: "Çorlu – Istanbul Airport",
        desc: "Plan a private transfer request from Çorlu to Istanbul Airport or from the airport back to Çorlu.",
        cta: "Ask about this route",
        message:
          "Hello, I'd like information about a Çorlu – Istanbul Airport VIP transfer. Date/time: …, pick-up point: …, passengers and luggage: …, one way/return: …",
      },
      {
        icon: "plane",
        title: "Çorlu – Sabiha Gökçen",
        desc: "Send your private transfer request between Çorlu and Sabiha Gökçen according to your date and flight plan.",
        cta: "Ask about this route",
        message:
          "Hello, I'd like information about a Çorlu – Sabiha Gökçen VIP transfer. Date/time: …, pick-up point: …, passengers and luggage: …, one way/return: …",
      },
      {
        icon: "sparkle",
        title: "Special Days & Weddings",
        desc: "Let's plan your transport needs for weddings, engagements, invitations and special events.",
        cta: "Ask about an event",
        message:
          "Hello, I need a VIP vehicle for a wedding/special day. Event type: …, date: …, location/route: …, time range: …, vehicle preference: Vito / A5.",
      },
      {
        icon: "route",
        title: "Custom Routes",
        desc: "Create a private transport request for the departure and destination points you choose.",
        cta: "Create a custom route",
        message:
          "Hello, I'd like to create a VIP transfer request for a custom route. Departure: …, destination: …, date/time: …, passengers: …, vehicle preference: Vito / A5.",
      },
    ],
    vehiclesTitle: "Vito or A5: An Option for Your Journey",
    vehiclesBody:
      "We can clarify the vehicle choice together according to your passenger count, luggage and travel preferences.",
    vehicles: [
      {
        icon: "van",
        name: "Vito",
        kicker: "Spacious vehicle option",
        desc: "A spacious-cabin VIP transfer option for guests travelling together and journeys with luggage.",
      },
      {
        icon: "car",
        name: "A5",
        kicker: "Executive vehicle option",
        desc: "An executive transfer option for guests who prefer a more compact and private journey.",
      },
    ],
    processTitle: "Send Your Request in Three Steps",
    process: [
      { title: "Share your route", desc: "Tell us your departure and destination points." },
      {
        title: "Add timing and details",
        desc: "Include your date, time, passenger and luggage information.",
      },
      {
        title: "Choose a vehicle",
        desc: "Add your Vito or A5 preference to your request.",
      },
    ],
    ctaTitle: "Send your VIP transport request now",
    ctaBody:
      "Share your airport, custom-route or event details on WhatsApp so we can clarify your request together.",
    cta: "Ask About VIP Transfer on WhatsApp",
    generalMessage:
      "Hello, I'd like information about Nova Atlas Travel's VIP transport service. Route: …, date/time: …, passengers: …, vehicle preference: Vito / A5.",
    home: {
      eyebrow: "VIP Transfer",
      title: "VIP Transport from Çorlu to Airports and Special Occasions",
      body: "Let's plan your transport request with Vito and A5 vehicle options, from airport transfers and custom routes to weddings and special events.",
      points: [
        "Çorlu – Istanbul Airport and Sabiha Gökçen",
        "Vito and A5 vehicle options",
        "Custom routes, weddings and special occasions",
      ],
      cta: "Explore VIP Transfer",
    },
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
