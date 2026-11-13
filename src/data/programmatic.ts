export type ProgrammaticGroup = 'mockups' | 'for' | 'alternatives' | 'tools'

export interface ProgrammaticPage {
  slug: string
  group: ProgrammaticGroup
  metaTitle: string
  metaDescription: string
  h1: string
  subtitle: string
  intro: string[]
  benefits: { title: string; text: string }[]
  faqs: { q: string; a: string }[]
  related: string[]
  /** Blog slugs listed first in the page's Guides section, ahead of automatic reverse links */
  featuredGuides?: string[]
  /** Optional real generation example shown instead of the generic before/after pair */
  example?: { src: string; alt: string; caption: string }
}

export const GROUP_PATHS: Record<ProgrammaticGroup, string> = {
  mockups: '/mockups',
  for: '/for',
  alternatives: '/alternatives',
  tools: '/tools',
}

export const pagePath = (page: ProgrammaticPage) => `${GROUP_PATHS[page.group]}/${page.slug}/`

export const programmaticPages: ProgrammaticPage[] = [
  // ─────────────────────────── Group A: art / mockup types ───────────────────────────
  {
    slug: 'wall-art',
    group: 'mockups',
    metaTitle: 'Wall Art Mockup Generator – See Your Art at True Scale',
    metaDescription:
      'Free wall art mockup generator: see your art on a real wall at true scale, framed, with real light and shadow — from one photo. Get the size right before you print or hang. iOS app.',
    h1: 'Wall Art Mockup Generator',
    subtitle: 'Show your art on a real wall, at true scale — the one thing a flat scan can never do.',
    intro: [
      'A flat scan of your artwork tells a buyer what the image is. It does not tell them what it would feel like on their wall — the size, the frame, the way light falls across it in a real room. That gap is where sales are lost, because people buy wall art by imagining it hanging in their space. MockupWall closes the gap: upload your art, pick an interior, and the app places it on the wall with correct lighting, shadow, and proportions.',
      'Because you enter the artwork’s real dimensions, the mockup shows it at true scale — a small print reads small, an oversized canvas reads oversized — so the image sets the right expectation instead of guessing. Choose from thousands of ready scenes or upload a photo of your own wall, add a frame and mat, and export a high-resolution image for your shop, listing, or feed.',
    ],
    benefits: [
      {
        title: 'True-to-scale, in context',
        text: 'Enter the real size and the art appears at the right proportions in the room, so buyers can judge how it fits their space.',
      },
      {
        title: 'Real frames, shadows, and light',
        text: 'The app adds a frame, mat, and natural shadow, and matches the scene’s lighting — not a flat paste onto a stock photo.',
      },
      {
        title: 'Thousands of scenes or your own wall',
        text: 'Pick from a large library of interior scenes, or upload a photo of a real wall to place art exactly where it will hang.',
      },
    ],
    faqs: [
      {
        q: 'How do I make a wall art mockup?',
        a: 'Upload a photo of your artwork, enter its real dimensions, and choose an interior scene (or upload your own room photo). MockupWall places the art on the wall with a frame, shadow, and correct scale, then exports a high-resolution image.',
      },
      {
        q: 'Will the size look accurate?',
        a: 'Yes. Because you enter the artwork’s real dimensions, it is placed at true scale within the scene, so a 12×16 print and a 40×60 canvas look as different on the wall as they would in person.',
      },
      {
        q: 'Can I use my own room or wall?',
        a: 'Yes. You can upload a photo of your own wall and place the artwork on it, which is useful for commissions and for showing a specific client how a piece will look in their space.',
      },
      {
        q: 'Is it free?',
        a: 'The app is free to download and lets you create mockups before paying. A subscription unlocks unlimited mockups and all scenes. It runs on iPhone and iPad.',
      },
    ],
    related: ['/mockups/framed-print/', '/mockups/gallery-wall/', '/for/artists/', '/tools/room-visualizer/'],
    example: {
      src: '/assets/showcase-6.jpg',
      alt: 'Wall art mockup — a framed landscape print above a bed in a styled bedroom',
      caption: 'Your art, placed in a real room at true scale',
    },
  },
  {
    slug: 'canvas',
    group: 'mockups',
    metaTitle: 'Canvas Mockup Generator – Show the Gallery-Wrap Depth',
    metaDescription:
      'Free canvas mockup generator: show your art as a gallery-wrapped canvas on a real wall — real depth, shadow, and true scale, from one photo. iOS app, high-res export.',
    h1: 'Canvas Mockup Generator',
    subtitle: 'A gallery-wrapped canvas reads completely differently from a flat scan — show the real thing.',
    intro: [
      'Canvas is a format as much as an image. The depth of the wrap, the way the edge turns the corner, the frameless gallery look — none of that survives a flat JPEG of your art. A canvas mockup puts the piece on a wall as a canvas, so a buyer sees the product they are actually ordering, not a thumbnail of the artwork.',
      'MockupWall builds the scene from your uploaded art and the real dimensions you enter, so the canvas sits at true scale with natural lighting and a soft drop shadow off the wall. Place it in a styled living room, an office, or a gallery setting, or upload your own wall — then export a high-resolution image for your product page.',
    ],
    benefits: [
      {
        title: 'Shows the canvas format',
        text: 'The piece reads as a hung canvas with depth and a wall shadow, not a flat image floating on a background.',
      },
      {
        title: 'True scale from real dimensions',
        text: 'Enter the size and the canvas appears correctly proportioned in the room, so large statement pieces look large.',
      },
      {
        title: 'Scene variety in minutes',
        text: 'Generate the same canvas across several interiors to fill a product gallery and match different buyer aesthetics.',
      },
    ],
    faqs: [
      {
        q: 'How do I make a canvas mockup of my art?',
        a: 'Upload your artwork, enter the canvas dimensions, and choose a room scene. MockupWall renders it as a canvas on the wall with correct scale, lighting, and shadow, ready to export in high resolution.',
      },
      {
        q: 'Can I show different canvas sizes?',
        a: 'Yes. Change the dimensions you enter and the canvas is re-placed at that true scale, so you can show a small, medium, and large option of the same piece.',
      },
      {
        q: 'Does the mockup look realistic?',
        a: 'The app matches the scene’s lighting and adds a natural shadow where the canvas meets the wall, so it reads as a real hung piece rather than a pasted graphic.',
      },
      {
        q: 'Does it work for print-on-demand canvas?',
        a: 'Yes. POD canvas sellers use it to generate unique, in-room product photos instead of the identical template mockups every other shop uses.',
      },
    ],
    related: ['/mockups/wall-art/', '/mockups/framed-print/', '/for/print-on-demand/', '/tools/wall-art-mockup-generator/'],
    example: {
      src: '/assets/showcase-1.jpg',
      alt: 'Canvas mockup — a large abstract canvas above a linen sofa',
      caption: 'A statement canvas, shown at true scale in a styled room',
    },
  },
  {
    slug: 'poster',
    group: 'mockups',
    metaTitle: 'Poster Mockup Generator – Framed Posters in Real Rooms',
    metaDescription:
      'Free poster mockup generator: show your poster framed on a real wall at the right size — in-room, not on a white background. One photo in, a scroll-stopping scene out. iOS app.',
    h1: 'Poster Mockup Generator',
    subtitle: 'Posters sell on vibe and scale — put yours in a room, not on a white background.',
    intro: [
      'A poster on a plain white background is just a graphic. The same poster framed above a desk, a sofa, or a bed suddenly has a size, a mood, and a place in someone’s life — and that is what makes a buyer add it to cart. Showing posters in context is the single biggest lever for print shops, and it used to require staging a room and a camera.',
      'MockupWall does it from a photo. Upload your poster artwork, enter the print size, pick a scene, and the app frames it on the wall with accurate scale, lighting, and shadow. Swap scenes to match different aesthetics — minimalist, bold, cozy — and export high-resolution images for every listing slot.',
    ],
    benefits: [
      {
        title: 'Context beats a white background',
        text: 'A framed poster in a real room communicates size and style instantly, which plain product shots can’t.',
      },
      {
        title: 'Right size, every time',
        text: 'Enter the print dimensions and the poster is placed at true scale, so an A3 and an A1 read differently on the wall.',
      },
      {
        title: 'Frames and mats included',
        text: 'Add a frame, mat, and edge color in the app to show the finished, ready-to-hang look.',
      },
    ],
    faqs: [
      {
        q: 'How do I create a poster mockup?',
        a: 'Upload your poster design, enter its size, and choose an interior scene. MockupWall frames it on the wall at true scale with realistic lighting and shadow, then exports a high-resolution image.',
      },
      {
        q: 'Can I show the poster in several rooms?',
        a: 'Yes. Generate the same poster across multiple scenes to fill a listing gallery and appeal to different buyers without staging anything.',
      },
      {
        q: 'Can I add a frame?',
        a: 'Yes. The app includes frames, mats, and edge colors, so you can present the poster framed or as an unframed print.',
      },
      {
        q: 'Is it free to use?',
        a: 'Free to download and create mockups; a subscription unlocks unlimited mockups and all scenes. iOS only (iPhone and iPad).',
      },
    ],
    related: ['/mockups/art-print/', '/mockups/framed-print/', '/for/etsy-art-sellers/', '/tools/free-wall-art-mockup-generator/'],
  },
  {
    slug: 'framed-print',
    group: 'mockups',
    metaTitle: 'Framed Print Mockup Generator – Frames on a Real Wall',
    metaDescription:
      'Free framed print mockup generator: show your print in a frame and mat on a styled wall, at true scale. Pick the frame, pick the room, export in high resolution. iOS.',
    h1: 'Framed Print Mockup Generator',
    subtitle: 'The frame is half the product — show it, in a room, the way it will actually hang.',
    intro: [
      'When someone buys a framed print, they are buying the whole object: the frame colour, the mat width, the finished piece on a wall. A bare image file hides all of it. A framed print mockup shows the complete product in context, which answers the questions that otherwise turn into hesitation or returns.',
      'With MockupWall you upload the artwork, choose a frame, mat, and edge colour, and place it in a scene at the real size you enter. The app handles lighting and the shadow the frame casts on the wall, so the result looks photographed rather than composited. Export high-resolution images for listings, or upload a client’s own wall to show a commission in place.',
    ],
    benefits: [
      {
        title: 'Choose the frame and mat',
        text: 'Set frame style, mat, and edge colour in the app to present the exact finished product you sell.',
      },
      {
        title: 'Hung, not floating',
        text: 'A natural wall shadow and matched room lighting make the framed piece read as really hanging there.',
      },
      {
        title: 'Scale that matches the listing',
        text: 'Enter real dimensions so the framed print appears the right size for the room — no guesswork for the buyer.',
      },
    ],
    faqs: [
      {
        q: 'How do I make a framed print mockup?',
        a: 'Upload your print, choose a frame, mat, and edge colour, enter the size, and pick a scene. MockupWall places the framed piece on the wall with accurate scale, lighting, and shadow, then exports a high-resolution image.',
      },
      {
        q: 'Can I change the frame colour?',
        a: 'Yes. You can adjust the frame style, mat, and edge colour to match what you offer and to show buyers their options.',
      },
      {
        q: 'Will it look like a real photo?',
        a: 'The app matches scene lighting and adds the shadow a frame casts on the wall, so the mockup reads as a photographed, hung piece rather than a flat paste.',
      },
      {
        q: 'Can I place it on a specific wall?',
        a: 'Yes. Upload a photo of a real wall — yours or a client’s — and place the framed print on it to show exactly how it will look.',
      },
    ],
    related: ['/mockups/wall-art/', '/mockups/gallery-wall/', '/for/interior-designers/', '/tools/wall-art-mockup-generator/'],
    example: {
      src: '/assets/showcase-4.jpg',
      alt: 'Framed print mockup — an ornate gold frame above a green velvet sofa',
      caption: 'The finished framed product, shown on a styled wall',
    },
  },
  {
    slug: 'gallery-wall',
    group: 'mockups',
    metaTitle: 'Gallery Wall Mockup Maker – Lay Out Multiple Prints',
    metaDescription:
      'Free gallery wall mockup maker: arrange several prints into a balanced gallery wall layout and see it on a real wall before you hang or sell. iOS app, high-res export.',
    h1: 'Gallery Wall Mockup Maker',
    subtitle: 'Design the whole wall — multiple prints, balanced and in proportion — before a single nail goes in.',
    intro: [
      'A gallery wall lives or dies on the arrangement: the spacing, the mix of sizes, how the frames talk to each other. Trying to plan it in your head — or worse, with a hammer — is how you end up with extra holes and a wall that feels off. A gallery wall mockup lets you compose the layout visually and judge the balance before committing.',
      'MockupWall lets you place several artworks into a grid or gallery arrangement on a real-looking wall, at the sizes you enter, with frames and shadows. Sellers use it to pitch curated print sets; designers use it to show clients a plan; artists use it to present a collection as a cohesive wall. Export the result in high resolution when it looks right.',
    ],
    benefits: [
      {
        title: 'Compose multiple pieces',
        text: 'Arrange several prints into a grid or gallery layout and see how the sizes and frames balance together.',
      },
      {
        title: 'Plan before you hang',
        text: 'Judge spacing and proportion on screen so you commit to an arrangement instead of guessing on the wall.',
      },
      {
        title: 'Sell sets, not singles',
        text: 'Present a curated print bundle as a finished gallery wall — an easy upsell over single prints.',
      },
    ],
    faqs: [
      {
        q: 'How do I design a gallery wall?',
        a: 'Add your prints to MockupWall, enter their sizes, and arrange them into a grid or gallery layout on a scene wall. Adjust spacing and frames until it balances, then export a high-resolution image.',
      },
      {
        q: 'Can I mix sizes and frames?',
        a: 'Yes. You can combine different print sizes and frame styles, which is the point of a gallery wall — the mockup shows whether the mix works before you hang it.',
      },
      {
        q: 'Is this good for selling print bundles?',
        a: 'Very much so. Showing a curated set as a finished gallery wall helps buyers picture the whole arrangement and makes bundling several prints an easy sell.',
      },
      {
        q: 'Can I use my own wall photo?',
        a: 'Yes. Upload a real wall and lay the gallery arrangement onto it to plan a specific space or pitch a client.',
      },
    ],
    related: ['/mockups/framed-print/', '/mockups/wall-art/', '/for/interior-designers/', '/tools/gallery-wall-designer/'],
    example: {
      src: '/assets/showcase-2.jpg',
      alt: 'Gallery wall mockup — a grid of six framed prints above a console table',
      caption: 'A balanced gallery wall, composed before anything is hung',
    },
  },
  {
    slug: 'art-print',
    group: 'mockups',
    metaTitle: 'Art Print Mockup Generator – Listing Photos That Sell',
    metaDescription:
      'Free art print mockup generator: turn a flat print file into scroll-stopping in-room photos that are unique to your shop — true scale, frames, real scenes. iOS app, high-res export.',
    h1: 'Art Print Mockup Generator',
    subtitle: 'Listing photos that look like your shop, not like the same template every other seller uses.',
    intro: [
      'Most art print listings use the same handful of stock room templates, so thousands of shops show the identical “frame on a white wall next to a plant.” Buyers have learned to scroll past it. The way to stand out is in-room photos that are actually unique to your art and your staging — and that no longer requires a photographer.',
      'MockupWall generates those photos from your print file. Enter the size, choose from a large library of scenes (or your own wall), set a frame, and export high-resolution images that look staged for your piece. Because every mockup is built from your artwork and your scene choices, no other shop has the same photos.',
    ],
    benefits: [
      {
        title: 'Unique to your shop',
        text: 'Mockups are generated from your art and scene choices, so your listing photos aren’t the same template everyone else reuses.',
      },
      {
        title: 'Fill every listing slot',
        text: 'Generate several scenes per print to use all the photo slots a marketplace gives you — more context, more trust.',
      },
      {
        title: 'True scale and real frames',
        text: 'Enter dimensions and add frames so each photo shows the right size and the finished, ready-to-hang look.',
      },
    ],
    faqs: [
      {
        q: 'How do I make art print mockups?',
        a: 'Upload your print file, enter its size, choose scenes and a frame, and MockupWall generates in-room photos at true scale. Export them in high resolution for your listings.',
      },
      {
        q: 'Why not just use template mockups?',
        a: 'Template mockups are shared by thousands of sellers, so your listing looks like everyone else’s. Mockups built from your own art and scenes are unique, which helps you stand out in search results.',
      },
      {
        q: 'How many photos can I make per print?',
        a: 'As many scenes as you like — generate several per print to fill all the photo slots a marketplace offers and show the art in different settings.',
      },
      {
        q: 'Is the app free?',
        a: 'Free to download and create mockups; a subscription unlocks unlimited mockups and the full scene library. iPhone and iPad.',
      },
    ],
    related: ['/mockups/poster/', '/mockups/wall-art/', '/for/etsy-art-sellers/', '/tools/free-wall-art-mockup-generator/'],
  },
  {
    slug: 'photography',
    group: 'mockups',
    metaTitle: 'Photography Print Mockup – Show Photo Prints in a Room',
    metaDescription:
      'Free photography print mockup: place your photo prints, framed, in realistic interior scenes at true scale. Sell fine-art photography with in-room images. iOS app.',
    h1: 'Photography Print Mockup Generator',
    subtitle: 'Fine-art photography sells framed and in context — show the print on a wall, not as a file.',
    intro: [
      'Photographers selling prints face the same problem as painters: a digital file is not the product. Buyers paying for a framed photographic print want to see it as a finished, hung piece — the frame, the mat, the size against a sofa or a bed. A thumbnail of the photo alone leaves that to their imagination, and imagination rarely closes the sale.',
      'MockupWall places your photo print in a realistic room at the true size you enter, with a frame and natural shadow. Show the same image as a small framed print and as an oversized statement piece, across different interiors, and export high-resolution images for your print shop or portfolio store.',
    ],
    benefits: [
      {
        title: 'Framed and in context',
        text: 'Show the photo as a finished framed print on a real wall, which is what a print buyer is actually purchasing.',
      },
      {
        title: 'Size options at a glance',
        text: 'Enter different dimensions to present small, medium, and large framed versions of the same photograph.',
      },
      {
        title: 'Scenes that match the work',
        text: 'Pick interiors that fit the mood of your photography, or upload a client’s wall for a commission preview.',
      },
    ],
    faqs: [
      {
        q: 'How do I mock up a photography print?',
        a: 'Upload the photo, enter the print size, add a frame, and choose a scene. MockupWall places it on the wall at true scale with realistic lighting and shadow, then exports a high-resolution image.',
      },
      {
        q: 'Can I show several print sizes?',
        a: 'Yes. Change the dimensions and the framed photo is re-placed at that true scale, so buyers see exactly how each size reads in a room.',
      },
      {
        q: 'Is this suitable for a print shop?',
        a: 'Yes. Photographers use it to produce consistent, in-room product images across a whole catalogue without staging and shooting each one.',
      },
      {
        q: 'Does it run on iPad?',
        a: 'Yes. The app works on both iPhone and iPad, and is free to download with a subscription for unlimited use.',
      },
    ],
    related: ['/mockups/framed-print/', '/mockups/wall-art/', '/for/photographers/', '/tools/room-visualizer/'],
  },

  // ─────────────────────────── Group B: audiences ───────────────────────────
  {
    slug: 'etsy-art-sellers',
    group: 'for',
    metaTitle: 'Etsy Art Mockups – Listing Photos That Stand Out',
    metaDescription:
      'Make unique in-room art mockups for your Etsy listings — fill all 10 photo slots with your prints in real scenes, at true scale. Stop using the template every shop reuses. Free iOS app.',
    h1: 'Art Mockups for Etsy Sellers',
    subtitle: 'Your prints, in real rooms, in photos no other Etsy shop has.',
    intro: [
      'On Etsy, the thumbnail does most of the selling, and most art shops use the same template mockups — the identical frame on the identical white wall. Shoppers glaze over it. The listings that get the click show the print in a real-looking room, at a believable size, in a way that feels specific to that shop.',
      'MockupWall gives you those photos without a photoshoot. Upload a print, enter its size, pick scenes, add frames, and export high-resolution images that are unique because they’re built from your art. Fill all ten Etsy photo slots with different rooms and sizes, and give buyers enough context to hit “add to cart.”',
    ],
    benefits: [
      {
        title: 'Beat the template look',
        text: 'Mockups generated from your own art don’t match the stock templates thousands of other Etsy shops reuse.',
      },
      {
        title: 'Fill all ten photo slots',
        text: 'Generate multiple scenes and sizes per print to use every slot Etsy gives you — more context, more trust, more conversions.',
      },
      {
        title: 'Same-day listings',
        text: 'Go from a finished print file to a full set of in-room photos in minutes, right from your phone.',
      },
    ],
    faqs: [
      {
        q: 'How do I make Etsy mockups for my prints?',
        a: 'Upload your print to MockupWall, enter its size, choose scenes and frames, and export high-resolution in-room images. Use several per listing to fill Etsy’s photo slots.',
      },
      {
        q: 'Does MockupWall connect to Etsy?',
        a: 'No — it creates the images and you upload them to Etsy yourself. There’s no Etsy plugin or integration; you export high-resolution files and add them to your listings.',
      },
      {
        q: 'Will this help my listings rank or convert?',
        a: 'Unique, in-context photos help your listings stand out from shops using identical templates and give buyers the size and style context that drives conversions. Results depend on your art and pricing.',
      },
      {
        q: 'Is it free?',
        a: 'Free to download and create mockups; a subscription unlocks unlimited mockups and all scenes. iOS only.',
      },
    ],
    related: ['/mockups/art-print/', '/mockups/poster/', '/for/print-on-demand/', '/tools/free-wall-art-mockup-generator/'],
  },
  {
    slug: 'print-on-demand',
    group: 'for',
    metaTitle: 'POD Wall Art Mockups – Make Your Shop Look Different',
    metaDescription:
      'Generate unique in-room mockups for print-on-demand wall art. Everyone sells the same blanks, so the mockup is the only thing that sets your shop apart — at true scale, from one photo. Free iOS app.',
    h1: 'Wall Art Mockups for Print-on-Demand',
    subtitle: 'Everyone prints on the same blanks — the mockup is the only thing that looks like you.',
    intro: [
      'In print-on-demand wall art, the product is commoditised: the same posters, canvases, and frames are available to every seller. What is not shared is how you present the art. The shops that win are the ones whose listing photos look distinct and staged, not the ones using the generator’s default template that a thousand competitors also use.',
      'MockupWall builds in-room photos from your designs and your scene choices, so your catalogue looks like a brand rather than a drop-shipper. Enter sizes for true scale, pick varied interiors, add frames, and export high-resolution images for every product — the differentiator your POD store actually controls.',
    ],
    benefits: [
      {
        title: 'Differentiate on presentation',
        text: 'When the product is identical across sellers, unique in-room mockups are what set your shop apart.',
      },
      {
        title: 'Consistent catalogue look',
        text: 'Generate a cohesive set of scenes across your whole range so the store reads as one brand.',
      },
      {
        title: 'True scale per product',
        text: 'Enter each product’s dimensions so the mockup matches the size the customer is actually buying.',
      },
    ],
    faqs: [
      {
        q: 'Why do I need custom mockups for POD wall art?',
        a: 'Because the blanks are the same for everyone, your presentation is the only differentiator. In-room mockups built from your designs make your listings look distinct instead of using the default template competitors share.',
      },
      {
        q: 'Does it integrate with my POD platform?',
        a: 'No. MockupWall exports high-resolution images that you upload to your store yourself; there’s no automatic integration or bulk API.',
      },
      {
        q: 'Can I keep a consistent style across products?',
        a: 'Yes. Reuse the same scenes and framing across your catalogue so every product photo shares a look and the store feels like one brand.',
      },
      {
        q: 'Is the app free to start?',
        a: 'Free to download and create mockups; a subscription unlocks unlimited mockups and the full scene library.',
      },
    ],
    related: ['/mockups/canvas/', '/mockups/art-print/', '/for/etsy-art-sellers/', '/tools/wall-art-mockup-generator/'],
  },
  {
    slug: 'artists',
    group: 'for',
    metaTitle: 'Art Mockups for Artists – Sell More Prints, No Shoot',
    metaDescription:
      'For painters and illustrators: show your originals and prints on real walls at true scale, and produce listing photos that sell — a cohesive body of work, no photoshoot. Free iOS app.',
    h1: 'Art Mockups for Artists',
    subtitle: 'Present your work the way collectors picture it — framed, scaled, and hanging in a room.',
    intro: [
      'As an artist, the hardest part of selling online is bridging the gap between a flat photo of your work and a collector imagining it on their wall. Originals and prints both suffer the same way: a tight crop of the image loses the scale and the context that make someone fall in love with a piece enough to buy it.',
      'MockupWall lets you place any painting, drawing, or print in a realistic room at its true size, with a frame and natural light. Build a consistent set of presentation images for your shop and socials, show a commission on a client’s own wall, or present a whole collection as a gallery wall. It all happens on your phone, from a photo of the work.',
    ],
    benefits: [
      {
        title: 'Context sells the piece',
        text: 'Collectors buy when they can picture the work in a space — an in-room mockup at true scale does that for them.',
      },
      {
        title: 'A cohesive body of work',
        text: 'Present originals and prints in matching scenes so your shop and feed read as one considered collection.',
      },
      {
        title: 'Commissions in a client’s room',
        text: 'Upload a client’s wall photo to show exactly how a commissioned piece will look before you deliver.',
      },
    ],
    faqs: [
      {
        q: 'Can I mock up original paintings, not just prints?',
        a: 'Yes. Photograph the original, enter its dimensions, and place it in a scene at true scale with a frame — the same workflow works for originals, drawings, and prints.',
      },
      {
        q: 'How do I show a commission to a client?',
        a: 'Upload a photo of the client’s wall and place your artwork on it at the real size, so they can see the piece in their own space before it’s finished or shipped.',
      },
      {
        q: 'Can I present a whole collection?',
        a: 'Yes. Use consistent scenes across pieces, or arrange several works into a gallery wall layout to present a collection as one cohesive wall.',
      },
      {
        q: 'What does it cost?',
        a: 'Free to download and create mockups; a subscription unlocks unlimited mockups and all scenes. iPhone and iPad.',
      },
    ],
    related: ['/mockups/wall-art/', '/mockups/gallery-wall/', '/for/galleries/', '/tools/room-visualizer/'],
  },
  {
    slug: 'photographers',
    group: 'for',
    metaTitle: 'Art Mockups for Photographers Selling Prints',
    metaDescription:
      'For photographers: show your fine-art photo prints framed and in real rooms, at true scale. Build a consistent print-shop catalogue without staging every shot. iOS.',
    h1: 'Art Mockups for Photographers',
    subtitle: 'Sell framed photographic prints by showing them framed — on a wall, at the right size.',
    intro: [
      'A photographer’s print shop is only as persuasive as its presentation. Buyers paying for a large framed landscape or a fine-art portrait want to see the finished print on a wall, at a size they can judge — not a web-sized version of the image they could screenshot for free. The in-room, framed presentation is what signals quality and justifies the price.',
      'MockupWall turns each photo into that presentation: framed, in a realistic interior, at the true dimensions you enter. Produce a consistent catalogue across your whole portfolio, offer multiple sizes of the same image, and export high-resolution photos for your store — all from your phone, without renting a wall and a camera for every shot.',
    ],
    benefits: [
      {
        title: 'Framed, at a buyable size',
        text: 'Show the photo as a finished framed print in a room, at true scale, which is what a print collector is actually buying.',
      },
      {
        title: 'One portfolio, many sizes',
        text: 'Offer small, medium, and large framed versions of each photograph by changing the dimensions you enter.',
      },
      {
        title: 'Catalogue consistency',
        text: 'Use matching scenes across the portfolio so the whole print shop looks cohesive and considered.',
      },
    ],
    faqs: [
      {
        q: 'How do I present photo prints for sale?',
        a: 'Upload the photo, add a frame, enter the print size, and choose a scene. MockupWall places it on a wall at true scale with realistic lighting and shadow, then exports a high-resolution image.',
      },
      {
        q: 'Can I show the same photo in different sizes?',
        a: 'Yes. Enter different dimensions and the framed photo is re-placed at that true scale, so buyers see how each size option reads in a room.',
      },
      {
        q: 'Is this efficient for a large catalogue?',
        a: 'Yes. You can mock up print after print from your phone without staging a physical scene for each one, keeping a consistent look across the catalogue.',
      },
      {
        q: 'Is it free?',
        a: 'Free to download and create mockups; a subscription unlocks unlimited use and all scenes.',
      },
    ],
    related: ['/mockups/photography/', '/mockups/framed-print/', '/for/artists/', '/tools/wall-art-mockup-generator/'],
  },
  {
    slug: 'interior-designers',
    group: 'for',
    metaTitle: 'Art Mockups for Interior Designers – Pitch on the Wall',
    metaDescription:
      'For interior designers: place art on a client’s actual wall at true scale to pitch pieces and sizes with confidence. Upload the room, drop in the art, present. iOS app.',
    h1: 'Art Mockups for Interior Designers',
    subtitle: 'Show the client the art on their wall — the right piece, the right size — before you source it.',
    intro: [
      'Specifying art is one of the trickier parts of a project: the client has to trust that a piece they’ve only seen as a thumbnail will work on their wall at the size you’re recommending. Describing it rarely lands. Showing it does. A mockup on the client’s own wall turns an abstract suggestion into a decision they can approve on the spot.',
      'MockupWall lets you upload a photo of the real room and place candidate artworks on the wall at true scale, with frames that match your scheme. Compare options and sizes side by side, present a gallery wall arrangement, and export high-resolution visuals for the client deck — without ordering anything first.',
    ],
    benefits: [
      {
        title: 'On the client’s real wall',
        text: 'Upload the actual room and place art on it, so the client sees the piece in their own space, not a generic scene.',
      },
      {
        title: 'Size decisions made easy',
        text: 'Show the same piece at different true-scale sizes to settle the “how big should it be?” question visually.',
      },
      {
        title: 'Present whole walls',
        text: 'Arrange several pieces into a gallery wall layout to pitch a complete scheme rather than one print at a time.',
      },
    ],
    faqs: [
      {
        q: 'Can I place art on a client’s actual room?',
        a: 'Yes. Upload a photo of the real wall and position candidate artworks on it at true scale with frames, then export the visuals for your presentation.',
      },
      {
        q: 'Can I compare sizes and options?',
        a: 'Yes. Place the same piece at different dimensions, or swap pieces in the same spot, to compare options and sizes before specifying anything.',
      },
      {
        q: 'Is it good for client decks?',
        a: 'Yes. Export high-resolution mockups to drop into proposals and mood boards so clients can approve art and sizing with confidence.',
      },
      {
        q: 'What platform does it run on?',
        a: 'iOS — iPhone and iPad. It’s free to download, with a subscription for unlimited mockups and the full scene library.',
      },
    ],
    related: ['/mockups/gallery-wall/', '/mockups/framed-print/', '/for/galleries/', '/tools/room-visualizer/'],
  },
  {
    slug: 'galleries',
    group: 'for',
    metaTitle: 'Art Mockups for Galleries & Art Dealers',
    metaDescription:
      'For galleries and dealers: present works in context at true scale, show collectors a piece on their wall, and produce consistent promotional images. iOS app.',
    h1: 'Art Mockups for Galleries',
    subtitle: 'Help collectors commit — show the work in a room, at scale, before it leaves the gallery.',
    intro: [
      'Collectors hesitate over scale and placement as much as over the work itself. A gallery that can show a piece hanging in a realistic room — or on the collector’s own wall — removes that hesitation and makes the sale feel safe. The same images double as polished promotional material for the gallery’s site and socials.',
      'MockupWall lets you place works in context at true scale, with frames, and export high-resolution images for marketing or for a specific collector conversation. Upload a collector’s room to show a piece in their space, or present a themed hang as a gallery wall, all without moving or re-photographing the art.',
    ],
    benefits: [
      {
        title: 'Reduce buyer hesitation',
        text: 'Showing scale and placement in a real room answers the questions that stall a collector’s decision.',
      },
      {
        title: 'Promotional images on tap',
        text: 'Produce consistent, in-context images of the collection for the gallery’s website, newsletter, and socials.',
      },
      {
        title: 'Collector-specific previews',
        text: 'Upload a collector’s own wall to show a particular work in their space during the sale conversation.',
      },
    ],
    faqs: [
      {
        q: 'How can a gallery use mockups?',
        a: 'Place works in realistic scenes or on a collector’s uploaded wall at true scale, then export high-resolution images for marketing or for a specific sale conversation.',
      },
      {
        q: 'Can I show a themed hang?',
        a: 'Yes. Arrange several works into a gallery wall layout to present a themed grouping or a proposed hang.',
      },
      {
        q: 'Does the scale stay accurate for large works?',
        a: 'Yes. Because you enter real dimensions, large works read large in the scene, which is exactly what collectors need to judge.',
      },
      {
        q: 'Is it free to try?',
        a: 'The app is free to download and create mockups; a subscription unlocks unlimited use and all scenes.',
      },
    ],
    related: ['/mockups/wall-art/', '/mockups/gallery-wall/', '/for/artists/', '/tools/room-visualizer/'],
  },

  // ─────────────────────────── Group C: tools ───────────────────────────
  {
    slug: 'wall-art-mockup-generator',
    group: 'tools',
    metaTitle: 'Wall Art Mockup Generator – Free AI App for iOS',
    metaDescription:
      'A free wall art mockup generator: upload your art, place it in a realistic room at true scale with frames and shadows, and export in high resolution. iPhone and iPad.',
    h1: 'Wall Art Mockup Generator',
    subtitle: 'Upload your art, pick a room, export a photo that looks shot in a studio — in minutes.',
    intro: [
      'A wall art mockup generator exists to answer one question for a buyer: what would this look like on my wall? MockupWall answers it properly — not by pasting your image onto a stock photo, but by placing your artwork in a realistic interior at the real size you enter, with a frame, matched lighting, and a natural shadow.',
      'The whole process runs on your phone. Upload the art, enter dimensions, choose a scene or your own wall, set a frame, and export a high-resolution image. Generate several scenes per piece to build a full listing gallery, and reuse the look across your catalogue for a consistent brand.',
    ],
    benefits: [
      {
        title: 'Real scenes, real scale',
        text: 'Art is placed in a realistic room at the true size you enter, with frames and shadows — not a flat paste.',
      },
      {
        title: 'Your own wall, too',
        text: 'Upload a photo of a real wall to place art exactly where it will hang.',
      },
      {
        title: 'High-resolution export',
        text: 'Export images sharp enough for product pages, ads, and print promotion, straight from iOS.',
      },
    ],
    faqs: [
      {
        q: 'What is a wall art mockup generator?',
        a: 'A tool that shows your artwork on a wall in a realistic room so buyers can picture it in a space. MockupWall places your art at true scale with a frame, lighting, and shadow, and exports a high-resolution image.',
      },
      {
        q: 'Is MockupWall free?',
        a: 'It’s free to download and create mockups. A subscription unlocks unlimited mockups and the full scene library. iOS only (iPhone and iPad).',
      },
      {
        q: 'Do I need design skills?',
        a: 'No. Upload the art, enter the size, pick a scene and frame, and export — there’s nothing to design or edit beyond those choices.',
      },
      {
        q: 'Can I use my own room photo?',
        a: 'Yes. Upload a wall photo and place the art on it, which is ideal for commissions and client previews.',
      },
    ],
    related: ['/mockups/wall-art/', '/tools/gallery-wall-designer/', '/tools/room-visualizer/', '/for/etsy-art-sellers/'],
  },
  {
    slug: 'gallery-wall-designer',
    group: 'tools',
    metaTitle: 'Gallery Wall Designer – Plan a Gallery Wall Layout',
    metaDescription:
      'Free gallery wall designer: arrange multiple prints into a balanced layout and preview it on a real wall at true scale before you hang or sell. iOS app.',
    h1: 'Gallery Wall Designer',
    subtitle: 'Arrange the whole wall on screen — sizes, spacing, frames — before a single hole is drilled.',
    intro: [
      'Designing a gallery wall by eye is how you end up with a wall full of nail holes and an arrangement that still feels unbalanced. A gallery wall designer lets you plan the layout visually first: which pieces, what sizes, how they’re spaced, how the frames relate. You commit once you can see it works.',
      'MockupWall lets you place several artworks into a grid or gallery arrangement on a realistic wall at true scale, with frames and shadows. It’s equally useful for planning your own home wall, pitching a client, or selling a curated print set as a finished look. Export the layout in high resolution when it’s right.',
    ],
    benefits: [
      {
        title: 'See the layout before you hang',
        text: 'Compose spacing and proportion on screen so you commit to an arrangement instead of guessing on the wall.',
      },
      {
        title: 'Mix sizes and frames',
        text: 'Combine different sizes and frame styles and judge the balance before buying or hanging anything.',
      },
      {
        title: 'Plan or sell',
        text: 'Use it for your own wall, a client pitch, or to present a curated print bundle as a gallery wall.',
      },
    ],
    faqs: [
      {
        q: 'How does a gallery wall designer work?',
        a: 'Add your prints, enter their sizes, and arrange them into a grid or gallery layout on a scene wall. Adjust spacing and frames until it balances, then export a high-resolution image.',
      },
      {
        q: 'Can I plan a real wall in my home?',
        a: 'Yes. Upload a photo of your wall and lay the arrangement onto it at true scale to plan the real hang before drilling.',
      },
      {
        q: 'Can I combine different frame styles?',
        a: 'Yes. Mix sizes and frames freely — the designer shows whether the combination works as a cohesive wall.',
      },
      {
        q: 'Is it free?',
        a: 'Free to download and use; a subscription unlocks unlimited mockups and all scenes. iPhone and iPad.',
      },
    ],
    related: ['/mockups/gallery-wall/', '/tools/wall-art-mockup-generator/', '/for/interior-designers/', '/mockups/framed-print/'],
  },
  {
    slug: 'room-visualizer',
    group: 'tools',
    metaTitle: 'Room Visualizer – See Art on Your Wall at True Scale',
    metaDescription:
      'Free room visualizer: upload a photo of your wall and see any artwork on it at true scale — framed, with realistic light and shadow — to get the size right before you buy or hang. iOS app.',
    h1: 'Room Art Visualizer',
    subtitle: 'Upload your wall, drop in the art, and see it in your own space at the real size.',
    intro: [
      'Generic room scenes are great for listings, but sometimes you need to see art in one specific place: your living room, a client’s hallway, the exact wall above the sofa. A room visualizer uses a photo of that real wall and places the artwork on it at true scale, so the preview is of the actual space rather than a staged stand-in.',
      'With MockupWall you upload the wall photo, add the artwork at its real dimensions, choose a frame, and let the app match lighting and add a natural shadow. It’s the fastest way to settle whether a piece and a size are right for a room — for your own home, or to close a commission or a design decision with a client.',
    ],
    benefits: [
      {
        title: 'Your actual wall',
        text: 'Place art on a photo of the real space, not a generic scene, so the preview reflects the room that matters.',
      },
      {
        title: 'True scale, real doubt removed',
        text: 'Enter dimensions to see the real size on the wall and settle the “is it too big or too small?” question.',
      },
      {
        title: 'Frames and natural light',
        text: 'Add a frame and let the app match the room’s lighting and shadow so the preview looks photographed.',
      },
    ],
    faqs: [
      {
        q: 'How do I see art on my own wall?',
        a: 'Upload a photo of your wall to MockupWall, add the artwork at its real dimensions, choose a frame, and the app places it on the wall at true scale with matched lighting and shadow.',
      },
      {
        q: 'Is the size accurate?',
        a: 'Yes — you enter the artwork’s real dimensions, so it appears at true scale against your wall and furniture.',
      },
      {
        q: 'Can I try several pieces in the same spot?',
        a: 'Yes. Swap artworks and sizes in the same wall photo to compare options before you buy or hang.',
      },
      {
        q: 'What does it cost?',
        a: 'Free to download and use; a subscription unlocks unlimited mockups and all scenes. iOS only.',
      },
    ],
    related: ['/mockups/wall-art/', '/tools/paint-color-visualizer/', '/for/interior-designers/', '/tools/wall-art-mockup-generator/'],
  },
  {
    slug: 'paint-color-visualizer',
    group: 'tools',
    metaTitle: 'Wall Paint Color Visualizer – Preview Art on Wall Colors',
    metaDescription:
      'Free wall color visualizer: preview your artwork against different wall colors to find the backdrop that makes it pop, before you paint or hang. iOS app.',
    h1: 'Wall Paint Color Visualizer',
    subtitle: 'The wall color behind a piece can make or break it — test it before you commit.',
    intro: [
      'Art never hangs in a vacuum. The same print looks punchy on a deep green wall and washed-out on stark white. For sellers, the backdrop sets the mood of a listing; for homeowners and designers, the wall color decides whether a piece sings or disappears. Testing it in real life means paint samples and guesswork.',
      'MockupWall includes a paint/wall-color visualizer so you can preview artwork against different wall colors and pick the backdrop that flatters it. Pair a piece with the tones that make it pop for your listings, or check a planned wall color against the art a client intends to hang — all on your phone, before anyone opens a paint can.',
    ],
    benefits: [
      {
        title: 'Find the flattering backdrop',
        text: 'Preview the art against different wall colors to choose the one that makes it stand out.',
      },
      {
        title: 'Better-looking listings',
        text: 'Match each piece to wall tones that set the right mood, so your product photos feel art-directed.',
      },
      {
        title: 'Plan a real repaint',
        text: 'Check a planned wall color against the art that will hang on it before committing to paint.',
      },
    ],
    faqs: [
      {
        q: 'What does the wall color visualizer do?',
        a: 'It previews your artwork against different wall colors so you can see which backdrop flatters the piece, before painting a real wall or staging a listing.',
      },
      {
        q: 'Can I use it to plan a room repaint?',
        a: 'Yes. Preview the art against candidate wall colors to decide on a paint color that works with the piece you intend to hang.',
      },
      {
        q: 'Does it change the artwork’s colors?',
        a: 'No — it changes the wall behind the art so you can judge the pairing. The artwork stays as you uploaded it.',
      },
      {
        q: 'Is it free?',
        a: 'Free to download and use; a subscription unlocks unlimited mockups and all scenes. iPhone and iPad.',
      },
    ],
    related: ['/tools/room-visualizer/', '/mockups/wall-art/', '/for/interior-designers/', '/tools/wall-art-mockup-generator/'],
  },
  {
    slug: 'art-video-generator',
    group: 'tools',
    metaTitle: 'AI Art Video Generator – Turn a Mockup into a Clip',
    metaDescription:
      'Turn your art mockup into a short AI showcase video for social media — motion that stops the scroll on a feed full of static images. iOS app.',
    h1: 'AI Art Video Generator',
    subtitle: 'Motion is the cheapest attention on a feed — turn a mockup into a short showcase clip.',
    intro: [
      'A still image competes with every other still image in the feed. A short video — a slow push into the piece on the wall, a reveal, a subtle move through the room — stops the scroll where a static post wouldn’t. For artists and print sellers, that extra second of attention is often the difference between a skip and a tap.',
      'MockupWall can turn a mockup into a short AI-generated showcase video, so you can post motion without filming or editing anything. Make the still for your listing, then generate a clip from it for Reels, TikTok, or an ad — all from the same app, on your phone.',
    ],
    benefits: [
      {
        title: 'Stop the scroll',
        text: 'Short motion clips earn more attention in a feed than static images, with no filming or editing.',
      },
      {
        title: 'One asset, two formats',
        text: 'Make the still for your listing and generate a video from it for social — from the same mockup.',
      },
      {
        title: 'All on your phone',
        text: 'No video editor and no footage to shoot — generate the clip in the app and post it.',
      },
    ],
    faqs: [
      {
        q: 'How do I make an art showcase video?',
        a: 'Create a mockup in MockupWall, then use the AI video feature to generate a short showcase clip from it, ready to post to social media.',
      },
      {
        q: 'Do I need video editing skills?',
        a: 'No. The clip is generated from your mockup in the app — there’s no footage to shoot and no editor to learn.',
      },
      {
        q: 'What are the videos good for?',
        a: 'Reels, TikTok, and ads — anywhere motion helps your art stand out against static posts in the feed.',
      },
      {
        q: 'Is it free?',
        a: 'The app is free to download; AI video and unlimited use are premium features unlocked by a subscription.',
      },
    ],
    related: ['/tools/wall-art-mockup-generator/', '/mockups/wall-art/', '/for/artists/', '/for/print-on-demand/'],
  },
  {
    slug: 'free-wall-art-mockup-generator',
    group: 'tools',
    metaTitle: 'Free Wall Art Mockup Generator – No Desktop Needed',
    metaDescription:
      'A genuinely free wall art mockup generator for iPhone: upload your art, place it in a real room at true scale, and export — generate before you decide to pay. iOS app.',
    h1: 'Free Wall Art Mockup Generator',
    subtitle: 'Generate first, decide later — free to download, and your mockups are unique to your art.',
    intro: [
      'Most “free” mockup tools are free until you need them — the good scenes sit behind a paywall, or the export is small and stamped. MockupWall takes the App Store approach instead: download free, make real in-room mockups from your own artwork, and upgrade only if the results earn it.',
      'The free path isn’t a demo of a template library, because there is no template library — every mockup is built from the art you upload and the scene you choose, so even your first free results are unique to your shop. Enter real dimensions for true scale, add a frame, and export a high-resolution image.',
    ],
    benefits: [
      {
        title: 'Actually free to start',
        text: 'Download and create mockups before paying anything — judge the quality on your own art, not a locked demo.',
      },
      {
        title: 'Unique, not templated',
        text: 'Each mockup is generated from your artwork and scene choices, so free results are still one-of-a-kind.',
      },
      {
        title: 'Everything on your phone',
        text: 'No desktop editor and no file juggling — upload, place, and export in one iOS app.',
      },
    ],
    faqs: [
      {
        q: 'Is MockupWall really free?',
        a: 'The app is free to download and lets you create mockups before any purchase. A subscription unlocks unlimited mockups, the full scene library, and premium features like AI video.',
      },
      {
        q: 'What’s the catch with free mockups?',
        a: 'There isn’t a template trick — mockups are generated from your own art, so free results are unique. Unlimited generation and the full scene library are what the subscription adds.',
      },
      {
        q: 'Can I export high-resolution images for free?',
        a: 'You can create and export mockups on the free tier; the subscription removes limits and unlocks all scenes and premium features.',
      },
      {
        q: 'Which devices does it run on?',
        a: 'iPhone and iPad. There’s no web, desktop, or Android version.',
      },
    ],
    related: ['/mockups/wall-art/', '/mockups/art-print/', '/for/etsy-art-sellers/', '/tools/wall-art-mockup-generator/'],
  },

  // ─────────────────────────── Group D: alternatives ───────────────────────────
  {
    slug: 'placeit',
    group: 'alternatives',
    metaTitle: 'Placeit Alternative for Art Mockups (iOS)',
    metaDescription:
      'Looking for a Placeit alternative for wall art? MockupWall places your art in real rooms at true scale from your phone — unique mockups, not shared templates. Free iOS app.',
    h1: 'Placeit Alternative',
    subtitle: 'Shared templates vs. mockups built from your own art — the difference buyers can see.',
    intro: [
      'Placeit is a browser-based template library: you drop your image into a stock scene that thousands of other people also use. It’s quick, but for art sellers it has a cost — your listing photos look like everyone else’s, and the scenes don’t reflect the true size or framing of your specific piece.',
      'MockupWall is a different approach for wall art. It’s an iOS app that places your artwork in a realistic room at the real dimensions you enter, with frames and shadows, or on a photo of your own wall. Every mockup is generated from your art and your scene choices, so the images are unique to your shop rather than shared with every Placeit user.',
    ],
    benefits: [
      {
        title: 'Unique, not shared scenes',
        text: 'Mockups are built from your own art, so your listings don’t match the templates other sellers reuse.',
      },
      {
        title: 'True scale and your own wall',
        text: 'Enter real dimensions for accurate size, or upload a real wall — options a shared template can’t offer.',
      },
      {
        title: 'Made for mobile',
        text: 'The whole workflow runs on iPhone and iPad; it’s free to download and try.',
      },
    ],
    faqs: [
      {
        q: 'How is MockupWall different from Placeit?',
        a: 'Placeit drops your image into shared stock templates in the browser. MockupWall is an iOS app that generates mockups from your own art at true scale, with frames and your own wall option, so the images are unique to your shop.',
      },
      {
        q: 'Is MockupWall free like Placeit’s previews?',
        a: 'MockupWall is free to download and create mockups; a subscription unlocks unlimited use and all scenes. There’s no separate per-download charge.',
      },
      {
        q: 'Does it run in a browser?',
        a: 'No — MockupWall is an iOS app for iPhone and iPad, not a web tool.',
      },
      {
        q: 'Is it specifically for wall art?',
        a: 'Yes. It’s focused on placing art, prints, posters, and photography in interior scenes, rather than being a general template catalogue.',
      },
    ],
    related: ['/alternatives/artplacer/', '/mockups/wall-art/', '/for/etsy-art-sellers/', '/tools/wall-art-mockup-generator/'],
  },
  {
    slug: 'artplacer',
    group: 'alternatives',
    metaTitle: 'ArtPlacer Alternative – Art Mockups on Your Phone',
    metaDescription:
      'An ArtPlacer alternative for artists and sellers: place art in real rooms or on a client’s wall at true scale, right from iOS. Free to download. MockupWall.',
    h1: 'ArtPlacer Alternative',
    subtitle: 'The same in-room, on-the-client’s-wall idea — in a free iOS app, built for speed.',
    intro: [
      'ArtPlacer is a well-known web tool for showing art in rooms and on a buyer’s wall, aimed largely at galleries and websites with subscription tiers. If you want that same in-context preview but prefer to work from your phone — and to start for free — MockupWall covers the core job.',
      'Upload your artwork, enter its real dimensions, and place it in a realistic scene or on a photo of a real wall, with frames, matched lighting, and natural shadow. Build listing images, pitch a client on their own wall, or compose a gallery wall — all on iOS, exporting high-resolution images when you’re done.',
    ],
    benefits: [
      {
        title: 'In-room and on a real wall',
        text: 'Place art in ready scenes or on a client’s uploaded wall at true scale — the core of what an art visualizer is for.',
      },
      {
        title: 'Free to start, mobile-first',
        text: 'Download free and work from iPhone or iPad, rather than committing to a web subscription up front.',
      },
      {
        title: 'Frames, scale, and gallery walls',
        text: 'Add frames, keep true proportions, and arrange multiple pieces into a gallery wall layout.',
      },
    ],
    faqs: [
      {
        q: 'How does MockupWall compare to ArtPlacer?',
        a: 'Both show art in rooms and on a buyer’s wall at scale. MockupWall is a free-to-download iOS app focused on doing that quickly from your phone, with frames, true scale, and gallery wall layouts.',
      },
      {
        q: 'Can I place art on a client’s wall like ArtPlacer?',
        a: 'Yes. Upload a photo of the real wall and place the artwork on it at true scale to preview a piece in a specific space.',
      },
      {
        q: 'Is there a free option?',
        a: 'Yes — MockupWall is free to download and create mockups; a subscription unlocks unlimited use and all scenes.',
      },
      {
        q: 'Does it work on a computer?',
        a: 'No — it’s an iOS app for iPhone and iPad.',
      },
    ],
    related: ['/alternatives/placeit/', '/mockups/wall-art/', '/for/galleries/', '/tools/room-visualizer/'],
  },
]

export const getPagesByGroup = (group: ProgrammaticGroup) =>
  programmaticPages.filter((p) => p.group === group)

export const getPage = (group: ProgrammaticGroup, slug: string) =>
  programmaticPages.find((p) => p.group === group && p.slug === slug)
