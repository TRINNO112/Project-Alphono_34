import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { searchIndex } from '../data/searchIndex'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)

  // Derive results from query instead of using effect + setState
  const results = query.trim()
    ? searchIndex.filter(item =>
        item.claim.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some(kw => kw.includes(query.toLowerCase()))
      ).slice(0, 10)
    : []

  // Keyboard shortcuts: Ctrl+K / Cmd+K to open, Escape to close
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

  // Auto-focus input when modal opens; reset query on close
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    setQuery('')
  }

  return (
    <>
      {/* Floating search button */}
      <button
        className="fixed bottom-6 right-6 z-50 p-4 bg-crimson text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        onClick={() => setIsOpen(true)}
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Search modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
            >
              <div className="bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-dark-border shadow-2xl overflow-hidden">
                {/* Input area */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-dark-border">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search claims, topics, sources..."
                    className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 text-lg"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                  />
                  <kbd className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-dark-bg text-gray-500 border border-gray-200 dark:border-dark-border">ESC</kbd>
                </div>

                {/* Results area */}
                <div className="max-h-96 overflow-y-auto p-2">
                  {query.trim() === '' ? (
                    <p className="text-center py-8 text-gray-500 text-sm">Type to search across all pillars...</p>
                  ) : results.length > 0 ? (
                    results.map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        onClick={handleClose}
                        className="block p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors"
                      >
                        <div className="text-xs uppercase tracking-widest text-crimson font-semibold mb-1">{item.pillar}</div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">{item.claim}</div>
                      </Link>
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
