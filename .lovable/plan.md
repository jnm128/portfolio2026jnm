

## Add Writing / LinkedIn Posts Section

Add a new "Writing" section with 3 featured LinkedIn post cards, placed between the Hero/Intro section and the Work Playlist section.

### Design
- Section header styled consistently: uppercase tracking-widest with a `PenLine` icon (from lucide-react), matching the "Work Playlist" and "Current Read" headers
- 3 cards in a responsive grid (`grid-cols-1 md:grid-cols-3`)
- Each card includes:
  - A topic/category tag (e.g., "UX Strategy", "Design Leadership")
  - Post title in serif font
  - Brief excerpt (1-2 lines, truncated)
  - "Read on LinkedIn" link with an ExternalLink icon
- Cards use `rounded-2xl border border-border/60 bg-background/40 p-6` to match the Current Read card styling
- Wrapped in a `FadeIn` animation with delay between Hero (200) and Playlist (300), so delay 250

### Data
A `linkedinPosts` array with 3 placeholder entries, each containing `category`, `title`, `excerpt`, and `url` fields. URLs will point to linkedin.com as placeholders for now.

### File changes

**`src/pages/AboutPage.tsx`**
- Import `PenLine` from lucide-react
- Add `linkedinPosts` data array above the component
- Insert a new `<section>` block between the Hero section (ends line 123) and the Playlist section (starts line 126), containing the header and a 3-column card grid
