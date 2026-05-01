import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Database, Network, ExternalLink, Search, Filter } from 'lucide-react'
import SEO from '../components/SEO'
import { pillarMeta, allSources } from '../data/sourcesData'


const typeColors = {
  Govt: 'bg-blue-50 text-blue-600 border-blue-200',
  Media: 'bg-red-50 text-red-600 border-red-200',
  Academic: 'bg-purple-50 text-purple-600 border-purple-200',
  Industry: 'bg-amber-50 text-amber-600 border-amber-200',
  Legal: 'bg-emerald-50 text-emerald-600 border-emerald-200',
}

const allTypes = ['All', 'Govt', 'Media', 'Academic', 'Industry', 'Legal']
const allPillars = ['All', ...Object.keys(pillarMeta)]

export default function Sources() {
  const [typeFilter, setTypeFilter] = useState('All')
  const [pillarFilter, setPillarFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    return allSources.filter(s => {
      if (typeFilter !== 'All' && s.type !== typeFilter) return false
      if (pillarFilter !== 'All' && s.pillar !== pillarFilter) return false
      if (searchQuery && !s.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
      return true
    })
  }, [typeFilter, pillarFilter, searchQuery])

  // Group by pillar for display
  const grouped = useMemo(() => {
    const groups = {}
    for (const s of filtered) {
      if (!groups[s.pillar]) groups[s.pillar] = []
      groups[s.pillar].push(s)
    }
    return groups
  }, [filtered])

  const pillarOrder = Object.keys(pillarMeta)

  return (
    <main className="w-full min-h-screen bg-gray-50 font-sans pt-28 pb-32">
      <SEO
        title="Source Database"
        description="Complete pillar-wise source library with 165+ citations used across all analysis pillars in Project Alphono 34."
        path="/sources"
      />

      <div className="max-w-4xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 text-crimson text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Database className="w-4 h-4" />
            <span>Source Library</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-3 tracking-tight leading-tight">
            Source Database
          </h1>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            {allSources.length} citations across {Object.keys(pillarMeta).length} pillars — every claim, sourced and linked.
          </p>
          <div className="mt-6 flex items-center">
            <Link
              to="/source-graph"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-crimson text-white text-sm font-semibold rounded-lg hover:bg-crimson/90 transition-colors shadow-sm"
            >
              <Network className="w-4 h-4" />
              View as Graph
            </Link>
          </div>
          <div className="mt-6 h-px bg-gray-200" />
        </motion.div>

        {/* Filters */}
        <div className="sticky top-16 z-20 bg-gray-50/90 backdrop-blur-xl pt-4 pb-4 -mx-5 px-5 border-b border-gray-200/50 mb-8 space-y-3">

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search sources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 transition"
            />
          </div>

          {/* Type filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            {allTypes.map(t => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all ${
                  typeFilter === t
                    ? 'bg-crimson/10 border-crimson/30 text-crimson'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Pillar filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider shrink-0">Pillar:</span>
            <div className="flex gap-1.5 flex-wrap">
              {allPillars.map(p => {
                const meta = pillarMeta[p]
                const PIcon = meta?.icon
                return (
                  <button
                    key={p}
                    onClick={() => setPillarFilter(p)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg border transition-all ${
                      pillarFilter === p
                        ? 'bg-crimson/10 border-crimson/30 text-crimson'
                        : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    {PIcon && <PIcon className="w-3 h-3" />}
                    {p === 'Migrant Discrimination' ? 'Migrants' : p}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="text-xs font-mono text-gray-400 mb-6 tracking-wider">
          {filtered.length} {filtered.length === 1 ? 'SOURCE' : 'SOURCES'} FOUND
        </p>

        {/* Source list grouped by pillar */}
        <div className="space-y-10">
          {pillarOrder.filter(p => grouped[p]).map(pillar => {
            const meta = pillarMeta[pillar]
            const PIcon = meta.icon
            return (
              <section key={pillar}>
                <div className="flex items-center gap-3 mb-4">
                  <PIcon className={`w-5 h-5 ${meta.color}`} />
                  <h2 className="text-lg font-serif font-bold text-gray-900">{pillar}</h2>
                  <span className="text-xs font-mono text-gray-400">{grouped[pillar].length}</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <div className="space-y-2">
                  {grouped[pillar].map((source, i) => (
                    <a
                      key={i}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 p-3.5 rounded-xl border border-transparent hover:border-gray-200 hover:bg-white transition-all"
                    >
                      <span className="text-[10px] font-mono text-gray-400 mt-1 w-5 text-right shrink-0">
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 group-hover:text-crimson transition-colors leading-snug">
                          {source.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1 truncate">
                          {source.url.replace(/^https?:\/\//, '').split('/')[0]}
                        </p>
                      </div>
                      <span className={`shrink-0 px-2 py-0.5 text-[10px] font-bold rounded border ${typeColors[source.type]}`}>
                        {source.type}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-crimson shrink-0 mt-0.5 transition-colors" />
                    </a>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <Database className="w-8 h-8 mx-auto mb-3 opacity-50" />
            <p className="text-sm">No sources match your filters.</p>
          </div>
        )}

      </div>
    </main>
  )
}
