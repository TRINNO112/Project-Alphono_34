import { motion } from 'framer-motion'
import { FlaskConical, Skull, Scale, Waves, AlertTriangle, Droplets } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import ScrollSpy from '../components/ScrollSpy'
import { PillarChart } from '../components/PillarChart'
import { LollipopChart } from '../components/charts/LollipopChart'
import { SlopeChart } from '../components/charts/SlopeChart'
import { FiberizationGap } from '../components/charts/FiberizationGap'
import { CounterArgument } from '../components/CounterArgument'
import { useLocalStorageToggle } from '../hooks/useLocalStorageToggle'
import { GovResponseToggle } from '../components/GovResponseToggle'

const sources = [
  { title: "NGT Principal Bench Directives — Fines against Vapi Green Enviro Ltd, Naroda Enviro Projects Ltd, Ankleshwar CETPs", publication: "National Green Tribunal", url: "https://greentribunal.gov.in" },
  { title: "The Sabarmati River: The Dark Underbelly of Ahmedabad's Industrial Growth", publication: "Mongabay India", url: "https://india.mongabay.com/sabarmati-pollution" },
  { title: "Pharmaceutical Residue and the Rise of Antimicrobial Resistance in Gujarat's Rivers", publication: "India Water Portal", url: "https://indiawaterportal.org/amr-gujarat" },
  { title: "Critically Polluted Industrial Areas: The Evolving Vapi and Ankleshwar Crisis", publication: "Down To Earth", url: "https://downtoearth.org.in/pollution/vapi-ankleshwar" },
  { title: "Environmental Justice and Industrial Pollution Impact on Marginalized Communities", publication: "PUCL (People's Union for Civil Liberties)", url: "https://pucl.org/gujarat-environment" },
  { title: "Deep Sea Pipelines: Hiding the Effluent Problem by Pumping it into the Ocean", publication: "The Wire", url: "https://thewire.in/environment/gujarat-marine-outfall" },
  { title: "Socio-Economic Destruction of Coastal Fishing Livelihoods Due to Chemical Marine Outfall", publication: "ICSF", url: "https://icsf.net/india-fisheries-pollution" },
  { title: "National CEPI Index Reports and Historical Moratorium Documents — Gujarat Golden Corridor", publication: "Central Pollution Control Board (CPCB)", url: "https://cpcb.nic.in/cepi" },
  { title: "Why Does Vapi in Gujarat Continue to Be Critically Polluted?", publication: "The Wire — Science", url: "https://science.thewire.in/environment/vapi-polluted-gpcb-cepi/" },
  { title: "Critically polluted: Treated effluents from Vapi CETP don't meet safety standards (CPCB findings)", publication: "Down To Earth", url: "https://www.downtoearth.org.in/governance/critically-polluted-treated-effluents-from-vapi-cetp-don-t-meet-safety-standards-find-pollution-control-boards-89547" },
  { title: "Aryavart Foundation vs M/S Vapi Green Enviro Ltd (NGT, 11 Jan 2019)", publication: "Indian Kanoon (NGT order)", url: "https://indiankanoon.org/doc/160264559/" },
  { title: "NGT orders closure of over 300 units violating environmental laws", publication: "Business Standard", url: "https://www.business-standard.com/article/news-ians/ngt-orders-closure-of-over-300-units-violating-environmental-laws-116011301256_1.html" },
  { title: "Status of CETPs in Gujarat", publication: "Gujarat Pollution Control Board (GPCB)", url: "https://gpcb.gujarat.gov.in/webcontroller/viewpage/status-of-cetps-in-gujarat" },
  { title: "Sabarmati pollution: Gujarat HC seeks personal affidavit of AMC Commissioner — mega-pipeline PIL", publication: "LiveLaw", url: "https://www.livelaw.in/high-court/gujarat-high-court/gujarat-high-court-hearing-pil-sabarmati-river-pollution-ahmedabad-municipal-commissioner-mega-pipeline-265019" },
  { title: "Sabarmati pollution: Inspect all industrial effluent treatment plants, Gujarat HC tells government", publication: "Down To Earth", url: "https://www.downtoearth.org.in/pollution/sabarmati-pollution-inspect-all-industrial-effluent-treatment-plants-gujarat-hc-tells-government-81137" },
  { title: "India's Rise as Global Pharmacy Masks Deep Dependence on China", publication: "Observer Research Foundation (ORF)", url: "https://www.orfonline.org/expert-speak/india-s-rise-as-global-pharmacy-masks-deep-dependence-on-china" },
  { title: "India's Import Dependence on China in Pharmaceuticals: Status, Issues and Policy Options", publication: "RIS — Sudip Chaudhuri (Discussion Paper 268)", url: "https://ris.org.in/sites/default/files/Publication/DP%20268%20Prof%20Sudip%20Chaudhuri.pdf" },
  { title: "Jambusar Bulk Drug Park completion by March 2027; Gujarat CM visits the site", publication: "DeshGujarat", url: "https://deshgujarat.com/2025/08/04/jambusar-bulk-drug-park-completion-by-march-2027-gujarat-cm-visits-the-site/" },
  { title: "NGT panel finds 12 illegal dumping sites for gasifier wastewater in Morbi", publication: "Down To Earth", url: "https://www.downtoearth.org.in/waste/ngt-panel-finds-12-illegal-dumping-sites-for-gasifier-wastewater-in-morbi-64519" },
  { title: "Botad-Ahmedabad hooch tragedy 2022: 42+ dead from methanol-laced liquor", publication: "The Indian Express", url: "https://indianexpress.com/" },
  { title: "IOCL Gujarat (Vadodara) Refinery benzene tank explosion 2024", publication: "Business Standard", url: "https://www.business-standard.com/" },
  { title: "Dahej PCPIR Master Plan & Industrial Approvals", publication: "Government of Gujarat — PCPIR", url: "https://pcpir.gujarat.gov.in/" },
]

const spySections = [
  { id: 'the-total-collapse-of-the-sabarmati-river', label: 'Sabarmati Collapse' },
  { id: 'common-effluent-treatment-plant-cetp-failures', label: 'CETP Failures' },
  { id: 'deep-sea-marine-outfall-out-of-sight-out-of-mind', label: 'Marine Outfall' },
  { id: 'judicial-interventions-regulatory-capture', label: 'Judicial Capture' },
  { id: 'pharmacy-of-india-on-a-chinese-shelf', label: 'Pharma KSM Trap' },
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
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 leading-tight">
            Chemical Governance & <span className="italic text-crimson">Toxicity</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            The 400km "Golden Corridor" — from Mehsana to Vapi — houses India's densest petrochemical belt. 
            The <strong className="font-semibold text-gray-900">true cost of production is mercilessly externalized</strong> onto rivers, groundwater, marginalized communities, 
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
        <Section icon={<Droplets className="w-8 h-8 text-blue-600" />} title="The Total Collapse of the Sabarmati River">

          <DataCard title="Reader primer — BOD, COD, DO and what 'biologically dead' actually means">
            <p className="text-gray-600 leading-relaxed mb-2">
              <strong className="text-gray-900">BOD</strong> (Biological Oxygen Demand) measures how much dissolved oxygen microbes need to break down organic pollution — high BOD means the river is suffocating itself digesting waste. <strong className="text-gray-900">COD</strong> (Chemical Oxygen Demand) catches what BOD misses: industrial solvents, dyes, and pharma residues that don't break down biologically. <strong className="text-gray-900">DO</strong> (Dissolved Oxygen) is what's left for fish, plants, and aerobic bacteria — anything below ~4 mg/L is hostile life support.<Ref n={2} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              CPCB's drinking-water standard for BOD is ≤3 mg/L. A river with BOD 292 + COD 580 + DO 0 is not "polluted" in the colloquial sense — it is <strong className="text-gray-900">classified anoxic</strong>: a chemical sluiceway, not a water body. The Gujarat HC has held marathon Sabarmati-pollution PILs since 2017, repeatedly demanding personal affidavits from Ahmedabad's Municipal Commissioner.<Ref n={14} /><Ref n={15} />
            </p>
          </DataCard>

          {/* BOD/COD Gauge Visualization */}
          <div className="bg-white/70 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-gray-900 relative z-10">
              Sabarmati River: From Water to Chemical Sewer
            </h3>
            <p className="text-sm text-gray-500 mb-8 italic font-serif relative z-10">
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
                    <span className="text-sm font-semibold text-gray-800">{gauge.label}</span>
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs text-gray-400">Safe: ≤ {gauge.safe} {gauge.unit}</span>
                      <span className={`text-lg font-bold font-mono ${gauge.inverted ? 'text-gray-800' : 'text-red-600'}`}>
                        {gauge.value} {gauge.unit}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-6 bg-gray-100 rounded-full overflow-hidden relative">
                    {!gauge.inverted ? (
                      <motion.div
                        className={`h-full ${gauge.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${gauge.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: i * 0.15 }}
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">ZERO — Biologically Dead</span>
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
                    <p className="text-xs text-red-500 mt-1 font-mono">
                      {Math.round(gauge.value / gauge.safe)}× above safe limit
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The Industrial Sewer Belt" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Past the Vasna barrage, the Sabarmati is starved of fresh environmental flow and acts as an <strong className="text-gray-900">open, entirely untreated channel for industrial effluent</strong>.<Ref n={2} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Toxic, darkly colored dumping traces back to the <strong className="text-gray-900">textile dyeing clusters in Narol and Danilimda</strong> and the chemical manufacturing zones in <strong className="text-gray-900">Vatva, Odhav, and Naroda</strong> — encircling eastern Ahmedabad like a toxic belt.
              </p>
            </DataCard>

            <DataCard title="AMR Superbug Incubator">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Gujarat — the <strong className="text-gray-900">"Pharmacy of India"</strong> — produces a massive percentage of India's generic drugs. But its rivers bear the toxic burden of unregulated pharmaceutical runoff.<Ref n={3} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Peer-reviewed tests detected <strong className="text-gray-900">terrifyingly high concentrations of raw antibiotics</strong> in the Sabarmati, serving as a massive incubator for <strong className="text-gray-900">Antimicrobial Resistant (AMR) superbugs</strong>.<Ref n={3} />
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 2: CETP Failures ═══ */}
        <Section icon={<FlaskConical className="w-8 h-8 text-orange-600" />} title="Common Effluent Treatment Plant (CETP) Failures">

          <DataCard title="Reader primer — CETP, CEPI, and the moratorium machine">
            <p className="text-gray-600 leading-relaxed mb-2">
              A <strong className="text-gray-900">CETP</strong> (Common Effluent Treatment Plant) is shared treatment infrastructure that small-and-medium chemical units pipe their effluent into. It only works if (a) units actually pre-treat to spec before discharging, and (b) the CETP can handle the chemistry mix. Both assumptions break in Vapi, Ankleshwar, Naroda — units secretly dump heavy-metal cocktails the CETP was never designed to process.<Ref n={10} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-gray-900">CEPI</strong> (Comprehensive Environmental Pollution Index) is CPCB's 0–100 score for a cluster's pollution load. <strong className="text-gray-900">A score above 70 triggers "Critically Polluted Area" status</strong> and an automatic moratorium on new units. Vapi has bounced in and out of this list since 2010; the moratorium has been imposed, lifted, re-imposed, lifted again — the political cycle the science can't keep up with.<Ref n={9} /><Ref n={4} />
            </p>
          </DataCard>

          {/* CETP Performance Chart */}
          <LollipopChart
            title="CETP Performance: Inlet vs Outlet Toxicity (Indicative Scale)"
            caption="Figure 2: In certain documented cases, the 'treated' outlet effluent proved MORE toxic than raw waste influent — due to cross-contamination and bacterial death within malfunctioning tanks. Source: NGT / Down To Earth"
            data={[
              { name: 'Vapi (Inlet)', value: 85 },
              { name: 'Vapi (Outlet)', value: 72 },
              { name: 'Ankleshwar (In)', value: 90 },
              { name: 'Ankleshwar (Out)', value: 88, highlight: true },
              { name: 'Bharuch (Inlet)', value: 78 },
              { name: 'Bharuch (Outlet)', value: 82, highlight: true },
            ]}
            thresholdLine={{ value: 20, label: 'Safe Threshold', color: '#16A34A' }}
            accentColor="#F59E0B"
            highlightColor="#991B1B"
            height={340}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Technologically Obsolete" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                CETPs in <strong className="text-gray-900">Ankleshwar, Vapi, and Bharuch</strong> operate on critically outdated biological treatment architectures <strong className="text-gray-900">designed in the 1990s</strong>.<Ref n={4} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                They are incapable of processing high-salinity inflows, complex chemical cocktails, or filtering heavy metals dumped illegally into common inlets.<Ref n={1} />
              </p>
            </DataCard>

            <DataCard title="Groundwater Poisoning">
              <p className="text-gray-600 mb-4 leading-relaxed">
                NGT judicial investigations found that <strong className="text-gray-900">"treated" effluent from these plants failed baseline outlet standards</strong> repeatedly. In shocking cases, outlet water was <strong className="text-gray-900">more toxic than raw influent</strong>.<Ref n={1} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                This toxic water continuously contaminates <strong className="text-gray-900">adjacent groundwater aquifers via deep-soil percolation</strong>, poisoning water sources for local agrarian populations in Bharuch and Vapi.<Ref n={5} />
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 3: Deep-Sea Marine Outfall ═══ */}
        <Section icon={<Waves className="w-8 h-8 text-blue-500" />} title="Deep-Sea Marine Outfall: Out of Sight, Out of Mind">

          {/* Pipeline Visual */}
          <div className="bg-white/70 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100/50 to-transparent pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-gray-900 relative z-10">
              The Marine Outfall Pipeline System
            </h3>
            <p className="text-sm text-gray-500 mb-8 italic font-serif relative z-10">
              Figure 3: Instead of fixing treatment at source, the state constructs massive pipelines to pump toxic effluent dozens of kilometers into the ocean. Source: The Wire / ICSF
            </p>

            {/* Visual flow: Factory → Pipeline → Ocean */}
            <div className="flex flex-col md:flex-row items-center gap-4 relative z-10">
              {[
                { icon: '🏭', label: 'Industrial Clusters', desc: 'Jetpur, Ankleshwar, Vapi — poorly treated effluent collected', color: 'bg-red-50 border-red-200' },
                { icon: '⟶', label: '', desc: '', color: '' },
                { icon: '🔧', label: 'Pipeline Infrastructure', desc: 'State-funded mega pipelines — dozens of km long — pump effluent at massive scale', color: 'bg-amber-50 border-amber-200' },
                { icon: '⟶', label: '', desc: '', color: '' },
                { icon: '🌊', label: 'Gulf of Khambhat / Arabian Sea', desc: 'Toxic effluent dumped into deep waters — destroying marine ecosystems & fishing livelihoods', color: 'bg-blue-50 border-blue-200' },
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
                    <h4 className="text-sm font-bold text-gray-900 mb-1 font-serif">{item.label}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ) : (
                  <div key={i} className="text-crimson text-2xl font-bold hidden md:block shrink-0">→</div>
                )
              ))}
            </div>
          </div>

          <DataCard title="Destruction of Coastal Fishing Communities" alert={true}>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              This "out of sight, out of mind" policy is <strong className="text-gray-900">progressively destroying localized marine ecosystems</strong> across the Gujarat coastline. Historical coastal fishing communities — whose livelihoods span generations — are being permanently eradicated.<Ref n={6} /><Ref n={7} />
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <StatBox value="Dozens" label="Pipeline Length (km)" color="red" />
              <StatBox value="Gulf of Khambhat" label="Primary Dump Zone" color="crimson" />
              <StatBox value="Generations" label="Fishing Livelihoods Lost" color="blue" />
            </div>
          </DataCard>
        </Section>

        {/* ═══ Section 4: Judicial Interventions ═══ */}
        <Section icon={<Scale className="w-8 h-8 text-purple-600" />} title="Judicial Interventions & Regulatory Capture">

          {/* NGT Fines Over Time */}
          <SlopeChart
            title="NGT Environmental Compensation — Selected Gujarat Orders (₹ Crores)"
            caption="Figure 4: Headline NGT/Tribunal compensation orders in Gujarat — none of which dent the underlying CETP non-compliance. Vapi Green Enviro ₹10 cr (Damanganga discharge), Morbi 337 ceramic units ₹122.05 cr (illegal coal-gasifier wastewater), Kutch Lignite TPS ₹223 cr. Source: NGT records / PropNewsTime / Down To Earth."
            start={{ label: 'Vapi 2016', value: 10 }}
            end={{ label: 'Kutch 2024', value: 223 }}
            midpoints={[
              { label: 'Aryavart 2019', value: 25 },
              { label: 'Morbi 2024', value: 122 },
            ]}
            unit=" Cr"
            accentColor="#7C3AED"
            height={300}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="NGT: The Last Line of Defense">
              <p className="text-gray-600 mb-4 leading-relaxed">
                The NGT has taken <strong className="text-gray-900">suo motu cognizance</strong> of total environmental devastation in the Ankleshwar and Vapi mega-chemical belts. Invoking the <strong className="text-gray-900">"Polluter Pays" principle</strong>, it levied unprecedented fines — often hundreds of crores. In Jan 2016 alone, NGT ordered <strong className="text-gray-900">closure of 300+ units</strong> for environmental violations.<Ref n={12} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                In <em>Aryavart Foundation v. M/S Vapi Green Enviro Ltd</em> (NGT, 11 Jan 2019), the Tribunal documented that the cluster's flagship CETP was systematically dumping non-compliant treated effluent — and ordered forced surprise inspections, <strong className="text-gray-900">power disconnections, and sealing of non-compliant units</strong>. Moratoriums on new industrial expansion in Critically Polluted Areas have been imposed and lifted on a roughly biennial cycle.<Ref n={11} /><Ref n={9} />
              </p>
            </DataCard>

            <DataCard title="The Enforcement Mirage" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Despite heavy judicial reprimands, the <strong className="text-gray-900">political economy of Gujarat remains structurally biased toward unstoppable industrial continuity</strong>.<Ref n={5} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                As soon as the judicial gaze shifts: <strong className="text-gray-900">night-time illegal dumping resumes</strong> via localized mafia networks, retrofitted reverse-borewells pump acid directly into the groundwater, and anonymous tankers dump raw chemical waste into storm drains under cover of darkness.<Ref n={4} />
              </p>
            </DataCard>
          </div>

          {/* The Enforcement Cycle — Visual */}
          <div className="bg-white/70 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full blur-[80px] -ml-32 -mt-32 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gray-900 relative z-10 text-center">
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
                  className={`p-5 rounded-2xl bg-white/80 border-l-4 ${item.color} shadow-sm`}
                >
                  <span className="text-[10px] font-mono font-bold text-crimson tracking-widest">{item.step}</span>
                  <h4 className="text-sm font-bold text-gray-900 mt-1 mb-2 font-serif">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
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

          <DataCard title="The accident ledger — Bharuch–Dahej, 2018–2025" alert={true}>
            <p className="text-gray-600 leading-relaxed mb-2">
              Per Directorate of Industrial Safety &amp; Health (DISH) compilations: roughly <strong className="text-gray-900">90 accidents and 130+ deaths in the Bharuch–Dahej corridor between 2020 and 2024 alone</strong>, with earlier years reporting 188 (2019) and 236 (2018) injuries.<Ref n={20} />
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              Selected events the corridor would rather you forget:
            </p>
            <ul className="text-gray-600 leading-relaxed list-disc pl-5 space-y-1">
              <li><strong className="text-gray-900">3 Jun 2020 — Yashashvi Rasayan, Dahej:</strong> reactor explosion; <strong className="text-gray-900">8 dead, 50+ injured, 4,800 evacuated</strong> across two villages.</li>
              <li><strong className="text-gray-900">25 Jul 2022 — Botad/Ahmedabad hooch tragedy:</strong> <strong className="text-gray-900">42 dead, ~97 hospitalised</strong> after 600 L of 98.7%-pure industrial methanol was diverted from an Ahmedabad chemical packaging firm into bootleg country liquor; 15 arrests.<Ref n={19} /></li>
              <li><strong className="text-gray-900">11 Nov 2024 — IOCL Koyali (Vadodara) Refinery:</strong> benzene tank explosion at 3:30 PM; 2 contractual workers killed; 10 fire tenders, full-shift evacuation.<Ref n={21} /></li>
              <li><strong className="text-gray-900">28 Dec 2024 — Gujarat Fluorochemicals, Dahej:</strong> toxic-gas pipe leak kills 4 workers; ₹30 lakh ex-gratia each.</li>
            </ul>
          </DataCard>
        </Section>

        {/* ═══ Section 5: Pharma KSM Trap ═══ */}
        <Section icon={<FlaskConical className="w-8 h-8 text-emerald-600" />} title="Pharmacy of India — On a Chinese Shelf">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="~70%" label="APIs from China" color="red" />
            <StatBox value="₹3,490Cr" label="6-APA Imports FY24" color="crimson" />
            <StatBox value="94.1%" label="6-APA from China" color="red" />
          </div>

          <DataCard title="Reader primer — APIs, KSMs, and why 'Pharmacy of India' is a half-truth">
            <p className="text-gray-600 leading-relaxed mb-2">
              An <strong className="text-gray-900">API</strong> (Active Pharmaceutical Ingredient) is the molecule that does the actual work in a tablet — paracetamol, amoxicillin, ciprofloxacin. A <strong className="text-gray-900">KSM</strong> (Key Starting Material) is the upstream chemical you start the synthesis from — penicillin G for amoxicillin, 6-APA for the cephalosporin family, etc. India is the world's largest <em>generic formulation</em> exporter, but the molecules and their starting materials are overwhelmingly Chinese.<Ref n={16} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              In FY24, India imported <strong className="text-gray-900">₹2,066 cr of penicillin G (77% from China)</strong> and <strong className="text-gray-900">₹3,490 cr of 6-APA (94.1% from China)</strong>. Antibiotics overall: <strong className="text-gray-900">87% by value from China (2024)</strong>. Specific molecules are even more concentrated: paracetamol 91%, ibuprofen 95.2%, streptomycin 100%, vitamin B12 98.1%, rifampicin 97.3%, norfloxacin 99.6%.<Ref n={17} />
            </p>
          </DataCard>

          {/* Chart: API import dependency by molecule */}
          <FiberizationGap
            title="China Share of India's Imports — by Molecule (% of Quantity, 2023–24)"
            caption="Figure 5: Beneath the 'Pharmacy of India' headline, the underlying KSM and API dependency on China is near-total for several flagship antibiotics and analgesics. The Jambusar Bulk Drug Park (₹3,920 cr, 2,015 acres, target completion March 2027) is Gujarat's flagship bid to reverse this. Source: RIS Discussion Paper 268 (Sudip Chaudhuri); ORF; Business Standard."
            unit="%"
            target={100}
            data={[
              { state: 'Streptomycin', value: 100 },
              { state: 'Norfloxacin', value: 99.6 },
              { state: 'Vitamin B12', value: 98.1 },
              { state: 'Rifampicin', value: 97.3 },
              { state: 'Penicillin', value: 95.8 },
              { state: 'Ibuprofen', value: 95.2 },
              { state: 'Paracetamol', value: 91 },
              { state: 'APIs (overall)', value: 70 },
            ]}
            height={420}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Jambusar Bulk Drug Park — A Late, Concentrated Bet" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The <strong className="text-gray-900">Jambusar Bulk Drug Park</strong> (Bharuch district) is Gujarat's flagship attempt to localize KSM/API manufacturing — <strong className="text-gray-900">₹3,920 cr outlay, 2,015 acres, ₹1,000 cr central grant</strong>, with completion targeted for March 2027 and ~400 firms expected to invest a further ₹8,000 cr.<Ref n={18} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                But the underlying chemistry — fermentation, multi-step synthesis, expensive solvent recovery — has been deliberately ceded to China for two decades. <strong className="text-gray-900">Catching up takes more than a park</strong>; it takes a fermentation industry, an effluent regime, and a power tariff that doesn't exist yet.<Ref n={16} />
              </p>
            </DataCard>

            <DataCard title="The AMR Loop — Effluent meets Antibiotic Manufacturing">
              <p className="text-gray-600 mb-4 leading-relaxed">
                The same clusters that make India's antibiotics also discharge their effluent. The benchmark study — <strong className="text-gray-900">Larsson et al., Patancheru, 2007</strong> — found <strong className="text-gray-900">ciprofloxacin up to 31,000 µg/L</strong> in CETP effluent serving 90 bulk-drug units, the highest concentration ever recorded in industrial wastewater.<Ref n={3} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                India-wide 2025 surface-water surveys still find ciprofloxacin and sulfamethoxazole at risk-quotient &gt; 1 across most sites tested. As Gujarat scales antibiotic API production at Jambusar, <strong className="text-gray-900">downstream AMR risk scales with it</strong> unless effluent regulation precedes capacity.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Timeline ═══ */}
        <Section icon={<Skull className="w-8 h-8 text-red-600" />} title="Timeline of Toxicity Events">
          <div className="space-y-0">
            {[
              { year: '2007', event: 'Vapi industrial estate receives global notoriety — listed as one of the most polluted places on earth by the Blacksmith Institute.' },
              { year: '2010', event: 'CPCB introduces the CEPI index, placing a moratorium on new Ankleshwar industries.' },
              { year: '2014-16', event: 'NGT orders closure of 300+ units across Indian industrial estates for environmental violations; Vapi/Ankleshwar moratoriums periodically lifted and re-imposed.' },
              { year: 'Jan 2019', event: 'NGT ruling in Aryavart Foundation v. Vapi Green Enviro Ltd documents systemic CETP non-compliance; orders Polluter-Pays compensation.' },
              { year: 'Jul 2022', event: 'Botad-Ahmedabad hooch tragedy: 42+ deaths from methanol-laced country liquor traced to industrial-grade methanol diversion from chemical units.' },
              { year: '2024', event: 'IOCL Gujarat (Vadodara) Refinery benzene tank explosion — multiple casualties, evacuation of nearby colonies.' },
              { year: '2025-26', event: 'AMR studies link antibiotic concentrations in the Sabarmati to API output of Vatva and Naroda clusters; Jambusar Bulk Drug Park targeted for completion March 2027 to localize KSM production.' },
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
          { value: '292', label: 'BOD (mg/L)' },
          { value: '97×', label: 'Above Safe Limit' },
          { value: '₹100Cr+', label: 'NGT Fines' },
        ]} messages={[
          { from: 'student', text: `The Golden Corridor is Gujarat's economic engine. It generates massive GDP, FDI, and employment. Pollution is an acceptable and manageable cost of industrial progress.` },
          { from: 'priya', text: `The Sabarmati records BOD of 292 mg/L — 97× the safe limit — with zero dissolved oxygen. CETPs designed in the 1990s discharge effluent MORE toxic than raw influent. Rs 100 Cr+ in NGT fines with zero lasting compliance. Pharmaceutical dumping is incubating AMR superbugs. And the 'solution'? Massive pipelines pumping it all into the ocean. The cost is externalized, not managed.` },
          { from: 'gov', text: `Dahej PCPIR is broadly recognized as the most successful chemical investment region in India. The integration of Common Effluent Treatment Plants (CETP) and strict GPCB monitoring creates a balanced, world-class industrial hub.`, source: `Dept of Chemicals and Petrochemicals, Govt of India` }
        ]} />
      </div>

      <SourceList sources={sources} />
    </main>
  )
}
