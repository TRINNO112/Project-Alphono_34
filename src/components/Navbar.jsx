import { Link } from 'react-router-dom'
import { Moon, Sun, ShieldAlert, ChevronLeft } from 'lucide-react'
import { useLocation } from 'react-router-dom'

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
          <Link to="/map" className="text-gray-500 hover:text-crimson dark:text-gray-400 dark:hover:text-crimson transition-colors">Geographic Map</Link>
          <Link to="/timeline" className="text-gray-500 hover:text-crimson dark:text-gray-400 dark:hover:text-crimson transition-colors">Crisis Timeline</Link>
          <Link to="/summary" className="text-gray-500 hover:text-crimson dark:text-gray-400 dark:hover:text-crimson transition-colors">Executive Summary</Link>
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
