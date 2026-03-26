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
      <div>
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
