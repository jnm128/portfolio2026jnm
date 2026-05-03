## Plan: Restyle NDA note + add scroll spacing on CVS Health page

### Changes to `src/pages/CaseStudyCVS.tsx`

1. **Move the "Here's what I can tell you:" line to its own row with a downward arrow indicator**
   - Split the current paragraph so the NDA disclaimer reads:
     > "I'm tied to an NDA so I can't share visuals from my work at CVS Health — but I'd be happy to chat about it."
   - On a new line below, render: `Here's what I can tell you ↓` (using a `lucide-react` `ArrowDown` icon, vertically centered next to the text, with a subtle bounce or muted color).

2. **Add more whitespace below the hero so only the hero + NDA text are visible before scrolling**
   - Increase the bottom padding of the hero `<section>` (line 16) from `pb-10 md:pb-16` to a much larger value (e.g. `pb-32 md:pb-[40vh]`) so the next "Specialty Central" section sits below the fold.
   - This ensures on the user's current viewport (~825×734) only the title, metadata, hero image, and NDA text are visible before the user scrolls.

### Technical detail
- Import `ArrowDown` from `lucide-react`.
- Wrap the new "Here's what I can tell you" line in a flex container with `justify-center items-center gap-2` and apply the existing muted text styling.
- Optionally add `animate-bounce` to the arrow for a subtle scroll affordance.

No other files affected.