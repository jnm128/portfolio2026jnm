

## Restyle "Beyond the Pixels" to Match "What We Do" Layout

**Goal**: Replace the card-based layout in the About page's dark section with the border-separated flat list style from the Book Club's "What We Do" section. **Keep** the "Beyond the Pixels" header block (title + subtitle).

### Changes to `src/pages/AboutPage.tsx`

1. **Keep the header** — the "Beyond the Pixels" `h2` + subtitle paragraph stays as-is.

2. **Change `space-y-16` to `space-y-0`** on the subsections container so borders sit flush.

3. **Writing section**: Replace the 3-column card grid (`bg-[#F8F6F1] rounded-2xl`) with vertical `border-t border-white/15 py-10` rows. Each post becomes a flat row: category label in `text-xs uppercase tracking-widest text-white/70`, title in `text-xl font-serif text-white`, excerpt in `text-base text-white/70`, and LinkedIn link in `text-white hover:opacity-70`.

4. **Speaking section**: Remove white card wrappers (`bg-white border-border/60 rounded-2xl`). Each engagement becomes a `border-t border-white/15 py-10` row with the image (keep `rounded-xl overflow-hidden`) and label/title text in white tones below.

5. **Current Read section**: Remove the white card (`bg-white border-border/60 rounded-2xl p-8`). Render as a `border-t border-white/15 py-10` row with book cover, title/author in `text-white`, and note in `text-white/70`.

6. **Work Playlist section**: Remove white card. Render as a `border-t border-b border-white/15 py-10` row (last item gets bottom border) with cover art, title/artist in white, and external link icon in `text-white`.

### Style mapping
- `text-foreground` → `text-white`
- `text-muted-foreground` / `text-foreground/70` → `text-white/70`
- Remove all `bg-white`, `bg-[#F8F6F1]`, `rounded-2xl`, `border-border/60`, `shadow-*` from subsection containers
- Add `border-t border-white/15 py-10` to each subsection row

