import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent, AnimatePresence } from 'framer-motion'
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
import Timeline from './pages/Timeline'
import DistrictMap from './pages/DistrictMap'
import DistrictAnalysis from './pages/DistrictAnalysis'
import Methodology from './pages/Methodology'
import Sources from './pages/Sources'
import Agriculture from './pages/Agriculture'
import GreenTech from './pages/GreenTech'
import ChemicalGovernance from './pages/ChemicalGovernance'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25, ease: 'easeIn' } },
}

function PageTransition({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/infrastructure" element={<PageTransition><Infrastructure /></PageTransition>} />
        <Route path="/energy" element={<PageTransition><Energy /></PageTransition>} />
        <Route path="/water" element={<PageTransition><Water /></PageTransition>} />
        <Route path="/labor" element={<PageTransition><Labor /></PageTransition>} />
        <Route path="/economics" element={<PageTransition><Economics /></PageTransition>} />
        <Route path="/materials" element={<PageTransition><Materials /></PageTransition>} />
        <Route path="/education" element={<PageTransition><Education /></PageTransition>} />
        <Route path="/summary" element={<PageTransition><Summary /></PageTransition>} />
        <Route path="/environment" element={<PageTransition><Environment /></PageTransition>} />
        <Route path="/migrant-discrimination" element={<PageTransition><MigrantDiscrimination /></PageTransition>} />
        <Route path="/timeline" element={<PageTransition><Timeline /></PageTransition>} />
        <Route path="/map" element={<PageTransition><DistrictMap /></PageTransition>} />
        <Route path="/district/:id" element={<PageTransition><DistrictAnalysis /></PageTransition>} />
        <Route path="/methodology" element={<PageTransition><Methodology /></PageTransition>} />
        <Route path="/sources" element={<PageTransition><Sources /></PageTransition>} />
        <Route path="/agriculture" element={<PageTransition><Agriculture /></PageTransition>} />
        <Route path="/greentech" element={<PageTransition><GreenTech /></PageTransition>} />
        <Route path="/chemical-governance" element={<PageTransition><ChemicalGovernance /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [scrollPct, setScrollPct] = useState(0)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setScrollPct(Math.round(v * 100))
  })

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

        {/* Global Scroll Progress Bar + Percentage */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-crimson origin-left z-50 shadow-[0_0_10px_rgba(211,47,47,0.5)] pointer-events-none"
          style={{ scaleX }}
        />
        <AnimatePresence>
          {scrollPct > 2 && scrollPct < 99 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed top-3 right-4 z-50 px-2 py-0.5 rounded-full bg-crimson/90 text-white text-[10px] font-bold tracking-wider pointer-events-none backdrop-blur-sm"
            >
              {scrollPct}%
            </motion.div>
          )}
        </AnimatePresence>

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <AnimatedRoutes />

        <SearchBar />

        <Footer />
      </div>
    </Router>
  )
}
