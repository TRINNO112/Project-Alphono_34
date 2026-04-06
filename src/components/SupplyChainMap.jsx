import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps'
import { ArrowRight, ShieldAlert } from 'lucide-react'

// === PERFECT India base map ===
const indiaUrl = "https://raw.githubusercontent.com/udit-001/india-maps-data/main/geojson/india.geojson";

// === Standard lat/long country GeoJSONs from the johan repository ===
const countryBaseUrl = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries";

// Middle East cluster - multiple countries to fill the region visually
const middleEastCountries = [
  `${countryBaseUrl}/SAU.geo.json`, // Saudi Arabia
  `${countryBaseUrl}/ARE.geo.json`, // UAE
  `${countryBaseUrl}/IRQ.geo.json`, // Iraq
  `${countryBaseUrl}/IRN.geo.json`, // Iran
  `${countryBaseUrl}/OMN.geo.json`, // Oman
  `${countryBaseUrl}/KWT.geo.json`, // Kuwait
  `${countryBaseUrl}/QAT.geo.json`, // Qatar
  `${countryBaseUrl}/YEM.geo.json`, // Yemen
];

const chinaUrl = `${countryBaseUrl}/CHN.geo.json`;
const indonesiaUrl = `${countryBaseUrl}/IDN.geo.json`;

// Heat-Map Core Origination Centers
const domesticFlows = [
  { name: "Uttar Pradesh", coords: [80.5, 26.8] },
  { name: "Bihar", coords: [85.5, 25.5] },
  { name: "Odisha", coords: [84.3, 20.3] },
  { name: "Jharkhand", coords: [85.3, 23.8] },
  { name: "Chhattisgarh", coords: [81.6, 21.3] },
  { name: "Madhya Pradesh", coords: [77.5, 23.5] },
  { name: "Maharashtra", coords: [76.0, 19.5] },
  { name: "Haryana", coords: [76.4, 29.2] },
  { name: "West Bengal", coords: [88.0, 23.5] },
  { name: "Rajasthan", coords: [74.0, 26.5] }
];

const laborTelemetry = {
  category: "Demographics",
  stat: "Mass Ecosystem",
  desc: "Total structural dependency on millions of external workers across heavily industrialized corridors.",
  color: "#9333EA",
}

// Foreign dependency metadata
const foreignNodes = {
  china: {
    name: "China",
    lineOrigin: [105.0, 35.0],
    category: "Raw Materials",
    stat: "65-70% APIs",
    desc: "Paracetamol 91% imported. Extreme structural reliance for pharma belts.",
    color: "#2563EB", // Blue
    fill: "#DBEAFE", // Light blue fill
  },
  middleEast: {
    name: "Middle East",
    lineOrigin: [48.0, 24.0],
    category: "Hydrocarbons",
    stat: "85% Crude Oil",
    desc: "69% LNG via Hormuz constraint. Refineries at Jamnagar depend on Gulf exports.",
    color: "#D97706",
    fill: "#FDE68A",
  },
  indonesia: {
    name: "Indonesia",
    lineOrigin: [115.0, -2.0],
    category: "Energy Grid",
    stat: "Thermal Coal",
    desc: "Coastal mega-plants operating specifically to process imported Indonesian coal.",
    color: "#0D9488", // Teal
    fill: "#CCFBF1", // Light teal fill
  }
};

const gujaratCoords = [71.5, 22.5]

export function SupplyChainMap() {
  const [hoveredNode, setHoveredNode] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (evt) => {
    setMousePosition({ x: evt.clientX, y: evt.clientY })
  }

  return (
    <div className="w-full my-16">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 text-crimson font-semibold tracking-widest text-sm mb-3">
          <ShieldAlert className="w-5 h-5" />
          <span>GLOBAL MACRO-DEPENDENCY</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white tracking-tight">External Dependency Network</h3>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
          Tracing external supply chains directly into Gujarat. Hover over any region to inspect vulnerability metrics.
        </p>
      </div>

      <div
        className="relative w-full mx-auto bg-gray-50/50 dark:bg-dark-bg/50 border border-gray-200 dark:border-dark-border rounded-3xl shadow-sm overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* SINGLE unified ComposableMap - expanded to fill available width */}
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 450, center: [78, 22] }}
          style={{ width: '100%', height: 'auto', aspectRatio: '1.7 / 1' }}
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* ========== LAYER 1: Foreign countries (rendered FIRST = behind India) ========== */}

          {/* China */}
          <Geographies geography={chinaUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey} geography={geo}
                  onMouseEnter={() => setHoveredNode(foreignNodes.china)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{
                    default: { fill: foreignNodes.china.fill, outline: "none", stroke: foreignNodes.china.color, strokeWidth: 0.5 },
                    hover: { fill: foreignNodes.china.color, outline: "none", cursor: "pointer" },
                    pressed: { fill: foreignNodes.china.fill, outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Middle East (multiple countries) */}
          {middleEastCountries.map((url, idx) => (
            <Geographies key={`me-${idx}`} geography={url}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey} geography={geo}
                    onMouseEnter={() => setHoveredNode(foreignNodes.middleEast)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{
                      default: { fill: foreignNodes.middleEast.fill, outline: "none", stroke: foreignNodes.middleEast.color, strokeWidth: 0.5 },
                      hover: { fill: foreignNodes.middleEast.color, outline: "none", cursor: "pointer" },
                      pressed: { fill: foreignNodes.middleEast.fill, outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
          ))}

          {/* Indonesia */}
          <Geographies geography={indonesiaUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey} geography={geo}
                  onMouseEnter={() => setHoveredNode(foreignNodes.indonesia)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{
                    default: { fill: foreignNodes.indonesia.fill, outline: "none", stroke: foreignNodes.indonesia.color, strokeWidth: 0.5 },
                    hover: { fill: foreignNodes.indonesia.color, outline: "none", cursor: "pointer" },
                    pressed: { fill: foreignNodes.indonesia.fill, outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* ========== LAYER 2: India (rendered LAST = always on top, covers China overlap) ========== */}
          <Geographies geography={indiaUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setHoveredNode({ category: "Target Vector", name: "India", stat: "Economic Hub", desc: "The industrial convergence point of external dependencies.", color: "#DC2626" })}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{
                    default: { fill: "#E5E7EB", outline: "none", stroke: "#9CA3AF", strokeWidth: 0.5 },
                    hover: { fill: "#D1D5DB", outline: "none", stroke: "#6B7280", cursor: "pointer" },
                    pressed: { fill: "#E5E7EB", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* ========== LAYER 3: Flow Lines & Markers ========== */}

          {/* Domestic Flow Lines & Heat Map Nodes */}
          {domesticFlows.map((flow, i) => (
            <g key={`dom-flow-${i}`}>
              <Line
                from={flow.coords} to={gujaratCoords}
                stroke="#A855F7" strokeWidth={1.5} strokeDasharray="3 4"
                className="opacity-40"
              />
              <Marker
                coordinates={flow.coords}
                onMouseEnter={() => setHoveredNode({ ...laborTelemetry, name: flow.name })}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <circle r={10} fill="#D8B4FE" opacity={0.5} filter="url(#glow)" className="cursor-pointer" />
                <circle r={3} fill="#9333EA" />
              </Marker>
            </g>
          ))}

          {/* Foreign Flow Lines + Anchor Dots */}
          {Object.values(foreignNodes).map((node) => (
            <g key={`for-flow-${node.name}`}>
              <Marker coordinates={node.lineOrigin}>
                <circle r={5} fill={node.color} stroke="#FFFFFF" strokeWidth={1.5} />
              </Marker>
              <Line
                from={node.lineOrigin} to={gujaratCoords}
                stroke={node.color} strokeWidth={2} strokeLinecap="round" strokeDasharray="4 6"
                className="opacity-60"
              />
            </g>
          ))}

          {/* Foreign Labels - Large Bold Text */}
          <Marker coordinates={[105, 38]}>
            <text textAnchor="middle" style={{ fontFamily: "serif", fontSize: "18px", fontWeight: "bold", fill: "#1E40AF", letterSpacing: '3px' }}>
              CHINA
            </text>
          </Marker>
          <Marker coordinates={[48, 20]}>
            <text textAnchor="middle" style={{ fontFamily: "serif", fontSize: "14px", fontWeight: "bold", fill: "#92400E", letterSpacing: '2px' }}>
              MIDDLE EAST
            </text>
          </Marker>
          <Marker coordinates={[115, -7]}>
            <text textAnchor="middle" style={{ fontFamily: "serif", fontSize: "14px", fontWeight: "bold", fill: "#0F766E", letterSpacing: '2px' }}>
              INDONESIA
            </text>
          </Marker>

          {/* Gujarat Target */}
          <Marker coordinates={gujaratCoords}>
            <circle r={7} fill="#DC2626" stroke="#FFFFFF" strokeWidth={2} />
            <text textAnchor="end" x={-12} y={5} style={{ fontFamily: "serif", fontSize: "12px", fontWeight: "bold", fill: "#DC2626" }}>
              GUJARAT
            </text>
          </Marker>

        </ComposableMap>

        {/* ============ HOVER TOOLTIP ============ */}
        <AnimatePresence>
          {hoveredNode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 5 }}
              transition={{ duration: 0.15 }}
              className="fixed z-50 pointer-events-none"
              style={{ left: mousePosition.x + 20, top: mousePosition.y + 20, width: '240px' }}
            >
              <div className="bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border border-gray-200 dark:border-dark-border shadow-2xl p-4 rounded-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: hoveredNode.color }}></div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400">
                    {hoveredNode.category}
                  </span>
                </div>
                <h4 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                  {hoveredNode.name}
                </h4>
                <p className="font-mono text-crimson font-bold text-sm bg-red-50 dark:bg-red-900/10 px-2 py-1 rounded inline-block mb-3">
                  {hoveredNode.stat}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {hoveredNode.desc}
                </p>
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-dark-border flex items-center text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-wider">
                  <ArrowRight className="w-3 h-3 mr-1" /> SUPPLY CHAIN VULNERABILITY
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <p className="text-center text-sm text-gray-500 mt-6 italic font-serif">
        Figure 2: Gujarat's external supply chain dependencies. India rendered over foreign layers to preserve sovereign borders.
      </p>
    </div>
  )
}
