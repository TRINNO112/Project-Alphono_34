import { motion } from 'framer-motion'
import { Factory, AlertTriangle, Fuel, Pill, Mountain, CheckCircle } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'

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
]

export default function Materials() {
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
            <span>PILLAR 06</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Industrial Raw <span className="italic text-crimson">Materials</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat <strong className="font-semibold text-gray-900 dark:text-white">processes, but does not dig</strong>. The world's largest refinery runs on imported crude. The massive pharmaceutical sector depends on Chinese APIs. Mineral supply chains stretch to Odisha and Jharkhand. Gujarat is a processing powerhouse built atop a foundation of external raw material supply lines.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* Crude Oil */}
        <Section icon={<Fuel className="w-8 h-8 text-orange-600 dark:text-orange-400" />} title="The Crude Oil Import Machine">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="1.4 MMBPD" label="Jamnagar Refinery Capacity" color="crimson" />
            <StatBox value="216" label="Crude Grades Processed" color="blue" />
            <StatBox value="~85%" label="India's Crude Import Share" color="red" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Jamnagar: World's Largest Refinery">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Reliance's Jamnagar refinery is the <strong className="text-gray-900 dark:text-white">world's largest single-site oil refinery</strong> with 1.4 million barrels per day (MMBPD) capacity and a complexity index of 21.1 — the highest globally.<Ref n={1} /> It has processed 216 different grades of crude from around the world.<Ref n={2} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Crude throughput at the Jamnagar SEZ alone reached <strong className="text-gray-900 dark:text-white">28.3 million tonnes</strong> in March 2024.<Ref n={1} /> India imports roughly 85% of its total crude needs, and Jamnagar — fed by Middle Eastern, Russian, and American crude — is overwhelmingly reliant on imported feedstock.
              </p>
            </DataCard>

            <DataCard title="Geopolitical Supply Chain Diversification">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                In late 2025, Reliance resumed purchases of discounted Russian crude, routing barrels from non-sanctioned suppliers to its Gujarat refinery.<Ref n={3} /> Simultaneously, the company signed a <strong className="text-gray-900 dark:text-white">20-year, $300 billion commitment to American shale crude</strong> — diversifying away from Middle East geopolitical risk.<Ref n={4} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This demonstrates both the vulnerability and the strategic sophistication of Gujarat's refining dependency: the plant's output is globally competitive, but its input is entirely at the mercy of international shipping lanes and geopolitical alliances.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* Pharmaceutical APIs */}
        <Section icon={<Pill className="w-8 h-8 text-blue-600 dark:text-blue-400" />} title="Pharmaceutical APIs: The China Dependency">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="65-70% Import Dependency" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                India imports approximately <strong className="text-gray-900 dark:text-white">65-70% of its Active Pharmaceutical Ingredients (APIs)</strong>, Key Starting Materials (KSMs), and intermediates from China — some estimates go as high as 80%.<Ref n={5} /><Ref n={8} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                India spent <strong className="text-gray-900 dark:text-white">$3.18 billion</strong> importing APIs from China in FY 2022-23.<Ref n={5} /> Before 1991, dependency was just 0.3% — it spiked to 70% by 2019.<Ref n={6} />
              </p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-red-700 dark:text-red-400">Critical drug dependencies on China:<Ref n={7} /></p>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-500" /> Paracetamol: 91% from China</li>
                  <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-500" /> Penicillin/salts: 95.8% from China</li>
                  <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-500" /> Streptomycin: 100% from China</li>
                  <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-500" /> Vitamin B12: 98.1% from China</li>
                </ul>
              </div>
            </DataCard>

            <DataCard title="Gujarat's Bharuch Bulk Drug Park">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                The Indian government approved three Bulk Drug Parks — in <strong className="text-gray-900 dark:text-white">Bharuch (Gujarat)</strong>, Una (Himachal Pradesh), and East Godavari (Andhra Pradesh) — to reduce API import dependency.<Ref n={13} /> Rs 300 crore was released to Gujarat's State Implementing Agency as the first installment.<Ref n={13} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Under the Production Linked Incentive (PLI) scheme, financial incentives worth <strong className="text-gray-900 dark:text-white">Rs 6,940 crore</strong> target domestic manufacturing of 53 critical APIs, with an expected 25-30% reduction in imports within five years.<Ref n={12} /> By March 2025, import savings of Rs 1,362 crore were reported.<Ref n={12} />
              </p>
            </DataCard>
          </div>
        </Section>

        {/* Minerals */}
        <Section icon={<Mountain className="w-8 h-8 text-gray-600 dark:text-gray-400" />} title="Minerals & The Eastern Supply Chain">
          <div className="bg-white/70 dark:bg-dark-surface/70 p-10 rounded-3xl border border-gray-200 dark:border-dark-border shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200 dark:bg-gray-800 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            <h3 className="text-3xl font-serif font-bold mb-6 text-gray-900 dark:text-white relative z-10">Bauxite, Iron Ore & Interstate Dependencies</h3>
            <div className="space-y-6 relative z-10">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                India's mineral belt — Odisha, Jharkhand, Chhattisgarh — forms the backbone of raw material supply for Gujarat's manufacturing. Odisha alone contributes <strong className="text-gray-900 dark:text-white">76% of India's bauxite production</strong> and approximately 50% of national iron ore output.<Ref n={9} />
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-dark-bg p-6 rounded-2xl border border-gray-200 dark:border-dark-border">
                  <h4 className="font-serif font-bold text-lg mb-3 text-gray-900 dark:text-white">Gujarat's Own Minerals</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Gujarat holds 62 million tonnes of bauxite reserves (Panchmahal, Dahod, Vadodara) and accounts for <strong>17% of national bauxite production</strong>.<Ref n={9} /> It leads with 8 operational mineral blocks. But for high-grade iron ore and bulk bauxite, it reaches into Odisha.<Ref n={11} />
                  </p>
                </div>

                <div className="bg-white dark:bg-dark-bg p-6 rounded-2xl border border-gray-200 dark:border-dark-border">
                  <h4 className="font-serif font-bold text-lg mb-3 text-gray-900 dark:text-white">GMDC's Odisha Operations</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Gujarat Mineral Development Corporation (GMDC) operates the <strong>Baitarani-West Mine in Odisha</strong> for long-term bauxite supply — a direct interstate dependency link.<Ref n={10} /> This highlights how Gujarat's aluminium and manufacturing sectors are tethered to eastern India's mineral reserves.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Domestic bauxite production could reduce aluminium industry import dependence by 30% through 2027, while iron ore self-sufficiency would eliminate steel sector import requirements for standard grades.<Ref n={11} /> However, any disruption to the eastern railway corridors connecting Odisha-Jharkhand to Gujarat's ports would severely impact manufacturing output.
              </p>
            </div>
          </div>
        </Section>

      </div>

      <SourceList sources={sources} />
    </main>
  )
}
