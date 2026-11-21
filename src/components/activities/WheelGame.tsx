import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Eye, RotateCw } from 'lucide-react'
import type { WheelSegment } from '@/data'
import { useI18n } from '@/i18n'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

const COLORS = ['#1F4E3D', '#B88A3E', '#2F6E56', '#C9AE7C', '#13283A', '#B95A3E']
const R = 96
const C = 100

// Angles are measured clockwise from the top, where the pointer sits.
const point = (deg: number, r: number) => {
  const rad = (deg * Math.PI) / 180
  return [C + r * Math.sin(rad), C - r * Math.cos(rad)] as const
}

// A class game: spin, the wheel stops on a question nobody has had yet, the class
// answers aloud, then the answer is revealed. Nothing is scored.
export function WheelGame({ segments }: { segments: WheelSegment[] }) {
  const { t, tx } = useI18n()
  const still = useReducedMotion()
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [used, setUsed] = useState<string[]>([])
  const [currentId, setCurrentId] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)

  const arc = 360 / segments.length
  const current = segments.find((s) => s.id === currentId)
  const left = segments.filter((s) => !used.includes(s.id))
  const allDone = left.length === 0 && !spinning

  const spin = () => {
    if (spinning || left.length === 0) return
    const target = left[Math.floor(Math.random() * left.length)]
    const centre = (segments.indexOf(target) + 0.5) * arc
    setRotation((r) => r - (r % 360) + 360 * 4 + (360 - centre))
    setSpinning(true)
    setCurrentId(null)
    setRevealed(false)
    window.setTimeout(
      () => {
        setSpinning(false)
        setCurrentId(target.id)
        setUsed((u) => [...u, target.id])
      },
      still ? 50 : 3300,
    )
  }

  const reset = () => {
    setUsed([])
    setCurrentId(null)
    setRevealed(false)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,24rem)_1fr] lg:items-center">
      <div className="relative mx-auto w-full max-w-[24rem]">
        <span className="absolute start-1/2 top-0 z-10 h-0 w-0 -translate-x-1/2 border-x-[12px] border-t-[22px] border-x-transparent border-t-clay drop-shadow rtl:translate-x-1/2" aria-hidden />
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full drop-shadow-xl"
          animate={{ rotate: rotation }}
          transition={{ duration: still ? 0 : 3.2, ease: [0.12, 0.7, 0.1, 1] }}
          aria-hidden
        >
          <circle cx={C} cy={C} r={R + 3} fill="#D8B26A" />
          {segments.map((s, i) => {
            const [x1, y1] = point(i * arc, R)
            const [x2, y2] = point((i + 1) * arc, R)
            const [tx_, ty_] = point((i + 0.5) * arc, R * 0.6)
            const spent = used.includes(s.id) && s.id !== currentId
            return (
              <g key={s.id} opacity={spent ? 0.35 : 1}>
                <path d={`M${C} ${C} L${x1} ${y1} A${R} ${R} 0 0 1 ${x2} ${y2} Z`} fill={COLORS[i % COLORS.length]} stroke="#FBF7EE" strokeWidth="1" />
                <text
                  x={tx_}
                  y={ty_}
                  fill="#FBF7EE"
                  fontSize={segments.length > 6 ? 8 : 9.5}
                  fontWeight="700"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${(i + 0.5) * arc - 90} ${tx_} ${ty_})`}
                >
                  {tx(s.label)}
                </text>
              </g>
            )
          })}
          <circle cx={C} cy={C} r="13" fill="#FBF7EE" stroke="#B88A3E" strokeWidth="3" />
        </motion.svg>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={spin} disabled={spinning || left.length === 0} className="btn bg-gold px-7 py-4 text-base text-ink hover:bg-gold-soft disabled:opacity-50">
            <RotateCw className={spinning ? 'h-5 w-5 animate-spin' : 'h-5 w-5'} aria-hidden /> {t('lesson.wheelSpin')}
          </button>
          <span className="text-sm font-semibold text-ink-muted">
            <span className="num text-emerald-deep">{left.length}</span> {t('lesson.cardsLeft')}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {current && (
            <motion.section key={current.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="card space-y-4">
              <p className="chip">{tx(current.label)}</p>
              <p className="text-lg font-semibold leading-relaxed md:text-xl">{tx(current.question)}</p>
              {revealed ? (
                <FeedbackMessage status="correct" title={t('lesson.estimateAnswer')}>
                  {tx(current.answer)}
                </FeedbackMessage>
              ) : (
                <button type="button" onClick={() => setRevealed(true)} className="btn-primary">
                  <Eye className="h-5 w-5" aria-hidden /> {t('lesson.wheelReveal')}
                </button>
              )}
            </motion.section>
          )}
        </AnimatePresence>

        {allDone && (revealed || !current) && (
          <div className="space-y-3">
            <FeedbackMessage status="correct" title={t('lesson.wheelDone')} />
            <button type="button" onClick={reset} className="btn-secondary">
              {t('lesson.replay')}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
