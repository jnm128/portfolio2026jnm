

## Refactor Case Study Pages: Left-Right Layout + Lightbox Images

**Goal**: Restructure content sections to use a two-column layout (subtitle/label on the left, content on the right — matching the reference screenshot) and add a clickable lightbox for images that expands them to a larger overlay view.

### New Section Layout Pattern

```text
┌─────────────────────────────────────────────────┐
│  ✦ SECTION LABEL          Large heading text    │
│  (left column,            and body paragraphs   │
│   sticky/aligned top)     (right column, ~65%)  │
└─────────────────────────────────────────────────┘
│  [Clickable image — full width, rounded]        │
│  Click → expands to lightbox overlay            │
└─────────────────────────────────────────────────┘
```

Apply this to: **Challenge/Problem Space**, **Approach**, **Final Designs**, and **Results** sections.

### Changes

**1. Create a reusable `ImageLightbox` component** (`src/components/ImageLightbox.tsx`)
- Accepts `src`, `alt` props
- Renders a clickable image thumbnail
- On click, opens a full-screen overlay (fixed, z-50, dark backdrop) showing the image at a larger scale with smooth CSS transition
- Click backdrop or X button to close
- Uses `useState` for open/close state

**2. Create a reusable `SplitSection` component** (`src/components/SplitSection.tsx`)
- Props: `label` (left column text like "PROBLEM SPACE"), `children` (right column content), optional `className`
- Renders a two-column grid: left ~30% with uppercase label + decorative ✦ marker, right ~70% with content
- On mobile, stacks vertically (label on top)

**3. Refactor all 3 case study pages** to use these components:
- **Hero section**: Keep as-is (back button, image, title, metadata grid)
- **Challenge section** → `<SplitSection label="PROBLEM SPACE">` with the heading as a large question-style statement and body paragraphs below (matching the reference)
- **Approach section** → `<SplitSection label="OUR APPROACH">` with the 2x2 approach grid as children
- **Final Designs section** → `<SplitSection label="FINAL DESIGNS">` with images below, each wrapped in `<ImageLightbox>`
- **Results section** → `<SplitSection label="RESULTS">` with stats and testimonial as children

**4. Image lightbox behavior**:
- Default: image displays at normal size in the page flow
- On click: image scales up to ~90vw/90vh in a centered overlay with a dark semi-transparent backdrop
- Smooth `transition: transform 300ms ease` for the scale-up effect
- Close on backdrop click, Escape key, or X button

### Files Modified
- `src/components/SplitSection.tsx` (new)
- `src/components/ImageLightbox.tsx` (new)
- `src/pages/CaseStudyMindfulWellness.tsx`
- `src/pages/CaseStudyCreativeStudio.tsx`
- `src/pages/CaseStudyArtisanMarketplace.tsx`

