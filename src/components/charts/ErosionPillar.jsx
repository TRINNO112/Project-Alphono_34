import { memo, useMemo, useId } from 'react'
import { motion } from 'framer-motion'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY } from './_shared/tokens'

/**
 * ErosionPillar — a custom narrative visualization for time-series decline.
 *
 * Renders the data as a stone pillar that visibly erodes year-by-year.
 * Stratum height encodes value; cracks, fissures and rubble encode the
 * progression of decline. Designed for stories of structural withdrawal
 * (e.g., central grants, fiscal allocations, dependency ratios).
 *
 * Props:
 *   strata:     [{ label, value, note? }]  — earliest to latest
 *   unit?:      string (e.g., '%')
 *   title?:     string
 *   caption?:   string
 *   lossLabel?: string — text rendered in the rubble pool
 *   accentColor?: string
 *   height?:    number (svg height; default 520)
 */
function ErosionPillarInner({
  strata = [],
  unit = '',
  title,
  caption,
  lossLabel,
  accentColor = CHART_COLORS.dangerStrong,
  height = 520,
}) {
  const uid = useId().replace(/:/g, '')

  const W = 640
  const H = height
  const pillarX = W / 2
  const baseY = H - 110
  const topY = 70
  const innerH = baseY - topY

  const values = strata.map((s) => s.value)
  const maxVal = Math.max(...values, 0.0001)
  const totalVal = values.reduce((a, b) => a + b, 0)

  const stoneFill = '#E8E2D5'
  const stoneShadow = '#B8AC95'
  const stoneCrack = '#5A4A3A'

  // Lay out strata top-down: earliest year is the TOP stratum (broadest, most
  // intact); later years sit below and are progressively eroded. Cracks propagate
  // downward as you scroll. Stratum HEIGHT is proportional to value so the final
  // year is a thin sliver above the rubble pool.
  const layout = useMemo(() => {
    const sumScaled = values.reduce((a, b) => a + b, 0)
    if (sumScaled === 0) return []
    let yCursor = topY
    return strata.map((s, i) => {
      const proportion = s.value / sumScaled
      const sliceH = Math.max(34, proportion * innerH)
      const y = yCursor
      const widthFactor = 0.55 + 0.45 * (s.value / maxVal) // wider strata for higher values
      const halfW = 110 * widthFactor
      // Erosion intensity grows year-over-year (0 → 1) — top is solid, bottom is collapsing
      const erosion = strata.length > 1 ? i / (strata.length - 1) : 0
      yCursor = y + sliceH
      return {
        ...s,
        idx: i,
        y,
        h: sliceH,
        halfW,
        erosion,
      }
    })
  }, [strata, values, maxVal, innerH, topY])

  // Generate a deterministic crack path for a stratum based on erosion intensity.
  const buildCracks = (s) => {
    if (s.erosion < 0.15) return []
    const cracks = []
    const numCracks = Math.floor(1 + s.erosion * 4)
    for (let c = 0; c < numCracks; c++) {
      const xStart = pillarX - s.halfW + (s.halfW * 2 * (c + 1)) / (numCracks + 1)
      const segments = 4 + Math.floor(s.erosion * 4)
      const points = []
      let x = xStart
      let y = s.y
      points.push([x, y])
      for (let seg = 1; seg <= segments; seg++) {
        const dy = (s.h / segments)
        const jitter = (Math.sin(c * 13 + seg * 7 + s.idx) * 14) * (s.erosion + 0.3)
        x += jitter * 0.6
        y += dy
        points.push([x, y])
      }
      cracks.push(points)
    }
    return cracks
  }

  // Rubble fragments accumulate at the base (count grows with total decline).
  const rubble = useMemo(() => {
    const frags = []
    const count = 24
    for (let i = 0; i < count; i++) {
      const rng = Math.sin(i * 12.9898) * 43758.5453
      const r = rng - Math.floor(rng)
      const angle = (i / count) * Math.PI * 2
      const dist = 50 + r * 180
      const cx = pillarX + Math.cos(angle) * dist * (0.5 + (i % 3) * 0.3)
      const cy = baseY + 18 + Math.abs(Math.sin(angle)) * 30 + (r * 18)
      const size = 4 + r * 10
      const rotate = r * 90
      frags.push({ cx, cy, size, rotate, delay: 1.2 + i * 0.04 })
    }
    return frags
  }, [pillarX, baseY])

  // Total decline computation for the rubble caption
  const declineDelta = strata.length >= 2 ? strata[0].value - strata[strata.length - 1].value : 0
  const declinePct = strata.length >= 2 && strata[0].value > 0
    ? Math.round((declineDelta / strata[0].value) * 100)
    : 0

  const ariaSummary = strata.map((s) => `${s.label}: ${s.value}${unit}`).join('; ') + '.'

  return (
    <Figure
      title={title}
      caption={caption}
      ariaLabel={`Erosion pillar showing ${title || 'decline over time'}: ${ariaSummary}`}
      srSummary={ariaSummary}
    >
      <div className="w-full overflow-hidden">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: H, display: 'block' }}>
          <defs>
            <linearGradient id={`stone-${uid}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={stoneShadow} />
              <stop offset="50%" stopColor={stoneFill} />
              <stop offset="100%" stopColor={stoneShadow} />
            </linearGradient>
            <linearGradient id={`rubblePool-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3F3A33" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3F3A33" stopOpacity="0" />
            </linearGradient>
            <filter id={`grit-${uid}`}>
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
              <feColorMatrix values="0 0 0 0 0.35  0 0 0 0 0.30  0 0 0 0 0.25  0 0 0 0.18 0" />
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>

          {/* Ground line */}
          <line
            x1={40}
            y1={baseY}
            x2={W - 40}
            y2={baseY}
            stroke={stoneCrack}
            strokeWidth={1.2}
            opacity={0.35}
          />

          {/* Rubble pool gradient under base */}
          <ellipse
            cx={pillarX}
            cy={baseY + 35}
            rx={W / 2 - 60}
            ry={45}
            fill={`url(#rubblePool-${uid})`}
          />

          {/* Strata, drawn bottom-up so the topmost (most eroded last) renders last */}
          {layout.map((s) => {
            const cracks = buildCracks(s)
            const erosionBite = s.erosion * 30 // top edge is chewed off increasingly
            const isLast = s.idx === layout.length - 1

            // Stratum polygon — top edge is jagged for eroded strata
            const left = pillarX - s.halfW
            const right = pillarX + s.halfW
            const topPoints = []
            const jagSegs = 8
            for (let j = 0; j <= jagSegs; j++) {
              const px = left + ((right - left) * j) / jagSegs
              const rng = Math.sin(j * 5.7 + s.idx * 3.1) * 43758.5453
              const r = rng - Math.floor(rng)
              const py = s.y + (r - 0.5) * erosionBite * 1.4 + (s.erosion > 0.5 ? r * erosionBite * 0.5 : 0)
              topPoints.push(`${px},${py}`)
            }
            const polyPath = `M ${left},${s.y + s.h} L ${topPoints.join(' L ')} L ${right},${s.y + s.h} Z`

            return (
              <motion.g
                key={s.idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: s.idx * 0.18, ease: 'easeOut' }}
              >
                {/* Body */}
                <path
                  d={polyPath}
                  fill={`url(#stone-${uid})`}
                  stroke={stoneCrack}
                  strokeWidth={0.8}
                  opacity={1 - s.erosion * 0.25}
                />
                {/* Grit overlay for the most eroded strata */}
                {s.erosion > 0.4 && (
                  <path d={polyPath} fill="#000" opacity={0.08} filter={`url(#grit-${uid})`} />
                )}

                {/* Horizontal mortar line at top of stratum */}
                <line
                  x1={left + 6}
                  y1={s.y + erosionBite * 0.5 + 1}
                  x2={right - 6}
                  y2={s.y + erosionBite * 0.5 + 1}
                  stroke={stoneCrack}
                  strokeWidth={0.6}
                  opacity={0.35}
                  strokeDasharray="2,3"
                />

                {/* Cracks */}
                {cracks.map((path, ci) => (
                  <motion.polyline
                    key={ci}
                    points={path.map((p) => p.join(',')).join(' ')}
                    fill="none"
                    stroke={stoneCrack}
                    strokeWidth={0.9 + s.erosion * 1.2}
                    strokeOpacity={0.5 + s.erosion * 0.4}
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.9, delay: 0.6 + s.idx * 0.18 + ci * 0.08, ease: 'easeInOut' }}
                  />
                ))}

                {/* Side label: year tag (left) + value (right) */}
                <g>
                  {/* Connector tick */}
                  <line
                    x1={left - 14}
                    y1={s.y + s.h / 2}
                    x2={left - 4}
                    y2={s.y + s.h / 2}
                    stroke={stoneCrack}
                    strokeWidth={0.8}
                    opacity={0.55}
                  />
                  <text
                    x={left - 18}
                    y={s.y + s.h / 2 + 4}
                    textAnchor="end"
                    fontSize={11}
                    fontWeight={700}
                    letterSpacing="0.12em"
                    fill={CHART_TYPOGRAPHY.axisColor}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                    style={{ textTransform: 'uppercase' }}
                  >
                    {s.label}
                  </text>

                  {/* Value */}
                  <line
                    x1={right + 4}
                    y1={s.y + s.h / 2}
                    x2={right + 14}
                    y2={s.y + s.h / 2}
                    stroke={stoneCrack}
                    strokeWidth={0.8}
                    opacity={0.55}
                  />
                  <text
                    x={right + 18}
                    y={s.y + s.h / 2 + 6}
                    fontSize={Math.min(22, 14 + s.h / 6)}
                    fontWeight={800}
                    fill={isLast ? accentColor : '#1F2937'}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  >
                    {s.value}{unit}
                  </text>
                  {s.note && (
                    <text
                      x={right + 18}
                      y={s.y + s.h / 2 + 22}
                      fontSize={10}
                      fill={CHART_TYPOGRAPHY.axisColor}
                      fontFamily={CHART_TYPOGRAPHY.fontFamily}
                      fontStyle="italic"
                    >
                      {s.note}
                    </text>
                  )}
                </g>
              </motion.g>
            )
          })}

          {/* Rubble fragments at base */}
          {rubble.map((f, i) => (
            <motion.rect
              key={i}
              x={f.cx - f.size / 2}
              y={f.cy - f.size / 2}
              width={f.size}
              height={f.size * 0.7}
              fill={i % 2 === 0 ? stoneFill : stoneShadow}
              stroke={stoneCrack}
              strokeWidth={0.4}
              opacity={0.85}
              transform={`rotate(${f.rotate} ${f.cx} ${f.cy})`}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 0.85, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: f.delay, ease: 'easeOut' }}
            />
          ))}

          {/* Loss caption banner under rubble */}
          {(lossLabel || declineDelta > 0) && (
            <motion.g
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <text
                x={pillarX}
                y={H - 32}
                textAnchor="middle"
                fontSize={11}
                fontWeight={700}
                letterSpacing="0.18em"
                fill={CHART_TYPOGRAPHY.axisColor}
                fontFamily={CHART_TYPOGRAPHY.fontFamily}
                style={{ textTransform: 'uppercase' }}
              >
                CUMULATIVE EROSION
              </text>
              <text
                x={pillarX}
                y={H - 12}
                textAnchor="middle"
                fontSize={16}
                fontWeight={800}
                fill={accentColor}
                fontFamily={CHART_TYPOGRAPHY.fontFamily}
              >
                {lossLabel || `−${declineDelta.toFixed(2)}${unit} (${declinePct}% drop)`}
              </text>
            </motion.g>
          )}

          {/* Header note above pillar */}
          <text
            x={pillarX}
            y={topY - 28}
            textAnchor="middle"
            fontSize={10}
            fontWeight={700}
            letterSpacing="0.22em"
            fill={CHART_TYPOGRAPHY.axisColor}
            fontFamily={CHART_TYPOGRAPHY.fontFamily}
            style={{ textTransform: 'uppercase' }}
            opacity={0.7}
          >
            INTACT
          </text>
          {totalVal > 0 && (
            <text
              x={pillarX}
              y={topY - 10}
              textAnchor="middle"
              fontSize={10}
              fill={CHART_TYPOGRAPHY.axisColor}
              fontFamily={CHART_TYPOGRAPHY.fontFamily}
              fontStyle="italic"
              opacity={0.65}
            >
              time falls downward · cracks deepen each year
            </text>
          )}
        </svg>
      </div>
    </Figure>
  )
}

export const ErosionPillar = memo(ErosionPillarInner)
export default ErosionPillar
