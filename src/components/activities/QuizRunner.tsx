import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { RotateCcw, Trophy } from 'lucide-react'
import type { QuizQuestion } from '@/data'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'
import { MultipleChoice } from './MultipleChoice'
import { TrueFalse } from './TrueFalse'
import { SortingGame } from './SortingGame'
import { MatchingGame } from './MatchingGame'
import { VisualChoice } from './VisualChoice'

type Props = { questions: QuizQuestion[] }

// One question at a time; each type renders its own interaction.
// Score counts first-try answers, but every answer is explained.
export function QuizRunner({ questions }: Props) {
  const { t } = useI18n()
  const [index, setIndex] = useState(0)
  const [results, setResults] = useState<Record<string, boolean>>({})
  const [attempt, setAttempt] = useState(0)

  const finished = index >= questions.length
  const q = questions[index]
  const answered = q ? q.id in results : false
  const score = Object.values(results).filter(Boolean).length

  const record = (correct: boolean) => setResults((r) => (q.id in r ? r : { ...r, [q.id]: correct }))

  const restart = () => {
    setIndex(0)
    setResults({})
    setAttempt((a) => a + 1)
  }

  if (finished) {
    const great = score >= questions.length - 1
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="card text-center">
        <Trophy className="mx-auto h-12 w-12 text-gold" aria-hidden />
        <p className="mt-3 text-sm font-semibold text-ink-muted">{t('lesson.score')}</p>
        <p className="num mt-1 text-5xl font-bold text-emerald-deep">
          {score} / {questions.length}
        </p>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">{great ? t('lesson.scoreGreat') : t('lesson.scoreGood')}</p>
        <button type="button" onClick={restart} className="btn-secondary mt-5">
          <RotateCcw className="h-4 w-4" aria-hidden /> {t('lesson.retryQuiz')}
        </button>
      </motion.div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2" aria-hidden>
        {questions.map((qq, i) => (
          <span
            key={qq.id}
            className={cn(
              'h-2 flex-1 rounded-full transition-colors',
              qq.id in results ? (results[qq.id] ? 'bg-emerald-leaf' : 'bg-gold-soft') : i === index ? 'bg-sand-deep' : 'bg-cream-deep',
            )}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${attempt}-${q.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="card space-y-5"
        >
          <p className="text-sm font-semibold text-gold">
            {t('lesson.question')} <span className="num">{index + 1} / {questions.length}</span>
          </p>
          <QuestionBody question={q} onAnswer={record} />
        </motion.div>
      </AnimatePresence>

      {answered && (
        <button type="button" onClick={() => setIndex((i) => i + 1)} className="btn-primary">
          {index === questions.length - 1 ? t('lesson.seeScore') : t('lesson.nextQuestion')}
        </button>
      )}
    </div>
  )
}

function QuestionBody({ question: q, onAnswer }: { question: QuizQuestion; onAnswer: (correct: boolean) => void }) {
  const { tx } = useI18n()
  const heading = <h3 className="text-xl font-semibold leading-snug md:text-2xl">{tx(q.question)}</h3>
  const explanation = tx(q.explanation)

  switch (q.type) {
    case 'mcq':
      return (
        <>
          {heading}
          <MultipleChoice
            options={q.options.map((o) => ({ id: o.id, label: tx(o.label) }))}
            correctId={q.correctId}
            explanation={explanation}
            onAnswer={onAnswer}
          />
        </>
      )
    case 'truefalse':
      return (
        <>
          {heading}
          <TrueFalse answer={q.answer} explanation={explanation} onAnswer={onAnswer} />
        </>
      )
    case 'ordering':
      return (
        <>
          {heading}
          <SortingGame items={q.items} explanation={explanation} onChecked={onAnswer} />
        </>
      )
    case 'matching':
      return (
        <>
          {heading}
          <MatchingGame pairs={q.pairs} explanation={explanation} onAnswer={onAnswer} />
        </>
      )
    case 'visual':
      return (
        <>
          {heading}
          <VisualChoice
            options={q.options.map((o) => ({ id: o.id, image: o.image, label: tx(o.label) }))}
            correctId={q.correctId}
            explanation={explanation}
            onAnswer={onAnswer}
          />
        </>
      )
  }
}
