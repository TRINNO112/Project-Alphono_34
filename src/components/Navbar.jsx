import { Link, useLocation } from 'react-router-dom'
import { ShieldAlert, ChevronLeft, Menu, X } from './Icons'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/**
 * Navbar - Main site navigation component with responsive design
 *
 * Features:
 * - Desktop: Primary nav links (Map, Timeline, Summary) with active indicator
 * - Mobile: Hamburger menu with slide-down panel containing all navigation
 * - Back-to-home button on non-home pages
 * - Keyboard accessible (Esc to close mobile menu, focus management)
 * - Active path highlighting with animated underline
 *
 * @returns {JSX.Element} The rendered navigation header
 */

const navLinks = [
  { to: '/map', label: 'Geographic Map' },
  { to: '/timeline', label: 'Crisis Timeline' },
  { to: '/summary', label: 'Executive Summary' },
]

const featureLinks = [
  { to: '/simulator', label: 'Break Simulator' },
  { to: '/stories', label: 'Human Stories' },
]

const pillarLinks = [
  { to: '/infrastructure', label: 'Infrastructure' },
  { to: '/energy', label: 'Energy' },
  { to: '/water', label: 'Water' },
  { to: '/labor', label: 'Labor' },
  { to: '/economics', label: 'Economics' },
  { to: '/materials', label: 'Materials' },
  { to: '/education', label: 'Education' },
  { to: '/environment', label: 'Environment' },
  { to: '/migrant-discrimination', label: 'Migrant Discrimination', highlight: true },
  { to: '/agriculture', label: 'Agriculture' },
  { to: '/greentech', label: 'Green Tech' },
  { to: '/chemical-governance', label: 'Chemical Governance' },
  { to: '/digital-sovereignty', label: 'Digital Sovereignty' },
]

const resourceLinks = [
  { to: '/confrontation', label: 'The Confrontation' },
  { to: '/brief', label: 'Case Brief' },
  { to: '/sources', label: 'Sources' },
  { to: '/source-graph', label: 'Source Graph' },
  { to: '/methodology', label: 'Methodology' },
]

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef(null)

  // Close mobile menu on route change
  const pathname = location.pathname
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false)
  }, [pathname])

  // Close on Esc; return focus to toggle button
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const isActivePath = (to) => location.pathname === to

  return (
    <header
      role="banner"
      className="fixed top-0 w-full px-6 md:px-8 py-5 flex justify-between items-center z-40 bg-white/70 backdrop-blur-xl border-b border-gray-200 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        {!isHome && (
          <Link
            to="/"
            aria-label="Go back to home"
            className="p-2 -ml-2 rounded-full hover:bg-gray-200 transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </Link>
        )}
        <Link
          to="/"
          aria-label="Project Alphono 34 — home"
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-4 rounded"
        >
          <ShieldAlert className="text-crimson w-7 h-7 group-hover:scale-110 transition-transform" aria-hidden="true" />
          <span className="font-serif font-bold text-xl md:text-2xl tracking-tight hidden sm:block">PROJECT ALPHONO 34</span>
        </Link>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* Desktop primary nav */}
        <nav aria-label="Primary" className="hidden md:flex gap-6 text-sm font-bold tracking-widest uppercase mr-4">
          {navLinks.map((link) => {
            const active = isActivePath(link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? 'page' : undefined}
                className={`relative py-1 transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-4 rounded ${
                  active
                    ? 'text-crimson'
                    : 'text-gray-500 hover:text-crimson'
                }`}
              >
                {link.label}
                {active && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-crimson rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile hamburger (hidden on md+) */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          className="md:hidden p-3 rounded-full hover:bg-gray-100 transition-colors border border-transparent focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
        >
          {menuOpen
            ? <X className="w-5 h-5" aria-hidden="true" />
            : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile slide-down panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="md:hidden fixed inset-0 top-[72px] bg-black/40 backdrop-blur-sm z-30"
            />

            <motion.div
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed left-0 right-0 top-[72px] max-h-[calc(100vh-72px)] overflow-y-auto bg-white border-b border-gray-200 z-40 px-6 py-8 space-y-8"
            >
              <nav aria-label="Primary">
                <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Navigate</h2>
                <ul className="space-y-1">
                  {navLinks.map((link) => {
                    const active = isActivePath(link.to)
                    return (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          aria-current={active ? 'page' : undefined}
                          className={`block py-2 text-base font-medium ${active ? 'text-crimson' : 'text-gray-800 hover:text-crimson'}`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>

              <nav aria-label="Features">
                <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Interactive</h2>
                <ul className="space-y-1">
                  {featureLinks.map((link) => {
                    const active = isActivePath(link.to)
                    return (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          aria-current={active ? 'page' : undefined}
                          className={`block py-2 text-base font-medium ${active ? 'text-crimson' : 'text-gray-800 hover:text-crimson'}`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>

              <nav aria-label="Pillars">
                <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">13 Pillars</h2>
                <ul className="grid grid-cols-1 gap-x-4 gap-y-1">
                  {pillarLinks.map((link) => {
                    const active = isActivePath(link.to)
                    return (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          aria-current={active ? 'page' : undefined}
                          className={`block py-2 text-sm ${active ? 'text-crimson font-semibold' : link.highlight ? 'text-crimson font-medium' : 'text-gray-800 hover:text-crimson'}`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>

              <nav aria-label="Resources">
                <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Resources</h2>
                <ul className="space-y-1">
                  {resourceLinks.map((link) => {
                    const active = isActivePath(link.to)
                    return (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          aria-current={active ? 'page' : undefined}
                          className={`block py-2 text-sm ${active ? 'text-crimson font-semibold' : 'text-gray-800 hover:text-crimson'}`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
