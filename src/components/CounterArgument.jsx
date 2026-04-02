import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle } from 'lucide-react'

export function CounterArgument({ argument, rebuttal }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-border my-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left column — What Supporters Say */}
        <div className="bg-green-50/50 dark:bg-green-950/20 p-6 md:p-8">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-sm uppercase tracking-widest font-semibold text-green-700 dark:text-green-400">
              What Supporters Say
            </span>
          </div>
          <p className="text-green-800 dark:text-green-300 leading-relaxed mt-4 italic font-serif text-lg">
            &ldquo;{argument}&rdquo;
          </p>
        </div>

        {/* Right column — The Data Shows */}
        <div className="bg-red-50/50 dark:bg-red-950/20 p-6 md:p-8">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            <span className="text-sm uppercase tracking-widest font-semibold text-red-700 dark:text-red-400">
              The Data Shows
            </span>
          </div>
          <p className="text-red-800 dark:text-red-300 leading-relaxed mt-4 text-lg">
            {rebuttal}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
