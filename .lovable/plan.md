Add a brief, branded loading spinner that appears on the homepage (`/`) when it first loads, then fades out to reveal the page.

## What you'll see
- A full-screen overlay using `bg-background` covers the page on first visit
- Centered, a small lowercase `o` (the same Outfit-bold style as MINO's logo) sits in the middle
- Concentric rings ripple outward from the `o` continuously (matcha-calm, slow)
- After ~900ms the overlay fades out and the homepage fades in normally
- Only shows on the home route, only on first load per session (so route-changing back home doesn't re-trigger)

## Files
- New: `src/components/MinoLoader.tsx`
  - Fixed full-screen overlay, `z-[300]`, `bg-background`
  - Center stack: the letter `o` in `font-sans font-bold text-title text-5xl`
  - Two or three absolutely-positioned rings behind it: `rounded-full border border-foreground/30`, animated with a new `ripple` keyframe (scale 0.6 → 2.4, opacity 0.6 → 0) on a 1.6s loop, staggered delays (0s, 0.4s, 0.8s)
  - Internal `useState` `visible`, after 900ms set `leaving` (fade-out 400ms via opacity transition), then unmount
- Edit: `src/pages/Index.tsx` — render `<MinoLoader />` at top of `<main>`; track first-load via `sessionStorage` key `mino-loaded` so it only shows once per tab session
- Edit: `src/index.css` — add `@keyframes ripple` and a `.animate-ripple` utility class in the `@layer components` / keyframes section

## Tokens / design alignment
- Uses `bg-background`, `text-title`, `border-foreground/30` only — no literal colors
- Outfit font, bold weight to match the MINO logo
- Slow easing (`cubic-bezier(0.25, 0.46, 0.45, 0.94)`) consistent with existing natural-fall animation