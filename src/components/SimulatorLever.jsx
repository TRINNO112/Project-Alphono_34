import { memo, useId } from 'react'
import { ExternalLink, Clock } from './Icons'

const PILLAR_SHORT = {
  infrastructure: 'Infra',
  materials: 'Mat',
  energy: 'Energy',
  water: 'Water',
  labor: 'Labor',
  economics: 'Econ',
  education: 'Edu',
  environment: 'Env',
  'migrant-discrimination': 'Migrants',
  agriculture: 'Agri',
  greentech: 'GreenTech',
  'chemical-governance': 'ChemGov',
  'digital-sovereignty': 'Digital',
}

const GROUP_BADGE = {
  materials: 'MAT',
  physical: 'PHY',
  human: 'HUM',
  frontier: 'FRO',
}

function severityBorder(severity, active) {
  if (!active) return 'border-gray-200 bg-white'
  switch (severity) {
    case 'high':
      return 'border-crimson/70 bg-crimson/5'
    case 'medium':
      return 'border-crimson/40 bg-crimson/5'
    case 'critical':
      return 'border-crimson/60 bg-crimson/5'
    default:
      return 'border-crimson/60 bg-crimson/5'
  }
}

/**
 * SimulatorLever — toggle or slider control for the Break Simulator.
 *
 * Props:
 *   type:        'toggle' | 'slider'
 *   label:       short headline
 *   description: one-line subtext
 *   value:       boolean (toggle) | number (slider)
 *   onChange:    (nextValue) => void
 *   min, max, step, unit (slider only)
 *   source:      { title, url } — real event modeled by this lever
 *   pillarsTouched?: Array<{pillarId, percent}>
 *   onPillarHover?: (pillarId|null) => void
 *   timeToFailure?: string
 *   severity?:   'critical' | 'high' | 'medium'
 *   group?:      'materials' | 'physical' | 'human' | 'frontier'
 *   showGroupBadge?: boolean
 *   displayUnit?: string
 */
function SimulatorLeverBase({
  type,
  label,
  description,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  unit = '%',
  source,
  pillarsTouched,
  onPillarHover,
  timeToFailure,
  severity,
  group,
  showGroupBadge = false,
  displayUnit,
}) {
  const id = useId()
  const active = type === 'toggle' ? !!value : value > 0
  const percent = type === 'slider' ? ((value - min) / (max - min)) * 100 : 0
  const valueUnit = displayUnit ?? unit
  const showBadge = showGroupBadge && group && GROUP_BADGE[group]

  return (
    <div
      className={`relative rounded-2xl border p-4 transition-colors ${severityBorder(severity, active)}`}
    >
      {showBadge && (
        <span
          aria-hidden="true"
          className="absolute top-2 left-2 text-[9px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-gray-100 text-gray-500"
        >
          {GROUP_BADGE[group]}
        </span>
      )}

      <div className={`flex items-start justify-between gap-3 mb-2 ${showBadge ? 'pl-10' : ''}`}>
        <div className="flex-1 min-w-0">
          <label
            htmlFor={id}
            className="block font-serif text-base font-semibold text-gray-900 leading-tight"
          >
            {label}
          </label>
          {description && (
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {type === 'toggle' ? (
          <button
            id={id}
            type="button"
            role="switch"
            aria-checked={!!value}
            aria-label={`${label}: ${value ? 'active' : 'off'}`}
            onClick={() => onChange(!value)}
            className={`shrink-0 relative w-11 h-6 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 ${
              value ? 'bg-crimson' : 'bg-gray-300'
            }`}
          >
            <span
              aria-hidden="true"
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                value ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        ) : (
          <span
            className="shrink-0 font-mono text-sm font-bold tabular-nums text-crimson bg-red-50 px-2 py-0.5 rounded"
            aria-hidden="true"
          >
            {value}
            {valueUnit}
          </span>
        )}
      </div>

      {type === 'slider' && (
        <>
          <input
            id={id}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            aria-valuetext={`${value}${valueUnit}`}
            aria-label={label}
            className="w-full h-2 appearance-none rounded-full bg-gray-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 simulator-range"
            style={{
              backgroundImage: `linear-gradient(to right, var(--color-crimson) 0%, var(--color-crimson) ${percent}%, transparent ${percent}%, transparent 100%)`,
            }}
          />
          <div className="flex justify-between text-[10px] font-mono text-gray-400 mt-1 tracking-wider">
            <span>
              {min}
              {valueUnit}
            </span>
            <span>
              {max}
              {valueUnit}
            </span>
          </div>
        </>
      )}

      {pillarsTouched && pillarsTouched.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3" aria-label="Pillars touched by this lever">
          {pillarsTouched.map((p) => (
            <button
              key={p.pillarId}
              type="button"
              onMouseEnter={() => onPillarHover && onPillarHover(p.pillarId)}
              onMouseLeave={() => onPillarHover && onPillarHover(null)}
              onFocus={() => onPillarHover && onPillarHover(p.pillarId)}
              onBlur={() => onPillarHover && onPillarHover(null)}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-dashed border-gray-300 bg-parchment-50 text-gray-600 hover:border-crimson hover:text-crimson focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 transition-colors"
            >
              {PILLAR_SHORT[p.pillarId] || p.pillarId} {Math.round(p.percent)}%
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-3">
        {source?.url && (
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase text-gray-400 hover:text-crimson transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 rounded"
          >
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
            Modeled after: {source.title}
          </a>
        )}
        {timeToFailure && (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-gray-500 px-1.5 py-0.5 rounded bg-gray-100">
            <Clock className="w-3 h-3" aria-hidden="true" />
            {timeToFailure}
          </span>
        )}
      </div>
    </div>
  )
}

export const SimulatorLever = memo(SimulatorLeverBase)
export default SimulatorLever
