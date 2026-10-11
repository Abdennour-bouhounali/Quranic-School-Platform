import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import type { Verse } from '@/data'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Props = { verses: Verse[] }

// Rebuild each verse word by word from scrambled chips. A wrong tap only shakes the chip.
export function VerseBuilder({ verses }: Props) {
  const { t, tx } = useI18n()
  const [vIndex, setVIndex] = useState(0)
  const [built, setBuilt] = useState<number[]>([]) // chip ids already placed, in order
  const [shake, setShake] = useState<number | null>(null)
  const [completed, setCompleted] = useState<string[]>([])

  const verse = verses[vIndex]
  const finished = built.length === verse.words.length
  const allDone = completed.length === verses.length

  const chips = useMemo(() => shuffle(verse.words.map((w, id) => ({ id, w }))), [verse])

  const tap = (id: number, w: string) => {
    if (finished) return
    if (w === verse.words[built.length]) {
      const nextBuilt = [...built, id]
      setBuilt(nextBuilt)
      setShake(null)
      if (nextBuilt.length === verse.words.length) setCompleted((c) => (c.includes(verse.id) ? c : [...c, verse.id]))
    } else {
      setShake(id)
      window.setTimeout(() => setShake((s) => (s === id ? null : s)), 400)
    }
  }

  const next = () => {
    setVIndex((i) => i + 1)
    setBuilt([])
  }

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <ul className="flex flex-wrap gap-2" aria-label="verses">
        {verses.map((v, i) => (
          <li key={v.id} className={cn('chip', i === vIndex && 'bg-emerald-deep !text-cream-soft', completed.includes(v.id) && i !== vIndex && 'bg-gold-soft/40 !text-ink')}>
            {completed.includes(v.id) && <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />}
            <span className="num">{i + 1}</span> {tx(v.ref)}
          </li>
        ))}
      </ul>

      <p className="rounded-2xl bg-cream px-4 py-3 text-ink-soft">{tx(verse.context)}</p>

      <div dir="rtl" lang="ar" className="min-h-24 rounded-3xl border-2 border-dashed border-gold bg-white p-5 font-arabic text-2xl leading-loose md:text-3xl">
        {built.map((id, i) => (
          <motion.span key={id} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="me-2 inline-block text-emerald-deep">
            {verse.words[i]}
          </motion.span>
        ))}
      </div>

      {!finished && (
        <>
          <p className="text-sm text-ink-muted">{t('lesson.buildVerse')}</p>
          <ul dir="rtl" lang="ar" className="flex flex-wrap gap-2.5">
            {chips.map(({ id, w }) => {
              const used = built.includes(id)
              return (
                <li key={id}>
                  <button
                    type="button"
                    disabled={used}
                    onClick={() => tap(id, w)}
                    className={cn(
                      'min-h-12 rounded-2xl border-2 bg-white px-4 py-2 font-arabic text-xl shadow-soft transition-all',
                      used ? 'border-transparent opacity-25' : 'border-cream-deep hover:-translate-y-0.5 hover:border-gold',
                      shake === id && 'animate-[shake_0.35s]',
                    )}
                  >
                    {w}
                  </button>
                </li>
              )
            })}
          </ul>
          {shake !== null && <p className="text-sm font-medium text-clay">{t('lesson.notNext')}</p>}
        </>
      )}

      {finished && (
        <div className="space-y-3">
          <FeedbackMessage status="correct" title={allDone ? t('lesson.allVerses') : t('lesson.verseDone')}>
            {tx(verse.meaning)}
          </FeedbackMessage>
          {vIndex + 1 < verses.length && (
            <button type="button" onClick={next} className="btn-primary">
              {t('lesson.nextVerse')}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
