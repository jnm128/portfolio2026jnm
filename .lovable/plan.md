## Differentiate the Blue theme swatch

In `src/components/ThemeToggle.tsx`, the first swatch currently uses the cream background color `#F5F2EE`, which looks nearly identical to the second (Neutral, `#E6DFD2`).

Swap the Blue swatch's display color to the slate-blue accent that defines the Blue theme, so the picker reads as three clearly distinct dots.

### Change
- `SWATCHES[0].color`: `#F5F2EE` → `#4F6A80` (the Blue theme's slate accent token).

Neutral (`#E6DFD2`) and Dark (`#211B16`) stay as-is.

### Files modified
- `src/components/ThemeToggle.tsx`
