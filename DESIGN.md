# Hybrid Design System: The Gamified Terminal

## 1. Core Philosophy
This design system rejects corporate minimalism. It is a highly opinionated, playful fusion of a dark terminal environment, Neo-brutalist (blocky/Minecraft-inspired) component structures, and expressive, high-energy accents. It should feel like a developer's personal playground.

## 2. Color Architecture (Terminal + Golden Eclipse)
*   **Base Environment:** `#1c2128` (Deep Slate - Odysseus inspired)
*   **Surface Containers:** `#22272e` (Elevated Slate)
*   **Primary Text:** `#e6edf3` (High-contrast light gray)
*   **Primary Accent (Golden Eclipse):** `#f1fa8c` (Use aggressively for primary buttons, active states, and hard shadows. This is the core personality color.)
*   **Secondary Accent (Magic/Tech):** `#bd93f9` (Purple) or `#ff79c6` (Pink) for hover states and syntax highlighting.

## 3. Typography (Code meets Arcade)
*   **Headings (The Voice):** Use a chunky, bold Sans-serif (e.g., `Space Grotesk` or a subtle pixel/retro font) for top-level headers (e.g., "Level 20 Developer", "Inventory").
*   **Body & Data (The Terminal):** `JetBrains Mono` or `Fira Code`. All paragraph text, technical details, and metadata must use monospace to maintain the Primeagen/Neovim developer authenticity.

## 4. Components & Geometry (Neo-brutalism & Minecraft)
*   **Borders & Shadows:** ABSOLUTELY NO SOFT DROP SHADOWS. All cards, buttons, and images must have a 2px solid border (`#e6edf3` or `#f1fa8c`) and a hard, offset block shadow (e.g., `box-shadow: 4px 4px 0px #f1fa8c;`). This provides the "blocky/voxel" tactile feel.
*   **Interactive Elements:** Buttons should feel like tactile mechanical keyboard switches or arcade buttons. Pressing them should translate the element down (e.g., `translate-x-[4px] translate-y-[4px]` and remove the box-shadow to simulate pressing).
*   **Skills/Tools Section:** Do not use standard lists. Render this section as a CSS Grid of square "Inventory Slots" with pixelated or terminal-style icons inside them.

## 5. Visual Effects & Texture
*   **Backgrounds:** Apply a subtle, wavy SVG pattern (resembling topographic lines or PewDiePie waves) fixed to the background. Set opacity to 3-5% so it provides texture without overwhelming the foreground.
*   **Theming:** Rename standard sections to fit the narrative. 
    *   "Technical Capabilities" -> "Equipped Stack"
    *   "Competitive Record" -> "Player Stats" (AIR rankings and LeetCode scores go here).
    *   "Selected Projects" -> "Completed Quests"
