

## Plan: Redesign Book Club page to match site styling

### Overview
Update the Book Club page to align with the site's established design system (cream `#F8F6F1` background, serif typography at `text-3xl md:text-5xl`, consistent container/padding patterns). Redesign the three feature cards inspired by the Podia reference — giving each a distinct soft color background with a "Learn More" external link CTA. Keep the bookshelf and bottom CTA sections but restyle them for consistency.

### Changes to `src/pages/BookClub.tsx`

**1. Hero Section**
- Switch from dark `bg-surface-6` to cream `bg-[#F8F6F1]` with `text-foreground` to match the About page hero pattern
- Use `pt-24 md:pt-28` for header clearance (matching About page)
- Heading: `text-3xl md:text-5xl font-serif` (site standard)
- Tagline: `text-base md:text-lg text-muted-foreground font-serif`
- Remove the pulsing circle indicator for a cleaner look

**2. Feature Cards Section**
- Redesign the 3 cards (Monthly Reads, Community Discussions, Fresh Perspectives) with distinct soft pastel backgrounds inspired by the Podia reference (e.g., light blue `bg-[#D4E4ED]`, warm amber `bg-[#E8C87A]`, soft lavender `bg-[#D8C8E8]`)
- Each card gets: rounded-2xl, larger padding (p-8), serif heading, description text, and an "Learn More →" link with `ExternalLink` icon
- Keep icons but make them slightly smaller and more subtle

**3. Bookshelf Section**
- Switch from `bg-muted` to cream `bg-[#F8F6F1]` for consistency
- Update heading to site-standard serif typography

**4. CTA Section**
- Move to dark section `bg-[#171717]` with white text to match the About page dark section pattern
- Restyle buttons to match site conventions (rounded-full, proper hover states)

### File modified
- `src/pages/BookClub.tsx` — full restyle

