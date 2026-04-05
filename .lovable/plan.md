

## Fix Book Club Page: Stats Responsiveness + Content Width Alignment

### Problems
1. **Stats row breaks on small screens** — 4 stat items in a horizontal flex with `gap-8` overflow on narrow viewports
2. **"Who We Are" text is capped at `max-w-2xl`** — should expand to fill available width
3. **Section containers use `max-w-[1600px]`** instead of `max-w-4xl` like the About page

### Changes (single file: `src/pages/BookClub.tsx`)

**1. Fix stats layout for small screens**
- Change the stats strip from `flex gap-8 md:gap-12` to a `grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12`
- This gives a clean 2x2 grid on mobile, single row on desktop

**2. Remove `max-w-2xl` from Who We Are paragraph**
- Let the text expand to the full container width

**3. Align all section containers to match About page**
- Replace `container mx-auto px-8 md:px-16 max-w-[1600px]` with `max-w-4xl mx-auto px-8 md:px-16` on these sections:
  - Who We Are
  - How the Community Works
  - FAQ
- Hero and Previous Reads keep wider width since they have the image/carousel
- CTA (dark section) keeps wider width for visual impact

