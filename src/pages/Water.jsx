import { motion } from 'framer-motion'
import { Droplets, AlertTriangle, MapPin, CheckCircle, Factory } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { CounterArgument } from '../components/CounterArgument'
import { ComparisonTable } from '../components/ComparisonTable'
import ScrollSpy from '../components/ScrollSpy'

const spySections = [
  { id: 'the-narmada-lifeline-single-point-of-failure', label: 'Narmada Lifeline' },
  { id: 'groundwater-depletion-the-silent-crisis', label: 'Groundwater Crisis' },
  { id: 'agricultural-dependencies-benefits', label: 'Agriculture' },
  { id: 'industrial-water-demand-the-invisible-competitor', label: 'Industrial Demand' },
  { id: 'sauni-scheme-water-transfer-infrastructure', label: 'SAUNI Scheme' },
  { id: 'urban-water-stress-per-capita-deficit', label: 'Urban Stress' },
]

const sources = [
  { title: "Sardar Sarovar Dam", publication: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sardar_Sarovar_Dam" },
  { title: "Components of Project — Sardar Sarovar Narmada Nigam Limited", publication: "SSNNL Official", url: "https://sardarsarovardam.org/components-of-project.aspx" },
  { title: "Narmada Control Authority — FAQ on Water Allocation", publication: "NCA, Govt. of India", url: "http://nca.gov.in/faq3.htm" },
  { title: "Sardar Sarovar Dam supplies water to 3 crore people, irrigates 20.38 lakh hectares", publication: "India Tribune", url: "https://www.indiatribune.com/public/sardar-sarovar-dam-supplies-water-to-3-crore-people-irrigates-2038-lakh-hectares-in-gujarat-rajasthan" },
  { title: "Sardar Sarovar Dam's Impact: Water, Irrigation & Energy Data", publication: "NewKerala", url: "https://www.newkerala.com/news/a/sardar-sarovar-dam-supplies-water-crore-people-irrigates-335.htm" },
  { title: "Quantification of trends in groundwater levels of Gujarat in western India", publication: "Hydrological Sciences Journal, Taylor & Francis", url: "https://www.tandfonline.com/doi/full/10.1080/02626667.2012.705845" },
  { title: "Groundwater: Rising Depletion and Contamination in 2025 in India", publication: "SANDRP, Mar 2026", url: "https://sandrp.in/2026/03/25/groundwater-2025-depletion-and-contamination-rising/" },
  { title: "Gujarat groundwater depletion — Environmental Justice Atlas", publication: "EJAtlas", url: "https://ejatlas.org/conflict/groundwater-depletion" },
  { title: "Assessment of Groundwater Storage Change Using GRACE/GRACE-FO Satellite Observations over Gujarat", publication: "AGU Fall Meeting 2024", url: "https://ui.adsabs.harvard.edu/abs/2024AGUFM.H06...08U/abstract" },
  { title: "Positive externalities of irrigation from the Sardar Sarovar Project", publication: "Intl Journal of Water Resources Development", url: "https://www.tandfonline.com/doi/abs/10.1080/07900627.2014.880228" },
  { title: "Drought-Hit Gujarat Has Water For Factories, But Not For Farmers", publication: "IndiaSpend, Apr 2019", url: "https://www.indiaspend.com/drought-hit-gujarat-has-water-for-factories-but-not-for-farmers" },
  { title: "In Gujarat, lands for which Narmada dam was built reel under drought even as factories get water", publication: "Scroll.in, Apr 2019", url: "https://scroll.in/article/920278/in-gujarat-lands-for-which-narmada-dam-was-built-reel-under-drought-even-as-factories-get-water" },
  { title: "Reliance expands desalination plant at Jamnagar refinery", publication: "Oil & Gas Journal", url: "https://www.ogj.com/refining-processing/refining/operations/article/17271589/reliance-expands-desalination-plant-at-jamnagar-refinery" },
  { title: "Inauguration of first industrial purpose desalination plant at Dahej", publication: "DeshGujarat, Jun 2022", url: "https://deshgujarat.com/2022/06/16/inauguration-of-first-industrial-purpose-desalination-plant-at-dahej-today/" },
]

export default function Water() {
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
            <span>PILLAR 03</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Water <span className="italic text-crimson">Security</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat's agricultural and industrial water supply is overwhelmingly dependent on a <strong className="font-semibold text-gray-900 dark:text-white">single engineering marvel — the Sardar Sarovar (Narmada) project</strong>. Meanwhile, North Gujarat's aquifers are being pumped dry at rates that exceed natural recharge, creating a ticking time bomb beneath the surface.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* Narmada Single Point of Failure */}
        <Section icon={<Droplets className="w-8 h-8 text-teal-600 dark:text-teal-500" />} title="The Narmada Lifeline: Single Point of Failure">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="3 Crore" label="People Dependent" color="teal" />
            <StatBox value="20.38 Lakh Ha" label="Land Irrigated" color="blue" />
            <StatBox value="75%" label="Command Area Drought-Prone" color="red" />
          </div>

          <PillarChart
            type="pie"
            data={[
              { name: 'Madhya Pradesh', value: 65 },
              { name: 'Gujarat', value: 32 },
              { name: 'Rajasthan', value: 2 },
              { name: 'Maharashtra', value: 1 },
            ]}
            title="Narmada Water Allocation by State (%)"
            caption="Gujarat receives only 9 MAF out of 28 MAF total allocation"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Scale of Dependency">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                The Sardar Sarovar Dam supplies water to <strong className="text-gray-900 dark:text-white">3 crore people</strong> and irrigates <strong className="text-gray-900 dark:text-white">17.92 lakh hectares in Gujarat</strong> and 2.46 lakh hectares in Rajasthan.<Ref n={4} /> The canal network stretches 458 km in the main canal and over <strong>70,000 km</strong> of total canals, reaching 17 districts, 77 talukas, and thousands of villages.<Ref n={5} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Critically, <strong className="text-gray-900 dark:text-white">75% of Gujarat's command area is classified as drought-prone</strong>, meaning these regions have virtually no alternative water source.<Ref n={1} />
              </p>
            </DataCard>

            <DataCard title="Water Allocation & Dependability Risk">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Under the Narmada Water Disputes Tribunal (1979), Gujarat is allocated <strong className="text-gray-900 dark:text-white">9 MAF (Million Acre Feet)</strong> out of 28 MAF total Narmada water, calculated at only <strong>75% dependability</strong> — meaning the probability of receiving the full allocation exists for only 3 out of every 4 years.<Ref n={3} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Of Gujarat's 9 MAF share, 1.06 MAF is allocated for industrial and domestic use, with 0.893 MAF earmarked exclusively for drinking water.<Ref n={3} /> Any multi-year drought directly threatens both agriculture and urban water supply simultaneously.
              </p>
            </DataCard>
          </div>

          <DataCard title="Saurashtra & Kutch: Limited Reach" alert={true}>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Only <strong>1.6% of Kutch's cultivable land</strong> and <strong>9.24% of Saurashtra's cultivable land</strong> fall within the SSP command area.<Ref n={3} /> While Narmada water multiplies Saurashtra's surface water irrigation by roughly 5x and Kutch's by 3x, the vast majority of these arid regions remain outside the canal's physical reach — entirely dependent on groundwater or rainfall.
            </p>
          </DataCard>
        </Section>

        {/* Groundwater Crisis */}
        <Section icon={<AlertTriangle className="w-8 h-8 text-red-500" />} title="Groundwater Depletion: The Silent Crisis">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="North Gujarat Aquifer: 95% Withdrawal">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                The North Gujarat alluvial aquifer, covering <strong className="text-gray-900 dark:text-white">49,914 km²</strong> (47% of Gujarat's total cropped area), is classified as <strong>over-exploited</strong> by the CGWB.<Ref n={6} /> Anthropogenic withdrawal is estimated at <strong className="text-gray-900 dark:text-white">95% of the annual recharge of 6.88 km³</strong>.<Ref n={6} />
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-red-700 dark:text-red-400"><AlertTriangle className="w-5 h-5 text-red-500" /> Withdrawal exceeds net availability in multiple blocks</li>
                <li className="flex items-center gap-2 text-red-700 dark:text-red-400"><AlertTriangle className="w-5 h-5 text-red-500" /> 13% increase in overdraft for irrigation during 2004-2009<Ref n={8} /></li>
              </ul>
            </DataCard>

            <DataCard title="Fluorosis & Contamination" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Over-abstraction has triggered <strong className="text-gray-900 dark:text-white">high fluoride contamination</strong> in the North Gujarat aquifer and salinity ingression along the coastal Saurashtra Peninsula.<Ref n={6} /> Fluoride levels in <strong className="text-gray-900 dark:text-white">Banaskantha and Patan districts reach 17.5 mg/L</strong> — over 11 times the WHO safe limit of 1.5 mg/L. In Mehsana district, fluorosis has disabled workers, reduced earning capacity, and plunged households into cycles of wage loss and medical bills.<Ref n={7} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                District-level extraction data reveals alarming hotspots: <strong className="text-gray-900 dark:text-white">Banaskantha at 115% of recharge, Mehsana at 132%, and Patan at 108%</strong> — all extracting more water than nature can replenish annually. These three districts alone account for 40% of North Gujarat's total groundwater withdrawal.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Depletion has created a social divide — only wealthy farmers can afford the increasing drilling and pumping costs (bore depth now exceeds <strong>400-600 feet</strong> in many North Gujarat blocks), leading to social conflicts and migration.<Ref n={8} />
              </p>
            </DataCard>
          </div>

          <PillarChart
            type="bar"
            data={[
              { name: 'Annual Recharge', value: 6.88 },
              { name: 'Withdrawal', value: 6.54 },
              { name: 'Remaining Buffer', value: 0.34 },
            ]}
            title="North Gujarat Aquifer Balance (km³/year)"
            caption="Only 0.34 km³ buffer between recharge and withdrawal — razor-thin margin"
            colors={['#16A34A', '#D32F2F', '#CA8A04']}
          />

          {/* Chart: District-Level Groundwater Extraction */}
          <PillarChart
            type="bar"
            data={[
              { name: 'Mehsana', value: 132 },
              { name: 'Banaskantha', value: 115 },
              { name: 'Patan', value: 108 },
              { name: 'Sabarkantha', value: 95 },
              { name: 'Gandhinagar', value: 87 },
              { name: 'Safe Limit', value: 70 },
            ]}
            title="Groundwater Extraction as % of Annual Recharge (by District)"
            caption="Mehsana extracts 132% of its annual recharge — pumping 32% more than nature replaces. Source: CGWB / SANDRP"
            colors={['#991B1B', '#B91C1C', '#DC2626', '#EF4444', '#F59E0B', '#16A34A']}
            height={300}
          />

          <DataCard title="20 Years of GRACE Satellite Data: The Verdict">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              A study using GRACE/GRACE-FO satellite data and ~1,600 CGWB well observations (2003-2023) reveals a stark north-south divergence: <strong>increased groundwater depletion in Northern Gujarat</strong> versus recharge in Southern Gujarat and Saurashtra.<Ref n={9} />
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The CGWB monitors only 637 dug wells and 376 piezometers across Gujarat — mostly tracking shallow groundwater — while deep aquifer extraction goes largely unmonitored. Studies suggest CGWB estimates <strong>underestimate actual withdrawals by 13.2 km³/year</strong> across north Indian states.<Ref n={7} />
            </p>
          </DataCard>
        </Section>

        {/* Agricultural Impact */}
        <Section icon={<MapPin className="w-8 h-8 text-green-600 dark:text-green-500" />} title="Agricultural Dependencies & Benefits">
          <div className="bg-white/70 dark:bg-dark-surface/70 p-10 rounded-3xl border border-gray-200 dark:border-dark-border shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200 dark:bg-teal-900 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            <h3 className="text-3xl font-serif font-bold mb-6 text-gray-900 dark:text-white relative z-10">Narmada-Enabled Crop Diversification</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed relative z-10 mb-8 max-w-3xl">
              The SSP canal network has enabled farmers to diversify into wheat, cotton, cumin, sesame, peanuts, vegetables, and fruit cultivation — benefiting over <strong>13 lakh farming families</strong>.<Ref n={4} /> Benefits include reduced energy costs for groundwater pumping, fewer well failures, and increased income from farming and dairy.<Ref n={10} />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <StatBox value="17 Districts" label="Served by Canal Network" color="teal" />
              <StatBox value="70,000 km" label="Total Canal Length" color="blue" />
              <StatBox value="13 Lakh" label="Farming Families Benefited" color="green" />
            </div>
          </div>
        </Section>

        {/* Industrial Water Demand */}
        <Section icon={<Factory className="w-8 h-8 text-amber-600 dark:text-amber-500" />} title="Industrial Water Demand: The Invisible Competitor">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="844 MLD" label="Industrial Intake (Kutch & Saurashtra)" color="red" />
            <StatBox value="18%" label="Narmada Water to Industry/Domestic" color="amber" />
            <StatBox value="400 MLD" label="Jamnagar Refinery Desalination" color="blue" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Factories vs. Farms: The Narmada Diversion">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                The Gujarat government originally mandated that only <strong className="text-gray-900 dark:text-white">11% of Narmada water</strong> would serve industrial and domestic purposes. By 2016, the actual figure had risen to over <strong className="text-gray-900 dark:text-white">18%</strong> — nearly double the original provision.<Ref n={11} /> Industries in Kutch and Saurashtra alone were drawing <strong className="text-gray-900 dark:text-white">844.85 MLD</strong> against their allocation of just 675.88 MLD — a 25% overshoot.<Ref n={11} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Meanwhile, the Narmada main canal is now <strong className="text-gray-900 dark:text-white">92% complete</strong> (as of 2025), but the critical last-mile distribution network — sub-minors and field channels — remains only <strong>36% operational</strong>, covering 27,189 km out of the planned 74,000 km — leaving tail-end farmers far short of their promised allocation.<Ref n={12} /> During the 2019 drought, industries in Mundra and Kutch continued receiving Narmada water while <strong>no water was released for agricultural purposes</strong> in Kutch — the very region the dam was built to serve.<Ref n={11} />
              </p>
            </DataCard>

            <DataCard title="SSNNL Revenue: The Money Follows Industry" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                SSNNL's total water revenue reached <strong className="text-gray-900 dark:text-white">Rs 2,733 crore in FY25</strong>. The breakdown exposes the allocation reality: industrial consumers contributed <strong>Rs 545 crore</strong> while agriculture — the original justification for the dam — generated just <strong className="text-gray-900 dark:text-white">Rs 11.72 crore</strong>. Drinking water contributed Rs 1,876 crore. Industry pays 47x more per unit than agriculture, giving SSNNL a powerful financial incentive to prioritize industrial allocation.
              </p>
            </DataCard>

            <DataCard title="The GWIL Loophole">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                The state-owned Gujarat Water Infrastructure Ltd (GWIL) was constituted as a special purpose vehicle whose stated mission is to provide <strong className="text-gray-900 dark:text-white">drinking water</strong>. Being an SPV, GWIL does not fall under the RTI Act. However, investigations revealed that GWIL distributes water to both domestic and <strong className="text-gray-900 dark:text-white">industrial consumers</strong> — effectively routing Narmada water to factories under a drinking-water mandate.<Ref n={11} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In Lakhpat taluka — one of the worst drought-hit areas since 1919 — three cement factories and two power plants (including Adani and Tata Power) received Narmada water between 2014 and 2018, while farming families in the same region struggled for basic supply.<Ref n={12} />
              </p>
            </DataCard>
          </div>

          <DataCard title="Industrial Desalination: Solving Scarcity or Entrenching Dependency?" alert={true}>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              The Reliance Jamnagar refinery — the world's largest single-site refinery — operates a desalination complex with a total capacity of approximately <strong>400 MLD</strong>, making it one of the largest industrial desalination setups globally.<Ref n={13} /> At Dahej, GIDC invested <strong>Rs 881 crore</strong> in a 100 MLD desalination plant specifically because chemical and petrochemical industries — which constitute 80% of the Dahej PCPIR — were facing production crises due to Narmada water scarcity and rising river salinity.<Ref n={14} />
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              While desalination reduces direct competition with agriculture, it raises a deeper question: Gujarat's industrial model is so water-intensive that it requires building billion-rupee seawater purification infrastructure just to sustain operations. The existing Dahej water supply of 454 MLD — primarily sourced from the Narmada — still dwarfs the 100 MLD desalination supplement.<Ref n={14} /> Industry remains structurally tethered to the same river that agriculture depends on.
            </p>
          </DataCard>
        </Section>

      </div>

      {/* SAUNI & Pipeline Projects */}
      <Section icon={<Droplets className="w-8 h-8 text-blue-600 dark:text-blue-400" />} title="SAUNI Scheme & Water Transfer Infrastructure">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCard title="Saurashtra Narmada Avataran Irrigation (SAUNI)">
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              The SAUNI scheme — designed to fill 115 dams in 11 Saurashtra districts using Narmada water via a <strong className="text-gray-900 dark:text-white">1,130 km pipeline network</strong> — addresses the structural water deficit that rain-dependent Saurashtra has suffered for decades.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              As of 2025, the scheme is <strong className="text-gray-900 dark:text-white">95% complete at a revised cost of Rs 18,563 crore</strong> — a 69% cost overrun from the original Rs 11,000 crore estimate. Phases 1 and 2 are fully operational (523 km, 79 dams filled); Phase 3 (335 km) is 98% complete; Phase 4 (271 km) is 87% complete. Even after full completion, the scheme merely redistributes Narmada water — it creates no new water source.
            </p>
          </DataCard>

          {/* Chart: SAUNI Cost Overrun */}
          <PillarChart
            type="bar"
            data={[
              { name: 'Original Budget', value: 11000 },
              { name: 'Phase 1-2 Actual', value: 8200 },
              { name: 'Phase 3 Revised', value: 4500 },
              { name: 'Phase 4 Revised', value: 5863 },
              { name: 'Total Revised', value: 18563 },
            ]}
            title="SAUNI Scheme: Budget vs Actual Cost (Rs Crore)"
            caption="69% cost overrun — from Rs 11,000 Cr original estimate to Rs 18,563 Cr revised. And it creates no new water source."
            colors={['#16A34A', '#F59E0B', '#EF4444', '#EF4444', '#991B1B']}
            height={280}
          />

          <DataCard title="Kutch Branch Canal: The Lifeline of the Desert" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              The <strong className="text-gray-900 dark:text-white">357 km Kutch Branch Canal</strong> carries Narmada water from Sardar Sarovar to India's largest and most water-scarce district. Before the canal, Kutch's annual per capita water availability was barely <strong>200 litres/day</strong> — far below the national average of 1,544 litres/day.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The canal supports Kutch's industrial boom — Mundra Port, Adani's thermal plants, Kutch cement factories — but this industrial demand now <strong>competes directly with agricultural and domestic use</strong>. During the 2019 drought, agricultural releases were completely stopped while industrial supply continued.
            </p>
          </DataCard>
        </div>
      </Section>

      {/* Urban Water Crisis */}
      <Section icon={<AlertTriangle className="w-8 h-8 text-red-500" />} title="Urban Water Stress & Per Capita Deficit">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <StatBox value="135 LPCD" label="WHO Recommended" color="blue" />
          <StatBox value="90-110 LPCD" label="Gujarat Urban Actual" color="red" />
          <StatBox value="40 LPCD" label="Rural Gujarat (Many Areas)" color="crimson" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCard title="Ahmedabad: Growing Thirst">
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Ahmedabad's population has surged to <strong className="text-gray-900 dark:text-white">8.6 million (metro)</strong>, with water supply at approximately <strong>110 LPCD</strong> — sourced almost entirely from the Narmada canal. The city's original water sources — the Sabarmati riverfront and Kankaria Lake — are now <strong>ornamental</strong>, with the Sabarmati ranked India's 2nd most polluted river.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The Ahmedabad Municipal Corporation draws <strong>1,400 MLD from the Narmada canal</strong>. Any disruption to this single pipeline — earthquake, canal breach, or upstream water dispute — would leave 8.6 million people without water within 48 hours.
            </p>
          </DataCard>

          <DataCard title="Surat: The Flood-Drought Paradox">
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Surat — India's fastest-growing city — depends on the <strong className="text-gray-900 dark:text-white">Tapi River and Ukai Dam</strong> for its water supply. The paradox: the city faces catastrophic floods during monsoon (12 major floods since 1883) and water stress during summer when the Tapi runs low.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Unlike Ahmedabad, Surat has <strong>no direct Narmada canal access</strong> — it depends on a separate river system. This makes Surat's 8+ million residents structurally dependent on a different water source than the rest of Gujarat, creating a fragmented water security architecture.
            </p>
          </DataCard>
        </div>
      </Section>

      <ComparisonTable
        title="Groundwater Extraction: State Comparison"
        columns={[
          { key: 'extraction', label: 'Extraction Rate' },
          { key: 'status', label: 'CGWB Status' },
          { key: 'primaryRisk', label: 'Primary Risk' },
        ]}
        rows={[
          { state: 'Gujarat', extraction: '95% of recharge', status: 'Over-exploited (North)', primaryRisk: 'Fluoride, salinity' },
          { state: 'Punjab', extraction: '149% of recharge', status: 'Critical', primaryRisk: 'Water table decline' },
          { state: 'Rajasthan', extraction: '137% of recharge', status: 'Critical', primaryRisk: 'Arsenic, fluoride' },
          { state: 'Haryana', extraction: '133% of recharge', status: 'Over-exploited', primaryRisk: 'Saline ingression' },
          { state: 'Tamil Nadu', extraction: '77% of recharge', status: 'Semi-critical', primaryRisk: 'Coastal salinity' },
        ]}
      />

      <CounterArgument messages={[
        { from: 'raju', text: 'Sardar Sarovar is an engineering marvel — irrigates **20 lakh hectares**, supplies water to **3 crore** people. Without it, Gujarat would be a desert.' },
        { from: 'priya', text: 'Exactly my point. **3 crore people** on a single dam with only **75%** dependability allocation. What happens in a two-year drought?', source: 'Narmada Control Authority Data' },
        { from: 'raju', text: 'That\'s why we built SAUNI — linking Narmada to Saurashtra\'s reservoirs.' },
        { from: 'priya', text: 'SAUNI went from Rs 11,000 Cr to Rs **18,563 Cr** — a **69%** cost overrun. Meanwhile Mehsana is pumping at **132%** of recharge. The aquifer is literally being mined.', source: 'CGWB / PMKSY Report' },
        { from: 'raju', text: 'Groundwater is a local issue. The state is managing it.' },
        { from: 'priya', text: 'Managing it with fluoride at **17.5 mg/L** — that\'s **11x** the WHO limit. Children in North Gujarat are developing skeletal fluorosis. That\'s not management, Rajubhai.', source: 'CGWB Groundwater Quality Report' },
      ]} />

      <SourceList sources={sources} />
    </main>
  )
}
