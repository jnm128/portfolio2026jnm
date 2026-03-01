

## About Page Updates

### 1. Circular progress indicator inside the play/pause button
Replace the current flat play/pause button with an SVG circle progress ring. When a track is playing, an SVG `<circle>` with `stroke-dasharray` and `stroke-dashoffset` will render around the button, visually filling as the audio progresses. The Play/Pause icon sits in the center.

**Technical approach:**
- Add `audioProgress` state (0-100) and attach a `timeupdate` listener on the `HTMLAudioElement` to update it
- Replace the button's border with an SVG overlay containing two circles: a background track circle and a foreground progress circle
- The progress circle uses `stroke-dashoffset` calculated from the progress percentage
- When not playing, just show the normal border circle with the Play icon
- Add real audio sources (SoundHelix free samples) so playback actually works

### 2. Move "About" title into the paragraph content area
Remove the standalone `<h1>About</h1>` that sits above the grid. Instead, place it as the first element inside the bio text column (right side), before the first paragraph. It keeps the same serif styling.

### 3. Keep layout: image left, text right
The current layout already has image on the left and text on the right. This will remain unchanged -- the user confirmed "right align text and left align image" meaning text on the right, image on the left (current state).

### File changes

**`src/pages/AboutPage.tsx`**
- Add `audioProgress` state and `timeupdate` event handling in `togglePlay`
- Update playlist `src` fields with SoundHelix MP3 URLs
- Remove the standalone `<h1>About</h1>` block (lines 45-49)
- Add `<h1>About</h1>` as first child inside the bio text div (line 66)
- Replace the play/pause button markup with an SVG-based circular progress button:
  - 36x36 SVG with a background circle (`stroke: border color`) and a progress arc (`stroke: foreground`, dashoffset based on progress)
  - Play/Pause icon centered inside via absolute positioning
  - Progress arc only visible when that track is the active one

