import { memo, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY } from './_shared/tokens'
import { buildSlopeSummary } from './_shared/srSummary'

function SlopeChartInner({
  start,
  end,
  midpoints = [],
  unit = '',
  accentColor = CHART_COLORS.accent,
  title,
  caption,
  height = 260,
}) {
  const [hoveredPoint, setHoveredPoint] = useState(null)

  const allPoints = useMemo(() => [start, ...midpoints, end], [start, end, midpoints])
  const values = allPoints.map((p) => p.value)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const padding = (max - min) * 0.15 || 1
  const yMin = Math.max(0, min - padding)
  const yMax = max + padding

  const valueToY = (v) => {
    if (yMax === yMin) return 0.5
    return 1 - (v - yMin) / (yMax - yMin)
  }

  const W = 600
  const H = height
  const padX = 80
  const padY = 70
  const innerW = W - padX * 2
  const innerH = H - padY * 2

  const points = allPoints.map((p, i) => ({
    ...p,
    x: padX + (innerW / (allPoints.length - 1)) * i,
    y: padY + valueToY(p.value) * innerH,
  }))

  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  const change = end.value - start.value
  const changeText = change >= 0 ? `+${change.toFixed(change < 1 ? 1 : 0)}` : change.toFixed(change > -1 ? 1 : 0)
  const isUp = change >= 0

  const ariaSummary = buildSlopeSummary(start, end, unit)

  // Determine value text color based on accent color brightness
  const isDarkAccent = ['#DC2626', '#991B1B', '#7F1D1D', '#B91C1C', '#9A0007'].includes(accentColor)
  const valueColor = isDarkAccent ? '#1F2937' : accentColor

  return (
    <Figure title={title} caption={caption} ariaLabel={`Slope chart: ${title || ''}. ${ariaSummary}`} srSummary={ariaSummary}>
      <div className="w-full">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: H }}>
          {/* Slope line */}
          <motion.path
            d={path}
            fill="none"
            stroke={accentColor}
            strokeWidth={2.5}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />

          {/* Midpoint faint markers */}
          {points.slice(1, -1).map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={4}
              fill={accentColor}
              opacity={0.3}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
            />
          ))}

          {/* Endpoint dots with hover */}
          {[points[0], points[points.length - 1]].map((p, i) => (
            <motion.g key={i}>
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={hoveredPoint === i ? 11 : 9}
                fill={accentColor}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i === 0 ? 0.2 : 1.1, ease: 'backOut' }}
                onMouseEnter={() => setHoveredPoint(i)}
                onMouseLeave={() => setHoveredPoint(null)}
                style={{ cursor: 'pointer' }}
              />
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={hoveredPoint === i ? 11 : 9}
                fill="none"
                stroke={accentColor}
                strokeOpacity={0.25}
                strokeWidth={6}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: hoveredPoint === i ? 1.6 : 1.4, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i === 0 ? 0.3 : 1.2 }}
              />
            </motion.g>
          ))}

          {/* Endpoint labels - increased spacing */}
          {[points[0], points[points.length - 1]].map((p, i) => {
            const isStart = i === 0
            return (
              <g key={i}>
                <text
                  x={p.x}
                  y={isStart ? padY - 38 : padY - 38}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={700}
                  letterSpacing="0.1em"
                  fill={CHART_TYPOGRAPHY.axisColor}
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  style={{ textTransform: 'uppercase' }}
                >
                  {p.label}
                </text>
                <text
                  x={p.x}
                  y={padY - 14}
                  textAnchor="middle"
                  fontSize={28}
                  fontWeight={800}
                  fill={valueColor}
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  {p.value}{unit}
                </text>
              </g>
            )
          })}

          {/* Change pill in center */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.4 }}
          >
            <rect
              x={W / 2 - 56}
              y={H - padY + 18}
              width={112}
              height={28}
              rx={14}
              fill={isUp ? '#FEE2E2' : '#DCFCE7'}
              stroke={isUp ? CHART_COLORS.danger : CHART_COLORS.safe}
              strokeWidth={1}
            />
            <text
              x={W / 2}
              y={H - padY + 36}
              textAnchor="middle"
              fontSize={13}
              fontWeight={700}
              fill={isUp ? CHART_COLORS.danger : CHART_COLORS.safe}
              fontFamily={CHART_TYPOGRAPHY.fontFamily}
            >
              {changeText}{unit} {isUp ? '↑' : '↓'}
            </text>
          </motion.g>

          {/* Hover tooltip */}
          <AnimatePresence>
            {hoveredPoint !== null && (
              <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <rect
                  x={points[hoveredPoint].x - 60}
                  y={points[hoveredPoint].y - 45}
                  width={120}
                  height={32}
                  rx={6}
                  fill="#1F2937"
                  opacity={0.95}
                />
                <text
                  x={points[hoveredPoint].x}
                  y={points[hoveredPoint].y - 26}
                  textAnchor="middle"
                  fontSize={12}
                  fontWeight={600}
                  fill="#FFFFFF"
                  fontFamily={CHART_TYPOGRAPHY.fontFamily}
                >
                  {points[hoveredPoint].label}: {points[hoveredPoint].value}{unit}
                </text>
                <polygon
                  points={`${points[hoveredPoint].x - 6},${points[hoveredPoint].y - 13} ${points[hoveredPoint].x + 6},${points[hoveredPoint].y - 13} ${points[hoveredPoint].x},${points[hoveredPoint].y - 7}`}
                  fill="#1F2937"
                  opacity={0.95}
                />
              </motion.g>
            )}
          </AnimatePresence>
        </svg>
      </div>
    </Figure>
  )
}

export const SlopeChart = memo(SlopeChartInner)
export default SlopeChart
