Make secondary/body text resolve to warm brown (#5C4A3D) on every light background, matching memory's body-text rule.

## Changes

1. **`src/index.css` — Blue theme `:root`**
   - `--foreground` is currently slate-blue `209 24% 41%` (#4F6A80). Change to warm brown `25 21% 30%` (#5C4A3D) so `text-foreground` = brown in Blue theme, matching Neutral.
   - Slate blue stays as `--accent` / `--primary` / `--ring` (unchanged).
   - `--primary-foreground` stays cream (still on slate-blue button).
   - `--muted-foreground` already warm-dark, leave as is.

2. **`src/components/ui-custom/Button.tsx`** — replace literals with tokens:
   - `bg-gray-600 text-white hover:bg-gray-700 ...gray-600/25` → `bg-primary text-primary-foreground hover:bg-primary/90`
   - `text-gray-600 underline-offset-4` → `text-foreground underline-offset-4`

3. **`src/components/About.tsx`** — body paragraphs already use `text-foreground`; with the Blue change above they'll automatically render warm brown. No edit needed.

## Verify
After the edit, secondary text on light backgrounds is the same warm brown across Blue and Neutral themes; headings remain near-black via `text-title`; dark theme is unaffected.