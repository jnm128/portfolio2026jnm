

## Plan: Update dark backgrounds site-wide + fix duplicate mobile nav

### Overview
Replace all `#171717` with `#1C1C1C` across every file, update the Testimonials hero quote to cream (`#F8F6F1`), and fix the duplicate "Work" link in the mobile menu from the last diff.

### Changes

**1. `src/components/DarkSection.tsx` (line 25)** — `#171717` → `#1C1C1C`

**2. `src/components/Footer.tsx` (line 25)** — `bg-[#171717]` → `bg-[#1C1C1C]`

**3. `src/pages/AboutPage.tsx` (line 148)** — `bg-[#171717]` → `bg-[#1C1C1C]`

**4. `src/pages/BookClub.tsx` (lines 164, 175)** — `bg-[#171717]` → `bg-[#1C1C1C]`, `text-[#171717]` → `text-[#1C1C1C]`

**5. `src/components/Testimonials.tsx` (line 64)** — Hero blockquote `text-white` → `text-[#F8F6F1]`

**6. `src/components/Header.tsx` (line 286-287)** — Remove duplicate `<MobileNavLink label="Work" sectionId="projects" />` (bug from last edit)

### Files modified
- `src/components/DarkSection.tsx`
- `src/components/Footer.tsx`
- `src/pages/AboutPage.tsx`
- `src/pages/BookClub.tsx`
- `src/components/Testimonials.tsx`
- `src/components/Header.tsx`

