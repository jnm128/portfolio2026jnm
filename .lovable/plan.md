

## Add More Top Padding to Hero Title

The Work page has `pt-32 md:pt-40` while the Hero has `pt-20 md:pt-24`. Increasing the Hero's top padding to match will give the title more breathing room below the header.

### Change — `src/components/Hero.tsx`

**Line 55:** Change `pt-20 md:pt-24` → `pt-32 md:pt-40`

This aligns the homepage title spacing with the Work page for visual consistency.

