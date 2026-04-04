

## Plan: Add subtle grow animation on hover for book cards

**What**: Add a smooth scale-up transition on hover to each book card in the carousel.

**How**: Add `transition-transform duration-300 hover:scale-[1.03]` to the book card container `className` in `src/pages/BookClub.tsx` (line ~168). Using `scale-[1.03]` for a subtle, refined grow effect rather than the previous `scale-105` which was too aggressive.

**File**: `src/pages/BookClub.tsx` — one line change to the card's className.

