export function SkeletonBlock({ className = '', height = 'h-48' }) {
  return (
    <div
      className={`${height} rounded-2xl bg-gray-200 dark:bg-dark-surface overflow-hidden relative ${className}`}
    >
      <div className="absolute inset-0 shimmer" />
    </div>
  )
}

export function SkeletonChart({ className = '' }) {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="h-5 w-48 rounded bg-gray-200 dark:bg-dark-surface relative overflow-hidden">
        <div className="absolute inset-0 shimmer" />
      </div>
      <SkeletonBlock height="h-64" />
    </div>
  )
}

export function SkeletonCard({ className = '' }) {
  return (
    <div className={`rounded-2xl border border-gray-200 dark:border-dark-border p-6 space-y-4 ${className}`}>
      <div className="h-4 w-32 rounded bg-gray-200 dark:bg-dark-surface relative overflow-hidden">
        <div className="absolute inset-0 shimmer" />
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-gray-200 dark:bg-dark-surface relative overflow-hidden">
          <div className="absolute inset-0 shimmer" />
        </div>
        <div className="h-3 w-3/4 rounded bg-gray-200 dark:bg-dark-surface relative overflow-hidden">
          <div className="absolute inset-0 shimmer" />
        </div>
        <div className="h-3 w-1/2 rounded bg-gray-200 dark:bg-dark-surface relative overflow-hidden">
          <div className="absolute inset-0 shimmer" />
        </div>
      </div>
    </div>
  )
}
