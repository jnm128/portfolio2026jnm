## CVS case study tweaks

### 1. Back link → Work page CVS card

- `src/pages/Work.tsx`: fix the CVS Health entry — change `link` from `/case-study/mindful-wellness` to `/case-study/cvs-health`. Add a stable id anchor (`id="project-cvs-health"`) to the CVS card's outer wrapper so we can deep-link.
- `src/pages/CaseStudyCVS.tsx`: replace the `navigate(-1)` Back button with a `<Link to="/work#project-cvs-health">` Back link (keeps icon + label, same styling).
- Confirm `ScrollToTop` does not block hash-based scroll. If it does, scroll to `#project-cvs-health` after mount via a small `useEffect` on the Work page that reads `location.hash` and calls `scrollIntoView({ behavior: 'smooth', block: 'start' })` with header offset (~96px).

### 2. Remove NDA blurb + "Here's what I can tell you"

- `src/pages/CaseStudyCVS.tsx`: delete the entire `FadeIn delay={250}` block (lines 65–73) — both the NDA paragraph and the "Here's what I can tell you" + bouncing `ArrowDown`.

### 3. Update "Curious to learn more" copy

- `src/pages/CaseStudyCVS.tsx`: replace the description paragraph under the "Curious to learn more?" heading with:

  > I can't share visuals as I'm tied to an NDA with CVS Health, but happy to walk you through the work, decisions, and outcomes in more detail.

- Heading, button, and styling remain unchanged.

### Files to edit

- `src/pages/Work.tsx` — fix CVS link target + add anchor id + hash-scroll effect.
- `src/pages/CaseStudyCVS.tsx` — Back link → `/work#project-cvs-health`, drop NDA blurb block, update Curious copy.
