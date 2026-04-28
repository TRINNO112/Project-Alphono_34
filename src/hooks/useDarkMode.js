import { useSyncExternalStore } from 'react'

/**
 * Subscribe to changes in the document element's class list
 * Used to detect dark mode changes
 */
function subscribeDarkMode(callback) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}

/**
 * Get the current dark mode state
 */
function getIsDark() {
  return document.documentElement.classList.contains('dark')
}

/**
 * Custom hook for dark mode state
 * Reads dark mode from document.documentElement.classList
 * Returns { isDark, toggleDarkMode }
 *
 * Note: This hook only reads the dark mode state. The toggle function
 * should be implemented by the component that manages the dark mode state
 * (typically by toggling the 'dark' class on document.documentElement).
 *
 * @returns {Object} { isDark: boolean, toggleDarkMode: () => void }
 */
export function useDarkMode() {
  const isDark = useSyncExternalStore(subscribeDarkMode, getIsDark)

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return { isDark, toggleDarkMode }
}
