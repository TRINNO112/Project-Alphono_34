import { memo } from 'react'

/**
 * NamedPopulationPanel — shows total + composition + per-group rows.
 *
 * Props:
 *   groups:          AffectedPopulation[]
 *   totalHeadcount:  number
 *   emptyState?:     string
 *   onCiteClick?:    (cite) => void
 */

function formatHeadcount(n) {
  if (!n || n <= 0) return '0'
  if (n >= 1e7) return `${(n / 1e7).toFixed(n >= 1e8 ? 0 : 1)} Cr`
  if (n >= 1e5) return `${(n / 1e5).toFixed(n >= 1e6 ? 0 : 1)} L`
  if (n >= 1000) return `${(n / 1000).toFixed(0)}k`
  return String(n)
}

const ETHNICITY_BADGE = {
  'saurashtra-patel': {
    text: 'Local · Saurashtra Patel',
    cls: 'border-gray-300 bg-parchment-50 text-gray-700',
  },
  'up-bihar-migrant': {
    text: 'Migrant',
    cls: 'border-crimson/60 bg-crimson/10 text-crimson',
  },
  'odia-migrant': {
    text: 'Migrant',
    cls: 'border-crimson/60 bg-crimson/10 text-crimson',
  },
  'rajasthani': {
    text: 'Migrant',
    cls: 'border-crimson/60 bg-crimson/10 text-crimson',
  },
  'tribal-mp': {
    text: 'Migrant',
    cls: 'border-crimson/60 bg-crimson/10 text-crimson',
  },
  'gujarati-general': {
    text: 'Gujarati',
    cls: 'border-gray-300 bg-parchment-50 text-gray-700',
  },
  'maldhari': {
    text: 'Pastoralist',
    cls: 'border-gray-300 bg-parchment-50 text-gray-700',
  },
  'national': {
    text: 'National',
    cls: 'border-gray-300 bg-gray-100 text-gray-600',
  },
}

const COMPOSITION_BUCKETS = [
  {
    key: 'migrant',
    label: 'migrant',
    color: 'bg-crimson',
    match: ['up-bihar-migrant', 'odia-migrant', 'rajasthani', 'tribal-mp'],
  },
  {
    key: 'local',
    label: 'local Gujarati',
    color: 'bg-amber-600',
    match: ['saurashtra-patel', 'gujarati-general', 'maldhari'],
  },
  {
    key: 'national',
    label: 'national',
    color: 'bg-gray-500',
    match: ['national'],
  },
  {
    key: 'other',
    label: 'other',
    color: 'bg-gray-400',
    match: ['other'],
  },
]

function NamedPopulationPanelBase({
  groups = [],
  totalHeadcount = 0,
  emptyState = 'Move a lever to see who is affected.',
  onCiteClick,
}) {
  if (!groups || groups.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white/40 p-6 text-center">
        <p className="text-sm text-gray-500 italic">
          {emptyState}
        </p>
      </div>
    )
  }

  // Composition bar segments
  const buckets = COMPOSITION_BUCKETS.map((b) => {
    const sum = groups
      .filter((g) => b.match.includes(g.ethnicity))
      .reduce((acc, g) => acc + (g.headcount || 0), 0)
    return { ...b, sum }
  }).filter((b) => b.sum > 0)

  const compTotal = buckets.reduce((a, b) => a + b.sum, 0) || 1
  const compLabel = buckets
    .map((b) => `${Math.round((b.sum / compTotal) * 100)}% ${b.label}`)
    .join(', ')

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 min-w-0 overflow-hidden">
      <div className="flex items-baseline justify-between gap-2 mb-3">
        <h4 className="font-serif text-base font-semibold text-gray-900">
          Affected populations
        </h4>
        <p className="font-mono tabular-nums text-sm font-bold text-crimson">
          {formatHeadcount(totalHeadcount)} <span className="text-xs font-normal text-gray-500">people in scope</span>
        </p>
      </div>

      {buckets.length > 0 && (
        <div className="mb-4">
          <div
            role="img"
            aria-label={`Composition: ${compLabel}`}
            className="flex h-2 w-full overflow-hidden rounded-full bg-gray-100"
          >
            {buckets.map((b) => (
              <div
                key={b.key}
                className={b.color}
                style={{ width: `${(b.sum / compTotal) * 100}%` }}
                aria-hidden="true"
              />
            ))}
          </div>
          <div className="mt-1.5 flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
            {buckets.map((b) => (
              <span key={b.key} className="inline-flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${b.color}`} aria-hidden="true" />
                {Math.round((b.sum / compTotal) * 100)}% {b.label}
              </span>
            ))}
          </div>
        </div>
      )}

      <ul role="list" className="space-y-2">
        {groups.map((g, i) => {
          const badge = g.ethnicity && ETHNICITY_BADGE[g.ethnicity]
          return (
            <li
              key={i}
              className="flex flex-wrap items-center gap-2 py-1.5 border-b border-gray-100 last:border-0"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 break-words">
                  {g.label}
                  {g.cite && (
                    <a
                      href={`#ref-${g.cite}`}
                      onClick={onCiteClick ? () => onCiteClick(g.cite) : undefined}
                      className="ml-1 text-crimson hover:underline font-bold text-xs"
                      aria-label={`Citation ${g.cite}`}
                    >
                      [{g.cite}]
                    </a>
                  )}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                  {g.locality && (
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-parchment-50 text-gray-600 border border-gray-200">
                      {g.locality}
                    </span>
                  )}
                  {badge && (
                    <span
                      className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded border ${badge.cls}`}
                    >
                      {badge.text}
                    </span>
                  )}
                </div>
              </div>
              <p className="font-mono tabular-nums text-sm font-bold text-gray-900 shrink-0">
                {formatHeadcount(g.headcount)}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default memo(NamedPopulationPanelBase)
