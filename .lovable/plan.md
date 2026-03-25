

## Contact Page: 3 Updates

### 1. Move tagline to upper-right of dark panel
Change the left panel from `flex items-end` to `flex items-start justify-end text-right pt-24 md:pt-32` so the tagline sits top-right, clearing the header.

### 2. Move "Currently" section into the dark panel
Remove the "Currently" heading, Location, and Availability rows (lines 70-87) from the right panel. Add them to the bottom of the left dark panel, styled with `border-t border-white/15 py-8` and white text (`text-white`, `text-white/60`), matching the dark-section list pattern.

### 3. Dynamic header on Contact page
In `src/components/Header.tsx`:
- Detect `/contact` route via `isContactPage`
- When `isContactPage && !isScrolled`: header bg transparent, logo `text-white`
- Nav links stay default (over cream right panel)
- On scroll or mobile menu open: revert to normal `bg-background`

### Files modified
- `src/pages/Contact.tsx`
- `src/components/Header.tsx`

