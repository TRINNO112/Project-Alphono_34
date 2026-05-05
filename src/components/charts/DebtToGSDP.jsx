import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { scaleLinear, scalePoint } from 'd3-scale'
import { line, curveMonotoneX } from 'd3-shape'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY } from './_shared/tokens'
import { useChartDimensions } from '../../hooks/useChartDimensions'

/**
 * DebtToGSDP — line chart with FRBM reference bands.
 *
 * Shows Gujarat's debt trajectory against FRBM ceilings (25% original, 27.6% revised).
 * The reference bands tell the story: Gujarat is well below the danger zone, but the
 * trend is concerning — debt is rising while GSDP growth slows.
 */
function DebtToGSDPInner({
  data,
  unit = '%',
  title,
  caption,
  accentColor = CHART_COLORS.dangerStrong,
  height = 420,
  frbmCeiling = 25,
  frbmRevised = 27.6,
}) {
  const [ref, dims] = useChartDimensions({
    height,
    marginTop: 40,
    marginRight: 110,
    marginBottom: 48,
    marginLeft: 68,
  })

  const [hovered, setHovered] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const pathRef = useRef(null)
  const [pathLength, setPathLength] = useState(0)

  const xScale = useMemo(() =>
    scalePoint().domain(data.map((d) => d.year)).range([0, dims.boundedWidth]).padding(0.18)
  , [data, dims.boundedWidth])

  const yMax = useMemo(() => Math.max(frbmRevised, ...data.map((d) => d.value)) * 1.12, [data, frbmRevised])
  const yScale = useMemo(() =>
    scaleLinear().domain([0, yMax]).range([dims.boundedHeight, 0]).nice()
  , [yMax, dims.boundedHeight])

  const lineGen = useMemo(() => line()
    .x((d) => xScale(d.year))
    .y((d) => yScale(d.value))
    .curve(curveMonotoneX)
  , [xScale, yScale])

  const linePath = useMemo(() => lineGen(data) || '', [lineGen, data])

  useEffect(() => {
    if (pathRef.current) {
      try {
        setPathLength(pathRef.current.getTotalLength())
      } catch { /* node not ready */ }
    }
  }, [linePath])

  // Scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.4 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref])

  const first = data[0]
  const last = data[data.length - 1]
  const delta = last.value - first.value
  const deltaPct = first.value > 0 ? Math.round((delta / first.value) * 100) : 0
  const yTicks = yScale.ticks(4)

  const ariaSummary = data.map((d) => `${d.year}: ${d.value}${unit}`).join('; ')

  const isReady = dims.boundedWidth > 0

  return (
    <Figure title={title} caption={caption} ariaLabel={`${title}: ${ariaSummary}`} srSummary={ariaSummary}>
      <div ref={ref} className="w-full">
        {isReady && (
          <svg
            width={dims.width}
            height={dims.height}
            role="img"
            onMouseLeave={() => setHovered(null)}
            style={{ display: 'block', overflow: 'visible' }}
          >
            <defs>
              <pattern id="frbm-pattern" patternUnits="userSpaceOnUse" width="8" height="8">
                <path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4" stroke="#E5E7EB" strokeWidth={1} />
              </pattern>
            </defs>
            <g transform={`translate(${dims.margin.left}, ${dims.margin.top})`}>
              {/* y gridlines */}
              {yTicks.map((t) => (
                <g key={t} transform={`translate(0, ${yScale(t)})`}>
                  <line x1={0} x2={dims.boundedWidth} stroke="#F3F4F6" strokeWidth={1} />
                  <text
                    x={-10}
                    y={4}
                    textAnchor="end"
                    fontSize={11}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                    fill={CHART_TYPOGRAPHY.axisColor}
                  >
                    {t}{unit}
                  </text>
                </g>
              ))}

              {/* FRBM reference bands */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.4, delay: isVisible ? 0.3 : 0 }}
              >
                {/* Revised ceiling (27.6%) */}
                <rect
                  x={0}
                  y={yScale(frbmRevised)}
                  width={dims.boundedWidth}
                  height={yScale(frbmCeiling) - yScale(frbmRevised)}
                  fill="url(#frbm-pattern)"
                  opacity={0.6}
                />
                <line
                  x1={0}
                  x2={dims.boundedWidth}
                  y1={yScale(frbmRevised)}
                  stroke="#9CA3AF"
                  strokeWidth={1}
                  strokeDasharray="4,4"
                />
                <text
                  x={dims.boundedWidth + 8}
                  y={yScale(frbmRevised) + 4}
                  fontSize={10}
                  fontWeight={700}
                  fill="#9CA3AF"
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  FRBM revised {frbmRevised}%
                </text>

                {/* Original ceiling (25%) */}
                <line
                  x1={0}
                  x2={dims.boundedWidth}
                  y1={yScale(frbmCeiling)}
                  stroke="#EF4444"
                  strokeWidth={1.5}
                  strokeDasharray="6,4"
                />
                <text
                  x={dims.boundedWidth + 8}
                  y={yScale(frbmCeiling) + 4}
                  fontSize={10}
                  fontWeight={700}
                  fill="#EF4444"
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  FRBM ceiling {frbmCeiling}%
                </text>
              </motion.g>

              {/* animated line */}
              <motion.path
                ref={pathRef}
                d={linePath}
                fill="none"
                stroke={accentColor}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: pathLength, strokeDashoffset: pathLength }}
                animate={{ strokeDashoffset: isVisible ? 0 : pathLength }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: isVisible ? 0.5 : 0 }}
              />

              {/* x-axis tick labels */}
              {data.map((d) => (
                <text
                  key={d.year}
                  x={xScale(d.year)}
                  y={dims.boundedHeight + 22}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={600}
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  fill={CHART_TYPOGRAPHY.axisColor}
                  letterSpacing="0.05em"
                >
                  {d.year}
                </text>
              ))}

              {/* dots */}
              {data.map((d, i) => {
                const cx = xScale(d.year)
                const cy = yScale(d.value)
                const isLast = i === data.length - 1
                return (
                  <motion.circle
                    key={d.year}
                    cx={cx}
                    cy={cy}
                    r={isLast ? 7 : 5}
                    fill="#ffffff"
                    stroke={accentColor}
                    strokeWidth={isLast ? 3 : 2}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: isVisible ? 1.0 + i * 0.08 : 0 }}
                  />
                )
              })}

              {/* hover capture rects */}
              {data.map((d, i) => {
                const cx = xScale(d.year)
                const prev = i > 0 ? xScale(data[i - 1].year) : cx - 30
                const next = i < data.length - 1 ? xScale(data[i + 1].year) : cx + 30
                const x = (prev + cx) / 2
                const w = (next + cx) / 2 - x
                return (
                  <rect
                    key={`hover-${d.year}`}
                    x={x}
                    y={0}
                    width={Math.max(8, w)}
                    height={dims.boundedHeight}
                    fill="transparent"
                    onMouseEnter={() => setHovered(i)}
                    style={{ cursor: 'crosshair' }}
                  />
                )
              })}

              {/* hover crosshair + tooltip */}
              {hovered !== null && (() => {
                const d = data[hovered]
                const cx = xScale(d.year)
                const cy = yScale(d.value)
                const dlt = d.value - first.value
                const dPct = first.value > 0 ? Math.round((dlt / first.value) * 100) : 0
                const tipRight = cx > dims.boundedWidth - 140
                return (
                  <g pointerEvents="none">
                    <line x1={cx} x2={cx} y1={0} y2={dims.boundedHeight} stroke={accentColor} strokeWidth={1} strokeDasharray="3,3" opacity={0.5} />
                    <circle cx={cx} cy={cy} r={9} fill="none" stroke={accentColor} strokeWidth={2} />
                    <g transform={`translate(${tipRight ? cx - 16 : cx + 16}, ${Math.max(20, cy - 30)})`}>
                      <rect
                        x={tipRight ? -132 : 0}
                        y={0}
                        width={132}
                        height={56}
                        rx={6}
                        fill="#ffffff"
                        stroke="#E5E7EB"
                        strokeWidth={1}
                        style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.06))' }}
                      />
                      <text x={tipRight ? -120 : 12} y={18} fontSize={10} fontWeight={700} letterSpacing="0.1em" fill="#6B7280" fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        {d.year}
                      </text>
                      <text x={tipRight ? -120 : 12} y={36} fontSize={16} fontWeight={800} fill={accentColor} fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        {d.value}{unit}
                      </text>
                      <text x={tipRight ? -120 : 12} y={50} fontSize={10} fill="#6B7280" fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        {hovered === 0 ? 'baseline' : `${dlt > 0 ? '+' : ''}${dlt.toFixed(2)}${unit} (${dPct > 0 ? '+' : ''}${dPct}%)`}
                      </text>
                    </g>
                  </g>
                )
              })()}

              {/* WAS callout */}
              <motion.g
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -10 }}
                transition={{ duration: 0.5, delay: isVisible ? 1.6 : 0 }}
              >
                <text
                  x={xScale(first.year)}
                  y={yScale(first.value) - 22}
                  textAnchor="middle"
                  fontSize={10}
                  fontWeight={800}
                  letterSpacing="0.18em"
                  fill="#6B7280"
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  WAS
                </text>
                <text
                  x={xScale(first.year)}
                  y={yScale(first.value) - 6}
                  textAnchor="middle"
                  fontSize={18}
                  fontWeight={800}
                  fill="#1F2937"
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  {first.value}{unit}
                </text>
              </motion.g>

              {/* NOW callout */}
              <motion.g
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 10 }}
                transition={{ duration: 0.5, delay: isVisible ? 1.8 : 0 }}
              >
                <text
                  x={xScale(last.year) + 14}
                  y={yScale(last.value) - 6}
                  textAnchor="start"
                  fontSize={10}
                  fontWeight={800}
                  letterSpacing="0.18em"
                  fill={accentColor}
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  NOW
                </text>
                <text
                  x={xScale(last.year) + 14}
                  y={yScale(last.value) + 14}
                  textAnchor="start"
                  fontSize={22}
                  fontWeight={800}
                  fill={accentColor}
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  {last.value}{unit}
                </text>
                <text
                  x={xScale(last.year) + 14}
                  y={yScale(last.value) + 32}
                  textAnchor="start"
                  fontSize={11}
                  fontWeight={700}
                  fill={accentColor}
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  {deltaPct}% from FY20
                </text>
              </motion.g>
            </g>
          </svg>
        )}
      </div>
    </Figure>
  )
}

export const DebtToGSDP = memo(DebtToGSDPInner)
export default DebtToGSDP
