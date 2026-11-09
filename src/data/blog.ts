export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'widget'; widget: 'photo-checklist' | 'before-after' }
  | { type: 'video'; src: string; poster: string; caption: string }

export interface BlogPost {
  slug: string
  metaTitle: string
  metaDescription: string
  title: string
  excerpt: string
  date: string // ISO
  /** ISO date of the last substantive edit; feeds dateModified and the sitemap */
  updated?: string
  /** 2-3 sentence direct answer shown at the top; targets featured snippets and AI citations */
  shortAnswer: string
  /** 1200x630 image, used as page hero and per-post og:image */
  hero: string
  blocks: BlogBlock[]
  faqs: { q: string; a: string }[]
  related: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'canvas-mockup-guide',
    metaTitle: 'Canvas Mockup: How to Show Your Art as a Canvas',
    metaDescription:
      'How to make a canvas mockup: show your artwork as a gallery-wrapped canvas on a real wall, at true scale, with depth and shadow — from one photo, no studio.',
    title: 'Canvas Mockup: How to Show Your Art as a Canvas',
    excerpt:
      'A flat JPEG can’t show the depth of a gallery wrap or the frameless look that makes canvas sell. Here’s how to present your art as a canvas — on a real wall.',
    date: '2026-11-09',
    shortAnswer:
      'To make a canvas mockup, upload a photo of your artwork, enter the canvas size, and place it on a wall in a room scene (or a photo of your own wall) using an app like MockupWall. It renders the piece as a gallery-wrapped canvas with depth, a wall shadow, and true scale, then exports a high-resolution image — so buyers see the actual canvas product, not a flat thumbnail of the image.',
    hero: '/assets/blog/canvas-mockup-guide.jpg',
    blocks: [
      {
        type: 'p',
        text: 'Canvas is a format, not just an image. The depth of the gallery wrap, the way the edge turns the corner, the frameless look that sits proud of the wall — that’s what a buyer is paying for when they choose canvas over a print. And none of it survives a flat JPEG of your artwork. A canvas mockup shows the piece as a real hung canvas, which is the difference between a listing that looks like a file and one that looks like a product.',
      },
      { type: 'h2', text: 'Why a canvas needs its own mockup' },
      {
        type: 'p',
        text: 'A flat scan tells a buyer what the image is. It doesn’t tell them it’s a 3 cm deep gallery-wrapped canvas that will sit off the wall with a soft shadow behind it. Shoppers judge canvas on exactly those physical cues — depth, edge, and the frameless silhouette — so a presentation that shows them is what builds enough confidence to buy. A flat image, or a generic framed-print template, quietly misrepresents the product.',
      },
      { type: 'h2', text: 'How to make a canvas mockup' },
      {
        type: 'ul',
        items: [
          'Upload a clean, square-on photo of your artwork (even light, full edges, in focus).',
          'Enter the canvas dimensions so the piece is placed at true scale in the room.',
          'Choose a scene that fits the work — or upload a photo of your own wall.',
          'Let the app render it as a gallery-wrapped canvas with depth and a natural wall shadow.',
          'Export a high-resolution image, and generate a few scenes to fill your listing gallery.',
        ],
      },
      {
        type: 'p',
        text: 'Because the mockup is built from your own artwork and scene choices, every result is unique to your shop — not the same stock template thousands of other canvas sellers reuse. The cleaner your input photo, the more faithfully the colour and detail carry onto the canvas.',
      },
      { type: 'widget', widget: 'before-after' },
      { type: 'h2', text: 'Show the size options' },
      {
        type: 'p',
        text: 'Canvas sells in sizes, and buyers hesitate when they can’t picture how big a piece will be. Generate the same canvas at a few dimensions — a small accent piece, a medium, and an oversized statement canvas — each at true scale in a room. Seeing the size against a sofa or bed answers the question that otherwise turns into a support message or a return.',
      },
      { type: 'h2', text: 'For print-on-demand canvas sellers' },
      {
        type: 'p',
        text: 'In print-on-demand, every seller prints on the same canvas blanks, so the product itself isn’t a differentiator — the presentation is. In-room canvas mockups built from your designs make your catalogue look like a brand instead of a drop-shipper using the generator’s default template. Photograph or export each design once, and generate the full set of in-room images from it.',
      },
      { type: 'h2', text: 'What it does and doesn’t do' },
      {
        type: 'p',
        text: 'A canvas mockup is a realistic preview of how the piece reads on a wall — format, depth, scale. It isn’t a printing or shipping service; it makes the image, not the physical canvas. And the scale comes from the dimensions you enter, not a measurement of a real wall. For listings, ads, and client previews, it replaces the staged photoshoot and produces the images the same day.',
      },
    ],
    faqs: [
      {
        q: 'How do I make a canvas mockup of my art?',
        a: 'Upload your artwork, enter the canvas dimensions, and choose a room scene (or your own wall) in an app like MockupWall. It renders the piece as a gallery-wrapped canvas with depth, shadow, and true scale, then exports a high-resolution image.',
      },
      {
        q: 'Why not use a flat image or a framed-print template?',
        a: 'A flat image hides the canvas format, and a framed template shows the wrong product. A canvas mockup shows the gallery wrap, depth, and frameless look that buyers are actually paying for, which builds the confidence to buy.',
      },
      {
        q: 'Can I show the canvas at different sizes?',
        a: 'Yes. Change the dimensions you enter and the canvas is re-placed at that true scale, so you can present small, medium, and oversized options of the same piece in a room.',
      },
      {
        q: 'Is it free, and what device does it run on?',
        a: 'MockupWall is free to download and lets you create mockups before paying; a subscription unlocks unlimited mockups and all scenes. It runs on iPhone and iPad — there’s no web or Android version.',
      },
    ],
    related: ['/mockups/canvas/', '/mockups/wall-art/', '/for/print-on-demand/', '/tools/wall-art-mockup-generator/'],
  },
  {
    slug: 'what-size-should-wall-art-be',
    metaTitle: 'What Size Should Wall Art Be? A Simple Guide',
    metaDescription:
      'What size should wall art be? The simple rule: fill about two-thirds the width of the furniture below, hung at eye level. Sizing for sofas, beds, and gallery walls.',
    title: 'What Size Should Wall Art Be? A Simple Guide',
    excerpt:
      'Too small and the art looks lost; too big and it overwhelms. Here’s the simple proportion rule — and how to see the right size on your wall before you buy or hang.',
    date: '2026-11-08',
    shortAnswer:
      'As a rule of thumb, wall art should fill about two-thirds to three-quarters of the width of the furniture beneath it, and hang with its center at eye level — roughly 57–60 inches (145–152 cm) from the floor. Over a sofa or bed, measure the furniture width, take two-thirds of it, and choose a piece (or a grouping) close to that width. To be sure before you commit, preview the exact size on your wall at true scale.',
    hero: '/assets/blog/what-size-should-wall-art-be.jpg',
    blocks: [
      {
        type: 'p',
        text: 'Choosing art is the fun part; choosing the right size is where most walls go wrong. A piece that looked big online arrives and floats like a postage stamp over the sofa, or a canvas that seemed reasonable swallows the whole wall. The fix isn’t taste — it’s proportion. A couple of simple rules get you the right size almost every time, and a quick preview removes the last bit of doubt.',
      },
      { type: 'h2', text: 'The two-thirds rule' },
      {
        type: 'p',
        text: 'The most reliable guideline: wall art (a single piece or a grouping treated as one) should span about two-thirds to three-quarters of the width of the furniture below it. Over a 180 cm (72 in) sofa, that means art roughly 120–135 cm (48–54 in) wide. It’s wide enough to anchor the furniture without crowding the edges. Leave a hand’s width or two of wall on each side so the piece reads as intentional, not wedged in.',
      },
      { type: 'h2', text: 'Hang it at eye level' },
      {
        type: 'p',
        text: 'Height matters as much as size. Hang art so its center sits around eye level — about 57–60 inches (145–152 cm) from the floor, the standard galleries use. Over furniture, keep the bottom of the frame roughly 15–25 cm (6–10 in) above the sofa back or headboard so the two relate without touching. If ceilings are high, resist the urge to hang everything up high — eye level still wins.',
      },
      { type: 'h2', text: 'Sizing by location' },
      {
        type: 'ul',
        items: [
          'Above a sofa: aim for two-thirds of the sofa width; one large piece or a balanced pair/trio.',
          'Above a bed: match roughly the width of the headboard, centered on the bed, not the wall.',
          'A blank feature wall: go big — a single oversized piece reads more confident than several small ones.',
          'Narrow spaces (hallway, between windows): a tall vertical print suits the proportion better than a wide one.',
          'Above a console or sideboard: two-thirds of the console width, bottom 15–30 cm above the surface.',
        ],
      },
      { type: 'h2', text: 'Gallery walls count as one shape' },
      {
        type: 'p',
        text: 'For a gallery wall, apply the same two-thirds rule to the whole arrangement, not each frame. Treat the group as a single block, size that block to about two-thirds of the furniture width, and keep consistent spacing (5–8 cm) between frames so it holds together. Planning the grouping before you hang is the difference between a composed wall and a scattered one.',
      },
      { type: 'h2', text: 'See the real size before you commit' },
      {
        type: 'p',
        text: 'Numbers get you close, but the safest step is to see the actual size on your actual wall. That’s exactly what a room visualizer does: you upload a photo of your wall, enter the artwork’s real dimensions, and it places the piece at true scale so you can judge whether a 60×90 cm print or a 100×150 cm one is right — before you buy or drill. In MockupWall you can swap sizes in the same wall photo and compare them side by side in seconds.',
      },
      { type: 'widget', widget: 'before-after' },
      { type: 'h2', text: 'For artists and print sellers' },
      {
        type: 'p',
        text: 'If you sell prints, sizing isn’t just a buyer’s problem — it’s a conversion lever. Shoppers hesitate when they can’t picture how big a print will be, so showing each piece at true scale in a room answers the question for them and cuts size-related returns. Generate the same print at a few sizes in a styled room and let buyers see small, medium, and large at a glance.',
      },
    ],
    faqs: [
      {
        q: 'What size should wall art be above a sofa?',
        a: 'About two-thirds to three-quarters of the sofa’s width. For a 180 cm (72 in) sofa, that’s roughly 120–135 cm (48–54 in) of art, whether a single piece or a balanced grouping, centered over the sofa and hung 15–25 cm above the back.',
      },
      {
        q: 'How high should I hang wall art?',
        a: 'Center the piece at eye level — about 57–60 inches (145–152 cm) from the floor. Over furniture, keep the bottom of the frame roughly 15–25 cm above the sofa back or headboard.',
      },
      {
        q: 'Is it better to go bigger or smaller with wall art?',
        a: 'When in doubt, go bigger. The most common mistake is art that’s too small, which leaves the wall feeling unfinished. One larger piece usually reads more confident than several small ones scattered around.',
      },
      {
        q: 'How can I see what size will look right on my wall?',
        a: 'Use a room visualizer: upload a photo of your wall, enter the artwork’s real dimensions, and it shows the piece at true scale. In MockupWall you can compare different sizes in the same wall photo before you buy or hang.',
      },
    ],
    related: ['/mockups/wall-art/', '/tools/room-visualizer/', '/mockups/gallery-wall/', '/tools/wall-art-mockup-generator/'],
  },
  {
    slug: 'how-to-make-wall-art-mockups',
    metaTitle: 'How to Make Wall Art Mockups (No Photoshop)',
    metaDescription:
      'A simple way to make wall art mockups: place your print in a realistic room at true scale, with a frame and shadow, from one photo — no Photoshop, no photoshoot.',
    title: 'How to Make Wall Art Mockups Without Photoshop',
    excerpt:
      'Buyers purchase art they can picture on a wall. Here’s how to turn a flat print file into an in-room mockup at true scale — from your phone, in minutes.',
    date: '2026-11-08',
    shortAnswer:
      'To make a wall art mockup, upload a photo of your artwork, enter its real dimensions, and place it into a room scene (or a photo of your own wall) using an app like MockupWall. It adds a frame, matches the lighting, and casts a natural shadow, so the art appears on the wall at true scale — then you export a high-resolution image for your shop or listing, with no Photoshop.',
    hero: '/assets/blog/how-to-make-wall-art-mockups.jpg',
    blocks: [
      {
        type: 'p',
        text: 'A flat scan of your artwork answers one question — what the image looks like — and leaves the one that actually drives a sale unanswered: what would this look like on my wall? Size, frame, and context are what turn a browser into a buyer, and none of them survive a plain image file. A wall art mockup fills that gap by showing the piece hanging in a real-looking room, at a believable scale. The good news is you no longer need Photoshop or a photoshoot to make one.',
      },
      { type: 'h2', text: 'What a good wall art mockup needs to show' },
      {
        type: 'ul',
        items: [
          'The art on a wall, framed — not floating on a white background.',
          'True scale — a 12×16 print should read smaller than a 40×60 canvas.',
          'A natural shadow and matched lighting, so it looks photographed, not pasted.',
          'A setting that fits the piece — minimal, bold, cozy — and ideally a few options.',
        ],
      },
      { type: 'h2', text: 'The fastest way: an app that places your art in a scene' },
      {
        type: 'p',
        text: 'A dedicated mockup app skips the manual compositing entirely. In MockupWall you upload the artwork, type in its real dimensions, and pick an interior scene from a large library — or upload a photo of your own wall. The app places the art at true scale, adds a frame and mat, and matches the room’s light and shadow. Because the image is built from your own art and scene choices, every result is unique to your shop rather than a shared template thousands of other sellers use.',
      },
      { type: 'widget', widget: 'before-after' },
      { type: 'h2', text: 'Step by step' },
      {
        type: 'ul',
        items: [
          'Photograph or export your artwork cleanly (straight on, even light, full edges).',
          'Upload it and enter the real print dimensions so the scale is accurate.',
          'Choose a scene that suits the piece, or upload your own wall photo.',
          'Set the frame, mat, and edge color, and let the app match lighting and shadow.',
          'Generate a few scenes and sizes, then export high-resolution images for your listings.',
        ],
      },
      { type: 'h2', text: 'Why not just use template mockups?' },
      {
        type: 'p',
        text: 'Template generators paste your image into the same stock rooms that everyone else uses, so your listings end up looking identical to your competitors’ — and the scenes rarely reflect your piece’s real size or framing. Mockups built from your own artwork, at true scale, look specific to your shop and set the right expectation for the buyer, which is exactly what helps a listing stand out and convert.',
      },
      { type: 'h2', text: 'What it does and doesn’t do' },
      {
        type: 'p',
        text: 'A wall art mockup is a realistic preview of how a piece reads in a room — size, frame, placement. It isn’t a printing or shipping service, and it doesn’t physically measure a real wall; scale comes from the dimensions you enter. For listings, social, and client previews, it replaces the staged photoshoot and produces the images the same day you photograph the art.',
      },
    ],
    faqs: [
      {
        q: 'How do I make a wall art mockup without Photoshop?',
        a: 'Use a mockup app like MockupWall: upload your artwork, enter its dimensions, pick a room scene or your own wall, and it places the art framed at true scale with realistic light and shadow — then you export a high-resolution image. No Photoshop needed.',
      },
      {
        q: 'Can I show the art at the correct size?',
        a: 'Yes. You enter the artwork’s real dimensions, so it appears at true scale in the scene — a small print reads small and an oversized piece reads large, which sets the right expectation for buyers.',
      },
      {
        q: 'Can I use a photo of my own wall?',
        a: 'Yes. Upload a photo of a real wall and place the artwork on it, which is useful for commissions, client previews, and planning a specific space.',
      },
      {
        q: 'Is it free?',
        a: 'MockupWall is free to download and lets you create mockups before paying; a subscription unlocks unlimited mockups and the full scene library. It runs on iPhone and iPad.',
      },
    ],
    related: ['/mockups/wall-art/', '/tools/wall-art-mockup-generator/', '/for/artists/', '/tools/free-wall-art-mockup-generator/'],
  },
  {
    slug: 'sell-art-prints-on-etsy',
    metaTitle: 'How to Sell Art Prints on Etsy: Photos That Convert',
    metaDescription:
      'Selling art prints on Etsy comes down to your photos. How to make in-room mockups that beat the template look, fill every listing slot, and help buyers commit.',
    title: 'How to Sell Art Prints on Etsy: Photos That Convert',
    excerpt:
      'On Etsy, the thumbnail does most of the selling. Here’s how to make listing photos that stand out from the identical template every other art shop uses.',
    date: '2026-11-08',
    shortAnswer:
      'To sell more art prints on Etsy, show each print in realistic rooms at true scale instead of on a plain background or a generic template. Use several in-room mockups per listing to fill Etsy’s photo slots, show different sizes and settings, and make your shop look distinct. An app like MockupWall generates those images from your own art, so your listings don’t look like everyone else’s.',
    hero: '/assets/blog/sell-art-prints-on-etsy.jpg',
    blocks: [
      {
        type: 'p',
        text: 'Etsy is a photo-first marketplace. Shoppers scan a grid of thumbnails and decide in a fraction of a second which listings to open, and for art prints that decision is almost entirely about the image. The problem is that most art shops use the same template mockups — the identical frame on the identical white wall — so their listings blend into one another. Standing out is less about the art being better and more about the photos looking specific, in-context, and real.',
      },
      { type: 'h2', text: 'Why template mockups hold you back' },
      {
        type: 'p',
        text: 'Template generators are quick, but they’re shared by thousands of sellers, so your “frame next to a plant” is the same one buyers have scrolled past a hundred times. They also rarely match your print’s real size or framing, which means the photo can set the wrong expectation and lead to returns. In-room mockups built from your own art solve both problems: they look unique to your shop and they show the piece at true scale.',
      },
      { type: 'h2', text: 'Fill every photo slot' },
      {
        type: 'p',
        text: 'Etsy gives you up to ten photos per listing, and using them is one of the simplest ways to build trust. With a mockup app you can generate the same print across several scenes and sizes in minutes, so you’re not leaving slots empty. A good set mixes a clean close-up of the print, a couple of styled rooms, a size reference, and — if you sell them — a gallery wall arrangement.',
      },
      { type: 'widget', widget: 'before-after' },
      { type: 'h2', text: 'A listing photo set that converts' },
      {
        type: 'ul',
        items: [
          'A crisp, true-color image of the print itself.',
          'The print framed in a styled room that matches your shop’s aesthetic.',
          'A second room in a different style, to widen the appeal.',
          'A true-scale shot that makes the size obvious against furniture.',
          'A gallery wall or size-comparison image if you sell sets or multiple sizes.',
        ],
      },
      { type: 'h2', text: 'How to make them quickly' },
      {
        type: 'p',
        text: 'MockupWall is built for exactly this: upload your print, enter its size, choose scenes and frames, and export high-resolution images you upload to your Etsy listings yourself. There’s no Etsy integration to set up — you just add the finished photos to your listing — and because every mockup is generated from your own art, your shop stops looking like a template and starts looking like a brand.',
      },
    ],
    faqs: [
      {
        q: 'What photos should an Etsy art print listing have?',
        a: 'A clean image of the print, two or three styled in-room mockups in different settings, a true-scale shot that shows the size, and a gallery wall or size-comparison image if relevant. Fill as many of Etsy’s ten slots as you can.',
      },
      {
        q: 'Do in-room mockups really help sales?',
        a: 'They help buyers picture the print in a space and make your listings look distinct from shops using identical templates, which is a common lever for click-through and conversion. Actual results depend on your art, pricing, and niche.',
      },
      {
        q: 'Does MockupWall connect to Etsy?',
        a: 'No. It creates the images and you upload them to your listings yourself — there’s no Etsy plugin, integration, or bulk API.',
      },
      {
        q: 'Is it free to make the mockups?',
        a: 'MockupWall is free to download and create mockups; a subscription unlocks unlimited mockups and the full scene library. iOS only.',
      },
    ],
    related: ['/for/etsy-art-sellers/', '/mockups/art-print/', '/mockups/poster/', '/tools/free-wall-art-mockup-generator/'],
  },
  {
    slug: 'gallery-wall-layout-ideas',
    metaTitle: 'Gallery Wall Layout Ideas (and How to Preview Them)',
    metaDescription:
      'Gallery wall layout ideas — grid, salon, and asymmetric — plus how to preview the arrangement at true scale on your wall before you hang or sell a print set.',
    title: 'Gallery Wall Layout Ideas (and How to Preview Them First)',
    excerpt:
      'A gallery wall lives or dies on the arrangement. Here are layouts that work — and how to see yours on the wall before a single nail goes in.',
    date: '2026-11-08',
    shortAnswer:
      'The most reliable gallery wall layouts are the even grid, the salon-style cluster, and the asymmetric-but-balanced arrangement anchored by one larger piece. Before you hang anything, preview the layout at true scale — in an app like MockupWall you can arrange the prints on a photo of your real wall and adjust spacing and sizes until it balances.',
    hero: '/assets/blog/gallery-wall-layout-ideas.jpg',
    blocks: [
      {
        type: 'p',
        text: 'A gallery wall is one of the highest-impact things you can do with art, and one of the easiest to get wrong. The pieces might all be good, but if the spacing is off or the sizes don’t relate, the whole wall feels unsettled. The fix isn’t more art — it’s a layout that has a logic to it, and a way to check that logic before you commit holes to the wall.',
      },
      { type: 'h2', text: 'Three layouts that reliably work' },
      {
        type: 'ul',
        items: [
          'The grid: equal-sized frames in even rows and columns, consistent spacing. Calm, modern, and the most forgiving to hang.',
          'The salon hang: a dense cluster of mixed sizes and frames, balanced around a center line. Rich and collected-looking, but needs planning.',
          'The anchored asymmetric: one larger piece off-center with smaller works arranged around it. Dynamic, and great for mixing orientations.',
        ],
      },
      { type: 'h2', text: 'The rules that keep it balanced' },
      {
        type: 'ul',
        items: [
          'Keep consistent spacing between frames — 5–8 cm (2–3 in) is a safe default.',
          'Treat the whole group as one shape and keep that shape balanced around a center.',
          'Repeat something — frame color, mat width, or palette — to tie mixed pieces together.',
          'Hang the group’s center around eye level, not each piece individually.',
        ],
      },
      { type: 'h2', text: 'Preview it before you hang it' },
      {
        type: 'p',
        text: 'The step most people skip is seeing the arrangement before drilling. A gallery wall designer lets you place the prints into a grid or cluster on a realistic wall — or a photo of your actual wall — at true scale, so you can judge spacing and proportion on screen. In MockupWall you can arrange several pieces, swap sizes and frames, and nudge the layout until it balances, then export the plan. Sellers use the same feature to present a curated print set as a finished gallery wall, which makes bundling an easy upsell.',
      },
      { type: 'widget', widget: 'before-after' },
      {
        type: 'p',
        text: 'Whether you’re planning your own wall or selling a set, previewing the layout turns a risky guess into a decision you can see. Drill once, hang once, and let the arrangement do the work.',
      },
    ],
    faqs: [
      {
        q: 'What’s the best gallery wall layout?',
        a: 'For most spaces, an even grid is the safest and most modern; a salon-style cluster feels collected and rich; an anchored asymmetric layout is the most dynamic. Choose based on your pieces and how formal you want the wall to feel.',
      },
      {
        q: 'How much space should be between frames?',
        a: 'A consistent gap of about 5–8 cm (2–3 inches) works for most gallery walls. The key is keeping the spacing even so the group reads as one arrangement.',
      },
      {
        q: 'How can I preview a gallery wall before hanging it?',
        a: 'Use a gallery wall designer like MockupWall: arrange your prints into a layout on a scene wall or a photo of your own wall at true scale, adjust spacing and sizes, and export the plan before you drill.',
      },
      {
        q: 'Can I use this to sell a print set?',
        a: 'Yes. Presenting several prints as a finished gallery wall helps buyers picture the whole arrangement and makes bundling an easy upsell over single prints.',
      },
    ],
    related: ['/mockups/gallery-wall/', '/tools/gallery-wall-designer/', '/for/interior-designers/', '/mockups/framed-print/'],
  },
  {
    slug: 'how-to-photograph-your-art',
    metaTitle: 'How to Photograph Your Art for Prints & Mockups',
    metaDescription:
      'How to photograph artwork for prints and mockups: lighting, angle, color, and framing so the digital file is sharp, true to color, and ready to place in a room.',
    title: 'How to Photograph Your Art for Prints and Mockups',
    excerpt:
      'Every mockup and print starts with one photo of the artwork. Get that photo right and everything downstream looks better — here’s how.',
    date: '2026-11-08',
    shortAnswer:
      'To photograph artwork well, shoot it straight on with the camera parallel to the surface, in soft even light with no glare, with the whole piece in frame and in sharp focus. Avoid colored room light that tints the art, and keep the colors true. A clean, square-on photo is what lets a mockup app place the piece convincingly and what makes a print look faithful.',
    hero: '/assets/blog/how-to-photograph-your-art.jpg',
    blocks: [
      {
        type: 'p',
        text: 'Everything you do with your art online starts from one photograph of it: the print file, the listing image, the mockup in a room. If that base photo is skewed, glary, or off-color, every downstream image inherits the problem. The good news is that a faithful art photo doesn’t need a studio — just a window, a steady phone, and a few habits.',
      },
      { type: 'h2', text: 'Light it evenly' },
      {
        type: 'p',
        text: 'Soft, even light is the whole game. Shoot near a large window with indirect daylight, or in open shade, so the light falls across the piece evenly with no hotspots. Turn off mixed room lamps — their warm color casts a tint that’s hard to correct later. For glossy or textured work, angle the piece slightly relative to the light to kill glare, but keep the camera square to the surface.',
      },
      { type: 'h2', text: 'Shoot square-on' },
      {
        type: 'p',
        text: 'Point the camera straight at the center of the artwork, with the lens parallel to the surface. Any tilt makes the rectangle lean (keystone distortion), which looks off and makes the piece harder to place cleanly in a mockup. Fill the frame with the whole work, edges included, and leave a little margin so nothing is cropped.',
      },
      { type: 'h2', text: 'Keep the color true' },
      {
        type: 'p',
        text: 'Color is what buyers trust. Shoot in neutral daylight, avoid colored light, and check the photo against the real piece — if the whites look blue or yellow, adjust the white balance until they read neutral. Keep the image sharp and in focus so texture and fine detail survive, especially if you’re selling the file as a print.',
      },
      { type: 'widget', widget: 'photo-checklist' },
      { type: 'h2', text: 'Then place it in a room' },
      {
        type: 'p',
        text: 'Once you have a clean, square-on, true-color photo, a mockup app can do the rest. In MockupWall you upload that photo, enter the artwork’s real dimensions, and place it in a scene or on your own wall at true scale — the cleaner the input photo, the more convincing the mockup. One careful photo of the work, and you can generate an entire set of listing and social images from it.',
      },
    ],
    faqs: [
      {
        q: 'How do I photograph art without a studio?',
        a: 'Use soft, even daylight near a window, turn off mixed room lamps, and shoot the piece straight on with the camera parallel to the surface. Fill the frame, keep it sharp, and check that the colors read true against the real artwork.',
      },
      {
        q: 'Why does my art photo look distorted?',
        a: 'Usually because the camera is tilted. If the lens isn’t parallel to the artwork, the rectangle leans (keystone distortion). Shoot square-on, centered on the piece, to keep the edges straight.',
      },
      {
        q: 'How do I keep the colors accurate?',
        a: 'Shoot in neutral daylight, avoid colored room light, and adjust the white balance until whites look neutral. Compare the photo to the real piece and correct any color cast before you use it.',
      },
      {
        q: 'What do I do with the photo after?',
        a: 'Upload it to a mockup app like MockupWall, enter the real dimensions, and place the artwork in a room or on your own wall at true scale to generate listing and social images.',
      },
    ],
    related: ['/tools/wall-art-mockup-generator/', '/mockups/wall-art/', '/for/photographers/', '/for/artists/'],
  },
]

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug)

const byNewest = (a: BlogPost, b: BlogPost) => (a.date < b.date ? 1 : -1)

/**
 * Posts that list `path` in their related pages — used for reverse links from site pages.
 * `pinned` slugs come first, in the given order.
 */
export const postsLinkingTo = (path: string, limit = 4, pinned: string[] = []) => {
  const first = pinned.map(getPost).filter((p): p is BlogPost => Boolean(p))
  const rest = blogPosts
    .filter((p) => p.related.includes(path) && !pinned.includes(p.slug))
    .sort(byNewest)
  return [...first, ...rest].slice(0, limit)
}

const postPath = (p: BlogPost) => `/blog/${p.slug}/`

// Linked from almost every post, so sharing it says nothing about topical overlap.
const GENERIC_RELATED = '/tools/free-wall-art-mockup-generator/'

// Stable pseudo-random tie-break so link equity spreads across posts instead of
// piling onto the newest ones.
const pairHash = (a: string, b: string) => {
  let h = 0
  for (const c of a + '|' + b) h = (h * 31 + c.charCodeAt(0)) | 0
  return h
}

/**
 * Other posts to link from `post`: posts it links explicitly or that link to it
 * first, then posts sharing the most specific related pages.
 */
export const relatedPosts = (post: BlogPost, limit = 3) => {
  const score = (p: BlogPost) => {
    if (post.related.includes(postPath(p)) || p.related.includes(postPath(post))) return 100
    return p.related.filter((r) => r !== GENERIC_RELATED && post.related.includes(r)).length
  }
  return blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, s: score(p), h: pairHash(post.slug, p.slug) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.h - b.h)
    .slice(0, limit)
    .map((x) => x.p)
}

export const latestPosts = (limit = 6) => [...blogPosts].sort(byNewest).slice(0, limit)
