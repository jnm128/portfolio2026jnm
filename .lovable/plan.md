## Goal

Expand `src/pages/CaseStudyEmber.tsx` so it mirrors the full content of the old portfolio's Ember case study, including every narrative block, supporting imagery, and embedded video.

## What to add / change

Use the existing `SplitSection` + cream-on-cream layout the page already uses. Pull images directly from the original Webflow CDN URLs (no need to re-host) and embed YouTube videos via standard responsive iframes.

### Sections to expand or add (in order)

1. **Project Overview** — split into "Overview", "Key responsibilities" (3 bullets), and "Outcomes" (3 bullets) using the original copy.
2. **Hero supporting image** — `Frame-27022-1.png` (already shown for problem space — keep).
3. **Approach (extended copy)** — keep the 14-week breakdown, plus a paragraph about 2 rounds of iteration on tested designs and what was learned about feature scope.
4. **Prototype intro** — "I prototype key interactions of a robust app…" with the prototype hero image.
5. **Prototype video embed** — YouTube `oXWI_eXER_U` (Ember Mobile App preview) responsive 16:9 iframe.
6. **Problem Space** — keep as is, add the `Frame 27023 (3).png` supporting image below.
7. **Research** — keep survey/interview intro; add the `Screenshot 2024-07-20...PM 1 (1).png` survey-questions sample image with caption "Survey question samples".
8. **Research findings** — affinity-diagram insight image `Slide 4_3 - 7 (3).png` plus the 3 quote insight cards (already present).
9. **Personas** — new section "User Personas" with `Slide 4_3 - 8 (1).png` and `Frame 27068.png` images and the "I explored ways to increase clarity for the 'lost' group" body copy.
10. **User Journey** — new section with `Frame 27080.png` image and the "main design challenge was influencing user behaviors" body copy (locked-feature strategy).
11. **User Empathy / Tone of Voice** — keep existing 4-card design challenges; add `Frame 27079.png` supporting image.
12. **Defining Requirements** — new section with `Slide 4_3 - 9.jpg` image and the "I prototype key interactions" body copy.
13. **User Testing** — new section with `Slide 4_3 - 10.jpg` image and "I led 6 virtual user testing sessions…" copy plus an embed of the "First iteration of prototype solution" YouTube video (`SCBvADTYbcU`).
14. **Iterations** — expand the existing 2 cards to all 4 from the old portfolio:
    - Personalization (kept)
    - Restricted features de-motivating (kept)
    - **New:** Clearer instructions for journal prompts ("Are these prompts? These don't look like journal prompts.")
    - Each iteration block keeps the participant quote callout.
15. **Solutions** — new section grouping 3 feature solutions, each with body copy + a YouTube embed:
    - **Journaling feature** — video `TkjuqWlC2dE`
    - **Vision board feature** — video `SIwPN9Srgm0`
    - **Programs & milestones feature** — video `BCzuEGVuXSY`
16. **Metrics + Learnings (expanded)** — keep existing outcomes stats + Figma CTA, then add the extended narrative blocks: "MFA constraints / would prioritize journal insights as MVP", "Metrics & user engagement (retention, GAUs, journal entries per user)", "Future development & feasibility (sentiment analysis API)".

### Implementation notes

- All new images use plain `<img>` inside a `rounded-2xl overflow-hidden bg-card` wrapper, with `aspect-video` or `aspect-[16/10]` for layout consistency. Wrap each in `FadeIn`.
- YouTube embeds: `<div class="relative w-full aspect-video rounded-2xl overflow-hidden bg-card"><iframe src="https://www.youtube-nocookie.com/embed/{ID}" allow="..." allowfullscreen className="absolute inset-0 w-full h-full" /></div>`. No new dependency.
- Quote callouts in iteration blocks: small italic `text-muted-foreground font-serif` block under each iteration heading, prefixed with a left border (`border-l-2 border-border pl-4`).
- Section spacing remains `py-12 md:py-20 bg-background`, keep the `SplitSection` label pattern (uppercase eyebrow on the left).
- No new files, no routing changes, no design-token changes. Only `src/pages/CaseStudyEmber.tsx` is edited.

## Out of scope

- Other case study pages (Error Safe stays as-is unless you ask).
- Any image hosting / re-uploads (we hot-link Webflow CDN, matching how the original portfolio serves them).
- Audio/captions for embedded videos.
