import { motion } from 'framer-motion'
import { BookOpen, Search, ShieldCheck, Scale, AlertTriangle, FileText, Database, CheckCircle, Sliders, Calculator, Map, Users, Clock, GraduationCap } from 'lucide-react'
import SEO from '../components/SEO'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

const sourceBreakdown = [
  { type: "Government & Institutional", pct: 24, count: 55, color: "bg-blue-500", examples: "CAG Reports, NITI Aayog, Finance Commission, RBI, NPCIL, GPCB, CPCB, MeitY, TRAI, DGH" },
  { type: "Investigative Journalism", pct: 36, count: 81, color: "bg-crimson", examples: "The Print, Scroll.in, IndiaSpend, Down To Earth, Business Standard, The Wire, Mongabay, Reuters" },
  { type: "Academic & Research", pct: 16, count: 37, color: "bg-purple-500", examples: "Peer-reviewed journals, RIS Discussion Papers, ICAR, WHO/LANCET studies, ORF, CSIS, VIF" },
  { type: "Industry & Domain Reports", pct: 18, count: 40, color: "bg-amber-500", examples: "Kpler, Vortexa, S&P Global, Argus, Fastmarkets, Global Energy Monitor, BNEF, IBEF, TeleGeography" },
  { type: "Legal & Court Records", pct: 6, count: 14, color: "bg-emerald-500", examples: "Gujarat HC rulings, Supreme Court orders, NGT directives, CAG audit objections" },
]

const verificationSteps = [
  { step: "01", title: "Primary Source Identification", desc: "Every claim starts from a primary document — a government report, court filing, official dataset, or verified news report from an established publication.", icon: Search },
  { step: "02", title: "Cross-Reference Validation", desc: "Each data point is cross-referenced against at least two independent sources. Conflicting figures are flagged and the most conservative estimate is used.", icon: ShieldCheck },
  { step: "03", title: "Temporal Verification", desc: "All statistics are dated and version-tracked. When FY26 data supersedes FY25, the older figure is retired. No stale data is presented as current.", icon: CheckCircle },
  { step: "04", title: "Cartographic Verification", desc: "For the Index Mercantilis trade-route module, every coordinate, tanker volume, and chokepoint statistic is verified against at least two of: Kpler / Vortexa tanker trackers, S&P Global commodity press, and official port/refinery disclosures.", icon: Scale },
]

const limitations = [
  "Deep audits are currently active for 17 districts. The remaining 16 placeholder districts are presently mapped using predictive gap-analysis and state-aggregate overlays pending Phase 3 on-the-ground validation.",
  "Corporate financial data relies on publicly filed documents; internal operational data (e.g., Adani port efficiency metrics) is not independently verifiable.",
  "Migrant worker statistics are inherently undercounted — no comprehensive interstate migration registry exists in India. Figures represent best available estimates.",
  "Environmental monitoring data from GPCB has known reliability issues flagged by CAG — we note this where applicable but cannot independently re-test.",
  "This research is authored with a critical lens. While every claim is sourced, the selection of which facts to highlight inherently reflects an editorial perspective.",
]

export default function Methodology() {
  return (
    <main className="w-full min-h-screen bg-gray-50 dark:bg-dark-bg font-sans pt-28 pb-32">
      <SEO
        title="Research Methodology"
        description="Research framework, data collection protocol, verification methodology, and acknowledged limitations for Project Alphono 34."
        path="/methodology"
      />

      <div className="max-w-3xl mx-auto px-5">

        {/* Header */}
        <motion.div {...fade()} className="mb-16">
          <div className="flex items-center gap-2 text-crimson text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Research Protocol</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
            Research Methodology
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed">
            Documenting the framework, protocols, and acknowledged constraints behind every claim in this investigation.
          </p>
          <div className="mt-6 h-px bg-gray-200 dark:bg-gray-800" />
        </motion.div>

        {/* §1 — Research Framework */}
        <motion.section {...fade(0.1)} className="mb-16">
          <SectionNumber n="1" />
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">Research Framework</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            This investigation employs a <strong className="text-gray-900 dark:text-white">mixed-methods structural dependency analysis</strong> — combining quantitative data extraction from government records with qualitative assessment drawn from investigative journalism, court proceedings, and field reporting. Phase II expanded the scope with deep-dive research into agrarian distress, green technology supply chain vulnerabilities, and industrial chemical toxicity governance. Phase III (April 2026) added a 13th pillar on digital sovereignty and a dedicated cartographic audit of Gujarat's maritime trade dependencies.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            The core thesis — that Gujarat's industrial economy contains deep, under-examined structural vulnerabilities — is tested across <strong className="text-gray-900 dark:text-white">13 interdependent pillars</strong>: Infrastructure, Energy, Water, Labor, Fiscal Governance, Raw Materials, Education, Environment, Migrant Discrimination, Agriculture &amp; Agrarian Distress, Green Tech Dependency, Chemical Governance, and Digital Sovereignty.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            A parallel cartographic track — the <strong className="text-gray-900 dark:text-white">Index Mercantilis</strong> — maps Gujarat's external trade chokepoints (Hormuz, Malacca, Bab-el-Mandeb, Suez, Cape of Good Hope) and the origin/destination nodes that feed the state's refineries, LNG terminals, coal-fired power, steel mills, and chemical hubs. This module is sourced from 41 independent tanker-tracking, commodity, and geopolitical data streams.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Each pillar is not analyzed in isolation. The research deliberately maps <strong className="text-gray-900 dark:text-white">cross-pillar dependencies</strong> — for example, how energy price shocks (Pillar 2) cascade into labor exodus (Pillar 4), which in turn impacts industrial output (Pillar 6) and fiscal receipts (Pillar 5).
          </p>
        </motion.section>

        {/* §2 — Data Collection Protocol */}
        <motion.section {...fade(0.1)} className="mb-16">
          <SectionNumber n="2" />
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">Data Collection Protocol</h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            A total of <strong className="text-gray-900 dark:text-white">227 sources</strong> across 13 pillars plus the Index Mercantilis trade-route module were collected, verified, and cited. Sources are classified into five categories:
          </p>

          {/* Source breakdown bars */}
          <div className="space-y-4 mb-8">
            {sourceBreakdown.map((s) => (
              <div key={s.type}>
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{s.type}</span>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-500">{s.count} sources · {s.pct}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${s.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">{s.examples}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-100/60 dark:bg-white/[0.03] border border-gray-200/60 dark:border-gray-800 rounded-xl">
            <div className="flex items-start gap-3">
              <Database className="w-4 h-4 text-crimson mt-0.5 shrink-0" />
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                All sources are accessible via the <strong className="text-gray-800 dark:text-gray-200">Source Data</strong> page, organized by pillar with type badges, publisher attribution, and direct URLs.
              </p>
            </div>
          </div>
        </motion.section>

        {/* §3 — Verification Framework */}
        <motion.section {...fade(0.1)} className="mb-16">
          <SectionNumber n="3" />
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">Verification Framework</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Every factual claim undergoes a three-step verification protocol before inclusion:
          </p>

          <div className="space-y-6">
            {verificationSteps.map((v) => (
              <div key={v.step} className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-crimson/5 dark:bg-crimson/5 border border-crimson/10 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-crimson" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-[10px] font-mono font-bold text-crimson tracking-widest">{v.step}</span>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">{v.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* §4 — Source Classification */}
        <motion.section {...fade(0.1)} className="mb-16">
          <SectionNumber n="4" />
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">Source Classification Criteria</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Each source is tagged with a type based on the following criteria:
          </p>

          <div className="overflow-hidden border border-gray-200 dark:border-gray-800 rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-white/[0.02] border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 dark:text-white">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 dark:text-white">Criteria</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-100 dark:border-gray-800/50">
                  <td className="px-4 py-3"><span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded">Govt</span></td>
                  <td className="px-4 py-3">Published by a central/state government body, statutory authority, or constitutional office (CAG, NITI Aayog, Finance Commission, RBI, GPCB).</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800/50">
                  <td className="px-4 py-3"><span className="px-2 py-0.5 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold rounded">Media</span></td>
                  <td className="px-4 py-3">Published by a recognized news organization with editorial standards. Includes investigative reports, news analyses, and data journalism.</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800/50">
                  <td className="px-4 py-3"><span className="px-2 py-0.5 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold rounded">Academic</span></td>
                  <td className="px-4 py-3">Peer-reviewed publications, university research papers, or reports from recognized research institutions (RIS, WRI, LANCET).</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800/50">
                  <td className="px-4 py-3"><span className="px-2 py-0.5 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded">Industry</span></td>
                  <td className="px-4 py-3">Domain-specific knowledge bases, industry associations, company filings, or sector monitoring platforms.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded">Legal</span></td>
                  <td className="px-4 py-3">Court rulings, Supreme Court/High Court orders, statutory audit observations, or legislative references.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* §5 — Limitations & Bias */}
        <motion.section {...fade(0.1)} className="mb-16">
          <SectionNumber n="5" />
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">Limitations & Bias Acknowledgment</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Intellectual honesty requires acknowledging the boundaries of this work:
          </p>

          <div className="space-y-3">
            {limitations.map((lim, i) => (
              <div key={i} className="flex gap-3 p-4 bg-gray-100/50 dark:bg-white/[0.02] border border-gray-200/50 dark:border-gray-800/50 rounded-xl">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{lim}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* §6 — Citation Standard */}
        <motion.section {...fade(0.1)}>
          <SectionNumber n="6" />
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">Citation Standard</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            All pillar pages use inline footnote markers <span className="text-crimson font-mono text-xs">[1]</span> <span className="text-crimson font-mono text-xs">[2]</span> linking to a numbered <strong className="text-gray-800 dark:text-gray-200">Sources</strong> section at the bottom of each page. Every source includes:
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <FileText className="w-4 h-4 text-gray-400 dark:text-gray-600 shrink-0 mt-0.5" />
              <span>Full title of the article, report, or document</span>
            </li>
            <li className="flex items-start gap-2">
              <FileText className="w-4 h-4 text-gray-400 dark:text-gray-600 shrink-0 mt-0.5" />
              <span>Publisher or platform name</span>
            </li>
            <li className="flex items-start gap-2">
              <FileText className="w-4 h-4 text-gray-400 dark:text-gray-600 shrink-0 mt-0.5" />
              <span>Direct clickable URL to the original source</span>
            </li>
          </ul>
        </motion.section>

        {/* §7 — Phase 3 Unaudited Districts */}
        <motion.section {...fade(0.1)} className="mt-16">
          <SectionNumber n="7" />
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">Phase 3: Unaudited District Protocol</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            For the 16 districts currently pending a deep audit, preliminary vulnerability matrices are constructed using predictive gap-analysis. This involves extrapolating localized risk from state-wide aggregates, using satellite telemetry for crop and environmental distress mapping, and leveraging spatial proxy data. Full factual grounding is marked as <strong className="text-gray-900 dark:text-white">Pending Synthesis</strong> until primary RTI responses, governmental dataset validations, and empirical field reports complete the verification pipeline.
          </p>
        </motion.section>

        {/* §8 — Break Simulator Methodology */}
        <motion.section {...fade(0.1)} id="simulator" className="mt-20">
          <div className="flex items-center gap-2 text-crimson text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sliders className="w-4 h-4" />
            <span>Stress-Test Engine</span>
          </div>
          <SectionNumber n="8" />
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-3 leading-tight">Break Simulator — How the math works</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            The <a href="/simulator" className="text-crimson hover:underline font-semibold">Break Simulator</a> is a deterministic stress-test, not a forecast. There is no randomness, no Monte Carlo, no machine-learned model. Every number you see is the output of a small set of cited multiplications. This section documents every coefficient, where it comes from, and why it&apos;s shaped that way.
          </p>

          {/* §8.1 What a "lever" is */}
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-3 flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold text-crimson tracking-widest">8.1</span>
            What a &ldquo;lever&rdquo; is
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            A lever is one shock — a real, documented disruption like &ldquo;Russian crude supply cut&rdquo;, &ldquo;Mundra port closed for N days&rdquo;, &ldquo;migrant violence festival period&rdquo;, &ldquo;Versova subsea cable severance&rdquo;. There are <strong className="text-gray-900 dark:text-white">20 levers</strong> grouped into four research streams:
          </p>
          <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 mb-4 ml-1">
            <li><strong className="text-gray-900 dark:text-white">Materials</strong> — Russian crude, Chinese APIs, Dahej LNG, solar PV imports, pharma single-points-of-failure</li>
            <li><strong className="text-gray-900 dark:text-white">Physical</strong> — Mundra closure, Narmada deficit, Tapi flooding Surat, heatwave + AQI black swan, Saurashtra bridge collapses</li>
            <li><strong className="text-gray-900 dark:text-white">Human</strong> — migrant violence, diamond-export collapse, textile-export collapse, structural discrimination cascade, Saurashtra reverse migration</li>
            <li><strong className="text-gray-900 dark:text-white">Frontier</strong> — Versova cable severance, China green-tech shock, BT cotton collapse, Saurashtra/Kutch monsoon failure</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Each lever carries a fixed schema: a single canonical source, per-pillar derivation arithmetic, named populations affected, named districts affected with reasons, a 4–7 step time-bucketed cascade chain, a real historical analogue with recovery time, and a buffer-stock estimate (&ldquo;time to first failure&rdquo;).
          </p>

          {/* §8.2 The core formula */}
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-3 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-crimson" />
            <span className="text-[11px] font-mono font-bold text-crimson tracking-widest">8.2</span>
            The core formula
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            For each pillar a lever touches, the disruption % at <em>full lever pull</em> (slider at max, toggle on) is:
          </p>
          <div className="p-4 bg-gray-900 dark:bg-black rounded-xl mb-4 overflow-x-auto">
            <code className="font-mono text-sm text-amber-300 whitespace-pre">
              {`pillar_result_% = asset_share × dependency_weight × propagation_factor × 100`}
            </code>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            Three factors. Each one is cited in the lever data file:
          </p>
          <div className="space-y-3 mb-4">
            <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
              <p className="font-semibold text-gray-900 dark:text-white mb-1">Asset share <span className="text-xs text-gray-400 ml-2">(typically 0.0 – 1.0)</span></p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">What fraction of the pillar&apos;s critical asset base is exposed to this shock. Example: <em>Russian crude → Materials</em> uses an asset share of 0.56, the weighted average of RIL Jamnagar&apos;s Russian intake (~36%) and Nayara Vadinar&apos;s (~70%) — both directly cited from the Al Jazeera and Business Standard 2025 reports.</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
              <p className="font-semibold text-gray-900 dark:text-white mb-1">Dependency weight <span className="text-xs text-gray-400 ml-2">(typically 0.5 – 1.0)</span></p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">How load-bearing that asset is to the pillar. A refinery feedstock cut hits Materials at weight 0.85 because petrochem cracker output drops near-linearly with feed availability. A truckers strike hits Materials at weight ~0.4 because there&apos;s rail substitution at the margin.</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
              <p className="font-semibold text-gray-900 dark:text-white mb-1">Propagation factor <span className="text-xs text-gray-400 ml-2">(typically 1.0 – 1.5)</span></p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Multiplier for second-order effects within the same pillar — supplier concentration, lack of substitutes, no strategic reserve. A propagation of 1.4 means &ldquo;one unit of asset loss converts to 1.4 units of pillar damage because the rest of the system can&apos;t absorb it.&rdquo;</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            The product is capped at 100. The result you see in the impact bars is the <strong className="text-gray-900 dark:text-white">linear interpolation</strong> of this headline %, scaled by current lever value: a slider at 50/100 yields 0.5 × result; a toggle off yields 0.
          </p>

          {/* §8.3 Why values, not just signals */}
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-3">
            <span className="text-[11px] font-mono font-bold text-crimson tracking-widest mr-2">8.3</span>
            Why concrete %s, not vague signals
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Every factor in the &ldquo;Why?&rdquo; popover is anchored to a published number — a Kpler tanker share, a CAG audit objection, a Reuters/Reuters Business Standard report, a TRAI / NPCIL filing, a peer-reviewed dependency study. The simulator does <strong className="text-gray-900 dark:text-white">not</strong> hallucinate magnitudes. Where a citation gap exists (rare) the lever carries an explicit <code className="font-mono text-xs bg-gray-100 dark:bg-dark-bg px-1 rounded">pendingData</code> flag and the map shows an &ldquo;Estimates pending data&rdquo; tag.
          </p>

          {/* §8.4 Aggregation */}
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-3">
            <span className="text-[11px] font-mono font-bold text-crimson tracking-widest mr-2">8.4</span>
            Aggregation across multiple active levers
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            Per-pillar contributions sum linearly across active levers, then cap at 100%. So if Russian crude contributes 33% to Materials and Chinese APIs contributes 24%, Materials reads 57%. If both are pulled to the max and a third lever pushes the sum to 112%, the bar caps at 100% and the popover shows the cumulative arithmetic so you can see what got truncated.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            This is intentionally additive, not multiplicative. The intuition: shocks compound, they don&apos;t cancel. Two simultaneous chokeholds on the same pillar are worse than either alone, even if neither alone is 100%.
          </p>

          {/* §8.5 Districts */}
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-3 flex items-center gap-2">
            <Map className="w-4 h-4 text-crimson" />
            <span className="text-[11px] font-mono font-bold text-crimson tracking-widest">8.5</span>
            How the district heatmap is computed
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            Each lever names primary districts with reasons (Russian crude → Jamnagar &ldquo;RIL SEZ + Sikka port&rdquo;, Devbhumi Dwarka &ldquo;Nayara directly sanctioned&rdquo;, Bharuch &ldquo;Dahej cracker feedstock&rdquo;…). Primary districts take the full hit. The rest of Gujarat absorbs a <strong className="text-gray-900 dark:text-white">15% statewide ripple</strong> of that hit — the rationale is that no district is fully insulated from another&apos;s shock once you account for inter-district labor flows, fiscal transfers, and supply-chain bridges.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            The map tooltip shows the top three contributing levers per district so you can see which shock dominates which place. The 15% ripple is a fixed coefficient — chosen because the 2018 Surat exodus, the 2023 Cyclone Biparjoy, and the 2026 Morbi gas crisis each propagated economic damage to roughly 5–7 non-primary districts at a fraction of the primary intensity. 0.15 was the median fraction across those three documented events.
          </p>

          {/* §8.6 GDP / Jobs scaling */}
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-3">
            <span className="text-[11px] font-mono font-bold text-crimson tracking-widest mr-2">8.6</span>
            GDP at risk · Jobs at risk
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            Each lever carries two scalars: <code className="font-mono text-xs bg-gray-100 dark:bg-dark-bg px-1 rounded">gdpCrorePerUnit</code> and <code className="font-mono text-xs bg-gray-100 dark:bg-dark-bg px-1 rounded">jobsPerUnit</code>. &ldquo;Per unit&rdquo; means per slider-point or per active toggle.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            For Russian crude at 1100 ₹crore/unit and the slider at 60%, GDP at risk reads ₹66,000 cr. The 1100 figure is back-calculated from the 2018-19 Iranian phase-out: India&apos;s refining sector lost ~$8 bn (~₹56,000 cr) when Iranian intake went from 23.5 MMT to zero — proportionally 23 MMT / 100% pull ≈ 0.23 MMT per slider-point, valued at the 5-year average crude/petchem GRM gap. Numbers like these are stress-test ceilings, not point forecasts.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Jobs scale similarly. The 2,600 jobs/unit for Russian crude lever combines RIL+Nayara direct (~73k workers total, ~73 jobs per slider-point) with the trucker + petchem-downstream multiplier (~26x) typical of Indian refinery employment studies (Kpler/IBEF).
          </p>

          {/* §8.7 Time to first failure */}
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-crimson" />
            <span className="text-[11px] font-mono font-bold text-crimson tracking-widest">8.7</span>
            Time to first failure
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            For levers where a buffer stock exists (oil reserves, LNG terminal storage, polysilicon at Mundra, bonded-warehouse modules), we publish the <em>commercial + strategic days</em> until the first downstream consumer feels the cut. Russian crude is ~25–30 days (5.33 MMT PPAC strategic reserve + ~17–22 days commercial). Chinese APIs is ~75–90 days (typical pharma raw-material cycle). The headline TTFF stat in the simulator is the <strong className="text-gray-900 dark:text-white">minimum</strong> across all active levers — i.e. the first thing that breaks.
          </p>

          {/* §8.8 Populations */}
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-crimson" />
            <span className="text-[11px] font-mono font-bold text-crimson tracking-widest">8.8</span>
            Named populations &mdash; not abstract counts
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            Each lever carries a list of <em>named</em> populations: not &ldquo;migrant workers&rdquo; but &ldquo;UP/Bihar silicosis-exposed agate workers in Khambhat&rdquo;; not &ldquo;diamond workers&rdquo; but &ldquo;Saurashtra Patel polishers in Surat-Bhavnagar-Amreli (~80–90% locals, NOT migrants)&rdquo;. Headcounts are sourced from the same documents that anchor the lever (DWUG, ThePrint, Scroll, Federal, Rapaport).
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Multi-lever scenarios <strong className="text-gray-900 dark:text-white">de-duplicate</strong> by label + locality so the same Surat polisher cohort doesn&apos;t double-count when both the diamond-collapse and reverse-migration levers fire. Ethnicity badges (Local · Saurashtra Patel vs Migrant) are explicit — the project is opinionated about this distinction because conflating the two erases the actual demographic of, e.g., the 71 Surat suicides.
          </p>

          {/* §8.9 Education cascade */}
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-3 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-crimson" />
            <span className="text-[11px] font-mono font-bold text-crimson tracking-widest">8.9</span>
            Education is downstream-only
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Education has no slider. There is no &ldquo;break education&rdquo; lever because schooling collapse in Gujarat is always a downstream signal of an upstream economic or violence shock. Instead, the Education Cascade panel reads from currently-active levers and surfaces specific narratives: the 2,356 SLCs from Surat schools (Nov 2024 – May 2025), the documented Jagdish Babariya (14) dropout case, the ~25% migrant share in Surat municipal schools that empties within a single news cycle when the migrant-violence lever fires. These narratives appear only when their trigger lever is active.
          </p>

          {/* §8.10 What it is not */}
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-3">
            <span className="text-[11px] font-mono font-bold text-crimson tracking-widest mr-2">8.10</span>
            What this is not
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            <li className="flex gap-2"><span className="text-crimson">×</span> Not a probabilistic forecast. There is no &ldquo;chance of this happening&rdquo;. Every lever is either pulled or not.</li>
            <li className="flex gap-2"><span className="text-crimson">×</span> Not a Monte Carlo simulation. Outputs are deterministic given the same inputs.</li>
            <li className="flex gap-2"><span className="text-crimson">×</span> Not policy-prescriptive. The simulator surfaces breakage; the policy response sits in the pillar pages and the Confrontation page.</li>
            <li className="flex gap-2"><span className="text-crimson">×</span> Not real-time. Coefficients are anchored to documents at the cited dates and are reviewed when major sources publish revisions.</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            The point of the simulator is not to predict — it is to make the <em>structure</em> of dependence visible. If a single slider can move five pillars at once, that&apos;s the simulator working as designed: it&apos;s the dependency you should already be worried about, made arithmetic.
          </p>

          {/* §8.11 Source of truth */}
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-3">
            <span className="text-[11px] font-mono font-bold text-crimson tracking-widest mr-2">8.11</span>
            Source of truth &amp; reproducibility
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            All 20 lever specifications, including every factor / weight / propagation coefficient, every named population headcount, every cascade step, every historical analogue, and every source URL, are open in the project repository under <code className="font-mono text-xs bg-gray-100 dark:bg-dark-bg px-1 rounded">src/data/_fragments/</code>. The engine that consumes them is in <code className="font-mono text-xs bg-gray-100 dark:bg-dark-bg px-1 rounded">src/data/simulatorCoefficients.js</code>. There is nothing computed server-side; the simulator runs entirely in the browser and is fully inspectable.
          </p>
        </motion.section>

      </div>
    </main>
  )
}

function SectionNumber({ n }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="text-[11px] font-mono font-bold text-crimson tracking-widest">§{n}</span>
      <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
    </div>
  )
}
