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

function computeTargetPositions(nodes, w, h) {
  const centerNode = nodes.find(n => n.type === 'center');
  if (centerNode) {
    centerNode.targetX = w / 2;
    centerNode.targetY = h / 2;
  }

  const pillars = nodes.filter(n => n.type === 'pillar');
  const numPillars = pillars.length;
  const r1 = Math.min(w, h) * 0.28;

  pillars.forEach((p, idx) => {
    const angle = (2 * Math.PI * idx) / numPillars;
    p.targetX = w / 2 + r1 * Math.cos(angle);
    p.targetY = h / 2 + r1 * Math.sin(angle);
    
    const childSources = nodes.filter(n => n.type === 'source' && n.pillar === p.pillar);
    const numSources = childSources.length;
    const r_satellite = Math.max(55, Math.min(95, 45 + Math.sqrt(numSources) * 5.5));

    childSources.forEach((s, sIdx) => {
      const sAngle = (2 * Math.PI * sIdx) / numSources;
      s.targetX = p.targetX + r_satellite * Math.cos(sAngle);
      s.targetY = p.targetY + r_satellite * Math.sin(sAngle);
    });
  });
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
  const [layoutMode, setLayoutMode] = useState('force')
  const layoutModeRef = useRef(layoutMode)

  useEffect(() => {
    layoutModeRef.current = layoutMode
  }, [layoutMode])

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

    // Resolve link sources and targets to objects dynamically to prevent undefined errors in custom paths
    links.forEach(l => {
      if (typeof l.source === 'string') {
        l.source = nodes.find(n => n.id === l.source) || l.source;
      }
      if (typeof l.target === 'string') {
        l.target = nodes.find(n => n.id === l.target) || l.target;
      }
    });

    // Secondary links group (behind main links)
    const secondaryGroup = root.append('g').attr('class', 'sg-secondary-links')

    // Links base paths
    const link = root.append('g')
      .attr('class', 'sg-links')
      .selectAll('path')
      .data(links)
      .enter()
      .append('path')
      .attr('fill', 'none')
      .attr('stroke', (d) => {
        const targetId = typeof d.target === 'object' ? d.target.id : d.target
        const targetNode = nodes.find(n => n.id === targetId)
        return targetNode ? targetNode.color : '#475569'
      })
      .style('stroke-opacity', l => {
        return l.type === 'center-link' ? 0.35 : 0.15;
      })
      .style('stroke-width', l => {
        return l.type === 'center-link' ? 2 : 1;
      })

    // Flowing pulse overlay paths
    const flowLink = root.append('g')
      .attr('class', 'sg-flows')
      .selectAll('path')
      .data(links)
      .enter()
      .append('path')
      .attr('fill', 'none')
      .attr('stroke', (d) => {
        const targetId = typeof d.target === 'object' ? d.target.id : d.target
        const targetNode = nodes.find(n => n.id === targetId)
        return targetNode ? targetNode.color : '#3b82f6'
      })
      .attr('class', 'sg-flow-line')
      .style('stroke-opacity', l => {
        return l.type === 'center-link' ? 0.45 : 0.25;
      })
      .style('stroke-width', l => {
        return l.type === 'center-link' ? 2 : 1;
      })
      .style('pointer-events', 'none')

    // Setup Physics Simulation based on initial layoutMode
    const sim = d3.forceSimulation(nodes);
    
    if (layoutModeRef.current === 'radial') {
      computeTargetPositions(nodes, w, h);
      sim.force('x', d3.forceX(d => d.targetX).strength(0.18))
         .force('y', d3.forceY(d => d.targetY).strength(0.18))
         .force('collide', d3.forceCollide().radius(d => d.r + 3).strength(0.4));
    } else {
      sim.force('link', d3.forceLink(links).id((d) => d.id).distance((l) => {
        return l.type === 'center-link' ? 180 : 45; 
      }).strength((l) => l.type === 'center-link' ? 0.6 : 0.9))
      .force('charge', d3.forceManyBody().strength((d) => {
        if (d.type === 'center') return -1500;
        if (d.type === 'pillar') return -600;
        return -35;
      }))
      .force('center', d3.forceCenter(w / 2, h / 2).strength(0.05))
      .force('collide', d3.forceCollide().radius((d) => d.r + 4).iterations(3));
    }
    
    sim.alphaDecay(0.02)
    simRef.current = sim

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

    // Elegant Soft Rounded Rectangles (Squarcles)
    node.append('rect')
      .attr('x', (d) => -d.r)
      .attr('y', (d) => -d.r)
      .attr('width', (d) => d.r * 2)
      .attr('height', (d) => d.r * 2)
      .attr('rx', (d) => d.type === 'center' ? 12 : (d.type === 'pillar' ? 8 : 4)) // Soft rounded corners
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

    // Hover / Click Interactions (delegated to separate React-based highlight effect)
    node
      .on('mouseenter', (event, d) => {
        setHover(d)
      })
      .on('mouseleave', () => {
        setHover(null)
      })
      .on('click', (event, d) => {
        event.stopPropagation()
        
        if (d.type === 'source') {
          setSelected(d)
        } else {
          setSelected(null)
        }

        if (d.type === 'pillar' || d.type === 'center') {
          sim.alpha(0.3).restart()
        }

        // Cinematic Camera Panning
        const isSource = d.type === 'source'
        const shiftX = isSource ? (w * 0.15) : 0
        const scale = d.type === 'center' ? 1.2 : (d.type === 'pillar' ? 1.8 : 3.2)
        const transform = d3.zoomIdentity
          .translate(w / 2 - shiftX, h / 2)
          .scale(scale)
          .translate(-d.x, -d.y)
          
        svg.transition()
          .duration(850)
          .ease(d3.easeCubicOut)
          .call(zoomRef.current.transform, transform)
      })

    svg.on('click', () => {
      setSelected(null)
      svg.transition()
        .duration(850)
        .ease(d3.easeCubicOut)
        .call(zoomRef.current.transform, d3.zoomIdentity.translate(w/2, h/2).scale(0.8).translate(-w/2, -h/2))
    })

    // Curved Bezier link path generator
    function linkPath(d) {
      const sx = d.source.x || 0;
      const sy = d.source.y || 0;
      const tx = d.target.x || 0;
      const ty = d.target.y || 0;
      
      const mx = (sx + tx) / 2;
      const my = (sy + ty) / 2;
      
      const cx = w / 2;
      const cy = h / 2;
      const k = 0.12;
      const ctrlX = mx + (cx - mx) * k;
      const ctrlY = my + (cy - my) * k;
      
      return `M${sx},${sy} Q${ctrlX},${ctrlY} ${tx},${ty}`;
    }

    sim.on('tick', () => {
      link.attr('d', linkPath)
      flowLink.attr('d', linkPath)

      // Update secondary links positions on tick
      const secondaryLinks = secondaryGroup.selectAll('path')
      if (!secondaryLinks.empty()) {
        secondaryLinks.attr('d', d => {
          const sx = d.source.x || 0;
          const sy = d.source.y || 0;
          const tx = d.target.x || 0;
          const ty = d.target.y || 0;
          const mx = (sx + tx) / 2;
          const my = (sy + ty) / 2;
          const dx = tx - sx;
          const dy = ty - sy;
          const len = Math.sqrt(dx*dx + dy*dy) || 1;
          const offset = 30;
          const px = -dy / len * offset;
          const py = dx / len * offset;
          return `M${sx},${sy} Q${mx + px},${my + py} ${tx},${ty}`;
        });
      }

      node.attr('transform', (d) => `translate(${d.x},${d.y})`)
    })

    return () => sim.stop()
  }, [nodes, links])

  // Separate useEffect to handle layout mode changes dynamically
  useEffect(() => {
    const sim = simRef.current
    if (!sim) return
    const { w, h } = dims.current

    if (layoutMode === 'radial') {
      computeTargetPositions(nodes, w, h);
      
      // Remove generic forces
      sim.force('charge', null)
      sim.force('link', null)
      sim.force('center', null)
      
      // Add positioning forces to targetX/targetY
      sim.force('x', d3.forceX(d => d.targetX).strength(0.18))
      sim.force('y', d3.forceY(d => d.targetY).strength(0.18))
      sim.force('collide', d3.forceCollide().radius(d => d.r + 3).strength(0.4))
      
      sim.alpha(0.6).restart()
    } else {
      // Remove targeting forces
      sim.force('x', null)
      sim.force('y', null)
      
      // Re-apply original forces
      sim.force('link', d3.forceLink(links).id((d) => d.id).distance((l) => {
        return l.type === 'center-link' ? 180 : 45; 
      }).strength((l) => l.type === 'center-link' ? 0.6 : 0.9))
      .force('charge', d3.forceManyBody().strength((d) => {
        if (d.type === 'center') return -1500;
        if (d.type === 'pillar') return -600;
        return -35;
      }))
      .force('center', d3.forceCenter(w / 2, h / 2).strength(0.05))
      .force('collide', d3.forceCollide().radius((d) => d.r + 4).iterations(3))
      
      sim.alpha(0.6).restart()
    }
  }, [layoutMode, nodes, links])

  // Separate useEffect to handle selection/hover highlighting and secondary linkages
  useEffect(() => {
    const svg = d3.select(svgRef.current)
    if (svg.empty()) return

    const node = svg.selectAll('.sg-node')
    const link = svg.selectAll('.sg-links path')
    const flowLink = svg.selectAll('.sg-flows path')
    
    const activeNode = selected || hover
    
    // Adjacency lookup for spotlighting
    const linkedByIndex = {};
    links.forEach(d => {
      const sourceId = d.source?.id || d.source;
      const targetId = d.target?.id || d.target;
      linkedByIndex[`${sourceId},${targetId}`] = true;
      linkedByIndex[`${targetId},${sourceId}`] = true;
    });
    
    function isConnected(a, b) {
      return linkedByIndex[`${a.id},${b.id}`] || a.id === b.id || a.id === 'center::root';
    }

    if (activeNode) {
      node.transition().duration(250)
        .style('opacity', o => isConnected(activeNode, o) ? 1 : 0.15)
      
      link.transition().duration(250)
        .style('stroke-opacity', o => (o.source?.id === activeNode.id || o.target?.id === activeNode.id) ? 0.95 : 0.05)
        .style('stroke-width', o => (o.source?.id === activeNode.id || o.target?.id === activeNode.id) ? 2.5 : 0.5)

      flowLink.transition().duration(250)
        .style('stroke-opacity', o => (o.source?.id === activeNode.id || o.target?.id === activeNode.id) ? 1.0 : 0.02)
        .attr('class', o => (o.source?.id === activeNode.id || o.target?.id === activeNode.id) ? 'sg-flow-line-active' : 'sg-flow-line')
    } else {
      node.transition().duration(250).style('opacity', 1)
      
      link.transition().duration(250)
        .style('stroke-opacity', l => l.type === 'center-link' ? 0.35 : 0.15)
        .style('stroke-width', l => l.type === 'center-link' ? 2 : 1)

      flowLink.transition().duration(250)
        .style('stroke-opacity', l => l.type === 'center-link' ? 0.45 : 0.25)
        .attr('class', 'sg-flow-line')
    }
    
    // Draw secondary linkages for nodes sharing the same district
    const secondaryGroup = svg.select('.sg-secondary-links')
    if (!secondaryGroup.empty()) {
      secondaryGroup.selectAll('*').remove()
      const focusNode = selected || hover
      if (focusNode && focusNode.type === 'source' && focusNode.district) {
        const sameDistrictNodes = nodes.filter(n => 
          n.type === 'source' && 
          n.district === focusNode.district && 
          n.id !== focusNode.id
        );
        
        if (sameDistrictNodes.length > 0) {
          const secLinksData = sameDistrictNodes.map(targetNode => ({
            source: focusNode,
            target: targetNode
          }));
          
          secondaryGroup.selectAll('path')
            .data(secLinksData)
            .enter()
            .append('path')
            .attr('fill', 'none')
            .attr('stroke', '#B84A3E') // theme crimson
            .attr('stroke-width', 2)
            .attr('stroke-dasharray', '5, 5')
            .attr('stroke-opacity', 0.8)
            .attr('d', d => {
              const sx = d.source.x || 0;
              const sy = d.source.y || 0;
              const tx = d.target.x || 0;
              const ty = d.target.y || 0;
              const mx = (sx + tx) / 2;
              const my = (sy + ty) / 2;
              const dx = tx - sx;
              const dy = ty - sy;
              const len = Math.sqrt(dx*dx + dy*dy) || 1;
              const offset = 30;
              const px = -dy / len * offset;
              const py = dx / len * offset;
              return `M${sx},${sy} Q${mx + px},${my + py} ${tx},${ty}`;
            })
            .style('filter', 'drop-shadow(0 0 3px rgba(184, 74, 62, 0.5))')
            .append('animate')
            .attr('attributeName', 'stroke-dashoffset')
            .attr('values', '0;-20')
            .attr('dur', '1.2s')
            .attr('repeatCount', 'indefinite');
        }
      }
    }
  }, [selected, hover, nodes, links])

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
        title="The Evidence Web · Project Alphono 34"
        description={`Interactive force-directed map of ${allSources.length} citations across ${Object.keys(pillarMeta).length} pillars and ${districtList.length} districts. Every claim, every source, woven together.`}
        path="/source-graph"
      />

      {/* Header */}
      <header className="mb-6">
        <Link to="/sources" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-crimson transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to source index
        </Link>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3">
          The Evidence <span className="text-crimson italic">Web</span>
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

        <div className="flex border border-gray-300 rounded overflow-hidden">
          <button
            onClick={() => setLayoutMode('force')}
            className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
              layoutMode === 'force'
                ? 'bg-crimson text-white'
                : 'bg-white hover:bg-gray-100 text-gray-700'
            }`}
          >
            Board Layout
          </button>
          <button
            onClick={() => setLayoutMode('radial')}
            className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider border-l border-gray-300 transition-colors ${
              layoutMode === 'radial'
                ? 'bg-crimson text-white'
                : 'bg-white hover:bg-gray-100 text-gray-700'
            }`}
          >
            Constellation
          </button>
        </div>



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

      {/* Graph Container */}
      <div 
        ref={containerRef} 
        className="relative w-full border border-gray-800 bg-slate-950 rounded-xl overflow-hidden shadow-2xl transition-all duration-500"
        style={{ minHeight: 600 }}
      >
        
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
            className="absolute top-4 left-4 max-w-md p-4 backdrop-blur-md bg-slate-900/95 border border-slate-700 text-slate-200 rounded-xl shadow-2xl pointer-events-none z-50 transition-all"
          >
            {hover.type === 'center' ? (
               <>
                 <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                   Network Core
                 </div>
                 <div className="font-serif font-bold text-xl mt-1 text-white">{hover.label}</div>
                 <div className="text-xs mt-2 text-slate-400">Connecting {Object.keys(pillarMeta).length} pillars and {allSources.length} data streams.</div>
               </>
            ) : hover.type === 'pillar' ? (
              <>
                <div className="text-[10px] uppercase tracking-widest font-bold" style={{ color: hover.color }}>
                  Data Pillar · {hover.count} sources
                </div>
                <div className="font-serif font-bold text-lg mt-1 text-white">{hover.label}</div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ backgroundColor: hover.color }}></div>
                  <div className="text-[10px] uppercase tracking-widest font-bold" style={{ color: hover.color }}>
                    {hover.kind}
                  </div>
                </div>
                <div className="text-[11px] mt-1 uppercase tracking-wider font-semibold text-slate-400">
                  {hover.pillar}{hover.district ? ` · ${hover.district}` : ''}
                </div>
                <div className="text-sm mt-2 leading-relaxed line-clamp-3 font-medium text-slate-200">{hover.title}</div>
                <div className="text-[10px] mt-3 font-mono uppercase tracking-widest text-slate-500">click to inspect stream</div>
              </>
            )}
          </div>
        )}

        {/* Touch / a11y hint */}
        <div className="absolute top-3 right-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest select-none pointer-events-none">
          Drag · Pan · Zoom
        </div>
      </div>

      {/* Cinematic Side Sheet panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] backdrop-blur-md bg-slate-950/95 border-l border-slate-800 text-slate-200 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-[60] transition-transform duration-500 ease-in-out transform flex flex-col ${
          selected ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selected && (
          <>
            {/* Header / Close button */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Source Dossier</span>
                <h3 className="text-lg font-serif font-bold mt-0.5 text-white">Terminal Inspection</h3>
              </div>
              <button 
                onClick={() => {
                  setSelected(null)
                  const svg = d3.select(svgRef.current)
                  if (zoomRef.current && svgRef.current) {
                    const { w, h } = dims.current
                    svg.transition()
                      .duration(850)
                      .ease(d3.easeCubicOut)
                      .call(zoomRef.current.transform, d3.zoomIdentity.translate(w/2, h/2).scale(0.8).translate(-w/2, -h/2))
                  }
                }}
                className="p-2 rounded-full text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
                aria-label="Close dossier"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Dossier Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded border"
                  style={{ color: selected.color, borderColor: `${selected.color}40`, backgroundColor: `${selected.color}15` }}
                >
                  {selected.kind}
                </span>
                {selected.district && (
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded border flex items-center gap-1 border-slate-800 bg-slate-900 text-slate-300">
                    <MapPin className="w-3 h-3 text-crimson" /> {selected.district}
                  </span>
                )}
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-800 bg-slate-900 text-slate-400">
                  {selected.pillar}
                </span>
              </div>

              {/* Title */}
              <div>
                <h4 className="text-xl font-serif font-bold leading-snug text-white">
                  {selected.title}
                </h4>
              </div>

              {/* District Cross-Connections */}
              {selected.district && (
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-lg">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-crimson font-bold flex items-center gap-1.5 mb-2">
                    <Layers className="w-3.5 h-3.5" /> District Cross-Connections
                  </div>
                  <p className="text-xs leading-relaxed text-slate-400">
                    This source targets <strong className="text-slate-200">{selected.district}</strong>. The active connections spotlight other critical supply chain vulnerabilities in the same geography.
                  </p>
                  
                  {/* List matching sources */}
                  <div className="mt-3 space-y-2">
                    <div className="text-[10px] font-mono uppercase text-slate-500">Linked Citations ({
                      nodes.filter(n => n.type === 'source' && n.district === selected.district && n.id !== selected.id).length
                    }):</div>
                    <ul className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                      {nodes.filter(n => n.type === 'source' && n.district === selected.district && n.id !== selected.id).map(n => (
                        <li key={n.id} className="text-[11px] flex items-start gap-1.5 text-slate-300 hover:text-white transition-colors">
                          <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: n.color }}></span>
                          <span className="line-clamp-2">{n.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Verification Context */}
              <div className="space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Verification Integrity</div>
                <p className="text-xs leading-relaxed text-slate-400">
                  Every source in the Alphono 34 repository has been cross-referenced with government publications, official audited records, or peer-reviewed academic literature to ensure accuracy of the stress-test simulator models.
                </p>
              </div>
            </div>

            {/* Footer / Action */}
            <div className="p-6 border-t border-slate-800 bg-slate-950">
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 text-xs font-bold text-white uppercase tracking-widest bg-crimson hover:bg-red-700 rounded transition-all shadow-lg hover:shadow-red-900/40"
              >
                <ExternalLink className="w-4 h-4" /> Access Source Document
              </a>
            </div>
          </>
        )}
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
