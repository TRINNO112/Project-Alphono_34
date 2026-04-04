import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, AlertTriangle, MapPin, Database } from 'lucide-react'
import { getDistrictById } from '../data/districtsData'
import SEO from '../components/SEO'
import { Section, DataCard, StatBox } from '../components/Shared'

export default function DistrictAnalysis() {
  const { id } = useParams()
  const district = getDistrictById(id)

  if (!district) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <SEO title="District Not Found" />
        <AlertTriangle className="w-16 h-16 text-crimson mb-6" />
        <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">404: District Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          The district "{id}" is not currently in the Project Alphono 34 database or the slug is incorrect.
        </p>
        <Link to="/map" className="px-6 py-3 bg-crimson text-white font-bold rounded-full hover:bg-red-700 transition">
          Return to Map
        </Link>
      </div>
    )
  }

  return (
    <main className="w-full max-w-5xl mx-auto px-6 pt-32 pb-32 space-y-16">
      <SEO 
        title={`${district.name} Dependency Analysis`} 
        description={`Critical analysis of ${district.name} district: ${district.tagline}`}
        path={`/district/${id}`} 
      />

      {/* Hero Section */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/map" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-crimson transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Geographic Index
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-crimson font-semibold tracking-widest text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span className="uppercase">{district.region}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
                {district.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-gray-500 dark:text-gray-400 mt-2 italic">
                {district.tagline}
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-2 md:max-w-[300px] justify-start md:justify-end">
              {district.pillars.map(p => (
                <span key={p} className="px-3 py-1 bg-gray-200 dark:bg-dark-surface text-gray-700 dark:text-gray-300 text-xs font-bold rounded-full border border-gray-300 dark:border-dark-border">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            {district.summary}
          </p>
        </motion.div>
      </section>

      {/* Stats Board */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {district.stats.map((s, i) => {
            const colorMap = {
              critical: 'red',
              danger: 'crimson',
              warning: 'amber',
              normal: 'blue'
            }
            return (
              <StatBox key={i} value={s.value} label={s.label} color={colorMap[s.status]} />
            )
          })}
        </div>
      </section>

      {/* Chronology of Crises */}
      {district.keyCrises && district.keyCrises.length > 0 && (
        <Section icon={<Database className="w-8 h-8 text-crimson" />} title="Structural Failure Incidents">
          <div className="space-y-6">
            {district.keyCrises.map((crisis, i) => (
              <DataCard key={i} title={`${crisis.year} — ${crisis.title}`} alert={crisis.status === 'danger' || true}>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{crisis.detail}</p>
              </DataCard>
            ))}
          </div>
        </Section>
      )}

    </main>
  )
}
