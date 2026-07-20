# NovaAtlas Travel — novaatlastur.com

Bilingual (TR default / EN) static landing site for **NovaAtlas Travel**, a newly
founded travel agency in Çorlu, Türkiye. Contact-first: the single conversion
action is WhatsApp.

Built with **Astro + Tailwind CSS 4** — fully static output, zero JS by default
with tiny islands for the mobile menu, scroll-reveal and the floating WhatsApp
button. Fonts (Bricolage Grotesque + Inter) are self-hosted via `@fontsource` —
no external network calls.

## Quick start

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # serve dist/ locally
```

- Turkish lives at `/`, English at `/en/`.
- `dist/` is a plain static folder — deployable anywhere.

## Deploy to Cloudflare Pages (Git)

1. Push this repo to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo and use:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy, then add the custom domain `novaatlastur.com` under
   **Custom domains** (Cloudflare will guide the DNS records).
5. Email: set up **Cloudflare Email Routing** so `info@novaatlastur.com`
   forwards to the Gmail inbox once the domain is live.

## Editing content

| What | Where |
| --- | --- |
| Contact data, brand, WhatsApp number & prefilled messages | `src/config/site.ts` (single source of truth) |
| All Turkish copy | `src/i18n/tr.ts` |
| All English copy | `src/i18n/en.ts` (type-checked against the TR keys) |
| Colors / design tokens | `src/styles/global.css` (`:root` custom properties) |
| Logo shown in About | `src/assets/logo.png` (optimized at build time) |
| Mock tour routes (sliding cards) | `tours.items` in `src/i18n/tr.ts` / `en.ts`; illustrations in `src/components/TourArt.astro` |
| Favicon / OG image | `public/favicon.svg`, `public/og-image.jpg` |

Never hardcode visible copy in components — every string comes from
`src/i18n/*` and every phone/email/address from `src/config/site.ts`.

## Swapping the hero visual

The hero currently uses a pure CSS/SVG "star-sky → horizon" composition
(fastest possible LCP, zero CLS). To use a real photograph instead, in
`src/components/Hero.astro`:

1. Put the image in `src/assets/hero.jpg` and render it inside the `<section>`,
   above the content `<div>`:

   ```astro
   ---
   import { Image } from "astro:assets";
   import hero from "../assets/hero.jpg";
   ---
   <Image src={hero} alt="" fetchpriority="high" loading="eager"
     class="absolute inset-0 h-full w-full object-cover opacity-40" />
   ```

2. Keep the existing gradient layers beneath it (they double as the dark
   overlay that keeps text AA-readable). Astro emits responsive AVIF/WebP with
   width/height set, so CLS stays at 0.

## TÜRSAB badge

Placeholder comments are ready in `src/components/About.astro` and
`src/components/Footer.astro` — drop the certificate badge + licence number in
once the TÜRSAB licence is granted.

## Notes

- SEO: per-locale titles/descriptions, canonical, OG/Twitter cards, reciprocal
  `hreflang` (tr/en/x-default), `TravelAgency` JSON-LD, `robots.txt` and a
  generated `sitemap-index.xml`.
- Accessibility: skip link, focus trap in the mobile menu, visible focus rings,
  ≥44px touch targets, AA contrast, full `prefers-reduced-motion` support.
- Social icons in the footer render automatically once `site.social` in
  `src/config/site.ts` has entries.
