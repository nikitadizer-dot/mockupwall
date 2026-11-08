# Wallapp – Gallery Wall Designer (App Reference)

Internal reference for site content. Keep in sync with the App Store listing when it changes.

## Listing

- **Name**: Wallapp: Gallery Wall Designer
- **App Store URL**: https://apps.apple.com/us/app/wallapp-gallery-wall-designer/id6800613900
- **App ID**: 6800613900
- **Bundle ID**: com.mockupart.app (the in-app brand shown on screens is "MockupArt")
- **Platform**: iOS (iPhone and iPad), minimum iOS 17.6
- **Category**: Graphics & Design (secondary: Entertainment)
- **Price**: Free to download; premium features via in-app subscription (weekly, or one-time lifetime purchase)
- **Rating**: 5.0 — but only a handful of ratings so far (brand-new app, released 2026-09-22). DO NOT claim a large review count.
- **Publisher**: Nikita Cheremisinov (same developer as Mockup Tool / mockuptool.app)
- **Privacy Policy**: https://hibu.app/privacy-policy/
- **Terms of Use**: https://hibu.app/terms-of-use/
- **Languages**: English (plus Russian, German, French, Spanish, Portuguese, Italian, Dutch, Korean added in v1.1)

## What the app does

Wallapp turns a photo of artwork (paintings, sketches, illustrations, posters, prints, photography,
digital art) into a realistic mockup by placing it inside an interior scene — a styled room, a
gallery wall, an office, a commercial space — with the correct lighting, shadow, frame, and
proportions. The result is a scroll-stopping image an artist or seller can use on a product page,
an Etsy listing, social media, or an ad, without photographing a real room.

The real workflow (confirmed from the app screens):
1. Add your artwork — upload or capture it; enter its real dimensions so scale stays accurate.
2. Pick a scene — choose from a library of interior scenes (named presets grouped by category:
   Bold Color, Home Space, etc.), or upload a photo of your own room/wall.
3. Adjust — bottom tabs let you set the Room, the Artwork (position, crop, scale), the Frame
   (frame style, mat, edge color), and the Shadow. Walls, floors, lighting, and perspective can be
   customized.
4. Export — save a high-resolution image for print or promotion, in social-media-ready formats.

Two modes shown in-app: "AI Frame" (AI-generated interior scenes) and "Studio".

## Key features (from the App Store listing)

- 3,000+ interior scenes (homes, galleries, offices, commercial, seasonal), with new scenes added
  regularly — the listing says 20+ new environments weekly.
- Automatic lighting, shadow, and color enhancement so the artwork sits naturally in the scene.
- Smart cropping and automatic sizing that keeps the artwork's real proportions.
- Customizable frames, mats, edge colors, walls, floors, and textures.
- A built-in paint/wall-color visualizer (preview artwork against different wall colors).
- Grid / gallery-wall layouts with multiple artworks.
- Movable decorative elements and people to stage a scene.
- Upload your own room photo to place art on a real wall.
- AI video generation — turn a mockup into a short showcase video.
- High-resolution export for print and promotion; social-media formats.

## Audience

Artists, illustrators, painters, photographers selling prints, digital/print-on-demand artists,
Etsy art sellers, galleries, and interior designers who need to show art in context.

## Features that DO NOT exist (anti-hallucination guard)

Never claim any of the following in site copy, blog posts, or listings:

- NO Android version, NO web/browser version, NO desktop app — iOS only (iPhone + iPad).
- NO large review count — the app is new. Do not invent "trusted by thousands" / "1,000+ reviews".
- NO unlimited free tier — free download with limited use; unlimited needs a subscription.
- NO guarantee about watermarks either way — make no watermark claims.
- NO Etsy/Shopify integration or plugin, NO bulk/batch API — images are exported manually.
- NO printing or fulfillment service — Wallapp makes the mockup image; it does not print or ship art.
- NO claim it physically measures a real wall — scale is based on the dimensions you enter.
- NO team/collaboration features.
- Do not promise an exact scene count beyond what the listing says (3,000+); phrase as "thousands".

When unsure whether a feature exists, do not mention it.

## Core value proposition (site messaging)

Photograph your art → place it in a realistic room (or your own wall photo) → export a
print-ready, scroll-stopping image in seconds. Differentiator vs flat-lay photos and generic
template mockups: the artwork is shown in context at true scale with real lighting and shadow, so
buyers can picture it on their wall — which is what sells an art print. Every mockup is unique
because it's built from the seller's own artwork and scene choices.

## Target keywords (research)

Primary:
- wall art mockup generator / art mockup generator
- gallery wall designer / gallery wall layout
- framed print mockup, canvas mockup, poster mockup
- room / interior art visualizer, "see art on my wall"

Long tail / audience:
- art mockup for Etsy sellers / print-on-demand wall art
- how to photograph art for prints, how to sell art prints online
- ArtPlacer / Placeit / Smartmockups alternative (for art)

## Site map (content system) — mirrors mockuptool.app architecture

- Homepage `/` — hero, before/after, how-it-works, screens, SEO text, testimonials, FAQ, CTA
- `/mockups/{slug}/` — art/mockup-type pages (data: `src/data/programmatic.ts`)
- `/for/{slug}/` — audience pages (same data file)
- `/alternatives/{slug}/` — comparison pages (same data file)
- `/tools/{slug}/` — tool pages (same data file)
- `/blog/` + guides (data: `src/data/blog.ts`)
- `llms.txt` — AI-crawler directory of all pages (GEO)

## Brand for the site

- Site brand: **MockupWall** (domain mockupwall.com), promoting the Wallapp iOS app.
- Accent color: warm yellow/gold (from the app icon), on a dark gallery background.
