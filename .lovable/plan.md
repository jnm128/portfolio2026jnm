## Audit findings

### A. Color contrast (WCAG AA)

Computed contrast ratios for all three themes against `--background`:

| Token | Blue | Neutral | Dark |
|---|---|---|---|
| `text-foreground` | 5.12 ✅ | 6.22 ✅ | 14.44 ✅ |
| `text-title` | 16.02 ✅ | 13.28 ✅ | 14.44 ✅ |
| `text-muted-foreground` | 10.92 ✅ | 6.81 ✅ | 9.51 ✅ |
| `text-hint` | **4.17 ❌** | **3.45 ❌** | **3.66 ❌** |
| CTA (accent-fg on accent) | 5.12 ✅ | 7.10 ✅ | 7.49 ✅ |

**Only failure:** `--hint` (currently `30 8% 45%` shared across themes) fails AA on all three themes.

**Fix:** make `--hint` per-theme:
- Blue: `30 8% 36%` → 5.90:1
- Neutral: `30 8% 30%` → 6.27:1
- Dark: `30 8% 62%` → 6.45:1

(Removes the "shared hint across themes" rule from memory.)

### B. Heading hierarchy
- `AboutPage.tsx`: two `<h1>` tags. Keep mobile h1, change desktop one to a styled `<p>` (visual identical).
- `AboutPage.tsx` & `BookClub.tsx`: small uppercase eyebrows currently `<h2>` mixed with section headings — demote eyebrows to `<h3>` so each section has exactly one `<h2>`.

### C. Image optimization & alt text
- `About.tsx` (homepage) and `BioBlurb.tsx` still load the original 1.8 MB unoptimized headshot. Switch to `/lovable-uploads/headshot-joanna.{webp,jpg}` via `SmartImage`.
- Generic `alt="Joanna Minott"` → `"Portrait of Joanna Minott"` in About, AboutPage, BioBlurb.
- `Hero.tsx` line 152: hidden placeholder image with `alt="Hero placeholder"` → `alt=""` (decorative).
- Convert remaining raw `<img>` tags on Work, Projects, Community, Gap, BookClub, CaseStudyNav, and case study pages to `SmartImage` for consistent loading shimmer + fade-in.

### D. Navigation a11y
- Header `<Link>`s do not announce active route. Add `aria-current="page"` based on `useLocation().pathname` for desktop and mobile nav.

### E. Misc
- `SmartImage`: add `aria-hidden="true"` to placeholder div.
- Delete `public/lovable-uploads/fff4e4ff-c16e-4ddc-be87-6d94481be7c8.jpg` after refs are migrated.

## Files to edit

- `src/index.css` — per-theme `--hint` values (Blue/Neutral/Dark blocks).
- `mem://design/visual-aesthetic` — remove "shared hint" claim.
- `src/pages/AboutPage.tsx` — h1 dedupe, eyebrows → h3, alt text.
- `src/pages/BookClub.tsx` — eyebrows → h3, alt text.
- `src/components/About.tsx`, `src/components/BioBlurb.tsx` — optimized headshot via `SmartImage`, alt text.
- `src/components/Hero.tsx` — placeholder `alt=""`.
- `src/components/Header.tsx` — `aria-current` on nav links.
- `src/components/ui-custom/SmartImage.tsx` — `aria-hidden` on placeholder.
- `src/components/Projects.tsx`, `Community.tsx`, `Gap.tsx`, `CaseStudyNav.tsx`, `pages/Work.tsx`, `pages/CaseStudy*.tsx`, `pages/BookClub.tsx` — raw `<img>` → `SmartImage`.
- Delete: `public/lovable-uploads/fff4e4ff-c16e-4ddc-be87-6d94481be7c8.jpg`.

## Out of scope

- Re-encoding all other 1+ MB PNGs in `lovable-uploads/`. Worth a follow-up pass.
- Keyboard-trap testing on portals (already correct per memory).
