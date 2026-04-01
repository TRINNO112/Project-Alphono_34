import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Factory, Droplets, Users, TrendingUp, Ship, ArrowRight, AlertTriangle, BookOpen, ExternalLink } from 'lucide-react'

export default function Home() {
  const sectors = [
    {
      id: 'infrastructure',
      title: "Infrastructure & Logistics",
      icon: <Ship className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      desc: "An analysis of maritime gateway concentration and structural bottlenecks.",
      path: "/infrastructure",
      stat: "200 MMT",
      statLabel: "Mundra Port FY25",
    },
    {
      id: 'energy',
      title: "Energy Grid & Power Supply",
      icon: <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />,
      desc: "Evaluating imported fuel reliance and central grid stability.",
      path: "/energy",
      stat: "8,620 MW",
      statLabel: "Imported Coal Plants",
    },
    {
      id: 'materials',
      title: "Industrial Raw Materials",
      icon: <Factory className="w-8 h-8 text-gray-600 dark:text-gray-400" />,
      desc: "Tracking the true origins of manufacturing base ingredients.",
      path: "/materials",
      stat: "~85%",
      statLabel: "Crude Oil Imported",
    },
    {
      id: 'water',
      title: "Water Security",
      icon: <Droplets className="w-8 h-8 text-teal-600 dark:text-teal-500" />,
      desc: "Evaluating the vulnerability of the Sardar Sarovar single point of failure.",
      path: "/water",
      stat: "95%",
      statLabel: "Aquifer Withdrawal Rate",
    },
    {
      id: 'labor',
      title: "Migrant Labor Ecosystem",
      icon: <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      desc: "Understanding the migrant workforce fueling mega-industries.",
      path: "/labor",
      stat: "70%",
      statLabel: "Morbi Outsider Workforce",
    },
    {
      id: 'economics',
      title: "Governance & Fiscal",
      icon: <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-500" />,
      desc: "The impact of diaspora remittances and central subsidization.",
      path: "/economics",
      stat: "18.2%",
      statLabel: "Debt-to-GSDP (Lowest)",
    }
  ]

  const headlines = [
    { value: "70+", label: "Cited Sources" },
    { value: "6", label: "Pillars of Analysis" },
    { value: "40%", label: "India's Cargo via Gujarat" },
    { value: "$136B", label: "NRI Remittances FY25" },
  ]

  return (
    <main className="w-full max-w-6xl mx-auto px-6 pt-40 pb-32 space-y-28">
      {/* Hero Section */}
      <section className="text-center space-y-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-crimson/10 dark:bg-white/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-crimson/10 dark:bg-crimson/20 text-crimson text-sm font-semibold tracking-widest uppercase mb-8">
            <AlertTriangle className="w-4 h-4" />
            Critical Research Endeavor
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight tracking-tight text-gray-900 dark:text-white">
            Anatomy of a <br/><span className="text-crimson italic pr-4">Dependent State</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-8 font-light leading-relaxed">
            A critical analysis of the structural vulnerabilities, systemic dependencies, and external supply chains underpinning the state of Gujarat.
          </p>
        </motion.div>
      </section>

      {/* Headline Stats Bar */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {headlines.map((h, i) => (
          <div key={i} className="text-center p-6 rounded-2xl bg-white/60 dark:bg-dark-surface/40 border border-gray-200 dark:border-dark-border backdrop-blur-sm">
            <div className="text-3xl md:text-4xl font-bold text-crimson mb-2">{h.value}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold">{h.label}</div>
          </div>
        ))}
      </motion.section>

      <hr className="border-gray-300 dark:border-dark-border w-1/2 mx-auto" />

      {/* Abstract / Thesis */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-crimson/10 dark:bg-crimson/20 rounded-xl">
            <BookOpen className="w-6 h-6 text-crimson" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">The Thesis</h2>
        </div>
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-crimson pl-8">
          <p>
            Gujarat is widely celebrated as India's most industrialized and business-friendly state. This project does not dispute that economic output. Instead, it asks a different question: <strong className="text-gray-900 dark:text-white">how much of this output is structurally dependent on external inputs that Gujarat does not control?</strong>
          </p>
          <p>
            From imported Indonesian coal powering its coastal mega-plants, to Chinese APIs sustaining its pharma sector, to migrant workers from Bihar and Odisha running its factories, to a single dam supplying water to 3 crore people — the state's economic engine is built on supply chains that originate far beyond its borders.
          </p>
          <p>
            This is not a weakness inherent to Gujarat alone. But the concentration of these dependencies — and the catastrophic consequences when any single line is severed (as COVID-19 and the 2026 West Asia crisis demonstrated) — demands rigorous, source-cited analysis. That is what this project provides.
          </p>
        </div>
      </motion.section>

      <hr className="border-gray-300 dark:border-dark-border w-1/2 mx-auto" />

      {/* Directory Grid */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Six Pillars of Analysis</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Select a sector to explore the fully detailed research findings, quantitative dependencies, and bottlenecks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={sector.path} className="group block h-full">
                <div className="h-full p-8 rounded-3xl border border-gray-200 dark:border-dark-border bg-white/60 dark:bg-dark-surface/60 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-crimson/30 dark:hover:border-crimson/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-crimson/20 group-hover:bg-crimson transition-colors" />
                  <div className="mb-6 p-4 bg-gray-100 dark:bg-dark-bg inline-block rounded-2xl">
                    {sector.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900 dark:text-white group-hover:text-crimson transition-colors">{sector.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{sector.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-crimson font-semibold">
                      Read Analysis <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900 dark:text-white">{sector.stat}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">{sector.statLabel}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="border-gray-300 dark:border-dark-border w-1/2 mx-auto" />

      {/* Key Findings Strip */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-10 text-center">Critical Findings at a Glance</h2>
        <div className="space-y-6">
          {[
            { pillar: "Infrastructure", finding: "Mundra Port handled 200 MMT in FY25 — yet 3 packages (87 km) of the Delhi-Mumbai Expressway in Gujarat sit at 5-42% completion, delayed to 2027-28.", color: "border-blue-500" },
            { pillar: "Energy", finding: "Gujarat's LNG terminals account for 60% of India's import capacity. 69% of LNG imports transit the Strait of Hormuz — a single chokepoint.", color: "border-yellow-500" },
            { pillar: "Water", finding: "The North Gujarat aquifer is pumped at 95% of its 6.88 km\u00b3 annual recharge. 75% of the Narmada command area is drought-prone.", color: "border-teal-500" },
            { pillar: "Labor", finding: "70% of Morbi's ceramic workforce is migrant. During COVID, 2/3 of Surat's diamond workers fled. In 2026, 400+ factories shut due to the gas crisis.", color: "border-purple-500" },
            { pillar: "Fiscal", finding: "Own Tax Revenue declined from 7.44% to 5.6% of GSDP in a decade. Revenue receipts are 8.7% of GSDP vs. median state at 19.9%.", color: "border-green-500" },
            { pillar: "Materials", finding: "India imports ~85% of crude oil. 65-70% of pharma APIs come from China. Paracetamol: 91% Chinese. Streptomycin: 100% Chinese.", color: "border-gray-500" },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`flex gap-6 items-start p-6 rounded-2xl bg-white/40 dark:bg-dark-surface/30 border-l-4 ${f.color}`}
            >
              <div className="min-w-[100px] text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pt-1">{f.pillar}</div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{f.finding}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Methodology Note */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="p-8 rounded-3xl bg-gray-100/60 dark:bg-dark-surface/40 border border-gray-200 dark:border-dark-border">
          <ExternalLink className="w-6 h-6 text-crimson mx-auto mb-4" />
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-3">Methodology & Sources</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Every data point in this analysis is backed by verifiable sources — government reports (NITI Aayog, CEA, Finance Commission), news organizations (Business Standard, The Print, Economic Times), and academic research. Each pillar page includes a full <strong className="text-gray-900 dark:text-white">Sources & References</strong> section with 10-14 cited URLs.
          </p>
        </div>
      </motion.section>
    </main>
  )
}
