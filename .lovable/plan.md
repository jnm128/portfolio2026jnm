
Goal: make the Book Club hero image reliably visible instead of leaving the hero as a blank cream block.

What I found:
- In `src/pages/BookClub.tsx`, the hero image is wrapped in `PopIn` with `className="absolute inset-0 -z-10"`.
- That combination is fragile for a hero background: the image layer can sit behind the page background, and it also starts at `opacity: 0` until the intersection animation fires.
- Your screenshot matches that failure mode exactly: the text renders, but the image layer does not.

Plan:
1. Rebuild the hero background layer in `src/pages/BookClub.tsx`
   - Remove `PopIn` from the hero image only
   - Replace it with a plain absolute wrapper so the image is always rendered immediately
   - Keep the uploaded image asset import in place

2. Fix the stacking order
   - Add `isolate` to the hero `<section>`
   - Change the image wrapper to `absolute inset-0 z-0`
   - Keep the text container at `relative z-10`
   - This ensures the image sits behind the text, not behind the whole page

3. Simplify the image source and preserve visibility
   - Use `src={bookClubHero}` directly instead of `?v=2`
   - Keep `w-full h-full object-cover`, and add `object-center` if needed
   - Keep a light overlay such as `bg-black/15` or `bg-black/20` for readability

4. Leave the rest of the page unchanged
   - No changes to the stats, books grid, dark sections, or CTA
   - No broad animation refactor unless the hero is confirmed fixed first

Technical shape of the fix:
```tsx
<section className="relative isolate min-h-[70vh] flex items-end overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img
      src={bookClubHero}
      alt="Book club gathering"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-black/15" />
  </div>

  <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 py-16 md:py-24">
    ...
  </div>
</section>
```

Why this should solve it:
- Imported assets already get cache-busted by Vite, so the extra query string is not the real issue now.
- The more likely problem is the animated negative-z background layer. Making the hero background a normal absolute layer removes both the stacking bug and the “starts hidden” risk.
