
Update the Book Club hero overlay so the newly uploaded image is more visible while preserving text readability.

1. Adjust the hero overlay in `src/pages/BookClub.tsx`
   - Change the dark layer from `bg-black/40` to a lighter opacity such as `bg-black/20` or `bg-black/25`
   - Keep the full-width image, current text, and existing case-study-style layout intact

2. Fine-tune text contrast if needed
   - Keep the heading white
   - Slightly increase paragraph contrast from `text-white/80` to `text-white/90` if the lighter overlay reduces readability
   - Leave the CTA button styling as-is unless the new image makes it blend in too much

3. Verify responsiveness against the current layout
   - Ensure the hero still reads well at the user’s current viewport size and remains visually balanced on mobile/tablet breakpoints
   - Keep the rest of the page unchanged

Technical detail:
The only required code change is in the hero section overlay div:
```tsx
<div className="absolute inset-0 bg-black/20" />
```
Optional supporting tweak:
```tsx
<p className="text-base md:text-lg text-white/90 ...">
```
This is the smallest change that should make the new background image noticeably clearer without redesigning the section.
