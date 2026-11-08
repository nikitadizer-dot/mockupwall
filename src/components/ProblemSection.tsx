'use client'

import { useState, useRef, useCallback } from "react";

const pairs = [
  { before: "/assets/before-1.png", after: "/assets/after-1.png", caption: "From a flat art file to a framed piece on a styled wall" },
  { before: "/assets/before-2.png", after: "/assets/after-2.png", caption: "From a scanned print to an in-room listing photo" },
  { before: "/assets/before-3.png", after: "/assets/after-3.png", caption: "From a plain image to art shown at true scale" },
];

const BeforeAfterSlider = ({ before, after, caption }: { before: string; after: string; caption: string }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div className="flex-shrink-0 w-[400px]">
      <div
        ref={containerRef}
        className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-border select-none touch-none bg-card"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <img src={before} alt="Before - flat art file" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPos}%`, borderRight: "2px solid hsl(var(--primary))" }}
        >
          <img src={after} alt="After - framed on a real wall" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: '400px' }} />
        </div>
        <div className="absolute top-0 h-full w-0.5 bg-primary z-10 pointer-events-none" style={{ left: `${sliderPos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
              <path d="M8 5v14l-7-7zM16 5v14l7-7z" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-center text-muted-foreground text-sm mt-4 italic">{caption}</p>
    </div>
  );
};

const ProblemSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-[100px] bg-gradient-to-b from-background to-[hsl(0_0%_4%)]">
      <div className="container text-center fade-up">
        <h2 className="text-4xl mb-6">People Buy Art They Can Picture on the Wall</h2>
        <p className="text-muted-foreground text-lg mb-4 max-w-[720px] mx-auto">
          A flat scan shows the image, but not the size, the frame, or how it looks in a room — and that’s exactly what a buyer needs to decide. Staging and photographing every piece costs time and money. MockupWall does it from a single photo.
        </p>
        <div className="flex gap-4 flex-wrap justify-center mb-4">
          <span className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground">✗ No Room to Stage</span>
          <span className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground">✗ No Camera Needed</span>
        </div>
      </div>

      {/* Scroll to reveal hint */}
      <div className="text-center text-muted-foreground text-sm mt-10 mb-6 fade-up delay-1">
        ← Drag to reveal →
      </div>

      {/* Horizontal scrollable sliders */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-8 pb-4 snap-x snap-mandatory scrollbar-hide fade-up delay-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex-shrink-0 w-8" />
        {pairs.map((pair, i) => (
          <div key={i} className="snap-center">
            <BeforeAfterSlider {...pair} />
          </div>
        ))}
        <div className="flex-shrink-0 w-8" />
      </div>
    </section>
  );
};

export default ProblemSection;
