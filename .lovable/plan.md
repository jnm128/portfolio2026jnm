## Restyle Community panel to match Services format

Rebuild `src/components/CommunityPanel.tsx` so the slide-out mirrors the Services panel: clean header, single titled list with roman numerals, inline link CTA.

### New content (3 items)

- **I. Thought leadership & creator on LinkedIn** — Sharing perspectives on UX, craft, and career growth with a community of designers.
- **II. Mentorship to junior designers** — 1:1 guidance, portfolio reviews, and career coaching for designers early in their journey.
- **III. UX book club co-founder** — Co-founded Fresh Perspectives — a community of designers reading and reflecting together.

### Layout (matches ServicesPanel exactly)

- Header row: "Community" h1 + close X (mb-12).
- Subsection block: "How I'm active" semibold label + "Ways I show up in the design community." muted serif eyebrow.
- Roman numeral list using the same tuned styling: `space-y-8`, `gap-6`, italic numeral `text-base font-serif tracking-[0.15em] w-6`, title `text-base font-serif`, detail `text-sm text-muted-foreground mt-1.5`.
- Inline CTA: "Want to read with us? **Visit the book club**" — underlined link to `/book-club`, closes panel on click.

### Removals

- Fresh Perspectives logo, h1 "Fresh Perspectives", subtitle, stats grid (Est./Members/Books/Sessions).
- "Who We Are" paragraph block.
- "How it Works" icon list (BookOpen/MessageCircle/Globe).
- Two-button CTA row (Join the Club + Visit Community Page).
- Unused imports: `BookOpen, MessageCircle, Globe`, `freshPerspectivesLogo`.

### Files changed

- `src/components/CommunityPanel.tsx`
