import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Figure } from './_shared/Figure'
import { CHART_TYPOGRAPHY } from './_shared/tokens'
import { buildRankedSummary } from './_shared/srSummary'

const DEFAULT_PALETTE = ['#991B1B', '#DC2626', '#EF4444', '#F59E0B', '#EAB308', '#16A34A', '#3B82F6', '#6B7280']

function squarify(data, x, y, w, h) {
  const total = data.reduce((s, d) => s + d.value, 0)
  if (total === 0 || data.length === 0) return []

  const items = [...data].sort((a, b) => b.value - a.value)
  const result = []

  let cx = x
  let cy = y
  let cw = w
  let ch = h

  let i = 0
  while (i < items.length) {
    const remainingTotal = items.slice(i).reduce((s, d) => s + d.value, 0)
    const horizontal = cw >= ch
    const sliceSize = horizontal ? ch : cw
    let row = []
    let rowSum = 0
    let bestRatio = Infinity

    for (let j = i; j < items.length; j++) {
      const candidate = [...row, items[j]]
      const candidateSum = rowSum + items[j].value
      const sliceLen = (candidateSum / remainingTotal) * (horizontal ? cw : ch)
      const minVal = Math.min(...candidate.map((d) => d.value))
      const maxVal = Math.max(...candidate.map((d) => d.value))
      const minSide = (minVal / candidateSum) * sliceSize
      const maxSide = (maxVal / candidateSum) * sliceSize
      const ratio = Math.max(sliceLen / maxSide, minSide / sliceLen) || Infinity

      if (ratio > bestRatio && row.length > 0) {
        break
      }
      row = candidate
      rowSum = candidateSum
      bestRatio = ratio
    }

    const sliceLen = (rowSum / remainingTotal) * (horizontal ? cw : ch)
    let offset = 0
    for (const item of row) {
      const itemSide = (item.value / rowSum) * sliceSize
      if (horizontal) {
        result.push({ ...item, x: cx, y: cy + offset, w: sliceLen, h: itemSide })
      } else {
        result.push({ ...item, x: cx + offset, y: cy, w: itemSide, h: sliceLen })
      }
      offset += itemSide
    }

    if (horizontal) {
      cx += sliceLen
      cw -= sliceLen
    } else {
      cy += sliceLen
      ch -= sliceLen
    }

    i += row.length
  }

  return result
}

function TreemapInner({ data, unit = '', valueFormatter, title, caption, height = 360 }) {
  const W = 800
  const H = height
  const tiles = useMemo(() => squarify(data, 0, 0, W, H), [data])

  const total = useMemo(() => data.reduce((s, d) => s + d.value, 0), [data])
  const ariaSummary = buildRankedSummary(data, unit)

  const fmt = valueFormatter || ((v) => `${v}${unit}`)

  return (
    <Figure title={title} caption={caption} ariaLabel={`Treemap: ${title || ''}. ${ariaSummary}`} srSummary={ariaSummary}>
      <div className="w-full">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: H }}>
          {tiles.map((t, i) => {
            const color = t.color || DEFAULT_PALETTE[i % DEFAULT_PALETTE.length]
            const area = t.w * t.h
            const showLabel = area > 6000
            const showValue = area > 9000
            const sharePct = ((t.value / total) * 100).toFixed(0)
            return (
              <motion.g
                key={t.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.04 }}
                style={{ transformOrigin: `${t.x + t.w / 2}px ${t.y + t.h / 2}px` }}
              >
                <rect
                  x={t.x}
                  y={t.y}
                  width={t.w - 2}
                  height={t.h - 2}
                  rx={6}
                  fill={color}
                  fillOpacity={0.92}
                />
                {showLabel && (
                  <text
                    x={t.x + 12}
                    y={t.y + 24}
                    fill="white"
                    fontSize={Math.min(18, Math.max(12, Math.sqrt(area) / 8))}
                    fontWeight={700}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  >
                    {t.name}
                  </text>
                )}
                {showValue && (
                  <text
                    x={t.x + 12}
                    y={t.y + 48}
                    fill="white"
                    fillOpacity={0.85}
                    fontSize={Math.min(14, Math.max(10, Math.sqrt(area) / 12))}
                    fontWeight={500}
                    fontFamily={CHART_TYPOGRAPHY.fontFamily}
                  >
                    {fmt(t.value)} <tspan fillOpacity={0.7}>· {sharePct}%</tspan>
                  </text>
                )}
              </motion.g>
            )
          })}
        </svg>

        {/* Side legend for tiles too small to label */}
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs">
          {tiles.map((t, i) => {
            const area = t.w * t.h
            if (area > 6000) return null
            const color = t.color || DEFAULT_PALETTE[i % DEFAULT_PALETTE.length]
            return (
              <li key={t.name} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm shrink-0" style={{ background: color }} aria-hidden="true" />
                <span className="text-gray-600">{t.name}</span>
                <span className="text-gray-900 font-mono font-semibold tabular-nums">{fmt(t.value)}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </Figure>
  )
}

export const Treemap = memo(TreemapInner)
export default Treemap
