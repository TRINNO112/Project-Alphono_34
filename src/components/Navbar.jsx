import { Link } from 'react-router-dom'
import { Moon, Sun, ShieldAlert, ChevronLeft } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks = [
  { to: '/map', label: 'Geographic Map' },
  { to: '/timeline', label: 'Crisis Timeline' },
  { to: '/summary', label: 'Executive Summary' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="fixed top-0 w-full px-8 py-5 flex justify-between items-center z-40 bg-white/70 dark:bg-dark-bg/80 backdrop-blur-xl border-b border-gray-200 dark:border-dark-border transition-all duration-300">
      <div className="flex items-center gap-4">
        {!isHome && (
          <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-surface transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </Link>
        )}
        <Link to="/" className="flex items-center gap-3 group">
          <ShieldAlert className="text-crimson w-7 h-7 group-hover:scale-110 transition-transform" />
          <span className="font-serif font-bold text-2xl tracking-tight hidden sm:block">PROJECT ALPHONO 34</span>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-6 text-sm font-bold tracking-widest uppercase mr-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? 'text-crimson'
                    : 'text-gray-500 hover:text-crimson dark:text-gray-400 dark:hover:text-crimson'
                }`}
              >
                {link.label}
                {isActive && (
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
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors border border-transparent dark:border-dark-border"
          title="Toggle Theme"
        >
          {darkMode ? <Sun className="w-5 h-5 text-gray-200" /> : <Moon className="w-5 h-5 text-gray-700" />}
        </button>
      </div>
    </header>
  )
}
