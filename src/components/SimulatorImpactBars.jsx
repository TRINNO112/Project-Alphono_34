import { memo, useSyncExternalStore } from 'react'
import { motion } from 'framer-motion'
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

function SimulatorImpactBarsBase({ pillarPercent }) {
  useSyncExternalStore(subscribeDarkMode, getIsDark) // re-render on theme flip

  const rows = PILLAR_IDS.map((id) => ({
    id,
    label: PILLAR_LABELS[id],
    value: pillarPercent[id] || 0,
  })).sort((a, b) => b.value - a.value)

  const ariaSummary = rows
    .filter((r) => r.value > 0)
    .map((r) => `${r.label} ${r.value}%`)
    .join(', ') || 'No pillar disruption at current settings'

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
        {rows.map((r) => (
          <li key={r.id} className="grid grid-cols-[140px_1fr_48px] items-center gap-3">
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
          </li>
        ))}
      </ul>
    </figure>
  )
}

export const SimulatorImpactBars = memo(SimulatorImpactBarsBase)
export default SimulatorImpactBars
