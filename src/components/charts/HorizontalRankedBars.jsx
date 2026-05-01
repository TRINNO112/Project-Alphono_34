import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY, CHART_GEOMETRY } from './_shared/tokens'
import { buildRankedSummary } from './_shared/srSummary'

function HorizontalRankedBarsInner({
  data,
  unit = '',
  accentColor = '#3B82F6',
  highlightColor = CHART_COLORS.accent,
  annotations = [],
  title,
  caption,
  sortDescending = true,
}) {
  const sorted = useMemo(() => {
    if (!sortDescending) return data
    return [...data].sort((a, b) => b.value - a.value)
  }, [data, sortDescending])

  const max = useMemo(() => Math.max(...data.map((d) => d.value)) * 1.05, [data])

  const labelWidth = 150
  const valueWidth = 70
  const rowH = CHART_GEOMETRY.rowHeight + 4

  const ariaSummary = buildRankedSummary(sorted, unit)

  const annotationByName = useMemo(() => {
    const map = {}
    annotations.forEach((a) => { map[a.name] = a.text })
    return map
  }, [annotations])

  return (
    <Figure title={title} caption={caption} ariaLabel={`Horizontal ranked bars: ${title || ''}. ${ariaSummary}`} srSummary={ariaSummary}>
      <div className="w-full">
        <ul>
          {sorted.map((row, i) => {
            const widthPct = (row.value / max) * 100
            const color = row.highlight ? highlightColor : accentColor
            const annotation = annotationByName[row.name]
            return (
              <li
                key={row.name}
                className="grid items-center"
                style={{
                  gridTemplateColumns: `${labelWidth}px 1fr ${valueWidth}px`,
                  height: rowH,
                  gap: CHART_GEOMETRY.gutter,
                }}
              >
                <span
                  className="truncate text-right font-semibold"
                  style={{
                    color: row.highlight ? highlightColor : CHART_TYPOGRAPHY.labelColor,
                    fontSize: CHART_TYPOGRAPHY.labelFontSize,
                    fontFamily: CHART_TYPOGRAPHY.fontFamily,
                  }}
                  title={row.name}
                >
                  {row.name}
                </span>
                <div className="relative h-full flex items-center">
                  <motion.div
                    className="rounded-r-md"
                    style={{
                      height: 14,
                      background: color,
                      opacity: row.highlight ? 1 : 0.85,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${widthPct}%` }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: 0.05 + i * 0.05, ease: 'easeOut' }}
                  />
                  {annotation && (
                    <span
                      className="ml-2 text-[11px] font-semibold whitespace-nowrap"
                      style={{ color: highlightColor, fontFamily: CHART_TYPOGRAPHY.fontFamily }}
                    >
                      ← {annotation}
                    </span>
                  )}
                </div>
                <span
                  className="text-left tabular-nums font-mono font-semibold text-xs"
                  style={{
                    color: row.highlight ? highlightColor : CHART_TYPOGRAPHY.valueColor,
                    fontFamily: CHART_TYPOGRAPHY.fontFamily,
                  }}
                >
                  {row.value}{unit}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </Figure>
  )
}

export const HorizontalRankedBars = memo(HorizontalRankedBarsInner)
export default HorizontalRankedBars
