import { memo, useMemo, useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { X } from './Icons'

const GUJARAT_URL = '/geo/gujarat.geojson'

function scoreToFill(score) {
  if (score >= 80) return '#991B1B'   // crimson-dark
  if (score >= 60) return '#B91C1C'
  if (score >= 40) return '#DC2626'   // crimson
  if (score >= 20) return '#EF4444'
  if (score > 0)   return '#FCA5A5'   // light red
  return '#E5E7EB'                    // neutral gray
}

function SimulatorImpactMapBase({
  districtScore,
  leverContributions,
  onDistrictFocus,
  pendingData,
}) {
  const [hover, setHover] = useState(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [focused, setFocused] = useState(null)

  const summary = useMemo(() => {
    const hot = Object.entries(districtScore)
      .filter(([, v]) => v > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([d, v]) => `${d} ${v}%`)
      .join(', ')
    return hot || 'No districts impacted at current settings'
  }, [districtScore])

  const handleClick = (name) => {
    const next = focused === name ? null : name
    setFocused(next)
    if (onDistrictFocus) onDistrictFocus(next)
  }

  const clearFocus = () => {
    setFocused(null)
    if (onDistrictFocus) onDistrictFocus(null)
  }

  const hoverContribs =
    hover && leverContributions && leverContributions[hover.name]
      ? leverContributions[hover.name].slice(0, 3)
      : []

  return (
    <figure
      role="img"
      aria-label={`Gujarat district impact heatmap. Top-affected: ${summary}.`}
      className="relative rounded-2xl border border-gray-200 bg-white p-4"
    >
      <figcaption className="sr-only">
        Gujarat map colored by per-district damage score from 0 to 100. Districts
        touched by the active break levers are shaded crimson — darker = higher damage.
      </figcaption>

      <div className="flex items-center justify-between mb-2">
        <h3 className="font-serif font-bold text-lg text-gray-900">District Impact</h3>
        <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500">
          <span>0%</span>
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#E5E7EB' }} />
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#FCA5A5' }} />
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#EF4444' }} />
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#DC2626' }} />
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#B91C1C' }} />
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#991B1B' }} />
          <span>100%</span>
        </div>
      </div>

      <div
        className="relative"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        }}
      >
        {focused && (
          <button
            type="button"
            onClick={clearFocus}
            aria-label={`Clear focus on ${focused}`}
            className="absolute top-2 left-2 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-crimson text-white text-[10px] font-mono shadow-sm hover:bg-crimson/80 focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
          >
            {focused}
            <X className="w-3 h-3" aria-hidden="true" />
          </button>
        )}

        {pendingData && (
          <span className="absolute bottom-2 left-2 z-10 text-[10px] font-mono italic px-1.5 py-0.5 rounded bg-parchment-50 border border-gray-200 text-gray-500">
            Estimates pending data
          </span>
        )}

        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 4200, center: [71.5, 22.6] }}
          style={{ width: '100%', height: 'auto', aspectRatio: '1.1 / 1' }}
        >
          <Geographies geography={GUJARAT_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties.district
                const score = districtScore[name] || 0
                const fill = scoreToFill(score)
                const isFocused = focused === name
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHover({ name, score })}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => handleClick(name)}
                    style={{
                      default: {
                        fill,
                        outline: 'none',
                        stroke: isFocused ? '#111' : '#FFFFFF',
                        strokeWidth: isFocused ? 1.6 : 0.6,
                      },
                      hover:   { fill, outline: 'none', stroke: '#111', strokeWidth: 1.4, cursor: 'pointer' },
                      pressed: { fill, outline: 'none' },
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ComposableMap>

        {hover && (
          <div
            className="pointer-events-none absolute z-10 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-semibold shadow-xl whitespace-nowrap"
            style={{
              left: cursor.x + 14,
              top: cursor.y + 14,
              transform: cursor.x > 260 ? 'translateX(-100%) translateX(-28px)' : undefined,
            }}
          >
            <div className="font-serif text-sm">{hover.name}</div>
            <div className="font-mono tabular-nums text-crimson">
              {hover.score}% impact
            </div>
            {hoverContribs.length > 0 && (
              <ul className="mt-1 space-y-0.5 border-t border-white/20 pt-1">
                {hoverContribs.map((c) => (
                  <li key={c.leverId} className="font-mono text-[10px] tabular-nums">
                    {c.leverLabel} · {c.percent}%
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div
        role="status"
        aria-live="polite"
        className="min-h-[2rem] mt-2 text-sm text-gray-700"
      >
        {hover
          ? <span><span className="font-bold">{hover.name}</span> — <span className="font-mono tabular-nums text-crimson">{hover.score}%</span> impact</span>
          : <span className="text-gray-400 text-xs italic">Hover a district for its damage score</span>}
      </div>
    </figure>
  )
}

export const SimulatorImpactMap = memo(SimulatorImpactMapBase)
export default SimulatorImpactMap
