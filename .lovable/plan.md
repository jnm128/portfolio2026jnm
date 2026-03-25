

## Update Book Club Page: 3 Changes

### 1. Restyle "What We Do" to match "Beyond the Pixels"

The "What We Do" section currently has a small uppercase label header. Change it to match the "Beyond the Pixels" style with a large serif heading and subtitle paragraph, then keep the border-separated rows below.

**In `src/pages/BookClub.tsx`**, replace the small label (lines 152-156) with:
- Large `h2` in `text-3xl md:text-5xl font-serif text-white mb-4` — "What We Do"
- Subtitle `p` in `text-base md:text-lg text-white/60 font-serif max-w-2xl` with descriptive text
- Wrap in a `mb-16` div, matching the AboutPage pattern

### 2. Make header photo wider

Change the hero photo container (line 79) from `w-36 h-48` to `w-52 h-64` to make it significantly larger.

### 3. Replace book carousel with static 2x4 grid

Remove the `Carousel` component and its imports. Replace with a simple CSS grid showing all 8 books (trim the 9th book from the array to get exactly 8) in a `grid grid-cols-2 md:grid-cols-4 gap-6` layout. Keep the "Past Reads" label, remove the carousel navigation arrows. Each book card keeps the same styling (`rounded-xl border border-foreground/10 bg-white` with cover image and title/author).

Remove unused imports: `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`.

### Files modified
- `src/pages/BookClub.tsx`

