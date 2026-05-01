import { memo } from 'react'
import { motion } from 'framer-motion'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY } from './_shared/tokens'

function ThresholdGaugeInner({
  value,
  safe,
  danger,
  max,
  unit = '',
  label,
  comparisonLabel,
  title,
  caption,
}) {
  const valuePct = Math.min(100, (value / max) * 100)
  const safePct = (safe / max) * 100
  const dangerPct = (danger / max) * 100

  const status =
    value >= danger ? 'critical' : value >= safe ? 'warning' : 'safe'
  const statusColor =
    status === 'critical' ? CHART_COLORS.dangerStrong : status === 'warning' ? CHART_COLORS.warning : CHART_COLORS.safe
  const statusText =
    status === 'critical' ? 'CRITICAL' : status === 'warning' ? 'WARNING' : 'SAFE'

  const ariaSummary = `${label}: ${value}${unit}, status ${statusText.toLowerCase()}. Safe limit ${safe}${unit}, danger threshold ${danger}${unit}.`

  return (
    <Figure title={title} caption={caption} ariaLabel={`Threshold gauge: ${ariaSummary}`} srSummary={ariaSummary}>
      <div className="w-full max-w-2xl mx-auto py-4">
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: CHART_TYPOGRAPHY.fontFamily }}>
            {label}
          </span>
          <span
            className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded"
            style={{ background: `${statusColor}22`, color: statusColor }}
          >
            {statusText}
          </span>
        </div>

        {/* Track */}
        <div className="relative h-6 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
          {/* Safe zone */}
          <div className="absolute inset-y-0 left-0" style={{ width: `${safePct}%`, background: `${CHART_COLORS.safe}33` }} />
          {/* Warning zone */}
          <div
            className="absolute inset-y-0"
            style={{
              left: `${safePct}%`,
              width: `${dangerPct - safePct}%`,
              background: `${CHART_COLORS.warning}44`,
            }}
          />
          {/* Critical zone */}
          <div
            className="absolute inset-y-0 right-0"
            style={{ width: `${100 - dangerPct}%`, background: `${CHART_COLORS.danger}33` }}
          />
          {/* Value pointer fill */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: statusColor, mixBlendMode: 'multiply' }}
            initial={{ width: 0 }}
            whileInView={{ width: `${valuePct}%` }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
        </div>

        {/* Threshold markers */}
        <div className="relative h-8 mt-1">
          <div className="absolute" style={{ left: `${safePct}%`, transform: 'translateX(-50%)' }}>
            <div className="h-3 w-px mx-auto" style={{ background: CHART_COLORS.safe }} />
            <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: CHART_COLORS.safe }}>
              Safe {safe}{unit}
            </span>
          </div>
          <div className="absolute" style={{ left: `${dangerPct}%`, transform: 'translateX(-50%)' }}>
            <div className="h-3 w-px mx-auto" style={{ background: CHART_COLORS.danger }} />
            <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: CHART_COLORS.danger }}>
              Danger {danger}{unit}
            </span>
          </div>
        </div>

        <div className="flex items-baseline gap-3 mt-4">
          <span className="text-4xl font-bold" style={{ color: statusColor, fontFamily: CHART_TYPOGRAPHY.fontFamily }}>
            {value}{unit}
          </span>
          {comparisonLabel && (
            <span className="text-sm text-gray-500">{comparisonLabel}</span>
          )}
        </div>
      </div>
    </Figure>
  )
}

export const ThresholdGauge = memo(ThresholdGaugeInner)
export default ThresholdGauge
