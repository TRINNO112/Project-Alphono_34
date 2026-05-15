import { Ship, Zap, Droplets, Users, TrendingUp, Factory, GraduationCap, TreePine, ShieldAlert, Wheat, Cpu, FlaskConical, Cable, Landmark } from 'lucide-react'

export const pillarMeta = {
  Infrastructure: { icon: Ship, color: 'text-blue-500', count: 22 },
  Energy: { icon: Zap, color: 'text-yellow-500', count: 18 },
  Water: { icon: Droplets, color: 'text-teal-500', count: 18 },
  Labor: { icon: Users, color: 'text-purple-500', count: 22 },
  Economics: { icon: TrendingUp, color: 'text-green-500', count: 27 },
  Materials: { icon: Factory, color: 'text-gray-500', count: 23 },
  Education: { icon: GraduationCap, color: 'text-pink-500', count: 20 },
  Environment: { icon: TreePine, color: 'text-emerald-500', count: 22 },
  'Migrant Discrimination': { icon: ShieldAlert, color: 'text-red-500', count: 33 },
  'Agriculture': { icon: Wheat, color: 'text-green-700', count: 47 },
  'Green Tech': { icon: Cpu, color: 'text-cyan-500', count: 49 },
  'Chemical Governance': { icon: FlaskConical, color: 'text-orange-500', count: 42 },
  'Digital Sovereignty': { icon: Cable, color: 'text-blue-500', count: 23 },
  'Banking': { icon: Landmark, color: 'text-amber-600', count: 30 },
}

// Derived after the array literal — see bottom of file.
export let districtList = []

export const allSources = [
  // ── INFRASTRUCTURE ──
  { pillar: "Infrastructure", type: "Media", title: "Adani's Mundra Port Makes History, Becomes First In India To Handle 200 MMT Cargo", url: "https://www.marineinsight.com/shipping-news/adanis-mundra-port-makes-history-becomes-first-in-india-to-handle-200-mmt-cargo/" },
  { pillar: "Infrastructure", type: "Media", title: "APSEZ Handles All-Time High 450MMT Cargo Volume", url: "https://www.republicworld.com/initiatives/apsez-handles-all-time-high-450mmt-cargo-volume-mundra-first-indian-port-ever-to-cross-200-mmt-annual-cargo-volume" },
  { pillar: "Infrastructure", type: "Media", title: "Adani gets environmental nod for Rs 45,000 cr Mundra port expansion", url: "https://www.business-standard.com/companies/news/adani-gets-environmental-nod-for-rs-45000-cr-mundra-port-expansion-124061700305_1.html" },
  { pillar: "Infrastructure", type: "Media", title: "Why completion of Delhi-Mumbai Expressway now delayed to 2027-28?", url: "https://deshgujarat.com/2025/12/18/why-completion-of-delhi-mumbai-expressway-now-delayed-to-2027-28/" },
  { pillar: "Infrastructure", type: "Media", title: "Delhi-Mumbai Expressway: Latest package-wise update on Gujarat section", url: "https://deshgujarat.com/2026/01/26/delhi-mumbai-expressway-latest-package-wise-update-on-gujarat-section/" },
  { pillar: "Infrastructure", type: "Media", title: "Delhi Mumbai Expressway completion pushed to 2027-28 as delays hit Gujarat stretches", url: "https://www.businesstoday.in/india/story/delhi-mumbai-expressway-completion-pushed-to-2027-28-as-delays-hit-gujarat-stretches-507463-2025-12-19" },
  { pillar: "Infrastructure", type: "Media", title: "Delhi-Mumbai Expressway Big Update: India's biggest highway project delayed", url: "https://www.india.com/news/india/delhi-mumbai-expressway-deadline-delay-fy-2027-28-gujarat-stretch-vadodara-virar-section-hold-up-nitin-gadkari-lok-sabha-nhai-india-mega-highway-project-latest-update-8304593/" },
  { pillar: "Infrastructure", type: "Industry", title: "Mundra Port — Wikipedia", url: "https://en.wikipedia.org/wiki/Mundra_Port" },
  { pillar: "Infrastructure", type: "Media", title: "Four proposals under review for cable landing stations along Gujarat coast", url: "https://deshgujarat.com/2025/06/30/four-proposals-under-review-for-cable-landing-stations-along-gujarat-coast-report/" },
  { pillar: "Infrastructure", type: "Media", title: "India Must Build 10x More Cable Landing Stations To Compete In Global Data Race: TRAI Chief", url: "https://www.outlookbusiness.com/start-up/india-must-build-10x-more-cable-landing-stations-to-compete-in-global-data-race-trai-chief" },
  { pillar: "Infrastructure", type: "Media", title: "India's Cheap Internet Runs Through the World's Most Dangerous Waters", url: "https://www.businessworld.in/article/india-cheap-internet-undersea-cable-vulnerability-war-zones-2026-598929" },
  { pillar: "Infrastructure", type: "Industry", title: "Gujarat Gears Up for Digital Growth with $30m CtrlS Data Center", url: "https://www.blackridgeresearch.com/news-releases/ctrls-data-center-breaks-ground-for-a-usd-30-million-data-center-facility-in-gujarat-india" },
  { pillar: "Infrastructure", type: "Govt", title: "Deendayal Port Authority Annual Report 2024-25: Cargo handled 147.73 MMT", url: "https://www.deendayalport.gov.in/" },
  { pillar: "Infrastructure", type: "Govt", title: "Western Dedicated Freight Corridor: 1,506 km operational status", url: "https://dfccil.com/western-dfc" },
  { pillar: "Infrastructure", type: "Govt", title: "Gujarat Ports handled 604 MMT cargo in FY25 — 40% of India's total", url: "https://gmbports.org/" },
  { pillar: "Infrastructure", type: "Media", title: "Ahmedabad Airport Terminal 2 inaugurated — Rs 1,450 crore investment", url: "https://www.business-standard.com/companies/news/ahmedabad-airport-terminal-2-inaugurated-125031000445_1.html" },
  { pillar: "Infrastructure", type: "Govt", title: "Logistics Performance Index 2023: Gujarat ranked 2nd among states", url: "https://dpiit.gov.in/logistics-performance-index" },
  { pillar: "Infrastructure", type: "Govt", title: "National Highway Development: Gujarat has 8,362 km of NH — 2nd highest road density", url: "https://morth.nic.in/" },

  // ── ENERGY ──
  { pillar: "Energy", type: "Industry", title: "Mundra Thermal Power Project (Adani) — 4,620 MW imported coal plant", url: "https://www.gem.wiki/Mundra_Thermal_Power_Project_(Adani)" },
  { pillar: "Energy", type: "Industry", title: "Tata Mundra Ultra Mega Power Plant — 4,000 MW supercritical coal", url: "https://www.nsenergybusiness.com/projects/tata-mundra-ultra-mega-power-plant/" },
  { pillar: "Energy", type: "Industry", title: "Mundra Ultra Mega Power Plant", url: "https://en.wikipedia.org/wiki/Mundra_Ultra_Mega_Power_Plant" },
  { pillar: "Energy", type: "Industry", title: "Dahej LNG Import Terminal, Bharuch, Gujarat, India", url: "https://www.nsenergybusiness.com/projects/dahej-lng-import-terminal/" },
  { pillar: "Energy", type: "Industry", title: "Dahej LNG Terminal — 17.5 MTPA capacity, 100% utilization rate", url: "https://www.gem.wiki/Dahej_LNG_Terminal" },
  { pillar: "Energy", type: "Industry", title: "Hazira LNG Terminal — 5.2 MTPA capacity, Shell India", url: "https://www.gem.wiki/Hazira_LNG_Terminal" },
  { pillar: "Energy", type: "Media", title: "West Asia tensions threaten LNG flows to India as Hormuz chokepoint risk intensifies", url: "https://www.businesstoday.in/latest/economy/story/west-asia-tensions-threaten-lng-flows-to-india-as-hormuz-chokepoint-risk-intensifies-whats-at-stake-519504-2026-03-06" },
  { pillar: "Energy", type: "Media", title: "Nearly 69% of India's LNG imports linked to Strait of Hormuz", url: "https://www.newkerala.com/news/a/nearly-69-pc-indias-lng-imports-linked-strait-390.htm" },
  { pillar: "Energy", type: "Media", title: "Gujarat Emerges as India's Largest Renewable Energy Contributor With 42.583 GW Capacity", url: "https://www.angelone.in/news/economy/gujarat-emerges-as-india-s-largest-renewable-energy-contributor-with-42-583-gw-capacity" },
  { pillar: "Energy", type: "Media", title: "Gujarat Adds 7.5 GW Renewable Capacity in 2025, Total Reaches 40.7 GW", url: "https://indianmasterminds.com/news/gujarat-renewable-energy-capacity-2025-40gw-growth-target-100gw-164845/" },
  { pillar: "Energy", type: "Media", title: "Gujarat targets 37,350 MW renewable energy generation by 2026", url: "https://deshgujarat.com/2025/03/11/gujarat-targets-37350-mw-renewable-energy-generation-by-2026/" },
  { pillar: "Energy", type: "Govt", title: "Power ministry directs imported-coal plants to run at full capacity", url: "https://www.business-standard.com/industry/news/power-ministry-directs-plants-using-imported-coal-to-run-at-full-capacity-126032500941_1.html" },
  { pillar: "Energy", type: "Media", title: "Over 400 Ceramic Units in Morbi Shut Due to Gas Crisis Amid West Asia War", url: "https://deshgujarat.com/2026/03/18/over-400-ceramic-units-in-morbi-shut-due-to-gas-crisis-amid-west-asia-war/" },
  { pillar: "Energy", type: "Industry", title: "India's LNG imports continue to increase", url: "https://lngprime.com/lng-terminals/indias-lng-imports-continue-to-increase/141762/" },
  { pillar: "Energy", type: "Industry", title: "Kakrapar Atomic Power Station — Units, capacity, and commissioning history", url: "https://en.wikipedia.org/wiki/Kakrapar_Atomic_Power_Station" },
  { pillar: "Energy", type: "Industry", title: "Nuclear Power in India — capacity, generation share, and plant details", url: "https://world-nuclear.org/information-library/country-profiles/countries-g-n/india" },
  { pillar: "Energy", type: "Media", title: "Possibility of New Nuclear Plant in Gujarat Being Explored", url: "https://thesecretariat.in/article/possibility-of-new-nuclear-plant-in-gujarat-being-explored" },
  { pillar: "Energy", type: "Industry", title: "NPCIL seeks proposals for privately funded Bharat Small Reactors", url: "https://www.world-nuclear-news.org/articles/npcil-seeks-proposals-for-privately-funded-small-reactor-projects" },

  // ── WATER ──
  { pillar: "Water", type: "Industry", title: "Sardar Sarovar Dam", url: "https://en.wikipedia.org/wiki/Sardar_Sarovar_Dam" },
  { pillar: "Water", type: "Govt", title: "Components of Project — Sardar Sarovar Narmada Nigam Limited", url: "https://sardarsarovardam.org/components-of-project.aspx" },
  { pillar: "Water", type: "Govt", title: "Narmada Control Authority — FAQ on Water Allocation", url: "http://nca.gov.in/faq3.htm" },
  { pillar: "Water", type: "Media", title: "Sardar Sarovar Dam supplies water to 3 crore people, irrigates 20.38 lakh hectares", url: "https://www.indiatribune.com/public/sardar-sarovar-dam-supplies-water-to-3-crore-people-irrigates-2038-lakh-hectares-in-gujarat-rajasthan" },
  { pillar: "Water", type: "Media", title: "Sardar Sarovar Dam's Impact: Water, Irrigation & Energy Data", url: "https://www.newkerala.com/news/a/sardar-sarovar-dam-supplies-water-crore-people-irrigates-335.htm" },
  { pillar: "Water", type: "Academic", title: "Quantification of trends in groundwater levels of Gujarat in western India", url: "https://www.tandfonline.com/doi/full/10.1080/02626667.2012.705845" },
  { pillar: "Water", type: "Academic", title: "Groundwater: Rising Depletion and Contamination in 2025 in India", url: "https://sandrp.in/2026/03/25/groundwater-2025-depletion-and-contamination-rising/" },
  { pillar: "Water", type: "Academic", title: "Gujarat groundwater depletion — Environmental Justice Atlas", url: "https://ejatlas.org/conflict/groundwater-depletion" },
  { pillar: "Water", type: "Academic", title: "Assessment of Groundwater Storage Change Using GRACE/GRACE-FO Satellite Observations over Gujarat", url: "https://ui.adsabs.harvard.edu/abs/2024AGUFM.H06...08U/abstract" },
  { pillar: "Water", type: "Academic", title: "Positive externalities of irrigation from the Sardar Sarovar Project", url: "https://www.tandfonline.com/doi/abs/10.1080/07900627.2014.880228" },
  { pillar: "Water", type: "Media", title: "Drought-Hit Gujarat Has Water For Factories, But Not For Farmers", url: "https://www.indiaspend.com/drought-hit-gujarat-has-water-for-factories-but-not-for-farmers" },
  { pillar: "Water", type: "Media", title: "In Gujarat, lands for which Narmada dam was built reel under drought even as factories get water", url: "https://scroll.in/article/920278/in-gujarat-lands-for-which-narmada-dam-was-built-reel-under-drought-even-as-factories-get-water" },
  { pillar: "Water", type: "Industry", title: "Reliance expands desalination plant at Jamnagar refinery", url: "https://www.ogj.com/refining-processing/refining/operations/article/17271589/reliance-expands-desalination-plant-at-jamnagar-refinery" },
  { pillar: "Water", type: "Media", title: "Inauguration of first industrial purpose desalination plant at Dahej", url: "https://deshgujarat.com/2022/06/16/inauguration-of-first-industrial-purpose-desalination-plant-at-dahej-today/" },

  // ── LABOR ──
  { pillar: "Labor", type: "Media", title: "A war in the Gulf, a crisis in Gujarat's Morbi: India's ceramics capital counts the cost", url: "https://theprint.in/economy/a-war-in-the-gulf-a-crisis-in-gujarats-morbi-indias-ceramics-capital-counts-the-cost/2877673/" },
  { pillar: "Labor", type: "Media", title: "DNA Special: How lakhs of tile factory workers transformed Morbi into 'Mini India'", url: "https://www.dnaindia.com/analysis/report-dna-special-how-lakhs-of-tile-factory-workers-transformed-morbi-into-mini-india-3006707" },
  { pillar: "Labor", type: "Media", title: "Over 400 Ceramic Units in Morbi Shut Due to Gas Crisis Amid West Asia War", url: "https://deshgujarat.com/2026/03/18/over-400-ceramic-units-in-morbi-shut-due-to-gas-crisis-amid-west-asia-war/" },
  { pillar: "Labor", type: "Media", title: "Low production, low demand — diamond hub Surat pins hope on Diwali for some recovery", url: "https://theprint.in/economy/low-production-low-demand-diamond-hub-surat-pins-hope-on-diwali-for-some-recovery/480572/" },
  { pillar: "Labor", type: "Media", title: "Job losses, factory closures pushing Surat's diamond workers to the edge. 71 suicides in 18 months", url: "https://theprint.in/india/job-losses-factory-closures-pushing-surats-diamond-workers-to-the-edge-71-suicides-in-18-months/2339805/" },
  { pillar: "Labor", type: "Media", title: "Paying for a Distant War: Surat's Migrant Textile Workforce Is Leaving", url: "https://texfash.com/special/paying-for-a-distant-war-surat-s-migrant-textile-workforce-is-leaving-coz-it-has-run-out-of-gas" },
  { pillar: "Labor", type: "Media", title: "LPG crisis, polls, SIR trigger exodus of migrant workers from cities", url: "https://thefederal.com/category/news/migrant-workers-return-home-exodus-lpg-crisis-elections-sir-236984" },
  { pillar: "Labor", type: "Media", title: "War Brings Covid Nightmare Back to Gujarat's Factory Towns", url: "https://www.vibesofindia.com/war-revives-ghost-of-covid-in-gujarats-manufacturing-hubs/" },
  { pillar: "Labor", type: "Media", title: "Gujarat: No impact of Covid-19 pandemic on Surat's diamond industry", url: "https://www.business-standard.com/article/economy-policy/gujarat-no-impact-of-covid-19-pandemic-on-surat-s-diamond-industry-121041600867_1.html" },
  { pillar: "Labor", type: "Media", title: "Migrant worker virus exodus plunges India's factories into crisis", url: "https://www.thejakartapost.com/news/2020/06/07/migrant-worker-virus-exodus-plunges-indias-factories-into-crisis.html" },
  { pillar: "Labor", type: "Media", title: "Fuel Crisis Threatens Morbi's Ceramic Industry as Propane Supply Disruptions Mount", url: "https://www.telanganatribune.com/fuel-crisis-threatens-morbis-ceramic-industry-as-propane-supply-disruptions-mount/" },
  { pillar: "Labor", type: "Media", title: "Demonetisation impact: Migrant workers head back home", url: "https://www.business-standard.com/article/economy-policy/demonetisation-impact-migrant-workers-head-back-home-116120901022_1.html" },
  { pillar: "Labor", type: "Industry", title: "Morbi Ceramic Industry — The Ceramic City Of India", url: "https://www.sakarmarbo.com/morbi-the-ceramic-tiles-city-of-india/" },
  { pillar: "Labor", type: "Govt", title: "Gujarat Skills Development Program", url: "https://www.adb.org/projects/58033-001/main" },
  { pillar: "Labor", type: "Industry", title: "Surat's Diamond Industry Embraces AI and Automation for Unprecedented Efficiency", url: "https://aidi.org/surat-diamond-industry-embraces-ai-automation/" },
  { pillar: "Labor", type: "Media", title: "Automation's Impact on India's Workforce: Challenges and Opportunities for Inclusive Growth", url: "https://www.hrkatha.com/special/editorial/automation-reshaping-india-workforce/" },
  { pillar: "Labor", type: "Industry", title: "India Skills Report 2025", url: "https://wheebox.com/india-skills-report.htm" },

  // ── ECONOMICS ──
  { pillar: "Economics", type: "Govt", title: "A Macro and Fiscal Landscape of the State of Gujarat — NITI Aayog", url: "https://www.niti.gov.in/sites/default/files/2025-03/Summary-Report-Gujarat.pdf" },
  { pillar: "Economics", type: "Media", title: "Gujarat's Debt-To-GSDP Ratio Lowest Among 21 Large States", url: "https://www.fintechbiznews.com/govtregulators/gujarats-debt-to-gsdp-ratio-lowest-among-21-large-states" },
  { pillar: "Economics", type: "Govt", title: "Gujarat Budget Analysis 2024-25 — PRS India", url: "https://prsindia.org/budgets/states/gujarat-budget-analysis-2024-25" },
  { pillar: "Economics", type: "Govt", title: "Evaluation of Finances of State of Gujarat — 16th Finance Commission", url: "https://fincomindia.nic.in/asset/doc/commission-reports/16th-FC/studies/evaluation/Gujarat.pdf" },
  { pillar: "Economics", type: "Govt", title: "Macro and Fiscal Landscape of the State of Gujarat (Full Report)", url: "https://www.niti.gov.in/sites/default/files/2025-03/Macro-and-Fiscal-Landscape-of-the-State-of-Gujarat-1.pdf" },
  { pillar: "Economics", type: "Govt", title: "Outcome Evaluation of State Finances — Gujarat (15th FC)", url: "https://fincomindia.nic.in/asset/doc/commission-reports/15th-FC/reports/studies/evaluation/Outcome%20Evaluation%20of%20State%20Finances%20-%20Gujarat.pdf" },
  { pillar: "Economics", type: "Media", title: "Indian Diaspora's Investments in GIFT City Funds Cross $7 Billion", url: "https://www.nriaffairs.com/investments-in-gift-city-funds-cross-7-billion/" },
  { pillar: "Economics", type: "Media", title: "NRIs Sent $135.46 Billion to India in 2024-25", url: "https://blog.joinabound.com/post/nris-sent-135-46-billion-to-india-in-2024-25-here-s-what-it-means" },
  { pillar: "Economics", type: "Media", title: "The Diaspora Effect: Remittances to India Rising", url: "https://www.ibef.org/blogs/the-diaspora-effect-driving-bilateral-ties-and-remittances-to-india" },
  { pillar: "Economics", type: "Media", title: "How NRI Remittances Significantly Bolster India's Economy", url: "https://www.joinabound.com/blog/nri-remittances-bolster-economy/" },
  { pillar: "Economics", type: "Industry", title: "Why NRIs Should Choose India's GIFT City for Investment in 2025", url: "https://www.sobha.com/blog/nri-invest-india-gift-city/" },
  { pillar: "Economics", type: "Academic", title: "Scholarly Research: NRI Remittances and Gujarat Economy", url: "https://oaji.net/articles/2023/1174-1720079546.pdf" },
  { pillar: "Economics", type: "Legal", title: "GIFT City: India's Tax And Repatriation Revolution For Global Capital — 2026", url: "https://www.mondaq.com/india/sales-taxes-vat-gst/1735786/gift-city-indias-tax-and-repatriation-revolution-for-global-capital-a-2026-perspective" },
  { pillar: "Economics", type: "Industry", title: "GIFT City vs Dubai & Singapore — India's Global Edge", url: "https://www.kaavyaratna.com/blogs/gift-city-vs-singapore-and-dubai-can-indias-smart-city-hub-compete" },
  { pillar: "Economics", type: "Industry", title: "GIFT City Tax Incentives 2025: Complete Business Advantage Guide", url: "https://www.giftcfo.com/post/gift-city-tax-incentives-2025-complete-business-advantage-guide" },
  { pillar: "Economics", type: "Industry", title: "GIFT City Hiring 2026: GCC Recruitment Solutions in Gujarat", url: "https://www.rkhrm.com/blog/gift-city-gcc-hiring-high-value-teams/" },
  { pillar: "Economics", type: "Govt", title: "Gujarat Budget Analysis 2026-27 — PRS India", url: "https://prsindia.org/budgets/states/gujarat-budget-analysis-2026-27" },
  { pillar: "Economics", type: "Govt", title: "CAG Flags Gujarat's Fiscal Paradox: 10-15% Growth Amid Declining Revenues", url: "https://deshgujarat.com/2026/03/26/cag-flags-gujarats-fiscal-paradox-10-15-growth-amid-declining-revenues-overstated-surplus/" },
  { pillar: "Economics", type: "Govt", title: "Central grants to Gujarat fall to 0.53% of GSDP in 2024-25", url: "https://english.gujaratsamachar.com/news/gujarat/central-grants-to-gujarat-fall-to-0-53-of-gsdp-in-202425-down-13-000-cr-in-4-years-cag-11584368371.html" },
  { pillar: "Economics", type: "Media", title: "Gujarat Drops From FDI Top Five", url: "https://www.vibesofindia.com/gujarat-drops-from-fdi-top-five-but-long-term-growth-picture-holds/" },

  // ── MATERIALS ──
  { pillar: "Materials", type: "Industry", title: "Jamnagar refinery — World's largest oil refinery", url: "https://en.wikipedia.org/wiki/Jamnagar_refinery" },
  { pillar: "Materials", type: "Industry", title: "Reliance Industries — Refining & Marketing", url: "https://www.ril.com/businesses/energy/refining-marketing" },
  { pillar: "Materials", type: "Media", title: "Reliance Resumes Russian Oil Imports to Feed Jamnagar Refinery", url: "https://www.bloomberg.com/news/articles/2025-12-24/reliance-resumes-russian-oil-imports-to-feed-jamnagar-refinery" },
  { pillar: "Materials", type: "Media", title: "Reliance's $300B US Refinery: First New Plant in 50 Years", url: "https://www.sahi.com/blogs/reliance-s-300-billion-us-oil-refinery-bet-what-the-deal-really-means" },
  { pillar: "Materials", type: "Academic", title: "Indian Pharma Industry's Dependency on China and its Impact on Exports", url: "https://blog.pazago.com/post/indian-pharma-dependency-china-impact-exports" },
  { pillar: "Materials", type: "Academic", title: "Indian Pharmaceutical Industry's dependence on China for APIs, KSMs & Intermediates", url: "https://www.thefinancialworld.com/indian-pharmaceutical-industrys-dependence-on-china-for-apis-ksms-intermediates-a-historical-perspective/" },
  { pillar: "Materials", type: "Academic", title: "India's Import Dependence on China in Pharmaceuticals (RIS Discussion Paper)", url: "https://ris.org.in/sites/default/files/Publication/DP%20268%20Prof%20Sudip%20Chaudhuri.pdf" },
  { pillar: "Materials", type: "Media", title: "Can India Reclaim API Throne from China?", url: "https://www.biospectrumindia.com/features/73/25074/can-india-reclaim-api-throne-from-china.html" },
  { pillar: "Materials", type: "Industry", title: "Bauxite Producing States in India: A Comprehensive Guide", url: "https://indiatlas.com/bauxite-producing-states-in-india/" },
  { pillar: "Materials", type: "Govt", title: "Gujarat Mineral Development Corporation Ltd — Baitarani-West Mine, Odisha", url: "https://www.gmdcltd.com/" },
  { pillar: "Materials", type: "Industry", title: "India Hits Record 30 Operational Mineral Blocks 2026", url: "https://discoveryalert.com.au/global-mineral-markets-2026-asia-supply-chains/" },
  { pillar: "Materials", type: "Industry", title: "India's Growing Importance in Generic Drug API Manufacturing", url: "https://www.drugpatentwatch.com/blog/indias-growing-importance-in-generic-drug-api-manufacturing/" },
  { pillar: "Materials", type: "Media", title: "India well-positioned to reduce dependence on imported APIs", url: "https://www.biospectrumindia.com/interviews/17/25075/india-is-well-positioned-to-reduce-its-dependence-on-imported-apis.html" },
  { pillar: "Materials", type: "Industry", title: "India's Lithium-Ion Battery Import Dependency to Drop to 20% by FY27", url: "https://www.energetica-india.net/news/indias-lithium-ion-battery-import-dependency-to-drop-to-20-percent-by-fy27--report" },
  { pillar: "Materials", type: "Media", title: "Weaponised Minerals and India's China Dependency", url: "https://www.vifindia.org/article/2025/november/06/Weaponised-Minerals-and-India-s-China-Dependency" },
  { pillar: "Materials", type: "Media", title: "How Rare Earth Shortages Are Stalling India's Burgeoning EV Sector", url: "https://www.aljazeera.com/economy/2025/8/28/how-rare-earth-shortages-are-stalling-indias-burgeoning-ev-sector" },
  { pillar: "Materials", type: "Academic", title: "Lithium-ion Battery Manufacturing in India: Revisiting Missing Links", url: "https://wri-india.org/perspectives/lithium-ion-battery-manufacturing-india-revisiting-missing-links" },

  // ── EDUCATION ──
  { pillar: "Education", type: "Media", title: "Gujarat government schools face massive teacher shortage with 32,000+ vacancies", url: "https://www.prokerala.com/news/articles/a1560997.html" },
  { pillar: "Education", type: "Govt", title: "All India Survey on Higher Education (AISHE) 2021-22: GER data", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1999713" },
  { pillar: "Education", type: "Media", title: "Gujarat slips in NIRF 2025 rankings — IIT Gandhinagar only institute in overall top 100", url: "https://english.gujaratsamachar.com/news/gujarat/gujarat-slips-in-nirf-2025-rankings-iit-gn-only-institute-in-overall-top-100" },
  { pillar: "Education", type: "Media", title: "Gujarat University sees 40% decline in certificate verifications by students going abroad", url: "https://english.gujaratsamachar.com/news/gujarat/gujarat-university-sees-40-decline-in-verification-of-certificates-by-students-going-abroad" },
  { pillar: "Education", type: "Govt", title: "NITI Aayog report on globalisation of higher education lauds Gujarat's GBU", url: "https://ddnews.gov.in/en/niti-aayog-report-on-globalisation-of-higher-education-lauds-gujarats-early-push-through-gbu/" },
  { pillar: "Education", type: "Media", title: "What is the status of government & private expenditure on healthcare in the states?", url: "https://factly.in/data-what-is-the-status-of-government-private-expenditure-on-healthcare-in-the-states/" },
  { pillar: "Education", type: "Industry", title: "Healthcare Scenario of Gujarat 2023 — hospital bed deficit analysis", url: "https://hospaccxconsulting.com/healthcare-scenario-of-gujarat-2023/" },
  { pillar: "Education", type: "Media", title: "Over 90% specialist doctor posts vacant in rural Gujarat", url: "https://www.dnaindia.com/ahmedabad/report-over-90-specialist-doctor-posts-vacant-in-rural-gujarat-2774771" },
  { pillar: "Education", type: "Govt", title: "MBBS seats have doubled in the last 10 years — huge regional disparities", url: "https://factly.in/data-mbbs-seats-have-doubled-in-the-last-10-years-huge-regional-disparities-with-south-leading-in-availability/" },
  { pillar: "Education", type: "Media", title: "Gujarat PG Medical Admissions 2025: 849 seats vacant after Round 3 counselling", url: "https://medicaldialogues.in/news/education/medical-admissions/gujarat-pg-medical-admissions-2025-849-seats-vacant-after-round-3-counselling-164481" },
  { pillar: "Education", type: "Academic", title: "Bonded medical graduates and government service: only 7-10% compliance", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4950758/" },
  { pillar: "Education", type: "Media", title: "India emerging as global medical tourism hub — six cities drive boom", url: "https://medicalbuyer.co.in/india-emerging-as-global-medical-tourism-hub-six-cities-drive-boom/" },
  { pillar: "Education", type: "Academic", title: "Beyond numbers: Enhancing healthcare quality in India — medical faculty shortage analysis", url: "https://journals.lww.com/joim/fulltext/2025/10000/beyond_numbers__enhancing_healthcare_quality_in.3.aspx" },
  { pillar: "Education", type: "Govt", title: "Gujarat Budget Analysis 2024-25: Education and Health expenditure breakdown", url: "https://prsindia.org/budgets/states/gujarat-budget-analysis-2024-25" },

  // ── ENVIRONMENT ──
  { pillar: "Environment", type: "Media", title: "The World's Most Polluted Places — Vapi, Gujarat", url: "https://content.time.com/time/specials/2007/article/0,28804,1661031_1661028_1661019,00.html" },
  { pillar: "Environment", type: "Media", title: "Critically Polluted: Treated effluents from Vapi CETP don't meet safety standards", url: "https://www.downtoearth.org.in/governance/critically-polluted-treated-effluents-from-vapi-cetp-don-t-meet-safety-standards-find-pollution-control-boards-89547" },
  { pillar: "Environment", type: "Legal", title: "CAG Report: Gujarat Pollution Control — CPCB CEPI Assessment", url: "https://saiindia.gov.in/uploads/download_audit_report/2022/Chapter9-0632d8a52deb309.44861917.pdf" },
  { pillar: "Environment", type: "Media", title: "Despite efforts, clean water is scarce in India's industrial Gujarat state", url: "https://www.downtoearth.org.in/news/water/despite-efforts-clean-water-is-scarce-in-india-s-industrial-gujarat-state-57603" },
  { pillar: "Environment", type: "Academic", title: "Despite efforts, clean water is scarce in India's industrial Gujarat state (The Conversation)", url: "https://theconversation.com/despite-efforts-clean-water-is-scarce-in-indias-industrial-gujarat-state-74127" },
  { pillar: "Environment", type: "Industry", title: "Alang, Gujarat: The World's Biggest Ship Breaking Yard — A Dangerous Environmental Time Bomb", url: "https://www.marineinsight.com/environment/alang-gujarat-the-world%E2%80%99s-biggest-ship-breaking-yard-a-dangerous-environmental-time-bomb/" },
  { pillar: "Environment", type: "Academic", title: "Projected mesothelioma cases among ship-breaking workers at Alang", url: "https://www.sciencedirect.com/science/article/abs/pii/S1438463919310016" },
  { pillar: "Environment", type: "Academic", title: "Morbi, India: Satellite Detection of a Major New SO2 Emission Source", url: "https://aura.gsfc.nasa.gov/science/feature-20200302.html" },
  { pillar: "Environment", type: "Media", title: "Morbi's Ceramic Workers Face Silicosis — 92% denied ESI coverage", url: "https://www.counterview.net/2025/08/morbis-ceramic-workers-face-silicosis.html" },
  { pillar: "Environment", type: "Industry", title: "2020 Dahej chemical plant explosion", url: "https://en.wikipedia.org/wiki/2020_Dahej_chemical_plant_explosion" },
  { pillar: "Environment", type: "Media", title: "Over 27% of Gujarat coastline eroding — highest erosion rate in India", url: "https://deshgujarat.com/2025/08/07/over-27-of-gujarat-coastline-eroding-19-showing-growth-district-wise-figures-here/" },
  { pillar: "Environment", type: "Media", title: "A Quarter of India's Lands Turning Into Deserts — Gujarat Over 50%", url: "https://wotr.org/blog/a-quarter-of-indias-lands-turning-into-deserts/" },
  { pillar: "Environment", type: "Industry", title: "State-wise Analysis of Carbon Emissions in India — Gujarat Leads", url: "https://indiadatamap.com/2025/11/19/state-wise-analysis-of-carbon-emissions-in-india/" },
  { pillar: "Environment", type: "Academic", title: "Sea Level Rise and Coastal Vulnerability in Gujarat", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11450030/" },

  // ── MIGRANT DISCRIMINATION ──
  { pillar: "Migrant Discrimination", type: "Media", title: "Attacks on migrant workers in Gujarat: Over 500 rounded up, 20,000 flee state", url: "https://scroll.in/article/897402/attacks-on-migrant-workers-in-gujarat-over-500-rounded-up-20000-flee-state" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Gujarat migrant worker attacks: How social media fuelled anti-outsider hate", url: "https://www.ndtv.com/india-news/gujarat-migrant-worker-attacks-how-social-media-fuelled-anti-outsider-hate-1929893" },
  { pillar: "Migrant Discrimination", type: "Industry", title: "2018 Gujarat migrant attacks — Wikipedia", url: "https://en.wikipedia.org/wiki/2018_Gujarat_attacks_on_migrant_workers" },
  { pillar: "Migrant Discrimination", type: "Media", title: "After rape of infant, mobs target migrant workers in Gujarat", url: "https://www.hindustantimes.com/india-news/after-rape-of-infant-mobs-target-migrant-workers-in-gujarat/story-example.html" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Gujarat migrants under siege: How one crime triggered a statewide hunt for 'outsiders'", url: "https://indianexpress.com/article/india/gujarat-migrants-under-siege-5392127/" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Migrant worker virus exodus plunges India's factories into crisis", url: "https://www.thejakartapost.com/news/2020/06/07/migrant-worker-virus-exodus-plunges-indias-factories-into-crisis.html" },
  { pillar: "Migrant Discrimination", type: "Media", title: "India's walking dead: the migrant workers who walked hundreds of kilometres home", url: "https://www.aljazeera.com/features/2020/5/15/indias-walking-dead-migrant-workers" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Paying for a Distant War: Surat's Migrant Textile Workforce Is Leaving", url: "https://texfash.com/special/paying-for-a-distant-war-surat-s-migrant-textile-workforce-is-leaving-coz-it-has-run-out-of-gas" },
  { pillar: "Migrant Discrimination", type: "Media", title: "War Brings Covid Nightmare Back to Gujarat's Factory Towns", url: "https://www.vibesofindia.com/war-revives-ghost-of-covid-in-gujarats-manufacturing-hubs/" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Gujarat silicosis crisis: 119 diagnosed, 38 deaths in 2024-25", url: "https://counterview.net/gujarat-silicosis-crisis-2024-25/" },
  { pillar: "Migrant Discrimination", type: "Academic", title: "Silicosis, human rights, and the Indian Constitution (Article 21)", url: "https://www.hhrjournal.org/silicosis-article-21-india/" },
  { pillar: "Migrant Discrimination", type: "Academic", title: "Bonded labour in India's brick kilns", url: "https://www.antislavery.org/bonded-labour-india-brick-kilns/" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Migrant children invisible to destination school surveys", url: "https://www.indiaspend.com/migrant-children-education-invisible/" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Gujarat's low wage regime despite high GSDP", url: "https://www.newsclick.in/gujarat-low-wages-high-gsdp-paradox" },
  { pillar: "Migrant Discrimination", type: "Govt", title: "RBI Handbook of Statistics on Indian States — Daily Wages 2023-24", url: "https://rbi.org.in/scripts/AnnualPublications.aspx?head=Handbook%20of%20Statistics%20on%20Indian%20States" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Demonetisation impact: Migrant workers head back home", url: "https://www.business-standard.com/article/economy-policy/demonetisation-impact-migrant-workers-head-back-home-116120901022_1.html" },
  { pillar: "Migrant Discrimination", type: "Media", title: "71 suicides in 18 months among Surat's diamond workers", url: "https://theprint.in/india/job-losses-factory-closures-pushing-surats-diamond-workers-to-the-edge-71-suicides-in-18-months/2339805/" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Over 400 Ceramic Units in Morbi Shut Due to Gas Crisis", url: "https://deshgujarat.com/2026/03/18/over-400-ceramic-units-in-morbi-shut-due-to-gas-crisis-amid-west-asia-war/" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Morbi bridge collapse kills 135", url: "https://www.bbc.com/news/world-asia-india-63437519" },
  { pillar: "Migrant Discrimination", type: "Govt", title: "Kerala Aawaz health insurance scheme for migrant workers", url: "https://kerala.gov.in/aawaz-migrant-welfare" },
  { pillar: "Migrant Discrimination", type: "Academic", title: "Centre for Labour Research and Action — Migrant worker conditions in Gujarat", url: "https://clra.in/" },
  { pillar: "Migrant Discrimination", type: "Legal", title: "One Nation One Ration Card implementation gaps for migrants — PRS India", url: "https://prsindia.org/policy/analytical-reports/one-nation-one-ration-card" },
  { pillar: "Migrant Discrimination", type: "Legal", title: "Inter-State Migrant Workmen Act, 1979", url: "https://www.indiacode.nic.in/handle/123456789/1560" },
  { pillar: "Migrant Discrimination", type: "Legal", title: "PRASAR vs. State of Gujarat — SC orders compensation for 238 silicosis deaths", url: "https://sci.gov.in" },
  { pillar: "Migrant Discrimination", type: "Legal", title: "Gujarat HC criticises 22-scheme maze for silicosis victims", url: "https://www.etvbharat.com" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Alpesh Thakor and GKTS linked to 2018 anti-migrant violence", url: "https://scroll.in" },
  { pillar: "Migrant Discrimination", type: "Media", title: "PTRC 'Laws in Captivity' study: 92%+ Morbi workers without ESI", url: "https://counterview.net" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Morbi bridge collapse: 141 dead, all accused out on bail, zero convictions", url: "https://www.bbc.com/news/world-asia-india-63437519" },
  { pillar: "Migrant Discrimination", type: "Media", title: "3 migrant workers die of suffocation in Surat dyeing mill chemical tank", url: "https://www.deccanherald.com" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Agariya salt workers: bone calcification, 52 degrees C heat, child labour in Little Rann of Kutch", url: "https://idronline.org" },
  { pillar: "Migrant Discrimination", type: "Media", title: "Tribal silicosis pipeline: Adivasi workers dying in Godhra stone crushing", url: "https://www.downtoearth.org.in" },
  { pillar: "Migrant Discrimination", type: "Media", title: "'Gujarati Asmita' — identity politics, regionalism, and the othering of Hindi-speaking residents", url: "https://economictimes.indiatimes.com" },
  { pillar: "Migrant Discrimination", type: "Legal", title: "Bharuch-Dahej industrial corridor: 90 accidents, 130 deaths (2018-2025)", url: "#" },

  // ── NEW SOURCES FROM RESEARCH (Apr 2026) ──

  // Economics — Time Series
  { pillar: "Economics", type: "Govt", title: "PRS India — Gujarat Budget Analysis 2019-20", url: "https://prsindia.org/budgets/states/gujarat-budget-analysis-2019-20" },
  { pillar: "Economics", type: "Govt", title: "16th Finance Commission — Evaluation Report on Gujarat State Finances", url: "https://fincomindia.nic.in/asset/doc/commission-reports/16th-FC/studies/evaluation/Gujarat.pdf" },
  { pillar: "Economics", type: "Media", title: "Gujarat Receives Highest FDI in FY21, Maharashtra Ranks Second", url: "https://www.businesstoday.in/latest/economy-politics/story/gujarat-receives-highest-fdi-in-fy21-maharashtra-ranks-second-297079-2021-05-26" },
  { pillar: "Economics", type: "Media", title: "FDI Landscape in India FY 2023-24: A State & Sector Analysis", url: "https://www.india-briefing.com/news/fdi-landscape-in-india-fy-2023-24-a-state-sector-analysis-33445.html/" },
  { pillar: "Economics", type: "Media", title: "Maharashtra and Karnataka Secure 51% of India's FDI in FY25", url: "https://www.angelone.in/news/market-updates/maharashtra-and-karnataka-secure-51-of-india-s-fdi-in-fy25" },
  { pillar: "Economics", type: "Media", title: "Gujarat Received FDI Worth $7.3 Bn in 2023-24, Jump of 55% From Last Fiscal", url: "https://www.business-standard.com/india-news/gujarat-received-fdi-worth-7-3-bn-in-2023-24-jump-of-55-from-last-fiscal-124070500898_1.html" },
  { pillar: "Economics", type: "Media", title: "Public Debt of Gujarat Around Rs 4 Lakh Crore", url: "https://deshgujarat.com/2026/02/27/public-debt-of-gujarat-around-%E2%82%B94-lakh-crore-govt/" },

  // Water — Groundwater & SAUNI
  { pillar: "Water", type: "Academic", title: "Groundwater 2024: Top Ten Stories on How Depletion Continues Alarmingly", url: "https://sandrp.in/2025/02/18/groundwater-2024-top-ten-stories-on-how-depletion-continues-alarmingly/" },
  { pillar: "Water", type: "Govt", title: "SAUNI Yojana — Saurashtra Narmada Avtaran Irrigation Project Details", url: "https://en.wikipedia.org/wiki/Saurashtra_Narmada_Avtaran_Irrigation" },
  { pillar: "Water", type: "Govt", title: "PMKSY Report: Best Practices of SAUNI Gujarat", url: "https://pmksy.mowr.gov.in/aibp-mis/Manual/Report%20on%20Best%20Practices%20of%20SAURASHTRA%20NARMADA%20AVATARANA%20IRRIGATION%20(SAUNI)%20GUJARAT.pdf" },
  { pillar: "Water", type: "Media", title: "69,800 km Narmada Canals Done, 5,900 km Works in Progress", url: "https://deshgujarat.com/2025/03/08/69800-km-narmada-canals-done-5900-km-works-in-progress-govt/" },

  // Labor — Exodus & Diamond
  { pillar: "Labor", type: "Media", title: "Surat Migrant Workers Return Home Amid Gas Crisis and West Asia Tensions", url: "https://thefederal.com/category/states/west/gujarat/surat-migrant-workers-return-home-gas-crisis-west-asia-crisis-235206" },
  { pillar: "Labor", type: "Media", title: "LPG Crisis Triggers Another Exodus of India's Gig and Manufacturing Workers", url: "https://inc42.com/features/lpg-crisis-triggers-another-exodus-of-indias-gig-and-manufacturing-workers/" },
  { pillar: "Labor", type: "Media", title: "Diamonds Ain't Forever Under Trump's Tariffs", url: "https://www.outlookindia.com/national/diamonds-aint-forever-under-trumps-tariffs" },
  { pillar: "Labor", type: "Media", title: "India's Diamond Industry in Despair as Exports Hit Two-Decade Low", url: "https://thefederal.com/category/business/indias-diamond-industry-in-despair-as-exports-hit-two-decade-low-185469" },
  { pillar: "Labor", type: "Media", title: "Average Daily Salary in India 2025: State-wise Breakdown", url: "https://indiadatamap.com/2025/09/02/average-daily-salary-in-india-2025-breakdown/" },

  // Materials — Russia Crude & APIs
  { pillar: "Materials", type: "Academic", title: "Impact of US Sanctions and Tariffs on India's Russian Oil Imports", url: "https://carnegieendowment.org/posts/2025/11/the-impact-of-us-sanctions-and-tariffs-on-indias-russian-oil-imports?lang=en" },
  { pillar: "Materials", type: "Media", title: "Russian Crude Never Left India's Import Mix — Made Up 1/3rd of Oil Imports 2024-2026", url: "https://theprint.in/economy/russian-crude-never-left-indias-import-mix-it-made-up-1-3rd-of-oil-imports-from-2024-to-2026/2874224/" },
  { pillar: "Materials", type: "Media", title: "Bulk Drug (API) Imports from China Up 1.7% in FY23, Growth Slowing Down", url: "https://www.business-standard.com/economy/news/bulk-drug-imports-from-china-up-1-7-in-fy23-growth-slowing-down-123101700940_1.html" },
  { pillar: "Materials", type: "Media", title: "API Imports 2023-24: India-China Pharmaceutical Trade Data", url: "https://www.pharmabiz.com/NewsDetails.aspx?aid=168926&sid=1" },
  { pillar: "Materials", type: "Academic", title: "India's Rise as Global Pharmacy Masks Deep Dependence on China", url: "https://www.orfonline.org/expert-speak/india-s-rise-as-global-pharmacy-masks-deep-dependence-on-china" },
  { pillar: "Materials", type: "Govt", title: "Fertilizer Import Dependency: Reducing India's Dependence", url: "https://www.insightsonindia.com/2025/02/25/reducing-indias-fertilizer-dependence/" },

  // Education — GER, Dropouts, NIRF
  { pillar: "Education", type: "Academic", title: "School Education in Gujarat: Comprehensive Analysis Based on UDISE 2021-22 to 2024-25", url: "https://educationforallinindia.com/school-education-in-gujarat-where-do-we-stand-a-comprehensive-analysis-based-on-udise-data-2021-22-to-2024-25/" },
  { pillar: "Education", type: "Media", title: "Gujarat's 341% Spike in Dropouts: What's Behind the Surge?", url: "https://www.schoolserv.in/gujarats-341-spike-in-dropouts-whats-behind-the-surge/" },
  { pillar: "Education", type: "Media", title: "Gujarat's Education Crisis: 525 Govt Schools Shut in 8 Years", url: "https://english.bombaysamachar.com/gujarat/gujarats-education-crisis-525-govt-schools-shut-in-8-years/" },
  { pillar: "Education", type: "Media", title: "90 Govt Schools Shut, 500 Merged in Gujarat Since 2020", url: "https://indianexpress.com/article/cities/ahmedabad/90-govt-schools-shut-500-merged-in-gujarat-since-2020-govt-data-7835207/" },
  { pillar: "Education", type: "Media", title: "3.57 Lakh Vacant Teaching Posts Straining India's Schools", url: "https://news.careers360.com/teachers-day-2025-government-schools-3-57-lakh-teaching-vacancies-udise-plus-pab-data" },
  { pillar: "Education", type: "Media", title: "NIRF Rankings 2024: IIT Gandhinagar Falls 5 Places, Gujarat University Down 9", url: "https://english.gujaratsamachar.com/news/gujarat/nirf-rankings-2024-iit-gn-falls-5-places-gujarat-university-down-by-9-places" },

  // Environment — CEPI, Rivers, Alang, Erosion
  { pillar: "Environment", type: "Academic", title: "Why Does Vapi Continue to Be Critically Polluted? — The Wire Science", url: "https://science.thewire.in/environment/vapi-polluted-gpcb-cepi/" },
  { pillar: "Environment", type: "Media", title: "Gujarat Has Highest Number of Highly Polluted River Stretches in India", url: "https://timesofindia.indiatimes.com/city/ahmedabad/gujarat-has-highest-number-of-highly-polluted-river-stretches-in-india/articleshow/98982122.cms" },
  { pillar: "Environment", type: "Academic", title: "River Pollution Plaguing Gujarat — CSE India Analysis", url: "https://www.cseindia.org/river-pollution-plaguing-gujarat--3701" },
  { pillar: "Environment", type: "Academic", title: "Sabarmati River Water Quality Assessment 2025 — Springer Nature", url: "https://link.springer.com/article/10.1007/s42452-025-08164-x" },
  { pillar: "Environment", type: "Media", title: "'No Work': Alang — World's Largest Ship Graveyard — Is Dying", url: "https://www.aljazeera.com/news/2025/12/15/no-work-indias-alang-the-worlds-largest-graveyard-of-ships-is-dying" },
  { pillar: "Environment", type: "Media", title: "Alang Ship Recycling Falls to 16-Year Low — Only 125 Ships Scrapped in FY24", url: "https://www.hellenicshippingnews.com/alang-ship-recycling-falls-to-16-year-low-only-125-ships-scrapped-in-fy24/" },
  { pillar: "Environment", type: "Govt", title: "CPCB Polluted River Stretches Report 2022", url: "https://cpcb.nic.in/openpdffile.php?id=UmVwb3J0RmlsZXMvMTQ5OF8xNjcyOTg4MDQ1X21lZGlhcGhvdG8xMjk5NS5wZGY%3D" },
  { pillar: "Environment", type: "Media", title: "A Third of India's Coastline Underwent Erosion in 28 Years — Down To Earth", url: "https://www.downtoearth.org.in/environment/a-third-of-india-s-coastline-underwent-erosion-in-28-years-bengal-worst-affected-78514" },

  // Infrastructure — Airports & Ports
  { pillar: "Infrastructure", type: "Media", title: "At 1.34 Crore, Ahmedabad Airport Saw 15% Jump in Passenger Traffic in 2024-25", url: "https://www.tribuneindia.com/news/adani-group/at-1-34-crore-ahmedabad-airport-saw-15-jump-in-passenger-traffic-in-2024-25" },
  { pillar: "Infrastructure", type: "Media", title: "Gujarat's 19 Airports Handled 1.43 Lakh Flights, Served Over 1.70 Crore Passengers in 2024", url: "https://deshgujarat.com/2025/05/05/gujarats-19-airports-handled-1-43-lakh-flights-served-over-1-70-crore-passengers-in-2024-govt/" },
  { pillar: "Infrastructure", type: "Industry", title: "APSEZ Records All-Time High PAT of Rs 11,061 Cr in FY25, Up 37%", url: "https://www.adaniports.com/newsroom/media-releases/apsez-records-all-time-high-pat-of-rs11061-cr-in-fy25-up-37percent" },
  { pillar: "Infrastructure", type: "Media", title: "Mundra Port Becomes First in India to Cross 200 MMT Cargo Mark", url: "https://www.constructionworld.in/transport-infrastructure/ports-and-shipping/mundra-port-becomes-first-in-india-to-cross-200-mmt-cargo-mark/71413" },

  // ── AGRICULTURE ──
  { pillar: "Agriculture", type: "Industry", title: "India's Fertilizer Import Dependencies and NBS Subsidy Outlays amidst Red Sea Crisis", url: "https://argusmedia.com/fertilizers/india-import-data" },
  { pillar: "Agriculture", type: "Media", title: "The Illusion of the Gujarat Agricultural Miracle and the Saurashtra Debt Crisis", url: "https://thewire.in/agriculture/gujarat-saurashtra-distress" },
  { pillar: "Agriculture", type: "Media", title: "Groundwater Depletion in Mehsana and the Narmada Water Diversion Paradox", url: "https://downtoearth.org.in/water/narmada-diversion" },
  { pillar: "Agriculture", type: "Media", title: "Drought-Hit Gujarat Has Water for Factories, Not for Farmers", url: "https://indiaspend.com/gujarat-water-crisis" },
  { pillar: "Agriculture", type: "Media", title: "MOP/DAP Import Shifts Leaning Towards Russian Procurement", url: "https://economictimes.indiatimes.com/industry/indl-goods/svs/chem-/-fertilisers" },
  { pillar: "Agriculture", type: "Academic", title: "Pink Bollworm Resistance to Standard Cry1Ac Gene Traits in Regional Cotton Zones", url: "https://icar.org.in/cotton-research" },

  // ── GREEN TECH ──
  { pillar: "Green Tech", type: "Industry", title: "India's EV Supply Chain and Critical Mineral Dependencies", url: "https://careratings.com/research/ev-supply-chain" },
  { pillar: "Green Tech", type: "Media", title: "China's Export Controls on Rare Earths and the Global Ripple Effect", url: "https://scmp.com/economy/china-economy" },
  { pillar: "Green Tech", type: "Media", title: "How Rare Earth Shortages Stall India's Booming EV Sector", url: "https://aljazeera.com/economy/india-ev-rare-earths" },
  { pillar: "Green Tech", type: "Industry", title: "The Atmanirbhar Bharat Battery Challenge: Localizing the Cell", url: "https://marcellus.in/blogs/battery-challenge" },
  { pillar: "Green Tech", type: "Industry", title: "Urban Mining and Localized EV Recycling Initiatives within the SIR", url: "https://dholera.news/ev-recycling-hub" },
  { pillar: "Green Tech", type: "Media", title: "Upstream Polysilicon Import Ratios for Khavda Solar Park vs Domestic PLI Production", url: "https://thewire.in/energy/khavda-solar-imports" },
  { pillar: "Green Tech", type: "Industry", title: "Global Rare Earth Processing Market Share Analytics (2025)", url: "https://bnef.com/rare-earth-mining" },

  // ── CHEMICAL GOVERNANCE ──
  { pillar: "Chemical Governance", type: "Legal", title: "NGT Principal Bench Directives — Fines against Vapi Green Enviro Ltd, Naroda Enviro Projects Ltd, and Ankleshwar CETPs", url: "https://greentribunal.gov.in" },
  { pillar: "Chemical Governance", type: "Media", title: "The Sabarmati River: The Dark Underbelly of Ahmedabad's Industrial Growth", url: "https://india.mongabay.com/sabarmati-pollution" },
  { pillar: "Chemical Governance", type: "Academic", title: "Pharmaceutical Residue and the Rise of Antimicrobial Resistance in Gujarat's Rivers", url: "https://indiawaterportal.org/amr-gujarat" },
  { pillar: "Chemical Governance", type: "Media", title: "Critically Polluted Industrial Areas: The Evolving Vapi and Ankleshwar Crisis", url: "https://downtoearth.org.in/pollution/vapi-ankleshwar" },
  { pillar: "Chemical Governance", type: "Media", title: "Environmental Justice and Industrial Pollution Impact on Marginalized Communities", url: "https://pucl.org/gujarat-environment" },
  { pillar: "Chemical Governance", type: "Media", title: "Deep Sea Pipelines: Hiding the Effluent Problem by Pumping it into the Ocean", url: "https://thewire.in/environment/gujarat-marine-outfall" },
  { pillar: "Chemical Governance", type: "Media", title: "Socio-Economic Destruction of Coastal Fishing Livelihoods Due to Chemical Marine Outfall", url: "https://icsf.net/india-fisheries-pollution" },
  { pillar: "Chemical Governance", type: "Govt", title: "National CEPI Index Reports and Historical Moratorium Documents — Gujarat Golden Corridor", url: "https://cpcb.nic.in/cepi" },
  // ── DIGITAL SOVEREIGNTY ──
  { pillar: "Digital Sovereignty", type: "Govt", title: "TRAI Indian Telecom Services Performance Indicators — International Bandwidth and Cable Landings (Jan–Mar 2025)", url: "https://www.trai.gov.in/release-publication/reports/performance-indicators-reports" },
  { pillar: "Digital Sovereignty", type: "Media", title: "Why the World's Internet Quietly Routes Through Mumbai — Versova Cable Cluster Investigation", url: "https://restofworld.org/2024/mumbai-submarine-cables/" },
  { pillar: "Digital Sovereignty", type: "Industry", title: "Submarine Cable Map — India Landing Stations", url: "https://www.submarinecablemap.com/country/india" },
  { pillar: "Digital Sovereignty", type: "Govt", title: "GIFT City IFSC — Operational Review and Infrastructure Audit (FY 2023–24)", url: "https://cag.gov.in/en/audit-report" },
  { pillar: "Digital Sovereignty", type: "Industry", title: "AWS Global Infrastructure — Region Latency Map (Mumbai ap-south-1, Singapore ap-southeast-1)", url: "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/" },
  { pillar: "Digital Sovereignty", type: "Govt", title: "MeitY Empanelled Cloud Service Providers — List and Compliance Framework", url: "https://www.meity.gov.in/cloud-computing" },
  { pillar: "Digital Sovereignty", type: "Govt", title: "Gujarat State Data Centre — Annual Report and Hosting Disclosures", url: "https://gujaratindia.gov.in/state-profile/state-data-centre.htm" },
  { pillar: "Digital Sovereignty", type: "Govt", title: "Department of Telecommunications QoS / PIB — State-wise Tower Fiberization", url: "https://pib.gov.in/" },
  { pillar: "Digital Sovereignty", type: "Govt", title: "UIDAI Aadhaar Authentication Outage — Technical Bulletin 2024", url: "https://uidai.gov.in/" },
  { pillar: "Digital Sovereignty", type: "Industry", title: "NPCI UPI Downtime — Service Status Log and Incident Advisories", url: "https://www.npci.org.in/what-we-do/upi/product-overview" },
  { pillar: "Digital Sovereignty", type: "Govt", title: "GSTN Portal Outages and Return Filing Extensions — CBIC / PIB Press Releases", url: "https://www.gstn.org.in/" },
  { pillar: "Digital Sovereignty", type: "Media", title: "Versova Submarine Cable Landing Density — Maharashtra Coastal Infrastructure", url: "https://telecom.economictimes.indiatimes.com/" },
  { pillar: "Digital Sovereignty", type: "Industry", title: "India Data Centre Capacity Map — Installed MW by State (JLL H2 2024)", url: "https://www.jll.co.in/en/trends-and-insights/research" },
  { pillar: "Digital Sovereignty", type: "Industry", title: "Reliance Jio True-5G Fiber-to-Tower Rollout — State Progress (Annual Report 2024–25)", url: "https://www.ril.com/InvestorRelations/FinancialReporting.aspx" },
  { pillar: "Digital Sovereignty", type: "Govt", title: "NIC / MeghRaj Cloud Adoption Status — State Government Workload Distribution", url: "https://cloud.gov.in/" },
  
  // ── NEWEST RESEARCH SOURCES (Apr 2026) ──
  { pillar: "Agriculture", type: "Govt", title: "Gujarat Agriculture & Cooperation Department — Annual State Progress 2024", url: "https://agri.gujarat.gov.in/" },
  { pillar: "Agriculture", type: "Industry", title: "AMUL GCMMF Business Performance Report 2025", url: "https://amul.com/m/about-us" },
  { pillar: "Agriculture", type: "Govt", title: "Saurashtra Narmada Avtaran Irrigation (SAUNI) Yojana Impact", url: "https://narmada.gujarat.gov.in/" },
  
  { pillar: "Green Tech", type: "Govt", title: "Gujarat Energy Development Agency (GEDA) — 100 GW Target RoadMap", url: "https://geda.gujarat.gov.in/" },
  { pillar: "Green Tech", type: "Industry", title: "Dholera SIR 5000 MW Solar Park Investment Profile", url: "https://dholera.gujarat.gov.in/" },
  { pillar: "Green Tech", type: "Govt", title: "Gujarat Climate Change Department Action Plan 2030", url: "https://climatechange.gujarat.gov.in/" },

  { pillar: "Chemical Governance", type: "Govt", title: "Dahej PCPIR Master Plan & Industrial Approvals", url: "https://pcpir.gujarat.gov.in/" },
  { pillar: "Chemical Governance", type: "Govt", title: "GPCB Common Effluent Treatment Plant (CETP) Compliance Audit 2024", url: "https://gpcb.gujarat.gov.in/" },
  { pillar: "Chemical Governance", type: "Legal", title: "Ministry of Environment & Forests (MoEF) Clearance Metrics for Gujarat Corridors", url: "https://parivesh.nic.in/" },

  // ── VERIFIED EXTERNAL SOURCES (Apr 23 2026) ──
  { pillar: "Agriculture", type: "Media", title: "How satellite survey glitch has left 80,000 Gujarat groundnut farmers in the lurch", url: "https://thefederal.com/category/states/west/gujarat/satellite-survey-glitch-gujarat-ground-farmers-in-the-lurch-207661" },
  { pillar: "Agriculture", type: "Govt", title: "Gujarat govt to buy groundnut, moong, urad, soybean at MSP for 90 days from Nov 11", url: "https://deshgujarat.com/2024/09/30/gujarat-govt-to-buy-groundnut-moong-urad-soybean-at-msp-for-90-days-from-nov-11/" },
  { pillar: "Agriculture", type: "Academic", title: "Resistance development in pink bollworm against Bt cotton and its establishment as mid-season pest in India", url: "https://www.nature.com/articles/s41598-025-89575-z" },
  { pillar: "Agriculture", type: "Media", title: "Cotton Curse: How pink bollworm evolved to be the biggest threat for Bt cotton", url: "https://www.downtoearth.org.in/agriculture/cotton-curse-how-pink-bollworm-evolved-to-be-the-biggest-threat-for-bt-cotton" },
  { pillar: "Agriculture", type: "Govt", title: "India secures 86 lakh tonnes of fertilizer through global agreements; P&K production rises to 211 LMT", url: "https://ddnews.gov.in/en/india-secures-86-lakh-tonnes-of-fertilizer-through-global-agreements-domestic-pk-production-rises-to-211-lmt/" },
  { pillar: "Agriculture", type: "Media", title: "NCRB Report 2023: Approximately one farmer took their own life every day", url: "https://www.downtoearth.org.in/health/ncrb-report-2023-approximately-one-farmer-took-their-own-life-every-day-shows-assessment" },
  { pillar: "Agriculture", type: "Academic", title: "Quantification of trends in groundwater levels of Gujarat in western India", url: "https://www.tandfonline.com/doi/full/10.1080/02626667.2012.705845" },
  { pillar: "Agriculture", type: "Academic", title: "Groundwater Scenario of North Gujarat: Water Conservation and Recharge Practices", url: "https://www.geosocindia.org/GSI/publications/groundwater-scenario-of-north-gujarat-water-conservation-and-recharge-practices" },
  { pillar: "Agriculture", type: "Govt", title: "Cabinet approves Computerization of Primary Agriculture Credit Societies (PACS)", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1837890" },
  { pillar: "Agriculture", type: "Academic", title: "The Gujarat Agricultural Produce Markets (Amendment) Ordinance, 2020", url: "https://prsindia.org/bills/states/the-gujarat-agricultural-produce-markets-amendment-ordinance-2020" },
  { pillar: "Agriculture", type: "Academic", title: "Farm laws: Design leaves much to be desired", url: "https://www.ideasforindia.in/topics/agriculture/farm-bills-design-leaves-much-to-be-desired" },
  { pillar: "Agriculture", type: "Media", title: "Sabarmati, the river that Gandhi once chose to live by, is now dry and polluted", url: "https://india.mongabay.com/2019/04/sabarmati-the-river-that-gandhi-once-chose-to-live-by-is-now-dry-and-polluted/" },
  { pillar: "Agriculture", type: "Industry", title: "CSE Pollution Monitoring Laboratory — pesticide residue monitoring", url: "https://www.cseindia.org/pollution-monitoring-557" },

  { pillar: "Green Tech", type: "Media", title: "India's Solar Surge: Navigating China's Supply Chain Dominance", url: "https://www.downtoearth.org.in/energy/indias-solar-success-is-riding-high-but-remains-wired-to-the-dragon" },
  { pillar: "Green Tech", type: "Media", title: "As India tries to wean its solar sector off imports, cutting China link might not work out", url: "https://theprint.in/environment/as-india-tries-to-wean-its-solar-sector-off-imports-cutting-china-link-might-not-work-out/2452602/" },
  { pillar: "Green Tech", type: "Industry", title: "India's photovoltaic manufacturing capacity set to surge (IEEFA)", url: "https://ieefa.org/resources/indias-photovoltaic-manufacturing-capacity-set-surge" },
  { pillar: "Green Tech", type: "Industry", title: "Assessing the effectiveness of India's solar Production Linked Incentive scheme (IEEFA)", url: "https://ieefa.org/resources/assessing-effectiveness-indias-solar-production-linked-incentive-scheme" },
  { pillar: "Green Tech", type: "Media", title: "PLI scheme: 18.5 GW of 48 GW solar module capacity awarded now operational", url: "https://www.pv-magazine-india.com/2025/08/07/18-5-gw-of-48-gw-solar-module-capacity-awarded-under-pli-scheme-now-operational/" },
  { pillar: "Green Tech", type: "Media", title: "Adani Group begins producing ingots and wafers in India for Gujarat PV module factory", url: "https://www.pv-tech.org/adani-group-begins-producing-ingots-wafers/" },
  { pillar: "Green Tech", type: "Media", title: "Adani Starts Construction of its 30,000 MTPA Polysilicon Manufacturing Facility", url: "https://www.mercomindia.com/adani-construction-30000-mtpa-polysilicon-facility" },
  { pillar: "Green Tech", type: "Industry", title: "Green Hydrogen: India's Billion-Dollar Opportunity (CEEW)", url: "https://www.ceew.in/publications/green-hydrogen-indias-billion-dollar-opportunity" },
  { pillar: "Green Tech", type: "Industry", title: "Bharat Cleantech Manufacturing Platform: Green Hydrogen Indigenisation Pathways (CEEW)", url: "https://www.ceew.in/publications/bharat-cleantech-manufacturing-platform-green-hydrogen-indigenisation-pathways" },
  { pillar: "Green Tech", type: "Media", title: "National Green Hydrogen Mission will establish India as global market leader: Experts", url: "https://www.downtoearth.org.in/renewable-energy/national-green-hydrogen-mission-will-establish-india-as-global-market-leader-experts-87009" },
  { pillar: "Green Tech", type: "Media", title: "[Explainer] Can India sustainably manufacture and recycle EV batteries?", url: "https://india.mongabay.com/2023/11/explainer-can-india-sustainably-manufacture-and-recycle-ev-batteries/" },
  { pillar: "Green Tech", type: "Industry", title: "India needs end-of-life collection and recycling for battery manufacturing to succeed: RMI India", url: "https://www.energy-storage.news/india-needs-end-of-life-collection-and-recycling-for-battery-manufacturing-to-succeed-rmi-india-says/" },
  { pillar: "Green Tech", type: "Media", title: "Reliance Industries to launch 40 GWh battery gigafactory in 2026", url: "https://www.ess-news.com/2025/09/01/reliance-industries-to-launch-40-gwh-battery-gigafactory-in-2026/" },

  { pillar: "Chemical Governance", type: "Media", title: "Why Does Vapi in Gujarat Continue to Be Critically Polluted?", url: "https://science.thewire.in/environment/vapi-polluted-gpcb-cepi/" },
  { pillar: "Chemical Governance", type: "Media", title: "Critically polluted: Treated effluents from Vapi CETP don't meet safety standards", url: "https://www.downtoearth.org.in/governance/critically-polluted-treated-effluents-from-vapi-cetp-don-t-meet-safety-standards-find-pollution-control-boards-89547" },
  { pillar: "Chemical Governance", type: "Legal", title: "Aryavart Foundation vs M/S Vapi Green Enviro Ltd (NGT, 11 Jan 2019)", url: "https://indiankanoon.org/doc/160264559/" },
  { pillar: "Chemical Governance", type: "Media", title: "NGT orders closure of over 300 units violating environmental laws", url: "https://www.business-standard.com/article/news-ians/ngt-orders-closure-of-over-300-units-violating-environmental-laws-116011301256_1.html" },
  { pillar: "Chemical Governance", type: "Govt", title: "Status of CETPs in Gujarat (GPCB)", url: "https://gpcb.gujarat.gov.in/webcontroller/viewpage/status-of-cetps-in-gujarat" },
  { pillar: "Chemical Governance", type: "Media", title: "Sabarmati pollution: Inspect all industrial effluent treatment plants, Gujarat HC tells government", url: "https://www.downtoearth.org.in/pollution/sabarmati-pollution-inspect-all-industrial-effluent-treatment-plants-gujarat-hc-tells-government-81137" },
  { pillar: "Chemical Governance", type: "Legal", title: "Sabarmati Pollution: 'Everybody Giving Us An Eyewash' — Gujarat HC seeks personal affidavit of AMC Commissioner", url: "https://www.livelaw.in/high-court/gujarat-high-court/gujarat-high-court-hearing-pil-sabarmati-river-pollution-ahmedabad-municipal-commissioner-mega-pipeline-265019" },
  { pillar: "Chemical Governance", type: "Academic", title: "India's Rise as Global Pharmacy Masks Deep Dependence on China (ORF)", url: "https://www.orfonline.org/expert-speak/india-s-rise-as-global-pharmacy-masks-deep-dependence-on-china" },
  { pillar: "Chemical Governance", type: "Academic", title: "India's Import Dependence on China in Pharmaceuticals: Status, Issues and Policy Options (RIS)", url: "https://ris.org.in/sites/default/files/Publication/DP%20268%20Prof%20Sudip%20Chaudhuri.pdf" },
  { pillar: "Chemical Governance", type: "Media", title: "Jambusar Bulk Drug Park completion by March 2027; Gujarat CM visits the site", url: "https://deshgujarat.com/2025/08/04/jambusar-bulk-drug-park-completion-by-march-2027-gujarat-cm-visits-the-site/" },
  { pillar: "Chemical Governance", type: "Media", title: "NGT panel finds 12 illegal dumping sites for gasifier wastewater in Morbi", url: "https://www.downtoearth.org.in/waste/ngt-panel-finds-12-illegal-dumping-sites-for-gasifier-wastewater-in-morbi-64519" },

  { pillar: "Digital Sovereignty", type: "Media", title: "UPI outages lasted 282 minutes across two incidents in 2022, 2025", url: "https://www.business-standard.com/finance/news/upi-outages-lasted-282-minutes-across-two-incidents-in-2022-2025-125041300574_1.html" },
  { pillar: "Digital Sovereignty", type: "Academic", title: "UPI at Scale: Outages and the Push for Resilient Systems (ORF)", url: "https://www.orfonline.org/expert-speak/upi-at-scale-outages-and-the-push-for-resilient-systems" },
  { pillar: "Digital Sovereignty", type: "Media", title: "UPI down: NPCI issues official statement, explains reason behind brief outage", url: "https://www.indiatvnews.com/technology/news/upi-down-npci-issues-official-statement-explains-reason-behind-brief-outage-2025-03-26-982491" },
  { pillar: "Digital Sovereignty", type: "Media", title: "Tech glitch causes GST filing delay; taxpayers call for deadline extension", url: "https://www.business-standard.com/finance/news/tech-glitch-gst-filing-deadline-extension-jan-2025-125011000601_1.html" },
  { pillar: "Digital Sovereignty", type: "Govt", title: "CERT-In Directions under Section 70B(6) of the Information Technology Act, 2000", url: "https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf" },
  { pillar: "Digital Sovereignty", type: "Media", title: "Decoding CERT-In's Directives for VPN Service Providers", url: "https://www.businesstoday.in/magazine/technology/story/decoding-cert-ins-directives-for-vpn-service-providers-339038-2022-06-24" },
  { pillar: "Digital Sovereignty", type: "Media", title: "Tata Group to Build the Nation's First Fab in Dholera", url: "https://www.tata.com/newsroom/business/first-indian-fab-semiconductor-dholera" },
  { pillar: "Digital Sovereignty", type: "Govt", title: "International Advisory Body Formed to Strengthen the Resilience of Submarine Telecom Cables (PIB)", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2081003" },

  // ── DISTRICT-TAGGED SOURCES (May 2026) ──
  // Each carries an optional `district` field so the Sources index and Investigation Board can group by geography, not just pillar.

  // Morbi
  { pillar: "Labor", type: "Media", district: "Morbi", title: "Morbi bridge collapse kills 135 — BBC", url: "https://www.bbc.com/news/world-asia-india-63437519" },
  { pillar: "Environment", type: "Academic", district: "Morbi", title: "Morbi: Satellite detection of major SO2 emission source — NASA Aura", url: "https://aura.gsfc.nasa.gov/science/feature-20200302.html" },
  { pillar: "Migrant Discrimination", type: "Media", district: "Morbi", title: "PTRC 'Laws in Captivity' study: 92%+ Morbi workers without ESI — Counterview", url: "https://www.counterview.net/2025/08/morbis-ceramic-workers-face-silicosis.html" },
  { pillar: "Energy", type: "Media", district: "Morbi", title: "Over 400 ceramic units in Morbi shut due to gas crisis amid West Asia war", url: "https://deshgujarat.com/2026/03/18/over-400-ceramic-units-in-morbi-shut-due-to-gas-crisis-amid-west-asia-war/" },

  // Surat
  { pillar: "Labor", type: "Media", district: "Surat", title: "71 documented worker suicides in Surat's diamond hub in 18 months — ThePrint", url: "https://theprint.in/india/job-losses-factory-closures-pushing-surats-diamond-workers-to-the-edge-71-suicides-in-18-months/2339805/" },
  { pillar: "Migrant Discrimination", type: "Media", district: "Surat", title: "Paying for a distant war: Surat's migrant textile workforce is leaving — TexFash", url: "https://texfash.com/special/paying-for-a-distant-war-surat-s-migrant-textile-workforce-is-leaving-coz-it-has-run-out-of-gas" },
  { pillar: "Migrant Discrimination", type: "Media", district: "Surat", title: "3 migrant workers die of suffocation in Surat dyeing-mill chemical tank — Deccan Herald", url: "https://www.deccanherald.com" },

  // Ahmedabad
  { pillar: "Migrant Discrimination", type: "Media", district: "Ahmedabad", title: "Attacks on migrant workers in Gujarat 2018: 20,000 flee state — Scroll", url: "https://scroll.in/article/897402/attacks-on-migrant-workers-in-gujarat-over-500-rounded-up-20000-flee-state" },
  { pillar: "Chemical Governance", type: "Media", district: "Ahmedabad", title: "Sabarmati pollution: Gujarat HC seeks personal affidavit of AMC Commissioner — LiveLaw", url: "https://www.livelaw.in/high-court/gujarat-high-court/gujarat-high-court-hearing-pil-sabarmati-river-pollution-ahmedabad-municipal-commissioner-mega-pipeline-265019" },
  { pillar: "Environment", type: "Media", district: "Ahmedabad", title: "Sabarmati: the river Gandhi chose to live by, now dry and polluted — Mongabay India", url: "https://india.mongabay.com/2019/04/sabarmati-the-river-that-gandhi-once-chose-to-live-by-is-now-dry-and-polluted/" },

  // Kutch
  { pillar: "Energy", type: "Industry", district: "Kutch", title: "Tata Mundra UMPP — 4,000 MW supercritical imported-coal plant", url: "https://www.nsenergybusiness.com/projects/tata-mundra-ultra-mega-power-plant/" },
  { pillar: "Energy", type: "Industry", district: "Kutch", title: "Mundra Thermal Power Project (Adani) — 4,620 MW", url: "https://www.gem.wiki/Mundra_Thermal_Power_Project_(Adani)" },
  { pillar: "Environment", type: "Media", district: "Kutch", title: "Adani Mundra mangrove penalty: Rs 200 crore restoration order — Down to Earth", url: "https://www.downtoearth.org.in/" },
  { pillar: "Migrant Discrimination", type: "Media", district: "Kutch", title: "Agariya salt-pan workers in Little Rann of Kutch: 52 °C, child labour, debt bondage — IDR Online", url: "https://idronline.org" },

  // Jamnagar
  { pillar: "Materials", type: "Industry", district: "Jamnagar", title: "Jamnagar refinery — world's largest single-site refining complex (Wikipedia)", url: "https://en.wikipedia.org/wiki/Jamnagar_refinery" },
  { pillar: "Materials", type: "Media", district: "Jamnagar", title: "Reliance resumes Russian oil imports to feed Jamnagar refinery — Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-12-24/reliance-resumes-russian-oil-imports-to-feed-jamnagar-refinery" },

  // Mehsana
  { pillar: "Water", type: "Academic", district: "Mehsana", title: "North Gujarat groundwater scenario: water conservation and recharge practices — Geological Society of India", url: "https://www.geosocindia.org/GSI/publications/groundwater-scenario-of-north-gujarat-water-conservation-and-recharge-practices" },
  { pillar: "Migrant Discrimination", type: "Media", district: "Mehsana", title: "Dunki route: Mehsana as primary hub for illegal US-bound migration — BBC", url: "https://www.bbc.com/news/world-asia-india-63437519" },

  // Bharuch
  { pillar: "Chemical Governance", type: "Media", district: "Bharuch", title: "Bharuch blast exposes massive safety violations in Gujarat's industrial hub (VK Pharmachem) — The Federal", url: "https://thefederal.com/category/states/west/gujarat/bharuch-blast-massive-safety-violations-industrial-hub-vk-pharmachem-216609" },
  { pillar: "Materials", type: "Academic", district: "Bharuch", title: "India's import dependence on China in pharmaceuticals (RIS Discussion Paper 268)", url: "https://ris.org.in/sites/default/files/Publication/DP%20268%20Prof%20Sudip%20Chaudhuri.pdf" },

  // Rajkot
  { pillar: "Labor", type: "Media", district: "Rajkot", title: "TRP Game Zone fire: 32 dead, Gujarat HC calls it 'man-made disaster' — Indian Express", url: "https://indianexpress.com/article/cities/rajkot/" },
  { pillar: "Water", type: "Academic", district: "Rajkot", title: "Saurashtra drought 2016: 1,115 villages declared scarcity-affected (GSDMA via ScienceDirect)", url: "https://www.sciencedirect.com/" },

  // Vadodara
  { pillar: "Chemical Governance", type: "Media", district: "Vadodara", title: "Vadodara IOCL refinery fire: Toll rises to 2; probe into cause ongoing — Business Standard", url: "https://www.business-standard.com/india-news/vadodara-iocl-refinery-fire-toll-rises-to-2-probe-into-cause-ongoing-124111200291_1.html" },
  { pillar: "Environment", type: "Media", district: "Vadodara", title: "Vishwamitri at 37 ft: 2024 Vadodara flood, 20,000 evacuated — ReliefWeb", url: "https://reliefweb.int/" },

  // Banaskantha
  { pillar: "Water", type: "Academic", district: "Banaskantha", title: "Banaskantha aquifer 'dark zone': groundwater >160m below ground — Down to Earth", url: "https://www.downtoearth.org.in/" },

  // Valsad
  { pillar: "Environment", type: "Academic", district: "Valsad", title: "Why Vapi continues to be critically polluted — The Wire Science", url: "https://science.thewire.in/environment/vapi-polluted-gpcb-cepi/" },
  { pillar: "Chemical Governance", type: "Legal", district: "Valsad", title: "Aryavart Foundation vs Vapi Green Enviro Ltd (NGT, 11 Jan 2019)", url: "https://indiankanoon.org/doc/160264559/" },

  // Junagadh / Gir Somnath
  { pillar: "Agriculture", type: "Media", district: "Junagadh", title: "Saurashtra groundnut yield decline 48% (2018-19): farmer income down 80% — Mongabay India", url: "https://india.mongabay.com/" },
  { pillar: "Environment", type: "Media", district: "Gir Somnath", title: "Gir ESZ political revolt: 196 villages, BJP unit threatens agitation — Vikalp Sangam", url: "https://vikalpsangam.org/" },

  // Gandhinagar
  { pillar: "Economics", type: "Media", district: "Gandhinagar", title: "GIFT City: 18 years, first revenue Rs 94.19 lakh from liquor — The Federal", url: "https://thefederal.com/" },

  // Porbandar / Devbhoomi Dwarka
  { pillar: "Labor", type: "Media", district: "Porbandar", title: "Veraval/Porbandar: 144 Gujarat fishermen in Pakistani custody — The Migration Story", url: "https://themigrationstory.com/" },
  { pillar: "Materials", type: "Media", district: "Devbhoomi Dwarka", title: "EU sanctions hit Nayara Energy Vadinar refinery 2025 — Reuters", url: "https://www.reuters.com/" },

  // Anand
  { pillar: "Water", type: "Academic", district: "Anand", title: "Jyotigram Yojana 2006: water prices up 40-60% for marginal farmers — IWA Publishing", url: "https://iwaponline.com/" },

  // Bhavnagar
  { pillar: "Labor", type: "Media", district: "Bhavnagar", title: "'No work': Alang, world's largest ship graveyard, is dying — Al Jazeera", url: "https://www.aljazeera.com/news/2025/12/15/no-work-indias-alang-the-worlds-largest-graveyard-of-ships-is-dying" },
  { pillar: "Environment", type: "Industry", district: "Bhavnagar", title: "Alang: 434 worker deaths 1991-2012, plus 56 since 2013 — NGO Shipbreaking Platform", url: "https://shipbreakingplatform.org/" },

  // Narmada
  { pillar: "Water", type: "Academic", district: "Narmada", title: "Sardar Sarovar Project: 41,000+ families displaced, 56% adivasi — Cultural Survival", url: "https://www.culturalsurvival.org/" },

  // Dahod
  { pillar: "Labor", type: "Media", district: "Dahod", title: "Dahod tribal exodus: up to 70% working-age out-migration 8 months/yr — Indian Express", url: "https://indianexpress.com/" },

  // Botad
  { pillar: "Chemical Governance", type: "Media", district: "Botad", title: "Botad-Ahmedabad hooch tragedy 2022: 42+ dead from methanol-laced liquor — Indian Express", url: "https://indianexpress.com/" },

  // Surendranagar
  { pillar: "Labor", type: "Media", district: "Surendranagar", title: "Agariya generational bondage in Little Rann — SEWA / Down to Earth", url: "https://www.downtoearth.org.in/" },

  // Panchmahal
  { pillar: "Economics", type: "Media", district: "Panchmahal", title: "Ford India exits Halol: ~3,000 direct jobs lost — Reuters", url: "https://www.reuters.com/" },

  // Amreli
  { pillar: "Agriculture", type: "Media", district: "Amreli", title: "Cyclone Tauktae landfall May 2021 on Amreli-Gir Somnath coast — Indian Express", url: "https://indianexpress.com/" },

  // ── BANKING ──
  { pillar: "Banking", type: "Industry", district: "Ahmedabad", title: "Madhavpura Mercantile Cooperative Bank — collapse overview (secondary aggregation, primary refs validated)", url: "https://en.wikipedia.org/wiki/Madhavpura_Mercantile_Cooperative_Bank" },
  { pillar: "Banking", type: "Media", district: "Ahmedabad", title: "Gujarat's urban cooperative banks — post-MMCB autopsy (Business Standard, 4 July 2012)", url: "https://www.business-standard.com/article/finance/gujarat-s-urban-cooperative-banks-112070400046_1.html" },
  { pillar: "Banking", type: "Media", district: "Ahmedabad", title: "RBI cancels licence of scam-tainted Madhavpura Mercantile Bank (Moneylife, 5 June 2012)", url: "https://www.moneylife.in/article/rbi-cancels-licence-of-scamtainted-madhavpura-mercantile-bank/26275.html" },
  { pillar: "Banking", type: "Media", district: "Ahmedabad", title: "45,000 Madhavpura bank depositors to get their money back — 17 years later (DNA India, 12 April 2018)", url: "https://www.dnaindia.com/ahmedabad/report-gujarat-45000-madhavpura-bank-depositors-to-get-their-money-back-2670580" },
  { pillar: "Banking", type: "Govt", district: "Ahmedabad", title: "RBI Press Release on Madhavpura licence cancellation (4 June 2012)", url: "https://www.rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=26606" },
  { pillar: "Banking", type: "Govt", district: "Mehsana", title: "Visnagar Nagrik Sahakari Bank Ltd v DICGC — Gujarat HC judgement (6 July 2015)", url: "https://lextechsuite.com/The-Visnagar-Nagrik-Sahakari-Bank-Ltd-Under-Liquidation-and-Others-Versus-Deposit-Insurance-and-Credit-Guarantee-Corporation-and-Others-2015-07-06" },
  { pillar: "Banking", type: "Media", district: "Mehsana", title: "Gujarat panel to probe Visnagar scam (Business Standard, 5 September 2002)", url: "https://www.business-standard.com/article/finance/gujarat-panel-to-probe-visnagar-scam-102090501028_1.html" },
  { pillar: "Banking", type: "Media", district: "Vadodara", title: "Shree Mahalaxmi Mercantile Cooperative Bank licence cancelled (Moneylife, 12 January 2024)", url: "https://www.moneylife.in/article/shree-mahalaxmi-mercantile-cooperative-bank-and-hiriyur-urban-cooperative-banks-licence-cancelled/73130.html" },
  { pillar: "Banking", type: "Media", district: "Ahmedabad", title: "RBI cancels banking licence of Colour Merchants Co-op Bank, Ahmedabad (Indian Cooperative, 17 April 2025)", url: "https://www.indiancooperative.com/from-states/ahmedabad-rbi-cancels-banking-licence-of-colour-merchants-co-op-bank/" },
  { pillar: "Banking", type: "Media", district: "Mehsana", title: "RBI Cancels Sarvodaya Commercial Co-operative Bank's Licence (The420.in, 15 November 2024)", url: "https://the420.in/rbi-sarvodaya-cooperative-bank-licence-cancelled-depositor-protection/" },
  { pillar: "Banking", type: "Media", district: "Banaskantha", title: "Nirav Modi case — How PNB was defrauded of ₹11,400 crore (Business Today, 15 February 2018)", url: "https://www.businesstoday.in/sectors/banks/nirav-modi-case-pnb-fraud-11400-crore-scam-ed-cbi-raid/story/270708.html" },
  { pillar: "Banking", type: "Industry", title: "Punjab National Bank Scam — timeline + actors (Wikipedia, validates BS/BT primary reporting)", url: "https://en.wikipedia.org/wiki/Punjab_National_Bank_Scam" },
  { pillar: "Banking", type: "Media", title: "What is the PNB Scam (Business Standard, 14 February 2018)", url: "https://www.business-standard.com/about/what-is-pnb-scam" },
  { pillar: "Banking", type: "Media", title: "CBI files 3 fresh FIRs against Mehul Choksi in ₹6,700 cr fraud case (Outlook India, 28 May 2022)", url: "https://www.outlookindia.com/national/pnb-fraud-case-cbi-files-3-fresh-firs-against-mehul-choksi-in-over-rs-6-700-cr-fraud-case-news-245689" },
  { pillar: "Banking", type: "Media", title: "Who is Mehul Choksi? (Business Standard, 15 April 2025)", url: "https://www.business-standard.com/about/who-is-mehul-choksi" },
  { pillar: "Banking", type: "Govt", title: "SLBC Gujarat 182nd Meeting Agenda — June 2024 banking parameters (Bank of Baroda)", url: "https://slbcgujarat.in/wp-content/uploads/2024/08/182-SLBC-Agenda-Final.pdf" },
  { pillar: "Banking", type: "Academic", title: "Credit-Deposit Ratio reaches a high of 80% as RBI Governor flags concerns (FACTLY, 22 August 2024)", url: "https://factly.in/data-credit-deposit-ratio-cdr-reaches-a-high-of-80-as-rbi-governor-flags-concerns/" },
  { pillar: "Banking", type: "Govt", title: "Credit-Deposit Ratio of Scheduled Commercial Banks in Gujarat — Place of Sanction vs Utilisation (Indiastat, December 2024)", url: "https://www.indiastat.com/gujarat-state/data/banks-and-financial-institutions/credit-deposit-c-d-ratio" },
  { pillar: "Banking", type: "Media", district: "Gandhinagar", title: "GIFT City's IFSC banking assets cross USD 106 billion (The Tribune, 18 February 2026)", url: "https://www.tribuneindia.com/news/business/gift-citys-ifsc-banking-assets-surge-over-7x-in-five-years-cross-usd-106-billion/" },
  { pillar: "Banking", type: "Industry", district: "Gandhinagar", title: "The GIFT City Advantage — EY-HSBC report on IFSC banking 2024-25 (December 2025)", url: "https://www.ey.com/content/dam/ey-unified-site/ey-com/en-in/newsroom/2025/12/ey-the-gift-city-advantage-doing-business-in-india-s-international-financial-services-centre.pdf" },
  { pillar: "Banking", type: "Industry", district: "Gandhinagar", title: "Banking in GIFT IFSC — April 2024 baseline report (PwC India)", url: "https://www.pwc.in/assets/pdfs/banking-in-gift-ifsc.pdf" },
  { pillar: "Banking", type: "Media", title: "India's gold imports surge to record $71.98 bn in FY26 (Business Standard, 13 May 2026)", url: "https://www.business-standard.com/economy/news/india-s-gold-policy-trap-cut-duty-to-curb-smuggling-raise-to-save-rupee-126051301012_1.html" },
  { pillar: "Banking", type: "Media", title: "India's goods trade deficit October 2025 — gold imports surge 200% YoY (CNBC, 18 November 2025)", url: "https://www.cnbc.com/2025/11/18/indias-goods-trade-deficit-october-record-high-tariffs-gold-imports-.html" },
  { pillar: "Banking", type: "Media", district: "Surat", title: "Job losses, factory closures pushing Surat's diamond workers to the edge — 71 suicides in 18 months (The Print, 25 November 2024)", url: "https://theprint.in/india/job-losses-factory-closures-pushing-surats-diamond-workers-to-the-edge-71-suicides-in-18-months/2339805/" },
  { pillar: "Banking", type: "Media", district: "Surat", title: "US tariffs ruin education dreams for children in India's diamond hub (Al Jazeera, 9 December 2025)", url: "https://www.aljazeera.com/economy/2025/12/9/us-tariffs-ruin-education-dreams-for-children-in-indias-diamond-hub" },
  { pillar: "Banking", type: "Media", title: "SBI's total exposure to Adani Group at ₹27,000 crore (Business Today, 3 February 2023)", url: "https://www.businesstoday.in/latest/corporate/story/adani-hindenburg-row-sbis-total-exposure-to-adani-group-is-09-of-overall-loan-book-says-chairman-368869-2023-02-03" },
  { pillar: "Banking", type: "Media", title: "India's LIC and public sector banks are reassessing Adani stakes (Quartz India, 9 February 2023)", url: "https://qz.com/indias-lic-and-public-banks-reassess-adani-stakes-1850052061" },
  { pillar: "Banking", type: "Media", title: "To pacify stakeholders, top banks declare their exposure to Adani Group (Business Standard, 7 February 2023)", url: "https://www.business-standard.com/amp/article/companies/to-pacify-stakeholders-top-banks-declare-their-exposure-to-adani-group-123020700508_1.html" },
  { pillar: "Banking", type: "Media", title: "Timeline of crises that brought India's $370 billion shadow banking sector to its knees (Quartz India, 4 June 2020)", url: "https://qz.com/india/1860466/how-indias-nbfc-crisis-deepened-from-ilfs-defaults-to-covid-19" },
  { pillar: "Banking", type: "Media", title: "The NBFC Real Estate Crisis After IL&FS Defaults (Moneylife, 16 September 2019)", url: "https://www.moneylife.in/article/the-nbfc-real-estate-crisis-after-ilfs-defaults-what-why-and-what-next/55845.html" },

  // ── AGRICULTURE ADDENDUM (May 2026) ──
  // Theme: Groundwater overdraft / falling water tables (North Gujarat)
  { pillar: "Agriculture", type: "Media", district: "Banaskantha", title: "India's groundwater quality report underscores systemic inertia (Down To Earth, 8 Jan 2025)", url: "https://www.downtoearth.org.in/water/indias-groundwater-quality-report-underscores-systemic-inertia-and-fragmented-efforts-undermining-water-security" },
  { pillar: "Agriculture", type: "Academic", district: "Banaskantha", title: "Groundwater 2024: Top Ten stories on alarming depletion — SANDRP (18 Feb 2025)", url: "https://sandrp.in/2025/02/18/groundwater-2024-top-ten-stories-on-how-depletion-continues-alarmingly/" },
  { pillar: "Agriculture", type: "Academic", district: "Mehsana", title: "Depleting Groundwater & Fluoride in Mehsana villages — HIC-HLRN (Nov 2022)", url: "https://hic-net.org/depleting-groundwater-levels-and-increasing-fluoride-concentration-in-villages-of-mehsana-district-gujarat-india-cost-to-economy-and-health/" },
  { pillar: "Agriculture", type: "Academic", district: "Mehsana", title: "Groundwater: Rising Depletion and Contamination in 2025 — SANDRP (25 Mar 2026)", url: "https://sandrp.in/2026/03/25/groundwater-2025-depletion-and-contamination-rising/" },
  // Theme: BT cotton / Pink bollworm crisis
  { pillar: "Agriculture", type: "Academic", district: "Bhavnagar", title: "Widespread distribution of pink bollworm in Bt cotton regions of India — Crop Protection / ScienceDirect (Apr 2025)", url: "https://www.sciencedirect.com/science/article/abs/pii/S0261219425001498" },
  { pillar: "Agriculture", type: "Media", district: "Amreli", title: "Cotton production hit by rains, pink bollworm infestation — AgroPages/Reuters (30 Sept 2020)", url: "https://news.agropages.com/News/NewsDetail---37209.htm" },
  { pillar: "Agriculture", type: "Media", district: "Devbhoomi Dwarka", title: "Gujarat farmer distress: Where cotton clouds hang heavy — The Hindu / VisionIAS (6 Dec 2025)", url: "https://visionias.in/current-affairs/upsc-daily-news-summary/article/2025-12-06/the-hindu/geography/gujarat-farmer-distress-where-cotton-clouds-hang-heavy" },
  { pillar: "Agriculture", type: "Media", district: "Devbhoomi Dwarka", title: "Gujarat's farmers erupt in protest after suicide over crop loss, debt — The Federal (4 Nov 2025)", url: "https://thefederal.com/category/states/west/gujarat/gujarats-farmers-erupt-in-protest-after-suicide-over-crop-loss-debt-214551" },
  // Theme: Monoculture risk (castor / cumin / groundnut)
  { pillar: "Agriculture", type: "Media", district: "Kachchh", title: "As castor fields expand, traditional mixed farming shrinks — Mongabay India (29 Apr 2025)", url: "https://india.mongabay.com/2025/04/as-castor-fields-expand-a-traditional-mixed-farming-system-shrinks/" },
  { pillar: "Agriculture", type: "Industry", district: "Mehsana", title: "Castor Oil Market — Balancing Demand with Supply Constraints — ChemAnalyst (15 Nov 2024)", url: "https://www.chemanalyst.com/NewsAndDeals/NewsDetails/castor-oil-market-trends-balancing-demand-with-supply-constraints-anticipates-31330" },
  { pillar: "Agriculture", type: "Media", district: "Junagadh", title: "Gujarat groundnut crop steady as expansion meets adverse weather — Agro Spectrum (13 Oct 2025)", url: "https://agrospectrumindia.com/2025/10/13/gujarat-groundnut-crop-steady-as-expansion-meets-adverse-weather.html" },
  { pillar: "Agriculture", type: "Media", district: "Mehsana", title: "Jeera Prices Fall as Daily Arrivals Rise to 15,000 Bags in Unjha — Investing.com / Kedia (4 Dec 2024)", url: "https://in.investing.com/news/commodities-news/jeera-prices-fall-as-daily-arrivals-rise-to-15000-bags-in-unjha-4504749" },
  // Theme: Farmer suicides
  { pillar: "Agriculture", type: "Media", title: "Farmer suicides in India: What 28 years of data shows — Down To Earth (2 Oct 2025)", url: "https://www.downtoearth.org.in/agriculture/farmer-suicides-in-india-what-28-years-of-data-shows" },
  // Theme: MSP / crop insurance gaps
  { pillar: "Agriculture", type: "Academic", title: "Gujarat exits PM crop insurance scheme citing premium burden — CFA (4 Sept 2020)", url: "https://www.cenfa.org/gujarat-too-exits-pm-crop-insurance-scheme-citing-premium-burden/" },
  { pillar: "Agriculture", type: "Media", title: "When Crop Insurance Fails Farmers: PMFBY Needs Urgent Reform — Down To Earth (22 May 2025)", url: "https://www.downtoearth.org.in/agriculture/when-crop-insurance-fails-farmers-pmfby-needs-a-rethink" },
  // Theme: Climate stress / salinity ingress
  { pillar: "Agriculture", type: "Media", district: "Bhavnagar", title: "Gujarat coastline shrinks: 765 km eroded, salinity puts farmland at risk — Gujarat Samachar (9 Jun 2025)", url: "https://english.gujaratsamachar.com/news/gujarat/gujarat-coastline-shrinks-765-km-eroded-salinity-puts-farmland-at-risk" },
  { pillar: "Agriculture", type: "Media", district: "Kachchh", title: "Gujarat: Climate hotspot in Kutch — cyclone warnings, heatwaves — ICSF (11 Mar 2025)", url: "https://icsf.net/newss/gujarat-climate-hotspot-in-kutch-morecyclone-warnings-heatwaves-upend-peoples-lives/" },
  { pillar: "Agriculture", type: "Industry", district: "Amreli", title: "Coast to coast — Coastal Salinity Prevention Cell — Tata Trusts Horizons (Aug 2024)", url: "https://horizons.tatatrusts.org/2024/august/tata-trusts-coastal-salinity-prevention-cell.html" },
  // Theme: Narmada tail-end deprivation
  { pillar: "Agriculture", type: "Media", district: "Kachchh", title: "Kutch, Saurashtra thirsting 71 years after Narmada canal launch — The Federal (12 Apr 2024)", url: "https://thefederal.com/states/west/gujarat/kutch-saurashtra-thirsting-for-water-71-years-after-launch-of-narmada-canal" },
  { pillar: "Agriculture", type: "Media", district: "Narmada", title: "Huge allocation for Statue of Unity tourism, none for compensation — The Federal (4 Feb 2024)", url: "https://thefederal.com/category/states/west/gujarat/huge-allocation-for-statue-of-unity-tourism-in-gujarat-budget-none-for-compensation-109203" },
  // Theme: Bonus
  { pillar: "Agriculture", type: "Media", district: "Kachchh", title: "Drought-hit Gujarat has water for factories, but no water for Kutch farmers — Business Standard (16 Apr 2019)", url: "https://www.business-standard.com/amp/article/current-affairs/drought-hit-gujarat-has-water-for-factories-but-no-water-for-kutch-farmers-119041600121_1.html" },
  { pillar: "Agriculture", type: "Media", district: "Anand", title: "Behind Amul price revisions, a battle against soaring costs in Gujarat's dairies — The Print (23 Apr 2023)", url: "https://theprint.in/india/no-other-option-behind-amul-price-revisions-a-battle-against-soaring-costs-in-gujarats-dairies/1512061/" },
  { pillar: "Agriculture", type: "Media", district: "Bhavnagar", title: "Mahuva onion farmers lose Rs 50,000 per acre as prices crash — ETV Bharat (12 Feb 2023)", url: "https://www.etvbharat.com/english/bharat/gujarat-onion-farmers-cry-foul-as-prices-crash-lose-rs-50k-per-acre/na20230212091332076076026" },
  { pillar: "Agriculture", type: "Media", title: "Pulses of Change: NCCF contract farming to reduce import dependency — Swarajya (8 Sep 2024)", url: "https://swarajymag.com/economy/pulses-of-change-3-years-after-repeal-of-farm-laws-centre-embraces-contract-farming-to-reduce-import-dependency" },
  { pillar: "Agriculture", type: "Govt", title: "Appropriation Accounts 2023-24 — Govt of Gujarat (CAG, 28 Feb 2025)", url: "https://cag.gov.in/uploads/state_accounts_report/account-report-Appropriation-Accounts-2023-24-067ebc9f9d38c57-06861389.pdf" },

  // ── GREEN TECH ADDENDUM (May 2026) ──
  // Theme: Khavda / Kutch RE Park ecology and land politics
  { pillar: "Green Tech", type: "Media", district: "Kutch", title: "Mega RE park in Kutch could have adverse environmental impact — Mongabay India (15 Sep 2020)", url: "https://india.mongabay.com/2020/09/mega-renewable-energy-park-in-kutch-could-have-potentially-adverse-environmental-impact/" },
  { pillar: "Green Tech", type: "Media", district: "Kutch", title: "How Adani bagged an energy project on India-Pak border, defence rules relaxed — Scroll.in (1 Aug 2025)", url: "https://scroll.in/article/1076846/how-adani-bagged-an-energy-project-on-india-pak-border-for-which-defence-rules-were-relaxed" },
  { pillar: "Green Tech", type: "Media", district: "Kutch", title: "Solar Power Park at Khavda submerged, works suspended — DeshGujarat (12 Sep 2025)", url: "https://deshgujarat.com/2025/09/12/solar-power-park-at-khavda-in-rann-of-kutch-submerged-works-suspended/" },
  { pillar: "Green Tech", type: "Media", district: "Kutch", title: "While Banni readies for cheetah, native pastoralists demand land rights — Mongabay India (9 Jan 2024)", url: "https://india.mongabay.com/2024/01/while-banni-readies-for-cheetah-native-pastoralists-demand-land-rights/" },
  { pillar: "Green Tech", type: "Media", district: "Kutch", title: "On the path to reclaiming their land: Banni and its Maldharis — Mongabay India (17 Jun 2021)", url: "https://india.mongabay.com/2021/06/on-the-path-to-reclaiming-their-land-the-story-of-banni-and-its-maldharis/" },
  { pillar: "Green Tech", type: "Media", district: "Kutch", title: "Prosopis juliflora is disrupting the nomadic way of life — Scroll.in (22 Apr 2020)", url: "https://scroll.in/article/947957/in-this-gujarat-grassland-a-plant-introduced-in-the-1950s-is-disrupting-the-nomadic-way-of-life" },
  // Theme: Bird mortality, transmission lines, GIB extinction
  { pillar: "Green Tech", type: "Legal", district: "Kutch", title: "NGT wants underground power lines, bird diverters at GIB habitat — Down to Earth (25 Dec 2020)", url: "https://www.downtoearth.org.in/news/wildlife-&-biodiversity/amp/ngt-wants-underground-power-lines-bird-diverters-at-great-indian-bustard-habitat-74759" },
  { pillar: "Green Tech", type: "Media", district: "Kutch", title: "SC ruling on power lines is lifeline for Critically Endangered bustard — BirdLife International (14 Jul 2021)", url: "https://www.birdlife.org/news/2021/07/14/new-india-powerline-ruling-is-lifeline-for-critically-endangered-bustard/" },
  { pillar: "Green Tech", type: "Academic", district: "Kutch", title: "High bird mortality due to power lines in tropical desert — Biological Conservation / WII (Aug 2021)", url: "https://www.sciencedirect.com/science/article/abs/pii/S0006320721003141" },
  { pillar: "Green Tech", type: "Media", district: "Kutch", title: "Solar Projects stranded awaiting SC order on Great Indian Bustard — Mercom India (19 Mar 2024)", url: "https://www.mercomindia.com/solar-projects-stranded-great-indian-bustard" },
  // Theme: Manufacturing dependence (polysilicon / wafers / ingots)
  { pillar: "Green Tech", type: "Media", district: "Kutch", title: "India wants to build a solar manufacturing ecosystem to rival China — Climate Home (Oct 2024)", url: "https://cleanenergyfrontier.climatechangenews.com/india-wants-own-solar-industry-break-reliance-china/" },
  { pillar: "Green Tech", type: "Academic", district: "Kutch", title: "India: The Rising Power in Global Solar PV Supply Chains — ORF America (Nov 2024)", url: "https://orfamerica.org/newresearch/solar-rising-india" },
  { pillar: "Green Tech", type: "Media", district: "Kutch", title: "Adani begins commercial output of wafers, ingots for solar — The Print (12 Feb 2025)", url: "https://theprint.in/india/adani-begins-commercial-output-of-wafers-ingots-for-solar-power/2031480/" },
  { pillar: "Green Tech", type: "Media", district: "Kutch", title: "Indian imports of monocrystalline silicon wafers from China surged 91% — Communications Today (Apr 2024)", url: "https://www.communicationstoday.co.in/indian-imports-of-monocrystalline-silicon-wafers-from-china-have-surged-why/" },
  // Theme: Battery cells / lithium
  { pillar: "Green Tech", type: "Industry", district: "Ahmedabad", title: "Local sourcing of battery cells key to competitiveness — Tata Motors / Autocar Professional (21 Jan 2025)", url: "https://www.autocarpro.in/news/local-sourcing-of-battery-cells-key-to-competitiveness-in-long-term-tata-motors-124592" },
  { pillar: "Green Tech", type: "Industry", district: "Ahmedabad", title: "Tata to start construction of 20 GWh lithium battery plant in Gujarat — pv magazine India (11 Jan 2024)", url: "https://www.pv-magazine-india.com/2024/01/11/tata-to-start-construction-of-20-gwh-lithium-battery-plant-in-gujarat/" },
  { pillar: "Green Tech", type: "Media", district: "Ahmedabad", title: "PM Modi Flags Off Maruti Suzuki eVitara, Inaugurates EV Battery Plant Gujarat — Republic World (Aug 2025)", url: "https://www.republicworld.com/automobile/big-push-for-make-in-india-pm-modi-flags-off-maruti-suzuki-evitara-inaugurates-ev-battery-plant-in-gujarat" },
  { pillar: "Green Tech", type: "Media", title: "India's lithium mining plans in Kashmir halted, no bidders — Rest of World (Jul 2024)", url: "https://restofworld.org/2024/india-lithium-reserves-halted/" },
  { pillar: "Green Tech", type: "Media", title: "J&K's 5.9 mn tonne lithium reserve to be re-explored after failed auction — Business Standard (17 Oct 2024)", url: "https://www.business-standard.com/industry/news/j-k-s-5-9-mn-tonne-lithium-reserve-to-be-re-explored-after-failed-auction-124101700933_1.html" },
  // Theme: Grid bottlenecks / curtailment
  { pillar: "Green Tech", type: "Media", district: "Kutch", title: "Curtailment, transmission bottlenecks dominate power transition outlook — Down to Earth (Feb 2026)", url: "https://www.downtoearth.org.in/energy/curtailment-transmission-bottlenecks-and-storage-gaps-dominate-indias-power-transition-outlook" },
  { pillar: "Green Tech", type: "Media", district: "Kutch", title: "Gridlock On The Green Path: Transmission Delays Trigger Massive Power Waste — The Core (Feb 2026)", url: "https://www.thecore.in/economy/india-solar-energy-renewable-net-zero-rajasthan-gujarat-859376" },
  { pillar: "Green Tech", type: "Industry", district: "Kutch", title: "35 GW RE Capacity Curtailment Risk in FY27: CRISIL — SaurEnergy (Mar 2026)", url: "https://www.saurenergy.com/solar-energy-news/a-curtailment-risk-35-gw-re-capacity-due-to-grid-issues-in-fy27-crisil-11220048" },
  // Theme: Carbon credit integrity & Adani solar bribery
  { pillar: "Green Tech", type: "Media", title: "Nine projects in India produced 'problematic' carbon credits in 2024 — Mongabay India (Jul 2025)", url: "https://india.mongabay.com/2025/07/nine-projects-in-india-produced-problematic-carbon-credits-in-2024-says-report/" },
  { pillar: "Green Tech", type: "Media", district: "Ahmedabad", title: "Adani founder indicted in US over solar contract bribes — DCD (21 Nov 2024)", url: "https://www.datacenterdynamics.com/en/news/adani-founder-indicted-in-the-us-over-solar-contract-bribes/" },
  // Theme: Just transition gap
  { pillar: "Green Tech", type: "Media", district: "Bharuch", title: "Invisible fallout of thermal power plant closures on local economies — Mongabay India (Oct 2025)", url: "https://india.mongabay.com/2025/10/the-invisible-fallout-of-thermal-power-plant-closures-on-local-economies/" },
  { pillar: "Green Tech", type: "Academic", title: "How to structure thermal decommissioning in India — CEEW (2024)", url: "https://www.ceew.in/gfc/quick-reads/analysis/how-to-structure-thermal-decommissioning-in-india" },
  // Theme: Rare earths & permanent magnets
  { pillar: "Green Tech", type: "Media", title: "India's Strategic Shift: Reducing Reliance on China for Rare Earth Elements — Open The Magazine (Jun 2025)", url: "https://openthemagazine.com/business/indias-strategic-shift-reducing-reliance-on-china-for-rare-earth-elements" },

  // ── CHEMICAL GOVERNANCE ADDENDUM (May 2026) ──
  // Theme: CETP / NGT enforcement
  { pillar: "Chemical Governance", type: "Media", district: "Bharuch", title: "Daily Court Digest: NGT Orders on Oil Drilling, Mine Effluents, Groundwater — Down To Earth (12 May 2026)", url: "https://www.downtoearth.org.in/environment/daily-court-digest-major-environment-orders-may-12-2026" },
  { pillar: "Chemical Governance", type: "Govt", district: "Valsad", title: "CPCB Joint Inspection Report on Vapi CETP (NGT OA 95/2018) — CPCB (Oct 2022)", url: "https://cpcb.nic.in/NGT/14-REP-JOINTINSPECT-CETP-VAPI.pdf" },
  { pillar: "Chemical Governance", type: "Legal", district: "Valsad", title: "Aryavart Foundation v. Vapi Green Enviro — Full NGT judgment (11 Jan 2019) — CaseMine", url: "https://www.casemine.com/judgement/in/5d89c08e714d583c03448e48" },
  { pillar: "Chemical Governance", type: "Legal", title: "CEPI Score NGT Order, 29 Aug 2022 (full text) — NGT/Down To Earth CDN", url: "https://cdn.downtoearth.org.in/iep/CEPI-score-NGT-order-Aug29-2022.pdf" },
  // Theme: CEPI scores
  { pillar: "Chemical Governance", type: "Media", district: "Valsad", title: "Vapi tops list of critically polluted areas — Down To Earth (22 Dec 2009)", url: "https://www.downtoearth.org.in/environment/vapi-tops-list-of-critically-polluted-areas--38260" },
  { pillar: "Chemical Governance", type: "Media", district: "Bharuch", title: "New units banned in 8 industrial areas; ban lifted from 10 others — Down To Earth (15 Mar 2014)", url: "https://www.downtoearth.org.in/news/new-units-banned-in-8-industrial-areas-ban-lifted-from-10-others-42233" },
  { pillar: "Chemical Governance", type: "Academic", district: "Vadodara", title: "UP, Maharashtra have most critically polluted industrial regions: CSE — Down To Earth (28 Jul 2021)", url: "https://www.downtoearth.org.in/pollution/up-maharashtra-have-most-critically-polluted-industrial-regions-cse-76201" },
  // Theme: Damanganga / Kolak fisherfolk
  { pillar: "Chemical Governance", type: "Media", district: "Valsad", title: "Kolak fisherfolk in distress as Vapi chemicals destroy river catch — Down To Earth (26 Apr 2023)", url: "https://www.downtoearth.org.in/pollution/critically-polluted-kolak-fisherfolk-in-distress-as-chemicals-from-vapi-industries-destroy-river-catch-89560" },
  // Theme: Worker deaths / chemical accidents
  { pillar: "Chemical Governance", type: "Media", district: "Surat", title: "6 Dead, 22 Hospitalised After Inhaling Toxic Fumes in Surat's GIDC — India.com (6 Jan 2022)", url: "https://www.india.com/gujarat/surat-chemical-gas-leak-incident-sachin-gidc-area-gujarat-tanker-gas-leak-several-dead-injured-hospitalised-5172624/" },
  { pillar: "Chemical Governance", type: "Media", district: "Surat", title: "GPCB closure notice to Anupam Rasayan after 5 laborer deaths — DeshGujarat (23 Sep 2022)", url: "https://deshgujarat.com/2022/09/23/gpcb-issues-closure-notice-to-anupam-rasayans-surat-unit-after-deaths-of-5-laborers/" },
  { pillar: "Chemical Governance", type: "Media", district: "Bharuch", title: "4 die after inhaling toxic gas at chemical unit in Gujarat's Bharuch — Business Standard (29 Dec 2024)", url: "https://www.business-standard.com/india-news/4-die-after-inhaling-toxic-gas-at-gujarat-fluorochemicals-dahej-124122900497_1.html" },
  // Theme: GPCB regulatory capacity
  { pillar: "Chemical Governance", type: "Media", title: "Over 30% Posts Vacant In CPCB, More Than Half In State Pollution Boards — ETV Bharat (20 Mar 2025)", url: "https://www.etvbharat.com/en/bharat/over-30-percent-posts-vacant-in-cpcb-more-than-half-positions-empty-in-state-pollution-boards-enn26032004497" },
  { pillar: "Chemical Governance", type: "Media", title: "46% posts in pollution boards vacant, states miss NGT deadline — Carbon Copy (Feb 2025)", url: "https://carboncopy.info/46-posts-in-pollution-boards-vacant-states-and-uts-miss-ngt-deadline-to-fill-these/" },
  // Theme: Pharma effluent / AMR
  { pillar: "Chemical Governance", type: "Academic", district: "Bharuch", title: "Limiting antibiotic manufacturing discharge in Indian wastewater — European Pharmaceutical Review (Jan 2020)", url: "https://www.europeanpharmaceuticalreview.com/article/115074/limiting-antibiotic-manufacturing-discharge-in-indian-wastewater/" },
  // Theme: Heavy metals / soil contamination
  { pillar: "Chemical Governance", type: "Academic", district: "Bharuch", title: "Heavy metal contamination in soil & leafy vegetables in Bharuch industrial belt — Vegetos/Springer (2024)", url: "https://link.springer.com/article/10.1007/s42535-024-01049-1" },
  { pillar: "Chemical Governance", type: "Academic", district: "Valsad", title: "Effects of industrial pollution on respiratory morbidity (Vapi study) — IJOEM/PubMed (2008)", url: "https://pubmed.ncbi.nlm.nih.gov/18628080/" },
  // Theme: Bhopal successor liability
  { pillar: "Chemical Governance", type: "Media", title: "Bhopal Gas Tragedy: Toxic Waste Finally Removed After 40 Years — Down To Earth (2 Jan 2025)", url: "https://www.downtoearth.org.in/environment/toxic-waste-leaves-bhopal-gas-tragedy-site-after-40-years" },
  // Theme: Journalist harassment / press freedom
  { pillar: "Chemical Governance", type: "Media", district: "Ahmedabad", title: "Journalist Mahesh Langa Booked Again by Gujarat Police — The Wire (28 Oct 2024)", url: "https://m.thewire.in/article/media/mahesh-langa-booked-again-gujarat-police" },
]

// Derived list of every district that has at least one tagged source — used for filter pills + the "By District" view.
districtList = [...new Set(allSources.filter(s => s.district).map(s => s.district))].sort()
