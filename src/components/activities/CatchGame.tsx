import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Flame, Play } from 'lucide-react'
import type { CatchItem } from '@/data'
import type { LocalizedText } from '@/i18n'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Props = { goal: LocalizedText; items: CatchItem[] }
type Floater = { key: number; item: CatchItem; lane: number; born: number }

const LANES = ['27%', '73%']
const FLOAT_SECONDS = 11
const SPAWN_MS = 1300
const LANE_COOLDOWN_MS = 4200

// Lanterns drift up a night sky. Tap the ones that fit the goal; a right lantern that
// slips away simply comes back later, so there is no way to lose.
// With reduced motion the lanterns stand still in a grid.
export function CatchGame({ goal, items }: Props) {
  const { t, tx } = useI18n()
  const still = useReducedMotion()
  const goodTotal = items.filter((i) => i.good).length

  const [playing, setPlaying] = useState(false)
  const [floaters, setFloaters] = useState<Floater[]>([])
  const [caught, setCaught] = useState<CatchItem[]>([])
  const [dismissed, setDismissed] = useState<string[]>([])
  const [feedback, setFeedback] = useState<{ key: number; ok: boolean; text: string } | null>(null)
  const queue = useRef<CatchItem[]>([])
  const live = useRef<Floater[]>([])
  const seq = useRef(0)

  const done = caught.length === goodTotal

  const sync = () => setFloaters([...live.current])

  const start = () => {
    queue.current = shuffle(items)
    live.current = []
    setCaught([])
    setDismissed([])
    setFeedback(null)
    sync()
    setPlaying(true)
  }

  useEffect(() => {
    if (!playing || done || still) return
    const spawn = () => {
      const now = Date.now()
      const free = LANES.map((_, i) => i).filter((i) => !live.current.some((f) => f.lane === i && now - f.born < LANE_COOLDOWN_MS))
      const item = free.length ? queue.current.shift() : undefined
      if (!item) return
      live.current.push({ key: seq.current++, item, lane: free[Math.floor(Math.random() * free.length)], born: now })
      sync()
    }
    spawn()
    const id = window.setInterval(spawn, SPAWN_MS)
    return () => window.clearInterval(id)
  }, [playing, done, still])

  const remove = (key: number) => {
    live.current = live.current.filter((f) => f.key !== key)
    sync()
  }

  // A lantern left the sky untouched: a right one returns later, a wrong one is gone for good.
  const drifted = useCallback((f: Floater) => {
    if (!live.current.some((x) => x.key === f.key)) return
    if (f.item.good) queue.current.push(f.item)
    remove(f.key)
  }, [])

  const tap = (item: CatchItem, key?: number) => {
    setFeedback({ key: Date.now(), ok: item.good, text: tx(item.explanation) })
    if (item.good) setCaught((c) => (c.some((x) => x.id === item.id) ? c : [...c, item]))
    else setDismissed((d) => [...d, item.id])
    if (key !== undefined) remove(key)
  }

  const lantern = 'flex min-h-12 w-full items-center gap-2 rounded-2xl border border-gold-soft/70 bg-[#13283A]/95 px-3 py-2.5 text-start text-sm font-semibold leading-snug text-cream-soft shadow-[0_0_22px_rgba(216,178,106,0.45)]'

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <p className="rounded-2xl bg-emerald-pale px-4 py-3 text-center text-base font-bold text-emerald-deep md:text-lg">{tx(goal)}</p>

      <div className="relative h-[26rem] overflow-hidden rounded-3xl bg-night-makkah shadow-card">
        {[12, 31, 47, 66, 83, 92, 22, 58].map((x, i) => (
          <span key={x} style={{ left: `${x}%`, top: `${((i * 37) % 80) + 6}%` }} className="absolute h-1 w-1 animate-twinkle rounded-full bg-white/80" aria-hidden />
        ))}

        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button type="button" onClick={start} className="btn bg-gold px-8 py-4 text-base text-ink hover:bg-gold-soft">
              <Play className="h-5 w-5 rtl:rotate-180" aria-hidden /> {t('lesson.play')}
            </button>
          </div>
        )}

        {playing && done && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <Flame className="h-12 w-12 text-gold-soft" aria-hidden />
            <p className="text-xl font-bold text-cream-soft">{t('lesson.catchDone')}</p>
            <button type="button" onClick={start} className="btn border border-white/30 bg-white/10 text-cream-soft hover:bg-white/20">
              {t('lesson.replay')}
            </button>
          </motion.div>
        )}

        {playing && !done && still && (
          <ul className="absolute inset-0 grid grid-cols-2 content-center gap-2 overflow-y-auto p-3">
            {items
              .filter((i) => !caught.some((c) => c.id === i.id) && !dismissed.includes(i.id))
              .map((i) => (
                <li key={i.id}>
                  <button type="button" onClick={() => tap(i)} className={lantern}>
                    {tx(i.label)}
                  </button>
                </li>
              ))}
          </ul>
        )}

        {playing &&
          !done &&
          !still &&
          floaters.map((f) => (
            <motion.div
              key={f.key}
              className="absolute w-[46%] -translate-x-1/2"
              style={{ left: LANES[f.lane] }}
              initial={{ top: '100%' }}
              animate={{ top: '-30%' }}
              transition={{ duration: FLOAT_SECONDS, ease: 'linear' }}
              onAnimationComplete={() => drifted(f)}
            >
              <button type="button" onClick={() => tap(f.item, f.key)} className={cn(lantern, 'hover:border-white')}>
                <Flame className="h-4 w-4 shrink-0 text-gold-soft" aria-hidden />
                {tx(f.item.label)}
              </button>
            </motion.div>
          ))}
      </div>

      <p className="text-sm font-semibold text-ink-muted">
        {t('lesson.catchCaught')}: <span className="num text-emerald-deep">{caught.length} / {goodTotal}</span>
      </p>
      {caught.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {caught.map((c) => (
            <li key={c.id} className="chip">
              {tx(c.label)}
            </li>
          ))}
        </ul>
      )}
      {feedback && (
        <FeedbackMessage key={feedback.key} status={feedback.ok ? 'correct' : 'incorrect'} title={feedback.ok ? t('lesson.catchGood') : t('lesson.almost')}>
          {feedback.text}
        </FeedbackMessage>
      )}
    </div>
  )
}
