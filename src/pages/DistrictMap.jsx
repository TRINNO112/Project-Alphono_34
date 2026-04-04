import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Map, X } from 'lucide-react'
import SEO from '../components/SEO'
import { getDistricts } from '../data/districtsData'
import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const geoUrl = "https://raw.githubusercontent.com/udit-001/india-maps-data/main/geojson/states/gujarat.geojson";

// Normalize district strings from the GeoJSON to match our local IDs (e.g., "Gir Somnath" -> "gir-somnath")
const normalizeId = (name) => name ? name.toLowerCase().replace(/\s+/g, '-') : '';

export default function DistrictMap() {
  const districts = getDistricts()
  const [selectedNode, setSelectedNode] = useState(null)
  const [hoveredNode, setHoveredNode] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Match the geo JSON district to our local district data
  const handleMapClick = (geo) => {
    const geoId = normalizeId(geo.properties.district);
    
    // There might be some misspellings or variant names in the GeoJSON vs our data.
    // e.g. 'arachalli' vs 'aravalli', 'kachchh' vs 'kutch', 'mahesana' vs 'mehsana'
    let mappedId = geoId;
    if (geoId === 'kachchh') mappedId = 'kutch';
    if (geoId === 'mahesana') mappedId = 'mehsana';
    if (geoId === 'panch mahals') mappedId = 'panchmahal';
    if (geoId === 'sabar kantha') mappedId = 'sabarkantha';
    if (geoId === 'banas kantha') mappedId = 'banaskantha';

    const foundDistrict = districts.find(d => d.id === mappedId);
    
    if (foundDistrict) {
      if (selectedNode?.id === foundDistrict.id) {
        setSelectedNode(null); // toggle off
      } else {
        setSelectedNode(foundDistrict);
      }
    }
  }

  const handleMouseMove = (evt) => {
    setMousePosition({ x: evt.clientX, y: evt.clientY })
  }

  return (
    <main className="w-full relative mx-auto pt-32 pb-32 min-h-screen bg-gray-50 dark:bg-dark-bg">
      
      {/* Magazine Style Interwoven Text - Positioned over the map but using mix-blend-mode */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-20 mix-blend-overlay dark:mix-blend-screen opacity-40">
        <h1 className="text-[12rem] md:text-[22rem] font-bold text-gray-900 dark:text-gray-100 font-sans tracking-tight leading-none whitespace-nowrap">
          GUJARAT
        </h1>
        <h2 className="text-[4rem] md:text-[8rem] font-bold text-crimson dark:text-crimson font-serif tracking-widest leading-none -mt-8 md:-mt-20">
          DEPENDENCY
        </h2>
      </div>

      <SEO 
        title="Interactive Geographic Database" 
        description="Interactive geographic database of all 33 districts of Gujarat."
        path="/map" 
      />

      <div className="relative z-10 text-center mb-12 px-4">
        <div className="flex items-center justify-center gap-3 text-crimson font-semibold tracking-widest text-sm mb-4">
          <Map className="w-5 h-5" />
          <span>TRUE GEOGRAPHIC INDEX</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
          Interactive <span className="italic text-crimson">Map</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
          Click any geographic district to view structural dependencies. Deep-audited districts are marked in red.
        </p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto bg-gray-50/50 dark:bg-dark-surface/60 border border-gray-200 dark:border-dark-border rounded-3xl p-4 md:p-8 overflow-hidden shadow-sm">
        
        {/* React Simple Maps Implementation */}
        <div 
          className="w-full relative aspect-square md:aspect-[1.3] flex items-center justify-center cursor-default"
          onMouseMove={handleMouseMove}
        >
          <ComposableMap 
            projection="geoMercator" 
            projectionConfig={{ scale: 4500, center: [71.5, 22.8] }}
            className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10 hover:scale-[1.02] transition-transform duration-700 ease-out"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const geoId = normalizeId(geo.properties.district);
                  let mappedId = geoId;
                  if (geoId === 'kachchh') mappedId = 'kutch';
                  if (geoId === 'mahesana') mappedId = 'mehsana';
                  if (geoId === 'panch mahals') mappedId = 'panchmahal';
                  if (geoId === 'sabar kantha') mappedId = 'sabarkantha';
                  if (geoId === 'banas kantha') mappedId = 'banaskantha';

                  const localDist = districts.find(d => d.id === mappedId);
                  const hasData = localDist?.pillars?.length > 0;
                  const isSelected = selectedNode?.id === mappedId;

                  return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={(evt) => handleMapClick(geo, evt)}
                    onMouseEnter={() => setHoveredNode(localDist || { id: mappedId, name: geo.properties.district })}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{
                      default: { 
                        fill: hasData ? (isSelected ? "#DC2626" : "#FCA5A5") : "#E5E7EB", 
                        outline: "none",
                        stroke: "#111827", // Dark boundaries instead of white
                        strokeWidth: 1,
                        transition: "all 300ms ease-in-out"
                      },
                      hover: { 
                        fill: hasData ? "#EF4444" : "#D1D5DB", 
                        outline: "none",
                        stroke: "#111827",
                        strokeWidth: 1.5,
                        cursor: "pointer"
                      },
                      pressed: { 
                        fill: "#991B1B", 
                        outline: "none",
                        stroke: "#111827",
                      },
                    }}
                  />
                )})
              }
            </Geographies>
          </ComposableMap>

          {/* Simple Floating Tooltip (Hover) */}
          <AnimatePresence>
            {hoveredNode && !selectedNode && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="fixed z-50 pointer-events-none"
                style={{
                  left: mousePosition.x + 15,
                  top: mousePosition.y + 15,
                }}
              >
                <div className="bg-gray-900/90 dark:bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-xl border border-gray-700">
                  <p className="font-serif font-bold">{hoveredNode.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-300">
                    {hoveredNode.pillars?.length > 0 ? 'Click to inspect data' : 'No data available'}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Overlay popup (Click) */}
          <AnimatePresence>
            {selectedNode && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed md:absolute shadow-2xl z-50 pointer-events-auto"
                style={{
                  left: window.innerWidth < 768 ? '50%' : '50%',
                  top: window.innerWidth < 768 ? 'clamp(100px, 30%, 300px)' : '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '280px'
                }}
              >
                <div className="bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md border border-gray-200 dark:border-dark-border p-5 rounded-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                  <button 
                    onClick={() => setSelectedNode(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 dark:hover:text-white transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="flex justify-between items-start mb-2 pr-6">
                    <h3 className={`text-xl font-serif font-bold ${selectedNode.pillars?.length > 0 ? 'text-crimson' : 'text-gray-900 dark:text-white'}`}>
                      {selectedNode.name}
                    </h3>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-4">{selectedNode.tagline}</p>
                  
                  {selectedNode.pillars?.length > 0 ? (
                    <>
                      <div className="space-y-3 mb-4">
                        {selectedNode.stats?.map((stat, i) => (
                          <div key={i} className="flex justify-between items-end border-b border-gray-100 dark:border-dark-surface pb-2">
                            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.label}</span>
                            <span className={`text-sm font-bold ${stat.status === 'critical' ? 'text-red-600' : stat.status === 'danger' ? 'text-crimson' : 'text-blue-500'}`}>{stat.value}</span>
                          </div>
                        ))}
                      </div>
                      <Link 
                        to={`/district/${selectedNode.id}`}
                        className="block w-full py-3 bg-crimson text-white text-center text-xs font-bold uppercase tracking-widest rounded-lg pointer-events-auto hover:bg-red-700 active:scale-95 transition-all shadow-md"
                      >
                        Read Security Analysis
                      </Link>
                    </>
                  ) : (
                    <div className="text-center py-4 bg-gray-50 dark:bg-dark-surface rounded-xl border border-gray-100 dark:border-dark-border">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold text-center leading-relaxed">Local Audit Data is Pending Normalization</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
      </div>
    </main>
  )
}
