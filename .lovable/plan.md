

## Fix Inconsistent Margins Across Pages

**Problem**: The Work, About, Contact, and Book Club pages use `px-4 md:px-8` (32px desktop padding) instead of the standard `px-6 md:px-12` (48px). The homepage components already use the correct 48px margins.

**Changes needed** — update padding classes from `px-4 md:px-8` to `px-6 md:px-12` in:

1. **`src/pages/Work.tsx`** — 3 container divs (hero, project cards, dark CTA sections)
2. **`src/pages/AboutPage.tsx`** — 2 container divs (hero section, dark section)
3. **`src/pages/Contact.tsx`** — 1 container div (main content wrapper)
4. **`src/pages/BookClub.tsx`** — 2 container divs (hero section, "What We Do" section)
5. **`src/components/Connecting.tsx`** — update `px-4 md:px-6` to `px-6 md:px-12`

All instances of `px-4 md:px-8` on page-level containers will be replaced with `px-6 md:px-12` to match the site-wide 48px desktop / 24px mobile standard.

