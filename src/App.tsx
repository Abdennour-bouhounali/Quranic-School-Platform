import { MotionConfig } from 'framer-motion'
import { getLesson } from '@/data'
import { useHashRoute } from '@/lib/useHashRoute'
import { HomePage } from '@/pages/HomePage'
import { LessonPage } from '@/pages/LessonPage'

export default function App() {
  const { route, navigate } = useHashRoute()
  const lesson = route.name === 'lesson' ? getLesson(route.lessonId) : undefined

  return (
    // Honors the OS "reduce motion" setting for every Framer Motion animation.
    <MotionConfig reducedMotion="user">
      {lesson ? (
        <LessonPage key={lesson.id} lesson={lesson} onExit={() => navigate({ name: 'home' })} />
      ) : (
        <HomePage onOpenLesson={(lessonId) => navigate({ name: 'lesson', lessonId })} />
      )}
    </MotionConfig>
  )
}
