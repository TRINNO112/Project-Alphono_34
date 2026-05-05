import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { scaleLinear, scalePoint } from 'd3-scale'
import { line, area, curveCatmullRom } from 'd3-shape'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY } from './_shared/tokens'
import { useChartDimensions } from '../../hooks/useChartDimensions'

/**
 * OTRErosion — smooth area chart showing Own Tax Revenue erosion as % of GSDP.
 *
 * The smooth curve (curveCatmullRom) tells the story: Gujarat's tax base is thinning.
 * Scroll-triggered animation draws the line, then fades in the area fill.
 * Hover crosshair reads year + value + delta-from-peak.
 */
function OTRErosionInner({
  data,
  unit = '%',
  title,
  caption,
  accentColor = CHART_COLORS.dangerStrong,
  height = 420,
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

  const yMax = useMemo(() => Math.max(...data.map((d) => d.value)) * 1.15, [data])
  const yScale = useMemo(() =>
    scaleLinear().domain([0, yMax]).range([dims.boundedHeight, 0]).nice()
  , [yMax, dims.boundedHeight])

  const lineGen = useMemo(() => line()
    .x((d) => xScale(d.year))
    .y((d) => yScale(d.value))
    .curve(curveCatmullRom)
  , [xScale, yScale])

  const areaGen = useMemo(() => area()
    .x((d) => xScale(d.year))
    .y0(dims.boundedHeight)
    .y1((d) => yScale(d.value))
    .curve(curveCatmullRom)
  , [xScale, yScale, dims.boundedHeight])

  const linePath = useMemo(() => lineGen(data) || '', [lineGen, data])
  const areaPath = useMemo(() => areaGen(data) || '', [areaGen, data])

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
  const peak = data.reduce((max, d) => d.value > max.value ? d : max, data[0])
  const trough = data.reduce((min, d) => d.value < min.value ? d : min, data[0])
  const delta = last.value - peak.value
  const deltaPct = peak.value > 0 ? Math.round((delta / peak.value) * 100) : 0
  const yTicks = yScale.ticks(3)

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
              <linearGradient id="otr-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={accentColor} stopOpacity="0.32" />
                <stop offset="100%" stopColor={accentColor} stopOpacity="0.02" />
              </linearGradient>
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

              {/* area fill */}
              <motion.path
                d={areaPath}
                fill="url(#otr-fill)"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay: isVisible ? 0.8 : 0 }}
              />

              {/* animated smooth path */}
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
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: isVisible ? 0 : 0 }}
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
                const isPeak = d.year === peak.year
                const isTrough = d.year === trough.year
                const isLast = i === data.length - 1
                return (
                  <motion.circle
                    key={d.year}
                    cx={cx}
                    cy={cy}
                    r={isPeak || isTrough || isLast ? 7 : 5}
                    fill="#ffffff"
                    stroke={accentColor}
                    strokeWidth={isPeak || isTrough || isLast ? 3 : 2}
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
                const dlt = d.value - peak.value
                const dPct = peak.value > 0 ? Math.round((dlt / peak.value) * 100) : 0
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

              {/* PEAK callout */}
              <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ duration: 0.5, delay: isVisible ? 1.6 : 0 }}
              >
                <text
                  x={xScale(peak.year)}
                  y={yScale(peak.value) - 22}
                  textAnchor="middle"
                  fontSize={10}
                  fontWeight={800}
                  letterSpacing="0.18em"
                  fill="#6B7280"
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  PEAK
                </text>
                <text
                  x={xScale(peak.year)}
                  y={yScale(peak.value) - 6}
                  textAnchor="middle"
                  fontSize={18}
                  fontWeight={800}
                  fill="#1F2937"
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  {peak.value}{unit}
                </text>
              </motion.g>

              {/* TROUGH callout */}
              <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ duration: 0.5, delay: isVisible ? 1.8 : 0 }}
              >
                <text
                  x={xScale(trough.year)}
                  y={yScale(trough.value) - 22}
                  textAnchor="middle"
                  fontSize={10}
                  fontWeight={800}
                  letterSpacing="0.18em"
                  fill={accentColor}
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  LOW
                </text>
                <text
                  x={xScale(trough.year)}
                  y={yScale(trough.value) - 6}
                  textAnchor="middle"
                  fontSize={18}
                  fontWeight={800}
                  fill={accentColor}
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  {trough.value}{unit}
                </text>
              </motion.g>

              {/* NOW callout */}
              <motion.g
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 10 }}
                transition={{ duration: 0.5, delay: isVisible ? 2.0 : 0 }}
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
                  {deltaPct}% from peak
                </text>
              </motion.g>
            </g>
          </svg>
        )}
      </div>
    </Figure>
  )
}

export const OTRErosion = memo(OTRErosionInner)
export default OTRErosion
