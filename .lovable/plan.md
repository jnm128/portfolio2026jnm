

## Plan

Add "Recent" and "Past" labels flanking the toggle switch in the Projects section.

**`src/components/Projects.tsx`** (lines ~68-80):

Replace the current toggle area (which has label on the left and toggle on the right) with:
- "Recent" label on the left of the toggle
- The circle-and-line toggle in the middle
- "Past" label on the right of the toggle
- Active label gets highlighted styling, inactive gets muted
- Toggle semantics: left position = "recent", right position = "archives" (past)

The existing dynamic label ("Recents"/"Archives") will be removed and replaced with the two fixed labels.

