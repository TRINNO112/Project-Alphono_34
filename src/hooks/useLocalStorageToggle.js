import { useState, useEffect } from 'react'

export function useLocalStorageToggle(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      // Dispatch event to keep other tabs in sync if needed
      window.dispatchEvent(new Event('storage-sync'))
    } catch {
      // Ignore write errors
    }
  }, [key, value])

  // Optional: listen to storage events from other tabs
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === key) {
        setValue(e.newValue ? JSON.parse(e.newValue) : initialValue)
      }
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [key, initialValue])

  return [value, setValue]
}
