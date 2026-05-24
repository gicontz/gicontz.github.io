/**
 * about.js — playful "what I'm working with" title shuffler.
 * The effect arms when the About section comes into focus, then any pointer
 * move, tap, or click anywhere in the section slot-machines the title through
 * tech stacks and business tasks while a subtitle fades in. It never reverts —
 * the editorial default only returns on a fresh page load / refresh.
 */
(function () {
  'use strict';

  const head = document.querySelector('[data-about]');
  if (!head) return;

  const section = head.closest('.fp-section') || head;
  const titleEl = head.querySelector('.about-title');
  const subEl = head.querySelector('.about-sub');
  const defaultHTML = titleEl.innerHTML;

  const SUBTITLE = "I'm working with…";
  const SWAP_MS = 90; // throttle so fast moves don't strobe

  const ITEMS = [
    'TypeScript & React',
    'Node.js services',
    'Python data pipelines',
    'System architecture',
    'Cloud infrastructure',
    'API & contract design',
    'Database modeling',
    'CI/CD automation',
    'Front-end & UX',
    'Performance tuning',
    'Market analysis',
    'Growth & marketing',
    'Product strategy',
    'Technical audits',
    'Team enablement',
  ];

  // Keep the default referenced so a hard reload restores it; once the
  // shuffler starts it stays on for the life of the page.
  void defaultHTML;

  let playing = false;
  let lastSwap = 0;

  function pick() {
    let next;
    do { next = ITEMS[(Math.random() * ITEMS.length) | 0]; }
    while (next === titleEl.textContent && ITEMS.length > 1);
    return next;
  }

  function start() {
    if (playing) return;
    playing = true;
    head.classList.add('is-playing');
    subEl.textContent = SUBTITLE;
    titleEl.textContent = pick(); // first swap so focus alone shows the effect
    lastSwap = Date.now();
  }

  function shuffle() {
    if (!playing) { start(); return; }
    const now = Date.now();
    if (now - lastSwap < SWAP_MS) return;
    lastSwap = now;
    titleEl.textContent = pick();
  }

  // Arm when the section gains focus (SnapPage toggles .is-active on nav).
  if (section.classList.contains('is-active')) start();
  new MutationObserver(function () {
    if (section.classList.contains('is-active')) start();
  }).observe(section, { attributes: true, attributeFilter: ['class'] });

  // Tap / click / pointer anywhere in the section keeps it shuffling.
  section.addEventListener('mousemove', shuffle);
  section.addEventListener('click', shuffle);
  section.addEventListener('touchstart', shuffle, { passive: true });
  section.addEventListener('touchmove', shuffle, { passive: true });
})();
