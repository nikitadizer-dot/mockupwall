# Content Pipeline — mockupwall.com

Working document for the automated article run for **MockupWall** (the site for
the Wallapp – Gallery Wall Designer iOS app). Modeled on the mockuptool.app
pipeline. Every article passes each gate or gets rejected. The final gate is
always a human: articles ship as a PR to `main` that the owner merges (Vercel
auto-deploys `main`).

## Cadence

- Runs **Mon/Wed/Fri**. Each run = **1 deep article + 1 optimization action**
  (CTR meta rewrite, internal linking/consolidation, or improving an existing
  page). Never ship thin filler.
- Develop on branch `claude/mockupwall-content`, open ONE PR per run to `main`.
  Owner merges — never self-merge.
- Keep **≥6 queued** backlog items at all times; refill with a research session
  before it drops below that.

## GSC note (important — new site)

The site launched 2026-11-08 and has little/no Search Console history yet, and
the Cogny GSC integration is currently scoped to mockuptool.app, not
mockupwall.com. Until the owner adds `mockupwall.com` to Google Search Console
and data accrues (~3–6 weeks):

- Select topics from the **research backlog** below (demand-ranked by keyword
  research, not live GSC).
- Skip the "read GSC first" step; note in each PR that selection was
  research-based.

Once mockupwall.com has GSC data, switch to GSC-informed selection exactly like
mockuptool: read live Search Console first, pick queued topics that best support
queries/pages already gaining impressions or sitting on the edge of page 1, and
use pos 6–20 low-CTR pages for the optimization action.

## Gates (run in order)

1. **Backlog gate** — the topic MUST come from the backlog below (`queued`). If
   nothing is queued, STOP and ask the owner for a research session. Never
   invent a nearby topic to keep publishing.
2. **Intent gate** — classify intent (how-to / comparison / definition / list /
   buying guide) and match the article format. The short answer must resolve it.
3. **Product-truth gate** — every claim about the app is checked against
   `app.md`, including "Features that DO NOT exist" (iOS-only; no printing/
   fulfillment; no Etsy/Shopify integration; no large review count; scale comes
   from entered dimensions; no watermark claims). When unsure, cut the claim.
4. **Structure gate** — required: keyword-matched title · shortAnswer (2–3
   sentences, top of page, snippet/GEO-ready) · sectioned body · 3–4 FAQs with
   FAQPage schema · internal links to relevant /mockups, /for, /tools,
   /alternatives pages · product section · CTA · ≥1 interactive block
   (`widget`: photo-checklist / before-after). Enforced by `src/data/blog.ts`.
5. **Anti-slop pass 1** — remove hype words (game-changing, revolutionary,
   unleash, elevate), corporate verbs (leverage, utilize, streamline), fake hook
   questions, empty marketing phrases, unsupported claims, invented statistics.
6. **Anti-slop pass 2** — check repetitive sentence openings, missing
   contractions, weak transitions, paragraphs over ~90 words, em-dash overuse,
   identically-shaped lists.
7. **Score gate** — score 1–10 on: reads like a person wrote it; every product
   claim true per app.md; the short answer alone satisfies the searcher; says
   something the top results don't. Below 8 on the first two → back to gate 4.
8. **Ship** — unique Nano Banana hero (1200×630, TEXTTOIAMGE, poll record-info
   until successFlag=1, check faces/quality; same workflow as the mockuptool
   pipeline; API key used in memory, NEVER committed) → add BlogPost to
   `src/data/blog.ts` → update this file (published + date) and
   `public/llms.txt` → `npm run build` passes → PR to `main`.

## Research backlog (demand-ranked; refined with GSC once available)

High-intent wall-art / art-selling keywords. Burns ~3/week — keep ≥6 queued.

| Keyword / topic | Intent | Status |
|---|---|---|
| how to make wall art mockups without Photoshop (supports /mockups/wall-art/) | how-to | published (2026-11-08) |
| how to sell art prints on Etsy — photos that convert (supports /for/etsy-art-sellers/) | how-to | published (2026-11-08) |
| gallery wall layout ideas and how to preview them (supports /mockups/gallery-wall/) | list/how-to | published (2026-11-08) |
| how to photograph your art for prints and mockups (supports /for/photographers/) | how-to | published (2026-11-08) |
| canvas mockup: how to show your art as a canvas (supports /mockups/canvas/) | how-to | published (2026-11-09) |
| poster mockups — show posters in real rooms (supports /mockups/poster/) | how-to | queued |
| how to sell art prints online — a beginner's guide (broad head term; supports /for/artists/) | guide | queued |
| best art mockup generators 2026 (list/comparison; captures "best X" demand) | comparison | queued |
| what size should wall art be (buyer intent; supports true-scale angle) | definition | published (2026-11-08) |
| how to price art prints (seller intent; supports /for/artists/) | how-to | queued |
| framed vs unframed prints — what sells better (comparison; supports /mockups/framed-print/) | comparison | queued |
| print-on-demand wall art — how to stand out (supports /for/print-on-demand/) | how-to | queued |
| how to make an Etsy listing for art prints (step-by-step; supports /for/etsy-art-sellers/) | how-to | queued |
| room mockups for art — see art on your wall (supports /tools/room-visualizer/) | how-to | queued |
| how to display art on social media / Instagram (supports /tools/art-video-generator/) | how-to | queued |
| ArtPlacer vs Placeit vs app alternatives (comparison; supports /alternatives/) | comparison | queued |
| how to photograph a painting (detail; photography cluster) | how-to | queued |
| mat and frame guide — choosing framing for prints (supports /mockups/framed-print/) | guide | queued |
| how interior designers present art to clients (supports /for/interior-designers/) | how-to | queued |
| selling fine-art photography prints (supports /for/photographers/ + /mockups/photography/) | how-to | queued |
| gallery wall spacing and hanging guide (supports /mockups/gallery-wall/) | how-to | queued |
| how to make product photos for art without a studio (supports /mockups/art-print/) | how-to | queued |

## Notes

- One URL per query: before adding a topic, check that an existing page/post
  isn't already the target for it.
- Every new post lists its supporting /mockups, /for, or /tools page in
  `related`, so those pages reverse-link it (how new posts get crawled).
- Off-page: backlinks remain the owner's manual lever (directory submissions,
  art communities, Pinterest). ASO for the Wallapp listing is the main install
  lever and is separate from this content pipeline.
