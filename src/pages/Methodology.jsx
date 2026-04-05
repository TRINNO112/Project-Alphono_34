import { motion } from 'framer-motion'
import { BookOpen, Search, ShieldCheck, Scale, AlertTriangle, FileText, Database, CheckCircle } from 'lucide-react'
import SEO from '../components/SEO'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

const sourceBreakdown = [
  { type: "Government & Institutional", pct: 28, count: 46, color: "bg-blue-500", examples: "CAG Reports, NITI Aayog, Finance Commission, RBI, NPCIL, GPCB" },
  { type: "Investigative Journalism", pct: 35, count: 58, color: "bg-crimson", examples: "The Print, Scroll.in, IndiaSpend, Down To Earth, Business Standard" },
  { type: "Academic & Research", pct: 18, count: 30, color: "bg-purple-500", examples: "Peer-reviewed journals, RIS Discussion Papers, WHO/LANCET studies" },
  { type: "Industry & Domain Reports", pct: 12, count: 20, color: "bg-amber-500", examples: "Global Energy Monitor, Marine Insight, IBEF, World Nuclear Association" },
  { type: "Legal & Court Records", pct: 7, count: 11, color: "bg-emerald-500", examples: "Gujarat HC rulings, Supreme Court orders, CAG audit objections" },
]

const verificationSteps = [
  { step: "01", title: "Primary Source Identification", desc: "Every claim starts from a primary document — a government report, court filing, official dataset, or verified news report from an established publication.", icon: Search },
  { step: "02", title: "Cross-Reference Validation", desc: "Each data point is cross-referenced against at least two independent sources. Conflicting figures are flagged and the most conservative estimate is used.", icon: ShieldCheck },
  { step: "03", title: "Temporal Verification", desc: "All statistics are dated and version-tracked. When FY26 data supersedes FY25, the older figure is retired. No stale data is presented as current.", icon: CheckCircle },
]

const limitations = [
  "RTI responses pending for 3 districts — some granular data gaps exist in Kutch, Narmada, and Dahod district-level breakdowns.",
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
            This investigation employs a <strong className="text-gray-900 dark:text-white">mixed-methods structural dependency analysis</strong> — combining quantitative data extraction from government records with qualitative assessment drawn from investigative journalism, court proceedings, and field reporting.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            The core thesis — that Gujarat's industrial economy contains deep, under-examined structural vulnerabilities — is tested across <strong className="text-gray-900 dark:text-white">9 interdependent pillars</strong>: Infrastructure, Energy, Water, Labor, Fiscal Governance, Raw Materials, Education, Environment, and Migrant Discrimination.
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
            A total of <strong className="text-gray-900 dark:text-white">165 sources</strong> across 9 pillars were collected, verified, and cited. Sources are classified into five categories:
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
