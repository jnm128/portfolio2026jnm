Replace `src/assets/ember-hero.mp4` with the uploaded `ember_v3.mp4`, optimized via ffmpeg (scale 1280, 30fps, crf 26, preset slow, yuv420p, +faststart, no audio) to keep file size small.

Existing `<video>` / `SmartVideo` tags on Work, CaseStudyEmber, and CaseStudyNav already use `loop muted autoPlay playsInline`, so looping is preserved with no code changes.