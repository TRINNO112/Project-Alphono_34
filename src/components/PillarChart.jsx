import { memo, useMemo } from 'react'
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
} from 'recharts'

const DEFAULT_COLORS = ['#D32F2F', '#2563EB', '#16A34A', '#CA8A04', '#9333EA', '#6B7280']
const TICK_FILL = '#374151'
const TOOLTIP_STYLE = {
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  color: '#1f2937',
  fontSize: '14px',
  fontFamily: 'Inter, sans-serif',
}
const TOOLTIP_ITEM_STYLE = { color: '#1f2937' }
const TOOLTIP_CURSOR = { fill: 'rgba(0,0,0,0.05)' }

/**
 * PillarChart - Responsive chart component supporting bar and pie charts
 *
 * Features:
 * - Accessible with ARIA labels and figcaptions
 * - Memoized for performance
 * - Custom color palette support
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

  const renderBar = () => (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data}>
        <XAxis dataKey="name" tick={{ fill: TICK_FILL, fontSize: 13 }} />
        <YAxis tick={{ fill: TICK_FILL, fontSize: 13 }} />
        <Tooltip contentStyle={TOOLTIP_STYLE} itemStyle={TOOLTIP_ITEM_STYLE} cursor={TOOLTIP_CURSOR} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={palette[index % palette.length]} />
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

    // Nudge small adjacent slices apart to prevent label overlap
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
        fontSize={12}
        fontFamily="Inter, sans-serif"
      >
        {`${name}: ${value}%`}
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
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
          label={renderPieLabel}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={palette[index % palette.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={TOOLTIP_STYLE} itemStyle={TOOLTIP_ITEM_STYLE} />
      </PieChart>
    </ResponsiveContainer>
  )

  const ariaDesc = (() => {
    if (!data?.length) return title || 'Chart'
    const summary = data.map((d) => `${d.name}: ${d.value}`).join('; ')
    const kind = type === 'pie' ? 'Pie chart' : 'Bar chart'
    return `${kind}${title ? ` — ${title}` : ''}. ${summary}.`
  })()

  return (
    <figure className="my-8" role="img" aria-label={ariaDesc}>
      {title && (
        <h4 className="text-lg font-serif font-bold text-gray-900 mb-4">{title}</h4>
      )}
      <div className="bg-white/60 border border-gray-200 rounded-2xl p-6 backdrop-blur-sm">
        {type === 'bar' && renderBar()}
        {type === 'pie' && renderPie()}
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-3 italic font-serif">{caption}</figcaption>
      )}
    </figure>
  )
}

export const PillarChart = memo(PillarChartInner)
