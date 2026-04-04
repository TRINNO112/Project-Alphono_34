import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Infrastructure from './pages/Infrastructure'
import Energy from './pages/Energy'
import Water from './pages/Water'
import Labor from './pages/Labor'
import Economics from './pages/Economics'
import Materials from './pages/Materials'
import Summary from './pages/Summary'
import Education from './pages/Education'
import Environment from './pages/Environment'
import MigrantDiscrimination from './pages/MigrantDiscrimination'
import SearchBar from './components/SearchBar'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      <div className="min-h-screen bg-parchment-50 dark:bg-dark-bg transition-colors duration-500 font-sans text-gray-900 dark:text-gray-200 selection:bg-crimson selection:text-white">
        
        {/* Global Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-crimson origin-left z-50 shadow-[0_0_10px_rgba(211,47,47,0.5)] pointer-events-none"
          style={{ scaleX }}
        />

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/water" element={<Water />} />
          <Route path="/labor" element={<Labor />} />
          <Route path="/economics" element={<Economics />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/education" element={<Education />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/migrant-discrimination" element={<MigrantDiscrimination />} />
        </Routes>

        <SearchBar />

        {/* Global Footer */}
        <footer className="w-full border-t border-gray-300 dark:border-dark-border py-12 mt-20 text-center text-gray-500 dark:text-gray-500 font-serif">
          <p className="text-lg">Project Alphono 34 — A Critical Research Endeavor</p>
        </footer>
      </div>
    </Router>
  )
}
