# WoodShop

Interactive website concept for a custom joinery and door-manufacturing business.

## Current build

- Home page with GSAP / ScrollTrigger 3D door assembly sequence
- Pointer-reactive workshop media
- Custom nail cursor on desktop
- Shop catalogue with filters, hover details and product-detail modal
- About and Contact routes scaffolded for the next phase
- Responsive and reduced-motion fallbacks

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The current catalogue uses free-to-use Unsplash imagery as development placeholders. Replace these URLs with final WoodShop product photography when the catalogue photography is ready.


## Performance notes

- Client-side route changes reset scroll position instantly to avoid blank views after the pinned GSAP hero.
- The pinned ScrollTrigger is explicitly destroyed when leaving Home.
- Workshop photography is delivered as compressed WebP and non-critical in-page images are lazy-loaded.
- A GitHub Actions production build check reports output asset sizes after pushes to `main`.
