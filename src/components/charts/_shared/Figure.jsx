import { memo } from 'react'

function FigureInner({ title, caption, ariaLabel, srSummary, children, className = '' }) {
  return (
    <figure
      className={`my-8 ${className}`}
      role="img"
      aria-label={ariaLabel || title}
    >
      {title && (
        <h4 className="text-lg font-serif font-bold text-gray-900 mb-4">{title}</h4>
      )}
      <div className="bg-white/60 border border-gray-200 rounded-2xl p-6 backdrop-blur-sm">
        {children}
      </div>
      {srSummary && <span className="sr-only">{srSummary}</span>}
      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-3 italic font-serif">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export const Figure = memo(FigureInner)
