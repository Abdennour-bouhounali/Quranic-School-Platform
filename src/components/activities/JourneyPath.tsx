import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Flag, MapPin } from 'lucide-react'
import type { JourneyStop } from '@/data'
import type { LocalizedText } from '@/i18n'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { SmartImage } from '@/components/ui/SmartImage'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Props = { stops: JourneyStop[]; arrival: LocalizedText }

// A winding route: each stop asks one question. The traveller marker only moves on when
// the stop is understood; a wrong pick explains and lets the learner try again.
export function JourneyPath({ stops, arrival }: Props) {
  const { t, tx, dir } = useI18n()
  const [current, setCurrent] = useState(0)
  const [solved, setSolved] = useState(false)
  const [wrong, setWrong] = useState<string[]>([])
  const [hint, setHint] = useState<{ key: number; text: string } | null>(null)

  const stop = stops[current]
  const finished = current >= stops.length
  const options = useMemo(() => (stop ? shuffle(stop.options) : []), [stop])

  const pick = (id: string) => {
    const o = stop.options.find((x) => x.id === id)!
    if (o.correct) {
      setSolved(true)
      setHint(null)
    } else {
      setWrong((w) => [...w, id])
      setHint({ key: Date.now(), text: o.hint ? tx(o.hint) : '' })
    }
  }

  const advance = () => {
    setCurrent((c) => c + 1)
    setSolved(false)
    setWrong([])
    setHint(null)
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <ol className="relative flex items-start justify-between gap-1" aria-label={t('lesson.journeyRoute')}>
        <span className="absolute inset-x-5 top-5 -z-0 h-1 rounded-full bg-cream-deep" aria-hidden />
        <motion.span
          className="absolute start-5 top-5 h-1 rounded-full bg-gold"
          initial={false}
          animate={{ width: `calc((100% - 2.5rem) * ${Math.min(current, stops.length - 1) / Math.max(stops.length - 1, 1)})` }}
          transition={{ duration: 0.6 }}
          aria-hidden
        />
        {stops.map((s, i) => {
          const reached = i < current || (i === current && solved) || finished
          return (
            <li key={s.id} className="relative z-10 flex w-16 flex-col items-center gap-1 text-center">
              <span
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors',
                  reached ? 'border-gold bg-gold text-ink' : i === current ? 'border-emerald-deep bg-white text-emerald-deep' : 'border-cream-deep bg-cream text-ink-muted',
                )}
              >
                {i === stops.length - 1 ? <Flag className="h-4 w-4" aria-hidden /> : i === current ? <MapPin className="h-4 w-4" aria-hidden /> : <span className="num">{i + 1}</span>}
              </span>
              <span className={cn('text-[11px] font-semibold leading-tight', i === current ? 'text-emerald-deep' : 'text-ink-muted')}>{tx(s.name)}</span>
            </li>
          )
        })}
      </ol>

      <AnimatePresence mode="wait">
        {!finished ? (
          <motion.section
            key={stop.id}
            initial={{ opacity: 0, x: dir === 'rtl' ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="card space-y-4 overflow-hidden"
          >
            {stop.image && <SmartImage src={stop.image} alt="" tone="dusk" className="-mx-6 -mt-6 aspect-[16/8]" />}
            <h3 className="pt-6 text-lg font-semibold text-emerald-warm">{tx(stop.name)}</h3>
            <p className="text-base font-semibold leading-relaxed">{tx(stop.question)}</p>
            <ul className="grid gap-2">
              {options.map((o) => {
                const isRight = solved && o.correct
                return (
                  <li key={o.id}>
                    <button
                      type="button"
                      disabled={solved}
                      onClick={() => pick(o.id)}
                      className={cn(
                        'w-full rounded-2xl border-2 px-4 py-3 text-start font-medium transition-colors',
                        isRight ? 'border-emerald-deep bg-emerald-pale' : wrong.includes(o.id) ? 'border-clay-soft bg-[#FBEDE4] opacity-70' : 'border-cream-deep bg-white hover:border-gold',
                      )}
                    >
                      {tx(o.label)}
                    </button>
                  </li>
                )
              })}
            </ul>
            {hint && !solved && (
              <FeedbackMessage key={hint.key} status="incorrect" title={t('lesson.almost')}>
                {hint.text}
              </FeedbackMessage>
            )}
            {solved && (
              <div className="space-y-3">
                <FeedbackMessage status="correct" title={t('lesson.journeyArrived')}>
                  {tx(stop.reveal)}
                </FeedbackMessage>
                <button type="button" onClick={advance} className="btn-primary">
                  {current === stops.length - 1 ? t('lesson.journeyFinish') : t('lesson.journeyContinue')}
                  <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
                </button>
              </div>
            )}
          </motion.section>
        ) : (
          <motion.div key="end" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <FeedbackMessage status="correct" title={t('lesson.journeyDone')}>
              {tx(arrival)}
            </FeedbackMessage>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
