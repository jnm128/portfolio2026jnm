

## Make Testimonials and Community Sections Fade to Black on Scroll

Both the **Kind Words** (Testimonials) and **Community** sections will transition from the light cream background to black as they scroll into view, with all content colors inverting smoothly.

### Approach

Use `IntersectionObserver` in each component to detect when the section enters the viewport. When visible, transition backgrounds from `#F8F6F1` to black and invert all text/card colors.

### Changes

**1. `src/components/Testimonials.tsx`**
- Add `useRef` + `useEffect` with an `IntersectionObserver` (threshold 0.2) and a `isVisible` state
- Section gets inline style for background color transition: `#F8F6F1` -> `#000` with `transition: background-color 1s ease`
- When `isVisible`:
  - "Kind Words" label and headline text become white
  - Cards change from `bg-white/60` to `bg-white/10`
  - Card title, quote, author text become white/light
  - Avatar circles invert to `bg-white` with dark text
  - Arrow buttons get white borders/icons

**2. `src/components/Community.tsx`**
- Same `IntersectionObserver` pattern with `isVisible` state
- Background transitions from `#F8F6F1` to `#000`
- When `isVisible`:
  - "Community" label and heading become white
  - Description text becomes light gray
  - "Learn More" link becomes white
  - Card background changes from `bg-white/60` to `bg-white/10`

Both sections use `transition-colors duration-1000` on all color-dependent elements so the entire section smoothly shifts from light to dark as it scrolls into view, creating a continuous fade effect down the page.

