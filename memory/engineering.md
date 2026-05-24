# Engineering Notes

A single-page portfolio for **Gim Contillo** (`gicontz`). Vanilla HTML/CSS/JS,
**no build step**, **no dependencies**, license-free fonts. Just static files
served from the repo root.

## Stack & conventions
- **Fonts:** Hedvig Letters Serif (display) + Inter (UI), via Google Fonts.
- **CSS:** one stylesheet, `assets/css/styles.css`. Design tokens live in
  `:root` — `--paper`, `--paper-2`, `--ink`, `--ink-soft`, `--ink-faint`,
  `--line`, `--accent` (bronze `#9a6a3c`), `--accent-deep`, `--serif`, `--sans`,
  `--ease`, `--dur`. Reuse these rather than hard-coding colors.
- **Sections** are `.fp-section` (100vh each), tagged with `data-section`,
  `data-anchor`, `data-nav-label`. Order: Hero → About → Expertise →
  Experience → Approach → Contact.
- **Reveal animation:** add class `.fade`; it animates in when its section
  gains `.is-active`. ⚠️ `.fade` sets `transform`, so don't use `transform`
  for layout on a `.fade` element (it gets overwritten on reveal — bit us on
  `.approach-frozen`; centering there uses `margin:auto`, not translate).

## JavaScript modules (loaded as plain `<script>`, no bundler)
- **`assets/js/fullpage.js` — `SnapPage`**: tiny fullpage scroller (wheel /
  keyboard / touch / dot-nav / hash anchors). Key extension point:
  `intercept(sectionIndex, fn)` — registered handlers get first crack at each
  nav attempt; `fn(dir)` returns `true` to **consume** the scroll (no section
  change) or `false` to let navigation proceed. All input routes through
  `_nav(dir)`.
  - Options: `duration` (800), `onChange`, `touchThreshold` (120px swipe),
    `wheelRest` (320ms).
  - **Trackpad handling:** one continuous gesture = one move. Inertia/momentum
    events reset a "rest" timer instead of navigating, so the lock holds until
    scrolling idles for `wheelRest`. Prevents momentum auto-flipping pages.
- **`assets/js/carousel.js` — `Carousels`**: wires every `[data-carousel]`.
  Each carousel finds its section via the parent `data-anchor`, registers a
  `SnapPage.intercept`, and steps slides on scroll; only at the last (down) /
  first (up) slide does it yield to section nav. Entry is direction-aware via
  an `onChange` wrapper (arrive from above → slide 0, from below → last slide).
  Used by Expertise, Experience, and Approach.
- **`assets/js/about.js`**: the About title "shuffler." Arms when the About
  section gains focus, and any pointer-move / tap / click anywhere in the
  section slot-machines the `<h2>` through tech-stack & business terms while a
  subtitle fades in. Sticks once started; only resets on reload.
- **`assets/js/scroll-section.js` — `ScrollSections`**: an alternative pattern
  (internal scroll paging via `[data-scroll-section]`). **Currently unused** —
  kept for future sections that need a growable internal-scroll list.

## The three carousels (same controller, different skins)
- **Expertise** — full-bleed **Unsplash photos** + dark scrim, white overlay text.
- **Experience** — **light**, `paper-2` with a per-slide bronze `--tone` wash and
  a big faint serif number; dark text, keyword pills.
- **Approach ("How I work")** — **frozen header** overlay (eyebrow/title/lead
  stays put) + **dark palette gradient** slides (ink base + accent glow, no
  images) with a vignette scrim. Mobile: content is top-aligned 70px below the
  header via a JS-measured `--approach-offset` CSS var (set in `index.html`).

## Hero responsive images
`<picture>`: `desktop-hero.jpg` at ≥761px (cropped via `--hero-focus: 72%`),
`hero.jpg` portrait on mobile (`--hero-focus: 62%`).

## Breakpoints
- `760px` — hero layout switches to mobile (photo fills, text overlays).
- `800px` — Approach switches to top-aligned, left, footer-clearing layout.

## Run locally
```bash
python3 -m http.server 8000   # serve repo root
# optional public preview: ngrok http 8000
```

## Deploy
GitHub Pages from repo root. `.nojekyll` is present so Pages serves files as-is.
