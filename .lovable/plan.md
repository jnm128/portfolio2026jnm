

## Multi-Feature Update Plan

This plan covers 7 changes across multiple files.

---

### 1. Case Study Bottom Navigation (Next/Previous)

Add a navigation bar at the bottom of each case study page (before Footer) with links to the previous and next case studies. The three case studies cycle: Mindful Wellness → Artisan Marketplace → Creative Studio.

**New component**: `src/components/CaseStudyNav.tsx`
- Accepts `currentSlug` prop
- Defines ordered list of case studies with title and path
- Renders a full-width bar with "Previous" and "Next" links styled consistently with the site (serif font, muted foreground, arrows)

**Modified files**: All three case study pages — add `<CaseStudyNav currentSlug="..." />` before `<Footer />`.

---

### 2. Reduce White Space Between Testimonials and Community (Homepage)

In `src/components/Testimonials.tsx`, change bottom padding from `pb-12 md:pb-20` to `pb-4 md:pb-8`.
In `src/components/Community.tsx`, change top padding from `pt-12 md:pt-20` to `pt-4 md:pt-8`.

---

### 3. Book Club Theme Restructuring

In `src/pages/BookClub.tsx`:
- **"Ready to Read with Us?" CTA** (Section 5, line 267): Change `bg-[#1C1C1C]` to `bg-[#F8F6F1]`, update text colors from white to foreground/dark, button from white to black.
- **FAQ** (Section 6, line 293): Change `bg-[#F8F6F1]` to `bg-[#1C1C1C]`, update text/border colors to white theme variants.
- **"How the Community Works"** stays dark (already `bg-[#1C1C1C]`), no background change needed.

---

### 4. Yellow Icons for "How the Community Works"

In `src/pages/BookClub.tsx` (line 252): Change the icon container from `bg-white` with `text-[#1C1C1C]` icons to `bg-transparent` or keep container, but change icon color to `text-[#F5E642]`. Specifically update `<step.icon className="w-6 h-6 text-[#F5E642]" />` and change the icon container background to be subtle dark (`bg-white/10 border border-white/20`) to let the yellow icons pop.

---

### 5. Book Modal: "View on Amazon" Button

In `src/pages/BookClub.tsx` (lines 358-367): Replace the title hyperlink with plain text title, and add a "View on Amazon" button below the description. Button styled as black/filled: `bg-[#1C1C1C] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#1C1C1C]/90`.

---

### 6. Larger Case Study Hero Images

In all three case study pages, change the hero image aspect ratio from `aspect-[16/9]` to `aspect-[16/10]` and increase the top margin. This makes the hero image taller on both mobile and desktop.

**Files**: `CaseStudyMindfulWellness.tsx`, `CaseStudyArtisanMarketplace.tsx`, `CaseStudyCreativeStudio.tsx`

---

### 7. Dynamic Header Theme on Dark Sections

In `src/components/Header.tsx`:
- Add a state `isDarkSection` controlled by an IntersectionObserver that watches all elements with a specific data attribute (e.g., `data-theme="dark"`).
- When scroll position overlaps a dark section, toggle header text/logo colors to white and background to transparent/dark, similar to existing contact page logic but generalized.
- Add `data-theme="dark"` attribute to dark sections across pages: `DarkSection.tsx`, and the dark sections in `BookClub.tsx`.

**Implementation details**:
- Use `IntersectionObserver` with `rootMargin: '-80px 0px -90% 0px'` (roughly header height) to detect when the header overlaps a dark section.
- When `isDarkSection` is true, apply the same white text styling currently used for `isContactPage`.
- Refactor the conditional: replace `isContactPage` checks with `isContactPage || isDarkSection` for text/logo color logic.
- The contact page keeps its existing behavior (always dark header).

---

### Files Modified
- `src/components/CaseStudyNav.tsx` (new)
- `src/pages/CaseStudyMindfulWellness.tsx`
- `src/pages/CaseStudyArtisanMarketplace.tsx`
- `src/pages/CaseStudyCreativeStudio.tsx`
- `src/components/Testimonials.tsx`
- `src/components/Community.tsx`
- `src/pages/BookClub.tsx`
- `src/components/Header.tsx`
- `src/components/DarkSection.tsx` (add `data-theme="dark"`)

