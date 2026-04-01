import { motion } from 'framer-motion'
import { Droplets, AlertTriangle, MapPin, CheckCircle } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'

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
]

export default function Water() {
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

            <DataCard title="Fluorosis & Contamination">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Over-abstraction has triggered <strong className="text-gray-900 dark:text-white">high fluoride contamination</strong> in the North Gujarat aquifer and salinity ingression along the coastal Saurashtra Peninsula.<Ref n={6} /> In Mehsana district, fluorosis has disabled workers, reduced earning capacity, and plunged households into cycles of wage loss and medical bills.<Ref n={7} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Depletion has created a social divide — only wealthy farmers can afford the increasing drilling and pumping costs, leading to social conflicts and migration.<Ref n={8} />
              </p>
            </DataCard>
          </div>

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

      </div>

      <SourceList sources={sources} />
    </main>
  )
}
