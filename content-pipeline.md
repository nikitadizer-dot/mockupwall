# Content Pipeline

Working document for the weekly automated article run. Modeled on a gated
AI-content pipeline: every article passes each gate or gets rejected.
The final gate is always a human: articles ship as a PR that the owner merges.

## Gates (run in order)

0. **Indexing gate** — before writing anything, URL-inspect the posts shipped in
   the last 3 weeks (GSC URL Inspection). If 2+ of them are still "Discovered –
   currently not indexed" or "URL is unknown to Google", SKIP the article: spend the
   run on the optimization action plus internal links to those posts, and ask the
   owner to "Request indexing" for them in GSC (the API can't). Google
   was not keeping up with 9 posts/week (Cogny audit, 2026-09-29: 14 of 43 posts
   had zero impressions in 28 days).
1. **Backlog gate** — the article topic MUST come from the backlog below
   (status `queued`). If the backlog has no queued items, STOP and ask the
   owner for a research session. Never invent a nearby topic to keep publishing.
2. **Intent gate** — classify the keyword's intent (comparison / how-to /
   definition / buying guide / troubleshooting / list) and match the article
   format to it. The short answer must directly resolve that intent.
3. **Product truth gate** — every claim about Mockup Tool is checked against
   `app.md`, including the "Features that DO NOT exist" section. When unsure,
   the claim is cut.
4. **Structure gate** — required blocks: keyword-matched title · short answer
   (2–3 sentences, top of page) · sectioned body · FAQ (3–4 questions with
   FAQPage schema) · internal links to relevant /mockups/, /for/, /tools/,
   /alternatives/ pages · product section in context · CTA · at least one
   interactive block (`widget`: cost-calculator / photo-checklist /
   before-after, or a `video` block) placed where it serves the argument.
   The blog template enforces most of this via required fields in
   `src/data/blog.ts`.
5. **Anti-slop pass 1 (obvious patterns)** — remove: hype words (game-changing,
   revolutionary, unleash, elevate), corporate verbs (leverage, utilize,
   streamline), fake hook questions ("Ever wondered…?"), empty marketing
   phrases, unsupported claims and invented statistics.
6. **Anti-slop pass 2 (subtle signals)** — check: repetitive sentence openings,
   missing contractions, weak transitions (Moreover/Furthermore/Additionally),
   paragraphs over ~90 words, em-dash overuse (max ~2 per paragraph),
   identically-shaped lists.
7. **Score gate** — before shipping, score 1–10 on: (a) reads like a person
   wrote it, (b) every product claim is true per app.md, (c) the short answer
   alone would satisfy the searcher, (d) says something the top results don't.
   Anything below 8 on (a) or (b) goes back to gate 4.
8. **Ship** — hero image (1200×630, branded template in
   `scratchpad/render-blog-heroes.mjs` style) → add entry to
   `src/data/blog.ts` → `next build` passes → PR with preview → owner merges.

## Keyword backlog

| Keyword / topic | Intent | Status |
|---|---|---|
| polo shirt mockups: complete guide (supports /mockups/polo/ ranking #9 in GSC) | how-to | published (2026-07-20) |
| flat lay vs ghost mannequin vs on-model photos: what converts (competitor-proven theme; cite usage stats, angle: AI makes on-model affordable) | comparison | published (2026-07-21) |
| how to start a t-shirt business with just an iPhone (head query "how to start a t-shirt business" owned by Printful/Printify; our mobile-only angle) | how-to | published (2026-07-27) |
| t-shirt design ideas 2026 — and how to preview each on a real shirt (Printful "56 ideas" / Printify "50+ ideas" prove huge demand; our AI-preview angle) | list | published (2026-09-14) |
| clothing product photography without a studio (big evergreen theme; our AI workflow angle vs generic studio guides) | how-to | published (2026-08-03) |
| how to take product photos for clothing without a model | how-to | published (2026-08-07) |
| etsy product photography tips (apparel) | list | published (2026-07-31) |
| print on demand mockups that don't look like print on demand | how-to | published (2026-08-05) |
| clothing lookbook ideas for small brands | list | published (2026-09-16) |
| how many photos does an etsy listing need | definition/how-to | published (2026-09-07) |
| placeit vs canva mockups vs ai generators | comparison | published (2026-07-29) |
| shopify product photography for apparel | how-to | published (2026-09-11) |
| ai clothing mockup generator: complete guide (GSC #1 volume: "clothing mockup generator" 46 impr, "ai clothing mockup generator" pos ~10) | definition/how-to | published (2026-08-10) |
| 3d t-shirt mockups: what they are and how to make one (GSC 3D cluster pos ~8-9; supports /tools/3d-t-shirt-mockup/) | how-to | published (2026-08-12) |
| free clothing mockup generator — and how to get unique results (GSC "free" family pos ~10; reinforces /tools/free-mockup-generator/) | how-to | published (2026-08-17) |
| crop top mockups: how to make them (GSC "crop top mockup generator" 13 impr pos ~12; supports /mockups/crop-top/) | how-to | published (2026-09-04) |
| placeit alternatives for apparel 2026 (GSC "placeit alternative/sites like placeit/creatsy vs placeit"; reinforces /alternatives/placeit/) | comparison/list | published (2026-08-24) |
| etsy mockup generator (GSC "etsy mockup generator/mockup generator for etsy" pos ~50; Etsy cluster rising) | how-to | published (2026-08-19) |
| zip-up hoodie mockups (GSC "zip up hoodie mockup" 11 impr; supports /mockups/zip-up-hoodie/) | how-to | published (2026-08-21) |
| shorts mockups for your store (GSC "shorts mockup" 7 impr + "shorts mockup generator" pos 13; supports /mockups/shorts/) | how-to | published (2026-09-09) |
| how much do clothing mockups cost (GSC cost intent "what are the costs of these apps" pos 4; snippet potential) | definition | published (2026-08-26) |
| ai fashion mockup generator for designers (GSC "fashion mockup generator" pos 8; supports /for/fashion-designers/) | how-to | published (2026-08-28) |
| dress mockups: preview your design on a dress (GSC "dress mockup generator" pos 8; supports /mockups/dress/) | how-to | published (2026-08-31) |
| mockup maker vs mockup generator: what's the difference (GSC "clothing mockup maker" pos 6, "mockup creator" pos 25) | definition | published (2026-09-02) |

Competitor content landscape (research 2026-07-18): Printful/Printify own
"t-shirt design ideas" and "how to start a t-shirt business" (massive listicle
traffic); studio/AI-photo blogs (wearview, squareshot, photta) rank with
"ghost mannequin vs flat lay" comparisons carrying citable stats (57% of
retailers use ghost mannequin; on-model is the conversion gold standard but
costliest). Our recurring winning angle: on-model quality at phone-photo cost.
| tshirt mockups for etsy without photoshop | how-to | published (2026-07-07) |
| ai mockups vs photoshoot cost | comparison | published (2026-07-07) |
| how to photograph clothes flat | how-to | published (2026-07-07) |
| best clothing mockup generators 2026 | list/comparison | published (2026-07-07) |

Rules: **one deep article + one optimization action per run**, three runs a week
(Mon/Wed/Fri) = ~3 articles/week, down from ~9 on 2026-09-29 because new posts were
piling up unindexed. When the indexing gate fails, the run is optimization-only.
Raise the article count only once the gate passes for 3 consecutive weeks.
Selection is GSC-informed: each run starts by reading live Search Console data and
picks the three queued keywords and angles that best support the queries and pages
already gaining impressions or sitting on the edge of page 1 — not strictly the top
of the list. All three ship in ONE PR per run. New keywords enter this table only
from research (GSC query data, App Store autocomplete, competitor gaps) — never
mid-run.

## Cadence

- Runs Mon/Wed/Fri: indexing gate → read GSC (`npm run gsc:report`) → pick ONE queued
  item the data favors → gates 1–8 → plus one optimization action (CTR rewrite,
  linking/consolidation, or improving an existing post) → one PR → notify owner.
- Monthly: refresh backlog from fresh GSC query data before the run.
- Backlog burns ~3 items/week, so keep ≥6 queued at all times; refill with a
  research session before it drops below that.
- Every new post must list its garment/audience page in `related`: those pages
  link back automatically (Guides section), which is how new posts get crawled.
- One URL per query: before adding a topic, check GSC for an existing page already
  getting impressions on it. Placeit queries belong to
  `/blog/placeit-alternatives-for-apparel/` ("alternative(s)") and
  `/alternatives/placeit/` ("placeit vs").

## Backlog refill — 2026-09-17 (GSC-data-ranked)

Ranked by live GSC demand at poor positions (real impressions we're not yet
capturing). Top block = queries already pulling impressions but ranking off page 1.

| Keyword / topic | Intent | Status |
|---|---|---|
| sweatshirt / crewneck mockups (GSC "crewneck mockup" 25 impr pos ~47; supports /mockups/sweatshirt/) | how-to | published (2026-09-18) |
| beanie mockups: headwear on a model (GSC "beanie mockup" 12 impr pos ~48; supports /mockups/beanie/) | how-to | published (2026-09-25) |
| print-on-demand mockup generator: how it works (GSC "print on demand mockup generator" 12 impr pos ~46; supports /for/print-on-demand/) | how-to | queued |
| apparel mockup generator: complete guide (GSC "apparel mockup generator" 19 impr pos ~33; head term) | definition/how-to | published (2026-09-25) |
| tank top mockups for summer drops (GSC "tank top mockup" 15 impr pos ~18; supports /mockups/tank-top/) | how-to | published (2026-09-18) |
| oversized t-shirt mockups: getting the drape right (supports /mockups/oversized-t-shirt/) | how-to | published (2026-09-23) |
| hoodie mockups: front, back & drawstring detail (supports /mockups/hoodie/) | how-to | published (2026-09-21) |
| jacket mockups: structure & layering (supports /mockups/jacket/) | how-to | published (2026-09-23) |
| jersey mockups for teams & esports (GSC /mockups/jersey/ getting clicks pos ~16) | how-to | published (2026-09-21) |
| baseball tee (raglan) mockups (supports /mockups/baseball-tee/) | how-to | published (2026-09-28) |
| sweatpants mockups: fit and drape (supports /mockups/sweatpants/) | how-to | published (2026-09-25) |
| long sleeve mockups: how to make them (supports /mockups/longsleeve/ — 52 impr pos ~17) | how-to | published (2026-11-04) |
| 360°/rotating clothing mockups explained (GSC /tools/3d-clothing-mockup/ pos ~6; supports it) | definition | published (2026-09-21) |
| ai t-shirt design tool: from idea to mockup (supports /tools/ai-t-shirt-designer/ pos ~8; highest-demand category) | how-to | published (2026-11-06) |
| clothing design app: brush & text tools on a garment (supports /tools/clothing-design-app/) | how-to | published (2026-09-28) |
| free apparel mockup generator (GSC "free apparel mockup generator" 12 impr pos ~12; reinforces /tools/free-mockup-generator/) | how-to | queued |
| best free clothing mockup generator (GSC "best free clothing mockup generator" pos ~8; reinforces the free cluster) | list | published (2026-09-18) |
| smartmockups alternatives for apparel (GSC /alternatives/smartmockups/ getting clicks pos ~13) | comparison | published (2026-09-23) |
| sites like placeit for clothing (GSC "placeit alternative" family) | list | dropped (2026-09-29: would be a 4th page cannibalizing the Placeit queries) |
| merch mockups for creators & bands (supports /for/merch-creators/) | how-to | published (2026-09-28) |
| dropshipping clothing photos: what's real without samples (supports /for/dropshipping/) | how-to | queued |
| product photos for a clothing brand launch: the set you need (supports /for/clothing-brands/) | how-to | queued |
| how to make mockups for print on demand (PoD workflow; supports /for/print-on-demand/) | how-to | queued |
| ghost mannequin effect without the setup (competitor theme; our AI angle) | how-to | queued |
| how to photograph a hoodie for your store (garment-specific photo how-to; supports /mockups/hoodie/) | how-to | queued |
| do you need a model to sell clothes online (definition; drives to on-model AI) | definition | queued |
| how to make your clothing brand look professional (brand-perception; supports /for/clothing-brands/) | how-to | queued |
| ai model generator for clothing photos (GSC "diverse AI models" theme; product core) | definition/how-to | queued |
| how to show fabric texture in product photos (detail-shot how-to; photography cluster) | how-to | queued |
| polo mockups vs flat lay: which converts (supports /mockups/polo/; comparison) | comparison | queued |
| how many product photos should you use (broadened from Etsy piece; PDP cluster) | definition | queued |
| clothing mockup ideas for instagram & tiktok (social-creative angle) | list | queued |
| how to make a mockup look realistic (quality how-to; broad intent) | how-to | queued |
| what is an on-model mockup (definition; captures top-of-funnel) | definition | queued |
| streetwear mockups: the look that sells (supports /for/streetwear-brands/) | how-to | queued |
| seasonal capsule photos on a budget (lookbook follow-on; supports /for/clothing-brands/) | how-to | queued |
