

## Interactive Bookshelf for "Past Reads"

Replace the current 2x4 card grid with a CSS-illustrated bookshelf where each book is rendered as a colored spine standing upright on a shelf. Hovering a spine shows a tooltip with the book title; clicking opens a modal with the book cover, title, author, and a purchase link.

### Visual Design

```text
┌──────────────────────────────────────────────┐
│  ║  ║   ║  ║  ║   ║  ║  ║                   │
│  ║  ║   ║  ║  ║   ║  ║  ║   ← book spines   │
│  ║  ║   ║  ║  ║   ║  ║  ║     (varying       │
│  ║  ║   ║  ║  ║   ║  ║  ║      widths,       │
│  ║  ║   ║  ║  ║   ║  ║  ║      heights,      │
│  ║  ║   ║  ║  ║   ║  ║  ║      colors)       │
├──────────────────────────────────────────────┤  ← shelf edge
└──────────────────────────────────────────────┘
```

### Data Changes

Add `purchaseUrl` and `spineColor` fields to each book object. Assign rich, varied colors inspired by the reference image (burgundy, navy, forest green, deep red, brown, gold-accented tones). Add placeholder Amazon/Bookshop links.

### Implementation — `src/pages/BookClub.tsx`

1. **Replace the grid** (lines 110-135) with a bookshelf component:
   - A `flex items-end` container representing books standing on a shelf
   - Each book spine is a tall, narrow `div` with varying `width` (28-48px), `height` (160-200px), and `backgroundColor` from the data
   - Spines have subtle details: vertical text (book title rotated 90deg), slight rounded corners at top, and a `hover:brightness-110 hover:-translate-y-1` effect
   - A horizontal "shelf" bar below (`h-3 bg-[#8B7355] rounded-b shadow-md`)

2. **Tooltip on hover**: Wrap each spine in a `Tooltip` (from existing `src/components/ui/tooltip.tsx`) showing the book title and author.

3. **Modal on click**: Use the existing `Dialog` component. Clicking a spine opens a dialog showing:
   - Book cover image (large)
   - Title and author in serif font
   - "Purchase" button linking to `purchaseUrl` (opens in new tab)

4. **Responsive**: On mobile (`< md`), spines get slightly narrower; the shelf scrolls horizontally if needed via `overflow-x-auto`.

### Files Modified
- `src/pages/BookClub.tsx` — replace grid with bookshelf, add Dialog + Tooltip imports, add `purchaseUrl`/`spineColor` to book data

