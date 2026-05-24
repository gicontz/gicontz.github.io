# Decisions

Why the site is built and framed the way it is.

## Content / positioning
- **NDA-safe framing.** All client work is under NDA, so there are no case
  studies or logos. The old "Recent projects" section was reframed into
  **Approach ("How I work")** — the delivery lifecycle Gim owns solo:
  **MVP → Production → Maintenance → Scaling**, plus **AI-Augmented Delivery**
  (orchestrating AI agents, managing context across projects/teams). This turns
  the constraint into the pitch: not "what did you build?" but "what can you
  take off my plate?" — and answers "can one person do all this?" with the whole
  arc.
- **Experience condensed to 3 slots** (Present / Previously / Foundation) to keep
  the original timeline rhythm. Cloud Employee APAC + Samsung R&D PH are paired
  under "Previously" (both 2020–2023, senior/lead); Accenture is "Foundation."
  Real companies, dates, and keyword pills added.
- **Hero identity.** Dropped the literal "Gim Contillo" headline; the IPA
  `/jim-el/` is the hero, baseline-aligned with the word "gimel" (the meaning of
  the name). Topbar brand is the username **`gicontz`**. Footer: "Gim Consulting"
  (no hyphen).

## Interaction / UX
- **Scroll-hijack carousels, not fullpage flips,** for multi-item sections
  (Expertise / Experience / Approach). Scrolling steps through items in place and
  only changes section at the ends — lets a section hold several items without
  extra full pages. Implemented via the generic `SnapPage.intercept()` hook so
  the page controller stays unaware of carousels.
- **Approach uses the dark color palette, not photos.** Brand consistency, depth
  from a vignette + accent glow, and zero external image requests. (Expertise
  still uses photos.)
- **Sensitivity tuning.** Touch swipe threshold raised to 120px; trackpad wheel
  uses gesture-rest debouncing (`wheelRest`) so momentum doesn't auto-flip pages.
- **About title is interactive** as a bit of personality — arms on section focus,
  responds to taps/moves anywhere in the section, and sticks (no revert) until
  reload.

## Technical
- **No framework, no build, no dependencies.** Hand-rolled `SnapPage` instead of
  fullpage.js (license + weight). Everything is static files servable from the
  repo root → trivial GitHub Pages hosting with `.nojekyll`.
- **`.fade` + `transform` conflict:** `.fade` animates via `transform`, so layout
  that needs `transform` (e.g. centering) must use another mechanism. Centering
  of `.approach-frozen` uses `margin:auto` for this reason.
