import { memo, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'

/**
 * CascadeTicker — animated vertical timeline of CascadeStep items.
 *
 * Props:
 *   leverLabel?: string
 *   steps:       CascadeStep[]
 *   onReplay?:   () => void
 */

const TIME_RE = /\d/

function CascadeTickerBase({ leverLabel, steps = [], onReplay }) {
  const reduceMotion = useReducedMotion()
  const [runKey, setRunKey] = useState(0)

  if (!steps || steps.length === 0) {
    return (
      <section
        aria-label={leverLabel ? `Cascade for ${leverLabel}` : 'Cascade'}
        className="rounded-2xl border border-dashed border-gray-300 bg-white/40 p-6 text-center"
      >
        <p className="text-sm text-gray-500 italic">
          No cascade for the active lever.
        </p>
      </section>
    )
  }

  function handleReplay() {
    setRunKey((k) => k + 1)
    if (onReplay) onReplay()
  }

  return (
    <section
      aria-label={leverLabel ? `Cascade timeline for ${leverLabel}` : 'Cascade timeline'}
      className="relative rounded-2xl border border-gray-200 bg-white p-5 min-w-0 overflow-hidden"
    >
      <div className="flex items-baseline justify-between gap-2 mb-4">
        <h4 className="font-serif text-base font-semibold text-gray-900">
          {leverLabel ? `Cascade · ${leverLabel}` : 'Cascade'}
        </h4>
        {!reduceMotion && (
          <button
            type="button"
            onClick={handleReplay}
            aria-label="Replay cascade animation"
            className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase text-gray-400 hover:text-crimson transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 rounded"
          >
            <RotateCcw className="w-3 h-3" aria-hidden="true" />
            Replay
          </button>
        )}
      </div>

      <ol className="relative space-y-4">
        <AnimatePresence mode="sync">
          {steps.map((s, i) => {
            const isTimeLike = s.timeBucket && TIME_RE.test(s.timeBucket)
            const isLast = i === steps.length - 1
            return (
              <motion.li
                key={`${runKey}-${s.n ?? i}`}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.35, delay: i * 0.4, ease: 'easeOut' }
                }
                className="relative pl-6"
              >
                {!isLast && (
                  <motion.span
                    aria-hidden="true"
                    initial={reduceMotion ? { backgroundColor: 'currentColor' } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { duration: 0.35, delay: i * 0.4 + 0.2 }
                    }
                    className="absolute left-2 top-3 bottom-[-1rem] w-px bg-crimson/40"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="absolute left-1 top-1.5 w-2 h-2 rounded-full bg-crimson ring-2 ring-white"
                />

                <div className="flex flex-wrap items-baseline gap-2">
                  {s.timeBucket && (
                    isTimeLike ? (
                      <time className="font-mono text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                        {s.timeBucket}
                      </time>
                    ) : (
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                        {s.timeBucket}
                      </span>
                    )
                  )}
                </div>
                <p className="text-sm font-semibold text-gray-900 leading-snug mt-0.5 break-words">
                  {s.text}
                  {s.cite && (
                    <a
                      href={`#ref-${s.cite}`}
                      className="ml-1 text-crimson hover:underline font-bold text-xs"
                      aria-label={`Citation ${s.cite}`}
                    >
                      [{s.cite}]
                    </a>
                  )}
                </p>
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ol>
    </section>
  )
}

export default memo(CascadeTickerBase)
