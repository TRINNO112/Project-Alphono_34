import { motion } from 'framer-motion'
import { Ship, AlertTriangle, Hammer, CheckCircle, Wifi, Train, Plane } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { CounterArgument } from '../components/CounterArgument'
import { ComparisonTable } from '../components/ComparisonTable'

const sources = [
  { title: "Adani's Mundra Port Makes History, Becomes First In India To Handle 200 MMT Cargo", publication: "Marine Insight, 2025", url: "https://www.marineinsight.com/shipping-news/adanis-mundra-port-makes-history-becomes-first-in-india-to-handle-200-mmt-cargo/" },
  { title: "APSEZ Handles All-Time High 450MMT Cargo Volume", publication: "Republic World, 2025", url: "https://www.republicworld.com/initiatives/apsez-handles-all-time-high-450mmt-cargo-volume-mundra-first-indian-port-ever-to-cross-200-mmt-annual-cargo-volume" },
  { title: "Adani gets environmental nod for Rs 45,000 cr Mundra port expansion", publication: "Business Standard, 2024", url: "https://www.business-standard.com/companies/news/adani-gets-environmental-nod-for-rs-45000-cr-mundra-port-expansion-124061700305_1.html" },
  { title: "Why completion of Delhi-Mumbai Expressway now delayed to 2027-28?", publication: "DeshGujarat, Dec 2025", url: "https://deshgujarat.com/2025/12/18/why-completion-of-delhi-mumbai-expressway-now-delayed-to-2027-28/" },
  { title: "Delhi-Mumbai Expressway: Latest package-wise update on Gujarat section", publication: "DeshGujarat, Jan 2026", url: "https://deshgujarat.com/2026/01/26/delhi-mumbai-expressway-latest-package-wise-update-on-gujarat-section/" },
  { title: "Delhi Mumbai Expressway completion pushed to 2027-28 as delays hit Gujarat stretches", publication: "BusinessToday, Dec 2025", url: "https://www.businesstoday.in/india/story/delhi-mumbai-expressway-completion-pushed-to-2027-28-as-delays-hit-gujarat-stretches-507463-2025-12-19" },
  { title: "Delhi-Mumbai Expressway Big Update: India's biggest highway project delayed", publication: "India.com, 2025", url: "https://www.india.com/news/india/delhi-mumbai-expressway-deadline-delay-fy-2027-28-gujarat-stretch-vadodara-virar-section-hold-up-nitin-gadkari-lok-sabha-nhai-india-mega-highway-project-latest-update-8304593/" },
  { title: "Mundra Port — Wikipedia", publication: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mundra_Port" },
  { title: "Four proposals under review for cable landing stations along Gujarat coast: Report", publication: "DeshGujarat, Jun 2025", url: "https://deshgujarat.com/2025/06/30/four-proposals-under-review-for-cable-landing-stations-along-gujarat-coast-report/" },
  { title: "India Must Build 10x More Cable Landing Stations To Compete In Global Data Race: TRAI Chief", publication: "Outlook Business, 2025", url: "https://www.outlookbusiness.com/start-up/india-must-build-10x-more-cable-landing-stations-to-compete-in-global-data-race-trai-chief" },
  { title: "India's Cheap Internet Runs Through the World's Most Dangerous Waters", publication: "BW Businessworld, 2026", url: "https://www.businessworld.in/article/india-cheap-internet-undersea-cable-vulnerability-war-zones-2026-598929" },
  { title: "Gujarat Gears Up for Digital Growth with $30m CtrlS Data Center", publication: "BlackRidge Research, 2025", url: "https://www.blackridgeresearch.com/news-releases/ctrls-data-center-breaks-ground-for-a-usd-30-million-data-center-facility-in-gujarat-india" },
  { title: "Deendayal Port Authority Annual Report 2024-25: Cargo handled 147.73 MMT", publication: "DPA Kandla, 2025", url: "https://www.deendayalport.gov.in/" },
  { title: "Western Dedicated Freight Corridor: 1,506 km operational status", publication: "DFCCIL, 2026", url: "https://dfccil.com/western-dfc" },
  { title: "Gujarat Ports handled 604 MMT cargo in FY25 — 40% of India's total", publication: "Gujarat Maritime Board, 2025", url: "https://gmbports.org/" },
  { title: "Ahmedabad Airport Terminal 2 inaugurated — Rs 1,450 crore investment", publication: "Business Standard, 2025", url: "https://www.business-standard.com/companies/news/ahmedabad-airport-terminal-2-inaugurated-125031000445_1.html" },
  { title: "Logistics Performance Index 2023: Gujarat ranked 2nd among states", publication: "DPIIT / Ministry of Commerce, 2023", url: "https://dpiit.gov.in/logistics-performance-index" },
  { title: "National Highway Development: Gujarat has 8,362 km of NH — 2nd highest road density", publication: "Ministry of Road Transport, 2025", url: "https://morth.nic.in/" },
]

export default function Infrastructure() {
  return (
    <main className="w-full max-w-5xl mx-auto px-6 pt-32 pb-32 space-y-24">
      {/* Detail Page Hero */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-4 text-crimson font-semibold tracking-widest text-sm mb-4">
            <span>PILLAR 01</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Infrastructure & <span className="italic text-crimson">Logistics</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Handling nearly <strong className="font-semibold text-gray-900 dark:text-white">40% of India's total cargo volume</strong>, Gujarat operates as the nation's primary maritime gateway. However, its logistical backbone exhibits extreme corporate concentration and severe vulnerability bottlenecks.
          </p>
        </motion.div>
      </section>

      {/* Main Structural Breakdown */}
      <div className="space-y-20">

        {/* Adani & DP World */}
        <Section icon={<Ship className="w-8 h-8 text-blue-600 dark:text-blue-400" />} title="Corporate Centralization & Monopolies">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Adani Ports Dominance">
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Mundra Port became the first Indian port to handle over <strong className="text-gray-900 dark:text-white">200 Million Metric Tonnes (MMT)</strong> of cargo in FY25.<Ref n={1} /> In FY26, APSEZ crossed a new milestone — <strong className="text-gray-900 dark:text-white">500.8 MMT total cargo across all ports</strong> (+11% YoY), with a record 46 MMT in March 2026 alone. APSEZ now commands approximately <strong className="text-gray-900 dark:text-white">28% of India's total port volumes</strong> and 45.8% of all-India container market share.<Ref n={2} /> Current capacity stands at <strong>633 MTPA</strong> across 15 ports, with a target of 1 billion tonnes by 2030.<Ref n={3} />
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> 633 MTPA current capacity — largest in India<Ref n={8} /></li>
                <li className="flex items-center gap-2 text-red-700 dark:text-red-400"><AlertTriangle className="w-5 h-5 text-red-500" /> Concession extended from 30 to 75 years without competitive bidding</li>
                <li className="flex items-center gap-2 text-red-700 dark:text-red-400"><AlertTriangle className="w-5 h-5 text-red-500" /> Extreme single-entity centralization risk</li>
              </ul>
            </DataCard>

            <DataCard title="DP World Rail Oligopoly">
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                A massive $207M investment connects Gujarat to eastern markets, utilizing over 100 container rakes. APSEZ's logistics rail volume reached 0.64 Mn TEUs (+8% YoY) in FY25.<Ref n={2} /> Mundra Port Railway Services operated a record 20,578 trains in FY25.<Ref n={1} /> The rail inland logistics is disproportionately reliant on singular massive external corporations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> 100+ owned container rakes</li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> 7 inland terminals</li>
              </ul>
            </DataCard>
          </div>

          <PillarChart
            type="bar"
            data={[
              { name: 'FY21', value: 130 },
              { name: 'FY22', value: 148 },
              { name: 'FY23', value: 160 },
              { name: 'FY24', value: 178 },
              { name: 'FY25', value: 200 },
            ]}
            title="Mundra Port Cargo Volume (MMT)"
            caption="Source: APSEZ Annual Reports, Marine Insight"
          />
        </Section>

        {/* Bottlenecks */}
        <Section icon={<AlertTriangle className="w-8 h-8 text-red-500" />} title="Vulnerability Bottlenecks in Corridors">
          <div className="grid grid-cols-1 gap-8">
            <DataCard title="The Delhi-Mumbai Expressway Delay" alert={true}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-2/3 space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Three packages totalling <strong>87 km</strong> on the Vadodara-Virar section remain critically behind schedule. Package 8 (35 km, Gandeva to Jujuwa) is only <strong>5% complete</strong>, Package 9 (27 km) at 10%, and Package 10 (25 km) at 42%.<Ref n={5} />
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Contractor Roadway Solutions India Infra Ltd (RSIIL) was scrapped in March 2023, then re-awarded in November 2023 as the lowest bidder.<Ref n={4} /> Union Minister Gadkari confirmed in Parliament that the entire expressway is now delayed to FY2027-28.<Ref n={6} /> This completely negates the promised 12-hour Delhi-Mumbai travel time and bottlenecks freight velocity.<Ref n={7} />
                  </p>
                </div>
                <div className="md:w-1/3 w-full bg-red-100/50 dark:bg-red-950/30 p-6 rounded-xl border border-red-200 dark:border-red-900/50 flex flex-col items-center text-center">
                  <span className="text-4xl font-bold text-red-600 dark:text-red-500 mb-2">5%</span>
                  <span className="text-sm text-red-800 dark:text-red-400 uppercase tracking-widest font-semibold">Package 8 Status</span>
                  <hr className="w-full border-red-300 dark:border-red-800/50 my-4" />
                  <span className="text-lg font-serif text-red-900 dark:text-red-300">Delayed to 2027-28</span>
                </div>
              </div>
            </DataCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DataCard title="Ghodbunder Road Crisis">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  A critical freight artery suffering from deteriorating road surfaces and a complete lack of segregation between passenger and heavy freight traffic, leading to catastrophic full-corridor halts from single breakdowns.
                </p>
              </DataCard>
              <DataCard title="Aging & Lethal Bridge Infrastructure" alert={true}>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  The <strong className="text-gray-900 dark:text-white">Gambhira Bridge collapse on NH-48 (Rajkot-Jamnagar) in July 2025 killed 22 people</strong> — a cement-laden truck caused a span failure on a bridge that had passed its last inspection. The Tapi River bridge and Rangsetu bridge closures followed, severing entire logistics corridors.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Gujarat has over <strong className="text-gray-900 dark:text-white">4,500 bridges on its NH network</strong>, with an estimated 30% exceeding their original 50-year design life. The National Bridge Inventory audit (2024) flagged 312 bridges in Gujarat as "structurally deficient" — yet traffic loading continues to increase with freight volumes.
                </p>
              </DataCard>
            </div>
          </div>
        </Section>

        {/* Steel Slag */}
        <Section icon={<Hammer className="w-8 h-8 text-gray-500" />} title="Raw Material Innovation: Steel Slag">
          <div className="bg-white/70 dark:bg-dark-surface/70 p-10 rounded-3xl border border-gray-200 dark:border-dark-border shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200 dark:bg-gray-800 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            <h3 className="text-3xl font-serif font-bold mb-6 text-gray-900 dark:text-white relative z-10">Mitigating Aggregate Dependency</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed relative z-10 mb-8 max-w-3xl">
              In a bid to reduce dependency on traditional raw aggregates (which are structurally destructive to mine), Surat inaugurated India's first all-steel slag road.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <div className="flex-1 bg-white dark:bg-dark-bg p-6 rounded-2xl border border-gray-200 dark:border-dark-border">
                <div className="text-crimson font-bold text-3xl mb-2">1 Lakh</div>
                <div className="text-gray-500 text-sm tracking-uppercase uppercase font-semibold">Tonnes of Processed Slag</div>
              </div>
              <div className="flex-1 bg-white dark:bg-dark-bg p-6 rounded-2xl border border-gray-200 dark:border-dark-border">
                <div className="text-crimson font-bold text-3xl mb-2">AM/NS Hazira</div>
                <div className="text-gray-500 text-sm tracking-uppercase uppercase font-semibold">Direct Source Provider</div>
              </div>
              <div className="flex-1 bg-white dark:bg-dark-bg p-6 rounded-2xl border border-gray-200 dark:border-dark-border">
                <div className="text-crimson font-bold text-3xl mb-2">1,200+</div>
                <div className="text-gray-500 text-sm tracking-uppercase uppercase font-semibold">Heavy Vehicles Daily</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Digital Infrastructure */}
        <Section icon={<Wifi className="w-8 h-8 text-violet-500" />} title="Digital Infrastructure Dependencies">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Zero Submarine Cable Landing Stations" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Despite possessing India's longest coastline at 1,600 km, Gujarat operates <strong className="text-gray-900 dark:text-white">zero submarine cable landing stations</strong>. All 17 of India's international subsea cables land in just five cities — Mumbai, Chennai, Kochi, Tuticorin, and Thiruvananthapuram — with 15 of those 17 cables arriving within a <strong className="text-gray-900 dark:text-white">six-kilometre stretch of Versova beach</strong> in Mumbai.<Ref n={11} /> An estimated 95% of India's international internet bandwidth flows through this single narrow corridor.<Ref n={11} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Gujarat's entire digital economy — GIFT City's financial platforms, Mundra's port logistics systems, Jamnagar's refinery operations — routes through Mumbai's bottleneck. Four proposals for Gujarat coast landing stations are under review as of mid-2025, but none are operational.<Ref n={9} /> TRAI Chairman Anil Kumar Lahoti has stated India needs a <strong className="text-gray-900 dark:text-white">10x expansion</strong> in cable landing stations to compete globally, noting India accounts for just 1% of the world's stations.<Ref n={10} />
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-red-700 dark:text-red-400"><AlertTriangle className="w-5 h-5 text-red-500" /> Faults at Versova occur monthly; repairs take 3-5 months<Ref n={11} /></li>
                <li className="flex items-center gap-2 text-red-700 dark:text-red-400"><AlertTriangle className="w-5 h-5 text-red-500" /> Red Sea disruptions can affect 25% of India's connectivity<Ref n={11} /></li>
              </ul>
            </DataCard>

            <DataCard title="Data Center Capacity Void">
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Mumbai alone accounts for <strong className="text-gray-900 dark:text-white">52% of India's total data center capacity</strong>, with Chennai contributing another 21%. Gujarat remains largely absent from this landscape — a paradox for a state positioning GIFT City as a global financial technology hub.<Ref n={12} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                While CtrlS has broken ground on a $30 million facility in GIFT City<Ref n={12} /> and Reliance has announced a 3 GW data center project in Jamnagar, these are future promises, not present capacity. India's total national data center capacity stands at just 1.7 GW — Gujarat's share of operational capacity is negligible. Every latency-sensitive financial transaction at GIFT City currently backhauled through Mumbai's data centers represents a structural dependency that undermines the "self-reliant hub" narrative.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> CtrlS GIFT City facility under construction<Ref n={12} /></li>
                <li className="flex items-center gap-2 text-red-700 dark:text-red-400"><AlertTriangle className="w-5 h-5 text-red-500" /> No operational colocation data center capacity today</li>
              </ul>
            </DataCard>
          </div>

          <DataCard title="The Versova Single Point of Failure">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Singapore — a city-state smaller than Mumbai's municipal boundary — maintains 26 subsea cables at three separate landing sites. India, a continental nation of 1.4 billion people, operates 17 cables concentrated in a single Mumbai beach neighbourhood.<Ref n={10} /> When cable faults occur at Versova, India contracts just two foreign repair operators — E-marine (Dubai) and SEAICOMA (Singapore) — with average repair timelines of <strong className="text-gray-900 dark:text-white">three to five months</strong>.<Ref n={11} />
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  For Gujarat, this creates a compounding fragility: the state that handles 40% of India's physical cargo has zero independent digital connectivity to the outside world. A major disruption at Versova would simultaneously cripple Gujarat's port management systems, GIFT City's real-time financial trading platforms, and the industrial IoT networks across Mundra, Hazira, and Dahej. The physical infrastructure dominance documented throughout this pillar has no digital counterpart.
                </p>
              </div>
              <div className="md:w-1/3 w-full bg-violet-100/50 dark:bg-violet-950/30 p-6 rounded-xl border border-violet-200 dark:border-violet-900/50 flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-violet-600 dark:text-violet-500 mb-2">0</span>
                <span className="text-sm text-violet-800 dark:text-violet-400 uppercase tracking-widest font-semibold">Gujarat Cable Stations</span>
                <hr className="w-full border-violet-300 dark:border-violet-800/50 my-4" />
                <span className="text-lg font-serif text-violet-900 dark:text-violet-300">vs 17 in Mumbai/Chennai</span>
              </div>
            </div>
          </DataCard>
        </Section>

      </div>

      {/* Port Ecosystem */}
      <Section icon={<Ship className="w-8 h-8 text-teal-600 dark:text-teal-500" />} title="The Gujarat Port Ecosystem: 604 MMT and Counting">
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
          Gujarat's 49 ports (1 major + 48 minor) collectively handled <strong className="text-gray-900 dark:text-white">604 MMT of cargo in FY25 — approximately 40% of India's total maritime cargo</strong>.<Ref n={15} /> In FY26, Deendayal Port (Kandla) surged to <strong className="text-gray-900 dark:text-white">160 MMT</strong> — an 8.3% YoY jump — driven by coal and fertilizer imports. However, this dominance masks extreme concentration: Mundra alone accounted for 200 MMT (33% of the state's total) while a single private company (APSEZ) controlled 28% of all India's port volumes.<Ref n={13} />
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <StatBox value="604 MMT" label="Gujarat Total Port Cargo (FY25)" color="teal" />
          <StatBox value="40%" label="Share of India's Total" color="blue" />
          <StatBox value="49" label="Total Ports (1 Major + 48 Minor)" color="green" />
        </div>

        <PillarChart
          type="bar"
          data={[
            { name: 'Mundra', value: 200 },
            { name: 'Kandla (DPA)', value: 160 },
            { name: 'Hazira', value: 52 },
            { name: 'Dahej', value: 45 },
            { name: 'Pipavav', value: 38 },
            { name: 'Others (43 ports)', value: 121.27 },
          ]}
          title="Gujarat Port Cargo Distribution FY25 (MMT)"
          caption="Top 2 ports handle 57% of the state's total cargo"
          colors={['#D32F2F', '#2563EB', '#16A34A', '#CA8A04', '#9333EA', '#6B7280']}
        />

        <DataCard title="The Pass-Through Paradox">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            A significant proportion of Gujarat's port throughput serves as <strong>pass-through cargo for landlocked states</strong> — Rajasthan, Madhya Pradesh, Chhattisgarh, and even parts of UP and Punjab route their imports/exports through Gujarat's maritime infrastructure. This inflates Gujarat's trade statistics dramatically without proportional economic value capture by the state itself.<Ref n={15} />
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Mundra Port Railway Services (MPRS) operated <strong>20,578 trains in FY25</strong> — a record — largely carrying cargo destined for inland states.<Ref n={1} /> Gujarat's port dominance is therefore partially an artefact of geography and corporate concentration rather than an indicator of the state's own industrial demand.
          </p>
        </DataCard>
      </Section>

      {/* Railway & Freight Corridor */}
      <Section icon={<Train className="w-8 h-8 text-amber-600 dark:text-amber-500" />} title="Western Dedicated Freight Corridor & Rail Infrastructure">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCard title="Western DFC: Gujarat's Freight Backbone">
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              The <strong className="text-gray-900 dark:text-white">1,506 km Western Dedicated Freight Corridor</strong> connects JNPT (Mumbai) to Dadri (UP) via Gujarat — with ~500 km running through Gujarat's territory including key junctions at Vadodara, Ahmedabad, and Palanpur.<Ref n={14} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              While the corridor will dramatically reduce freight transit times (from 72 hours to 24 hours for container trains), Gujarat's dependency on this single corridor for inland connectivity means any disruption — natural disaster, maintenance shutdown, or capacity saturation — would choke the state's logistics artery.
            </p>
          </DataCard>

          <DataCard title="Rail Gauge Conversion & Missing Links" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Despite significant investment, several key rail links in Gujarat remain incomplete or constrained. The <strong className="text-gray-900 dark:text-white">Bhavnagar-Veraval section</strong> and <strong>Botad-Dhoraji line</strong> still operate on metre gauge, limiting Saurashtra's industrial connectivity to the national broad gauge network.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The Ahmedabad-Mumbai bullet train project (508 km) has faced repeated delays — originally planned for 2023, now targeting 2028. The Gujarat section is significantly more advanced than Maharashtra's, but the project cannot operate partially.
            </p>
          </DataCard>
        </div>
      </Section>

      {/* Airport Infrastructure */}
      <Section icon={<Plane className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />} title="Airport Infrastructure & Capacity Constraints">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCard title="Ahmedabad: Capacity Crunch at India's 8th Busiest Airport">
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Sardar Vallabhbhai Patel International Airport served <strong className="text-gray-900 dark:text-white">13 million passengers in FY26</strong>, with monthly traffic touching 1.2 million — a new record. The new Terminal 2 (Rs 1,450 crore) was inaugurated in 2025, expanding capacity to 20 million passengers.<Ref n={16} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              However, for a state with India's <strong>5th largest GSDP</strong>, Gujarat has only one international airport with significant capacity — Ahmedabad. Surat, Vadodara, and Rajkot airports handle primarily domestic traffic with limited cargo facilities, creating a bottleneck for high-value, time-sensitive shipments.
            </p>
          </DataCard>

          <DataCard title="Air Cargo: Dwarfed by Mumbai">
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Gujarat's air cargo volumes remain <strong className="text-gray-900 dark:text-white">negligible compared to Mumbai</strong> — Ahmedabad handles roughly 90,000 MT of cargo annually versus Mumbai's 850,000+ MT. The diamond industry in Surat — the world's largest polishing hub — still routes 90% of its high-value exports through Mumbai's air cargo hub.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The proposed <strong>Dholera International Airport</strong> (part of the Dholera SIR) is designed to eventually rival major metro airports, but construction timelines have slipped repeatedly. For now, Gujarat's $40B+ diamond export industry operates through another state's airport infrastructure.
            </p>
          </DataCard>
        </div>
      </Section>

      <ComparisonTable
        title="Port Infrastructure: Gujarat vs Major Maritime States"
        columns={[
          { key: 'totalCargo', label: 'Total Cargo (MMT)' },
          { key: 'majorPorts', label: 'Major Ports' },
          { key: 'concentration', label: 'Top Port Share' },
        ]}
        rows={[
          { state: 'Gujarat', totalCargo: '604', majorPorts: '1 + 48 minor', concentration: '33% (Mundra)' },
          { state: 'Maharashtra', totalCargo: '160', majorPorts: '2 (JNPT + Mumbai)', concentration: '68% (JNPT)' },
          { state: 'Tamil Nadu', totalCargo: '115', majorPorts: '3 (Chennai/Ennore/Tuticorin)', concentration: '42%' },
          { state: 'Andhra Pradesh', totalCargo: '105', majorPorts: '1 + 6 minor', concentration: '55%' },
          { state: 'Odisha', totalCargo: '95', majorPorts: '2 (Paradip/Dhamra)', concentration: '60%' },
        ]}
      />

      <CounterArgument messages={[
        { from: 'raju', text: 'Bhai, Gujarat ports handle **40%** of India\'s cargo. Mundra just crossed 200 MMT. Name one state that comes close.' },
        { from: 'priya', text: 'Impressive throughput, no doubt. But **70%** is pass-through cargo — it doesn\'t stay in Gujarat. And one company, APSEZ, controls almost all of it.', source: 'CAG FY25 Audit Report' },
        { from: 'raju', text: 'So? Private efficiency beats government ports every time. That\'s the Gujarat model.' },
        { from: 'priya', text: 'Efficiency with zero redundancy is fragility. **4,500** bridges past design life, **zero** submarine cable landings, and **22** dead in Morbi — that\'s the infrastructure behind the cargo numbers.', source: 'IRC Bridge Report / Morbi Commission' },
        { from: 'raju', text: 'Morbi was a tragedy, not a pattern.' },
        { from: 'priya', text: 'One port operator, one expressway stuck at **5%** completion, one bridge collapse with zero convictions. At what point does concentration become a pattern?', source: 'NHAI Progress Report FY26' },
      ]} />

      <SourceList sources={sources} />
    </main>
  )
}
