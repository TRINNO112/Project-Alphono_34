import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import * as d3 from 'd3'
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, MapPin, Layers, ZoomIn, ZoomOut, RotateCcw, Filter, X } from 'lucide-react'
import SEO from '../components/SEO'
import { allSources, pillarMeta, districtList } from '../data/sourcesData'

const TYPE_COLOR = {
  Govt: '#2563eb',
  Media: '#D32F2F',
  Academic: '#7c3aed',
  Industry: '#ca8a04',
  Legal: '#059669',
}

const PILLAR_COLOR = {
  Infrastructure: '#3b82f6',
  Energy: '#eab308',
  Water: '#14b8a6',
  Labor: '#a855f7',
  Economics: '#22c55e',
  Materials: '#6b7280',
  Education: '#ec4899',
  Environment: '#10b981',
  'Migrant Discrimination': '#ef4444',
  Agriculture: '#65a30d',
  'Green Tech': '#06b6d4',
  'Chemical Governance': '#f97316',
  'Digital Sovereignty': '#0ea5e9',
  Banking: '#d97706',
}

function buildGraphData(filter) {
  const filtered = allSources.filter((s) => {
    if (filter.type !== 'all' && s.type !== filter.type) return false
    if (filter.district !== 'all' && s.district !== filter.district) return false
    return true
  })

  const pillarSet = new Set(filtered.map((s) => s.pillar))
  const nodes = []
  const links = []

  Object.keys(pillarMeta).forEach((pillar) => {
    if (!pillarSet.has(pillar)) return
    const count = filtered.filter((s) => s.pillar === pillar).length
    nodes.push({
      id: `pillar::${pillar}`,
      type: 'pillar',
      pillar,
      label: pillar,
      count,
      r: Math.max(18, Math.min(40, 12 + Math.sqrt(count) * 4)),
      color: PILLAR_COLOR[pillar] || '#999',
    })
  })

  filtered.forEach((s, i) => {
    const sid = `src::${i}::${s.pillar}`
    nodes.push({
      id: sid,
      type: 'source',
      pillar: s.pillar,
      district: s.district || null,
      kind: s.type,
      title: s.title,
      url: s.url,
      r: 4.5,
      color: TYPE_COLOR[s.type] || '#999',
    })
    links.push({ source: `pillar::${s.pillar}`, target: sid })
  })

  return { nodes, links }
}

export default function SourceGraph() {
  const svgRef = useRef(null)
  const containerRef = useRef(null)
  const simRef = useRef(null)
  const zoomRef = useRef(null)

  const [filter, setFilter] = useState({ type: 'all', district: 'all' })
  const [hover, setHover] = useState(null)
  const [selected, setSelected] = useState(null)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const { nodes, links } = useMemo(() => buildGraphData(filter), [filter])

  const typeTotals = useMemo(() => {
    const acc = {}
    for (const s of allSources) acc[s.type] = (acc[s.type] || 0) + 1
    return acc
  }, [])

  const dims = useRef({ w: 1200, h: 720 })

  // Resize observer to keep the SVG responsive
  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver((entries) => {
      const e = entries[0]
      const w = Math.max(320, e.contentRect.width)
      const h = Math.max(420, Math.min(820, w * 0.62))
      dims.current = { w, h }
      const svg = d3.select(svgRef.current)
      svg.attr('viewBox', `0 0 ${w} ${h}`)
      if (simRef.current) {
        simRef.current.force('center', d3.forceCenter(w / 2, h / 2))
        simRef.current.alpha(0.4).restart()
      }
    })
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  // Main render effect
  useEffect(() => {
    if (!svgRef.current) return
    const { w, h } = dims.current
    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()
    svg.attr('viewBox', `0 0 ${w} ${h}`)

    const root = svg.append('g').attr('class', 'sg-root')

    // Zoom behaviour
    const zoom = d3.zoom()
      .scaleExtent([0.3, 4])
      .on('zoom', (event) => root.attr('transform', event.transform))
    zoomRef.current = zoom
    svg.call(zoom)

    // Defs: subtle drop shadow for pillar nodes
    const defs = svg.append('defs')
    const filterEl = defs.append('filter').attr('id', 'sg-shadow').attr('x', '-50%').attr('y', '-50%').attr('width', '200%').attr('height', '200%')
    filterEl.append('feGaussianBlur').attr('in', 'SourceAlpha').attr('stdDeviation', 3)
    filterEl.append('feOffset').attr('dx', 0).attr('dy', 2)
    const merge = filterEl.append('feMerge')
    merge.append('feMergeNode')
    merge.append('feMergeNode').attr('in', 'SourceGraphic')

    // Force sim
    const sim = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d) => d.id).distance((l) => l.target.type === 'source' ? 26 : 80).strength(0.6))
      .force('charge', d3.forceManyBody().strength((d) => d.type === 'pillar' ? -240 : -22))
      .force('center', d3.forceCenter(w / 2, h / 2))
      .force('collide', d3.forceCollide().radius((d) => d.r + 2))
      .alphaDecay(0.04)
    simRef.current = sim

    // Links
    const link = root.append('g')
      .attr('class', 'sg-links')
      .attr('stroke', '#1a1a1a')
      .attr('stroke-opacity', 0.08)
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke-width', 0.6)

    // Nodes
    const node = root.append('g')
      .attr('class', 'sg-nodes')
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', (d) => `sg-node sg-node--${d.type}`)
      .style('cursor', 'pointer')
      .call(
        d3.drag()
          .on('start', (event, d) => {
            if (!event.active) sim.alphaTarget(0.3).restart()
            d.fx = d.x
            d.fy = d.y
          })
          .on('drag', (event, d) => {
            d.fx = event.x
            d.fy = event.y
          })
          .on('end', (event, d) => {
            if (!event.active) sim.alphaTarget(0)
            d.fx = null
            d.fy = null
          }),
      )

    node.append('circle')
      .attr('r', (d) => d.r)
      .attr('fill', (d) => d.color)
      .attr('fill-opacity', (d) => d.type === 'pillar' ? 0.9 : 0.85)
      .attr('stroke', (d) => d.type === 'pillar' ? '#1a1a1a' : '#fff')
      .attr('stroke-width', (d) => d.type === 'pillar' ? 1.5 : 0.8)
      .attr('filter', (d) => d.type === 'pillar' ? 'url(#sg-shadow)' : null)

    // Pillar labels
    node.filter((d) => d.type === 'pillar')
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', (d) => -(d.r + 8))
      .attr('font-size', 11)
      .attr('font-weight', 700)
      .attr('font-family', '"Inter", system-ui, sans-serif')
      .attr('fill', '#1a1a1a')
      .attr('pointer-events', 'none')
      .text((d) => d.label)

    // Pillar count badge
    node.filter((d) => d.type === 'pillar')
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.32em')
      .attr('font-size', 11)
      .attr('font-weight', 700)
      .attr('fill', '#fff')
      .attr('pointer-events', 'none')
      .text((d) => d.count)

    // Hover / click
    node
      .on('mouseenter', (event, d) => setHover(d))
      .on('mouseleave', () => setHover(null))
      .on('click', (event, d) => {
        event.stopPropagation()
        if (d.type === 'source') setSelected(d)
        if (d.type === 'pillar') {
          // Pin the pillar in place at click position, give it a strong attractor pulse
          sim.alpha(0.5).restart()
        }
      })

    svg.on('click', () => setSelected(null))

    sim.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y)
      node.attr('transform', (d) => `translate(${d.x},${d.y})`)
    })

    return () => sim.stop()
  }, [nodes, links])

  const handleZoom = useCallback((dir) => {
    const svg = d3.select(svgRef.current)
    if (!zoomRef.current) return
    if (dir === 'reset') {
      svg.transition().duration(400).call(zoomRef.current.transform, d3.zoomIdentity)
      return
    }
    svg.transition().duration(220).call(zoomRef.current.scaleBy, dir === 'in' ? 1.4 : 1 / 1.4)
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      <SEO
        title="Source Graph · Project Alphono 34"
        description={`Interactive force-directed graph of ${allSources.length} citations across ${Object.keys(pillarMeta).length} pillars and ${districtList.length} districts.`}
        path="/source-graph"
      />

      {/* Header */}
      <header className="mb-6">
        <Link to="/sources" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-crimson transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to source index
        </Link>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3">
          The Source <span className="text-crimson italic">Graph</span>
        </h1>
        <p className="text-gray-600 mt-3 max-w-3xl leading-relaxed">
          A force-directed network of every cited source. The {Object.keys(pillarMeta).length} large nodes are pillars,
          sized by source count. The small dots are individual sources, colored by type. Drag the pillars to reshape
          the graph. Click a source dot to read it.
        </p>
      </header>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <button
          onClick={() => setFiltersOpen((v) => !v)}
          className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider border border-gray-300 rounded hover:border-crimson hover:text-crimson transition-colors"
        >
          <Filter className="w-3.5 h-3.5" /> Filters
          {(filter.type !== 'all' || filter.district !== 'all') && (
            <span className="ml-1 px-1.5 py-0.5 text-[10px] bg-crimson text-white rounded">active</span>
          )}
        </button>

        <div className="flex items-center gap-1 ml-auto">
          <button onClick={() => handleZoom('out')} aria-label="Zoom out" className="p-2 border border-gray-300 rounded hover:border-crimson hover:text-crimson transition-colors">
            <ZoomOut className="w-4 h-4" />
          </button>
          <button onClick={() => handleZoom('reset')} aria-label="Reset zoom" className="p-2 border border-gray-300 rounded hover:border-crimson hover:text-crimson transition-colors">
            <RotateCcw className="w-4 h-4" />
          </button>
          <button onClick={() => handleZoom('in')} aria-label="Zoom in" className="p-2 border border-gray-300 rounded hover:border-crimson hover:text-crimson transition-colors">
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter panel */}
      {filtersOpen && (
        <div className="mb-4 p-4 border border-gray-200 rounded-lg bg-parchment-50">
          <div className="flex flex-wrap gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-widest font-semibold text-gray-500 mb-2 flex items-center gap-1.5">
                <Layers className="w-3 h-3" /> By Type
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['all', ...Object.keys(TYPE_COLOR)].map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilter((f) => ({ ...f, type: t }))}
                    className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                      filter.type === t
                        ? 'border-crimson bg-crimson text-white'
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    style={filter.type === t && t !== 'all' ? { background: TYPE_COLOR[t], borderColor: TYPE_COLOR[t] } : {}}
                  >
                    {t === 'all' ? 'All types' : `${t} (${typeTotals[t] || 0})`}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-w-[200px]">
              <div className="text-[11px] uppercase tracking-widest font-semibold text-gray-500 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3 h-3" /> By District
              </div>
              <select
                value={filter.district}
                onChange={(e) => setFilter((f) => ({ ...f, district: e.target.value }))}
                className="px-3 py-1.5 text-xs border border-gray-300 rounded bg-white min-w-[180px]"
              >
                <option value="all">All districts ({districtList.length})</option>
                {districtList.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {(filter.type !== 'all' || filter.district !== 'all') && (
              <button
                onClick={() => setFilter({ type: 'all', district: 'all' })}
                className="self-end text-xs text-crimson hover:underline inline-flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Clear all
              </button>
            )}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-xs text-gray-600">
        {Object.entries(TYPE_COLOR).map(([t, c]) => (
          <span key={t} className="inline-flex items-center gap-1.5">
            <i className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: c }} aria-hidden="true" />
            {t} <span className="text-gray-400">({typeTotals[t] || 0})</span>
          </span>
        ))}
        <span className="inline-flex items-center gap-1.5 ml-auto text-gray-500">
          Showing {nodes.filter((n) => n.type === 'source').length} of {allSources.length} sources
        </span>
      </div>

      {/* Graph */}
      <div ref={containerRef} className="relative w-full border border-gray-200 rounded-xl bg-gradient-to-br from-parchment-50 to-white overflow-hidden" style={{ minHeight: 500 }}>
        <svg
          ref={svgRef}
          className="w-full h-full block"
          style={{ minHeight: 500 }}
          role="img"
          aria-label={`Force-directed graph of ${allSources.length} citations`}
        />

        {/* Hover tooltip */}
        {hover && (
          <div
            className="absolute top-3 left-3 max-w-md p-3 bg-white border border-gray-200 rounded-lg shadow-lg pointer-events-none"
            style={{ zIndex: 10 }}
          >
            {hover.type === 'pillar' ? (
              <>
                <div className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: hover.color }}>
                  Pillar · {hover.count} sources
                </div>
                <div className="font-serif font-bold text-gray-900 text-base mt-1">{hover.label}</div>
              </>
            ) : (
              <>
                <div className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: hover.color }}>
                  {hover.kind} · {hover.pillar}{hover.district ? ` · ${hover.district}` : ''}
                </div>
                <div className="text-sm text-gray-800 mt-1 line-clamp-3">{hover.title}</div>
                <div className="text-[10px] text-gray-400 mt-1">click to open</div>
              </>
            )}
          </div>
        )}

        {/* Selected source card */}
        {selected && (
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md p-4 bg-white border-2 border-gray-900 rounded-lg shadow-xl" style={{ zIndex: 10 }}>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-900"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: selected.color }}>
              {selected.kind} · {selected.pillar}{selected.district ? ` · ${selected.district}` : ''}
            </div>
            <div className="font-serif font-bold text-gray-900 text-base mt-1 pr-6">{selected.title}</div>
            <a
              href={selected.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-crimson hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Open source
            </a>
          </div>
        )}

        {/* Touch / a11y hint */}
        <div className="absolute top-2 right-3 text-[10px] text-gray-400 select-none pointer-events-none">
          drag · zoom · click
        </div>
      </div>

      {/* Accessibility fallback list — visually hidden but available to screen readers */}
      <div className="sr-only">
        <h2>Sources (text fallback)</h2>
        <ul>
          {nodes.filter((n) => n.type === 'source').map((n) => (
            <li key={n.id}>
              <a href={n.url} target="_blank" rel="noopener noreferrer">
                {n.title}
              </a> — {n.kind}, {n.pillar}{n.district ? `, ${n.district}` : ''}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
