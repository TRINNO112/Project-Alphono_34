import { useState, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, Zap, Factory, Users, TrendingDown, Droplets, Ship } from 'lucide-react'

function subscribeDarkMode(callback) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}
function getIsDark() {
  return document.documentElement.classList.contains('dark')
}

const nodes = [
  {
    id: 'trigger',
    label: 'West Asia War',
    sublabel: 'March 2026',
    icon: AlertTriangle,
    tier: 0,
    col: 1,
    color: '#D32F2F',
    detail: 'Escalation in the Persian Gulf region threatens Strait of Hormuz — 11-day partial disruption. Global LNG and crude prices spike 30-40%.',
    sources: ['Business Today — "West Asia Tensions Threaten LNG Flows" (Mar 2026)', 'The Print — "A War in the Gulf, a Crisis in Gujarat\'s Morbi" (Mar 2026)'],
  },
  {
    id: 'lng-spike',
    label: 'LNG Price Spike',
    sublabel: '+40% in 2 weeks',
    icon: Zap,
    tier: 1,
    col: 0,
    color: '#F59E0B',
    detail: 'LNG spot prices surge from $12 to $17/MMBtu. Gujarat consumes ~30% of India\'s natural gas. Gas-dependent industries face immediate cost shock.',
    sources: ['Global Energy Monitor — Mundra Thermal Power Project', 'Desh Gujarat — "400+ Ceramic Units Shut Due to Gas Crisis" (Mar 2026)'],
  },
  {
    id: 'crude-risk',
    label: 'Crude Supply Threat',
    sublabel: '36% from Russia via sea',
    icon: Ship,
    tier: 1,
    col: 2,
    color: '#EF4444',
    detail: 'Russia is now Gujarat\'s #1 crude supplier at 36%. All shipments transit through Hormuz-adjacent waters. Nayara (Rosneft-owned) faces dual EU sanctions + supply route risk.',
    sources: ['Bloomberg — "Reliance Resumes Russian Oil for Jamnagar" (Dec 2025)', 'Wikipedia — Jamnagar Refinery'],
  },
  {
    id: 'morbi-shutdown',
    label: '550+ Morbi Units Shut',
    sublabel: 'Ceramics capital dark',
    icon: Factory,
    tier: 2,
    col: 0,
    color: '#DC2626',
    detail: '550+ ceramic manufacturing units in Morbi shut down — unable to absorb gas price hike. Morbi produces 70% of India\'s ceramics and 5% of global output. Daily losses estimated at Rs 50-80 Cr.',
    sources: ['Desh Gujarat — "400+ Ceramic Units Shut" (Mar 2026)', 'The Print — "Gujarat\'s Morbi Counts the Cost"'],
  },
  {
    id: 'tata-mundra',
    label: 'Tata Mundra Offline',
    sublabel: '9-month shutdown',
    icon: Zap,
    tier: 2,
    col: 1,
    color: '#B91C1C',
    detail: 'Tata Mundra UMPP (4,000 MW) goes offline due to imported coal economics — unviable at elevated prices. South Gujarat grid loses critical baseload capacity.',
    sources: ['Global Energy Monitor — Mundra Thermal Power Project (Tata)'],
  },
  {
    id: 'grid-collapse',
    label: '4,000 MW Grid Drop',
    sublabel: '90 minutes, South Gujarat',
    icon: Zap,
    tier: 2,
    col: 2,
    color: '#991B1B',
    detail: 'South Gujarat grid suffers 4,000 MW frequency collapse in 90 minutes. Industrial areas face 8-12 hour unscheduled outages. Cold chain, pharma production disrupted.',
    sources: ['Energy pillar analysis — Project Alphono 34'],
  },
  {
    id: 'us-tariffs',
    label: 'US Tariff Shock',
    sublabel: '26% on Indian goods',
    icon: TrendingDown,
    tier: 1,
    col: 1,
    color: '#7C3AED',
    detail: 'Simultaneous US tariff escalation hits Gujarat\'s diamond and textile exports. Surat polishes 9 out of 10 global diamonds — directly exposed to US demand collapse.',
    sources: ['The Print — "71 Suicides Among Surat\'s Diamond Workers" (2024-25)'],
  },
  {
    id: 'labor-exodus',
    label: '5-6 Lakh Workers Flee',
    sublabel: 'Twin-crisis exodus',
    icon: Users,
    tier: 3,
    col: 0,
    color: '#7C3AED',
    detail: 'Combined gas crisis + tariff shock triggers mass migrant worker exodus. 5-6 lakh workers return to UP, Bihar, Odisha. Morbi, Surat, Bharuch worst hit. Echoes COVID-era exodus pattern.',
    sources: ['The Print — "A War in the Gulf, a Crisis in Gujarat\'s Morbi"', 'Scroll.in — "Attacks on Migrant Workers: 20,000 Flee"'],
  },
  {
    id: 'diamond-crash',
    label: '1.5L Diamond Jobs Lost',
    sublabel: '71 suicides in 18 months',
    icon: Users,
    tier: 3,
    col: 1,
    color: '#9333EA',
    detail: '1.5 lakh jobs lost in Surat\'s diamond polishing industry. 71 documented suicides among diamond workers in 18 months. Industry that employed 8 lakh workers faces existential US demand crisis.',
    sources: ['The Print — "71 Suicides Among Surat\'s Diamond Workers in 18 Months"'],
  },
  {
    id: 'powerloom-loss',
    label: 'Rs 100 Cr/Day Losses',
    sublabel: 'Surat powerloom crisis',
    icon: TrendingDown,
    tier: 3,
    col: 2,
    color: '#DC2626',
    detail: 'Surat powerloom sector — 8 lakh+ workers — loses Rs 100 Cr daily as gas prices make operations unviable and export orders dry up from US tariffs.',
    sources: ['Labor pillar analysis — Project Alphono 34'],
  },
  {
    id: 'fiscal-hit',
    label: 'OTR Drops to 4.9%',
    sublabel: 'GST + industrial collapse',
    icon: TrendingDown,
    tier: 4,
    col: 1,
    color: '#059669',
    detail: 'Own Tax Revenue drops to 4.9% of GSDP — lowest in recent history. CAG flags Rs 11,929 Cr overstated surplus. Central grants already at 0.53%. Fiscal space near zero.',
    sources: ['CAG — "Gujarat Fiscal Paradox: Growth Amid Declining Revenues"', 'NITI Aayog Macro Fiscal Landscape — Gujarat Summary'],
  },
]

const connections = [
  { from: 'trigger', to: 'lng-spike' },
  { from: 'trigger', to: 'crude-risk' },
  { from: 'trigger', to: 'us-tariffs' },
  { from: 'lng-spike', to: 'morbi-shutdown' },
  { from: 'lng-spike', to: 'tata-mundra' },
  { from: 'crude-risk', to: 'grid-collapse' },
  { from: 'tata-mundra', to: 'grid-collapse' },
  { from: 'morbi-shutdown', to: 'labor-exodus' },
  { from: 'us-tariffs', to: 'diamond-crash' },
  { from: 'us-tariffs', to: 'powerloom-loss' },
  { from: 'grid-collapse', to: 'powerloom-loss' },
  { from: 'labor-exodus', to: 'fiscal-hit' },
  { from: 'diamond-crash', to: 'fiscal-hit' },
  { from: 'powerloom-loss', to: 'fiscal-hit' },
]

// Layout constants
const NODE_W = 210
const NODE_H = 78
const TIER_GAP_Y = 125
const COL_GAP_X = 240
const PADDING_X = 60
const PADDING_TOP = 40

function getNodePos(node) {
  const x = PADDING_X + node.col * COL_GAP_X + (NODE_W / 2)
  const y = PADDING_TOP + node.tier * TIER_GAP_Y + (NODE_H / 2)
  return { x, y }
}

const SVG_W = PADDING_X * 2 + 2 * COL_GAP_X + NODE_W
const SVG_H = PADDING_TOP * 2 + 4 * TIER_GAP_Y + NODE_H

function CurvedArrow({ from, to, index, isDark }) {
  const start = getNodePos(from)
  const end = getNodePos(to)

  const midY = (start.y + end.y) / 2
  const dx = end.x - start.x
  const cpOffset = dx === 0 ? 40 : 0

  const path = `M ${start.x} ${start.y + NODE_H / 2} C ${start.x + cpOffset} ${midY}, ${end.x - cpOffset} ${midY}, ${end.x} ${end.y - NODE_H / 2}`

  return (
    <motion.path
      d={path}
      fill="none"
      stroke={isDark ? 'rgba(211,47,47,0.35)' : 'rgba(211,47,47,0.25)'}
      strokeWidth={2}
      strokeDasharray="6,4"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 + index * 0.08, ease: 'easeOut' }}
    />
  )
}

function NodeBox({ node, isSelected, onSelect, index, isDark }) {
  const pos = getNodePos(node)
  const Icon = node.icon
  const active = isSelected === node.id
  const gradId = `grad-${node.id}`

  return (
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.06 }}
      style={{ cursor: 'pointer' }}
      onClick={() => onSelect(node.id === isSelected ? null : node.id)}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={node.color} stopOpacity={active ? 0.18 : 0.08} />
          <stop offset="100%" stopColor={node.color} stopOpacity={0} />
        </linearGradient>
      </defs>

      {/* Outer glow when selected */}
      {active && (
        <rect
          x={pos.x - NODE_W / 2 - 3}
          y={pos.y - NODE_H / 2 - 3}
          width={NODE_W + 6}
          height={NODE_H + 6}
          rx={18}
          fill="none"
          stroke={node.color}
          strokeWidth={1.5}
          opacity={0.5}
          strokeDasharray="4,3"
        />
      )}

      {/* Card background with subtle gradient fill */}
      <rect
        x={pos.x - NODE_W / 2}
        y={pos.y - NODE_H / 2}
        width={NODE_W}
        height={NODE_H}
        rx={14}
        fill={`url(#${gradId})`}
        stroke={active ? node.color : (isDark ? '#333' : '#e5e7eb')}
        strokeWidth={active ? 1.5 : 0.75}
      />
      {/* Inner solid fill for readability */}
      <rect
        x={pos.x - NODE_W / 2 + 0.5}
        y={pos.y - NODE_H / 2 + 0.5}
        width={NODE_W - 1}
        height={NODE_H - 1}
        rx={13}
        fill={isDark ? 'rgba(30,30,30,0.85)' : 'rgba(255,255,255,0.88)'}
      />

      {/* Top accent line */}
      <rect
        x={pos.x - NODE_W / 2 + 14}
        y={pos.y - NODE_H / 2}
        width={NODE_W - 28}
        height={2.5}
        rx={1.25}
        fill={node.color}
        opacity={active ? 1 : 0.6}
      />

      {/* Icon circle */}
      <circle
        cx={pos.x - NODE_W / 2 + 30}
        cy={pos.y + 2}
        r={15}
        fill={node.color + '18'}
        stroke={node.color + '30'}
        strokeWidth={1}
      />

      {/* Icon via foreignObject */}
      <foreignObject
        x={pos.x - NODE_W / 2 + 15}
        y={pos.y - 13}
        width={30}
        height={30}
      >
        <div xmlns="http://www.w3.org/1999/xhtml" className="flex items-center justify-center w-full h-full">
          <Icon size={15} color={node.color} />
        </div>
      </foreignObject>

      {/* Label — truncated with ellipsis for long text */}
      <text
        x={pos.x - NODE_W / 2 + 54}
        y={pos.y - 4}
        fill={isDark ? '#f3f4f6' : '#111827'}
        fontSize={11.5}
        fontWeight={700}
        fontFamily="Inter, sans-serif"
      >
        {node.label.length > 22 ? node.label.slice(0, 21) + '…' : node.label}
      </text>

      {/* Sublabel */}
      <text
        x={pos.x - NODE_W / 2 + 54}
        y={pos.y + 14}
        fill={isDark ? '#6b7280' : '#9ca3af'}
        fontSize={9.5}
        fontFamily="Inter, sans-serif"
      >
        {node.sublabel}
      </text>
    </motion.g>
  )
}

export function CascadeDiagram() {
  const isDark = useSyncExternalStore(subscribeDarkMode, getIsDark)
  const [selected, setSelected] = useState(null)

  const selectedNode = nodes.find(n => n.id === selected)

  // Find connections that involve the selected node
  const highlightedConnections = selected
    ? connections.filter(c => c.from === selected || c.to === selected)
    : []

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">
          The 2026 Cascade
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Click any node to see how one crisis triggered the next. Every connection represents a documented dependency failure.
        </p>
      </div>

      {/* SVG Diagram */}
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="w-full max-w-3xl mx-auto"
          style={{ minWidth: '600px' }}
        >
          {/* Tier labels */}
          {['TRIGGER', 'FIRST ORDER', 'SECOND ORDER', 'LABOR & INDUSTRY', 'FISCAL IMPACT'].map((label, i) => (
            <text
              key={label}
              x={12}
              y={PADDING_TOP + i * TIER_GAP_Y + NODE_H / 2 + 4}
              fill={isDark ? '#4b5563' : '#d1d5db'}
              fontSize={8}
              fontFamily="Inter, sans-serif"
              fontWeight={700}
              letterSpacing="0.1em"
              transform={`rotate(-90, 12, ${PADDING_TOP + i * TIER_GAP_Y + NODE_H / 2})`}
              textAnchor="middle"
            >
              {label}
            </text>
          ))}

          {/* Connections */}
          {connections.map((conn, i) => {
            const fromNode = nodes.find(n => n.id === conn.from)
            const toNode = nodes.find(n => n.id === conn.to)
            const isHighlighted = highlightedConnections.some(
              h => h.from === conn.from && h.to === conn.to
            )
            return (
              <g key={`${conn.from}-${conn.to}`} opacity={selected ? (isHighlighted ? 1 : 0.15) : 1}>
                <CurvedArrow from={fromNode} to={toNode} index={i} isDark={isDark} />
              </g>
            )
          })}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <g key={node.id} opacity={selected ? (selected === node.id || highlightedConnections.some(c => c.from === node.id || c.to === node.id) ? 1 : 0.3) : 1}>
              <NodeBox
                node={node}
                isSelected={selected}
                onSelect={setSelected}
                index={i}
                isDark={isDark}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Detail panel */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="max-w-3xl mx-auto p-6 rounded-2xl border border-gray-200 dark:border-dark-border bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: selectedNode.color + '20' }}
              >
                <selectedNode.icon size={20} color={selectedNode.color} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-1">
                  {selectedNode.label}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {selectedNode.detail}
                </p>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-semibold">Sources</p>
                  {selectedNode.sources.map((s, i) => (
                    <p key={i} className="text-xs text-gray-500 dark:text-gray-400">
                      <span className="text-crimson font-bold">[{i + 1}]</span> {s}
                    </p>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="shrink-0 text-gray-400 hover:text-crimson transition-colors text-lg leading-none"
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-semibold">
        {[
          { color: '#D32F2F', label: 'Trigger Event' },
          { color: '#F59E0B', label: 'Energy Shock' },
          { color: '#7C3AED', label: 'Trade & Labor' },
          { color: '#059669', label: 'Fiscal Impact' },
        ].map(item => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}
