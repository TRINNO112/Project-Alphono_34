import { useMemo } from 'react'
import { useYear } from '../context/useYear'
import { TIME_SERIES } from '../data/timeSeries'

/**
 * Resolve a time-series metric for the currently-selected year.
 *
 *   const v = useYearData('water', 'mehsanaExtractionPct')
 *
 * Falls back gracefully:
 *   - unknown pillar/metric  → returns undefined
 *   - year missing in series → nearest available year
 *
 * @param {string} pillar  key in TIME_SERIES (water/energy/materials/…)
 * @param {string} metric  key inside that pillar's series object
 * @returns {number | string | undefined}
 */
export function useYearData(pillar, metric) {
  const { year } = useYear()

  return useMemo(() => {
    const pillarData = TIME_SERIES[pillar]
    if (!pillarData) return undefined
    const series = pillarData[metric]
    if (!series) return undefined
    if (series[year] !== undefined) return series[year]
    // nearest-year fallback
    const years = Object.keys(series).map(Number).sort((a, b) => a - b)
    const nearest = years.reduce((prev, cur) =>
      Math.abs(cur - year) < Math.abs(prev - year) ? cur : prev, years[0])
    return series[nearest]
  }, [pillar, metric, year])
}

/**
 * Check whether a pillar has any registered time-series.
 * Used by YearScrubber to silently no-op on pages without data.
 */
export function hasTimeSeries(pillar) {
  return Boolean(TIME_SERIES[pillar])
}
