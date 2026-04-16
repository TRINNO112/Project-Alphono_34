import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List } from 'lucide-react'

export default function ScrollSpy({ sections }) {
  const [activeId, setActiveId] = useState('')
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!sections?.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting)
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  if (!sections?.length) return null

  const activeIndex = sections.findIndex((s) => s.id === activeId)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:block"
        >
          <motion.button
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="mb-2 p-2 rounded-full bg-white/80 dark:bg-dark-surface/80 border border-gray-200 dark:border-dark-border backdrop-blur-sm hover:bg-crimson/10 transition-colors"
            title={open ? 'Collapse navigation' : 'Expand navigation'}
          >
            <motion.div animate={{ rotate: open ? 0 : 180 }} transition={{ duration: 0.3 }}>
              <List className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </motion.div>
          </motion.button>

          <AnimatePresence mode="wait">
            {open && (
              <motion.nav
                initial={{ opacity: 0, scale: 0.92, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -8 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="origin-top-right bg-white/80 dark:bg-dark-surface/80 border border-gray-200 dark:border-dark-border rounded-xl backdrop-blur-sm p-3 max-w-[200px]"
              >
                <ul className="space-y-0.5 relative">
                  {/* Animated active background pill */}
                  {activeIndex >= 0 && (
                    <motion.div
                      layoutId="spy-highlight"
                      className="absolute left-0 right-0 bg-crimson/10 dark:bg-crimson/15 rounded-lg"
                      style={{ height: 30, top: activeIndex * 30 + activeIndex * 2 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30, mass: 0.8 }}
                    />
                  )}

                  {sections.map((s, i) => (
                    <li key={s.id} className="relative">
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className={`relative z-10 flex items-center gap-2 px-3 py-1.5 text-xs rounded-lg transition-colors duration-200 truncate ${
                          activeId === s.id
                            ? 'text-crimson font-bold'
                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        {/* Animated dot indicator */}
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          animate={{
                            backgroundColor: activeId === s.id ? '#D32F2F' : 'rgba(156,163,175,0.4)',
                            scale: activeId === s.id ? 1.3 : 1,
                          }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                        />
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Progress indicator */}
                {activeIndex >= 0 && (
                  <div className="mt-3 pt-2 border-t border-gray-200 dark:border-dark-border">
                    <div className="flex items-center justify-between text-[10px] text-gray-400 dark:text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{Math.round(((activeIndex + 1) / sections.length) * 100)}%</span>
                    </div>
                    <div className="h-1 bg-gray-200 dark:bg-dark-bg rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-crimson rounded-full"
                        animate={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      />
                    </div>
                  </div>
                )}
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
