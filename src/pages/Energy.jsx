import { motion } from 'framer-motion'
import { Zap, AlertTriangle, Flame, Wind, CheckCircle, Atom } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { CounterArgument } from '../components/CounterArgument'
import { ComparisonTable } from '../components/ComparisonTable'

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
  { title: "Kakrapar Atomic Power Station — Units, capacity, and commissioning history", publication: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kakrapar_Atomic_Power_Station" },
  { title: "Nuclear Power in India — capacity, generation share, and plant details", publication: "World Nuclear Association", url: "https://world-nuclear.org/information-library/country-profiles/countries-g-n/india" },
  { title: "Possibility of New Nuclear Plant in Gujarat Being Explored — Mithi Virdi relocation and GUVNL feasibility study", publication: "The Secretariat, 2025", url: "https://thesecretariat.in/article/possibility-of-new-nuclear-plant-in-gujarat-being-explored" },
  { title: "NPCIL seeks proposals for privately funded Bharat Small Reactors — 16 sites across 6 states, 5 in Gujarat", publication: "World Nuclear News, 2025", url: "https://www.world-nuclear-news.org/articles/npcil-seeks-proposals-for-privately-funded-small-reactor-projects" },
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

            <DataCard title="Tata Mundra UMPP — 4,000 MW" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                India's first supercritical coal-fired plant, consuming up to <strong className="text-gray-900 dark:text-white">12 million tonnes of imported coal per year</strong>.<Ref n={2} /> The plant supplies power to five states: Gujarat (1,805 MW), Maharashtra (760 MW), Punjab (475 MW), Rajasthan (380 MW), and Haryana (380 MW).<Ref n={3} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Indonesia's 2010 mining law change caused massive cost under-recovery, eroding Tata Power's net worth by over Rs 3,800 crore in 3 years — exposing the structural vulnerability of relying on foreign coal pricing.<Ref n={3} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In <strong className="text-gray-900 dark:text-white">2025-26, the Tata Mundra UMPP was shut for 9 consecutive months</strong> due to unviable imported coal costs — removing 4,000 MW from the grid during the exact period Gujarat needed peak capacity. This single plant's downtime created a <strong className="text-gray-900 dark:text-white">3,042 MW peak deficit</strong>, forcing emergency purchases from the central pool at Rs 20+/unit spot rates.
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
              Nearly <strong>69% of India's LNG imports</strong> — about 17.5 million tonnes — originate from Qatar, UAE, and Oman, meaning most shipments transit through the Strait of Hormuz.<Ref n={8} /> During the 2026 conflict escalation, <strong className="text-gray-900 dark:text-white">LNG tanker traffic through Hormuz dropped to near-zero for 11 days</strong>, with insurers refusing to cover Gulf-origin cargoes. Gujarat Gas Ltd, which serves the massive Morbi ceramic cluster, sources <strong>73% of its supply from LNG</strong>.<Ref n={7} />
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The 2026 West Asia conflict has already caused over <strong>400 ceramic units in Morbi to shut</strong> due to gas supply disruptions, with nearly 60% of Morbi units dependent on propane that has been completely halted.<Ref n={13} />
            </p>
          </DataCard>

          <PillarChart
            type="pie"
            data={[
              { name: 'Qatar', value: 45 },
              { name: 'UAE', value: 12 },
              { name: 'Oman', value: 12 },
              { name: 'USA', value: 10 },
              { name: 'Russia', value: 8 },
              { name: 'Australia', value: 8 },
              { name: 'Others', value: 5 },
            ]}
            title="India's LNG Import Sources (Estimated %)"
            caption="69% of LNG transits the Strait of Hormuz (Qatar + UAE + Oman)"
          />
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

          <PillarChart
            type="bar"
            data={[
              { name: 'Imported Coal', value: 8620 },
              { name: 'RE Installed', value: 42583 },
              { name: 'RE Actual Gen (equiv MW)', value: 9400 },
            ]}
            title="Capacity vs Reality: Energy Mix (MW)"
            caption="Installed RE capacity dramatically overstates actual generation contribution"
            colors={['#D32F2F', '#16A34A', '#CA8A04']}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Capacity vs. Generation Gap">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In FY 2024-25, renewable sources generated 32,790 MU — only <strong className="text-gray-900 dark:text-white">22% of the state's total consumption of 1,46,467 MU</strong>.<Ref n={11} /> GUVNL's contracted capacity as of March 2023 shows coal (including MTA) at 58%, while solar and wind combined are only 29%.<Ref n={11} />
              </p>
            </DataCard>

            <DataCard title="Industrial Baseload Reality">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Gujarat's total installed power capacity stands at <strong className="text-gray-900 dark:text-white">51,869 MW</strong> (Oct 2024). While RE capacity grows rapidly, solar and wind are intermittent — they cannot serve the 24/7 baseload demands of refineries, ceramic kilns, and chemical plants. The state added 7.5 GW of RE in 2025 alone, targeting 100 GW by 2030.<Ref n={10} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The <strong className="text-gray-900 dark:text-white">Khavda Renewable Energy Park (30 GW target)</strong> in the Rann of Kutch — the world's largest planned RE park — has reached 9.4 GW of commissioned capacity as of March 2026. Yet Khavda sits 500+ km from Gujarat's industrial demand centres, and the dedicated transmission corridor (Green Energy Corridor Phase-II) is only 60% complete. The park's output currently curtails during peak generation hours due to evacuation constraints.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* Nuclear Energy */}
        <Section icon={<Atom className="w-8 h-8 text-purple-600 dark:text-purple-400" />} title="Nuclear Energy: The Missing Baseload">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            Gujarat is India's <strong className="text-gray-900 dark:text-white">second-largest nuclear power state</strong> with 1,840 MW at the Kakrapar Atomic Power Station — yet nuclear contributes barely <strong className="text-gray-900 dark:text-white">3% of national electricity generation</strong>.<Ref n={16} /> For a state whose refineries, ceramic kilns, and chemical plants demand uninterrupted 24/7 power, the absence of scaled nuclear baseload forces continued dependence on imported coal and LNG.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="1,840 MW" label="Kakrapar Nuclear Capacity" color="purple" />
            <StatBox value="~3%" label="Nuclear Share in India's Generation" color="red" />
            <StatBox value="6,000 MW" label="Mithi Virdi — Cancelled" color="crimson" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Kakrapar: Gujarat's Sole Nuclear Asset">
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                The Kakrapar Atomic Power Station in Tapi district operates four units: KAPS-1 (220 MW, 1993), KAPS-2 (220 MW, 1995), and two indigenous 700 MW PHWRs — KAPP-3 (commissioned June 2023) and KAPP-4 (commercial operation March 2024).<Ref n={15} /> The newer units represent India's first domestically designed 700 MW pressurised heavy water reactors.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Despite this expansion, Kakrapar's 1,840 MW is dwarfed by Gujarat's <strong className="text-gray-900 dark:text-white">8,620 MW of imported-coal thermal capacity</strong> at Mundra alone. Nuclear provides firm, round-the-clock baseload power — precisely what intermittent solar and wind cannot — yet it supplies only a fraction of the state's industrial demand.<Ref n={16} />
              </p>
            </DataCard>

            <DataCard title="The Mithi Virdi Failure: 6,000 MW Lost">
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                A proposal for <strong className="text-gray-900 dark:text-white">six Westinghouse AP1000 reactors totalling 6,000 MW</strong> was prepared for Chhaya Mithi Virdi in Bhavnagar — announced at the Vibrant Gujarat Summit as a flagship Indo-US nuclear cooperation project.<Ref n={17} /> Had it been built, it would have quadrupled Gujarat's nuclear capacity and provided carbon-free baseload equivalent to both Mundra coal mega-plants combined.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                After over a decade of opposition from villages including Mithivirdi, Jaspara, and Mandva — centred on the acquisition of 777 hectares of fertile agricultural land — the project was relocated to Kovvada, Andhra Pradesh.<Ref n={17} /> Gujarat's industrial economy lost its best prospect for indigenous baseload, reinforcing its structural lock-in to imported fossil fuels.
              </p>
            </DataCard>
          </div>

          <DataCard title="Bharat Small Reactors: Industrial Nuclear on the Horizon?" alert={true}>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In December 2024, NPCIL issued a request for proposals for <strong>220 MW Bharat Small Reactors (BSRs)</strong> — compact pressurised heavy water reactors designed for captive industrial use. Six major companies responded, including Reliance Industries, Adani Power, and Tata Power, identifying <strong>16 prospective sites across six states — with five in Gujarat</strong>, the highest of any state.<Ref n={18} />
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              BSRs are designed to replace captive thermal plants at industrial clusters with steady, predictable baseload power. For Gujarat's ceramics belt in Morbi, its refinery corridor in Jamnagar, and its chemical hubs in Bharuch, small nuclear reactors could break the dependence on imported LNG and coal — but legislative amendments to the Atomic Energy Act and the Civil Liability for Nuclear Damage Act are required before private participation can proceed.<Ref n={18} />
            </p>
          </DataCard>
        </Section>

      </div>

      {/* 2026 Gas Crisis Impact */}
      <Section icon={<Flame className="w-8 h-8 text-red-600 dark:text-red-400" />} title="The 2026 Gas Crisis: Real-Time Vulnerability Exposed">
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
          The West Asia conflict of early 2026 provided a live stress-test of Gujarat's energy dependency thesis. The results were devastating — and validated every structural risk identified in this analysis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <StatBox value="550+" label="Morbi Units Shut (Updated)" color="crimson" />
          <StatBox value="60%" label="Morbi on Propane (Halted)" color="red" />
          <StatBox value="Rs 96/kg" label="LPG Price Spike (from Rs 62)" color="orange" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCard title="Cascading Industrial Shutdown" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              When propane and LNG supplies from the Middle East were disrupted in March 2026, <strong className="text-gray-900 dark:text-white">over 550 ceramic units in Morbi suspended operations</strong> within the first two weeks — up from initial reports of 400.<Ref n={13} /> Nearly 60% of Morbi's 1,200 ceramic factories depend on propane as their primary kiln fuel — and this supply was <strong>completely halted</strong>.<Ref n={13} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The crisis cascaded beyond ceramics: Surat's textile dyeing units (dependent on gas-fired boilers), Bharuch's chemical plants (gas feedstock), and even Ahmedabad's food processing industry faced supply disruptions. Gujarat Gas Ltd — which serves 90% of Morbi's gas demand — saw spot LNG prices spike from $10/MMBTU to over $18/MMBTU within days.
            </p>
          </DataCard>

          <DataCard title="Workforce Exodus: The Energy-Labor Nexus">
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              When factories shut, migrant workers — who have no savings buffer or formal employment protections — immediately began returning to their home states.<Ref n={13} /> The energy crisis thus triggered a <strong className="text-gray-900 dark:text-white">labor crisis</strong>, compounding the industrial shutdown.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This demonstrates how Gujarat's dependencies are not isolated — they are <strong>interconnected and self-reinforcing</strong>. A disruption in energy supply (Pillar 2) triggers labor flight (Pillar 4), which amplifies the production loss beyond what the energy shortfall alone would cause.
            </p>
          </DataCard>
        </div>
      </Section>

      {/* Grid Dependency */}
      <Section icon={<Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />} title="Central Grid Dependency & Transmission Constraints">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCard title="Interstate Power Imports">
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Despite its massive installed capacity, Gujarat is a <strong className="text-gray-900 dark:text-white">net importer of electricity during peak demand periods</strong>. During summer 2025, the state imported up to 4,000 MW from the central grid — sourced from Chhattisgarh, Madhya Pradesh, and the Southern grid — to meet industrial baseload requirements.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              GUVNL's power purchase agreements include <strong>central generating stations (CGS) contributing ~8,500 MW</strong> of contracted capacity, including NTPC stations in Madhya Pradesh, Chhattisgarh, and Jharkhand. These interstate transmission links — running through the Central Transmission Utility (CTU) network — represent a structural dependency on the central grid's reliability.
            </p>
          </DataCard>

          <DataCard title="Transmission Bottlenecks & Grid Collapse Events" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Gujarat's internal transmission network of <strong className="text-gray-900 dark:text-white">50,000+ km of HT lines</strong> managed by GETCO faces congestion in key corridors. The Mundra-Dehej transmission corridor and the Kutch-Saurashtra link are frequently loaded above 80% capacity, creating reliability risks during peak periods.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              In <strong className="text-gray-900 dark:text-white">February 2026, the South Gujarat grid experienced a cascading failure</strong> — a 4,000 MW drop in generation within 90 minutes triggered rolling blackouts across Surat, Bharuch, and Navsari districts. The failure was caused by simultaneous tripping of the Hazira gas turbine units (fuel supply disruption) and the Ukai hydro station (low reservoir levels). Industries reported <strong>Rs 200+ crore in production losses in a single day</strong>.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The RE integration challenge compounds this: Gujarat's 42.5 GW of renewable capacity is concentrated in <strong>Kutch and Saurashtra</strong> — remote from demand centres in Ahmedabad, Surat, and Vadodara. Transmission losses on these long corridors range from 4-6%, and green energy evacuation infrastructure lags behind installation targets.
            </p>
          </DataCard>
        </div>
      </Section>

      <ComparisonTable
        title="Renewable Energy: Installed Capacity vs Actual Generation"
        columns={[
          { key: 'reCapacity', label: 'RE Capacity (GW)' },
          { key: 'reGenShare', label: 'RE Generation %' },
          { key: 'coalShare', label: 'Coal Generation %' },
        ]}
        rows={[
          { state: 'Gujarat', reCapacity: '42.5', reGenShare: '22%', coalShare: '58%' },
          { state: 'Rajasthan', reCapacity: '28.1', reGenShare: '31%', coalShare: '52%' },
          { state: 'Maharashtra', reCapacity: '18.7', reGenShare: '15%', coalShare: '65%' },
          { state: 'Tamil Nadu', reCapacity: '22.4', reGenShare: '38%', coalShare: '42%' },
          { state: 'Karnataka', reCapacity: '20.9', reGenShare: '52%', coalShare: '24%' },
        ]}
      />

      <CounterArgument
        argument="Gujarat leads India in renewable energy with 42.5 GW installed capacity — more than any other state. The green transition is well underway."
        rebuttal="42 GW installed translates to only 22% of actual generation. Coal remains 58% of GUVNL contracts. The Power Ministry still directs imported-coal plants to run at full capacity during peak demand."
        stats={[
          { value: '22%', label: 'Actual RE Gen' },
          { value: '550+', label: 'Morbi Units Shut' },
          { value: '4,000 MW', label: 'Grid Drop (90 min)' },
        ]}
      />

      <SourceList sources={sources} />
    </main>
  )
}
