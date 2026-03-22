

## Plan: Create dedicated Work page

### Overview
Create a new `/work` route with a dedicated Work page that includes a header section with title + helper text, the existing project cards from the Projects component, and a dark "Interested in collaborating?" CTA section. Update the "Work" nav link to point to `/work` instead of scrolling to `#projects`. Ensure MINO logo links home with scroll-to-top.

### Changes

#### 1. Create `src/pages/Work.tsx`
- Header area with large serif title (e.g. "Tiny fraction of my work") and descriptive subtitle, matching the reference screenshot style
- Import and reuse the project cards data and layout from `Projects.tsx` (the "recent" view cards)
- Add a dark CTA section at the bottom (`bg-[#1C1C1C]`) matching the Collab component style — centered white text, "Get in Touch" white rounded button
- Include Footer at the bottom

#### 2. Update `src/App.tsx`
- Add route: `<Route path="/work" element={<Work />} />`

#### 3. Update `src/components/Header.tsx`
- Change "Work" nav link from scrollToSection/navigateAndScroll to a `<Link to="/work">` (both desktop and mobile)
- MINO logo already links to `/` on non-home pages and scrolls to top on home — no change needed

#### 4. Update `src/components/Footer.tsx`
- Change "Work" button from `scrollToSection('projects')` to an `<a href="/work">` link

### Files modified
- `src/pages/Work.tsx` (new)
- `src/App.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

