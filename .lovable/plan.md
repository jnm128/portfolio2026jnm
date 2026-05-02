## Add mini testimonial carousel under Get in Touch CTA

Add a small, click-through quote carousel directly below the "Get in Touch" button in the Collab section to nudge visitors toward collaborating after reading social proof.

### Layout

```
Interested in collaborating?
I'm always open to new projects...
        [ Get in Touch ]

   ── what others are saying ──

  "Joanna's ability to simplify complex
   systems helped lay out a complete vision..."
   — Rynita Julien, Senior Director IT

         ‹  • • •  ›
```

- Centered, narrow column (`max-w-2xl`) directly under the CTA, with `mt-12 md:mt-16` spacing so it reads as a supporting blurb, not a competing section.
- Small uppercase eyebrow label "What others say" above the quote.
- Single quote at a time, italic serif, modest size (`text-base md:text-lg`), with author name + role on the line below in muted color.
- Click-through controls: minimalist circular `‹` / `›` arrow buttons (matches existing testimonial pattern) plus tiny dot indicators between them.
- Manual click only (no autoplay), with a quick fade transition between quotes.

### Content

Reuse the three existing quotes from the (now-removed) Testimonials component:
- Rynita Julien × 2 (CSL Behring)
- Jacob Rosmarin (Viveka Health)

Each quote will be slightly trimmed if needed so the blurb stays compact (1–3 lines on desktop).

### Technical notes

- Edit `src/components/Collab.tsx`: add a `useState` index, a `quotes` array, prev/next handlers, and render the carousel block after the existing CTA `<Link>`.
- Use existing tokens only: `text-foreground`, `text-muted-foreground`, `border-border`, `bg-foreground/5`. No raw colors.
- Arrow buttons: `w-9 h-9 rounded-full border border-border hover:bg-foreground/5`, `ChevronLeft` / `ChevronRight` from `lucide-react` at `size={14}`.
- Animate quote swaps with `key={activeIndex}` + `animate-fade-in` on the blockquote.
- Keep the section's existing `bg-background` and `py-16 md:py-24` rhythm — no new section, just an inner block.
- Delete `src/components/Testimonials.tsx` since it's no longer imported anywhere.

### Files changed

- `src/components/Collab.tsx` — add carousel under CTA
- `src/components/Testimonials.tsx` — delete (orphaned)
