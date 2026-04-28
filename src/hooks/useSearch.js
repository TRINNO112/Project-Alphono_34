import { useState, useMemo } from 'react'
import { searchIndex } from '../data/searchIndex'

/**
 * useSearch - Custom hook for search functionality
 * @returns {Object} { query, setQuery, results }
 * @returns {string} query - Current search query
 * @returns {Function} setQuery - Function to set search query
 * @returns {Array} results - Filtered search results
 */
export function useSearch() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return []

    const lowerQuery = query.toLowerCase()
    return searchIndex.filter((item) =>
      item.claim.toLowerCase().includes(lowerQuery) ||
      item.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery))
    )
  }, [query])

  return { query, setQuery, results }
}
