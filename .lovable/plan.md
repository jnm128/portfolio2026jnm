

## Fix Cursor on Dark Theme + Case Study Background Colors

### 1. Cursor Accessibility on Dark Sections

The custom cursor uses `bg-foreground` which is dark/black. On dark-themed sections (`bg-[#1C1C1C]`), it becomes invisible.

**Fix in `src/components/CustomCursor.tsx`**: Detect when the cursor is over a `[data-theme="dark"]` section using `document.elementFromPoint()` inside the mousemove handler. Add a state `isOnDark` and swap the cursor color: use `bg-white` when on dark sections, `bg-foreground` otherwise.

### 2. Case Study Section Backgrounds → `#F8F6F1`

All three case study pages plus `CaseStudyNav.tsx` have sections using `bg-background` (white) and `bg-secondary/30` instead of the cream `#F8F6F1`.

**Replace across all 3 case study pages** (`CaseStudyMindfulWellness.tsx`, `CaseStudyArtisanMarketplace.tsx`, `CaseStudyCreativeStudio.tsx`):
- `bg-background` → `bg-[#F8F6F1]` (Problem Space, Final Designs sections)
- `bg-secondary/30` → `bg-[#F8F6F1]` (Approach, Results sections)
- Inner testimonial card `bg-background` → `bg-white`

**In `CaseStudyNav.tsx`**: Change `bg-secondary/30` → `bg-[#F8F6F1]`

### Files Modified
- `src/components/CustomCursor.tsx`
- `src/pages/CaseStudyMindfulWellness.tsx`
- `src/pages/CaseStudyArtisanMarketplace.tsx`
- `src/pages/CaseStudyCreativeStudio.tsx`
- `src/components/CaseStudyNav.tsx`

