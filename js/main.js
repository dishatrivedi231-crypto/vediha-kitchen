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

// Forms — delivered to the parent inbox via FormSubmit (no backend needed)
const PARENT_ENDPOINT = 'https://formsubmit.co/ajax/amit.agr.ca@gmail.com';
document.querySelectorAll('form[data-formsubmit]').forEach((form) => {
  const note = form.querySelector('.form-note') || (form.parentElement && form.parentElement.querySelector('.form-note'));
  const isContact = form.classList.contains('contact-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const data = Object.fromEntries(new FormData(form).entries());
    data._subject = form.dataset.subject || 'Vedhica’s Kitchen — form';
    data._template = 'box';
    data._captcha = 'false';
    if (note) { note.style.color = ''; note.textContent = 'Sending…'; }
    if (btn) btn.disabled = true;
    try {
      const res = await fetch(PARENT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('bad status');
      form.reset();
      if (note) note.textContent = isContact
        ? 'Thank you! Your message is on its way. 🧁'
        : 'Thanks for subscribing! 🧁';
    } catch (err) {
      if (note) { note.style.color = 'var(--terracotta)'; note.textContent = "Hmm, that didn't send — please try again in a moment."; }
    } finally {
      if (btn) btn.disabled = false;
    }
  });
});

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
