import { useCallback, useEffect, useMemo, useState } from 'react'
import { StoriesContext, STORIES_STORAGE_KEY } from './storiesContextValue'

export function StoriesProvider({ children }) {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === 'undefined') return false
    try {
      return window.localStorage.getItem(STORIES_STORAGE_KEY) === '1'
    } catch {
      return false
    }
  })
  const [openStoryId, setOpenStoryId] = useState(null)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORIES_STORAGE_KEY, enabled ? '1' : '0')
    } catch {
      // ignore storage failures
    }
  }, [enabled])

  const toggleEnabled = useCallback(() => {
    setEnabled((v) => !v)
  }, [])

  const openStory = useCallback((id) => {
    setOpenStoryId(id)
  }, [])

  const closeStory = useCallback(() => {
    setOpenStoryId(null)
  }, [])

  const value = useMemo(
    () => ({ enabled, toggleEnabled, openStoryId, openStory, closeStory }),
    [enabled, toggleEnabled, openStoryId, openStory, closeStory],
  )

  return <StoriesContext.Provider value={value}>{children}</StoriesContext.Provider>
}
