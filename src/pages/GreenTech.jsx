import { motion } from 'framer-motion'
import { Cpu, Zap, Sun, Battery, AlertTriangle, ArrowRight } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { LollipopChart } from '../components/charts/LollipopChart'
import { Treemap } from '../components/charts/Treemap'
import { FiberizationGap } from '../components/charts/FiberizationGap'
import { CounterArgument } from '../components/CounterArgument'
import { useLocalStorageToggle } from '../hooks/useLocalStorageToggle'
import { GovResponseToggle } from '../components/GovResponseToggle'
import ScrollSpy from '../components/ScrollSpy'

const spySections = [
  { id: 'dholera-sir-the-ev-mirage', label: 'EV Mirage' },
  { id: 'the-lithium-ion-cell-assembly-deficit', label: 'Li-ion Deficit' },
  { id: 'the-solar-photovoltaic-gap', label: 'Solar PV Gap' },
  { id: 'green-hydrogen-a-mission-without-a-stack', label: 'Green Hydrogen' },
  { id: 'timeline-of-greentech-vulnerability', label: 'Timeline' },
]

const sources = [
  { title: "India's EV Supply Chain and Critical Mineral Dependencies", publication: "CARE Ratings / Market Reports, 2025", url: "https://careratings.com/research/ev-supply-chain" },
  { title: "China's Export Controls on Rare Earths and the Global Ripple Effect", publication: "South China Morning Post", url: "https://scmp.com/economy/china-economy" },
  { title: "How Rare Earth Shortages Stall India's Booming EV Sector", publication: "Al Jazeera", url: "https://aljazeera.com/economy/india-ev-rare-earths" },
  { title: "The Atmanirbhar Bharat Battery Challenge: Localizing the Cell", publication: "Marcellus Investment Managers", url: "https://marcellus.in/blogs/battery-challenge" },
  { title: "Urban Mining and Localized EV Recycling Initiatives within the SIR", publication: "Dholera News", url: "https://dholera.news/ev-recycling-hub" },
  { title: "Upstream Polysilicon Import Ratios for Khavda Solar Park vs Domestic PLI Production", publication: "The Wire", url: "https://thewire.in/energy/khavda-solar-imports" },
  { title: "Global Rare Earth Processing Market Share Analytics (2025)", publication: "Bloomberg New Energy Finance", url: "https://bnef.com/rare-earth-mining" },
  { title: "India's Solar Surge: Navigating China's Supply Chain Dominance", publication: "Down To Earth", url: "https://www.downtoearth.org.in/energy/indias-solar-success-is-riding-high-but-remains-wired-to-the-dragon" },
  { title: "As India tries to wean its solar sector off imports, cutting China link might not work out", publication: "ThePrint", url: "https://theprint.in/environment/as-india-tries-to-wean-its-solar-sector-off-imports-cutting-china-link-might-not-work-out/2452602/" },
  { title: "India's photovoltaic manufacturing capacity set to surge", publication: "IEEFA (Institute for Energy Economics & Financial Analysis)", url: "https://ieefa.org/resources/indias-photovoltaic-manufacturing-capacity-set-surge" },
  { title: "Assessing the effectiveness of India's solar Production Linked Incentive scheme", publication: "IEEFA", url: "https://ieefa.org/resources/assessing-effectiveness-indias-solar-production-linked-incentive-scheme" },
  { title: "PLI scheme: 18.5 GW of 48 GW solar module capacity awarded now operational (Aug 2025)", publication: "PV Magazine India", url: "https://www.pv-magazine-india.com/2025/08/07/18-5-gw-of-48-gw-solar-module-capacity-awarded-under-pli-scheme-now-operational/" },
  { title: "Adani Group begins producing ingots and wafers in India for Gujarat PV module factory", publication: "PV-Tech", url: "https://www.pv-tech.org/adani-group-begins-producing-ingots-wafers/" },
  { title: "Adani Starts Construction of its 30,000 MTPA Polysilicon Manufacturing Facility", publication: "Mercom India", url: "https://www.mercomindia.com/adani-construction-30000-mtpa-polysilicon-facility" },
  { title: "Green Hydrogen: India's Billion-Dollar Opportunity", publication: "CEEW (Council on Energy, Environment and Water)", url: "https://www.ceew.in/publications/green-hydrogen-indias-billion-dollar-opportunity" },
  { title: "Bharat Cleantech Manufacturing Platform: Green Hydrogen Indigenisation Pathways", publication: "CEEW", url: "https://www.ceew.in/publications/bharat-cleantech-manufacturing-platform-green-hydrogen-indigenisation-pathways" },
  { title: "Can India sustainably manufacture and recycle EV batteries?", publication: "Mongabay India", url: "https://india.mongabay.com/2023/11/explainer-can-india-sustainably-manufacture-and-recycle-ev-batteries/" },
  { title: "India needs end-of-life collection and recycling for battery manufacturing to succeed", publication: "Energy Storage News (RMI India)", url: "https://www.energy-storage.news/india-needs-end-of-life-collection-and-recycling-for-battery-manufacturing-to-succeed-rmi-india-says/" },
  { title: "Reliance Industries to launch 40 GWh battery gigafactory in 2026", publication: "ESS News", url: "https://www.ess-news.com/2025/09/01/reliance-industries-to-launch-40-gwh-battery-gigafactory-in-2026/" },
  { title: "National Green Hydrogen Mission will establish India as global market leader", publication: "Down To Earth", url: "https://www.downtoearth.org.in/renewable-energy/national-green-hydrogen-mission-will-establish-india-as-global-market-leader-experts-87009" },
  { title: "Gujarat Energy Development Agency (GEDA) — 100 GW Target Roadmap", publication: "Government of Gujarat", url: "https://geda.gujarat.gov.in/" },
  { title: "Dholera SIR 5000 MW Solar Park Investment Profile", publication: "Government of Gujarat", url: "https://dholera.gujarat.gov.in/" },
]

export default function GreenTech() {
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
            <span>PILLAR 11</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 leading-tight">
            Green Tech & <span className="italic text-crimson">Critical Minerals</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat's pivot from fossil fuels to "clean" energy merely <strong className="font-semibold text-gray-900">swaps one dependency for another</strong> — 
            replacing Middle Eastern crude oil with an absolute, hardwired reliance on <strong className="font-semibold text-gray-900">Chinese critical mineral supply chains</strong> for EVs, batteries, and solar panels.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* ═══ The Dependency Swap — Visual Hero ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/70 p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none opacity-40" />
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gray-900 relative z-10 text-center">
            The Dependency Swap
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 max-w-xs p-6 rounded-2xl bg-amber-50/60 border border-amber-200 text-center"
            >
              <div className="text-4xl mb-3">🛢️</div>
              <div className="text-xs font-mono font-bold text-amber-600 tracking-widest mb-2 uppercase">Old Model</div>
              <h4 className="text-lg font-bold font-serif text-gray-900 mb-2">Middle Eastern Crude Oil</h4>
              <p className="text-sm text-gray-600">Dependency on OPEC nations, Strait of Hormuz chokepoint, petrodollar geopolitics</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="shrink-0"
            >
              <div className="w-16 h-16 rounded-full bg-crimson/10 flex items-center justify-center border-2 border-crimson/30">
                <ArrowRight className="w-8 h-8 text-crimson" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-1 max-w-xs p-6 rounded-2xl bg-red-50/60 border border-red-200 text-center"
            >
              <div className="text-4xl mb-3">⛏️</div>
              <div className="text-xs font-mono font-bold text-red-600 tracking-widest mb-2 uppercase">New Model</div>
              <h4 className="text-lg font-bold font-serif text-gray-900 mb-2">Chinese Critical Minerals</h4>
              <p className="text-sm text-gray-600">Dependency on Chinese rare earths, Li-ion cells, polysilicon — export controls as weapons of state</p>
            </motion.div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6 italic font-serif relative z-10">
            Same structural vulnerability, different resource. The chokepoint moved from the Strait of Hormuz to the Chinese Ministry of Commerce.
          </p>
        </motion.div>

        {/* ═══ Section 1: Rare Earth & EV Dependency ═══ */}
        <Section icon={<Battery className="w-8 h-8 text-cyan-600" />} title="Dholera SIR & The EV Mirage">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="70%" label="China: RE Mining" color="red" />
            <StatBox value="90%" label="China: RE Processing" color="crimson" />
            <StatBox value="100%" label="Lithium Imported" color="red" />
          </div>

          <DataCard title="Reader primer — what is a rare earth, and why does processing matter more than mining?">
            <p className="text-gray-600 leading-relaxed mb-2">
              <strong className="text-gray-900">Rare earths</strong> are the 17 elements (Nd, Dy, Pr, Tb, etc.) that go into EV traction motors, wind-turbine generators, and precision sensors. They are not actually rare in the earth's crust — they are <em>rare to separate</em>. Pulling 17 chemically near-identical metals out of a single ore body needs hundreds of solvent-extraction stages and produces toxic radioactive tailings.<Ref n={1} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              That is why mining share (China ~70%) understates the chokepoint. <strong className="text-gray-900">Processing share (~90%)</strong> is the real lever — Australia and the US can dig ore but ship it to Chinese refineries because no one else has the capacity, the environmental tolerance, or the multi-decade head start.<Ref n={7} /><Ref n={2} />
            </p>
          </DataCard>

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

          <LollipopChart
            title="China's Share Across the Green Tech Supply Chain (%)"
            caption="Figure 2: From rare earth mining to battery cell production to polysilicon wafers — China dominates every critical upstream stage. Source: CARE Ratings / BNEF"
            data={[
              { name: 'RE Mining', value: 70 },
              { name: 'RE Processing', value: 90, highlight: true },
              { name: 'Li-ion Cells', value: 78 },
              { name: 'PV Wafers', value: 82 },
              { name: 'Polysilicon', value: 80 },
              { name: 'NdFeB Magnets', value: 85, highlight: true },
            ]}
            valueSuffix="%"
            accentColor="#DC2626"
            highlightColor="#7F1D1D"
            height={340}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The NdFeB Magnet Chokepoint" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                EV traction motors require ultra-strong <strong className="text-gray-900">Neodymium-Iron-Boron (NdFeB)</strong> permanent magnets. China produces <strong className="text-gray-900">~85% of global NdFeB output</strong> — roughly 220–240 kt of finished sintered magnet in 2024.<Ref n={7} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dholera's multi-billion-dollar EV assembly lines exist entirely <strong className="text-gray-900">at the mercy of Chinese state export licensing</strong>. In <strong className="text-gray-900">April 2025</strong>, Beijing expanded its rare-earth license regime to cover Sm, Gd, Tb, Dy, Lu, Sc, Y; in <strong className="text-gray-900">October 2025</strong>, Li-ion cells ≥300 Wh/kg, LFP cathode chemistries and graphite anode tech were added to the export-control list — a chokepoint that can throttle supply overnight.<Ref n={1} />
              </p>
            </DataCard>

            <DataCard title="Export Controls as Weapons of State">
              <p className="text-gray-600 mb-4 leading-relaxed">
                The escalation is documented and dated:<br/>
                · <strong className="text-gray-900">Aug 2023</strong> — gallium + germanium licensing<br/>
                · <strong className="text-gray-900">Dec 2023</strong> — graphite licensing enforced<br/>
                · <strong className="text-gray-900">Sep 2024</strong> — antimony controls live<br/>
                · <strong className="text-gray-900">Apr 2025</strong> — rare-earth licensing expanded to 7 elements<br/>
                · <strong className="text-gray-900">Oct 2025</strong> — Li-ion cells, LFP cathodes, graphite-anode tech added.<Ref n={2} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                These are not market fluctuations — they are <strong className="text-gray-900">deliberate geopolitical instruments</strong>. India's FY25 Li-ion battery imports from China alone reached <strong className="text-gray-900">USD 2.2 bn</strong> — up from US$385 m in FY19.<Ref n={3} />
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 2: Lithium-Ion Battery Deficit ═══ */}
        <Section icon={<Zap className="w-8 h-8 text-yellow-600" />} title="The Lithium-Ion Cell Assembly Deficit">

          <DataCard title="Reader primer — 'cell' vs 'pack', and why that distinction matters">
            <p className="text-gray-600 leading-relaxed mb-2">
              A <strong className="text-gray-900">cell</strong> is the actual electrochemistry — cathode, anode, electrolyte, separator — sealed in a cylindrical, prismatic, or pouch format. A <strong className="text-gray-900">pack</strong> is hundreds or thousands of cells screwed into a frame with cooling, BMS, and a connector. India has lots of <em>pack</em> capacity. India has almost no <em>cell</em> capacity.<Ref n={4} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              The result: in FY24, <strong className="text-gray-900">~75% of India's battery imports came from China</strong>; on the lithium-ion line specifically, China supplies <strong className="text-gray-900">~94%</strong>.<Ref n={3} /> Reliance's flagship 40 GWh gigafactory at the Jamnagar Green Energy Giga Complex begins as <em>pack assembly</em> in 2026, with cell + chemistry backward integration scheduled later.<Ref n={19} />
            </p>
          </DataCard>

          {/* Cell origin breakdown */}
          <Treemap
            title="Li-ion Battery Cell Origins for Indian EV Assembly (%)"
            caption="Figure 3: India lacks domestic lithium, cobalt, and nickel reserves AND the refinement infrastructure. Dholera/Jamnagar plants 'assemble' imported cells into modules. China supplies ~94% of Li-ion imports; FY25 China-origin imports alone hit USD 2.2 bn. Source: Takshashila / GTAIC 2025."
            data={[
              { name: 'China (CATL/BYD)', value: 75, color: '#DC2626' },
              { name: 'South Korea (LG/Samsung)', value: 14, color: '#3B82F6' },
              { name: 'Japan (Panasonic)', value: 6, color: '#8B5CF6' },
              { name: 'Other (Taiwan/Vietnam)', value: 3, color: '#F59E0B' },
              { name: 'Domestic', value: 2, color: '#16A34A' },
            ]}
            height={340}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The Assembly Illusion">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Dholera's "battery manufacturing" plants are <strong className="text-gray-900">pack assembly operations</strong> — imported cylindrical/prismatic cells dropped into framed modules. The actual electrochemistry is 100% foreign.<Ref n={4} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                India lacks commercially viable domestic reserves of <strong className="text-gray-900">battery-grade Lithium, Cobalt, and Nickel</strong> — and completely lacks the specialized refinement infrastructure for precursor chemicals.<Ref n={1} /><Ref n={17} />
              </p>
            </DataCard>

            <DataCard title="Urban Mining: A Decade-Long Band-Aid">
              <p className="text-gray-600 mb-4 leading-relaxed">
                RMI India projects that <strong className="text-gray-900">closed-loop battery recycling could supply &gt;40% of India's Li/Ni/Co by 2050</strong> — implying current recovery is minimal, and the circularity market is sized at ~₹75,500 cr (US$ 9 bn).<Ref n={18} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Battery <strong className="text-gray-900">demand will grow ~40× by 2050</strong>, far outpacing recycling supply. End-of-life collection in India remains informal; without formal RPO mandates, recycling can supplement, not substitute for, primary imports.<Ref n={17} />
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 3: Solar PV Gap ═══ */}
        <Section icon={<Sun className="w-8 h-8 text-orange-500" />} title="The Solar Photovoltaic Gap">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="30 GW" label="Khavda RE Park" color="yellow" />
            <StatBox value="~95%" label="Polysilicon Imported" color="red" />
            <StatBox value="3.3 GW" label="Domestic Polysilicon Cap." color="crimson" />
          </div>

          <DataCard title="Reader primer — the 'inverted pyramid' of Indian solar">
            <p className="text-gray-600 leading-relaxed mb-2">
              India's solar manufacturing stack, as of June 2025 per IEEFA: <strong className="text-gray-900">Polysilicon 3.3 GW · Wafer 5.3 GW · Cell 29 GW · Module 120 GW</strong>. Domestic polysilicon is <strong className="text-gray-900">under 5%</strong> of module capacity — meaning 95%+ of the actual silicon is imported, then wrapped in glass + aluminium frames here and counted as "Made in India".<Ref n={10} /><Ref n={8} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              Adani's <strong className="text-gray-900">30,000 MTPA polysilicon facility at Mundra SEZ</strong> (640.89-acre EMC plot, EIL as owner's engineer) and <strong className="text-gray-900">10 GW polysilicon-to-module integrated</strong> target — slipping past 2025 — is the only meaningful play to reverse this. Until it commissions, every Khavda panel rides a Chinese supply chain.<Ref n={13} /><Ref n={14} />
            </p>
          </DataCard>

          {/* Solar PV Value Chain — Domestic vs Imported */}
          <div className="bg-white/70 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full blur-[80px] -ml-32 -mt-32 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-gray-900 relative z-10">
              Solar PV Value Chain: Where Does India Actually Manufacture?
            </h3>
            <p className="text-sm text-gray-500 mb-8 italic font-serif relative z-10">
              Figure 4: India can assemble modules — but the upstream physical components (polysilicon → wafer → cell) are virtually 100% Chinese. Source: The Wire / BNEF
            </p>

            {/* Waterfall visualization */}
            <div className="space-y-4 relative z-10">
              {[
                { stage: 'Quartz → Polysilicon', domestic: 5, imported: 95, note: 'Domestic capacity 3.3 GW vs 120 GW module capacity (IEEFA, Jun 2025). Adani Mundra 30,000 MTPA facility under construction — yet to commission.' },
                { stage: 'Polysilicon → Ingots/Wafers', domestic: 8, imported: 92, note: 'Domestic wafer capacity ~5.3 GW. Adani has begun ingot/wafer production — first Indian-made wafers shipped 2025.' },
                { stage: 'Wafers → Cells', domestic: 35, imported: 65, note: '~29 GW domestic cell capacity online; PLI scheme accelerating but ALMM list still tilted toward Chinese-origin wafers.' },
                { stage: 'Cells → Modules', domestic: 95, imported: 5, note: 'Cumulative ALMM module capacity 91.6 GW. India can frame, glass, junction-box and stamp — that is genuinely "Made in India" on the surface only.' },
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
                    <span className="text-sm font-semibold text-gray-800">{item.stage}</span>
                    <span className="text-xs font-mono text-gray-500">{item.domestic}% domestic · {item.imported}% imported</span>
                  </div>
                  <div className="w-full h-5 bg-gray-100 rounded-full overflow-hidden flex">
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
                  <p className="text-xs text-gray-400">{item.note}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-6 relative z-10 text-xs font-semibold">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500" /> Domestic</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500" /> Imported (China)</div>
            </div>
          </div>

          {/* PLI Achievement Chart — FiberizationGap shape */}
          <FiberizationGap
            title="Solar PLI Achievement — Operational Capacity vs Awarded (% of Award Realised, Jun 2025)"
            caption="Figure 5: Of the 48.3 GW awarded under Solar PLI Tranches I + II, only 18.5 GW of modules and 9.7 GW of cells are operational — and just 0.46 GW of the polysilicon target is online. The further upstream you go, the further behind India falls. Source: PV Magazine India / IEEFA."
            unit="%"
            target={100}
            data={[
              { state: 'Modules', value: 38 },
              { state: 'Cells', value: 31 },
              { state: 'Ingot/Wafer', value: 10 },
              { state: 'Polysilicon', value: 4 },
            ]}
            height={340}
          />

          <DataCard title="PLI Schemes: Achievement, not failure — but inverted" alert={true}>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The Indian PLI for solar has spent <strong className="text-gray-900">~Rs 48,120 cr</strong> against a Rs 94,000 cr target and produced <strong className="text-gray-900">31 GW of operational capacity out of 65 GW commissioned</strong>. Awarded module capacity is 59% online, cells 31%, ingot/wafer 10%, polysilicon ~4%.<Ref n={12} /><Ref n={11} />
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              That shape is the dependency: the further upstream the value chain, <strong className="text-gray-900">the further India falls behind</strong>. Until the Adani Mundra polysilicon line commissions, billions poured into scaling Gujarat's solar grid still <strong className="text-gray-900">underwrite Chinese chemistry</strong>.<Ref n={6} /><Ref n={9} />
            </p>
          </DataCard>
        </Section>

        {/* ═══ Section 4: Green Hydrogen Mission — promise vs commission ═══ */}
        <Section icon={<Zap className="w-8 h-8 text-emerald-600" />} title="Green Hydrogen — A Mission Without a Stack">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="5 MMT" label="2030 Target (NGHM)" color="green" />
            <StatBox value="125 GW" label="RE Capacity Tied" color="yellow" />
            <StatBox value="₹19,744 cr" label="Outlay Approved" color="red" />
          </div>

          <DataCard title="Reader primer — what is 'green' hydrogen, and why is the cost the whole problem?">
            <p className="text-gray-600 leading-relaxed mb-2">
              <strong className="text-gray-900">Green hydrogen</strong> is hydrogen produced by electrolysing water with renewable electricity. <em>Grey</em> hydrogen comes from cracking natural gas; <em>blue</em> is grey + carbon capture. The problem is cost: green H₂ today is roughly 2–3× the cost of grey, and the gap is dominated by <strong className="text-gray-900">electrolyser CAPEX</strong> — most of which India still imports.<Ref n={15} /><Ref n={16} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              The <strong className="text-gray-900">National Green Hydrogen Mission</strong> (PIB approved 4 Jan 2023, Rs 19,744 cr outlay) targets <strong className="text-gray-900">5 MMT/yr by 2030</strong>, requiring an additional <strong className="text-gray-900">125 GW of renewable capacity</strong> dedicated to electrolysis alone — roughly the size of all of India's <em>current</em> solar fleet.<Ref n={20} />
            </p>
          </DataCard>
        </Section>

        {/* ═══ Timeline ═══ */}
        <Section icon={<Cpu className="w-8 h-8 text-cyan-600" />} title="Timeline of GreenTech Vulnerability">
          <div className="space-y-0">
            {[
              { year: '2019', event: 'National Mission on Transformative Mobility and Battery Storage launched — major EV incentives but raw material deficits highlighted.' },
              { year: 'Jan 2023', event: 'Cabinet approves National Green Hydrogen Mission — Rs 19,744 cr outlay, 5 MMT/yr target by 2030 with 125 GW associated RE.' },
              { year: 'Aug 2023', event: 'China imposes export licensing on gallium + germanium. December: graphite licensing enforced — first dominoes of the critical-mineral export-control regime.' },
              { year: 'Mar 2024', event: 'First 1 GW of Khavda Renewable Park (target 30 GW on 72,600 ha in Kutch) commissioned — but built almost entirely on imported wafers.' },
              { year: '2025', event: 'Solar PLI Tranches I+II: 48.3 GW awarded, 18.5 GW operational. April: China expands rare-earth licensing to Sm/Gd/Tb/Dy/Lu/Sc/Y. October: Li-ion ≥300 Wh/kg + LFP cathode + graphite-anode tech added to control list.' },
              { year: '2026', event: 'Reliance 40 GWh battery gigafactory at Jamnagar begins commissioning (initial pack assembly, scaling to 100 GWh with cell + chemistry backward integration).' },
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
                  {i < 5 && <div className="w-0.5 flex-1 bg-gradient-to-b from-crimson/40 to-transparent min-h-[40px]" />}
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
          { value: '90%', label: 'RE Processing' },
          { value: '92%', label: 'NdFeB Magnets' },
          { value: '80%+', label: 'PV Wafers' },
        ]} messages={[
          { from: 'student', text: `Gujarat is leading India's clean energy revolution with the world's largest solar park and massive EV investments. This is true energy independence.` },
          { from: 'priya', text: `70% of rare earth mining and 90% of processing is Chinese. 100% of lithium is imported. 80%+ of PV wafers are Chinese. Dholera's 'gigafactories' assemble imported cells. The dependency has simply moved from Middle Eastern oil to Chinese critical minerals. Export controls on Gallium and Germanium in 2023 proved this can be weaponized.` },
          { from: 'gov', text: `The 5,000 MW Dholera Solar Park and the 30 GW Khavda Renewable Park constitute the backbone of India's green transition. We are rapidly building the essential green component manufacturing ecosystem with proactive state subsidies.`, source: `Gujarat Energy Development Agency / Dholera SIR` }
        ]} />
      </div>

      <SourceList sources={sources} />
    </main>
  )
}
