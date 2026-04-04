

## Revise Book Club hero stats and eyebrow

**File:** `src/pages/BookClub.tsx`

### Changes

1. **Eyebrow** (line 106-108): Change "Book Club · UX · Design Thinking" to just "Community"

2. **Stats strip** (lines 115-123): Restyle each stat to a bold number + lighter label format:
   - Large bold number on top (e.g. `486+`), small muted label below (e.g. `Members`)
   - Layout: horizontal flex row with 4 stat blocks, separated by subtle dividers or spacing
   - Numbers: `text-2xl md:text-3xl font-serif font-semibold text-foreground`
   - Labels: `text-xs uppercase tracking-wide text-muted-foreground`
   - Remove dot separators, use `gap-8 md:gap-12` between blocks

### Result
```
Community

Fresh Perspectives
A UX book club for designers who think beyond the screen.

486+        8+         2025       Monthly
Members     Books      Est.       Sessions
```

