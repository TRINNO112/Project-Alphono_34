import { memo, useState, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, X } from 'lucide-react'
import { PILLAR_IDS, PILLAR_LABELS } from '../data/simulatorCoefficients'

function subscribeDarkMode(callback) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}
function getIsDark() {
  return typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
}

function colorFor(percent) {
  if (percent >= 70) return 'bg-crimson'
  if (percent >= 40) return 'bg-crimson/70'
  if (percent >= 15) return 'bg-crimson/40'
  if (percent > 0) return 'bg-crimson/25'
  return 'bg-gray-200 dark:bg-dark-border'
}

function SimulatorImpactBarsBase({ pillarPercent, derivations, onPillarFocus }) {
  useSyncExternalStore(subscribeDarkMode, getIsDark) // re-render on theme flip
  const [openWhy, setOpenWhy] = useState(null)
  const [hoverRow, setHoverRow] = useState(null)

  const rows = PILLAR_IDS.map((id) => ({
    id,
    label: PILLAR_LABELS[id],
    value: pillarPercent[id] || 0,
  })).sort((a, b) => b.value - a.value)

  const ariaSummary = rows
    .filter((r) => r.value > 0)
    .map((r) => `${r.label} ${r.value}%`)
    .join(', ') || 'No pillar disruption at current settings'

  const emitFocus = (id) => {
    setHoverRow(id)
    if (onPillarFocus) onPillarFocus(id)
  }

  return (
    <figure
      role="img"
      aria-label={`Pillar disruption breakdown: ${ariaSummary}`}
      className="rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface p-5"
    >
      <figcaption className="sr-only">
        Horizontal bar chart showing percent disruption for each of the 13 pillars under the current lever settings.
      </figcaption>
      <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white mb-4">Pillar Disruption</h3>
      <ul className="space-y-2.5">
        {rows.map((r) => {
          const derivList = derivations && derivations[r.id]
          const hasWhy = Array.isArray(derivList) && derivList.length > 0
          const top = hasWhy ? derivList[0] : null
          const extraCount = hasWhy ? derivList.length - 1 : 0
          const isFocused = hoverRow === r.id
          const isDimmed = hoverRow !== null && hoverRow !== r.id
          return (
            <li
              key={r.id}
              onMouseEnter={() => emitFocus(r.id)}
              onMouseLeave={() => emitFocus(null)}
              className={`relative grid grid-cols-[140px_1fr_48px_auto] items-center gap-3 transition-opacity ${
                isDimmed ? 'opacity-50' : 'opacity-100'
              } ${isFocused ? 'ring-1 ring-crimson/30 rounded' : ''}`}
            >
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 truncate" title={r.label}>
                {r.label}
              </span>
              <div className="relative h-2.5 rounded-full bg-gray-100 dark:bg-dark-border overflow-hidden">
                <motion.div
                  initial={false}
                  animate={{ width: `${r.value}%` }}
                  transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                  className={`absolute inset-y-0 left-0 rounded-full ${colorFor(r.value)}`}
                />
              </div>
              <span className="text-xs font-mono tabular-nums text-right text-gray-700 dark:text-gray-300">
                {r.value}%
              </span>
              {hasWhy ? (
                <button
                  type="button"
                  aria-label={`Show derivation for ${r.label}`}
                  aria-expanded={openWhy === r.id}
                  onClick={() => setOpenWhy(openWhy === r.id ? null : r.id)}
                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border border-crimson/40 bg-crimson/10 text-crimson hover:bg-crimson hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
                >
                  <HelpCircle className="w-3 h-3" aria-hidden="true" />
                  Why
                </button>
              ) : (
                <span aria-hidden="true" />
              )}
              <AnimatePresence>
                {hasWhy && openWhy === r.id && (
                  <motion.div
                    role="dialog"
                    aria-modal="false"
                    aria-label={`Derivation for ${r.label}`}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full z-30 mt-1 w-80 max-h-[60vh] overflow-y-auto rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface shadow-xl p-4"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-serif text-base font-bold text-gray-900 dark:text-white leading-tight break-words">
                        Why {r.value}%?
                      </h4>
                      <button
                        type="button"
                        onClick={() => setOpenWhy(null)}
                        aria-label="Close derivation"
                        className="text-gray-400 hover:text-crimson transition-colors shrink-0"
                      >
                        <X className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      {r.label}
                    </p>
                    {top.derivation?.formula && (
                      <div className="mb-3 p-2 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-100 dark:border-dark-border">
                        <code className="text-xs font-mono text-gray-700 dark:text-gray-300 break-words whitespace-pre-wrap">
                          {top.derivation.formula}
                        </code>
                      </div>
                    )}
                    {Array.isArray(top.derivation?.factors) && top.derivation.factors.length > 0 && (
                      <dl className="space-y-1.5 mb-3">
                        {top.derivation.factors.map((f, i) => (
                          <div key={i} className="flex items-baseline justify-between gap-3 text-xs">
                            <dt className="text-gray-600 dark:text-gray-400 flex-1 min-w-0 break-words">
                              {f.label}
                            </dt>
                            <dd className="font-mono tabular-nums text-gray-900 dark:text-white shrink-0">
                              {f.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed pt-2 border-t border-gray-100 dark:border-dark-border">
                      Driver: <span className="font-semibold text-gray-700 dark:text-gray-300 break-words">{top.label}</span>
                      {' '}at lever{' '}
                      <span className="font-mono tabular-nums">{top.leverValue}/{top.leverMax}</span>.
                      {extraCount > 0 && (
                        <span className="block mt-1 text-gray-400 dark:text-gray-500">+{extraCount} more lever{extraCount > 1 ? 's' : ''} contributing</span>
                      )}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </figure>
  )
}

export const SimulatorImpactBars = memo(SimulatorImpactBarsBase)
export default SimulatorImpactBars
