

## Natural Section Flow Across All Pages

Remove forced viewport heights (`min-h-screen`, `h-screen`, `flex items-center` used for vertical centering) from page sections so content drives height naturally. Page-level wrappers keep `min-h-screen` only to prevent short pages from looking broken.

### Changes

**1. Book Club Hero** (`src/pages/BookClub.tsx`, line 112)
- Remove `min-h-screen flex items-center` from the hero `<section>`
- Keep `pt-24 md:pt-28 pb-10 md:pb-16`

**2. Contact Page** (`src/pages/Contact.tsx`, line 19)
- Remove `md:sticky md:top-0 md:h-screen` from the inner content div — this locks the panel to full viewport height
- Replace with natural padding: keep existing `p-8 md:p-16 pt-24 md:pt-32 pb-8 md:pb-32`

**3. Keep page-level `min-h-screen`** on outer wrappers (BookClub line 109, Work line 36, Contact line 17, WorkExperience line 21, NotFound line 15) — these just ensure the page fills the viewport if content is short, which is correct behavior.

### Files Modified
- `src/pages/BookClub.tsx`
- `src/pages/Contact.tsx`

### Also included from previous plan (button standardization)
- `src/components/Hero.tsx` — `px-5 py-2.5` → `px-6 py-3 text-sm`
- `src/pages/AboutPage.tsx` — `text-base` → `text-sm` on LinkedIn CTA
- `src/pages/BookClub.tsx` — `px-8 py-3` → `px-6 py-3 text-sm` on "Join the Club"
- `src/pages/Work.tsx` — `px-8 py-3` → `px-6 py-3 text-sm` on "Get in Touch"
- `src/components/Collab.tsx` — `px-8 py-3` → `px-6 py-3 text-sm` on "Get in Touch"

