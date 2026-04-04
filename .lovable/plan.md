

## Plan: Book list carousel, typography fix, and CTA card

### 1. Past Reads — horizontal scroll carousel (like Testimonials)
Replace the current 2x4 grid with a horizontally scrollable carousel:
- Add prev/next arrow buttons (rounded, same style as Testimonials: `w-9 h-9 rounded-full backdrop-blur-md bg-white/10 border border-white/20`)
- Wait — this section is on cream background, so arrows use foreground colors instead (`bg-foreground/10 border-foreground/20`)
- Book cards become larger: `w-[220px] md:w-[260px]` with `aspect-[3/4]`, displayed in a horizontal flex row with `overflow-x-auto` and `snap-x`
- Each card stays image-only, clickable, with the existing dialog behavior
- Show ~3-4 books at a time on desktop, scrollable for the rest
- Add a header row with "Past Reads" title on the left and arrow buttons on the right (matching Testimonials pattern)

### 2. "What We Do" heading font fix
- Change `h3` elements ("Read Together", "Discuss & Reflect", "Stay Connected") from `text-xl md:text-2xl` to `text-lg md:text-xl` to match the site's standard subheading scale used elsewhere

### 3. CTA — cream card style (matching Community component)
Replace the current centered text CTA with a card layout matching `Community.tsx`:
- Wrap in a `rounded-2xl p-6 md:p-8 bg-[#F8F6F1]` card
- Use a 60/40 flex layout: text on left (`md:w-2/5`), image on right (`md:w-3/5`)
- Left side: heading, description paragraph, "Join the Club" link/button
- Right side: a relevant image in `rounded-xl overflow-hidden` with `aspect-[16/9]`
- Text colors become foreground (dark) since the card is cream on dark background

### Technical details

**File**: `src/pages/BookClub.tsx`

- Add `useState` for carousel index, `ChevronLeft`/`ChevronRight` imports from lucide-react
- Past Reads section: replace grid with a flex container (`flex gap-6 overflow-x-auto snap-x snap-mandatory`) or use index-based sliding with `transform: translateX`
- CTA section: restructure to match the `Community.tsx` card pattern exactly — `rounded-2xl bg-[#F8F6F1]` card with two-column layout
- Reuse `bookClubHero` image (or community-books.jpeg) for the CTA card's right side

