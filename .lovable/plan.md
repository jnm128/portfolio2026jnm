

## Plan: Adjust Current Read sizing, remove shadow, add centered heading

### Changes to `src/pages/AboutPage.tsx`

**1. Add centered heading** — Insert a heading above the dark section content, styled like the IntroBlurb marquee heading: `text-[14px] text-center font-medium uppercase tracking-wider text-white/60 mb-10` with text "Get to know your favorite designer".

**2. Reduce Current Read image size** — Change `w-36 md:w-48` back to `w-24 md:w-32`.

**3. Remove shadow** — Remove `shadow-xl` from the book image container.

### Files modified
- `src/pages/AboutPage.tsx`

