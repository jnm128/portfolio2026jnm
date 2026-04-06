

## Fix: Move Tablet Stats Between Text and Image

### Problem
The flex column order on tablet is: text → image → stats. The tablet/mobile stats block (line 149) is placed after the entire flex container, so the image appears above the divider line. The stats should appear directly under the description text, before the image.

### Fix — `src/pages/BookClub.tsx`

Move the `lg:hidden` stats block **inside** the flex container, right after the text `</div>` (line 140) and before the image `<div>` (line 141). Since `flex-col` renders children in source order on tablet, this puts stats between text and image. Add `w-full` to ensure it spans the full container width within the flex.

```tsx
              </div>
              {/* Tablet/mobile stats — between text and image */}
              <div className="lg:hidden w-full border-t border-foreground/10 pt-6 grid grid-cols-4 gap-3 md:gap-8">
                ...stats...
              </div>
              <div className="lg:w-1/2 rounded-2xl overflow-hidden ...">
                <img ... />
              </div>
            </div>
```

Remove the current tablet stats block at lines 149-166 (after the flex container).

### File modified
- `src/pages/BookClub.tsx`

