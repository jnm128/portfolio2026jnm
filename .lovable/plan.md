## Rotating word in About heading

Update `src/components/AboutSection.tsx` so the last word of the heading "Design, Tech & **Intention**" cycles through three words.

### Change
- Replace static "Intention" with a rotating word that cycles every ~2.2s through:
  1. Intention
  2. Research
  3. Focus
- Use `useState` + `useEffect` with `setInterval` to advance the index.
- Wrap the active word in a `<span>` with `key={word}` so React remounts it, triggering the existing `animate-fade-in` keyframe for a smooth cross-fade.
- Style the rotating word slightly distinct (italic, `text-background/90`) so the swap reads as intentional.

### Files
- `src/components/AboutSection.tsx` only.
