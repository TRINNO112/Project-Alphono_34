import { useState, useSyncExternalStore } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Ship, Zap, Droplets, Users, TrendingUp, Factory, GraduationCap, TreePine, ArrowRight, FileText, ShieldAlert, AlertTriangle } from 'lucide-react'
import { Section, DataCard, StatBox } from '../components/Shared'
import { CascadeDiagram } from '../components/CascadeDiagram'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts'

function subscribeDarkMode(callback) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}
function getIsDark() {
  return document.documentElement.classList.contains('dark')
}

const pillars = [
  {
    num: 'I',
    icon: <Ship className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: 'Infrastructure & Logistics',
    path: '/infrastructure',
    summary: 'Gujarat handles nearly 40% of India\'s cargo volume through its ports, but this capacity is concentrated under a single corporate entity — Adani Ports (APSEZ). Mundra Port alone crossed 200 MMT in FY25, while critical road infrastructure like the Delhi-Mumbai Expressway remains severely delayed, with Package 8 at just 5% completion.',
    stats: [
      { value: '200 MMT', label: 'Mundra FY25 Cargo', color: 'blue' },
      { value: '5%', label: 'Expressway Pkg 8', color: 'red' },
      { value: '40%', label: 'India Cargo Share', color: 'crimson' },
    ]
  },
  {
    num: 'II',
    icon: <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />,
    title: 'Energy Grid & Power Supply',
    path: '/energy',
    summary: 'Despite leading India with 42.5 GW of installed renewable capacity, Gujarat\'s industrial baseload remains chained to imported fossil fuels. Two Mundra mega-plants (8,620 MW combined) run entirely on Indonesian coal. Gujarat\'s LNG terminals handle 60% of India\'s import capacity, with 69% of LNG transiting the Strait of Hormuz.',
    stats: [
      { value: '8,620 MW', label: 'Imported Coal Plants', color: 'crimson' },
      { value: '69%', label: 'Hormuz LNG Exposure', color: 'red' },
      { value: '22%', label: 'Actual RE Generation', color: 'green' },
    ]
  },
  {
    num: 'III',
    icon: <Droplets className="w-8 h-8 text-teal-600 dark:text-teal-500" />,
    title: 'Water Security',
    path: '/water',
    summary: 'The Sardar Sarovar Dam is a single point of failure supplying water to 3 crore people and irrigating 20.38 lakh hectares. Meanwhile, the North Gujarat aquifer is pumped at 95% of its annual recharge, with fluoride contamination at 17.5 mg/L (11x WHO limit) in Mehsana and Banaskantha.',
    stats: [
      { value: '3 Crore', label: 'SSP-Dependent Population', color: 'teal' },
      { value: '132%', label: 'Mehsana Extraction', color: 'red' },
      { value: '17.5 mg/L', label: 'Fluoride (11x WHO)', color: 'crimson' },
    ]
  },
  {
    num: 'IV',
    icon: <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: 'Migrant Labor Ecosystem',
    path: '/labor',
    summary: 'Three mass exodus events in six years (2016 demonetisation, 2020 COVID, 2026 West Asia crisis) each crippled manufacturing within days. 5-6 lakh workers fled in 2026 alone. 71 diamond worker suicides documented in 18 months.',
    stats: [
      { value: '5-6L', label: 'Workers Fled (2026)', color: 'purple' },
      { value: '550+', label: 'Morbi Units Shut', color: 'red' },
      { value: '71', label: 'Worker Suicides (18mo)', color: 'crimson' },
    ]
  },
  {
    num: 'V',
    icon: <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-500" />,
    title: 'Governance & Fiscal',
    path: '/economics',
    summary: 'Own Tax Revenue declined from 7.44% to 4.9% of GSDP over a decade. CAG flags Rs 11,929 Cr overstated surplus. Central grants crashed to 0.53% of GSDP. Revenue receipts at 8.7% of GSDP are less than half the median state\'s 19.9%.',
    stats: [
      { value: '4.9%', label: 'OTR / GSDP (FY27)', color: 'red' },
      { value: '₹11,929 Cr', label: 'CAG Overstatement', color: 'crimson' },
      { value: '0.53%', label: 'Central Grants / GSDP', color: 'red' },
    ]
  },
  {
    num: 'VI',
    icon: <Factory className="w-8 h-8 text-gray-600 dark:text-gray-400" />,
    title: 'Industrial Raw Materials',
    path: '/materials',
    summary: 'Russia now supplies 36% of crude (up from 2% in FY21). India imports 65-70% of pharmaceutical APIs from China — Paracetamol at 91%, Streptomycin at 100%. Gujarat\'s mineral needs are tethered to Odisha\'s bauxite and iron ore. 100% potash imported.',
    stats: [
      { value: '36%', label: 'Crude from Russia', color: 'crimson' },
      { value: '$3.6B', label: 'API Imports (China)', color: 'red' },
      { value: '100%', label: 'Potash Imported', color: 'red' },
    ]
  },
  {
    num: 'VII',
    icon: <GraduationCap className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
    title: 'Education & Healthcare',
    path: '/education',
    summary: '2.4 lakh annual dropouts (#1 in India). Higher education GER at 20.1% — 30% below national average. 86-97% specialist doctor posts vacant at rural CHCs. Health spending at 0.8% of GSDP is one-third the NHP target.',
    stats: [
      { value: '2.4L', label: 'Annual Dropouts (#1)', color: 'crimson' },
      { value: '97%', label: 'Specialist Posts Vacant', color: 'red' },
      { value: '0.8%', label: 'Health Spend / GSDP', color: 'red' },
    ]
  },
  {
    num: 'VIII',
    icon: <TreePine className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    title: 'Environment & Climate',
    path: '/environment',
    summary: '6 CPCB critically polluted zones. Vapi CEPI at 90.75 (India\'s highest). 74% of rivers severely polluted. 27.6% coastline eroding (highest in India). Per capita CO2 at 4.2 tons — 91% above national average.',
    stats: [
      { value: '90.75', label: 'Vapi CEPI Score', color: 'crimson' },
      { value: '74%', label: 'Rivers Polluted', color: 'red' },
      { value: '4.2 tCO2', label: 'Per Capita Emissions', color: 'red' },
    ]
  },
  {
    num: 'IX',
    icon: <ShieldAlert className="w-8 h-8 text-red-600 dark:text-red-500" />,
    title: 'Migrant Discrimination',
    path: '/migrant-discrimination',
    summary: '20,000+ workers fled after the 2018 anti-migrant pogrom. Silicosis deaths surged 216% in 2024-25. 92.65% of ceramic workers lack ESI health coverage. Non-Gujarati workers face wage theft, language barriers, and systematic exclusion.',
    stats: [
      { value: '20,000+', label: 'Workers Fled (2018)', color: 'red' },
      { value: '216%', label: 'Silicosis Death Surge', color: 'crimson' },
      { value: '92.65%', label: 'Without Health Cover', color: 'purple' },
    ]
  },
]

const dependencyRanking = [
  { name: 'Water', score: 90, tier: 'Critical' },
  { name: 'Infrastructure', score: 85, tier: 'Critical' },
  { name: 'Materials', score: 85, tier: 'Critical' },
  { name: 'Environment', score: 80, tier: 'High' },
  { name: 'Energy', score: 78, tier: 'High' },
  { name: 'Education', score: 72, tier: 'High' },
  { name: 'Labor', score: 70, tier: 'Elevated' },
  { name: 'Migrant Rights', score: 68, tier: 'Elevated' },
  { name: 'Fiscal', score: 55, tier: 'Elevated' },
]

const scenarios = [
  {
    id: 'hormuz',
    title: 'Strait of Hormuz Blockade (30 Days)',
    probability: 'Moderate',
    pillars: ['Energy', 'Materials', 'Labor', 'Fiscal'],
    cascade: 'LNG supply cut → gas prices spike 60%+ → Morbi shuts entirely → crude shipments delayed → refinery throughput drops 40% → power grid destabilized → 8-10 lakh workers displaced → GST revenue craters',
    impact: 'Catastrophic — simultaneously hits energy, materials, labor, and fiscal pillars within 72 hours',
    color: '#991B1B',
  },
  {
    id: 'monsoon',
    title: 'Consecutive Monsoon Failure',
    probability: 'Low-Moderate',
    pillars: ['Water', 'Labor', 'Education'],
    cascade: 'Narmada inflows drop below 50% → SSP allocation cut → Mehsana/Banaskantha aquifers breach 150% extraction → fluorosis surge → crop failure across 17 districts → rural-to-urban migration spike → urban water rationing',
    impact: 'Severe — water pillar failure cascades into agriculture, health, and urban systems over 6-12 months',
    color: '#B91C1C',
  },
  {
    id: 'exodus',
    title: 'Mass Migrant Exodus (>10 Lakh)',
    probability: 'High (Recurring)',
    pillars: ['Labor', 'Economics', 'Infrastructure'],
    cascade: 'Source states offer competitive wages + anti-migrant event → 10L+ workers leave within weeks → Morbi/Surat/Bharuch production halts → port cargo volumes drop → tax revenue falls → permanent wage inflation as workers don\'t return',
    impact: 'High — has already happened 3 times in 6 years at smaller scale. A 10L+ event would be structurally permanent',
    color: '#7C3AED',
  },
  {
    id: 'central',
    title: 'Central Transfer Freeze',
    probability: 'Low',
    pillars: ['Fiscal', 'Education', 'Water'],
    cascade: 'Political shift → Finance Commission reduces Gujarat share → central grants (already 0.53% GSDP) drop to near-zero → OTR at 4.9% insufficient to cover spending → SAUNI/infrastructure projects stall → education/health budget cuts',
    impact: 'Moderate-Severe — Gujarat\'s below-median revenue generation would be exposed immediately',
    color: '#059669',
  },
]

function getBarColor(score) {
  if (score >= 85) return '#991B1B'
  if (score >= 75) return '#DC2626'
  if (score >= 65) return '#F59E0B'
  return '#6B7280'
}

export default function Summary() {
  const isDark = useSyncExternalStore(subscribeDarkMode, getIsDark)
  const [activeScenario, setActiveScenario] = useState(null)

  return (
    <main className="w-full max-w-5xl mx-auto px-6 pt-32 pb-32 space-y-24">
      {/* Hero */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-4 text-crimson font-semibold tracking-widest text-sm mb-4">
            <span>EXECUTIVE SUMMARY</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>CROSS-PILLAR SYNTHESIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Structural Dependencies: <span className="italic text-crimson">A Synthesis</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            This executive summary synthesizes findings from <strong className="font-semibold text-gray-900 dark:text-white">nine pillars of analysis backed by 100+ cited sources</strong>. The pattern is consistent: extraordinary economic throughput built atop fragile, externally-controlled supply chains — where any single disruption cascades across multiple sectors simultaneously.
          </p>
        </motion.div>
      </section>

      {/* ═══════ SECTION 1: DEPENDENCY SEVERITY RANKING ═══════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <AlertTriangle className="w-6 h-6 text-crimson" />
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">External Dependency Severity Ranking</h2>
        </div>
        <div className="bg-white/60 dark:bg-dark-surface/40 border border-gray-200 dark:border-dark-border rounded-2xl p-6 backdrop-blur-sm">
          <ResponsiveContainer width="100%" height={360}>
            <BarChart data={dependencyRanking} layout="vertical" margin={{ left: 80, right: 30 }}>
              <XAxis type="number" domain={[0, 100]} tick={{ fill: isDark ? '#9ca3af' : '#4b5563', fontSize: 12 }} />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: isDark ? '#d1d5db' : '#374151', fontSize: 13, fontFamily: 'Inter' }}
                width={80}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1e1e1e' : '#fff',
                  border: `1px solid ${isDark ? '#333' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontFamily: 'Inter',
                  color: isDark ? '#e5e7eb' : '#1f2937',
                }}
                itemStyle={{ color: isDark ? '#e5e7eb' : '#1f2937' }}
                labelStyle={{ color: isDark ? '#d1d5db' : '#374151' }}
                formatter={(value, name, props) => [`${value}% — ${props.payload.tier}`, 'Dependency Score']}
              />
              <Bar dataKey="score" radius={[0, 6, 6, 0]}>
                {dependencyRanking.map((entry, index) => (
                  <Cell key={index} fill={getBarColor(entry.score)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-4 mt-4 justify-center text-[10px] uppercase tracking-widest font-semibold">
            <span className="flex items-center gap-1.5 text-gray-500"><span className="w-3 h-3 rounded-sm bg-[#991B1B]" /> Critical (85+)</span>
            <span className="flex items-center gap-1.5 text-gray-500"><span className="w-3 h-3 rounded-sm bg-[#DC2626]" /> High (75-84)</span>
            <span className="flex items-center gap-1.5 text-gray-500"><span className="w-3 h-3 rounded-sm bg-[#F59E0B]" /> Elevated (55-74)</span>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-4 italic font-serif">
          Figure 1: Estimated external dependency index — higher scores indicate greater vulnerability to supply chain disruption
        </p>
      </motion.section>

      {/* ═══════ SECTION 2: CASCADE DIAGRAM ═══════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <AlertTriangle className="w-6 h-6 text-crimson" />
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">2026 Crisis Propagation Map</h2>
        </div>
        <div className="bg-white/60 dark:bg-dark-surface/40 border border-gray-200 dark:border-dark-border rounded-2xl p-8 backdrop-blur-sm">
          <CascadeDiagram />
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-4 italic font-serif">
          Figure 2: How the March 2026 West Asia crisis cascaded across Gujarat's structural pillars — each node is a documented event
        </p>
      </motion.section>

      {/* ═══════ SECTION 3: "WHAT BREAKS FIRST" SCENARIOS ═══════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-crimson" />
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">"What Breaks First" — Disruption Scenarios</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
          Four hypothetical (but plausible) disruption scenarios showing which pillars collapse first and how the cascade propagates. Click a scenario to see the chain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {scenarios.map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => setActiveScenario(activeScenario === s.id ? null : s.id)}
                className="w-full text-left p-6 rounded-2xl border border-gray-200 dark:border-dark-border bg-white/60 dark:bg-dark-surface/60 backdrop-blur-sm hover:border-crimson/30 dark:hover:border-crimson/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-3 h-3 rounded-full mt-2" style={{ backgroundColor: s.color }} />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-1">{s.title}</h3>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {s.pillars.map(p => (
                        <span key={p} className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-gray-100 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-full text-gray-500 dark:text-gray-400">{p}</span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider font-semibold">
                      Probability: <span style={{ color: s.color }}>{s.probability}</span>
                    </p>

                    {activeScenario === s.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border"
                      >
                        <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-2">Cascade Chain</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">{s.cascade}</p>
                        <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Assessment</p>
                        <p className="text-sm font-semibold" style={{ color: s.color }}>{s.impact}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <hr className="border-gray-300 dark:border-dark-border w-1/2 mx-auto" />

      {/* ═══════ SECTION 4: PILLAR SUMMARIES ═══════ */}
      <div className="space-y-20">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Nine Pillars — Key Findings</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">The core findings from each structural pillar, with key metrics and links to the full analysis.</p>
        </div>
        {pillars.map((pillar) => (
          <Section key={pillar.num} icon={pillar.icon} title={`${pillar.num}. ${pillar.title}`}>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {pillar.stats.map((s, j) => (
                <StatBox key={j} value={s.value} label={s.label} color={s.color} />
              ))}
            </div>
            <DataCard title="Key Finding">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">{pillar.summary}</p>
              <Link to={pillar.path} className="inline-flex items-center text-crimson font-semibold hover:underline">
                Read Full Analysis <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </DataCard>
          </Section>
        ))}
      </div>

      {/* ═══════ CONCLUSION ═══════ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="border-2 border-crimson/30 dark:border-crimson/20 p-10 md:p-12 rounded-3xl bg-crimson/5 dark:bg-crimson/5">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-crimson" />
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">Conclusion</h2>
          </div>
          <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Gujarat's economic engine is real, productive, and globally competitive. But this analysis reveals that the engine runs on fuel it does not produce, water it does not source, labor it does not retain, capital it does not fully tax, human capital it does not adequately develop, and environmental costs it does not account for.
            </p>
            <p>
              The question is not whether Gujarat is economically powerful — it clearly is. The question is <strong className="text-gray-900 dark:text-white">how resilient that power is when any of these external supply lines is disrupted</strong>. The mass exoduses of 2018, 2020, and 2026 have already provided partial answers.
            </p>
            <p>
              This project does not argue that dependency is unique to Gujarat. Every modern economy depends on external inputs. But the <strong className="text-gray-900 dark:text-white">concentration</strong> of these dependencies — a single port operator, a single dam, a single source country for APIs, a single geopolitical chokepoint for LNG — creates a fragility profile that warrants serious, evidence-based scrutiny.
            </p>
            <p>
              The 2026 cascade proved the thesis: one geopolitical event in the Persian Gulf simultaneously shut 550+ factories, displaced 5-6 lakh workers, crashed diamond employment, destabilized the power grid, and eroded fiscal revenues — all within weeks. <strong className="text-gray-900 dark:text-white">That is not a resilient economy. That is an economy waiting for its next stress test.</strong>
            </p>
          </div>
        </div>
      </motion.section>

      {/* Source Note */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-gray-500 dark:text-gray-500 italic font-serif">
          This summary synthesizes findings from 100+ cited sources across 9 pillars. See individual pillar pages for full references and source URLs.
        </p>
      </motion.section>
    </main>
  )
}
