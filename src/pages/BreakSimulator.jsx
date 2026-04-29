import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AlertTriangle, Zap, RotateCcw, Info, ChevronDown, BookOpen } from 'lucide-react'
import SEO from '../components/SEO'
import { Section, DataCard, SourceList } from '../components/Shared'
import AnimatedCounter from '../components/AnimatedCounter'
import SimulatorLever from '../components/SimulatorLever'
import SimulatorImpactBars from '../components/SimulatorImpactBars'
import SimulatorImpactMap from '../components/SimulatorImpactMap'
import NamedPopulationPanel from '../components/NamedPopulationPanel'
import HistoricalPrecedentCard from '../components/HistoricalPrecedentCard'
import CascadeTicker from '../components/CascadeTicker'
import EducationCascadePanel from '../components/EducationCascadePanel'
import {
  LEVERS, LEVER_GROUPS, PRESETS, PILLAR_LABELS,
  defaultLeverState, computeImpact, applyPreset, getLeverById,
} from '../data/simulatorCoefficients'

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
  if (n >= 100000) return `${(n / 100000).toFixed(2)}`
  if (n >= 1000) return `${(n / 1000).toFixed(1)}`
  return `${n}`
}
function formatCroreSuffix(n) {
  if (n >= 100000) return ' L cr'
  if (n >= 1000) return 'k cr'
  return ' cr'
}
function formatJobs(n) {
  if (n <= 0) return '0'
  if (n >= 100000) return `${(n / 100000).toFixed(2)}`
  if (n >= 1000) return `${(n / 1000).toFixed(0)}`
  return `${n}`
}
function formatJobsSuffix(n) {
  if (n >= 100000) return ' L'
  if (n >= 1000) return 'k'
  return ''
}

const TAB_ORDER = ['materials', 'physical', 'human', 'frontier', 'all']
const TAB_LABELS = {
  materials: 'Materials',
  physical: 'Physical',
  human: 'Human',
  frontier: 'Frontier',
  all: 'All',
}

// ----- URL state helpers -----
function parseLeversParam(str) {
  if (!str) return null
  const out = {}
  for (const part of str.split(',')) {
    const [id, raw] = part.split(':')
    if (!id || raw === undefined) continue
    const lever = getLeverById(id)
    if (!lever) continue
    if (lever.type === 'toggle') {
      out[id] = raw === '1' || raw === 'true'
    } else {
      const n = Number(raw)
      if (Number.isFinite(n)) out[id] = Math.max(0, Math.min(lever.max ?? 100, n))
    }
  }
  return out
}

function serializeLevers(state) {
  const parts = []
  for (const lever of LEVERS) {
    const v = state[lever.id]
    if (lever.type === 'toggle') {
      if (v) parts.push(`${lever.id}:1`)
    } else if (Number(v) > 0) {
      parts.push(`${lever.id}:${v}`)
    }
  }
  return parts.join(',')
}

// ----- reducer -----
const initialState = {
  levers: defaultLeverState(),
  focusedPillar: null,
  focusedDistrict: null,
  tab: 'materials',
  activePresetId: null,
  showSecondary: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'set-lever':
      return {
        ...state,
        levers: { ...state.levers, [action.id]: action.value },
        activePresetId: null,
      }
    case 'apply-preset': {
      const next = applyPreset(state.levers, action.presetId)
      return { ...state, levers: next, activePresetId: action.presetId }
    }
    case 'reset':
      return { ...state, levers: defaultLeverState(), activePresetId: null }
    case 'focus-pillar':
      return { ...state, focusedPillar: action.pillarId }
    case 'focus-district':
      return { ...state, focusedDistrict: action.name }
    case 'set-tab':
      return { ...state, tab: action.tab }
    case 'toggle-secondary':
      return { ...state, showSecondary: !state.showSecondary }
    case 'hydrate':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

// Lever -> education narrative synthesis (downstream-only)
const EDU_NARRATIVE_BY_LEVER = {
  'diamond-export-collapse': {
    headline: '2,356 SLCs from Surat schools (Nov 2024 – May 2025)',
    detail: 'Diamond-worker income evaporates → rent + school fees first cuts → child pulled from English-medium private, then govt school → family decamps to Saurashtra ancestral village. ~200 are Class 9–10 children losing the academic year mid-stream.',
    headcount: 280000,
  },
  'saurashtra-reverse-migration': {
    headline: 'Tulshishyam dropout pattern',
    detail: 'Surat 4 km school → Tulshishyam village 45 km. Documented case (Jagdish Babariya, 14): dropout in a month. Pattern repeats across Bhavnagar, Amreli, Junagadh, Gir Somnath, Rajkot.',
    headcount: 6000,
  },
  'migrant-violence': {
    headline: '~25% migrant share in Surat govt schools',
    detail: 'When violence fires, migrant children are pulled from Surat municipal schools within a single news cycle. 2018 precedent: 50k families left in 12–14 months. Mid-session re-entry in UP/Bihar village schools typically means losing the year.',
    headcount: 250000,
  },
  'structural-discrimination-cascade': {
    headline: 'Slow-burn migrant-school attrition',
    detail: 'Schooling discrimination + Hindi-medium scarcity compounds across cohorts. Drop-out is gradual but cumulative.',
    headcount: 80000,
  },
}

export default function BreakSimulator() {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    if (typeof window === 'undefined') return init
    const params = new URLSearchParams(window.location.search)
    const presetId = params.get('preset')
    if (presetId) {
      const next = applyPreset(init.levers, presetId)
      return { ...init, levers: next, activePresetId: PRESETS.find((p) => p.id === presetId) ? presetId : null }
    }
    const leverOverrides = parseLeversParam(params.get('levers'))
    if (leverOverrides) {
      return { ...init, levers: { ...init.levers, ...leverOverrides } }
    }
    return init
  })

  // Debounced URL writeback
  const urlTimer = useRef(null)
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (urlTimer.current) clearTimeout(urlTimer.current)
    urlTimer.current = setTimeout(() => {
      const params = new URLSearchParams()
      if (state.activePresetId) {
        params.set('preset', state.activePresetId)
      } else {
        const ser = serializeLevers(state.levers)
        if (ser) params.set('levers', ser)
      }
      const qs = params.toString()
      const next = qs ? `${window.location.pathname}?${qs}` : window.location.pathname
      window.history.replaceState({}, '', next)
    }, 250)
    return () => urlTimer.current && clearTimeout(urlTimer.current)
  }, [state.levers, state.activePresetId])

  const updateLever = useCallback((id, value) => {
    dispatch({ type: 'set-lever', id, value })
  }, [])

  const reset = useCallback(() => dispatch({ type: 'reset' }), [])
  const runPreset = useCallback((id) => dispatch({ type: 'apply-preset', presetId: id }), [])
  const setFocusedPillar = useCallback((p) => dispatch({ type: 'focus-pillar', pillarId: p }), [])
  const setFocusedDistrict = useCallback((d) => dispatch({ type: 'focus-district', name: d }), [])
  const setTab = useCallback((t) => dispatch({ type: 'set-tab', tab: t }), [])
  const toggleSecondary = useCallback(() => dispatch({ type: 'toggle-secondary' }), [])

  const impact = useMemo(() => computeImpact(state.levers), [state.levers])
  const anyActive = impact.activeLevers.length > 0

  // Total population + district filter
  const filteredPopulations = useMemo(() => {
    if (!state.focusedDistrict) return impact.populationsAffected
    const needle = state.focusedDistrict.toLowerCase()
    const match = impact.populationsAffected.filter(
      (p) => p.locality && p.locality.toLowerCase().includes(needle),
    )
    return match.length > 0 ? match : impact.populationsAffected
  }, [impact.populationsAffected, state.focusedDistrict])

  const totalHeadcount = useMemo(
    () => filteredPopulations.reduce((acc, p) => acc + (p.headcount || 0), 0),
    [filteredPopulations],
  )

  // Adapt derivationByPillar.contributors -> array shape SimulatorImpactBars expects
  const barsDerivations = useMemo(() => {
    const out = {}
    for (const [pillarId, entry] of Object.entries(impact.derivationByPillar || {})) {
      if (!entry || !entry.contributors || entry.contributors.length === 0) continue
      out[pillarId] = entry.contributors
        .slice()
        .sort((a, b) => b.contribution - a.contribution)
        .map((c) => {
          const lever = getLeverById(c.leverId)
          const leverMax = lever?.type === 'toggle' ? 1 : (lever?.max ?? 100)
          const rawValue = state.levers[c.leverId]
          const leverValue = lever?.type === 'toggle' ? (rawValue ? 1 : 0) : Number(rawValue) || 0
          return {
            leverId: c.leverId,
            label: c.label,
            derivation: { factors: c.factors, formula: c.formula, result: c.result, sources: lever?.sources || [] },
            leverValue,
            leverMax,
          }
        })
    }
    return out
  }, [impact.derivationByPillar, state.levers])

  // Pillars-touched chip data per active lever (for SimulatorLever)
  const pillarsTouchedByLever = useMemo(() => {
    const out = {}
    for (const [pillarId, entry] of Object.entries(impact.derivationByPillar || {})) {
      for (const c of entry.contributors || []) {
        if (!out[c.leverId]) out[c.leverId] = []
        if (c.contribution > 0) out[c.leverId].push({ pillarId, percent: c.contribution })
      }
    }
    for (const id of Object.keys(out)) {
      out[id].sort((a, b) => b.percent - a.percent)
      out[id] = out[id].slice(0, 4)
    }
    return out
  }, [impact.derivationByPillar])

  // Time to first failure: shortest among active levers carrying numeric "~N days"
  const timeToFirstFailure = useMemo(() => {
    let best = null
    for (const al of impact.activeLevers) {
      const lever = getLeverById(al.id)
      const ttf = lever?.timeToFailure
      if (!ttf) continue
      const m = ttf.match(/(\d+)/)
      if (!m) continue
      const days = Number(m[1])
      if (!Number.isFinite(days)) continue
      if (best === null || days < best.days) best = { days, label: ttf, leverLabel: lever.label }
    }
    return best
  }, [impact.activeLevers])

  // Lever map.contributions -> map expects { districtName: [{leverId, leverLabel, percent}] }
  const mapContributions = useMemo(() => {
    const out = {}
    for (const [district, contribs] of Object.entries(impact.leverContributions || {})) {
      out[district] = contribs.map((c) => ({
        leverId: c.leverId,
        leverLabel: c.label,
        percent: c.contribution,
      }))
    }
    return out
  }, [impact.leverContributions])

  const allPendingData = useMemo(
    () => impact.activeLevers.length > 0 && impact.activeLevers.every((al) => getLeverById(al.id)?.pendingData),
    [impact.activeLevers],
  )

  // Education narratives synthesised from active levers
  const educationNarratives = useMemo(() => {
    const out = []
    for (const al of impact.activeLevers) {
      const tpl = EDU_NARRATIVE_BY_LEVER[al.id]
      if (!tpl) continue
      const lever = getLeverById(al.id)
      out.push({ leverId: al.id, leverLabel: lever?.label || al.id, ...tpl })
    }
    return out
  }, [impact.activeLevers])

  // Lever rail: filter by tab + tier
  const visibleLevers = useMemo(() => {
    const list = state.tab === 'all' ? LEVERS : LEVERS.filter((l) => l.group === state.tab)
    const primary = list.filter((l) => l.tier !== 'secondary')
    const secondary = list.filter((l) => l.tier === 'secondary')
    return { primary, secondary }
  }, [state.tab])

  return (
    <main className="w-full max-w-7xl mx-auto px-6 pt-32 pb-32 space-y-16">
      <SEO
        title="Break Simulator"
        description="War-game Gujarat's structural dependencies. 20 cited levers, named populations, historical analogues, and cascading damage across 13 pillars."
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
            Stress-Test <span className="italic text-crimson">Gujarat</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Move the levers. Watch the cascade. Each control models a real, documented
            shock — with a citation — and the damage numbers are computed deterministically
            from the pillar dependencies mapped throughout this project.
          </p>
          <p className="mt-3 text-sm font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 pl-6">
            {LEVERS.length} levers · 13 pillars · cited arithmetic
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic max-w-3xl pl-6">
            This is a stress-test tool, not a forecast. Coefficients are upper-bound
            estimates derived from the sources cited under each lever.
          </p>
          <div className="mt-5 pl-6">
            <Link
              to="/methodology#simulator"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-crimson/40 bg-crimson/10 text-crimson font-semibold text-sm hover:bg-crimson hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              Read the full methodology — every coefficient explained
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Live impact counters */}
      <section
        aria-label="Current cascade impact"
        className="rounded-2xl border border-crimson/40 bg-white/90 dark:bg-dark-surface/90 shadow-lg p-5"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
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

          <div>
            <div className="text-[11px] font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-1">
              Time to First Failure
            </div>
            <div className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tabular-nums">
              {timeToFirstFailure ? `${timeToFirstFailure.days}d` : '—'}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate" title={timeToFirstFailure?.leverLabel || ''}>
              {timeToFirstFailure ? timeToFirstFailure.leverLabel : 'No active lever'}
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {PRESETS.map((preset) => {
              const isActive = state.activePresetId === preset.id
              const leverCount = Object.keys(preset.values || {}).length
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => runPreset(preset.id)}
                  aria-pressed={isActive}
                  className={`text-left p-4 rounded-xl border transition-all focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 ${
                    isActive
                      ? 'border-crimson bg-crimson/10 dark:bg-crimson/20'
                      : 'border-gray-200 dark:border-dark-border hover:border-crimson hover:bg-crimson/5'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="font-serif font-bold text-base text-gray-900 dark:text-white leading-tight">
                      {preset.label}
                    </div>
                    <span className="shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-dark-bg text-gray-600 dark:text-gray-400">
                      {leverCount} lever{leverCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
                    {preset.tagline || preset.description}
                  </p>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-crimson line-clamp-1">
                    {preset.source.title}
                  </span>
                </button>
              )
            })}
          </div>
        </DataCard>
      </Section>

      {/* Levers + Impact panels */}
      <Section icon={<AlertTriangle className="w-8 h-8 text-crimson" />} title="Break Levers">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Lever rail */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto space-y-3 pr-1">
            {/* Group tabs */}
            <div role="tablist" aria-label="Lever groups" className="flex flex-wrap gap-1.5 pb-2 border-b border-gray-200 dark:border-dark-border">
              {TAB_ORDER.map((t) => {
                const active = state.tab === t
                return (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={active}
                    type="button"
                    onClick={() => setTab(t)}
                    className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 ${
                      active
                        ? 'border-crimson bg-crimson text-white'
                        : 'border-gray-200 dark:border-dark-border text-gray-600 dark:text-gray-400 hover:border-crimson hover:text-crimson'
                    }`}
                  >
                    {TAB_LABELS[t]}
                  </button>
                )
              })}
            </div>

            {/* Primary levers */}
            {visibleLevers.primary.map((lever) => (
              <SimulatorLever
                key={lever.id}
                type={lever.type}
                label={lever.label}
                description={lever.description}
                value={state.levers[lever.id]}
                onChange={(v) => updateLever(lever.id, v)}
                min={lever.min}
                max={lever.max}
                step={lever.step}
                unit={lever.unit}
                source={lever.source}
                pillarsTouched={pillarsTouchedByLever[lever.id]?.map((p) => ({
                  pillarId: p.pillarId,
                  percent: p.percent,
                }))}
                onPillarHover={setFocusedPillar}
                timeToFailure={lever.timeToFailure}
                severity={lever.severity}
                group={lever.group}
                showGroupBadge={state.tab === 'all'}
                displayUnit={lever.unit}
              />
            ))}

            {/* Secondary disclosure */}
            {visibleLevers.secondary.length > 0 && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={toggleSecondary}
                  aria-expanded={state.showSecondary}
                  className="w-full flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-crimson py-2 px-3 rounded-lg border border-dashed border-gray-300 dark:border-dark-border focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
                >
                  <span>
                    {state.showSecondary ? 'Hide' : 'Show'} {visibleLevers.secondary.length} more lever{visibleLevers.secondary.length !== 1 ? 's' : ''}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${state.showSecondary ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {state.showSecondary && (
                  <div className="mt-3 space-y-3">
                    {visibleLevers.secondary.map((lever) => (
                      <SimulatorLever
                        key={lever.id}
                        type={lever.type}
                        label={lever.label}
                        description={lever.description}
                        value={state.levers[lever.id]}
                        onChange={(v) => updateLever(lever.id, v)}
                        min={lever.min}
                        max={lever.max}
                        step={lever.step}
                        unit={lever.unit}
                        source={lever.source}
                        pillarsTouched={pillarsTouchedByLever[lever.id]?.map((p) => ({
                          pillarId: p.pillarId,
                          percent: p.percent,
                        }))}
                        onPillarHover={setFocusedPillar}
                        timeToFailure={lever.timeToFailure}
                        severity={lever.severity}
                        group={lever.group}
                        showGroupBadge={state.tab === 'all'}
                        displayUnit={lever.unit}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Row 1: bars + map */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <SimulatorImpactBars
                pillarPercent={impact.pillarPercent}
                derivations={barsDerivations}
                onPillarFocus={setFocusedPillar}
              />
              <SimulatorImpactMap
                districtScore={impact.districtScore}
                leverContributions={mapContributions}
                onDistrictFocus={setFocusedDistrict}
                pendingData={allPendingData ? 'Estimates pending data' : undefined}
              />
            </div>

            {/* Row 2: population + historical + cascade */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <NamedPopulationPanel
                groups={filteredPopulations}
                totalHeadcount={totalHeadcount}
                emptyState={
                  state.focusedDistrict
                    ? `No named populations matched ${state.focusedDistrict}.`
                    : 'Move a lever to see who is affected.'
                }
              />
              <HistoricalPrecedentCard
                analogues={impact.historicalActive}
                emptyState="Activate a lever to see a historical analogue."
              />
              <CascadeTicker
                leverLabel={impact.cascadeActive[0]?.label}
                steps={impact.cascadeActive[0]?.steps || []}
              />
            </div>

            {/* Row 3: Education downstream */}
            <EducationCascadePanel narratives={educationNarratives} />

            {/* Focused-pillar hint */}
            {state.focusedPillar && (
              <p className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Focused: {PILLAR_LABELS[state.focusedPillar] || state.focusedPillar}
              </p>
            )}
          </div>
        </div>
      </Section>

      {/* Methodology summary — full version on /methodology#simulator */}
      <Section icon={<Info className="w-8 h-8 text-gray-600 dark:text-gray-400" />} title="Methodology in 30 seconds">
        <DataCard title="The short version">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Each lever models one shock with a single canonical source. The &ldquo;Why?&rdquo;
            button on every pillar bar shows the arithmetic for that pillar:
          </p>
          <div className="p-3 mb-3 bg-gray-900 dark:bg-black rounded-lg overflow-x-auto">
            <code className="font-mono text-xs text-amber-300 whitespace-pre">
              {`pillar % at full pull = asset_share × dependency_weight × propagation × 100`}
            </code>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Multiple active levers add linearly per pillar (capped at 100%). Districts get the full hit if named primary, plus a 15% statewide ripple otherwise. GDP and jobs scale per slider-point. Time-to-first-failure is the minimum buffer-stock window across active levers.
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Coefficients are <strong>upper-bound stress-test estimates</strong>, not forecasts. Every weight is cited. Education has no slider — it appears as a downstream cascade panel only.
          </p>
          <Link
            to="/methodology#simulator"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-crimson bg-crimson text-white font-semibold text-sm hover:bg-crimson/90 transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
          >
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            Full methodology — every coefficient, every weight, every source
          </Link>
        </DataCard>
      </Section>

      <SourceList sources={sources} />
    </main>
  )
}
