import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Flame, Factory, Zap, Landmark, Users, Waves, Navigation } from 'lucide-react'

export function SupplyChainMap() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
  }

  return (
    <div className="w-full my-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white">External Dependency Network</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-sans tracking-wide">Click any box to explore the detailed analysis</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full max-w-5xl mx-auto"
      >
        {/* Row 1 */}
        <BentoCard 
          to="/energy"
          icon={<Flame className="w-5 h-5" />}
          title="Middle East"
          stat="85% Crude Oil"
          desc="69% LNG via Hormuz constraint"
          color="blue"
          variants={itemVariants}
        />
        <BentoCard 
          to="/materials"
          icon={<Factory className="w-5 h-5" />}
          title="China"
          stat="65-70% APIs"
          desc="Paracetamol 91% imported"
          color="rose"
          variants={itemVariants}
        />
        <BentoCard 
          to="/energy"
          icon={<Zap className="w-5 h-5" />}
          title="Indonesia"
          stat="Thermal Coal"
          desc="Power plant fuel dependence"
          color="amber"
          variants={itemVariants}
        />

        {/* Row 2 */}
        <BentoCard 
          to="/economics"
          icon={<Landmark className="w-5 h-5" />}
          title="Central Govt"
          stat="Fiscal Transfers"
          desc="Capex subsidy reliance"
          color="emerald"
          variants={itemVariants}
        />

        {/* CENTER HUB - Spans 1 column on mobile, placed naturally in center on desktop */}
        <motion.div 
          variants={itemVariants}
          className="relative flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-br from-crimson to-red-900 text-white shadow-xl shadow-crimson/20 overflow-hidden group min-h-[160px]"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent blend-overlay"></div>
          <div className="absolute -inset-1 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <Navigation className="w-8 h-8 mb-3 opacity-80" />
          <h2 className="text-3xl font-serif font-bold tracking-widest z-10 drop-shadow-md">GUJARAT</h2>
          <p className="text-xs font-sans tracking-[0.2em] font-medium uppercase text-white/80 mt-2 z-10">Dependent State</p>
        </motion.div>

        <BentoCard 
          to="/labor"
          icon={<Users className="w-5 h-5" />}
          title="UP / Bihar"
          stat="Migrant Labor"
          desc="70% of Morbi workforce"
          color="purple"
          variants={itemVariants}
        />

        {/* Row 3 - Adjusted to center the Narmada block on desktop */}
        <div className="hidden md:block"></div> {/* Spacer for grid alignment */}
        <BentoCard 
          to="/water"
          icon={<Waves className="w-5 h-5" />}
          title="Narmada (MP)"
          stat="9 MAF Water"
          desc="Single point of failure"
          color="teal"
          variants={itemVariants}
        />
        <div className="hidden md:block"></div> {/* Spacer for grid alignment */}
        
      </motion.div>

      <p className="text-center text-sm text-gray-500 mt-12 italic font-serif">
        Figure 2: Gujarat's primary external supply chain dependencies — Bento Hub Layout
      </p>
    </div>
  )
}

function BentoCard({ to, icon, title, stat, desc, color, variants }) {
  const colorStyles = {
    blue: "hover:border-blue-400/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    rose: "hover:border-rose-400/50 hover:bg-rose-50/50 dark:hover:bg-rose-900/20 text-rose-600 dark:text-rose-400",
    amber: "hover:border-amber-400/50 hover:bg-amber-50/50 dark:hover:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    emerald: "hover:border-emerald-400/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    purple: "hover:border-purple-400/50 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 text-purple-600 dark:text-purple-400",
    teal: "hover:border-teal-400/50 hover:bg-teal-50/50 dark:hover:bg-teal-900/20 text-teal-600 dark:text-teal-400",
  }

  return (
    <motion.div variants={variants} className="h-full min-h-[140px]">
      <Link 
        to={to} 
        className={`flex flex-col h-full p-6 rounded-3xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface/40 backdrop-blur-sm transition-all duration-300 group ${colorStyles[color]}`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gray-50 dark:bg-dark-bg group-hover:bg-white dark:group-hover:bg-dark-surface transition-colors shadow-sm">
            {icon}
          </div>
          <h4 className="font-serif font-bold text-gray-900 dark:text-white text-lg">{title}</h4>
        </div>
        <div className="mt-auto">
          <p className="font-sans font-bold text-gray-900 dark:text-white text-base mb-1">{stat}</p>
          <p className="font-sans text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide leading-tight">{desc}</p>
        </div>
      </Link>
    </motion.div>
  )
}
