

## Plan: Clean up Book Club page

### Changes to `src/pages/BookClub.tsx`

**1. Hero section (lines 62-75)**
- Remove the circular icon div (lines 63-65)
- Remove the second paragraph "We read, discuss, and grow together..." (lines 72-74)
- Add a primary black CTA button/link after the first paragraph: "Learn More" styled as a black pill button (matching site's dark CTA style)

**2. Feature cards (lines 84-123)**
- Remove "Learn More" + ExternalLink links from all three cards (lines 93-95, 106-108, 119-121)
- Change card backgrounds from pastel colors to `bg-[#F8F6F1]` to match testimonial/writing cards site-wide

**3. Bookshelf heading (line 132)**
- Change from small uppercase label (`text-[14px] uppercase tracking-wider`) to a secondary title style: `text-2xl md:text-3xl font-serif font-medium text-foreground`
- Remove `text-center` alignment (left-align to match site patterns)

**4. Clean up unused imports**
- Remove `ExternalLink` from lucide imports

### Files modified
- `src/pages/BookClub.tsx`

