## Merge Past Reads into "Favorite Books" with Currently Reading badge

Edits to `src/pages/AboutPage.tsx`:

### Changes
1. **Remove the standalone "Past Reads" section** and its heading.
2. **Rename "Current Read" → "Favorite Books"**. Keep the Artist's Way detail card at the top of this combined block.
3. **Currently Reading indicator**: next to "The Artist's Way" title, add a small pill badge with a pulsing dot and the label "Currently Reading" (uppercase tracked, border `border-background/30`, rounded-full).
4. **Embed the stacked book spines** inside the same Favorite Books section, below the Artist's Way detail (with a `mt-12` separator).
5. **Polish stacked hover**:
   - Add `hover:!z-50` (forced via important) so the hovered card always lifts to the top regardless of inline `zIndex`.
   - Increase lift to `-translate-y-8` and add subtle `hover:scale-105`, `hover:shadow-2xl`.
   - Add `pointer-events-none` to inner `<img>` so hover doesn't flicker between card edge and image.
   - Add `will-change-transform` for smoother GPU compositing.
   - Keep the staggered base `zIndex` ascending so the natural stack order reads left→right.
   - Add `focus-visible:!z-50` + lift for keyboard parity.

### Files modified
- `src/pages/AboutPage.tsx`