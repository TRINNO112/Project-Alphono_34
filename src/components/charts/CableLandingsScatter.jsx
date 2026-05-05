import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { scaleLinear, scaleBand } from 'd3-scale'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY } from './_shared/tokens'
import { useChartDimensions } from '../../hooks/useChartDimensions'

/**
 * CableLandingsScatter — scatter plot of submarine cable landings by coastal state.
 *
 * Shows the asymmetry: Gujarat has 0 landings despite 1,600 km coastline,
 * while Maharashtra has 15+ within 6 km of Versova beach.
 * Gujarat is highlighted in crimson with a "VOID" callout.
 */
function CableLandingsScatterInner({
  data,
  title,
  caption,
  accentColor = CHART_COLORS.dangerStrong,
  height = 380,
}) {
  const [ref, dims] = useChartDimensions({
    height,
    marginTop: 40,
    marginRight: 30,
    marginBottom: 60,
    marginLeft: 140,
  })

  const [hovered, setHovered] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  const xScale = useMemo(() =>
    scaleLinear()
      .domain([0, Math.max(...data.map((d) => d.cables)) * 1.1])
      .range([0, dims.boundedWidth])
  , [data, dims.boundedWidth])

  const yScale = useMemo(() =>
    scaleBand()
      .domain(data.map((d) => d.state))
      .range([0, dims.boundedHeight])
      .padding(0.4)
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
  const gujaratData = data.find((d) => d.state === 'Gujarat')

  const ariaSummary = data.map((d) => `${d.state}: ${d.cables} cables, ${d.coastline} km coastline`).join('; ')

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
                    {t}
                  </text>
                </g>
              ))}

              {/* x-axis label */}
              <text
                x={dims.boundedWidth / 2}
                y={dims.boundedHeight + 40}
                textAnchor="middle"
                fontSize={10}
                fontWeight={700}
                letterSpacing="0.1em"
                fill="#9CA3AF"
                fontFamily={CHART_TYPOGRAPHY.fontFamily}
              >
                INTERNATIONAL SUBMARINE CABLE LANDINGS
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

              {/* scatter dots */}
              {data.map((d) => {
                const cx = xScale(d.cables)
                const cy = yScale(d.state) + yScale.bandwidth() / 2
                const isGujarat = d.state === 'Gujarat'
                const isHovered = hovered === d.state
                const r = isGujarat ? 10 : 6
                return (
                  <motion.g
                    key={d.state}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: isVisible ? 0.5 + data.indexOf(d) * 0.1 : 0 }}
                    onMouseEnter={() => setHovered(d.state)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isGujarat || isHovered ? r + 3 : r}
                      fill={isGujarat ? accentColor : '#9CA3AF'}
                      opacity={isGujarat ? 1 : 0.7}
                      stroke={isGujarat ? '#ffffff' : 'none'}
                      strokeWidth={2}
                    />
                  </motion.g>
                )
              })}

              {/* Gujarat VOID callout */}
              {gujaratData && (
                <motion.g
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -10 }}
                  transition={{ duration: 0.5, delay: isVisible ? 1.2 : 0 }}
                >
                  <text
                    x={xScale(gujaratData.cables) + 20}
                    y={yScale(gujaratData.state) + yScale.bandwidth() / 2 - 8}
                    fontSize={10}
                    fontWeight={800}
                    letterSpacing="0.18em"
                    fill={accentColor}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  >
                    VOID
                  </text>
                  <text
                    x={xScale(gujaratData.cables) + 20}
                    y={yScale(gujaratData.state) + yScale.bandwidth() / 2 + 8}
                    fontSize={12}
                    fontWeight={700}
                    fill={accentColor}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  >
                    {gujaratData.coastline} km coastline
                  </text>
                </motion.g>
              )}

              {/* hover tooltip */}
              {hovered && (() => {
                const d = data.find((item) => item.state === hovered)
                if (!d) return null
                const cx = xScale(d.cables)
                const cy = yScale(d.state) + yScale.bandwidth() / 2
                const tipRight = cx > dims.boundedWidth - 100
                return (
                  <g pointerEvents="none">
                    <circle cx={cx} cy={cy} r={12} fill="none" stroke={accentColor} strokeWidth={2} opacity={0.5} />
                    <g transform={`translate(${tipRight ? cx - 8 : cx + 8}, ${Math.max(20, cy - 35)})`}>
                      <rect
                        x={tipRight ? -120 : 0}
                        y={0}
                        width={120}
                        height={56}
                        rx={6}
                        fill="#ffffff"
                        stroke="#E5E7EB"
                        strokeWidth={1}
                        style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.06))' }}
                      />
                      <text x={tipRight ? -108 : 12} y={16} fontSize={10} fontWeight={700} fill="#6B7280" fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        {d.state}
                      </text>
                      <text x={tipRight ? -108 : 12} y={32} fontSize={14} fontWeight={800} fill={accentColor} fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        {d.cables} cable{d.cables !== 1 ? 's' : ''}
                      </text>
                      <text x={tipRight ? -108 : 12} y={48} fontSize={10} fill="#6B7280" fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        {d.coastline} km coastline
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

export const CableLandingsScatter = memo(CableLandingsScatterInner)
export default CableLandingsScatter
