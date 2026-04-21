import { useContext } from 'react'
import { StoriesContext } from './storiesContextValue'

export function useStories() {
  const ctx = useContext(StoriesContext)
  if (!ctx) {
    throw new Error('useStories must be used inside <StoriesProvider>')
  }
  return ctx
}
