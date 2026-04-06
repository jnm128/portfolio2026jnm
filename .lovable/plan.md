## Fix Book Club Hero — Remove Double Padding on Tablet

### Problem

The hero uses `container mx-auto px-8 md:px-16`, but the Tailwind `container` class already applies its own padding (`1.5rem` default, `3rem` at md). This double-padding creates excessive side margins at 751px, making the content appear center-floated rather than edge-to-edge.

### Fix — `src/pages/BookClub.tsx`

**Line 112:** Replace `container mx-auto` with just `mx-auto` so only the explicit `px-8 md:px-16` padding applies (matching site-wide convention):

```tsx
<div className="mx-auto px-8 md:px-16 max-w-[1600px]">
```

This is the same pattern the other sections on this page already use (e.g., the "Previous Reads" section on line 162 also uses `container mx-auto` — but the narrower `max-w-4xl` sections like "Who We Are" just use `max-w-4xl mx-auto px-8 md:px-16` without `container`).

**Also fix line 162** (Previous Reads) and **line 230** (CTA section) — both use `container mx-auto px-8 md:px-16 max-w-[1600px]` and will have the same double-padding issue. Remove `container` from those too.

&nbsp;

also reduce size of hero image on tablet too.

### Summary

- Remove `container` class from hero, Previous Reads, and CTA sections (lines 112, 162, 230)
- Keep `mx-auto px-8 md:px-16 max-w-[1600px]` for consistent full-width layout
- No other changes

&nbsp;