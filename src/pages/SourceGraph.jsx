import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Database, Network } from 'lucide-react'
import SEO from '../components/SEO'
import { allSources, pillarMeta } from './Sources'

const ALL_PILLARS = [...new Set(allSources.map((s) => s.pillar))].sort()
const TYPE_COLORS = { Govt: '#3b82f6', Media: '#ef4444', Academic: '#a855f7', Industry: '#f59e0b', Legal: '#10b981' }

export default function SourceGraph() {
  const [activePillar, setActivePillar] = useState(ALL_PILLARS[0])

  const activeSources = useMemo(() => {
    return allSources.filter(s => s.pillar === activePillar)
  }, [activePillar])

  return (
    <main className="w-full h-screen bg-parchment-50 relative flex flex-col pt-24 font-sans selection:bg-crimson selection:text-white overflow-hidden">
      <SEO title="Archive Wall" description="Rigid dual-pane matrix of all citations in Project Alphono 34" path="/source-graph" />

      {/* Header */}
      <div className="px-6 md:px-12 mb-8 shrink-0">
        <div className="flex items-center gap-3 text-crimson font-bold tracking-[0.2em] uppercase text-xs mb-3">
          <Database className="w-4 h-4" />
          <span>Interactive Index</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-black text-gray-900 tracking-tight leading-none">
          Archive Wall
        </h1>
        <p className="text-gray-600 max-w-xl mt-4 font-medium text-sm leading-relaxed">
          A structured, rigid-grid repository of all {allSources.length} verified documents. Select a pillar to instantly filter the matrix.
        </p>
      </div>

      {/* Dual Pane Layout */}
      <div className="flex-1 flex flex-col md:flex-row px-6 md:px-12 gap-8 pb-12 min-h-0">
        
        {/* Left Pane: Pillar Navigation */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-2 overflow-y-auto hide-scrollbar shrink-0 pb-12">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 px-2">The 13 Pillars</h2>
          {ALL_PILLARS.map(p => {
            const isActive = p === activePillar
            const meta = pillarMeta[p] || {}
            const Icon = meta.icon || Network
            return (
              <button
                key={p}
                onClick={() => setActivePillar(p)}
                className={`relative flex items-center justify-between w-full p-4 rounded-2xl transition-all focus:outline-none ${isActive ? 'bg-crimson text-white shadow-xl shadow-red-900/20' : 'bg-white/50 text-gray-600 hover:bg-white border border-gray-200'}`}
              >
                {isActive && <motion.div layoutId="activeNavBg" className="absolute inset-0 bg-crimson rounded-2xl z-0" />}
                <div className="relative z-10 flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : meta.color || 'text-gray-400'}`} />
                  <span className="font-bold text-sm text-left leading-tight">{p === 'Migrant Discrimination' ? 'Migrants' : p}</span>
                </div>
                {isActive && (
                  <span className="relative z-10 text-xs font-mono font-bold bg-black/20 px-2 py-1 rounded-md">{activeSources.length}</span>
                )}
              </button>
            )
          })}
        </div>

        {/* Right Pane: Masonry Cards */}
        <div className="w-full md:w-2/3 lg:w-3/4 flex-1 overflow-y-auto hide-scrollbar pb-24 pr-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900">{activePillar} Documents</h2>
            <span className="text-xs font-mono font-bold text-gray-500 bg-gray-200 px-3 py-1 rounded-full uppercase tracking-widest">{activeSources.length} Items</span>
          </div>

          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-max"
          >
            <AnimatePresence mode="popLayout">
              {activeSources.map((s, i) => (
                <motion.a
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  key={`${s.title}-${i}`}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col bg-white border border-gray-200 rounded-2xl p-5 hover:border-crimson hover:shadow-xl hover:shadow-red-900/10 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-crimson"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="inline-block px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest rounded-md" 
                      style={{ backgroundColor: `${TYPE_COLORS[s.type]}15`, color: TYPE_COLORS[s.type] }}
                    >
                      {s.type}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-crimson transition-colors" />
                  </div>
                  
                  <h3 className="font-serif font-bold text-gray-900 leading-snug group-hover:text-crimson transition-colors mb-3">
                    {s.title}
                  </h3>
                  
                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-500 truncate max-w-[200px]">
                      {new URL(s.url).hostname.replace('www.', '')}
                    </span>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </main>
  )
}
