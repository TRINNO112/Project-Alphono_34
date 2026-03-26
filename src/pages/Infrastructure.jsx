import { motion } from 'framer-motion'
import { Ship, ArrowRight, AlertTriangle, Hammer, CheckCircle } from 'lucide-react'
import { Section, DataCard } from '../components/Shared'

export default function Infrastructure() {
  return (
    <main className="w-full max-w-5xl mx-auto px-6 pt-32 pb-32 space-y-24">
      {/* Detail Page Hero */}
      <section className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-4 text-crimson font-semibold tracking-widest text-sm mb-4">
            <span>PILLAR 01</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Infrastructure & <span className="italic text-crimson">Logistics</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Handling nearly <strong className="font-semibold text-gray-900 dark:text-white">40% of India's total cargo volume</strong>, Gujarat operates as the nation's primary maritime gateway. However, its logistical backbone exhibits extreme corporate concentration and severe vulnerability bottlenecks.
          </p>
        </motion.div>
      </section>

      {/* Main Structural Breakdown */}
      <div className="space-y-20">
        
        {/* Adani & DP World */}
        <Section icon={<Ship className="w-8 h-8 text-blue-600 dark:text-blue-400" />} title="Corporate Centralization & Monopolies">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <DataCard title="Adani Ports Dominance">
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Mundra Port alone handles <strong className="text-gray-900 dark:text-white">&gt;155 Million Tonnes Per Annum (MTPA)</strong>. The state relies almost exclusively on one corporate entity for managing Mundra, Dahej, and Hazira ports.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> Massive capacity</li>
                <li className="flex items-center gap-2 text-red-700 dark:text-red-400"><AlertTriangle className="w-5 h-5 text-red-500" /> Extreme centralization risk</li>
              </ul>
            </DataCard>

            <DataCard title="DP World Rail Oligopoly">
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                A massive $207M investment connects Gujarat to eastern markets, utilizing over 100 container rakes. The rail inland logistics is disproportionately reliant on singular massive external corporations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> 100+ owned container rakes</li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> 7 inland terminals</li>
              </ul>
            </DataCard>
          </div>
        </Section>

        {/* Bottlenecks */}
        <Section icon={<AlertTriangle className="w-8 h-8 text-red-500" />} title="Vulnerability Bottlenecks in Corridors">
          <div className="grid grid-cols-1 gap-8 mt-8">
            <DataCard title="The Delhi-Mumbai Expressway Delay" alert={true}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-2/3 space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Despite massive investments, an <strong>87-km stretch in South Gujarat</strong> (Vadodara-Virar) remains structurally compromised, sitting at less than 20% completion. 
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Due to disputes with Renaissance Infrastructure, vehicles are forced back onto the congested NH48. This completely negates the promised 12-hour Delhi-Mumbai travel time and bottlenecks freight velocity until 2027-28.
                  </p>
                </div>
                <div className="md:w-1/3 w-full bg-red-100/50 dark:bg-red-950/30 p-6 rounded-xl border border-red-200 dark:border-red-900/50 flex flex-col items-center text-center">
                  <span className="text-4xl font-bold text-red-600 dark:text-red-500 mb-2">20%</span>
                  <span className="text-sm text-red-800 dark:text-red-400 uppercase tracking-widest font-semibold">Completion Status</span>
                  <hr className="w-full border-red-300 dark:border-red-800/50 my-4" />
                  <span className="text-lg font-serif text-red-900 dark:text-red-300">Delayed to 2028</span>
                </div>
              </div>
            </DataCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DataCard title="Ghodbunder Road Crisis">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  A critical freight artery suffering from deteriorating road surfaces and a complete lack of segregation between passenger and heavy freight traffic, leading to catastrophic full-corridor halts from single breakdowns.
                </p>
              </DataCard>
              <DataCard title="Aging Bridge Infrastructure">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  The recent closure of the Tapi River bridge and the Rangsetu bridge highlights a systemic aging failure. Entire logistics routes are severed randomly due to undiscovered expansion joint gaps.
                </p>
              </DataCard>
            </div>
          </div>
        </Section>

        {/* Steel Slag */}
        <Section icon={<Hammer className="w-8 h-8 text-gray-500" />} title="Raw Material Innovation: Steel Slag">
          <div className="bg-white/70 dark:bg-dark-surface/70 p-10 rounded-3xl border border-gray-200 dark:border-dark-border shadow-xl backdrop-blur-md mt-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200 dark:bg-gray-800 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            <h3 className="text-3xl font-serif font-bold mb-6 text-gray-900 dark:text-white relative z-10">Mitigating Aggregate Dependency</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed relative z-10 mb-8 max-w-3xl">
              In a bid to reduce dependency on traditional raw aggregates (which are structurally destructive to mine), Surat inaugurated India's first all-steel slag road. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <div className="flex-1 bg-white dark:bg-dark-bg p-6 rounded-2xl border border-gray-200 dark:border-dark-border">
                <div className="text-crimson font-bold text-3xl mb-2">1 Lakh</div>
                <div className="text-gray-500 text-sm tracking-uppercase uppercase font-semibold">Tonnes of Processed Slag</div>
              </div>
              <div className="flex-1 bg-white dark:bg-dark-bg p-6 rounded-2xl border border-gray-200 dark:border-dark-border">
                <div className="text-crimson font-bold text-3xl mb-2">AM/NS Hazira</div>
                <div className="text-gray-500 text-sm tracking-uppercase uppercase font-semibold">Direct Source Provider</div>
              </div>
              <div className="flex-1 bg-white dark:bg-dark-bg p-6 rounded-2xl border border-gray-200 dark:border-dark-border">
                <div className="text-crimson font-bold text-3xl mb-2">1,200+</div>
                <div className="text-gray-500 text-sm tracking-uppercase uppercase font-semibold">Heavy Vehicles Daily</div>
              </div>
            </div>
          </div>
        </Section>

      </div>
    </main>
  )
}
