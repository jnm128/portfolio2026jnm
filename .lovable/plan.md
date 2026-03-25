

## Widen Content on About, Work, and Book Club Pages

**Problem**: About, Work, and Book Club pages use `max-w-4xl mx-auto` (max 896px), leaving content narrower than the Contact page which spans full-width within its padding. This creates inconsistent content widths across pages.

**Solution**: Remove the `max-w-4xl` constraint and replace with `max-w-[1600px]` (matching the homepage container pattern) so content fills the available space up to the padding edges, consistent with Contact.

### Files to Update

**`src/pages/Work.tsx`** — 3 container divs:
- Line 39: `max-w-4xl mx-auto px-8 md:px-16` → `max-w-[1600px] mx-auto px-8 md:px-16`
- Line 53: same change
- Line 90: same change

**`src/pages/AboutPage.tsx`** — 2 container divs:
- Line 48: `max-w-4xl mx-auto px-8 md:px-16` → `max-w-[1600px] mx-auto px-8 md:px-16`
- Line 97: same change

**`src/pages/BookClub.tsx`** — all `max-w-4xl` container divs → `max-w-[1600px]`

**`src/components/Community.tsx`** — already uses `max-w-[1600px]`, no change needed.

### What stays the same
- Padding (`px-8 md:px-16`) remains unchanged
- Internal content constraints like `max-w-2xl` on paragraphs stay as-is for readability
- Contact page is untouched

