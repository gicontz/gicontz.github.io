/**
 * scroll-section.js — sections whose inner list scrolls under scroll-hijack,
 * without being a fullpage carousel. While such a section is active, each
 * scroll pages its [data-scroll-section] container; only once that container
 * is scrolled to the bottom (down) or top (up) does the scroll fall through
 * to SnapPage and change sections. Lets a section hold an open-ended,
 * growable list (e.g. Approach) instead of a single viewport of content.
 *
 * Requires SnapPage with the intercept() hook.
 */
(function (global) {
  'use strict';

  const EDGE = 2; // px tolerance for "at the top/bottom"

  function build(fp, el) {
    const section = el.closest('[data-section]');
    if (!section) return null;
    const index = fp.anchors.indexOf(section.dataset.anchor);
    if (index < 0) return null;

    fp.intercept(index, function (dir) {
      const max = el.scrollHeight - el.clientHeight;
      if (max <= EDGE) return false; // nothing to scroll → behave like a normal section
      const step = Math.max(160, el.clientHeight * 0.7);
      if (dir > 0) {
        if (el.scrollTop < max - EDGE) {
          el.scrollTo({ top: Math.min(max, el.scrollTop + step), behavior: 'smooth' });
          return true;
        }
        return false; // at bottom → let the page advance
      }
      if (el.scrollTop > EDGE) {
        el.scrollTo({ top: Math.max(0, el.scrollTop - step), behavior: 'smooth' });
        return true;
      }
      return false; // at top → let the page go back
    });

    return { index: index, el: el };
  }

  const ScrollSections = {
    init(fp) {
      if (!fp) return;
      const regions = Array.from(document.querySelectorAll('[data-scroll-section]'))
        .map((el) => build(fp, el))
        .filter(Boolean);
      if (!regions.length) return;

      // Enter at the edge that matches travel direction: arriving from above
      // lands at the top, arriving from below lands at the bottom.
      let prev = fp.index;
      const userOnChange = fp.options.onChange;
      fp.options.onChange = function (index, anchor) {
        regions.forEach(function (r) {
          if (index !== r.index) return;
          const cameFromBelow = prev > r.index;
          r.el.scrollTop = cameFromBelow ? (r.el.scrollHeight - r.el.clientHeight) : 0;
        });
        prev = index;
        if (typeof userOnChange === 'function') userOnChange(index, anchor);
      };
    },
  };

  global.ScrollSections = ScrollSections;
})(window);
