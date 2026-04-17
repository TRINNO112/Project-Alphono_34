import { memo } from 'react'
import { motion } from 'framer-motion'

function ComparisonTableInner({ title, columns, rows, highlightState = 'Gujarat' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-8"
    >
      {title && (
        <h4 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">{title}</h4>
      )}
      <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-dark-border bg-white/60 dark:bg-dark-surface/40 backdrop-blur-sm">
        <table className="w-full border-collapse">
          {title && <caption className="sr-only">{title}</caption>}
          <thead className="sticky top-0 z-10 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-sm">
            <tr className="border-b-2 border-crimson">
              <th scope="col" className="text-left py-3 px-4 text-xs uppercase tracking-widest text-crimson font-semibold font-sans">State</th>
              {columns.map((col) => (
                <th scope="col" key={col.key} className="text-left py-3 px-4 text-xs uppercase tracking-widest text-crimson font-semibold font-sans">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                aria-label={row.state === highlightState ? `${row.state} (highlighted)` : undefined}
                className={`border-b border-gray-200 dark:border-dark-border transition-colors ${
                  row.state === highlightState
                    ? 'bg-crimson/5 dark:bg-crimson/10'
                    : 'hover:bg-white/80 dark:hover:bg-dark-surface/60'
                }`}
              >
                <td className={`py-3 px-4 text-sm ${row.state === highlightState ? 'font-bold text-crimson' : 'font-semibold text-gray-900 dark:text-white'}`}>
                  {row.state}
                </td>
                {columns.map((col) => (
                  <td key={col.key} className={`py-3 px-4 text-sm ${row.state === highlightState ? 'font-bold text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export const ComparisonTable = memo(ComparisonTableInner)
