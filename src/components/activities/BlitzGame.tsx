import { useEffect, useRef, useState } from 'react'
import { Flame, RotateCcw, Zap } from 'lucide-react'
import type { BlitzStatement } from '@/data'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

const TICK_MS = 100
const AUTO_NEXT_MS = 1400

type Phase = 'intro' | 'play' | 'feedback' | 'done'
type Outcome = 'correct' | 'wrong' | 'timeout'

type Props = { secondsPerCard: number; statements: BlitzStatement[] }

// Timed true/false rounds with a streak. Running out of time is gentle: it reveals the
// answer and the game moves on.
export function BlitzGame({ secondsPerCard, statements }: Props) {
  const { t, tx } = useI18n()
  const [deck, setDeck] = useState(() => shuffle(statements))
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('intro')
  const [outcome, setOutcome] = useState<Outcome>('correct')
  const [msLeft, setMsLeft] = useState(secondsPerCard * 1000)
  const [streak, setStreak] = useState(0)
  const [best, setBest] = useState(0)
  const [score, setScore] = useState(0)
  const timer = useRef<number>()

  const card = deck[index]

  const resolve = (o: Outcome) => {
    setOutcome(o)
    setPhase('feedback')
    if (o === 'correct') {
      setScore((s) => s + 1)
      setStreak((s) => {
        setBest((b) => Math.max(b, s + 1))
        return s + 1
      })
    } else {
      setStreak(0)
    }
  }

  useEffect(() => {
    if (phase !== 'play') return
    setMsLeft(secondsPerCard * 1000)
    timer.current = window.setInterval(() => {
      setMsLeft((m) => {
        if (m <= TICK_MS) {
          window.clearInterval(timer.current)
          resolve('timeout')
          return 0
        }
        return m - TICK_MS
      })
    }, TICK_MS)
    return () => window.clearInterval(timer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, index, secondsPerCard])

  const advance = () => {
    if (index + 1 >= deck.length) setPhase('done')
    else {
      setIndex((i) => i + 1)
      setPhase('play')
    }
  }

  useEffect(() => {
    if (phase !== 'feedback' || outcome !== 'correct') return
    const id = window.setTimeout(advance, AUTO_NEXT_MS)
    return () => window.clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, outcome, index])

  const answer = (v: boolean) => {
    if (phase !== 'play') return
    window.clearInterval(timer.current)
    resolve(v === card.answer ? 'correct' : 'wrong')
  }

  const restart = () => {
    setDeck(shuffle(statements))
    setIndex(0)
    setScore(0)
    setStreak(0)
    setBest(0)
    setPhase('play')
  }

  if (phase === 'intro') {
    return (
      <div className="mx-auto max-w-md text-center">
        <button type="button" onClick={() => setPhase('play')} className="btn-primary !px-8 !py-4 text-base">
          <Zap className="h-5 w-5" aria-hidden /> {t('lesson.memoryStart')}
        </button>
      </div>
    )
  }

  if (phase === 'done') {
    return (
      <div className="mx-auto max-w-md space-y-4 text-center">
        <FeedbackMessage status="correct" title={t('lesson.blitzDone')}>
          {t('lesson.score')}: <span className="num font-bold">{score} / {deck.length}</span> · {t('lesson.best')} <Flame className="inline h-4 w-4 text-clay" aria-hidden />
          <span className="num font-bold"> {best}</span>
        </FeedbackMessage>
        <button type="button" onClick={restart} className="btn-secondary">
          <RotateCcw className="h-4 w-4" aria-hidden /> {t('lesson.tryAgain')}
        </button>
      </div>
    )
  }

  const pct = (msLeft / (secondsPerCard * 1000)) * 100

  return (
    <div className="mx-auto max-w-xl space-y-4">
      <div className="flex items-center justify-between text-sm font-semibold">
        <span className="chip">
          <span className="num">{index + 1}/{deck.length}</span>
        </span>
        <span className="chip !bg-[#FBEDE4] !text-[#7A3A25]">
          <Flame className="h-4 w-4" aria-hidden /> {t('lesson.streak')} <span className="num">{streak}</span>
        </span>
      </div>

      <div className="h-2.5 overflow-hidden rounded-full bg-cream-deep" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pct)}>
        <div className={cn('h-full rounded-full transition-[width] duration-100 ease-linear', pct > 40 ? 'bg-emerald-leaf' : 'bg-clay')} style={{ width: `${phase === 'play' ? pct : 0}%` }} />
      </div>

      <div className="card flex min-h-40 items-center justify-center text-center">
        <p className="text-xl font-semibold leading-snug md:text-2xl">{tx(card.text)}</p>
      </div>

      {phase === 'play' ? (
        <div className="grid grid-cols-2 gap-3">
          <button type="button" onClick={() => answer(true)} className="btn-primary !py-5 text-lg">
            {t('lesson.true')}
          </button>
          <button type="button" onClick={() => answer(false)} className="btn-secondary !py-5 text-lg">
            {t('lesson.false')}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <FeedbackMessage
            status={outcome === 'correct' ? 'correct' : 'incorrect'}
            title={outcome === 'correct' ? t('lesson.correct') : outcome === 'timeout' ? t('lesson.timeUp') : t('lesson.almost')}
          >
            {tx(card.explanation)}
          </FeedbackMessage>
          {outcome !== 'correct' && (
            <button type="button" onClick={advance} className="btn-primary">
              {index + 1 >= deck.length ? t('lesson.seeScore') : t('lesson.nextQuestion')}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
