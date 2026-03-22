

## Plan: Clean up Work page styling

### Changes to `src/pages/Work.tsx`

1. **Update hero header to match About page style** — Use `max-w-4xl mx-auto px-4 md:px-8` container instead of `container mx-auto px-6 md:px-10 max-w-[1600px]`. Match the About page's heading classes (`text-3xl md:text-5xl font-serif text-foreground`) and body text style.

2. **Remove "Selected Work" label** — Delete the `<p>` tag with "Selected Work" text (line 67 area).

3. **Remove entire Past Work archives section** — Delete the archives data array (lines 46-53) and the archives table markup (lines 97-117 area).

### Files modified
- `src/pages/Work.tsx`

