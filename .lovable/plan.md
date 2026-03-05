

## Plan: Make Work Playlist stand out with card-style rows

### Changes to `src/pages/AboutPage.tsx`

**Wrap the playlist in a white card container** (matching the Writing and Current Read cards) and convert each track row into a more visually distinct item:

1. **Wrap playlist in a white rounded card** — Add `bg-white rounded-2xl border border-border/60 p-6 overflow-hidden` around the `<ul>`.

2. **Update track rows for dark-on-white styling:**
   - Text: `text-foreground` for title, `text-muted-foreground` for artist
   - Zebra striping: `bg-muted/40` instead of `bg-white/[0.07]`
   - Border: `border-muted` instead of `border-white/10`
   - Play button: `bg-foreground text-white` for contrast (or `bg-muted text-foreground`)

3. **Play button update** — Change from `bg-white/10 border-white/20 text-white` to `bg-foreground/10 border-foreground/20 text-foreground` to work on white background. Active state circle stroke changes to `stroke="currentColor"`.

### Files modified
- `src/pages/AboutPage.tsx`

