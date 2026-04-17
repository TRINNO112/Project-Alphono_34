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
  },
  // ── PHASE 3 DISTRICT PROFILES (10 new, research-backed) ──────────────
  {
    id: "rajkot",
    name: "Rajkot",
    region: "Saurashtra",
    coordinates: [70.8022, 22.3039],
    tagline: "The SME Engine on Parched Ground",
    pillars: ["Infrastructure", "Water", "Economics"],
    stats: [
      { label: "Registered Industrial Units", value: "43,711", status: "warning" },
      { label: "Foundry Cluster Turnover", value: "₹2,700 Cr", status: "normal" },
      { label: "Saurashtra Water Stress", value: "Critical Zone", status: "critical" }
    ],
    summary: "Rajkot is Gujarat's engineering and auto-parts powerhouse, with 43,711 registered industrial units across 16 industrial areas, anchored by a foundry cluster of 505 units (₹2,700 Cr turnover, 20,000 workers) and a forging cluster producing 434,200 tonnes annually (₹4,000 Cr). However, this SME-driven economy sits on one of India's most water-stressed regions. Saurashtra faces chronic drought with rainfall deficits declared in multiple recent years, and the district depends heavily on Narmada pipeline transfers (SAUNI scheme) which farmers have called 'a failure.' The TRP Game Zone fire of May 2024 — killing 32 people including 9 children — exposed catastrophic regulatory failure in a city that prides itself on industrial governance.",
    keyCrises: [
      { year: "May 2024", title: "TRP Game Zone Fire", detail: "32 dead including 9 children in an amusement park fire caused by welding sparks hitting plastic. No fire NOC, only one exit on upper floor, 2,000L diesel stored on-site. Gujarat HC called it a 'man-made disaster.' 9 officials suspended, 11 accused. (Source: Business Standard, Gujarat Samachar)" },
      { year: "2016", title: "Drought Declaration", detail: "1,115 villages across Banaskantha, Dwarka, Kutch, Jamnagar, Porbandar, and Rajkot declared drought-affected by GSDMA. Water tanker dependency surged across Saurashtra. (Source: GSDMA via ScienceDirect)" },
      { year: "2019", title: "Severe Monsoon Deficit", detail: "Gujarat received only 196mm rainfall Jan-July vs normal 816mm (down 86%). Rajkot and Saurashtra among worst-hit, with groundwater tables plummeting. (Source: IDS UK)" }
    ]
  },
  {
    id: "vadodara",
    name: "Vadodara",
    region: "Central Gujarat",
    coordinates: [73.1812, 22.3072],
    tagline: "The Golden Corridor's Volatile Heart",
    pillars: ["Environment", "Infrastructure", "Materials"],
    stats: [
      { label: "IOCL Refinery Blast Deaths", value: "2 (Nov 2024)", status: "danger" },
      { label: "Vishwamitri Flood Level", value: "37 ft (12 ft above danger)", status: "critical" },
      { label: "Golden Corridor Position", value: "400 km chemical belt", status: "warning" }
    ],
    summary: "Vadodara sits at the heart of Gujarat's 400-km 'Golden Corridor' — the industrial belt from Ahmedabad to Vapi that concentrates India's chemical and petrochemical production. The city hosts Gujarat Refinery (IOCL), the legacy IPCL complex (now RIL), and GSFC's fertilizer operations. This concentration creates compounding risks: the November 2024 IOCL refinery blast killed 2 workers when a 1,000 KL benzene storage tank exploded, echoing a 2005 fire that injured 13. Simultaneously, Vadodara faces recurring catastrophic floods — in August 2024, the Vishwamitri River surged to 37 feet (12 feet above danger mark), submerging areas under 10-12 feet of water and forcing 20,000 evacuations across 12 districts. The chemical-flood nexus — where floodwaters interact with industrial zones — remains an unaddressed environmental time bomb.",
    keyCrises: [
      { year: "Nov 2024", title: "IOCL Refinery Benzene Tank Explosion", detail: "Blast in a 1,000 KL benzene storage tank at Gujarat Refinery killed 2 workers (Dhimant & Shailesh Makwana). Refinery operations suspended, blaze took until next morning to control. (Source: Business Standard, JOIFF, ChemAnalyst)" },
      { year: "Aug 2024", title: "Vishwamitri Catastrophic Flood", detail: "270mm rainfall in one day. River surged to 37 ft (danger mark: 26 ft). Army deployed, 20,000+ evacuated across 12 districts, 4 dead, 9 missing. Worst since 2014. (Source: BusinessToday, ReliefWeb, NDRF)" },
      { year: "2005", title: "Gujarat Refinery Fire", detail: "Fire at IOCL Vadodara facility injured 13 people, raising safety concerns that went unaddressed for nearly two decades until the 2024 repeat. (Source: JOIFF)" }
    ]
  },
  {
    id: "banaskantha",
    name: "Banaskantha",
    region: "North Gujarat",
    coordinates: [71.2190, 24.1717],
    tagline: "Asia's Largest Dairy on a Dying Aquifer",
    pillars: ["Water", "Economics", "Environment"],
    stats: [
      { label: "Groundwater Level", value: ">160m below ground", status: "critical" },
      { label: "Banas Dairy Turnover", value: "₹21,295 Cr (FY25)", status: "normal" },
      { label: "Dark Zone Classification", value: "New borewells banned", status: "danger" }
    ],
    summary: "Banaskantha presents Gujarat's starkest paradox: it hosts Asia's largest dairy cooperative (Banas Dairy, ₹21,295 Cr turnover, 10 million litres/day processing, 1.8 lakh farmer members) while sitting on an aquifer classified as a 'dark zone' where groundwater has dropped below 160 metres. New borewells and electric connections are officially banned, yet the dairy economy demands massive water inputs — each milch animal requires 89-95 litres daily. The district oscillates between devastating drought (declared in 2012-13, 2015-16, 2018-19) and catastrophic floods (2024 monsoon), with villages entirely dependent on government water tankers providing less than 10 litres per person per day. Fluoride contamination compounds the crisis, with 12.4% of groundwater samples exceeding safe limits.",
    keyCrises: [
      { year: "2019", title: "Severe Drought", detail: "Banaskantha received only 33% of its 30-year average rainfall. Government declared 1,150 villages 'scarcity hit,' deploying water tankers and subsidized fodder. Villages received <10L per person per day. (Source: The Wire Science, IDS UK)" },
      { year: "Aug 2024", title: "Monsoon Whiplash Flooding", detail: "After years of drought, Gujarat received 118% of monsoon rainfall. Banaskantha swung from water scarcity to flooding, devastating crops and displacing communities. (Source: ReliefWeb, Wikipedia 2024 India Floods)" },
      { year: "Ongoing", title: "Aquifer Dark Zone Designation", detail: "CGWB classified Banaskantha as over-exploited 'dark zone.' Groundwater >160m below surface at most locations, with some North Gujarat areas at 190m. Fluoride contamination widespread. (Source: CGWB, Geological Society of India, Down to Earth)" }
    ]
  },
  {
    id: "valsad",
    name: "Valsad",
    region: "South Gujarat",
    coordinates: [72.9342, 20.5992],
    tagline: "Tribal Homeland Turned Toxic Corridor",
    pillars: ["Environment", "Education", "Labor"],
    stats: [
      { label: "Vapi CEPI Score (Peak)", value: "90.75 (#1 India)", status: "critical" },
      { label: "Tribal Population", value: "52.93%", status: "warning" },
      { label: "Life Expectancy (Vapi area)", value: "35-40 years", status: "critical" }
    ],
    summary: "Valsad district contains the Vapi industrial estate — once ranked #1 on India's Critically Polluted Areas list (CEPI 90.75 in 2011) and previously listed among the world's worst polluted places by the Blacksmith Institute. Over 1,500 industries across 11.4 sq km produce chemicals, dyes, pesticides, and pharmaceuticals, creating a 21-km chemical corridor considered Asia's longest. Mercury content in soil and water runs 100x above standards, and excess cancer risk values for chromium and lead exceed minimal permissible thresholds for both children and adults. Over half of all patients in Vapi present with respiratory diseases. This devastation falls disproportionately on the district's 52.93% tribal population (Bhils, Warlis, Koknas) and 5,000+ fishing families whose rivers — the Daman Ganga and Kolak — have been rendered toxic by industrial effluent.",
    keyCrises: [
      { year: "2011", title: "Vapi Tops National Pollution Index", detail: "CEPI score of 90.75 made Vapi India's #1 critically polluted industrial cluster. CPCB and GPCB found 6 of 12 monitored pollutants (PM2.5, PM10, NO2, lead, nickel, arsenic) beyond safe limits. (Source: CAG Report, Down to Earth, CPCB)" },
      { year: "Ongoing", title: "CETP Effluent Failure", detail: "The Common Effluent Treatment Plant serving 500+ industries discharges into the Daman Ganga River. CPCB found treated effluents still don't meet safety standards, destroying aquatic ecosystems and fishing livelihoods. (Source: Down to Earth)" },
      { year: "Ongoing", title: "Elevated Cancer Risk in Population", detail: "Health studies found Excess Cancer Risk (ECR) values for chromium, lead, and nickel exceed WHO permissible thresholds (>1x10^-6) for inhalation and ingestion pathways for both adults and children. Fruit productivity down 50% from air pollution. (Source: Journal of Air Pollution and Health, India Together)" }
    ]
  },
  {
    id: "junagadh",
    name: "Junagadh",
    region: "Saurashtra",
    coordinates: [70.4579, 21.5222],
    tagline: "Between Lions and Crop Failures",
    pillars: ["Environment", "Water", "Economics"],
    stats: [
      { label: "Groundnut Yield Loss (2018-19)", value: "48% decline", status: "danger" },
      { label: "ESZ Controversy Area", value: "2,061 sq km", status: "warning" },
      { label: "Farmland Damaged (Nov 2025)", value: "10 lakh+ hectares statewide", status: "critical" }
    ],
    summary: "Junagadh's economy rests on three structurally vulnerable pillars: groundnut cultivation (Gujarat is India's largest producer), Kesar mango orchards (GI-tagged), and proximity to the Gir forest — the last refuge of the Asiatic lion. The district faces a triple bind. Erratic monsoons devastate rain-fed groundnut crops (48% yield decline in 2018-19, with income drops of 80%). The proposed Eco-Sensitive Zone around Gir forest (2,061 sq km covering 196 villages) triggered political revolt from BJP's own ranks, exposing the impossible tension between conservation and rural livelihoods. Meanwhile, lion-human conflict escalates as the population grows from 327 (2001) to 674 (2020), with Junagadh ranking second in livestock death claims. When unseasonal rains in November 2025 destroyed 10 lakh+ hectares of farmland statewide, Junagadh and Gir Somnath were among the worst hit, triggering farmer suicides and protests across 10 districts.",
    keyCrises: [
      { year: "Sep 2024", title: "Gir ESZ Political Revolt", detail: "MoEFCC proposed 3,328 sq km ESZ around Gir (revised to 2,061 sq km). BJP's own Gir Somnath unit president and IFFCO chairman threatened agitation. Both ruling and opposition parties protested, fearing impact on 196 villages. (Source: Vikalp Sangam)" },
      { year: "Nov 2025", title: "Farmer Suicides & Crop Destruction", detail: "Unseasonal rain destroyed 10 lakh+ hectares of farmland. Farmer suicides reported in Gir Somnath and Junagadh belt. Protests erupted in 10+ districts. Farmers trapped in multi-crop debt cycles from successive weather failures. (Source: The Federal, Mongabay India)" },
      { year: "2018-19", title: "Groundnut Crop Collapse", detail: "Saurashtra Oil Millers Association survey found 48% yield decline. Income from groundnut reduced by 80%. Linked to potential spike in farmer suicides across the state. (Source: Mongabay India)" }
    ]
  },
  {
    id: "gandhinagar",
    name: "Gandhinagar",
    region: "Central Gujarat",
    coordinates: [72.6369, 23.2156],
    tagline: "The Capital's Fiscal Black Hole",
    pillars: ["Economics", "Infrastructure"],
    stats: [
      { label: "GIFT City Tax Holiday", value: "20 years (100% exempt)", status: "critical" },
      { label: "State Revenue from GIFT (18 yrs)", value: "₹94.19 lakh (liquor only)", status: "danger" },
      { label: "GIFT City Employment", value: "20,000 (vs 10 lakh promised)", status: "warning" }
    ],
    summary: "Gandhinagar hosts GIFT City — India's first International Financial Services Centre — which received 880 acres of land on a 99-year lease at Re 1/acre and enjoys the world's most generous tax exemption: 100% income tax holiday for 20 consecutive years (extended from 10 years in Budget 2026-27), plus zero GST, no STT, no CTT, and concessional 15% tax thereafter. After 18 years of development, the Gujarat government's only direct revenue from GIFT City was Rs 94.19 lakh — ironically from liquor sales in a prohibition state. The project houses 725+ entities and employs around 20,000 people, against projections of 1 million jobs 'in the next decade.' Meanwhile, property revenues flow to the project company (IL&FS consortium), not the state. The district exemplifies how Gujarat subsidizes global capital formation at the direct expense of its own fiscal capacity.",
    keyCrises: [
      { year: "2026", title: "Tax Holiday Doubled to 20 Years", detail: "Union Budget 2026-27 extended GIFT City's 100% income tax exemption from 10 to 20 years out of 25, plus concessional 15% rate thereafter. No cost-benefit analysis of revenue foregone published. (Source: Trak.in, Housivity, PIB)" },
      { year: "Apr 2025", title: "First Revenue: Liquor Sales", detail: "After 18 years, GIFT City generated its first revenue for Gujarat government — Rs 94.19 lakh from liquor sales, in a state with prohibition. Critics noted land revenues flow to project company, not state. (Source: The Federal)" },
      { year: "Ongoing", title: "Shell Office Concerns", detail: "Critics allege many GIFT City-registered entities maintain shell offices in Gandhinagar while primary operations remain in Mumbai/Delhi, creating a tax arbitrage rather than genuine economic activity in Gujarat. (Source: The Federal)" }
    ]
  },
  {
    id: "porbandar",
    name: "Porbandar",
    region: "Saurashtra",
    coordinates: [69.6293, 21.6417],
    tagline: "The Dying Fishermen's Coast",
    pillars: ["Environment", "Economics", "Labor"],
    stats: [
      { label: "Coastline Erosion (Gujarat)", value: "765 km eroded", status: "critical" },
      { label: "Gujarat Fishermen in Pakistan Custody", value: "144 (1,173 boats seized)", status: "danger" },
      { label: "Fish Catch Decline", value: "High-value species gone", status: "danger" }
    ],
    summary: "Porbandar's fishing community faces an existential crisis on multiple fronts. Industrial pollution along Gujarat's coast has decimated high-value fish species (Prawn, White Pomfret, Surmai — once Rs 300-1,500/kg) between Porbandar and Kutch, leaving only low-value Red fish (Rs 25/kg). Fishing trips that were once one-day coastal runs now stretch to 20 days in deep waters with no guaranteed catch. A single trip costs Rs 1.5 lakh (crew, ice, diesel) against uncertain returns, trapping boat owners in debt. Desperation drives fishermen into Pakistani waters — 144 Gujarat fishermen remain in Pakistani custody with 1,173 boats seized and no repatriations since 2024. Two fishermen died in Pakistani jails in 2025, one reportedly by suicide. Meanwhile, 765 km of Gujarat's coastline has eroded, with Porbandar among the worst-affected districts, and 7 lakh hectares across 534 coastal villages impacted by salinity ingress.",
    keyCrises: [
      { year: "Nov 2024", title: "Fishermen Captured by Pakistan", detail: "Boat 'Kal Bhairav' from Porbandar captured by PMSA near IMBL after fishermen drifted into no-fishing zone. 7 crew arrested. Warming waters forcing boats deeper into high seas where border demarcation is unclear. (Source: The Migration Story)" },
      { year: "2025", title: "Deaths in Pakistani Custody", detail: "Babubhai Chudasama from Una, Gujarat, died in Pakistani jail. 26 Indian fishermen total have died in captivity. Two deaths in Malir jail in Jan and March 2025, one by reported suicide. (Source: SACW, Maktoob Media)" },
      { year: "Ongoing", title: "Coastal Erosion & Fishery Collapse", detail: "765 km of Gujarat coastline eroded. High-value species extinct between Porbandar-Kutch since 1990-2000 due to industrial pollution. In coastal South Gujarat villages that once had 80-90 boats, fewer than 10 remain. (Source: Gujarat Samachar, The Wire Science, ICSF)" }
    ]
  },
  {
    id: "anand",
    name: "Anand",
    region: "Central Gujarat",
    coordinates: [72.9289, 22.5645],
    tagline: "The White Revolution's Water Reckoning",
    pillars: ["Water", "Economics", "Environment"],
    stats: [
      { label: "Water Per Milch Cow", value: "95.38 L/day", status: "warning" },
      { label: "Amul (GCMMF) Turnover", value: "$7.3 Billion (FY24)", status: "normal" },
      { label: "Blue Water for Dairy (2050 proj.)", value: "90-100 km³/yr", status: "critical" }
    ],
    summary: "Anand is the birthplace of India's White Revolution and home to Amul (GCMMF) — the world's largest dairy cooperative with $7.3 billion turnover, 35 million litres daily procurement from 3.64 million farmer members across 18,600 village societies. But this triumph rests on an unsustainable water foundation. Each milch cow in Anand requires 95.38 litres of water daily (drinking + feed absorption), with an additional 9.8L for cleaning — and this excludes the massive water footprint of growing feed and fodder. North Gujarat's water table is falling 9-20 feet per year, reaching 600 feet below ground in parts of the dairy belt, risking irreversible salinization. The Jyotigram Yojana (2006) attempted to curb groundwater pumping via electricity rationing but increased water prices 40-60% for marginal farmers, pushing some to lease their land to well owners. Projections show that tripling milk production by 2050 would require 90-100 km³ of blue water annually — one-fourth of India's replenishable groundwater.",
    keyCrises: [
      { year: "Ongoing", title: "Groundwater Free-Fall", detail: "Water tables across the dairy belt falling 9-20 ft/year, reaching 600 ft below ground. Risk of irreversible aquifer salinization. Flat electricity tariffs in 1980s-90s accelerated tube well proliferation and depletion. (Source: Columbia Water Center)" },
      { year: "2006", title: "Jyotigram Yojana Unintended Consequences", detail: "Gujarat's electricity rationing scheme to curb groundwater pumping raised water prices 40-60% for marginal farmers. Some small farmers leased land to well owners, increasing inequality. (Source: IWA Publishing)" },
      { year: "Aug 2024", title: "Anand District Flooding", detail: "268mm rainfall recorded in Anand district during the August 2024 monsoon deluge that devastated Central Gujarat, damaging dairy infrastructure and fodder supplies. (Source: ReliefWeb, NDRF)" }
    ]
  },
  {
    id: "bhavnagar",
    name: "Bhavnagar",
    region: "Saurashtra",
    coordinates: [72.1519, 21.7645],
    tagline: "The Dying Ship Graveyard",
    pillars: ["Labor", "Environment", "Economics"],
    stats: [
      { label: "Ship Dismantling Decline", value: "75%+ from peak", status: "critical" },
      { label: "Active Yards (of 120)", value: "~24", status: "danger" },
      { label: "Employment Collapse", value: "60,000 → <15,000", status: "critical" }
    ],
    summary: "Bhavnagar's Alang-Sosiya is the world's largest ship-breaking yard, but it is dying. In FY 2024-25, only 113 ships were beached — the lowest in over a decade, down from a peak of 400-415 ships annually. Dismantling volumes crashed to 680,000 LDT in 2024, down 35% year-on-year. Of 120 yards that once operated, only about 24 remain active. Employment has collapsed from 60,000+ workers to fewer than 15,000. The causes are structural: the global shipping boom (high freight rates extending vessel life), India's adoption of the Hong Kong Convention (raising costs), and price competition from Bangladesh ($540-550/LDT vs Alang's $500-510/LDT). The human cost is staggering — at least 434 documented worker deaths between 1991-2012, plus 56 since 2013, with the Supreme Court finding fatal accident rates at 2 per 1,000 workers (vs 0.34 in mining). No yard owner has ever been held responsible for a worker death. The downstream collapse affects 60 induction furnaces, 80 rerolling mills, and 200+ retail businesses in Bhavnagar that depended on scrap steel supply.",
    keyCrises: [
      { year: "FY 2024-25", title: "Record Low Ship Arrivals", detail: "Only 113 ships beached (101 dismantled), the lowest since the 2008 financial crisis. Volumes down 35% YoY to 680,000 LDT. Red Sea disruptions, Ukraine war, and high freight rates made scrapping unprofitable for shipowners. (Source: Marine Insight, BigMint/SEAISI, Al Jazeera)" },
      { year: "1991-2025", title: "Systemic Worker Deaths", detail: "At least 434 deaths (1991-2012) plus 56 since 2013 documented. Supreme Court found 2 per 1,000 fatal accident rate. No yard owner ever held responsible. Occupational diseases (cancer, respiratory) go undocumented. (Source: NGO Shipbreaking Platform, Toxics Watch Alliance)" },
      { year: "2019", title: "Hong Kong Convention Compliance", detail: "India joined HKC, requiring heavy investment in pollution control and hazardous waste management. Raised operating costs, making Alang less price-competitive ($500-510/LDT) than Bangladesh ($540-550) and Pakistan ($525-530). (Source: ShippingInBox, Maritime Gateway)" }
    ]
  },
  {
    id: "narmada",
    name: "Narmada",
    region: "South Gujarat",
    coordinates: [73.4980, 21.8787],
    tagline: "Displacement's Ground Zero",
    pillars: ["Water", "Education", "Labor"],
    stats: [
      { label: "Tribal Population", value: "81.55%", status: "warning" },
      { label: "Families Displaced by SSP", value: "41,000+ (3 states)", status: "critical" },
      { label: "Backward District Ranking", value: "Top 250 of 640 (2006)", status: "danger" }
    ],
    summary: "Narmada district is ground zero for India's most contentious development-versus-rights conflict. With 81.55% Scheduled Tribe population (Vasavas, Tadvis, Bhils), it bears the heaviest cost of the Sardar Sarovar Dam Project, which displaced over 41,000 families (200,000+ people) across three states — 56% of them adivasis, and over 90% in Gujarat and Maharashtra are Bhil and Tadvi tribal members. Despite India's supposedly best resettlement policy, the NBA documented that not a single displaced village has been resettled as a community. Fathers and sons were given lands in distant places; brothers were separated. Compensation was below promised rates, resettlement sites lacked drinking water, electricity, schools, and medical facilities. Named among India's 250 most backward districts in 2006, Narmada has 89.5% rural population with limited access to basic amenities. The conflict continues — in 2020, tribals protested land acquisition around the Statue of Unity, and rehabilitation demands remain unresolved decades after displacement.",
    keyCrises: [
      { year: "1961-2017", title: "Sardar Sarovar Dam Construction & Displacement", detail: "41,000+ families (200,000+ people) displaced across Gujarat, Maharashtra, and MP. 56% adivasis. No village resettled as a community. World Bank withdrew in 1993 after NBA campaign. No comprehensive Environmental Impact Assessment ever completed. (Source: Cultural Survival, Climate-Diplomacy, Earth Island Journal)" },
      { year: "2020", title: "Statue of Unity Land Acquisition Protests", detail: "Tribal communities protested fencing of six villages around the Statue of Unity by Sardar Sarovar Narmada Nigam Ltd. Tribal leaders wrote to PM demanding halt to land acquisition. (Source: SabrangIndia)" },
      { year: "Ongoing", title: "Rehabilitation Failures Persist", detail: "Decades after displacement, thousands of families lack adequate compensation. Resettlement sites without water, electricity, schools. Adivasi separation from forests and rivers destroyed cultural and economic foundations. NBER study documented long-term welfare impacts. (Source: NBER, University Network for Human Rights, NBA)" }
    ]
  },
  {
    id: "kutch",
    name: "Kutch",
    region: "Kutch",
    coordinates: [69.9576, 23.7337],
    tagline: "The Mega-Scale Vulnerability Zone",
    pillars: ["Energy", "Infrastructure", "Environment"],
    stats: [
      { label: "Mundra Port Cargo", value: "26% of India total", status: "warning" },
      { label: "Imported Coal Base", value: "8,620 MW", status: "critical" },
      { label: "Mangrove Destruction", value: "3,000+ hectares lost", status: "danger" }
    ],
    summary: "As India's largest district by area, Kutch is the mega-scale entry point for Gujarat's external dependencies. It hosts the Adani Mundra Port (India's largest commercial port) and the concentrated coastal power hubs of Tata CGPL (4,000 MW) and Adani Power (4,620 MW). This infrastructure is inherently brittle: it operates entirely on imported Indonesian and Australian coal. When global coal prices spiked in 2021-2022, both mega-plants ceased generation, plunging Gujarat into a power crisis and forcing the state to bail them out by permitting massive tariff hikes. Environmentally, the rapid industrialization of the Gulf of Kutch has resulted in the destruction of over 3,000 hectares of vital mangroves, dismantling the natural coastal defense system against intensifying Arabian Sea cyclones.",
    keyCrises: [
      { year: "2021-22", title: "Imported Coal Power Collapse", detail: "Tata and Adani power plants halted generation when Indonesian coal prices spiked. State negotiated tariff pass-throughs, breaking original PPA agreements to prevent grid collapse. (Source: IEEFA, Business Standard)" },
      { year: "2013-14", title: "Mangrove Destruction Fines", detail: "Sunita Narain committee found Adani Port guilty of destroying mangroves and creeks. Ministry imposed ₹200 crore environmental restoration penalty. (Source: Down to Earth, MoEFCC)" }
    ]
  },
  {
    id: "jamnagar",
    name: "Jamnagar",
    region: "Saurashtra",
    coordinates: [70.0577, 22.4707],
    tagline: "The Oil Kingdom",
    pillars: ["Materials", "Energy", "Infrastructure"],
    stats: [
      { label: "Refinery Capacity", value: "1.24M bpd", status: "warning" },
      { label: "Russian Crude Dependency", value: "36%+ of intake", status: "critical" },
      { label: "Marine National Park Threat", value: "Unregulated tanker traffic", status: "danger" }
    ],
    summary: "Jamnagar's coastal economy is entirely anchored by the Reliance Industries refinery complex, the largest single-location refinery in the world. While celebrated as an export powerhouse, its structural vulnerability is absolute: it relies entirely on imported crude oil, increasingly tied to discounted Russian Urals amidst global sanctions. A disruption in the Strait of Hormuz or a secondary sanctions enforcement by the US would immediately bottleneck Jamnagar's operations. The intense VLCC (Very Large Crude Carrier) traffic directly overlaps with the Gulf of Kutch Marine National Park, creating a persistent environmental friction point.",
    keyCrises: [
      { year: "2022-25", title: "Sanctions Arbitrage Reliance", detail: "Refinery shifted heavily to discounted Russian crude post-Ukraine war. While highly profitable in the short term, it exposes the hub to secondary US sanctions and sudden supply cut-offs. (Source: Reuters, Energy Intelligence)" }
    ]
  },
  {
    id: "mehsana",
    name: "Mehsana",
    region: "North Gujarat",
    coordinates: [72.3923, 23.5880],
    tagline: "The Groundwater Sinkhole",
    pillars: ["Water", "Agriculture", "Labor"],
    stats: [
      { label: "Water Extraction", value: "132% of Recharge", status: "critical" },
      { label: "Legal Emigration", value: "10x average", status: "warning" },
      { label: "Fluoride Contamination", value: "High", status: "danger" }
    ],
    summary: "Mehsana is the epicenter of North Gujarat's agrarian water collapse. Officially classified as 'over-exploited,' groundwater extraction runs at 132% of natural recharge rates. Pumps have progressed from 50 feet in the 1970s to over 800-1,000 feet today, bringing up fossil water saturated with fluoride. The complete ecological collapse of farming viability has driven an unprecedented exodus: Mehsana leads Gujarat in both legal migration (often via Canada student visas) and highly dangerous illegal 'dunki' (donkey) routes to the United States. The district illustrates the terminal phase of the Green Revolution's tube-well model.",
    keyCrises: [
      { year: "Ongoing", title: "Fossil Water Extraction", detail: "Aquifers drained to 1,000+ feet. High fluoride and salinity levels destroying soil fertility, causing widespread fluorosis in rural populations. (Source: CGWB, WaterAid)" },
      { year: "2023", title: "The US Border Exodus", detail: "Mehsana emerged as a primary hub for illegal immigration rings 'Dunki flights' sending agrarian youth to the US border via Nicaragua, reflecting catastrophic local job and farming market failure. (Source: The Hindu, Indian Express)" }
    ]
  },
  {
    id: "bharuch",
    name: "Bharuch",
    region: "South Gujarat",
    coordinates: [72.9959, 21.7051],
    tagline: "The Toxic Gateway",
    pillars: ["Chemical Governance", "Environment", "Labor"],
    stats: [
      { label: "Ankleshwar CEPI Score", value: "80.21", status: "critical" },
      { label: "API Dependency", value: "70% imported from China", status: "danger" },
      { label: "Amlakhadi River", value: "Zero Dissolved Oxygen", status: "critical" }
    ],
    summary: "Bharuch, particularly the Ankleshwar industrial estate, forms the southern anchor of Gujarat's chemical corridor. It produces a significant percentage of India's bulk drugs, dyes, and paints. However, this production is deeply dependent on Key Starting Materials (KSMs) and Active Pharmaceutical Ingredients (APIs) imported from China. During the Covid-19 pandemic, Ankleshwar's production stalled completely when Chinese shipments stopped. Environmentally, the estate discharges into the Amlakhadi River, which has recorded zero Dissolved Oxygen levels and severe heavy metal contamination, destroying the livelihoods of downstream fishing communities along the Narmada estuary.",
    keyCrises: [
      { year: "2020", title: "Pandemic API Supply Shock", detail: "Pharma manufacturing in Ankleshwar and Dahej collapsed when Chinese API supply lines froze, revealing deep supply-chain vulnerability. (Source: Pharmexcil, ET)" },
      { year: "2023", title: "Dahej Chemical Explosions", detail: "Series of explosions in Dahej SEZ chemical plants highlighted extreme regulatory blind spots in occupational safety and environmental compliance. (Source: GPCB, Times of India)" }
    ]
  },
  {
    id: "rajkot",
    name: "Rajkot",
    region: "Saurashtra",
    coordinates: [70.7923, 22.3039],
    tagline: "The Stalled Engine of Saurashtra",
    pillars: ["Labor", "Economics", "Infrastructure"],
    stats: [
      { label: "MSME Closures (2025)", value: "300+ units", status: "danger" },
      { label: "Banking NPAs", value: "Rising 18% YoY", status: "warning" },
      { label: "Skilled Labor Deficit", value: "40%", status: "critical" }
    ],
    summary: "Rajkot is the traditional engineering and auto-ancillary hub of Gujarat, built on a vast network of MSMEs rather than mega-corporations. Historically resilient, the district is now facing a structural crisis. The transition to Electric Vehicles (EVs) threatens thousands of localized internal-combustion engine (ICE) part manufacturers who lack the capital to retool. Furthermore, Rajkot's MSMEs operate on extremely thin margins and depend on cheap, unorganized migrant labor. Recent commodity price shocks (steel and brass) have wiped out the working capital of over 300 units.",
    keyCrises: [
      { year: "2024", title: "The EV Transition Shock", detail: "Auto-ancillary MSMEs supplying traditional ICE vehicle components faced existential threats, lacking state support for technological transition. (Source: Auto Components Manufacturers Association)" },
      { year: "2024", title: "TRP Game Zone Fire", detail: "Reflected deep urban governance rot—an illegal structure operating without fire NOCs resulted in 32 deaths, including children. (Source: Indian Express)" }
    ]
  },
  {
    id: "amreli", name: "Amreli", region: "Saurashtra", coordinates: [71.2167, 20.6000], tagline: "The Forgotten Coast",
    pillars: ["Agriculture", "Economics", "Environment"], stats: [{ label: "Crop Failure Rate", value: "48%", status: "critical" }, { label: "Port Industrial Decay", value: "Pipavav Saturation", status: "warning" }, { label: "Lion Conflict", value: "45 attacks YoY", status: "danger" }],
    summary: "Amreli suffers from coastal isolation and deep agrarian crisis. Erratic monsoons and coastal salinity ingress have destroyed thousands of hectares of groundnut acreage. The Pipavav port ecosystem has not created sufficient local employment to stop the rural exodus.", keyCrises: [{ year: "2024", title: "Coastal Salinity Crisis", detail: "Groundwater salinity increased rapidly post-cyclones, damaging agricultural output. (Source: State Ag Dept)"}]
  },
  {
    id: "dahod", name: "Dahod", region: "Central Gujarat", coordinates: [74.2567, 22.8333], tagline: "The Exodus Point",
    pillars: ["Labor", "Education", "Economics"], stats: [{ label: "Distress Migration", value: "70% working pop", status: "critical" }, { label: "Tribal Sub-Plan Usage", value: "Low", status: "danger" }, { label: "Dropout Rate", value: "Top 3 in state", status: "warning" }],
    summary: "Dahod is the epicentre of Gujarat's tribal migration crisis. Up to 70% of the active working-age population leaves for 8 months a year to work in construction sites or agricultural fields, highlighting the complete failure of local economic inclusion.", keyCrises: [{ year: "Ongoing", title: "Seasonal Migration Cycle", detail: "Mass exodus of Bhil tribal workers creates severe educational gaps for children. (Source: Labor Rights Union)"}]
  },
  {
    id: "dang", name: "Dang", region: "South Gujarat", coordinates: [73.8052, 20.7628], tagline: "The Deforested Haven",
    pillars: ["Environment", "Water", "Labor"], stats: [{ label: "Forest Cover Loss", value: "14% over 10 yrs", status: "danger" }, { label: "Tribal Poverty", value: "High", status: "critical" }, { label: "Summer Water Tankers", value: "100+ villages", status: "warning" }],
    summary: "Despite being Gujarat's most forested district, Dang faces severe paradoxes. Indigenous communities face constant displacement threats under forestry laws. During summers, deep terrain runoff forces over 100 villages to depend exclusively on government tankers.", keyCrises: [{ year: "2023", title: "Water Tanker Crisis", detail: "High rainfall but zero retention led to acute summer drinking water shortages. (Source: Water Mgmt Auth)"}]
  },
  {
    id: "navsari", name: "Navsari", region: "South Gujarat", coordinates: [72.9520, 20.9467], tagline: "The Sinking Orchards",
    pillars: ["Environment", "Agriculture", "Economics"], stats: [{ label: "Orchard Salinity", value: "30% impact", status: "danger" }, { label: "Sea Level Threat", value: "High Vulnerability", status: "critical" }, { label: "Textile Job Losses", value: "15,000+", status: "warning" }],
    summary: "Navsari's famous Chikoo and Mango orchards are facing existential threats from rapid coastal salinity ingress. Brackish water is penetrating deeper into the water table. Its unorganized textile processing sector suffers from export shocks alongside Surat.", keyCrises: [{ year: "2024", title: "Horticulture Collapse", detail: "Saltwater intrusion ruined over 30% of coastal orchard yields. (Source: Agri Univ Navsari)"}]
  },
  {
    id: "chhota-udepur", name: "Chhota Udepur", region: "Central Gujarat", coordinates: [74.0118, 22.3047], tagline: "The Extractive Fringe",
    pillars: ["Materials", "Labor", "Environment"], stats: [{ label: "Dolomite Impact", value: "Ecological Damage", status: "danger" }, { label: "Illegal Sand Mining", value: "Critical", status: "critical" }, { label: "Tribal Literacy", value: "Lagging", status: "warning" }],
    summary: "Chhota Udepur’s economy is largely extractive. It provides dolomite, sand, and minerals for the state's construction booms, yet remains one of the poorest tribal districts. Unregulated sand mining along the Orsang river has altered local hydrology.", keyCrises: [{ year: "Ongoing", title: "Sand Mafia Conflict", detail: "Illegal mining cartels dominate the Orsang river basin, suppressing tribal rights. (Source: News Reports)"}]
  },
  {
    id: "botad", name: "Botad", region: "Saurashtra", coordinates: [71.6661, 22.1693], tagline: "The Broken Polishing Wheel",
    pillars: ["Labor", "Economics", "Agriculture"], stats: [{ label: "Diamond Unit Closures", value: "40% MSMEs", status: "critical" }, { label: "Cotton Crop Failure", value: "Repeated", status: "danger" }, { label: "Wage Stagnation", value: "Since 2018", status: "warning" }],
    summary: "Botad operates as a massive satellite labor hub for Surat's diamond industry. The global sanctions on Russian rough diamonds cratered Botad's local MSME polishing units, leading to severe localized unemployment. With alternative agriculture (cotton) failing due to erratic rains, Botad represents a dual-sector collapse.", keyCrises: [{ year: "2025", title: "Diamond Layoffs", detail: "Over 40% of small-scale local polishing units shut down, trapping thousands in poverty. (Source: Diamond Assoc)"}]
  },
  {
    id: "surendranagar", name: "Surendranagar", region: "Saurashtra", coordinates: [71.6394, 22.7275], tagline: "The Drought Gateway",
    pillars: ["Water", "Agriculture", "Economics"], stats: [{ label: "Canal Water Dispute", value: "Endemic", status: "danger" }, { label: "Cotton Yield Drop", value: "25% YoY", status: "critical" }, { label: "Ceramic Contagion", value: "Spreading", status: "warning" }],
    summary: "Surendranagar historically suffers from chronic drought. While Narmada canal networks were promised to save the district, unequal distribution leaves tail-end villages completely dry. Economically, it is increasingly absorbing the highly polluting overflow of Morbi's ceramic industry.", keyCrises: [{ year: "2023", title: "Water Riots Warning", detail: "Tail-end farmers protested lack of Narmada water releases during critical sowing periods. (Source: Agitating Farmers Forum)"}]
  },
  {
    id: "devbhoomi-dwarka", name: "Devbhoomi Dwarka", region: "Saurashtra", coordinates: [69.2245, 22.2530], tagline: "The Eroding Coast",
    pillars: ["Environment", "Economics", "Water"], stats: [{ label: "Coastal Erosion", value: "Severe", status: "critical" }, { label: "Fishery Depletion", value: "60% drop", status: "danger" }, { label: "Tourism Reality", value: "Strained", status: "warning" }],
    summary: "Dwarka’s coastal economy is under siege. Industrial pollution from nearby Jamnagar and upstream sources has devastated local fisheries, forcing traditional fishing communities into poverty. The district's economy leans precariously on religious tourism.", keyCrises: [{ year: "2024", title: "Coastal Erosion Crisis", detail: "Rising sea levels and degraded mangroves continue to consume coastal grazing lands and villages. (Source: Environment Dept)"}]
  },
  {
    id: "gir-somnath", name: "Gir Somnath", region: "Saurashtra", coordinates: [70.4357, 20.8938], tagline: "The Protected Conflict",
    pillars: ["Environment", "Agriculture", "Labor"], stats: [{ label: "Lion-Human Conflict", value: "Highest in State", status: "danger" }, { label: "Unseasonal Rains", value: "Massive crop damage", status: "critical" }, { label: "Fishing Insecurity", value: "Intense", status: "warning" }],
    summary: "Gir Somnath exists at the breaking point of conservation and agriculture. Farmers suffer catastrophic crop losses not only from extreme unseasonal rains but from expanding wildlife populations that decimate fields. Proposed Eco-Sensitive Zones threaten to lock up thousands of hectares.", keyCrises: [{ year: "2024", title: "Wildlife Crop Devastation", detail: "Protests over government failure to compensate for crops wiped out by protected herbivores. (Source: Kisan Sangh)"}]
  },
  {
    id: "tapi", name: "Tapi", region: "South Gujarat", coordinates: [73.5705, 21.1444], tagline: "The Forgotten Forest",
    pillars: ["Environment", "Water", "Labor"], stats: [{ label: "Forest Rights Claims", value: "High rejection rate", status: "danger" }, { label: "Tribal Displacement", value: "Historical baggage", status: "critical" }, { label: "Agro-Forestry Limits", value: "Severe", status: "warning" }],
    summary: "Carved out from Surat, Tapi remains a deeply marginalized tribal district. Historic dam projects like Ukai displaced thousands who were never properly rehabilitated. Today, indigenous communities face high rejection rates for land rights under the Forest Rights Act.", keyCrises: [{ year: "Ongoing", title: "FRA Claims Rejection", detail: "Systemic denial of forest land titles deeply marginalizes agricultural tribals. (Source: Tribal Advocacy)"}]
  },
  {
    id: "kheda", name: "Kheda", region: "Central Gujarat", coordinates: [72.6841, 22.7535], tagline: "The Tobacco Dust",
    pillars: ["Agriculture", "Health", "Water"], stats: [{ label: "Bidi Worker Wages", value: "Sub-minimum", status: "critical" }, { label: "Tobacco Subsidy Gap", value: "Severe", status: "danger" }, { label: "Groundwater Quality", value: "Deteriorating", status: "warning" }],
    summary: "Kheda is synonymous with Gujarat's tobacco cultivation and processing industry. The bidi-rolling workforce suffers from chronic occupational health hazards and sub-minimum wages. While dairy cooperatives offer some buffer, legacy agricultural sectors are locked in exploitative loops.", keyCrises: [{ year: "2023", title: "Bidi Workers Unrest", detail: "Exploitative piece-rate wages led to massive unsupported strikes among women bidi rollers. (Source: Labor Union)"}]
  },
  {
    id: "aravalli", name: "Aravalli", region: "North Gujarat", coordinates: [73.3082, 23.4243], tagline: "The Rocky Deficit",
    pillars: ["Agriculture", "Water", "Economics"], stats: [{ label: "Groundwater Level", value: "Critical Depletion", status: "danger" }, { label: "Industrial Growth", value: "Stagnant", status: "critical" }, { label: "Youth Out-Migration", value: "High", status: "warning" }],
    summary: "Aravalli suffers from the classic North Gujarat curse: rapidly depleting aquifers in rocky terrain. Agriculture remains rain-fed and highly volatile. With almost zero large-scale industrialization in the district, youth are forced to migrate to Ahmedabad and Gandhinagar.", keyCrises: [{ year: "Ongoing", title: "Agrarian Failure", detail: "Successive monsoon failures combined with deep rock-aquifer depletion ruined small landholders. (Source: Hydrology Dept)"}]
  },
  {
    id: "mahisagar", name: "Mahisagar", region: "Central Gujarat", coordinates: [73.5350, 23.0906], tagline: "The Damned Catchment",
    pillars: ["Water", "Labor", "Economics"], stats: [{ label: "Hydro-displacement", value: "Pending Rehab", status: "danger" }, { label: "Per Capita Income", value: "Bottom 20%", status: "critical" }, { label: "Agrarian Distress", value: "Severe", status: "warning" }],
    summary: "Despite hosting major dams on the Mahi river (Kadana), Mahisagar paradoxically struggles with agricultural water allocation. Displaced populations from the massive catchment areas remain locked in generational poverty, entirely bypassed by the 'Gujarat Model' of high-speed urban-industrial growth.", keyCrises: [{ year: "Ongoing", title: "Kadana Rehabilitation Backlog", detail: "Unresolved compensation claims for lands submerged decades ago. (Source: Social Justice Forums)"}]
  },
  {
    id: "patan", name: "Patan", region: "North Gujarat", coordinates: [72.1264, 23.8427], tagline: "The Saline Frontier",
    pillars: ["Water", "Agriculture", "Environment"], stats: [{ label: "Fluoride Levels", value: "Beyond Limits", status: "critical" }, { label: "Farm Salinity", value: "Expanding", status: "danger" }, { label: "Renewable Paradox", value: "Solar land conflicts", status: "warning" }],
    summary: "Patan sits on the edge of the Rann, fighting a daily battle against soil salinity and toxic groundwater. Fluoride contamination has crippled the health of entire villages. Furthermore, tracts of Patan's wasteland are being acquired for mega-solar parks, robbing local pastoralists of grazing lands.", keyCrises: [{ year: "2024", title: "Solar Park Grazing Conflict", detail: "Pastoralist communities protested the enclosure of traditional 'gauchar' lands for solar farms. (Source: Maldhari Assoc)"}]
  },
  {
    id: "panchmahal", name: "Panchmahal", region: "Central Gujarat", coordinates: [73.6190, 22.7547], tagline: "The Divided Manufacturing",
    pillars: ["Labor", "Economics", "Environment"], stats: [{ label: "Halol GIDC Dependency", value: "Massive", status: "warning" }, { label: "Tribal Marginalization", value: "High", status: "critical" }, { label: "Industrial Pollution", value: "Escalating", status: "danger" }],
    summary: "Panchmahal presents a sharp divide: the highly industrialized Halol and Kalol belts versus deeply impoverished tribal hinterlands. The industrial zones rely heavily on out-of-state skilled labor, providing zero structural uplift for the local Bhil population who inherit only environmental fallout.", keyCrises: [{ year: "2023", title: "Halol Effluent Breaches", detail: "Industrial chemical dumping into local water bodies devastated downstream agriculture. (Source: GPCB Flags)"}]
  },
  {
    id: "sabarkantha", name: "Sabarkantha", region: "North Gujarat", coordinates: [73.0116, 23.6174], tagline: "The Dairy Mirage",
    pillars: ["Water", "Agriculture", "Economics"], stats: [{ label: "Dairy Monopoly Pressure", value: "Intense", status: "warning" }, { label: "Groundwater Plunge", value: "1,000+ feet", status: "critical" }, { label: "BT Cotton Collapse", value: "Recurrent", status: "danger" }],
    summary: "Sabarkantha leans heavily on its dairy cooperative structures to mask underlying agrarian decay. The absolute collapse of the water table (pumped from 1000+ feet) means agriculture, particularly BT cotton, is becoming economically unviable, forcing farmers into brutal water-subsidy trade-offs.", keyCrises: [{ year: "Ongoing", title: "Deep Aquifer Extinction", detail: "The reliance on un-replenishable fossil water guarantees long-term geographical unviability. (Source: Water Mgmt Inst)"}]
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
