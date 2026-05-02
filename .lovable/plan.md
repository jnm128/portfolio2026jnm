## Simplify Services panel

Clean up `src/components/ServicesPanel.tsx`:

### Content changes
- Remove subtitle "Freelance & fractional design engagements."
- Remove the entire **Fractional** section (and its 4 items).
- From the **Freelance** list, remove:
  - "UX research & usability testing"
  - "Design systems setup & audits"
- Remaining 3 freelance items (now numbered I, II, III):
  - I. End-to-end product design
  - II. Web & landing page design
  - III. UX audits + redesign roadmap

### Style changes
- Remove all divider lines between list items (top, between, bottom).
- Add roman numeral prefix (I / II / III) to each item, matching the AboutSection design philosophy treatment: small italic muted numeral in a fixed-width column, content beside it.
- Replace `<li>` borders + `py-5` with a `space-y-6` flex layout (numeral + text content).

### CTA
- Replace the bordered footer block with a single inline line: **"Have a project in mind? Let's talk"** where "Let's talk" is an underlined link to `/contact` (closes panel on click).
- Drop the divider above it.

### Files changed
- `src/components/ServicesPanel.tsx`
