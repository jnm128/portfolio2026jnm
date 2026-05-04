## Add "Past Reads" stacked book section to About page

A new section on the About page (`src/pages/AboutPage.tsx`), placed in the dark "Beyond the Pixels" block right after **Current Read** and before **Work Playlist**.

### Layout & interaction
- Heading: "Past Reads" (uppercase eyebrow, matches sibling sections).
- 8 book cards rendered as a horizontal stack of overlapping spines (each card offset by ~40–48px so only a sliver of cover + title shows).
- On hover, the hovered card translates upward (~`-translate-y-6`) and slightly scales, revealing more of its cover; neighbors stay put. Smooth 300ms transition.
- On click, opens the same minimalist book detail dialog used on the Community/BookClub page (cover + title + author + description + "View on Amazon" CTA).
- Mobile (<md): switch to a horizontal scroll of slightly-overlapping cards (stacking gets cramped on narrow screens), keeping the same click-to-open behavior.

### Visual ASCII
```text
[📕][📗][📘][📙][📕][📗][📘][📙]
       ↑ hover lifts one up
```

### Data
- Inline array of 8 books in `AboutPage.tsx`. Reuse the existing 8 non-current titles from `BookClub.tsx` (Design of Everyday Things, Don't Make Me Think, Hooked, Sprint, Thinking Fast and Slow, Articulating Design Decisions, Refactoring UI, Emotional Design) so visuals stay consistent. Each entry: `title`, `author`, `cover`, `description`, `link`.

### Technical details
- Use `Dialog`/`DialogContent` from `@/components/ui/dialog` styled identically to BookClub's modal (rounded-2xl, max-w-sm, cover on top, View on Amazon button). Since this section is inside a `data-theme="dark"` block, the Dialog renders in a portal at document root so it uses the default light dialog styling — no extra theme handling needed.
- Stack implementation: a flex row with negative margin-left on each card after the first (e.g. `-ml-20 md:-ml-24`); on hover apply `hover:-translate-y-6 hover:z-20` and bump z-index so the lifted card sits above neighbors. Base `z-index` increases left→right so stacking order is natural.
- Each card: fixed width (~`w-32 md:w-40`), `aspect-[3/4]`, `rounded-lg overflow-hidden`, subtle `shadow-lg` and `ring-1 ring-background/10` to separate spines on the dark background.
- State: `const [selectedBook, setSelectedBook] = useState<Book | null>(null)` local to AboutPage.
- Wrap section in `<FadeIn delay={350}>` to fit existing rhythm.

### Files to modify
- `src/pages/AboutPage.tsx` — add Book type, books array, Past Reads section, Dialog, related imports (`useState`, `Dialog*` from ui/dialog, and the `emotionalDesignCover` asset).

No new files, no new dependencies.