I’ll update the style switcher so the connecting line no longer shows through the inactive circles.

Plan:
1. In `src/components/ThemeToggle.tsx`, remove the inactive swatch `opacity-70` class because it makes the entire button semi-transparent, allowing the line underneath to show through.
2. Keep each circle on top of the line with `relative z-10` and a fully opaque `backgroundColor`.
3. Replace the inactive visual treatment with non-transparency-based styling, such as a slightly smaller size plus solid border, and use `hover:scale-110` or a ring/border change instead of opacity.
4. Keep the selected state as the larger circled/ringed style shown in your screenshot, with the line hidden behind the selected circle as well.

Technical detail:
- The issue is caused by `opacity-70` on inactive buttons. CSS opacity affects the whole element, including its fill, so even with a solid `backgroundColor`, the underlying line can still be visible. The fix is to make inactive swatches fully opaque and use size/scale/border changes for visual hierarchy instead of opacity.