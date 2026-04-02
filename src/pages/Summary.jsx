import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Ship, Zap, Droplets, Users, TrendingUp, Factory, GraduationCap, TreePine, ArrowRight, FileText } from 'lucide-react'
import { Section, DataCard, StatBox } from '../components/Shared'

const pillars = [
  {
    num: 'I',
    icon: <Ship className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: 'Infrastructure & Logistics',
    path: '/infrastructure',
    summary: 'Gujarat handles nearly 40% of India\'s cargo volume through its ports, but this capacity is concentrated under a single corporate entity — Adani Ports (APSEZ). Mundra Port alone crossed 200 MMT in FY25, while critical road infrastructure like the Delhi-Mumbai Expressway remains severely delayed, with Package 8 at just 5% completion.',
    stats: [
      { value: '200 MMT', label: 'Mundra FY25 Cargo', color: 'blue' },
      { value: '5%', label: 'Expressway Pkg 8', color: 'red' },
      { value: '40%', label: 'India Cargo Share', color: 'crimson' },
    ]
  },
  {
    num: 'II',
    icon: <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />,
    title: 'Energy Grid & Power Supply',
    path: '/energy',
    summary: 'Despite leading India with 42.5 GW of installed renewable capacity, Gujarat\'s industrial baseload remains chained to imported fossil fuels. Two Mundra mega-plants (8,620 MW combined) run entirely on Indonesian coal. Gujarat\'s LNG terminals handle 60% of India\'s import capacity, with 69% of LNG transiting the Strait of Hormuz — a single geopolitical chokepoint.',
    stats: [
      { value: '8,620 MW', label: 'Imported Coal Plants', color: 'crimson' },
      { value: '69%', label: 'Hormuz LNG Exposure', color: 'red' },
      { value: '22%', label: 'Actual RE Generation', color: 'green' },
    ]
  },
  {
    num: 'III',
    icon: <Droplets className="w-8 h-8 text-teal-600 dark:text-teal-500" />,
    title: 'Water Security',
    path: '/water',
    summary: 'The Sardar Sarovar Dam is a single point of failure supplying water to 3 crore people and irrigating 20.38 lakh hectares. Gujarat\'s allocation of 9 MAF comes at only 75% dependability. Meanwhile, the North Gujarat aquifer is pumped at 95% of its annual recharge of 6.88 km³, with fluoride contamination and salinity ingression accelerating.',
    stats: [
      { value: '3 Crore', label: 'SSP-Dependent Population', color: 'teal' },
      { value: '95%', label: 'Aquifer Withdrawal', color: 'red' },
      { value: '75%', label: 'Water Dependability', color: 'crimson' },
    ]
  },
  {
    num: 'IV',
    icon: <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: 'Migrant Labor Ecosystem',
    path: '/labor',
    summary: 'Morbi\'s 1,200 ceramic factories employ 4 lakh workers, 70% of whom are migrants from UP, Bihar, and Odisha. Surat\'s textile sector runs on 10 lakh migrant workers paid 90-95% in cash. Three mass exodus events in six years (2016 demonetisation, 2020 COVID, 2026 West Asia crisis) each crippled manufacturing within days.',
    stats: [
      { value: '70%', label: 'Morbi Migrant Share', color: 'purple' },
      { value: '400+', label: 'Units Shut (2026)', color: 'red' },
      { value: '71', label: 'Worker Suicides (18mo)', color: 'crimson' },
    ]
  },
  {
    num: 'V',
    icon: <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-500" />,
    title: 'Governance & Fiscal',
    path: '/economics',
    summary: 'Gujarat maintains India\'s lowest debt-to-GSDP ratio at 18.2%, but Own Tax Revenue has declined from 7.44% to 5.6% of GSDP over a decade. Revenue receipts at 8.7% of GSDP are less than half the median state\'s 19.9%. NRI remittances ($136B nationally in FY25) and GIFT City\'s tax-exempt financial flows inflate economic velocity without proportional state revenue.',
    stats: [
      { value: '18.2%', label: 'Debt-to-GSDP', color: 'green' },
      { value: '5.6%', label: 'OTR / GSDP', color: 'red' },
      { value: '8.7%', label: 'Revenue / GSDP', color: 'crimson' },
    ]
  },
  {
    num: 'VI',
    icon: <Factory className="w-8 h-8 text-gray-600 dark:text-gray-400" />,
    title: 'Industrial Raw Materials',
    path: '/materials',
    summary: 'The world\'s largest refinery at Jamnagar (1.4 MMBPD) runs on ~85% imported crude. India\'s pharmaceutical sector imports 65-70% of APIs from China — with Paracetamol at 91%, Penicillin at 95.8%, and Streptomycin at 100% Chinese-sourced. Gujarat\'s mineral needs are tethered to Odisha\'s bauxite and iron ore mines.',
    stats: [
      { value: '~85%', label: 'Crude Oil Imported', color: 'crimson' },
      { value: '65-70%', label: 'APIs from China', color: 'red' },
      { value: '1.4 MMBPD', label: 'Jamnagar Capacity', color: 'blue' },
    ]
  },
  {
    num: 'VII',
    icon: <GraduationCap className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
    title: 'Education & Healthcare',
    path: '/education',
    summary: 'Gujarat has 32,000+ vacant teaching posts in government schools, a Gross Enrollment Ratio (GER) of just 20.1% in higher education versus the national 28.4%, and only one institute (IIT-Gandhinagar) in the NIRF overall top 100. In healthcare, 86-97% of specialist doctor posts at rural CHCs are vacant, government health expenditure is just 0.8% of GSDP, and the state faces a hospital bed deficit of 2.87 lakh beds — an 81.6% shortfall.',
    stats: [
      { value: '32,000+', label: 'Teacher Vacancies', color: 'crimson' },
      { value: '97%', label: 'Specialist Posts Vacant', color: 'red' },
      { value: '0.8%', label: 'Health Spend / GSDP', color: 'red' },
    ]
  },
  {
    num: 'VIII',
    icon: <TreePine className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    title: 'Environment & Climate',
    path: '/environment',
    summary: 'Gujarat has 6 CPCB-designated critically polluted industrial clusters, with Vapi recording the highest CEPI score (90.75) in India. Alang ship-breaking yard exposes workers to asbestos — 16% have early-stage asbestosis, with 4,513 projected mesothelioma cases. NASA satellites detected a 300% SO2 increase over Morbi. 27.6% of the coastline is eroding (highest in India), over 50% of land faces desertification, and per capita CO2 emissions at 4.2 tons are 91% above the national average.',
    stats: [
      { value: '90.75', label: 'Vapi CEPI Score', color: 'crimson' },
      { value: '300%', label: 'SO2 Increase (Morbi)', color: 'red' },
      { value: '4.2 tCO2', label: 'Per Capita Emissions', color: 'red' },
    ]
  },
]

export default function Summary() {
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
            <span>EXECUTIVE SUMMARY</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>SYNTHESIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Structural Dependencies: <span className="italic text-crimson">A Synthesis</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            This executive summary aggregates the <strong className="font-semibold text-gray-900 dark:text-white">top findings from eight pillars of analysis</strong>, each examining a structural dependency that underpins Gujarat's economic machine. Across 100+ cited sources, a consistent pattern emerges: <strong className="font-semibold text-gray-900 dark:text-white">extraordinary throughput built atop fragile, externally-controlled supply chains.</strong>
          </p>
        </motion.div>
      </section>

      {/* Pillar Summaries */}
      <div className="space-y-20">
        {pillars.map((pillar) => (
          <Section key={pillar.num} icon={pillar.icon} title={`${pillar.num}. ${pillar.title}`}>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {pillar.stats.map((s, j) => (
                <StatBox key={j} value={s.value} label={s.label} color={s.color} />
              ))}
            </div>
            <DataCard title="Key Finding">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">{pillar.summary}</p>
              <Link to={pillar.path} className="inline-flex items-center text-crimson font-semibold hover:underline">
                Read Full Analysis <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </DataCard>
          </Section>
        ))}
      </div>

      {/* Conclusion */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="border-2 border-crimson/30 dark:border-crimson/20 p-10 md:p-12 rounded-3xl bg-crimson/5 dark:bg-crimson/5">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-crimson" />
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">Conclusion</h2>
          </div>
          <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Gujarat's economic engine is real, productive, and globally competitive. But this analysis reveals that the engine runs on fuel it does not produce, water it does not source, labor it does not retain, capital it does not fully tax, human capital it does not adequately develop, and environmental costs it does not account for.
            </p>
            <p>
              The question is not whether Gujarat is economically powerful — it clearly is. The question is <strong className="text-gray-900 dark:text-white">how resilient that power is when any of these external supply lines is disrupted</strong>. The events of 2020, 2016, and 2026 have already provided partial answers.
            </p>
            <p>
              This project does not argue that dependency is unique to Gujarat. Every modern economy depends on external inputs. But the <strong className="text-gray-900 dark:text-white">concentration</strong> of these dependencies — a single port operator, a single dam, a single source country for APIs, a single geopolitical chokepoint for LNG — creates a fragility profile that warrants serious, evidence-based scrutiny.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Source Note */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-gray-500 dark:text-gray-500 italic font-serif">
          This summary synthesizes findings from 100+ cited sources across 8 pillars. See individual pillar pages for full references and source URLs.
        </p>
      </motion.section>
    </main>
  )
}
