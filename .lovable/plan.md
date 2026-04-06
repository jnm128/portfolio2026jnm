

## Standardize Border Radius Across the Site

### Current State
The hero image uses **`rounded-3xl`** (1.5rem / 24px), which also animates to 0 on scroll. Other components use inconsistent values:
- `rounded-lg` (0.5rem) — service cards, FAQ items
- `rounded-xl` (0.75rem) — community inner image
- `rounded-2xl` (1rem) — community card, case study images, lightbox images
- `rounded-3xl` (1.5rem) — hero image, about profile image

### Proposal
Standardize all major visual containers (cards, images, sections) to **`rounded-2xl`** (1rem / 16px) as the default radius, matching the hero's visual weight without being overly round. The hero keeps `rounded-3xl` since it animates to 0 and benefits from the larger starting radius. Pills and tags stay `rounded-full`.

### Files to Update

1. **`src/components/Services.tsx`** — cards: `rounded-lg` → `rounded-2xl`
2. **`src/components/Community.tsx`** — outer card: keep `rounded-2xl`; inner image: `rounded-xl` → `rounded-2xl`
3. **`src/components/About.tsx`** — profile image: `rounded-3xl` → `rounded-2xl`; section bottom radius stays as-is (decorative)
4. **`src/components/FAQ.tsx`** — items using `rounded-lg` → `rounded-2xl`
5. **`src/components/Testimonials.tsx`** — any card containers: normalize to `rounded-2xl`
6. **`src/components/DesignPhilosophy.tsx`** — cards: normalize to `rounded-2xl`
7. **`src/components/Packages.tsx`** — package cards: normalize to `rounded-2xl`
8. **`src/components/ImageLightbox.tsx`** — thumbnail image: `rounded-2xl` (already correct); lightbox overlay image: `rounded-lg` → `rounded-2xl`
9. **`src/components/Projects.tsx`** — project images: normalize to `rounded-2xl`
10. **`src/components/Contact.tsx`** — form inputs/container if using rounded styles
11. **Case study pages** — any image containers: normalize to `rounded-2xl`

### What stays unchanged
- **Hero image**: keeps `rounded-3xl` (animates to 0)
- **Pills/tags/badges**: keep `rounded-full`
- **UI primitives** (buttons, inputs, avatars): keep their existing radii
- **`--radius` CSS variable**: remains `0.5rem` for shadcn components

### Summary
~10-12 files updated, changing `rounded-lg` and `rounded-xl` usages on visual containers to `rounded-2xl`, creating a consistent 16px radius across cards, images, and content blocks.

