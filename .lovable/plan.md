

## Plan: Update Book Club page — hero branding, bookshelf redesign

### Changes to `src/pages/BookClub.tsx`

**1. Hero Section — Add logo circle + update title**
- Add a circular logo/icon element above the "Fresh Perspectives" title (similar to a brand mark — a simple circle with the initials "FP" or a BookOpen icon inside, styled as a rounded-full element)
- Keep the title as "Fresh Perspectives" (dropping "Collective")

**2. Bookshelf Section — Restyle header and grid**
- Center-align the bookshelf heading
- Reduce font size to match the marquee style: `text-[14px] uppercase tracking-wider text-muted-foreground font-medium text-center`
- Update title to something like "A Look at Our Past Reads"
- Change grid from `grid-cols-6` to `grid-cols-3` for larger book images
- Remove the shadow element (`bg-foreground/20 translate-x-2 translate-y-2`), the `shadow-lg` class, the `border`, and the spine gradient overlay
- Keep clean rounded corners with simple hover lift effect
- Add 3 more books to fill out a 3x3 grid (9 total)

### File modified
- `src/pages/BookClub.tsx`

