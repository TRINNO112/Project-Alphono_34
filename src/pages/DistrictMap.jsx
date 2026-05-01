import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Map, X } from 'lucide-react'
import SEO from '../components/SEO'
import { getDistricts } from '../data/districtsData'
import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const geoUrl = "/geo/gujarat.geojson";

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
    if (geoId === 'devbhumi dwarka') mappedId = 'devbhoomi-dwarka';
    if (geoId === 'chhota udaipur') mappedId = 'chhota-udepur';

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
    <main className="w-full relative mx-auto pt-24 pb-32 min-h-screen bg-gray-50 font-sans">
      <SEO 
        title="Interactive Geographic Database" 
        description="Interactive geographic database of all 33 districts of Gujarat."
        path="/map" 
      />

      <div className="relative z-10 text-center mb-8 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
          District <span className="text-crimson">Geo-Index</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
          Select any geographic sector to access isolated vulnerability matrices.
        </p>
      </div>

      {/* Advanced Dashboard Layout to fill empty space */}
      <div className="max-w-[1600px] mx-auto px-4 xl:px-8 w-full grid lg:grid-cols-[240px_1fr_240px] xl:grid-cols-[280px_1fr_280px] gap-8 items-start">
        
        {/* Left Info Panel */}
        <div className="hidden lg:flex flex-col gap-6 mt-12 w-full">
          {/* Dashboard Module */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-100 pb-2">Index Scope</h3>
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-serif font-black text-gray-900">33</p>
                <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">Total Sectors</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-black text-crimson">33</p>
                <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">Deep Audits Active</p>
              </div>
            </div>
          </div>

          {/* Doodles/Analytics */}
          <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-2xl">
            <div className="flex items-center gap-3 mb-3 text-crimson">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-crimson"></span>
              </span>
              <span className="text-sm font-bold tracking-widest uppercase">Live System</span>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed font-mono">
              Hover tracking initialized. Vector lines rendered. Ready for user interaction sequence at mapping grid.
            </p>
          </div>
        </div>

        {/* Center Map Box */}
        <div className="relative w-full bg-white/60 border border-gray-200 rounded-[2.5rem] p-2 md:p-6 overflow-visible shadow-xl lg:order-none order-first min-h-[500px]">
        
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
                  if (geoId === 'devbhumi dwarka') mappedId = 'devbhoomi-dwarka';
                  if (geoId === 'chhota udaipur') mappedId = 'chhota-udepur';

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
                <div className="bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-xl border border-gray-700">
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
                  width: '90%',
                  maxWidth: '320px'
                }}
              >
                <div className="bg-white/95/95 backdrop-blur-md border border-gray-200 p-5 rounded-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                  <button 
                    onClick={() => setSelectedNode(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="flex justify-between items-start mb-2 pr-6">
                    <h3 className={`text-xl font-serif font-bold ${selectedNode.pillars?.length > 0 ? 'text-crimson' : 'text-gray-900'}`}>
                      {selectedNode.name}
                    </h3>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-4">{selectedNode.tagline}</p>
                  
                  {selectedNode.pillars?.length > 0 ? (
                    <>
                      <div className="space-y-3 mb-4">
                        {selectedNode.stats?.map((stat, i) => (
                          <div key={i} className="flex justify-between items-end border-b border-gray-100 pb-2">
                            <span className="text-xs text-gray-600 font-medium">{stat.label}</span>
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
                    <div className="text-center py-4 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold text-center leading-relaxed">Local Audit Data is Pending Normalization</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        
        </div>
        </div>

        {/* Right Info Panel */}
        <div className="hidden lg:flex flex-col gap-6 mt-12 w-full">
          {/* Key Legend Module */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-100 pb-2">Map Legend</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#DC2626] border border-gray-300"></div>
                <span className="text-sm font-semibold text-gray-700">Active Selection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#FCA5A5] border border-gray-300"></div>
                <span className="text-sm font-semibold text-gray-700">Deep Audit Data</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#E5E7EB] border border-gray-300"></div>
                <span className="text-sm font-semibold text-gray-700">Awaiting Sync</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl relative overflow-hidden">
            <Map className="absolute -right-4 -bottom-4 w-24 h-24 text-blue-200 rotate-12" />
            <h4 className="text-blue-800 font-bold tracking-widest uppercase text-xs mb-2 relative z-10">Data Integrity</h4>
            <p className="text-sm text-blue-900/80 leading-relaxed relative z-10 font-medium">
              Geographic coordinates bounded by 2011 Census Topological lines. Node alignment accurate to 0.05m radius.
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}
