

## Move Hero Image Below Text at Tablet Breakpoint

Currently the text and image are stacked vertically at all breakpoints. The user is at 768px (tablet) and wants to ensure the image sits clearly below the text content rather than appearing side-by-side or in an unexpected layout.

Looking at the code, text and image are already stacked vertically in separate divs. The issue is likely that the image height `md:h-[80vh]` kicks in at 768px, making it too tall for tablet. The fix is to add a tablet-specific height so the image doesn't dominate the viewport.

### Change — `src/components/Hero.tsx`

**Line 70:** Update the image container height to include a tablet breakpoint:

`h-[60vh] md:h-[80vh] lg:h-[90vh]` → `h-[50vh] md:h-[60vh] lg:h-[90vh]`

This gives tablet screens a more proportional image height, keeping the text-then-image vertical flow clear without the image consuming most of the viewport.

