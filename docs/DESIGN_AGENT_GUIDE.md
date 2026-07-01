# Design Agent Guide: "Frosted Terminal"

This document serves as the absolute design specification for the **Rut Koticha Developer Portfolio**. Any AI design agent, frontend engineer, or styling pipeline modifying or extending this codebase must adhere strictly to these principles to maintain aesthetic and functional consistency.

---

## 1. Design System Philosophy: "Frosted Terminal"

The **Frosted Terminal** design language is a hybrid aesthetic bridging the gap between a **hacker terminal command-line** and a **premium, glassmorphic web dashboard**. It is not a sterile corporate theme; it is a personalized, high-performance workspace that feels responsive and alive.

### Core Pillars
1. **Breathable Layouts:** Generous spacing, low visual density, and strong typography hierarchy.
2. **Layered Depth:** Semi-transparent frosted card elements layered over an ambient, topographic background pattern.
3. **Tactile Mechanics:** Physics-based animations where elements act like mechanical keyboard key switches when clicked or hovered.
4. **Hacker-Elite Accents:** Monospace labels, sequence indexes (`[01_]`), blinking terminal cursors, and syntax-highlighted badges.

---

## 2. Color Palette & Token Reference

The system implements the **Material 3 (M3) Slate Tonal Mapping** customized for a developer workspace.

### Core Variables (`src/app/globals.css`)

| Category | CSS Variable | Hex / RGBA Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Base Environment** | `--bg-surface` | `#1c2128` | Deep Slate gray. Main webpage body background. |
| **Frosted Cards** | `--bg-frosted` | `rgba(28, 33, 40, 0.6)` | Semi-transparent card background. Always paired with blur. |
| **High Contrast Cards** | `--bg-frosted-high` | `rgba(24, 27, 33, 0.85)` | High-contrast backgrounds for nesting inside cards. |
| **Primary Text** | `--text-on-surface` | `#e6edf3` | High-contrast light gray. Body text, titles, main labels. |
| **Secondary Text** | `--text-on-surface-variant` | `#8b949e` | Muted slate gray. Descriptions, metadata, secondary text. |
| **Primary Accent** | `--accent-golden` | `#f1fa8c` | "Golden Eclipse". Interactive focus, links, main active highlights. |
| **Syntax Cyan** | `--accent-cyan` | `#8be9fd` | Accent badges, category highlights, code tokens. |
| **Syntax Purple** | `--accent-purple` | `#bd93f9` | Accent badges, secondary status cues, scans. |
| **Subtle Borders** | `--border-subtle` | `rgba(255, 255, 255, 0.05)` | Hairline boundaries. Defines edges of frosted cards. |
| **Active Borders** | `--border-subtle-active` | `rgba(241, 250, 140, 0.25)` | Border glow highlight using Golden Eclipse accent. |

> [!IMPORTANT]
> When adding new pages or layouts, do **not** use raw Tailwind color utilities (e.g., `bg-zinc-800` or `text-yellow-200`). Always reference the semantic classes mapped in the Tailwind v4 theme: `bg-surface`, `bg-frosted`, `text-on-surface`, `text-accent-golden`, `text-accent-cyan`, and `border-border-subtle`.

---

## 3. Typography: The Hybrid Split

Legibility and hacker style are maintained via a strict separation of typographic weights and families.

*   **Body Copy & Main Headings (Sans-Serif):** Uses **Inter** (`var(--font-sans)`). Applied to titles (`h1`, `h2`, `h3`), descriptions, body copy, and testimonials to keep the text clean, readable, and highly accessible.
*   **Labels, Indexes, & Metadata (Monospace):** Uses **JetBrains Mono** (`var(--font-mono)`). Applied to:
    *   Section headers (e.g., `[01_] Technical_Capabilities`)
    *   Category badges and tech chips
    *   Table metrics and score keys
    *   Interactive links and call-to-actions (CTAs)
    *   Hacker command-line indicators (`> RK_`)

### Font Classes Reference
*   `font-sans`: Apply to body text, paragraphs, headers.
*   `font-mono`: Apply to metrics, navigation links, technical lists, code snippets, and prefix numbers.

---

## 4. Visual Layout & Structure

The interface relies on clear visual division and consistent margins.

### Spacing & Grid Specs
*   **Vertical Margins:** Main sections are padded with `py-20` (80px) and separated by a subtle bottom boundary (`border-b border-border-subtle`).
*   **Max Containment:** Sections are capped at `max-w-7xl` with responsive padding (`px-6 sm:px-8 lg:px-12`).
*   **Header Alignments:** Section headers are left-aligned, containing a monospace uppercase label, followed by a brief description paragraph:
    ```tsx
    <div className="max-w-2xl text-left mb-16">
      <h2 className="font-mono text-lg uppercase tracking-wider font-bold text-accent-golden">
        [XX_] Section_Name
      </h2>
      <p className="mt-4 font-sans text-sm text-on-surface-variant leading-relaxed">
        Section description...
      </p>
    </div>
    ```

### Ambient Texture: Topographic Wave
*   The entire site body is covered by `.wavy-bg`. It applies a fixed, ambient SVG topographic line pattern with extremely low opacity (`stroke="rgba(255,255,255,0.015)"`).
*   Containers must remain semi-transparent (`bg-frosted` + `backdrop-blur-md`) so the topographic waves run continuously under cards.

---

## 5. Interaction Mechanics & Tactile Physics

The website must feel like a physical desk with premium key switches. To achieve this, interactive components utilize a CSS-based translation physics model.

### 1. Tactile Buttons (`.tactile-btn`)
*   **Default State:** Card has a physical height offset using a colored bottom border/shadow: `box-shadow: 0 4px 0 0 var(--border-subtle-active)`.
*   **Hover State:** Element shifts down slightly: `transform: translateY(1px) scale(0.995)` and the shadow compresses: `box-shadow: 0 3px 0 0 var(--border-subtle-active)`.
*   **Active (Click) State:** Element fully depresses: `transform: translateY(2px) scale(0.99)` and the shadow collapses to `transparent`.

### 2. Tactile Cards (`.tactile-card`)
*   Same physics applied to hoverable grid containers (e.g., project detail links or interactive timeline nodes), giving them a physical pressing sensation when clicked.

### 3. Accessible Focus Rings (`.focus-ring`)
*   Keyboard navigation is highlighted using an offset, clean outline in the primary golden color: `outline: 2px solid var(--accent-golden); outline-offset: 2px;`.

---

## 6. Key Components Breakdown

### A. The Floating Frosted Navbar
*   **Position:** Fixed at the top, centered horizontally, and floating: `fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl`.
*   **Aesthetic:** Fully rounded pill (`rounded-full`) made from a high-opacity frosted container (`bg-surface/95 backdrop-blur-md border border-border-subtle`).
*   **Branding:** Left side features a logo mimicking a command prompt: `> RK_` where the cursor `_` has a pulse animation (`animate-pulse`).
*   **Links:** Monospace uppercase tracking-wide anchors that highlight to Golden Eclipse (`#f1fa8c`) on hover.

### B. Interactive Badges (Chips)
Used to denote languages, frameworks, and tools.
*   **Base:** `font-mono text-[9px] font-semibold uppercase tracking-wider rounded-sm px-2 py-0.5 border border-border-subtle bg-frosted-high`.
*   **Category Colors:** Cyan (`text-accent-cyan`) for tech skills and ongoing project labels; Purple (`text-accent-purple`) for verification badges; Gold (`text-accent-golden`) for achievements.

### C. Education Timeline
*   Vertical hairline indicator on the left (`border-l border-border-subtle`).
*   Chronological nodes are aligned using absolute dot overlays.
*   The **Active/Current** educational milestone features a glowing outline:
    `border-accent-golden bg-accent-golden ring-4 ring-accent-golden/25`.

### D. Production Endorsement Block (`ClinixFeedback.tsx`)
*   Used to showcase real-world verification.
*   Combines a blockquote layout highlighted with a thick left border (`border-l-2 border-accent-golden`) with a certificate scanning portal.
*   **Interactive Lightbox:** Clicking the scanned document opens a full-screen blurred viewport (`backdrop-blur-sm bg-surface/95`) with Escape key listeners and a neat exit control `[ESC to Close]`.

---

## 7. Guidelines for Design Agents

When creating a new component, dashboard view, or sub-page, run this checklist:

*   [ ] **Theme Integrity:** Does the container use `--bg-frosted` with `backdrop-filter: blur(8px)` and a `1px` border of `rgba(255, 255, 255, 0.05)`?
*   [ ] **Typography Split:** Are labels and keys in `font-mono` and descriptive paragraphs/headings in `font-sans`?
*   [ ] **Action Physics:** Do interactive blocks use `.tactile-btn` or `.tactile-card` transitions to simulate depressing a switch?
*   [ ] **Index Cues:** Are sections clearly labeled with sequence identifiers (e.g. `[01_]`, `[02_]`) in monospace?
*   [ ] **Color Constraint:** Are you using colors outside of Slate Gray, Golden Eclipse, Cyan, and Purple? If so, revert and map them back to the core CSS variables.
