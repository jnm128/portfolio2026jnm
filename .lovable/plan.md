

## Three Changes

### 1. Remove "Trusted by" label and reduce spacing (`src/components/IntroBlurb.tsx`)
- Delete the `<p>` tag with "Trusted by teams building the next frontier."
- Reduce vertical padding from `py-12 md:py-16` to `py-4 md:py-6` to move the marquee closer to the hero image above

### 2. Match "Helping teams ship" font to "Design, Tech & Intention" (`src/components/Projects.tsx`)
- Line 39: Change `font-sans font-medium` to `font-serif` on the `<h2>` element

### Files Modified
- `src/components/IntroBlurb.tsx` — remove label, tighten padding
- `src/components/Projects.tsx` — change heading font class

