import { motion } from 'framer-motion'

export function Section({ icon, title, children }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-8"
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

export function DataCard({ title, children, alert = false }) {
  return (
    <div className={`p-8 rounded-2xl border ${alert ? 'border-red-200 dark:border-red-900/40 bg-red-50/40 dark:bg-red-900/10' : 'border-gray-200 dark:border-dark-border bg-white/60 dark:bg-dark-surface/60'} backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300`}>
      <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">{title}</h3>
      {children}
    </div>
  )
}

export function PendingDataBox({ label = "Awaiting DeepSeek Data Injection" }) {
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

export function Ref({ n }) {
  return (
    <sup className="text-crimson cursor-help font-bold text-xs ml-0.5 hover:underline">
      <a href={`#ref-${n}`}>[{n}]</a>
    </sup>
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
          <li key={i} id={`ref-${i + 1}`} className="flex gap-4 text-sm leading-relaxed">
            <span className="text-crimson font-bold min-w-[2rem] text-right">[{i + 1}]</span>
            <div>
              <span className="text-gray-700 dark:text-gray-300">{s.title}</span>
              {s.publication && <span className="text-gray-500 dark:text-gray-500 italic"> — {s.publication}</span>}
              {s.url && (
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="block text-crimson hover:underline break-all mt-1">
                  {s.url}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </motion.section>
  )
}

export function StatBox({ value, label, color = "crimson" }) {
  const colorMap = {
    crimson: "text-crimson",
    red: "text-red-600 dark:text-red-500",
    green: "text-green-600 dark:text-green-500",
    blue: "text-blue-600 dark:text-blue-400",
    yellow: "text-yellow-600 dark:text-yellow-500",
    teal: "text-teal-600 dark:text-teal-400",
    purple: "text-purple-600 dark:text-purple-400",
  }
  return (
    <div className="flex-1 bg-white dark:bg-dark-bg p-6 rounded-2xl border border-gray-200 dark:border-dark-border">
      <div className={`${colorMap[color] || colorMap.crimson} font-bold text-3xl mb-2`}>{value}</div>
      <div className="text-gray-500 text-sm tracking-uppercase uppercase font-semibold">{label}</div>
    </div>
  )
}
