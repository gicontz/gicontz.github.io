# gim-consultancy

Personal portfolio / CV for **Gim Contillo** — a brief, elegant, single-page
site with full-viewport snap-scrolling sections.

It recreates the feel of [fullpage.js](https://alvarotrigo.com/fullPage/)
**without the license** via a tiny in-house engine, `assets/js/fullpage.js`
(`SnapPage`): wheel / keyboard / touch navigation, animated section
transitions, dot navigation, URL-hash anchors, and `prefers-reduced-motion`
fallback to native scrolling.

## Stack
- Static HTML + CSS + vanilla JS — **no build step, no dependencies**
- Google Fonts: Hedvig Letters Serif (display) + Inter (body)
- Deployable as-is to GitHub Pages (`.nojekyll` included)

## Structure
```
index.html              # sections: Home, About, Expertise, Experience, Work, Contact
assets/css/styles.css   # elegant editorial theme (warm paper + bronze accent)
assets/js/fullpage.js   # SnapPage — the license-free fullpage engine
```

## Run locally
Any static server, e.g.:
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Navigation
- Mouse wheel / trackpad, Arrow / PageUp / PageDown / Home / End keys, touch swipe
- Side dots (click to jump); URL updates to `#section`

## Deploy (GitHub Pages)
Push to a repo and enable Pages on the default branch (root). No build needed.

## Notes
- Content is **placeholder copy** — to be upgraded later. Concept retained from
  the previous `gicontz.github.io` (fullpage-scrolling CV), redesigned for a
  more refined, editorial look.
