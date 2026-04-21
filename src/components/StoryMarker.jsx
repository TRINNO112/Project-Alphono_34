import { memo } from 'react'
import { User } from 'lucide-react'
import { useStories } from '../context/useStories'
import { getStoryById } from '../data/humanStories'

function StoryMarkerBase({ storyId, label }) {
  const { openStory } = useStories()

  const story = getStoryById(storyId)
  if (!story) return null

  const displayLabel = label || story.anchorText || story.name

  return (
    <button
      type="button"
      onClick={() => openStory(storyId)}
      aria-label={`Open human story: ${story.name}, ${story.origin?.district || ''}`}
      className="inline-flex items-center gap-1.5 ml-2 px-2 py-0.5 rounded-full border border-crimson/40 bg-crimson/10 hover:bg-crimson/20 text-crimson text-[11px] font-semibold tracking-wide uppercase transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 align-middle"
    >
      <User className="w-3 h-3" aria-hidden="true" />
      <span>{displayLabel}</span>
    </button>
  )
}

export const StoryMarker = memo(StoryMarkerBase)
export default StoryMarker
