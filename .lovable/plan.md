## Goals

1. Headshot on About hero loads cleanly (no layout flash, smooth fade-in).
2. A consistent loading animation (shimmer/pulse placeholder + fade-in) is applied to all `<img>` elements across the About page.
3. On mobile, the active book cover in the Favorite Books carousel is centered horizontally (currently left-aligned in the flex-col stack).

## Implementation

### 1. Reusable image component
Create `src/components/ui-custom/SmartImage.tsx`:
- Wraps `<img>` with a `relative` container.
- Tracks `loaded` state via `onLoad`.
- While loading: shows an absolutely-positioned placeholder using `bg-muted` + `animate-pulse` (and a subtle gradient sheen).
- On load: image fades in (`opacity-0` -> `opacity-100`, `transition-opacity duration-700`).
- Forwards `className`, `src`, `alt`, `loading`, sizing props.
- Inherits container shape via `rounded-[inherit]` so it works inside any `rounded-*` wrapper.

### 2. Apply across `src/pages/AboutPage.tsx`
Swap raw `<img>` tags for `SmartImage` in:
- Hero headshot (set `loading="eager"` + `fetchPriority="high"`).
- Speaking section (Miami + UF images).
- Favorite Books active cover.
- Work Playlist song cover.

The headshot wrapper already has `aspect-[5/6]`, so the placeholder fills correctly with no CLS.

### 3. Mobile centering for active book
In the Favorite Books detail block, the wrapper is `flex flex-col md:flex-row ... items-start`. Change to `items-center md:items-start` so the cover (and only on mobile) sits centered above the text. Text block keeps its left alignment naturally; if needed, wrap the cover div with `mx-auto md:mx-0` to guarantee horizontal centering on mobile only.

## Files

- New: `src/components/ui-custom/SmartImage.tsx`
- Edit: `src/pages/AboutPage.tsx` (replace 4 `<img>` usages, adjust mobile alignment classes on book detail row)

## Notes

- Uses existing Tailwind `animate-pulse`; no config changes.
- No new dependencies.
- Behavior degrades gracefully if `onLoad` fires before mount (cached): placeholder simply never renders.
