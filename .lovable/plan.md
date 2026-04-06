

## Centered Nav — Logo in the Middle, No CTA Pill

Restructure the desktop header from `[Logo ... Links+Button]` to a fully centered layout: `[Work, About ... MINO. ... Community, Contact]` with all items as plain text links.

### Changes — `src/components/Header.tsx`

**Desktop nav (lines 185–268):** Replace the current `flex justify-between` layout with a single centered row:

```
Work   About   MINO.   Community   Contact
```

- Change the container from `justify-between` to `justify-center gap-10`
- Move the logo into the middle of the nav links (between About and Community)
- Remove the pill button styling from "Contact" — make it a plain text link like the others
- Rename "Get in Touch" to "Contact"
- Keep the mobile hamburger button absolutely positioned to the right so it doesn't interfere with centering

**Mobile menu (lines 306–320):**
- Change "Get in Touch" pill button to a plain text link styled like the other mobile nav items
- Rename to "Contact"

**Contact page dark theme:** The `isContactPage` conditional text colors (`text-white/70`, `text-white`) remain but apply uniformly to all 4 links + logo.

### Structure
```text
Desktop:  Work  About  [MINO.]  Community  Contact
          ←─── all centered, equal weight ───→

Mobile:   [hamburger icon, right-aligned]
          Work / About / Community / Contact (all plain text)
```

### What stays the same
- Scroll behavior, mobile menu overlay, case study progress bar
- Logo animation (letter-by-letter fall)
- All routing logic

