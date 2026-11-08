# MockupWall

Marketing site for **Wallapp – Gallery Wall Designer** (iOS) — an AI wall-art
mockup generator that places artwork, prints, and posters into realistic
interior scenes at true scale.

- **Live domain:** https://www.mockupwall.com
- **App Store:** https://apps.apple.com/us/app/wallapp-gallery-wall-designer/id6800613900
- **Stack:** Next.js 15 (App Router, `output: 'export'` static site)

## Develop

```bash
npm install
npm run dev      # local dev
npm run build    # static export to ./out
```

## Structure

- `src/app/` — routes (homepage, `/mockups`, `/for`, `/tools`, `/alternatives`, `/blog`, legal)
- `src/data/programmatic.ts` — all programmatic SEO pages (data-driven)
- `src/data/blog.ts` — blog posts (data-driven)
- `src/components/` — homepage sections + shared UI
- `public/llms.txt` — AI-crawler content directory (GEO)
- `app.md` — product-truth reference for all site copy (anti-hallucination guard)

## Deploy

Static export; deploy `./out` to Vercel (or any static host) from `main`, then
point the `mockupwall.com` domain at it.
