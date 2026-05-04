import { motion } from 'framer-motion'
import { Cable, AlertTriangle, ArrowRight } from 'lucide-react'

export default function NetworkDependencyMap() {
  return (
    <figure className="w-full" role="img">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-auto"
        aria-label="Network dependency map showing India's west coast with submarine cable landings and data flow from Gujarat through Mumbai"
      >
        <defs>
          {/* Gradient for ocean */}
          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="100%" stopColor="#BAE6FD" />
          </linearGradient>

          {/* Gradient for land */}
          <linearGradient id="landGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="100%" stopColor="#FDE68A" />
          </linearGradient>

          {/* Glow effect for Versova */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Arrow marker */}
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
          </marker>
        </defs>

        {/* Ocean background */}
        <rect width="800" height="400" fill="url(#oceanGradient)" />

        {/* Simplified India west coast */}
        <path
          d="M 50 350 Q 100 340, 150 320 Q 200 300, 250 280 Q 300 260, 350 250 Q 400 240, 450 250 Q 500 260, 550 280 Q 600 300, 650 320 Q 700 340, 750 350"
          fill="url(#landGradient)"
          stroke="#D97706"
          strokeWidth="2"
        />

        {/* Gujarat region highlight */}
        <path
          d="M 50 350 Q 100 340, 150 320 Q 200 300, 250 280"
          fill="rgba(220, 38, 38, 0.2)"
          stroke="#DC2626"
          strokeWidth="2"
          strokeDasharray="5,5"
        />

        {/* Cable landing points */}
        {/* Mumbai/Versova - THE BOTTLENECK */}
        <g>
          <circle cx="380" cy="255" r="12" fill="#DC2626" filter="url(#glow)" />
          <circle cx="380" cy="255" r="8" fill="#EF4444" />
          <circle cx="380" cy="255" r="4" fill="#FCA5A5" />
          <text x="380" y="235" textAnchor="middle" className="text-xs font-bold fill-red-700">
            Versova
          </text>
          <text x="380" y="248" textAnchor="middle" className="text-[10px] fill-red-600">
            15 cables
          </text>
        </g>

        {/* Chennai */}
        <g>
          <circle cx="580" cy="285" r="8" fill="#2563EB" />
          <circle cx="580" cy="285" r="4" fill="#93C5FD" />
          <text x="580" y="268" textAnchor="middle" className="text-xs font-bold fill-blue-700">
            Chennai
          </text>
          <text x="580" y="280" textAnchor="middle" className="text-[10px] fill-blue-600">
            7 cables
          </text>
        </g>

        {/* Kochi */}
        <g>
          <circle cx="680" cy="315" r="6" fill="#2563EB" />
          <circle cx="680" cy="315" r="3" fill="#93C5FD" />
          <text x="680" y="300" textAnchor="middle" className="text-xs font-bold fill-blue-700">
            Kochi
          </text>
          <text x="680" y="312" textAnchor="middle" className="text-[10px] fill-blue-600">
            2 cables
          </text>
        </g>

        {/* Tuticorin */}
        <g>
          <circle cx="720" cy="325" r="5" fill="#2563EB" />
          <circle cx="720" cy="325" r="2" fill="#93C5FD" />
          <text x="720" y="345" textAnchor="middle" className="text-xs font-bold fill-blue-700">
            Tuticorin
          </text>
        </g>

        {/* Gujarat - NO LANDING */}
        <g>
          <circle cx="150" cy="320" r="10" fill="none" stroke="#DC2626" strokeWidth="3" strokeDasharray="4,4" />
          <text x="150" y="305" textAnchor="middle" className="text-xs font-bold fill-red-700">
            Gujarat
          </text>
          <text x="150" y="345" textAnchor="middle" className="text-[10px] fill-red-600 font-bold">
            0 cables
          </text>
        </g>

        {/* Data flow paths - animated */}
        {/* Gujarat to Mumbai */}
        <motion.path
          d="M 150 320 Q 250 290, 380 255"
          fill="none"
          stroke="#DC2626"
          strokeWidth="3"
          strokeDasharray="8,8"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          markerEnd="url(#arrowhead)"
        />

        {/* Mumbai to International */}
        <motion.path
          d="M 380 255 Q 450 200, 550 150"
          fill="none"
          stroke="#2563EB"
          strokeWidth="3"
          strokeDasharray="8,8"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
          markerEnd="url(#arrowhead)"
        />

        {/* International label */}
        <text x="580" y="140" textAnchor="middle" className="text-sm font-bold fill-blue-800">
          International
        </text>
        <text x="580" y="155" textAnchor="middle" className="text-xs fill-blue-600">
          (Gulf, Europe, SE Asia)
        </text>

        {/* Data packet animation - Gujarat to Mumbai */}
        <motion.circle
          cx={0}
          cy={0}
          r="6"
          fill="#DC2626"
          initial={{ cx: 150, cy: 320 }}
          animate={{
            cx: [150, 250, 380],
            cy: [320, 290, 255]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Data packet animation - Mumbai to International */}
        <motion.circle
          cx={0}
          cy={0}
          r="6"
          fill="#2563EB"
          initial={{ cx: 380, cy: 255 }}
          animate={{
            cx: [380, 450, 550],
            cy: [255, 200, 150]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Legend */}
        <g transform="translate(50, 50)">
          <rect width="180" height="90" fill="white" fillOpacity="0.9" rx="8" />
          <text x="10" y="20" className="text-xs font-bold fill-gray-700">Legend</text>

          <circle cx="20" cy="40" r="5" fill="#DC2626" />
          <text x="35" y="44" className="text-[10px] fill-gray-600">Bottleneck (Versova)</text>

          <circle cx="20" cy="60" r="5" fill="#2563EB" />
          <text x="35" y="64" className="text-[10px] fill-gray-600">Cable Landing</text>

          <circle cx="20" cy="80" r="5" fill="none" stroke="#DC2626" strokeWidth="2" strokeDasharray="2,2" />
          <text x="35" y="84" className="text-[10px] fill-gray-600">No Landing (Gujarat)</text>
        </g>

        {/* Alert callout */}
        <g transform="translate(620, 50)">
          <rect width="160" height="60" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" rx="8" />
          <AlertTriangle x="20" y="15" size={20} className="fill-red-600" />
          <text x="50" y="25" className="text-xs font-bold fill-red-700">Single Point of Failure</text>
          <text x="50" y="40" className="text-[10px] fill-red-600">15 cables within 6 km</text>
          <text x="50" y="52" className="text-[10px] fill-red-600">at Versova Beach</text>
        </g>
      </svg>

      <figcaption className="mt-4 text-sm text-gray-600 leading-relaxed">
        <strong>Figure 1:</strong> India's west coast submarine cable infrastructure. Gujarat's 1,600 km coastline has zero international cable landings. All international traffic from Gujarat — including GIFT City fintech, diamond exports, and state services — routes through the Versova bottleneck in Mumbai. Red dashed line shows the dependency path; blue shows international connectivity. Sources: TRAI Performance Indicator Report, TeleGeography Submarine Cable Map, Rest of World investigation.
      </figcaption>
    </figure>
  )
}
