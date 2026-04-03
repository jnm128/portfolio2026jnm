

## Plan: Rounded hero image + clickable book cards with dialog

### 1. Hero image — match home page style
Change the hero from a full-bleed background image to a contained, rounded image block (like `Hero.tsx`):
- Move text/stats **above** the image (title, subtitle, CTA button, stats bar on the cream background)
- Render the hero image below the text in a `rounded-3xl overflow-hidden` container with horizontal padding (`px-6 md:px-10`)
- Image height: `h-[40vh] md:h-[50vh]`
- Remove the full-bleed absolute positioning and dark overlay

### 2. Book cards — image only, clickable with dialog
- Add `description`, `link`, and `rating` fields to each book in the data array
- Remove the title/author text below the card — show only the cover image
- Make each card clickable (`cursor-pointer`, hover scale effect)
- On click, open a `Dialog` modal showing:
  - Book cover image
  - Title and author
  - Description paragraph
  - Jo's Rating section (e.g. star display or numeric out of 5)
  - External link button ("Get the Book")

### Technical details
**File**: `src/pages/BookClub.tsx`

- Import `Dialog, DialogContent, DialogHeader, DialogTitle` from `@/components/ui/dialog`
- Add `useState` for selected book
- Extend book data type with `description: string`, `link: string`, `rating: number`
- Hero section becomes a standard content block with `pt-20 md:pt-24 pb-6 bg-[#F8F6F1]` and the image in a padded rounded container — same pattern as `Hero.tsx`
- Card grid: remove `<div className="p-3">` block, keep only the image in a rounded container
- Dialog: cream/white background, serif typography consistent with the rest of the page

