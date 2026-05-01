import { memo, useId } from 'react'
import { GraduationCap } from 'lucide-react'

/**
 * EducationCascadePanel — narrative mini-cards that show how active levers
 * propagate downstream into the Education pillar.
 *
 * Props:
 *   narratives: Array<{ leverId, leverLabel, headline, detail, headcount?, cite? }>
 */

function formatHeadcount(n) {
  if (!n || n <= 0) return null
  if (n >= 1e7) return `${(n / 1e7).toFixed(n >= 1e8 ? 0 : 1)} Cr`
  if (n >= 1e5) return `${(n / 1e5).toFixed(n >= 1e6 ? 0 : 1)} L`
  if (n >= 1000) return `${(n / 1000).toFixed(0)}k`
  return String(n)
}

function EducationCascadePanelBase({ narratives = [] }) {
  const headingId = useId()

  if (!narratives || narratives.length === 0) {
    return (
      <section
        aria-labelledby={headingId}
        className="rounded-2xl border border-dashed border-gray-300 bg-white/40 p-6"
      >
        <h3
          id={headingId}
          className="flex items-center gap-2 font-serif text-base font-semibold text-gray-900 mb-2"
        >
          <GraduationCap className="w-4 h-4 text-crimson" aria-hidden="true" />
          Downstream: Education
        </h3>
        <p className="text-sm text-gray-500 italic">
          No active lever is propagating to Education yet.
        </p>
      </section>
    )
  }

  return (
    <section
      aria-labelledby={headingId}
      className="rounded-2xl border border-gray-200 bg-white p-5"
    >
      <h3
        id={headingId}
        className="flex items-center gap-2 font-serif text-base font-semibold text-gray-900 mb-4"
      >
        <GraduationCap className="w-4 h-4 text-crimson" aria-hidden="true" />
        Downstream: Education
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {narratives.map((n, i) => {
          const hc = formatHeadcount(n.headcount)
          return (
            <article
              key={n.leverId || i}
              className="rounded-xl border border-gray-200 bg-parchment-50 p-4 hover:border-crimson/40 transition-colors min-w-0 overflow-hidden"
            >
              {n.leverLabel && (
                <p className="text-[10px] font-semibold uppercase tracking-wider text-crimson mb-1.5">
                  {n.leverLabel}
                </p>
              )}
              <h4 className="font-serif text-sm font-bold text-gray-900 leading-snug break-words">
                {n.headline}
              </h4>
              {n.detail && (
                <p className="mt-1.5 text-xs text-gray-600 leading-relaxed break-words">
                  {n.detail}
                </p>
              )}
              {(hc || n.cite) && (
                <div className="mt-2 flex items-center justify-between gap-2 pt-2 border-t border-gray-200">
                  {hc ? (
                    <span className="font-mono tabular-nums text-xs font-bold text-gray-900">
                      {hc}
                    </span>
                  ) : (
                    <span />
                  )}
                  {n.cite && (
                    <a
                      href={`#ref-${n.cite}`}
                      className="text-crimson hover:underline font-bold text-[11px]"
                      aria-label={`Citation ${n.cite}`}
                    >
                      [{n.cite}]
                    </a>
                  )}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default memo(EducationCascadePanelBase)
