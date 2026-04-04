

## Book Detail Modal Updates

Three changes to the book detail dialog:

### 1. Square modal with centered book image
In `src/pages/BookClub.tsx`, update the `DialogContent` to use `aspect-square` sizing and center the book cover image instead of stretching it edge-to-edge.
- Change the image container from `aspect-[3/4] max-h-[280px] overflow-hidden` to a centered layout with padding, displaying the book cover at a reasonable size with `object-contain` and centered alignment.
- Add `rounded-lg` to the image itself for rounded corners on the book cover.
- Make the modal aspect closer to square by using `max-w-sm` or similar.

### 2. Rounded corners on the modal
Add `rounded-2xl` to the `DialogContent` className (overriding the default `sm:rounded-lg`).

### 3. Overlay above the nav bar
In `src/components/ui/dialog.tsx`, increase the `DialogOverlay` z-index from `z-50` to `z-[100]` and similarly update `DialogContent` to `z-[100]` so the overlay and modal sit above the fixed header.

### Files to modify
- `src/pages/BookClub.tsx` — modal layout and image styling
- `src/components/ui/dialog.tsx` — z-index for overlay and content

