import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Flashlight, Sparkles } from 'lucide-react'
import type { Hotspot } from '@/data'
import type { LocalizedText } from '@/i18n'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'
import { SmartImage } from '@/components/ui/SmartImage'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Props = { image: string; imageAlt: string; secrets: Hotspot[]; ending: LocalizedText }

// How close (in % of the picture) the light must come to a secret to reveal it.
const REACH = 8
const KEY_STEP = 4

// The picture sleeps in the dark. The learner sweeps a circle of light across it with a
// finger, the mouse or the arrow keys; a secret lights up when the beam passes over it.
// "Show me one" walks the light to the next secret, so nobody gets stuck.
export function LanternGame({ image, imageAlt, secrets, ending }: Props) {
  const { t, tx } = useI18n()
  const stage = useRef<HTMLDivElement>(null)
  const [light, setLight] = useState({ x: 50, y: 50 })
  const [found, setFound] = useState<string[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  const done = found.length === secrets.length
  const active = secrets.find((s) => s.id === activeId)

  const shine = (x: number, y: number) => {
    const pos = { x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) }
    setLight(pos)
    const hit = secrets.find((s) => !found.includes(s.id) && Math.hypot(s.x - pos.x, s.y - pos.y) <= REACH)
    if (hit) {
      setFound((f) => [...f, hit.id])
      setActiveId(hit.id)
    }
  }

  const onPointer = (e: PointerEvent<HTMLDivElement>) => {
    const box = stage.current?.getBoundingClientRect()
    if (!box) return
    shine(((e.clientX - box.left) / box.width) * 100, ((e.clientY - box.top) / box.height) * 100)
  }

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const move: Record<string, [number, number]> = { ArrowLeft: [-KEY_STEP, 0], ArrowRight: [KEY_STEP, 0], ArrowUp: [0, -KEY_STEP], ArrowDown: [0, KEY_STEP] }
    const step = move[e.key]
    if (!step) return
    e.preventDefault()
    shine(light.x + step[0], light.y + step[1])
  }

  const showOne = () => {
    const next = secrets.find((s) => !found.includes(s.id))
    if (next) shine(next.x, next.y)
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,34rem)_1fr] lg:items-start">
      <div
        ref={stage}
        role="application"
        tabIndex={0}
        aria-label={`${imageAlt} — ${t('lesson.lanternHint')}`}
        onPointerMove={onPointer}
        onPointerDown={onPointer}
        onKeyDown={onKey}
        className="relative mx-auto w-full max-w-[34rem] cursor-crosshair touch-none select-none overflow-hidden rounded-3xl shadow-card outline-none focus-visible:ring-4 focus-visible:ring-gold"
      >
        {/* Uncropped square so the secrets' percentages stay aligned with the artwork. */}
        <SmartImage src={image} alt={imageAlt} tone="night" className="pointer-events-none aspect-square w-full" />
        <div
          aria-hidden
          className={cn('pointer-events-none absolute inset-0 transition-opacity duration-[1500ms]', done ? 'opacity-0' : 'opacity-100')}
          // Physical coordinates: the artwork does not mirror in RTL, so neither does the beam.
          style={{ background: `radial-gradient(circle at ${light.x}% ${light.y}%, rgba(5,11,20,0) 0, rgba(5,11,20,0) 11%, rgba(5,11,20,0.55) 19%, rgba(5,11,20,0.97) 30%)` }}
        />
        {secrets
          .filter((s) => found.includes(s.id))
          .map((s) => (
            <motion.button
              key={s.id}
              type="button"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 12 }}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setActiveId(s.id)}
              aria-label={tx(s.label)}
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
              className="absolute -ms-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gold text-ink shadow-[0_0_24px_rgba(216,178,106,0.9)] rtl:-me-5 rtl:ms-0"
            >
              <Sparkles className="h-4 w-4" aria-hidden />
            </motion.button>
          ))}
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-ink-muted">
            {t('lesson.discovered')}: <span className="num text-emerald-deep">{found.length} / {secrets.length}</span>
          </p>
          {!done && (
            <button type="button" onClick={showOne} className="btn-secondary">
              <Flashlight className="h-4 w-4" aria-hidden /> {t('lesson.lanternHelp')}
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {active ? (
            <motion.article key={active.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="card">
              <h3 className="text-xl font-semibold">{tx(active.label)}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{tx(active.description)}</p>
            </motion.article>
          ) : (
            <motion.p key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card text-ink-soft">
              {t('lesson.lanternHint')}
            </motion.p>
          )}
        </AnimatePresence>

        {found.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {secrets
              .filter((s) => found.includes(s.id))
              .map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(s.id)}
                    className={cn('min-h-11 rounded-full border px-4 text-sm font-medium', s.id === activeId ? 'border-emerald-deep bg-emerald-deep text-cream-soft' : 'border-emerald-soft/40 bg-emerald-pale text-emerald-deep')}
                  >
                    {tx(s.label)}
                  </button>
                </li>
              ))}
          </ul>
        )}

        <FeedbackMessage status="correct" show={done} title={t('lesson.lanternDone')}>
          {tx(ending)}
        </FeedbackMessage>
      </div>
    </div>
  )
}
