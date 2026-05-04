## Theme switcher: floating overlay, linear, transparent

Move the existing 3-mode theme switcher out of the header into a fixed overlay anchored to the bottom-right of the viewport. Restyle it as a horizontal line with three swatches sitting on it (no pill background). Slightly lighten the dark theme's espresso bg.

### Visual spec

```
                              ●—○—○
                            blue neutral dark
                       (bottom-right of screen)
```

- Position: `fixed bottom-6 right-6 z-50` (above content, below modals at z-100+).
- Background: fully transparent (no border, no fill).
- Layout: a thin 1px horizontal line (`bg-border/60`, ~64px wide) with the three swatches absolutely positioned along it at evenly-spaced points (start / middle / end).
- Swatches: 14px circles, filled with that theme's bg color, subtle 1px border for the light ones so they read on any backdrop.
- Active state: scale up to ~18px + 2px ring matching `--foreground` so it's clear which is selected; inactive at 70% opacity, hover → 100%.
- Tooltip on hover: "Blue" / "Neutral" / "Dark".
- Adapts to dark sections via the existing dark-section logic? No — since it's a global overlay, just use `text-foreground`/`border-border` tokens which auto-adjust per theme. On case-study dark sections it sits above the page so it inherits whatever is behind it; the swatch colors are self-contained.

### Header cleanup

- Remove `<ThemeToggle />` from desktop nav (the row after the Contact link).
- Remove `<ThemeToggle />` from the mobile menu.
- Remove the `onDark` prop usage — overlay no longer needs it.

### Mount the overlay globally

- Render `<ThemeToggle />` once inside `App.tsx` (alongside `<CustomCursor />` / route outlet) so it appears on every page.

### Dark theme: lighter espresso

- `--background` in `.dark` block of `src/index.css`: bump from `26 24% 6%` (#130F0C) to roughly `26 18% 11%` (≈ #211B16) — still espresso, just one notch lighter so it doesn't read as pure black.
- Keep `--section`, `--card`, `--border` in proportion: nudge `--section` from `25 24% 10%` → `25 20% 14%`, `--card` from `26 25% 14%` → `26 22% 18%`. Surfaces ladder still reads but feels softer.
- Update the memory note that mentions Dark `#130F0C` to the new value.

### Files to edit

- `src/components/ThemeToggle.tsx` — restyle as transparent line layout, drop `onDark`.
- `src/components/Header.tsx` — remove both `<ThemeToggle />` instances + import.
- `src/App.tsx` — render `<ThemeToggle />` as a global overlay.
- `src/index.css` — lighten `.dark` background/section/card values.
- `mem://index.md` — update Dark espresso color reference.

### Out of scope

- No change to the Blue/Neutral palettes.
- No change to ThemeContext or persistence behavior.
