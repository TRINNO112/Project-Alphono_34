import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY } from './_shared/tokens'
import { buildSegmentSummary } from './_shared/srSummary'

const DEFAULT_PALETTE = [
  CHART_COLORS.dangerStrong,
  CHART_COLORS.danger,
  CHART_COLORS.warning,
  '#3B82F6',
  CHART_COLORS.neutral,
]

function StackedProgressInner({
  segments,
  total,
  unit = '%',
  intendedMarker,
  title,
  caption,
}) {
  const computedTotal = useMemo(
    () => total || segments.reduce((sum, s) => sum + s.value, 0),
    [segments, total]
  )

  const segmentsWithColor = useMemo(
    () => segments.map((s, i) => ({ ...s, color: s.color || DEFAULT_PALETTE[i % DEFAULT_PALETTE.length] })),
    [segments]
  )

  const ariaSummary = buildSegmentSummary(segments, unit)

  return (
    <Figure title={title} caption={caption} ariaLabel={`Stacked allocation: ${title || ''}. ${ariaSummary}`} srSummary={ariaSummary}>
      <div className="w-full">
        {/* Track */}
        <div className="relative h-14 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex">
          {segmentsWithColor.map((seg, i) => {
            const widthPct = (seg.value / computedTotal) * 100
            return (
              <motion.div
                key={seg.label}
                className="h-full flex items-center justify-center text-white text-xs font-bold relative group"
                style={{ background: seg.color, width: 0 }}
                initial={{ width: 0 }}
                whileInView={{ width: `${widthPct}%` }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
              >
                {widthPct >= 8 && (
                  <span className="px-2 truncate" style={{ fontFamily: CHART_TYPOGRAPHY.fontFamily }}>
                    {seg.value}{unit}
                  </span>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Intended marker */}
        {intendedMarker && (
          <div className="relative mt-1 h-6">
            <motion.div
              className="absolute"
              style={{
                left: `${(intendedMarker.value / computedTotal) * 100}%`,
                top: -28,
                width: 0,
                height: 26,
                borderLeft: `2px dashed ${CHART_COLORS.safe}`,
                transform: 'translateX(-1px)',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.1 }}
              aria-hidden="true"
            />
            <div
              className="absolute text-[10px] font-bold uppercase tracking-wider"
              style={{
                left: `${(intendedMarker.value / computedTotal) * 100}%`,
                color: CHART_COLORS.safe,
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
              }}
            >
              ↑ {intendedMarker.label}
            </div>
          </div>
        )}

        {/* Legend */}
        <ul className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
          {segmentsWithColor.map((seg) => (
            <li key={seg.label} className="flex items-center gap-2 text-xs">
              <span
                className="w-3 h-3 rounded-sm shrink-0"
                style={{ background: seg.color }}
                aria-hidden="true"
              />
              <span className="text-gray-600 truncate">{seg.label}</span>
              <span className="ml-auto font-mono tabular-nums font-semibold text-gray-900">
                {seg.value}{unit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Figure>
  )
}

export const StackedProgress = memo(StackedProgressInner)
export default StackedProgress
