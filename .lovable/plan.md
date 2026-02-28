

## Unified Dark Section with Single Fade-to-Black

### Concept

Wrap **Testimonials**, **Community**, and **Collab** inside a single parent wrapper that owns the scroll-triggered fade-to-black transition. Each child component becomes a simple content block within this wrapper -- no individual background colors or fade logic.

### Changes

**1. Create `src/components/DarkSection.tsx`** (new wrapper component)
- Contains a single `<section>` with `IntersectionObserver` logic (threshold 0.15)
- Background transitions from `#F8F6F1` to `#000` once on scroll
- Renders `<Testimonials />`, `<Community />`, and `<Collab />` as children inside it

**2. `src/components/Testimonials.tsx`**
- Remove the `IntersectionObserver`, `useRef`, `useState`, and `useEffect` scroll logic
- Remove the `<section>` wrapper -- render a `<div>` instead (since the parent handles the section)
- Remove all background color / transition styles from the component
- Keep text always in "dark mode" style (white labels/headlines, cream cards)
- Cards stay `bg-[#F8F6F1]` with dark text

**3. `src/components/Community.tsx`**
- Remove `bg-black` from the section -- change to a `<div>` with no background
- Keep text in white/dark-mode style (labels, headings)
- Card stays `bg-[#F8F6F1]` with dark text

**4. `src/components/Collab.tsx`**
- Remove `bg-surface-6 text-surface-1` -- change to a `<div>` with no background
- Update text to use white colors directly (`text-white`, `text-white/70`)
- Update button to `bg-white text-black` instead of `bg-surface-1 text-surface-6`

**5. `src/pages/Index.tsx`**
- Replace the three separate `<Testimonials />`, `<Community />`, `<Collab />` with a single `<DarkSection />` that renders all three inside it

### Visual Flow

```text
Hero / IntroBlurb / Projects   -->  #F8F6F1 (cream)
                                       |
                               [single fade transition]
                                       |
DarkSection wrapper            -->  fades to #000
  - Testimonials (Kind Words)
  - Community
  - Collab (Interested in collaborating?)
                                       |
Footer                         -->  bg-black (stays dark)
```

The fade happens once when the unified dark section enters the viewport, and all three sub-sections live inside it on a shared black background.

