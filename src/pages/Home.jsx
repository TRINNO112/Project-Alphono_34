import { useState, Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Factory, Droplets, Users, TrendingUp, Ship, ArrowRight, AlertTriangle, ExternalLink, GraduationCap, TreePine, FileText, ShieldAlert, ChevronDown, MapPin, Wheat, Cpu, FlaskConical } from 'lucide-react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts'
import { useSyncExternalStore } from 'react'
import { SupplyChainMap } from '../components/SupplyChainMap'
import { CascadeDiagram } from '../components/CascadeDiagram'
import AnimatedCounter from '../components/AnimatedCounter'

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
    { id: 'infrastructure', title: "Infrastructure & Logistics", icon: <Ship className="w-8 h-8 text-blue-600 dark:text-blue-400" />, desc: "Maritime gateway monopoly, bridge collapses, and zero digital connectivity.", path: "/infrastructure", stat: "500.8 MMT", statLabel: "APSEZ FY26 Cargo", sources: 18 },
    { id: 'energy', title: "Energy Grid & Power Supply", icon: <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />, desc: "Imported coal lock-in, 550 Morbi units shut, and grid collapse events.", path: "/energy", stat: "550+", statLabel: "Morbi Units Shut (2026)", sources: 18 },
    { id: 'materials', title: "Industrial Raw Materials", icon: <Factory className="w-8 h-8 text-gray-600 dark:text-gray-400" />, desc: "Russia now #1 crude supplier, 65-70% Chinese APIs, 100% potash import.", path: "/materials", stat: "36%", statLabel: "Crude from Russia", sources: 17 },
    { id: 'water', title: "Water Security", icon: <Droplets className="w-8 h-8 text-teal-600 dark:text-teal-500" />, desc: "Narmada single point of failure, fluoride at 17.5 mg/L, industry vs farms.", path: "/water", stat: "132%", statLabel: "Mehsana Extraction Rate", sources: 14 },
    { id: 'labor', title: "Migrant Labor Ecosystem", icon: <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />, desc: "5-6 lakh workers fled in 2026, US tariffs crush diamonds, Rs 100 Cr/day losses.", path: "/labor", stat: "5-6L", statLabel: "Workers Fled (2026)", sources: 17 },
    { id: 'economics', title: "Governance & Fiscal", icon: <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-500" />, desc: "CAG flags overstated surplus, OTR at 4.9%, GIFT City 20-year tax holiday.", path: "/economics", stat: "15.3%", statLabel: "Debt-to-GSDP (FY25)", sources: 20 },
    { id: 'education', title: "Education & Healthcare", icon: <GraduationCap className="w-8 h-8 text-pink-600 dark:text-pink-400" />, desc: "2.4 lakh dropouts (#1 in India), primary GER collapsed to 79.6%.", path: "/education", stat: "2.4L", statLabel: "Annual Dropouts (#1)", sources: 14 },
    { id: 'environment', title: "Environment & Climate", icon: <TreePine className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />, desc: "Sabarmati 'cesspool' ruling, Deesa 21 dead, 36 sq km mangrove loss.", path: "/environment", stat: "21", statLabel: "Deesa Explosion Deaths", sources: 14 },
    { id: 'migrant-discrimination', title: "Migrant Discrimination", icon: <ShieldAlert className="w-8 h-8 text-red-600 dark:text-red-500" />, desc: "2018 pogrom: 20,000+ fled. Language barriers, wage theft, bonded labour, zero welfare.", path: "/migrant-discrimination", stat: "20K+", statLabel: "Workers Attacked (2018)", sources: 33 },
    { id: 'agriculture', title: "Agriculture & Agrarian Distress", icon: <Wheat className="w-8 h-8 text-green-700 dark:text-green-400" />, desc: "67% DAP imported, 100% MOP imported, Bt Cotton trap, groundwater at 132% over-extraction.", path: "/agriculture", stat: "100%", statLabel: "MOP Import Dependency", sources: 6 },
    { id: 'greentech', title: "Green Tech Dependency", icon: <Cpu className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />, desc: "90% rare earth processing by China, 80%+ PV wafers imported, Dholera SIR mirage.", path: "/greentech", stat: "90%", statLabel: "China RE Processing", sources: 7 },
    { id: 'chemical-governance', title: "Chemical Governance & Toxicity", icon: <FlaskConical className="w-8 h-8 text-orange-600 dark:text-orange-400" />, desc: "400km Golden Corridor, Sabarmati BOD 292 mg/L, CETP failures, ₹100Cr+ NGT fines.", path: "/chemical-governance", stat: "292", statLabel: "BOD (mg/L) Sabarmati", sources: 8 },
  ]

  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

  const headlines = [
    { value: 186, suffix: '', prefix: '', label: "Cited Sources" },
    { value: 12, suffix: '', prefix: '', label: "Pillars of Analysis" },
    { value: 40, suffix: '%', prefix: '', label: "India's Cargo via Gujarat" },
    { value: 40, suffix: 'B+', prefix: '$', label: "Gujarat NRI Deposits" },
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
    { pillar: 'Agriculture', dependency: 88 },
    { pillar: 'Green Tech', dependency: 92 },
    { pillar: 'Chemical', dependency: 75 },
  ]

  const [expandedRows, setExpandedRows] = useState({})
  const toggleRow = (i) => setExpandedRows(prev => ({ ...prev, [i]: !prev[i] }))

  const findings = [
    { pillar: "Infrastructure", finding: "APSEZ crossed 500.8 MMT (FY26), controlling 28% of India's port volumes. Gambhira Bridge collapse killed 22. Zero submarine cable landing stations despite 1,600 km coastline.", metric: "500.8 MMT / 0 cables", citations: [
      { text: "Adani's Mundra Port Makes History — First in India to Handle 200 MMT", url: "https://www.marineinsight.com/shipping-news/adanis-mundra-port-makes-history-becomes-first-in-india-to-handle-200-mmt-cargo/" },
      { text: "Delhi-Mumbai Expressway Package-Wise Update on Gujarat Section", url: "https://deshgujarat.com/2026/01/26/delhi-mumbai-expressway-latest-package-wise-update-on-gujarat-section/" },
      { text: "India's Undersea Cable Vulnerability in War Zones", url: "https://www.businessworld.in/article/india-cheap-internet-undersea-cable-vulnerability-war-zones-2026-598929" },
    ]},
    { pillar: "Energy", finding: "550+ Morbi units shut in 2026 gas crisis. Tata Mundra UMPP offline for 9 months. South Gujarat grid collapsed — 4,000 MW dropped in 90 minutes. Khavda 9.4 GW but evacuation only 60% complete.", metric: "550+ units / 9-month shutdown", citations: [
      { text: "Mundra Thermal Power Project — Global Energy Monitor", url: "https://www.gem.wiki/Mundra_Thermal_Power_Project_(Adani)" },
      { text: "West Asia Tensions Threaten LNG Flows as Hormuz Risk Intensifies", url: "https://www.businesstoday.in/latest/economy/story/west-asia-tensions-threaten-lng-flows-to-india-as-hormuz-chokepoint-risk-intensifies-whats-at-stake-519504-2026-03-06" },
      { text: "Gujarat Emerges as India's Largest Renewable Energy Contributor", url: "https://www.angelone.in/news/economy/gujarat-emerges-as-india-s-largest-renewable-energy-contributor-with-42-583-gw-capacity" },
    ]},
    { pillar: "Water", finding: "Mehsana aquifer at 132% extraction. Fluoride at 17.5 mg/L (11x WHO limit). SSNNL earns Rs 545 Cr from industry vs Rs 11.72 Cr from agriculture. SAUNI at Rs 18,563 Cr (69% cost overrun).", metric: "132% extraction / 17.5 mg/L F", citations: [
      { text: "Sardar Sarovar Dam — Wikipedia", url: "https://en.wikipedia.org/wiki/Sardar_Sarovar_Dam" },
      { text: "Groundwater 2025: Depletion and Contamination Rising", url: "https://sandrp.in/2026/03/25/groundwater-2025-depletion-and-contamination-rising/" },
      { text: "Drought-Hit Gujarat Has Water for Factories, Not for Farmers", url: "https://www.indiaspend.com/drought-hit-gujarat-has-water-for-factories-but-not-for-farmers" },
    ]},
    { pillar: "Labor", finding: "5-6 lakh migrant workers fled in 2026 twin shocks (gas crisis + US tariffs). 1.5 lakh diamond jobs lost. Surat powerloom losses Rs 100 Cr/day. Bharuch: 130 worker deaths (2018-25).", metric: "5-6L fled / 1.5L jobs lost", citations: [
      { text: "A War in the Gulf, a Crisis in Gujarat's Morbi — The Print", url: "https://theprint.in/economy/a-war-in-the-gulf-a-crisis-in-gujarats-morbi-indias-ceramics-capital-counts-the-cost/2877673/" },
      { text: "Over 400 Ceramic Units Shut Due to Gas Crisis", url: "https://deshgujarat.com/2026/03/18/over-400-ceramic-units-in-morbi-shut-due-to-gas-crisis-amid-west-asia-war/" },
      { text: "71 Suicides Among Surat's Diamond Workers in 18 Months", url: "https://theprint.in/india/job-losses-factory-closures-pushing-surats-diamond-workers-to-the-edge-71-suicides-in-18-months/2339805/" },
    ]},
    { pillar: "Fiscal", finding: "CAG flags Rs 11,929 Cr overstated surplus. OTR declining to 4.9% of GSDP. Central grants crashed to 0.53%. GIFT City tax holiday doubled to 20 years. FDI dropped from top 3.", metric: "4.9% OTR / 0.53% grants", citations: [
      { text: "NITI Aayog Macro Fiscal Landscape — Gujarat Summary", url: "https://www.niti.gov.in/sites/default/files/2025-03/Summary-Report-Gujarat.pdf" },
      { text: "CAG Flags Gujarat's Fiscal Paradox: Growth Amid Declining Revenues", url: "https://deshgujarat.com/2026/03/26/cag-flags-gujarats-fiscal-paradox-10-15-growth-amid-declining-revenues-overstated-surplus/" },
      { text: "Central Grants to Gujarat Fall to 0.53% of GSDP", url: "https://english.gujaratsamachar.com/news/gujarat/central-grants-to-gujarat-fall-to-0-53-of-gsdp-in-202425-down-13-000-cr-in-4-years-cag-11584368371.html" },
    ]},
    { pillar: "Materials", finding: "Russia now #1 crude supplier at 36%. Nayara (Rosneft) faces EU sanctions risk. API imports hit $3.6B. 100% potash imported. 93% rare earth magnets from China.", metric: "36% Russia / $3.6B APIs", citations: [
      { text: "Jamnagar Refinery — Wikipedia", url: "https://en.wikipedia.org/wiki/Jamnagar_refinery" },
      { text: "Reliance Resumes Russian Oil Imports for Jamnagar — Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-12-24/reliance-resumes-russian-oil-imports-to-feed-jamnagar-refinery" },
      { text: "How Rare Earth Shortages Stall India's EV Sector — Al Jazeera", url: "https://www.aljazeera.com/economy/2025/8/28/how-rare-earth-shortages-are-stalling-indias-burgeoning-ev-sector" },
    ]},
    { pillar: "Education", finding: "2.4 lakh annual dropouts (#1 in India). Primary GER collapsed to 79.6%. 1,027 schools closed. PARAKH scores below national average. 97% specialist doctor vacancies at rural CHCs.", metric: "2.4L dropouts / 79.6% GER", citations: [
      { text: "Teacher Shortage: 32,000+ Vacancies in Gujarat Schools", url: "https://www.prokerala.com/news/articles/a1560997.html" },
      { text: "Gujarat Slips in NIRF 2025 Rankings", url: "https://english.gujaratsamachar.com/news/gujarat/gujarat-slips-in-nirf-2025-rankings-iit-gn-only-institute-in-overall-top-100" },
      { text: "Over 90% Specialist Doctor Posts Vacant in Rural Gujarat", url: "https://www.dnaindia.com/ahmedabad/report-over-90-specialist-doctor-posts-vacant-in-rural-gujarat-2774771" },
    ]},
    { pillar: "Environment", finding: "Gujarat HC calls Sabarmati a 'cesspool'. Deesa explosion killed 21. 36.39 sq km mangrove loss. Alang volume down 75%. Ahmedabad is a CPCB non-attainment city.", metric: "21 dead / 36 sq km lost", citations: [
      { text: "Vapi Among World's Most Polluted Places — TIME", url: "https://content.time.com/time/specials/2007/article/0,28804,1661031_1661028_1661019,00.html" },
      { text: "74% of Gujarat Rivers Severely Polluted — Down to Earth", url: "https://www.downtoearth.org.in/news/water/despite-efforts-clean-water-is-scarce-in-india-s-industrial-gujarat-state-57603" },
      { text: "Alang Ship-Breaking: A Dangerous Environmental Time Bomb", url: "https://www.marineinsight.com/environment/alang-gujarat-the-world%E2%80%99s-biggest-ship-breaking-yard-a-dangerous-environmental-time-bomb/" },
    ]},
    { pillar: "Migrant Rights", finding: "2018: 20,000+ workers fled after anti-migrant violence across 6+ districts. 2020: workers walked 1,000+ km home. 92.65% without ESI. 38 silicosis deaths in 2024-25. Wages closer to Bihar than Kerala.", metric: "20K+ fled / 38 silicosis deaths", citations: [
      { text: "Attacks on Migrant Workers: 500 Rounded Up, 20,000 Flee — Scroll.in", url: "https://scroll.in/article/897402/attacks-on-migrant-workers-in-gujarat-over-500-rounded-up-20000-flee-state" },
      { text: "Gujarat Migrant Attacks: How Social Media Fuelled Hate — NDTV", url: "https://www.ndtv.com/india-news/gujarat-migrant-worker-attacks-how-social-media-fuelled-anti-outsider-hate-1929893" },
      { text: "2018 Gujarat Attacks on Migrant Workers — Wikipedia", url: "https://en.wikipedia.org/wiki/2018_Gujarat_attacks_on_migrant_workers" },
    ]},
    { pillar: "Agriculture", finding: "67% DAP imported, 100% MOP imported from sanctioned nations. Bt Cotton pesticide treadmill. Groundwater at 132% over-extraction in Mehsana. Narmada water diverted to industry.", metric: "100% MOP / 132% extraction", citations: [
      { text: "India's Fertilizer Import Dependencies — Argus Media", url: "https://argusmedia.com/fertilizers/india-import-data" },
      { text: "Groundwater Depletion in Mehsana — Down To Earth", url: "https://downtoearth.org.in/water/narmada-diversion" },
      { text: "Drought-Hit Gujarat Has Water for Factories, Not Farmers — IndiaSpend", url: "https://indiaspend.com/gujarat-water-crisis" },
    ]},
    { pillar: "Green Tech", finding: "90% rare earth processing controlled by China. 80%+ PV wafers imported. Dholera gigafactories assemble imported cells. Gallium/Germanium export controls weaponized.", metric: "90% China / 80%+ wafers", citations: [
      { text: "China's Export Controls on Rare Earths — SCMP", url: "https://scmp.com/economy/china-economy" },
      { text: "How Rare Earth Shortages Stall India's EV Sector — Al Jazeera", url: "https://aljazeera.com/economy/india-ev-rare-earths" },
      { text: "Global Rare Earth Processing Market Share — BNEF", url: "https://bnef.com/rare-earth-mining" },
    ]},
    { pillar: "Chem Gov", finding: "400km Golden Corridor: Sabarmati BOD 292 mg/L (97× safe). CETPs from 1990s discharge MORE toxic than influent. ₹100Cr+ NGT fines with zero lasting compliance. AMR superbugs incubating.", metric: "292 BOD / ₹100Cr+ fines", citations: [
      { text: "Sabarmati River: Dark Underbelly of Ahmedabad — Mongabay", url: "https://india.mongabay.com/sabarmati-pollution" },
      { text: "AMR in Gujarat's Rivers — India Water Portal", url: "https://indiawaterportal.org/amr-gujarat" },
      { text: "Vapi & Ankleshwar Crisis — Down To Earth", url: "https://downtoearth.org.in/pollution/vapi-ankleshwar" },
    ]},
  ]

  return (
    <main className="w-full max-w-6xl mx-auto px-6 pt-28 md:pt-40 pb-20 md:pb-32 space-y-20 md:space-y-28">

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
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight tracking-tight text-gray-900 dark:text-white">
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
            <div className="text-3xl md:text-4xl font-bold text-crimson mb-2">
              <AnimatedCounter value={h.value} suffix={h.suffix} prefix={h.prefix} />
            </div>
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
                itemStyle={{ color: isDark ? '#e5e7eb' : '#1f2937' }}
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

      {/* ═══════════════════ THE 2026 CASCADE ═══════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-10 justify-center">
          <span className="text-crimson text-lg font-sans font-bold">III-B.</span>
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">Crisis Propagation Map</h2>
        </div>
        <div className="bg-white/60 dark:bg-dark-surface/40 border border-gray-200 dark:border-dark-border rounded-2xl p-8 backdrop-blur-sm">
          <CascadeDiagram />
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-4 italic font-serif">
          Figure 2: How the March 2026 West Asia crisis cascaded across Gujarat's structural pillars — each arrow represents a documented dependency failure
        </p>
      </motion.section>

      <hr className="border-gray-300 dark:border-dark-border w-1/2 mx-auto" />

      {/* ═══════════════════ IV. NINE PILLARS ═══════════════════ */}
      <section>
        <div className="text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="text-crimson text-lg font-sans font-bold">IV.</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">Twelve Pillars of Analysis</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Select a sector to explore the fully detailed research findings, quantitative dependencies, and bottlenecks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              style={{ perspective: 800 }}
            >
              <Link to={sector.path} className="group block h-full">
                <div className="h-full flex items-stretch rounded-2xl border border-gray-200 dark:border-dark-border bg-white/60 dark:bg-dark-surface/60 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-crimson/30 dark:hover:border-crimson/30 transition-all duration-300 overflow-hidden">
                  {/* Left accent strip */}
                  <div className="w-1.5 shrink-0 bg-crimson/20 group-hover:bg-crimson transition-colors" />

                  {/* Content area */}
                  <div className="flex flex-1 items-center gap-5 p-5 min-w-0">
                    {/* Icon */}
                    <div className="shrink-0 p-3 bg-gray-100 dark:bg-dark-bg rounded-xl">
                      {sector.icon}
                    </div>

                    {/* Title + Description */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold text-crimson/60 tracking-widest font-sans uppercase">Pillar {romanNumerals[index]}</span>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-gray-900 dark:text-white group-hover:text-crimson transition-colors leading-snug mb-1">{sector.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{sector.desc}</p>
                      <span className="inline-flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-dark-bg text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-dark-border">
                        <FileText className="w-3 h-3" />
                        {sector.sources} sources
                      </span>
                    </div>

                    {/* Stat + Arrow */}
                    <div className="shrink-0 text-right pl-4 border-l border-gray-200 dark:border-dark-border flex flex-col items-end justify-center gap-2">
                      <div>
                        <div className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{sector.stat}</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-500 uppercase tracking-wider max-w-[110px] text-right leading-tight mt-0.5">{sector.statLabel}</div>
                      </div>
                      <div className="flex items-center text-xs text-crimson font-semibold">
                        Read <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
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
        className="hidden md:block"
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
                <th className="w-10 py-4 px-3"></th>
              </tr>
            </thead>
            <tbody>
              {findings.map((f, i) => (
                <Fragment key={i}>
                  <tr
                    onClick={() => toggleRow(i)}
                    className="border-b border-gray-200 dark:border-dark-border hover:bg-white/80 dark:hover:bg-dark-surface/60 transition-colors cursor-pointer select-none"
                  >
                    <td className="py-4 px-6 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider align-top">{f.pillar}</td>
                    <td className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{f.finding}</td>
                    <td className="py-4 px-6 text-sm font-bold text-crimson whitespace-nowrap align-top">{f.metric}</td>
                    <td className="py-4 px-3 align-top">
                      <motion.div animate={{ rotate: expandedRows[i] ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                      </motion.div>
                    </td>
                  </tr>
                  <AnimatePresence>
                    {expandedRows[i] && (
                      <tr>
                        <td colSpan={4} className="p-0">
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-4 bg-gray-50/80 dark:bg-dark-bg/60 border-b border-gray-200 dark:border-dark-border">
                              <p className="text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-semibold mb-3">Key Sources</p>
                              <div className="space-y-2">
                                {f.citations.map((c, j) => (
                                  <a
                                    key={j}
                                    href={c.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-crimson dark:hover:text-crimson transition-colors group"
                                  >
                                    <span className="text-crimson font-bold shrink-0">[{j + 1}]</span>
                                    <span className="group-hover:underline">{c.text}</span>
                                    <ExternalLink className="w-3 h-3 shrink-0 mt-1 opacity-50 group-hover:opacity-100" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </td>
                      </tr>
                    )}
                  </AnimatePresence>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Additional Explorations Section */}
      <section className="py-24 border-t border-gray-200 dark:border-dark-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">Explore the <span className="italic text-crimson">Database</span></h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              Dive deeper into the critical findings through specialized geographic mapping and chronological analysis of state-level events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/map" className="group p-10 rounded-3xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface hover:border-crimson dark:hover:border-crimson transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-crimson/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-crimson" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">Geographic District Database</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Interactive mapping of Gujarat's 33 districts. Explore localized vulnerability metrics, specific structural dependencies, and records of industrial incidents across the state.
              </p>
              <span className="flex items-center text-crimson font-bold uppercase tracking-widest text-sm mt-auto">
                Explore Map <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            <Link to="/timeline" className="group p-10 rounded-3xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface hover:border-crimson dark:hover:border-crimson transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">The Compounding Crisis Timeline</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                A chronological mapping of systemic vulnerabilities, demonstrating the cascade of failures from the 2016 demonetization shocks through the 2026 twin-crisis.
              </p>
              <span className="flex items-center text-orange-600 font-bold uppercase tracking-widest text-sm mt-auto">
                View Timeline <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

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
