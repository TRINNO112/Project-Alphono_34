import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Lock } from 'lucide-react'
import SEO from '../components/SEO'

const CASE_LINE = 'CASE NO. 34/GJ/2026'
const STATS = [
  { k: '0', v: 'submarine cable landings on a 1,600 km coastline.' },
  { k: '36%', v: 'of refinery crude now arrives from Russia.' },
  { k: '141', v: 'dead on a single bridge in Morbi.' },
  { k: '5-6 lakh', v: 'migrant workers fled Gujarat in 2026.' },
]

function Typed({ text, speed = 55, onDone }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (i >= text.length) {
      onDone?.()
      return
    }
    const t = setTimeout(() => setI(i + 1), speed)
    return () => clearTimeout(t)
  }, [i, text, speed, onDone])
  return (
    <span>
      {text.slice(0, i)}
      <span className="bf-caret" aria-hidden="true">▍</span>
    </span>
  )
}

export default function Brief() {
  const [stage, setStage] = useState(0)
  // 0: typing case no. | 1: title | 2: stats | 3: CTA

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) setStage(3)
  }, [])

  return (
    <div className="bf-page">
      <SEO
        title="Case Brief · Project Alphono 34"
        description="Three seconds. One case number. Four damning numbers. Enter the dossier."
        path="/brief"
      />

      <div className="bf-frame">
        <div className="bf-corner bf-corner--tl" />
        <div className="bf-corner bf-corner--tr" />
        <div className="bf-corner bf-corner--bl" />
        <div className="bf-corner bf-corner--br" />

        <div className="bf-classified" aria-hidden="true">
          <Lock className="w-3 h-3" /> CLASSIFIED &middot; OPEN RECORD
        </div>

        <div className="bf-caseno">
          {stage >= 0 && (
            <Typed
              text={CASE_LINE}
              speed={60}
              onDone={() => setTimeout(() => setStage(Math.max(stage, 1)), 300)}
            />
          )}
        </div>

        <AnimatePresence>
          {stage >= 1 && (
            <motion.h1
              className="bf-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              onAnimationComplete={() => setTimeout(() => setStage(Math.max(stage, 2)), 450)}
            >
              Anatomy of a <span className="bf-title-accent">Dependent State</span>
            </motion.h1>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage >= 2 && (
            <motion.ul
              className="bf-stats"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.55, delayChildren: 0.15 } },
              }}
              onAnimationComplete={() => setTimeout(() => setStage(Math.max(stage, 3)), 400)}
            >
              {STATS.map((s) => (
                <motion.li
                  key={s.k}
                  className="bf-stat"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                  }}
                >
                  <span className="bf-stat-k">{s.k}</span>
                  <span className="bf-stat-v">{s.v}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              className="bf-cta-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/" className="bf-cta">
                Enter the dossier <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                className="bf-skip"
                onClick={() => setStage(3)}
                aria-label="Skip intro"
              >
                skip intro
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bf-stamp" aria-hidden="true">
          CASE FILE · 34/GJ/2026
        </div>
      </div>
    </div>
  )
}
