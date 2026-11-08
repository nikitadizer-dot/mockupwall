// Real in-app toolbar (cropped from an app screenshot) with callout labels.
// Label positions are % of the image width, matching each icon's center.
const labels = [
  { text: 'Images', left: '11.8%' },
  { text: 'Colors', left: '26.6%' },
  { text: 'Layers', left: '41.4%' },
  { text: 'Text', left: '56.1%', highlight: true },
  { text: 'Brush', left: '71.4%', highlight: true },
  { text: 'Undo', left: '88.4%' },
]

const ToolbarShowcase = () => {
  return (
    <div className="max-w-[620px] mx-auto mb-16">
      <img
        src="/assets/app-toolbar.png"
        alt="MockupWall in-app editor toolbar: images, colors, layers, text, brush and undo tools"
        className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
      />

      <div className="relative h-12 mt-1">
        {labels.map((l) => (
          <div
            key={l.text}
            className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
            style={{ left: l.left }}
          >
            <span
              className={`w-px h-4 ${l.highlight ? 'bg-primary' : 'bg-border'}`}
              aria-hidden="true"
            />
            <span
              className={`mt-1.5 text-[10px] sm:text-xs uppercase tracking-widest whitespace-nowrap ${
                l.highlight ? 'text-primary font-bold' : 'text-muted-foreground'
              }`}
            >
              {l.text}
            </span>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-4">
        The actual in-app editor: swap images, pick colors, stack layers,{' '}
        <span className="text-foreground font-semibold">add text</span> and{' '}
        <span className="text-foreground font-semibold">paint with the brush</span> — right on the
        garment.
      </p>
    </div>
  )
}

export default ToolbarShowcase
