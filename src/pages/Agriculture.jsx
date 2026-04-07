import { motion } from 'framer-motion'
import { Wheat, Droplets, Bug, TrendingDown, AlertTriangle } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { CounterArgument } from '../components/CounterArgument'

const sources = [
  { title: "India's Fertilizer Import Dependencies and NBS Subsidy Outlays amidst Red Sea Crisis", publication: "Argus Media Energy & Agriculture Reports, 2025/2026", url: "https://argusmedia.com/fertilizers/india-import-data" },
  { title: "The Illusion of the Gujarat Agricultural Miracle and the Saurashtra Debt Crisis", publication: "The Wire (Opinion/Analysis)", url: "https://thewire.in/agriculture/gujarat-saurashtra-distress" },
  { title: "Groundwater Depletion in Mehsana and the Narmada Water Diversion Paradox", publication: "Down To Earth Magazine", url: "https://downtoearth.org.in/water/narmada-diversion" },
  { title: "Drought-Hit Gujarat Has Water for Factories, Not for Farmers", publication: "IndiaSpend (Data Journalism)", url: "https://indiaspend.com/gujarat-water-crisis" },
  { title: "MOP/DAP Import Shifts Leaning Towards Russian Procurement", publication: "Economic Times Financial Reporting", url: "https://economictimes.indiatimes.com/industry/indl-goods/svs/chem-/-fertilisers" },
  { title: "Pink Bollworm Resistance to Standard Cry1Ac Gene Traits in Regional Cotton Zones", publication: "ICAR Research Papers", url: "https://icar.org.in/cotton-research" },
]

export default function Agriculture() {
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
            <span>PILLAR 10</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>STRUCTURAL DEPENDENCY</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Agriculture & <span className="italic text-crimson">Agrarian Distress</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat's agricultural "miracle" masks a <strong className="font-semibold text-gray-900 dark:text-white">total dependency on imported fertilizers</strong>, 
            proprietary seed monopolies, and collapsing groundwater tables — trapping millions of farmers in an inescapable cycle of debt, distress, and forced urban migration.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* ═══ Section 1: Fertilizer Import Dependency ═══ */}
        <Section icon={<TrendingDown className="w-8 h-8 text-red-600 dark:text-red-400" />} title="The Fertilizer Import Trap">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="67%" label="DAP Imported" color="crimson" />
            <StatBox value="100%" label="MOP Imported" color="red" />
            <StatBox value="0" label="Domestic Potash Reserves" color="red" />
          </div>

          {/* DAP Import Sources */}
          <PillarChart
            type="bar"
            title="India's DAP Import Sources — Share by Country (%)"
            caption="Figure 1: India imports ~67% of its total DAP requirement. Geopolitical disruptions in any single corridor (Red Sea, Suez) cause immediate price surges passed onto farmers. Source: Argus Media"
            data={[
              { name: 'Morocco (OCP)', value: 28 },
              { name: 'Saudi Arabia', value: 18 },
              { name: 'Russia', value: 16 },
              { name: 'Jordan', value: 12 },
              { name: 'China', value: 8 },
              { name: 'Others', value: 18 },
            ]}
            colors={['#16A34A', '#EAB308', '#DC2626', '#F59E0B', '#EF4444', '#6B7280']}
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
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Western sanctions on <strong className="text-gray-900 dark:text-white">Belarus and Russia</strong> — two of India's top MOP suppliers — have forced the government into alternative payment arrangements that bypass SWIFT, creating massive friction in timely supply.<Ref n={1} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Red Sea shipping disruptions in 2024 caused immediate <strong className="text-gray-900 dark:text-white">DAP price surges at Kandla Port</strong>, directly impacting Gujarat's Kharif and Rabi sowing seasons. When the NBS subsidy falls short, farmers face black market hoarding and adulterated fertilizers.<Ref n={5} />
              </p>
            </DataCard>

            <DataCard title="NBS Subsidy: The Unsustainable Buffer">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                The <strong className="text-gray-900 dark:text-white">Nutrient-Based Subsidy (NBS) Scheme</strong> absorbs global price shocks — but when geopolitical tensions spike shipping costs, subsidy outlays balloon uncontrollably.<Ref n={1} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Every rupee the government cannot subsidize is passed directly onto the farmer — leading to <strong className="text-gray-900 dark:text-white">suppressed yields, mounting debt, and accelerated rural flight</strong>.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 2: Bt Cotton & Seed Monopoly ═══ */}
        <Section icon={<Bug className="w-8 h-8 text-orange-600 dark:text-orange-400" />} title="Seed Sovereignty & The Bt Cotton Trap">

          {/* The Pesticide Treadmill — Visual Flow */}
          <div className="bg-white/70 dark:bg-dark-surface/70 p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-dark-border shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 dark:bg-orange-900 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gray-900 dark:text-white relative z-10">The Pesticide Treadmill Cycle</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {[
                { step: '01', title: 'Proprietary Seeds', desc: 'Farmers buy Bt Cotton (Monsanto/Bayer). Cannot replant — forced into annual purchase cycles.', color: 'border-orange-400 dark:border-orange-600' },
                { step: '02', title: 'Pest Resistance', desc: 'Pink Bollworm develops resistance to Cry1Ac and Cry2Ab traits. Original promise of reduced pesticide use collapses.', color: 'border-red-400 dark:border-red-600' },
                { step: '03', title: 'Cost Escalation', desc: 'Farmers forced to buy next-gen seeds (Bollgard II) PLUS higher volumes of toxic chemical pesticides.', color: 'border-crimson dark:border-red-500' },
                { step: '04', title: 'Debt Spiral', desc: 'Massive upfront capital drives farmers to informal moneylenders at exorbitant interest rates. Cycle repeats.', color: 'border-red-700 dark:border-red-400' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`relative p-5 rounded-2xl bg-white/80 dark:bg-dark-bg/60 border-l-4 ${item.color} shadow-sm`}
                >
                  <span className="text-[10px] font-mono font-bold text-crimson tracking-widest">{item.step}</span>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white mt-1 mb-2 font-serif">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
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
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Before the Bt Cotton boom (early 2000s), farmers preserved and traded <strong className="text-gray-900 dark:text-white">indigenous "Desi cotton" varieties</strong>. The current model relies entirely on proprietary, commercial hybrid seeds.<Ref n={6} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Initially controlled by <strong className="text-gray-900 dark:text-white">Monsanto</strong> (now Bayer), farmers are <strong className="text-gray-900 dark:text-white">legally and biologically prevented</strong> from replanting next-generation seeds — forced into perpetual purchasing cycles.
              </p>
            </DataCard>

            <DataCard title="The Pink Bollworm Crisis" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Pests like the <strong className="text-gray-900 dark:text-white">Pink Bollworm</strong> have developed complete resistance to early-generation Bt cotton traits (Cry1Ac and Cry2Ab).<Ref n={6} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The original promise of <strong className="text-gray-900 dark:text-white">massive reduction in pesticide use has completely collapsed</strong>. Farmers now deploy significantly higher volumes of toxic chemicals — locking them into massive upfront capital expenditures.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 3: Water Monopolization ═══ */}
        <Section icon={<Droplets className="w-8 h-8 text-blue-600 dark:text-blue-400" />} title="Water Monopolization & Groundwater Collapse">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="132%" label="Extraction vs Recharge" color="red" />
            <StatBox value="1000ft" label="Pump Depth (Mehsana)" color="crimson" />
            <StatBox value="0" label="Terminal Canals Built (Saurashtra)" color="red" />
          </div>

          {/* Groundwater Over-Extraction Chart */}
          <PillarChart
            type="bar"
            title="Groundwater: Extraction Rate vs Natural Recharge by Region"
            caption="Figure 4: In Mehsana, extraction routinely exceeds 132% of natural recharge — draining an unreplenishable fossil water bank. Pumps now reach 800-1000ft depths. Source: Down To Earth / CGWB"
            data={[
              { name: 'Mehsana', value: 132 },
              { name: 'Banaskantha', value: 118 },
              { name: 'Patan', value: 105 },
              { name: 'Sabarkantha', value: 95 },
              { name: 'Safe Limit', value: 70 },
            ]}
            colors={['#991B1B', '#DC2626', '#EF4444', '#F59E0B', '#16A34A']}
            height={300}
          />

          {/* Water Diversion Visual */}
          <div className="bg-white/70 dark:bg-dark-surface/70 p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-dark-border shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full blur-[80px] -ml-32 -mt-32 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gray-900 dark:text-white relative z-10">
              Narmada Water: Promised to Farmers, Delivered to Factories
            </h3>

            {/* Flow comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40"
              >
                <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 tracking-widest mb-3 uppercase">Promise</div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Sardar Sarovar Dam was sold as <strong className="text-gray-900 dark:text-white">agricultural salvation for drought-prone Kutch & Saurashtra</strong>.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-red-50/60 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40"
              >
                <div className="text-xs font-mono font-bold text-red-600 dark:text-red-400 tracking-widest mb-3 uppercase">Reality</div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Water <strong className="text-gray-900 dark:text-white">systematically diverted via pipelines</strong> to fuel Sanand car assembly, Ahmedabad industries, Bharuch chemicals, and Dahej petrochemicals.<Ref n={3} /><Ref n={4} />
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
        </Section>

        {/* ═══ Section 4: Rural-Urban Flight ═══ */}
        <Section icon={<AlertTriangle className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />} title="The Rural-Urban Flight">
          <DataCard title="From Farmer to Factory Floor" alert={true}>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              The culmination of <strong className="text-gray-900 dark:text-white">soaring input costs</strong> (seeds + electricity + imported fertilizers), combined with <strong className="text-gray-900 dark:text-white">collapsing groundwater tables</strong>, leaves zero profit margin — forcing farmers to abandon agriculture entirely.<Ref n={2} />
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
                  className={`p-5 rounded-2xl bg-white/60 dark:bg-dark-bg/40 border-l-4 ${flow.color} shadow-sm`}
                >
                  <div className="text-xs font-mono text-gray-400 dark:text-gray-600 uppercase tracking-wider mb-1">Origin</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white mb-3">{flow.from}</div>
                  <div className="text-crimson font-bold text-lg mb-1">↓</div>
                  <div className="text-xs font-mono text-gray-400 dark:text-gray-600 uppercase tracking-wider mb-1">Destination</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white mb-3">{flow.to}</div>
                  <div className="text-xs text-red-600 dark:text-red-400 font-medium mt-2 p-2 bg-red-50/50 dark:bg-red-950/20 rounded-lg">{flow.risk}</div>
                </motion.div>
              ))}
            </div>
          </DataCard>
        </Section>

        {/* ═══ Timeline ═══ */}
        <Section icon={<Wheat className="w-8 h-8 text-green-700 dark:text-green-400" />} title="Timeline of Agrarian Events">
          <div className="space-y-0">
            {[
              { year: '2002', event: 'India formally approves commercial cultivation of Bt Cotton, sparking the immediate shift away from Desi varieties in Gujarat.' },
              { year: '2006', event: 'Narmada Main Canal begins operations, yet terminal agricultural distribution networks in Saurashtra remain unbuilt for decades.' },
              { year: '2014-15', event: 'Crashing global commodity prices for cotton drive agrarian distress and subsequent mass rural protests (the Patidar agitation).' },
              { year: '2024', event: 'Global Red Sea shipping crisis causes massive bottlenecks in imported MOP and DAP arrivals at Kandla Port.' },
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
                  {i < 3 && <div className="w-0.5 flex-1 bg-gradient-to-b from-crimson/40 to-transparent min-h-[40px]" />}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-mono font-bold text-crimson tracking-wider">{item.year}</span>
                  <p className="text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

      </div>

      <CounterArgument
        argument="Gujarat is India's agricultural success story. Cash crops like cotton and groundnut generate enormous output. The state's farming sector is thriving."
        rebuttal="67% of DAP and 100% of MOP are imported. Groundwater extraction at 132% of recharge is mining fossil water. Bt Cotton has locked farmers into a pesticide treadmill with Bayer-controlled seeds. Narmada water promised to Saurashtra farmers was diverted to industrial corridors. The 'miracle' is a dependency trap."
        stats={[
          { value: '100%', label: 'MOP Imported' },
          { value: '132%', label: 'Over-Extraction' },
          { value: '0', label: 'Potash Reserves' },
        ]}
      />

      <SourceList sources={sources} />
    </main>
  )
}
