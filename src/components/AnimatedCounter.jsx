import { useEffect, useRef, useState } from 'react'
import { useInView, useSpring as useFramerSpring, useMotionValue } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', prefix = '', decimals = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState('0')

  const numericValue = parseFloat(String(value).replace(/[^0-9.-]/g, '')) || 0

  const motionValue = useMotionValue(0)
  const spring = useFramerSpring(motionValue, {
    stiffness: 60,
    damping: 20,
    restDelta: decimals > 0 ? 0.01 : 0.5,
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue)
    }
  }, [isInView, numericValue, motionValue])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      const formatted = decimals > 0
        ? latest.toFixed(decimals)
        : Math.round(latest).toLocaleString()
      setDisplay(formatted)
    })
    return unsubscribe
  }, [spring, decimals])

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}
