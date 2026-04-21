import { memo, useId } from 'react'
import { ExternalLink } from 'lucide-react'

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
}) {
  const id = useId()
  const active = type === 'toggle' ? !!value : value > 0
  const percent = type === 'slider' ? ((value - min) / (max - min)) * 100 : 0

  return (
    <div
      className={`rounded-2xl border p-4 transition-colors ${
        active
          ? 'border-crimson/60 bg-crimson/5 dark:bg-crimson/10'
          : 'border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface'
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex-1 min-w-0">
          <label
            htmlFor={id}
            className="block font-serif text-base font-semibold text-gray-900 dark:text-white leading-tight"
          >
            {label}
          </label>
          {description && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
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
              value ? 'bg-crimson' : 'bg-gray-300 dark:bg-dark-border'
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
            className="shrink-0 font-mono text-sm font-bold tabular-nums text-crimson bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded"
            aria-hidden="true"
          >
            {value}
            {unit}
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
            aria-valuetext={`${value}${unit}`}
            aria-label={label}
            className="w-full h-2 appearance-none rounded-full bg-gray-200 dark:bg-dark-border cursor-pointer focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 simulator-range"
            style={{
              backgroundImage: `linear-gradient(to right, var(--color-crimson) 0%, var(--color-crimson) ${percent}%, transparent ${percent}%, transparent 100%)`,
            }}
          />
          <div className="flex justify-between text-[10px] font-mono text-gray-400 dark:text-gray-500 mt-1 tracking-wider">
            <span>
              {min}
              {unit}
            </span>
            <span>
              {max}
              {unit}
            </span>
          </div>
        </>
      )}

      {source?.url && (
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-[10px] font-semibold tracking-wider uppercase text-gray-400 hover:text-crimson transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 rounded"
        >
          <ExternalLink className="w-3 h-3" aria-hidden="true" />
          Modeled after: {source.title}
        </a>
      )}
    </div>
  )
}

export const SimulatorLever = memo(SimulatorLeverBase)
export default SimulatorLever
