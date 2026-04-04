import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Calendar, AlertTriangle, ShieldAlert, BarChart3, Users, Network } from 'lucide-react'
import SEO from '../components/SEO'

const timelineEvents = [
  {
    year: "2016",
    title: "Demonetization Shock",
    category: "Economics",
    icon: "💰",
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
    icon: "🔥",
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
    icon: "🚶",
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
    icon: "🌉",
    desc: "141 civilian deaths when a privately managed suspension bridge collapses due to structural negligence and unregulated privatization.",
    stats: [
      { label: "Fatalities", value: "141", status: "critical" },
      { label: "Safety Audits Done", value: "None", status: "critical" },
      { label: "Corporate Convictions", value: "Zero (Bailed)", status: "danger" }
    ],
    impact: "Exposed systemic corruption and privatization without accountability in critical civilian infrastructure."
  },
  {
    year: "2024",
    title: "Sabarmati 'Cesspool' Ruling",
    category: "Environment",
    icon: "☠️",
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
    icon: "💎",
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
    icon: "🚢",
    desc: "Red Sea shipping attacks spike LNG prices. Morbi's unhedged ceramic units cannot absorb the costs while US tariffs simultaneously hit exports.",
    stats: [
      { label: "Units Shut Down", value: "550+", status: "critical" },
      { label: "Workers Displaced", value: "~6 Lakh", status: "critical" },
      { label: "Energy Cost Spike", value: "+40%", status: "danger" }
    ],
    impact: "Demonstrated the fragility of energy-intensive industries operating without robust macroeconomic hedging."
  }
]

export default function Timeline() {
  const [activeNode, setActiveNode] = useState(timelineEvents[timelineEvents.length - 1]); // Default to latest

  // Scroll to top when node changes on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  }, [activeNode])

  return (
    <main className="w-full relative min-h-screen bg-gray-50 dark:bg-dark-bg font-sans pt-24 pb-32">
      <SEO 
        title="Chronology of Crises" 
        description="A timeline of structural failures, exoduses, and industrial disasters in Gujarat from 2016 to 2026."
        path="/timeline" 
      />

      {/* Header Space */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 text-crimson font-semibold tracking-widest text-sm mb-4">
          <Network className="w-5 h-5" />
          <span>GEO-TEMPORAL INDEX</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          Systemic <span className="text-crimson italic">Collapse</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
          Select a chronological node to access its isolated forensic data matrix.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12 w-full grid lg:grid-cols-[1fr] gap-8 items-start">
        
        {/* The Interactive Rail */}
        <div className="w-full bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-3xl p-6 md:p-10 shadow-sm overflow-x-auto hide-scrollbar relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-gray-800 -translate-y-1/2 z-0 hidden md:block"></div>
          
          <div className="flex gap-4 md:gap-8 justify-between items-center relative z-10 min-w-max md:min-w-0">
            {timelineEvents.map((event, index) => {
              const isActive = activeNode.year === event.year;
              return (
                <button 
                  key={index}
                  onClick={() => setActiveNode(event)}
                  className={`group relative flex flex-col items-center gap-4 transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105 opacity-60 hover:opacity-100'}`}
                >
                  <p className={`text-sm font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-crimson' : 'text-gray-400'}`}>
                    {event.year}
                  </p>
                  
                  {/* Node Point */}
                  <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-colors shadow-md ${
                    isActive 
                    ? 'border-crimson bg-white dark:bg-dark-bg ring-4 ring-red-100 dark:ring-red-900/30' 
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 group-hover:border-crimson/50'
                  }`}>
                    {isActive && <div className="w-2 h-2 rounded-full bg-crimson"></div>}
                  </div>
                  
                  <div className={`absolute -bottom-10 whitespace-nowrap text-xs font-semibold ${isActive ? 'text-gray-900 dark:text-white' : 'text-transparent'}`}>
                    {event.category}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* The Deep Analysis Dashboard */}
        <div className="w-full mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/40 dark:bg-dark-surface/30 border border-gray-200 dark:border-dark-border rounded-[2.5rem] p-6 md:p-12 shadow-sm grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              
              {/* Left Side: Summary & Impact */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-dark-bg border border-gray-100 dark:border-dark-border shadow-sm flex items-center justify-center text-3xl">
                    {activeNode.icon}
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-red-50 dark:bg-red-900/10 text-crimson text-xs font-bold uppercase tracking-widest rounded-full mb-2 inline-block">
                      {activeNode.category}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
                      {activeNode.year}
                    </h2>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                  {activeNode.title}
                </h3>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-8">
                  {activeNode.desc}
                </p>

                <div className="p-5 bg-gray-50 dark:bg-dark-bg border-l-4 border-crimson rounded-r-xl">
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-crimson" /> Forensic Impact Analysis
                  </p>
                  <p className="text-base text-gray-700 dark:text-gray-300 font-medium">
                    {activeNode.impact}
                  </p>
                </div>
              </div>

              {/* Right Side: Deep Statistics Panel */}
              <div className="bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border rounded-3xl p-8 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8 border-b border-gray-100 dark:border-dark-border pb-4 flex items-center gap-3">
                  <BarChart3 className="w-5 h-5" /> Statistical Matrices
                </h4>
                
                <div className="space-y-6">
                  {activeNode.stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-end border-b border-gray-50 dark:border-dark-bg pb-4 group hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {stat.label}
                        </span>
                      </div>
                      <span className={`text-2xl font-black font-mono tracking-tighter ${
                        stat.status === 'critical' ? 'text-red-600' : 'text-crimson'
                      }`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-dark-bg flex items-center gap-3 text-xs text-gray-400">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Data verified against available primary research and civil reports.</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
      
    </main>
  )
}
