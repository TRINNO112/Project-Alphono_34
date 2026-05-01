import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Compass } from 'lucide-react'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" path="/404" />
      <main className="min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl text-center space-y-8"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 text-crimson font-semibold tracking-widest text-sm">
            <span>ERROR 404</span>
            <span className="hidden md:block w-8 h-px bg-crimson" aria-hidden="true" />
            <span>ROUTE NOT INDEXED</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight">
            This <span className="italic text-crimson">path</span> is not in the research index.
          </h1>

          <p className="text-lg text-gray-600 border-l-4 border-crimson pl-6 text-left">
            The URL you followed does not match any of the 13 pillars, districts, or reference pages
            in this dataset. It may have been renamed, or never existed.
          </p>

          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <Link
              to="/"
              className="px-6 py-3 rounded-full bg-crimson text-white font-medium hover:bg-crimson-dark transition-colors inline-flex items-center gap-2"
            >
              <Compass className="w-4 h-4" aria-hidden="true" />
              Return to Home
            </Link>
            <Link
              to="/sources"
              className="px-6 py-3 rounded-full border border-parchment-200 text-gray-900 font-medium hover:bg-parchment-100 transition-colors"
            >
              Browse all sources
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  )
}
