import { useCallback, useEffect, useState } from 'react'
import { readStorage, writeStorage } from './utils'

// Local-only progress. When accounts exist, replace storage calls with API calls;
// the hook's shape can stay the same.
export type LessonProgress = {
  currentIndex: number
  visited: string[]
  completed: boolean
}

const EMPTY: LessonProgress = { currentIndex: 0, visited: [], completed: false }

const storageKey = (lessonId: string) => `qs.progress.${lessonId}`

export function readLessonProgress(lessonId: string): LessonProgress {
  return readStorage(storageKey(lessonId), EMPTY)
}

export function useLessonProgress(lessonId: string, sectionIds: string[]) {
  const [progress, setProgress] = useState<LessonProgress>(() => {
    const saved = readLessonProgress(lessonId)
    const maxIndex = sectionIds.length - 1
    return { ...saved, currentIndex: Math.min(Math.max(saved.currentIndex, 0), maxIndex) }
  })

  useEffect(() => writeStorage(storageKey(lessonId), progress), [lessonId, progress])

  const goTo = useCallback(
    (index: number) => {
      setProgress((p) => {
        const clamped = Math.min(Math.max(index, 0), sectionIds.length - 1)
        const id = sectionIds[clamped]
        return {
          currentIndex: clamped,
          visited: p.visited.includes(id) ? p.visited : [...p.visited, id],
          completed: p.completed || clamped === sectionIds.length - 1,
        }
      })
    },
    [sectionIds],
  )

  const reset = useCallback(() => setProgress({ ...EMPTY, visited: [sectionIds[0]] }), [sectionIds])

  return { progress, goTo, reset }
}
