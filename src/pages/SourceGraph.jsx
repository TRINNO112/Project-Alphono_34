import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowLeft, ChevronRight, MapPin, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { allSources, pillarMeta, districtList } from '../data/sourcesData'

const TYPE_STRIPE = {
  Govt: '#2563eb',
  Media: '#D32F2F',
  Academic: '#7c3aed',
  Industry: '#ca8a04',
  Legal: '#059669',
}

const PILLAR_NOTES = {
  Infrastructure: 'Ports, rails, bridges — the arteries of Gujarat.',
  Energy: 'Imported coal, LNG chokepoints, solar paradox.',
  Water: 'Narmada dependence, aquifer collapse.',
  Labor: 'Migrants keep the factories running.',
  Economics: 'Thin tax base, Adani-shaped skyline.',
  Materials: 'Chinese APIs, Russian crude, Indonesian coal.',
  Education: 'Learning outcomes beneath the headline GSDP.',
  Environment: 'Effluent, emissions, the cost of growth.',
  'Migrant Discrimination': 'Hindira. The slur they pretend not to know.',
  Agriculture: 'Farmer suicides, Bt monoculture, DAP imports.',
  'Green Tech': 'Solar panels assembled from Chinese cells.',
  'Chemical Governance': 'Ankleshwar, Vapi — thin oversight.',
  'Digital Sovereignty': 'Zero submarine cables. GIFT City latency.',
}

function tilt(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  const frac = x - Math.floor(x)
  return (frac * 5 - 2.5).toFixed(2)
}


function hostOf(url) {
  try {
    return new URL(url).hostname.replace('www.', '')
  } catch {
    return ''
  }
}

export default function SourceGraph() {
  const [openPillar, setOpenPillar] = useState(null)
  const [groupMode, setGroupMode] = useState('pillar') // 'pillar' | 'district'

  const grouped = useMemo(() => {
    const map = {}
    if (groupMode === 'pillar') {
      for (const s of allSources) {
        if (!map[s.pillar]) map[s.pillar] = []
        map[s.pillar].push(s)
      }
    } else {
      for (const s of allSources) {
        if (!s.district) continue
        if (!map[s.district]) map[s.district] = []
        map[s.district].push(s)
      }
    }
    return map
  }, [groupMode])

  const typeTotals = useMemo(() => {
    const acc = {}
    for (const s of allSources) acc[s.type] = (acc[s.type] || 0) + 1
    return acc
  }, [])

  const pillarNames = Object.keys(pillarMeta)
  const sectionNames = groupMode === 'pillar' ? pillarNames : districtList

  return (
    <div className="ib-page">
      <SEO
        title="Evidence Wall · Source Graph"
        description="241 citations pinned across 13 pillar case files — the investigative wall behind Project Alphono 34."
        path="/source-graph"
      />

      <header className="ib-header">
        <div>
          <Link to="/sources" className="ib-back">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to index
          </Link>
          <h1 style={{ marginTop: 14 }}>
            The <span>Evidence</span> Wall
          </h1>
          <p>
            CASE NO. 34/GJ/2026 &middot; {allSources.length} documents &middot; {pillarNames.length}{' '}
            case files &middot; click a file to open
          </p>
        </div>
        <div className="ib-stamp">Classified &middot; Open Record</div>
      </header>

      <div className="ib-legend" aria-label="Source type legend">
        {Object.entries(TYPE_STRIPE).map(([t, c]) => (
          <span key={t}>
            <i style={{ background: c }} /> {t}
            <b style={{ marginLeft: 6, opacity: 0.7 }}>{typeTotals[t] || 0}</b>
          </span>
        ))}
      </div>

      {/* Group-mode toggle */}
      <div style={{ display: 'flex', gap: 8, margin: '12px 0 24px', flexWrap: 'wrap' }}>
        <button
          onClick={() => { setGroupMode('pillar'); setOpenPillar(null) }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 14px', fontSize: 12, fontWeight: 700, letterSpacing: '0.05em',
            border: groupMode === 'pillar' ? '1px solid #D32F2F' : '1px solid #d4c8a8',
            background: groupMode === 'pillar' ? 'rgba(211,47,47,0.08)' : 'transparent',
            color: groupMode === 'pillar' ? '#D32F2F' : '#5a4a2a',
            cursor: 'pointer', borderRadius: 4, textTransform: 'uppercase',
          }}
        >
          <Layers className="w-3.5 h-3.5" /> By Pillar
        </button>
        <button
          onClick={() => { setGroupMode('district'); setOpenPillar(null) }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 14px', fontSize: 12, fontWeight: 700, letterSpacing: '0.05em',
            border: groupMode === 'district' ? '1px solid #D32F2F' : '1px solid #d4c8a8',
            background: groupMode === 'district' ? 'rgba(211,47,47,0.08)' : 'transparent',
            color: groupMode === 'district' ? '#D32F2F' : '#5a4a2a',
            cursor: 'pointer', borderRadius: 4, textTransform: 'uppercase',
          }}
        >
          <MapPin className="w-3.5 h-3.5" /> By District
        </button>
      </div>

      {sectionNames.map((name, pi) => {
        const sources = grouped[name] || []
        const meta = groupMode === 'pillar' ? pillarMeta[name] : null
        const Icon = meta?.icon || (groupMode === 'district' ? MapPin : null)
        const note = groupMode === 'pillar' ? PILLAR_NOTES[name] : null
        const isOpen = openPillar === name
        const previewSources = sources.slice(0, 3)
        if (sources.length === 0) return null

        return (
          <section key={name} className="ib-section" aria-labelledby={`ib-h-${pi}`}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setOpenPillar(isOpen ? null : name)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setOpenPillar(isOpen ? null : name)
                }
              }}
              aria-expanded={isOpen}
              aria-controls={`ib-panel-${pi}`}
              className="ib-section-header"
            >
              <h2 id={`ib-h-${pi}`}>
                <ChevronRight
                  className={`ib-chevron ${isOpen ? 'ib-chevron--open' : ''}`}
                  aria-hidden="true"
                />
                {Icon && <Icon className={`w-6 h-6 ${meta?.color || 'text-amber-600'}`} aria-hidden="true" />}
                {name}
              </h2>
              <span className="ib-section-count">
                {isOpen ? 'close' : `${sources.length} exhibits`}
              </span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                // EXPANDED — all papers fan out
                <motion.div
                  key="open"
                  id={`ib-panel-${pi}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="ib-paper-row"
                >
                  <motion.div
                    className="ib-folder"
                    style={{ '--tilt': `${tilt(pi * 7)}deg` }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="ib-folder-case">Case File {String(pi + 1).padStart(2, '0')}</div>
                    <h3 className="ib-folder-name">
                      {Icon && <Icon className="ib-folder-icon w-5 h-5" aria-hidden="true" />}
                      {name}
                    </h3>
                    <span className="ib-folder-count">{sources.length} sources</span>
                    {note && <p className="ib-folder-note">"{note}"</p>}
                  </motion.div>

                  {sources.map((s, i) => {
                    const host = hostOf(s.url)
                    const stripe = TYPE_STRIPE[s.type] || TYPE_STRIPE.Media
                    const catalog = `${String(pi + 1).padStart(2, '0')}.${String(i + 1).padStart(3, '0')}`
                    return (
                      <motion.a
                        key={`${name}-${i}`}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ib-paper"
                        style={{
                          '--tilt': `${tilt(pi * 31 + i * 13)}deg`,
                          '--stripe': stripe,
                        }}
                        initial={{ opacity: 0, y: 40, scale: 0.6, rotate: 0 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          rotate: parseFloat(tilt(pi * 31 + i * 13)),
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 220,
                          damping: 18,
                          delay: Math.min(i * 0.03, 0.5),
                        }}
                        aria-label={`${s.type} source: ${s.title}`}
                      >
                        <div className="ib-paper-head">
                          <span className="ib-paper-type">{s.type}</span>
                          <span className="ib-paper-num">№ {catalog}</span>
                        </div>
                        <div className="ib-paper-body">
                          <p className="ib-paper-title">{s.title}</p>
                        </div>
                        <div className="ib-paper-foot">
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          {host}
                        </div>
                      </motion.a>
                    )
                  })}
                </motion.div>
              ) : (
                // COLLAPSED — stacked preview
                <motion.div
                  key="closed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ib-stack"
                  onClick={() => setOpenPillar(name)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${name} case file`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setOpenPillar(name)
                    }
                  }}
                >
                  {previewSources.map((s, i) => {
                    const stripe = TYPE_STRIPE[s.type] || TYPE_STRIPE.Media
                    return (
                      <div key={i} className="ib-stack-sheet" style={{ '--stripe': stripe }}>
                        <div className="ib-stack-label">
                          Exhibit {String(i + 1).padStart(2, '0')} &middot; {s.type}
                        </div>
                        <div className="ib-stack-title">{s.title}</div>
                      </div>
                    )
                  })}
                  <div className="ib-stack-open">Click to open file &rarr;</div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )
      })}
    </div>
  )
}
