# AGENT.md — Nova Atlas Turizm Website

Technical guide for AI agents and developers working on this codebase. Read this
before making changes: it documents the architecture, the conventions that keep
the site fast and accessible, and the hard-won gotchas already fixed once.

---

## 1. Project Overview

**Nova Atlas Turizm** (novaatlastur.com) is the marketing site for a newly
founded, family-run travel agency in Çorlu, Tekirdağ, Türkiye. The company grew
out of an employee-transportation business and offers domestic/international
tours, hotel reservations, and VIP transfer with its own
vehicle fleet. It is a TÜRSAB member agency.

**Business intent — this shapes every design decision:**

- **Contact-first, not sales-first.** The single conversion action is
  **WhatsApp** (`wa.me` deep links with prefilled, context-specific messages).
  There is no contact form, no backend, no payment flow.
- Tour packages are still being prepared → tour content is explicitly framed as
  **sample programmes** ("örnek program"). No dates, no prices.
- The brand voice: corporate credibility fused with family-business warmth.
  "New agency" is framed as an asset (fresh, personal, reachable).

**Languages:** Turkish is the default locale at `/`; English lives at `/en/`.

---

## 2. Tech Stack

| Concern    | Choice                                              |
| ---------- | --------------------------------------------------- |
| Framework  | Astro 5 (`output: "static"`, no SSR, no backend)    |
| Styling    | Tailwind CSS 4 via `@tailwindcss/vite` (CSS-config) |
| Fonts      | `@fontsource` (self-hosted; zero external requests) |
| Images     | `astro:assets` `<Image>` (sharp → WebP at build)    |
| Sitemap    | `@astrojs/sitemap` with i18n config                 |
| Host       | Cloudflare Pages (build `npm run build`, dir `dist`)|
| Video      | Self-hosted on Cloudflare R2 (`media.novaatlastur.com`); `ffmpeg` transcodes masters to MP4/WebM (see §12) |
| JavaScript | No framework islands. Small vanilla `<script>` tags |

### Commands

```bash
npm install        # install deps
npm run dev        # dev server → http://localhost:4321
npm run build      # production build → dist/
npm run preview    # serve dist/ locally
```

There is no test suite or linter configured. **Verification = `npm run build`
(must be zero errors) + Lighthouse.** Production Lighthouse (mobile) currently
scores: Performance 91–94, Accessibility 100, Best Practices 100, SEO 100 on
every page type, with CLS 0 and TBT 0 ms. Do not regress these.

---

## 3. Repository Layout

```
astro.config.mjs          # site URL, i18n routing, sitemap, tailwind vite plugin
src/
  config/site.ts          # ★ SINGLE source of truth: brand, phone, email,
                          #   address, hours, social links, WhatsApp messages
  data/
    tours.ts              # ★ Tour detail content (TR+EN per tour) + localized
                          #   slugs + tourPath()/tourByArt() helpers
    tourImages.ts         # art-key → optimized photo (ImageMetadata) map
  i18n/
    tr.ts                 # ★ Turkish dictionary — the canonical shape (as const)
    en.ts                 # English dictionary, type-checked against TR keys
    utils.ts              # Locale type, useTranslations(), localeHome(), etc.
  styles/global.css       # ★ Design tokens (CSS custom props), Tailwind @theme
                          #   mapping, base styles, reveal/badge/motion CSS
  layouts/Base.astro      # <head> SEO engine, theme bootstrap, header/footer/FAB
  components/
    Header.astro          # fixed header, scrolled state, mobile menu, lang switch
    Hero.astro            # homepage hero: star-sky, brand plaques, CTA
    BrandFilmHero.astro   # homepage top: full-bleed 16:9 autoplay brand film
    FeaturedTours.astro   # homepage tour carousel (auto-drift + controls)
    About.astro           # company story, TÜRSAB badge, "why us" cards
    Services.astro        # service cards
    VipTeaser.astro       # homepage VIP transfer teaser panel
    Contact.astro         # dark contact section, info rows, big CTA
    Footer.astro          # footer, social icons, lang switch
    TourDetail.astro      # full tour detail page body (hero/sections/sidebar)
    RoutesIndex.astro     # /rotalar all-routes listing page body
    VipTransferPage.astro # /vip-tasimacilik page body
    WhatsAppFab.astro     # floating WhatsApp button (hides over footer)
    Reveal.astro          # scroll-reveal wrapper (IO, polymorphic as="li")
    Icon.astro            # inline SVG icon set (stroke + brand fills)
    Wordmark.astro        # SVG-crisp header/footer brand lockup
    ThemeToggle.astro     # light/dark toggle button (logic in Base.astro)
    VideoPlayer.astro     # reusable contained video (autoplay/unmute/fullscreen)
  pages/
    index.astro                    # TR home        → /
    en/index.astro                 # EN home        → /en/
    turlar/[slug].astro            # TR tour detail → /turlar/kapadokya/ …
    en/tours/[slug].astro          # EN tour detail → /en/tours/cappadocia/ …
    rotalar/index.astro            # TR routes index
    en/routes/index.astro          # EN routes index
    vip-tasimacilik/index.astro    # TR VIP transfer
    en/vip-transfer/index.astro    # EN VIP transfer
  assets/                 # source images (optimized by astro:assets at build)
    tours/*.png           # tour photos (1586×992 source)
    routes/, vip/         # page hero photos + video posters (vito-poster.jpg)
    media/                # brand-film poster
public/                   # favicon.svg, og-image.jpg, robots.txt
                          #   media/ = gitignored local-dev video (prod → R2, §12)
docs/logo/                # brand source files (nova-atlas-no-bg.png = current)
```

`★` = files that act as single sources of truth. Change data there, never
inline in components.

---

## 4. Non-Negotiable Conventions

1. **Never hardcode visible copy in components.** Every user-facing string
   lives in `src/i18n/tr.ts` + `src/i18n/en.ts`. TR is the canonical shape
   (`as const`); EN must satisfy `Dictionary` (deep-widened from TR), so a
   missing/extra EN key is a **type error**. Add keys to both files.
2. **Never hardcode contact/brand data.** Phone, email, address, hours, social
   URLs, WhatsApp message templates → `src/config/site.ts` only.
3. **Tour content lives in `src/data/tours.ts`.** Each tour carries `art`
   (stable key that links carousel item ↔ photo ↔ detail data), localized
   slugs (`slug.tr` / `slug.en`), and full TR+EN content blocks. Adding a tour:
   add the data object + photo in `src/assets/tours/` + `tourImages.ts` entry +
   the short card entry in both i18n `tours.items` arrays (matching `art` and a
   tour-specific `waMessage`). Routes and pages generate automatically via
   `getStaticPaths()`.
4. **WhatsApp links** are always built as
   `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}` with a
   localized, context-specific message. External links: `target="_blank"
   rel="noopener"`.
5. **All pages render through `Base.astro`** and pass `title`, `description`,
   `alternates` (reciprocal TR/EN paths of *this* page), and optional
   `extraSchema` (JSON-LD). The language switcher is fed by `alternates`, so
   TR↔EN always lands on the equivalent page, not the homepage.
6. **Static only.** No SSR, no API routes, no forms, no third-party scripts,
   no external font/CDN requests. The strictest budget on this site is a
   network request that isn't ours.

---

## 5. Internationalization

- Astro built-in i18n: `defaultLocale: "tr"`, `locales: ["tr","en"]`,
  `prefixDefaultLocale: false` → TR at `/`, EN under `/en/`.
- Components resolve locale via `asLocale(Astro.currentLocale)` and read
  strings with `useTranslations(locale)`.
- **Localized slugs** for content pages (`/turlar/karadeniz-yaylalari/` ↔
  `/en/tours/black-sea-highlands/`); mapping lives in `tours.ts`, path building
  in `tourPath(tour, locale)`.
- Every page emits reciprocal `hreflang` tags (`tr`, `en`, `x-default` → TR).
- Turkish requires the **latin-ext** font subset (ç ğ ş ı İ ö ü) — see §7.

---

## 6. Design System

### Tokens (`src/styles/global.css`)

All colors are CSS custom properties on `:root`, remapped into Tailwind via
`@theme inline` (`--color-primary: var(--brand-primary)` → `bg-primary`,
`text-heading`, `border-line`, etc.). **Change tokens, not component classes.**

Palette (derived from the logo — navy wordmark, antique-gold star, cream field):

| Token | Light | Purpose |
| --- | --- | --- |
| `--brand-primary` | `#131c33` | deep midnight navy |
| `--brand-primary-deep` | `#0b1226` | star-sky surfaces (hero, contact, footer) |
| `--brand-accent` | `#c39a3e` | antique gold (decorative) |
| `--brand-accent-strong` | `#7e6120` | AA-safe gold for text on light |
| `--surface` / `--surface-2` | `#ffffff` / `#f7f6f2` | warm neutrals |
| `--wa-green` | `#25d366` | WhatsApp brand — **icon-only FAB** |
| `--wa-green-strong` | `#15803d` | text CTAs (5.0:1 with white — see §9) |

**Dark mode:** `:root[data-theme="dark"]` overrides the neutral tokens
(surfaces `#0d1424`/`#121b2e`, ink `#edf1f7`, etc.). Theme is applied by an
inline script in `Base.astro` `<head>` **before paint** (no flash): reads
`localStorage["nova-atlas-theme"]`, falls back to `prefers-color-scheme`,
tracks system changes, and drives every `[data-theme-toggle]` button via event
delegation. `ThemeToggle.astro` is markup-only.

### Typography

- Display: **Bricolage Grotesque** 600/700 (`--font-display`, `font-display`).
- Body/UI: **Inter** 400/500/600 (17px base, line-height 1.6).
- Fluid type via `clamp()` (H1 `clamp(2.25rem,6vw,4.5rem)`, tight leading,
  slight negative tracking on display sizes).

### Brand surfaces ("brand seal" language)

The transparent logo (`docs/logo/nova-atlas-no-bg.png`) has **navy artwork
that disappears on dark backgrounds**. It must always sit on the warm cream
seal treatment: gradient face `linear-gradient(158deg,#ffffff,#f4f0e8)`, gold
hairline border `rgb(195 154 62 / 0.4)`, inner white highlight, soft layered
shadow. Current placements: desktop hero plaque (floating, with gold halo +
star flourish), mobile hero seal (compact, centered under the H1, `lg:hidden`
— exactly one logo is visible per breakpoint), About panel. The header/footer
use `Wordmark.astro` (SVG star + text) instead, which inherits header color
states and stays crisp at small sizes.

### Layout

- Container: `.container-site` = max-width 75rem, `padding-inline:
  clamp(1.25rem, 4vw, 3rem)`.
- Mobile-first; the layout must be flawless at **360px** (no horizontal
  overflow — verify `document.body.scrollWidth <= innerWidth`).
- Section anchor targets get `scroll-margin-top` for the fixed header.

---

## 7. Fonts (self-hosted)

Imports in `global.css` are **subset-specific on purpose**:
`@fontsource/inter/latin-400.css` + `latin-ext-400.css` (and 500/600; Bricolage
600/700 same pattern). This keeps unused scripts (cyrillic, vietnamese…) out of
`dist/`. `Base.astro` **preloads** the four above-the-fold woff2 files
(Bricolage 700 latin+latin-ext, Inter 400 latin+latin-ext) via Vite `?url`
imports. If you add a weight: import both latin subsets, and only preload it if
it renders above the fold.

---

## 8. Performance Playbook

- **Homepage LCP is text** — the hero is a pure CSS/SVG composition (gradient
  star-sky, twinkling star field, nova star, horizon arc). Never gate the H1
  behind an animation or an image load.
- **Interior heroes (tour/VIP/routes)** use a real photo with
  `loading="eager" fetchpriority="high"`, responsive `widths=[480…1600]` +
  `sizes="100vw"`, under a navy scrim for text contrast.
- Everything below the fold: `loading="lazy"`, explicit `width`/`densities`
  (CLS must stay 0). Hidden-per-breakpoint decorative images (e.g. the desktop
  plaque logo) are `lazy` so phones don't download them.
- Photos live in `src/assets/` (never `public/`) so sharp emits hashed WebP.
  A 2–3 MB source PNG becomes 15–120 KB — source size is fine, `public/` is not.
- Scripts are tiny vanilla modules colocated in components; Astro dedupes and
  inlines them. No dependency should be added for menu/carousel/reveal logic.
- The tour carousel auto-drift uses a rAF loop that pauses on hover, pointer
  down, focus-within, `document.hidden`, and reduced motion; it is a
  progressive enhancement over a native `overflow-x` scroller.

---

## 9. Accessibility Playbook (issues already fixed — don't reintroduce)

- **Contrast:** white text needs ≥4.5:1. WhatsApp brand green `#25d366` fails
  (2.2:1) — it is only allowed on the icon-only FAB. All text CTAs use
  `--wa-green-strong: #15803d` (5.0:1), **in dark mode too** (a lighter
  "dark-mode-friendly" green was tried and failed the audit). Gold text on
  light surfaces uses `--brand-accent-strong`, never raw `--brand-accent`.
- **Mobile menu:** full-screen dialog with focus trap, `Esc` to close,
  close-on-link-tap, `aria-expanded`/`aria-modal`, body scroll lock, and focus
  restoration to the opener.
- **Icon-only links/buttons** get `aria-label`; decorative SVGs get
  `aria-hidden="true"` (the `Icon` component defaults to decorative; pass
  `label` to make one meaningful). Social links use real brand SVGs — visible
  text like "IG" with `aria-label="Instagram"` triggers axe
  `label-content-name-mismatch`.
- **Lists:** `Reveal` is polymorphic (`as="li"`) so animated grids stay valid
  `ul > li` (a wrapper `div` between `ul` and `li` fails axe). Don't use `<dl>`
  with wrapper divs — axe rejects it; use `ul` + spans.
- **Carousel:** duplicate marquee sets are `aria-hidden="true"` and their links
  `tabindex="-1"`; the viewport is a keyboard-focusable region with arrow-key
  support and visible controls.
- Landmarks: one `h1` per page, logical heading order, skip link, visible
  `:focus-visible` ring (gold), `aria-current="page"` on active locale/nav.

---

## 10. Motion Rules

- Micro-interactions only: hover lift on cards, 150–300ms transitions,
  transform/opacity only (GPU-friendly). No parallax.
- Scroll reveal: `html.js [data-reveal]` hides content **only when JS is
  present** (an inline script adds the `js` class), IO adds `.revealed`;
  stagger via `--reveal-delay`.
- Ambient animation (star twinkle, nova breathe, plaque float, badge shimmer)
  is slow (≥7s) and subtle.
- **`prefers-reduced-motion: reduce` fully honored** — a global rule zeroes all
  animations/transitions, reveals render visible, the carousel stops drifting
  and becomes a snap scroller, duplicate sets are hidden.

---

## 11. SEO

Handled centrally in `Base.astro`; per-page via props:

- Per-locale/page `<title>`, meta description, canonical, OG/Twitter cards
  (`/og-image.jpg`, 1200×630), `theme-color`.
- Reciprocal `hreflang` (`tr`, `en`, `x-default`→TR) from the `alternates` prop.
- JSON-LD: `TravelAgency` (+`WebSite` on the homepage) sitewide; pages append
  `BreadcrumbList`, `TouristTrip` (tour details), `ItemList` (routes index) via
  `extraSchema`.
- `robots.txt` + `sitemap-index.xml` (auto-generated, i18n-aware).

---

## 12. Video & Media

Two videos ship: the homepage **brand film** (16:9, autoplays at the very top,
`BrandFilmHero.astro`) and the vertical **Vito showcase** (9:16) on the VIP page
(`VideoPlayer.astro`). Both are AI-generated, transcoded locally with `ffmpeg`
(ProRes/MOV master → web MP4 H.264 + WebM VP9 + a poster still), and **hosted
off the repo**.

**Hosting — Cloudflare R2, never Git.** Video binaries exceed the Pages 25 MB
per-file limit and bloat the repo. They live in an R2 bucket served from
`https://media.novaatlastur.com/video/…` (custom domain, free egress). The URLs
are the single source of truth in `site.ts`: `brandFilm` (webm+mp4) and
`vipVideo` (mp4). **Posters are small and DO ship** in the repo
(`src/assets/media/`, `src/assets/vip/`, optimized via `getImage()`).
`public/media/` is a **gitignored** local-dev copy (works in `npm run dev`,
never deployed) — production must point at R2.

**Components.**

- `BrandFilmHero.astro` — full-bleed 16:9 hero at the very top of the homepage;
  autoplays immediately (above the fold). Bespoke overlay (tagline, scroll cue,
  controls); the fixed header floats over it.
- `VideoPlayer.astro` — reusable, contained, aspect-configurable player
  (`aspect="9 / 16"` for Vito). Multi-instance safe: it wires every
  `[data-video-player]` and queries only within its own root. Reuse it for any
  new video — pass `mp4` / `webm?` / `poster` (a `getImage().src`) / `label` /
  `labels` (control labels from `t.film.*`).

**Behaviour (the spec, identical for both):** muted + `playsinline` + `loop`
autoplay; **tap the video to unmute**; mute + fullscreen buttons (icons swap in
JS / via `:global()` — see gotcha #7); a center play button appears if autoplay
is blocked. **Mobile & perf best-practices:** `Save-Data` and
`prefers-reduced-motion` → no autoplay, show poster + play button; pause when
scrolled off-screen; `VideoPlayer` autoplays **lazily** (only once it scrolls
into view, since it is below the fold), while the above-fold `BrandFilmHero`
starts on load. A muted-autoplay video hero still scores green (homepage P92,
VIP P95) because the poster/H1 is the LCP, not the video.

**Adding a video:** transcode with `ffmpeg` (`-movflags +faststart`, H.264
`-crf 24`, VP9 `-crf 34`), extract a poster frame, upload the video to R2 under
`/video/`, commit the poster to `src/assets/`, add the URL to `site.ts`, and
render `<VideoPlayer …>` (or, for a full-bleed hero, follow `BrandFilmHero`).
AI video can't render brand text/logos cleanly — overlay those in the editor,
never ask the model.

---

## 13. Known Gotchas (cost real debugging time)

1. **`backdrop-filter` creates a containing block for `position: fixed`
   descendants.** The scrolled-header blur once clipped the fixed mobile menu
   to the 72px bar (menu rendered background-less). Fix that lives in
   `Header.astro`: the blur/background sit on `#site-header::before`, never on
   the header element itself. Don't "simplify" this back.
2. **Auto margins beat flex stretching.** `.container-site` has
   `margin-inline: auto`; as a flex-column child it shrinks to content width
   instead of stretching — children of the mobile menu need explicit `w-full`.
3. **SVG `transform` attribute vs CSS animation:** a CSS `transform` animation
   overrides the element's `transform` attribute. Position with an outer `<g
   transform=…>`, animate an inner `<g>` (see the hero nova star).
4. **Header state uses an IO sentinel** (prepended 24px div) rather than scroll
   events — cheaper and more reliable; a `scroll` listener remains as fallback.
5. **Marquee seam math:** each card set carries its own `padding-inline`
   (not flex `gap` between sets) so one set's width equals exactly one
   animation period — otherwise the loop jumps by half the gap.
6. The in-app browser preview pane cannot capture screenshots at scrolled
   positions or fire scroll/IO events programmatically, and it **blocks video
   playback entirely** (autoplay and gesture). Verify scroll-driven behavior
   with a tall viewport at `scrollY 0`, computed styles, or a real browser —
   white captures and a stuck video poster there are tool artifacts, not bugs.
7. **Scoped CSS never reaches child-component elements.** Astro scopes a
   component's `<style>` to its own markup; a class on an element rendered by a
   child component (e.g. the SVGs from `Icon.astro`) is not matched. State-driven
   icon swaps must wrap the descendant in `:global()`
   (`.vp[data-sound="on"] :global(.vp-ic-muted)`) or the icon never toggles.

---

## 14. Deployment (Cloudflare Pages)

1. Push to Git → Cloudflare Pages → Connect to Git.
2. Framework preset **Astro**, build `npm run build`, output `dist`.
3. Custom domain `novaatlastur.com`.
4. Email: Cloudflare Email Routing forwards `info@novaatlastur.com` once the
   domain is live (target inbox configured in the dashboard).
5. Video: upload the transcoded files to the R2 bucket under `/video/` (public
   via the `media.novaatlastur.com` custom domain); the URLs are already set in
   `src/config/site.ts`. `public/media/` is dev-only and never deployed.

---

## 15. Feature History (what exists and why)

- **v1 — Landing site:** bilingual one-pager (hero, about, services, contact),
  CSS/SVG star-sky hero, typed i18n dictionaries, WhatsApp-only conversion,
  full SEO/a11y baseline, self-hosted fonts, Lighthouse ≥95.
- **Tour showcase:** homepage carousel of four domestic routes (Kapadokya,
  Pamukkale, Karadeniz Yaylaları, Ege Kıyıları), initially flat-illustration
  cards, later real photos; auto-drift + prev/next controls + touch scrolling.
- **Mobile menu bg fix** (gotcha #1) and hero ambience (twinkle/nova) pass.
- **Rebrand pass:** "Nova Atlas Turizm" naming, dark mode with pre-paint theme
  bootstrap, TÜRSAB badge in About, social links, expanded services
  (accommodation and transport/VIP), richer hero copy grounded in the family transport
  business.
- **Tour detail pages:** `/turlar/[slug]` + `/en/tours/[slug]` from
  `src/data/tours.ts` (localized slugs, sample itineraries, highlights,
  included/good-to-know, sticky WhatsApp sidebar, other-routes strip,
  Breadcrumb/TouristTrip schema). `Base.astro` became prop-driven; language
  switch became page-aware. A11y sweep to 100 (contrast, social icons, list
  semantics).
- **Routes index + VIP:** `/rotalar` all-routes page (ItemList schema) and
  `/vip-tasimacilik` VIP transfer page with homepage teaser.
- **Brand seal:** transparent logo adopted; elegant cream/gold plaque on the
  desktop hero (float + halo + star flourish), matching About panel, compact
  centered seal under the mobile H1.
- **Video:** homepage brand-film hero (`BrandFilmHero`, 16:9, autoplay-muted,
  tap-to-unmute, fullscreen) and a reusable `VideoPlayer` powering the vertical
  9:16 Vito showcase on the VIP page (split on desktop, stacked heading → video
  → cards on mobile, lazy autoplay). Videos on Cloudflare R2; posters in-repo;
  `ffmpeg` transcodes the masters. (See §12.)

---

## 16. Pre-Merge Checklist

- [ ] `npm run build` — zero errors, expected page count.
- [ ] New copy exists in **both** `tr.ts` and `en.ts` (types enforce keys, not
      forgotten translations inside changed strings).
- [ ] New page passes `alternates` and any schema through `Base` props.
- [ ] 360px: no horizontal overflow; touch targets ≥44px.
- [ ] Both themes checked (`data-theme="light"` / `"dark"`), text ≥4.5:1.
- [ ] Images: `src/assets/` + `<Image>` with width/`widths`; lazy below fold.
- [ ] Reduced-motion behavior intact for any new animation.
- [ ] New video: hosted on R2 (not committed), poster in `src/assets/`, URL in
      `site.ts`; muted + `playsinline`, reduced-motion / Save-Data fallback,
      lazy autoplay if below the fold.
- [ ] Lighthouse (mobile) still ~≥91 perf and 100/100/100 elsewhere; CLS 0.
