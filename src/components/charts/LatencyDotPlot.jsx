import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { scaleLinear, scaleBand } from 'd3-scale'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY } from './_shared/tokens'
import { useChartDimensions } from '../../hooks/useChartDimensions'

/**
 * LatencyDotPlot — horizontal dot plot showing round-trip latency to Singapore.
 *
 * Shows the latency penalty for GIFT City fintech: 45 ms vs 15 ms native Singapore.
 * GIFT City is highlighted in crimson with a "3x penalty" callout.
 */
function LatencyDotPlotInner({
  data,
  unit = 'ms',
  title,
  caption,
  accentColor = CHART_COLORS.dangerStrong,
  height = 360,
}) {
  const [ref, dims] = useChartDimensions({
    height,
    marginTop: 40,
    marginRight: 30,
    marginBottom: 50,
    marginLeft: 140,
  })

  const [hovered, setHovered] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  const xScale = useMemo(() =>
    scaleLinear()
      .domain([0, Math.max(...data.map((d) => d.value)) * 1.1])
      .range([0, dims.boundedWidth])
  , [data, dims.boundedWidth])

  const yScale = useMemo(() =>
    scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, dims.boundedHeight])
      .padding(0.5)
  , [data, dims.boundedHeight])

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

  const xTicks = xScale.ticks(5)
  const giftData = data.find((d) => d.name.includes('GIFT'))
  const singaporeData = data.find((d) => d.name.includes('Singapore (native)'))

  const ariaSummary = data.map((d) => `${d.name}: ${d.value}${unit}`).join('; ')

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

              {/* x-axis label */}
              <text
                x={dims.boundedWidth / 2}
                y={dims.boundedHeight + 38}
                textAnchor="middle"
                fontSize={10}
                fontWeight={700}
                letterSpacing="0.1em"
                fill="#9CA3AF"
                fontFamily={CHART_TYPOGRAPHY.fontFamily}
              >
                ROUND-TRIP LATENCY TO SINGAPORE (ap-southeast-1)
              </text>

              {/* y-axis labels */}
              {data.map((d) => {
                const y = yScale(d.name)
                const isGift = d.name.includes('GIFT')
                return (
                  <text
                    key={d.name}
                    x={-12}
                    y={y + yScale.bandwidth() / 2 + 4}
                    textAnchor="end"
                    fontSize={12}
                    fontWeight={isGift ? 800 : 600}
                    fill={isGift ? accentColor : '#374151'}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  >
                    {d.name}
                  </text>
                )
              })}

              {/* horizontal lines */}
              {data.map((d) => {
                const y = yScale(d.name) + yScale.bandwidth() / 2
                const isGift = d.name.includes('GIFT')
                return (
                  <line
                    key={d.name}
                    x1={0}
                    x2={xScale(d.value)}
                    y1={y}
                    y2={y}
                    stroke={isGift ? accentColor : '#D1D5DB'}
                    strokeWidth={isGift ? 2 : 1.5}
                    opacity={isGift ? 1 : 0.6}
                  />
                )
              })}

              {/* dots */}
              {data.map((d) => {
                const cx = xScale(d.value)
                const cy = yScale(d.name) + yScale.bandwidth() / 2
                const isGift = d.name.includes('GIFT')
                const isHovered = hovered === d.name
                const r = isGift ? 8 : 6
                return (
                  <motion.g
                    key={d.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: isVisible ? 0.5 + data.indexOf(d) * 0.1 : 0 }}
                    onMouseEnter={() => setHovered(d.name)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isGift || isHovered ? r + 2 : r}
                      fill={isGift ? accentColor : '#9CA3AF'}
                      opacity={isGift ? 1 : 0.7}
                      stroke={isGift ? '#ffffff' : 'none'}
                      strokeWidth={2}
                    />
                  </motion.g>
                )
              })}

              {/* GIFT penalty callout */}
              {giftData && singaporeData && (
                <motion.g
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -10 }}
                  transition={{ duration: 0.5, delay: isVisible ? 1.2 : 0 }}
                >
                  <text
                    x={xScale(giftData.value) + 16}
                    y={yScale(giftData.name) - 8}
                    fontSize={10}
                    fontWeight={800}
                    letterSpacing="0.18em"
                    fill={accentColor}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  >
                    3x PENALTY
                  </text>
                  <text
                    x={xScale(giftData.value) + 16}
                    y={yScale(giftData.name) + 8}
                    fontSize={12}
                    fontWeight={700}
                    fill={accentColor}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  >
                    +{giftData.value - singaporeData.value}{unit} vs native
                  </text>
                </motion.g>
              )}

              {/* hover tooltip */}
              {hovered && (() => {
                const d = data.find((item) => item.name === hovered)
                if (!d) return null
                const cx = xScale(d.value)
                const cy = yScale(d.name) + yScale.bandwidth() / 2
                const tipRight = cx > dims.boundedWidth - 100
                return (
                  <g pointerEvents="none">
                    <circle cx={cx} cy={cy} r={10} fill="none" stroke={accentColor} strokeWidth={2} opacity={0.5} />
                    <g transform={`translate(${tipRight ? cx - 8 : cx + 8}, ${Math.max(20, cy - 30)})`}>
                      <rect
                        x={tipRight ? -100 : 0}
                        y={0}
                        width={100}
                        height={48}
                        rx={6}
                        fill="#ffffff"
                        stroke="#E5E7EB"
                        strokeWidth={1}
                        style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.06))' }}
                      />
                      <text x={tipRight ? -88 : 12} y={16} fontSize={10} fontWeight={700} fill="#6B7280" fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        {d.name}
                      </text>
                      <text x={tipRight ? -88 : 12} y={32} fontSize={14} fontWeight={800} fill={accentColor} fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        {d.value}{unit}
                      </text>
                      <text x={tipRight ? -88 : 12} y={44} fontSize={10} fill="#6B7280" fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        RT latency
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

export const LatencyDotPlot = memo(LatencyDotPlotInner)
export default LatencyDotPlot
