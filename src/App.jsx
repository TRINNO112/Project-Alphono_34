import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import SearchHighlight from './components/SearchHighlight'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import { SkeletonChart } from './components/Skeleton'
import { StoriesProvider } from './context/StoriesContext'
import StorySideSheet from './components/StorySideSheet'

const Home = lazy(() => import('./pages/Home'))
const Infrastructure = lazy(() => import('./pages/Infrastructure'))
const Energy = lazy(() => import('./pages/Energy'))
const Water = lazy(() => import('./pages/Water'))
const Labor = lazy(() => import('./pages/Labor'))
const Economics = lazy(() => import('./pages/Economics'))
const Materials = lazy(() => import('./pages/Materials'))
const Summary = lazy(() => import('./pages/Summary'))
const Education = lazy(() => import('./pages/Education'))
const Environment = lazy(() => import('./pages/Environment'))
const MigrantDiscrimination = lazy(() => import('./pages/MigrantDiscrimination'))
const Timeline = lazy(() => import('./pages/Timeline'))
const DistrictMap = lazy(() => import('./pages/DistrictMap'))
const DistrictAnalysis = lazy(() => import('./pages/DistrictAnalysis'))
const Methodology = lazy(() => import('./pages/Methodology'))
const Sources = lazy(() => import('./pages/Sources'))
const Agriculture = lazy(() => import('./pages/Agriculture'))
const GreenTech = lazy(() => import('./pages/GreenTech'))
const ChemicalGovernance = lazy(() => import('./pages/ChemicalGovernance'))
const DigitalSovereignty = lazy(() => import('./pages/DigitalSovereignty'))
const NotFound = lazy(() => import('./pages/NotFound'))
const GlobalTradeIndex = lazy(() => import('./pages/GlobalTradeIndex'))
const BreakSimulator = lazy(() => import('./pages/BreakSimulator'))
const Stories = lazy(() => import('./pages/Stories'))

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

function RouteFallback() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-32">
      <SkeletonChart />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteFallback />}>
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
          <Route path="/digital-sovereignty" element={<PageTransition><DigitalSovereignty /></PageTransition>} />
          <Route path="/global-trade" element={<PageTransition><GlobalTradeIndex /></PageTransition>} />
          <Route path="/simulator" element={<PageTransition><BreakSimulator /></PageTransition>} />
          <Route path="/stories" element={<PageTransition><Stories /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

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
      <StoriesProvider>
        <div className="min-h-screen bg-parchment-50 dark:bg-dark-bg transition-colors duration-500 font-sans text-gray-900 dark:text-gray-200 selection:bg-crimson selection:text-white">

          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-md focus:bg-crimson focus:text-white focus:font-medium"
          >
            Skip to main content
          </a>

          {/* Global scroll progress bar (thin line only, no % pill) */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-crimson origin-left z-50 shadow-[0_0_10px_rgba(211,47,47,0.5)] pointer-events-none"
            style={{ scaleX }}
            aria-hidden="true"
          />

          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <main id="main" tabIndex={-1} className="outline-none">
            <ErrorBoundary>
              <AnimatedRoutes />
              <SearchHighlight />
            </ErrorBoundary>
          </main>

          <SearchBar />
          <StorySideSheet />

          <Footer />
        </div>
      </StoriesProvider>
    </Router>
  )
}
