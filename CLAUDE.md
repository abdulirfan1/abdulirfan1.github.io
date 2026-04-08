# CLAUDE.md

## Project

Personal portfolio for Abdulrehman Irfan — CS student at UNC Charlotte (graduating May 2026), software developer and IT professional.

## Tech Stack

Vanilla HTML, CSS, JavaScript. No React, no build tools, no package.json. Preview by opening `index.html` directly in a browser or with any static file server (e.g. `python3 -m http.server`).

## Design

Dark-preferred, developer aesthetic. Not corporate. Mobile responsive. The hero section has two interactive flourishes: an animated F1 car (SVG, top-down view, roams freely) and a mouse-following radial glow. Both are intentional and should be preserved unless explicitly changed.

## Code Architecture

All JavaScript lives in `script.js` as independent IIFEs — one per feature. Each IIFE is self-contained with no shared globals. Current modules:
- **Terminal greeting** — typewriter that cycles phrases across languages/runtimes
- **F1 car** — physics-based animation using `requestAnimationFrame`; edge-avoidance steering toward centre
- **Hero glow** — CSS custom properties `--glow-x` / `--glow-y` updated on `mousemove`
- **Nav** — hamburger toggle + scroll-spy active link highlighting
- **Contact dropdown** — copy-to-clipboard for email/phone, with a toast notification

CSS uses custom properties (defined on `:root`) for colors and spacing. No CSS preprocessor.

`index.html` is a single-page document with anchor-linked sections: `#hero`, `#about`, `#skills`, `#projects`, `#contact`.

## Content Rules

- Keep all contact info (email, phone, LinkedIn) consistent between the hero dropdown and the contact section.
- Project cards are static HTML in `index.html` — numbered 01, 02, 03. Add new projects by duplicating an `<article class="project-card">` block.
- When adding a new JS feature, wrap it in its own IIFE and append it to `script.js`.
