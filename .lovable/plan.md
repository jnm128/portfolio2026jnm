

## Fix Hero Section Padding & Scroll Interaction

### Problem
The hero container already has `mx-auto max-w-[1600px] px-8 md:px-16` in the markup, but the JavaScript scroll handler (lines 34-39) overrides the padding with wrong values — `maxPad` is set to 40px desktop / 24px mobile instead of the requested 64px / 32px.

### Solution
Separate the title/text area from the image area so the title always maintains the standard `px-8 md:px-16` padding, while the image container gets its own ref for the scroll-to-grow padding animation.

### File: `src/components/Hero.tsx`

1. **Create a static outer wrapper** with `mx-auto max-w-[1600px] px-8 md:px-16` for the title, subtitle, and button — no JS override on this container.

2. **Move `containerRef`** to a separate inner div that wraps only the image/PopIn block. This div starts with `px-8 md:px-16` and the scroll handler animates its padding from 32/64 → 0.

3. **Update scroll handler values**: Change `maxPad` from `isMd ? 40 : 24` to `isMd ? 64 : 32` so the image padding starts matching the site standard and animates to zero (edge-to-edge).

### Structure after change
```text
<section>
  <div class="mx-auto max-w-[1600px] px-8 md:px-16">   ← static, holds text
    <h1>...</h1>
    <p>...</p>
    <button>...</button>
  </div>
  <div ref={containerRef} class="mx-auto max-w-[1600px] px-8 md:px-16">  ← JS-animated padding
    <PopIn>
      <div ref={imageWrapperRef}>...</div>
    </PopIn>
  </div>
</section>
```

