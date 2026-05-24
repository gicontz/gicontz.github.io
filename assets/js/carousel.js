/**
 * carousel.js — section carousels whose advance is driven by page scroll.
 * Every [data-carousel] becomes a single-slide carousel: while its section is
 * active, scroll-down steps to the next slide and scroll-up steps back; only
 * at the last (down) or first (up) slide does the scroll fall through to
 * SnapPage and change sections. Entry direction is honored so motion feels
 * continuous. Used by both Expertise (photos) and Experience (color-touched).
 *
 * Requires SnapPage with the intercept() hook.
 */
(function (global) {
  'use strict';

  function build(fp, root) {
    const section = root.closest('[data-section]');
    if (!section) return null;
    const index = fp.anchors.indexOf(section.dataset.anchor);
    if (index < 0) return null;

    const track = root.querySelector('.carousel__track');
    const slides = Array.from(root.querySelectorAll('.slide'));
    const dotsWrap = root.querySelector('.carousel__dots');
    const last = slides.length - 1;
    if (last < 0) return null;

    let cur = -1;

    const dots = slides.map((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'carousel__dot';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', 'Slide ' + (i + 1));
      b.addEventListener('click', () => go(i));
      dotsWrap.appendChild(b);
      return b;
    });

    function go(i) {
      i = Math.max(0, Math.min(last, i));
      if (i === cur) return;
      cur = i;
      track.style.transform = 'translateX(-' + (cur * 100) + '%)';
      dots.forEach((d, di) => d.classList.toggle('is-active', di === cur));
      slides.forEach((s, si) => s.classList.toggle('is-current', si === cur));
    }
    go(0);

    // Consume scroll until we run off either end of the stack.
    fp.intercept(index, function (dir) {
      if (dir > 0) {                 // scrolling down
        if (cur < last) { go(cur + 1); return true; }
        return false;                // at last slide → let the page advance
      }
      if (cur > 0) { go(cur - 1); return true; } // scrolling up
      return false;                  // at first slide → let the page go back
    });

    return { index: index, last: last, go: go };
  }

  const Carousels = {
    init(fp) {
      if (!fp) return;
      const carousels = Array.from(document.querySelectorAll('[data-carousel]'))
        .map((root) => build(fp, root))
        .filter(Boolean);
      if (!carousels.length) return;

      // On entering a carousel section, land on the slide that matches the
      // travel direction so the next scroll continues naturally.
      let prev = fp.index;
      const userOnChange = fp.options.onChange;
      fp.options.onChange = function (index, anchor) {
        carousels.forEach(function (c) {
          if (index !== c.index) return;
          if (prev < c.index) c.go(0);
          else if (prev > c.index) c.go(c.last);
        });
        prev = index;
        if (typeof userOnChange === 'function') userOnChange(index, anchor);
      };
    },
  };

  global.Carousels = Carousels;
})(window);
