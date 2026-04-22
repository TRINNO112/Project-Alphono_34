import { motion } from 'framer-motion'
import { FlaskConical, Skull, Scale, Waves, AlertTriangle, Droplets } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import ScrollSpy from '../components/ScrollSpy'
import { PillarChart } from '../components/PillarChart'
import { CounterArgument } from '../components/CounterArgument'
import { useLocalStorageToggle } from '../hooks/useLocalStorageToggle'
import { GovResponseToggle } from '../components/GovResponseToggle'

const sources = [
  { title: "NGT Principal Bench Directives — Fines against Vapi Green Enviro Ltd, Naroda Enviro Projects Ltd, and Ankleshwar CETPs", publication: "National Green Tribunal (NGT) Official Court Records", url: "https://greentribunal.gov.in" },
  { title: "The Sabarmati River: The Dark Underbelly of Ahmedabad's Industrial Growth", publication: "Mongabay India (Investigative Hydrology)", url: "https://india.mongabay.com/sabarmati-pollution" },
  { title: "Pharmaceutical Residue and the Rise of Antimicrobial Resistance in Gujarat's Rivers", publication: "India Water Portal / Peer-Reviewed Studies", url: "https://indiawaterportal.org/amr-gujarat" },
  { title: "Critically Polluted Industrial Areas: The Evolving Vapi and Ankleshwar Crisis", publication: "Down To Earth Magazine (Special Coverage)", url: "https://downtoearth.org.in/pollution/vapi-ankleshwar" },
  { title: "Environmental Justice and Industrial Pollution Impact on Marginalized Communities", publication: "PUCL (People's Union for Civil Liberties)", url: "https://pucl.org/gujarat-environment" },
  { title: "Deep Sea Pipelines: Hiding the Effluent Problem by Pumping it into the Ocean", publication: "The Wire (Environmental Desk)", url: "https://thewire.in/environment/gujarat-marine-outfall" },
  { title: "Socio-Economic Destruction of Coastal Fishing Livelihoods Due to Chemical Marine Outfall", publication: "ICSF (International Collective in Support of Fishworkers)", url: "https://icsf.net/india-fisheries-pollution" },
  { title: "National CEPI Index Reports and Historical Moratorium Documents — Gujarat Golden Corridor", publication: "Central Pollution Control Board (CPCB)", url: "https://cpcb.nic.in/cepi" },
]

const spySections = [
  { id: 'the-total-collapse-of-the-sabarmati-river', label: 'Sabarmati Collapse' },
  { id: 'common-effluent-treatment-plant-cetp-failures', label: 'CETP Failures' },
  { id: 'deep-sea-marine-outfall-out-of-sight-out-of-mind', label: 'Marine Outfall' },
  { id: 'judicial-interventions-regulatory-capture', label: 'Judicial Capture' },
  { id: 'timeline-of-toxicity-events', label: 'Toxicity Timeline' },
]

export default function ChemicalGovernance() {
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
            <span>PILLAR 12</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>TOXICITY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Chemical Governance & <span className="italic text-crimson">Toxicity</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            The 400km "Golden Corridor" — from Mehsana to Vapi — houses India's densest petrochemical belt. 
            The <strong className="font-semibold text-gray-900 dark:text-white">true cost of production is mercilessly externalized</strong> onto rivers, groundwater, marginalized communities, 
            and an ocean turned into an industrial sewer.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* ═══ Golden Corridor Overview Stats ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <StatBox value="400km" label="Golden Corridor Length" color="crimson" />
          <StatBox value="292" label="BOD (mg/L) Sabarmati" color="red" />
          <StatBox value="₹100Cr+" label="NGT Fines Levied" color="red" />
          <StatBox value="0%" label="Dissolved Oxygen" color="crimson" />
        </motion.div>

        {/* ═══ Section 1: Sabarmati River Collapse ═══ */}
        <Section icon={<Droplets className="w-8 h-8 text-blue-600 dark:text-blue-400" />} title="The Total Collapse of the Sabarmati River">
          
          {/* BOD/COD Gauge Visualization */}
          <div className="bg-white/70 dark:bg-dark-surface/70 p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-dark-border shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 dark:bg-red-900 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-gray-900 dark:text-white relative z-10">
              Sabarmati River: From Water to Chemical Sewer
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-8 italic font-serif relative z-10">
              Figure 1: BOD and COD levels in the Sabarmati exceed thresholds for any biological survival. The river is formally classified as anoxic — biologically deceased. Source: CPCB / Mongabay
            </p>

            {/* Visual gauge bars */}
            <div className="space-y-6 relative z-10">
              {[
                { label: 'BOD (Biological Oxygen Demand)', value: 292, safe: 3, unit: 'mg/L', pct: 97, color: 'bg-red-600' },
                { label: 'COD (Chemical Oxygen Demand)', value: 580, safe: 10, unit: 'mg/L', pct: 98, color: 'bg-red-700' },
                { label: 'Dissolved Oxygen', value: 0, safe: 5, unit: 'mg/L', pct: 0, color: 'bg-gray-800', inverted: true },
              ].map((gauge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{gauge.label}</span>
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs text-gray-400">Safe: ≤ {gauge.safe} {gauge.unit}</span>
                      <span className={`text-lg font-bold font-mono ${gauge.inverted ? 'text-gray-800 dark:text-gray-400' : 'text-red-600 dark:text-red-400'}`}>
                        {gauge.value} {gauge.unit}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-6 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden relative">
                    {!gauge.inverted ? (
                      <motion.div
                        className={`h-full ${gauge.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${gauge.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: i * 0.15 }}
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">ZERO — Biologically Dead</span>
                      </div>
                    )}
                    {/* Safe threshold marker */}
                    {!gauge.inverted && (
                      <div 
                        className="absolute top-0 h-full w-0.5 bg-green-500" 
                        style={{ left: `${(gauge.safe / gauge.value) * 100}%` }}
                      >
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-green-500 whitespace-nowrap">Safe</div>
                      </div>
                    )}
                  </div>
                  {!gauge.inverted && (
                    <p className="text-xs text-red-500 dark:text-red-400 mt-1 font-mono">
                      {Math.round(gauge.value / gauge.safe)}× above safe limit
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The Industrial Sewer Belt" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Past the Vasna barrage, the Sabarmati is starved of fresh environmental flow and acts as an <strong className="text-gray-900 dark:text-white">open, entirely untreated channel for industrial effluent</strong>.<Ref n={2} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Toxic, darkly colored dumping traces back to the <strong className="text-gray-900 dark:text-white">textile dyeing clusters in Narol and Danilimda</strong> and the chemical manufacturing zones in <strong className="text-gray-900 dark:text-white">Vatva, Odhav, and Naroda</strong> — encircling eastern Ahmedabad like a toxic belt.
              </p>
            </DataCard>

            <DataCard title="AMR Superbug Incubator">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Gujarat — the <strong className="text-gray-900 dark:text-white">"Pharmacy of India"</strong> — produces a massive percentage of India's generic drugs. But its rivers bear the toxic burden of unregulated pharmaceutical runoff.<Ref n={3} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Peer-reviewed tests detected <strong className="text-gray-900 dark:text-white">terrifyingly high concentrations of raw antibiotics</strong> in the Sabarmati, serving as a massive incubator for <strong className="text-gray-900 dark:text-white">Antimicrobial Resistant (AMR) superbugs</strong>.<Ref n={3} />
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 2: CETP Failures ═══ */}
        <Section icon={<FlaskConical className="w-8 h-8 text-orange-600 dark:text-orange-400" />} title="Common Effluent Treatment Plant (CETP) Failures">

          {/* CETP Performance Chart */}
          <PillarChart
            type="bar"
            title="CETP Performance: Inlet vs Outlet Toxicity (Indicative Scale)"
            caption="Figure 2: In certain documented cases, the 'treated' outlet effluent proved MORE toxic than raw waste influent — due to cross-contamination and bacterial death within malfunctioning tanks. Source: NGT / Down To Earth"
            data={[
              { name: 'Vapi (Inlet)', value: 85 },
              { name: 'Vapi (Outlet)', value: 72 },
              { name: 'Ankleshwar (In)', value: 90 },
              { name: 'Ankleshwar (Out)', value: 88 },
              { name: 'Bharuch (Inlet)', value: 78 },
              { name: 'Bharuch (Outlet)', value: 82 },
              { name: 'Safe Threshold', value: 20 },
            ]}
            colors={['#F59E0B', '#DC2626', '#F59E0B', '#991B1B', '#F59E0B', '#B91C1C', '#16A34A']}
            height={340}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Technologically Obsolete" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                CETPs in <strong className="text-gray-900 dark:text-white">Ankleshwar, Vapi, and Bharuch</strong> operate on critically outdated biological treatment architectures <strong className="text-gray-900 dark:text-white">designed in the 1990s</strong>.<Ref n={4} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                They are incapable of processing high-salinity inflows, complex chemical cocktails, or filtering heavy metals dumped illegally into common inlets.<Ref n={1} />
              </p>
            </DataCard>

            <DataCard title="Groundwater Poisoning">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                NGT judicial investigations found that <strong className="text-gray-900 dark:text-white">"treated" effluent from these plants failed baseline outlet standards</strong> repeatedly. In shocking cases, outlet water was <strong className="text-gray-900 dark:text-white">more toxic than raw influent</strong>.<Ref n={1} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This toxic water continuously contaminates <strong className="text-gray-900 dark:text-white">adjacent groundwater aquifers via deep-soil percolation</strong>, poisoning water sources for local agrarian populations in Bharuch and Vapi.<Ref n={5} />
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 3: Deep-Sea Marine Outfall ═══ */}
        <Section icon={<Waves className="w-8 h-8 text-blue-500 dark:text-blue-400" />} title="Deep-Sea Marine Outfall: Out of Sight, Out of Mind">

          {/* Pipeline Visual */}
          <div className="bg-white/70 dark:bg-dark-surface/70 p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-dark-border shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100/50 dark:from-blue-950/30 to-transparent pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-gray-900 dark:text-white relative z-10">
              The Marine Outfall Pipeline System
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-8 italic font-serif relative z-10">
              Figure 3: Instead of fixing treatment at source, the state constructs massive pipelines to pump toxic effluent dozens of kilometers into the ocean. Source: The Wire / ICSF
            </p>

            {/* Visual flow: Factory → Pipeline → Ocean */}
            <div className="flex flex-col md:flex-row items-center gap-4 relative z-10">
              {[
                { icon: '🏭', label: 'Industrial Clusters', desc: 'Jetpur, Ankleshwar, Vapi — poorly treated effluent collected', color: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900/40' },
                { icon: '⟶', label: '', desc: '', color: '' },
                { icon: '🔧', label: 'Pipeline Infrastructure', desc: 'State-funded mega pipelines — dozens of km long — pump effluent at massive scale', color: 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/40' },
                { icon: '⟶', label: '', desc: '', color: '' },
                { icon: '🌊', label: 'Gulf of Khambhat / Arabian Sea', desc: 'Toxic effluent dumped into deep waters — destroying marine ecosystems & fishing livelihoods', color: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/40' },
              ].map((item, i) => (
                item.label ? (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex-1 p-5 rounded-2xl border ${item.color} text-center min-w-[140px]`}
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1 font-serif">{item.label}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ) : (
                  <div key={i} className="text-crimson text-2xl font-bold hidden md:block shrink-0">→</div>
                )
              ))}
            </div>
          </div>

          <DataCard title="Destruction of Coastal Fishing Communities" alert={true}>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              This "out of sight, out of mind" policy is <strong className="text-gray-900 dark:text-white">progressively destroying localized marine ecosystems</strong> across the Gujarat coastline. Historical coastal fishing communities — whose livelihoods span generations — are being permanently eradicated.<Ref n={6} /><Ref n={7} />
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <StatBox value="Dozens" label="Pipeline Length (km)" color="red" />
              <StatBox value="Gulf of Khambhat" label="Primary Dump Zone" color="crimson" />
              <StatBox value="Generations" label="Fishing Livelihoods Lost" color="blue" />
            </div>
          </DataCard>
        </Section>

        {/* ═══ Section 4: Judicial Interventions ═══ */}
        <Section icon={<Scale className="w-8 h-8 text-purple-600 dark:text-purple-400" />} title="Judicial Interventions & Regulatory Capture">

          {/* NGT Fines Over Time */}
          <PillarChart
            type="bar"
            title="NGT Environmental Compensation Fines — Gujarat Chemical Clusters (₹ Crores)"
            caption="Figure 4: Escalating NGT fines reflect deepening non-compliance. Despite hundreds of crores in penalties, the fundamental violations persist. Source: NGT Official Records"
            data={[
              { name: '2014-16', value: 25 },
              { name: '2017-18', value: 45 },
              { name: '2019-20', value: 65 },
              { name: '2021', value: 100 },
              { name: '2022-23', value: 80 },
              { name: '2024-25', value: 120 },
            ]}
            colors={['#8B5CF6', '#7C3AED', '#6D28D9', '#5B21B6', '#4C1D95', '#DC2626']}
            height={300}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="NGT: The Last Line of Defense">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                The NGT has taken <strong className="text-gray-900 dark:text-white">suo motu cognizance</strong> of total environmental devastation in the Ankleshwar and Vapi mega-chemical belts. Invoking the <strong className="text-gray-900 dark:text-white">"Polluter Pays" principle</strong>, it levied unprecedented fines — often hundreds of crores.<Ref n={1} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The Gujarat High Court ordered forced surprise inspections, <strong className="text-gray-900 dark:text-white">power disconnections, and sealing of non-compliant units</strong>. Moratoriums on new industrial expansion were imposed in Critically Polluted Areas.
              </p>
            </DataCard>

            <DataCard title="The Enforcement Mirage" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Despite heavy judicial reprimands, the <strong className="text-gray-900 dark:text-white">political economy of Gujarat remains structurally biased toward unstoppable industrial continuity</strong>.<Ref n={5} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                As soon as the judicial gaze shifts: <strong className="text-gray-900 dark:text-white">night-time illegal dumping resumes</strong> via localized mafia networks, retrofitted reverse-borewells pump acid directly into the groundwater, and anonymous tankers dump raw chemical waste into storm drains under cover of darkness.<Ref n={4} />
              </p>
            </DataCard>
          </div>

          {/* The Enforcement Cycle — Visual */}
          <div className="bg-white/70 dark:bg-dark-surface/70 p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-dark-border shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 dark:bg-purple-900 rounded-full blur-[80px] -ml-32 -mt-32 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gray-900 dark:text-white relative z-10 text-center">
              The Regulatory Capture Cycle
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              {[
                { step: '01', title: 'Environmental Devastation', desc: 'Rivers poisoned, groundwater contaminated, communities affected', color: 'border-red-500' },
                { step: '02', title: 'Judicial Intervention', desc: 'NGT/HC imposes fines, moratoriums, orders surprise inspections', color: 'border-purple-500' },
                { step: '03', title: 'Temporary Compliance', desc: 'Units sealed, fines paid, some improvements. Media coverage peaks.', color: 'border-green-500' },
                { step: '04', title: 'Reversion', desc: 'Judicial gaze shifts → night dumping resumes, reverse-borewells pump acid, cycle repeats.', color: 'border-red-700' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`p-5 rounded-2xl bg-white/80 dark:bg-dark-bg/60 border-l-4 ${item.color} shadow-sm`}
                >
                  <span className="text-[10px] font-mono font-bold text-crimson tracking-widest">{item.step}</span>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mt-1 mb-2 font-serif">{item.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-6 relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                className="inline-block text-crimson text-2xl"
              >
                ↻
              </motion.div>
              <p className="text-sm text-gray-500 italic font-serif mt-2">The cycle repeats endlessly. No structural reform — only periodic crackdowns.</p>
            </div>
          </div>
        </Section>

        {/* ═══ Timeline ═══ */}
        <Section icon={<Skull className="w-8 h-8 text-red-600 dark:text-red-400" />} title="Timeline of Toxicity Events">
          <div className="space-y-0">
            {[
              { year: '2007', event: 'Vapi industrial estate receives global notoriety — listed as one of the most polluted places on earth by the Blacksmith Institute.' },
              { year: '2010', event: 'CPCB introduces the CEPI index, placing a moratorium on new Ankleshwar industries.' },
              { year: '2014-16', event: 'Periodic lifting and re-imposing of industrial expansion bans as CETPs repeatedly fail NGT mandated inspection parameters.' },
              { year: '2021', event: 'Massive NGT fines totaling over Rs 100 Crore levied against multiple Gujarat chemical clusters for groundwater contamination.' },
              { year: '2025-26', event: 'AMR studies definitively link API concentrations in the Sabarmati to the specific pharmaceutical output of the Vatva and Naroda clusters.' },
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
                  {i < 4 && <div className="w-0.5 flex-1 bg-gradient-to-b from-crimson/40 to-transparent min-h-[40px]" />}
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
        argument="The Golden Corridor is Gujarat's economic engine. It generates massive GDP, FDI, and employment. Pollution is an acceptable and manageable cost of industrial progress."
        rebuttal="The Sabarmati records BOD of 292 mg/L — 97× the safe limit — with zero dissolved oxygen. CETPs designed in the 1990s discharge effluent MORE toxic than raw influent. Rs 100 Cr+ in NGT fines with zero lasting compliance. Pharmaceutical dumping is incubating AMR superbugs. And the 'solution'? Massive pipelines pumping it all into the ocean. The cost is externalized, not managed."
        stats={[
          { value: '292', label: 'BOD (mg/L)' },
          { value: '97×', label: 'Above Safe Limit' },
          { value: '₹100Cr+', label: 'NGT Fines' },
        ]}
      />

      <SourceList sources={sources} />
    </main>
  )
}
