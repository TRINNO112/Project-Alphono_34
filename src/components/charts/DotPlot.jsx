import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY, CHART_GEOMETRY } from './_shared/tokens'
import { buildPairedSummary } from './_shared/srSummary'

function DotPlotInner({
  data,
  aLabel,
  bLabel,
  aColor = '#3B82F6',
  bColor = CHART_COLORS.danger,
  valueSuffix = '',
  badDirection = 'increase',
  title,
  caption,
}) {
  const domain = useMemo(() => {
    const all = data.flatMap((d) => [d.a, d.b])
    const max = Math.max(...all)
    const min = Math.min(...all)
    const pad = (max - min) * 0.15 || 1
    return [Math.max(0, min - pad), max + pad]
  }, [data])

  const valueToPct = (v) => ((v - domain[0]) / (domain[1] - domain[0])) * 100

  const labelWidth = 130
  const valueWidth = 140
  const rowH = CHART_GEOMETRY.rowHeight + 6

  const isBad = (a, b) => (badDirection === 'increase' ? b > a : b < a)

  const ariaSummary = buildPairedSummary(data, aLabel, bLabel, valueSuffix)

  return (
    <Figure title={title} caption={caption} ariaLabel={`Dot plot: ${title || ''}. ${ariaSummary}`} srSummary={ariaSummary}>
      <div className="w-full">
        {/* Legend */}
        <div className="flex items-center gap-5 mb-4 text-xs font-semibold">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: aColor }} aria-hidden="true" />
            <span style={{ color: CHART_TYPOGRAPHY.labelColor }}>{aLabel}</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: bColor }} aria-hidden="true" />
            <span style={{ color: CHART_TYPOGRAPHY.labelColor }}>{bLabel}</span>
          </span>
        </div>

        <ul>
          {data.map((row, i) => {
            const aPct = valueToPct(row.a)
            const bPct = valueToPct(row.b)
            const left = Math.min(aPct, bPct)
            const right = Math.max(aPct, bPct)
            const bad = isBad(row.a, row.b)
            const connectorColor = bad ? CHART_COLORS.danger : CHART_COLORS.safe
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
                  className="truncate text-right"
                  style={{
                    color: CHART_TYPOGRAPHY.labelColor,
                    fontSize: CHART_TYPOGRAPHY.labelFontSize,
                    fontFamily: CHART_TYPOGRAPHY.fontFamily,
                  }}
                  title={row.name}
                >
                  {row.name}
                </span>
                <div className="relative h-full flex items-center">
                  {/* baseline */}
                  <div className="absolute left-0 right-0 h-px bg-gray-200" style={{ top: '50%' }} aria-hidden="true" />
                  {/* connector */}
                  <motion.div
                    className="absolute"
                    style={{
                      top: '50%',
                      left: `${left}%`,
                      height: 3,
                      background: connectorColor,
                      transform: 'translateY(-1.5px)',
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${right - left}%` }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.05 }}
                  />
                  {/* dot a */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      left: `${aPct}%`,
                      top: '50%',
                      width: 14,
                      height: 14,
                      background: aColor,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: `0 0 0 3px ${aColor}22`,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.05, ease: 'backOut' }}
                  />
                  {/* dot b */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      left: `${bPct}%`,
                      top: '50%',
                      width: 14,
                      height: 14,
                      background: bColor,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: `0 0 0 3px ${bColor}22`,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.55 + i * 0.05, ease: 'backOut' }}
                  />
                </div>
                <span
                  className="text-right tabular-nums font-mono text-xs"
                  style={{ color: CHART_TYPOGRAPHY.valueColor, fontFamily: CHART_TYPOGRAPHY.fontFamily }}
                >
                  <span style={{ color: aColor }} className="font-semibold">{row.a}{valueSuffix}</span>
                  <span className="text-gray-400 mx-1">→</span>
                  <span style={{ color: bColor }} className="font-semibold">{row.b}{valueSuffix}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </Figure>
  )
}

export const DotPlot = memo(DotPlotInner)
export default DotPlot
