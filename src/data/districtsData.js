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
    tagline: "The Mega-Scale Vulnerability Zone",
    pillars: ["Infrastructure", "Energy", "Environment", "Labor"],
    stats: [
      { label: "Mundra Port Cargo Share", value: "26% of India total", status: "warning" },
      { label: "Imported-Coal Power Capacity", value: "8,620 MW", status: "critical" },
      { label: "Mangroves Destroyed", value: "3,000+ hectares", status: "danger" },
      { label: "Agariya Working Temps", value: "52°C", status: "danger" },
      { label: "Submarine Cables Landing", value: "0", status: "critical" }
    ],
    summary: "Kutch is the great contradiction of Gujarat. As India's largest district by area, it is the entry point for the state's external dependencies and the showcase of its renewable ambitions — Mundra Port (Adani) handles 26% of India's commercial cargo, the Khavda renewable park is the world's largest at 9.4 GW, and the coastal coal-power hubs of Tata CGPL (4,000 MW) and Adani Power (4,620 MW) anchor the state's grid. But this scale is structurally brittle: the entire 8,620 MW of coastal power runs on imported Indonesian and Australian coal, and when global prices spiked in 2021–22 both mega-plants stopped generating, forcing the state to grant tariff hikes to bail them out. On the other side of the same district, the Little Rann hosts the extremely marginalised Agariya salt workers — trapped in generational debt bondage, working in 52°C heat that produces bone calcification, blindness, and widespread child labour. The rapid industrialisation of the Gulf of Kutch has destroyed over 3,000 hectares of mangroves, dismantling the natural coastal defence against intensifying Arabian Sea cyclones. Kutch hosts everything Gujarat is celebrated for, and everything it does not want indexed.",
    keyCrises: [
      { year: "2021-22", title: "Imported Coal Power Collapse", detail: "Tata CGPL and Adani Power Mundra plants halted generation when Indonesian coal prices spiked beyond their PPA economics. The state negotiated tariff pass-throughs that broke the original power purchase agreements to prevent grid collapse, transferring the cost of import dependency to consumers. (Source: IEEFA, Business Standard)" },
      { year: "2013-14", title: "Mangrove Destruction Penalty", detail: "The Sunita Narain committee found Adani Port guilty of destroying mangroves, creeks, and intertidal mudflats in the Gulf of Kutch. The Ministry of Environment imposed a ₹200 crore environmental restoration penalty — the largest of its kind in Gujarat at the time. (Source: Down to Earth, MoEFCC)" },
      { year: "2024", title: "Khavda Evacuation Bottleneck", detail: "The 9.4 GW Khavda renewable park is operational, but the transmission infrastructure required to evacuate generated power into the national grid remains critically delayed, stranding clean energy and undermining the showcase project's actual contribution. (Source: Mercom India, Power Line)" },
      { year: "Ongoing", title: "Agariya Generational Bondage", detail: "Little Rann salt-pan workers face 52°C working conditions with no formal healthcare or fair wage protections. The Salt Workers' Union has documented blindness, bone calcification, and persistent child labour across multiple generations of the same families. (Source: Salt Workers Union, Down to Earth)" }
    ]
  },
  {
    id: "jamnagar",
    name: "Jamnagar",
    region: "Saurashtra",
    coordinates: [70.0577, 22.4707],
    tagline: "The Oil Kingdom on Foreign Crude",
    pillars: ["Materials", "Energy", "Infrastructure", "Economics"],
    stats: [
      { label: "Reliance Refinery Capacity", value: "1.24M bpd (largest single-site, world)", status: "warning" },
      { label: "Imported Crude Dependency", value: "~85%", status: "critical" },
      { label: "Russian Urals Share of Intake", value: "36%+", status: "critical" },
      { label: "Marine National Park", value: "VLCC traffic overlap", status: "danger" }
    ],
    summary: "Jamnagar's coastal economy is anchored entirely by the Reliance refinery complex — the world's largest single-location refining operation at 1.24 million barrels per day — and India's second-largest private refinery, Nayara Energy (partly owned by Rosneft). The dependency paradigm here is absolute: these mega-refineries do not run on Indian oil. Roughly 85% of throughput is imported, and following the Russia–Ukraine war, discounted Russian Urals crude became the dominant feedstock at 36%+ of intake. The economics are excellent in the short term and structurally fragile in the long term: a tightening of US secondary sanctions, a shift in EU import rules, or a banking-rail blockade on Russian payments would bottleneck the entire complex within weeks. Nayara's Rosneft ownership makes it a particular pressure point. Beyond geopolitics, the intense Very Large Crude Carrier (VLCC) traffic into Sikka and Vadinar terminals overlaps directly with the Gulf of Kutch Marine National Park — India's first marine protected area — creating a persistent environmental friction zone that no party in power has been willing to address.",
    keyCrises: [
      { year: "2022-25", title: "Russian Crude Sanctions Exposure", detail: "Reliance and Nayara shifted heavily to discounted Russian Urals crude after the Ukraine war, capturing record refining margins. The exposure makes the hub highly sensitive to secondary US sanctions enforcement, EU price-cap tightening, and sudden cut-offs through banking-rail or shipping-insurance routes. (Source: Reuters, Energy Intelligence)" },
      { year: "Ongoing", title: "Strait of Hormuz Single-Point Risk", detail: "An estimated majority of crude bound for Jamnagar transits the Strait of Hormuz. Any escalation in the Iran–Israel–Saudi corridor would cause immediate freight and insurance shocks for Reliance and Nayara, with no domestic crude alternative available at scale. (Source: ORF, S&P Global Commodity Insights)" },
      { year: "Ongoing", title: "Marine National Park Tanker Conflict", detail: "VLCC traffic into the Sikka and Vadinar terminals routinely transits the buffer zone of India's first Marine National Park in the Gulf of Kutch, threatening coral, dugong populations, and the artisanal fishing communities of nearby villages. (Source: Marine National Park GoG, Mongabay India)" }
    ]
  },
  {
    id: "mehsana",
    name: "Mehsana",
    region: "North Gujarat",
    coordinates: [71.3969, 23.5880],
    tagline: "The Groundwater Sinkhole That Ships Its Children Out",
    pillars: ["Water", "Agriculture", "Labor", "MigrantDiscrimination"],
    stats: [
      { label: "Groundwater Extraction Rate", value: "132% of recharge", status: "critical" },
      { label: "Borewell Depth Today", value: "800–1,000+ feet", status: "danger" },
      { label: "Fluoride in Drinking Water", value: "17.5 mg/L (11× WHO limit)", status: "danger" },
      { label: "Legal Emigration", value: "10× state average", status: "warning" },
      { label: "Dairy Feed-Cost Pressure", value: "Escalating", status: "warning" }
    ],
    summary: "Mehsana epitomises North Gujarat's invisible water crisis and the human exodus it produces. The district's groundwater extraction rate sits at 132% of natural recharge — officially classified by the Central Ground Water Board as 'over-exploited.' Borewells that drew water at 50 feet in the 1970s now reach 800–1,000+ feet, pulling up fossil water saturated with fluoride at concentrations recorded as high as 17.5 mg/L — eleven times the WHO permissible limit — causing widespread fluorosis in rural populations. The Narmada canal network is what keeps the district alive on the surface; the aquifer beneath it is in terminal decline. The agrarian collapse has driven Mehsana to the front of two distinct exodus channels: legal student-visa migration to Canada (the district leads Gujarat in Canadian student migration per capita), and the highly dangerous illegal 'Dunki' or 'Donkey' route — overland passage through Nicaragua, Mexico, and the US southern border — that has killed Mehsana families in transit. The district illustrates the terminal phase of the Green Revolution's tube-well model: agricultural unviability is no longer something the next generation will inherit, it is something they are actively fleeing.",
    keyCrises: [
      { year: "Ongoing", title: "Fossil Water Extraction & Fluorosis", detail: "Aquifers drained to 1,000+ feet across the district. High fluoride and salinity destroying soil fertility and causing widespread skeletal fluorosis in rural populations. New borewell sanctions are restricted but illegal drilling continues. (Source: CGWB, WaterAid, Down to Earth)" },
      { year: "2023", title: "Dunki Route Migration Hub", detail: "Mehsana emerged as a primary recruitment hub for illegal immigration networks running 'Dunki flights' that send agrarian youth to the US southern border via Nicaragua and Mexico. Multiple Mehsana families have died in transit, including the Patel family that froze on the Canada border in January 2022. (Source: The Hindu, Indian Express, BBC)" },
      { year: "2006", title: "Jyotigram Yojana Tariff Backlash", detail: "Gujarat's electricity-rationing scheme designed to curb groundwater pumping raised effective water prices 40-60% for marginal farmers. Some small farmers leased their land to well-owning neighbours, accelerating land consolidation and inequality. (Source: IWA Publishing, Columbia Water Center)" }
    ]
  },
  {
    id: "bharuch",
    name: "Bharuch",
    region: "South Gujarat",
    coordinates: [72.9904, 21.7051],
    tagline: "The Toxic Gateway",
    pillars: ["ChemicalGovernance", "Environment", "Labor", "Materials"],
    stats: [
      { label: "Major Industrial Accidents (2018-25)", value: "90", status: "danger" },
      { label: "Worker Deaths (2018-25)", value: "130", status: "critical" },
      { label: "Ankleshwar CEPI Score", value: "80.21 (critically polluted)", status: "critical" },
      { label: "API Dependency on China", value: "70% imported", status: "danger" },
      { label: "Amlakhadi River Status", value: "Zero dissolved oxygen", status: "critical" }
    ],
    summary: "Bharuch — particularly the Ankleshwar and Dahej industrial estates — is the southern anchor of Gujarat's chemical corridor and produces a significant share of India's bulk drugs, dyes, paints, and intermediates. It is also fundamentally an environmental and occupational hazard zone. Between 2018 and 2025, the corridor witnessed 90 major industrial accidents resulting in 130 worker deaths — averaging one fatal incident every three weeks — and the overwhelming majority of victims are contractual migrant workers from UP, Bihar, and Odisha with no formal safety training, no ESI coverage, and disposable employment status. The pharmaceutical operations are deeply dependent on Key Starting Materials (KSMs) and Active Pharmaceutical Ingredients (APIs) imported from China; during the Covid-19 pandemic, Ankleshwar's bulk-drug production stalled completely when Chinese shipments stopped, exposing a strategic vulnerability that successive 'Atmanirbhar Pharma' announcements have failed to close. Environmentally, the estates discharge into the Amlakhadi River, which has recorded zero dissolved oxygen and severe heavy-metal contamination, destroying the livelihoods of downstream fishing communities along the Narmada estuary. Bharuch is what happens when industrial scale arrives without governance.",
    keyCrises: [
      { year: "2018-2025", title: "Industrial Fatality Corridor", detail: "A continuous string of chemical blasts, boiler explosions, and toxic gas leaks across Ankleshwar, Dahej, and Jhagadia GIDC estates killed 130 workers across 90 major accidents. Most victims were contract migrant labourers with no safety training and no compensation framework. (Source: GPCB, Down to Earth, ToxicsLink)" },
      { year: "2020", title: "Pandemic API Supply Shock", detail: "Pharma manufacturing in Ankleshwar and Dahej collapsed when Chinese API and KSM supply lines froze in early 2020, revealing a strategic dependency that the 'Atmanirbhar Pharma' programme has yet to meaningfully address. India remains 70% dependent on Chinese intermediates. (Source: Pharmexcil, Economic Times, Reuters)" },
      { year: "2023", title: "Dahej SEZ Explosions", detail: "A series of explosions in Dahej SEZ chemical plants — including the LSEZ Yashashvi Rasayan blast that killed 7 — exposed regulatory blind spots in occupational safety and environmental compliance inside Special Economic Zones, where state pollution boards have weakened jurisdiction. (Source: GPCB, Times of India, Indian Express)" }
    ]
  },
  // ── PHASE 3 DISTRICT PROFILES (10 new, research-backed) ──────────────
  {
    id: "rajkot",
    name: "Rajkot",
    region: "Saurashtra",
    coordinates: [70.8022, 22.3039],
    tagline: "The SME Engine on Parched Ground",
    pillars: ["Infrastructure", "Water", "Economics", "Labor"],
    stats: [
      { label: "Registered Industrial Units", value: "43,711", status: "warning" },
      { label: "Foundry Cluster Turnover", value: "₹2,700 Cr", status: "normal" },
      { label: "Saurashtra Water Stress", value: "Critical Zone", status: "critical" },
      { label: "MSME Closures (2025)", value: "300+ units", status: "danger" },
      { label: "Skilled Labour Deficit", value: "~40%", status: "critical" }
    ],
    summary: "Rajkot is Gujarat's engineering and auto-parts powerhouse, with 43,711 registered industrial units across 16 industrial areas, anchored by a foundry cluster of 505 units (₹2,700 Cr turnover, 20,000 workers) and a forging cluster producing 434,200 tonnes annually (₹4,000 Cr). Unlike Gujarat's mega-corporate hubs, Rajkot is built on a vast network of MSMEs operating on extremely thin margins and dependent on cheap, unorganised migrant labour. This makes it doubly fragile: water-stressed and capital-constrained at the same time. The transition to Electric Vehicles threatens thousands of localised internal-combustion-engine (ICE) component manufacturers who lack the capital to retool, and recent commodity-price shocks in steel and brass have wiped out the working capital of over 300 small units. Sitting atop all of this is one of India's most water-stressed regions — Saurashtra faces chronic drought with rainfall deficits declared in multiple recent years, and the district depends heavily on Narmada pipeline transfers (SAUNI scheme) that farmers have called 'a failure.' The TRP Game Zone fire of May 2024, which killed 32 people including 9 children, exposed catastrophic regulatory failure in a city that prides itself on industrial governance.",
    keyCrises: [
      { year: "May 2024", title: "TRP Game Zone Fire", detail: "32 dead including 9 children in an amusement-park fire caused by welding sparks hitting plastic. No fire NOC, only one exit on the upper floor, 2,000L diesel stored on-site. Gujarat HC called it a 'man-made disaster.' Nine officials suspended, eleven accused. (Source: Business Standard, Gujarat Samachar, Indian Express)" },
      { year: "2024", title: "EV Transition Shock for Auto-Ancillary MSMEs", detail: "Rajkot's ICE-component MSMEs supplying traditional vehicle parts faced existential threat as the EV transition accelerated, with no state programme to fund retooling, retraining, or supply-chain repositioning. The Auto Components Manufacturers Association warned of mass closures. (Source: ACMA, Auto Components India)" },
      { year: "2016", title: "Saurashtra Drought Declaration", detail: "1,115 villages across Banaskantha, Dwarka, Kutch, Jamnagar, Porbandar, and Rajkot declared drought-affected by GSDMA. Water-tanker dependency surged across Saurashtra. (Source: GSDMA via ScienceDirect)" },
      { year: "2019", title: "Severe Monsoon Deficit", detail: "Gujarat received only 196mm rainfall Jan–July vs normal 816mm (down 86%). Rajkot and Saurashtra among worst-hit, with groundwater tables plummeting. (Source: IDS UK)" }
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
    id: "amreli",
    name: "Amreli",
    region: "Saurashtra",
    coordinates: [71.2167, 21.6000],
    tagline: "Where the Cyclone Met the Groundnut Belt",
    pillars: ["Agriculture", "Environment", "Economics"],
    stats: [
      { label: "Cyclone Tauktae Landfall (May 2021)", value: "Eye crossed Amreli coast", status: "critical" },
      { label: "Saurashtra Groundnut Yield Decline (2018-19)", value: "~48%", status: "danger" },
      { label: "Asiatic Lion Range Expansion", value: "Out of Gir into Amreli farmland", status: "warning" }
    ],
    summary: "Amreli sits on Saurashtra's southern coast as one of Gujarat's most agriculturally dependent districts, anchored by groundnut, cotton, and onion cultivation, with the Pipavav deep-water port (43% Maersk-owned, recently announced for a USD 2 bn expansion) handling containers, RO-RO and dry bulk on its southern shore. The district carries three structurally compounded vulnerabilities: rain-fed cropping in a region of erratic monsoons, an exposed coastline in the cyclone-intensifying Arabian Sea, and lion-human conflict spilling out of the saturated Gir Protected Area into agricultural villages.\n\nIn May 2021, Cyclone Tauktae — the strongest cyclone to strike Gujarat in decades — made landfall along the Amreli-Bhavnagar coast with sustained winds above 160 km/h, killing dozens, flattening houses across coastal talukas, and destroying mango, coconut and standing kharif crops. The Saurashtra Oil Millers Association's documented 48% groundnut yield collapse in 2018-19 (with farmer income reportedly falling around 80%) had already eroded household balance sheets before the cyclone hit. Pink-bollworm Cry-protein resistance, first detected in the Amreli-Bhavnagar-Junagadh-Rajkot belt in 2009-10, continues to crater Bt cotton yields with no GEAC-approved Bollgard III replacement.\n\nThe lion question runs alongside the agrarian one. With the Asiatic lion population at Gir rising from 327 (2001) to 674 (2020), prides have spilled into Amreli's revenue villages, causing livestock kills and the occasional human fatality, while the state has resisted the Supreme Court's 2013 order to translocate a founding population to Madhya Pradesh's Kuno. Amreli illustrates how 'flagship' Gujarat assets — a private port, a Bt cotton revolution, a celebrated lion sanctuary — coexist with deep household-level fragility on the same revenue map.",
    keyCrises: [
      { year: "May 2021", title: "Cyclone Tauktae Landfall", detail: "An extremely severe cyclonic storm crossed the Saurashtra coast between Diu and Una on the Amreli-Gir Somnath border with sustained winds above 160 km/h, killing scores in Gujarat (state confirmed dozens of fatalities) and devastating coconut, mango and standing crops across coastal Amreli. The state government later announced a multi-thousand-crore relief package for Saurashtra. (Source: Indian Express, Reuters, IMD)" },
      { year: "2018-19", title: "Groundnut Yield Collapse", detail: "The Saurashtra Oil Millers Association documented a roughly 48% decline in groundnut yields across the Saurashtra belt — Amreli among the worst-hit — with farmer incomes reportedly falling about 80%. The shock has been linked by reporters and academics to a subsequent rise in farm-household indebtedness and suicides across Saurashtra. (Source: Mongabay India, Indian Express)" },
      { year: "Ongoing", title: "Lion Range Expansion into Farmland", detail: "Asiatic lion numbers have grown from 327 (2001) to 674 (2020), with Amreli now reporting routine cattle kills and occasional human fatalities as prides move outside Gir's protected boundary. The state has resisted the Supreme Court's 2013 order to translocate a founding population to Kuno, leaving farmers to absorb the cost of conservation success. (Source: The Hindu, Mongabay India)" }
    ]
  },
  {
    id: "dahod",
    name: "Dahod",
    region: "Central Gujarat",
    coordinates: [74.2567, 22.8333],
    tagline: "Gujarat's Tribal Exodus Engine",
    pillars: ["Labor", "Education", "MigrantDiscrimination"],
    stats: [
      { label: "Seasonal Out-Migration (working-age tribals)", value: "Up to 70%, 8 months/yr", status: "critical" },
      { label: "ST Population", value: "74% (Bhil, Rathwa)", status: "warning" },
      { label: "School Dropout Rate", value: "Among Gujarat's highest", status: "danger" }
    ],
    summary: "Dahod inverts the standard Gujarat narrative. Officially classed as one of India's 'aspirational districts,' it sends an estimated up to 70% of its working-age tribal population — overwhelmingly Bhil and Rathwa families — out of state for roughly 8 months a year to work on construction sites, brick kilns, and farms in Madhya Pradesh, Rajasthan, Maharashtra and beyond. The migration is not aspirational but distress-driven: rain-fed maize plots, fragmented landholdings, and stagnant MGNREGA wage-day delivery leave households without enough work to survive the lean season at home.\n\nThe educational consequences are severe. Children either accompany migrating parents and drop out of school entirely, or are left behind with elderly relatives in 'left-behind villages' where attendance collapses by mid-October. Civil-society studies by Aajeevika Bureau and the Indian Institute of Public Health Gandhinagar have repeatedly flagged Dahod's dropout and learning-loss indicators as among the worst in Gujarat, with girl children disproportionately pulled out for sibling care.\n\nPolitical mobilisation has begun pushing back. The 2022 Adivasi Ekta Parishad and allied tribal-rights demonstrations in Dahod and the eastern belt demanded full implementation of the Forest Rights Act, PESA, and Tribal Sub-Plan funds — money that successive state audits flag as routinely under-utilised in Gujarat's tribal districts. Dahod stands as a structural rebuttal to the 'Gujarat Model': forty years of state-led growth have not produced enough local employment to keep its own people home.",
    keyCrises: [
      { year: "Ongoing", title: "Seasonal Distress Migration Cycle", detail: "Up to 70% of working-age tribals leave Dahod for ~8 months a year for construction, brick-kiln and farm work in MP, Rajasthan and Maharashtra. Studies by Aajeevika Bureau and IIPH Gandhinagar document children migrating with parents or dropping out, devastating learning outcomes. (Source: Indian Express, Down to Earth)" },
      { year: "2022", title: "Adivasi Ekta Mobilisation in Eastern Belt", detail: "Tribal organisations across Dahod and neighbouring districts staged sustained protests demanding full implementation of the Forest Rights Act, PESA self-governance, and release of Tribal Sub-Plan funds. (Source: Counterview, Mongabay India)" },
      { year: "Ongoing", title: "MGNREGA Implementation Gaps", detail: "Field assessments and Right-to-Food Campaign reports record delayed wage payments and far-below-entitlement workdays in Dahod's tribal blocks, blunting the law's role as a migration-reducing safety net. (Source: The Hindu, Down to Earth)" }
    ]
  },
  {
    id: "dang",
    name: "Dang",
    region: "South Gujarat",
    coordinates: [73.8052, 20.7628],
    tagline: "Forested But Thirsty, Tribal But Title-less",
    pillars: ["Environment", "Water", "Education"],
    stats: [
      { label: "Forest Cover", value: "Highest in Gujarat (>50% area)", status: "normal" },
      { label: "ST Population", value: "Over 90% (Bhil, Kunbi, Warli)", status: "warning" },
      { label: "Summer Tanker-Dependent Villages", value: "100+", status: "danger" }
    ],
    summary: "Dang is Gujarat's most forested district and one of its smallest, yet routinely posts the state's poorest human-development indicators. The paradox runs deep: more than half the district lies under tree cover, but during the dry months between February and June, well over 100 villages depend on government water tankers because monsoon runoff sluices straight off the Sahyadri slopes with little local storage or recharge.\n\nThe Forest Rights Act of 2006 was meant to recognise the customary holdings of Dang's almost entirely tribal population — Bhils, Kunbis, Warlis, and Kotwalias. In practice, individual and community forest rights claims across the district have faced high rejection rates, with claimants required to produce documentary evidence that pre-colonial cultivators were never expected to keep. Both Mongabay India and Down to Earth have documented Dang as a case study in how Gujarat under-implements FRA relative to states like Maharashtra and Odisha.\n\nThe district's eco-tourism economy, branded around the Saputara hill station and tribal cultural festivals, generates revenue that largely accrues to outside operators rather than indigenous households. Meanwhile, primary-school infrastructure remains thin, learning outcomes lag the state average, and out-migration of young men for seasonal labour in Surat and Nashik continues. Dang functions as Gujarat's green façade — visible on conservation maps, invisible in welfare ones.",
    keyCrises: [
      { year: "Ongoing", title: "Forest Rights Act Implementation Gap", detail: "Dang's tribal claimants face high rejection rates for individual and community forest-rights claims, with state authorities demanding documentary evidence beyond what FRA 2006 statutorily requires. (Source: Mongabay India, Down to Earth)" },
      { year: "Recurring", title: "Summer Drinking-Water Tanker Dependency", detail: "Over 100 Dang villages depend on government water tankers each summer because steep terrain causes monsoon runoff loss and watershed structures remain inadequate. (Source: Indian Express, Times of India)" },
      { year: "Ongoing", title: "Eco-Tourism Without Tribal Equity", detail: "Saputara and Dang festival tourism revenues largely accrue to outside operators while indigenous households remain dependent on seasonal out-migration to Surat and Nashik for survival wages. (Source: Down to Earth)" }
    ]
  },
  {
    id: "navsari",
    name: "Navsari",
    region: "South Gujarat",
    coordinates: [72.9520, 20.9467],
    tagline: "Where the Mango Belt Meets the Saline Sea",
    pillars: ["Agriculture", "Environment", "Economics"],
    stats: [
      { label: "Coastal Salinity Ingress", value: "Documented in horticulture belt", status: "danger" },
      { label: "Sea-Level-Rise Vulnerability", value: "Among Gujarat's highest", status: "critical" },
      { label: "Spillover from Surat Textile Shocks", value: "Job-loss exposure", status: "warning" }
    ],
    summary: "Navsari's identity is built on its orchards — chikoo plantations stretching toward Gandevi and the GI-tagged Hapus and Kesar mango belts inland — and on the legacy of Navsari Agricultural University, one of India's older horticultural research institutions. That identity is under siege from the Arabian Sea. Studies by NAU and reporting by Down to Earth and The Hindu BusinessLine document advancing salinity ingress into the shallow aquifers that feed coastal orchards, with farmers reporting yield decline, premature fruit drop, and tree mortality in the talukas closest to the coastline.\n\nThe district sits on the Maharashtra-Gujarat coast that India's National Centre for Coastal Research has flagged as among the country's most exposed to sea-level rise and storm surge. Mangrove cover has thinned along the Purna and Ambika estuaries, and erosion is consuming portions of fishing villages near Dandi — the symbolic site where Gandhi broke the salt law in 1930.\n\nNavsari's other economic engine is its proximity to Surat. Tens of thousands of households commute or work in Surat's textile and diamond units, meaning every shock to that city — the 2020 lockdown exodus, the 2025 Russian-rough sanctions — radiates directly into Navsari's villages. Sandwiched between the Vapi pollution corridor to the south and Surat's industrial pull to the north, Navsari embodies the squeezed peri-urban district: ecologically eroding, economically exposed, with little independent industrial base of its own.",
    keyCrises: [
      { year: "Ongoing", title: "Salinity Ingress in Mango & Chikoo Orchards", detail: "Navsari Agricultural University and field reports document advancing coastal salinity intrusion into shallow aquifers, causing yield decline and tree mortality in chikoo and mango belts near Gandevi and Jalalpore. (Source: Down to Earth, The Hindu BusinessLine)" },
      { year: "Ongoing", title: "Sea-Level-Rise Coastal Exposure", detail: "India's National Centre for Coastal Research and MoEFCC vulnerability assessments classify the South Gujarat coast — including Navsari and Valsad — as among the country's most exposed to sea-level rise, storm surge and shoreline erosion. (Source: NCCR, MoEFCC, Mongabay India)" },
      { year: "2020 / 2025", title: "Surat Spillover Shocks", detail: "Navsari households commuting into Surat's textile and diamond units bore direct income loss from the 2020 pandemic exodus and the 2025 collapse in Russian-rough diamond polishing demand. (Source: Indian Express, Reuters)" }
    ]
  },
  {
    id: "chhota-udepur",
    name: "Chhota Udepur",
    region: "Central Gujarat",
    coordinates: [74.0118, 22.3047],
    tagline: "Pithora Country in the Shadow of the Statue",
    pillars: ["Materials", "MigrantDiscrimination", "Education"],
    stats: [
      { label: "ST Population", value: "~80% (Rathwa, Bhil, Naika)", status: "warning" },
      { label: "Orsang River Sand Mining", value: "Documented illegal extraction", status: "critical" },
      { label: "Tribal Literacy", value: "Among Gujarat's lowest", status: "danger" }
    ],
    summary: "Carved out of Vadodara in 2013, Chhota Udepur is a tribal-majority district where the Rathwa, Bhil, and Naika communities sustain one of India's most distinctive ritual art traditions: the Pithora wall paintings, sacred narrative murals commissioned in tribal homes. That cultural depth coexists with structural extraction. The district supplies dolomite, marble, and sand to Central Gujarat's construction economy, with the Orsang river — tributary to the Narmada — repeatedly named in Mongabay India and Indian Express investigations into illegal sand mining cartels operating with political cover.\n\nThe district's eastern blocks abut the Statue of Unity zone in Narmada district. From 2018 onward, tribal communities across Chhota Udepur and Narmada protested fencing and land acquisition by Sardar Sarovar Narmada Nigam Ltd around six villages near the Statue, framed by adivasi leaders as a continuation of the displacement trajectory begun by the dam itself. Tribal organisations wrote to the Prime Minister demanding a halt; arrests and case-filings followed against demonstrators.\n\nCensus 2011 placed Chhota Udepur's tribal literacy among the lowest in Gujarat, and subsequent rounds of the National Family Health Survey have shown stubbornly poor child-nutrition and antenatal-care indicators. Forest Rights Act implementation is patchy, and out-migration of young men to Vadodara and Surat construction sites grows each lean season. Pithora artists continue to paint sacred horses on village walls; the state continues to extract minerals from beneath their feet.",
    keyCrises: [
      { year: "Ongoing", title: "Orsang River Illegal Sand Mining", detail: "Investigations document organised illegal sand mining along the Orsang river basin in Chhota Udepur, altering local hydrology and intimidating tribal communities and forest officials who attempt to intervene. (Source: Mongabay India, Indian Express)" },
      { year: "2018 onwards", title: "Statue of Unity Tribal Land Protests", detail: "Tribal communities in Chhota Udepur and adjoining Narmada district protested fencing and land acquisition by SSNNL around six villages near the Statue of Unity, demanding the Prime Minister halt further acquisitions. (Source: SabrangIndia, Scroll, The Wire)" },
      { year: "Ongoing", title: "Tribal Literacy & Schooling Deficit", detail: "Census 2011 and subsequent NFHS rounds record some of Gujarat's poorest tribal literacy, school-completion and child-nutrition indicators in Chhota Udepur, despite its proximity to the industrialised Vadodara belt. (Source: Census of India, Down to Earth)" }
    ]
  },
  {
    id: "botad",
    name: "Botad",
    region: "Saurashtra",
    coordinates: [71.6661, 22.1693],
    tagline: "The Diamond Wheel That Stopped, the Methanol That Didn't",
    pillars: ["ChemicalGovernance", "Labor", "Economics"],
    stats: [
      { label: "Botad-Ahmedabad Hooch Tragedy Deaths (Jul 2022)", value: "42+ confirmed", status: "critical" },
      { label: "Saurashtra Patel Polishers Affected by Russian-Diamond Sanctions", value: "~80-90% of cluster", status: "danger" },
      { label: "Pink Bollworm Cry-Protein Resistance Origin (2009-10)", value: "Amreli-Bhavnagar-Botad belt", status: "warning" }
    ],
    summary: "Botad — carved out of Bhavnagar in 2013 — is a small Saurashtra district that sits at the intersection of three Gujarat dependencies the state would prefer not to discuss together: imported Russian rough diamonds, prohibition-driven illicit alcohol, and Bt cotton resistance. Like its Saurashtra neighbours, Botad supplies thousands of Patel-community diamond polishers to Surat's ateliers; when US Treasury (OFAC) and EU sanctions on Alrosa rough diamonds bit hard through 2024-25, the resulting closures of small Surat polishing halls reverberated back into Botad's villages as wage shocks, school dropouts and reverse migration. The cotton economy that should have absorbed returnees has itself been gutted by pink-bollworm resistance to Bt Cry proteins — first documented in this Saurashtra belt around 2009-10.\n\nThe district's defining recent disaster, however, was chemical, not financial. In July 2022, at least 42 people died and dozens more were hospitalised in Botad and adjoining Ahmedabad-rural villages — Rojid, Ranighala, Akru and others — after consuming country liquor laced with industrial methanol that had been illegally diverted from a chemical company in Ahmedabad. Investigations and reportage by Indian Express, The Hindu, Reuters and Scroll documented how the supply chain ran through licit chemical traders, prohibition-era bootleggers and police-linked local networks; arrests followed but accountability up the chain remained thin.\n\nBotad illustrates how Gujarat's prohibition regime, far from eliminating alcohol, creates a parallel toxic economy fed by the very 'Golden Corridor' chemical industry the state celebrates elsewhere. The same district that supplies labour to a sanctioned global diamond trade is also where Gujarat's chemical-governance failures kill the poor in their own homes.",
    keyCrises: [
      { year: "Jul 2022", title: "Botad-Ahmedabad Hooch Tragedy", detail: "At least 42 people died and dozens were hospitalised across Botad and Ahmedabad-rural villages (Rojid, Barwala, Ranighala) after consuming illicit liquor laced with methanol diverted from an Ahmedabad chemical firm. Multiple arrests followed under the Gujarat Prohibition Act; reporting flagged repeated diversion of industrial methanol into the bootleg chain. (Source: Indian Express, The Hindu, Reuters, Scroll)" },
      { year: "2024-25", title: "Russian Rough Diamond Sanctions Bleed Back into Botad Villages", detail: "G7/EU and US OFAC restrictions on Russian (Alrosa) rough diamonds cratered Surat's small polishing units, where roughly 80-90% of the workforce are Saurashtra Patel migrants from Bhavnagar, Amreli, Junagadh and Botad. Reports from The Federal, ThePrint and Rapaport documented unit closures, wage cuts and a rising count of polisher suicides. (Source: The Federal, ThePrint, Rapaport)" },
      { year: "2009-10 onward", title: "Pink Bollworm Resistance Origin", detail: "The Amreli-Bhavnagar-Junagadh-Rajkot-Botad belt is where field-level Cry1Ac resistance in pink bollworm was first documented in India. With no GEAC-approved Bollgard III replacement and an ageing Mahyco-Monsanto Biotech licence stack, Botad's cotton farmers face structural yield collapse and rising pesticide bills. (Source: ICAR-CICR, Down to Earth, Mongabay India)" }
    ]
  },
  {
    id: "surendranagar",
    name: "Surendranagar",
    region: "Saurashtra",
    coordinates: [71.6394, 22.7275],
    tagline: "The Tail End of Every Canal, Every Promise",
    pillars: ["Water", "Labor", "Agriculture"],
    stats: [
      { label: "Position on Narmada Branch Canals", value: "Saurashtra tail-end", status: "danger" },
      { label: "Agariya Salt-Pan Workers (Little Rann)", value: "~40,000+ across LRK", status: "critical" },
      { label: "SAUNI Yojana Reliance", value: "Phase-completion delays", status: "warning" }
    ],
    summary: "Surendranagar straddles two Gujarats. To the east it is part of the dry Saurashtra cotton-and-groundnut belt; to the north-west it slopes into the Little Rann of Kutch (LRK), the saline desert where Gujarat's Agariya salt-pan community produces a significant share of India's inland salt. As the Narmada main canal's branch network reaches Saurashtra, Surendranagar sits structurally at the tail end — both of the Sardar Sarovar command area and of the SAUNI (Saurashtra Narmada Avtaran Irrigation) link pipelines that were politically promised to fill 115 dams across Saurashtra. Tail-end villages routinely report dry outlets during the kharif sowing window even as upstream districts draw their full quota.\n\nThe Agariya story makes the district one of the starkest sites of labour exploitation in India. For roughly eight months a year, Agariya families migrate into the LRK with their children to manually pump brine from shallow boreholes into pans, working in summer surface temperatures that have been recorded at 52 °C. The Salt Workers' Union and Down to Earth have documented rampant child labour, blindness from solar glare, and bone calcification from constant brine contact, with Agariyas trapped in generational debt to commission agents who advance pumps and diesel against the next season's crop. Most lack land titles inside the Wild Ass Sanctuary that overlays the Rann, which makes them legally invisible.\n\nLayered on top, Morbi's ceramic-cluster footprint now spills into Surendranagar talukas as new tile and sanitaryware units, replicating the same fragile import-LNG-and-migrant-labour model the Morbi profile already documents. Surendranagar is where Gujarat's three flagship promises — Narmada irrigation, industrial spillover, formal labour rights — all arrive late and incomplete.",
    keyCrises: [
      { year: "Ongoing", title: "Agariya Salt-Pan Generational Bondage in the Little Rann", detail: "Agariya families pump brine in 52 °C surface temperatures across the Little Rann of Kutch, with documented cases of blindness, bone calcification and persistent child labour. Most workers operate without land titles inside the Wild Ass Sanctuary, locked into season-after-season advances from commission agents. (Source: Down to Earth, Salt Workers Union/SEWA, IDR Online)" },
      { year: "Ongoing", title: "Tail-End Narmada and SAUNI Shortfalls", detail: "Surendranagar sits at the tail of Saurashtra's Narmada branch canals and the SAUNI link-pipeline network. Repeated reporting and farmer protests have flagged dry outlets during kharif sowing despite upstream districts receiving full quotas, with cotton and groundnut yields suffering accordingly. (Source: Indian Express, Down to Earth)" },
      { year: "Recurring", title: "Ceramic Cluster Spillover from Morbi", detail: "As Morbi's tile and sanitaryware cluster expands, new units have spilled into Surendranagar talukas, importing Morbi's gas-import dependency and migrant-labour model — including the unaddressed silicosis exposure profile documented in the PTRC and ESI studies. (Source: PTRC, Times of India)" }
    ]
  },
  {
    id: "devbhoomi-dwarka",
    name: "Devbhoomi Dwarka",
    region: "Saurashtra",
    coordinates: [69.2245, 22.2530],
    tagline: "Pilgrim Coast on a Sanctioned Refinery's Doorstep",
    pillars: ["Environment", "Materials", "Economics"],
    stats: [
      { label: "Nayara Energy Vadinar Refinery", value: "Directly EU-sanctioned (2025)", status: "critical" },
      { label: "Cyclone Tauktae Coastal Damage (May 2021)", value: "Boats, mangroves, kuccha houses", status: "danger" },
      { label: "Dwarkadhish-Bet Dwarka Pilgrim Footfall", value: "Multi-million annually", status: "warning" }
    ],
    summary: "Carved out of Jamnagar in 2013, Devbhoomi Dwarka braids together three economies whose interactions are rarely acknowledged in tourism brochures: religious pilgrimage anchored by the Dwarkadhish temple and Bet Dwarka, traditional small-boat fishing along Okha and Salaya, and the Vadinar coastal industrial zone that hosts Nayara Energy's 20 MMTPA refinery (formerly Essar Oil, now part-owned by Russia's Rosneft) along with its captive port and single-buoy mooring system. The petrochemical footprint sits literally upwind of the pilgrim coast.\n\nThe district's structural fragility is most visible in the refinery. As G7 and EU sanctions on Russian crude tightened through 2024-25 and the EU added Nayara to its sanctions list in 2025, the Vadinar complex's operating economics — dependent on discounted Russian Urals, Western insurance and Western payment rails — became immediately exposed. Project Alphono's own simulator data identifies Devbhoomi Dwarka as one of the three districts that takes the direct hit from a Russian-crude shock, alongside Jamnagar and Bharuch. A single sanctions-enforcement event would idle thousands of refinery workers and the trucker corridor that radiates from the SBM, while leaving the local fishing economy still bearing the residual oil-spill and effluent risk.\n\nCyclone Tauktae in May 2021 grazed the Dwarka coast en route to its Diu-Una landfall, damaging fishing boats, mangrove pockets and kuccha housing in Okha and the surrounding villages. The same Arabian Sea now warms faster than the global ocean average, intensifying storms that the district's degraded mangrove buffer can no longer absorb. Devbhoomi Dwarka is where Gujarat's pilgrim, fisher and petrochemical economies meet — and where any one of them failing pulls the others down with it.",
    keyCrises: [
      { year: "2025", title: "EU Sanctions Hit Nayara's Vadinar Refinery", detail: "The European Union added Rosneft-linked Nayara Energy to its 18th-package Russia sanctions list in 2025, freezing several payment and insurance pathways for the Vadinar refinery and forcing Indian banks and counterparties to reassess exposure. The complex is one of only two large private refineries in India and a primary employer in coastal Devbhoomi Dwarka. (Source: Reuters, Indian Express, Energy Intelligence)" },
      { year: "May 2021", title: "Cyclone Tauktae Coastal Damage", detail: "Cyclone Tauktae passed close to the Dwarka coast before its Saurashtra landfall, with high winds and storm surge damaging fishing boats at Okha and Salaya, breaching kuccha housing, and destroying mangrove patches that had been thinned by industrial expansion. The Gujarat government's relief assessment included Devbhoomi Dwarka in its multi-thousand-crore Saurashtra package. (Source: Indian Express, IMD, Reuters)" },
      { year: "Nov 2025", title: "Unseasonal-Rain Farmer Suicides", detail: "Karshanbhai Vanoriya, 37, of Manpur village in Devbhoomi Dwarka, died by suicide during the Saurashtra-wide wave of farmer deaths after unseasonal rain wiped out the standing kharif crop and the announced relief package failed to reach affected households. Six suicides were reported in 25 days across the belt. (Source: Gujarat Samachar, The Federal)" }
    ]
  },
  {
    id: "gir-somnath",
    name: "Gir Somnath",
    region: "Saurashtra",
    coordinates: [70.4357, 20.8938],
    tagline: "Lions, Pilgrims, and Fishermen in Pakistani Jails",
    pillars: ["Environment", "Agriculture", "Labor"],
    stats: [
      { label: "Veraval Fish Landing Centre", value: "Among India's largest", status: "warning" },
      { label: "Statewide Crop Loss, Unseasonal Rain (Nov 2025)", value: "10 lakh+ hectares", status: "critical" },
      { label: "Proposed Gir Eco-Sensitive Zone", value: "~2,061 sq km, 196 villages", status: "danger" }
    ],
    summary: "Gir Somnath compresses three of Gujarat's hardest contradictions into one coastal strip: the last refuge of the Asiatic lion at the Gir National Park, the Somnath temple complex that anchors a high-volume pilgrim economy, and Veraval — among India's largest fish-landing centres and the operating base for thousands of mechanised trawlers fishing the central and northern Arabian Sea. Each of the three economies is in structural crisis simultaneously.\n\nOn land, the proposed Gir Eco-Sensitive Zone — initially mooted at around 3,328 sq km and revised to roughly 2,061 sq km covering 196 revenue villages — has triggered a rare cross-party political revolt, with even the BJP's local Gir Somnath unit and IFFCO leadership threatening agitation against the restrictions on agriculture, mining and construction inside the buffer. The same farmers face escalating lion-human conflict as the Asiatic lion population (327 in 2001, 674 in 2020) spills out of Gir's saturated core, while the November 2025 unseasonal rains destroyed an estimated 10 lakh+ hectares of standing crops statewide, with Junagadh and Gir Somnath among the worst-hit districts and farmer suicides reported across the belt.\n\nAt sea, Veraval's fishing fleet is squeezed from both sides. Rapid depletion of high-value species (white pomfret, surmai, prawn) close to shore — driven by industrial pollution and overfishing along the Porbandar-Kutch coast — is forcing trawlers into 15-20 day deep-sea trips that drift dangerously close to the unmarked India-Pakistan Maritime Boundary Line. The Migration Story, SACW and Maktoob have documented 144 Gujarat fishermen still in Pakistani custody with 1,173 boats seized, two deaths in Malir jail in early 2025 (one reported as suicide), and the death of Una resident Babubhai Chudasama in custody. Gir Somnath shows what happens when conservation, climate and geopolitics all draw their costs from the same village register.",
    keyCrises: [
      { year: "Sep 2024", title: "Gir Eco-Sensitive Zone Political Revolt", detail: "MoEFCC's revised proposal of a roughly 2,061 sq km ESZ around Gir National Park (covering 196 villages) drew protest from both the BJP's Gir Somnath unit and opposition parties, with IFFCO leadership threatening agitation. Farmers feared restrictions on borewells, mining and even housing construction inside the buffer. (Source: Vikalp Sangam, Indian Express, MoEFCC)" },
      { year: "Nov 2025", title: "Unseasonal-Rain Crop Destruction and Farmer Suicides", detail: "Late-season cyclonic rain devastated standing kharif crops across Saurashtra, with Gir Somnath and Junagadh worst-hit. State estimates put statewide damage at 10 lakh+ hectares. Six farmer suicides were documented in 25 days across the belt, with Tulshishyam-area farmers among the dead. Protests erupted across 10+ districts demanding crop compensation. (Source: Gujarat Samachar, The Federal, Mongabay India)" },
      { year: "Ongoing", title: "Veraval Fishermen in Pakistani Custody", detail: "144 Gujarat fishermen remain in Pakistani jails with 1,173 boats seized as Veraval and Porbandar trawlers chase depleted shoals into deep waters near the IMBL. Babubhai Chudasama of Una died in Malir jail in 2025; two further deaths in early 2025, one reported as suicide. No repatriations since 2024. (Source: The Migration Story, SACW, Maktoob Media)" }
    ]
  },
  {
    id: "tapi",
    name: "Tapi",
    region: "South Gujarat",
    coordinates: [73.5705, 21.1444],
    tagline: "Surat's Tribal Hinterland, Ukai's Drowned Memory",
    pillars: ["Water", "Labor", "Education"],
    stats: [
      { label: "Carved Out From Surat", value: "2007 (district formation)", status: "normal" },
      { label: "ST Population", value: "Over 80% (Chaudhari, Gamit, Vasava)", status: "warning" },
      { label: "Ukai Dam Legacy", value: "~170 villages submerged", status: "critical" }
    ],
    summary: "Tapi was carved out of Surat district in 2007, a bureaucratic gesture that did not undo decades of asymmetric development. The district's defining infrastructure remains the Ukai Dam on the Tapi river, commissioned in 1972, which submerged an estimated 170 villages and displaced predominantly Chaudhari, Gamit, and Vasava tribal households whose rehabilitation case-files NBA and Earth Island Journal reporting describe as still unresolved across multiple generations.\n\nTapi today functions as the upcountry tribal hinterland of Surat's textile and diamond economy. Sugarcane cooperatives — including Bardoli's neighbouring catchment — pull in seasonal cane-cutting labour from Tapi's tribal villages, paid by piece-rate, housed in tarpaulin shelters, and exposed to the well-documented occupational injuries of cane harvesting. Diamond and textile units in Surat absorb the remainder of working-age men, with women and children left behind in agrarian villages with thin schooling and primary-health infrastructure.\n\nForest Rights Act claims in Tapi have, like those in Dang and Chhota Udepur, faced documented rejection rates that civil-society monitors attribute to Gujarat's stringent evidentiary demands rather than weak tribal title-tracts. Combined with the unfinished business of Ukai compensation, Tapi exemplifies a district whose poverty is not a residual of underdevelopment but a direct cost of upstream growth — water, sugarcane, and labour all flowing outward.",
    keyCrises: [
      { year: "1972 onwards", title: "Ukai Dam Displacement Legacy", detail: "Ukai Dam submerged an estimated 170 villages, displacing predominantly Chaudhari, Gamit and Vasava tribal households. Rehabilitation case-files for affected families remain unresolved across multiple generations. (Source: Earth Island Journal, NBA archives, Down to Earth)" },
      { year: "Ongoing", title: "FRA Claim Rejection in Tribal Belt", detail: "Forest Rights Act individual and community claims in Tapi face documented high rejection rates, with state authorities applying stringent evidentiary thresholds that civil-society monitors call out of step with the 2006 statute. (Source: Mongabay India, Down to Earth)" },
      { year: "Ongoing", title: "Sugarcane & Surat Migration Loop", detail: "Tribal households are absorbed into Surat's textile and diamond units and into seasonal sugarcane cane-cutting labour in the Bardoli-Vyara belt, paid piece-rate with documented occupational injuries and minimal social-security coverage. (Source: Indian Express, Aajeevika Bureau studies)" }
    ]
  },
  {
    id: "kheda",
    name: "Kheda",
    region: "Central Gujarat",
    coordinates: [72.6841, 22.7535],
    tagline: "Tobacco Dust, Dairy Buffer, Monsoon Floods",
    pillars: ["Agriculture", "Labor", "Water"],
    stats: [
      { label: "Bidi-Rolling Workforce", value: "Predominantly women, piece-rate", status: "critical" },
      { label: "Tobacco Belt", value: "Among India's largest by area", status: "warning" },
      { label: "Anand-Kheda Dairy Buffer", value: "Amul/AMUL cooperative coverage", status: "normal" }
    ],
    summary: "Kheda's name is fixed in Indian political memory as the site of Gandhi's 1918 satyagraha and the cradle of the cooperative movement that became Amul. Beneath that civic legacy sits an agrarian economy increasingly defined by tobacco. Charotar Kheda is one of India's largest tobacco-growing belts, feeding bidi-leaf, gutka, and chewing-tobacco supply chains. Rolling bidis is overwhelmingly women's work, performed at home on piece-rates that SEWA and ILO field studies have repeatedly shown fall below statutory minimum wages once unpaid raw-material handling and rejection losses are factored in. Chronic exposure to tobacco dust is associated with respiratory disease, skin conditions, and reproductive-health concerns documented in occupational-health literature.\n\nThe district's cooperative dairy structure — Kaira District Cooperative Milk Producers' Union, Amul's founding entity — provides a partial buffer. Milk procurement runs through dense village-society networks, and dairy income smooths household consumption when tobacco prices crash or weather destroys crops. But the buffer is uneven; landless and marginal-land households without cattle access fall through.\n\nKheda's flat alluvial plains drain poorly. The August 2024 monsoon — which delivered Central Gujarat its worst floods since 2014 — submerged large stretches of Kheda alongside Anand and Vadodara, damaging tobacco curing-sheds, fodder stocks, and rural roads. Climate-volatility scenarios from IMD and IIT-Gandhinagar studies suggest the frequency of such Central Gujarat flood events is rising. Kheda's inheritance from the cooperative century may not be enough to absorb the next one.",
    keyCrises: [
      { year: "Ongoing", title: "Bidi Workers' Sub-Minimum Wages", detail: "SEWA and ILO field studies of bidi-rolling households in Kheda and the Charotar belt document piece-rate earnings below statutory minimum wages, plus chronic respiratory and skin disease from tobacco-dust exposure. (Source: SEWA, ILO India, The Hindu)" },
      { year: "Aug 2024", title: "Central Gujarat Monsoon Flooding", detail: "August 2024's record Central Gujarat deluge submerged stretches of Kheda alongside Anand and Vadodara, damaging tobacco sheds, dairy fodder stocks and rural infrastructure. (Source: ReliefWeb, Indian Express, NDRF)" },
      { year: "Ongoing", title: "Tobacco Dependence vs Health Risk", detail: "Kheda's status as one of India's largest tobacco-growing districts ties household incomes to a crop linked to documented occupational hazards for cultivators and bidi rollers, with limited diversification options for marginal-land farmers. (Source: Down to Earth, Business Standard)" }
    ]
  },
  {
    id: "aravalli", name: "Aravalli", region: "North Gujarat", coordinates: [73.3082, 23.4243], tagline: "The Rocky Deficit",
    pillars: ["Agriculture", "Water", "Economics"], stats: [{ label: "Groundwater Level", value: "Critical Depletion", status: "danger" }, { label: "Industrial Growth", value: "Stagnant", status: "critical" }, { label: "Youth Out-Migration", value: "High", status: "warning" }],
    summary: "Aravalli suffers from the classic North Gujarat curse: rapidly depleting aquifers in rocky terrain. Agriculture remains rain-fed and highly volatile. With almost zero large-scale industrialization in the district, youth are forced to migrate to Ahmedabad and Gandhinagar.", keyCrises: [{ year: "Ongoing", title: "Agrarian Failure", detail: "Successive monsoon failures combined with deep rock-aquifer depletion ruined small landholders. (Source: Hydrology Dept)"}]
  },
  {
    id: "mahisagar",
    name: "Mahisagar",
    region: "Central Gujarat",
    coordinates: [73.5350, 23.0906],
    tagline: "A Reservoir's Reach Without a Reservoir's Reward",
    pillars: ["Water", "Economics", "Labor"],
    stats: [
      { label: "Carved Out (from Kheda + Panchmahal)", value: "2013", status: "normal" },
      { label: "Kadana Dam Catchment", value: "On Mahi river, hosts district", status: "warning" },
      { label: "Per-Capita Indicators", value: "Among Gujarat's lowest", status: "critical" }
    ],
    summary: "Mahisagar district was carved out of Kheda and Panchmahal in 2013, taking its name from the Mahi river and inheriting the legacy of the Kadana Dam, completed in stages from the 1970s through the 1980s. The dam's reservoir submerged tribal-mixed villages whose rehabilitation case-files Counterview and Indian Express reporting describe as still unresolved decades later, with compensation claims contested and resettled families lacking documented title to allotted lands.\n\nThe paradox is structural. Mahisagar hosts the catchment infrastructure that supplies irrigation and hydropower to downstream Central Gujarat, yet its own talukas — Lunawada, Santrampur, Kadana, Khanpur — depend largely on rain-fed cultivation and patchy lift-irrigation networks. Gujarat Socio-Economic Review data place the district in the lower band of state per-capita income indicators, with limited industrialisation, weak road connectivity to the GIDC corridors, and sustained out-migration of young men toward Vadodara and Ahmedabad construction sites.\n\nThe 2017 Mahi flood — when releases from upstream Madhya Pradesh dams combined with local downpours — and recurring waterlogging episodes have repeatedly tested compensation and disaster-response systems that struggle even in normal years. Mahisagar exemplifies a district whose territory is integral to Gujarat's water economy while its people remain marginal to its prosperity.",
    keyCrises: [
      { year: "1970s-80s onwards", title: "Kadana Dam Rehabilitation Backlog", detail: "Tribal-mixed villages submerged by the Kadana Dam reservoir on the Mahi river continue to contest compensation and titles to resettlement lands decades after displacement. (Source: Counterview, Indian Express)" },
      { year: "2017", title: "Mahi River Flood", detail: "Combined upstream dam releases from Madhya Pradesh and local rainfall caused major flooding along the Mahi corridor including Mahisagar, exposing weak embankments, evacuation infrastructure and post-flood compensation processes. (Source: Times of India, NDMA)" },
      { year: "Ongoing", title: "Per-Capita Income & Out-Migration", detail: "Gujarat Socio-Economic Review data place Mahisagar in the lower band of state per-capita income indicators. Limited industrial base sustains out-migration of working-age men to Vadodara and Ahmedabad construction sites. (Source: Gujarat Socio-Economic Review, Business Standard)" }
    ]
  },
  {
    id: "patan", name: "Patan", region: "North Gujarat", coordinates: [72.1264, 23.8427], tagline: "The Saline Frontier",
    pillars: ["Water", "Agriculture", "Environment"], stats: [{ label: "Fluoride Levels", value: "Beyond Limits", status: "critical" }, { label: "Farm Salinity", value: "Expanding", status: "danger" }, { label: "Renewable Paradox", value: "Solar land conflicts", status: "warning" }],
    summary: "Patan sits on the edge of the Rann, fighting a daily battle against soil salinity and toxic groundwater. Fluoride contamination has crippled the health of entire villages. Furthermore, tracts of Patan's wasteland are being acquired for mega-solar parks, robbing local pastoralists of grazing lands.", keyCrises: [{ year: "2024", title: "Solar Park Grazing Conflict", detail: "Pastoralist communities protested the enclosure of traditional 'gauchar' lands for solar farms. (Source: Maldhari Assoc)"}]
  },
  {
    id: "panchmahal",
    name: "Panchmahal",
    region: "Central Gujarat",
    coordinates: [73.6190, 22.7547],
    tagline: "Halol's Stalled Auto Belt and the Bhil Hinterland Behind It",
    pillars: ["Economics", "Labor", "ChemicalGovernance"],
    stats: [
      { label: "Ford India Halol Closure", value: "Announced 2021, ~3,000 layoffs", status: "critical" },
      { label: "GIDC Halol-Kalol Belt", value: "Auto + chemical concentration", status: "warning" },
      { label: "Communal Violence Legacy", value: "2002 Godhra triggered statewide riots", status: "danger" }
    ],
    summary: "Panchmahal is a district of two economies in uneasy proximity. The Halol-Kalol GIDC corridor hosted Ford India's first Indian assembly plant from 1999, joined later by suppliers, chemical units including the long-established GMM Pfaudler glass-lined equipment plant, and ancillary industries. In September 2021, Ford announced its exit from Indian manufacturing, idling the Halol facility — Reuters and Business Standard reported roughly 3,000 direct jobs lost plus a far larger ripple through component-supplier MSMEs in the district. MG Motor's subsequent acquisition of the plant restored only a fraction of activity.\n\nA few kilometres east of the GIDC, the district turns into Bhil tribal hinterland — Jambughoda, Ghoghamba, Morwa Hadaf — with weak schooling, thin primary-health infrastructure, and persistent out-migration. The benefits of the industrial corridor have flowed to skilled labour brought in from outside the district while the local tribal population inherited the environmental fallout: GPCB inspections and Down to Earth reporting have repeatedly cited Halol-Kalol units for effluent breaches into local nallas that feed agricultural land.\n\nPanchmahal also carries the political weight of February 2002, when the Godhra train fire — Godhra is the district headquarters — became the trigger for the statewide communal violence that defined Gujarat's modern political trajectory. Two decades later, justice trajectories for the survivors remain partial, and the district's social fabric continues to bear that history.",
    keyCrises: [
      { year: "2021", title: "Ford India Halol Plant Closure", detail: "Ford announced exit from Indian manufacturing in September 2021, idling its Halol assembly plant. Roughly 3,000 direct jobs lost plus larger ripple effects through component-supplier MSMEs in the Panchmahal-Vadodara belt. (Source: Reuters, Business Standard, Indian Express)" },
      { year: "Ongoing", title: "Halol-Kalol GIDC Effluent Concerns", detail: "GPCB inspections and field reporting have repeatedly cited industrial units in the Halol-Kalol belt for effluent discharges into local nallas, with downstream impacts on agriculture and groundwater quality. (Source: GPCB, Down to Earth, Times of India)" },
      { year: "2002", title: "Godhra Train Fire & Statewide Aftermath", detail: "The February 2002 Godhra train fire in Panchmahal's district headquarters triggered the statewide communal violence that defined Gujarat's modern political trajectory. Justice and rehabilitation trajectories for survivors remain partial two decades later. (Source: The Hindu, Indian Express, Frontline)" }
    ]
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
