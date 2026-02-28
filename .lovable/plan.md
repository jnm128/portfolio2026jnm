

## One-Time Dark Mode Fade at Kind Words, Then Stay Dark

### Concept

The fade-to-black transition happens **once** when the Testimonials ("Kind Words") section scrolls into view. After that, everything below -- Community, Collab, and Footer -- is permanently dark with no fade effect. Cards in both Testimonials and Community use `#F8F6F1` as their background color.

### Changes

**1. `src/components/Testimonials.tsx`**
- Keep the existing `IntersectionObserver` + `isVisible` fade logic (this is the only section that fades)
- Change card backgrounds from `bg-white/10` to `bg-[#F8F6F1]` (cream color)
- Card text (title, quote, author) should use dark text colors since cards are now light
- Avatar circles and other card internals revert to dark-on-light styling within cards
- Section-level text ("Kind Words" label, headline) remains white when visible
- Navigation arrows remain white-themed

**2. `src/components/Community.tsx`**
- Remove the `IntersectionObserver` and `isVisible` logic entirely
- Make the section permanently dark: `bg-black` with white text
- Change card background from `bg-white/10` to `bg-[#F8F6F1]`
- Card text uses dark colors (since cards are cream-colored)
- Section label, heading, and "Learn More" link stay white (outside cards)

**3. `src/components/Collab.tsx`**
- Already dark-themed (`bg-surface-6 text-surface-1`) -- no changes needed, it naturally continues the dark flow

**4. `src/components/Footer.tsx`**
- Already dark-themed (`bg-surface-6 text-surface-1`) -- no changes needed

### Visual Flow Summary

```text
Hero / IntroBlurb / Projects  -->  #F8F6F1 (cream, light mode)
                                      |
                              [scroll fade transition]
                                      |
Kind Words (Testimonials)     -->  fades to #000 (one-time)
Community                     -->  always #000
Collab                        -->  always dark (bg-surface-6)
Footer                        -->  always dark (bg-surface-6)
```

Cards in both Testimonials and Community sections will be `#F8F6F1` with dark text, providing contrast against the black section backgrounds.

