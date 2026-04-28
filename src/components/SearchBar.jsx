import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { searchIndex } from '../data/searchIndex'
import { useDebounce } from '../hooks/useDebounce'

const pillarColors = {
  'Infrastructure': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  'Energy': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  'Water': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
  'Labor': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  'Economics': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  'Materials': 'bg-gray-200 text-gray-700 dark:bg-gray-700/30 dark:text-gray-400',
  'Education': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
  'Environment': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  'Migrant Rights': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  'Agriculture': 'bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400',
  'Green Tech': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
  'Chemical': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
}

function getPillarColor(pillar) {
  for (const key of Object.keys(pillarColors)) {
    if (pillar.toLowerCase().includes(key.toLowerCase())) return pillarColors[key]
  }
  return 'bg-crimson/10 text-crimson'
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const debouncedQuery = useDebounce(query, 300)

  const results = debouncedQuery.trim()
    ? searchIndex.filter(item =>
        item.claim.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        item.keywords.some(kw => kw.includes(debouncedQuery.toLowerCase()))
      ).slice(0, 20)
    : []

  // Group results by pillar
  const grouped = useMemo(() => {
    const groups = {}
    results.forEach((item) => {
      if (!groups[item.pillar]) groups[item.pillar] = []
      groups[item.pillar].push(item)
    })
    return groups
  }, [results])

  const pillarKeys = Object.keys(grouped)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100)
    }
  }, [isOpen])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setQuery('')
  }, [])

  const handleResultClick = useCallback((item) => {
    navigate(item.path, { state: { searchQuery: query, searchClaim: item.claim } })
    handleClose()
  }, [navigate, query, handleClose])

  return (
    <>
      {/* Floating search button */}
      <button
        type="button"
        aria-label="Open search (Ctrl+K)"
        aria-expanded={isOpen}
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 pl-4 pr-3 py-3 bg-crimson text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        onClick={() => setIsOpen(true)}
      >
        <Search className="w-5 h-5" aria-hidden="true" />
        <span className="hidden sm:inline text-xs font-medium opacity-90">Search</span>
        <kbd className="hidden sm:inline text-[10px] font-semibold px-1.5 py-0.5 rounded bg-white/20 border border-white/30 text-white">
          Ctrl K
        </kbd>
      </button>

      {/* Search modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={handleClose}
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
            >
              <div className="bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-dark-border shadow-2xl overflow-hidden">
                {/* Input */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-dark-border">
                  <Search className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <input
                    ref={inputRef}
                    type="text"
                    aria-label="Search across all pillars"
                    placeholder="Search claims, topics, sources..."
                    className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 text-lg"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                  />
                  <span role="status" aria-live="polite" className="text-xs text-gray-400 mr-2">
                    {query ? `${results.length} result${results.length !== 1 ? 's' : ''}` : ''}
                  </span>
                  <kbd className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-dark-bg text-gray-500 border border-gray-200 dark:border-dark-border">ESC</kbd>
                </div>

                {/* Grouped results */}
                <div className="max-h-[28rem] overflow-y-auto p-2">
                  {query.trim() === '' ? (
                    <p className="text-center py-8 text-gray-500 text-sm">Type to search across all pillars...</p>
                  ) : pillarKeys.length > 0 ? (
                    pillarKeys.map((pillar) => (
                      <div key={pillar} className="mb-2">
                        <div className="flex items-center gap-2 px-3 pt-3 pb-1">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${getPillarColor(pillar)}`}>
                            {pillar}
                          </span>
                          <span className="text-[10px] text-gray-400">{grouped[pillar].length}</span>
                          <div className="flex-1 h-px bg-gray-200 dark:bg-dark-border" />
                        </div>
                        {grouped[pillar].map((item) => (
                          <button
                            key={`${item.path}-${item.claim.slice(0, 40)}`}
                            type="button"
                            onClick={() => handleResultClick(item)}
                            className="block w-full text-left p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
                          >
                            <div className="text-sm text-gray-700 dark:text-gray-300">{item.claim}</div>
                          </button>
                        ))}
                      </div>
                    ))
                  ) : (
                    <p className="text-center py-8 text-gray-500">No results found</p>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
