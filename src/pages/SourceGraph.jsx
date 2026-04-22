import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Orbit } from 'lucide-react'
import SEO from '../components/SEO'
import { allSources } from './Sources'

const ALL_PILLARS = [...new Set(allSources.map((s) => s.pillar))].sort()
const TYPE_COLORS = { Govt: '#3b82f6', Media: '#ef4444', Academic: '#a855f7', Industry: '#f59e0b', Legal: '#10b981' }

export default function SourceGraph() {
  const [activePillar, setActivePillar] = useState(ALL_PILLARS[0])
  const [openSource, setOpenSource] = useState(null)

  const activeSources = useMemo(() => {
    return allSources.filter(s => s.pillar === activePillar)
  }, [activePillar])

  return (
    <main className="w-full min-h-screen bg-parchment-50 relative overflow-hidden flex flex-col pt-24 font-sans selection:bg-crimson selection:text-white">
      <SEO title="Epistemic Constellation" description="Interactive data orbit mapping all citations in Project Alphono 34" path="/source-graph" />

      {/* Header */}
      <div className="absolute top-24 left-6 md:left-12 z-20 pointer-events-none">
        <div className="flex items-center gap-3 text-crimson font-bold tracking-[0.2em] uppercase text-xs mb-3">
          <Orbit className="w-4 h-4" />
          <span>Interactive Visualization</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-black text-gray-900 tracking-tight leading-none">
          Epistemic<br/>Orbit
        </h1>
        <p className="text-gray-600 max-w-sm mt-4 font-medium text-sm leading-relaxed">
          Select a pillar below to view its gravitational pull on the narrative. Every satellite dot represents a verified source document.
        </p>
      </div>

      {/* Pillar Selector Strip */}
      <div className="absolute bottom-12 left-0 right-0 z-30 flex justify-center w-full px-4 overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex gap-2 md:gap-3 px-3 py-3 bg-white/70 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/60">
          {ALL_PILLARS.map(p => {
            const isActive = p === activePillar
            return (
              <button
                key={p}
                onClick={() => { setActivePillar(p); setOpenSource(null) }}
                className={`relative px-4 py-2 text-xs md:text-sm font-bold tracking-wide uppercase transition-colors rounded-xl whitespace-nowrap focus:outline-none ${isActive ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {isActive && (
                  <motion.div layoutId="activePill" className="absolute inset-0 bg-crimson rounded-xl shadow-[0_4px_20px_rgba(211,47,47,0.4)]" />
                )}
                <span className="relative z-10">{p === 'Migrant Discrimination' ? 'Migrants' : p}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Orbit Canvas */}
      <div className="relative flex-1 flex items-center justify-center w-full min-h-[600px] pointer-events-auto">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.2 }}
            className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[800px] md:h-[800px]"
          >
            {/* Center Pillar Core */}
            <motion.div 
              className="absolute z-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-crimson to-red-900 shadow-[0_0_60px_rgba(211,47,47,0.4)] flex items-center justify-center text-center p-6 border-4 border-white/20 backdrop-blur-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <span className="font-serif font-black text-sm md:text-xl text-white tracking-widest uppercase shadow-sm leading-tight">
                {activePillar}
              </span>
            </motion.div>

            {/* Orbiting Sources */}
            {activeSources.map((s, i) => {
              const total = activeSources.length
              // Calculate radius — spiral outward if too many
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
              const baseRadius = isMobile ? 120 : 250
              const step = isMobile ? 20 : 40
              const radius = baseRadius + (i % 3) * step
              const angle = (i / total) * 2 * Math.PI
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              const color = TYPE_COLORS[s.type] || '#888'

              return (
                <motion.button
                  key={`${s.title}-${i}`}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, x, y }}
                  transition={{ duration: 0.8, delay: i * 0.02, type: 'spring' }}
                  onClick={() => setOpenSource(s)}
                  className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white shadow-lg cursor-pointer group hover:z-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-crimson"
                  style={{ backgroundColor: color }}
                  whileHover={{ scale: 2 }}
                >
                  <div className="absolute opacity-0 group-hover:opacity-100 bg-white shadow-2xl rounded-lg p-3 w-48 left-10 top-1/2 -translate-y-1/2 pointer-events-none transition-opacity text-left">
                     <span className="text-[9px] font-bold uppercase tracking-wider mb-1 block" style={{ color }}>{s.type}</span>
                     <p className="text-xs font-semibold text-gray-900 leading-tight">{s.title}</p>
                  </div>
                </motion.button>
              )
            })}
            
            {/* Aesthetic Orbit rings */}
            <div className="absolute inset-0 rounded-full border border-gray-300/40 w-[240px] h-[240px] md:w-[500px] md:h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute inset-0 rounded-full border border-gray-300/30 w-[280px] h-[280px] md:w-[580px] md:h-[580px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute inset-0 rounded-full border border-gray-300/20 w-[320px] h-[320px] md:w-[660px] md:h-[660px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Source Detail Modal */}
      <AnimatePresence>
        {openSource && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-32 right-4 md:right-8 z-50 w-[calc(100vw-2rem)] md:w-96 bg-white/95 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-2xl p-6"
          >
            <button onClick={() => setOpenSource(null)} className="absolute top-4 right-4 p-2 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200 hover:text-gray-900 transition-colors">
              <X className="w-4 h-4" />
            </button>
            <span className="inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full mb-3" style={{ backgroundColor: `${TYPE_COLORS[openSource.type]}20`, color: TYPE_COLORS[openSource.type] }}>
              {openSource.type}
            </span>
            <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 leading-snug">{openSource.title}</h3>
            <p className="text-xs text-gray-500 font-mono break-all mb-4">{new URL(openSource.url).hostname.replace('www.', '')}</p>
            <a href={openSource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 py-2.5 bg-gray-900 text-white rounded-lg font-bold text-xs hover:bg-crimson transition-colors">
              Read Document <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
