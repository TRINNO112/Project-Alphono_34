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

export function SupplyChainMap() {
  const isDark = useSyncExternalStore(subscribeDarkMode, getIsDark)

  const textColor = isDark ? '#d1d5db' : '#374151'       // gray-300 / gray-700
  const subTextColor = isDark ? '#9ca3af' : '#6b7280'     // gray-400 / gray-500
  const lineColor = '#D32F2F'                              // crimson
  const centralFill = '#D32F2F'
  const centralTextColor = '#ffffff'
  const bgRect = isDark ? '#1E1E1E' : '#fdfbf7'           // dark-surface / parchment-50
  const nodeBg = isDark ? '#2a2a2a' : '#f5ead0'           // darker surface / parchment-200
  const nodeBorder = isDark ? '#333333' : '#e3c285'        // dark-border / parchment-400

  // Arrow draw animation
  const arrowVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay: 0.3 + i * 0.15, duration: 0.8, ease: 'easeInOut' },
    }),
  }

  // Node fade-in animation
  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2 + i * 0.15, duration: 0.5, ease: 'easeOut' },
    }),
  }

  // Supply chain nodes
  const nodes = [
    { id: 0, x: 150, y: 60,  label: 'Middle East',      sub: '85% Crude, 69% LNG',  link: '/energy',     arrowTo: { x: 340, y: 210 } },
    { id: 1, x: 650, y: 60,  label: 'China',             sub: '65-70% Pharma APIs',   link: '/materials',  arrowTo: { x: 470, y: 210 } },
    { id: 2, x: 50,  y: 260, label: 'Narmada (MP)',      sub: '9 MAF Water',          link: '/water',      arrowTo: { x: 320, y: 260 } },
    { id: 3, x: 750, y: 260, label: 'Indonesia',         sub: 'Coal for Power',       link: '/energy',     arrowTo: { x: 490, y: 260 } },
    { id: 4, x: 150, y: 450, label: 'Bihar / UP / Odisha', sub: 'Migrant Labor',      link: '/labor',      arrowTo: { x: 340, y: 310 } },
    { id: 5, x: 650, y: 450, label: 'Central Govt',      sub: 'Fiscal Transfers',     link: '/economics',  arrowTo: { x: 470, y: 310 } },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <svg viewBox="0 0 800 500" className="w-full h-auto" role="img" aria-label="Supply chain schematic showing Gujarat's external dependencies">
        {/* Background */}
        <rect x="0" y="0" width="800" height="500" rx="16" fill={bgRect} />

        {/* Defs: arrowhead marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="8"
            refX="9"
            refY="4"
            orient="auto"
          >
            <polygon points="0 0, 10 4, 0 8" fill={lineColor} />
          </marker>
        </defs>

        {/* Arrow lines (animated) */}
        {nodes.map((node) => (
          <motion.line
            key={`arrow-${node.id}`}
            x1={node.x}
            y1={node.y}
            x2={node.arrowTo.x}
            y2={node.arrowTo.y}
            stroke={lineColor}
            strokeWidth="2"
            strokeDasharray="6 3"
            markerEnd="url(#arrowhead)"
            custom={node.id}
            variants={arrowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        ))}

        {/* Central Gujarat hexagon-ish rounded rect */}
        <motion.rect
          x="330"
          y="215"
          width="150"
          height="80"
          rx="16"
          fill={centralFill}
          stroke="#9A0007"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          style={{ transformOrigin: '405px 255px' }}
        />
        <motion.text
          x="405"
          y="250"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={centralTextColor}
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="700"
          fontSize="18"
          letterSpacing="3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          GUJARAT
        </motion.text>
        <motion.text
          x="405"
          y="272"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(255,255,255,0.7)"
          fontFamily="'Inter', system-ui, sans-serif"
          fontSize="9"
          letterSpacing="2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          DEPENDENT STATE
        </motion.text>

        {/* Source nodes */}
        {nodes.map((node) => (
          <motion.g
            key={`node-${node.id}`}
            custom={node.id}
            variants={nodeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a href={node.link}>
              {/* Node background */}
              <rect
                x={node.x - 75}
                y={node.y - 28}
                width="150"
                height="56"
                rx="12"
                fill={nodeBg}
                stroke={nodeBorder}
                strokeWidth="1.5"
                className="cursor-pointer"
              />
              {/* Node label */}
              <text
                x={node.x}
                y={node.y - 6}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={textColor}
                fontFamily="'Playfair Display', Georgia, serif"
                fontWeight="600"
                fontSize="13"
              >
                {node.label}
              </text>
              {/* Node sub-label */}
              <text
                x={node.x}
                y={node.y + 14}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={subTextColor}
                fontFamily="'Inter', system-ui, sans-serif"
                fontSize="10"
              >
                {node.sub}
              </text>
            </a>
          </motion.g>
        ))}
      </svg>

      <p className="text-center text-sm text-gray-500 mt-4 italic font-serif">
        Figure 2: Schematic of Gujarat&apos;s primary external supply chain dependencies
      </p>
    </motion.div>
  )
}
