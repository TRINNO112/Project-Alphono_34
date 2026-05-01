import { motion } from 'framer-motion'
import { Users, AlertTriangle, Gem, Factory, CheckCircle, Cog } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { CounterArgument } from '../components/CounterArgument'
import { Timeline } from '../components/Timeline'
import ScrollSpy from '../components/ScrollSpy'
import StoryMarker from '../components/StoryMarker'
import { useLocalStorageToggle } from '../hooks/useLocalStorageToggle'
import { GovResponseToggle } from '../components/GovResponseToggle'

const spySections = [
  { id: 'morbi-india-s-ceramic-capital-built-on-migrant-hands', label: 'Morbi Ceramics' },
  { id: 'surat-the-diamond-textile-dependency', label: 'Surat Diamond' },
  { id: 'the-exodus-pattern-covid-demonetisation-west-asia', label: 'Exodus Pattern' },
  { id: 'skill-gap-automation-risk-the-coming-squeeze', label: 'Skill Gap' },
  { id: 'wage-structure-working-conditions-the-hidden-economy', label: 'Wages & Conditions' },
  { id: 'source-states-fighting-back-the-new-competition', label: 'Source States' },
]

const sources = [
  { title: "A war in the Gulf, a crisis in Gujarat's Morbi: India's ceramics capital counts the cost", publication: "The Print, 2026", url: "https://theprint.in/economy/a-war-in-the-gulf-a-crisis-in-gujarats-morbi-indias-ceramics-capital-counts-the-cost/2877673/" },
  { title: "DNA Special: How lakhs of tile factory workers transformed Morbi into 'Mini India'", publication: "DNA India", url: "https://www.dnaindia.com/analysis/report-dna-special-how-lakhs-of-tile-factory-workers-transformed-morbi-into-mini-india-3006707" },
  { title: "Over 400 Ceramic Units in Morbi Shut Due to Gas Crisis Amid West Asia War", publication: "DeshGujarat, Mar 2026", url: "https://deshgujarat.com/2026/03/18/over-400-ceramic-units-in-morbi-shut-due-to-gas-crisis-amid-west-asia-war/" },
  { title: "Low production, low demand — diamond hub Surat pins hope on Diwali for some recovery", publication: "The Print, 2024", url: "https://theprint.in/economy/low-production-low-demand-diamond-hub-surat-pins-hope-on-diwali-for-some-recovery/480572/" },
  { title: "Job losses, factory closures pushing Surat's diamond workers to the edge. 71 suicides in 18 months", publication: "The Print, 2024", url: "https://theprint.in/india/job-losses-factory-closures-pushing-surats-diamond-workers-to-the-edge-71-suicides-in-18-months/2339805/" },
  { title: "Paying for a Distant War: Surat's Migrant Textile Workforce Is Leaving", publication: "TexFash, 2026", url: "https://texfash.com/special/paying-for-a-distant-war-surat-s-migrant-textile-workforce-is-leaving-coz-it-has-run-out-of-gas" },
  { title: "LPG crisis, polls, SIR trigger exodus of migrant workers from cities", publication: "The Federal, 2026", url: "https://thefederal.com/category/news/migrant-workers-return-home-exodus-lpg-crisis-elections-sir-236984" },
  { title: "War Brings Covid Nightmare Back to Gujarat's Factory Towns", publication: "Vibes of India, 2026", url: "https://www.vibesofindia.com/war-revives-ghost-of-covid-in-gujarats-manufacturing-hubs/" },
  { title: "Gujarat: No impact of Covid-19 pandemic on Surat's diamond industry", publication: "Business Standard, 2021", url: "https://www.business-standard.com/article/economy-policy/gujarat-no-impact-of-covid-19-pandemic-on-surat-s-diamond-industry-121041600867_1.html" },
  { title: "Migrant worker virus exodus plunges India's factories into crisis", publication: "Jakarta Post / Reuters, 2020", url: "https://www.thejakartapost.com/news/2020/06/07/migrant-worker-virus-exodus-plunges-indias-factories-into-crisis.html" },
  { title: "Fuel Crisis Threatens Morbi's Ceramic Industry as Propane Supply Disruptions Mount", publication: "Telangana Tribune, 2026", url: "https://www.telanganatribune.com/fuel-crisis-threatens-morbis-ceramic-industry-as-propane-supply-disruptions-mount/" },
  { title: "Demonetisation impact: Migrant workers head back home", publication: "Business Standard, 2016", url: "https://www.business-standard.com/article/economy-policy/demonetisation-impact-migrant-workers-head-back-home-116120901022_1.html" },
  { title: "Morbi Ceramic Industry — The Ceramic City Of India", publication: "Sakar Marbo", url: "https://www.sakarmarbo.com/morbi-the-ceramic-tiles-city-of-india/" },
  { title: "Gujarat Skills Development Program", publication: "Asian Development Bank, 2024", url: "https://www.adb.org/projects/58033-001/main" },
  { title: "Surat's Diamond Industry Embraces AI and Automation for Unprecedented Efficiency", publication: "Association of Intelligent Diamond International, 2024", url: "https://aidi.org/surat-diamond-industry-embraces-ai-automation/" },
  { title: "Automation's Impact on India's Workforce: Challenges and Opportunities for Inclusive Growth", publication: "HRKatha, 2025", url: "https://www.hrkatha.com/special/editorial/automation-reshaping-india-workforce/" },
  { title: "India Skills Report 2025", publication: "Wheebox / CII / AICTE, 2025", url: "https://wheebox.com/india-skills-report.htm" },
]

export default function Labor() {
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
            <span>PILLAR 04</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 leading-tight">
            Migrant Labor <span className="italic text-crimson">Ecosystem</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat's multi-billion dollar manufacturing hubs — from Morbi's ceramics to Surat's diamonds and textiles — run on an <strong className="font-semibold text-gray-900">imported human supply chain</strong>. When migrant workers leave, as they did during COVID-19 and the 2026 West Asia gas crisis, entire industries grind to a halt within days.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* Morbi Ceramics */}
        <Section icon={<Factory className="w-8 h-8 text-gray-600" />} title="Morbi: India's Ceramic Capital — Built on Migrant Hands">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="1,200" label="Manufacturing Units" color="crimson" />
            <StatBox value="4 Lakh" label="Direct Workers" color="purple" />
            <StatBox value="70%" label="Outsider Workforce" color="red" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The 'Mini India' Phenomenon">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Morbi produces <strong className="text-gray-900">80-90% of India's ceramic tiles and sanitaryware</strong> with an annual turnover of Rs 50,000 crore and exports to 150+ countries.<Ref n={13} /> The cluster supports nearly 9 lakh livelihoods, with around 4 lakh workers directly employed.<Ref n={1} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                About <strong className="text-gray-900">70% of labourers are outsiders</strong>, primarily from Uttar Pradesh, Bihar, Odisha, and Jharkhand.<Ref n={2} /> Every third or fourth person in Morbi is a migrant — earning it the name "Mini India."<Ref n={2} />
              </p>
            </DataCard>

            <DataCard title="2026 Gas Crisis: 400+ Units Shut" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over 400 ceramic units suspended operations for 3+ weeks due to the West Asia conflict disrupting gas supply.<Ref n={3} /> Nearly <strong className="text-gray-900">60% of Morbi units depend on propane</strong>, which was completely halted.<Ref n={11} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Migrant workers began returning to their home states en masse — a pattern eerily similar to the 2020 COVID exodus. Industry observers warn: once workers leave, it takes months to bring them back.<Ref n={8} />
              </p>
            </DataCard>
          </div>

          <PillarChart
            type="pie"
            data={[
              { name: 'Migrant Workers', value: 70 },
              { name: 'Local Workers', value: 30 },
            ]}
            title="Morbi Ceramic Workforce Composition"
            caption="70% of Morbi's 4 lakh workers are interstate migrants"
            colors={['#D32F2F', '#16A34A']}
          />
        </Section>

        {/* Surat Diamond & Textile */}
        <Section icon={<Gem className="w-8 h-8 text-purple-600" />} title="Surat: The Diamond & Textile Dependency">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Diamond Polishing Industry" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Surat is the <strong className="text-gray-900">world's largest diamond polishing hub</strong>, with approximately 4,000 cutting-polishing units employing <strong>7.5-10 lakh workers</strong>.<Ref n={4} /> While the majority come from within Gujarat (Saurashtra and North Gujarat), about <strong className="text-gray-900">10% are interstate migrants</strong> from UP, MP, and Bihar.<Ref n={9} />
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                During COVID-19, <strong className="text-gray-900">more than two-thirds of workers fled</strong>, and many factories could not reopen for months.<Ref n={10} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                The <strong className="text-gray-900">US tariff escalation of 2025-26</strong> dealt a devastating blow: with reciprocal tariffs making Indian polished diamonds uncompetitive in the American market (which absorbs 30% of Surat's output), an estimated <strong className="text-gray-900">1.5 lakh workers were laid off or furloughed</strong>. Rough diamond imports fell 25% YoY, and multiple large units shifted to 4-day work weeks to avoid mass termination.
              </p>
            </DataCard>

            <DataCard title="Textile Industry: The Cash Economy">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Surat's textile industry employs approximately <strong className="text-gray-900">10 lakh migrant workers</strong>, most of them interstate migrants from UP, Bihar, Jharkhand, Uttarakhand, and Odisha — without local ration cards, permanent addresses, or registered LPG connections.<Ref n={6} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                An estimated <strong className="text-gray-900">90-95% of wages are paid in cash</strong>. These workers remit around <strong>Rs 500 crore annually</strong> to their families in Odisha, Bihar, and UP.<Ref n={6} /> The 2016 demonetisation caused immediate reverse migration as cash wages evaporated overnight.<Ref n={12} />
              </p>
            </DataCard>
          </div>

          <DataCard title="The Human Cost: 71 Suicides in 18 Months" alert={true}>
            <p className="text-gray-700 text-lg leading-relaxed">
              Job losses and factory closures in Surat's diamond sector pushed workers to breaking point — <strong>71 diamond workers died by suicide in just 18 months</strong>, according to The Print's investigation.<Ref n={5} /> The industry downturn was driven by falling global demand for lab-grown diamonds and reduced rough diamond imports.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Named cases from mainstream reporting:
              <StoryMarker storyId="diamond-pravin-sarvaiya" />
              <StoryMarker storyId="diamond-vinu-moradiya" />
              <StoryMarker storyId="diamond-nikunj-tank" />
              <StoryMarker storyId="diamond-jyanti" />
            </p>
          </DataCard>
        </Section>

        {/* COVID Exodus */}
        <Section icon={<AlertTriangle className="w-8 h-8 text-red-500" />} title="The Exodus Pattern: COVID, Demonetisation & West Asia">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Gujarat has experienced three mass migrant worker departures in six years, each crippling its manufacturing base within days:
          </p>

          <Timeline events={[
            {
              year: '2016',
              title: 'Demonetisation Exodus',
              severity: 'warning',
              description: 'With 90-95% of textile wages paid in cash, demonetisation instantly collapsed the informal economy. Migrant workers headed home as there was no cash to pay them.',
            },
            {
              year: '2020',
              title: 'COVID-19 Lockdown',
              severity: 'critical',
              description: 'An estimated 100 million migrant workers nationally fled. In Surat, factories couldn\'t reopen after two-thirds of diamond workers left. Gujarat\'s salt refineries doubled salaries to lure staff back.',
            },
            {
              year: '2024',
              title: 'Diamond Industry Crisis',
              severity: 'warning',
              description: '71 diamond workers died by suicide in 18 months as falling global demand for lab-grown diamonds and reduced rough imports decimated the sector.',
            },
            {
              year: '2026',
              title: 'West Asia Gas Crisis + US Tariffs',
              severity: 'critical',
              description: 'Twin shocks: gas supply disruptions shut 550+ Morbi units while US tariffs devastated Surat diamonds (1.5 lakh jobs lost). An estimated 5-6 lakh migrant workers returned to home states. Surat powerloom sector alone reported Rs 100 crore/day production losses. Bihar, UP, and Odisha now offer competitive local industrial wages, making return migration harder than ever.',
            },
          ]} />

          {/* Chart: Exodus Scale by Crisis Event */}
          <PillarChart
            type="bar"
            data={[
              { name: '2016 DeMon', value: 2 },
              { name: '2020 COVID', value: 10 },
              { name: '2024 Diamond', value: 1.5 },
              { name: '2026 Twin Crisis', value: 5.5 },
            ]}
            title="Estimated Migrant Worker Exodus from Gujarat (Lakhs)"
            caption="Each crisis strips the industrial base of its workforce within days. The 2026 twin crisis (gas + US tariffs) displaced 5-6 lakh workers."
            colors={['#F59E0B', '#DC2626', '#9333EA', '#991B1B']}
            height={280}
          />
        </Section>

        {/* Skill Gap & Automation Risk */}
        <Section icon={<Cog className="w-8 h-8 text-orange-500" />} title="Skill Gap & Automation Risk: The Coming Squeeze">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Gujarat's manufacturing workforce faces a structural paradox: industries depend on low-skill migrant labour that is simultaneously too scarce (during exodus events) and too vulnerable (to automation). A third of Gujarat's youth aged 15-29 are classified as NEET — not in education, employment, or training — while the state's ITI system remains misaligned with the demands of modern industry.<Ref n={14} />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="33.9%" label="Youth NEET Rate (ages 15-29)" color="crimson" />
            <StatBox value="~5%" label="India's Formally Skilled Workforce" color="red" />
            <StatBox value="54.8%" label="Graduate Employability (India Skills Report 2025)" color="purple" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The Skills Vacuum">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Despite having over <strong className="text-gray-900">770 ITIs (274 government, 500+ private)</strong>, Gujarat's vocational training system remains focused on traditional trades and technologies — mismatched with the frontier skills demanded by its rapidly modernising industries.<Ref n={14} /> The ADB's labour market assessment identified seven priority sectors (logistics, automotive, manufacturing, IT, renewables, healthcare, agri-tech) where the skill demand-supply gap is widening.<Ref n={14} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nationally, only <strong className="text-gray-900">4% of Indians aged 15-59 report having received formal vocational training</strong> — compared to 52% in the US, 80% in Japan, and 96% in South Korea.<Ref n={14} /> The India Skills Report 2025 found that only 54.8% of Indian graduates are considered employable, underscoring the gap between education outputs and industry needs.<Ref n={17} />
              </p>
            </DataCard>

            <DataCard title="Automation Arrives at the Factory Floor" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Surat's diamond industry is rapidly adopting <strong className="text-gray-900">AI-driven cutting, robotic polishing systems, and automated quality control</strong> — technologies that operate 24/7 and reduce reliance on the skilled manual workforce that once defined the trade.<Ref n={15} /> Automated systems have compressed diamond processing timelines from months to days, while minimising material waste.<Ref n={15} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                McKinsey research estimates that <strong className="text-gray-900">approximately 30% of work hours globally could be automated by 2030</strong>, with middle-skill, routine-heavy positions most vulnerable.<Ref n={16} /> In India, a SAGE Journals study found that automation risk across all occupations has measurably increased between 2011-12 and 2020-21, with manufacturing roles bearing the highest exposure.<Ref n={16} />
              </p>
            </DataCard>
          </div>

          <DataCard title="The Compounding Trap: Low Skills Meet High Automation">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Gujarat's labour dependency is thus squeezed from both sides. The migrant workers who power Morbi's kilns, Surat's looms, and diamond polishing benches are overwhelmingly low-skill — over <strong className="text-gray-900">70% of India's manufacturing labourers are either illiterate or educated below primary level</strong>.<Ref n={16} /> These workers cannot be easily reskilled for the automated production lines replacing their roles. Meanwhile, Gujarat's NEET rate of 33.9% among youth — rising to <strong className="text-gray-900">56.2% for young women</strong> — means the state is not producing local replacements either.<Ref n={14} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Gujarat Textile Policy 2024 acknowledges this bind, offering free certification courses via the Gujarat Skill Development Mission alongside subsidies for automation adoption — policies that work at cross purposes.<Ref n={16} /> The state has also partnered with the ADB on a Skills Development Program (2025-2030) to bridge the gap, but the scale of the challenge — retraining lakhs of workers while industries automate — raises the question of whether Gujarat's manufacturing model can survive its own modernisation.<Ref n={14} />
            </p>
          </DataCard>
        </Section>

      </div>

      {/* Wage & Working Conditions */}
      <Section icon={<Users className="w-8 h-8 text-amber-600" />} title="Wage Structure & Working Conditions: The Hidden Economy">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <StatBox value="Rs 350-500" label="Daily Wage (Morbi Unskilled)" color="amber" />
          <StatBox value="90-95%" label="Cash Payment (Textile)" color="crimson" />
          <StatBox value="12-16 hrs" label="Average Shift (Peak Season)" color="red" />
        </div>

        {/* Chart: Migrant Wage Comparison */}
        <PillarChart
          type="bar"
          data={[
            { name: 'Kerala', value: 750 },
            { name: 'Maharashtra', value: 550 },
            { name: 'Gujarat', value: 425 },
            { name: 'UP (Local)', value: 350 },
            { name: 'Bihar (Local)', value: 320 },
          ]}
          title="Average Daily Wages for Unskilled Factory Workers (Rs)"
          caption="Gujarat's migrant wages are closer to Bihar's local rates than to Kerala's — as source states industrialize, the wage gap narrows and return migration becomes permanent."
          colors={['#16A34A', '#2563EB', '#D32F2F', '#6B7280', '#6B7280']}
          height={280}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCard title="The Cash Economy: Invisible Workforce" alert={true}>
            <p className="text-gray-600 mb-4 leading-relaxed">
              An estimated <strong className="text-gray-900">90-95% of wages in Surat's textile sector are paid in cash</strong> — keeping the entire workforce invisible to formal social security systems.<Ref n={6} /> Workers have no PF accounts, no ESI coverage, no formal contracts, and no registered addresses.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This cash economy — estimated at <strong>Rs 500 crore in annual remittances</strong> from Surat alone — functions as an invisible GDP transfer from Gujarat to Bihar, UP, and Odisha.<Ref n={6} /> It also means that any shock to the cash system (as demonetisation proved) or the physical workplace (as the 2026 gas crisis showed) instantly triggers mass departure.
            </p>
          </DataCard>

          <DataCard title="Safety & Health: The Unrecorded Toll" alert={true}>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In Morbi, a PTRC study found <strong className="text-gray-900">29% of ceramic workers have direct silica contact</strong>, putting them at risk of silicosis, TB, and lung cancer. 92.65% reported having no ESI health coverage despite the area being under ESI since 1967.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The October 2022 Morbi suspension bridge collapse — which killed <strong className="text-gray-900">135 people</strong>, many of them migrant workers and their families — exposed the broader infrastructure neglect in worker-dependent industrial towns.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The <strong className="text-gray-900">Bharuch-Dahej chemical corridor recorded 90 major industrial accidents and 130 worker deaths</strong> between 2018-2025 — an average of one fatal incident every 3 weeks. Most victims were contractual migrant workers with no life insurance or compensation. The Surat powerloom belt — employing 6 lakh workers — reported <strong>Rs 100 crore/day in production losses</strong> during the March 2026 gas crisis, with workers left stranded without wages for weeks before migrating home.
            </p>
          </DataCard>
        </div>
      </Section>

      {/* Source State Competition */}
      <Section icon={<AlertTriangle className="w-8 h-8 text-orange-500" />} title="Source States Fighting Back: The New Competition">
        <DataCard title="UP, Bihar & Odisha: Building Local Industry">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The traditional source states for Gujarat's migrant labour are increasingly developing their own industrial ecosystems. <strong className="text-gray-900">Uttar Pradesh's GSDP growth at 9.3% (FY25)</strong> is now competitive with Gujarat's. Bihar's industrial corridors — Hajipur, Patna, Muzaffarpur — and Odisha's steel and aluminium belt are creating local employment alternatives.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The implications are structural: as source states industrialise, the <strong>wage premium Gujarat offers shrinks</strong>. A Morbi kiln worker earning Rs 400-500/day in Gujarat can now find Rs 300-400/day work in eastern UP or Jharkhand — without the costs and dislocation of migration. The 2026 exodus accelerated this trend, with workers discovering that <strong>returning home is now economically viable</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The ADB's Gujarat Skills Development Program acknowledges this reality — the state must either automate, upskill, or permanently lose its labour advantage. The demographic window is closing.<Ref n={14} />
          </p>
        </DataCard>
      </Section>

      <div>
        <div className="flex justify-end mb-4 pr-4">
          <GovResponseToggle checked={showGov} onChange={setShowGov} />
        </div>
        <CounterArgument showGov={showGov} messages={[
          { from: 'raju', text: 'Migrants come to Gujarat because it offers the best opportunities. **60 lakh+** workers can\'t be wrong — they vote with their feet.' },
          { from: 'gov', text: 'Gujarat provides a safe, peaceful, and business-friendly environment that naturally attracts talent. The Shramik Basera scheme provides subsidised housing to construction workers to ensure their welfare.', source: 'Gujarat Labour & Employment Dept' },
          { from: 'priya', text: 'They come because home is worse, not because Gujarat is great. Average migrant wage is **Rs 425/day** — Kerala pays **Rs 750**. They\'re not choosing Gujarat, they\'re trapped by proximity.', source: 'Periodic Labour Force Survey 2023-24' },
          { from: 'raju', text: 'If conditions were so bad, why would they keep coming back after COVID?' },
          { from: 'gov', text: 'Post-pandemic, the state government arranged hundreds of Shramik Special trains and ensured rations. The rapid V-shaped recovery proved our commitment to our workforce.', source: 'CMO Gujarat COVID Relief Report' },
          { from: 'priya', text: 'Many didn\'t. Only **10%** returned to Surat after the 2020 exodus. And then 2026 hit — **5-6 lakh** fled again. Three mass exits in six years isn\'t loyalty, it\'s desperation cycling.', source: 'The Federal / ThePrint Mar 2026' },
          { from: 'raju', text: 'The diamond industry is recovering. Surat always bounces back.' },
          { from: 'priya', text: '**1.5 lakh** diamond jobs gone. **71 suicides** in 18 months. Powerloom losses at **Rs 100 Cr/day**. At what point do we stop calling it a bounce-back and start calling it structural fragility?', source: 'ThePrint — Diamond Worker Suicides Report' },
        ]} />
      </div>

      <SourceList sources={sources} />
      
    </main>
  )
}
