

## Fix Hero Text Alignment on Tablet

### Problem
On tablet (stacked layout below `lg`), the text content has no width constraint and the `items-center` class on the flex container is centering the text block. The title and description should be left-aligned to match the full width of the hero image below it.

### Fix — `src/pages/BookClub.tsx`

**Line 114:** Change `items-center` to `items-start` so in the stacked (tablet) layout the text block aligns to the left edge, matching the image width:

```tsx
<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
```

This ensures text and image share the same left edge on tablet, while keeping vertical centering for the side-by-side desktop layout.

### File modified
- `src/pages/BookClub.tsx`

