# Dashboard Landing Page

A production-quality, Notion-inspired static landing page for a business dashboard product.

## Tech Stack

- **HTML5** — Semantic markup with ARIA labels
- **CSS3** — Custom properties, grid, flexbox, clamp, scroll animations
- **Vanilla JS** — IntersectionObserver, scroll events, mobile menu
- **Google Fonts** — Inter (400 / 500 / 600 / 700)

## Features

- 8 polished sections: Navbar, Hero, Logos, Features, How it works, Pricing, CTA Banner, Footer
- Scroll-triggered fade-in animations with staggered delays
- Sticky navbar with border fade-in on scroll
- Mobile-responsive with hamburger menu (375px – 1440px+)
- Rich dashboard mockup interiors (no placeholder text)
- SVG checkmarks in pricing cards
- Zero external dependencies beyond Google Fonts

## Getting Started

Simply open `index.html` in a browser. No build step required.

```bash
# Or serve locally
npx serve .
```

## File Structure

```
├── index.html    # Markup & page structure
├── styles.css    # Design system & component styles
├── script.js     # Navbar, animations & mobile menu
├── .gitignore
└── README.md
```

## License

MIT
