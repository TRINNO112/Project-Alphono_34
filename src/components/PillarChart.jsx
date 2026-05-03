import { memo, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from 'recharts'
import { CHART_COLORS, CHART_TYPOGRAPHY, CHART_ANIMATION, TOOLTIP_STYLE } from './charts/_shared/tokens'

const DEFAULT_COLORS = ['#D32F2F', '#2563EB', '#16A34A', '#CA8A04', '#9333EA', '#6B7280']
const TICK_FILL = '#374151'
const GRID_STROKE = '#E5E7EB'
const TOOLTIP_ITEM_STYLE = { color: '#1f2937' }
const TOOLTIP_CURSOR = { fill: 'rgba(0,0,0,0.05)' }

/**
 * PillarChart - Responsive chart component supporting bar and pie charts
 *
 * Features:
 * - Accessible with ARIA labels and figcaptions
 * - Memoized for performance
 * - Custom color palette support
 * - Subtle entrance animations
 * - NYT/FT style visual polish
 *
 * @param {Object} props
 * @param {'bar'|'pie'} props.type - Chart type to render
 * @param {Array<Object>} props.data - Chart data array with name and value properties
 * @param {string} [props.title] - Optional chart title
 * @param {string} [props.caption] - Optional caption text
 * @param {number} [props.height=300] - Chart height in pixels
 * @param {Array<string>} [props.colors] - Optional custom color palette
 * @returns {JSX.Element} The rendered chart
 */

function PillarChartInner({ type, data, title, caption, height = 300, colors }) {
  const palette = useMemo(() => colors || DEFAULT_COLORS, [colors])
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const renderBar = () => (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={CHART_COLORS.accent} />
            <stop offset="100%" stopColor={CHART_COLORS.accentSoft} />
          </linearGradient>
        </defs>
        <CartesianGrid
          stroke={GRID_STROKE}
          strokeDasharray="3,3"
          horizontal={true}
          vertical={false}
        />
        <XAxis
          dataKey="name"
          tick={{ fill: TICK_FILL, fontSize: CHART_TYPOGRAPHY.axisFontSize }}
          axisLine={{ stroke: GRID_STROKE }}
          tickLine={{ stroke: GRID_STROKE }}
        />
        <YAxis
          tick={{ fill: TICK_FILL, fontSize: CHART_TYPOGRAPHY.axisFontSize }}
          axisLine={{ stroke: GRID_STROKE }}
          tickLine={{ stroke: GRID_STROKE }}
        />
        <Tooltip
          contentStyle={TOOLTIP_STYLE}
          itemStyle={TOOLTIP_ITEM_STYLE}
          cursor={TOOLTIP_CURSOR}
        />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill="url(#barGradient)"
              style={{
                opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.6,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )

  const renderPieLabel = ({ cx, cy, midAngle, outerRadius, name, value, index }) => {
    const RADIAN = Math.PI / 180
    const radius = outerRadius + 28
    let x = cx + radius * Math.cos(-midAngle * RADIAN)
    let y = cy + radius * Math.sin(-midAngle * RADIAN)

    if (value < 8) {
      const nudge = index % 2 === 0 ? -10 : 10
      y += nudge
    }

    return (
      <text
        x={x}
        y={y}
        fill={TICK_FILL}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={CHART_TYPOGRAPHY.axisFontSize}
        fontFamily={CHART_TYPOGRAPHY.fontFamily}
      >
        {`${name}: ${value}%`}
      </text>
    )
  }

  const renderPieCenterText = () => {
    const total = data.reduce((sum, d) => sum + d.value, 0)
    return (
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-semibold"
        style={{
          fontSize: '24px',
          fill: CHART_COLORS.accent,
          fontFamily: CHART_TYPOGRAPHY.fontFamily,
        }}
      >
        {total}%
      </text>
    )
  }

  const renderPie = () => (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          paddingAngle={3}
          label={renderPieLabel}
          labelLine={false}
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={palette[index % palette.length]}
              style={{
                opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.6,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </Pie>
        {renderPieCenterText()}
        <Tooltip
          contentStyle={TOOLTIP_STYLE}
          itemStyle={TOOLTIP_ITEM_STYLE}
        />
      </PieChart>
    </ResponsiveContainer>
  )

  const ariaDesc = (() => {
    if (!data?.length) return title || 'Chart'
    const summary = data.map((d) => `${d.name}: ${d.value}`).join('; ')
    const kind = type === 'pie' ? 'Pie chart' : 'Bar chart'
    return `${kind}${title ? ` — ${title}` : ''}. ${summary}.`
  })()

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: type === 'pie' ? CHART_ANIMATION.pieDuration : CHART_ANIMATION.barDuration,
        ease: CHART_ANIMATION.ease,
      },
    },
  }

  return (
    <motion.figure
      className="my-8"
      role="img"
      aria-label={ariaDesc}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={animationVariants}
    >
      {title && (
        <h4
          className="text-lg font-serif font-bold text-gray-900 mb-4"
          style={{ fontSize: CHART_TYPOGRAPHY.titleSize, fontWeight: CHART_TYPOGRAPHY.titleWeight }}
        >
          {title}
        </h4>
      )}
      <div className="bg-white/60 border border-gray-200 rounded-2xl p-6 backdrop-blur-sm">
        {type === 'bar' && renderBar()}
        {type === 'pie' && renderPie()}
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-3 italic font-serif">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  )
}

export const PillarChart = memo(PillarChartInner)
