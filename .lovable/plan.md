

## Fix Dynamic Header Theme Detection on All Pages

### Problem
The header's dark theme detection only works on pages that have `data-theme="dark"` on their dark sections. Currently only `BookClub.tsx` and `DarkSection.tsx` (homepage) have this attribute. The dark sections on `AboutPage.tsx` and `Work.tsx` are missing it, so the header stays light-themed when scrolling over those dark areas.

### Fix
Add `data-theme="dark"` to the dark `<section>` elements on:

1. **`src/pages/AboutPage.tsx`** (line 94) — the "Writing, Current Read & Song on Repeat" section with `bg-[#1C1C1C]`
2. **`src/pages/Work.tsx`** (line 90) — the dark CTA section with `bg-[#1C1C1C]`

No other changes needed. The existing `IntersectionObserver` in `Header.tsx` already watches for `[data-theme="dark"]` elements and will automatically pick these up.

### Files modified
- `src/pages/AboutPage.tsx`
- `src/pages/Work.tsx`

