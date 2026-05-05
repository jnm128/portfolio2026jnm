## Add "How I Work", "Skill Set" & "Testimonials" sections to About page

Insert a new airy, center-aligned editorial block in `src/pages/AboutPage.tsx` between the Hero/Intro section (ends line 110) and the dark "Beyond the Pixels" section (starts line 113).

### Layout

The new block lives on the cream `bg-background` so it visually flows from the hero before transitioning into the dark section. Three stacked sub-sections, all centered with `text-center` and `max-w-3xl mx-auto`, with generous vertical rhythm (`py-20 md:py-32`, `space-y-24 md:space-y-32`):

```text
┌─────────────────────────────────────┐
│        — How I Work — (eyebrow)     │
│      A process, not a formula       │
│   short paragraph (1–2 sentences)   │
│                                     │
│   01 Discover   02 Define   03 ...  │
│   short blurb   short blurb  ...    │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│        — Skill Set — (eyebrow)      │
│         What I bring to the room    │
│                                     │
│   Product Design                    │
│   Product Strategy                  │
│   UX Research & Testing             │
│   (each: title + 1-line description)│
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│       — Testimonials — (eyebrow)    │
│       Kind words from collaborators │
│                                     │
│   "Large pull-quote here..."        │
│   — Name, Role                      │
│   (rotating, prev/next chevrons)    │
└─────────────────────────────────────┘
```

### Content

**How I Work** — 4 steps (numbered 01–04), shown as a centered grid (`grid-cols-2 md:grid-cols-4 gap-8`):
- 01 Discover — research, listen, frame the real problem
- 02 Define — synthesize insights into clear opportunities
- 03 Design — explore, prototype, validate with users
- 04 Deliver — ship, measure, iterate

**Skill Set** — 3 capability cards stacked vertically, centered:
- Product Design — interaction design, design systems, visual craft for web & mobile
- Product Strategy — aligning user needs with business goals; roadmaps & prioritization
- UX Research & Testing — interviews, usability testing, synthesis, behavioral insight

**Testimonials** — single rotating quote (matches existing testimonial pattern in the project). 3 placeholder quotes with prev/next circular chevron buttons (reuse the same minimalist arrow style already used for the books carousel). Quotes:
- "Joanna brings calm and clarity to complex problems." — Product Lead
- "Her research turns assumptions into actionable direction." — Engineering Manager
- "A rare blend of strategic thinking and beautiful craft." — Design Director

### Technical notes

- Wrap each sub-section in `<FadeIn>` for the standard scroll-in entrance.
- Use existing tokens only: `text-title` for headings, `text-foreground` for body, `text-hint` for eyebrows, `border-border` for dividers. No literal colors.
- Eyebrow style: `text-xs uppercase tracking-widest text-hint` (consistent with existing pattern).
- Section headings: `text-3xl md:text-5xl font-serif text-title` to match "Beyond the Pixels".
- Testimonial uses `useState` for active index; reuse the chevron button styling from the existing books carousel but with `border-border`/`text-title` token swap for the cream background.
- Numbered step labels: `font-serif italic text-hint` (matches the numeral style used in `AboutSection.tsx`).
- All three blocks are centered with `text-center mx-auto` and use airy spacing (`py-20 md:py-32` outer, `mb-6` between eyebrow/headline, `mb-12` before content grid).

### Files modified
- `src/pages/AboutPage.tsx` — insert new `<section>` between lines 110 and 113; add testimonial state alongside the existing `activeIndex` state.