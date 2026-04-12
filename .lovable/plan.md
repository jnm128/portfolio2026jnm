

## Fix: Render Lightbox Overlay via Portal

The lightbox overlay is trapped inside parent containers that have `overflow: hidden` and CSS transforms (from `FadeIn` animations), which break `fixed` positioning. The fix is to render the overlay using `ReactDOM.createPortal` to `document.body`.

### Change

**`src/components/ImageLightbox.tsx`**:
- Import `createPortal` from `react-dom`
- Wrap the `{isOpen && ...}` overlay block in `createPortal(..., document.body)` so it renders at the top level of the DOM, independent of any parent overflow or transform constraints

### Files Modified
- `src/components/ImageLightbox.tsx`

