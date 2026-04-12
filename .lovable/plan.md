

## Three Changes: Icon BG Color, CTA Style, and Lightbox Zoom

### 1. Community Works Icon Background
**File**: `src/pages/BookClub.tsx` (line 282)
- Change `bg-[#F5E642]` to `bg-[#FAFAF5]`

### 2. "See Upcoming Events" Button — White Style
**File**: `src/pages/BookClub.tsx` (lines 149-154 and 182-185)
- Change the outline/border style to a white filled button: `bg-white text-foreground border border-foreground/10`
- Apply to both desktop (line 151) and mobile (line 184) instances

### 3. Enhanced Image Lightbox with Zoom
**File**: `src/components/ImageLightbox.tsx`

Upgrade the lightbox overlay to support pinch/scroll zoom and pan, similar to the reference screenshot:
- Add zoom state (scale) controlled by scroll wheel and pinch gesture
- Add pan state (translate x/y) when zoomed in, controlled by click-drag
- Show zoom controls (+ / - buttons) in the overlay toolbar
- Reset zoom on close
- Keep existing Escape-to-close and click-backdrop-to-close behavior

This enhancement automatically applies to all three case study pages since they already use `ImageLightbox`.

### Files Modified
- `src/pages/BookClub.tsx`
- `src/components/ImageLightbox.tsx`

