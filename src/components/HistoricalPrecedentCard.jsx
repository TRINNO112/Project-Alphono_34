import { memo, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

/**
 * HistoricalPrecedentCard — pageable card of HistoricalAnalogue items.
 *
 * Props:
 *   analogues:   HistoricalAnalogue[]
 *   emptyState?: string
 */
function HistoricalPrecedentCardBase({
  analogues = [],
  emptyState = 'No historical analogue available for the active lever.',
}) {
  const [idx, setIdx] = useState(0)

  // Reset pager when the analogue list changes
  useEffect(() => {
    setIdx(0)
  }, [analogues])

  if (!analogues || analogues.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 dark:border-dark-border bg-white/40 dark:bg-dark-surface/40 p-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          {emptyState}
        </p>
      </div>
    )
  }

  const safeIdx = Math.min(idx, analogues.length - 1)
  const a = analogues[safeIdx]
  const showPager = analogues.length > 1

  return (
    <article className="relative rounded-2xl border border-gray-200 dark:border-dark-border border-l-4 border-l-crimson bg-white dark:bg-dark-surface p-5">
      {showPager && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIdx((i) => (i - 1 + analogues.length) % analogues.length)}
            aria-label="Previous historical analogue"
            className="p-1 rounded text-gray-400 hover:text-crimson hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-1" role="tablist" aria-label="Analogue pager">
            {analogues.map((_, i) => (
              <span
                key={i}
                aria-current={i === safeIdx ? 'true' : undefined}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === safeIdx ? 'bg-crimson' : 'bg-gray-300 dark:bg-dark-border'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIdx((i) => (i + 1) % analogues.length)}
            aria-label="Next historical analogue"
            className="p-1 rounded text-gray-400 hover:text-crimson hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
          >
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      )}

      <p className={`font-mono text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 ${showPager ? 'pr-24' : ''}`}>
        {a.date}
      </p>

      <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white mt-1 leading-tight">
        {a.title}
      </h3>

      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {a.summary}
      </p>

      {a.metric && (
        <div className="mt-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-crimson/10 text-crimson border border-crimson/30">
            <span>{a.metric.label}</span>
            <span className="font-mono tabular-nums">{a.metric.value}</span>
          </span>
        </div>
      )}

      {Array.isArray(a.sources) && a.sources.length > 0 && (
        <ul className="mt-4 pt-3 border-t border-gray-100 dark:border-dark-border space-y-1.5">
          {a.sources.map((s, i) => (
            <li key={i}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-crimson hover:underline"
              >
                <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                <span className="truncate">{s.title}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default memo(HistoricalPrecedentCardBase)
