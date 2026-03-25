

## Increase Content Padding Across Non-Homepage Pages

**Current state**: Homepage components use `px-6 md:px-12` (24px / 48px). Most inner pages already match this. The 3 case study pages still use the old `px-4 md:px-6` (16px / 24px).

**Change**: Bump all inner pages to `px-8 md:px-16` (32px / 64px) — slightly more than the homepage's 48px desktop padding, giving editorial pages more breathing room.

### Files to update

1. **`src/pages/Work.tsx`** — 3 containers: change `px-6 md:px-12` → `px-8 md:px-16`
2. **`src/pages/AboutPage.tsx`** — 2 containers: `px-6 md:px-12` → `px-8 md:px-16`
3. **`src/pages/Contact.tsx`** — 1 container: `px-6 md:px-12` → `px-8 md:px-16`
4. **`src/pages/BookClub.tsx`** — 3 containers (hero, What We Do, CTA): `px-6 md:px-12` → `px-8 md:px-16`
5. **`src/pages/WorkExperience.tsx`** — 1 container: `px-6 md:px-12` → `px-8 md:px-16`
6. **`src/pages/CaseStudyMindfulWellness.tsx`** — 4 containers: `px-4 md:px-6` → `px-8 md:px-16`
7. **`src/pages/CaseStudyCreativeStudio.tsx`** — 4 containers: `px-4 md:px-6` → `px-8 md:px-16`
8. **`src/pages/CaseStudyArtisanMarketplace.tsx`** — 4 containers: `px-4 md:px-6` → `px-8 md:px-16`

All changes are simple find-and-replace of padding classes within each file's container divs. No layout or structural changes.

