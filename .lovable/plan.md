## Goal
Make the Ember hero video load quickly on the web. Today it's 6.3 MB, 1920×1080, 60fps, h264 — oversized for a looping background card.

## Plan

1. **Re-encode `src/assets/ember-hero.mp4`** with ffmpeg to a web-optimized version:
   - Scale to 1280×720 (still crisp at card + hero sizes)
   - 30 fps
   - h264, CRF ~26, `-preset slow`, `-pix_fmt yuv420p`
   - `-movflags +faststart` so the browser can begin playback before full download
   - Strip audio (`-an`) — it's muted anyway
   - Target ~1–1.5 MB (≈75–80% smaller)

2. **Generate a poster image** (`src/assets/ember-hero-poster.jpg`) from the first frame so the card shows something instantly while the video buffers.

3. **Update the `<video>` tags** in `src/pages/CaseStudyEmber.tsx`, `src/pages/Work.tsx`, and `src/components/CaseStudyNav.tsx`:
   - Add `poster={emberHeroPoster}`
   - Change `preload="auto"` → `preload="metadata"` on the Work + CaseStudyNav cards (the small thumbnails) so the browser only fetches the video when it's needed; keep `preload="auto"` on the dedicated case-study hero.

4. **Apply the same treatment to `error-safe-hero.mp4`** for consistency (also a looping card video). Sizes: 2.3 MB → ~700 KB target, plus poster.

No design / layout changes — videos still autoplay, loop, muted, playsInline.

## Technical details
```bash
ffmpeg -i ember-hero.mp4 -vf "scale=1280:-2,fps=30" \
  -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p \
  -movflags +faststart -an ember-hero.optimized.mp4
ffmpeg -i ember-hero.mp4 -vf "scale=1280:-2" -frames:v 1 -q:v 4 ember-hero-poster.jpg
```
Then overwrite the originals so existing imports keep working.