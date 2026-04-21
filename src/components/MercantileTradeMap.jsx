import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { tradeNodes, tradeArcs, tradeRouteSources, gujaratPortPortfolio } from "../data/tradeRoutesData";

// === GeoJSON endpoints (bundled locally in /public/geo) ====================
const worldGeoUrl = "/geo/world.geojson";
const indiaGeoUrl = "/geo/india.geojson";
const shippingGeoUrl = "/geo/shipping_lanes.geojson";
const indiaDensityGeoUrl = "/geo/india_marine_density.geojson";

// === Medieval-nautical palette =============================================
const COLORS = {
  land: "#EBE3D5",
  border: "#8D6E63",
  indiaLand: "#DFD3C3",
  indiaBorder: "#5D4037",
  node: "#3E2723",
  tooltipBg: "#F5EFE6",
  tooltipBorder: "#C8B6A6"
};

// Single-pass render. The earlier wrap-around (rendering the world 3x at
// ±equator-width offsets) produced seam artefacts and cut trade routes
// mid-stream, so the map is now drawn just once.
const MAP_SCALE = 155;

export default function MercantileTradeMap() {
  const [clickedNode, setClickedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ coordinates: [60, 15], zoom: 1 });
  const timeoutRef = React.useRef(null);

  const handleZoomIn = () => setPosition((p) => (p.zoom >= 8 ? p : { ...p, zoom: p.zoom * 1.5 }));
  const handleZoomOut = () => setPosition((p) => (p.zoom <= 1 ? p : { ...p, zoom: p.zoom / 1.5 }));
  const handleMoveEnd = (pos) => setPosition(pos);

  const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

  const handleNodeClick = (node) => {
    if (clickedNode?.id === node.id) setClickedNode(null);
    else { setClickedNode(node); setHoveredNode(null); }
  };
  const handleNodeEnter = (node) => {
    if (clickedNode) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredNode(node);
  };
  const handleNodeLeave = () => {
    timeoutRef.current = setTimeout(() => setHoveredNode(null), 150);
  };

  // ── Helpers ────────────────────────────────────────────────────────────
  const arcsForNode = (id) => tradeArcs.filter((a) => a.from === id || a.to === id);

  // ── Memoized Heavy SVG Elements ─────────────────────────────────────────
  // By memoizing the parsing and rendering of these massive geometric paths, 
  // zooming, panning, and hovering won't crush the standard 60fps refresh limit.
  const memoizedGeographies = React.useMemo(() => (
    <>
      <style>
        {`
          @keyframes flow-fast {
            to { stroke-dashoffset: -20; }
          }
          @keyframes flow-slow {
            to { stroke-dashoffset: -30; }
          }
          .current-lane {
            stroke-dasharray: 4 6;
            animation: flow-fast 1.2s linear infinite;
          }
          .density-lane {
            stroke-dasharray: 3 9;
            animation: flow-slow 2.5s linear infinite;
          }
          /* Pause animation on zoom/drag for performance stability if needed, but modern browsers handle this fine */
        `}
      </style>
      <Geographies geography={worldGeoUrl}>
        {({ geographies }) =>
          geographies
            .filter((geo) => geo.properties.name !== "India")
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: COLORS.land, outline: "none", stroke: COLORS.border, strokeWidth: 0.5 },
                  hover:   { fill: "#E0D5C1", outline: "none", stroke: COLORS.border, strokeWidth: 0.8 },
                  pressed: { fill: COLORS.land, outline: "none" },
                }}
              />
            ))
        }
      </Geographies>

      <Geographies geography={indiaGeoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: { fill: COLORS.indiaLand, outline: "none", stroke: COLORS.indiaBorder, strokeWidth: 0.8 },
                hover:   { fill: "#D5C4AF", outline: "none", stroke: COLORS.indiaBorder, strokeWidth: 1.2 },
                pressed: { fill: COLORS.indiaLand, outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      <Geographies geography={shippingGeoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: { fill: "none", outline: "none", stroke: "#3E2723", strokeWidth: 0.9, opacity: 0.6 },
                hover:   { fill: "none", outline: "none", stroke: "#8B0000", strokeWidth: 1.1, opacity: 1 },
                pressed: { fill: "none", outline: "none" },
              }}
              className="pointer-events-none current-lane"
            />
          ))
        }
      </Geographies>

      <Geographies geography={indiaDensityGeoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey || geo.properties?.route}
              geography={geo}
              style={{
                default: { fill: "none", outline: "none", stroke: "#1B1B1B", strokeWidth: 1.3, opacity: 0.6 },
                hover:   { fill: "none", outline: "none", stroke: "#8B0000", strokeWidth: 1.6, opacity: 1 },
                pressed: { fill: "none", outline: "none" },
              }}
              className="pointer-events-none density-lane drop-shadow-sm"
            />
          ))
        }
      </Geographies>
    </>
  ), []);

  return (
    <div
      className="relative w-full border-4 shadow-2xl overflow-hidden rounded-md"
      style={{
        borderColor: COLORS.border,
        backgroundColor: "#FDFBF7",
        backgroundImage: "radial-gradient(#E8E0D5 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Vignette overlaid on edges of the map to simulate burned parchment edges */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{ boxShadow: "inset 0 0 80px rgba(62, 39, 35, 0.4), inset 0 0 20px rgba(62, 39, 35, 0.8)", border: "2px solid #5D4037" }}></div>

      {/* Classical Compass Rose SVG */}
      <div className="absolute bottom-10 right-10 z-10 pointer-events-none opacity-40 mix-blend-multiply w-32 h-32">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#3E2723" strokeWidth="2" strokeDasharray="5 5" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#3E2723" strokeWidth="1" />
          <path d="M100 0 L115 85 L200 100 L115 115 L100 200 L85 115 L0 100 L85 85 Z" fill="none" stroke="#3E2723" strokeWidth="1.5" />
          <path d="M100 10 L110 90 L190 100 L110 110 L100 190 L90 110 L10 100 L90 90 Z" fill="#8B0000" opacity="0.8" />
          <path d="M100 10 L100 190 M10 100 L190 100" stroke="#F5EFE6" strokeWidth="1" />
          <text x="100" y="28" textAnchor="middle" fill="#3E2723" fontFamily="serif" fontSize="14" fontWeight="bold">N</text>
        </svg>
      </div>

      {/* Zoom controls only — the "Index Mercantilis" overlay is gone */}
      <div className="absolute top-6 right-6 z-20 flex flex-col gap-2">
        <button onClick={handleZoomIn} className="w-10 h-10 bg-[#3E2723] text-[#F5EFE6] font-bold text-xl rounded shadow hover:bg-[#8B0000] transition active:scale-95 border border-[#8D6E63] flex items-center justify-center">+</button>
        <button onClick={handleZoomOut} className="w-10 h-10 bg-[#3E2723] text-[#F5EFE6] font-bold text-xl rounded shadow hover:bg-[#8B0000] transition active:scale-95 border border-[#8D6E63] flex items-center justify-center">−</button>
      </div>

      {/* Bottom-left source counter */}
      <div className="absolute bottom-4 left-4 z-10 pointer-events-none bg-[#F5EFE6]/80 border border-[#8D6E63] px-3 py-1.5 rounded-sm">
        <span className="font-serif text-[10px] tracking-widest uppercase text-[#5D4037] font-bold">
          {tradeRouteSources.length} Sources · {tradeArcs.length} Routes · {tradeNodes.length} Nodes
        </span>
      </div>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: MAP_SCALE, rotate: [-30, 0, 0], center: [0, 15] }}
        className="w-full h-[600px] md:h-[800px] transition-transform duration-[1.5s] ease-in-out cursor-grab active:cursor-grabbing bg-[transparent]"
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          minZoom={1}
          maxZoom={8}
        >
          {/* ─── Base landmasses ────────────────────────────────────── */}
          {memoizedGeographies}

          {/* ═══════════ Node markers — rendered ONCE on the primary wrap
              (offset 0). A single Gujarat dot replaces the previous five. */}
          {tradeNodes.map((node) => {
            const isGujarat = node.id === "gujarat-coast";
            return (
              <Marker
                key={node.id}
                coordinates={node.coordinates}
                onMouseEnter={() => handleNodeEnter(node)}
                onMouseLeave={handleNodeLeave}
                onClick={() => handleNodeClick(node)}
                className="cursor-pointer"
              >
                {/* Gujarat = crimson double-ringed master node;
                    chokepoints = hollow dashed ring around a dot;
                    origins = plain filled dot. */}
                {isGujarat && (
                  <>
                    <circle r={18} fill="none" stroke="#8B0000" strokeWidth={1} strokeDasharray="2 2" opacity={0.6} />
                    <circle r={12} fill="#8B0000" stroke="#F5EFE6" strokeWidth={2} />
                    <circle r={5} fill="#F5EFE6" />
                  </>
                )}
                {!isGujarat && node.type === "chokepoint" && (
                  <>
                    <circle r={10} fill="transparent" stroke="#8B0000" strokeWidth={1} strokeDasharray="2 2" />
                    <circle r={4} fill={COLORS.node} stroke={COLORS.tooltipBg} strokeWidth={1.2} />
                  </>
                )}
                {!isGujarat && node.type !== "chokepoint" && (
                  <circle r={6} fill={COLORS.node} stroke={COLORS.tooltipBg} strokeWidth={1.5} />
                )}

                {(hoveredNode?.id === node.id || clickedNode?.id === node.id) && (
                  <text
                    textAnchor={node.textAnchor || "middle"}
                    dx={node.textOffset ? node.textOffset[0] : 0}
                    dy={node.textOffset ? node.textOffset[1] : -15}
                    style={{
                      fontFamily: "serif",
                      fontSize: isGujarat ? "16px" : "12px",
                      fill: isGujarat ? "#8B0000" : COLORS.border,
                      fontWeight: "900",
                      textShadow: "1px 1px 0px #F5EFE6, -1px -1px 0px #F5EFE6, 1px -1px 0px #F5EFE6, -1px 1px 0px #F5EFE6"
                    }}
                    className="pointer-events-none uppercase tracking-widest"
                  >
                    {node.name}
                  </text>
                )}
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      {/* ══════════════════════ Hover tooltip ══════════════════════════
          PORTALLED to document.body. This is critical: the parent page
          wraps the map in a framer-motion <motion.div> which applies a
          transform — any transformed ancestor breaks `position: fixed`
          and lets overflow-hidden containers clip our tooltip. A portal
          sidesteps both problems. */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {hoveredNode && !clickedNode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="fixed z-[9999] pointer-events-none"
              style={{
                // Clamp tooltip coords to the viewport so long entries
                // (Novorossiysk, Malacca, etc.) never clip at any edge.
                // Reserve ~380 px below the cursor for the tallest card.
                left: Math.max(
                  12,
                  Math.min(
                    mousePosition.x + 20,
                    (typeof window !== "undefined" ? window.innerWidth : 1200) - 332
                  )
                ),
                top: Math.max(
                  12,
                  Math.min(
                    mousePosition.y + 20,
                    (typeof window !== "undefined" ? window.innerHeight : 900) - 380
                  )
                ),
                width: "300px",
              }}
            >
              <div
                className="p-4 shadow-2xl relative"
                style={{
                  backgroundColor: COLORS.tooltipBg,
                  border: `2px solid ${COLORS.tooltipBorder}`,
                  boxShadow: "5px 5px 15px rgba(62, 39, 35, 0.2)",
                }}
              >
                <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#8D6E63]" />
                <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#8D6E63]" />
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#8D6E63]" />
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#8D6E63]" />

                <span className="text-[10px] font-serif font-bold tracking-widest uppercase text-[#8B0000] block mb-1">
                  {hoveredNode.region} — {hoveredNode.type.replace("-", " ")}
                </span>
                <h4 className="text-xl font-serif font-black text-[#3E2723] leading-tight mb-2">
                  {hoveredNode.name}
                </h4>
                <p className="text-sm font-serif text-[#3E2723] leading-relaxed italic border-t border-[#C8B6A6] pt-2">
                  {hoveredNode.details || hoveredNode.summary}
                </p>
                <div className="mt-3 text-[9px] uppercase font-bold tracking-widest text-[#8D6E63] text-center">
                  [ Click to Pin Record ]
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* ══════════════════════ Clicked pinned ledger ══════════════════
          Also portalled to document.body so the centered modal is truly
          centered in the viewport (not inside the clipping map box). */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {clickedNode && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#3E2723]/30 backdrop-blur-md pointer-events-auto" onClick={() => setClickedNode(null)}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 5 }}
                transition={{ duration: 0.15 }}
                className="relative w-full max-w-[380px] max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="p-8 relative shadow-2xl bg-[#FDFBF7]"
                  style={{
                    border: `10px solid #EBE3D5`,
                    boxShadow: "0 25px 50px -12px rgba(62, 39, 35, 0.5), inset 0 0 20px rgba(141, 110, 99, 0.1)",
                    borderImage: "linear-gradient(to right, #8D6E63 10%, #EBE3D5 50%, #8D6E63 90%) 1",
                  }}
                >
                  {/* Decorative Archival Corner Pieces */}
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#3E2723]"></div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#3E2723]"></div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#3E2723]"></div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#3E2723]"></div>

                  <button
                    onClick={() => setClickedNode(null)}
                    className="absolute top-4 right-4 text-[#8D6E63] hover:text-[#8B0000] transition-colors bg-[#F5EFE6] p-1 rounded-sm border border-[#8D6E63]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>

                  {/* Faux Wax Seal Component */}
                  <div className="absolute top-6 left-6 w-12 h-12 rotate-[-15deg] opacity-90 drop-shadow-md">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 5 C75 0 95 20 90 50 C95 80 75 95 50 90 C25 95 5 80 10 50 C5 20 25 0 50 5 Z" fill="#8B0000" />
                      <circle cx="50" cy="48" r="30" fill="none" stroke="#5D0000" strokeWidth="2" />
                      <text x="50" y="55" fontFamily="serif" fontSize="24" fill="#EBE3D5" textAnchor="middle" fontWeight="black">IM</text>
                    </svg>
                  </div>

                  <div className="pl-16 pr-6 mb-6 pb-4 border-b-2 border-double border-[#8D6E63]">
                    <span className="text-[10px] font-serif font-black tracking-[0.2em] uppercase text-[#8B0000] block mb-1">
                      CLASSIFIED DOSSIER // {clickedNode.type.replace("-", " ")}
                    </span>
                    <h4 className="text-3xl font-serif font-black text-[#3E2723] leading-none uppercase tracking-tight">
                      {clickedNode.name}
                    </h4>
                  </div>

                  <div className="bg-[#F5EFE6] p-4 border border-[#C8B6A6] shadow-inner mb-6 relative">
                    <div className="absolute -left-[3px] top-[10%] w-[2px] h-[80%] bg-[#8B0000]"></div>
                    <p className="text-sm font-serif text-[#3E2723] leading-relaxed text-justify relative z-10 first-letter:text-3xl first-letter:font-black first-letter:text-[#8B0000] first-letter:float-left first-letter:mr-1">
                      {clickedNode.details || clickedNode.summary}
                    </p>
                  </div>

                  {/* Gujarat-specific: list the 5 ports collapsed into this node */}
                  {clickedNode.id === "gujarat-coast" && (
                    <div className="mb-4">
                      <h5 className="text-[11px] font-black uppercase tracking-[0.15em] border-b border-[#8D6E63] pb-1 text-[#3E2723] mb-3 flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#8B0000]"></span> Domestic Port Complex
                      </h5>
                      <ul className="space-y-3 px-2">
                        {gujaratPortPortfolio.ports.map((p) => (
                          <li key={p.name} className="flex gap-3 text-xs font-serif group">
                            <span className="text-[#8B0000] mt-1 shrink-0 font-serif opacity-70 group-hover:opacity-100 transition-opacity">❧</span>
                            <div>
                              <strong className="text-[#3E2723] uppercase tracking-widest block text-[10px]">{p.name}</strong>
                              <span className="text-[#5D4037] italic leading-snug">{p.detail}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Arcs touching this node */}
                  <div>
                    <h5 className="text-[11px] font-black uppercase tracking-[0.15em] border-b border-[#8D6E63] pb-1 text-[#3E2723] mb-3 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#8B0000]"></span> Recorded Trade Arcs
                    </h5>
                    <ul className="grid grid-cols-1 gap-2 bg-[#F5EFE6] p-3 border border-[#C8B6A6]">
                      {arcsForNode(clickedNode.id).map((arc) => (
                        <li key={arc.id} className="text-xs font-serif text-[#3E2723] flex items-center border-b border-dotted border-[#C8B6A6] pb-1 last:border-0 last:pb-0">
                          <span className="text-[#8B0000] font-black w-4">›</span>
                          <span className="font-bold mr-2 uppercase tracking-wider text-[10px]">{arc.name}</span>
                          <span className="text-[#5D4037] italic ml-auto text-[10px]">{arc.value}</span>
                        </li>
                      ))}
                      {arcsForNode(clickedNode.id).length === 0 && (
                        <li className="text-xs font-serif text-[#8D6E63] italic text-center py-2">
                          No primary arcs officially logged connecting directly to this junction.
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </div>
  );
}
