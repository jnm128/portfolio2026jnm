

## Remove "Community" eyebrow and fix avatar layout

**File:** `src/pages/BookClub.tsx`

### Changes

1. **Remove "Community" eyebrow** (lines 106-108): Delete the `<p>Community</p>` element entirely.

2. **Shrink avatars and stack names beside them** (lines 158-174): Reduce avatar size from `w-20 h-20` to `w-14 h-14`, and place name labels next to (not below) each avatar so both fit comfortably on mobile. Layout becomes a horizontal row of two avatar+name pairs:

```
[Joanna img] Joanna, Founder    [B circle] Bhavna, Co-host
```

   - Each pair: `flex items-center gap-2`
   - Avatars: `w-14 h-14` (56px)
   - Second avatar keeps `-ml-2` overlap or small gap
   - Name text stays `text-xs text-muted-foreground`

