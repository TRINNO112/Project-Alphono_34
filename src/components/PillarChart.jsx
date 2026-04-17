import { memo, useMemo, useSyncExternalStore } from 'react'
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

function subscribeDarkMode(callback) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}

function getIsDark() {
  return document.documentElement.classList.contains('dark')
}

function PillarChartInner({ type, data, title, caption, height = 300, colors }) {
  const palette = useMemo(() => colors || DEFAULT_COLORS, [colors])
  const isDark = useSyncExternalStore(subscribeDarkMode, getIsDark)

  const tickFill = isDark ? '#d1d5db' : '#374151'

  const tooltipStyle = useMemo(() => ({
    backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
    border: `1px solid ${isDark ? '#333' : '#e5e7eb'}`,
    borderRadius: '8px',
    color: isDark ? '#e5e7eb' : '#1f2937',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
  }), [isDark])

  const renderBar = () => (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data}>
        <XAxis dataKey="name" tick={{ fill: tickFill, fontSize: 13 }} />
        <YAxis tick={{ fill: tickFill, fontSize: 13 }} />
        <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: isDark ? '#e5e7eb' : '#1f2937' }} cursor={{ fill: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={palette[index % palette.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )

  const renderPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, value, index }) => {
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
        fill={isDark ? '#d1d5db' : '#374151'}
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
        <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: isDark ? '#e5e7eb' : '#1f2937' }} />
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
        <h4 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-4">{title}</h4>
      )}
      <div className="bg-white/60 dark:bg-dark-surface/40 border border-gray-200 dark:border-dark-border rounded-2xl p-6 backdrop-blur-sm">
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
