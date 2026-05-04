import { memo, useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from './Icons'

/**
 * Section - Animated section wrapper with icon and title
 *
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Icon element to display in section header
 * @param {string} props.title - Section title text
 * @param {React.ReactNode} props.children - Section content
 * @param {string} [props.id] - Optional section ID (auto-generated from title if not provided)
 * @returns {JSX.Element} The rendered section
 */
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
      <div className="flex items-center gap-5 border-b border-gray-300 pb-6">
        <div className="p-4 bg-white shadow-md rounded-2xl border border-gray-200">
          {icon}
        </div>
        <h2 className="text-4xl font-serif font-bold text-gray-900 tracking-tight">{title}</h2>
      </div>
      <div className="space-y-8">
        {children}
      </div>
    </motion.section>
  )
}

/**
 * DataCard - Card component for displaying data with optional alert styling
 *
 * @param {Object} props
 * @param {string} props.title - Card title
 * @param {React.ReactNode} props.children - Card content
 * @param {boolean} [props.alert=false] - Whether to show alert variant (red styling)
 * @returns {JSX.Element} The rendered data card
 */
function DataCardInner({ title, children, alert = false }) {
  return (
    <div className={`p-8 rounded-2xl border ${alert ? 'border-red-200 bg-red-50/40' : 'border-gray-200 bg-white/60'} backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300`}>
      <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">{title}</h3>
      {children}
    </div>
  )
}
export const DataCard = memo(DataCardInner)

function PendingDataBoxInner({ label = "Awaiting DeepSeek Data Injection" }) {
  return (
    <div className="mt-8 h-48 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-4">
      <span className="text-gray-400 font-semibold tracking-widest uppercase text-sm">{label}</span>
      <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
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

/**
 * Ref - Citation reference superscript that links to source
 *
 * @param {Object} props
 * @param {number} props.n - Citation number
 * @returns {JSX.Element} The rendered citation reference
 */
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
      className="inline-flex items-center gap-1 ml-2 px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider transition-all hover:bg-gray-200 text-gray-400 hover:text-gray-600 shrink-0"
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
      className="mt-24 pt-12 border-t border-gray-300"
    >
      <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Sources & References</h2>
      <ol className="space-y-4 list-none">
        {sources.map((s, i) => (
          <li key={i} id={`ref-${i + 1}`} className="flex gap-4 text-sm leading-relaxed group">
            <span className="text-crimson font-bold min-w-[2rem] text-right">[{i + 1}]</span>
            <div>
              <span className="text-gray-700">{s.title}</span>
              {s.publication && <span className="text-gray-500 italic"> — {s.publication}</span>}
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
  red: "text-red-600",
  green: "text-green-600",
  blue: "text-blue-600",
  yellow: "text-yellow-600",
  teal: "text-teal-600",
  purple: "text-purple-600",
}

/**
 * StatBox - Statistic display box with value and label
 *
 * @param {Object} props
 * @param {string|number} props.value - Statistic value to display
 * @param {string} props.label - Label text for the statistic
 * @param {string} [props.color="crimson"] - Color theme (crimson, red, green, blue, yellow, teal, purple)
 * @returns {JSX.Element} The rendered stat box
 */
function StatBoxInner({ value, label, color = "crimson" }) {
  return (
    <div className="flex-1 bg-white p-6 rounded-2xl border border-gray-200">
      <div className={`${STAT_COLOR_MAP[color] || STAT_COLOR_MAP.crimson} font-bold text-3xl mb-2`}>{value}</div>
      <div className="text-gray-500 text-sm tracking-uppercase uppercase font-semibold">{label}</div>
    </div>
  )
}
export const StatBox = memo(StatBoxInner)
