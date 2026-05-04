## Polish the Favorite Books fanned stack

Edits to `src/pages/AboutPage.tsx`.

### Changes

1. **Default-active middle book**
   - Initialize `activeIndex` to the middle of the array instead of `0`:
     ```tsx
     const [activeIndex, setActiveIndex] = useState(Math.floor(favoriteBooks.length / 2));
     ```
   - With 9 books this lands on index 4 (the center of the fan), so the middle card is lifted/straightened on first paint and the detail panel below it shows that book by default.

2. **Expand padding so book corners don't clip**
   - On the fan wrapper, remove `overflow-hidden` and increase vertical + horizontal padding so the rotated outer cards and the lifted active card stay fully visible:
     - Change `pt-12 pb-6 md:pt-16 md:pb-10 px-2 overflow-hidden`
     - To `pt-20 pb-12 md:pt-24 md:pb-16 px-6 md:px-12`
   - Keep `justify-center` and the negative `-mx-3 md:-mx-4` overlap so the fan still reads as a stack, just with breathing room around the edges.

3. **Softer, translucent stroke (matches Collab pills)**
   - Collab pills use `bg-background/10 backdrop-blur-md` with no hard ring. Mirror that lightness on the book cards by replacing the opaque white card + ring:
     - From: `bg-background ring-1 ring-background/10 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.45)]`
     - To: `ring-1 ring-background/15 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)]`
   - Drop the inner `p-1.5` white border frame and the `bg-background` fill so the cover fills the card edge-to-edge with only a faint translucent hairline outline.
   - Update the `<img>` to `rounded-md` (matching the card) instead of the inner `rounded-sm`.

### Visual result

```text
   before                       after
 ┌──────────────┐            ┌────────────────────┐
 │ ▓▓ ▓ ▓ ▓ ▓ ▓ │  clipped   │   ▓  ▓  ▓ ▓ ▓ ▓ ▓  │  full bleed
 │ first lifted │  tops      │  middle lifted,    │  + soft ring
 └──────────────┘            │  nothing clipped   │
                              └────────────────────┘
```

### Files modified
- `src/pages/AboutPage.tsx`
