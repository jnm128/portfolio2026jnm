
## Reduce Spacing Between Testimonials and Community

Both sections currently use `py-12 md:py-20` padding, which creates a large gap between them. To tighten the gap while keeping the top padding of Testimonials and bottom padding of Community intact:

### Change

**`src/components/Testimonials.tsx`** (line 30)
- Change `py-12 md:py-20` to `pt-12 pb-6 md:pt-20 md:pb-10` -- keeps top padding the same but reduces bottom padding by half

**`src/components/Community.tsx`** (line 12)
- Change `py-12 md:py-20` to `pt-6 pb-12 md:pt-10 md:pb-20` -- reduces top padding by half but keeps bottom padding the same

This halves the visual gap between the two sections while preserving the spacing above Testimonials and below Community.
