import { useContext } from 'react'
import { YearContext } from './yearContextValue'

export function useYear() {
  const ctx = useContext(YearContext)
  if (!ctx) {
    throw new Error('useYear must be used inside <YearProvider>')
  }
  return ctx
}
