export const districtsData = [
  {
    id: "morbi",
    name: "Morbi",
    region: "Saurashtra",
    coordinates: [70.8322, 22.8222],
    tagline: "The Ceramic Capital in Crisis",
    pillars: ["Labor", "Energy", "Materials"],
    stats: [
      { label: "Migrant Workforce", value: "70%", status: "critical" },
      { label: "Silicosis Direct Exposure", value: "29%", status: "danger" },
      { label: "Bridge Collapse Convictions", value: "0", status: "danger" }
    ],
    summary: "Morbi is India's largest ceramic manufacturing hub, housing over 1,200 units that command 90% of the domestic market and export significantly to the Gulf. However, the exact model that ensures its throughput (cost-reduction and scale) is fundamentally fragile. Its dependence on imported natural gas led to 550+ units shutting down in early 2026 due to Middle Eastern supply shocks. Furthermore, it operates on a deep, unorganized migrant labor dependency from UP, Bihar, and Odisha, with structural abandonment evident in the 2022 bridge collapse and severe lack of ESI coverage despite high silicosis prevalence.",
    keyCrises: [
      { year: "2022", title: "Suspension Bridge Collapse", detail: "141 dead, primarily migrant families. Zero convictions to date, exposing massive infrastructural negligence and lack of corporate accountability." },
      { year: "2024", title: "Silicosis Pipeline", detail: "PTRC study revealed 92.65% of ceramic workers lack ESI health coverage. 38 direct silicosis deaths in 2024-25, a 216% surge." },
      { year: "2026", title: "Suez Canal/Gas Crisis", detail: "Over 550 ceramic units shut down within 10 days due to skyrocketing LNG prices and freight blockades in the Red Sea." }
    ]
  },
  {
    id: "surat",
    name: "Surat",
    region: "South Gujarat",
    coordinates: [72.8311, 21.1702],
    tagline: "The Textile & Diamond Hub",
    pillars: ["Labor", "Economics", "Environment"],
    stats: [
      { label: "Cash Usage in Textiles", value: "90-95%", status: "critical" },
      { label: "Diamond Job Losses", value: "150,000", status: "danger" },
      { label: "Powerloom Losses", value: "₹100 Cr/Day", status: "danger" }
    ],
    summary: "Surat powers two massive global supply chains: diamond polishing and synthetic textiles. It polishes 9 out of every 10 diamonds in the world. However, US sanctions on Russian rough diamonds (Alrosa) effectively crippled the sector in 2025-26, leading to 1.5 lakh direct job losses and 71 documented worker suicides. Additionally, its textile sector thrives entirely on unorganized migrant labor operating in a heavy cash economy, making it completely vulnerable to geopolitical ripples and macro shocks.",
    keyCrises: [
      { year: "2020", title: "Pandemic Exodus", detail: "Over 10 lakh workers fled Surat within weeks when lockdown was announced, paralyzing the textile sector completely." },
      { year: "2025", title: "Diamond Market Collapse", detail: "71 documented worker suicides in 18 months due to widespread factory closures caused by US sanctions on Russian rough diamonds." },
      { year: "2026", title: "Chemical Tank Deaths", detail: "Three migrant workers died of suffocation in a Pandesara GIDC dyeing mill effluent tank." }
    ]
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    region: "Central Gujarat",
    coordinates: [72.5714, 23.0225],
    tagline: "The Metropole",
    pillars: ["Water", "Environment", "Infrastructure"],
    stats: [
      { label: "Sabarmati Toxicity", value: "Critically Polluted", status: "danger" },
      { label: "Property Index", value: "High Inflation", status: "warning" },
      { label: "Migrant Eviction", value: "2018 Epicenter", status: "critical" }
    ],
    summary: "Ahmedabad serves as the financial and cultural epicenter of Gujarat. However, rapid urban sprawl has been coupled with severe ecological degradation. The Sabarmati River has been declared a 'cesspool' by the Gujarat High Court due to unregulated industrial effluent dumping from Narol and Vatva. Ahmedabad also served as the organizational epicenter for the 2018 anti-migrant violence spread by the Thakor Sena, revealing deep societal fissures against its Hindi-speaking workforce.",
    keyCrises: [
      { year: "2018", title: "Anti-Migrant Pogrom", detail: "Following a rape accusation, organized mobs targeted non-Gujarati workers across Ahmedabad, forcing thousands to flee." },
      { year: "2024", title: "Sabarmati Cesspool Ruling", detail: "Gujarat HC heavily criticized the state pollution board for allowing toxic untreated effluents to destroy the river ecosystem." }
    ]
  },
  {
    id: "kutch",
    name: "Kutch",
    region: "Kutch",
    coordinates: [69.8597, 23.7337],
    tagline: "The Border Gateway",
    pillars: ["Infrastructure", "Materials", "Migrant Discrimination"],
    stats: [
      { label: "Mundra Port Cargo", value: "200 MMT", status: "normal" },
      { label: "Agariya Temps", value: "52°C", status: "danger" },
      { label: "Submarine Cables", value: "0", status: "critical" }
    ],
    summary: "Kutch represents the great contradiction of Gujarat. On one hand, it hosts Mundra, India's largest commercial port handling staggering volumes of the nation's imported crude, coal, and containers, alongside the world's largest renewable energy park at Khavda (9.4 GW). On the other, the Little Rann of Kutch houses the extremely marginalized Agariya salt workers, trapped in generational debt bondage, working in 52-degree heat resulting in bone calcification and rampant child labor.",
    keyCrises: [
      { year: "Ongoing", title: "Agariya Exploitation", detail: "Salt pan workers face brutal conditions with no formal healthcare or fair wage protections, leading to severe generational health crises (blindness, bone calcification)." },
      { year: "2024", title: "Evacuation Infrastructure Delay", detail: "The massive Khavda renewable park is operational, but necessary transmission grid evacuation networks are critically delayed, stranding generated power." }
    ]
  },
  {
    id: "jamnagar",
    name: "Jamnagar",
    region: "Saurashtra",
    coordinates: [70.0577, 22.4707],
    tagline: "The Refinery Hub",
    pillars: ["Materials", "Economics"],
    stats: [
      { label: "Imported Crude", value: "~85%", status: "critical" },
      { label: "Reliance Capacity", value: "1.4 MMBPD", status: "normal" },
      { label: "Nayara Russian Supply", value: "High Risk", status: "warning" }
    ],
    summary: "Jamnagar houses the world's largest refining complex (Reliance) and India's second-largest private refinery (Nayara Energy). The dependency paradigm here is absolute: these mega-refineries do not run on Indian oil. Following the Ukraine war, Russian blend crude became the primary fuel (36% of imports), creating significant geopolitical risk for Nayara (partly owned by Rosneft) regarding European Union sanctions and payment mechanisms.",
    keyCrises: [
      { year: "2025", title: "Geopolitical Crude Shift", detail: "Heavy reliance on discounted Russian crude makes the region's output highly sensitive to Western sanctions and global banking blockades." }
    ]
  },
  {
    id: "mehsana",
    name: "Mehsana",
    region: "North Gujarat",
    coordinates: [71.3969, 23.5880],
    tagline: "The Dry Aquifer",
    pillars: ["Water", "Environment", "Economics"],
    stats: [
      { label: "Extraction Rate", value: "132%", status: "critical" },
      { label: "Fluoride Levels", value: "17.5 mg/L", status: "danger" },
      { label: "Dairy Feed Cost", value: "Escalating", status: "warning" }
    ],
    summary: "Mehsana epitomizes the invisible water crisis. The district's groundwater extraction rate sits at an alarming 132%—meaning it is pumping out water significantly faster than natural recharge. This over-exploitation has caused severe aquifer depression, bringing deep-earth fluorides into the drinking water supplies (recorded hitting 17.5 mg/L, 11x the WHO limit). The region relies heavily on the Narmada canal network to survive.",
    keyCrises: [
      { year: "Ongoing", title: "Aquifer Collapse", detail: "Groundwater depletion forces farmers into massive debt drilling extremely deep borewells, extracting toxic, high-fluoride fossil water." }
    ]
  },
  {
    id: "bharuch",
    name: "Bharuch",
    region: "South Gujarat",
    coordinates: [72.9904, 21.7051],
    tagline: "The Chemical Corridor",
    pillars: ["Environment", "Labor"],
    stats: [
      { label: "Major Accidents", value: "90", status: "danger" },
      { label: "Worker Deaths", value: "130 (2018-25)", status: "critical" },
      { label: "Pollution Clustering", value: "Dahej SEZ", status: "warning" }
    ],
    summary: "The Bharuch-Dahej industrial corridor is the chemical powerhouse of India. However, it is fundamentally an environmental and occupational hazard zone. Between 2018 and 2025, the corridor witnessed 90 major industrial accidents resulting in 130 worker deaths—averaging one fatal incident every three weeks. Most victims are contractual migrant workers with poor corporate adherence to safety protocols.",
    keyCrises: [
      { year: "2018-2025", title: "Industrial Fatality Corridor", detail: "Continuous string of chemical blasts, boiler explosions, and toxic gas leaks primarily killing disposable contract workers." }
    ]
  }
];

// Map 33 generic Placeholders for those without deep data yet
const all33Ids = [
  "amreli", "anand", "aravalli", "banaskantha", "bhavnagar", "botad", 
  "chhota-udepur", "dahod", "dang", "devbhoomi-dwarka", "gandhinagar", 
  "gir-somnath", "junagadh", "kheda", "mahisagar", "narmada", "navsari", 
  "panchmahal", "patan", "porbandar", "rajkot", "sabarkantha", "surendranagar", "tapi", "valsad"
];

const filledIds = districtsData.map(d => d.id);
const placeholderIds = all33Ids.filter(id => !filledIds.includes(id));

const placeholderData = placeholderIds.map(id => {
  const name = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    id: id,
    name: name,
    region: "Gujarat Region",
    coordinates: [72.0, 23.0], // Generic center
    tagline: "Data Integration Pending",
    pillars: [],
    stats: [
      { label: "Status", value: "Under Audit", status: "normal" }
    ],
    summary: `Detailed research and dependency analysis for ${name} district is currently undergoing synthesis in Phase 3 of Project Alphono 34. Raw data regarding local infrastructure, environmental hazard indices, and labor distribution is being standardized for publication.`,
    keyCrises: []
  }
});

export const getDistricts = () => [...districtsData, ...placeholderData];
export const getDistrictById = (id) => getDistricts().find(d => d.id === id);
