# Design System: Frosted Terminal (The Middle Ground)

## 1. Core Philosophy
This system bridges the gap between an ultra-minimalist terminal and an expressive developer playground. It relies on breathable layouts, semi-transparent frosted containers to reveal background textures, and highly tactile, animated interaction states. It is not corporate; it is a personalized, high-performance workspace.

## 2. Color Architecture
*   **Base Environment:** `#1c2128` (Deep Slate).
*   **Surface Containers (Frosted):** `rgba(28, 33, 40, 0.6)` paired with `backdrop-filter: blur(8px)`. This is mandatory so the background pattern remains subtly visible beneath the content.
*   **Primary Text:** `#e6edf3` (High-contrast light gray for body).
*   **Primary Accent (Golden Eclipse):** `#f1fa8c` (Used for primary interactive elements, active states, and tactical highlights).
*   **Secondary Accents:** `#bd93f9` (Purple) or `#8be9fd` (Cyan) strictly for syntax highlighting in text.

## 3. Typography (The Hybrid Split)
*   **Headings & Accents:** `Google Sans Code` (or `JetBrains Mono`). Use this for all section headers (e.g., "Quest Log"), navigation links, and technical metadata.
*   **Body Copy:** `Inter` (or `Helvetica Neue`). Use this clean sans-serif for all project descriptions, paragraphs, and standard text to maintain high legibility and a clean vibe.

## 4. Components & Geometry
*   **Navbar:** A floating, borderless pill. No macOS window controls. Just clean, monospace text links.
*   **Borders:** Remove the heavy, high-contrast borders. Use extremely subtle `1px solid rgba(255, 255, 255, 0.05)` strictly to define container edges where the background blur isn't enough.
*   **Project Details:** Must be highly readable. Use generous M3 mathematical padding (e.g., 24px, 48px). Do not over-style the text; let the typography do the work.

## 5. Interaction & Animation (The "Sick" Buttons)
*   **Tactile Feedback:** All primary buttons and interactive project cards must have a tactile translation animation. On hover or click, the element should visually depress (e.g., `translate-y-[2px]`) and adjust its scale slightly to mimic a physical mechanical keyboard switch. 
*   **Shadows:** No heavy drop shadows. Keep elements flat or use a very tight, solid offset border that disappears on click to enhance the tactile feel.

## 6. Visual Effects & Texture
*   **Background Pattern:** Apply a wavy/topographic SVG pattern fixed to the `<body>` background. It must be continuous and visible through the negative space and the frosted containers. Set its opacity low enough that it acts as a vibe, not a distraction.
*   **Section Naming:**
    *   Projects section is named "Quest Log".
    *   Education/Timeline is simplified and stripped of heavy RPG styling.
