

## Plan: White cards for Writing & Current Read, bigger Current Read section

### Changes to `src/pages/AboutPage.tsx`

**1. Writing cards** — Change `bg-white/5 border-white/10` to `bg-white` with dark text styling. Update inner text colors from `text-white` / `text-white/40` / `text-white/60` to `text-foreground` / `text-muted-foreground`. Update link color similarly.

**2. Current Read card** — Change `bg-white/5 border-white/10` to `bg-white` with dark text. Update text colors to match. Increase book image size from `w-24 md:w-32` to `w-36 md:w-48` and add padding (`p-8`) for a more spacious feel.

**3. Text color updates within white cards:**
- Category labels: `text-muted-foreground`
- Titles: `text-foreground`
- Excerpts/notes: `text-muted-foreground`
- Links: `text-foreground`

### Files modified
- `src/pages/AboutPage.tsx`

