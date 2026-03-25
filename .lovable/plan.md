

## Unify Padding: Apply `px-8 md:px-16` Across Homepage, Work, About, and Community

**Goal**: Change all homepage components, Work page, About page, and Community component from `px-6 md:px-12` to `px-8 md:px-16` to match the inner page padding standard.

### Files to Update

**Homepage components** (change `px-6 md:px-12` → `px-8 md:px-16`):
- `src/components/Hero.tsx`
- `src/components/IntroBlurb.tsx` (container only, not the logo image classes)
- `src/components/Projects.tsx`
- `src/components/AboutSection.tsx`
- `src/components/Testimonials.tsx`
- `src/components/Community.tsx`
- `src/components/Collab.tsx`
- `src/components/Footer.tsx`

**Pages** (already use `px-8 md:px-16` — no changes needed):
- `src/pages/Work.tsx` — already correct
- `src/pages/AboutPage.tsx` — already correct

### What Changes
A simple find-and-replace of `px-6 md:px-12` → `px-8 md:px-16` in each component's container div. The IntroBlurb logo image classes that use `px-6 md:px-12` for internal spacing remain unchanged.

