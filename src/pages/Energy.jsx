import { motion } from 'framer-motion'
import { Zap, AlertTriangle, Flame, Wind, CheckCircle } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'

const sources = [
  { title: "Mundra Thermal Power Project (Adani) — 4,620 MW imported coal plant", publication: "Global Energy Monitor", url: "https://www.gem.wiki/Mundra_Thermal_Power_Project_(Adani)" },
  { title: "Tata Mundra Ultra Mega Power Plant — 4,000 MW supercritical coal", publication: "NS Energy Business", url: "https://www.nsenergybusiness.com/projects/tata-mundra-ultra-mega-power-plant/" },
  { title: "Mundra Ultra Mega Power Plant", publication: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mundra_Ultra_Mega_Power_Plant" },
  { title: "Dahej LNG Import Terminal, Bharuch, Gujarat, India", publication: "NS Energy Business", url: "https://www.nsenergybusiness.com/projects/dahej-lng-import-terminal/" },
  { title: "Dahej LNG Terminal — 17.5 MTPA capacity, 100% utilization rate", publication: "Global Energy Monitor", url: "https://www.gem.wiki/Dahej_LNG_Terminal" },
  { title: "Hazira LNG Terminal — 5.2 MTPA capacity, Shell India", publication: "Global Energy Monitor", url: "https://www.gem.wiki/Hazira_LNG_Terminal" },
  { title: "West Asia tensions threaten LNG flows to India as Hormuz chokepoint risk intensifies", publication: "BusinessToday, Mar 2026", url: "https://www.businesstoday.in/latest/economy/story/west-asia-tensions-threaten-lng-flows-to-india-as-hormuz-chokepoint-risk-intensifies-whats-at-stake-519504-2026-03-06" },
  { title: "Nearly 69% of India's LNG imports linked to Strait of Hormuz", publication: "NewKerala", url: "https://www.newkerala.com/news/a/nearly-69-pc-indias-lng-imports-linked-strait-390.htm" },
  { title: "Gujarat Emerges as India's Largest Renewable Energy Contributor With 42.583 GW Capacity", publication: "Angel One, 2025", url: "https://www.angelone.in/news/economy/gujarat-emerges-as-india-s-largest-renewable-energy-contributor-with-42-583-gw-capacity" },
  { title: "Gujarat Adds 7.5 GW Renewable Capacity in 2025, Total Reaches 40.7 GW", publication: "Indian Masterminds, 2025", url: "https://indianmasterminds.com/news/gujarat-renewable-energy-capacity-2025-40gw-growth-target-100gw-164845/" },
  { title: "Gujarat targets 37,350 MW renewable energy generation by 2026", publication: "DeshGujarat, Mar 2025", url: "https://deshgujarat.com/2025/03/11/gujarat-targets-37350-mw-renewable-energy-generation-by-2026/" },
  { title: "Power ministry directs imported-coal plants to run at full capacity", publication: "Business Standard, Mar 2026", url: "https://www.business-standard.com/industry/news/power-ministry-directs-plants-using-imported-coal-to-run-at-full-capacity-126032500941_1.html" },
  { title: "Over 400 Ceramic Units in Morbi Shut Due to Gas Crisis Amid West Asia War", publication: "DeshGujarat, Mar 2026", url: "https://deshgujarat.com/2026/03/18/over-400-ceramic-units-in-morbi-shut-due-to-gas-crisis-amid-west-asia-war/" },
  { title: "India's LNG imports continue to increase", publication: "LNG Prime", url: "https://lngprime.com/lng-terminals/indias-lng-imports-continue-to-increase/141762/" },
]

export default function Energy() {
  return (
    <main className="w-full max-w-5xl mx-auto px-6 pt-32 pb-32 space-y-24">
      {/* Hero */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-4 text-crimson font-semibold tracking-widest text-sm mb-4">
            <span>PILLAR 02</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Energy Grid & <span className="italic text-crimson">Power Supply</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Despite leading India in renewable energy installations, Gujarat's industrial baseload remains <strong className="font-semibold text-gray-900 dark:text-white">structurally chained to imported fossil fuels</strong>. Coastal mega-plants burn Indonesian coal, LNG terminals face Strait of Hormuz chokepoint risk, and the gap between installed RE capacity and actual industrial generation reveals a critical vulnerability.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* Imported Coal */}
        <Section icon={<Flame className="w-8 h-8 text-orange-600 dark:text-orange-400" />} title="Imported Coal: The Coastal Thermal Trap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Adani Mundra Thermal — 4,620 MW">
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Running on blended sub-bituminous coal, approximately <strong className="text-gray-900 dark:text-white">70% imported from Adani's own mine in Bunyu, East Kalimantan, Indonesia</strong>, with the remainder sourced from Mahanadi Coalfields in Odisha under a 6.405 MTPA fuel supply agreement.<Ref n={1} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Coal is freighted to Mundra Port and conveyed via a high-speed belt at 6,000 MT/hour to the plant 9.5 km away. This makes the plant's entire fuel supply chain dependent on international shipping lanes and a single Indonesian mine.<Ref n={1} />
              </p>
            </DataCard>

            <DataCard title="Tata Mundra UMPP — 4,000 MW">
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                India's first supercritical coal-fired plant, consuming up to <strong className="text-gray-900 dark:text-white">12 million tonnes of imported coal per year</strong>.<Ref n={2} /> The plant supplies power to five states: Gujarat (1,805 MW), Maharashtra (760 MW), Punjab (475 MW), Rajasthan (380 MW), and Haryana (380 MW).<Ref n={3} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Indonesia's 2010 mining law change caused massive cost under-recovery, eroding Tata Power's net worth by over Rs 3,800 crore in 3 years — exposing the structural vulnerability of relying on foreign coal pricing.<Ref n={3} />
              </p>
            </DataCard>
          </div>

          <DataCard title="Central Directive: Run at Full Capacity" alert={true}>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The Power Ministry directed all imported-coal plants to run at full capacity during peak demand periods, affecting 15 stations (17,600 MW) nationally — including both Mundra mega-plants.<Ref n={12} /> This reveals the paradox: despite massive RE installations, the grid cannot survive peak industrial load without imported coal.
            </p>
          </DataCard>
        </Section>

        {/* LNG Dependency */}
        <Section icon={<AlertTriangle className="w-8 h-8 text-red-500" />} title="LNG Import Terminals: The Hormuz Chokepoint">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            Gujarat's LNG terminals account for roughly <strong className="text-gray-900 dark:text-white">60% of India's total LNG import capacity</strong>, with the state's gas pipeline network stretching over 5,850 km — 25% of the country's total.<Ref n={7} />
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Dahej Terminal (Petronet LNG)">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                India's largest LNG terminal at <strong className="text-gray-900 dark:text-white">17.5 MTPA</strong> capacity, operating at an extraordinary <strong className="text-gray-900 dark:text-white">100.3% utilization</strong>.<Ref n={5} /> It meets more than one-third of India's entire LNG demand. Expansion to 22.5 MTPA is underway.<Ref n={4} />
              </p>
              <div className="bg-red-50/60 dark:bg-red-950/20 p-4 rounded-xl border border-red-200 dark:border-red-900/30">
                <p className="text-red-800 dark:text-red-400 text-sm font-semibold">Hormuz Exposure: ~76% of Dahej's 14.8 MT supply transits through the Strait of Hormuz<Ref n={8} /></p>
              </div>
            </DataCard>

            <DataCard title="Hazira Terminal (Shell India)">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Capacity of <strong className="text-gray-900 dark:text-white">5.2 MTPA</strong>, currently at 38.5% utilization.<Ref n={6} /> An approved expansion will add 19 MTPA of regasification capacity, bringing total to 26.2 MTPA.<Ref n={6} />
              </p>
              <div className="bg-green-50/60 dark:bg-green-950/20 p-4 rounded-xl border border-green-200 dark:border-green-900/30">
                <p className="text-green-800 dark:text-green-400 text-sm font-semibold">Hormuz Exposure: ~25% — diversified sourcing from US, Russia, Australia<Ref n={8} /></p>
              </div>
            </DataCard>
          </div>

          <DataCard title="Strait of Hormuz: A Single Point of Failure" alert={true}>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Nearly <strong>69% of India's LNG imports</strong> — about 17.5 million tonnes — originate from Qatar, UAE, and Oman, meaning most shipments transit through the Strait of Hormuz.<Ref n={8} /> Gujarat Gas Ltd, which serves the massive Morbi ceramic cluster, sources <strong>73% of its supply from LNG</strong>.<Ref n={7} />
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The 2026 West Asia conflict has already caused over <strong>400 ceramic units in Morbi to shut</strong> due to gas supply disruptions, with nearly 60% of Morbi units dependent on propane that has been completely halted.<Ref n={13} />
            </p>
          </DataCard>
        </Section>

        {/* Renewables Paradox */}
        <Section icon={<Wind className="w-8 h-8 text-green-600 dark:text-green-500" />} title="The Renewable Energy Paradox">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            Gujarat leads India with <strong className="text-gray-900 dark:text-white">42.583 GW</strong> of installed renewable capacity (16.5% of India's total), ranking 1st in wind (14,821 MW) and 1st in rooftop solar (6,413 MW).<Ref n={9} /> Yet this headline number masks a critical gap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="42.5 GW" label="Installed RE Capacity" color="green" />
            <StatBox value="22%" label="Actual Generation Share" color="red" />
            <StatBox value="58%" label="Coal Share in GUVNL" color="crimson" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Capacity vs. Generation Gap">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In FY 2024-25, renewable sources generated 32,790 MU — only <strong className="text-gray-900 dark:text-white">22% of the state's total consumption of 1,46,467 MU</strong>.<Ref n={11} /> GUVNL's contracted capacity as of March 2023 shows coal (including MTA) at 58%, while solar and wind combined are only 29%.<Ref n={11} />
              </p>
            </DataCard>

            <DataCard title="Industrial Baseload Reality">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Gujarat's total installed power capacity stands at <strong className="text-gray-900 dark:text-white">51,869 MW</strong> (Oct 2024). While RE capacity grows rapidly, solar and wind are intermittent — they cannot serve the 24/7 baseload demands of refineries, ceramic kilns, and chemical plants. The state added 7.5 GW of RE in 2025 alone, targeting 100 GW by 2030.<Ref n={10} />
              </p>
            </DataCard>
          </div>
        </Section>

      </div>

      <SourceList sources={sources} />
    </main>
  )
}
