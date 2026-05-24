# CLAUDE.md

Guidance for Claude Code working in this repo.

## What this is
A single-page portfolio / CV for **Gim Contillo** (`gicontz`) — software
engineer & technical consultant. Static site: **vanilla HTML/CSS/JS, no build
step, no dependencies, no package manager.** Edit files and reload.

## Layout of the repo
```
index.html              # the whole page (all sections inline)
.nojekyll               # tell GitHub Pages to serve files as-is
assets/
  css/styles.css        # single stylesheet; tokens in :root
  js/fullpage.js        # SnapPage — the fullpage scroller + intercept() hook
  js/carousel.js        # Carousels — scroll-hijacked slide carousels
  js/about.js           # interactive About title shuffler
  js/scroll-section.js  # ScrollSections — unused, kept for future
  img/                  # hero.jpg (mobile), desktop-hero.jpg (desktop)
memory/                 # project context: engineering.md, decisions.md
```
Read **`memory/engineering.md`** (how it works) and **`memory/decisions.md`**
(why) before making non-trivial changes.

## Run / preview
```bash
python3 -m http.server 8000     # then open http://localhost:8000
ngrok http 8000                 # optional: public preview URL
```
There is no test suite, linter, or build. "Verify" = load it in the browser.

## Conventions
- **Use the CSS tokens** in `:root` (`--ink`, `--accent`, `--paper`, …) instead
  of hard-coded colors. Match the existing editorial, restrained style.
- **Reveal animation:** add `.fade` to an element to have it animate in with its
  section. ⚠️ `.fade` drives `transform` — never rely on `transform` for layout
  on a `.fade` element; it's overwritten on reveal. Use `margin`, `inset`, etc.
- **Sections** are `.fp-section` with `data-section` / `data-anchor` /
  `data-nav-label`. The side-dot nav and hash routing build off these.
- **Multi-item sections** are carousels: a `[data-carousel]` containing a
  `.carousel__track` of `.slide`s + an empty `.carousel__dots`. They scroll-hijack
  (step slides, then hand off to section nav at the ends). To add a slide, copy a
  `.slide` block — the controller wires dots/intercept automatically.
- **Extending scroll behavior:** register `SnapPage.intercept(index, fn)` rather
  than touching the wheel/touch handlers. `fn(dir)` returns `true` to consume the
  scroll, `false` to let the section change.

## Gotchas
- Trackpad/touch sensitivity is tuned (`touchThreshold`, `wheelRest` options on
  `SnapPage`); don't lower them without testing momentum behavior on a trackpad.
- `prefers-reduced-motion` falls back to native scrolling — keep it working.
- Approach mobile layout depends on a JS-measured `--approach-offset` (set in the
  inline script in `index.html`); recompute it if the frozen header changes.

## Deploy
GitHub Pages serves the repo root (`.nojekyll` present). Commit and push to the
configured Pages branch.

## Git
Commit/push only when asked. Co-author trailer on commits:
`Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`
