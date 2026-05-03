## Theme toggle: Blue / Neutral / Dark

Add a 3-mode theme switcher in the header that swaps the page background and accent palette. Current site stays as the default "Blue" mode. "Neutral" swaps the blue accent and bg for warm tan #E6DFD2. "Dark" applies the existing espresso dark theme (#130F0C).

### The three themes

| Mode | Page bg | Accent / body text | Title |
|---|---|---|---|
| Blue (default) | #F5F2EE cream | #4F6A80 slate blue | #1C1410 |
| Neutral | #E6DFD2 warm tan | #5C4A3D warm brown | #1C1410 |
| Dark (espresso) | #130F0C | #7AAAC8 light blue | #F0ECE6 |

### How it works

1. **ThemeProvider** (new `src/contexts/ThemeContext.tsx`)
   - State: `'blue' | 'neutral' | 'dark'`, persisted to `localStorage` (key: `mino-theme`)
   - On mount, applies `data-theme="blue|neutral"` or the existing `.dark` class to `<html>`
   - Defaults to `blue` (current look) on first visit
   - Wraps `<App />` in `src/App.tsx`

2. **CSS tokens** (`src/index.css`)
   - Keep `:root` block as-is (it IS the Blue theme — no change needed)
   - Add `:root[data-theme="neutral"]` block overriding only `--background`, `--section`, `--card`, `--foreground`, `--primary`, `--accent`, `--ring`, `--accent-tint`, `--border` to the warm tan palette
   - Existing `.dark` block stays as the espresso theme (no change)

3. **ThemeToggle component** (`src/components/ThemeToggle.tsx`)
   - Three small circular swatches grouped in a `rounded-full` pill with `border-border` background
   - Each swatch: 18px, filled with that theme's bg color, ring on the active one
   - Click sets the mode via context
   - Tooltip on hover: "Blue", "Neutral", "Dark"

4. **Header integration** (`src/components/Header.tsx`)
   - Desktop: insert toggle as the rightmost item in the nav row (after "Contact"), centered alignment preserved by adding equivalent spacing on the left
   - Mobile: append toggle below the nav links in the full-screen menu, centered
   - Toggle adapts its own colors using `text-foreground` / `border-border` so it works on dark sections automatically

### Interactions with existing systems

- **Dark section observer in Header**: keeps working — it controls per-section header tint, independent of the user's chosen base theme. In Dark mode, since the whole page is already dark, the observer's "useDarkTheme" state will still flip but is visually consistent.
- **Custom cursor**: already detects dark surfaces, no change needed.
- **`bg-card-gradient` literals in `index.css`**: leave as-is; they already have a `.dark` override and read fine on the neutral tan.

### Files to create
- `src/contexts/ThemeContext.tsx`
- `src/components/ThemeToggle.tsx`

### Files to edit
- `src/App.tsx` — wrap with ThemeProvider
- `src/index.css` — add `[data-theme="neutral"]` token block
- `src/components/Header.tsx` — render `<ThemeToggle />` in desktop nav and mobile menu
- `mem://index.md` + new memory file documenting the 3-theme system

### Out of scope
- No per-component restyling — every surface already uses tokens, so changing the token values cascades automatically.
- No system-preference auto-detection (default is always Blue per your spec).
