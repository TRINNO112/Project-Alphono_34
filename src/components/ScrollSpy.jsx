import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PanelLeftOpen, PanelLeftClose } from 'lucide-react'

/**
 * Left-rail table-of-contents.
 *
 * - Collapsed by default (just a vertical set of dots + expand handle).
 * - When expanded: a slim sticky panel with section labels.
 * - Active-item highlight is positioned from a measured ref, not hardcoded
 *   math — so the last item never misaligns regardless of spacing.
 */
export default function ScrollSpy({ sections }) {
  const [activeId, setActiveId] = useState('')
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false) // collapsed by default
  const itemRefs = useRef({})
  const navRef = useRef(null)
  const [highlight, setHighlight] = useState({ top: 0, height: 0 })

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!sections?.length) return
    // Initialize active id to the first section so the highlight has a home
    // before the user scrolls.
    if (!activeId) setActiveId(sections[0].id)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top)
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id)
        }
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections])

  // Measure the active item's position/size from its ref
  useLayoutEffect(() => {
    if (!open) return
    const el = itemRefs.current[activeId]
    if (!el) return
    
    setHighlight({ top: el.offsetTop, height: el.offsetHeight })

    const observer = new ResizeObserver(() => {
      setHighlight({ top: el.offsetTop, height: el.offsetHeight })
    })
    observer.observe(el)

    return () => observer.disconnect()
  }, [activeId, open, sections])

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  if (!sections?.length) return null

  const activeIndex = sections.findIndex((s) => s.id === activeId)
  const progress = activeIndex >= 0 ? ((activeIndex + 1) / sections.length) * 100 : 0

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          ref={navRef}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          aria-label="Page sections"
          className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-start gap-2"
        >
          {/* Always-visible slim rail (collapsed state) */}
          {!open && (
            <motion.button
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Open section navigation"
              aria-expanded={false}
              className="group flex flex-col items-center gap-3 py-4 px-2 rounded-full bg-white/70 dark:bg-dark-surface/70 border border-gray-200/70 dark:border-dark-border/70 backdrop-blur-md shadow-sm hover:shadow-md hover:border-crimson/40 transition-all"
            >
              {/* Vertical progress track with crimson fill */}
              <div className="relative w-[3px] h-32 rounded-full bg-gray-200 dark:bg-dark-border overflow-hidden">
                <motion.div
                  className="absolute inset-x-0 top-0 bg-crimson rounded-full"
                  animate={{ height: `${progress}%` }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                />
              </div>
              {/* Dot column — one per section, active one glows */}
              <div className="flex flex-col items-center gap-1.5">
                {sections.map((s) => (
                  <motion.span
                    key={s.id}
                    animate={{
                      backgroundColor: s.id === activeId ? '#D32F2F' : 'rgba(156,163,175,0.45)',
                      scale: s.id === activeId ? 1.4 : 1,
                    }}
                    transition={{ duration: 0.25 }}
                    className="w-1.5 h-1.5 rounded-full"
                  />
                ))}
              </div>
              <PanelLeftOpen className="w-3.5 h-3.5 text-gray-400 group-hover:text-crimson transition-colors" aria-hidden="true" />
            </motion.button>
          )}

          {/* Expanded panel */}
          <AnimatePresence>
            {open && (
              <motion.nav
                key="expanded"
                initial={{ opacity: 0, x: -12, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -12, scale: 0.97 }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                className="relative w-[240px] bg-white/85 dark:bg-dark-surface/85 border border-gray-200 dark:border-dark-border rounded-2xl backdrop-blur-md shadow-lg overflow-hidden"
                aria-label="Table of contents"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 dark:border-dark-border">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                    On this page
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Collapse section navigation"
                    aria-expanded={true}
                    className="p-1 rounded-md text-gray-400 hover:text-crimson hover:bg-crimson/5 transition-colors"
                  >
                    <PanelLeftClose className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                {/* List */}
                <div className="relative px-2 py-2">
                  {/* Left vertical guide line */}
                  <div className="absolute left-[14px] top-2 bottom-2 w-[2px] bg-gray-200 dark:bg-dark-border rounded-full" />

                  <ul className="relative space-y-0.5">
                    {/* Measured active highlight — no hardcoded math */}
                    {activeIndex >= 0 && highlight.height > 0 && (
                      <motion.div
                        layoutId="spy-active"
                        className="absolute -left-2 -right-2 bg-crimson/10 dark:bg-crimson/15 rounded-lg pointer-events-none z-0"
                        animate={{ top: highlight.top, height: highlight.height }}
                        transition={{ type: 'spring', stiffness: 380, damping: 32, mass: 0.8 }}
                      />
                    )}
                    {sections.map((s) => {
                      const isActive = s.id === activeId
                      return (
                        <li
                          key={s.id}
                          ref={(el) => {
                            if (el) itemRefs.current[s.id] = el
                          }}
                        >
                          <a
                            href={`#${s.id}`}
                            onClick={(e) => {
                              e.preventDefault()
                              document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className={`relative z-10 flex items-center gap-3 pl-4 pr-2 py-1.5 rounded-lg text-xs transition-colors ${
                              isActive
                                ? 'text-crimson font-semibold'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                            }`}
                          >
                            <motion.span
                              animate={{
                                backgroundColor: isActive ? '#D32F2F' : 'rgba(156,163,175,0.45)',
                                scale: isActive ? 1.5 : 1,
                              }}
                              transition={{ duration: 0.25 }}
                              className="w-1.5 h-1.5 rounded-full shrink-0 relative z-10 ring-2 ring-white dark:ring-dark-surface"
                              aria-hidden="true"
                            />
                            <span className="truncate">{s.label}</span>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                {/* Progress footer */}
                <div className="px-4 py-2.5 border-t border-gray-200 dark:border-dark-border">
                  <div className="flex items-center justify-between text-[10px] text-gray-400 dark:text-gray-500 mb-1.5">
                    <span className="uppercase tracking-wider font-medium">Progress</span>
                    <span className="tabular-nums">
                      {Math.max(activeIndex + 1, 1)} / {sections.length}
                    </span>
                  </div>
                  <div className="h-1 bg-gray-200 dark:bg-dark-bg rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-crimson rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
