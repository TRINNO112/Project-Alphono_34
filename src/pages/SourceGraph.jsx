import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import * as d3 from 'd3'
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, MapPin, Layers, ZoomIn, ZoomOut, RotateCcw, Filter, X } from 'lucide-react'
import SEO from '../components/SEO'
import { allSources, pillarMeta, districtList } from '../data/sourcesData'

const TYPE_COLOR = {
  Govt: '#3b82f6', // Bright blue
  Media: '#ef4444', // Red
  Academic: '#8b5cf6', // Purple
  Industry: '#f59e0b', // Amber
  Legal: '#10b981', // Emerald
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
  Agriculture: '#84cc16',
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

  // Central Hub Node
  nodes.push({
    id: 'center::root',
    type: 'center',
    label: 'Alphono 34',
    r: 45,
    color: '#0f172a', // Deep slate for the core
  })

  Object.keys(pillarMeta).forEach((pillar) => {
    if (!pillarSet.has(pillar)) return
    const count = filtered.filter((s) => s.pillar === pillar).length
    nodes.push({
      id: `pillar::${pillar}`,
      type: 'pillar',
      pillar,
      label: pillar,
      count,
      r: Math.max(22, Math.min(45, 14 + Math.sqrt(count) * 4.5)),
      color: PILLAR_COLOR[pillar] || '#94a3b8',
    })
    
    // Connect center to pillars
    links.push({
      source: 'center::root',
      target: `pillar::${pillar}`,
      type: 'center-link'
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
      r: 6.5,
      color: TYPE_COLOR[s.type] || '#94a3b8',
    })
    
    // Connect pillars to sources
    links.push({ 
      source: `pillar::${s.pillar}`, 
      target: sid,
      type: 'source-link'
    })
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

  const dims = useRef({ w: 1200, h: 800 })

  // Resize observer to keep the SVG responsive
  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver((entries) => {
      const e = entries[0]
      const w = Math.max(320, e.contentRect.width)
      const h = Math.max(500, Math.min(900, w * 0.65))
      dims.current = { w, h }
      const svg = d3.select(svgRef.current)
      svg.attr('viewBox', `0 0 ${w} ${h}`)
      if (simRef.current) {
        simRef.current.force('center', d3.forceCenter(w / 2, h / 2).strength(0.05))
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
      .scaleExtent([0.1, 5])
      .on('zoom', (event) => root.attr('transform', event.transform))
    zoomRef.current = zoom
    svg.call(zoom)
    
    // Initial zoom out slightly to fit everything nicely
    svg.call(zoom.transform, d3.zoomIdentity.translate(w/2, h/2).scale(0.8).translate(-w/2, -h/2))

    // Definitions for subtle shadows
    const defs = svg.append('defs')
    
    // Subtle drop shadow instead of neon glow or radial gradients
    const shadowFilter = defs.append('filter').attr('id', 'elegant-shadow').attr('x', '-20%').attr('y', '-20%').attr('width', '140%').attr('height', '140%')
    shadowFilter.append('feDropShadow').attr('dx', 0).attr('dy', 4).attr('stdDeviation', 4).attr('flood-color', '#000000').attr('flood-opacity', 0.5)

    // Adjacency lookup for Spotlighting
    const linkedByIndex = {};
    links.forEach(d => {
      const sourceId = typeof d.source === 'object' ? d.source.id : d.source;
      const targetId = typeof d.target === 'object' ? d.target.id : d.target;
      linkedByIndex[`${sourceId},${targetId}`] = true;
      linkedByIndex[`${targetId},${sourceId}`] = true;
    });
    
    function isConnected(a, b) {
      return linkedByIndex[`${a.id},${b.id}`] || a.id === b.id || a.id === 'center::root';
    }

    // Advanced Physics Simulation
    const sim = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d) => d.id).distance((l) => {
        return l.type === 'center-link' ? 180 : 45; 
      }).strength((l) => l.type === 'center-link' ? 0.6 : 0.9))
      .force('charge', d3.forceManyBody().strength((d) => {
        if (d.type === 'center') return -1500;
        if (d.type === 'pillar') return -600;
        return -35;
      }))
      .force('center', d3.forceCenter(w / 2, h / 2).strength(0.05))
      .force('collide', d3.forceCollide().radius((d) => d.r + 4).iterations(3))
      .alphaDecay(0.02)
    simRef.current = sim

    // Links
    const link = root.append('g')
      .attr('class', 'sg-links')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', (d) => {
        const targetNode = nodes.find(n => n.id === (typeof d.target === 'object' ? d.target.id : d.target))
        return targetNode ? targetNode.color : '#475569'
      })
      .style('stroke-opacity', l => l.type === 'center-link' ? 0.3 : 0.15)
      .style('stroke-width', l => l.type === 'center-link' ? 2 : 1)

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

    // Elegant Flat Circles with thick borders
    node.append('circle')
      .attr('r', (d) => d.r)
      .attr('fill', (d) => d.type === 'center' ? '#0f172a' : d.color) // Center is dark, pillars are their solid color
      .attr('stroke', (d) => d.type === 'center' ? '#ffffff' : (d.type === 'pillar' ? '#ffffff' : 'none'))
      .attr('stroke-width', (d) => d.type === 'center' ? 3 : 2)
      .attr('fill-opacity', (d) => d.type === 'source' ? 1 : 0.95)
      .attr('filter', (d) => (d.type === 'pillar' || d.type === 'center') ? 'url(#elegant-shadow)' : null)

    // Text Labels for Center and Pillars
    node.filter((d) => d.type === 'pillar' || d.type === 'center')
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', (d) => -(d.r + 10))
      .attr('font-size', (d) => d.type === 'center' ? 18 : 12)
      .attr('font-weight', 800)
      .attr('font-family', '"Inter", system-ui, sans-serif')
      .attr('fill', '#f8fafc')
      .style('text-shadow', '0px 2px 4px rgba(0,0,0,0.8)')
      .attr('pointer-events', 'none')
      .text((d) => d.label)

    // Node Count inside Pillars
    node.filter((d) => d.type === 'pillar')
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.32em')
      .attr('font-size', 12)
      .attr('font-weight', 800)
      .attr('fill', '#ffffff')
      .attr('pointer-events', 'none')
      .text((d) => d.count)

    // Hover / Click Interactions
    node
      .on('mouseenter', (event, d) => {
        setHover(d)
        // Spotlighting Effect
        node.transition().duration(300)
          .style('opacity', o => isConnected(d, o) ? 1 : 0.1)
        link.transition().duration(300)
          .style('stroke-opacity', o => (o.source.id === d.id || o.target.id === d.id) ? 0.9 : 0.05)
          .style('stroke-width', o => (o.source.id === d.id || o.target.id === d.id) ? 3 : 0.5)
      })
      .on('mouseleave', () => {
        setHover(null)
        // Reset Spotlighting
        node.transition().duration(400).style('opacity', 1)
        link.transition().duration(400)
          .style('stroke-opacity', l => l.type === 'center-link' ? 0.4 : 0.2)
          .style('stroke-width', l => l.type === 'center-link' ? 2 : 1)
      })
      .on('click', (event, d) => {
        event.stopPropagation()
        if (d.type === 'source') setSelected(d)
        if (d.type === 'pillar' || d.type === 'center') {
          sim.alpha(0.3).restart()
        }

        // Cinematic Camera Panning
        const scale = d.type === 'center' ? 1.2 : (d.type === 'pillar' ? 1.8 : 3.5)
        const transform = d3.zoomIdentity
          .translate(w / 2, h / 2)
          .scale(scale)
          .translate(-d.x, -d.y)
          
        svg.transition()
          .duration(850)
          .ease(d3.easeCubicOut)
          .call(zoomRef.current.transform, transform)
      })

    svg.on('click', () => {
      setSelected(null)
      // Reset camera
      svg.transition()
        .duration(850)
        .ease(d3.easeCubicOut)
        .call(zoomRef.current.transform, d3.zoomIdentity.translate(w/2, h/2).scale(0.8).translate(-w/2, -h/2))
    })

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
    const { w, h } = dims.current
    if (dir === 'reset') {
      svg.transition().duration(600).call(zoomRef.current.transform, d3.zoomIdentity.translate(w/2, h/2).scale(0.8).translate(-w/2, -h/2))
      return
    }
    svg.transition().duration(300).call(zoomRef.current.scaleBy, dir === 'in' ? 1.5 : 1 / 1.5)
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
          A dynamic, force-directed intelligence network. The central core coordinates {Object.keys(pillarMeta).length} distinct pillars, tracking all {allSources.length} citations. 
          Hover over nodes to isolate their streams. Click to automatically pan the camera and inspect the data.
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

      {/* Graph Container (Dark Mode Sci-Fi aesthetic) */}
      <div ref={containerRef} className="relative w-full border border-gray-800 rounded-xl bg-slate-950 overflow-hidden shadow-2xl" style={{ minHeight: 600 }}>
        
        {/* Subtle grid background to enhance the command-center feel */}
        <div className="absolute inset-0 pointer-events-none opacity-20" 
             style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

        <svg
          ref={svgRef}
          className="w-full h-full block relative z-10"
          style={{ minHeight: 600 }}
          role="img"
          aria-label={`Force-directed graph of ${allSources.length} citations`}
        />

        {/* Hover tooltip */}
        {hover && (
          <div
            className="absolute top-4 left-4 max-w-md p-4 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl pointer-events-none z-50 transition-all"
          >
            {hover.type === 'center' ? (
               <>
                 <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                   Network Core
                 </div>
                 <div className="font-serif font-bold text-white text-xl mt-1">{hover.label}</div>
                 <div className="text-xs text-slate-400 mt-2">Connecting {Object.keys(pillarMeta).length} pillars and {allSources.length} data streams.</div>
               </>
            ) : hover.type === 'pillar' ? (
              <>
                <div className="text-[10px] uppercase tracking-widest font-bold" style={{ color: hover.color }}>
                  Data Pillar · {hover.count} sources
                </div>
                <div className="font-serif font-bold text-white text-lg mt-1">{hover.label}</div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ backgroundColor: hover.color }}></div>
                  <div className="text-[10px] uppercase tracking-widest font-bold" style={{ color: hover.color }}>
                    {hover.kind}
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                  {hover.pillar}{hover.district ? ` · ${hover.district}` : ''}
                </div>
                <div className="text-sm text-slate-200 mt-2 leading-relaxed line-clamp-3 font-medium">{hover.title}</div>
                <div className="text-[10px] text-slate-500 mt-3 font-mono uppercase tracking-widest">click to inspect stream</div>
              </>
            )}
          </div>
        )}

        {/* Selected source card */}
        {selected && (
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-5 bg-slate-900/95 backdrop-blur-md border border-slate-600 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50 animate-in slide-in-from-bottom-4">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 mb-2">
               <div className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ backgroundColor: selected.color }}></div>
               <div className="text-[10px] uppercase tracking-widest font-bold" style={{ color: selected.color }}>
                 {selected.kind}
               </div>
            </div>
            <div className="text-[11px] text-slate-400 mb-2 uppercase tracking-wider font-semibold">
              {selected.pillar}{selected.district ? ` · ${selected.district}` : ''}
            </div>
            <div className="font-serif font-bold text-white text-lg mt-1 pr-6 leading-tight">{selected.title}</div>
            
            <a
              href={selected.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-xs font-bold text-white uppercase tracking-widest bg-crimson hover:bg-red-700 rounded transition-colors shadow-lg shadow-red-900/50"
            >
              <ExternalLink className="w-4 h-4" /> Access Terminal
            </a>
          </div>
        )}

        {/* Touch / a11y hint */}
        <div className="absolute top-3 right-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest select-none pointer-events-none">
          Drag · Pan · Zoom
        </div>
      </div>

      {/* Accessibility fallback list */}
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
