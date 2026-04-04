import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, AlertTriangle, ChevronDown } from 'lucide-react'
import SEO from '../components/SEO'

const timelineEvents = [
  {
    year: "2016",
    title: "Demonetization Shocks Cash Economies",
    category: "Economics",
    icon: "💰",
    desc: "Surat's textile and diamond sectors, heavily reliant on cash transactions to pay massive unorganized migrant workforces, suffer immediate paralysis. First realization of the fragility of unbanked migrant dependencies."
  },
  {
    year: "2018",
    title: "Anti-Migrant Pogrom",
    category: "Social Reality",
    icon: "🔥",
    desc: "Following a local crime, organized mobs led by the Gujarat Kshatriya Thakor Sena (GKTS) target Hindi-speaking workers across 6 districts. Over 20,000 workers flee the state within days. No political organizing leaders are convicted."
  },
  {
    year: "2020",
    title: "COVID-19 Lockdown Exodus",
    category: "Labor",
    icon: "🚶",
    desc: "Millions of migrant workers are abandoned by contractors and local state apparatus. Without ESI benefits, housing, or food guarantees, they walk 1,000+ km back to UP, Bihar, and Odisha, halting Gujarat's manufacturing completely."
  },
  {
    year: "2022",
    title: "Morbi Bridge Collapse",
    category: "Infrastructure",
    icon: "🌉",
    desc: "141 people, largely migrant workers and their families enjoying a holiday, die when the privately managed suspension bridge collapses. As of 2025, zero convictions have been made and all corporate accused are out on bail."
  },
  {
    year: "2024",
    title: "Sabarmati River 'Cesspool' Ruling",
    category: "Environment",
    icon: "☠️",
    desc: "The Gujarat High Court tears into the state pollution control board, declaring the Sabarmati river a 'cesspool' due to rampant, unchecked industrial effluent dumping from Narol and Vatva manufacturing clusters."
  },
  {
    year: "2025",
    title: "Surat Diamond Crisis",
    category: "Labor & Supply Chain",
    icon: "💎",
    desc: "US and EU sanctions on Alrosa (Russian rough diamonds) crash Surat's supply chain. 1.5 lakh workers lose their jobs, and 71 diamond polishers die by suicide over an 18-month period as the industry collapses."
  },
  {
    year: "Jan 2026",
    title: "Morbi Gas & Tariff Twin Shock",
    category: "Energy & Geopolitics",
    icon: "🚢",
    desc: "Red Sea shipping attacks spike LNG prices. Morbi's unhedged ceramic units cannot absorb the costs while simultaneous US tariffs hit their exports. Over 550 units shut down within 10 days, displacing 5-6 lakh workers."
  },
  {
    year: "Mar 2026",
    title: "Industrial & Silicosis Safety Collapse",
    category: "Human Rights",
    icon: "⚰️",
    desc: "PTRC reports a 216% surge in silicosis deaths (38 fatalities) among ceramic/stone workers. The same month, three migrant workers suffocate in a Pandesara GIDC chemical tank without safety gear or PPE."
  }
]

export default function Timeline() {
  return (
    <main className="w-full max-w-4xl mx-auto px-6 pt-32 pb-32">
      <SEO 
        title="Chronology of Crises" 
        description="A timeline of structural failures, exoduses, and industrial disasters in Gujarat from 2016 to 2026."
        path="/timeline" 
      />

      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
          The <span className="italic text-crimson">Compounding</span> Crisis
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">
          A chronological mapping of systemic vulnerabilities, demonstrating how external dependencies trigger cascading failures.
        </p>
      </div>

      <div className="relative border-l-2 border-crimson/20 dark:border-crimson/30 ml-4 md:ml-12 mt-12">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 relative pl-10 md:pl-16"
          >
            {/* Timeline Dot */}
            <div className="absolute w-8 h-8 rounded-full bg-crimson border-4 border-white dark:border-dark-bg -left-[17px] top-1 flex items-center justify-center text-white shadow-lg">
              <span className="text-xs">{event.icon}</span>
            </div>

            {/* Content Card */}
            <div className="bg-white/80 dark:bg-dark-surface/60 border border-gray-200 dark:border-dark-border p-6 md:p-8 rounded-3xl shadow-sm backdrop-blur-sm group hover:border-crimson/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                <span className="text-3xl font-serif font-bold text-crimson tracking-tight">{event.year}</span>
                <div className="hidden md:block w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <span className="text-sm font-sans font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{event.category}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4 group-hover:text-crimson transition-colors">
                {event.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {event.desc}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Continuation Indicator */}
        <div className="relative pl-10 md:pl-16 mt-8">
          <div className="absolute w-8 h-8 rounded-full bg-gray-200 dark:bg-dark-border border-4 border-white dark:border-dark-bg -left-[17px] top-0 flex items-center justify-center text-gray-400">
            <ChevronDown className="w-4 h-4" />
          </div>
          <p className="text-gray-500 font-serif italic text-lg line-clamp-2 pt-1 pb-10">
            Systemic fragility continues to evolve...
          </p>
        </div>
      </div>
    </main>
  )
}
