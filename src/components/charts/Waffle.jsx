import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Figure } from './_shared/Figure'
import { CHART_COLORS, CHART_TYPOGRAPHY } from './_shared/tokens'

function WaffleInner({
  value,
  label,
  sublabel,
  fillColor = CHART_COLORS.danger,
  emptyColor = '#E5E7EB',
  columns = 10,
  size = 22,
  animate = true,
  showLabel = true,
}) {
  const cells = useMemo(() => {
    const total = columns * columns
    const filled = Math.round((value / 100) * total)
    return Array.from({ length: total }, (_, i) => i < filled)
  }, [value, columns])

  const ariaLabel = `${label}: ${value} percent. ${sublabel || ''}`

  return (
    <div role="img" aria-label={ariaLabel} className="inline-flex flex-col items-start gap-3">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, ${size}px)`,
          gap: 3,
        }}
      >
        {cells.map((filled, i) => (
          <motion.span
            key={i}
            className="rounded-sm block"
            style={{
              width: size,
              height: size,
              background: filled ? fillColor : emptyColor,
            }}
            initial={animate ? { opacity: 0, scale: 0.6 } : false}
            whileInView={animate ? { opacity: 1, scale: 1 } : undefined}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.18, delay: animate ? Math.min(0.4, i * 0.004) : 0 }}
          />
        ))}
      </div>
      {showLabel && (
        <div className="flex flex-col">
          <span
            className="text-2xl font-bold"
            style={{ color: fillColor, fontFamily: CHART_TYPOGRAPHY.fontFamily }}
          >
            {value}%
          </span>
          <span className="text-sm font-semibold text-gray-900">{label}</span>
          {sublabel && <span className="text-xs text-gray-500 mt-0.5">{sublabel}</span>}
        </div>
      )}
    </div>
  )
}

export const Waffle = memo(WaffleInner)

function WaffleGridInner({
  items,
  fillColor = CHART_COLORS.danger,
  emptyColor = '#E5E7EB',
  title,
  caption,
  columns = 3,
}) {
  const ariaSummary =
    items.map((it) => `${it.label} ${it.value}%`).join('; ') + '.'

  return (
    <Figure title={title} caption={caption} ariaLabel={`Waffle small-multiples: ${title || ''}. ${ariaSummary}`} srSummary={ariaSummary}>
      <div
        className="grid gap-x-8 gap-y-6 justify-items-center sm:justify-items-start"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))` }}
      >
        {items.map((it) => (
          <Waffle
            key={it.label}
            value={it.value}
            label={it.label}
            sublabel={it.sublabel}
            fillColor={it.fillColor || fillColor}
            emptyColor={emptyColor}
            size={18}
          />
        ))}
      </div>
    </Figure>
  )
}

export const WaffleGrid = memo(WaffleGridInner)
export default Waffle
