import { motion } from 'framer-motion'
import { Cpu, Zap, Sun, Battery, AlertTriangle, ArrowRight } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { CounterArgument } from '../components/CounterArgument'
import ScrollSpy from '../components/ScrollSpy'

const spySections = [
  { id: 'dholera-sir-the-ev-mirage', label: 'EV Mirage' },
  { id: 'the-lithium-ion-cell-assembly-deficit', label: 'Li-ion Deficit' },
  { id: 'the-solar-photovoltaic-gap', label: 'Solar PV Gap' },
  { id: 'timeline-of-greentech-vulnerability', label: 'Timeline' },
]

const sources = [
  { title: "India's EV Supply Chain and Critical Mineral Dependencies", publication: "CARE Ratings / Market Reports, 2025", url: "https://careratings.com/research/ev-supply-chain" },
  { title: "China's Export Controls on Rare Earths and the Global Ripple Effect", publication: "South China Morning Post (SCMP)", url: "https://scmp.com/economy/china-economy" },
  { title: "How Rare Earth Shortages Stall India's Booming EV Sector", publication: "Al Jazeera Economic Reports", url: "https://aljazeera.com/economy/india-ev-rare-earths" },
  { title: "The Atmanirbhar Bharat Battery Challenge: Localizing the Cell", publication: "Marcellus Investment Managers Research", url: "https://marcellus.in/blogs/battery-challenge" },
  { title: "Urban Mining and Localized EV Recycling Initiatives within the SIR", publication: "Dholera News (Official)", url: "https://dholera.news/ev-recycling-hub" },
  { title: "Upstream Polysilicon Import Ratios for Khavda Solar Park vs Domestic PLI Production", publication: "The Wire / Energy Trackers", url: "https://thewire.in/energy/khavda-solar-imports" },
  { title: "Global Rare Earth Processing Market Share Analytics (2025)", publication: "Bloomberg New Energy Finance (BNEF)", url: "https://bnef.com/rare-earth-mining" },
]

export default function GreenTech() {
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
            <span>PILLAR 11</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Green Tech & <span className="italic text-crimson">Critical Minerals</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat's pivot from fossil fuels to "clean" energy merely <strong className="font-semibold text-gray-900 dark:text-white">swaps one dependency for another</strong> — 
            replacing Middle Eastern crude oil with an absolute, hardwired reliance on <strong className="font-semibold text-gray-900 dark:text-white">Chinese critical mineral supply chains</strong> for EVs, batteries, and solar panels.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* ═══ The Dependency Swap — Visual Hero ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/70 dark:bg-dark-surface/70 p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-dark-border shadow-xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 dark:bg-cyan-900 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none opacity-40" />
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gray-900 dark:text-white relative z-10 text-center">
            The Dependency Swap
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 max-w-xs p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-center"
            >
              <div className="text-4xl mb-3">🛢️</div>
              <div className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 tracking-widest mb-2 uppercase">Old Model</div>
              <h4 className="text-lg font-bold font-serif text-gray-900 dark:text-white mb-2">Middle Eastern Crude Oil</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Dependency on OPEC nations, Strait of Hormuz chokepoint, petrodollar geopolitics</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="shrink-0"
            >
              <div className="w-16 h-16 rounded-full bg-crimson/10 dark:bg-crimson/20 flex items-center justify-center border-2 border-crimson/30">
                <ArrowRight className="w-8 h-8 text-crimson" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-1 max-w-xs p-6 rounded-2xl bg-red-50/60 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-center"
            >
              <div className="text-4xl mb-3">⛏️</div>
              <div className="text-xs font-mono font-bold text-red-600 dark:text-red-400 tracking-widest mb-2 uppercase">New Model</div>
              <h4 className="text-lg font-bold font-serif text-gray-900 dark:text-white mb-2">Chinese Critical Minerals</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Dependency on Chinese rare earths, Li-ion cells, polysilicon — export controls as weapons of state</p>
            </motion.div>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-6 italic font-serif relative z-10">
            Same structural vulnerability, different resource. The chokepoint moved from the Strait of Hormuz to the Chinese Ministry of Commerce.
          </p>
        </motion.div>

        {/* ═══ Section 1: Rare Earth & EV Dependency ═══ */}
        <Section icon={<Battery className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />} title="Dholera SIR & The EV Mirage">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="70%" label="China: RE Mining" color="red" />
            <StatBox value="90%" label="China: RE Processing" color="crimson" />
            <StatBox value="100%" label="Lithium Imported" color="red" />
          </div>

          {/* China Rare Earth Dominance */}
          <PillarChart
            type="pie"
            title="Global Rare Earth Processing — China's Monopoly (%)"
            caption="Figure 1: China controls 70% of rare earth mining and an overwhelming 90% of processing/refinement capacity. No other nation can process the toxic rare earth tailings at scale. Source: BNEF"
            data={[
              { name: 'China (Mining)', value: 70 },
              { name: 'Myanmar', value: 10 },
              { name: 'Australia', value: 8 },
              { name: 'USA', value: 5 },
              { name: 'Others', value: 7 },
            ]}
            colors={['#DC2626', '#F59E0B', '#3B82F6', '#8B5CF6', '#6B7280']}
            height={340}
          />

          <PillarChart
            type="bar"
            title="China's Share Across the Green Tech Supply Chain (%)"
            caption="Figure 2: From rare earth mining to battery cell production to polysilicon wafers — China dominates every critical upstream stage. Source: CARE Ratings / BNEF"
            data={[
              { name: 'RE Mining', value: 70 },
              { name: 'RE Processing', value: 90 },
              { name: 'Li-ion Cells', value: 78 },
              { name: 'PV Wafers', value: 82 },
              { name: 'Polysilicon', value: 80 },
              { name: 'NdFeB Magnets', value: 92 },
            ]}
            colors={['#DC2626', '#991B1B', '#EF4444', '#B91C1C', '#DC2626', '#7F1D1D']}
            height={340}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The NdFeB Magnet Chokepoint" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                EV traction motors require ultra-strong <strong className="text-gray-900 dark:text-white">Neodymium-Iron-Boron (NdFeB)</strong> permanent magnets. China holds <strong className="text-gray-900 dark:text-white">~92% of global NdFeB production</strong>.<Ref n={7} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Dholera's multi-billion dollar EV assembly lines exist entirely <strong className="text-gray-900 dark:text-white">at the mercy of Chinese state export licensing</strong> — supply can be throttled overnight for diplomatic leverage.<Ref n={1} />
              </p>
            </DataCard>

            <DataCard title="Export Controls as Weapons of State">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                In 2023-2025, China's Ministry of Commerce implemented <strong className="text-gray-900 dark:text-white">stringent export controls on Gallium, Germanium</strong>, and rare earth extraction technologies.<Ref n={2} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                These are not market fluctuations — they are <strong className="text-gray-900 dark:text-white">deliberate geopolitical instruments</strong> that can stall Indian green tech manufacturing overnight.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 2: Lithium-Ion Battery Deficit ═══ */}
        <Section icon={<Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />} title="The Lithium-Ion Cell Assembly Deficit">

          {/* Cell origin breakdown */}
          <PillarChart
            type="pie"
            title="Li-ion Battery Cell Origins for Indian EV Assembly (%)"
            caption="Figure 3: India lacks domestic lithium, cobalt, and nickel reserves AND the refinement infrastructure. Dholera plants only 'assemble' imported cells into modules. Source: CARE Ratings / Marcellus"
            data={[
              { name: 'China (CATL/BYD)', value: 62 },
              { name: 'South Korea (LG)', value: 20 },
              { name: 'Japan (Panasonic)', value: 10 },
              { name: 'Taiwan', value: 5 },
              { name: 'Domestic', value: 3 },
            ]}
            colors={['#DC2626', '#3B82F6', '#8B5CF6', '#F59E0B', '#16A34A']}
            height={340}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The Assembly Illusion">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Dholera's "battery manufacturing" plants are building <strong className="text-gray-900 dark:text-white">pack assembly operations</strong> — assembling imported cylindrical/prismatic cells into framed modules. The actual electrochemistry is 100% foreign.<Ref n={4} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                India lacks commercially viable domestic reserves of <strong className="text-gray-900 dark:text-white">battery-grade Lithium, Cobalt, and Nickel</strong> — and completely lacks the specialized refinement infrastructure for precursor chemicals.<Ref n={1} />
              </p>
            </DataCard>

            <DataCard title="Urban Mining: A Decade-Long Band-Aid">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Dholera planners have initiated <strong className="text-gray-900 dark:text-white">"Urban Mining" programs</strong> — harvesting lithium and cobalt from end-of-life batteries to build a circular battery economy.<Ref n={5} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This localized circular economy is <strong className="text-gray-900 dark:text-white">vastly insufficient</strong> — it will take at least a decade of recycling networks to even dent primary import volumes.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 3: Solar PV Gap ═══ */}
        <Section icon={<Sun className="w-8 h-8 text-orange-500 dark:text-orange-400" />} title="The Solar Photovoltaic Gap">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="30 GW" label="Khavda RE Park" color="yellow" />
            <StatBox value="80%+" label="Wafers from China" color="red" />
            <StatBox value="~0%" label="Domestic Polysilicon" color="crimson" />
          </div>

          {/* Solar PV Value Chain — Domestic vs Imported */}
          <div className="bg-white/70 dark:bg-dark-surface/70 p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-dark-border shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 dark:bg-orange-900 rounded-full blur-[80px] -ml-32 -mt-32 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-gray-900 dark:text-white relative z-10">
              Solar PV Value Chain: Where Does India Actually Manufacture?
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-8 italic font-serif relative z-10">
              Figure 4: India can assemble modules — but the upstream physical components (polysilicon → wafer → cell) are virtually 100% Chinese. Source: The Wire / BNEF
            </p>

            {/* Waterfall visualization */}
            <div className="space-y-4 relative z-10">
              {[
                { stage: 'Quartz → Polysilicon', domestic: 2, imported: 98, note: 'Virtually zero domestic capacity. Chinese state-backed corps in Xinjiang, Inner Mongolia.' },
                { stage: 'Polysilicon → Ingots', domestic: 5, imported: 95, note: 'Capital-intensive slicing process monopolized by Chinese facilities.' },
                { stage: 'Ingots → Wafers', domestic: 8, imported: 92, note: '80%+ of wafers arrive from specific Chinese suppliers.' },
                { stage: 'Wafers → Cells', domestic: 25, imported: 75, note: 'Some domestic capacity emerging under PLI scheme, still majority imported.' },
                { stage: 'Cells → Modules', domestic: 70, imported: 30, note: 'India\'s strength: assembly of finished cells into solar modules with glass & aluminum frames.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.stage}</span>
                    <span className="text-xs font-mono text-gray-500">{item.domestic}% domestic · {item.imported}% imported</span>
                  </div>
                  <div className="w-full h-5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden flex">
                    <motion.div
                      className="h-full bg-green-500 rounded-l-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.domestic}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.1 }}
                    />
                    <motion.div
                      className="h-full bg-red-500 rounded-r-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.imported}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.1 + 0.2 }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-600">{item.note}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-6 relative z-10 text-xs font-semibold">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500" /> Domestic</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500" /> Imported (China)</div>
            </div>
          </div>

          <DataCard title="PLI Schemes: Failed Localization" alert={true}>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              The Indian government introduced <strong className="text-gray-900 dark:text-white">Production Linked Incentive (PLI) schemes</strong> to encourage domestic manufacturing spanning the entire solar value chain from quartz to module. Yet, upstream capacity for actual wafers and ingots remains <strong className="text-gray-900 dark:text-white">effectively nominal</strong> within India.<Ref n={6} /> The billions poured into scaling Gujarat's solar grid <strong className="text-gray-900 dark:text-white">directly underwrite Chinese solar infrastructure</strong>.
            </p>
          </DataCard>
        </Section>

        {/* ═══ Timeline ═══ */}
        <Section icon={<Cpu className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />} title="Timeline of GreenTech Vulnerability">
          <div className="space-y-0">
            {[
              { year: '2019', event: 'National Mission on Transformative Mobility and Battery Storage launched — major EV incentives but raw material deficits highlighted.' },
              { year: '2023', event: 'China announces sudden export restrictions on Gallium and Germanium — critical for chip manufacturing and green tech — stalling Indian supply chains.' },
              { year: '2024', event: 'Deepening import dependence noted: over 80% of upstream PV wafers arriving from specific Chinese suppliers.' },
              { year: '2025-26', event: 'Dholera SIR gigafactories begin breaking ground but face intense scrutiny over long-term lithium sourcing contracts.' },
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
        argument="Gujarat is leading India's clean energy revolution with the world's largest solar park and massive EV investments. This is true energy independence."
        rebuttal="70% of rare earth mining and 90% of processing is Chinese. 100% of lithium is imported. 80%+ of PV wafers are Chinese. Dholera's 'gigafactories' assemble imported cells. The dependency has simply moved from Middle Eastern oil to Chinese critical minerals. Export controls on Gallium and Germanium in 2023 proved this can be weaponized."
        stats={[
          { value: '90%', label: 'RE Processing' },
          { value: '92%', label: 'NdFeB Magnets' },
          { value: '80%+', label: 'PV Wafers' },
        ]}
      />

      <SourceList sources={sources} />
    </main>
  )
}
