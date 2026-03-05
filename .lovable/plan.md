

## Plan: Normalize section spacing

Current spacing is inconsistent across sections. The standard should be `py-16 md:py-24` for main content sections, with intentional exceptions for the Hero (top of page) and the Testimonials/Community pair (which share a halved gap by design).

### Changes

**`src/components/IntroBlurb.tsx`**
- Change `py-8 md:py-12` to `py-12 md:py-16` — currently too tight, needs more breathing room

**`src/components/Projects.tsx`**
- Keep `py-12 md:py-20` — already close to standard, bump to `py-16 md:py-24` for consistency

**`src/components/AboutSection.tsx`**
- Change `py-10 md:py-16` to `py-16 md:py-24` — currently tighter than other sections

**`src/components/Collab.tsx`**
- Change `py-24 md:py-32` to `py-16 md:py-24` — currently oversized compared to other sections

**No changes to:**
- **Hero** — top-of-page spacing is intentionally different
- **Testimonials / Community** — their split padding (`pt-12 pb-6` / `pt-6 pb-12`) is intentional to create a tighter pairing, and together they equal the standard `py-18 md:py-30` which is reasonable for the dark section transition

### Summary of final values

| Section | Before | After |
|---------|--------|-------|
| Hero | `pt-20 md:pt-24 pb-6 md:pb-8` | no change |
| IntroBlurb | `py-8 md:py-12` | `py-12 md:py-16` |
| Projects | `py-12 md:py-20` | `py-16 md:py-24` |
| AboutSection | `py-10 md:py-16` | `py-16 md:py-24` |
| Testimonials | `pt-12 pb-6 md:pt-20 md:pb-10` | no change |
| Community | `pt-6 pb-12 md:pt-10 md:pb-20` | no change |
| Collab | `py-24 md:py-32` | `py-16 md:py-24` |

