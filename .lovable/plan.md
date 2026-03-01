

## Three Changes

### 1. Fix hero image shifting on scroll
The parallax effect in `ScrollAnimations.tsx` (line 124) applies `translateY(scrolled * 0.3)` to the hero image, causing it to visibly shift downward as you scroll. This will be **removed entirely** so the hero image stays fixed in place.

**File: `src/components/animations/ScrollAnimations.tsx`**
- Remove the entire hero parallax scroll handler block (lines 114-130) and the corresponding `removeEventListener` in the cleanup

### 2. Hero image expands to fill margins on scroll
As the user scrolls down, the hero image container will grow from its current padded/rounded state to full-width with no border-radius.

**File: `src/components/Hero.tsx`**
- Add a `useRef` on the image container div
- Add a scroll listener that maps `scrollY` (0-300px) to:
  - Horizontal padding: 24px (mobile) / 40px (desktop) down to 0
  - Border-radius: 24px down to 0
- Apply via direct DOM style manipulation (no re-renders) with `requestAnimationFrame` throttling

### 3. New "About" section before Testimonials
A new component inserted between Projects and DarkSection.

**File: `src/components/AboutSection.tsx`** (new)
- Headline: "Design, Tech & Intention"
- Body paragraph about a research-rooted process
- Two-column grid:
  - **Services**: UX/UI Design, Web Design, Brand Identity, UX Audits
  - **Skills**: Figma, Prototyping, User Research, Design Systems, HTML/CSS, React
- Cream background (#F8F6F1) matching the rest of the light sections
- Uses existing `FadeIn` animation wrapper

**File: `src/pages/Index.tsx`**
- Import and add `<AboutSection />` between `<Projects />` and `<DarkSection />`

