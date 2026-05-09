import { memo, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { scaleLinear, scaleBand } from 'd3-scale'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY } from './_shared/tokens'
import { useChartDimensions } from '../../hooks/useChartDimensions'

/**
 * FiberizationGap — horizontal bar chart with target reference line.
 *
 * Shows tower fiberization % per state vs the True-5G target (100%).
 * Gujarat highlighted crimson, target line at 100%, "GAP" annotation.
 */
function FiberizationGapInner({
  data,
  unit = '%',
  title,
  caption,
  accentColor = CHART_COLORS.dangerStrong,
  target = 100,
  height = 380,
}) {
  const [ref, dims] = useChartDimensions({
    height,
    marginTop: 40,
    marginRight: 60,
    marginBottom: 60,
    marginLeft: 140,
  })

  const [hovered, setHovered] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  const xScale = useMemo(() =>
    scaleLinear()
      .domain([0, target])
      .range([0, dims.boundedWidth])
  , [target, dims.boundedWidth])

  const yScale = useMemo(() =>
    scaleBand()
      .domain(data.map((d) => d.state))
      .range([0, dims.boundedHeight])
      .padding(0.35)
  , [data, dims.boundedHeight])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.4 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref])

  const xTicks = xScale.ticks(5)
  const gujaratData = data.find((d) => d.state === 'Gujarat')
  const nationalAvg = data.reduce((sum, d) => sum + d.value, 0) / data.length

  const ariaSummary = data.map((d) => `${d.state}: ${d.value}${unit}`).join('; ')

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
            <g transform={`translate(${dims.margin.left}, ${dims.margin.top})`}>
              {/* x-axis gridlines */}
              {xTicks.map((t) => (
                <g key={t} transform={`translate(${xScale(t)}, 0)`}>
                  <line y1={0} y2={dims.boundedHeight} stroke="#F3F4F6" strokeWidth={1} />
                  <text
                    y={dims.boundedHeight + 20}
                    textAnchor="middle"
                    fontSize={11}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                    fill={CHART_TYPOGRAPHY.axisColor}
                  >
                    {t}{unit}
                  </text>
                </g>
              ))}

              <text
                x={dims.boundedWidth / 2}
                y={dims.boundedHeight + 42}
                textAnchor="middle"
                fontSize={10}
                fontWeight={700}
                letterSpacing="0.1em"
                fill="#9CA3AF"
                fontFamily={CHART_TYPOGRAPHY.fontFamily}
              >
                TOWER FIBERIZATION (% OF CELL TOWERS WITH FIBRE BACKHAUL)
              </text>

              {/* y-axis labels */}
              {data.map((d) => {
                const y = yScale(d.state)
                const isGujarat = d.state === 'Gujarat'
                return (
                  <text
                    key={d.state}
                    x={-12}
                    y={y + yScale.bandwidth() / 2 + 4}
                    textAnchor="end"
                    fontSize={12}
                    fontWeight={isGujarat ? 800 : 600}
                    fill={isGujarat ? accentColor : '#374151'}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  >
                    {d.state}
                  </text>
                )
              })}

              {/* national average reference line */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.4, delay: isVisible ? 0.3 : 0 }}
              >
                <line
                  x1={xScale(nationalAvg)}
                  x2={xScale(nationalAvg)}
                  y1={0}
                  y2={dims.boundedHeight}
                  stroke="#9CA3AF"
                  strokeWidth={1}
                  strokeDasharray="4,4"
                />
                <text
                  x={xScale(nationalAvg)}
                  y={-8}
                  textAnchor="middle"
                  fontSize={9}
                  fontWeight={700}
                  letterSpacing="0.1em"
                  fill="#6B7280"
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  NATIONAL AVG {nationalAvg.toFixed(0)}%
                </text>
              </motion.g>

              {/* target line at 100% */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.4, delay: isVisible ? 0.4 : 0 }}
              >
                <line
                  x1={xScale(target)}
                  x2={xScale(target)}
                  y1={0}
                  y2={dims.boundedHeight}
                  stroke="#16A34A"
                  strokeWidth={1.5}
                  strokeDasharray="6,4"
                />
                <text
                  x={xScale(target)}
                  y={-8}
                  textAnchor="end"
                  fontSize={9}
                  fontWeight={800}
                  letterSpacing="0.1em"
                  fill="#16A34A"
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  TRUE-5G TARGET {target}%
                </text>
              </motion.g>

              {/* bars */}
              {data.map((d, i) => {
                const y = yScale(d.state)
                const barW = xScale(d.value)
                const isGujarat = d.state === 'Gujarat'
                const isHovered = hovered === d.state
                return (
                  <motion.g
                    key={d.state}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: isVisible ? 0.5 + i * 0.08 : 0 }}
                    onMouseEnter={() => setHovered(d.state)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* gap fill (light) */}
                    <rect
                      x={barW}
                      y={y}
                      width={dims.boundedWidth - barW}
                      height={yScale.bandwidth()}
                      fill={isGujarat ? accentColor : '#9CA3AF'}
                      opacity={0.08}
                    />
                    {/* main bar */}
                    <motion.rect
                      x={0}
                      y={y}
                      height={yScale.bandwidth()}
                      fill={isGujarat ? accentColor : '#6B7280'}
                      opacity={isGujarat ? 1 : isHovered ? 0.9 : 0.7}
                      initial={{ width: 0 }}
                      animate={{ width: isVisible ? barW : 0 }}
                      transition={{ duration: 0.8, delay: isVisible ? 0.6 + i * 0.08 : 0, ease: [0.4, 0, 0.2, 1] }}
                    />
                    {/* value label */}
                    <motion.text
                      x={barW + 8}
                      y={y + yScale.bandwidth() / 2 + 4}
                      fontSize={12}
                      fontWeight={isGujarat ? 800 : 700}
                      fill={isGujarat ? accentColor : '#374151'}
                      fontFamily={CHART_TYPOGRAPHY.fontFamily}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isVisible ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: isVisible ? 1.2 + i * 0.08 : 0 }}
                    >
                      {d.value}{unit}
                    </motion.text>
                  </motion.g>
                )
              })}

              {/* Gujarat GAP callout */}
              {gujaratData && (
                <motion.g
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 10 }}
                  transition={{ duration: 0.5, delay: isVisible ? 1.8 : 0 }}
                >
                  <text
                    x={xScale(gujaratData.value) + 50}
                    y={yScale(gujaratData.state) + yScale.bandwidth() / 2 - 4}
                    fontSize={10}
                    fontWeight={800}
                    letterSpacing="0.18em"
                    fill={accentColor}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  >
                    {target - gujaratData.value}{unit} GAP
                  </text>
                  <text
                    x={xScale(gujaratData.value) + 50}
                    y={yScale(gujaratData.state) + yScale.bandwidth() / 2 + 12}
                    fontSize={10}
                    fontWeight={600}
                    fill="#6B7280"
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  >
                    to True-5G readiness
                  </text>
                </motion.g>
              )}

              {/* hover tooltip */}
              {hovered && (() => {
                const d = data.find((item) => item.state === hovered)
                if (!d) return null
                const cy = yScale(d.state) + yScale.bandwidth() / 2
                const cx = xScale(d.value)
                const tipRight = cx > dims.boundedWidth - 100
                return (
                  <g pointerEvents="none">
                    <g transform={`translate(${tipRight ? cx - 8 : cx + 8}, ${Math.max(20, cy - 30)})`}>
                      <rect
                        x={tipRight ? -110 : 0}
                        y={0}
                        width={110}
                        height={48}
                        rx={6}
                        fill="#ffffff"
                        stroke="#E5E7EB"
                        strokeWidth={1}
                        style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.06))' }}
                      />
                      <text x={tipRight ? -98 : 12} y={16} fontSize={10} fontWeight={700} fill="#6B7280" fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        {d.state}
                      </text>
                      <text x={tipRight ? -98 : 12} y={32} fontSize={14} fontWeight={800} fill={accentColor} fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        {d.value}{unit}
                      </text>
                      <text x={tipRight ? -98 : 12} y={44} fontSize={10} fill="#6B7280" fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        {target - d.value}{unit} from target
                      </text>
                    </g>
                  </g>
                )
              })()}
            </g>
          </svg>
        )}
      </div>
    </Figure>
  )
}

export const FiberizationGap = memo(FiberizationGapInner)
export default FiberizationGap
