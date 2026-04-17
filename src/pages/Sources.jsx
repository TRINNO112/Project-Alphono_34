import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Database, ExternalLink, Search, Filter, Ship, Zap, Droplets, Users, TrendingUp, Factory, GraduationCap, TreePine, ShieldAlert, Wheat, Cpu, FlaskConical, Cable } from 'lucide-react'
import SEO from '../components/SEO'

const pillarMeta = {
  Infrastructure: { icon: Ship, color: 'text-blue-500', count: 22 },
  Energy: { icon: Zap, color: 'text-yellow-500', count: 18 },
  Water: { icon: Droplets, color: 'text-teal-500', count: 18 },
  Labor: { icon: Users, color: 'text-purple-500', count: 22 },
  Economics: { icon: TrendingUp, color: 'text-green-500', count: 27 },
  Materials: { icon: Factory, color: 'text-gray-500', count: 23 },
  Education: { icon: GraduationCap, color: 'text-pink-500', count: 20 },
  Environment: { icon: TreePine, color: 'text-emerald-500', count: 22 },
  'Migrant Discrimination': { icon: ShieldAlert, color: 'text-red-500', count: 33 },
  'Agriculture': { icon: Wheat, color: 'text-green-700', count: 6 },
  'Green Tech': { icon: Cpu, color: 'text-cyan-500', count: 7 },
  'Chemical Governance': { icon: FlaskConical, color: 'text-orange-500', count: 8 },
  'Digital Sovereignty': { icon: Cable, color: 'text-blue-500', count: 15 },
}

const allSources = [
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
]

const typeColors = {
  Govt: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20',
  Media: 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/20',
  Academic: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/20',
  Industry: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',
  Legal: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20',
}

const allTypes = ['All', 'Govt', 'Media', 'Academic', 'Industry', 'Legal']
const allPillars = ['All', ...Object.keys(pillarMeta)]

export default function Sources() {
  const [typeFilter, setTypeFilter] = useState('All')
  const [pillarFilter, setPillarFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    return allSources.filter(s => {
      if (typeFilter !== 'All' && s.type !== typeFilter) return false
      if (pillarFilter !== 'All' && s.pillar !== pillarFilter) return false
      if (searchQuery && !s.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
      return true
    })
  }, [typeFilter, pillarFilter, searchQuery])

  // Group by pillar for display
  const grouped = useMemo(() => {
    const groups = {}
    for (const s of filtered) {
      if (!groups[s.pillar]) groups[s.pillar] = []
      groups[s.pillar].push(s)
    }
    return groups
  }, [filtered])

  const pillarOrder = Object.keys(pillarMeta)

  return (
    <main className="w-full min-h-screen bg-gray-50 dark:bg-dark-bg font-sans pt-28 pb-32">
      <SEO
        title="Source Database"
        description="Complete pillar-wise source library with 165+ citations used across all analysis pillars in Project Alphono 34."
        path="/sources"
      />

      <div className="max-w-4xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 text-crimson text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Database className="w-4 h-4" />
            <span>Source Library</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-3 tracking-tight leading-tight">
            Source Database
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed">
            {allSources.length} citations across {Object.keys(pillarMeta).length} pillars — every claim, sourced and linked.
          </p>
          <div className="mt-6 h-px bg-gray-200 dark:bg-gray-800" />
        </motion.div>

        {/* Filters */}
        <div className="sticky top-16 z-20 bg-gray-50/90 dark:bg-dark-bg/90 backdrop-blur-xl pt-4 pb-4 -mx-5 px-5 border-b border-gray-200/50 dark:border-gray-800/50 mb-8 space-y-3">

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search sources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-gray-800 rounded-xl text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 transition"
            />
          </div>

          {/* Type filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            {allTypes.map(t => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all ${
                  typeFilter === t
                    ? 'bg-crimson/10 border-crimson/30 text-crimson'
                    : 'bg-white dark:bg-white/[0.03] border-gray-200 dark:border-gray-800 text-gray-500 hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Pillar filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider shrink-0">Pillar:</span>
            <div className="flex gap-1.5 flex-wrap">
              {allPillars.map(p => {
                const meta = pillarMeta[p]
                const PIcon = meta?.icon
                return (
                  <button
                    key={p}
                    onClick={() => setPillarFilter(p)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg border transition-all ${
                      pillarFilter === p
                        ? 'bg-crimson/10 border-crimson/30 text-crimson'
                        : 'bg-white dark:bg-white/[0.03] border-gray-200 dark:border-gray-800 text-gray-500 hover:border-gray-300 dark:hover:border-gray-700'
                    }`}
                  >
                    {PIcon && <PIcon className="w-3 h-3" />}
                    {p === 'Migrant Discrimination' ? 'Migrants' : p}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-6 tracking-wider">
          {filtered.length} {filtered.length === 1 ? 'SOURCE' : 'SOURCES'} FOUND
        </p>

        {/* Source list grouped by pillar */}
        <div className="space-y-10">
          {pillarOrder.filter(p => grouped[p]).map(pillar => {
            const meta = pillarMeta[pillar]
            const PIcon = meta.icon
            return (
              <section key={pillar}>
                <div className="flex items-center gap-3 mb-4">
                  <PIcon className={`w-5 h-5 ${meta.color}`} />
                  <h2 className="text-lg font-serif font-bold text-gray-900 dark:text-white">{pillar}</h2>
                  <span className="text-xs font-mono text-gray-400 dark:text-gray-600">{grouped[pillar].length}</span>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
                </div>

                <div className="space-y-2">
                  {grouped[pillar].map((source, i) => (
                    <a
                      key={i}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 p-3.5 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-gray-800 hover:bg-white dark:hover:bg-white/[0.02] transition-all"
                    >
                      <span className="text-[10px] font-mono text-gray-400 dark:text-gray-600 mt-1 w-5 text-right shrink-0">
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-crimson transition-colors leading-snug">
                          {source.title}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-600 mt-1 truncate">
                          {source.url.replace(/^https?:\/\//, '').split('/')[0]}
                        </p>
                      </div>
                      <span className={`shrink-0 px-2 py-0.5 text-[10px] font-bold rounded border ${typeColors[source.type]}`}>
                        {source.type}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-700 group-hover:text-crimson shrink-0 mt-0.5 transition-colors" />
                    </a>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 dark:text-gray-600">
            <Database className="w-8 h-8 mx-auto mb-3 opacity-50" />
            <p className="text-sm">No sources match your filters.</p>
          </div>
        )}

      </div>
    </main>
  )
}
