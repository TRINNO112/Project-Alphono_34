import { motion } from 'framer-motion'
import { Ship, AlertTriangle, Hammer, CheckCircle, Wifi } from 'lucide-react'
import { Section, DataCard, Ref, SourceList } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { CounterArgument } from '../components/CounterArgument'

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
                Mundra Port became the first Indian port to handle over <strong className="text-gray-900 dark:text-white">200 Million Metric Tonnes (MMT)</strong> of cargo in FY25, with a record 41.5 MMT in March 2025 alone.<Ref n={1} /> APSEZ's total portfolio handled 450.2 MMT across all ports (+7% YoY).<Ref n={2} /> The state relies almost exclusively on one corporate entity for managing Mundra, Dahej, and Hazira ports, with an approved Rs 45,000 crore expansion to double Mundra's capacity to 514 MMT.<Ref n={3} />
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> 338 MTPA current capacity — largest in India<Ref n={8} /></li>
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
              <DataCard title="Aging Bridge Infrastructure">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  The recent closure of the Tapi River bridge and the Rangsetu bridge highlights a systemic aging failure. Entire logistics routes are severed randomly due to undiscovered expansion joint gaps.
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

      <CounterArgument
        argument="Adani's efficiency delivers India's lowest port tariffs and fastest turnaround times. Private operation is inherently superior to government ports."
        rebuttal="Single-entity concentration means a regulatory dispute, operational failure, or geopolitical sanction has no failover. When one company controls 40% of national cargo capacity, efficiency becomes fragility."
      />

      <SourceList sources={sources} />
    </main>
  )
}
