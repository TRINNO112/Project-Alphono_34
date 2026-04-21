import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Users, ExternalLink, MapPin, Calendar } from 'lucide-react'
import SEO from '../components/SEO'
import { Section, DataCard } from '../components/Shared'
import { humanStories } from '../data/humanStories'
import { useStories } from '../context/useStories'

const PILLAR_LABELS = {
  'labor': 'Labor — Diamond Workers',
  'migrant-discrimination': 'Migrant Discrimination — Silicosis & Pogrom',
  'infrastructure': 'Infrastructure — Morbi Bridge Collapse',
  'agriculture': 'Agriculture — Farmer Suicides',
  'environment': 'Environment — Alang & Ankleshwar',
  'materials': 'Materials',
  'chemical-governance': 'Chemical Governance',
}

const PILLAR_ORDER = [
  'infrastructure',
  'labor',
  'migrant-discrimination',
  'environment',
  'agriculture',
  'materials',
  'chemical-governance',
]

function StoryCard({ story }) {
  const { openStory } = useStories()
  return (
    <button
      type="button"
      onClick={() => openStory(story.id)}
      className="text-left p-5 rounded-xl border border-gray-200 dark:border-dark-border bg-white/70 dark:bg-dark-surface/70 hover:border-crimson hover:bg-crimson/5 transition-all shadow-sm hover:shadow-lg focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white leading-tight">
          {story.name}
          {story.age != null && (
            <span className="text-gray-500 dark:text-gray-400 font-normal text-base"> , {story.age}</span>
          )}
        </h3>
        <span className="shrink-0 text-[10px] font-bold tracking-widest uppercase text-crimson bg-crimson/10 rounded-full px-2 py-1">
          {story.anchorText}
        </span>
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-400 mb-3">
        {story.origin && (
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            {story.origin.district}, {story.origin.state}
          </span>
        )}
        {story.eventDate && (
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            {story.eventDate}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-4">
        {story.circumstance}
      </p>
      <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-crimson">
        <ExternalLink className="w-3 h-3" aria-hidden="true" />
        <span>Read full story — {story.sourcePublication}</span>
      </div>
    </button>
  )
}

export default function Stories() {
  const grouped = useMemo(() => {
    const g = {}
    for (const s of humanStories) {
      if (!g[s.pillar]) g[s.pillar] = []
      g[s.pillar].push(s)
    }
    return g
  }, [])

  return (
    <main className="w-full max-w-6xl mx-auto px-6 pt-32 pb-32 space-y-16">
      <SEO
        title="Human Stories"
        description="Named individuals behind Gujarat's structural statistics — diamond workers, silicosis victims, Morbi bridge collapse families, farmer suicides, Alang shipbreakers, and chemical-cluster deaths. Sourced exclusively from mainstream journalism."
        path="/stories"
      />

      {/* Hero */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-4 text-crimson font-semibold tracking-widest text-sm mb-4">
            <Users className="w-5 h-5" aria-hidden="true" />
            <span>NAMED, NOT NUMBERED</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            The <span className="italic text-crimson">people</span> behind the statistics.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Every number in this project represents a life. Below are {humanStories.length} individuals —
            named in mainstream print and TV reporting — whose stories anchor the structural failures
            documented across the 13 pillars.
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic max-w-3xl pl-6">
            No photos. No family details beyond what reporters already published. No social-media sourcing.
            Click any card to read the full account and jump to the original report.
          </p>
        </motion.div>
      </section>

      {/* Groups */}
      {PILLAR_ORDER.map((pillarKey) => {
        const stories = grouped[pillarKey]
        if (!stories || stories.length === 0) return null
        return (
          <Section
            key={pillarKey}
            icon={<Users className="w-8 h-8 text-crimson" />}
            title={PILLAR_LABELS[pillarKey] || pillarKey}
          >
            <DataCard title={`${stories.length} story${stories.length === 1 ? '' : 'ies'} documented`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            </DataCard>
          </Section>
        )
      })}

      {/* Ethics note */}
      <section className="rounded-2xl border border-gray-200 dark:border-dark-border bg-parchment-50 dark:bg-dark-surface p-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        <h2 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-2">
          Sourcing &amp; Ethics
        </h2>
        <p>
          Names on this page are sourced exclusively from mainstream print and TV journalism
          (Indian Express, Business Standard, BBC, NDTV, Al Jazeera, CNN, The Wire, Down to Earth,
          Caravan, PARI, Public Eye, Gujarat Samachar, Outlook, ThePrint and equivalents). No
          social-media sourcing, no speculative attribution, no photographs. If you are a family
          member of a named individual and wish to request removal, please open an issue on the
          project repository.
        </p>
      </section>
    </main>
  )
}
