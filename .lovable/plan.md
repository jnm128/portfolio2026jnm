
The user wants the light cream container inside the "Interested in collaborating?" section to expand wider within the dark section, rather than being constrained to `max-w-4xl`.

Looking at `Collab.tsx`, the outer container is `max-w-[1600px]` (site-wide) and the inner cream card is `max-w-4xl mx-auto` (~896px). I'll remove the `max-w-4xl` constraint so the cream container fills the full width of the outer `max-w-[1600px]` container, with dark `#1C1C1C` only showing in the standard `px-8 md:px-16` outer padding.

## Expand Collab Container Width

### `src/components/Collab.tsx`
Remove `max-w-4xl mx-auto` from the cream container so it expands to fill the full width of the parent `max-w-[1600px]` wrapper. The dark background remains visible only in the outer horizontal page padding (`px-8 md:px-16`).

- Change `bg-[#F8F6F1] rounded-2xl px-8 py-16 md:py-20 max-w-4xl mx-auto` → `bg-[#F8F6F1] rounded-2xl px-8 py-16 md:py-20 w-full`
- Content inside (heading, paragraph, CTA) remains centered via the existing `items-center text-center` flex container

### Files Modified
- `src/components/Collab.tsx`
