

## Plan

Two small edits to `src/components/WorkExperiencePanel.tsx`:

1. **Remove the Back button** — keep only the X close button, right-aligned.
2. The panel already uses `z-[200]` which is above the nav (`z-[60]`), so it already overlays. The nav links still show because the panel is only `md:w-1/2`. To fully cover the nav, the panel needs `w-full` on all breakpoints (or at minimum cover the nav area). Since the user wants nav links hidden, I'll make the panel full-width on all screens but keep the content constrained to the right half on desktop by using an inner container.

**Changes in `src/components/WorkExperiencePanel.tsx`:**
- Change outer div from `w-full md:w-1/2` to `w-full` so it covers the entire viewport including nav
- Use an inner wrapper `ml-auto md:w-1/2 w-full` to keep content on the right half on desktop
- Remove the Back button, keep only the X close button (move it to `flex justify-end`)

