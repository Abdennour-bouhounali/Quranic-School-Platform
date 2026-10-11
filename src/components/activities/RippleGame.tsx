import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Play } from 'lucide-react'
import type { RippleClue, RippleRing } from '@/data'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

const CENTER = 160
const RADII = [52, 104, 154] // centre → outermost (supports up to 3 rings)
const FILLS = ['#D8B26A', '#5B8F78', '#DCE9E1']
const STROKES = ['#B88A3E', '#2F6E56', '#5B8F78']

type Props = { rings: RippleRing[]; clues: RippleClue[] }

// The call spreads like a ripple: explore each ring, then sort the clues into the ring they belong to.
export function RippleGame({ rings, clues }: Props) {
  const { t, tx } = useI18n()
  const queue = useMemo(() => shuffle(clues), [clues])
  const [playing, setPlaying] = useState(false)
  const [placed, setPlaced] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [pulse, setPulse] = useState<{ ringId: string; key: number } | null>(null)
  const [wrong, setWrong] = useState<{ key: number; text: string } | null>(null)

  const current = playing ? queue.find((c) => !placed.includes(c.id)) : undefined
  const allDone = playing && !current
  const selectedRing = rings.find((r) => r.id === selected)

  const tap = (ringId: string) => {
    if (!current) {
      setSelected(ringId)
      return
    }
    if (current.ringId === ringId) {
      setPlaced((p) => [...p, current.id])
      setPulse({ ringId, key: Date.now() })
      setSelected(ringId)
      setWrong(null)
    } else {
      setWrong({ key: Date.now(), text: tx(current.hint) })
    }
  }

  const ringIndex = (id: string) => rings.findIndex((r) => r.id === id)

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,26rem)_1fr] md:items-start">
      <div className="mx-auto w-full max-w-sm">
        <svg viewBox="0 0 320 320" className="w-full" role="group" aria-label={rings.map((r) => tx(r.label)).join(' · ')}>
          {[...rings].reverse().map((r) => {
            const i = ringIndex(r.id)
            const count = clues.filter((c) => c.ringId === r.id && placed.includes(c.id)).length
            const total = clues.filter((c) => c.ringId === r.id).length
            return (
              <g key={r.id}>
                <motion.circle
                  cx={CENTER}
                  cy={CENTER}
                  r={RADII[i]}
                  fill={FILLS[i]}
                  stroke={selected === r.id ? '#1F4E3D' : STROKES[i]}
                  strokeWidth={selected === r.id ? 4 : 2}
                  initial={false}
                  animate={{ fillOpacity: playing ? 0.35 + (total ? (count / total) * 0.65 : 0) : 0.85 }}
                  className="cursor-pointer"
                  onClick={() => tap(r.id)}
                />
                <text x={CENTER} y={CENTER - RADII[i] + 22} textAnchor="middle" className="pointer-events-none fill-ink text-[13px] font-bold">
                  {playing ? `${count}/${total}` : String(i + 1)}
                </text>
              </g>
            )
          })}
          {pulse && (
            <motion.circle
              key={pulse.key}
              cx={CENTER}
              cy={CENTER}
              r={RADII[ringIndex(pulse.ringId)]}
              fill="none"
              stroke="#D8B26A"
              strokeWidth={5}
              initial={{ r: RADII[ringIndex(pulse.ringId)], opacity: 0.9 }}
              animate={{ r: RADII[ringIndex(pulse.ringId)] + 40, opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="pointer-events-none"
            />
          )}
          <text x={CENTER} y={CENTER + 8} textAnchor="middle" className="pointer-events-none fill-ink text-2xl font-bold">
            ✦
          </text>
        </svg>
      </div>

      <div className="space-y-4">
        <ul className="grid gap-2">
          {rings.map((r, i) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => tap(r.id)}
                aria-pressed={selected === r.id}
                className={cn(
                  'flex w-full items-center gap-3 rounded-2xl border-2 bg-white px-4 py-3 text-start transition-colors',
                  selected === r.id ? 'border-emerald-deep' : 'border-cream-deep hover:border-gold',
                )}
              >
                <span className="num flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-ink" style={{ background: FILLS[i] }}>
                  {i + 1}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">{tx(r.label)}</span>
                  <span className="block text-xs text-ink-muted">{tx(r.period)}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        {!playing && (
          <>
            <p className="text-sm text-ink-muted">{t('lesson.tapRingExplore')}</p>
            {selectedRing && (
              <motion.div key={selectedRing.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="card !p-4 text-ink-soft">
                {tx(selectedRing.summary)}
              </motion.div>
            )}
            <button type="button" onClick={() => setPlaying(true)} className="btn-primary">
              <Play className="h-4 w-4 rtl:rotate-180" aria-hidden /> {t('lesson.play')}
            </button>
          </>
        )}

        {current && (
          <motion.div key={current.id} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="space-y-3">
            <div className="rounded-2xl border-2 border-gold bg-gold-soft/20 p-4">
              <p className="mb-1 text-xs font-bold tracking-wide text-gold">
                {t('lesson.clue')} <span className="num">{placed.length + 1}/{clues.length}</span>
              </p>
              <p className="text-lg font-semibold">{tx(current.text)}</p>
            </div>
            <p className="text-sm text-ink-muted">{t('lesson.tapRing')}</p>
            {wrong && (
              <FeedbackMessage key={wrong.key} status="incorrect" title={t('lesson.almost')}>
                {wrong.text}
              </FeedbackMessage>
            )}
          </motion.div>
        )}

        {playing && selectedRing && (
          <ul className="space-y-2">
            {clues
              .filter((c) => c.ringId === selectedRing.id && placed.includes(c.id))
              .map((c) => (
                <motion.li key={c.id} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} className="flex gap-2 rounded-xl bg-emerald-pale px-3 py-2 text-sm font-medium text-emerald-deep">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> {tx(c.text)}
                </motion.li>
              ))}
          </ul>
        )}

        {allDone && <FeedbackMessage status="correct" title={t('lesson.ringsDone')} />}
      </div>
    </div>
  )
}
