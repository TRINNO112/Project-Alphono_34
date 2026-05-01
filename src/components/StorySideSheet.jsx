import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, MapPin, Calendar } from 'lucide-react'
import { useStories } from '../context/useStories'
import { getStoryById } from '../data/humanStories'

export default function StorySideSheet() {
  const { openStoryId, closeStory } = useStories()
  const closeRef = useRef(null)
  const story = openStoryId ? getStoryById(openStoryId) : null

  // Close on Escape; return focus to close button on open
  useEffect(() => {
    if (!story) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') closeStory()
    }
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [story, closeStory])

  return (
    <AnimatePresence>
      {story && (
        <>
          <motion.button
            type="button"
            aria-label="Close story panel"
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeStory}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55]"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={`Story of ${story.name}`}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white border-l border-gray-200 shadow-2xl z-[56] overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 sticky top-0 bg-white z-10">
              <span className="text-xs font-bold tracking-widest uppercase text-crimson">Human Story</span>
              <button
                ref={closeRef}
                type="button"
                onClick={closeStory}
                aria-label="Close"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="px-6 py-8 space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 leading-tight">
                  {story.name}
                  {story.age != null && (
                    <span className="text-gray-500 font-normal text-xl">, {story.age}</span>
                  )}
                </h2>
                <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-600">
                  {story.origin && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      {story.origin.district}, {story.origin.state}
                    </span>
                  )}
                  {story.eventDate && (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      {story.eventDate}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-base leading-relaxed text-gray-800">
                {story.circumstance}
              </p>

              {story.sourceUrl && (
                <a
                  href={story.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-crimson hover:underline focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 rounded"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  Read original report
                  <span className="text-gray-500 font-normal">
                    — {story.sourcePublication}
                  </span>
                </a>
              )}
            </div>

            <div className="px-6 py-5 border-t border-gray-200 bg-parchment-50 text-xs text-gray-500 leading-relaxed">
              Names are sourced from publicly published mainstream journalism as cited above.
              If you are a family member and wish to request removal, please open an issue on the
              project repository.
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
