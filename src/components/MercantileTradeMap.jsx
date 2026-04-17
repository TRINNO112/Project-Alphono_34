import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { tradeNodes, tradeArcs, getCoords } from "../data/tradeRoutesData";

// GeoJSON endpoints
const worldGeoUrl = "/geo/world.geojson";
const indiaGeoUrl = "/geo/india.geojson";
const shippingGeoUrl = "/geo/shipping_lanes.geojson";
const indiaDensityGeoUrl = "/geo/india_marine_density.geojson";

// Medieval Palette
const COLORS = {
  ocean: "transparent",
  land: "#EBE3D5", // Faded parchment land
  border: "#8D6E63", // Sepia ink borders
  indiaLand: "#DFD3C3", // Slightly denser parchment for India
  indiaBorder: "#5D4037", // Darker ink for India's borders
  tradeLine: "#8B0000", // Dried blood crimson for routes
  node: "#3E2723", // Dark espresso ink for markers
  tooltipBg: "#F5EFE6", // Light parchment for tooltip
  tooltipBorder: "#C8B6A6"
};

export default function MercantileTradeMap() {
  const [clickedNode, setClickedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ coordinates: [75, 10], zoom: 1 });
  const timeoutRef = React.useRef(null);

  const handleZoomIn = () => {
    if (position.zoom >= 8) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  // Projection configuration (Mercator gives the classic nautical chart look)

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleNodeClick = (node) => {
    if (clickedNode?.id === node.id) {
      setClickedNode(null);
    } else {
      setClickedNode(node);
      setHoveredNode(null);
    }
  };

  const handleNodeEnter = (node) => {
    if (clickedNode) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredNode(node);
  };

  const handleNodeLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredNode(null);
    }, 150);
  };

  return (
    <div 
      className="relative w-full border-4 shadow-2xl overflow-hidden rounded-md"
      style={{ 
        borderColor: COLORS.border, 
        backgroundColor: "#FDFBF7", // Ultra-light parchment background acting as ocean
        backgroundImage: "radial-gradient(#E8E0D5 1px, transparent 1px)", // Subtle grid notebook feel
        backgroundSize: "20px 20px"
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-6 left-6 z-10 pointer-events-none opacity-80 backdrop-blur-sm p-4 bg-[#F5EFE6]/50 border border-[#8D6E63] rounded-sm">
        <h2 className="font-serif text-3xl md:text-5xl text-[#3E2723] font-black tracking-widest uppercase mb-1" style={{ textShadow: "1px 1px 0px #fff" }}>
          Index Mercantilis
        </h2>
        <p className="font-serif text-xs md:text-sm tracking-widest text-[#8B0000] font-bold uppercase border-t border-[#8D6E63] pt-2">
          Global Flow & Geopolitical Chokepoints
        </p>
      </div>

      <div className="absolute top-6 right-6 z-20 flex flex-col gap-2">
        <button onClick={handleZoomIn} className="w-10 h-10 bg-[#3E2723] text-[#F5EFE6] font-bold text-xl rounded shadow hover:bg-[#8B0000] transition active:scale-95 border border-[#8D6E63] flex items-center justify-center">
          +
        </button>
        <button onClick={handleZoomOut} className="w-10 h-10 bg-[#3E2723] text-[#F5EFE6] font-bold text-xl rounded shadow hover:bg-[#8B0000] transition active:scale-95 border border-[#8D6E63] flex items-center justify-center">
          −
        </button>
      </div>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 220 }}
        className="w-full h-[600px] md:h-[800px] transition-transform duration-[1.5s] ease-in-out cursor-grab active:cursor-grabbing bg-[transparent]"
      >
        <ZoomableGroup 
          zoom={position.zoom} 
          center={position.coordinates} 
          onMoveEnd={handleMoveEnd}
          minZoom={1} 
          maxZoom={8}
        >
          {/* Ocean Shipping Lanes Layer */}
          <Geographies geography={shippingGeoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "none",
                      outline: "none",
                      stroke: "#5D4037", // Stronger dark ink for the routes
                      strokeWidth: 0.3,
                      opacity: 0.7
                    },
                    hover: { fill: "none", outline: "none", stroke: "#8B0000", strokeWidth: 0.5, opacity: 0.9 },
                    pressed: { fill: "none", outline: "none" },
                  }}
                  className="pointer-events-none"
                />
              ))
            }
          </Geographies>

          {/* Densified Indian Shipping Lanes Overlay */}
          <Geographies geography={indiaDensityGeoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey || geo.properties.route}
                  geography={geo}
                  style={{
                    default: {
                      fill: "none",
                      outline: "none",
                      stroke: "#3E2723", // Boldest dark ink for the concentration
                      strokeWidth: 0.6,
                      opacity: 0.8
                    },
                    hover: { fill: "none", outline: "none", stroke: "#8B0000", strokeWidth: 0.8, opacity: 1 },
                    pressed: { fill: "none", outline: "none" },
                  }}
                  className="pointer-events-none drop-shadow-md"
                />
              ))
            }
          </Geographies>

          {/* World Base Layer (Filtering out India to prevent border conflict) */}
          <Geographies geography={worldGeoUrl}>
          {({ geographies }) =>
            geographies
              .filter((geo) => geo.properties.name !== "India") 
              .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: COLORS.land,
                    outline: "none",
                    stroke: COLORS.border,
                    strokeWidth: 0.5,
                  },
                  hover: {
                    fill: "#E0D5C1",
                    outline: "none",
                    stroke: COLORS.border,
                    strokeWidth: 0.8,
                  },
                  pressed: {
                    fill: COLORS.land,
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>

        {/* Sovereign India Overlay Layer */}
        <Geographies geography={indiaGeoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: COLORS.indiaLand,
                    outline: "none",
                    stroke: COLORS.indiaBorder,
                    strokeWidth: 0.8,
                  },
                  hover: {
                    fill: "#D5C4AF",
                    outline: "none",
                    stroke: COLORS.indiaBorder,
                    strokeWidth: 1.2,
                  },
                  pressed: {
                    fill: COLORS.indiaLand,
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>



        {/* Trade Nodes / Markers */}
        {tradeNodes.map((node) => (
          <Marker
            key={node.id}
            coordinates={node.coordinates}
            onMouseEnter={() => handleNodeEnter(node)}
            onMouseLeave={handleNodeLeave}
            onClick={() => handleNodeClick(node)}
            className="cursor-pointer"
          >
            {/* The compass/stamp design for markers */}
            <circle 
              r={node.type === 'mega-port' ? 8 : 5} 
              fill={COLORS.node} 
              stroke={COLORS.tooltipBg} 
              strokeWidth={1.5} 
            />
            {node.type === 'mega-port' && (
              <circle r={12} fill="transparent" stroke={COLORS.tradeLine} strokeWidth={1} strokeDasharray="2,2" />
            )}
            
            {(hoveredNode?.id === node.id || clickedNode?.id === node.id) && (
              <text
                textAnchor={node.textAnchor || "middle"}
                dx={node.textOffset ? node.textOffset[0] : 0}
                dy={node.textOffset ? node.textOffset[1] : -15}
                style={{
                  fontFamily: "serif",
                  fontSize: node.region === "Gujarat" ? "14px" : "12px",
                  fill: COLORS.border,
                  fontWeight: "900",
                  textShadow: "1px 1px 0px #F5EFE6, -1px -1px 0px #F5EFE6, 1px -1px 0px #F5EFE6, -1px 1px 0px #F5EFE6"
                }}
                className="pointer-events-none uppercase tracking-widest"
              >
                {node.name}
              </text>
            )}
          </Marker>
        ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Medieval Hover Ledger (Tooltip) */}
      <AnimatePresence>
        {hoveredNode && !clickedNode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed z-50 pointer-events-none"
            style={{
              left: Math.min(mousePosition.x + 20, typeof window !== 'undefined' ? window.innerWidth - 300 : 1000),
              top: Math.min(mousePosition.y + 20, typeof window !== 'undefined' ? window.innerHeight - 200 : 1000),
              width: "280px"
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
              {/* Decorative corners */}
              <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#8D6E63]"></div>
              <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#8D6E63]"></div>
              <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#8D6E63]"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#8D6E63]"></div>

              <span className="text-[10px] font-serif font-bold tracking-widest uppercase text-[#8B0000] block mb-1">
                {hoveredNode.region} — {hoveredNode.type.replace("-", " ")}
              </span>
              <h4 className="text-xl font-serif font-black text-[#3E2723] leading-tight mb-2">
                {hoveredNode.name}
              </h4>
              <p className="text-sm font-serif text-[#5D4037] leading-relaxed italic border-t border-[#C8B6A6] pt-2">
                {hoveredNode.details}
              </p>
              <div className="mt-3 text-[9px] uppercase font-bold tracking-widest text-[#8D6E63] text-center">
                [ Click to Pin Record ]
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Medieval Pinned Ledger (Clicked Overlay) */}
      <AnimatePresence>
        {clickedNode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
            className="fixed z-50 pointer-events-auto"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "320px",
            }}
          >
            <div 
              className="p-6 relative shadow-2xl"
              style={{
                backgroundColor: COLORS.tooltipBg,
                border: `3px solid ${COLORS.indiaBorder}`,
                boxShadow: "10px 10px 25px rgba(62, 39, 35, 0.3)",
              }}
            >
              <button
                onClick={() => setClickedNode(null)}
                className="absolute top-3 right-3 text-[#5D4037] hover:text-[#8B0000] transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>

              <span className="text-[11px] font-serif font-bold tracking-widest uppercase text-[#8B0000] block mb-2 border-b-2 border-[#8B0000] pb-1 w-max">
                ARCHIVE RECORD // {clickedNode.type.replace("-", " ")}
              </span>
              <h4 className="text-2xl font-serif font-black text-[#3E2723] leading-tight mb-4">
                {clickedNode.name}
              </h4>
              <p className="text-base font-serif text-[#3E2723] leading-relaxed mb-4">
                {clickedNode.details}
              </p>
              
              {/* Linked Arcs Logic (If this node has flows) */}
              <div className="bg-[#EBE3D5] p-3 border border-[#C8B6A6]">
                <h5 className="text-[10px] uppercase tracking-widest font-bold text-[#5D4037] mb-2">Recorded Trade Arcs</h5>
                <ul className="space-y-1">
                  {tradeArcs.filter(a => a.from === clickedNode.id || a.to === clickedNode.id).map(arc => (
                    <li key={arc.id} className="text-xs font-serif text-[#8B0000] font-bold">
                      ☙ {arc.name} <span className="text-[#5D4037] font-normal italic">({arc.value})</span>
                    </li>
                  ))}
                  {tradeArcs.filter(a => a.from === clickedNode.id || a.to === clickedNode.id).length === 0 && (
                    <li className="text-xs font-serif text-[#5D4037] italic">No primary arcs logged to this specific junction.</li>
                  )}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
