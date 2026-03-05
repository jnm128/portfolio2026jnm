

## Changes

### 1. Work Experience as a side panel
Convert the "View Work Experience" button from a link (`/work-experience`) to a button that opens a right-side panel. The panel will slide in from the right, covering ~50% width on desktop, full width on mobile. No scrim/overlay behind it. A back arrow at the top-left of the panel closes it and returns to home.

**Implementation:**
- **`src/components/WorkExperiencePanel.tsx`** (new): A fixed right-side panel component containing the work experience content (pulled from `WorkExperience.tsx` data). Includes:
  - Fixed positioning with `right-0`, slide-in animation
  - Back arrow button (ArrowLeft icon) at top-left to close
  - No overlay/scrim — the main page remains visible behind
  - `z-50` to sit above content
  - Cream background matching the site

- **`src/components/Hero.tsx`**: Change the `<a href="/work-experience">` to a `<button>` that toggles panel open state. Lift state or use a simple local state + render the panel component.

- **`src/App.tsx`**: Optionally keep the `/work-experience` route for direct access, but the primary interaction becomes the side panel from the hero.

### 2. Testimonial arrows moved to top with frost/contrast
Move the navigation arrows from bottom-right to the top of the testimonials section, aligned right next to the heading area. Add a frosted glass effect and higher contrast styling.

**File: `src/components/Testimonials.tsx`**
- Move the arrow buttons `div` from after the grid (line 60) to between the heading and the grid
- Position them `flex justify-end` in the header area, inline with or just below the title
- Add frosted glass styling: `backdrop-blur-md bg-white/10 border border-white/20 rounded-full`
- Increase contrast: `text-white hover:bg-white/20` with stronger border visibility

