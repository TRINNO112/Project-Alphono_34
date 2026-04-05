import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, AlertTriangle, ShieldAlert, BarChart3, Play, Pause, Banknote, Flame, Footprints, Building2, Skull, Gem, Ship } from 'lucide-react'
import SEO from '../components/SEO'

const EventIcon = ({ name, className = "" }) => {
  const icons = { Banknote, Flame, Footprints, Building2, Skull, Gem, Ship }
  const Icon = icons[name]
  return Icon ? <Icon className={className} /> : null
}

const timelineEvents = [
  {
    year: "2016",
    title: "Demonetization Shock",
    category: "Economics",
    iconName: "Banknote",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    gradient: "from-amber-500/20 to-amber-900/5",
    accent: "amber",
    desc: "Surat's textile and diamond sectors, heavily reliant on cash transactions to pay massive unorganized migrant workforces, suffer immediate paralysis.",
    stats: [
      { label: "Unpaid Wages Logged", value: "₹450 Cr+", status: "critical" },
      { label: "Migrant Job Losses", value: "~1.2 Lakh", status: "danger" },
      { label: "SME Sector Drop", value: "-22%", status: "danger" }
    ],
    impact: "First realization of the fragility of unbanked migrant dependencies in the secondary sector."
  },
  {
    year: "2018",
    title: "Anti-Migrant Pogrom",
    category: "Social Reality",
    iconName: "Flame",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    gradient: "from-orange-500/20 to-orange-900/5",
    accent: "orange",
    desc: "Following a local crime, organized mobs target Hindi-speaking workers across 6 districts. Mass exoduses occur as state protection fails.",
    stats: [
      { label: "Workers Displaced", value: "20,000+", status: "critical" },
      { label: "Districts Affected", value: "6", status: "danger" },
      { label: "Convictions", value: "0", status: "critical" }
    ],
    impact: "Demonstrated the social vulnerability of inter-state workers and the political capitalization of local nativism."
  },
  {
    year: "2020",
    title: "COVID-19 Lockdown Exodus",
    category: "Labor",
    iconName: "Footprints",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    gradient: "from-purple-500/20 to-purple-900/5",
    accent: "purple",
    desc: "Millions of migrant workers are abandoned by contractors and the state apparatus. Without housing or food guarantees, they walk 1,000+ km home.",
    stats: [
      { label: "Total Exodus", value: "~15 Lakh", status: "critical" },
      { label: "State Aid Reached", value: "<12%", status: "critical" },
      { label: "Manufacturing Halt", value: "100%", status: "danger" }
    ],
    impact: "Absolute collapse of the manufacturing supply chain, exposing the state's total dependency on out-of-state unorganized labor."
  },
  {
    year: "2022",
    title: "Morbi Bridge Collapse",
    category: "Infrastructure",
    iconName: "Building2",
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10 border-red-500/20",
    gradient: "from-red-500/20 to-red-900/5",
    accent: "red",
    desc: "141 civilian deaths when a privately managed suspension bridge collapses due to structural negligence and unregulated privatization.",
    stats: [
      { label: "Fatalities", value: "141", status: "critical" },
      { label: "Safety Audits Done", value: "None", status: "critical" },
      { label: "Corporate Convictions", value: "Zero", status: "danger" }
    ],
    impact: "Exposed systemic corruption and privatization without accountability in critical civilian infrastructure."
  },
  {
    year: "2024",
    title: "Sabarmati 'Cesspool' Ruling",
    category: "Environment",
    iconName: "Skull",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    gradient: "from-emerald-500/20 to-emerald-900/5",
    accent: "emerald",
    desc: "The Gujarat High Court declares the Sabarmati river a 'cesspool' due to rampant, unchecked industrial effluent dumping from Narol clusters.",
    stats: [
      { label: "Toxicity Level", value: "Severe", status: "critical" },
      { label: "Illegal Outfalls", value: "Hundreds", status: "danger" },
      { label: "GPCB Compliance", value: "Failing", status: "critical" }
    ],
    impact: "Verified the catastrophic environmental cost of Gujarat's unregulated industrial expansion."
  },
  {
    year: "2025",
    title: "Surat Diamond Crisis",
    category: "Labor & Supply Chain",
    iconName: "Gem",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10 border-sky-500/20",
    gradient: "from-sky-500/20 to-sky-900/5",
    accent: "sky",
    desc: "US and EU sanctions on Alrosa (Russian rough diamonds) crash Surat's supply chain, triggering massive, unmitigated unemployment.",
    stats: [
      { label: "Workers Fired", value: "~1.5 Lakh", status: "critical" },
      { label: "Worker Suicides", value: "71+", status: "critical" },
      { label: "Units Closed", value: "35%", status: "danger" }
    ],
    impact: "Highlighted the extreme vulnerability of local gig economies to global geopolitical supply chain shifts."
  },
  {
    year: "2026",
    title: "Morbi Gas Twin Shock",
    category: "Energy",
    iconName: "Ship",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10 border-rose-500/20",
    gradient: "from-rose-500/20 to-rose-900/5",
    accent: "rose",
    desc: "Red Sea shipping attacks spike LNG prices. Morbi's unhedged ceramic units cannot absorb the costs while US tariffs simultaneously hit exports.",
    stats: [
      { label: "Units Shut Down", value: "550+", status: "critical" },
      { label: "Workers Displaced", value: "~6 Lakh", status: "critical" },
      { label: "Energy Cost Spike", value: "+40%", status: "danger" }
    ],
    impact: "Demonstrated the fragility of energy-intensive industries operating without robust macroeconomic hedging."
  }
]

// Animated number/text that reveals character by character
function RevealText({ text, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {text}
    </motion.span>
  )
}

function StatCard({ stat, index }) {
  const statusColors = {
    critical: 'border-red-500/50 bg-red-500/5 text-red-500',
    danger: 'border-crimson/40 bg-crimson/5 text-crimson',
  }
  const dotColors = {
    critical: 'bg-red-500',
    danger: 'bg-crimson',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.12 }}
      className={`relative border rounded-2xl p-5 backdrop-blur-sm ${statusColors[stat.status] || statusColors.danger}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-2 h-2 rounded-full ${dotColors[stat.status] || dotColors.danger} animate-pulse`} />
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          {stat.label}
        </span>
      </div>
      <p className="text-2xl md:text-3xl font-black font-mono tracking-tight">
        <RevealText text={stat.value} delay={0.6 + index * 0.12} />
      </p>
    </motion.div>
  )
}

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(timelineEvents.length - 1)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const autoPlayRef = useRef(null)
  const touchStartX = useRef(0)
  const containerRef = useRef(null)

  const event = timelineEvents[currentIndex]

  const goTo = useCallback((index) => {
    if (index < 0 || index >= timelineEvents.length) return
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  const goNext = useCallback(() => {
    if (currentIndex < timelineEvents.length - 1) {
      setDirection(1)
      setCurrentIndex(i => i + 1)
    } else if (isAutoPlaying) {
      setDirection(1)
      setCurrentIndex(0)
    }
  }, [currentIndex, isAutoPlaying])

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex(i => i - 1)
    }
  }, [currentIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      } else if (e.key === ' ') {
        e.preventDefault()
        setIsAutoPlaying(p => !p)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  // Touch/swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext()
      else goPrev()
    }
  }

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(goNext, 5000)
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current) }
  }, [isAutoPlaying, goNext])

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '60%' : '-60%', opacity: 0, scale: 0.92 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-60%' : '60%', opacity: 0, scale: 0.92 }),
  }

  return (
    <main
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full relative min-h-screen bg-gray-50 dark:bg-dark-bg font-sans overflow-hidden"
    >
      <SEO
        title="Chronology of Crises"
        description="A timeline of structural failures, exoduses, and industrial disasters in Gujarat from 2016 to 2026."
        path="/timeline"
      />

      {/* Background ambient glow — follows the current event's accent */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className={`absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-radial ${event.gradient} blur-3xl`}
        />
        <motion.div
          key={`bottom-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className={`absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial ${event.gradient} blur-3xl`}
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      {/* ── Top bar: Year navigation ── */}
      <div className="fixed top-16 left-0 right-0 z-30 pt-4 pb-3 bg-gray-50/80 dark:bg-dark-bg/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-stretch justify-center">
            {timelineEvents.map((ev, idx) => {
              const isActive = idx === currentIndex
              const isPast = idx < currentIndex
              return (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`group relative flex flex-col items-center px-3 md:px-5 py-2 transition-all duration-300 ${
                    isActive ? '' : 'hover:bg-gray-100/60 dark:hover:bg-white/[0.03]'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-8 h-8 md:w-9 md:h-9 rounded-xl border flex items-center justify-center mb-1.5 transition-all duration-300 ${
                    isActive
                      ? `${ev.iconBg} shadow-sm`
                      : isPast
                        ? 'bg-gray-100 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700/50'
                        : 'bg-gray-50 dark:bg-gray-900/40 border-gray-200/60 dark:border-gray-800/40 group-hover:border-gray-300 dark:group-hover:border-gray-700'
                  }`}>
                    <EventIcon
                      name={ev.iconName}
                      className={`w-4 h-4 transition-colors duration-300 ${
                        isActive
                          ? ev.iconColor
                          : isPast
                            ? 'text-gray-400 dark:text-gray-500'
                            : 'text-gray-300 dark:text-gray-600 group-hover:text-gray-400 dark:group-hover:text-gray-500'
                      }`}
                    />
                  </div>

                  {/* Year */}
                  <span className={`text-xs md:text-sm font-mono font-bold tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-gray-900 dark:text-white'
                      : isPast
                        ? 'text-gray-500 dark:text-gray-500'
                        : 'text-gray-350 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400'
                  }`}>
                    {ev.year}
                  </span>

                  {/* Active indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeYearBar"
                      className="absolute -bottom-3 left-2 right-2 h-[3px] bg-crimson rounded-t-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Main Slide Area ── */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-44 pb-28 px-4 md:px-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 200, damping: 30, mass: 1 }}
            className="w-full max-w-6xl mx-auto"
          >
            {/* Slide Content */}
            <div className="grid lg:grid-cols-[2fr_3fr] gap-8 lg:gap-16 items-center">

              {/* ── LEFT: Year + Icon hero ── */}
              <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
                {/* Giant year */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 150 }}
                  className="relative mb-6"
                >
                  <span className="text-[120px] md:text-[180px] lg:text-[220px] font-serif font-black text-gray-100 dark:text-gray-900/60 leading-none select-none">
                    {event.year}
                  </span>
                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                      className={`w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-3xl border-2 ${event.iconBg} backdrop-blur-sm flex items-center justify-center shadow-2xl`}
                    >
                      <EventIcon name={event.iconName} className={`w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 ${event.iconColor}`} />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Category badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-crimson/10 dark:bg-crimson/5 border border-crimson/20 text-crimson text-xs font-bold uppercase tracking-[0.2em] rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                    {event.category}
                  </span>
                </motion.div>

                {/* Slide counter */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 text-xs font-mono text-gray-400 dark:text-gray-600 tracking-widest"
                >
                  {String(currentIndex + 1).padStart(2, '0')} / {String(timelineEvents.length).padStart(2, '0')}
                </motion.p>
              </div>

              {/* ── RIGHT: Content + Stats ── */}
              <div className="space-y-8">
                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight"
                >
                  {event.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light max-w-xl"
                >
                  {event.desc}
                </motion.p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                  {event.stats.map((stat, idx) => (
                    <StatCard key={`${currentIndex}-${idx}`} stat={stat} index={idx} />
                  ))}
                </div>

                {/* Impact Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="relative p-6 rounded-2xl bg-white/50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-gray-800 backdrop-blur-sm"
                >
                  <div className="absolute top-0 left-6 w-12 h-1 bg-crimson rounded-b-full" />
                  <div className="flex items-start gap-3 pt-2">
                    <AlertTriangle className="w-5 h-5 text-crimson shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-crimson mb-2">Forensic Impact</p>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {event.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom Controls ── */}
      <div className="fixed bottom-0 left-0 right-0 z-30 pb-6 pt-4 bg-gradient-to-t from-gray-50 dark:from-dark-bg via-gray-50/80 dark:via-dark-bg/80 to-transparent">
        <div className="max-w-lg mx-auto flex items-center justify-center gap-4">
          {/* Prev */}
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-crimson hover:text-crimson transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 dark:disabled:hover:border-gray-800 disabled:hover:text-gray-600"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Progress Dots */}
          <div className="flex items-center gap-2">
            {timelineEvents.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className="group relative p-1"
              >
                <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                  idx === currentIndex
                    ? 'bg-crimson scale-125 shadow-md shadow-crimson/40'
                    : idx < currentIndex
                      ? 'bg-crimson/40 group-hover:bg-crimson/60'
                      : 'bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-400'
                }`} />
              </button>
            ))}
          </div>

          {/* Auto-play */}
          <button
            onClick={() => setIsAutoPlaying(p => !p)}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
              isAutoPlaying
                ? 'border-crimson bg-crimson/10 text-crimson'
                : 'border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-dark-surface/80 text-gray-500 hover:border-crimson hover:text-crimson'
            } backdrop-blur-sm`}
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          {/* Next */}
          <button
            onClick={goNext}
            disabled={currentIndex === timelineEvents.length - 1 && !isAutoPlaying}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-crimson hover:text-crimson transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 dark:disabled:hover:border-gray-800 disabled:hover:text-gray-600"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard hint */}
        <p className="text-center text-[10px] text-gray-400 dark:text-gray-600 mt-3 tracking-wider font-mono">
          ← → NAVIGATE &nbsp;·&nbsp; SPACE AUTOPLAY &nbsp;·&nbsp; SWIPE ON MOBILE
        </p>

        {/* Data verification line */}
        <div className="flex items-center justify-center gap-2 mt-2 text-[10px] text-gray-400 dark:text-gray-600">
          <ShieldAlert className="w-3 h-3" />
          <span>Data verified against primary research and civil reports</span>
          <span>·</span>
          <BarChart3 className="w-3 h-3" />
          <span>{timelineEvents.length} crisis events indexed</span>
        </div>
      </div>
    </main>
  )
}
