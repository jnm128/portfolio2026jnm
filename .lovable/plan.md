

## Add FAQ section to Book Club page

### What
Add an FAQ section between the CTA and the Footer, styled consistently with the page's editorial design language. Four questions covering meeting time/frequency, joining LinkedIn, staying connected async, and general participation.

### Changes (1 file: `src/pages/BookClub.tsx`)

**After the CTA section (line ~273), before `{/* Book Detail Dialog */}`, add a new FAQ section:**

- Section label: "Frequently Asked Questions" using the small uppercase tracked label style (`text-sm font-medium uppercase tracking-widest text-foreground/60`)
- Cream background (`bg-[#F8F6F1]`) with `py-16 md:py-24` padding, same container as other sections
- Accordion-style FAQ items using the same toggle pattern as the existing `FAQ.tsx` component (local `openIndex` state, `ChevronDown` icon rotation, `max-h` animation)
- Each item: border-top divider, question as `text-lg font-medium`, answer as `text-muted-foreground font-serif`

**FAQ content:**

1. **When and how often does the book club meet?** — We meet once a month via virtual sessions. Exact dates are shared in advance through our LinkedIn group so everyone can plan ahead.

2. **How do I join the LinkedIn group?** — Search for "Fresh Perspectives Book Club" on LinkedIn or reach out directly through the Join the Club button above. We'll send you an invite to the private group.

3. **How can I stay connected between sessions?** — We have an active LinkedIn group and a Discord server where members share articles, book recommendations, and continue discussions asynchronously.

4. **Do I need to finish the book before each session?** — Not at all! We encourage reading at your own pace. Sessions are designed so you can participate meaningfully even if you're partway through.

**Technical:** Add `useState<number | null>` for `faqOpenIndex` and `ChevronDown` import (already imported? will check). Reuse `FadeIn` for staggered reveal.

