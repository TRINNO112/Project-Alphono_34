import { motion } from 'framer-motion'
import { GraduationCap, Heart, AlertTriangle, CheckCircle } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { LollipopChart } from '../components/charts/LollipopChart'
import { Treemap } from '../components/charts/Treemap'
import { CounterArgument } from '../components/CounterArgument'
import { useLocalStorageToggle } from '../hooks/useLocalStorageToggle'
import { GovResponseToggle } from '../components/GovResponseToggle'
import ScrollSpy from '../components/ScrollSpy'

const spySections = [
  { id: 'education-system-gaps', label: 'Education Gaps' },
  { id: 'healthcare-infrastructure-crisis', label: 'Healthcare Crisis' },
  { id: 'medical-brain-drain-structural-outflow', label: 'Brain Drain' },
  { id: 'public-investment-spending-less-getting-less', label: 'Public Investment' },
  { id: 'research-innovation-the-missing-engine', label: 'R&D Gap' },
]

const sources = [
  { title: "Gujarat government schools face massive teacher shortage with 32,000+ vacancies", publication: "ProKerala, 2025", url: "https://www.prokerala.com/news/articles/a1560997.html" },
  { title: "All India Survey on Higher Education (AISHE) 2021-22: GER data", publication: "PIB / Ministry of Education", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1999713" },
  { title: "Gujarat slips in NIRF 2025 rankings — IIT Gandhinagar only institute in overall top 100", publication: "Gujarat Samachar, 2025", url: "https://english.gujaratsamachar.com/news/gujarat/gujarat-slips-in-nirf-2025-rankings-iit-gn-only-institute-in-overall-top-100" },
  { title: "Gujarat University sees 40% decline in certificate verifications by students going abroad", publication: "Gujarat Samachar, 2024", url: "https://english.gujaratsamachar.com/news/gujarat/gujarat-university-sees-40-decline-in-verification-of-certificates-by-students-going-abroad" },
  { title: "NITI Aayog report on globalisation of higher education lauds Gujarat's early push through GBU", publication: "DD News, 2025", url: "https://ddnews.gov.in/en/niti-aayog-report-on-globalisation-of-higher-education-lauds-gujarats-early-push-through-gbu/" },
  { title: "What is the status of government & private expenditure on healthcare in the states?", publication: "Factly.in, 2023", url: "https://factly.in/data-what-is-the-status-of-government-private-expenditure-on-healthcare-in-the-states/" },
  { title: "Healthcare Scenario of Gujarat 2023 — hospital bed deficit analysis", publication: "HospaccX Consulting, 2023", url: "https://hospaccxconsulting.com/healthcare-scenario-of-gujarat-2023/" },
  { title: "Over 90% specialist doctor posts vacant in rural Gujarat", publication: "DNA India, 2023", url: "https://www.dnaindia.com/ahmedabad/report-over-90-specialist-doctor-posts-vacant-in-rural-gujarat-2774771" },
  { title: "MBBS seats have doubled in the last 10 years — huge regional disparities with south leading", publication: "Factly.in, 2024", url: "https://factly.in/data-mbbs-seats-have-doubled-in-the-last-10-years-huge-regional-disparities-with-south-leading-in-availability/" },
  { title: "Gujarat PG Medical Admissions 2025: 849 seats vacant after Round 3 counselling", publication: "Medical Dialogues, 2025", url: "https://medicaldialogues.in/news/education/medical-admissions/gujarat-pg-medical-admissions-2025-849-seats-vacant-after-round-3-counselling-164481" },
  { title: "Bonded medical graduates and government service: only 7-10% compliance", publication: "PMC / Indian J Community Med, 2016", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4950758/" },
  { title: "India emerging as global medical tourism hub — six cities drive boom", publication: "Medical Buyer, 2025", url: "https://medicalbuyer.co.in/india-emerging-as-global-medical-tourism-hub-six-cities-drive-boom/" },
  { title: "Beyond numbers: Enhancing healthcare quality in India — medical faculty shortage analysis", publication: "APIK Journal of Internal Medicine, 2025", url: "https://journals.lww.com/joim/fulltext/2025/10000/beyond_numbers__enhancing_healthcare_quality_in.3.aspx" },
  { title: "Gujarat Budget Analysis 2024-25: Education and Health expenditure breakdown", publication: "PRS India, 2024", url: "https://prsindia.org/budgets/states/gujarat-budget-analysis-2024-25" },
]

export default function Education() {
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
            <span>PILLAR 07</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 leading-tight">
            Education & <span className="italic text-crimson">Healthcare</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat's industrial narrative obscures a <strong className="font-semibold text-gray-900">systemic underinvestment in human capital</strong>. With 32,000+ vacant teaching posts, a higher education enrolment rate below the national average, and up to 97% specialist doctor vacancies in rural areas, the state's dependency on external talent and private healthcare is structurally entrenched.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* Section 1: Education System Gaps */}
        <Section icon={<GraduationCap className="w-8 h-8 text-purple-600" />} title="Education System Gaps">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="32,000+" label="Teacher Vacancies" color="crimson" />
            <StatBox value="20.1%" label="GER (vs 28.4% Natl)" color="red" />
            <StatBox value="2.4 Lakh" label="Annual School Dropouts (#1 in India)" color="red" />
          </div>

          {/* Chart: Higher Education GER Comparison */}
          <LollipopChart
            title="Higher Education GER: Gujarat vs Major States"
            caption="Figure 1: Gujarat's Gross Enrolment Ratio in higher education (20.1%) trails the national average of 28.4%. Source: AISHE 2021-22"
            data={[
              { name: 'Tamil Nadu', value: 46.9 },
              { name: 'Kerala', value: 43.1 },
              { name: 'Karnataka', value: 32.8 },
              { name: 'Maharashtra', value: 32.5 },
              { name: 'Gujarat', value: 20.1, highlight: true },
              { name: 'Rajasthan', value: 18.3 },
              { name: 'Bihar', value: 14.8 },
            ]}
            valueSuffix="%"
            accentColor="#8B5CF6"
            highlightColor="#D32F2F"
            thresholdLine={{ value: 28.4, label: 'National Avg', color: '#6B7280' }}
            sortDescending={true}
          />

          {/* Chart: Dropout Numbers by State */}
          <PillarChart
            type="bar"
            title="Annual School Dropouts: Top States (Lakhs)"
            caption="Figure 2: Gujarat leads India in absolute school dropout numbers. Source: UDISE+ / Ministry of Education"
            data={[
              { name: 'Gujarat', value: 2.4 },
              { name: 'Uttar Pradesh', value: 2.1 },
              { name: 'Madhya Pradesh', value: 1.8 },
              { name: 'Rajasthan', value: 1.7 },
              { name: 'Bihar', value: 1.5 },
              { name: 'Karnataka', value: 0.9 },
            ]}
            colors={['#D32F2F', '#6B7280', '#6B7280', '#6B7280', '#6B7280', '#6B7280']}
            height={280}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Hollow Classrooms: The Teacher Crisis" alert={true}>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Over <strong className="text-gray-900">32,000 teaching posts</strong> remain vacant across Gujarat government schools, spanning primary, secondary, and higher secondary levels.<Ref n={1} /> This is not a temporary staffing gap but a chronic structural deficit that directly degrades learning outcomes for millions of students in the public education system.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Gujarat's Gross Enrolment Ratio (GER) in higher education stands at just <strong className="text-gray-900">20.1%</strong>, significantly below the national average of 28.4% reported by the All India Survey on Higher Education.<Ref n={2} /> This means nearly 4 out of 5 college-age youth in Gujarat are not enrolled in any higher education institution — a staggering gap for India's most industrialised state.
              </p>
            </DataCard>

            <DataCard title="The Dropout Crisis: #1 in India" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Gujarat records an estimated <strong className="text-gray-900">2.4 lakh school dropouts annually</strong> — the highest absolute number of any Indian state. The primary Gross Enrolment Ratio has collapsed from 100%+ to <strong className="text-gray-900">79.6%</strong>, meaning 1 in 5 primary-age children are not enrolled in school.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over <strong className="text-gray-900">1,027 primary schools were closed</strong> between 2019-2024 due to "zero enrolment" — but many of these closures occurred in tribal and rural areas where children shifted to child labour rather than alternative schools. Gujarat's performance on the national PARAKH assessment (2024) fell <strong>below the national average</strong> in both language and mathematics at the Class 3 and Class 6 levels.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-red-700"><AlertTriangle className="w-5 h-5 text-red-500" /> Primary GER collapsed to 79.6% (national: 104.8%)</li>
                <li className="flex items-center gap-2 text-red-700"><AlertTriangle className="w-5 h-5 text-red-500" /> 1,027 primary schools closed (2019-2024)</li>
                <li className="flex items-center gap-2 text-red-700"><AlertTriangle className="w-5 h-5 text-red-500" /> PARAKH scores below national average</li>
              </ul>
            </DataCard>

            <DataCard title="Institutional Quality Deficit">
              <p className="text-gray-600 mb-6 leading-relaxed">
                In the <strong className="text-gray-900">NIRF 2025 rankings</strong>, only IIT Gandhinagar featured in the overall top 100 nationally — a sharp decline from previous years.<Ref n={3} /> Not a single state university or private institution made the cut, exposing a quality vacuum that pushes ambitious students to look outward.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-red-700"><AlertTriangle className="w-5 h-5 text-red-500" /> Zero state universities in top 100<Ref n={3} /></li>
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" /> IIT-Gn sole representative (centrally funded)<Ref n={3} /></li>
              </ul>
            </DataCard>
          </div>

          <DataCard title="The Student Exodus: Brain Drain by the Numbers">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3 space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  In 2023-24, <strong className="text-gray-900">18,237 students from Gujarat went abroad</strong> for higher education, placing it among the top 6 states for outbound student migration.<Ref n={4} /> Gujarat University itself reported a 40% decline in certificate verifications — not because fewer students leave, but because many now bypass traditional verification channels entirely.<Ref n={4} />
                </p>
                <p className="text-gray-700 leading-relaxed">
                  NITI Aayog's report on the globalisation of higher education found that for every 1 foreign student coming to India, <strong className="text-gray-900">28 Indian students go abroad</strong> — a ratio that underscores the catastrophic quality perception gap.<Ref n={5} /> The report notably praised Gujarat's early push through Gujarat Biotechnology University (GBU) as a model, but one institution cannot reverse a systemic tide.<Ref n={5} />
                </p>
              </div>
              <div className="md:w-1/3 w-full bg-purple-100/50 p-6 rounded-xl border border-purple-200 flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-purple-600 mb-2">18,237</span>
                <span className="text-sm text-purple-800 uppercase tracking-widest font-semibold">Students Left (2023-24)</span>
                <hr className="w-full border-purple-300 my-4" />
                <span className="text-lg font-serif text-purple-900">1:28 Inbound-Outbound Ratio</span>
              </div>
            </div>
          </DataCard>
        </Section>

        {/* Section 2: Healthcare Infrastructure Crisis */}
        <Section icon={<Heart className="w-8 h-8 text-red-500" />} title="Healthcare Infrastructure Crisis">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="0.8%" label="Health Spend / GSDP" color="red" />
            <StatBox value="2.87L" label="Bed Deficit" color="crimson" />
            <StatBox value="97%" label="Specialist Vacancy" color="red" />
          </div>

          {/* Chart: Specialist Doctor Vacancies at Rural CHCs */}
          <LollipopChart
            title="Specialist Doctor Vacancies at Rural CHCs"
            caption="Figure 3: Between 86-97% of specialist posts at Gujarat's Community Health Centres remain unfilled. Source: DNA India / RHS"
            data={[
              { name: 'Surgeons', value: 97, highlight: true },
              { name: 'Physicians', value: 91, highlight: true },
              { name: 'Paediatricians', value: 89, highlight: true },
              { name: 'OB-GYN', value: 86, highlight: true },
            ]}
            valueSuffix="%"
            accentColor="#DC2626"
            highlightColor="#991B1B"
            sortDescending={true}
          />

          {/* Chart: Health Expenditure as % of GSDP */}
          <PillarChart
            type="bar"
            title="Government Health Expenditure as % of GSDP"
            caption="Figure 4: Gujarat spends just 0.8% of GSDP on public health — well below the 2.5% NHP target. Source: PRS India / Factly.in"
            data={[
              { name: 'NHP Target', value: 2.5 },
              { name: 'Kerala', value: 1.7 },
              { name: 'Tamil Nadu', value: 1.4 },
              { name: 'Rajasthan', value: 1.3 },
              { name: 'National Avg', value: 1.2 },
              { name: 'Maharashtra', value: 0.9 },
              { name: 'Gujarat', value: 0.8 },
            ]}
            colors={['#16A34A', '#2563EB', '#2563EB', '#2563EB', '#6B7280', '#9CA3AF', '#D32F2F']}
            height={280}
          />

          <DataCard title="Systemic Underspending on Public Health" alert={true}>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Gujarat's government health expenditure amounts to just <strong className="text-gray-900">0.8% of GSDP</strong> — well below the National Health Policy target of 2.5% and lower than many less industrialised states.<Ref n={6} /> This chronic fiscal neglect has created a healthcare system that is structurally dependent on the private sector, where out-of-pocket expenses push vulnerable families into debt traps.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The state budget analysis reveals a stark asymmetry: <strong className="text-gray-900">15.1% of total expenditure goes to education, but only 5.6% to health</strong>.<Ref n={14} /> Even within education, much of the spending fails to close quality gaps, as evidenced by the 32,000+ unfilled teaching positions.
            </p>
          </DataCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The Hospital Bed Crisis">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gujarat faces a staggering <strong className="text-gray-900">2.87 lakh hospital bed deficit</strong> — an 81.6% shortfall against population-based requirements.<Ref n={7} /> The state's bed-to-population ratio falls dramatically short of WHO recommendations, with rural areas bearing the worst of this deficit.
              </p>
              <div className="bg-red-50/60 p-4 rounded-xl border border-red-200">
                <p className="text-red-800 text-sm font-semibold">81.6% shortfall — nearly 3 lakh beds missing from the public health system<Ref n={7} /></p>
              </div>
            </DataCard>

            <DataCard title="Ghost Specialists: Rural CHC Vacancies">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Between <strong className="text-gray-900">86% and 97% of specialist doctor posts</strong> at Community Health Centres (CHCs) across rural Gujarat remain vacant.<Ref n={8} /> Surgeons, OB-GYN specialists, physicians, and paediatricians are virtually absent from the public rural health infrastructure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-red-700"><AlertTriangle className="w-5 h-5 text-red-500" /> 97% surgeon posts vacant at CHCs<Ref n={8} /></li>
                <li className="flex items-center gap-2 text-red-700"><AlertTriangle className="w-5 h-5 text-red-500" /> 86% OB-GYN posts vacant<Ref n={8} /></li>
                <li className="flex items-center gap-2 text-red-700"><AlertTriangle className="w-5 h-5 text-red-500" /> Rural patients forced into private sector dependency</li>
              </ul>
            </DataCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Medical Seats: Regional Disparity">
              <p className="text-gray-600 leading-relaxed">
                Gujarat falls into the <strong className="text-gray-900">"51% population, 25% seats" club</strong> — states that collectively house over half of India's population but control only a quarter of MBBS seats.<Ref n={9} /> Southern states dominate medical seat availability, while Gujarat's per-capita medical education capacity lags significantly behind.
              </p>
            </DataCard>

            <DataCard title="PG Seats Going Empty">
              <p className="text-gray-600 leading-relaxed">
                After Round 3 of PG medical counselling in 2025, <strong className="text-gray-900">849 postgraduate medical seats remained vacant</strong> across Gujarat.<Ref n={10} /> This paradox — specialist vacancies coexisting with unfilled training seats — points to systemic issues in compensation, rural posting conditions, and institutional attractiveness.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* Section 3: Medical Brain Drain & Outflow */}
        <Section icon={<AlertTriangle className="w-8 h-8 text-orange-500" />} title="Medical Brain Drain & Structural Outflow">
          <DataCard title="Bonded Doctors Who Never Serve" alert={true}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3 space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Despite bond agreements requiring government medical graduates to serve in public facilities, <strong className="text-gray-900">only 7-10% actually comply</strong>.<Ref n={11} /> The vast majority pay penalty fees and migrate to private practice or urban hospitals, leaving rural health centres perpetually understaffed.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This is not merely a Gujarat problem, but the state's particularly acute rural specialist vacancies (86-97%) demonstrate that it suffers worse outcomes than the national pattern.<Ref n={8} /> The bond system, in practice, functions as a regressive tax on medical graduates rather than a tool for equitable healthcare distribution.
                </p>
              </div>
              <div className="md:w-1/3 w-full bg-red-100/50 p-6 rounded-xl border border-red-200 flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-red-600 mb-2">7-10%</span>
                <span className="text-sm text-red-800 uppercase tracking-widest font-semibold">Bond Compliance Rate</span>
                <hr className="w-full border-red-300 my-4" />
                <span className="text-lg font-serif text-red-900">90% Choose Private Sector</span>
              </div>
            </div>
          </DataCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Medical Tourism: Gujarat Absent">
              <p className="text-gray-600 mb-6 leading-relaxed">
                India's medical tourism boom is concentrated in <strong className="text-gray-900">six cities — none in Gujarat</strong>. Chennai attracts 45% of all health tourists, followed by Mumbai, Delhi, Hyderabad, Bengaluru, and Kolkata.<Ref n={12} /> Despite its large hospital network, Gujarat fails to convert healthcare infrastructure into a competitive medical destination.
              </p>
              <div className="bg-yellow-50/60 p-4 rounded-xl border border-yellow-200">
                <p className="text-yellow-800 text-sm font-semibold">Zero Gujarat cities in India's top 5 medical tourism destinations<Ref n={12} /></p>
              </div>
            </DataCard>

            <DataCard title="Faculty Shortage Cascading Into Quality">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Medical colleges across India face an estimated <strong className="text-gray-900">~40% faculty shortage</strong>, directly impacting the quality of training in Gujarat's government and private medical institutions.<Ref n={13} /> Without adequate faculty, even existing PG seats produce graduates with suboptimal clinical exposure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-red-700"><AlertTriangle className="w-5 h-5 text-red-500" /> 40% faculty positions unfilled nationally<Ref n={13} /></li>
                <li className="flex items-center gap-2 text-red-700"><AlertTriangle className="w-5 h-5 text-red-500" /> 849 PG seats vacant in Gujarat alone<Ref n={10} /></li>
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" /> 5.6% of state budget allocated to health<Ref n={14} /></li>
              </ul>
            </DataCard>
          </div>
        </Section>

      </div>

      {/* Education Budget & Spending */}
      <Section icon={<GraduationCap className="w-8 h-8 text-blue-600" />} title="Public Investment: Spending Less, Getting Less">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <StatBox value="15.1%" label="Education Share of Budget" color="blue" />
          <StatBox value="5.6%" label="Health Share of Budget" color="red" />
          <StatBox value="2.8%" label="Education Spend / GSDP" color="crimson" />
        </div>

        {/* Chart: Education Spending as % of GSDP */}
        <PillarChart
          type="bar"
          title="Public Education Expenditure as % of GSDP"
          caption="Figure 5: Gujarat's education spending at 2.8% of GSDP falls far short of the NEP 2020 target of 6%. Source: PRS India Budget Analysis"
          data={[
            { name: 'NEP Target', value: 6.0 },
            { name: 'Kerala', value: 4.2 },
            { name: 'Rajasthan', value: 4.1 },
            { name: 'Tamil Nadu', value: 3.6 },
            { name: 'National Avg', value: 3.1 },
            { name: 'Gujarat', value: 2.8 },
            { name: 'Maharashtra', value: 2.7 },
          ]}
          colors={['#16A34A', '#2563EB', '#2563EB', '#2563EB', '#6B7280', '#D32F2F', '#9CA3AF']}
          height={280}
        />

        {/* Chart: Gujarat Budget Allocation Treemap */}
        <Treemap
          title="Gujarat Budget 2024-25: Key Sectoral Allocation"
          caption="Figure 6: Education gets 15.1% of the budget while health receives just 5.6% — a ratio that perpetuates human capital deficits. Source: PRS India"
          data={[
            { name: 'Education', value: 15.1, color: '#2563EB' },
            { name: 'Roads & Infra', value: 12.3, color: '#F59E0B' },
            { name: 'Rural Dev', value: 6.8, color: '#16A34A' },
            { name: 'Health', value: 5.6, color: '#D32F2F' },
            { name: 'Other', value: 60.2, color: '#6B7280' },
          ]}
          unit="%"
          height={320}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCard title="Education Expenditure: Below Peers">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Gujarat allocates <strong className="text-gray-900">15.1% of its total budget to education</strong> — below the national average of 15.5%.<Ref n={14} /> More critically, when measured as a proportion of GSDP, Gujarat's public education spending at approximately <strong>2.8% of GSDP</strong> is significantly below the NEP 2020 target of 6%.
            </p>
            <p className="text-gray-600 leading-relaxed">
              States like Kerala (4.2% of GSDP on education), Tamil Nadu (3.6%), and Rajasthan (4.1%) invest substantially more per capita. The result: Gujarat produces industrial output but imports the skilled professionals needed to run its industries — from IT professionals at GIFT City to specialist doctors at its hospitals.
            </p>
          </DataCard>

          <DataCard title="Private Sector Dominance: A Double-Edged Sword">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Over <strong className="text-gray-900">78% of higher education enrollment in Gujarat is in private institutions</strong> — one of the highest ratios in India. While this demonstrates private sector dynamism, it also means access to quality education is heavily <strong>income-dependent</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Private engineering colleges in Gujarat charge <strong>Rs 1.5-4 lakh/year</strong> versus Rs 15,000-40,000 at government colleges. Medical seats at private colleges cost <strong>Rs 12-25 lakh/year</strong>. For a state with 33.9% youth NEET rate, this pricing effectively locks out the bottom 60% of the income distribution from skilled employment pathways.
            </p>
          </DataCard>
        </div>
      </Section>

      {/* Research & Innovation Gap */}
      <Section icon={<AlertTriangle className="w-8 h-8 text-yellow-600" />} title="Research & Innovation: The Missing Engine">
        <DataCard title="Gujarat's R&D Paradox" alert={true}>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Despite hosting some of India's largest industrial enterprises — Reliance, Adani, Torrent, Zydus — Gujarat's contribution to India's research output remains <strong className="text-gray-900">disproportionately low relative to its economic size</strong>. The state produces ~4% of India's peer-reviewed publications while contributing ~8% of national GDP.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            India's overall R&D expenditure stands at just <strong className="text-gray-900">0.65% of GDP</strong> — the lowest among all major economies. Gujarat mirrors this national underinvestment. The state has no equivalent of Bangalore's IISc-IIT-DRDO research triangle or Hyderabad's pharma R&D corridor. Innovation remains concentrated in processing and manufacturing — <strong>improving how to make things, not what to make</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Patent filings from Gujarat account for approximately <strong>6% of India's total</strong> — behind Maharashtra (28%), Karnataka (18%), Tamil Nadu (12%), and Delhi (11%). The absence of deep research ecosystems means Gujarat's industrial future will continue to depend on technologies, formulations, and processes developed elsewhere.
          </p>
        </DataCard>
      </Section>

      <div>
        <div className="flex justify-end mb-4 pr-2 sm:pr-4">
          <GovResponseToggle checked={showGov} onChange={setShowGov} />
        </div>
        <CounterArgument showGov={showGov} messages={[
        { from: 'raju', text: 'Gujarat has IITs, IIMs, multiple private universities. The private sector is filling education gaps better than any government scheme.' },
        { from: 'priya', text: 'Only **1 Gujarat institution** in NIRF top 100 — IIT Gandhinagar, which is centrally funded. Higher education GER is **20.1%**, almost 30% below the national average of 28.4%.', source: 'AISHE 2021-22 / NIRF 2025' },
        { from: 'raju', text: 'Students here are practical — they join family businesses or get industry jobs directly. Not everyone needs a degree.' },
        { from: 'priya', text: '**2.4 lakh** annual dropouts — highest in India. **32,000+** teaching posts vacant. **18,237** students left Gujarat for education abroad last year. They\'re not choosing industry — they\'re fleeing the system.', source: 'UDISE+ / Gujarat University Data' },
        { from: 'raju', text: 'Healthcare is improving — new AIIMS, medical colleges opening.' },
        { from: 'priya', text: 'Meanwhile **97%** of surgeon posts at rural CHCs are vacant. Health spending is **0.8%** of GSDP — one-third the NHP target. You can\'t announce colleges while **2.87 lakh** hospital beds are missing.', source: 'DNA India / PRS Budget Analysis' },
        { from: 'gov', text: `The 'Mission Schools of Excellence' initiative, backed by a $500M World Bank loan, is fundamentally transforming Gujarat's public education infrastructure, upgrading 20,000 schools with smart classrooms and STEM labs.`, source: `Education Department, Govt of Gujarat` }
        ]} />
      </div>

      <SourceList sources={sources} />
    </main>
  )
}
