## Goal
In Blue theme, body helper text and the About-section tag pills currently render in slate blue (#4F6A80) because `--foreground` and the legacy `brand-matcha`/`brand-foam` tokens both resolve to the accent color. Keep the Blue theme identity (slate-blue accents on buttons, links, theme swatch), but change body-copy and tag colors to the warm brown used elsewhere so they read as neutral text, not as the accent.

## Changes

### 1. `src/index.css` — Blue theme `:root` block
Decouple body text from the accent:
- `--foreground`: change from `209 24% 41%` (slate blue #4F6A80) → `25 21% 30%` (warm brown #5C4A3D, same value Neutral theme uses).
- `--muted-foreground`: keep warm (already `#3D3530`, fine).
- Leave `--primary`, `--accent`, `--ring`, `--accent-tint` as slate blue — buttons, links, focus rings, and the theme toggle stay blue.
- Surface ladder, borders, hint, and Neutral/Dark blocks: untouched.

Result: `text-foreground` (used by `BioBlurb`, `Hero` helper line, `AboutPage` paragraphs, `About.tsx` bio) renders warm brown in Blue theme while accents remain blue.

### 2. `src/components/About.tsx` — tag pills
Replace the `bg-brand-matcha text-brand-foam` pills (which resolve to slate-blue background + cream text) so neither alternating row reads as blue:
- Swap `bg-brand-matcha text-brand-foam` → `bg-section text-title` (warm tan-on-near-black), keeping the `bg-brand-caramel text-brand-chai` rows as-is.
- Both variants now read as warm neutral chips across all three themes (caramel/chai map to brand neutrals; section/title map through tokens and stay legible in Dark).

No other components reference `brand-matcha`/`brand-foam`, so the change is localized.

## Files touched
- `src/index.css` (1 token value)
- `src/components/About.tsx` (4 className swaps)

## Out of scope
- Neutral and Dark themes (already correct).
- Tailwind `brand-*` token definitions (kept for backwards compatibility; only the About chips needed reclassing).
- Memory update: the body-text-color memory already states "text-foreground (#5C4A3D) for body" — this change brings Blue theme in line with that rule, no memory edit needed.
