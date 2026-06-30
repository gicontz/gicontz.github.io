/**
 * marquee.js — center-spotlight effect for the Companies marquee.
 * The track moves via a CSS @keyframes animation; this loop only reads each
 * card's current on-screen position per frame and writes a `--proximity`
 * variable (0 at the edges, 1 at the center) that CSS uses to drive scale,
 * shadow, and opacity. No transitions — the smooth pass-through comes from
 * the underlying animation, not from JS-driven transforms.
 */
(function (global) {
  'use strict';

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const Marquee = {
    init() {
      if (REDUCED) return;
      const marquee = document.querySelector('[data-marquee]');
      if (!marquee) return;
      const cards = Array.from(marquee.querySelectorAll('.company-card'));
      if (!cards.length) return;

      let rafId = 0;

      function tick() {
        const box = marquee.getBoundingClientRect();
        const cx = box.left + box.width / 2;
        const reach = box.width / 2;
        for (let i = 0; i < cards.length; i++) {
          const r = cards[i].getBoundingClientRect();
          if (r.right < box.left - 80 || r.left > box.right + 80) {
            cards[i].style.setProperty('--proximity', '0');
            continue;
          }
          const center = r.left + r.width / 2;
          const dist = Math.abs(center - cx);
          const p = Math.max(0, 1 - dist / reach);
          // Smooth the curve so the spotlight is concentrated near the middle.
          cards[i].style.setProperty('--proximity', (p * p).toFixed(3));
        }
        rafId = requestAnimationFrame(tick);
      }
      rafId = requestAnimationFrame(tick);

      // Pause the rAF loop when the tab is hidden (browser usually halts CSS
      // animations + rAF already, but this is explicit and cheap).
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) cancelAnimationFrame(rafId);
        else rafId = requestAnimationFrame(tick);
      });
    },
  };

  global.Marquee = Marquee;
})(window);
