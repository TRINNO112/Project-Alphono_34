export const tradeNodes = [
  // Local Gujarat Ports
  { id: "mundra", name: "Port of Mundra", region: "Gujarat", coordinates: [69.70, 22.84], type: "mega-port", details: "India's largest commercial port. Core handler of thermal coal from Indonesia and crude imports.", textOffset: [-10, -15], textAnchor: "end" },
  { id: "dahej", name: "Dahej Port", region: "Gujarat", coordinates: [72.58, 21.71], type: "chemical-hub", details: "Petronet LNG terminal and mega chemical processing arc. Heavily tied to Middle Eastern Qatar shipments.", textOffset: [15, 20], textAnchor: "start" },
  { id: "hazira", name: "Hazira Port", region: "Gujarat", coordinates: [72.63, 21.11], type: "industrial-gateway", details: "Steel and heavy manufacturing gateway. Massive coking coal dependencies from Australia and Africa.", textOffset: [15, 5], textAnchor: "start" },
  { id: "kandla", name: "Deendayal Port", region: "Gujarat", coordinates: [70.21, 23.03], type: "state-port", details: "Legacy state port handling massive volumes of petroleum, chemicals, and edible oils.", textOffset: [-15, 5], textAnchor: "end" },
  { id: "pipavav", name: "Pipavav Port", region: "Gujarat", coordinates: [71.50, 20.91], type: "transport-hub", details: "First private sector port, specialized in RORO and container shipping. Key export vector.", textOffset: [-10, 20], textAnchor: "end" },

  // Global Chokepoints / Origins
  { id: "hormuz", name: "Strait of Hormuz", region: "Middle East", coordinates: [56.25, 26.56], type: "chokepoint", details: "Over 85% of Gujarat's crude oil dependency flows through this geopolitical bottleneck.", textOffset: [15, -15], textAnchor: "start" },
  { id: "ras-tanura", name: "Ras Tanura", region: "Saudi Arabia", coordinates: [50.16, 26.66], type: "origin", details: "Massive Saudi Aramco crude export terminal feeding Kandla and Jamnagar refineries.", textOffset: [-15, 5], textAnchor: "end" },
  { id: "kalimantan", name: "Kalimantan Terminals", region: "Indonesia", coordinates: [116.0, 0.0], type: "origin", details: "Primary origin for low-grade thermal coal feeding the Mundra UMPP mega power plants.", textOffset: [10, 20], textAnchor: "start" },
  { id: "malacca", name: "Strait of Malacca", region: "Southeast Asia", coordinates: [101.3, 2.9], type: "chokepoint", details: "Crucial naval chokepoint for all coal and pharmaceutical raw material imports from East Asia.", textOffset: [-10, 20], textAnchor: "end" },
  { id: "shanghai", name: "Shanghai Corridors", region: "China", coordinates: [121.47, 31.23], type: "origin", details: "Vector origin for 70%+ of India's Active Pharmaceutical Ingredients (APIs) feeding the Ankleshwar/Vapi belts.", textOffset: [15, -10], textAnchor: "start" },
  { id: "gladstone", name: "Gladstone Hub", region: "Australia", coordinates: [151.25, -23.84], type: "origin", details: "Massive exporter of premium coking coal required for the blast furnaces of Hazira.", textOffset: [15, 5], textAnchor: "start" },
  { id: "qatar", name: "Ras Laffan", region: "Qatar", coordinates: [51.53, 25.93], type: "origin", details: "World's largest LNG export facility. Direct pipeline-to-ship network feeding Dahej.", textOffset: [-15, -15], textAnchor: "end" },
  { id: "richards-bay", name: "Richards Bay", region: "South Africa", coordinates: [32.09, -28.79], type: "origin", details: "African thermal coal export terminal acting as a secondary dependency for Gujarat power generation.", textOffset: [15, 5], textAnchor: "start" },
  { id: "suez", name: "Suez Canal", region: "Egypt", coordinates: [32.31, 30.58], type: "chokepoint", details: "The traditional European/US export route, highly vulnerable to Red Sea geopolitical volatility.", textOffset: [-10, -15], textAnchor: "end" },
  { id: "houston", name: "US Gulf Coast", region: "United States", coordinates: [-95.36, 29.76], type: "origin", details: "Massive petrochemical and LNG export vector flowing from Texas across the Atlantic into Dahej.", textOffset: [15, 0], textAnchor: "start" }
];

export const tradeArcs = [
  // Middle East to Gujarat
  { id: "arc-oil-1", name: "The Aramco Artery", type: "oil", from: "ras-tanura", to: "kandla", via: "hormuz", value: "85% Crude Dependency", color: "#8B0000" }, // Dark Red
  { id: "arc-lng-1", name: "The Qatar LNG Pipeline", type: "gas", from: "qatar", to: "dahej", via: "hormuz", value: "Mega LNG Carrier Fleet", color: "#B22222" }, // Firebrick Red
  
  // Southeast Asia & Far East to Gujarat
  { id: "arc-coal-1", name: "The Kalimantan Thermal Route", type: "coal", from: "kalimantan", to: "mundra", via: "malacca", value: "Constant Coal Flow", color: "#5C4033" }, // Dark Brown
  { id: "arc-pharma-1", name: "The API Reliance Route", type: "pharma", from: "shanghai", to: "dahej", via: "malacca", value: "70% KSM/API Supply", color: "#A0522D" }, // Sienna
  
  // Africa & Australia
  { id: "arc-coal-2", name: "African Thermal Artery", type: "coal", from: "richards-bay", to: "mundra", via: "indian-ocean", value: "Secondary Coal Supply", color: "#6B4423" }, // Brown
  { id: "arc-coking-1", name: "Australian Coking Supply", type: "coal", from: "gladstone", to: "hazira", via: "malacca", value: "Steel Manufacturing Base", color: "#4A3B32" }, // Deep Brown Grey
  
  // Trans-Atlantic USA
  { id: "arc-petro-1", name: "The Gulf Coast Trans-Atlantic", type: "petro", from: "houston", to: "dahej", via: "suez", value: "Petrochem & LNG Flow", color: "#8B4513" } // SaddleBrown
];

// Helper to find coords
export const getCoords = (id) => {
  const node = tradeNodes.find(n => n.id === id);
  return node ? node.coordinates : [0, 0];
};
