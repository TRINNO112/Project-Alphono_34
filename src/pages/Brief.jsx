import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Lock, FileWarning, Play, Pause } from 'lucide-react'
import SEO from '../components/SEO'

const CASE_LINE = 'CASE NO. 34/GJ/2026'

const CHARGE_PARAGRAPHS = [
  'Gujarat is sold to the world as a miracle — the double-digit GSDP headline, the port city skyline, the brochure of Vibrant Summits. This file argues the miracle is a balance-sheet illusion.',
  'Behind the throughput numbers, the state runs on imported coal, Russian crude, Chinese APIs, Central rails, and migrant sweat. Every pillar of its economy rests on a lever someone else controls.',
  'Across thirteen case files and two hundred and ninety-five citations, this dossier documents who owns those levers — and what breaks when any of them is pulled.',
]

const STATS = [
  { k: '0',    suffix: '',       v: 'submarine cable landings on a 1,600 km coastline.' },
  { k: '36',   suffix: '%',      v: 'of refinery crude now arrives from Russia.' },
  { k: '141',  suffix: '',       v: 'dead on a single collapsed bridge in Morbi.' },
  { k: '5.5',  suffix: ' lakh',  v: 'migrant workers fled Gujarat during the 2026 wage crisis.' },
]

const PILLARS = [
  ['I',     'Infrastructure',        'Mundra controls 28% of India\'s port volume. Zero submarine cables on 1,600 km coast.'],
  ['II',    'Energy',                '550+ Morbi units shuttered in the 2026 gas crisis. Tata Mundra UMPP offline nine months.'],
  ['III',   'Water',                 'Mehsana aquifer at 132% extraction. Fluoride at 17.5 mg/L — eleven times the WHO limit.'],
  ['IV',    'Labor',                 'US tariffs collapse diamond trade. ₹100 crore/day lost. 5–6 lakh workers flee the state.'],
  ['V',     'Economics',             'CAG flags overstated surplus. Own Tax Revenue at 4.9%. Debt-to-GSDP pushing 15.3%.'],
  ['VI',    'Materials',             'Russia becomes #1 crude supplier. 65–70% of pharmaceutical APIs arrive from China.'],
  ['VII',   'Education',             '2.4 lakh annual dropouts — the highest in India. Primary GER collapses to 79.6%.'],
  ['VIII',  'Environment',           'Sabarmati ruled a "cesspool." Deesa blast kills 21. 36 sq km of mangrove lost.'],
  ['IX',    'Migrant Discrimination','2018 pogrom: 20,000+ fled overnight. "Hindira" — a slur the state pretends not to know.'],
  ['X',     'Agriculture',           '67% of DAP, 100% of MOP imported. Bt cotton monoculture. Groundwater at 132%.'],
  ['XI',    'Green Tech',            '90% of rare-earth processing in Chinese hands. 80%+ of PV wafers imported.'],
  ['XII',   'Chemical Governance',   'Golden Corridor effluent. BOD 292 mg/L in the Sabarmati. NGT fines cross ₹100 crore.'],
  ['XIII',  'Digital Sovereignty',   'Zero cable landings. GIFT City backhauls via Mumbai. AWS hosts the state e-gov stack.'],
]

const CASCADE = [
  'March 2026. A gas-tariff spike halts 550 ceramic kilns in Morbi.',
  'April 2026. US tariffs gut diamond exports — 5 lakh Saurashtra workers laid off.',
  'May 2026. Versova cable bottleneck — UPI drops 47 minutes in a single afternoon.',
  'June 2026. Deesa firecracker unit explodes. Twenty-one dead. Most are migrants.',
  'July 2026. Gambhira bridge collapses on NH-48. Twenty-two killed on the span.',
  'The state calls it a series of unrelated accidents. This file calls it the same disease.',
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

function CountUp({ to, suffix = '' }) {
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 55, damping: 18 })
  const [display, setDisplay] = useState('0')
  const numeric = parseFloat(to)
  const hasDecimal = String(to).includes('.')
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          mv.set(numeric)
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [mv, numeric, started])

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      setDisplay(hasDecimal ? v.toFixed(1) : String(Math.round(v)))
    })
    return unsub
  }, [spring, hasDecimal])

  return <span ref={ref}>{display}{suffix}</span>
}

export default function Brief() {
  const rootRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [playing, setPlaying] = useState(false)
  const [coldStage, setColdStage] = useState(() => {
    if (typeof window === 'undefined') return 0
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 2 : 0
  })
  // cold open: 0 typing | 1 title | 2 done -> revealed stats appear on scroll

  const { scrollYProgress } = useScroll({ target: rootRef, offset: ['start start', 'end end'] })
  const progressScaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.94])

  const handleMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY })
  }

  // Auto-scroll playback
  useEffect(() => {
    if (!playing) return
    let raf
    const step = () => {
      window.scrollBy({ top: 1.3, behavior: 'auto' })
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (window.scrollY >= max - 2) {
        setPlaying(false)
        return
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [playing])

  return (
    <div ref={rootRef} className="bf-root" onMouseMove={handleMove}>
      <SEO
        title="Case Brief · Project Alphono 34"
        description="A cinematic prosecution of Gujarat's structural dependencies. 13 pillars. 295 citations. One case file."
        path="/brief"
      />

      {/* Progress rail */}
      <motion.div className="bf-progress" style={{ scaleX: progressScaleX }} aria-hidden="true" />

      {/* Ambient particles */}
      <div className="bf-particles" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="bf-particle"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${(i * 0.7) % 8}s`,
              animationDuration: `${8 + (i % 5) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse spotlight */}
      <div
        className="bf-spotlight"
        aria-hidden="true"
        style={{
          background: `radial-gradient(520px circle at ${mouse.x}px ${mouse.y}px, rgba(211,47,47,0.08), transparent 70%)`,
        }}
      />

      {/* Auto-scroll control */}
      <button
        type="button"
        className="bf-playbtn"
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? 'Pause auto-scroll' : 'Play case brief'}
      >
        {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        <span>{playing ? 'PAUSE' : 'AUTO-PLAY'}</span>
      </button>

      {/* ═══════════ SECTION 00 — COLD OPEN ═══════════ */}
      <motion.section className="bf-hero" style={{ opacity: heroOpacity, scale: heroScale }}>
        <div className="bf-corner bf-corner--tl" />
        <div className="bf-corner bf-corner--tr" />
        <div className="bf-corner bf-corner--bl" />
        <div className="bf-corner bf-corner--br" />

        <div className="bf-classified">
          <Lock className="w-3 h-3" /> CLASSIFIED · OPEN RECORD
        </div>

        <div className="bf-scanline" aria-hidden="true" />

        <div className="bf-caseno">
          {coldStage >= 0 && (
            <Typed
              text={CASE_LINE}
              speed={55}
              onDone={() => setTimeout(() => setColdStage((s) => Math.max(s, 1)), 250)}
            />
          )}
        </div>

        {coldStage >= 1 && (
          <motion.h1
            className="bf-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={() => setColdStage((s) => Math.max(s, 2))}
          >
            {'Anatomy of a'.split(' ').map((w, i) => (
              <motion.span
                key={i}
                className="bf-word"
                initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}&nbsp;
              </motion.span>
            ))}
            <br />
            <motion.span
              className="bf-title-accent"
              initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Dependent State
              <motion.span
                className="bf-underline"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </motion.span>
          </motion.h1>
        )}

        {coldStage >= 2 && (
          <motion.div
            className="bf-scroll-hint"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <span className="bf-scroll-line" />
            <span className="bf-scroll-text">SCROLL · or press AUTO-PLAY</span>
          </motion.div>
        )}

        <div className="bf-stamp">CASE FILE · 34/GJ/2026</div>
      </motion.section>

      {/* ═══════════ SECTION 01 — THE CHARGE ═══════════ */}
      <section className="bf-section bf-charge">
        <Reveal>
          <h2 className="bf-sec-kicker">Section 01 · The Charge</h2>
          <h3 className="bf-sec-heading">The indictment in three paragraphs.</h3>
        </Reveal>
        <div className="bf-charge-body">
          {CHARGE_PARAGRAPHS.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="bf-charge-para">
                <span className="bf-drop">{p[0]}</span>
                {p.slice(1)}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════ SECTION 02 — EXHIBITS (stats) ═══════════ */}
      <section className="bf-section bf-exhibits">
        <Reveal>
          <h2 className="bf-sec-kicker">Section 02 · Four Exhibits</h2>
          <h3 className="bf-sec-heading">Four numbers the state cannot explain away.</h3>
        </Reveal>
        <ul className="bf-stats">
          {STATS.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.12} as="li" className="bf-stat">
              <span className="bf-stat-idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="bf-stat-k">
                <CountUp to={s.k} suffix={s.suffix} />
              </span>
              <span className="bf-stat-v">{s.v}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ═══════════ SECTION 03 — 13 CASE FILES ═══════════ */}
      <section className="bf-section bf-pillars">
        <Reveal>
          <h2 className="bf-sec-kicker">Section 03 · Thirteen Case Files</h2>
          <h3 className="bf-sec-heading">One pillar. One dependency. One line each.</h3>
        </Reveal>
        <ol className="bf-pillar-list">
          {PILLARS.map(([roman, name, blurb], i) => (
            <Reveal key={name} delay={i * 0.04} as="li" className="bf-pillar-row">
              <span className="bf-pillar-roman">{roman}</span>
              <span className="bf-pillar-name">{name}</span>
              <span className="bf-pillar-blurb">{blurb}</span>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ═══════════ SECTION 04 — CASCADE ═══════════ */}
      <section className="bf-section bf-cascade">
        <Reveal>
          <h2 className="bf-sec-kicker">Section 04 · The Cascade</h2>
          <h3 className="bf-sec-heading">What 2026 actually looked like, in order.</h3>
        </Reveal>
        <div className="bf-cascade-rail">
          {CASCADE.map((line, i) => (
            <Reveal key={i} delay={i * 0.15} as="div" className="bf-cascade-row">
              <span className="bf-cascade-dot" />
              <span className="bf-cascade-line">{line}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════ SECTION 05 — VERDICT & CTA ═══════════ */}
      <section className="bf-section bf-verdict">
        <Reveal>
          <blockquote className="bf-quote">
            "The prosperity of a state measured only by its throughput — while blind to its input
            origins — is an accounting illusion, not economic strength."
            <footer>— Premise of this research</footer>
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="bf-cta-row">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/" className="bf-cta">
                <FileWarning className="w-4 h-4" />
                Enter the full dossier
                <ArrowRight className="w-4 h-4 bf-cta-arrow" />
              </Link>
            </motion.div>
            <div className="bf-cta-meta">
              13 pillars · 295 citations · 33 districts · CASE NO. 34/GJ/2026
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

function Reveal({ children, delay = 0, as = 'div', className = '' }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
