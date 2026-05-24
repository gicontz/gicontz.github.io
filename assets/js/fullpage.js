/**
 * snappage.js — a tiny, dependency-free, license-free full-page scroller.
 * Recreates the core of fullpage.js: one section per viewport, wheel /
 * keyboard / touch navigation, animated transitions, dot navigation,
 * URL-hash anchors, and active-section sync. ~3KB, no build step.
 *
 * Usage:
 *   const fp = new SnapPage('#fp', {
 *     onChange(index, anchor) { ... }
 *   });
 */
(function (global) {
  'use strict';

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  class SnapPage {
    constructor(selector, options = {}) {
      this.root = document.querySelector(selector);
      if (!this.root) throw new Error('SnapPage: root not found');
      this.sections = Array.from(this.root.querySelectorAll('[data-section]'));
      this.anchors = this.sections.map((s, i) => s.dataset.anchor || `section-${i + 1}`);
      this.options = Object.assign({ duration: 800, onChange: null, touchThreshold: 120, wheelRest: 320 }, options);
      this.index = 0;
      this.animating = false;
      this.touchStartY = null;
      this.interceptors = {}; // { sectionIndex: fn(dir) -> true if it consumed the scroll }

      this._buildNav();
      this._bind();

      // Honor an incoming hash, else section 0.
      const fromHash = this.anchors.indexOf((location.hash || '').replace('#', ''));
      this.goTo(fromHash >= 0 ? fromHash : 0, true);
    }

    _buildNav() {
      const nav = document.createElement('nav');
      nav.className = 'fp-nav';
      nav.setAttribute('aria-label', 'Section navigation');
      this.dots = this.sections.map((section, i) => {
        const label = section.dataset.navLabel || this.anchors[i];
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'fp-dot';
        btn.setAttribute('aria-label', label);
        btn.innerHTML = `<span class="fp-dot__label">${label}</span><span class="fp-dot__mark"></span>`;
        btn.addEventListener('click', () => this.goTo(i));
        nav.appendChild(btn);
        return btn;
      });
      document.body.appendChild(nav);
      this.nav = nav;
    }

    // Register a per-section scroll handler. When the section is active, it
    // gets first crack at each navigation attempt; returning true consumes
    // the scroll (no section change), false lets navigation proceed.
    intercept(index, fn) { this.interceptors[index] = fn; }

    _nav(dir) {
      const fn = this.interceptors[this.index];
      if (fn && fn(dir)) return; // consumed by the section (e.g. carousel)
      this.goTo(this.index + dir);
    }

    _bind() {
      // Wheel — one continuous gesture = one move. Trackpads emit a long tail
      // of inertia events after a flick; we keep the lock alive until scrolling
      // has rested (idle gap) so momentum can't auto-flip through pages.
      let wheelLock = false;
      let restTimer = null;
      const rest = () => {
        clearTimeout(restTimer);
        restTimer = setTimeout(() => { wheelLock = false; }, this.options.wheelRest);
      };
      this.root.addEventListener('wheel', (e) => {
        if (REDUCED) return; // let native scroll happen
        e.preventDefault();
        if (Math.abs(e.deltaY) < 8) return;
        if (wheelLock || this.animating) { rest(); return; } // still gliding → hold the lock
        wheelLock = true;
        this._nav(e.deltaY > 0 ? 1 : -1);
        rest();
      }, { passive: false });

      // Keyboard
      window.addEventListener('keydown', (e) => {
        if (['ArrowDown', 'PageDown'].includes(e.key)) { e.preventDefault(); this._nav(1); }
        else if (['ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); this._nav(-1); }
        else if (e.key === 'Home') { e.preventDefault(); this.goTo(0); }
        else if (e.key === 'End') { e.preventDefault(); this.goTo(this.sections.length - 1); }
      });

      // Touch
      this.root.addEventListener('touchstart', (e) => { this.touchStartY = e.touches[0].clientY; }, { passive: true });
      this.root.addEventListener('touchend', (e) => {
        if (this.touchStartY === null) return;
        const dy = this.touchStartY - e.changedTouches[0].clientY;
        if (Math.abs(dy) > this.options.touchThreshold) this._nav(dy > 0 ? 1 : -1);
        this.touchStartY = null;
      }, { passive: true });

      // Hash links elsewhere on the page (e.g. nav CTA, contact)
      document.addEventListener('click', (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const i = this.anchors.indexOf(a.getAttribute('href').slice(1));
        if (i >= 0) { e.preventDefault(); this.goTo(i); }
      });

      window.addEventListener('hashchange', () => {
        const i = this.anchors.indexOf((location.hash || '').replace('#', ''));
        if (i >= 0 && i !== this.index) this.goTo(i);
      });
    }

    goTo(i, instant = false) {
      i = Math.max(0, Math.min(this.sections.length - 1, i));
      if (i === this.index && !instant) return;
      this.index = i;

      if (REDUCED) {
        this.sections[i].scrollIntoView({ behavior: instant ? 'auto' : 'smooth' });
      } else {
        this.animating = true;
        this.root.style.transform = `translateY(-${i * 100}vh)`;
        if (instant) {
          const prev = this.root.style.transition;
          this.root.style.transition = 'none';
          // force reflow then restore
          void this.root.offsetHeight;
          this.root.style.transition = prev;
        }
        setTimeout(() => { this.animating = false; }, instant ? 0 : this.options.duration);
      }

      this.dots.forEach((d, di) => d.classList.toggle('is-active', di === i));
      this.sections.forEach((s, si) => s.classList.toggle('is-active', si === i));

      const anchor = this.anchors[i];
      if (history.replaceState) history.replaceState(null, '', `#${anchor}`);
      document.body.dataset.section = anchor;
      if (typeof this.options.onChange === 'function') this.options.onChange(i, anchor);
    }
  }

  global.SnapPage = SnapPage;
})(window);
