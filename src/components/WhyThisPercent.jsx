import { memo, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { HelpCircle, X } from './Icons'

/**
 * WhyThisPercent — popover that explains how a per-pillar % was derived.
 *
 * Props:
 *   pillarLabel:  string
 *   percent:      number      // current displayed %
 *   derivation:   { factors: [{label, value, cite?}], formula: string, result: number }
 *   leverValue:   number
 *   leverMax:     number
 *   sources:      Array<{title, url}>
 *   triggerLabel?: string     // optional override for the trigger button text
 */
function WhyThisPercentBase({
  pillarLabel,
  percent,
  derivation,
  leverValue,
  leverMax,
  sources = [],
  triggerLabel,
}) {
  const [open, setOpen] = useState(false)
  const [flipUp, setFlipUp] = useState(false)
  const triggerRef = useRef(null)
  const popoverRef = useRef(null)
  const titleId = useId()
  const reduceMotion = useReducedMotion()

  // Close on Esc / outside click
  useEffect(() => {
    if (!open) return
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    function onClick(e) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  // Flip-above logic
  useLayoutEffect(() => {
    if (!open || !triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    const estimatedH = Math.min(window.innerHeight * 0.6, 480)
    const spaceBelow = window.innerHeight - rect.bottom
    setFlipUp(spaceBelow < estimatedH + 16 && rect.top > spaceBelow)
  }, [open])

  const factors = derivation?.factors || []
  const formula = derivation?.formula || ''
  const result = derivation?.result ?? percent

  const slideY = reduceMotion ? 0 : flipUp ? 8 : -8

  return (
    <span className="relative inline-block">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`Show derivation for ${pillarLabel}`}
        className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase text-gray-400 hover:text-crimson transition-colors focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 rounded"
      >
        <HelpCircle className="w-3 h-3" aria-hidden="true" />
        {triggerLabel || 'Why?'}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={popoverRef}
            role="dialog"
            aria-modal="false"
            aria-labelledby={titleId}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: slideY }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: slideY }}
            transition={{ duration: reduceMotion ? 0 : 0.18, ease: 'easeOut' }}
            style={{
              width: '320px',
              maxHeight: '60vh',
              [flipUp ? 'bottom' : 'top']: 'calc(100% + 8px)',
            }}
            className="absolute left-0 z-50 overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-xl p-4"
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <h4
                id={titleId}
                className="font-serif text-base font-bold text-gray-900 leading-tight"
              >
                Why {percent}%?
              </h4>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close derivation"
                className="text-gray-400 hover:text-crimson transition-colors"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-1">
              {pillarLabel}
            </p>

            {formula && (
              <div className="mb-3 p-2 rounded-lg bg-gray-50 border border-gray-100">
                <code className="text-xs font-mono text-gray-700 break-words">
                  {formula}
                </code>
              </div>
            )}

            {factors.length > 0 && (
              <dl className="space-y-1.5 mb-3">
                {factors.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between gap-3 text-xs"
                  >
                    <dt className="text-gray-600 flex-1 min-w-0">
                      {f.label}
                      {f.cite && (
                        <a
                          href={`#ref-${f.cite}`}
                          className="ml-1 text-crimson hover:underline font-bold"
                          aria-label={`Citation ${f.cite}`}
                        >
                          [{f.cite}]
                        </a>
                      )}
                    </dt>
                    <dd className="font-mono tabular-nums text-gray-900 shrink-0">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="pt-3 mt-2 border-t border-gray-100">
              <p className="text-[11px] text-gray-500 leading-relaxed">
                At lever = <span className="font-mono tabular-nums text-gray-700">{leverValue}/{leverMax}</span>:{' '}
                <span className="font-bold text-crimson">{percent}%</span> of{' '}
                <span className="font-mono tabular-nums">{result}%</span> headline
              </p>

              {sources.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {sources.slice(0, 3).map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-semibold uppercase tracking-wider text-crimson hover:underline truncate max-w-[140px]"
                      title={s.title}
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}

export default memo(WhyThisPercentBase)
