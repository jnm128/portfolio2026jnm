

## Update homepage Skills chips to brand palette

The Skills chips in the homepage "Design, Tech & Intention" section (`AboutSection.tsx`) currently render as outlined pills (border + transparent bg). Update them to match the About page chip style using the brand palette.

### Change

**File:** `src/components/AboutSection.tsx`

Replace the outlined chip style with filled Matcha chips (matching the request, and consistent with About page tags):

```tsx
<span
  key={s}
  className="bg-brand-matcha text-brand-foam px-4 py-2 rounded-full text-sm font-medium"
>
  {s}
</span>
```

### Visual result

- Before: Transparent pills with thin border, foreground text
- After: Solid Matcha (`#7F793B`) pills with Foam (`#FFFBE7`) text — same treatment used on About page chips

### Out of scope

- Services list (left as flat editorial rows with dividers — different visual pattern)
- About page chips (already using alternating Caramel/Matcha)
- Section heading/layout

