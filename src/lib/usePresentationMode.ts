import { useCallback, useEffect, useState } from 'react'

const ROOT_CLASS = 'presenting'

// Classroom/projector mode: browser fullscreen + larger type (via a root class).
// Where the Fullscreen API is unavailable (iPhone Safari), the layout still switches.
export function usePresentationMode() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle(ROOT_CLASS, active)
    return () => document.documentElement.classList.remove(ROOT_CLASS)
  }, [active])

  // Leaving fullscreen with Esc or the browser UI also leaves presentation mode.
  useEffect(() => {
    const onChange = () => {
      if (!document.fullscreenElement) setActive(false)
    }
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  const enter = useCallback(async () => {
    setActive(true)
    try {
      await document.documentElement.requestFullscreen?.()
    } catch {
      /* fullscreen refused or unsupported: keep the presentation layout anyway */
    }
  }, [])

  const exit = useCallback(async () => {
    setActive(false)
    if (document.fullscreenElement) await document.exitFullscreen().catch(() => {})
  }, [])

  return { active, enter, exit, toggle: active ? exit : enter }
}
