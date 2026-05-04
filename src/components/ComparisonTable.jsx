import { memo, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, ArrowDown, ChevronDown } from './Icons'

function ComparisonTableInner({ title, columns, rows, highlightState = 'Gujarat' }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })

  // Sort rows based on current sort configuration
  const sortedRows = useMemo(() => {
    if (!sortConfig.key) return rows

    const sorted = [...rows].sort((a, b) => {
      let aValue = a[sortConfig.key]
      let bValue = b[sortConfig.key]

      // Handle numeric values
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue
      }

      // Handle string values
      const aStr = String(aValue).toLowerCase()
      const bStr = String(bValue).toLowerCase()
      if (aStr < bStr) return sortConfig.direction === 'asc' ? -1 : 1
      if (aStr > bStr) return sortConfig.direction === 'asc' ? 1 : -1
      return 0
    })

    return sorted
  }, [rows, sortConfig])

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }))
  }

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <ChevronDown className="w-3 h-3 opacity-30" />
    return sortConfig.direction === 'asc' ? (
      <ArrowUp className="w-3 h-3 text-crimson" />
    ) : (
      <ArrowDown className="w-3 h-3 text-crimson" />
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-8"
    >
      {title && (
        <h4 className="text-xl font-serif font-bold text-gray-900 mb-6">{title}</h4>
      )}
      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-sm">
        <table className="w-full border-collapse min-w-[500px]">
          {title && <caption className="sr-only">{title}</caption>}
          <thead className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm">
            <tr className="border-b-2 border-crimson">
              <th
                scope="col"
                className="text-left py-3 px-4 text-xs uppercase tracking-widest text-crimson font-semibold font-sans cursor-pointer hover:bg-crimson/5 transition-colors select-none"
                onClick={() => handleSort('state')}
              >
                <div className="flex items-center gap-1">
                  State
                  {getSortIcon('state')}
                </div>
              </th>
              {columns.map((col) => (
                <th
                  scope="col"
                  key={col.key}
                  className="text-left py-3 px-4 text-xs uppercase tracking-widest text-crimson font-semibold font-sans cursor-pointer hover:bg-crimson/5 transition-colors select-none"
                  onClick={() => handleSort(col.key)}
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    {getSortIcon(col.key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, i) => (
              <tr
                key={i}
                aria-label={row.state === highlightState ? `${row.state} (highlighted)` : undefined}
                className={`border-b border-gray-200 transition-all duration-200 ${
                  row.state === highlightState
                    ? 'bg-crimson/5 shadow-inner'
                    : 'hover:bg-white/80 hover:scale-[1.01]'
                }`}
              >
                <td className={`py-3 px-4 text-sm ${row.state === highlightState ? 'font-bold text-crimson' : 'font-semibold text-gray-900'}`}>
                  {row.state}
                </td>
                {columns.map((col) => (
                  <td key={col.key} className={`py-3 px-4 text-sm ${row.state === highlightState ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2 text-right">
        Click column headers to sort
      </p>
    </motion.div>
  )
}

export const ComparisonTable = memo(ComparisonTableInner)
