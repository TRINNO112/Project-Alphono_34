// ===========================================================================
// Gujarat Maritime Trade Routes — Data Layer
// ---------------------------------------------------------------------------
// All figures sourced from publicly available reports (2024-2026).
// The 5 Gujarat mega-ports (Mundra, Kandla/Deendayal, Dahej, Hazira, Pipavav)
// are collapsed into ONE "Gujarat Portfolio" node rendered on the map — the
// detailed port-by-port narrative lives in `gujaratPortPortfolio` and is
// surfaced through the clicked-node overlay.
// ===========================================================================

// ---------- The unified Gujarat node (single dot on the map) ---------------
export const gujaratPortPortfolio = {
  id: "gujarat-coast",
  name: "Gujarat Port Complex",
  region: "Gujarat",
  coordinates: [70.8, 22.2], // Anchor in the Gulf of Kutch, central to all 5 ports
  type: "mega-port",
  summary:
    "A 1,600 km coastline hosting 5 mega-ports that together handle ~40% of India's cargo throughput — the single greatest concentration of port capacity in South Asia, and equally the single greatest structural dependency of the Indian economy.",
  ports: [
    {
      name: "Mundra (APSEZ)",
      detail:
        "India's largest commercial port — first to cross 200 MMT (FY25). ~33% of India's container traffic, deepest draft (17.5 m) enabling megaships. Houses Adani's 4,620 MW coal TPP consuming 16-17 Mt Indonesian coal/yr."
    },
    {
      name: "Deendayal / Kandla",
      detail:
        "India's #1 edible-oil gateway (palm oil from Malaysia/Indonesia; soy oil from Argentina). ~60% petroleum cargo. Major handler of Saudi Aramco crude."
    },
    {
      name: "Dahej (Petronet LNG)",
      detail:
        "India's largest LNG terminal — 22.5 MMTPA capacity; 92% utilisation. Core recipient of QatarEnergy's 7.5 MMTPA contract (extended through 2048). Anchors 200+ chemical plants incl. GCPL, Aarti, PI Industries."
    },
    {
      name: "Hazira",
      detail:
        "AMNS (ArcelorMittal-Nippon Steel) gateway — ramping from 9 to 24 MTPA by end of decade. Dependent on Queensland (Hay Point / Dalrymple Bay) coking coal."
    },
    {
      name: "Pipavav (APM Terminals)",
      detail:
        "43% Maersk-owned; signed $2 bn Oct 2025 expansion MoU. Specialised in containers, RO-RO, dry bulk. Directly connects to Western Dedicated Freight Corridor."
    }
  ]
};

// ---------- Foreign nodes: origins + chokepoints ----------------------------
export const tradeNodes = [
  // Gujarat (single consolidated dot)
  gujaratPortPortfolio,

  // ——— Middle East crude/gas origins ———
  {
    id: "ras-tanura",
    name: "Ras Tanura",
    region: "Saudi Arabia",
    coordinates: [50.16, 26.66],
    type: "origin",
    details:
      "Saudi Aramco's principal crude export terminal. Saudi Arabia alone accounts for 38% of all crude & condensate flows through Hormuz (5.5 M bpd, 2024). A primary feedstock source for Jamnagar and Vadinar refineries.",
    textOffset: [-15, 5],
    textAnchor: "end"
  },
  {
    id: "qatar",
    name: "Ras Laffan",
    region: "Qatar",
    coordinates: [51.53, 25.93],
    type: "origin",
    details:
      "World's largest LNG export facility. QatarEnergy supplies ~35% of India's LNG via its 7.5 MMTPA contract to Petronet Dahej — extended through 2048 in the 2024 renegotiation.",
    textOffset: [-15, -15],
    textAnchor: "end"
  },
  {
    id: "hormuz",
    name: "Strait of Hormuz",
    region: "Chokepoint",
    coordinates: [56.25, 26.56],
    type: "chokepoint",
    details:
      "THE pressure point. ~20 M bpd oil moves through here (2024) = ~20% of global liquids consumption. 14.7% of Hormuz crude goes to India; pre-2025 roughly half of India's crude imports transited this strait. A closure would cripple Gujarat's refinery complex within days.",
    textOffset: [15, -15],
    textAnchor: "start"
  },

  // ——— Russia / Suez / Cape routes ———
  {
    id: "novorossiysk",
    name: "Novorossiysk / Baltic",
    region: "Russia",
    coordinates: [37.78, 44.72],
    type: "origin",
    details:
      "Russian ESPO/Urals crude origin. Since 2022, Russian crude has risen from 3% to ~50% of Reliance Jamnagar's imports (2025). Nayara Vadinar (49% Rosneft-owned) takes ~66% Russian crude, sanctioned by EU July 2025.",
    textOffset: [15, -10],
    textAnchor: "start"
  },
  {
    id: "suez",
    name: "Suez Canal",
    region: "Chokepoint",
    coordinates: [32.31, 30.58],
    type: "chokepoint",
    details:
      "Traditional Europe↔Asia artery (~12-15% of global maritime trade). Post-Nov 2023 Houthi attacks, container traffic here collapsed 90% by March 2024; ~95% of India-origin cargo was rerouted around the Cape of Good Hope.",
    textOffset: [-10, -15],
    textAnchor: "end"
  },
  {
    id: "bab-el-mandeb",
    name: "Bab el-Mandeb",
    region: "Chokepoint",
    coordinates: [43.33, 12.58],
    type: "chokepoint",
    details:
      "Oil flow through this strait collapsed from 8.7 M bpd (2023) to 4.0 M bpd (2024) after 190+ Houthi attacks by Oct 2024. 80% of India's exports to Europe historically transit this route.",
    textOffset: [15, 10],
    textAnchor: "start"
  },
  {
    id: "cape-of-good-hope",
    name: "Cape of Good Hope",
    region: "Chokepoint",
    coordinates: [18.47, -34.36],
    type: "chokepoint",
    details:
      "The reluctant alternate. Adds 3,500 nm / 10-14 days / $2 M fuel per voyage. Navigation here doubled by March 2024 as vessels fled the Red Sea. Also the fixed route for West African crude (Nigeria → Jamnagar) which bypasses Suez.",
    textOffset: [-15, 10],
    textAnchor: "end"
  },

  // ——— African & Nigerian origins ———
  {
    id: "bonny",
    name: "Bonny / Escravos",
    region: "Nigeria",
    coordinates: [7.17, 4.43],
    type: "origin",
    details:
      "Nigerian light sweet crude terminals. India's West African sourcing from Nigeria (Bonny, Escravos, Qua Iboe) grew through 2024-25 as a deliberate diversification away from Hormuz.",
    textOffset: [-10, 15],
    textAnchor: "end"
  },
  {
    id: "richards-bay",
    name: "Richards Bay",
    region: "South Africa",
    coordinates: [32.09, -28.79],
    type: "origin",
    details:
      "South African thermal coal terminal — a secondary supply line for Mundra's mega-plants when Indonesian flows are disrupted.",
    textOffset: [15, 5],
    textAnchor: "start"
  },

  // ——— Southeast Asia / Far East ———
  {
    id: "kalimantan",
    name: "East Kalimantan",
    region: "Indonesia",
    coordinates: [117.5, 0.0],
    type: "origin",
    details:
      "World's largest thermal coal export hub (40% of Indonesia's 549 Mt 2024 export). India absorbed ~74 Mt of Indonesian coal in Jan-Aug 2024 (21.4% share); Mundra alone received 2.74 Mt in March 2024 — the highest of any Indian port.",
    textOffset: [10, 20],
    textAnchor: "start"
  },
  {
    id: "malacca",
    name: "Strait of Malacca",
    region: "Chokepoint",
    coordinates: [101.3, 2.9],
    type: "chokepoint",
    details:
      "Primary eastbound chokepoint. All Kalimantan thermal coal + Chinese APIs bound for Gujarat transit this narrow passage. A Chinese 'String of Pearls' squeeze here would cascade-shutdown Mundra UMPP, Adani TPP, AMNS Hazira within 2-3 weeks of stockpile.",
    textOffset: [-10, 20],
    textAnchor: "end"
  },
  {
    id: "shanghai",
    name: "Shanghai / Ningbo",
    region: "China",
    coordinates: [121.47, 31.23],
    type: "origin",
    details:
      "Vector origin for ~70% of India's Active Pharmaceutical Ingredients (Paracetamol 91%, Penicillin 95.8%, Amoxicillin 89.9%). Also 93% of India's rare-earth magnet imports (FY25) — critical for Dholera EV/solar ambitions.",
    textOffset: [15, -10],
    textAnchor: "start"
  },

  // ——— Australia (coking coal) ———
  {
    id: "gladstone",
    name: "Hay Point / DBT",
    region: "Australia",
    coordinates: [149.3, -21.27],
    type: "origin",
    details:
      "Hay Point + Dalrymple Bay (Queensland) = world's premier metallurgical coal gateway (84.2 Mtpa DBT + 55 Mtpa BMA). India is their #1 customer (18.2% of 2024 exports). Feeds AMNS Hazira's blast furnaces.",
    textOffset: [15, 5],
    textAnchor: "start"
  },

  // ——— USA ———
  {
    id: "houston",
    name: "US Gulf Coast",
    region: "United States",
    coordinates: [-95.36, 29.76],
    type: "origin",
    details:
      "Houston/Freeport petrochemical & LNG export vector. A trans-Atlantic alternative to Middle East LNG for Dahej, but exposed to both Suez and Cape of Good Hope routing risk.",
    textOffset: [15, 0],
    textAnchor: "start"
  },

  // ——— Palm oil origins ———
  {
    id: "malaysia-palm",
    name: "Port Klang",
    region: "Malaysia",
    coordinates: [101.40, 3.00],
    type: "origin",
    details:
      "Malaysia shipped 193 M kg palm oil to India in 2024 (~69% of its CPO exports). Combined with Indonesia's 37% share, palm oil from this region = 84%+ of India's palm imports — landing almost entirely at Kandla.",
    textOffset: [-15, -15],
    textAnchor: "end"
  },

  // ——— Argentina soy ———
  {
    id: "rosario",
    name: "Rosario",
    region: "Argentina",
    coordinates: [-60.66, -32.94],
    type: "origin",
    details:
      "Argentina surged to 12.16 lakh tonnes of soy oil exports to India (Nov 2024-Mar 2025) — nearly 3× YoY. Kandla is the #1 Indian port for soybean oil; Mundra #3.",
    textOffset: [-15, 10],
    textAnchor: "end"
  }
];

// ---------- Trade arcs (narrative descriptions only — drawing is handled
//            by the real shipping_lanes.geojson layer in the map component). -
export const tradeArcs = [
  {
    id: "arc-oil-hormuz",
    name: "The Hormuz Crude Artery",
    type: "oil",
    from: "ras-tanura",
    to: "gujarat-coast",
    via: "hormuz",
    value: "~60% of Gujarat crude (Saudi + Iraq + UAE + Kuwait)",
    color: "#8B0000"
  },
  {
    id: "arc-lng-qatar",
    name: "The QatarEnergy LNG Pipeline",
    type: "gas",
    from: "qatar",
    to: "gujarat-coast",
    via: "hormuz",
    value: "~35% of India's LNG @ 7.5 MMTPA through 2048",
    color: "#B22222"
  },
  {
    id: "arc-oil-russia-suez",
    name: "Russian Crude — Suez Route",
    type: "oil",
    from: "novorossiysk",
    to: "gujarat-coast",
    via: "suez",
    value: "Reliance Jamnagar 18.3 Mt in 7 months of 2025",
    color: "#4B0082"
  },
  {
    id: "arc-oil-russia-cape",
    name: "Russian Crude — Cape Backup",
    type: "oil",
    from: "novorossiysk",
    to: "gujarat-coast",
    via: "cape-of-good-hope",
    value: "Reroute when Red Sea unsafe (adds 10-14 days)",
    color: "#6A0DAD"
  },
  {
    id: "arc-oil-nigeria",
    name: "Nigerian Diversification Route",
    type: "oil",
    from: "bonny",
    to: "gujarat-coast",
    via: "cape-of-good-hope",
    value: "Non-Hormuz sourcing grew from 55% to 70% (2025)",
    color: "#800020"
  },
  {
    id: "arc-coal-indonesia",
    name: "The Kalimantan Thermal Corridor",
    type: "coal",
    from: "kalimantan",
    to: "gujarat-coast",
    via: "malacca",
    value: "Mundra: 2.74 Mt in a single month (Mar 2024)",
    color: "#5C4033"
  },
  {
    id: "arc-coal-africa",
    name: "African Thermal Backup",
    type: "coal",
    from: "richards-bay",
    to: "gujarat-coast",
    value: "Secondary supply when Kalimantan flows disrupted",
    color: "#6B4423"
  },
  {
    id: "arc-coking-australia",
    name: "The Australian Coking Corridor",
    type: "coal",
    from: "gladstone",
    to: "gujarat-coast",
    via: "malacca",
    value: "India = 18.2% of Queensland met-coal exports",
    color: "#4A3B32"
  },
  {
    id: "arc-pharma-china",
    name: "The API Dependency Line",
    type: "pharma",
    from: "shanghai",
    to: "gujarat-coast",
    via: "malacca",
    value: "70% of India's APIs (Paracetamol 91%)",
    color: "#A0522D"
  },
  {
    id: "arc-petro-usa",
    name: "Trans-Atlantic Petrochem Vector",
    type: "petro",
    from: "houston",
    to: "gujarat-coast",
    via: "suez",
    value: "US Gulf LNG/petrochem diversification",
    color: "#8B4513"
  },
  {
    id: "arc-palm-malaysia",
    name: "Palm Oil Artery",
    type: "food",
    from: "malaysia-palm",
    to: "gujarat-coast",
    via: "malacca",
    value: "Kandla: #1 port; 84%+ palm oil via this region",
    color: "#DAA520"
  },
  {
    id: "arc-soy-argentina",
    name: "Argentine Soy Route",
    type: "food",
    from: "rosario",
    to: "gujarat-coast",
    via: "cape-of-good-hope",
    value: "12.16 lakh tonnes soy oil (Nov '24 - Mar '25)",
    color: "#B8860B"
  }
];

// ---------- Helper -----------------------------------------------------------
export const getCoords = (id) => {
  const node = tradeNodes.find((n) => n.id === id);
  return node ? node.coordinates : [0, 0];
};

// ---------- Sources (30+ URLs underpinning the above data) -----------------
// Surfaced inside the map tooltip / overlay so every figure is traceable.
export const tradeRouteSources = [
  { id: 1, title: "EIA — Strait of Hormuz chokepoint analysis", url: "https://www.eia.gov/todayinenergy/detail.php?id=65504" },
  { id: 2, title: "IEA — Strait of Hormuz oil security", url: "https://www.iea.org/about/oil-security-and-emergency-response/strait-of-hormuz" },
  { id: 3, title: "Visual Capitalist — Hormuz oil trade by country", url: "https://www.visualcapitalist.com/charted-oil-trade-through-the-strait-of-hormuz-by-country/" },
  { id: 4, title: "The Diplomat — Gulf War 3.0 & India's oil supply", url: "https://thediplomat.com/2026/03/gulf-war-3-0-how-is-india-securing-its-oil-supplies/" },
  { id: 5, title: "Sunday Guardian — Hormuz closure & India", url: "https://sundayguardianlive.com/what-is-the-strait-of-hormuz-indias-worst-nightmare-how-strait-closure-could-cripple-crude-imports-within-days-why-conflict-threatens-20-of-global-oil-supply-173066/" },
  { id: 6, title: "Eximpedia — Crude oil import players & exporters", url: "https://www.eximpedia.app/blog/crude-oil-import-in-india" },
  { id: 7, title: "ThePrint — How Russian oil makes its way to India", url: "https://theprint.in/economy/how-russian-oil-makes-its-way-to-india-two-key-routes-a-backup-a-sanctions-hack/2893853/" },
  { id: 8, title: "African Security Analysis — India oil shift Russia→Nigeria", url: "https://www.africansecurityanalysis.org/reports/india-s-oil-shift-from-russia-to-nigeria" },
  { id: 9, title: "Al Jazeera — Behind India's Russian oil imports (Ambani)", url: "https://www.aljazeera.com/economy/2025/8/22/behind-indias-massive-russian-oil-imports" },
  { id: 10, title: "Hydrocarbon Processing — India Russian crude Dec 2025", url: "https://www.hydrocarbonprocessing.com/news/2025/12/india-imports-more-russian-crude-but-mix-of-buyers-shifts/" },
  { id: 11, title: "Kpler — Russian oil flows under sanctions Dec 2025", url: "https://www.kpler.com/blog/russian-oil-flows-under-sanctions-an-update-two-weeks-on" },
  { id: 12, title: "Nayara Energy — Wikipedia", url: "https://en.wikipedia.org/wiki/Nayara_Energy" },
  { id: 13, title: "Petronet LNG — Dahej receives Q-Max RasGas cargo", url: "https://pll.co.in/w/dahej-lng-terminal-receives-first-q-max-vessel-carrying-rasgas-cargo" },
  { id: 14, title: "Tribune — Petronet LNG + ONGC regas agreement", url: "https://www.tribuneindia.com/news/cgd-network/petronet-lng-ongc-sign-5-year-regasification-agreement-for-dahej-terminal" },
  { id: 15, title: "Argus — Petronet offers lower LNG regas rates", url: "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2769076-india-s-petronet-offers-lower-lng-regas-rates" },
  { id: 16, title: "Whalesbook — Petronet LNG Force Majeure on Qatar", url: "https://www.whalesbook.com/news/English/energy/Petronet-LNG-Declares-Force-Majeure-on-Qatar-Contracts-Amid-Middle-East-Conflict/69a70a983d2913aa7c27de76" },
  { id: 17, title: "Atlas Institute — Red Sea Shipping Crisis 2024-25", url: "https://atlasinstitute.org/the-red-sea-shipping-crisis-2024-2025-houthi-attacks-and-global-trade-disruption/" },
  { id: 18, title: "Al Jazeera — Red Sea crisis $ risk for India", url: "https://www.aljazeera.com/economy/2024/1/31/how-escalating-red-sea-crisis-poses-billions-of-dollars-of-risk-for-india" },
  { id: 19, title: "India Shipping News — Bab el-Mandeb oil flow collapse", url: "https://indiashippingnews.com/red-sea-shipping-crisis-oil-flows-through-bab-el-mandeb-plummets-by-over-half-in-2024/" },
  { id: 20, title: "VIF — Red Sea Crisis and India's Options", url: "https://www.vifindia.org/article/2024/february/08/red-sea-crisis-and-india-s-options" },
  { id: 21, title: "IEA Coal Mid-Year Update 2025", url: "https://www.iea.org/reports/coal-mid-year-update-2025/trade" },
  { id: 22, title: "The Coal Trader — Indonesian thermal coal March 2024", url: "https://thecoaltrader.com/indonesian-thermal-coal-exports-increase-10-mom-in-march-2024/" },
  { id: 23, title: "S&P Global — Indonesia 2024 coal quota", url: "https://www.spglobal.com/commodity-insights/en/news-research/latest-news/coal/032124-indonesia-approves-2024-coal-production-quota-of-922-mil-mt-ministry" },
  { id: 24, title: "Wikipedia — Mundra Ultra Mega Power Plant", url: "https://en.wikipedia.org/wiki/Mundra_Ultra_Mega_Power_Plant" },
  { id: 25, title: "GEM Wiki — Tata Mundra UMPP", url: "https://www.gem.wiki/Tata_Mundra_Ultra_Mega_Power_Project" },
  { id: 26, title: "PowerMag — Adani Mundra TPP profile", url: "https://www.powermag.com/mundra-thermal-power-plant-mundra-gujarat-india-owneroperator-adani-power-ltd/" },
  { id: 27, title: "Ballast Markets — Hay Point port profile", url: "https://content.ballastmarkets.com/ports/hay-point/" },
  { id: 28, title: "Fastmarkets — 2025 coking coal market", url: "https://www.fastmarkets.com/insights/factors-shaping-coking-coal-market-2025/" },
  { id: 29, title: "ArcelorMittal AMNS investor presentation Sept 2024", url: "https://corporate.arcelormittal.com/media/zfxhrzfh/amns_investors-and-analyst-presentation_sept-24.pdf" },
  { id: 30, title: "ORF — India's rise as global pharmacy / China dependence", url: "https://www.orfonline.org/expert-speak/india-s-rise-as-global-pharmacy-masks-deep-dependence-on-china" },
  { id: 31, title: "DrugPatentWatch — Pharma gambit India vs China", url: "https://www.drugpatentwatch.com/blog/the-pharmaceutical-gambit-an-analysis-of-why-india-lags-china-and-a-roadmap-to-competitive-parity/" },
  { id: 32, title: "ORF America — China critical mineral export controls", url: "https://orfamerica.org/newresearch/chinas-critical-mineral-export-controls" },
  { id: 33, title: "FTI Consulting — China gallium/germanium/graphite controls", url: "https://www.fticonsulting.com/insights/articles/chinas-export-controls-critical-minerals-gallium-germanium-graphite" },
  { id: 34, title: "APSEZ Annual Report FY25 — Mundra 200 MMT", url: "https://connect.adani.com/annual_report/2025/apsez/adani-ports-and-special-economic-zone.html" },
  { id: 35, title: "APM Terminals Pipavav — Oct 2025 $2bn MoU", url: "https://www.apmterminals.com/en/pipavav/about/news/2025/251030-terminal-signs-mou-for-port-expansion" },
  { id: 36, title: "Seatrade Maritime — APM Terminals $2bn Pipavav", url: "https://www.seatrade-maritime.com/ports-logistics/apm-terminals-investing-2bn-in-pipavav-port" },
  { id: 37, title: "Business Standard — Kandla edible oil congestion fix", url: "https://www.business-standard.com/industry/news/kandla-port-vows-to-ease-vessel-congestion-for-smooth-edible-oil-imports-125062300460_1.html" },
  { id: 38, title: "TradeInt — India palm oil imports 2024-25", url: "https://tradeint.com/insights/india-imports-palm-oil-from-which-country-2024-2025/" },
  { id: 39, title: "DGCI&S — Edible oils + soy trade analysis Sept 2025", url: "https://www.dgciskol.gov.in/writereaddata/Downloads/20250902153731A%20Brief%20Export-Import%20Analysis%20of%20Select%20Commercial%20Crops%20Edible%20Oils%20Sugar%20and%20Cotton.pdf" },
  { id: 40, title: "Wikipedia — String of Pearls (Indian Ocean)", url: "https://en.wikipedia.org/wiki/String_of_Pearls_(Indian_Ocean)" },
  { id: 41, title: "CSIS — Gwadar, String of Pearls, Indo-Pacific", url: "https://www.csis.org/analysis/pakistans-gwadar-port-new-naval-base-chinas-string-pearls-indo-pacific" }
];
