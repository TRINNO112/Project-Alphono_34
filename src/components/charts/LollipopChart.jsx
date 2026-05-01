import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY, CHART_GEOMETRY } from './_shared/tokens'
import { buildRankedSummary } from './_shared/srSummary'

function LollipopChartInner({
  data,
  title,
  caption,
  domain,
  accentColor = CHART_COLORS.accent,
  highlightColor = CHART_COLORS.dangerStrong,
  thresholdColor = CHART_COLORS.threshold,
  valueSuffix = '',
  thresholdLine,
  sortDescending = true,
  height,
}) {
  const sorted = useMemo(() => {
    if (!sortDescending) return data
    return [...data].sort((a, b) => b.value - a.value)
  }, [data, sortDescending])

  const computedDomain = useMemo(() => {
    if (domain) return domain
    const values = data.map((d) => d.value)
    if (thresholdLine) values.push(thresholdLine.value)
    const max = Math.max(...values)
    return [0, Math.ceil(max * 1.1)]
  }, [data, domain, thresholdLine])

  const labelWidth = 140
  const valueWidth = 72
  const trackPadding = 16
  const rowH = CHART_GEOMETRY.rowHeight
  const totalH = sorted.length * rowH + 36
  const svgH = height || totalH

  const trackX = labelWidth + trackPadding
  const trackEndX = `calc(100% - ${valueWidth}px)`

  const valueToPercent = (v) => {
    const [min, max] = computedDomain
    if (max === min) return 0
    return ((v - min) / (max - min)) * 100
  }

  const ariaSummary = buildRankedSummary(sorted, valueSuffix)

  return (
    <Figure title={title} caption={caption} ariaLabel={`Lollipop chart: ${title || ''}. ${ariaSummary}`} srSummary={ariaSummary}>
      <div className="relative w-full" style={{ height: svgH }}>
        {/* Threshold marker */}
        {thresholdLine && (
          <div
            className="absolute top-0 bottom-6"
            style={{
              left: `calc(${labelWidth + trackPadding}px + ${valueToPercent(thresholdLine.value)}% * (100% - ${labelWidth + trackPadding + valueWidth}px) / 100%)`,
              width: 1,
              borderLeft: `1.5px dashed ${thresholdLine.color || thresholdColor}`,
            }}
            aria-hidden="true"
          />
        )}

        <ul className="space-y-0">
          {sorted.map((row, i) => {
            const pct = valueToPercent(row.value)
            const color = row.highlight ? highlightColor : accentColor
            return (
              <li
                key={row.name}
                className="grid items-center"
                style={{
                  gridTemplateColumns: `${labelWidth}px 1fr ${valueWidth}px`,
                  height: rowH,
                  gap: trackPadding,
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
                  <div
                    className="absolute left-0 right-0 rounded-full"
                    style={{
                      top: '50%',
                      height: 1,
                      background: '#E5E7EB',
                      transform: 'translateY(-0.5px)',
                    }}
                  />
                  {/* lollipop stick */}
                  <motion.div
                    className="absolute left-0 rounded-full"
                    style={{
                      top: '50%',
                      height: 2,
                      background: color,
                      transformOrigin: 'left center',
                      transform: 'translateY(-1px)',
                    }}
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: 0.05 + i * 0.04, ease: 'easeOut' }}
                  />
                  {/* dot */}
                  <motion.div
                    className="absolute"
                    style={{
                      left: `${pct}%`,
                      top: '50%',
                      width: CHART_GEOMETRY.dotRadius * 2,
                      height: CHART_GEOMETRY.dotRadius * 2,
                      borderRadius: '50%',
                      background: color,
                      boxShadow: `0 0 0 3px ${color}22`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: row.value === 0 ? 0.5 : 1, opacity: row.value === 0 ? 0.4 : 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.04, ease: 'backOut' }}
                  />
                </div>
                <span
                  className="text-left tabular-nums font-mono font-semibold"
                  style={{
                    color: row.highlight ? highlightColor : CHART_TYPOGRAPHY.valueColor,
                    fontSize: CHART_TYPOGRAPHY.valueFontSize,
                    fontFamily: CHART_TYPOGRAPHY.fontFamily,
                  }}
                >
                  {row.value}{valueSuffix}
                </span>
              </li>
            )
          })}
        </ul>

        {/* Threshold legend */}
        {thresholdLine && (
          <div className="flex items-center gap-2 mt-3 ml-[140px] pl-4 text-xs" style={{ color: thresholdLine.color || thresholdColor }}>
            <span
              className="inline-block"
              style={{ width: 18, height: 0, borderTop: `1.5px dashed ${thresholdLine.color || thresholdColor}` }}
            />
            <span className="font-semibold">{thresholdLine.label}: {thresholdLine.value}{valueSuffix}</span>
          </div>
        )}
      </div>
    </Figure>
  )
}

export const LollipopChart = memo(LollipopChartInner)
export default LollipopChart
