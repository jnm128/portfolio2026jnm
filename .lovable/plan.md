

## Plan: Reduce top whitespace on About page

The current spacing comes from two sources: `pt-28 md:pt-36` on the outer `<div>` (header clearance) and `pt-10 md:pt-16` on the section itself. Combined, that's too much gap.

### Change in `src/pages/AboutPage.tsx`

- Reduce the outer div from `pt-28 md:pt-36` to `pt-24 md:pt-28` (tighter header clearance)
- Remove the section's own top padding: change `pt-10 md:pt-16` to `pt-0`

This puts the content roughly 32px below the nav.

### Files modified
- `src/pages/AboutPage.tsx`

