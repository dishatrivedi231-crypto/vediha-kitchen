# Vedhica's Kitchen 🧁
### Good Vibes & Velvety Wonders

A simple, story-driven baking blog — pure **HTML, CSS & JavaScript**, ready for GitHub Pages (no build step).

> A ten-year-old who turned kitchen mistakes into kindness — one eggless, sugar-free cupcake at a time.

## Pages
```
index.html                          Home — pitch, the 4-beat story, teasers
my-story.html                       Narrative essay + "A Chat with Vedhica" Q&A + origin videos
the-journey.html                    Tabbed photo-album: 4 chapters
journey/
  chapter-1-the-little-helper.html  Chapter 1 (full)
recipes.html                        Recipe book — 5 categories
recipes/
  fluffy-pancakes.html              Recipe post (with video)
  vanilla-cupcakes.html             Recipe post (with video)
baking-to-make-a-difference.html    Charity — collage, impact story, live counter
watch.html                          YouTube videos, framed as "how it started"
css/style.css                       All styling + palette + components
js/main.js                          Menu, album tabs, ingredient check-off, counter
assets/journey/ch1/                 Chapter 1 photos (optimized, metadata-stripped)
```

## The story spine (4 beats)
Curiosity → Struggle → Care → Purpose. Every page traces back to one of these.

## The Journey — 4 chapters
1. **The Little Helper** (earliest → age ~4) — *done*
2. **Learning to Fly Solo** (age 5 → ~2023) — placeholder
3. **Baking With a Reason** (2024 → mid-2026) — placeholder
4. **Velvety Wonders — Giving Back** (present → ongoing) — placeholder

Each future chapter follows the exact layout of Chapter 1.

## Add a new chapter
1. Copy `journey/chapter-1-the-little-helper.html`, rename it.
2. Drop its photos in `assets/journey/chN/` (optimize + strip metadata first — see below).
3. Fill in the text and images.
4. On `the-journey.html`, swap that chapter's card `.cover.placeholder` for a real cover image and point the button to the new page.

## Optimize + strip metadata from photos (important for a child's blog)
```bash
sips -s format jpeg -s formatOptions 80 --resampleWidth 1200 input.HEIC --out output.jpg
```
`sips` re-encodes and drops EXIF/GPS location data in one step.

## Update the charity counter
Edit the number in `baking-to-make-a-difference.html`:
`<span id="cupcake-count">50</span>` and the stat tiles.

## Trust & safety (already applied)
- First name only; no school name ("a Year 6 student in Dubai").
- Photo EXIF/location data stripped on import.
- No direct contact to Vedhica — the contact button and newsletter route to a parent's inbox
  (update the `mailto:` in `baking-to-make-a-difference.html` to the real parent address).
- No public comment section.
- Charity funds handled through an adult-controlled account (wording only).

## Publish on GitHub Pages
1. Push these files to a GitHub repo.
2. **Settings → Pages → Branch: `main` / root → Save**.
3. Live at `https://<username>.github.io/<repo>/`.

## Preview locally
```bash
python3 -m http.server 8000
```
Then visit http://localhost:8000
