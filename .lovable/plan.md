## Refine Collab pills + spacing

Update `src/components/Collab.tsx`:

### Remove
- The pill below the "Get in Touch" button (`belowCtaPill`).

### Floating animation
- Apply existing `animate-drift-1/2/3` keyframes (already in `tailwind.config.ts`) to the 3 remaining pills (top + left + right) so they gently float continuously.
- Stagger via inline `animationDelay` (0s, 0.4s, 0.8s) so motion is desynced — like the original "bee-like" idea but quieter.
- Keep `FadeIn` wrappers for scroll-in entrance.

### Spacing
- Section padding: change `py-16 md:py-24` → `pt-20 md:pt-28 pb-10 md:pb-14`.
  - More top breathing room above the top pill.
  - Smaller bottom padding so the dark Collab section sits closer to Process.
- Increase gap between top pill and headline row: `mb-10 md:mb-14` → `mb-16 md:mb-20`.
- Increase horizontal gap between side pills and headline: `gap-6 md:gap-8` → `gap-8 md:gap-12`.
- Increase headline → button gap: `mt-8` → `mt-10`.
- Mobile side-pills row: `mt-10` → `mt-12`.

### Files
- `src/components/Collab.tsx` only.
