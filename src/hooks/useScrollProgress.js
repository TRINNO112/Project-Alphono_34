import { useScroll, useSpring } from 'framer-motion'

/**
 * useScrollProgress - Custom hook for tracking scroll progress
 * @returns {Object} { scrollYProgress }
 * @returns {Object} scrollYProgress - Spring-animated scroll progress (0-1)
 */
export function useScrollProgress() {
  const scrollYProgress = useScroll().scrollYProgress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return { scrollYProgress: scaleX }
}
