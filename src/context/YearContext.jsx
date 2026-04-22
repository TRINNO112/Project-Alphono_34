import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { YearContext, YEAR_MIN, YEAR_MAX, YEAR_DEFAULT } from './yearContextValue'

export function YearProvider({ children }) {
  const [year, setYear] = useState(YEAR_DEFAULT)
  const [playing, setPlaying] = useState(false)
  const tickRef = useRef(null)

  // Autoplay loop
  useEffect(() => {
    if (!playing) {
      if (tickRef.current) {
        clearInterval(tickRef.current)
        tickRef.current = null
      }
      return undefined
    }
    tickRef.current = setInterval(() => {
      setYear((y) => {
        if (y >= YEAR_MAX) {
          setPlaying(false)
          return YEAR_MAX
        }
        return y + 1
      })
    }, 1200)
    return () => {
      if (tickRef.current) clearInterval(tickRef.current)
    }
  }, [playing])

  const setYearClamped = useCallback((y) => {
    const n = Number(y)
    if (Number.isNaN(n)) return
    setYear(Math.max(YEAR_MIN, Math.min(YEAR_MAX, Math.round(n))))
  }, [])

  const togglePlay = useCallback(() => setPlaying((p) => !p), [])

  const reset = useCallback(() => {
    setPlaying(false)
    setYear(YEAR_DEFAULT)
  }, [])

  const value = useMemo(
    () => ({ year, setYear: setYearClamped, playing, togglePlay, reset, min: YEAR_MIN, max: YEAR_MAX }),
    [year, setYearClamped, playing, togglePlay, reset],
  )

  return <YearContext.Provider value={value}>{children}</YearContext.Provider>
}
