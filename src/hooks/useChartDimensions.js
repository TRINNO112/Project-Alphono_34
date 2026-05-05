import { useEffect, useRef, useState, useMemo } from 'react'

const DEFAULT_MARGINS = { top: 24, right: 24, bottom: 40, left: 56 }

/**
 * useChartDimensions — measures the parent container and returns a chart-friendly
 * dimensions object with bounded inner area (after subtracting margins).
 *
 * Usage:
 *   const [ref, dims] = useChartDimensions({ marginRight: 80 })
 *   <div ref={ref}>
 *     <svg width={dims.width} height={dims.height}>
 *       <g transform={`translate(${dims.margin.left}, ${dims.margin.top})`}>
 *         ...use dims.boundedWidth / dims.boundedHeight for scale ranges...
 *       </g>
 *     </svg>
 *   </div>
 */
export function useChartDimensions(passedSettings = {}) {
  const ref = useRef(null)
  const settings = useMemo(() => ({
    marginTop: DEFAULT_MARGINS.top,
    marginRight: DEFAULT_MARGINS.right,
    marginBottom: DEFAULT_MARGINS.bottom,
    marginLeft: DEFAULT_MARGINS.left,
    height: 400,
    ...passedSettings,
  }), [passedSettings])

  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (entry?.contentRect) setWidth(entry.contentRect.width)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const dims = useMemo(() => {
    const w = width || 640
    const h = settings.height
    const margin = {
      top: settings.marginTop,
      right: settings.marginRight,
      bottom: settings.marginBottom,
      left: settings.marginLeft,
    }
    return {
      width: w,
      height: h,
      margin,
      boundedWidth: Math.max(0, w - margin.left - margin.right),
      boundedHeight: Math.max(0, h - margin.top - margin.bottom),
    }
  }, [width, settings])

  return [ref, dims]
}
