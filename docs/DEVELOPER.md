# Developer Documentation

This document serves as a contextual guide for developers and AI agents working on this portfolio website.

---

## 🚀 Tech Stack & Core Libraries

- **Framework:** Next.js (App Router, Static HTML Export ready)
- **Styling:** Tailwind CSS (v4) with CSS Variables
- **Typeface:** Montserrat (Headings) & Inter (Body text) via `next/font/google`
- **Language:** TypeScript

---

## 📁 Project Directory Structure

```text
RutKoticha/
├── public/                 # Static assets (favicons, resume.pdf, images)
├── src/
│   ├── app/                # Next.js App Router root
│   │   ├── layout.tsx      # Root HTML structure, loads Google Fonts & SEO metadata
│   │   ├── globals.css     # Global CSS resets, scrollbars, and Tailwind @theme settings
│   │   ├── page.tsx        # Homepage layout assembling all core sections
│   │   └── projects/       # Static detail templates for individual projects
│   │       ├── clinix/
│   │       │   └── page.tsx
│   │       ├── sourcenode/
│   │       │   └── page.tsx
│   │       └── markipedia/
│   │           └── page.tsx
│   ├── components/         # Modular layout sections
│   │   ├── Navbar.tsx      # Navigation header (Swiss style RK logo, sticky, responsive)
│   │   ├── Hero.tsx        # Title banner, tags, CTA links
│   │   ├── Skills.tsx      # Grid of categorized skill badges
│   │   ├── Achievements.tsx# CP statistics & competitive exams scorecard
│   │   ├── Education.tsx   # Vertical timeline with milestone dots
│   │   └── Contact.tsx     # System mailto/tel action triggers and social links
│   └── data/
│       └── info.ts         # Central static data file (parsed from myinfo.md)
├── DEVELOPER.md            # Developer & agent context (This file)
├── myinfo.md               # User information file (source of truth)
├── package.json            # Node project configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🎨 Design System & Customization

### Typography
- **Headings (`font-display`):** Montserrat
- **Body Text (`font-sans`):** Inter
- Custom classes are mapped directly in `src/app/globals.css`.

### Colors & CSS Variables
All color tokens are saved in CSS variables in `src/app/globals.css` inside the `:root` rule. To change the theme, edit the following variables:

```css
:root {
  --bg-primary: #ffffff;      /* Main page background */
  --bg-secondary: #f8fafc;    /* Section background alt */
  --text-primary: #0f172a;    /* Bold text and body */
  --text-secondary: #475569;  /* Muted descriptions */
  --accent: #0284c7;          /* Sky-600 (calm branding color) */
  --accent-hover: #0369a1;    /* Sky-700 (button hover states) */
  --accent-light: #e0f2fe;    /* Sky-100 (subtle badges/tags background) */
  --border: #e2e8f0;          /* Border and lines */
}
```

These variables map directly to custom Tailwind v4 theme utility classes (e.g., `bg-bg-main`, `text-txt-main`, `text-brand`, `border-border-line`).

---

## ⚙️ How to Update Content

1. **Profile Data:** All profile content (email, phone, skills, achievements, timeline items) is housed in [src/data/info.ts](file:///mnt/personal/Github/RutKoticha/src/data/info.ts). This file acts as the bridge parsed from [myinfo.md](file:///mnt/personal/Github/RutKoticha/myinfo.md).
2. **Project Case Studies:** Detailed project overviews, technical implementation charts, and screenshots can be configured within each sub-page in `src/app/projects/[project_id]/page.tsx`.

---

## 🔨 Development Commands

- **Local Development Server:** `npm run dev`
- **Production Compilation:** `npm run build`
- **Eslint Checks:** `npm run lint`
