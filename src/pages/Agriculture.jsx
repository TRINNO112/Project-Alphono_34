import { motion } from 'framer-motion'
import { Wheat, Droplets, Bug, TrendingDown, AlertTriangle } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { LollipopChart } from '../components/charts/LollipopChart'
import { Treemap } from '../components/charts/Treemap'
import { OTRErosion } from '../components/charts/OTRErosion'
import { FiberizationGap } from '../components/charts/FiberizationGap'
import { CounterArgument } from '../components/CounterArgument'
import { useLocalStorageToggle } from '../hooks/useLocalStorageToggle'
import { GovResponseToggle } from '../components/GovResponseToggle'
import ScrollSpy from '../components/ScrollSpy'
import StoryMarker from '../components/StoryMarker'

const sources = [
  { title: "India's Fertilizer Import Dependencies and NBS Subsidy Outlays amidst Red Sea Crisis", publication: "Argus Media Energy & Agriculture Reports, 2025/2026", url: "https://argusmedia.com/fertilizers/india-import-data" },
  { title: "The Illusion of the Gujarat Agricultural Miracle and the Saurashtra Debt Crisis", publication: "The Wire", url: "https://thewire.in/agriculture/gujarat-saurashtra-distress" },
  { title: "Groundwater Depletion in Mehsana and the Narmada Water Diversion Paradox", publication: "Down To Earth Magazine", url: "https://downtoearth.org.in/water/narmada-diversion" },
  { title: "Drought-Hit Gujarat Has Water for Factories, Not for Farmers", publication: "IndiaSpend", url: "https://indiaspend.com/gujarat-water-crisis" },
  { title: "MOP/DAP Import Shifts Leaning Towards Russian Procurement", publication: "Economic Times", url: "https://economictimes.indiatimes.com/industry/indl-goods/svs/chem-/-fertilisers" },
  { title: "Pink Bollworm Resistance to Standard Cry1Ac Gene Traits in Regional Cotton Zones", publication: "ICAR Research Papers", url: "https://icar.org.in/cotton-research" },
  { title: "NCRB Report 2023: Approximately one farmer took their own life every day", publication: "Down To Earth (NCRB analysis)", url: "https://www.downtoearth.org.in/health/ncrb-report-2023-approximately-one-farmer-took-their-own-life-every-day-shows-assessment" },
  { title: "Resistance development in pink bollworm against Bt cotton and its establishment as mid-season pest in India", publication: "Nature Scientific Reports (2025)", url: "https://www.nature.com/articles/s41598-025-89575-z" },
  { title: "Cotton Curse: How pink bollworm evolved to be the biggest threat for Bt cotton", publication: "Down To Earth", url: "https://www.downtoearth.org.in/agriculture/cotton-curse-how-pink-bollworm-evolved-to-be-the-biggest-threat-for-bt-cotton" },
  { title: "How satellite survey glitch has left 80,000 Gujarat groundnut farmers in the lurch", publication: "The Federal", url: "https://thefederal.com/category/states/west/gujarat/satellite-survey-glitch-gujarat-ground-farmers-in-the-lurch-207661" },
  { title: "Gujarat govt to buy groundnut, moong, urad, soybean at MSP for 90 days from Nov 11", publication: "DeshGujarat", url: "https://deshgujarat.com/2024/09/30/gujarat-govt-to-buy-groundnut-moong-urad-soybean-at-msp-for-90-days-from-nov-11/" },
  { title: "Quantification of trends in groundwater levels of Gujarat in western India", publication: "Hydrological Sciences Journal (Taylor & Francis)", url: "https://www.tandfonline.com/doi/full/10.1080/02626667.2012.705845" },
  { title: "Groundwater Scenario of North Gujarat: Water Conservation and Recharge Practices", publication: "Geological Society of India", url: "https://www.geosocindia.org/GSI/publications/groundwater-scenario-of-north-gujarat-water-conservation-and-recharge-practices" },
  { title: "India secures 86 lakh tonnes of fertilizer through global agreements; P&K production rises to 211 LMT", publication: "DD News (Government of India)", url: "https://ddnews.gov.in/en/india-secures-86-lakh-tonnes-of-fertilizer-through-global-agreements-domestic-pk-production-rises-to-211-lmt/" },
  { title: "Sabarmati, the river that Gandhi once chose to live by, is now dry and polluted", publication: "Mongabay India", url: "https://india.mongabay.com/2019/04/sabarmati-the-river-that-gandhi-once-chose-to-live-by-is-now-dry-and-polluted/" },
  { title: "Saurashtra groundnut yield decline 48% (2018-19): farmer income down 80%", publication: "Mongabay India", url: "https://india.mongabay.com/" },
  { title: "Saurashtra Narmada Avtaran Irrigation (SAUNI) Yojana — Implementation Status", publication: "Government of Gujarat — Narmada Department", url: "https://narmada.gujarat.gov.in/" },
  { title: "Gujarat Agriculture & Cooperation Department — Annual State Progress 2024", publication: "Government of Gujarat", url: "https://agri.gujarat.gov.in/" },
  { title: "Cyclone Tauktae landfall May 2021 on Amreli–Gir Somnath coast", publication: "The Indian Express", url: "https://indianexpress.com/" },
  { title: "CSE Pollution Monitoring Laboratory — pesticide residue monitoring", publication: "Centre for Science and Environment", url: "https://www.cseindia.org/pollution-monitoring-557" },
]

const spySections = [
  { id: 'the-fertilizer-import-trap', label: 'Fertilizer Imports' },
  { id: 'seed-sovereignty-the-bt-cotton-trap', label: 'Bt Cotton Trap' },
  { id: 'water-monopolization-groundwater-collapse', label: 'Water Collapse' },
  { id: 'the-rural-urban-flight', label: 'Rural Flight' },
  { id: 'timeline-of-agrarian-events', label: 'Timeline' },
]

export default function Agriculture() {
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
            <span>PILLAR 10</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>STRUCTURAL DEPENDENCY</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 leading-tight">
            Agriculture & <span className="italic text-crimson">Agrarian Distress</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat's agricultural "miracle" masks a <strong className="font-semibold text-gray-900">total dependency on imported fertilizers</strong>, 
            proprietary seed monopolies, and collapsing groundwater tables — trapping millions of farmers in an inescapable cycle of debt, distress, and forced urban migration.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* ═══ Section 1: Fertilizer Import Dependency ═══ */}
        <Section icon={<TrendingDown className="w-8 h-8 text-red-600" />} title="The Fertilizer Import Trap">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="67%" label="DAP Imported" color="crimson" />
            <StatBox value="100%" label="MOP Imported" color="red" />
            <StatBox value="0" label="Domestic Potash Reserves" color="red" />
          </div>

          <DataCard title="Reader primer — what these acronyms actually mean">
            <p className="text-gray-600 leading-relaxed mb-2">
              <strong className="text-gray-900">DAP</strong> (Di-Ammonium Phosphate) and <strong className="text-gray-900">MOP</strong> (Muriate of Potash) are the two non-nitrogen fertilizers Gujarat's farms cannot grow without. India produced 211 LMT of P&K fertilizers domestically in FY24, but still relies on global agreements to import another 86 lakh tonnes of finished fertilizer + raw rock phosphate to close the gap.<Ref n={14} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              The <strong className="text-gray-900">Nutrient-Based Subsidy (NBS)</strong> regime fixes the farm-gate price; New Delhi absorbs the difference. When freight or feedstock spikes — Red Sea routing, Belarus sanctions, Russian rouble repricing — the subsidy bill, not the farmer's bill, is what blows out first.<Ref n={1} />
            </p>
          </DataCard>

          {/* DAP Import Sources */}
          <Treemap
            title="India's DAP Import Sources — Share by Country (%)"
            caption="Figure 1: India imports ~67% of its total DAP requirement. Geopolitical disruptions in any single corridor (Red Sea, Suez) cause immediate price surges passed onto farmers. Source: Argus Media"
            data={[
              { name: 'Morocco (OCP)', value: 28, color: '#16A34A' },
              { name: 'Saudi Arabia', value: 18, color: '#EAB308' },
              { name: 'Russia', value: 16, color: '#DC2626' },
              { name: 'Jordan', value: 12, color: '#F59E0B' },
              { name: 'China', value: 8, color: '#EF4444' },
              { name: 'Others', value: 18, color: '#6B7280' },
            ]}
            height={320}
          />

          {/* MOP Supplier Breakdown */}
          <PillarChart
            type="pie"
            title="Muriate of Potash (MOP) — 100% Import Dependency by Supplier"
            caption="Figure 2: India has ZERO domestic potash reserves. 100% of MOP is imported — with supply concentrated in geopolitically sanctioned nations (Belarus, Russia). Source: Economic Times"
            data={[
              { name: 'Belarus', value: 32 },
              { name: 'Russia', value: 28 },
              { name: 'Canada', value: 22 },
              { name: 'Israel', value: 12 },
              { name: 'Others', value: 6 },
            ]}
            colors={['#DC2626', '#EF4444', '#3B82F6', '#8B5CF6', '#6B7280']}
            height={340}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The Geopolitical Fertilizer Chokepoint" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Western sanctions on <strong className="text-gray-900">Belarus and Russia</strong> — two of India's top MOP suppliers — have forced the government into alternative payment arrangements that bypass SWIFT, creating massive friction in timely supply.<Ref n={1} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Red Sea shipping disruptions in 2024 caused immediate <strong className="text-gray-900">DAP price surges at Kandla Port</strong>, directly impacting Gujarat's Kharif and Rabi sowing seasons. When the NBS subsidy falls short, farmers face black market hoarding and adulterated fertilizers.<Ref n={5} />
              </p>
            </DataCard>

            <DataCard title="NBS Subsidy: The Unsustainable Buffer">
              <p className="text-gray-600 mb-4 leading-relaxed">
                The <strong className="text-gray-900">Nutrient-Based Subsidy (NBS) Scheme</strong> absorbs global price shocks — but when geopolitical tensions spike shipping costs, subsidy outlays balloon uncontrollably.<Ref n={1} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every rupee the government cannot subsidize is passed directly onto the farmer — leading to <strong className="text-gray-900">suppressed yields, mounting debt, and accelerated rural flight</strong>.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 2: Bt Cotton & Seed Monopoly ═══ */}
        <Section icon={<Bug className="w-8 h-8 text-orange-600" />} title="Seed Sovereignty & The Bt Cotton Trap">

          <DataCard title="Reader primer — Cry1Ac, Cry2Ab, and what 'resistance' actually means">
            <p className="text-gray-600 leading-relaxed mb-2">
              <strong className="text-gray-900">Bt Cotton</strong> is cotton genetically modified to express bacterial proteins — <strong className="text-gray-900">Cry1Ac</strong> and <strong className="text-gray-900">Cry2Ab</strong> — that kill bollworm larvae on contact. The technology was approved in India in 2002 and within a decade replaced ≥95% of cotton acreage.<Ref n={6} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              Pink bollworm has now evolved field-level resistance to both proteins. A 2025 <em>Nature Scientific Reports</em> field survey establishes the pest as a <strong className="text-gray-900">mid-season threat across India</strong>, no longer a late-season nuisance.<Ref n={8} /> Pesticide rounds per acre have climbed back above pre-Bt levels — the original case for Bt was reduced spraying.<Ref n={9} />
            </p>
          </DataCard>

          {/* Farmer suicide trendline — NCRB */}
          <OTRErosion
            title="The Human Ledger — Indian Farmer Suicides per Day (NCRB Annual)"
            caption="Figure: NCRB's Accidental Deaths & Suicides in India report logs farmer/cultivator suicides every year. The 2023 release confirms the rate has not fallen below 'one per day' for over a decade — the cumulative human cost of input-cost spirals, debt to informal lenders, and crop failures from pest resistance + erratic monsoons."
            unit=" /day"
            data={[
              { year: '2014', value: 16.4 },
              { year: '2015', value: 22.1 },
              { year: '2016', value: 18.6 },
              { year: '2017', value: 14.9 },
              { year: '2018', value: 14.5 },
              { year: '2019', value: 14.8 },
              { year: '2020', value: 14.6 },
              { year: '2021', value: 15.5 },
              { year: '2022', value: 15.4 },
              { year: '2023', value: 15.6 },
            ]}
            height={420}
          />

          {/* The Pesticide Treadmill — Visual Flow */}
          <div className="bg-white/70 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gray-900 relative z-10">The Pesticide Treadmill Cycle</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {[
                { step: '01', title: 'Proprietary Seeds', desc: 'Farmers buy Bt Cotton (Monsanto/Bayer). Cannot replant — forced into annual purchase cycles.', color: 'border-orange-400' },
                { step: '02', title: 'Pest Resistance', desc: 'Pink Bollworm develops resistance to Cry1Ac and Cry2Ab traits. Original promise of reduced pesticide use collapses.', color: 'border-red-400' },
                { step: '03', title: 'Cost Escalation', desc: 'Farmers forced to buy next-gen seeds (Bollgard II) PLUS higher volumes of toxic chemical pesticides.', color: 'border-crimson' },
                { step: '04', title: 'Debt Spiral', desc: 'Massive upfront capital drives farmers to informal moneylenders at exorbitant interest rates. Cycle repeats.', color: 'border-red-700' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`relative p-5 rounded-2xl bg-white/80 border-l-4 ${item.color} shadow-sm`}
                >
                  <span className="text-[10px] font-mono font-bold text-crimson tracking-widest">{item.step}</span>
                  <h4 className="text-base font-bold text-gray-900 mt-1 mb-2 font-serif">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-crimson text-xl font-bold">→</div>
                  )}
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-6 italic font-serif text-center relative z-10">
              Figure 3: The Bt Cotton Pesticide Treadmill — a closed-loop dependency trap. Source: ICAR Research<Ref n={6} />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Loss of Indigenous Cultivation">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Before the Bt Cotton boom (early 2000s), farmers preserved and traded <strong className="text-gray-900">indigenous "Desi cotton" varieties</strong>. The current model relies entirely on proprietary, commercial hybrid seeds.<Ref n={6} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Initially controlled by <strong className="text-gray-900">Monsanto</strong> (now Bayer), farmers are <strong className="text-gray-900">legally and biologically prevented</strong> from replanting next-generation seeds — forced into perpetual purchasing cycles.
              </p>
            </DataCard>

            <DataCard title="The Pink Bollworm Crisis" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Pests like the <strong className="text-gray-900">Pink Bollworm</strong> have developed complete resistance to early-generation Bt cotton traits (Cry1Ac and Cry2Ab).<Ref n={6} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                The original promise of <strong className="text-gray-900">massive reduction in pesticide use has completely collapsed</strong>. Farmers now deploy significantly higher volumes of toxic chemicals — locking them into massive upfront capital expenditures.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 3: Water Monopolization ═══ */}
        <Section icon={<Droplets className="w-8 h-8 text-blue-600" />} title="Water Monopolization & Groundwater Collapse">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="132%" label="Extraction vs Recharge" color="red" />
            <StatBox value="1000ft" label="Pump Depth (Mehsana)" color="crimson" />
            <StatBox value="0" label="Terminal Canals Built (Saurashtra)" color="red" />
          </div>

          <DataCard title="Reader primer — 'stage of extraction' and why 100% is a wall, not a target">
            <p className="text-gray-600 leading-relaxed mb-2">
              The <strong className="text-gray-900">stage of groundwater extraction</strong> is annual draft divided by annual rechargeable resource, expressed as a percentage. Anything <strong className="text-gray-900">above 100% is fossil mining</strong> — the aquifer cannot replenish what is being pumped out, regardless of monsoon. CGWB and peer-reviewed hydrology surveys both classify North Gujarat as <strong className="text-gray-900">over-exploited</strong> on a multi-decade trend.<Ref n={12} /><Ref n={13} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-gray-900">SAUNI</strong> (Saurashtra Narmada Avtaran Irrigation) was the political answer — pipe Narmada surplus into 115 dams across Saurashtra. Implementation has lagged: terminal canal infrastructure for the <em>last-mile</em> delivery to farms remains incomplete two decades on.<Ref n={17} /><Ref n={4} />
            </p>
          </DataCard>

          {/* Groundwater Over-Extraction Chart */}
          <LollipopChart
            title="Groundwater: Extraction Rate vs Natural Recharge by Region"
            caption="Figure 4: In Mehsana, extraction routinely exceeds 132% of natural recharge — draining an unreplenishable fossil water bank. Pumps now reach 800-1000ft depths. Source: Down To Earth / CGWB"
            data={[
              { name: 'Mehsana', value: 132, highlight: true },
              { name: 'Banaskantha', value: 118 },
              { name: 'Patan', value: 105 },
              { name: 'Sabarkantha', value: 95 },
            ]}
            valueSuffix="%"
            thresholdLine={{ value: 70, label: 'Safe Limit', color: '#16A34A' }}
            accentColor="#DC2626"
            highlightColor="#991B1B"
            height={300}
          />

          {/* Water Diversion Visual */}
          <div className="bg-white/70 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full blur-[80px] -ml-32 -mt-32 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gray-900 relative z-10">
              Narmada Water: Promised to Farmers, Delivered to Factories
            </h3>

            {/* Flow comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200"
              >
                <div className="text-xs font-mono font-bold text-blue-600 tracking-widest mb-3 uppercase">Promise</div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Sardar Sarovar Dam was sold as <strong className="text-gray-900">agricultural salvation for drought-prone Kutch & Saurashtra</strong>.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-red-50/60 border border-red-200"
              >
                <div className="text-xs font-mono font-bold text-red-600 tracking-widest mb-3 uppercase">Reality</div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Water <strong className="text-gray-900">systematically diverted via pipelines</strong> to fuel Sanand car assembly, Ahmedabad industries, Bharuch chemicals, and Dahej petrochemicals.<Ref n={3} /><Ref n={4} />
                </p>
              </motion.div>
            </div>

            <PillarChart
              type="bar"
              title="Narmada Water Allocation: Agriculture vs Industry (Estimated %)"
              caption="Figure 5: Despite being built for agriculture, a massive volume of Narmada water never reaches terminal farm canals in Saurashtra. Source: IndiaSpend / Down To Earth"
              data={[
                { name: 'Intended (Agri)', value: 75 },
                { name: 'Actual (Agri)', value: 35 },
                { name: 'Industrial Div.', value: 40 },
                { name: 'Urban Supply', value: 18 },
                { name: 'Losses', value: 7 },
              ]}
              colors={['#16A34A', '#EF4444', '#991B1B', '#3B82F6', '#6B7280']}
              height={280}
            />
          </div>

          {/* Micro-irrigation coverage by district */}
          <FiberizationGap
            title="Micro-Irrigation Coverage — Net Sown Area Under Drip + Sprinkler (%)"
            caption="Figure 6: Drip + sprinkler systems are the only proven retrofit that lets a Saurashtra/North-Gujarat farmer reduce groundwater draft without losing yield. State coverage remains uneven: districts with the worst over-extraction (Mehsana, Banaskantha, Patan) are precisely where the retrofit is least complete. Compiled from Gujarat Agriculture Dept district progress reports."
            unit="%"
            target={100}
            data={[
              { state: 'Anand', value: 62 },
              { state: 'Junagadh', value: 54 },
              { state: 'Kutch', value: 48 },
              { state: 'Rajkot', value: 44 },
              { state: 'Mehsana', value: 41 },
              { state: 'Patan', value: 36 },
              { state: 'Banaskantha', value: 33 },
              { state: 'Sabarkantha', value: 29 },
            ]}
            height={420}
          />
        </Section>

        {/* ═══ Section 4: Rural-Urban Flight ═══ */}
        <Section icon={<AlertTriangle className="w-8 h-8 text-yellow-600" />} title="The Rural-Urban Flight">
          <DataCard title="The 2018–19 Saurashtra groundnut shock — when the floor falls out">
            <p className="text-gray-600 leading-relaxed mb-2">
              In 2018–19, Saurashtra's groundnut yield fell roughly <strong className="text-gray-900">48%</strong> on the back of erratic rains and pest pressure. Farmer income on the same plots collapsed by an estimated <strong className="text-gray-900">80%</strong> once procurement delays and price-realisation gaps were factored in.<Ref n={16} />
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              The state's MSP-procurement window for groundnut, moong, urad and soybean was reopened in late 2024 for a 90-day buying push — an emergency lever, not a structural fix.<Ref n={11} /> A separate <em>satellite-survey glitch</em> in the same cycle wrongly excluded ~80,000 groundnut farmers from compensation eligibility, exposing how brittle the digital-procurement stack is.<Ref n={10} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              Layered onto this: <strong className="text-gray-900">Cyclone Tauktae</strong> (May 2021) made landfall on the Amreli–Gir Somnath coast, flattening orchards and salt-flooding coastal aquifers across the same belt.<Ref n={19} />
            </p>
          </DataCard>

          <DataCard title="From Farmer to Factory Floor" alert={true}>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The culmination of <strong className="text-gray-900">soaring input costs</strong> (seeds + electricity + imported fertilizers), combined with <strong className="text-gray-900">collapsing groundwater tables</strong> and recurring climate shocks, leaves zero profit margin — forcing farmers to abandon agriculture entirely.<Ref n={2} /><Ref n={7} />
            </p>
            <p className="mb-6 text-sm text-gray-600">
              Named cases from the Nov 2025 unseasonal-rain crisis:
              <StoryMarker storyId="farmer-shailesh-savaliya" />
              <StoryMarker storyId="farmer-gaffar-unde" />
              <StoryMarker storyId="farmer-karshan-vanoriya" />
              <StoryMarker storyId="farmer-rabarika-65" />
            </p>
            
            {/* Migration flow visual */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { from: 'Saurashtra Farmers', to: 'Morbi Ceramic Units', risk: 'Silicosis, 12hr shifts, no ESI', color: 'border-red-500' },
                { from: 'North Gujarat Farmers', to: 'Surat Powerloom Mills', risk: 'Dust inhalation, deafening noise', color: 'border-orange-500' },
                { from: 'Kutch Dryland Farmers', to: 'Urban Unorganized Sector', risk: 'Daily wage exploitation, no rights', color: 'border-yellow-500' },
              ].map((flow, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-5 rounded-2xl bg-white/60/40 border-l-4 ${flow.color} shadow-sm`}
                >
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Origin</div>
                  <div className="text-sm font-bold text-gray-900 mb-3">{flow.from}</div>
                  <div className="text-crimson font-bold text-lg mb-1">↓</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Destination</div>
                  <div className="text-sm font-bold text-gray-900 mb-3">{flow.to}</div>
                  <div className="text-xs text-red-600 font-medium mt-2 p-2 bg-red-50/50 rounded-lg">{flow.risk}</div>
                </motion.div>
              ))}
            </div>
          </DataCard>
        </Section>

        {/* ═══ Timeline ═══ */}
        <Section icon={<Wheat className="w-8 h-8 text-green-700" />} title="Timeline of Agrarian Events">
          <div className="space-y-0">
            {[
              { year: '2002', event: 'India formally approves commercial cultivation of Bt Cotton, sparking the immediate shift away from Desi varieties in Gujarat.' },
              { year: '2006', event: 'Narmada Main Canal begins operations, yet terminal agricultural distribution networks in Saurashtra remain unbuilt for decades.' },
              { year: '2014-15', event: 'Crashing global commodity prices for cotton drive agrarian distress and subsequent mass rural protests (the Patidar agitation).' },
              { year: '2018-19', event: 'Saurashtra groundnut yield down ~48%; farmer income collapses ~80% on the same belt the state markets as its agri-success story.' },
              { year: '2021', event: 'Cyclone Tauktae makes landfall on the Amreli-Gir Somnath coast in May, devastating orchards and salt-flooding coastal aquifers.' },
              { year: '2024', event: 'Global Red Sea shipping crisis causes massive bottlenecks in imported MOP and DAP arrivals at Kandla Port; 90-day MSP procurement window reopened for groundnut/moong/urad/soybean.' },
              { year: '2025', event: 'Nature Scientific Reports field survey confirms pink bollworm has established itself as a mid-season pest across India, with field-level resistance to both Cry1Ac and Cry2Ab traits.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-crimson shadow-[0_0_12px_rgba(211,47,47,0.4)] shrink-0 mt-1.5" />
                  {i < 6 && <div className="w-0.5 flex-1 bg-gradient-to-b from-crimson/40 to-transparent min-h-[40px]" />}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-mono font-bold text-crimson tracking-wider">{item.year}</span>
                  <p className="text-gray-700 mt-1 leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

      </div>

      <div>
        <div className="flex justify-end mb-4 pr-2 sm:pr-4">
          <GovResponseToggle checked={showGov} onChange={setShowGov} />
        </div>
        <CounterArgument showGov={showGov} stats={[
          { value: '100%', label: 'MOP Imported' },
          { value: '132%', label: 'Over-Extraction' },
          { value: '0', label: 'Potash Reserves' },
        ]} messages={[
          { from: 'student', text: `Gujarat is India's agricultural success story. Cash crops like cotton and groundnut generate enormous output. The state's farming sector is thriving.` },
          { from: 'priya', text: `67% of DAP and 100% of MOP are imported. Groundwater extraction at 132% of recharge is mining fossil water. Bt Cotton has locked farmers into a pesticide treadmill with Bayer-controlled seeds. Narmada water promised to Saurashtra farmers was diverted to industrial corridors. The 'miracle' is a dependency trap.` },
          { from: 'gov', text: `Gujarat's dairy and agricultural cooperatives, anchored by AMUL, represent the most successful decentralized economic model in India. The SAUNI scheme and Narmada distribution have consistently stabilized farm incomes despite regional aridity.`, source: `GCMMF Annual Report / Gujarat Agriculture Dept` }
        ]} />
      </div>

      <SourceList sources={sources} />
      
    </main>
  )
}
