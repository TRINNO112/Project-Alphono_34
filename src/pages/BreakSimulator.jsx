import { useMemo, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Zap, RotateCcw, Info } from 'lucide-react'
import SEO from '../components/SEO'
import { Section, DataCard, SourceList } from '../components/Shared'
import AnimatedCounter from '../components/AnimatedCounter'
import SimulatorLever from '../components/SimulatorLever'
import SimulatorImpactBars from '../components/SimulatorImpactBars'
import SimulatorImpactMap from '../components/SimulatorImpactMap'
import {
  LEVERS, PRESETS, defaultLeverState, computeImpact, applyPreset,
} from '../data/simulatorCoefficients'

// Curated source list for the Simulator page (SourceList at bottom)
const sources = [
  { title: 'Reliance stops import of Russian crude oil into Jamnagar SEZ refinery', publication: 'Business Standard, Nov 2025', url: 'https://www.business-standard.com/industry/news/reliance-stops-import-of-russian-crude-oil-into-jamnagar-s-sez-refinery-125112001129_1.html' },
  { title: 'Behind India\'s massive Russian oil imports: Asia\'s richest man', publication: 'Al Jazeera, Aug 2025', url: 'https://www.aljazeera.com/economy/2025/8/22/behind-indias-massive-russian-oil-imports-asias-richest-man' },
  { title: 'Adani Ports crosses 500 MMT milestone in FY26', publication: 'DSIJ Insights, 2026', url: 'https://insights.dsij.in/dsijarticledetail/adani-ports-crosses-500-mmt-milestone-in-fy26-smashes-monthly-cargo-record-in-march-2026-56298' },
  { title: 'Disruptions and delays mount at Mundra Port following Cyclone Biparjoy', publication: 'Logistics Insider, Jun 2023', url: 'https://www.logisticsinsider.in/disruptions-and-delays-mount-at-mundra-port-following-cyclone-biparjoy/' },
  { title: 'Iran war forces job losses, reverse migration in India\'s ceramic hub', publication: 'Al Jazeera, Apr 2026', url: 'https://www.aljazeera.com/news/2026/4/21/iran-war-forces-job-losses-reverse-migration-in-indias-ceramic-hub' },
  { title: 'Over 400 Ceramic Units in Morbi Shut Due to Gas Crisis', publication: 'DeshGujarat, Mar 2026', url: 'https://deshgujarat.com/2026/03/18/over-400-ceramic-units-in-morbi-shut-due-to-gas-crisis-amid-west-asia-war/' },
  { title: 'Sardar Sarovar Dam supplies water to 3 crore people', publication: 'Newsgram, Mar 2026', url: 'https://www.newsgram.com/india/2026/03/21/sardar-sarovar-dam-supplies-water-to-3-crore-people-irrigates-2038-lakh-hectares-in-gujarat-rajasthan' },
  { title: 'In Gujarat, lands for which Narmada dam was built reel under drought', publication: 'Scroll.in', url: 'https://scroll.in/article/920278/in-gujarat-lands-for-which-narmada-dam-was-built-reel-under-drought-even-as-factories-get-water' },
  { title: 'India\'s cheap internet runs through the world\'s most dangerous waters', publication: 'BW Businessworld, 2026', url: 'https://www.businessworld.in/article/india-cheap-internet-undersea-cable-vulnerability-war-zones-2026-598929' },
  { title: 'India must build 10x more cable landing stations: TRAI Chief', publication: 'Outlook Business', url: 'https://www.outlookbusiness.com/start-up/india-must-build-10x-more-cable-landing-stations-to-compete-in-global-data-race-trai-chief' },
  { title: 'India struggling to free pharma industry from dependence on Chinese APIs', publication: 'Policy Circle', url: 'https://www.policycircle.org/industry/apis-import-depencence-on-china/' },
  { title: 'Gujarat CM appeals for calm as 20,000+ migrants flee state', publication: 'India TV, 2018', url: 'https://www.indiatvnews.com/news/india-gujarat-cm-appeals-for-calm-as-over-20-000-migrants-flee-state-within-a-week-469811' },
  { title: 'Job losses, factory closures pushing Surat\'s diamond workers to the edge. 71 suicides in 18 months', publication: 'ThePrint', url: 'https://theprint.in/india/job-losses-factory-closures-pushing-surats-diamond-workers-to-the-edge-71-suicides-in-18-months/2339805/' },
  { title: 'Petronet LNG commissions Dahej expansion, capacity rises to 22.5 MMTPA', publication: 'Shipping Tribune', url: 'https://www.shippingtribune.com/news/shipping/Petronet+LNG+commissions+Dahej+expansion,+capacity+rises+to+22.5+MMTPA' },
  { title: '29 Districts in Gujarat Vulnerable to Extreme Climate Events', publication: 'CEEW', url: 'https://www.ceew.in/press-releases/29-districts-gujarat-vulnerable-extreme-climate-events-ceew' },
]

function formatCrore(n) {
  if (n <= 0) return '0'
  if (n >= 100000) return `${(n / 100000).toFixed(2)}`      // 1 lakh crore
  if (n >= 1000) return `${(n / 1000).toFixed(1)}`          // thousand crore (k)
  return `${n}`
}
function formatCroreSuffix(n) {
  if (n >= 100000) return ' L cr'
  if (n >= 1000) return 'k cr'
  return ' cr'
}
function formatJobs(n) {
  if (n <= 0) return '0'
  if (n >= 100000) return `${(n / 100000).toFixed(2)}`      // lakhs
  if (n >= 1000) return `${(n / 1000).toFixed(0)}`
  return `${n}`
}
function formatJobsSuffix(n) {
  if (n >= 100000) return ' L'
  if (n >= 1000) return 'k'
  return ''
}

export default function BreakSimulator() {
  const [state, setState] = useState(defaultLeverState)

  const updateLever = useCallback((id, value) => {
    setState((prev) => ({ ...prev, [id]: value }))
  }, [])

  const reset = useCallback(() => setState(defaultLeverState()), [])
  const runPreset = useCallback((id) => setState((prev) => applyPreset(prev, id)), [])

  const impact = useMemo(() => computeImpact(state), [state])
  const anyActive = impact.activeLevers.length > 0

  return (
    <main className="w-full max-w-6xl mx-auto px-6 pt-32 pb-32 space-y-16">
      <SEO
        title="Break Simulator"
        description="War-game Gujarat's structural dependencies. Interactively trigger supply-chain, labor, water, and digital failures and watch the cascade propagate across pillars and districts."
        path="/simulator"
      />

      {/* Hero */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-4 text-crimson font-semibold tracking-widest text-sm mb-4">
            <span>INTERACTIVE</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY STRESS TEST</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Break <span className="italic text-crimson">Gujarat</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Move the levers. Watch the cascade. Each control models a real, documented
            shock — with a citation — and the damage numbers are computed deterministically
            from the pillar dependencies mapped throughout this project.
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic max-w-3xl pl-6">
            This is a stress-test tool, not a forecast. Coefficients are upper-bound
            estimates derived from the sources cited under each lever.
          </p>
        </motion.div>
      </section>

      {/* Live impact counters (static summary bar) */}
      <section
        aria-label="Current cascade impact"
        className="rounded-2xl border border-crimson/40 bg-white/90 dark:bg-dark-surface/90 shadow-lg p-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <div className="text-[11px] font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-1">
              GDP at Risk
            </div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-crimson tabular-nums">
              <span aria-hidden="true">₹</span>
              <AnimatedCounter
                key={`gdp-${impact.gdpCrore}`}
                value={formatCrore(impact.gdpCrore)}
                suffix={formatCroreSuffix(impact.gdpCrore)}
                duration={1.2}
                decimals={impact.gdpCrore >= 1000 ? 1 : 0}
              />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Aggregated from active levers
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-1">
              Jobs at Risk
            </div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tabular-nums">
              <AnimatedCounter
                key={`jobs-${impact.jobsAtRisk}`}
                value={formatJobs(impact.jobsAtRisk)}
                suffix={formatJobsSuffix(impact.jobsAtRisk)}
                duration={1.2}
                decimals={impact.jobsAtRisk >= 100000 ? 2 : 0}
              />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Direct + compounding (upper-bound)
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-1">
              Active Levers
            </div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tabular-nums">
              {impact.activeLevers.length}
              <span className="text-gray-400 dark:text-gray-500 text-xl"> / {LEVERS.length}</span>
            </div>
            <button
              type="button"
              onClick={reset}
              disabled={!anyActive}
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-crimson disabled:text-gray-400 dark:disabled:text-gray-600 hover:underline focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 rounded"
            >
              <RotateCcw className="w-3 h-3" aria-hidden="true" />
              Reset all
            </button>
          </div>
        </div>
      </section>

      {/* Preset scenarios */}
      <Section icon={<Zap className="w-8 h-8 text-crimson" />} title="Preset Scenarios">
        <DataCard title="Load a documented real-world cascade">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Each preset sets specific levers to values anchored in a real event.
            Tap any preset to snap the simulation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => runPreset(preset.id)}
                className="text-left p-4 rounded-xl border border-gray-200 dark:border-dark-border hover:border-crimson hover:bg-crimson/5 transition-all focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
              >
                <div className="font-serif font-bold text-lg text-gray-900 dark:text-white mb-1">
                  {preset.label}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
                  {preset.description}
                </p>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-crimson">
                  Modeled after: {preset.source.title}
                </span>
              </button>
            ))}
          </div>
        </DataCard>
      </Section>

      {/* Levers + Impact panels */}
      <Section icon={<AlertTriangle className="w-8 h-8 text-crimson" />} title="Break Levers">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: levers */}
          <div className="lg:col-span-2 space-y-3">
            {LEVERS.map((lever) => (
              <SimulatorLever
                key={lever.id}
                type={lever.type}
                label={lever.label}
                description={lever.description}
                value={state[lever.id]}
                onChange={(v) => updateLever(lever.id, v)}
                min={lever.min}
                max={lever.max}
                step={lever.step}
                unit={lever.unit}
                source={lever.source}
              />
            ))}
          </div>

          {/* Right: impact viz */}
          <div className="lg:col-span-3 space-y-6">
            <SimulatorImpactBars pillarPercent={impact.pillarPercent} />
            <SimulatorImpactMap districtScore={impact.districtScore} />
          </div>
        </div>
      </Section>

      {/* Methodology */}
      <Section icon={<Info className="w-8 h-8 text-gray-600 dark:text-gray-400" />} title="Methodology">
        <DataCard title="How the damage is computed">
          <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>
              Each lever carries a coefficient matrix mapping it to pillar disruption,
              affected districts, ₹ crore GDP at risk, and jobs at risk — anchored to a
              cited source in <code className="font-mono text-xs bg-parchment-100 dark:bg-dark-bg px-1 rounded">src/data/simulatorCoefficients.js</code>.
            </li>
            <li>
              Magnitudes sum linearly across active levers. Pillar and district scores
              are capped at 100%; below that they reflect cumulative exposure.
            </li>
            <li>
              Coefficients are <strong>upper-bound stress-test estimates</strong>, not
              probability-weighted forecasts. The simulator is intended to expose which
              pillars and districts break first, not to predict the exact drawdown.
            </li>
            <li>
              Gaps the sources don&apos;t cover (e.g., exact 2026 SSP live-storage, NPCI
              outage cost per hour) are flagged in the data file under <code className="font-mono text-xs bg-parchment-100 dark:bg-dark-bg px-1 rounded">pendingData</code>.
            </li>
          </ul>
        </DataCard>
      </Section>

      <SourceList sources={sources} />
    </main>
  )
}
