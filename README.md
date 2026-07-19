# Creative Bakerlab

## Brief Project Description

Creative Bakerlab is a responsive landing page for a bakery brand, showcasing its product range (cakes, cookies, donuts), a short "About us" section with key stats, and contact information. The project was built to practice modern responsive layout, semantic HTML, BEM methodology, and CSS-only interactivity without relying on JavaScript for UI behavior.

## Technologies Used

- HTML5 (semantic markup)
- CSS3
- SCSS / Sass
- BEM methodology
- Google Fonts (Inter)
- Vite
- Stylelint
- Prettier

## Features

- Responsive mobile-first layout (mobile 320px → tablet 640px → desktop 1024px → design 1440px)
- CSS Grid layout system (`page-grid` mixin) across breakpoints
- CSS-only mobile menu using `:target` and `:has()` — no JavaScript
- Body scroll lock while the menu is open, controlled entirely via `:has()`
- Smooth scroll navigation via in-page anchor links
- `prefers-reduced-motion` support via CSS
- Touch-friendly interactions guarded with `@media (hover: hover)`
- Animated "order" arrow icon on product card hover
- Facebook / Instagram / Twitter social links via SVG sprite (`<use>`)
- Semantic HTML5 (`<header>`, `<main>`, `<footer>`, `<article>`, `<nav>`, `<aside>`, `<dl>/<dt>/<dd>`)
- Accessibility basics: `aria-label` on icon-only links, `aria-hidden` on decorative icons, descriptive `alt` text on all images
- Lazy-loaded product images (`loading="lazy"`)
- `scrollbar-gutter: stable` to prevent layout shift on scroll
- Modular SCSS architecture (`blocks/`, `utils/`)

## Preview

- [DEMO LINK](https://Alex3777-prog.github.io/layout_creativeBakery)

## Design Reference

- [Figma design](https://www.figma.com/design/dY3izAm0Vspsmra4lQWQIP/Bakerlab_FE-students?node-id=11342-1117&p=f&t=nP3iAuP271igx6Uz-0)


