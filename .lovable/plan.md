## Goal

Make the nav theme (light vs dark) switch the instant a Community section's top edge passes under the fixed header band, instead of the current behavior where the dark section has to fill ~10% of the viewport before the toggle fires.

## Current behavior

In `src/components/Header.tsx` (line 48), every `[data-theme="dark"]` section is observed with:

```ts
{ rootMargin: '-80px 0px -90% 0px', threshold: 0 }
```

That shrinks the viewport detection band to a 10%-tall slice starting 80px below the top. Result: a dark section is only considered "visible" once a meaningful chunk of it has scrolled past the header — the nav lags behind the visual transition.

## Change

Replace the rootMargin with a thin detection band pinned right under the header:

```ts
{ rootMargin: '-72px 0px -100% 0px', threshold: 0 }
```

- Top inset `-72px` ≈ header height (`py-4` scrolled state). The section becomes "intersecting" the moment its top edge crosses below the header.
- Bottom inset `-100%` collapses the rest of the viewport so a section stops counting as visible the moment it scrolls past the top — preventing two sections from being "active" at once.
- Result: the active dark section is whichever one currently sits directly under the nav, so the theme flips exactly at the visual seam between cream and dark sections.

## Files

- `src/components/Header.tsx` — single line change inside `checkDarkSections`, plus a short comment explaining the band.

## Out of scope

- No changes to which sections carry `data-theme="dark"`.
- No changes to the Contact/Case Study override paths.
- No memory updates — the existing "Dynamic Header Logic" memory still applies; only a constant is being tuned.
