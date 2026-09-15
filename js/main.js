/* Vedhica's Kitchen Vibes — small interactions */

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') links.classList.remove('open');
  });
}

// Newsletter (no backend — friendly confirmation only)
const form = document.querySelector('.newsletter form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = form.parentElement.querySelector('.form-note');
    const input = form.querySelector('input');
    if (note) note.textContent = `Thanks for subscribing, ${input.value.split('@')[0]}! 🧁`;
    form.reset();
  });
}

// Recipe ingredient check-off
document.querySelectorAll('.ingredients li').forEach((li) => {
  li.addEventListener('click', () => li.classList.toggle('checked'));
});

// Journey album — tab pills scroll the matching chapter into view
const albumTabs = document.querySelectorAll('.album-tabs button');
const album = document.querySelector('.album');
if (albumTabs.length && album) {
  albumTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.getElementById(tab.dataset.target);
      if (target) {
        album.scrollTo({ left: target.offsetLeft - album.offsetLeft, behavior: 'smooth' });
      }
      albumTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
  // Sync active pill as the user scrolls the album
  const cards = [...album.querySelectorAll('.album-card')];
  album.addEventListener('scroll', () => {
    const mid = album.scrollLeft + album.clientWidth / 2;
    let nearest = 0, best = Infinity;
    cards.forEach((c, i) => {
      const center = c.offsetLeft - album.offsetLeft + c.clientWidth / 2;
      const d = Math.abs(center - mid);
      if (d < best) { best = d; nearest = i; }
    });
    albumTabs.forEach((t, i) => t.classList.toggle('active', i === nearest));
  }, { passive: true });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
