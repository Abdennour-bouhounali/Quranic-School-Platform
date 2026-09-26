import { useCallback, useEffect, useState } from 'react'

// Minimal hash router: "#/" → home, "#/lesson/<id>" → lesson.
// Hash-based so reloads and static hosting work without server config.
export type Route = { name: 'home' } | { name: 'lesson'; lessonId: string }

function parse(hash: string): Route {
  const match = hash.match(/^#\/lesson\/([\w-]+)/)
  return match ? { name: 'lesson', lessonId: match[1] } : { name: 'home' }
}

export function useHashRoute() {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash))

  useEffect(() => {
    const onChange = () => {
      setRoute(parse(window.location.hash))
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const navigate = useCallback((to: Route) => {
    window.location.hash = to.name === 'lesson' ? `/lesson/${to.lessonId}` : '/'
  }, [])

  return { route, navigate }
}
