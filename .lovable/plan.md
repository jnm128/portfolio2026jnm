

## Layout & Typography Updates on Homepage

### 1. Restructure AboutSection to Two-Column Layout
**File**: `src/components/AboutSection.tsx`

Change from stacked heading+content to a split layout: left column has the heading ("Design, Tech & Intention") and helper text, right column has Services and Skills.

- Remove `max-w-4xl`, use `max-w-[1600px]` to match Testimonials/Projects width
- Use `grid grid-cols-1 md:grid-cols-[1fr_2.5fr]` (same ratio as `SplitSection`)
- Left column: heading + paragraph (sticky on desktop)
- Right column: Services + Skills grid
- Update padding to match Testimonials: `pt-12 pb-4 md:pt-20 md:pb-8`

### 2. Make "Selected Work" Label Same Font Size as "Design, Tech & Intention"
**File**: `src/components/Projects.tsx`

Line 36: Change `<p className="text-xs uppercase tracking-widest ...">Selected Work</p>` to use `text-3xl md:text-5xl font-serif` like the AboutSection heading — making it a proper section title rather than a small label.

### 3. Fix Community Title Font Size
**File**: `src/components/Community.tsx`

Line 19: Change from `text-lg md:text-xl` to `text-3xl md:text-5xl` to match the heading scale used on About and Work pages.

### Files Modified
- `src/components/AboutSection.tsx`
- `src/components/Projects.tsx`
- `src/components/Community.tsx`

