import { Component } from 'react'
import { AlertTriangle } from 'lucide-react'

/**
 * ErrorBoundary - Class component that catches JavaScript errors in child component tree
 *
 * Features:
 * - Catches errors during rendering, in lifecycle methods, and in constructors
 * - Displays themed error fallback UI
 * - Provides reload and home navigation options
 * - Logs error details to console
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components to wrap
 * @returns {JSX.Element} The rendered children or error fallback
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary]', error, errorInfo)
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null })
    window.location.reload()
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <main
        id="main"
        role="alert"
        className="min-h-screen flex items-center justify-center px-6 py-32 bg-parchment-50 dark:bg-dark-bg"
      >
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-crimson/10 text-crimson">
            <AlertTriangle className="w-8 h-8" aria-hidden="true" />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">
            Something broke.
          </h1>

          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            An unexpected error prevented this view from rendering. Your data is not lost —
            the rest of the site is still reachable.
          </p>

          {this.state.error?.message && (
            <pre className="text-left text-xs p-4 rounded-lg bg-parchment-100 dark:bg-dark-surface border border-parchment-200 dark:border-dark-border overflow-auto text-gray-700 dark:text-gray-300">
              {this.state.error.message}
            </pre>
          )}

          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <button
              type="button"
              onClick={this.handleReload}
              className="px-5 py-2.5 rounded-full bg-crimson text-white font-medium hover:bg-crimson-dark transition-colors"
            >
              Reload page
            </button>
            <a
              href="/"
              className="px-5 py-2.5 rounded-full border border-parchment-200 dark:border-dark-border text-gray-900 dark:text-gray-200 font-medium hover:bg-parchment-100 dark:hover:bg-dark-surface transition-colors"
            >
              Back to home
            </a>
          </div>
        </div>
      </main>
    )
  }
}
