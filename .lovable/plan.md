

## Fix Book Club layout for mobile

The "More About Us" section header (lines 130-165) uses `flex items-end justify-between` to place the title, metrics, and carousel arrows all in one row. On a 440px viewport this breaks — three groups crammed horizontally with no wrapping.

### Changes (1 file: `src/pages/BookClub.tsx`)

**Lines 130-165 — "More About Us" header block:**

- Change the outer wrapper from a single horizontal flex row to a stacked layout: `flex flex-col` instead of `flex items-end justify-between`
- Title + subtitle: stays as-is (block-level `<div>`)
- Metrics row: keep `flex gap-12 md:gap-16 mt-8` but move it outside the horizontal flex so it stacks below the title naturally
- Carousel arrows: wrap in a `flex items-center justify-between mt-8` row together with the metrics on desktop, or just stack below on mobile. Use `flex flex-wrap items-end justify-between` at the top level with the arrows, and let the metrics sit on their own row below both.

Specific approach:
1. Outer div: `flex flex-col mb-12`
2. Inner top row: `flex items-end justify-between` containing only the title/subtitle div and the carousel arrows
3. Metrics row: separate div below with `flex gap-8 md:gap-16 mt-8`, using smaller text on mobile (`text-2xl md:text-4xl`)

This ensures clean stacking on mobile while preserving the side-by-side title+arrows on desktop.

