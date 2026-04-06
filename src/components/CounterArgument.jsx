import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle } from 'lucide-react'

export function CounterArgument({ argument, rebuttal, stats }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-border my-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left column — The Optimist's Narrative */}
        <div className="bg-green-50/50 dark:bg-green-950/20 p-6 md:p-8 relative">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-sm uppercase tracking-widest font-semibold text-green-700 dark:text-green-400">
              The Optimist
            </span>
          </div>
          <div className="bg-white/60 dark:bg-dark-surface/40 rounded-xl p-5 border border-green-200/50 dark:border-green-900/30 relative">
            {/* Speech bubble tail */}
            <div className="absolute -top-2 left-6 w-4 h-4 bg-white/60 dark:bg-dark-surface/40 border-l border-t border-green-200/50 dark:border-green-900/30 transform rotate-45" />
            <p className="text-green-800 dark:text-green-300 leading-relaxed italic font-serif text-lg relative z-10">
              &ldquo;{argument}&rdquo;
            </p>
          </div>
        </div>

        {/* Right column — The Data Strikes Back */}
        <div className="bg-red-50/50 dark:bg-red-950/20 p-6 md:p-8 border-l-0 md:border-l-2 border-t-2 md:border-t-0 border-crimson/20">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            <span className="text-sm uppercase tracking-widest font-semibold text-red-700 dark:text-red-400">
              The Data
            </span>
          </div>

          {/* Stat callouts — if provided */}
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                  className="px-3 py-2 bg-red-100/60 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 rounded-lg"
                >
                  <span className="text-lg font-bold text-crimson">{s.value}</span>
                  <span className="text-[10px] text-red-700 dark:text-red-400 uppercase tracking-wider font-semibold ml-1.5">{s.label}</span>
                </motion.div>
              ))}
            </div>
          )}

          <p className="text-red-800 dark:text-red-300 leading-relaxed text-lg">
            {rebuttal}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
