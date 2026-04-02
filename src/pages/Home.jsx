import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Factory, Droplets, Users, TrendingUp, Ship, ArrowRight, AlertTriangle, ExternalLink, GraduationCap, TreePine, FileText } from 'lucide-react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts'
import { useSyncExternalStore } from 'react'
import { SupplyChainMap } from '../components/SupplyChainMap'

function subscribeDarkMode(callback) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}
function getIsDark() {
  return document.documentElement.classList.contains('dark')
}

export default function Home() {
  const isDark = useSyncExternalStore(subscribeDarkMode, getIsDark)

  const sectors = [
    { id: 'infrastructure', title: "Infrastructure & Logistics", icon: <Ship className="w-8 h-8 text-blue-600 dark:text-blue-400" />, desc: "An analysis of maritime gateway concentration and structural bottlenecks.", path: "/infrastructure", stat: "200 MMT", statLabel: "Mundra Port FY25" },
    { id: 'energy', title: "Energy Grid & Power Supply", icon: <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />, desc: "Evaluating imported fuel reliance and central grid stability.", path: "/energy", stat: "8,620 MW", statLabel: "Imported Coal Plants" },
    { id: 'materials', title: "Industrial Raw Materials", icon: <Factory className="w-8 h-8 text-gray-600 dark:text-gray-400" />, desc: "Tracking the true origins of manufacturing base ingredients.", path: "/materials", stat: "~85%", statLabel: "Crude Oil Imported" },
    { id: 'water', title: "Water Security", icon: <Droplets className="w-8 h-8 text-teal-600 dark:text-teal-500" />, desc: "Evaluating the vulnerability of the Sardar Sarovar single point of failure.", path: "/water", stat: "95%", statLabel: "Aquifer Withdrawal Rate" },
    { id: 'labor', title: "Migrant Labor Ecosystem", icon: <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />, desc: "Understanding the migrant workforce fueling mega-industries.", path: "/labor", stat: "70%", statLabel: "Morbi Outsider Workforce" },
    { id: 'economics', title: "Governance & Fiscal", icon: <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-500" />, desc: "The impact of diaspora remittances and central subsidization.", path: "/economics", stat: "18.2%", statLabel: "Debt-to-GSDP (Lowest)" },
    { id: 'education', title: "Education & Healthcare", icon: <GraduationCap className="w-8 h-8 text-pink-600 dark:text-pink-400" />, desc: "Brain drain, medical tourism dependency, and rural healthcare gaps.", path: "/education", stat: "97%", statLabel: "Specialist Vacancy" },
    { id: 'environment', title: "Environment & Climate", icon: <TreePine className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />, desc: "Industrial pollution hotspots, coastal erosion, and climate vulnerability.", path: "/environment", stat: "6", statLabel: "CPCB Critical Areas" },
  ]

  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']

  const headlines = [
    { value: "100+", label: "Cited Sources" },
    { value: "8", label: "Pillars of Analysis" },
    { value: "40%", label: "India's Cargo via Gujarat" },
    { value: "$136B", label: "NRI Remittances FY25" },
  ]

  const dependencyData = [
    { pillar: 'Infrastructure', dependency: 85 },
    { pillar: 'Energy', dependency: 78 },
    { pillar: 'Water', dependency: 90 },
    { pillar: 'Labor', dependency: 70 },
    { pillar: 'Fiscal', dependency: 55 },
    { pillar: 'Materials', dependency: 85 },
    { pillar: 'Education', dependency: 72 },
    { pillar: 'Environment', dependency: 80 },
  ]

  const findings = [
    { pillar: "Infrastructure", finding: "Mundra Port handled 200 MMT in FY25 — yet 3 packages of the Delhi-Mumbai Expressway in Gujarat sit at 5-42% completion, delayed to 2027-28.", metric: "200 MMT / 5% complete" },
    { pillar: "Energy", finding: "Gujarat's LNG terminals account for 60% of India's import capacity. 69% of LNG imports transit the Strait of Hormuz — a single chokepoint.", metric: "69% Hormuz exposure" },
    { pillar: "Water", finding: "The North Gujarat aquifer is pumped at 95% of its 6.88 km³ annual recharge. 75% of the Narmada command area is drought-prone.", metric: "95% aquifer withdrawal" },
    { pillar: "Labor", finding: "70% of Morbi's ceramic workforce is migrant. During COVID, 2/3 of Surat's diamond workers fled. In 2026, 400+ factories shut due to gas crisis.", metric: "70% migrant workforce" },
    { pillar: "Fiscal", finding: "Own Tax Revenue declined from 7.44% to 5.6% of GSDP in a decade. Revenue receipts are 8.7% of GSDP vs. median state at 19.9%.", metric: "5.6% OTR/GSDP" },
    { pillar: "Materials", finding: "India imports ~85% of crude oil. 65-70% of pharma APIs come from China. Paracetamol: 91% Chinese. Streptomycin: 100% Chinese.", metric: "85% imported crude" },
    { pillar: "Education", finding: "32,000+ teaching posts vacant. GER at 20.1% vs national 28.4%. Only 1 Gujarat institute in NIRF top 100. 97% specialist doctor vacancies at rural CHCs.", metric: "97% specialist vacancy" },
    { pillar: "Environment", finding: "6 CPCB critically polluted clusters. Vapi CEPI 90.75 (India's highest). 27.6% of coastline eroding. Per capita CO2 emissions 91% above national average.", metric: "90.75 CEPI score" },
  ]

  return (
    <main className="w-full max-w-6xl mx-auto px-6 pt-40 pb-32 space-y-28">

      {/* ═══════════════════ HERO ═══════════════════ */}
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

          {/* Author / Publication Header */}
          <div className="flex items-center justify-center gap-3 text-sm tracking-widest uppercase text-gray-500 dark:text-gray-500 font-sans font-semibold mt-6">
            <span>Project Alphono 34</span>
            <span className="w-px h-4 bg-gray-400 dark:bg-gray-600" />
            <span>Research Division</span>
            <span className="w-px h-4 bg-gray-400 dark:bg-gray-600" />
            <span>April 2026</span>
          </div>
          <hr className="border-gray-300 dark:border-dark-border w-24 mx-auto mt-6" />

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-8 font-light leading-relaxed">
            A critical analysis of the structural vulnerabilities, systemic dependencies, and external supply chains underpinning the state of Gujarat.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════ EPIGRAPH ═══════════════════ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <blockquote className="font-serif italic text-2xl md:text-3xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto text-center border-t border-b border-gray-300 dark:border-dark-border py-10 leading-relaxed">
          "The prosperity of a state measured only by its throughput — while blind to its input origins — is an accounting illusion, not economic strength."
          <footer className="mt-6 text-sm not-italic tracking-widest uppercase text-gray-400 dark:text-gray-500 font-sans font-semibold">
            — Premise of this Research
          </footer>
        </blockquote>
      </motion.section>

      {/* ═══════════════════ HEADLINE STATS BAR ═══════════════════ */}
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

      {/* ═══════════════════ I. ABSTRACT ═══════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="border-2 border-gray-300 dark:border-dark-border p-10 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-crimson text-lg font-sans font-bold">I.</span>
            <h2 className="text-sm uppercase tracking-[0.25em] text-crimson font-semibold font-sans">Abstract</h2>
          </div>
          <div className="space-y-5 text-lg italic font-serif text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Gujarat is widely celebrated as India's most industrialized and business-friendly state. This project does not dispute that economic output. Instead, it asks a different question: <strong className="text-gray-900 dark:text-white not-italic">how much of this output is structurally dependent on external inputs that Gujarat does not control?</strong>
            </p>
            <p>
              From imported Indonesian coal powering its coastal mega-plants, to Chinese APIs sustaining its pharma sector, to migrant workers from Bihar and Odisha running its factories, to a single dam supplying water to 3 crore people — the state's economic engine is built on supply chains that originate far beyond its borders.
            </p>
            <p>
              This is not a weakness inherent to Gujarat alone. But the concentration of these dependencies — and the catastrophic consequences when any single line is severed (as COVID-19 and the 2026 West Asia crisis demonstrated) — demands rigorous, source-cited analysis. That is what this project provides.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════ II. TABLE OF CONTENTS ═══════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-10">
          <span className="text-crimson text-lg font-sans font-bold">II.</span>
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">Table of Contents</h2>
        </div>
        <Link to="/summary" className="group block mb-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-crimson/5 dark:bg-crimson/10 border border-crimson/20 hover:border-crimson/40 transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-crimson" />
              <span className="font-serif text-lg font-bold text-crimson">Executive Summary</span>
            </div>
            <ArrowRight className="w-4 h-4 text-crimson group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
        <div className="space-y-0">
          {sectors.map((sector, i) => (
            <Link key={sector.id} to={sector.path} className="group block">
              <div className="flex items-baseline justify-between border-b border-dotted border-gray-300 dark:border-dark-border py-4 hover:border-crimson transition-colors">
                <div className="flex items-baseline gap-4">
                  <span className="text-crimson font-bold font-sans text-sm min-w-[2rem]">{romanNumerals[i]}.</span>
                  <span className="font-serif text-lg text-gray-900 dark:text-white group-hover:text-crimson transition-colors">{sector.title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 dark:text-gray-500 font-semibold">{sector.stat}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-crimson group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      <hr className="border-gray-300 dark:border-dark-border w-1/2 mx-auto" />

      {/* ═══════════════════ III. DEPENDENCY INDEX (RADAR CHART) ═══════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-10 justify-center">
          <span className="text-crimson text-lg font-sans font-bold">III.</span>
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">Dependency Index</h2>
        </div>
        <div className="bg-white/60 dark:bg-dark-surface/40 border border-gray-200 dark:border-dark-border rounded-2xl p-8 backdrop-blur-sm">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={dependencyData} cx="50%" cy="50%" outerRadius="75%">
              <PolarGrid stroke={isDark ? '#333' : '#d1d5db'} />
              <PolarAngleAxis
                dataKey="pillar"
                tick={{ fill: isDark ? '#9CA3AF' : '#4B5563', fontSize: 13, fontFamily: 'Inter' }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: isDark ? '#6B7280' : '#9CA3AF', fontSize: 11 }}
              />
              <Radar
                name="Dependency %"
                dataKey="dependency"
                stroke="#D32F2F"
                fill="#D32F2F"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1E1E1E' : '#fff',
                  border: `1px solid ${isDark ? '#333' : '#e5e7eb'}`,
                  borderRadius: '12px',
                  fontFamily: 'Inter',
                  fontSize: '13px',
                }}
                formatter={(value) => [`${value}%`, 'External Dependency']}
              />
            </RadarChart>
          </ResponsiveContainer>
          <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-4 italic font-serif">
            Figure 1: Estimated external dependency index across six structural pillars (higher = more dependent on external inputs)
          </p>
        </div>
      </motion.section>

      {/* ═══════════════════ SUPPLY CHAIN MAP ═══════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white/60 dark:bg-dark-surface/40 border border-gray-200 dark:border-dark-border rounded-2xl p-8 backdrop-blur-sm">
          <SupplyChainMap />
        </div>
      </motion.section>

      <hr className="border-gray-300 dark:border-dark-border w-1/2 mx-auto" />

      {/* ═══════════════════ IV. EIGHT PILLARS ═══════════════════ */}
      <section>
        <div className="text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="text-crimson text-lg font-sans font-bold">IV.</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">Eight Pillars of Analysis</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Select a sector to explore the fully detailed research findings, quantitative dependencies, and bottlenecks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* ═══════════════════ V. FINDINGS TABLE ═══════════════════ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-10 justify-center">
          <span className="text-crimson text-lg font-sans font-bold">V.</span>
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">Critical Findings at a Glance</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-dark-border bg-white/60 dark:bg-dark-surface/40 backdrop-blur-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-crimson">
                <th className="text-left py-4 px-6 text-xs uppercase tracking-widest text-crimson font-semibold font-sans w-[120px]">Pillar</th>
                <th className="text-left py-4 px-6 text-xs uppercase tracking-widest text-crimson font-semibold font-sans">Key Finding</th>
                <th className="text-left py-4 px-6 text-xs uppercase tracking-widest text-crimson font-semibold font-sans w-[180px]">Key Metric</th>
              </tr>
            </thead>
            <tbody>
              {findings.map((f, i) => (
                <tr key={i} className="border-b border-gray-200 dark:border-dark-border hover:bg-white/80 dark:hover:bg-dark-surface/60 transition-colors">
                  <td className="py-4 px-6 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider align-top">{f.pillar}</td>
                  <td className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{f.finding}</td>
                  <td className="py-4 px-6 text-sm font-bold text-crimson whitespace-nowrap align-top">{f.metric}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* ═══════════════════ VI. METHODOLOGY ═══════════════════ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="p-8 rounded-3xl bg-gray-100/60 dark:bg-dark-surface/40 border border-gray-200 dark:border-dark-border">
          <ExternalLink className="w-6 h-6 text-crimson mx-auto mb-4" />
          <div className="flex items-center gap-3 justify-center mb-3">
            <span className="text-crimson text-lg font-sans font-bold">VI.</span>
            <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white">Methodology & Sources</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Every data point in this analysis is backed by verifiable sources — government reports (NITI Aayog, CEA, Finance Commission), news organizations (Business Standard, The Print, Economic Times), and academic research. Each pillar page includes a full <strong className="text-gray-900 dark:text-white">Sources & References</strong> section with 10-14 cited URLs.
          </p>
        </div>
      </motion.section>
    </main>
  )
}
