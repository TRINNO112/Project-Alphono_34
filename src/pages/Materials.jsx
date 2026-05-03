import { motion } from 'framer-motion'
import { Factory, AlertTriangle, Fuel, Pill, Mountain, CheckCircle, Battery } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { LollipopChart } from '../components/charts/LollipopChart'
import { SlopeChart } from '../components/charts/SlopeChart'
import { CounterArgument } from '../components/CounterArgument'
import { useLocalStorageToggle } from '../hooks/useLocalStorageToggle'
import { GovResponseToggle } from '../components/GovResponseToggle'
import ScrollSpy from '../components/ScrollSpy'

const spySections = [
  { id: 'the-crude-oil-import-machine', label: 'Crude Oil' },
  { id: 'pharmaceutical-apis-the-china-dependency', label: 'Pharma APIs' },
  { id: 'minerals-the-eastern-supply-chain', label: 'Minerals' },
  { id: 'rare-earth-battery-metals-the-next-dependency-frontier', label: 'Rare Earth' },
  { id: 'the-bharuch-dahej-chemical-corridor-india-s-chemical-capital', label: 'Chemical Corridor' },
  { id: 'natural-gas-gujarat-s-most-critical-input', label: 'Natural Gas' },
  { id: 'fertilizer-agricultural-inputs-the-silent-import-dependency', label: 'Fertilizers' },
]

const sources = [
  { title: "Jamnagar refinery — World's largest oil refinery", publication: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jamnagar_refinery" },
  { title: "Reliance Industries — Refining & Marketing", publication: "Reliance Industries Ltd", url: "https://www.ril.com/businesses/energy/refining-marketing" },
  { title: "Reliance Resumes Russian Oil Imports to Feed Jamnagar Refinery", publication: "Bloomberg, Dec 2025", url: "https://www.bloomberg.com/news/articles/2025-12-24/reliance-resumes-russian-oil-imports-to-feed-jamnagar-refinery" },
  { title: "Reliance's $300B US Refinery: First New Plant in 50 Years", publication: "Sahi, 2026", url: "https://www.sahi.com/blogs/reliance-s-300-billion-us-oil-refinery-bet-what-the-deal-really-means" },
  { title: "Indian Pharma Industry's Dependency on China and its Impact on Exports", publication: "Pazago Blog", url: "https://blog.pazago.com/post/indian-pharma-dependency-china-impact-exports" },
  { title: "Indian Pharmaceutical Industry's dependence on China for APIs, KSMs & Intermediates: A Historical Perspective", publication: "The Financial World", url: "https://www.thefinancialworld.com/indian-pharmaceutical-industrys-dependence-on-china-for-apis-ksms-intermediates-a-historical-perspective/" },
  { title: "India's Import Dependence on China in Pharmaceuticals: Status (RIS Discussion Paper)", publication: "Research & Information System for Developing Countries", url: "https://ris.org.in/sites/default/files/Publication/DP%20268%20Prof%20Sudip%20Chaudhuri.pdf" },
  { title: "Can India Reclaim API Throne from China?", publication: "BioSpectrum India", url: "https://www.biospectrumindia.com/features/73/25074/can-india-reclaim-api-throne-from-china.html" },
  { title: "Bauxite Producing States in India: A Comprehensive Guide", publication: "Indiatlas", url: "https://indiatlas.com/bauxite-producing-states-in-india/" },
  { title: "Gujarat Mineral Development Corporation Ltd — Baitarani-West Mine, Odisha", publication: "GMDC", url: "https://www.gmdcltd.com/" },
  { title: "India Hits Record 30 Operational Mineral Blocks 2026", publication: "Discovery Alert", url: "https://discoveryalert.com.au/global-mineral-markets-2026-asia-supply-chains/" },
  { title: "India's Growing Importance in Generic Drug API Manufacturing", publication: "Drug Patent Watch", url: "https://www.drugpatentwatch.com/blog/indias-growing-importance-in-generic-drug-api-manufacturing/" },
  { title: "India well-positioned to reduce dependence on imported APIs", publication: "BioSpectrum India", url: "https://www.biospectrumindia.com/interviews/17/25075/india-is-well-positioned-to-reduce-its-dependence-on-imported-apis-and-potentially-challenge-chinas-dominance-in-the-global-market.html" },
  { title: "India's Lithium-Ion Battery Import Dependency to Drop to 20% by FY27", publication: "CareEdge Ratings / Energetica India, 2024", url: "https://www.energetica-india.net/news/indias-lithium-ion-battery-import-dependency-to-drop-to-20-percent-by-fy27--report" },
  { title: "Weaponised Minerals and India's China Dependency", publication: "Vivekananda International Foundation, Nov 2025", url: "https://www.vifindia.org/article/2025/november/06/Weaponised-Minerals-and-India-s-China-Dependency" },
  { title: "How Rare Earth Shortages Are Stalling India's Burgeoning EV Sector", publication: "Al Jazeera, Aug 2025", url: "https://www.aljazeera.com/economy/2025/8/28/how-rare-earth-shortages-are-stalling-indias-burgeoning-ev-sector" },
  { title: "Lithium-ion Battery Manufacturing in India: Revisiting Missing Links", publication: "WRI India, 2024", url: "https://wri-india.org/perspectives/lithium-ion-battery-manufacturing-india-revisiting-missing-links" },
]

export default function Materials() {
  const [showGov, setShowGov] = useLocalStorageToggle('showGovResponse', false)

  return (
    <main className="w-full max-w-5xl mx-auto px-6 pt-32 pb-32 space-y-24">
      <ScrollSpy sections={spySections} />
      {/* Hero */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-4 text-crimson font-semibold tracking-widest text-sm mb-4">
            <span>PILLAR 06</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 leading-tight">
            Industrial Raw <span className="italic text-crimson">Materials</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat <strong className="font-semibold text-gray-900">processes, but does not dig</strong>. The world's largest refinery runs on imported crude. The massive pharmaceutical sector depends on Chinese APIs. Mineral supply chains stretch to Odisha and Jharkhand. Gujarat is a processing powerhouse built atop a foundation of external raw material supply lines.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* Crude Oil */}
        <Section icon={<Fuel className="w-8 h-8 text-orange-600" />} title="The Crude Oil Import Machine">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="1.4 MMBPD" label="Jamnagar Refinery Capacity" color="crimson" />
            <StatBox value="216" label="Crude Grades Processed" color="blue" />
            <StatBox value="~85%" label="India's Crude Import Share" color="red" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Jamnagar: World's Largest Refinery">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Reliance's Jamnagar refinery is the <strong className="text-gray-900">world's largest single-site oil refinery</strong> with 1.4 million barrels per day (MMBPD) capacity and a complexity index of 21.1 — the highest globally.<Ref n={1} /> It has processed 216 different grades of crude from around the world.<Ref n={2} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Crude throughput at the Jamnagar SEZ alone reached <strong className="text-gray-900">28.3 million tonnes</strong> in March 2024.<Ref n={1} /> India imports roughly 85% of its total crude needs, and Jamnagar — fed by Middle Eastern, Russian, and American crude — is overwhelmingly reliant on imported feedstock.
              </p>
            </DataCard>

            <DataCard title="Geopolitical Supply Chain Diversification">
              <p className="text-gray-600 mb-4 leading-relaxed">
                In late 2025, Reliance resumed purchases of discounted Russian crude, routing barrels from non-sanctioned suppliers to its Gujarat refinery.<Ref n={3} /> Simultaneously, the company signed a <strong className="text-gray-900">20-year, $300 billion commitment to American shale crude</strong> — diversifying away from Middle East geopolitical risk.<Ref n={4} />
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong className="text-gray-900">Nayara Energy (Vadinar refinery, 20 MTPA)</strong> — 49.13% owned by Russia's Rosneft — faces acute sanctions exposure. EU and UK sanctions on Russian entities created legal uncertainty around Nayara's crude procurement, insurance coverage, and export transactions. In 2026, multiple European banks refused to process Nayara's trade finance, forcing the company to shift entirely to Indian and Middle Eastern banking channels.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This demonstrates both the vulnerability and the strategic sophistication of Gujarat's refining dependency: the state's two mega-refineries process 2.8 MMBPD combined, but their input is entirely at the mercy of international shipping lanes and geopolitical alliances.
              </p>
            </DataCard>
          </div>

          <PillarChart
            type="pie"
            data={[
              { name: 'Russia', value: 36 },
              { name: 'Iraq', value: 20 },
              { name: 'Saudi Arabia', value: 14 },
              { name: 'UAE/Kuwait', value: 10 },
              { name: 'USA', value: 7 },
              { name: 'Domestic', value: 13 },
            ]}
            title="India's Crude Oil Sourcing FY26 (Updated %)"
            caption="Russia overtook Middle East as #1 supplier at 36% — up from 2% in 2021"
            colors={['#991B1B', '#0891B2', '#10B981', '#F59E0B', '#3B82F6', '#6B7280']}
          />

          {/* Time-Series: Russia Crude Dependency Growth */}
          <SlopeChart
            start={{ label: 'FY21', value: 2 }}
            end={{ label: 'FY26', value: 36 }}
            midpoints={[
              { label: 'FY22', value: 3 },
              { label: 'FY23', value: 22 },
              { label: 'FY24', value: 31 },
              { label: 'FY25', value: 34 },
            ]}
            unit="%"
            accentColor="#991B1B"
            title="Russia's Share of India's Crude Imports — Post-Ukraine Surge"
            caption="From 2% to 36% in four years. Gujarat's Jamnagar and Nayara refineries are primary processors of Russian crude. Source: Bloomberg / Vortexa"
            height={280}
          />
        </Section>

        {/* Pharmaceutical APIs */}
        <Section icon={<Pill className="w-8 h-8 text-blue-600" />} title="Pharmaceutical APIs: The China Dependency">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="65-70% Import Dependency" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                India imports approximately <strong className="text-gray-900">65-70% of its Active Pharmaceutical Ingredients (APIs)</strong>, Key Starting Materials (KSMs), and intermediates from China — some estimates go as high as 80%.<Ref n={5} /><Ref n={8} />
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                India spent <strong className="text-gray-900">$3.6 billion</strong> importing APIs from China in FY 2024-25 — up from $3.18B in FY23.<Ref n={5} /> Before 1991, dependency was just 0.3% — it spiked to 70% by 2019.<Ref n={6} />
              </p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-red-700">Critical drug dependencies on China:<Ref n={7} /></p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-500" /> Paracetamol: 91% from China</li>
                  <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-500" /> Penicillin/salts: 95.8% from China</li>
                  <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-500" /> Streptomycin: 100% from China</li>
                  <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-500" /> Vitamin B12: 98.1% from China</li>
                </ul>
              </div>
            </DataCard>

            <DataCard title="Gujarat's Bharuch Bulk Drug Park">
              <p className="text-gray-600 mb-4 leading-relaxed">
                The Indian government approved three Bulk Drug Parks — in <strong className="text-gray-900">Bharuch (Gujarat)</strong>, Una (Himachal Pradesh), and East Godavari (Andhra Pradesh) — to reduce API import dependency.<Ref n={13} /> Rs 300 crore was released to Gujarat's State Implementing Agency as the first installment.<Ref n={13} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Under the Production Linked Incentive (PLI) scheme, financial incentives worth <strong className="text-gray-900">Rs 6,940 crore</strong> target domestic manufacturing of 53 critical APIs, with an expected 25-30% reduction in imports within five years.<Ref n={12} /> By March 2025, import savings of Rs 1,362 crore were reported.<Ref n={12} />
              </p>
            </DataCard>
          </div>

          <LollipopChart
            data={[
              { name: 'Streptomycin', value: 100, highlight: true },
              { name: 'Vitamin B12', value: 98.1, highlight: true },
              { name: 'Penicillin', value: 95.8, highlight: true },
              { name: 'Paracetamol', value: 91 },
            ]}
            valueSuffix="%"
            accentColor="#3B82F6"
            highlightColor="#9A0007"
            thresholdLine={{ value: 50, label: 'Self-reliance threshold', color: '#16A34A' }}
            title="Critical Drug API Dependency on China"
            caption="India's pharmaceutical sector is near-completely dependent on Chinese APIs for essential drugs"
            sortDescending={true}
          />

          {/* Time-Series: API Import Value Growth */}
          <PillarChart
            type="bar"
            data={[
              { name: 'FY20', value: 2.4 },
              { name: 'FY21', value: 2.6 },
              { name: 'FY22', value: 2.9 },
              { name: 'FY23', value: 3.18 },
              { name: 'FY24', value: 3.4 },
              { name: 'FY25', value: 3.6 },
            ]}
            title="India's API Imports from China ($Billion/Year)"
            caption="API import value has grown 50% in five years — from $2.4B to $3.6B. Pre-1991 dependency was just 0.3%. Source: DGFT / Pharmexcil"
            colors={['#F59E0B', '#F59E0B', '#EF4444', '#EF4444', '#DC2626', '#991B1B']}
            height={280}
          />
        </Section>

        {/* Minerals */}
        <Section icon={<Mountain className="w-8 h-8 text-gray-600" />} title="Minerals & The Eastern Supply Chain">
          <div className="bg-white/70 p-10 rounded-3xl border border-gray-200 shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            <h3 className="text-3xl font-serif font-bold mb-6 text-gray-900 relative z-10">Bauxite, Iron Ore & Interstate Dependencies</h3>
            <div className="space-y-6 relative z-10">
              <p className="text-gray-700 text-lg leading-relaxed">
                India's mineral belt — Odisha, Jharkhand, Chhattisgarh — forms the backbone of raw material supply for Gujarat's manufacturing. Odisha alone contributes <strong className="text-gray-900">76% of India's bauxite production</strong> and approximately 50% of national iron ore output.<Ref n={9} />
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                  <h4 className="font-serif font-bold text-lg mb-3 text-gray-900">Gujarat's Own Minerals</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Gujarat holds 62 million tonnes of bauxite reserves (Panchmahal, Dahod, Vadodara) and accounts for <strong>17% of national bauxite production</strong>.<Ref n={9} /> It leads with 8 operational mineral blocks. But for high-grade iron ore and bulk bauxite, it reaches into Odisha.<Ref n={11} />
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                  <h4 className="font-serif font-bold text-lg mb-3 text-gray-900">GMDC's Odisha Operations</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Gujarat Mineral Development Corporation (GMDC) operates the <strong>Baitarani-West Mine in Odisha</strong> for long-term bauxite supply — a direct interstate dependency link.<Ref n={10} /> This highlights how Gujarat's aluminium and manufacturing sectors are tethered to eastern India's mineral reserves.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Domestic bauxite production could reduce aluminium industry import dependence by 30% through 2027, while iron ore self-sufficiency would eliminate steel sector import requirements for standard grades.<Ref n={11} /> However, any disruption to the eastern railway corridors connecting Odisha-Jharkhand to Gujarat's ports would severely impact manufacturing output.
              </p>
            </div>
          </div>
        </Section>

        {/* Rare Earth & Battery Metals */}
        <Section icon={<Battery className="w-8 h-8 text-emerald-600" />} title="Rare Earth & Battery Metals: The Next Dependency Frontier">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            As Gujarat positions itself as an EV manufacturing hub — with Tata's 20 GWh battery cell factory in Sanand and Suzuki-Toshiba-Denso's cell plant — it is building a new dependency layer atop its existing ones. India imports <strong className="text-gray-900">100% of its lithium, cobalt, nickel, and vanadium</strong>, and <strong className="text-gray-900">93% of its rare earth magnets come from China</strong>.<Ref n={15} />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="~100%" label="Li-ion Battery Import Dependency" color="red" />
            <StatBox value="93%" label="Rare Earth Magnets from China" color="crimson" />
            <StatBox value="$2.8B" label="Li-ion Imports (2023)" color="orange" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The Lithium-Ion Supply Crisis" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                India's lithium-ion battery market has surged from <strong className="text-gray-900">$384.6 million in imports (2019) to $2.8 billion (2023)</strong>, yet domestic manufacturing covers only 18 GWh — primarily pack assembly using imported Chinese cells.<Ref n={17} /> Demand is projected to reach 54 GWh by FY27 and 160 GWh by 2030.<Ref n={14} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                India sources <strong className="text-gray-900">70-80% of its lithium from China</strong>. While CareEdge projects import dependency dropping to 20% by FY27 as giga-scale factories come online, this assumes uninterrupted Chinese cathode material supply — the very chokepoint Beijing has weaponised.<Ref n={14} /> India has zero domestic production capacity for NCM cathode materials, given it produces no lithium carbonate, nickel sulfate, or cobalt sulfate domestically.<Ref n={17} />
              </p>
            </DataCard>

            <DataCard title="Rare Earths: China's Geopolitical Lever">
              <p className="text-gray-600 mb-4 leading-relaxed">
                In FY 2024-25, India imported nearly <strong className="text-gray-900">54,000 tonnes of rare earth magnets — 93% from China</strong> — worth approximately Rs 1,744 crore. Imports of permanent magnets nearly doubled year-over-year.<Ref n={15} /> China controls 70% of global REE mining, 87% of processing, and 91% of refining capacity.<Ref n={15} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                When China imposed export licensing requirements on terbium and dysprosium in April 2025, Indian manufacturers including <strong className="text-gray-900">Bajaj Auto and Maruti Suzuki immediately warned of production bottlenecks</strong>.<Ref n={16} /> India's EV sector consumed 870 tonnes of rare earth magnets in FY25 alone. Bajaj's Chetak electric scooter production was halved — from 20,384 to 10,824 units — due to rare earth shortages.<Ref n={16} />
              </p>
            </DataCard>
          </div>

          <DataCard title="Gujarat's EV Ambition vs. Material Reality">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Gujarat is aggressively courting EV battery manufacturing: Tata's Agratas is investing <strong className="text-gray-900">Rs 13,000 crore in a 20 GWh lithium-ion cell factory in Sanand</strong>, while Tata Chemicals is building a separate 10 GWh facility for Rs 4,000 crore. Gujarat Fluorochemicals and Neogen Chemicals plan electrolyte salt plants.<Ref n={17} /> The state's ports — Mundra and Kandla — already serve as the primary import gateway for battery materials.
            </p>
            <p className="text-gray-600 leading-relaxed">
              But this mirrors the crude oil pattern: Gujarat builds world-class processing capacity while remaining entirely dependent on imported feedstock. India holds an estimated <strong className="text-gray-900">5.9 million tonnes of lithium reserves in Jammu & Kashmir</strong>, but commercial extraction remains years away.<Ref n={17} /> The National Critical Mineral Mission (Rs 16,300 crore) and the Rs 7,300 crore rare earth permanent magnet scheme target long-term self-sufficiency, but for the foreseeable future, Gujarat's EV manufacturing ambitions will run on Chinese lithium and Chinese rare earths — replicating the same structural dependency that defines its petroleum and pharmaceutical sectors.<Ref n={15} />
            </p>
          </DataCard>
        </Section>

      </div>

      {/* Chemical & Petrochemical Corridor */}
      <Section icon={<Factory className="w-8 h-8 text-teal-600" />} title="The Bharuch-Dahej Chemical Corridor: India's Chemical Capital">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <StatBox value="3,500+" label="Chemical Units (Bharuch Belt)" color="teal" />
          <StatBox value="40%" label="India's Chemical Output" color="blue" />
          <StatBox value="$4.2B" label="Annual Chemical Exports (Gujarat)" color="green" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCard title="Dahej PCPIR: India's Largest Petrochemical Hub">
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Dahej Petroleum, Chemical and Petrochemical Investment Region (PCPIR) — spread over <strong className="text-gray-900">453 sq km</strong> — is India's largest integrated chemical manufacturing zone. It hosts ONGC Petro Additions Ltd (OPaL), a 1.1 MTPA ethylene cracker that is the backbone of India's polymer chain.
            </p>
            <p className="text-gray-600 leading-relaxed">
              OPaL's feedstock is <strong>imported naphtha and natural gas</strong> — both sourced externally. The entire downstream plastics, polymers, and specialty chemicals industry in Gujarat is thus dependent on feedstock that originates from Middle Eastern crude oil or LNG terminals at Dahej and Hazira.
            </p>
          </DataCard>

          <DataCard title="Morbi's Ceramic Raw Material Chain" alert={true}>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Morbi's <strong className="text-gray-900">1,200+ ceramic factories</strong> (of which 550+ were shuttered during the 2026 gas crisis) consume approximately <strong className="text-gray-900">30 million tonnes of raw materials annually</strong> — primarily china clay, ball clay, feldspar, and silica sand. While Gujarat has some local clay deposits, high-quality china clay is imported from <strong>Rajasthan, Karnataka, and even Turkey and Ukraine</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The gas fuel dependency adds another layer: Morbi's kilns require continuous <strong>1,100-1,200°C firing</strong> — achieved only with natural gas or propane. The 2026 propane supply halt demonstrated that even abundant raw materials are useless without imported fuel to fire the kilns.
            </p>
          </DataCard>
        </div>
      </Section>

      {/* Natural Gas Supply */}
      <Section icon={<Fuel className="w-8 h-8 text-red-600" />} title="Natural Gas: Gujarat's Most Critical Input">
        <DataCard title="Gujarat Consumes 25% of India's Natural Gas">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Gujarat accounts for approximately <strong className="text-gray-900">25% of India's total natural gas consumption</strong>, with a pipeline network exceeding 5,850 km. Gujarat Gas Ltd — the state's largest gas distributor — serves 32 lakh residential, 31,000 commercial, and 5,500 industrial consumers across 36 districts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Of this gas supply, approximately <strong className="text-gray-900">73% comes from imported LNG</strong> (regasified at Dahej and Hazira), with the remainder from domestic production at ONGC's Cambay Basin fields and KG Basin allocations. Domestic gas production has been <strong>declining since 2010</strong>, making Gujarat progressively more dependent on LNG imports.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The industrial dependency is starkest in three clusters: <strong>Morbi (ceramics — gas for kilns)</strong>, <strong>Bharuch (chemicals — gas as feedstock)</strong>, and <strong>Surat (textiles — gas for dyeing boilers)</strong>. These three clusters alone account for an estimated 60% of Gujarat's industrial gas consumption.
          </p>
        </DataCard>
      </Section>

      {/* Fertilizer Dependency */}
      <Section icon={<Mountain className="w-8 h-8 text-green-600" />} title="Fertilizer & Agricultural Inputs: The Silent Import Dependency">
        <DataCard title="Gujarat's Fertilizer Complex: Processing Imported Raw Materials">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Gujarat hosts <strong className="text-gray-900">GSFC (Vadodara), GNFC (Bharuch), and IFFCO (Kandla)</strong> — among India's largest fertilizer producers. Yet the raw material dependency is near-total: India imports <strong className="text-gray-900">100% of its potash</strong> (from Belarus, Canada, Russia), <strong>100% of phosphoric acid</strong> (from Morocco, Jordan), and a growing share of its natural gas feedstock for urea (via LNG).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong className="text-gray-900">Kandla fertilizer import terminal</strong> handles the bulk of India's potash and DAP raw material imports. When Belarus was sanctioned in 2022, Indian potash prices spiked 300% — directly impacting Gujarat's farming costs. GSFC's urea production at Vadodara consumes natural gas sourced from the same LNG terminals (Dahej, Hazira) that serve Morbi's ceramics — creating direct competition for a constrained fuel supply.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Gujarat's agricultural model thus has a hidden layer of industrial dependency: the fertilizers that enable its cotton, groundnut, and wheat cultivation are manufactured from 100% imported raw materials, processed with imported energy, and distributed through infrastructure shared with heavy industry.
          </p>
        </DataCard>
      </Section>

      <div>
        <div className="flex justify-end mb-4 pr-2 sm:pr-4">
          <GovResponseToggle checked={showGov} onChange={setShowGov} />
        </div>
        <CounterArgument showGov={showGov} messages={[
        { from: 'raju', text: 'Jamnagar is the world\'s largest refinery — **1.4 million barrels per day**. Gujarat has **216+** pharma plants. We\'re a manufacturing powerhouse.' },
        { from: 'priya', text: 'A powerhouse that runs on **85%** imported crude and **65-70%** Chinese APIs. Gujarat processes, but doesn\'t produce. That\'s a pass-through economy.', source: 'MoC Tradestats / Pharmexcil FY25' },
        { from: 'raju', text: 'Import dependency is normal for any manufacturing hub. Japan, Korea — they all import raw materials.' },
        { from: 'priya', text: 'Japan diversified suppliers over decades. Gujarat went from **2%** Russian crude in FY21 to **36%** in FY25 — in the opposite direction of diversification. Nayara is literally half-owned by Rosneft.', source: 'Carnegie Endowment / Bloomberg' },
        { from: 'raju', text: 'Russian crude is cheap. Smart economics.' },
        { from: 'priya', text: 'Cheap until sanctions bite. Paracetamol API: **91%** from China. Streptomycin: **100%**. Potash: **100%** imported. One supply chain disruption and Gujarat\'s pharma + agriculture collapse simultaneously.', source: 'ORF / Pharmabiz FY25 Data' },
        { from: 'gov', text: `Gujarat's materials and ceramics sector leverages an optimized cluster-based approach. Strategic land allocation and common utilities minimize environmental footprints while securing India's supply chains.`, source: `Gujarat Industrial Development Corporation - GIDC` }
        ]} />
      </div>

      <SourceList sources={sources} />
      
    </main>
  )
}
