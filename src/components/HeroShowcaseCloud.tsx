'use client'

import { useEffect, useRef, useState } from 'react'

const images = [
  { src: '/assets/showcase-1.jpg', alt: 'Art mockup — a large abstract print above a linen sofa' },
  { src: '/assets/showcase-2.jpg', alt: 'Art mockup — a gallery wall of framed prints above a console' },
  { src: '/assets/showcase-3.jpg', alt: 'Art mockup — a framed botanical print in a Scandinavian nook' },
  { src: '/assets/showcase-4.jpg', alt: 'Art mockup — an ornate gold frame above a green velvet sofa' },
  { src: '/assets/showcase-5.jpg', alt: 'Art mockup — a line-art print on a sage wall by a leather chair' },
  { src: '/assets/showcase-6.jpg', alt: 'Art mockup — a wide landscape print above a bed' },
  { src: '/assets/showcase-7.jpg', alt: 'Art mockup — a geometric print above a desk in a home office' },
  { src: '/assets/showcase-8.jpg', alt: 'Art mockup — a framed print spotlit on a white gallery wall' },
  { src: '/assets/showcase-9.jpg', alt: 'Art mockup — a colorful still-life print on a deep blue wall' },
]

// Scattered slots hugging the headline block. parallax = px shifted per px
// of scroll (negative drifts up faster, positive lags behind).
const slots = [
  { pos: 'left-[5%] top-[100px]', size: 'w-[145px]', tilt: 'perspective(900px) rotateY(16deg) rotate(-8deg)', dur: '7s', delay: '0s', parallax: -0.16, show: 'hidden lg:block' },
  { pos: 'left-[19%] top-[44px]', size: 'w-[105px]', tilt: 'perspective(900px) rotateY(12deg) rotate(7deg)', dur: '6.2s', delay: '0.8s', parallax: 0.1, show: 'hidden xl:block' },
  { pos: 'left-[2%] top-[330px]', size: 'w-[170px]', tilt: 'perspective(900px) rotateY(20deg) rotate(5deg)', dur: '8.4s', delay: '1.5s', parallax: -0.26, show: 'hidden lg:block' },
  { pos: 'left-[15%] bottom-[8px]', size: 'w-[150px]', tilt: 'perspective(900px) rotateY(14deg) rotate(-6deg)', dur: '9s', delay: '0.4s', parallax: 0.18, show: 'hidden lg:block' },
  { pos: 'left-[30%] top-[64px]', size: 'w-[90px]', tilt: 'perspective(900px) rotateY(8deg) rotate(10deg)', dur: '5.8s', delay: '2.1s', parallax: -0.08, show: 'hidden 2xl:block' },
  { pos: 'right-[5%] top-[92px]', size: 'w-[150px]', tilt: 'perspective(900px) rotateY(-16deg) rotate(8deg)', dur: '7.6s', delay: '0.6s', parallax: -0.2, show: 'hidden lg:block' },
  { pos: 'right-[20%] top-[40px]', size: 'w-[105px]', tilt: 'perspective(900px) rotateY(-12deg) rotate(-7deg)', dur: '6.6s', delay: '1.1s', parallax: 0.12, show: 'hidden xl:block' },
  { pos: 'right-[2%] top-[340px]', size: 'w-[160px]', tilt: 'perspective(900px) rotateY(-22deg) rotate(-5deg)', dur: '8s', delay: '2.6s', parallax: -0.3, show: 'hidden lg:block' },
  { pos: 'right-[14%] bottom-[6px]', size: 'w-[165px]', tilt: 'perspective(900px) rotateY(-14deg) rotate(6deg)', dur: '9.6s', delay: '1.8s', parallax: 0.22, show: 'hidden lg:block' },
]

const HeroShowcaseCloud = () => {
  const [order, setOrder] = useState<number[]>(() => images.map((_, i) => i))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const raf = useRef<number>(0)

  // Shuffle once per page load, after hydration, so every visit gets a
  // different arrangement without SSR mismatch.
  useEffect(() => {
    const shuffled = [...images.keys()]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setOrder(shuffled)
  }, [])

  // Scroll parallax: each card drifts at its own speed while the hero is
  // in view. Skipped for users who prefer reduced motion.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onScroll = () => {
      cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(() => {
        const y = window.scrollY
        cardRefs.current.forEach((el, i) => {
          if (!el) return
          const p = slots[i].parallax
          el.style.transform = `translateY(${y * p}px) rotate(${y * p * 0.04}deg)`
        })
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {slots.map((slot, i) => {
        const img = images[order[i % order.length]]
        return (
          <div key={i} className={`absolute ${slot.pos} ${slot.size} ${slot.show} z-0`}>
            <div ref={(el) => { cardRefs.current[i] = el }} className="will-change-transform">
              <div style={{ transform: slot.tilt }}>
                <div
                  className="relative aspect-square rounded-2xl overflow-hidden border border-border/80 shadow-[0_30px_60px_rgba(0,0,0,0.55)] transition-all duration-500 hover:scale-105 hover:border-primary/70 hover:shadow-[0_30px_70px_rgba(255,230,0,0.12)]"
                  style={{ animation: `float ${slot.dur} ease-in-out infinite`, animationDelay: slot.delay }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/5 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Mobile / tablet: compact result strip */}
      <div className="mt-12 flex justify-center gap-3 lg:hidden fade-up delay-3">
        {order.slice(0, 4).map((idx, i) => (
          <div
            key={idx}
            className="w-[72px] sm:w-[96px] aspect-square rounded-xl overflow-hidden border border-border shadow-lg"
            style={{
              transform: `rotate(${i % 2 === 0 ? -4 : 4}deg)`,
              animation: `float ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <img src={images[idx].src} alt={images[idx].alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </>
  )
}

export default HeroShowcaseCloud
