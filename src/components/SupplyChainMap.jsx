import { useSyncExternalStore } from 'react'
import { motion } from 'framer-motion'

function subscribeDarkMode(callback) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}

function getIsDark() {
  return document.documentElement.classList.contains('dark')
}

// Generate hexagon path string given center (cx, cy) and radius r
function hexPath(cx, cy, r) {
  const pts = []
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6 // flat-top hex
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`)
  }
  return `M${pts.join('L')}Z`
}

export function SupplyChainMap() {
  const isDark = useSyncExternalStore(subscribeDarkMode, getIsDark)

  const textColor = isDark ? '#d1d5db' : '#374151'
  const subTextColor = isDark ? '#9ca3af' : '#6b7280'
  const lineColor = '#D32F2F'
  const lineColorDim = isDark ? 'rgba(211,47,47,0.3)' : 'rgba(211,47,47,0.25)'
  const centralFill = '#D32F2F'
  const centralTextColor = '#ffffff'
  const bgRect = isDark ? '#1E1E1E' : '#fdfbf7'
  const nodeFill = isDark ? '#2a2a2a' : '#f5ead0'
  const nodeBorder = isDark ? '#444444' : '#e3c285'
  const glowColor = isDark ? 'rgba(211,47,47,0.4)' : 'rgba(211,47,47,0.2)'

  const cx = 400, cy = 310 // shifted down to avoid overlapping with top title
  const orbitR = 190 // radius of orbit increased to give more space


  // Nodes positioned in a hexagonal orbit around center
  const nodes = [
    { id: 0, label: 'Middle East',        sub: '85% Crude Oil',       sub2: '69% LNG via Hormuz',  link: '/energy',    angle: -90  },
    { id: 1, label: 'China',              sub: '65-70% Pharma APIs',  sub2: 'Paracetamol: 91%',    link: '/materials', angle: -30  },
    { id: 2, label: 'Indonesia',          sub: 'Thermal Coal',        sub2: 'Power Plant Fuel',     link: '/energy',    angle: 30   },
    { id: 3, label: 'Central Govt',       sub: 'Fiscal Transfers',    sub2: 'Capex Subsidies',      link: '/economics', angle: 90   },
    { id: 4, label: 'Bihar / UP / Odisha',sub: 'Migrant Labor',       sub2: '70% of Morbi Workers', link: '/labor',     angle: 150  },
    { id: 5, label: 'Narmada (MP)',       sub: '9 MAF Water',         sub2: 'Single Point of Failure', link: '/water',  angle: 210  },
  ]

  // Calculate node positions
  const nodePositions = nodes.map(n => {
    const rad = (n.angle * Math.PI) / 180
    return {
      ...n,
      x: cx + orbitR * Math.cos(rad),
      y: cy + orbitR * Math.sin(rad),
    }
  })

  const nodeR = 62 // slightly larger node hexagon radius
  const centerR = 60 // slightly larger center hexagon radius

  // Arrow path from node edge to center edge
  function getArrowPath(nx, ny) {
    const dx = cx - nx
    const dy = cy - ny
    const dist = Math.sqrt(dx * dx + dy * dy)
    const ux = dx / dist
    const uy = dy / dist
    // Start from node edge, end at center edge
    const sx = nx + ux * (nodeR + 4)
    const sy = ny + uy * (nodeR + 4)
    const ex = cx - ux * (centerR + 6)
    const ey = cy - uy * (centerR + 6)
    // Curved path via control point offset perpendicular
    const mx = (sx + ex) / 2 + uy * 20
    const my = (sy + ey) / 2 - ux * 20
    return `M${sx},${sy} Q${mx},${my} ${ex},${ey}`
  }

  const arrowVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay: 0.6 + i * 0.12, duration: 0.9, ease: 'easeInOut' },
    }),
  }

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  }

  const pulseVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.15, 0.35, 0.15],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <svg viewBox="0 0 800 600" className="w-full h-auto" role="img" aria-label="Hexagonal hub map showing Gujarat's external dependencies">
        {/* Background */}
        <rect x="0" y="0" width="800" height="600" rx="16" fill={bgRect} />

        {/* Defs */}
        <defs>
          <marker id="hex-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={lineColor} />
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="center-glow">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="arrow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0.4" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Orbital ring (subtle) */}
        <motion.circle
          cx={cx} cy={cy} r={orbitR}
          fill="none"
          stroke={lineColorDim}
          strokeWidth="1"
          strokeDasharray="4 6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />

        {/* Center pulse glow */}
        <motion.path
          d={hexPath(cx, cy, centerR + 15)}
          fill={glowColor}
          variants={pulseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          filter="url(#center-glow)"
        />

        {/* Arrow lines (animated curved) */}
        {nodePositions.map((node) => (
          <motion.path
            key={`arrow-${node.id}`}
            d={getArrowPath(node.x, node.y)}
            fill="none"
            stroke={lineColor}
            strokeWidth="2"
            strokeDasharray="6 4"
            markerEnd="url(#hex-arrow)"
            custom={node.id}
            variants={arrowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        ))}

        {/* Central hexagon */}
        <motion.path
          d={hexPath(cx, cy, centerR)}
          fill={centralFill}
          stroke="#9A0007"
          strokeWidth="2.5"
          filter="url(#glow)"
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
        <motion.text
          x={cx} y={cy}
          textAnchor="middle" dominantBaseline="middle"
          fill={centralTextColor}
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="700" fontSize="18" letterSpacing="3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          GUJARAT
        </motion.text>

        {/* Outer dependency nodes */}
        {nodePositions.map((node) => (
          <motion.g
            key={`node-${node.id}`}
            custom={node.id}
            variants={nodeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a href={node.link}>
              {/* Hex node background */}
              <path
                d={hexPath(node.x, node.y, nodeR)}
                fill={nodeFill}
                stroke={nodeBorder}
                strokeWidth="1.5"
                className="cursor-pointer hover:brightness-110 transition-all"
              />
              {/* Label */}
              <text
                x={node.x} y={node.y - 14}
                textAnchor="middle" dominantBaseline="middle"
                fill={textColor}
                fontFamily="'Playfair Display', Georgia, serif"
                fontWeight="600" fontSize="12"
              >
                {node.label}
              </text>
              {/* Sub-label line 1 */}
              <text
                x={node.x} y={node.y + 4}
                textAnchor="middle" dominantBaseline="middle"
                fill={subTextColor}
                fontFamily="'Inter', system-ui, sans-serif"
                fontSize="9"
              >
                {node.sub}
              </text>
              {/* Sub-label line 2 */}
              <text
                x={node.x} y={node.y + 18}
                textAnchor="middle" dominantBaseline="middle"
                fill={isDark ? '#6b7280' : '#9ca3af'}
                fontFamily="'Inter', system-ui, sans-serif"
                fontSize="8"
              >
                {node.sub2}
              </text>
            </a>
          </motion.g>
        ))}

        {/* Title */}
        <motion.text
          x={cx} y={28}
          textAnchor="middle" dominantBaseline="middle"
          fill={textColor}
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="700" fontSize="16"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          External Dependency Network
        </motion.text>
        <motion.text
          x={cx} y={48}
          textAnchor="middle" dominantBaseline="middle"
          fill={subTextColor}
          fontFamily="'Inter', system-ui, sans-serif"
          fontSize="10" letterSpacing="1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Click any node to explore the detailed analysis
        </motion.text>
      </svg>

      <p className="text-center text-sm text-gray-500 mt-4 italic font-serif">
        Figure 2: Gujarat's primary external supply chain dependencies — the state acts as dependent hub.
      </p>
    </motion.div>
  )
}
