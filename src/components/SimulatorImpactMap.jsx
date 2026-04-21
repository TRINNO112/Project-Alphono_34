import { memo, useMemo, useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const GUJARAT_URL = '/geo/gujarat.geojson'

function scoreToFill(score) {
  if (score >= 80) return '#991B1B'   // crimson-dark
  if (score >= 60) return '#B91C1C'
  if (score >= 40) return '#DC2626'   // crimson
  if (score >= 20) return '#EF4444'
  if (score > 0)   return '#FCA5A5'   // light red
  return '#E5E7EB'                    // neutral gray
}

function SimulatorImpactMapBase({ districtScore }) {
  const [hover, setHover] = useState(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  const summary = useMemo(() => {
    const hot = Object.entries(districtScore)
      .filter(([, v]) => v > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([d, v]) => `${d} ${v}%`)
      .join(', ')
    return hot || 'No districts impacted at current settings'
  }, [districtScore])

  return (
    <figure
      role="img"
      aria-label={`Gujarat district impact heatmap. Top-affected: ${summary}.`}
      className="relative rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface p-4"
    >
      <figcaption className="sr-only">
        Gujarat map colored by per-district damage score from 0 to 100. Districts
        touched by the active break levers are shaded crimson — darker = higher damage.
      </figcaption>

      <div className="flex items-center justify-between mb-2">
        <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white">District Impact</h3>
        <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500 dark:text-gray-400">
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
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHover({ name, score })}
                    onMouseLeave={() => setHover(null)}
                    style={{
                      default: { fill, outline: 'none', stroke: '#FFFFFF', strokeWidth: 0.6 },
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
            className="pointer-events-none absolute z-10 px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold shadow-xl whitespace-nowrap"
            style={{
              left: cursor.x + 14,
              top: cursor.y + 14,
              transform: cursor.x > 260 ? 'translateX(-100%) translateX(-28px)' : undefined,
            }}
          >
            <div className="font-serif text-sm">{hover.name}</div>
            <div className="font-mono tabular-nums text-crimson dark:text-crimson">
              {hover.score}% impact
            </div>
          </div>
        )}
      </div>

      <div
        role="status"
        aria-live="polite"
        className="min-h-[2rem] mt-2 text-sm text-gray-700 dark:text-gray-300"
      >
        {hover
          ? <span><span className="font-bold">{hover.name}</span> — <span className="font-mono tabular-nums text-crimson">{hover.score}%</span> impact</span>
          : <span className="text-gray-400 dark:text-gray-500 text-xs italic">Hover a district for its damage score</span>}
      </div>
    </figure>
  )
}

export const SimulatorImpactMap = memo(SimulatorImpactMapBase)
export default SimulatorImpactMap
