# Hybrid Design System: Precision Terminal

## 1. Core Philosophy
This design system synthesizes the technical atmosphere of a terminal workspace (Odysseus) with the objective readability of Swiss Design and the accessible, interactive component structures of Material 3 Expressive.

## 2. Color Architecture (M3 Tonal Mapping on Slate)
The base is a deep, desaturated slate. Accents are high-contrast pastels mapped to M3 semantic roles.

*   **Background (Surface):** `#1c2128` (Deep Slate)
*   **Surface Container (Cards):** `#22272e` (Elevated Slate)
*   **Surface Container High (Code/Terminal blocks):** `#181b21`
*   **Primary Text (On-Surface):** `#e6edf3` (High-contrast light gray for M3 accessibility)
*   **Secondary Text (On-Surface Variant):** `#8b949e` (Muted gray)
*   **Primary Accent (Golden Eclipse):** `#f1fa8c` (Used for primary M3 pill buttons, active states, and critical highlights)
*   **Secondary Accent (Odysseus Cyan):** `#8be9fd` (Used for text links, M3 secondary chips, and terminal prompts `>_`)
*   **Tertiary Accent (Odysseus Coral):** `#ff79c6` (Used sparingly for hover effects or warning states)

## 3. Typography (Swiss + Terminal Hybrid)
Adhere to Swiss typography principles: flush-left alignment, ragged right, and strict mathematical scaling.

*   **Primary Font (Headings & Body):** `Inter` or `Helvetica Neue`. Proportional, highly legible, clean.
*   **Secondary Font (Terminal & Code):** `Google Sans Code` or `Cascadia Code`. 
*   **Application Rule:** Use the Sans-Serif for 90% of the UI (all body paragraphs, project descriptions, navigation). Reserve the Monospace exclusively for top-level hero headings, code blocks, technical metadata (e.g., repository names, commit hashes), and button labels.

## 4. Layout & Grid (Swiss Foundation)
*   **Grid System:** Asymmetric 12-column CSS grid.
*   **Spacing:** Use M3 mathematical spacing tokens (8px, 16px, 24px, 48px, 96px). Embrace negative space heavily.
*   **Alignment:** Strict flush-left alignment for all textual content. Never center-align paragraphs. 

## 5. Components (M3 Expressive)
*   **Buttons:** Fully rounded (pill-shaped). Flat background using the "Golden Eclipse" yellow for primary actions (text inside must be high contrast `#1c2128`).
*   **Cards (Projects):** Sharp corners (0px to 4px border radius to maintain the technical terminal feel) with M3 surface mapping. No heavy drop shadows; use a 1px solid border (`rgba(255, 255, 255, 0.1)`) to define boundaries.
*   **Tech Stack Chips:** Small, pill-shaped tags for listing technologies (PostgreSQL, Spring Boot, Linux, etc.). These should use the Surface Container color with Cyan or Coral text.

## 6. Visual Texture
*   **Background Pattern:** Apply a very faint, low-opacity dot grid (`rgba(255,255,255,0.03)`) across the main `#1c2128` background to simulate a technical workspace. Ensure it does not interfere with text legibility.
