'use client'

import { useState, useRef, useCallback } from 'react'

const BeforeAfterWidget = ({
  before = '/assets/before-1.png',
  after = '/assets/after-1.png',
  caption = 'Drag the handle: flat art file → framed on the wall',
}: {
  before?: string
  after?: string
  caption?: string
}) => {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPos((x / rect.width) * 100)
  }, [])

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
      updatePosition(e.clientX)
    },
    [updatePosition]
  )
  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (isDragging.current) updatePosition(e.clientX)
    },
    [updatePosition]
  )
  const onPointerUp = useCallback(() => {
    isDragging.current = false
  }, [])

  return (
    <figure className="my-4 max-w-[420px] mx-auto">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border select-none touch-none bg-card"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <img src={before} alt="Before: flat art file" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPos}%`, borderRight: '2px solid hsl(var(--primary))' }}
        >
          <img
            src={after}
            alt="After: framed on a real wall"
            className="absolute inset-0 h-full object-cover"
            style={{ width: containerRef.current?.offsetWidth || 420, maxWidth: 'none' }}
            draggable={false}
          />
        </div>
        <div className="absolute top-0 h-full w-0.5 bg-primary z-10 pointer-events-none" style={{ left: `${sliderPos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="black" aria-hidden="true">
              <path d="M8 5v14l-7-7zM16 5v14l7-7z" />
            </svg>
          </div>
        </div>
      </div>
      <figcaption className="text-center text-muted-foreground text-sm mt-3 italic">{caption}</figcaption>
    </figure>
  )
}

export default BeforeAfterWidget
