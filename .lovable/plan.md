

## Why the page is lagging

Two components are causing significant performance issues:

### 1. CustomCursor - Memory leak from MutationObserver
The `MutationObserver` on line 61 watches the entire DOM (`childList: true, subtree: true`) and re-runs `addHoverListeners()` on every single DOM mutation. Each call adds **new** event listeners to every `a`, `button`, `p`, `h1`, `span`, `img`, etc. without removing the old ones. This causes hundreds of duplicate listeners to pile up, triggering excessive React re-renders (`setHoverType` called many times per mouse movement).

**Fix:** Use event delegation instead -- attach a single `mouseover` listener on `document.body` and check `e.target` to determine hover type. Remove the MutationObserver entirely.

### 2. ScrollAnimations - Unthrottled parallax scroll handler
The `handleScroll` function runs on every scroll event and directly sets `style.transform` on the hero image. This causes layout recalculations on every frame during scrolling.

**Fix:** Wrap the scroll handler in `requestAnimationFrame` to limit it to once per frame, preventing redundant style recalculations.

---

### Technical changes

**File: `src/components/CustomCursor.tsx`**
- Remove `addHoverListeners()` function and the `MutationObserver`
- Replace with a single `mouseover` event listener on `document` using event delegation
- Check `e.target.closest()` to determine if hovering over interactive, image, or text elements
- This eliminates all duplicate listeners and the expensive DOM-wide observer

**File: `src/components/animations/ScrollAnimations.tsx`**
- Wrap the `handleScroll` callback in `requestAnimationFrame` with a guard flag to skip redundant frames
- This limits style updates to ~60fps max instead of potentially hundreds per second

These two changes will eliminate the lag without any visual difference.

