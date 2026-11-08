'use client'

import { useEffect, useState } from 'react'

const items = [
  'Shoot the artwork straight on, camera parallel to the surface (no angle)',
  'Soft, even light — no glare or hotspots on the surface',
  'Whole piece in frame, edges included and uncropped',
  'Plain background so the app can isolate the art cleanly',
  'In focus and sharp, so texture and detail carry over',
  'True colors — avoid colored room light that tints the art',
  'Have the real dimensions ready to enter for true scale',
]

const KEY = 'mockupwall-photo-checklist'

const PhotoChecklist = () => {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false))

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || 'null')
      if (Array.isArray(saved) && saved.length === items.length) setChecked(saved)
    } catch {}
  }, [])

  const toggle = (i: number) => {
    const next = checked.map((c, j) => (j === i ? !c : c))
    setChecked(next)
    try {
      localStorage.setItem(KEY, JSON.stringify(next))
    } catch {}
  }

  const done = checked.filter(Boolean).length
  const ready = done === items.length

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 my-4">
      <div className="flex items-center justify-between gap-4 mb-4">
        <p className="font-heading text-lg">Artwork Photo Checklist</p>
        <span
          className={`text-sm font-semibold tabular-nums ${ready ? 'text-primary' : 'text-muted-foreground'}`}
        >
          {done} / {items.length}
        </span>
      </div>

      <div className="h-1.5 rounded-full bg-background mb-6 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${(done / items.length) * 100}%` }}
        />
      </div>

      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={item}>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => toggle(i)}
                className="mt-0.5 w-5 h-5 accent-[#f5d500] flex-shrink-0"
              />
              <span
                className={`leading-relaxed transition-colors ${
                  checked[i] ? 'text-muted-foreground line-through' : 'text-foreground'
                }`}
              >
                {item}
              </span>
            </label>
          </li>
        ))}
      </ul>

      <p className={`mt-6 text-sm ${ready ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
        {ready
          ? 'Ready! Shoot the artwork and let the app place it in a room.'
          : 'Tick everything off and your artwork photo is ready for a clean mockup.'}
      </p>
    </div>
  )
}

export default PhotoChecklist
