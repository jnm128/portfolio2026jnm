

## Plan: Add Home nav link and align Footer with Header

### Changes

**1. `src/components/Header.tsx`** — Add "Home" link before "Work" in both desktop and mobile nav
- Desktop: Add a "Home" link/button that navigates to `/` or scrolls to top if already on homepage
- Mobile: Add matching "Home" entry

**2. `src/components/Footer.tsx`** — Update footer nav links to match header
- Current footer: Work, About, Book Club, Get in Touch
- Updated footer: Home, Work, About, Community, Get in Touch
- "Community" links to `/book-club` (matching header label)
- "About" links to `/about` (matching header)

### Files modified
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

