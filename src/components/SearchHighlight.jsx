import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Mounts once inside <main>. Reads `location.state.searchQuery` (set by
 * SearchBar when a result is clicked) and, after the target page renders,
 * finds the first matching text in the main content area, wraps it in
 * <mark class="search-hit">, scrolls it into view, pulses it for ~3s,
 * then fades + unwraps.
 */
export default function SearchHighlight() {
  const location = useLocation()
  const searchQuery = location.state?.searchQuery
  const searchClaim = location.state?.searchClaim

  useEffect(() => {
    if (!searchQuery) return

    let mark = null
    let cleanupTimer = null
    let fadeTimer = null

    const needle = (searchClaim || searchQuery).trim().toLowerCase()
    if (!needle) return

    // Wait for the page content to mount + settle.
    const raf = requestAnimationFrame(() => {
      setTimeout(() => {
        mark = highlightFirstMatch(needle, searchQuery.trim().toLowerCase())
        if (mark) {
          mark.scrollIntoView({ behavior: 'smooth', block: 'center' })
          // Start fade-out after the 3-pulse animation finishes (~3.3s).
          fadeTimer = setTimeout(() => {
            mark?.classList.add('search-hit-fade')
          }, 3300)
          // Unwrap after the fade completes.
          cleanupTimer = setTimeout(() => {
            unwrap(mark)
            mark = null
          }, 4200)
        }
      }, 350)
    })

    return () => {
      cancelAnimationFrame(raf)
      if (fadeTimer) clearTimeout(fadeTimer)
      if (cleanupTimer) clearTimeout(cleanupTimer)
      if (mark) unwrap(mark)
    }
  }, [location.pathname, searchQuery, searchClaim])

  return null
}

function highlightFirstMatch(fullNeedle, shortNeedle) {
  const main = document.getElementById('main') || document.body
  if (!main) return null

  // Try the full claim first; if not found, fall back to the raw query.
  return findAndWrap(main, fullNeedle) || findAndWrap(main, shortNeedle)
}

function findAndWrap(root, needle) {
  if (!needle) return null

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT
      const p = node.parentElement
      if (!p) return NodeFilter.FILTER_REJECT
      const tag = p.tagName
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT
      if (p.closest('.search-hit')) return NodeFilter.FILTER_REJECT
      return NodeFilter.FILTER_ACCEPT
    },
  })

  let node = walker.nextNode()
  while (node) {
    const text = node.nodeValue
    const idx = text.toLowerCase().indexOf(needle)
    if (idx === -1) {
      node = walker.nextNode()
      continue
    }

    const before = text.slice(0, idx)
    const match = text.slice(idx, idx + needle.length)
    const after = text.slice(idx + needle.length)

    const mark = document.createElement('mark')
    mark.className = 'search-hit'
    mark.textContent = match

    const parent = node.parentNode
    if (!parent) return null

    if (before) parent.insertBefore(document.createTextNode(before), node)
    parent.insertBefore(mark, node)
    if (after) parent.insertBefore(document.createTextNode(after), node)
    parent.removeChild(node)

    return mark
  }
  return null
}

function unwrap(mark) {
  if (!mark || !mark.parentNode) return
  const parent = mark.parentNode
  const text = document.createTextNode(mark.textContent || '')
  parent.replaceChild(text, mark)
  // Merge adjacent text nodes for cleanliness.
  parent.normalize?.()
}
