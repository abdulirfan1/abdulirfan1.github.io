# Portfolio Website — Implementation Plan

## Tech Stack

- **HTML5** — semantic markup, single `index.html`
- **CSS3** — custom properties, flexbox/grid, media queries in `styles.css`
- **Vanilla JS** — interactions, scroll behavior in `script.js`
- **No frameworks, no build tools, no dependencies**

---

## File Structure

```
Portfolio/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── icons/        # skill icons, social SVGs
    └── projects/     # project screenshots or thumbnails
```

---

## Implementation Order

### Step 1 — HTML Skeleton
- Set up `index.html` with proper `<head>` (meta, viewport, title, CSS link)
- Add all five section shells: `#hero`, `#about`, `#skills`, `#projects`, `#contact`
- Add semantic nav with anchor links

### Step 2 — CSS Foundation
- CSS custom properties for color palette (dark theme), typography, spacing
- CSS reset / base styles
- Layout scaffolding (full-page sections, container widths)

### Step 3 — Hero Section
- Name, title, short tagline
- CTA buttons (View Work, Contact)
- Optional: subtle background effect (CSS-only)

### Step 4 — About Section
- Short bio paragraph (CS student at UNCC, software developer)
- Optional: photo placeholder in `/assets`

### Step 5 — Skills Section
- Grid of skill tags or icon+label cards
- Languages, frameworks, tools

### Step 6 — Projects Section
- Card-based layout (title, description, tech tags, links)
- Links to GitHub / live demo
- Project thumbnails from `/assets/projects/`

### Step 7 — Contact Section
- Email link, GitHub, LinkedIn
- Optional: simple contact form (no backend — mailto or form service)

### Step 8 — Navigation & JS Interactions
- Sticky/fixed nav with active-link highlight on scroll
- Smooth scroll to sections
- Mobile hamburger menu toggle

### Step 9 — Responsive Polish
- Mobile breakpoints for all sections
- Test at 375px, 768px, 1280px
- Ensure nav collapses correctly on small screens

### Step 10 — Final Touches
- Favicon
- Meta description and Open Graph tags
- Accessibility pass (alt text, focus styles, ARIA where needed)
- Performance check (no unused CSS, images sized correctly)
