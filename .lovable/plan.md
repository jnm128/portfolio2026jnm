

## Summary

Restyle the Projects section header to match the Community section's left-aligned pattern, instead of the current centered layout. The "Selected Work" eyebrow label and "Recent Work" / "Archives" title will be left-aligned, with the archives toggle moved to the right on the same row as the eyebrow or title.

---

### What Changes

**Current**: "Selected Work" label is centered, "Recent Work" title is centered with spacer divs, and the archives toggle sits to the far right.

**After**: The layout matches Community's style -- left-aligned eyebrow label on top, left-aligned title below, with the archives toggle still accessible on the right side of the title row.

---

### Technical Details

**File: `src/components/Projects.tsx`**

1. Change the "Selected Work" label from `text-center mb-3` to `mb-4` (left-aligned, matching Community's eyebrow style)

2. Simplify the header row: remove the `flex-1` spacer div, left-align the h2 (remove `text-center`), and keep the archives toggle on the right using `justify-between`:
   - `<div className="flex items-center justify-between mb-8">`
   - `<h2>` directly (no spacer before it), left-aligned
   - Archives toggle stays in its `flex items-center gap-3` wrapper on the right

No new files or dependencies.

