## Goal
In Blue theme:
- **Dark sections** (Collab, Contact, AboutPage writings) should render with a **slate-blue background** (`#4F6A80`), not warm brown.
- **Primary CTAs** ("View Resume", "Get in touch") should be **slate blue**, not warm brown.
- **Body text stays warm brown** — no change to `--foreground` for text purposes.

The problem: dark sections use `bg-foreground` and CTAs use `bg-foreground text-background`. Since `--foreground` is now warm brown, both render brown.

## Approach
Stop relying on `bg-foreground` as the "dark surface" color. Introduce a dedicated dark-surface treatment via the existing `data-theme="dark"` attribute (already set on every dark wrapper), and switch CTAs to the accent token.

### 1. `src/index.css` — wire up `[data-theme="dark"]` to the dark token block
The `.dark` block already defines espresso bg + light-blue accent. But we want dark sections in **Blue theme** to show **slate blue** (matching the Blue accent), not espresso.

Create a new scoped block specifically for inline dark sections:

```css
[data-theme="dark"] {
  --background: 209 24% 41%;       /* #4F6A80 slate blue surface */
  --foreground: 30 23% 95%;        /* cream text */
  --title: 30 23% 95%;
  --primary: 30 23% 95%;           /* cream pill on slate */
  --primary-foreground: 209 24% 41%;
  --border: 30 23% 95% / 0.2;      /* handled via /20 utilities already in markup */
  --muted-foreground: 30 23% 88%;
}
```

(Exact HSL values match the existing slate `#4F6A80`. Keep `.dark` class — top-level Dark theme — unchanged so the global Dark mode still uses espresso + `#7AAAC8`.)

When the global theme is **Dark**, `.dark` on `<html>` already provides espresso tokens; the inline `data-theme="dark"` wrappers will override with slate blue inside those subtrees. If we want dark sections in global Dark mode to stay espresso, we scope differently — see "Variants" below.

**Variants (decide during implementation):**
- Option A (simpler): `[data-theme="dark"]` always = slate blue, in every top-level theme. Consistent dark-section identity across themes.
- Option B: only override in Blue/Neutral; let global Dark keep espresso for dark sections. Implemented via `:root:not(.dark) [data-theme="dark"] { … }`.

Default to **Option A** for visual consistency unless you prefer B.

### 2. CTA buttons — switch to accent token
Replace `bg-foreground text-background` → `bg-primary text-primary-foreground` so buttons follow the active theme's accent (slate blue in Blue, warm brown in Neutral, light blue in Dark).

Files:
- `src/components/Hero.tsx` — 3 "View Resume" pill variants (~lines 124, 132, 140)
- `src/pages/AboutPage.tsx` — "Get in touch" CTA (~line 122)

### 3. No changes needed
- Dark section wrappers (`bg-foreground` markup in `Collab.tsx`, `Contact.tsx`, `AboutPage.tsx` line 208) — once `[data-theme="dark"]` overrides `--foreground` to cream and `--background` to slate, `bg-foreground` resolves to cream. **Wait — that breaks them.** They'd flip.

  **Correction:** these wrappers should use `bg-background` (the dark surface token) instead of `bg-foreground`. Update:
  - `src/components/Collab.tsx` line 37: `bg-foreground` → `bg-background`
  - `src/pages/Contact.tsx` lines 17, 19: `bg-foreground` → `bg-background`
  - `src/pages/AboutPage.tsx` line 208: `bg-foreground text-background` → `bg-background text-foreground`

  Then under `[data-theme="dark"]`, `--background` = slate blue and `--foreground` = cream, producing the correct slate-on-cream-text result. All the `text-background/60`, `text-background` etc. inside become `text-foreground/60` / `text-foreground` so we also need to flip those — many lines.

  **Simpler alternative (preferred):** keep the markup using `bg-foreground` / `text-background` and instead define `[data-theme="dark"]` so that **`--foreground` = slate blue** and **`--background` = cream**. That way `bg-foreground` = slate blue surface, `text-background` = cream text — zero markup changes to dark sections.

### Final token plan for `[data-theme="dark"]`
```css
[data-theme="dark"] {
  --foreground: 209 24% 41%;       /* slate blue — used as dark surface bg */
  --background: 30 23% 95%;        /* cream — used as text-on-dark */
  --title: 30 23% 95%;
  --primary: 30 23% 95%;           /* cream pill button */
  --primary-foreground: 209 24% 41%;
  --muted-foreground: 30 23% 80%;
  --border: 30 23% 95%;
}
```

This is a **localized token swap** — it only affects subtrees marked `data-theme="dark"`, not page-level body text.

## Files touched
- `src/index.css` — add `[data-theme="dark"]` token override block.
- `src/components/Hero.tsx` — 3 className swaps (`bg-foreground text-background` → `bg-primary text-primary-foreground`).
- `src/pages/AboutPage.tsx` — 1 className swap on the "Get in touch" CTA.

## Out of scope
- Body text color (stays warm brown via untouched `:root --foreground`).
- Tag pills in About (already neutral).
- Global `.dark` class (top-level Dark theme keeps espresso + `#7AAAC8`).
- Neutral theme (unchanged).
