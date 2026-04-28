## Refine case study cards

Apply to both `src/components/Projects.tsx` (homepage) and `src/pages/Work.tsx`.

### Changes

1. **Remove hover state on card border**
   - Remove `transition-colors hover:border-accent` from the card wrapper in `Projects.tsx`.

2. **Reduce card padding**
   - Change card padding from `p-8 md:p-16` → `p-4 md:p-6`.

3. **Reduce gap between image and text**
   - Change inner flex gap from `gap-8 md:gap-16` → `gap-6 md:gap-8`.

4. **Increase image size within frame**
   - Change image column width from `md:w-2/3` → `md:w-3/4`.
   - Change text column width from `md:w-1/3` → `md:w-1/4`.
   - Change image aspect ratio from `aspect-[16/9]` → `aspect-[4/3]` so the image fills more vertical space within the taller card frame.

### Out of scope
- Card min-height (keeps one-per-viewport behavior)
- Typography sizes
- Background/border colors
- Alternating left/right layout
