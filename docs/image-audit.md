# Image audit — October 19, 2026

Local checkout verification for the client-review release. The results below describe local checks; deployment status and live asset delivery are verified separately after the Git push.

## Results

- Checked 17 rendered public pages: homepage, all 12 service pages, About, Contact, Privacy, and the rebate guide.
- Checked 30 image responses covering 19 unique assets, including responsive optimizer requests, the SVG logo, and generated social card. All returned image content successfully.
- All 17 referenced raster assets (11 page photos and six social crops) have embedded XMP titles and descriptions. Every rendered image has descriptive alt text; social previews include alt text.
- ImageObject titles, descriptions, and dimensions match the referenced files wherever photo schema is present. Added missing photo schema and social images to the heating hub, furnace installation, and furnace maintenance pages.
- Five homepage image paths were missing locally. Rebuilt the expected web files from the equivalent supplied copies still in public/images; the original copies remain untouched.
- The five rebuilt homepage files total 626,624 bytes versus 1,000,284 bytes for their supplied counterparts: 37.4% smaller.
- Homepage descriptions now describe visible equipment rather than implying diagnostic events or confirmed operating conditions.
- Kept already compressed service photos; avoided unnecessary lossy recompression. The original supplied files and unused assets do not load unless referenced.
- PhotoPlaceholder now uses Next.js preload for its priority hero image and tighter responsive sizes matching the single-column breakpoint. Other photos retain native lazy loading. Vector diagrams and the logo remain SVG.
- Browser checks: all homepage photos loaded on mobile at 390px without horizontal overflow; desktop hero loaded with one image preload.
- Validation: lint, TypeScript, 22 tests, production build, and git diff whitespace checks passed.

## Referenced raster assets

| Asset | Dimensions | File size |
| --- | --- | --- |
| `/images/ac-repair-outdoor-condenser-social.jpg` | 1200 × 630 | 118.5 KB |
| `/images/ac-repair-outdoor-condenser.webp` | 1200 × 900 | 144.4 KB |
| `/images/ac-service.webp` | 1200 × 900 | 148.3 KB |
| `/images/cold-climate-heat-pump-installation.webp` | 1280 × 960 | 143.8 KB |
| `/images/cold-climate-heat-pump-social.jpg` | 1200 × 630 | 120.1 KB |
| `/images/cold-climate-mitsubishi-outdoor-heat-pump-social.jpg` | 1200 × 630 | 191.4 KB |
| `/images/cold-climate-mitsubishi-outdoor-heat-pump.webp` | 1280 × 960 | 182.7 KB |
| `/images/cooling-service-great-falls-social.jpg` | 1200 × 630 | 125.3 KB |
| `/images/cooling-service-great-falls.webp` | 1280 × 960 | 136.9 KB |
| `/images/emergency-furnace-repair-great-falls-social.jpg` | 1200 × 630 | 67.8 KB |
| `/images/emergency-furnace-repair-great-falls.webp` | 1600 × 1200 | 74.9 KB |
| `/images/furnace-diagnostic.webp` | 960 × 1200 | 67.1 KB |
| `/images/heating-furnace-installation-social.jpg` | 1200 × 630 | 79.6 KB |
| `/images/heating-furnace-installation.webp` | 1600 × 1200 | 85.9 KB |
| `/images/high-plains-montana.webp` | 1400 × 788 | 169.2 KB |
| `/images/home-exterior.webp` | 1600 × 1200 | 189.6 KB |
| `/images/winter-heat-pump.webp` | 1280 × 960 | 52.4 KB |

## Scope and launch check

File metadata complements visible alt text and page/social metadata. No invented capture location, GPS coordinates, photographer credit, installation results, or image ownership claims were added. Local load checks do not establish production Core Web Vitals; check mobile performance on the deployed site before public launch. Form delivery remains a separate launch task.
