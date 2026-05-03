## Brown marquee logos + light-brown hero secondary copy

### 1. `src/components/IntroBlurb.tsx` — tint logos brown
Currently logos use `grayscale brightness-0 opacity-60` (renders black). Replace `<img>` with a `<div>` using CSS mask-image so the logo silhouette is filled with the design token color:
- Use `bg-hint` (the same light-brown token used by case study card copy: `#7A7269`)
- Apply `WebkitMaskImage` / `maskImage` set to the logo URL, with `mask-size: contain`, `mask-position: center`, `mask-repeat: no-repeat`
- Preserve sizing via existing `logo.height` and add a fixed width (`w-24 md:w-32`) since masked divs need explicit dimensions
- Keep `aria-label={logo.alt}` and `role="img"` for accessibility

### 2. `src/components/Hero.tsx` — secondary copy color
Change the hero subtitle paragraph (line 104) from `text-muted-foreground` to `text-hint` so it matches the case study card copy color (light brown). The "UX Designer" accent on line 101 stays as `text-muted-foreground` (it's a title accent, not body copy).

### Files
- `src/components/IntroBlurb.tsx`
- `src/components/Hero.tsx`
