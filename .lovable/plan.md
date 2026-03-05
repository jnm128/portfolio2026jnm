

## Plan: Match About page styling with homepage patterns

### Changes to `src/pages/AboutPage.tsx`

**Writing cards** — Change `bg-white` to `bg-white/60` to match the homepage Projects section card style on cream backgrounds.

**Playlist rows** — The zebra striping already uses `bg-white/60` which is correct. No change needed there.

**Current Read card** — Change `bg-white` to `bg-white/60` to match the same pattern.

These are the only styling mismatches. The section labels (`text-sm uppercase tracking-widest text-muted-foreground`) already match the homepage pattern for light-background sections (the homepage dark sections use `text-white/60` because they sit on dark surfaces, but the About page is on cream so `text-muted-foreground` is correct).

### Files modified
- `src/pages/AboutPage.tsx` — two instances of `bg-white` changed to `bg-white/60`

