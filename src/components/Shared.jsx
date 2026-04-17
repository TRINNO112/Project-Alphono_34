import { memo, useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

export function Section({ icon, title, children, id }) {
  const sectionId = id || title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  return (
    <motion.section
      id={sectionId}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-8 scroll-mt-24"
    >
      <div className="flex items-center gap-5 border-b border-gray-300 dark:border-dark-border pb-6">
        <div className="p-4 bg-white dark:bg-dark-surface shadow-md dark:shadow-none rounded-2xl border border-gray-200 dark:border-dark-border">
          {icon}
        </div>
        <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white tracking-tight">{title}</h2>
      </div>
      <div className="space-y-8">
        {children}
      </div>
    </motion.section>
  )
}

function DataCardInner({ title, children, alert = false }) {
  return (
    <div className={`p-8 rounded-2xl border ${alert ? 'border-red-200 dark:border-red-900/40 bg-red-50/40 dark:bg-red-900/10' : 'border-gray-200 dark:border-dark-border bg-white/60 dark:bg-dark-surface/60'} backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300`}>
      <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">{title}</h3>
      {children}
    </div>
  )
}
export const DataCard = memo(DataCardInner)

function PendingDataBoxInner({ label = "Awaiting DeepSeek Data Injection" }) {
  return (
    <div className="mt-8 h-48 bg-gray-100 dark:bg-dark-surface/30 rounded-2xl border-2 border-dashed border-gray-300 dark:border-dark-border flex flex-col items-center justify-center gap-4">
      <span className="text-gray-400 dark:text-gray-500 font-semibold tracking-widest uppercase text-sm">{label}</span>
      <div className="w-48 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-crimson/60"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      </div>
    </div>
  )
}
export const PendingDataBox = memo(PendingDataBoxInner)

export function Ref({ n }) {
  return (
    <sup className="text-crimson cursor-help font-bold text-xs ml-0.5 hover:underline">
      <a href={`#ref-${n}`} aria-label={`Citation ${n}`}>[{n}]</a>
    </sup>
  )
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 ml-2 px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider transition-all hover:bg-gray-200 dark:hover:bg-dark-bg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 shrink-0"
      title="Copy URL"
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-green-500" />
          <span className="text-green-500">Copied</span>
        </>
      ) : (
        <Copy className="w-3 h-3" />
      )}
    </button>
  )
}

export function SourceList({ sources }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-24 pt-12 border-t border-gray-300 dark:border-dark-border"
    >
      <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8">Sources & References</h2>
      <ol className="space-y-4 list-none">
        {sources.map((s, i) => (
          <li key={i} id={`ref-${i + 1}`} className="flex gap-4 text-sm leading-relaxed group">
            <span className="text-crimson font-bold min-w-[2rem] text-right">[{i + 1}]</span>
            <div>
              <span className="text-gray-700 dark:text-gray-300">{s.title}</span>
              {s.publication && <span className="text-gray-500 dark:text-gray-500 italic"> — {s.publication}</span>}
              {s.url && (
                <span className="flex items-center gap-0 mt-1">
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-crimson hover:underline break-all">
                    {s.url}
                  </a>
                  <CopyButton text={s.url} />
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </motion.section>
  )
}

const STAT_COLOR_MAP = {
  crimson: "text-crimson",
  red: "text-red-600 dark:text-red-500",
  green: "text-green-600 dark:text-green-500",
  blue: "text-blue-600 dark:text-blue-400",
  yellow: "text-yellow-600 dark:text-yellow-500",
  teal: "text-teal-600 dark:text-teal-400",
  purple: "text-purple-600 dark:text-purple-400",
}

function StatBoxInner({ value, label, color = "crimson" }) {
  return (
    <div className="flex-1 bg-white dark:bg-dark-bg p-6 rounded-2xl border border-gray-200 dark:border-dark-border">
      <div className={`${STAT_COLOR_MAP[color] || STAT_COLOR_MAP.crimson} font-bold text-3xl mb-2`}>{value}</div>
      <div className="text-gray-500 text-sm tracking-uppercase uppercase font-semibold">{label}</div>
    </div>
  )
}
export const StatBox = memo(StatBoxInner)
