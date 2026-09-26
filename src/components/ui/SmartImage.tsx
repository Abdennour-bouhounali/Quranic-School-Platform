import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export type SceneTone = 'night' | 'dusk' | 'day'

type Props = {
  src: string
  alt: string
  className?: string
  tone?: SceneTone
  eager?: boolean
}

// Renders the lesson illustration; until the Flux image exists at `src`,
// shows an illustrated desert placeholder so layouts never break.
export function SmartImage({ src, alt, className, tone = 'dusk', eager }: Props) {
  const [failed, setFailed] = useState(false)
  useEffect(() => setFailed(false), [src])

  if (failed) {
    return (
      <div role="img" aria-label={alt} className={cn('relative overflow-hidden', className)}>
        <ScenePlaceholder tone={tone} />
        {import.meta.env.DEV && (
          <span className="absolute bottom-2 start-2 rounded-md bg-black/35 px-2 py-0.5 text-[10px] font-mono text-white/85" dir="ltr">
            {src.split('/').pop()}
          </span>
        )}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={cn('object-cover', className)}
    />
  )
}

const PALETTES: Record<SceneTone, { sky: [string, string]; orb: string; dunes: [string, string, string] }> = {
  night: { sky: ['#0F1F2E', '#27405A'], orb: '#F3E6C4', dunes: ['#2A3B4A', '#1D2C39', '#121E29'] },
  dusk: { sky: ['#E7B77A', '#F4DDB6'], orb: '#FFF3DA', dunes: ['#D4A56B', '#B9834E', '#8E5E36'] },
  day: { sky: ['#CFE3DF', '#F5EEE1'], orb: '#FFFFFF', dunes: ['#E2CDA5', '#C9AE7C', '#A88A58'] },
}

function ScenePlaceholder({ tone }: { tone: SceneTone }) {
  const p = PALETTES[tone]
  const id = `sky-${tone}`
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.sky[0]} />
          <stop offset="1" stopColor={p.sky[1]} />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill={`url(#${id})`} />
      {tone === 'night' &&
        [
          [40, 30], [90, 60], [150, 25], [220, 50], [280, 20], [340, 45], [370, 80], [60, 95], [190, 85],
        ].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.3" fill="#fff" opacity="0.8" />)}
      <circle cx="300" cy="70" r={tone === 'night' ? 16 : 26} fill={p.orb} opacity="0.9" />
      <path d="M0 170 Q 80 130 170 160 T 400 150 V250 H0Z" fill={p.dunes[0]} />
      <path d="M0 200 Q 110 160 220 195 T 400 185 V250 H0Z" fill={p.dunes[1]} />
      <path d="M0 230 Q 140 200 260 225 T 400 220 V250 H0Z" fill={p.dunes[2]} />
    </svg>
  )
}
