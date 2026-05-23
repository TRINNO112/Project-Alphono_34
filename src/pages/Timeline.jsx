import { motion } from 'framer-motion'
import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, AlertTriangle, ShieldAlert, BarChart3, Play, Pause, Banknote, Flame, Footprints, Building2, Skull, Gem, Ship, Landmark, MapPin, X } from 'lucide-react'
import SEO from '../components/SEO'

const EventIcon = ({ name, className = "" }) => {
  const icons = { Banknote, Flame, Footprints, Building2, Skull, Gem, Ship, Landmark }
  const Icon = icons[name]
  return Icon ? <Icon className={className} /> : null
}

const timelineEvents = [
  {
    year: "2016",
    title: "Demonetization Shock",
    category: "Economics",
    iconName: "Banknote",
    iconColor: "text-amber-500 dark:text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    gradient: "from-amber-500/20 to-amber-900/5",
    accent: "amber",
    stressWeight: 10,
    district: "Surat & Ahmedabad",
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
    title: "PNB-Nirav Modi LoU Fraud",
    category: "Banking",
    iconName: "Landmark",
    iconColor: "text-amber-500 dark:text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    gradient: "from-amber-500/20 to-amber-900/5",
    accent: "amber",
    stressWeight: 10,
    district: "Palanpur",
    desc: "Palanpur-born Nirav Modi and his uncle Mehul Choksi (Gitanjali Gems) orchestrated India's largest banking fraud — fraudulent SWIFT Letters of Undertaking issued from PNB's Brady House branch to overseas branches of bank partners, bypassing core banking systems.",
    stats: [
      { label: "Total Fraud Size", value: "₹14,357 Cr", status: "critical" },
      { label: "Multiple of PNB Q3 Profit", value: "49x", status: "danger" },
      { label: "Days Between Flight & FIR", value: "2", status: "critical" }
    ],
    impact: "Exposed Gujarat's diamond-trade trust networks as a fraud vector at national scale; RBI banned LoUs entirely two months later."
  },
  {
    year: "2018",
    title: "Anti-Migrant Pogrom",
    category: "Social Reality",
    iconName: "Flame",
    iconColor: "text-orange-500 dark:text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    gradient: "from-orange-500/20 to-orange-900/5",
    accent: "orange",
    stressWeight: 15,
    district: "Sabarkantha & Mehsana",
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
    iconColor: "text-purple-500 dark:text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    gradient: "from-purple-500/20 to-purple-900/5",
    accent: "purple",
    stressWeight: 20,
    district: "Statewide Industrial Corridors",
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
    iconColor: "text-red-500 dark:text-red-400",
    iconBg: "bg-red-500/10 border-red-500/20",
    gradient: "from-red-500/20 to-red-900/5",
    accent: "red",
    stressWeight: 10,
    district: "Morbi",
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
    iconColor: "text-emerald-500 dark:text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    gradient: "from-emerald-500/20 to-emerald-900/5",
    accent: "emerald",
    stressWeight: 10,
    district: "Ahmedabad (Narol)",
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
    iconColor: "text-sky-500 dark:text-sky-400",
    iconBg: "bg-sky-500/10 border-sky-500/20",
    gradient: "from-sky-500/20 to-sky-900/5",
    accent: "sky",
    stressWeight: 10,
    district: "Surat",
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
    iconColor: "text-rose-500 dark:text-rose-400",
    iconBg: "bg-rose-500/10 border-rose-500/20",
    gradient: "from-rose-500/20 to-rose-900/5",
    accent: "rose",
    stressWeight: 15,
    district: "Morbi",
    desc: "Red Sea shipping attacks spike LNG prices. Morbi's unhedged ceramic units cannot absorb the costs while US tariffs simultaneously hit exports.",
    stats: [
      { label: "Units Shut Down", value: "550+", status: "critical" },
      { label: "Workers Displaced", value: "~6 Lakh", status: "critical" },
      { label: "Energy Cost Spike", value: "+40%", status: "danger" }
    ],
    impact: "Demonstrated the fragility of energy-intensive industries operating without robust macroeconomic hedging."
  }
]

const getProgressWidth = (value) => {
  const match = value.match(/[0-9.]+/);
  if (!match) return 50;
  const val = parseFloat(match[0]);
  
  if (value.includes('%')) {
    return Math.min(100, Math.max(10, val));
  }
  if (value.includes('Lakh') || value.includes('L')) {
    return Math.min(100, Math.max(10, (val / 15) * 100));
  }
  if (value.includes('Cr')) {
    return Math.min(100, Math.max(10, (val / 15000) * 100));
  }
  if (val > 100) {
    return Math.min(100, Math.max(10, (val / 600) * 100));
  }
  return Math.min(100, Math.max(10, val));
}

function StatProgressBar({ stat, sIdx }) {
  const progress = getProgressWidth(stat.value);
  const colorMap = {
    critical: 'bg-red-500 dark:bg-red-600',
    danger: 'bg-crimson',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: sIdx * 0.1 }}
      className="space-y-1.5"
    >
      <div className="flex justify-between text-xs font-mono">
        <span className="text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</span>
        <span className="text-gray-900 dark:text-gray-150 font-bold">{stat.value}</span>
      </div>
      <div className="w-full h-2 bg-gray-100 dark:bg-slate-900 border border-gray-250/20 dark:border-slate-800/60 rounded-full overflow-hidden">
        <div 
          className={`h-full ${colorMap[stat.status] || colorMap.danger} transition-all duration-700 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const [activeIndices, setActiveIndices] = useState(new Set([0]))
  const [focusedIndex, setFocusedIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [isHudVisible, setIsHudVisible] = useState(true)
  
  const autoPlayRef = useRef(null)
  const containerRef = useRef(null)

  const handleScroll = useCallback(() => {
    const rowElements = document.querySelectorAll('.timeline-row')
    let currentFocus = 0
    const activeSet = new Set([0])
    
    rowElements.forEach((el, idx) => {
      const rect = el.getBoundingClientRect()
      // If middle of row crosses past 60% of viewport
      if (rect.top < window.innerHeight * 0.6) {
        activeSet.add(idx)
        currentFocus = idx
      }
    })
    
    setActiveIndices(activeSet)
    setFocusedIndex(currentFocus)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Defer initial scroll measurement to next frame to avoid synchronous cascading renders
    const frameId = requestAnimationFrame(handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(frameId)
    }
  }, [handleScroll])

  const scrollToRow = useCallback((idx) => {
    const el = document.getElementById(`event-row-${idx}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [])

  const goNext = useCallback(() => {
    setFocusedIndex(prev => {
      const nextIdx = (prev + 1) % timelineEvents.length
      scrollToRow(nextIdx)
      return nextIdx
    })
  }, [scrollToRow])

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(goNext, 5000)
    } else {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlaying, goNext])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        const nextIdx = (focusedIndex + 1) % timelineEvents.length
        scrollToRow(nextIdx)
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        const prevIdx = (focusedIndex - 1 + timelineEvents.length) % timelineEvents.length
        scrollToRow(prevIdx)
      } else if (e.key === ' ') {
        e.preventDefault()
        setIsAutoPlaying(p => !p)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [focusedIndex, scrollToRow])

  // Calculate Cumulative Stress Score
  const cumulativeStress = Math.min(
    100,
    Array.from(activeIndices).reduce((acc, idx) => acc + (timelineEvents[idx]?.stressWeight || 0), 0)
  )

  const focusedEvent = timelineEvents[focusedIndex]

  return (
    <main
      ref={containerRef}
      className="w-full relative min-h-screen bg-parchment-50 dark:bg-slate-950 font-sans overflow-x-hidden blueprint-grid-paper"
    >
      <SEO
        title="Chronology of Crises · Project Alphono 34"
        description="Continuous scroll stress-timeline mapping the cumulative shocks of Gujarat's structural dependencies and accidents."
        path="/timeline"
      />

      {/* Grid line overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02]"
        style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      {/* ── Top Bar Year Navigation ── */}
      <div className="fixed top-16 left-0 right-0 z-30 pt-4 pb-3 bg-parchment-50/80 dark:bg-slate-950/85 backdrop-blur-xl border-b border-gray-200/50 dark:border-slate-800/60 select-none">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-stretch justify-center gap-1 md:gap-2">
            {timelineEvents.map((ev, idx) => {
              const isActive = idx === focusedIndex
              const isPast = activeIndices.has(idx) && idx < focusedIndex
              return (
                <button
                  key={idx}
                  onClick={() => scrollToRow(idx)}
                  className={`group relative flex flex-col items-center px-2 md:px-4 py-2 transition-all duration-300 ${
                    isActive ? '' : 'hover:bg-gray-250/20 dark:hover:bg-slate-900/50'
                  }`}
                  aria-label={`Scroll to year ${ev.year}: ${ev.title}`}
                >
                  <div className={`w-8 h-8 md:w-9 md:h-9 rounded-xl border flex items-center justify-center mb-1.5 transition-all duration-300 ${
                    isActive
                      ? `${ev.iconBg} shadow-sm ring-1 ring-crimson/20`
                      : isPast
                        ? 'bg-crimson/10 border-crimson/20'
                        : 'bg-white dark:bg-slate-900 border-gray-200/80 dark:border-slate-800'
                  }`}>
                    <EventIcon
                      name={ev.iconName}
                      className={`w-4 h-4 transition-colors duration-300 ${
                        isActive
                          ? ev.iconColor
                          : isPast
                            ? 'text-crimson/80'
                            : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600'
                      }`}
                    />
                  </div>
                  <span className={`text-[10px] md:text-xs font-mono font-bold tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-gray-900 dark:text-white'
                      : isPast
                        ? 'text-crimson/80'
                        : 'text-gray-450 dark:text-gray-500'
                  }`}>
                    {ev.year}
                  </span>
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



      {/* ── Main Timeline Container ── */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 pt-44 lg:pt-36 pb-36 relative z-10">
        <div className="space-y-24 lg:space-y-16">
          {timelineEvents.map((ev, idx) => {
            const isActive = idx === focusedIndex
            const isPast = activeIndices.has(idx) && idx < focusedIndex
            const isActiveOrPast = activeIndices.has(idx)
            const isEven = idx % 2 === 0

            return (
              <section
                key={idx}
                id={`event-row-${idx}`}
                className="timeline-row grid grid-cols-[45px_1fr] lg:grid-cols-[1fr_80px_1fr] gap-4 lg:gap-0 items-center scroll-mt-48 lg:scroll-mt-40"
              >
                
                {/* 1. Left Section (Dossier Card for even, Year for odd) */}
                <div className={`${isEven ? '' : 'hidden lg:block'} col-start-2 col-end-3 lg:col-start-1 lg:col-end-2 ${
                  isEven ? 'lg:pr-8' : 'lg:pl-8 lg:text-right flex flex-col items-center lg:items-end'
                } order-2 lg:order-none`}>
                  
                  {isEven ? (
                    // Dossier Card for Even
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
                      className={`relative border rounded-2xl p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur border-gray-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl transition-all duration-300 group ${
                        isActive ? 'ring-1 ring-crimson/30 dark:ring-crimson/25 shadow-lg' : ''
                      }`}
                    >
                      {/* Giant background Year */}
                      <span className="absolute right-6 top-4 text-7xl lg:text-8xl font-serif font-black text-gray-100/70 dark:text-slate-800/10 select-none z-0 pointer-events-none">
                        {ev.year}
                      </span>
                      
                      <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono tracking-widest text-crimson font-bold uppercase">
                            CASE FILE #{ev.year}-0{idx + 1}
                          </span>
                          <span className="text-gray-300 dark:text-slate-700">/</span>
                          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">
                            {ev.category}
                          </span>
                        </div>
                        
                        <h2 className="text-xl lg:text-2xl font-serif font-bold text-gray-900 dark:text-white group-hover:text-crimson transition-colors">
                          {ev.title}
                        </h2>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                          {ev.desc}
                        </p>
                        
                        {/* Stats list with progress bars */}
                        <div className="border-t border-gray-100 dark:border-slate-800/50 pt-4 space-y-3">
                          {ev.stats.map((stat, sIdx) => (
                            <StatProgressBar key={sIdx} stat={stat} sIdx={sIdx} />
                          ))}
                        </div>

                        {/* Impact footer */}
                        <div className="border-t border-gray-100 dark:border-slate-800/50 pt-4 flex gap-2 items-start text-xs font-mono text-gray-500 dark:text-gray-400">
                          <AlertTriangle className="w-4 h-4 text-crimson shrink-0 mt-0.5" />
                          <p className="leading-relaxed">
                            <strong className="text-crimson uppercase">Impact: </strong>{ev.impact}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    // Year / Category description label for Odd rows (Desktop display)
                    <div className="hidden lg:block space-y-3">
                      <div className="text-5xl font-serif font-black text-gray-300 dark:text-slate-800">
                        {ev.year}
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-crimson/5 dark:bg-crimson/10 border border-crimson/20 text-crimson text-[10px] font-mono uppercase tracking-widest rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                        {ev.category}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono justify-end">
                        <MapPin className="w-3.5 h-3.5 text-crimson" />
                        <span>{ev.district}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Middle Seismograph Column */}
                <div className="col-start-1 col-end-2 lg:col-start-2 lg:col-end-3 h-full order-1 lg:order-none">
                  <div className="flex flex-col items-center h-full min-h-[360px]">
                    
                    {/* Top connector line */}
                    <div className={`w-[2px] flex-1 transition-colors duration-500 ${
                      isPast ? 'bg-crimson/50' : 'bg-gray-200 dark:bg-slate-800/50'
                    }`} />
                    
                    {/* Seismograph spike */}
                    <svg width="80" height="160" viewBox="0 0 80 160" fill="none" className="shrink-0 my-2 select-none pointer-events-none">
                      {/* Tech grid ticks */}
                      <line x1="10" y1="0" x2="10" y2="160" stroke="currentColor" strokeWidth="0.5" className="text-gray-200/50 dark:text-slate-900" strokeDasharray="2 4" />
                      <line x1="70" y1="0" x2="70" y2="160" stroke="currentColor" strokeWidth="0.5" className="text-gray-200/50 dark:text-slate-900" strokeDasharray="2 4" />
                      
                      {/* Spike path */}
                      <path
                        d="M 40,0 L 40,55 L 25,65 L 55,75 L 15,90 L 65,105 L 35,115 L 40,125 L 40,160"
                        stroke={isActive ? "var(--color-crimson)" : isPast ? "rgba(184, 74, 62, 0.4)" : "rgba(156, 163, 175, 0.25)"}
                        strokeWidth={isActive ? "2.5" : "1.5"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-500"
                      />

                      {/* Concentric rings at epicenter */}
                      {isActive ? (
                        <>
                          <circle cx="40" cy="90" r="14" className="fill-crimson/10 stroke-crimson/15 blueprint-pulse" style={{ transformOrigin: '40px 90px' }} />
                          <circle cx="40" cy="90" r="6" className="fill-crimson stroke-white dark:stroke-slate-950" strokeWidth="1.5" />
                        </>
                      ) : isPast ? (
                        <circle cx="40" cy="90" r="4.5" className="fill-crimson/60 stroke-white dark:stroke-slate-950" strokeWidth="1" />
                      ) : (
                        <circle cx="40" cy="90" r="4" className="fill-gray-300 dark:fill-slate-700 stroke-white dark:stroke-slate-950" strokeWidth="1" />
                      )}
                    </svg>
                    
                    {/* Bottom connector line */}
                    <div className={`w-[2px] flex-1 transition-colors duration-500 ${
                      isActiveOrPast ? 'bg-crimson/50' : 'bg-gray-200 dark:bg-slate-800/50'
                    }`} />
                  </div>
                </div>

                {/* 3. Right Section (Year for even, Dossier Card for odd) */}
                <div className={`${isEven ? 'hidden lg:block' : ''} col-start-2 col-end-3 lg:col-start-3 lg:col-end-4 ${
                  isEven ? 'lg:pl-8 flex flex-col items-center lg:items-start' : 'lg:pl-8'
                } order-3 lg:order-none`}>
                  
                  {isEven ? (
                    // Year / Category description label for Even rows (Desktop display)
                    <div className="hidden lg:block space-y-3">
                      <div className="text-5xl font-serif font-black text-gray-300 dark:text-slate-800">
                        {ev.year}
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-crimson/5 dark:bg-crimson/10 border border-crimson/20 text-crimson text-[10px] font-mono uppercase tracking-widest rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                        {ev.category}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-crimson" />
                        <span>{ev.district}</span>
                      </div>
                    </div>
                  ) : (
                    // Dossier Card for Odd
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
                      className={`relative border rounded-2xl p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur border-gray-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl transition-all duration-300 group ${
                        isActive ? 'ring-1 ring-crimson/30 dark:ring-crimson/25 shadow-lg' : ''
                      }`}
                    >
                      {/* Giant background Year */}
                      <span className="absolute right-6 top-4 text-7xl lg:text-8xl font-serif font-black text-gray-100/70 dark:text-slate-800/10 select-none z-0 pointer-events-none">
                        {ev.year}
                      </span>
                      
                      <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono tracking-widest text-crimson font-bold uppercase">
                            CASE FILE #{ev.year}-0{idx + 1}
                          </span>
                          <span className="text-gray-300 dark:text-slate-700">/</span>
                          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">
                            {ev.category}
                          </span>
                        </div>
                        
                        <h2 className="text-xl lg:text-2xl font-serif font-bold text-gray-900 dark:text-white group-hover:text-crimson transition-colors">
                          {ev.title}
                        </h2>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                          {ev.desc}
                        </p>
                        
                        {/* Stats list with progress bars */}
                        <div className="border-t border-gray-100 dark:border-slate-800/50 pt-4 space-y-3">
                          {ev.stats.map((stat, sIdx) => (
                            <StatProgressBar key={sIdx} stat={stat} sIdx={sIdx} />
                          ))}
                        </div>

                        {/* Impact footer */}
                        <div className="border-t border-gray-100 dark:border-slate-800/50 pt-4 flex gap-2 items-start text-xs font-mono text-gray-500 dark:text-gray-400">
                          <AlertTriangle className="w-4 h-4 text-crimson shrink-0 mt-0.5" />
                          <p className="leading-relaxed">
                            <strong className="text-crimson uppercase">Impact: </strong>{ev.impact}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </section>
            )
          })}
        </div>
      </div>

      {/* ── Sticky Telemetry HUD (Desktop right margin) ── */}
      {isHudVisible && (
        <aside className="fixed right-8 top-36 w-80 z-30 hidden xl:block select-none pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/95 border border-slate-800 text-slate-200 rounded-2xl p-5 shadow-2xl space-y-4 font-mono text-xs backdrop-blur pointer-events-auto"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-[9px]">Telemetry HUD v1.0</span>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-450 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <button 
                  onClick={() => setIsHudVisible(false)}
                  className="p-1 rounded hover:bg-slate-800 text-gray-500 hover:text-white transition cursor-pointer"
                  aria-label="Close HUD"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          
          <div className="space-y-2.5">
            <div className="flex justify-between">
              <span className="text-gray-500">FOCUS YEAR:</span>
              <span className="text-white font-bold">{focusedEvent.year}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">SECTOR / PILLAR:</span>
              <span className="text-crimson font-bold uppercase tracking-wider">{focusedEvent.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">TARGET REGION:</span>
              <span className="text-white font-bold uppercase truncate max-w-[170px]" title={focusedEvent.district}>
                {focusedEvent.district}
              </span>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3.5 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">CUMULATIVE STRESS:</span>
              <span className="text-red-500 font-bold text-sm">{cumulativeStress}%</span>
            </div>
            <div className="w-full h-2 bg-slate-850 border border-slate-800/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-red-600 transition-all duration-500" 
                style={{ width: `${cumulativeStress}%` }}
              />
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3 text-[10px] text-gray-500 space-y-1">
            <div className="flex gap-1.5 items-center">
              <ShieldAlert className="w-3.5 h-3.5 text-crimson" />
              <span>STRESS LOG READOUT ACTIVE</span>
            </div>
            <p className="leading-relaxed text-gray-500">
              Crisis events correlate to systemic dependencies in imported coal, rare metals, subsea bandwidth, and labor channels.
            </p>
            </div>
          </motion.div>
        </aside>
      )}

      {/* ── Mobile-only compact Telemetry HUD (Fixed above capsule bar) ── */}
      {isHudVisible && (
        <div className="fixed bottom-20 left-0 right-0 z-20 px-4 xl:hidden select-none pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto bg-slate-900/95 border border-slate-800/80 backdrop-blur-md rounded-xl p-3.5 shadow-xl pointer-events-auto font-mono text-[10px] text-slate-300 space-y-2.5"
          >
            <div className="flex justify-between items-center text-[9px] uppercase tracking-wider text-gray-500 border-b border-slate-800/60 pb-1.5">
              <span>Telemetry HUD (Mobile)</span>
              <div className="flex items-center gap-2">
                <span className="text-crimson font-bold">{focusedEvent.year}</span>
                <button
                  onClick={() => setIsHudVisible(false)}
                  className="p-0.5 rounded hover:bg-slate-800 text-gray-500 hover:text-white transition cursor-pointer"
                  aria-label="Close Mobile HUD"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between gap-2">
                <span className="text-gray-500">SECTOR:</span>
                <span className="text-crimson font-bold uppercase truncate max-w-[200px]">{focusedEvent.category}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-500">REGION:</span>
                <span className="text-white font-bold truncate max-w-[200px]" title={focusedEvent.district}>
                  {focusedEvent.district}
                </span>
              </div>
            </div>

            <div className="space-y-1.5 pt-1 border-t border-slate-800/40">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">CUMULATIVE STRESS:</span>
                <span className="text-red-500 font-bold">{cumulativeStress}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-850 border border-slate-800/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-red-600 transition-all duration-500" 
                  style={{ width: `${cumulativeStress}%` }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* ── Floating Controls Capsule Bar (Unified play & navigation) ── */}
      <div className="fixed bottom-6 left-0 right-0 z-30 px-4 pointer-events-none select-none">
        <div className="max-w-md mx-auto bg-slate-900/90 border border-slate-800 backdrop-blur-md rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-2xl flex items-center justify-between pointer-events-auto gap-2 sm:gap-4">
          <button
            onClick={() => {
              const prevIdx = (focusedIndex - 1 + timelineEvents.length) % timelineEvents.length
              scrollToRow(prevIdx)
            }}
            className="w-8 h-8 rounded-full border border-slate-700 bg-slate-850 text-slate-300 flex items-center justify-center hover:text-white transition duration-200"
            aria-label="Previous event"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setIsAutoPlaying(p => !p)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition duration-200 ${
              isAutoPlaying 
                ? 'border-crimson bg-crimson/25 text-crimson' 
                : 'border-slate-700 bg-slate-850 text-slate-300 hover:text-white'
            }`}
            aria-label={isAutoPlaying ? "Pause auto scroll" : "Play auto scroll"}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>

          <div className="text-center font-mono text-[9px] sm:text-[10px] text-slate-300 flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <span><strong className="text-crimson">YEAR:</strong> {timelineEvents[focusedIndex].year}</span>
            <span className="text-slate-700">|</span>
            <span><strong className="text-crimson">EVENT:</strong> {focusedIndex + 1}/{timelineEvents.length}</span>
            <span className="text-slate-700">|</span>
            <span><strong className="text-red-500">STRESS:</strong> {cumulativeStress}%</span>
          </div>

          <button
            onClick={() => setIsHudVisible(p => !p)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition duration-200 ${
              isHudVisible 
                ? 'border-crimson bg-crimson/25 text-crimson' 
                : 'border-slate-700 bg-slate-850 text-slate-300 hover:text-white'
            }`}
            aria-label={isHudVisible ? "Hide Telemetry HUD" : "Show Telemetry HUD"}
            title="Toggle Telemetry HUD"
          >
            <BarChart3 className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => {
              const nextIdx = (focusedIndex + 1) % timelineEvents.length
              scrollToRow(nextIdx)
            }}
            className="w-8 h-8 rounded-full border border-slate-700 bg-slate-850 text-slate-300 flex items-center justify-center hover:text-white transition duration-200"
            aria-label="Next event"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Restore HUD button for desktop */}
      {!isHudVisible && (
        <div className="fixed right-8 bottom-24 z-30 hidden xl:block select-none pointer-events-none">
          <button
            onClick={() => setIsHudVisible(true)}
            className="bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white rounded-full px-4 py-2.5 shadow-2xl pointer-events-auto transition flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase backdrop-blur cursor-pointer"
          >
            <BarChart3 className="w-4 h-4 text-crimson" />
            <span>Telemetry HUD</span>
          </button>
        </div>
      )}
    </main>
  )
}
