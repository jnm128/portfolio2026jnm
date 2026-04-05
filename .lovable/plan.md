
Goal: remove the dark line/gap still visible between the mobile header and the open nav panel, and make the open state read as one continuous cream surface.

Plan
1. Update the mobile open-menu layering in `src/components/Header.tsx`
   - Keep the header cream when `isMobileMenuOpen` is true.
   - Change the mobile menu panel so it begins at `top: 0` on mobile while open, instead of starting below the measured header height.
   - Add top padding inside the menu equal to the header height so the links still appear below the header content.

2. Make header + menu behave like a single surface
   - Give the mobile menu the same cream background and same stacking relationship as the header.
   - Ensure the menu sits behind the header controls but extends underneath the full header area, so no underlying page color can peek through at the seam.

3. Remove the seam-causing offset hack
   - Replace the current `headerHeight - 1` and `+ 1px` overlap approach.
   - Use a cleaner full-panel layout: panel covers the full viewport, content inside is offset by header height.

4. Verify route-specific behavior still holds
   - On `/contact`, closed mobile header remains dark/transparent as designed.
   - On `/contact`, opening the menu still switches to cream with dark logo/icon.
   - On scroll, closed mobile header on contact remains dark.

Technical details
- Current issue: the menu container starts below the header (`top: headerHeight - 1`), so any mismatch in paint/compositing can still expose the dark page beneath as a line.
- Safer structure:
```text
[fixed header z-101, cream when open]
[fixed mobile menu z-100, top:0, h-screen, cream]
    [nav wrapper with padding-top: headerHeight]
```
- This avoids relying on a 1px overlap, which is fragile on mobile Safari and high-DPR screens like the one shown in the screenshot.

Expected result
- Opening the mobile nav shows one uninterrupted cream block from the top of the header through the menu content, with no dark divider line.
