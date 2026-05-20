import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts'

export default function DependencyRadar({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart data={data} cx="50%" cy="50%" outerRadius="75%">
        <PolarGrid stroke="#d1d5db" />
        <PolarAngleAxis
          dataKey="pillar"
          tick={{ fill: '#4B5563', fontSize: 13, fontFamily: 'Inter' }}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fill: '#9CA3AF', fontSize: 11 }}
        />
        <Radar
          name="Dependency %"
          dataKey="dependency"
          stroke="#B84A3E"
          fill="#B84A3E"
          fillOpacity={0.2}
          strokeWidth={2}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            fontFamily: 'Inter',
            fontSize: '13px',
            color: '#111827',
          }}
          labelStyle={{ color: '#111827', fontWeight: 700, marginBottom: 4 }}
          itemStyle={{ color: '#1f2937' }}
          formatter={(value) => [`${value}%`, 'External Dependency']}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
