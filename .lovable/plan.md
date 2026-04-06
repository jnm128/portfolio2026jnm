

## Fix Animations & Swap Sections on Book Club Page

### 1. Swap "Who We Are" and "Previous Reads" sections
Move "Who We Are" (Section 3, lines 191-203) above "Previous Reads" (Section 2, lines 144-189), so the order becomes: Hero → Who We Are → Previous Reads → How the Community Works.

### 2. Fix staggered fade-in animations
Currently, both "Who We Are" and "How the Community Works" wrap the heading in one `<FadeIn>` and the content paragraph/list in another `<FadeIn delay={100}>`. Because both elements are close together in the viewport, they trigger near-simultaneously, making the stagger imperceptible — they appear to animate as one block.

**Fix**: Wrap the heading and content together in a single `<FadeIn>`, then give the content paragraph/list its own separate staggered delay using inline CSS (`opacity: 0`, `transform`, `transition-delay`) or by increasing the delay significantly (e.g., `delay={300}`) so the stagger is visually distinct.

Approach: Keep the heading inside a `<FadeIn>` with no delay, and increase the content `<FadeIn>` delay from `100` to `300` for both sections. This creates a noticeable two-step reveal (heading first, then content).

### Technical detail
- **File**: `src/pages/BookClub.tsx`
- "Who We Are" section (lines 191-203): move above "Previous Reads" (lines 144-189)
- Lines 197, 212: change `delay={100}` to `delay={300}` on both content `<FadeIn>` wrappers

