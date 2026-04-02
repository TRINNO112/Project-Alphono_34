import { useSyncExternalStore } from 'react'
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

export function PillarChart({ type, data, title, caption, height = 300, colors }) {
  const palette = colors || DEFAULT_COLORS
  const isDark = useSyncExternalStore(subscribeDarkMode, getIsDark)

  const tickFill = isDark ? '#d1d5db' : '#374151'

  const tooltipStyle = {
    backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
    border: `1px solid ${isDark ? '#333' : '#e5e7eb'}`,
    borderRadius: '8px',
    color: isDark ? '#e5e7eb' : '#1f2937',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
  }

  const renderBar = () => (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data}>
        <XAxis dataKey="name" tick={{ fill: tickFill, fontSize: 13 }} />
        <YAxis tick={{ fill: tickFill, fontSize: 13 }} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={palette[index % palette.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )

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
          label={({ name, value }) => `${name}: ${value}%`}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={palette[index % palette.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
      </PieChart>
    </ResponsiveContainer>
  )

  return (
    <div className="my-8">
      {title && (
        <h4 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-4">{title}</h4>
      )}
      <div className="bg-white/60 dark:bg-dark-surface/40 border border-gray-200 dark:border-dark-border rounded-2xl p-6 backdrop-blur-sm">
        {type === 'bar' && renderBar()}
        {type === 'pie' && renderPie()}
      </div>
      {caption && (
        <p className="text-center text-sm text-gray-500 mt-3 italic font-serif">{caption}</p>
      )}
    </div>
  )
}
