

## Plan: Redesign Book Club Hero to Case Study Style

### What changes
Replace the current Book Club hero (text + small image side-by-side) with a full-width background image hero matching the case study pattern, using the uploaded photo as the background image.

### Steps

1. **Copy uploaded image** to `src/assets/book-club-hero.jpg`

2. **Rewrite the hero section** in `src/pages/BookClub.tsx` (lines 62-90):
   - Full-width section with `min-h-[70vh]` and the new image as background (absolute, object-cover)
   - Dark overlay (`bg-black/40`) for text readability
   - Keep existing content: "Fresh Perspectives" title, description text, "Learn More" button — but style them in white text like case study heroes
   - Remove the small side image and the side-by-side layout
   - Wrap in `PopIn` for image and `FadeIn` for text, matching case study pattern

### Technical detail

The hero markup will follow this structure:
```tsx
<section className="relative min-h-[70vh] flex items-end overflow-hidden">
  <PopIn className="absolute inset-0 -z-10">
    <img src={bookClubHero} ... className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/40" />
  </PopIn>
  <div className="w-full px-8 md:px-16 py-16 md:py-24 relative z-10">
    <FadeIn>
      <h1 className="... text-white">Fresh Perspectives</h1>
      <p className="... text-white/90">...</p>
      <a ...>Learn More</a>
    </FadeIn>
  </div>
</section>
```

The `pt-24` top padding is removed since the case study hero uses `min-h-[70vh]` with the header overlaying it.

