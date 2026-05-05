import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { scaleLinear } from 'd3-scale'
import { forceSimulation, forceX, forceCollide, forceY } from 'd3-force'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY } from './_shared/tokens'
import { useChartDimensions } from '../../hooks/useChartDimensions'

/**
 * RevenueBeeswarm — Pudding-style beeswarm of state revenue receipts.
 *
 * Shows Gujarat's position among major states. Gujarat (8.7%) is highlighted in crimson,
 * others in gray. The collision simulation creates organic clustering.
 * Hover reveals state name + value + rank.
 */
function RevenueBeeswarmInner({
  data,
  unit = '%',
  title,
  caption,
  highlightState = 'Gujarat',
  accentColor = CHART_COLORS.dangerStrong,
  height = 380,
}) {
  const [ref, dims] = useChartDimensions({
    height,
    marginTop: 30,
    marginRight: 30,
    marginBottom: 50,
    marginLeft: 68,
  })

  const [hovered, setHovered] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [nodes, setNodes] = useState([])

  const xScale = useMemo(() =>
    scaleLinear()
      .domain([0, Math.max(...data.map((d) => d.value)) * 1.1])
      .range([0, dims.boundedWidth])
  , [data, dims.boundedWidth])

  // Run force simulation
  useEffect(() => {
    if (!dims.boundedWidth || !dims.boundedHeight) return

    const initialNodes = data.map((d) => ({
      ...d,
      x: xScale(d.value),
      y: dims.boundedHeight / 2,
      r: d.state === highlightState ? 8 : 5,
    }))

    const sim = forceSimulation(initialNodes)
      .force('x', forceX((d) => xScale(d.value)).strength(0.8))
      .force('y', forceY(dims.boundedHeight / 2).strength(0.1))
      .force('collide', forceCollide((d) => d.r + 2).strength(0.7))
      .stop()

    // Run simulation for ~300 ticks
    for (let i = 0; i < 300; i++) {
      sim.tick()
    }

    setNodes(initialNodes)
  }, [data, dims.boundedWidth, dims.boundedHeight, xScale, highlightState])

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
  const gujaratNode = nodes.find((n) => n.state === highlightState)
  const gujaratRank = data.findIndex((d) => d.state === highlightState) + 1

  const ariaSummary = data.map((d) => `${d.state}: ${d.value}${unit}`).join('; ')

  const isReady = dims.boundedWidth > 0 && nodes.length > 0

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
                y={dims.boundedHeight + 40}
                textAnchor="middle"
                fontSize={10}
                fontWeight={700}
                letterSpacing="0.1em"
                fill="#9CA3AF"
                fontFamily={CHART_TYPOGRAPHY.fontFamily}
              >
                REVENUE RECEIPTS AS % OF GSDP
              </text>

              {/* beeswarm dots */}
              {nodes.map((d, i) => {
                const isGujarat = d.state === highlightState
                const isHovered = hovered === d.state
                return (
                  <motion.g
                    key={d.state}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: isVisible ? 0.5 + i * 0.02 : 0 }}
                    onMouseEnter={() => setHovered(d.state)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle
                      cx={d.x}
                      cy={d.y}
                      r={isGujarat || isHovered ? d.r + 2 : d.r}
                      fill={isGujarat ? accentColor : '#9CA3AF'}
                      opacity={isGujarat ? 1 : 0.6}
                      stroke={isGujarat ? '#ffffff' : 'none'}
                      strokeWidth={2}
                    />
                  </motion.g>
                )
              })}

              {/* Gujarat label */}
              {gujaratNode && (
                <motion.g
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -10 }}
                  transition={{ duration: 0.5, delay: isVisible ? 1.2 : 0 }}
                >
                  <text
                    x={gujaratNode.x}
                    y={gujaratNode.y - 14}
                    textAnchor="middle"
                    fontSize={10}
                    fontWeight={800}
                    letterSpacing="0.1em"
                    fill={accentColor}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  >
                    RANK #{gujaratRank}
                  </text>
                  <text
                    x={gujaratNode.x}
                    y={gujaratNode.y - 2}
                    textAnchor="middle"
                    fontSize={14}
                    fontWeight={800}
                    fill={accentColor}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  >
                    {gujaratNode.value}{unit}
                  </text>
                </motion.g>
              )}

              {/* hover tooltip */}
              {hovered && (() => {
                const d = nodes.find((n) => n.state === hovered)
                if (!d) return null
                const rank = data.findIndex((item) => item.state === hovered) + 1
                const tipRight = d.x > dims.boundedWidth - 80
                return (
                  <g pointerEvents="none">
                    <circle cx={d.x} cy={d.y} r={d.r + 4} fill="none" stroke={accentColor} strokeWidth={2} opacity={0.5} />
                    <g transform={`translate(${tipRight ? d.x - 8 : d.x + 8}, ${Math.max(20, d.y - 30)})`}>
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
                        Rank #{rank}
                      </text>
                      <text x={tipRight ? -88 : 12} y={32} fontSize={14} fontWeight={800} fill={accentColor} fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        {d.value}{unit}
                      </text>
                      <text x={tipRight ? -88 : 12} y={44} fontSize={9} fill="#6B7280" fontFamily={CHART_TYPOGRAPHY.fontFamily}>
                        {d.state}
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

export const RevenueBeeswarm = memo(RevenueBeeswarmInner)
export default RevenueBeeswarm
