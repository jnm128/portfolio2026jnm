

## Plan: Add group photo before CTA section

### Changes to `src/pages/BookClub.tsx`

1. **Copy uploaded image** to `src/assets/book-club-group.png`

2. **Add centered image** between the "What We Do" section and the "Get Involved CTA" section — inside the dark `bg-[#1C1C1C]` area, matching the decorative image pattern from the hero (rounded corners, slight shadow). The image will be centered, constrained width (`max-w-2xl`), with rounded-xl corners, wrapped in a `FadeIn`.

Since both CTA and What We Do sections are `bg-[#1C1C1C]`, the image sits naturally between them with no visual break.

### Files modified
- `src/assets/book-club-group.png` (copy)
- `src/pages/BookClub.tsx`

