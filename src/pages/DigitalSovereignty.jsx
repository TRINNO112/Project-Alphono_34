import { motion } from 'framer-motion'
import { Cable, Cloud, Radio, Server, Globe, AlertTriangle, Wifi } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox, PendingDataBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { ComparisonTable } from '../components/ComparisonTable'
import { CounterArgument } from '../components/CounterArgument'
import ScrollSpy from '../components/ScrollSpy'

const sources = [
  { title: "International Bandwidth — Submarine Cable Landings in India", publication: "TRAI Indian Telecom Services Performance Indicators (Jan–Mar 2025)", url: "https://www.trai.gov.in/release-publication/reports/performance-indicators-reports" },
  { title: "Why the World's Internet Quietly Routes Through Mumbai", publication: "Rest of World (Investigation, 2024)", url: "https://restofworld.org/2024/mumbai-submarine-cables/" },
  { title: "Submarine Cable Map — India Landing Stations", publication: "TeleGeography (Industry Reference, 2025)", url: "https://www.submarinecablemap.com/country/india" },
  { title: "GIFT City IFSC — Operational Review and Infrastructure Audit", publication: "CAG Performance Audit — FY 2023–24", url: "https://cag.gov.in/en/audit-report" },
  { title: "AWS Region Latency Map — Mumbai (ap-south-1) and Singapore (ap-southeast-1)", publication: "Amazon Web Services Public Latency Data", url: "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/" },
  { title: "MeitY Empanelled Cloud Service Providers — List and Compliance Framework", publication: "Ministry of Electronics and Information Technology (MeitY), Government of India", url: "https://www.meity.gov.in/cloud-computing" },
  { title: "Digital Gujarat and iORA — State Service Delivery Portal Hosting Disclosures", publication: "Gujarat State Data Centre Annual Report", url: "https://gujaratindia.gov.in/state-profile/state-data-centre.htm" },
  { title: "5G Fiberization Status — State-wise Tower Fiberization Percentages", publication: "Department of Telecommunications (DoT) QoS / PIB Release, 2025", url: "https://pib.gov.in/" },
  { title: "UIDAI Aadhaar Authentication Outage — Post-Incident Report", publication: "Unique Identification Authority of India, Technical Bulletin 2024", url: "https://uidai.gov.in/" },
  { title: "NPCI UPI Downtime — Service Status Log and Incident Advisories", publication: "National Payments Corporation of India (NPCI)", url: "https://www.npci.org.in/what-we-do/upi/product-overview" },
  { title: "GSTN Portal Outages and Return Filing Extensions — Press Releases", publication: "Central Board of Indirect Taxes and Customs (CBIC) / PIB", url: "https://www.gstn.org.in/" },
  { title: "Versova Submarine Cable Landing Density — Maharashtra Coastal Infrastructure Audit", publication: "Economic Times Telecom (Investigative Feature, 2024)", url: "https://telecom.economictimes.indiatimes.com/" },
  { title: "India Data Centre Capacity Map — Installed MW by State", publication: "JLL India Data Center Report H2 2024", url: "https://www.jll.co.in/en/trends-and-insights/research" },
  { title: "Reliance Jio True-5G Fiber-to-Tower Rollout — State Progress", publication: "Reliance Industries Annual Report / Analyst Briefings, 2024–25", url: "https://www.ril.com/InvestorRelations/FinancialReporting.aspx" },
  { title: "MeghRaj / NIC Cloud Adoption Status — State Government Workload Distribution", publication: "National Informatics Centre (NIC)", url: "https://cloud.gov.in/" },
]

const spySections = [
  { id: 'the-submarine-cable-void', label: 'Cable Void' },
  { id: 'the-versova-bottleneck', label: 'Versova Bottleneck' },
  { id: 'the-gift-city-latency-tax', label: 'GIFT Latency' },
  { id: 'the-cloud-sovereignty-gap', label: 'Cloud Gap' },
  { id: '5g-fiberization-tower-backhaul', label: 'Fiber Deficit' },
  { id: 'cascading-outages-upi-aadhaar-gstn', label: 'Outage Cascades' },
]

export default function DigitalSovereignty() {
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
            <span>PILLAR 13</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>INVISIBLE DEPENDENCY</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Digital Sovereignty & <span className="italic text-crimson">Data Dependency</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Despite a 1,600 km coastline and the aspirational "GIFT City" IFSC, Gujarat has <strong className="font-semibold text-gray-900 dark:text-white">zero international submarine cable landings</strong>. Every packet — every UPI transaction, every cloud query, every IFSC trade — is backhauled through Mumbai or Chennai. The state that markets itself as India's digital future runs entirely on another state's infrastructure.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* ═══ Section 1: Submarine Cable Void ═══ */}
        <Section icon={<Cable className="w-8 h-8 text-blue-600 dark:text-blue-400" />} title="The Submarine Cable Void">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="0" label="Cable Landings in Gujarat" color="crimson" />
            <StatBox value="17" label="India's Total Cable Landings" color="blue" />
            <StatBox value="1,600 km" label="Gujarat Coastline" color="teal" />
          </div>

          <PillarChart
            type="bar"
            title="India's International Submarine Cable Landings — Concentration by State"
            caption="Figure 1: Of India's international submarine cable landings, Mumbai alone hosts the overwhelming majority. Gujarat — despite its coastline and the GIFT City IFSC ambition — has zero. Sources: TRAI Performance Indicator Report, TeleGeography Submarine Cable Map."
            data={[
              { name: 'Mumbai (MH)', value: 15 },
              { name: 'Chennai (TN)', value: 6 },
              { name: 'Kochi (KL)', value: 2 },
              { name: 'Tuticorin (TN)', value: 1 },
              { name: 'Gujarat', value: 0 },
            ]}
            colors={['#2563EB', '#16A34A', '#9333EA', '#CA8A04', '#DC2626']}
            height={320}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="A 1,600 km Coastline with Zero Landings" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Gujarat has the <strong className="text-gray-900 dark:text-white">longest coastline of any Indian state</strong> — from Kutch through Jamnagar, Porbandar, Veraval, down to the Gulf of Khambhat. Yet not a single international submarine cable terminates on Gujarati soil.<Ref n={1} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                TeleGeography's public cable map confirms the asymmetry: every cable linking India to the Gulf, East Africa, Southeast Asia, and Europe lands at Mumbai, Chennai, Kochi, or Tuticorin. Gujarat is a digital island — its bandwidth is effectively rented from Maharashtra.<Ref n={3} />
              </p>
            </DataCard>

            <DataCard title="The Strategic Cost">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Every Gujarat-origin packet travelling internationally — whether from a Surat diamond exporter, a Jamnagar refinery operations terminal, or a GIFT City fintech — must first transit the <strong className="text-gray-900 dark:text-white">Mumbai backhaul</strong> before reaching a landing station.<Ref n={12} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This isn't just a latency issue. It's a <strong className="text-gray-900 dark:text-white">sovereign redundancy failure</strong>: if Mumbai's cable infrastructure fails (cyclone, outage, or a Versova incident), Gujarat goes dark with it.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 2: Versova Bottleneck ═══ */}
        <Section icon={<AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />} title="The Versova Bottleneck">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="~15" label="Cables Within 6 km of Versova Beach" color="crimson" />
            <StatBox value="1" label="Beach Deciding India's Uptime" color="red" />
            <StatBox value="0" label="Redundant Routes via West Coast" color="red" />
          </div>

          <DataCard title="India's Single Point of Failure" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              A 2024 Rest of World investigation documented what telecom engineers have whispered about for years: roughly <strong className="text-gray-900 dark:text-white">15 of India's international submarine cables land within a 6-kilometre stretch at Versova beach, Mumbai</strong>.<Ref n={2} /> The cables are close enough together that a single anchor drag, a large construction incident, or a coastal cyclone could sever a significant fraction of India's international bandwidth at once.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              For Gujarat, this is not a distant risk — it is <em>the</em> risk. Because Gujarat has no landing of its own, a Versova incident doesn't just slow Gujarat down; it <strong className="text-gray-900 dark:text-white">isolates</strong> it.<Ref n={12} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              A west-coast landing at Mundra, Pipavav, or Hazira — any of Gujarat's major ports with existing subsea infrastructure — would create the geographic redundancy India currently lacks. No such project is under construction as of early 2026.
            </p>
          </DataCard>

          <ComparisonTable
            title="Cable Landing Diversification — Coastal States"
            columns={[
              { key: 'cables', label: 'Intl. Cables Landing' },
              { key: 'landings', label: 'Distinct Landing Sites' },
              { key: 'coastline', label: 'Coastline (km)' },
              { key: 'ratio', label: 'Cables / 1000 km' },
            ]}
            rows={[
              { state: 'Maharashtra', cables: '15+', landings: '2 (Mumbai, Versova)', coastline: '720', ratio: '~20.8' },
              { state: 'Tamil Nadu', cables: '7', landings: '2 (Chennai, Tuticorin)', coastline: '1,076', ratio: '~6.5' },
              { state: 'Kerala', cables: '2', landings: '1 (Kochi)', coastline: '580', ratio: '~3.4' },
              { state: 'Gujarat', cables: '0', landings: '0', coastline: '1,600', ratio: '0' },
            ]}
            highlightState="Gujarat"
          />
        </Section>

        {/* ═══ Section 3: GIFT City Latency Tax ═══ */}
        <Section icon={<Server className="w-8 h-8 text-purple-600 dark:text-purple-400" />} title="The GIFT City Latency Tax">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="~45 ms" label="GIFT ↔ Singapore Latency" color="crimson" />
            <StatBox value="~15 ms" label="Singapore-Native Latency" color="green" />
            <StatBox value="3x" label="Latency Penalty for GIFT Fintech" color="red" />
          </div>

          <PillarChart
            type="bar"
            title="Round-Trip Latency to Singapore (ap-southeast-1) — by Origin"
            caption="Figure 2: GIFT City's fintech and IFSC ambitions compete with Singapore, Hong Kong, and Dubai. Every packet leaving GIFT backhauls through Mumbai first, adding ~30 ms of avoidable latency. For low-latency trading, that gap is decisive. Sources: AWS public latency maps, CAG GIFT City audit FY24."
            data={[
              { name: 'Singapore (native)', value: 15 },
              { name: 'Hong Kong', value: 32 },
              { name: 'Mumbai (ap-south-1)', value: 38 },
              { name: 'GIFT City (via MH)', value: 45 },
              { name: 'Delhi (via MH)', value: 55 },
            ]}
            colors={['#16A34A', '#2563EB', '#CA8A04', '#DC2626', '#EF4444']}
            height={320}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Why Latency Matters for IFSC">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                International Financial Service Centres compete on a few axes: regulatory clarity, tax treatment, talent depth, and — critically for market-making, algorithmic trading, and derivatives — <strong className="text-gray-900 dark:text-white">round-trip latency to major liquidity venues</strong>.<Ref n={4} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                A 30 ms disadvantage versus Singapore is not a rounding error for high-frequency strategies. It is an <strong className="text-gray-900 dark:text-white">architectural tax</strong> that cannot be solved by regulation or incentives — only by physical cable infrastructure Gujarat does not control.
              </p>
            </DataCard>

            <DataCard title="The Backhaul Paradox" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                GIFT City is marketed as India's answer to Dubai and Singapore. Yet a trade placed on an IFSC exchange from a GIFT-resident fund must route its order flow <strong className="text-gray-900 dark:text-white">to Mumbai, then to the cable landing at Versova, then under the sea</strong> to its destination.<Ref n={5} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The obvious state-level solution — a direct Gujarat cable landing paired with a Tier-4 carrier-neutral exchange at GIFT — has been discussed in CAG audit recommendations without any commissioning date.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 4: Cloud Sovereignty Gap ═══ */}
        <Section icon={<Cloud className="w-8 h-8 text-teal-600 dark:text-teal-400" />} title="The Cloud Sovereignty Gap">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="AWS / Azure" label="Primary Hosts for State e-Gov" color="crimson" />
            <StatBox value="Mumbai" label="Actual Physical Data Location" color="red" />
            <StatBox value="MeghRaj" label="Domestic Alt. (Underused)" color="teal" />
          </div>

          <PillarChart
            type="pie"
            title="Hosting Stack for Gujarat State e-Governance Workloads (Indicative)"
            caption="Figure 3: Gujarat's citizen-facing digital services (Digital Gujarat portal, iORA land records, utility portals) lean heavily on hyperscaler infrastructure physically located in Maharashtra. MeghRaj / NIC workloads exist but do not dominate. Sources: MeitY empanelled CSP list, state SDC disclosures, NIC cloud adoption reports."
            data={[
              { name: 'AWS Mumbai', value: 42 },
              { name: 'Azure India', value: 24 },
              { name: 'State SDC (Gandhinagar)', value: 18 },
              { name: 'NIC / MeghRaj', value: 10 },
              { name: 'Other (GCP, hybrid)', value: 6 },
            ]}
            colors={['#F59E0B', '#2563EB', '#16A34A', '#9333EA', '#6B7280']}
            height={340}
          />

          <DataCard title="What It Means to Host iORA on AWS Mumbai" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              When a Gujarat farmer in Junagadh checks a land-record mutation on iORA, the query hits an AWS Mumbai region endpoint. The packet crosses state lines twice (Gujarat → Maharashtra → Maharashtra → Gujarat) to fetch a record <em>about</em> Gujarati land.<Ref n={7} /> The data at rest is nominally sovereign (Indian legal jurisdiction applies), but the operational uptime of Gujarat's land-record system is tied to AWS ap-south-1's SLA and Maharashtra's grid/network.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              MeitY maintains an empanelled list of domestic cloud providers (<strong className="text-gray-900 dark:text-white">NIC MeghRaj, CtrlS, ESDS, Yotta, CDSL Ventures</strong>), but state adoption remains patchy — driven more by procurement inertia than by sovereignty policy.<Ref n={6} /><Ref n={15} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The sovereignty gap isn't that Gujarat <em>can't</em> host its own services. It's that it currently <strong className="text-gray-900 dark:text-white">doesn't</strong>.
            </p>
          </DataCard>
        </Section>

        {/* ═══ Section 5: Fiberization Deficit ═══ */}
        <Section icon={<Wifi className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />} title="5G Fiberization & Tower Backhaul">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="~40%" label="Gujarat Tower Fiberization" color="crimson" />
            <StatBox value="~55%" label="TN / KA Fiberization" color="green" />
            <StatBox value="100%" label="Target for True-5G" color="blue" />
          </div>

          <DataCard title="Fiber-to-Tower: The Quiet 5G Constraint">
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              True-5G (standalone, low-latency) requires that every cell tower be connected to the core by <strong className="text-gray-900 dark:text-white">dedicated fibre</strong>, not microwave backhaul.<Ref n={8} /> DoT and industry tracking place national fiberization at around 38–42% as of 2024–25. Gujarat sits close to the national average — behind Tamil Nadu, Karnataka, and Maharashtra on a per-tower basis.<Ref n={14} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Without fiberization parity, Gujarat cannot offer the sub-10 ms mobile latency Industry 4.0 applications actually need — connected ports at Mundra, autonomous logistics, remote pharma QA. The gap between marketing and infrastructure is documented in the DoT QoS reports — it just isn't advertised.
            </p>
          </DataCard>

          <PendingDataBox label="State-Specific Fiberization % — Pending Cross-Check with DoT FY25 Filing" />
        </Section>

        {/* ═══ Section 6: Cascading Outages ═══ */}
        <Section icon={<Radio className="w-8 h-8 text-orange-600 dark:text-orange-400" />} title="Cascading Outages: UPI, Aadhaar, GSTN">
          <DataCard title="What Happens When the National Rails Go Down" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Gujarat has aggressively digitised its service delivery — from ration-card authentication (Aadhaar) to merchant payments (UPI) to business compliance (GSTN). The consequence: a <strong className="text-gray-900 dark:text-white">national-rail outage becomes a state-level service halt</strong>.<Ref n={9} /><Ref n={10} /><Ref n={11} />
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-2 mb-4">
              <li><strong className="text-gray-900 dark:text-white">UPI:</strong> NPCI's public incident log records multiple multi-hour UPI degradation events per quarter. Each cascades into refused merchant payments at Surat textile wholesalers, Morbi ceramic distributors, and Ahmedabad retail.</li>
              <li><strong className="text-gray-900 dark:text-white">Aadhaar:</strong> UIDAI authentication downtime freezes ration dispensation at Fair Price Shops, EPF claim verification, and bank KYC renewal — with no state fallback.</li>
              <li><strong className="text-gray-900 dark:text-white">GSTN:</strong> Return-filing portal outages near quarterly deadlines have repeatedly forced CBIC to issue extension notifications — a de-facto admission that the digital infrastructure can't meet its own deadlines.</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              None of these systems are <em>Gujarat's</em> to fix. That is precisely the dependency.
            </p>
          </DataCard>

          <ComparisonTable
            title="Digital Infrastructure Parity — Gujarat vs Peer States"
            columns={[
              { key: 'cables', label: 'Intl. Cable Landings' },
              { key: 'dc', label: 'DC Capacity (Installed)' },
              { key: 'fiber', label: 'Tower Fiberization' },
              { key: 'meghraj', label: 'State e-Gov on Domestic Cloud' },
            ]}
            rows={[
              { state: 'Maharashtra', cables: '15+', dc: 'Very High (Mumbai hub)', fiber: '~50%', meghraj: 'Partial' },
              { state: 'Tamil Nadu', cables: '7', dc: 'High (Chennai hub)', fiber: '~55%', meghraj: 'Partial' },
              { state: 'Karnataka', cables: '0', dc: 'Very High (Bengaluru)', fiber: '~55%', meghraj: 'Leading' },
              { state: 'Gujarat', cables: '0', dc: 'Moderate (GIFT, Gandhinagar)', fiber: '~40%', meghraj: 'Low' },
            ]}
            highlightState="Gujarat"
          />
        </Section>

        {/* ═══ Counter-argument ═══ */}
        <Section icon={<Globe className="w-8 h-8 text-gray-600 dark:text-gray-400" />} title="The Debate">
          <CounterArgument
            messages={[
              {
                from: 'raju',
                text: "Arre bhai, GIFT City is world-class. We have fiber, data centres, AWS, everything. Why are you crying about some cables?",
              },
              {
                from: 'priya',
                text: "Because **0 submarine cables** land in Gujarat. All international traffic — including GIFT City's — routes through Mumbai first. That's a **~30 ms latency penalty** vs Singapore-native, which kills IFSC competitiveness for HFT.",
                source: 'TeleGeography Submarine Cable Map · AWS Latency Maps',
              },
              {
                from: 'raju',
                text: "Latency-latency. Our farmers, our industries — do they care about 30 milliseconds?",
              },
              {
                from: 'priya',
                text: "Your farmer in Junagadh checks iORA for a land mutation. That query hits **AWS Mumbai**. If Mumbai's cable at Versova fails — 15 cables within 6 km of one beach — Gujarat's land records go offline. That's not a latency issue, that's a **sovereign redundancy failure**.",
                source: 'Rest of World 2024 · iORA hosting disclosure',
              },
              {
                from: 'raju',
                text: "Okay, but Mundra and Hazira can have cables. Build them no?",
              },
              {
                from: 'priya',
                text: "**Exactly the point.** There is no such project commissioned. The 1,600 km coastline sits unused while the state brands itself as India's digital future. Marketing and infrastructure are not the same thing.",
              },
            ]}
          />
        </Section>

      </div>

      <SourceList sources={sources} />
    </main>
  )
}
