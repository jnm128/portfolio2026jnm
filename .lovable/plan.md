

## Problem

The WorkExperiencePanel renders inside `Hero` → `PageTransition`, which creates a stacking context via its animation. This prevents the panel's `z-[200]` from layering above the Header's `z-[60]`.

## Solution

Use `createPortal` from `react-dom` to render the panel directly into `document.body`, escaping the stacking context. Also remove the Back button per previous request.

### Changes

**`src/components/WorkExperiencePanel.tsx`:**
1. Import `createPortal` from `react-dom`
2. Wrap returned JSX in `createPortal(..., document.body)`
3. Remove Back button, keep only X close button right-aligned

That's it — the panel keeps its existing `z-[200]`, `fixed`, `w-full md:w-1/2` classes and will now properly overlay the nav.

