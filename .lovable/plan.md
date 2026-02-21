

## Summary

Improve the overall spacing rhythm and typographic hierarchy across the homepage by standardizing section padding, refining heading sizes, adding consistent label patterns, and tightening gaps between content blocks.

---

### What You'll See

- More consistent vertical breathing room between sections (no more oversized or undersized gaps)
- Clearer heading hierarchy: small uppercase labels above section titles, with distinct heading sizes for primary vs secondary sections
- Tighter spacing between project cards for a more cohesive scroll experience
- Better visual rhythm from top to bottom

---

### Specific Changes

**1. Standardize section padding**
- BioBlurb: keep `pt-20 pb-0 md:pt-24 md:pb-0` (first section, needs header clearance)
- Hero: change from `py-8 md:py-12` to `py-6 md:py-8` (tighter to bio blurb above)
- IntroBlurb: keep `py-8 md:py-12` (logo bar is a light divider)
- Projects: change from `py-16 md:py-24` to `py-12 md:py-20`
- Testimonials: change from `py-16 md:py-24` to `py-12 md:py-20`
- Community: change from `py-16 md:py-24` to `py-12 md:py-20`
- Collab: keep `py-24 md:py-32` (CTA section benefits from more breathing room)

**2. Reduce gap between project cards**
- Projects section: reduce `gap-24` to `gap-16` for a tighter, more intentional scroll

**3. Add section labels (uppercase eyebrow text) to key sections**
- Projects: add "Selected Work" label above the heading
- Testimonials: add "Kind Words" label above the heading
- Community: add "Community" label above the heading

**4. Refine heading sizes for hierarchy**
- Projects heading (`Recent Work`/`Archives`): bump to `text-3xl md:text-4xl`
- Testimonials heading: keep at `text-2xl md:text-3xl` (secondary emphasis)
- Community heading: keep at `text-lg md:text-xl` (inside a card, appropriate)

**5. Testimonials section spacing**
- Reduce heading margin-bottom from `mb-12` to `mb-8`

---

### Technical Details

| File | Lines | Change |
|---|---|---|
| `src/components/Hero.tsx` | 22 | `py-8 md:py-12` to `py-6 md:py-8` |
| `src/components/Projects.tsx` | 50 | `py-16 md:py-24` to `py-12 md:py-20` |
| `src/components/Projects.tsx` | 71 | `gap-24` to `gap-16` |
| `src/components/Projects.tsx` | ~56 | Add uppercase label "Selected Work" above heading |
| `src/components/Projects.tsx` | ~58 | Heading size to `text-3xl md:text-4xl` |
| `src/components/Projects.tsx` | ~62 | Reduce `mb-12` to `mb-8` on header wrapper |
| `src/components/Testimonials.tsx` | 35 | `py-16 md:py-24` to `py-12 md:py-20` |
| `src/components/Testimonials.tsx` | 38 | Add "Kind Words" uppercase label above heading, reduce `mb-12` to `mb-8` |
| `src/components/Community.tsx` | section padding | `py-16 md:py-24` to `py-12 md:py-20` |

No new files or dependencies needed. All changes are Tailwind class adjustments and small markup additions.
