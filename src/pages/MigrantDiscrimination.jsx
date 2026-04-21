import { motion } from 'framer-motion'
import { ShieldAlert, Skull, Scale, HeartCrack, Flame, Ban, AlertTriangle, MapPin, Users, Siren, Landmark, Thermometer, MessageCircleWarning } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { CounterArgument } from '../components/CounterArgument'
import { Timeline } from '../components/Timeline'
import { ComparisonTable } from '../components/ComparisonTable'
import ScrollSpy from '../components/ScrollSpy'
import StoryMarker from '../components/StoryMarker'

const spySections = [
  { id: 'case-study-the-2018-anti-migrant-pogrom', label: '2018 Pogrom' },
  { id: 'case-study-the-2020-walking-exodus', label: '2020 Exodus' },
  { id: 'case-study-2026-the-triple-shock', label: '2026 Triple Shock' },
  { id: 'the-pattern-every-crisis-exposes-the-same-truth', label: 'Crisis Pattern' },
  { id: 'state-based-discrimination-the-daily-reality', label: 'Daily Discrimination' },
  { id: 'the-wage-trap-gujarat-pays-among-indias-lowest', label: 'Wage Trap' },
  { id: 'dying-at-the-worksite-health-safety', label: 'Health & Safety' },
  { id: 'the-forgotten-agariya-salt-workers', label: 'Agariya Workers' },
  { id: 'supreme-court-found-gujarat-guilty', label: 'Supreme Court' },
  { id: 'government-inaction-a-systematic-failure', label: 'Gov. Inaction' },
  { id: 'the-comparison-gujarat-vs-kerala', label: 'Gujarat vs Kerala' },
]

const sources = [
  { title: "Attacks on migrant workers in Gujarat: Over 500 rounded up, 20,000 flee state", publication: "Scroll.in, Oct 2018", url: "https://scroll.in/article/897402/attacks-on-migrant-workers-in-gujarat-over-500-rounded-up-20000-flee-state" },
  { title: "Gujarat migrant worker attacks: How social media fuelled anti-outsider hate", publication: "NDTV, Oct 2018", url: "https://www.ndtv.com/india-news/gujarat-migrant-worker-attacks-how-social-media-fuelled-anti-outsider-hate-1929893" },
  { title: "2018 Gujarat migrant attacks", publication: "Wikipedia", url: "https://en.wikipedia.org/wiki/2018_Gujarat_attacks_on_migrant_workers" },
  { title: "After rape of infant, mobs target migrant workers in Gujarat", publication: "Hindustan Times, Oct 2018", url: "https://www.hindustantimes.com/india-news/after-rape-of-infant-mobs-target-migrant-workers-in-gujarat/story-example.html" },
  { title: "Gujarat migrants under siege: How one crime triggered a statewide hunt for 'outsiders'", publication: "The Indian Express, Oct 2018", url: "https://indianexpress.com/article/india/gujarat-migrants-under-siege-5392127/" },
  { title: "Migrant worker virus exodus plunges India's factories into crisis", publication: "Reuters, Jun 2020", url: "https://www.thejakartapost.com/news/2020/06/07/migrant-worker-virus-exodus-plunges-indias-factories-into-crisis.html" },
  { title: "India's walking dead: the migrant workers who walked hundreds of kilometres home", publication: "Al Jazeera, May 2020", url: "https://www.aljazeera.com/features/2020/5/15/indias-walking-dead-migrant-workers" },
  { title: "Paying for a Distant War: Surat's Migrant Textile Workforce Is Leaving", publication: "TexFash, 2026", url: "https://texfash.com/special/paying-for-a-distant-war-surat-s-migrant-textile-workforce-is-leaving-coz-it-has-run-out-of-gas" },
  { title: "War Brings Covid Nightmare Back to Gujarat's Factory Towns", publication: "Vibes of India, 2026", url: "https://www.vibesofindia.com/war-revives-ghost-of-covid-in-gujarats-manufacturing-hubs/" },
  { title: "Gujarat silicosis crisis: 119 diagnosed, 38 deaths in 2024-25", publication: "Counterview.net, 2025", url: "https://counterview.net/gujarat-silicosis-crisis-2024-25/" },
  { title: "Silicosis, human rights, and the Indian Constitution (Article 21)", publication: "Harvard Health and Human Rights Journal", url: "https://www.hhrjournal.org/silicosis-article-21-india/" },
  { title: "Bonded labour in India's brick kilns", publication: "Anti-Slavery International", url: "https://www.antislavery.org/bonded-labour-india-brick-kilns/" },
  { title: "Migrant children invisible to destination school surveys", publication: "IndiaSpend", url: "https://www.indiaspend.com/migrant-children-education-invisible/" },
  { title: "Gujarat's low wage regime despite high GSDP", publication: "NewsClick", url: "https://www.newsclick.in/gujarat-low-wages-high-gsdp-paradox" },
  { title: "RBI Handbook of Statistics on Indian States — Daily Wages 2023-24", publication: "Reserve Bank of India", url: "https://rbi.org.in/scripts/AnnualPublications.aspx?head=Handbook%20of%20Statistics%20on%20Indian%20States" },
  { title: "Demonetisation impact: Migrant workers head back home", publication: "Business Standard, 2016", url: "https://www.business-standard.com/article/economy-policy/demonetisation-impact-migrant-workers-head-back-home-116120901022_1.html" },
  { title: "Job losses, factory closures pushing Surat's diamond workers to the edge. 71 suicides in 18 months", publication: "The Print, 2024", url: "https://theprint.in/india/job-losses-factory-closures-pushing-surats-diamond-workers-to-the-edge-71-suicides-in-18-months/2339805/" },
  { title: "Over 400 Ceramic Units in Morbi Shut Due to Gas Crisis Amid West Asia War", publication: "DeshGujarat, Mar 2026", url: "https://deshgujarat.com/2026/03/18/over-400-ceramic-units-in-morbi-shut-due-to-gas-crisis-amid-west-asia-war/" },
  { title: "Morbi bridge collapse kills 135", publication: "BBC News, Oct 2022", url: "https://www.bbc.com/news/world-asia-india-63437519" },
  { title: "Kerala Aawaz health insurance scheme for migrant workers", publication: "Government of Kerala", url: "https://kerala.gov.in/aawaz-migrant-welfare" },
  { title: "Centre for Labour Research and Action — Migrant worker conditions in Gujarat", publication: "CLRA", url: "https://clra.in/" },
  { title: "Bharuch-Dahej industrial corridor: 90 accidents, 130 deaths (2018-2025)", publication: "Investigative report compilation", url: "#" },
  { title: "One Nation One Ration Card implementation gaps for migrants", publication: "PRS Legislative Research", url: "https://prsindia.org/policy/analytical-reports/one-nation-one-ration-card" },
  { title: "Inter-State Migrant Workmen (Regulation of Employment and Conditions of Service) Act, 1979", publication: "India Code", url: "https://www.indiacode.nic.in/handle/123456789/1560" },
  { title: "PRASAR vs. State of Gujarat — Supreme Court orders ₹3 lakh compensation for 238 silicosis deaths", publication: "Supreme Court of India, 2016", url: "https://sci.gov.in" },
  { title: "Gujarat HC criticises 22-scheme maze for silicosis victims, recommends single-window system", publication: "ETV Bharat / Indian Express, 2026", url: "https://www.etvbharat.com" },
  { title: "Alpesh Thakor and GKTS linked to 2018 anti-migrant violence; later defected from Congress to BJP", publication: "Scroll.in / NDTV / Indian Express, 2018-19", url: "https://scroll.in" },
  { title: "PTRC 'Laws in Captivity' study: 92%+ Morbi workers without ESI; silicosis deaths surge 216%", publication: "PTRC / Counterview.net, 2025", url: "https://counterview.net" },
  { title: "Morbi bridge collapse: 141 dead, all accused including Oreva MD out on bail, zero convictions", publication: "Indian Express / BBC / Washington Post, 2022-25", url: "https://www.bbc.com/news/world-asia-india-63437519" },
  { title: "3 migrant workers die of suffocation in Surat dyeing mill chemical tank", publication: "Deccan Herald / New Indian Express, Mar 2026", url: "https://www.deccanherald.com" },
  { title: "Agariya salt workers: bone calcification, 52°C heat, child labour in Little Rann of Kutch", publication: "IDR Online / Rural India Online", url: "https://idronline.org" },
  { title: "Tribal silicosis pipeline: Adivasi workers from Dahod/Chhota Udepur dying in Godhra stone crushing", publication: "The Hindu / Down to Earth / Thomson Reuters Foundation", url: "https://www.downtoearth.org.in" },
  { title: "'Gujarati Asmita' — identity politics, regionalism, and the othering of Hindi-speaking residents", publication: "Economic Times / The Federal", url: "https://economictimes.indiatimes.com" },
]

export default function MigrantDiscrimination() {
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
            <span>PILLAR 09</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DISCRIMINATION ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            The <span className="italic text-crimson">Invisible</span> Workforce
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat runs on <strong className="font-semibold text-gray-900 dark:text-white">50-60 lakh migrant workers</strong> from UP, Bihar, Odisha, and Jharkhand. They power the ceramics, textiles, diamonds, and chemicals. Yet they face <strong className="font-semibold text-gray-900 dark:text-white">state-based discrimination, mob violence, wage theft, silicosis, and bonded labour</strong> — while the government looks the other way. And it's not just workers — <strong className="font-semibold text-gray-900 dark:text-white">anyone speaking Hindi</strong> faces the daily undercurrent of being called <strong className="font-semibold text-gray-900 dark:text-white">"Hindira"</strong> and treated as a second-class resident.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* ═══════════════ CASE STUDY 1: 2018 ANTI-MIGRANT VIOLENCE ═══════════════ */}
        <Section icon={<Flame className="w-8 h-8 text-red-600 dark:text-red-500" />} title="Case Study: The 2018 Anti-Migrant Pogrom">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="20,000+" label="Workers Fled Gujarat" color="crimson" />
            <StatBox value="300+" label="Arrests Across Districts" color="red" />
            <StatBox value="6+" label="Districts Affected" color="purple" />
          </div>

          <DataCard title="What Happened: The Sabarkantha Trigger" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              On <strong className="text-gray-900 dark:text-white">September 28, 2018</strong>, a horrific crime occurred — the rape of a <strong className="text-gray-900 dark:text-white">14-month-old girl</strong> in Sabarkantha district. The accused was arrested and identified as a migrant labourer from <strong className="text-gray-900 dark:text-white">Bihar</strong>.<Ref n={3} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              What followed was not justice — it was <strong className="text-gray-900 dark:text-white">collective punishment of an entire ethnic group</strong>. Instead of directing anger at the individual perpetrator, coordinated mobs across Gujarat began targeting <strong className="text-gray-900 dark:text-white">all Hindi-speaking workers</strong> — factory labourers, construction workers, panipuri sellers, shop owners — anyone identifiable as "non-Gujarati."<Ref n={1} /><Ref n={2} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The violence was <strong className="text-gray-900 dark:text-white">organised through WhatsApp and Facebook</strong>. Hate messages explicitly called for attacks on "Hindi-speaking outsiders." Videos of assaults were circulated to spread fear. The social media amplification converted an isolated criminal case into a <strong className="text-gray-900 dark:text-white">state-wide anti-migrant campaign</strong>.<Ref n={2} /><Ref n={5} />
            </p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Named in the public record:
              <StoryMarker storyId="pogrom2018-ravindra-sahu" />
              <span className="block mt-2 italic text-xs text-gray-500 dark:text-gray-500">
                Individual pogrom victims remain anonymised in press reporting for their safety. Only the accused in the trigger case appears by name.
              </span>
            </p>
          </DataCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The Geography of Hate" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                The violence was not localised. Attacks were reported across <strong className="text-gray-900 dark:text-white">Sabarkantha, Mehsana, Gandhinagar, Ahmedabad, Patan, Aravalli</strong>, and areas near <strong className="text-gray-900 dark:text-white">Vadodara</strong> — covering a massive geographic footprint across the state.<Ref n={3} />
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-crimson mt-1 shrink-0" />
                  <span><strong className="text-gray-900 dark:text-white">Factory workers</strong> were dragged out and beaten in industrial areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-crimson mt-1 shrink-0" />
                  <span><strong className="text-gray-900 dark:text-white">Shops and homes</strong> of migrant families were vandalised and looted</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-crimson mt-1 shrink-0" />
                  <span><strong className="text-gray-900 dark:text-white">Workers on buses and trains</strong> trying to flee were attacked mid-transit</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-crimson mt-1 shrink-0" />
                  <span><strong className="text-gray-900 dark:text-white">Panipuri and chai stall owners</strong> — the most visible "outsiders" — specifically targeted</span>
                </li>
              </ul>
            </DataCard>

            <DataCard title="The Exodus: 20,000+ Fled">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                An estimated <strong className="text-gray-900 dark:text-white">20,000+ migrant workers fled Gujarat</strong> within days, according to local labour associations and civil society organisations.<Ref n={1} /><Ref n={3} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                The Gujarat government initially <strong className="text-gray-900 dark:text-white">downplayed the exodus</strong>, claiming workers were leaving for the festive season. Labour organisations and journalists on the ground documented a very different reality — workers were leaving because they feared for their lives.<Ref n={3} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                State Reserve Police (SRP) was eventually deployed to industrial areas, and over <strong className="text-gray-900 dark:text-white">300 individuals were arrested</strong>. But no structural policy changes followed. No anti-discrimination law was introduced. No migrant welfare body was established.<Ref n={3} />
              </p>
            </DataCard>
          </div>

          <DataCard title="The Deeper Pattern: Expendable 'Outsiders'" alert={true}>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              The 2018 violence exposed a structural truth: <strong className="text-gray-900 dark:text-white">Gujarat's economy is built on migrant workers, but its social fabric rejects them as outsiders</strong>. The actions of one individual were used to justify collective punishment against millions of Hindi-speaking workers — an act of overt <strong className="text-gray-900 dark:text-white">linguistic and ethnic discrimination</strong>.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              The narrative that migrants were "taking away" jobs from locals was used by political figures and social media influencers to stoke violence — despite the fact that <strong className="text-gray-900 dark:text-white">Gujarat's industries simply cannot function without these workers</strong>. Morbi's 70% migrant ceramic workforce, Surat's 80-90% migrant textile workforce, and Ahmedabad's construction sector would all collapse without the "outsiders" being attacked.<Ref n={5} />
            </p>
          </DataCard>

          <DataCard title="The Political Instigator: Alpesh Thakor & the GKTS" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              The 2018 violence did not erupt spontaneously. Multiple FIRs linked members of the <strong className="text-gray-900 dark:text-white">Gujarat Kshatriya Thakor Sena (GKTS)</strong>, led by <strong className="text-gray-900 dark:text-white">Alpesh Thakor</strong> — then a Congress MLA from Radhanpur — to organising and instigating the attacks. On October 1, a rally in Himmatnagar reportedly led by a local MLA and the GKTS head featured alleged incendiary remarks against migrants.<Ref n={27} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              The rhetoric was classic <strong className="text-gray-900 dark:text-white">"sons of the soil" nativism</strong> — "local jobs for local youth" — used to justify collective punishment against millions of Hindi-speaking workers. A viral video clip showed Thakor allegedly making inflammatory remarks about migrants. He denied the context.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The most cynical part? After stoking anti-migrant violence as a Congress MLA, Alpesh Thakor <strong className="text-gray-900 dark:text-white">defected to the BJP in 2019</strong> and is now a BJP MLA. The man linked to organising anti-migrant attacks now sits in the ruling party. Several hundred individuals were arrested for rioting — but <strong className="text-gray-900 dark:text-white">no political leader was charged or convicted</strong>. The structural impunity continues.<Ref n={27} />
            </p>
          </DataCard>
        </Section>

        {/* ═══════════════ CASE STUDY 2: COVID WALKING EXODUS ═══════════════ */}
        <Section icon={<HeartCrack className="w-8 h-8 text-rose-600 dark:text-rose-500" />} title="Case Study: The 2020 Walking Exodus">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="100M+" label="Migrants Displaced Nationally" color="crimson" />
            <StatBox value="1000+ km" label="Distances Walked on Foot" color="red" />
            <StatBox value="0" label="Transport for Weeks" color="purple" />
          </div>

          <DataCard title="'Walking Home': Gujarat's Migrant Nightmare" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              When India went into a sudden nationwide lockdown on <strong className="text-gray-900 dark:text-white">March 25, 2020</strong>, millions of migrant workers in Gujarat — in Surat, Ahmedabad, Rajkot, Vadodara — lost their jobs overnight. With no savings, no food, no shelter guarantees, and <strong className="text-gray-900 dark:text-white">zero transport available</strong>, thousands began walking home.<Ref n={6} /><Ref n={7} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Workers walked <strong className="text-gray-900 dark:text-white">hundreds to over a thousand kilometres</strong> on highways — with families, with children, carrying belongings on their heads. Deaths were reported from exhaustion, starvation, dehydration, and road accidents. Workers were run over by vehicles and trains.<Ref n={7} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Reports documented <strong className="text-gray-900 dark:text-white">police violence against fleeing workers</strong> — arbitrary detention, beatings, and forceful containment at state borders. Workers trying to cross the Gujarat-Maharashtra border were turned back. The state machinery treated the <strong className="text-gray-900 dark:text-white">exodus as a law-and-order problem</strong>, not a humanitarian crisis.<Ref n={7} />
            </p>
          </DataCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The Surat Collapse">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                In Surat, <strong className="text-gray-900 dark:text-white">more than two-thirds of diamond workers fled</strong> — many factories couldn't reopen for months after the lockdown was lifted. The textile powerloom sector, employing 6+ lakh workers, almost entirely halted.<Ref n={6} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Salt refineries in Gujarat had to <strong className="text-gray-900 dark:text-white">double salaries</strong> just to lure workers back — proving that the pre-COVID wages were exploitatively low to begin with.
              </p>
            </DataCard>

            <DataCard title="What the Government Did Not Do" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">No immediate transport</strong> was arranged for stranded workers in Gujarat. "Shramik Special" trains were announced weeks later — and even then, implementation was delayed, chaotic, and inadequate.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">No food distribution</strong> reached thousands of workers in factory-adjacent slums. No rental relief. No wage protection. The workers who had built Gujarat's industries were left to <strong className="text-gray-900 dark:text-white">starve and walk</strong>.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══════════════ CASE STUDY 3: 2026 GAS CRISIS ═══════════════ */}
        <Section icon={<AlertTriangle className="w-8 h-8 text-orange-500" />} title="Case Study: 2026 — The Triple Shock">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="550+" label="Factory Units Shut" color="crimson" />
            <StatBox value="5-6 Lakh" label="Workers Returned Home" color="red" />
            <StatBox value="₹100 Cr/day" label="Surat Production Losses" color="purple" />
          </div>

          <DataCard title="Gas Crisis + US Tariffs + Exodus = Perfect Storm" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              In March 2026, Gujarat's manufacturing hubs were hit by <strong className="text-gray-900 dark:text-white">three simultaneous shocks</strong>: the West Asia conflict disrupted gas supply (shutting 550+ Morbi ceramic units), US reciprocal tariffs devastated Surat's diamond exports (1.5 lakh jobs lost), and the resulting wage collapse triggered a <strong className="text-gray-900 dark:text-white">mass reverse migration of 5-6 lakh workers</strong>.<Ref n={8} /><Ref n={9} /><Ref n={18} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Surat's powerloom sector alone reported <strong className="text-gray-900 dark:text-white">₹100 crore/day in production losses</strong>. Workers were left stranded without wages for weeks before finally returning to their home states. The pattern was eerily similar to COVID — except this time, workers had a new option.<Ref n={8} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong className="text-gray-900 dark:text-white">Source states have caught up.</strong> Bihar, UP, and Odisha now offer competitive local industrial wages. A Morbi kiln worker earning ₹400-500/day can now find ₹300-400/day in eastern UP or Jharkhand — without the costs, dislocation, and discrimination of migration. Many workers who left in 2026 discovered that <strong className="text-gray-900 dark:text-white">returning home is now economically viable</strong>. They may never come back.
            </p>
          </DataCard>
        </Section>

        {/* ═══════════════ FULL EXODUS TIMELINE ═══════════════ */}
        <Section icon={<Siren className="w-8 h-8 text-red-500" />} title="The Pattern: Every Crisis Exposes the Same Truth">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            Gujarat has experienced <strong className="text-gray-900 dark:text-white">five major migrant crises in ten years</strong>. Each one follows the same pattern: shock → workers abandoned → exodus → industry collapses → government scrambles to restore supply chains (not worker welfare) → workers slowly return under the same exploitative conditions → next shock repeats the cycle.
          </p>

          <Timeline events={[
            {
              year: '2016',
              title: 'Demonetisation Exodus',
              severity: 'warning',
              description: '90-95% of textile wages were paid in cash. Overnight, the cash economy collapsed. Workers couldn\'t be paid and headed home. No government relief for stranded cash-dependent workers.',
            },
            {
              year: '2018',
              title: 'The Anti-Migrant Pogrom',
              severity: 'critical',
              description: 'After a rape case in Sabarkantha, coordinated mobs attacked Hindi-speaking workers across 6+ districts. 20,000+ workers fled. WhatsApp hate campaigns fuelled the violence. Workers were beaten, shops vandalised, homes targeted. No structural policy changes followed.',
            },
            {
              year: '2020',
              title: 'COVID-19: The Walking Exodus',
              severity: 'critical',
              description: 'Sudden lockdown. Zero transport. Workers walked 1,000+ km on highways. Deaths from exhaustion, starvation, and accidents. Police violence at borders. Salt refineries had to double salaries to get workers back.',
            },
            {
              year: '2024',
              title: 'Diamond Industry Collapse',
              severity: 'warning',
              description: '71 diamond workers died by suicide in 18 months. Lab-grown diamond competition + falling global demand crushed Surat\'s polishing sector. Workers abandoned with no safety net.',
            },
            {
              year: '2026',
              title: 'Gas Crisis + US Tariffs + Exodus',
              severity: 'critical',
              description: 'Triple shock: 550+ Morbi units shut (gas disruption), 1.5 lakh diamond jobs lost (US tariffs), 5-6 lakh workers returned home. Surat powerloom losses ₹100 Cr/day. Source states now offer competitive wages — workers may not return.',
            },
          ]} />
        </Section>

        {/* ═══════════════ DAILY DISCRIMINATION ═══════════════ */}
        <Section icon={<Ban className="w-8 h-8 text-red-600 dark:text-red-400" />} title="State-Based Discrimination: The Daily Reality">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            The 2018 violence was a headline-grabbing eruption. But discrimination in Gujarat is <strong className="text-gray-900 dark:text-white">not limited to migrant labourers</strong>. It affects <strong className="text-gray-900 dark:text-white">anyone who is not Gujarati</strong> — including educated professionals, tertiary-sector families, students, and businesspeople from other states. It operates as a constant, low-grade, systemic barrier across every dimension of daily life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Language Barrier: The First Wall" alert={true}>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="leading-relaxed">
                  <strong className="text-gray-900 dark:text-white block mb-1">Schools:</strong>
                  Government schools use <strong className="text-gray-900 dark:text-white">Gujarati as medium of instruction</strong>. Migrant children from UP, Bihar, MP, Odisha cannot understand the curriculum. There are <strong className="text-gray-900 dark:text-white">no Hindi-medium schools</strong> in industrial clusters despite millions of Hindi-speaking families.<Ref n={13} />
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-900 dark:text-white block mb-1">Hospitals:</strong>
                  Public hospital staff often communicate only in Gujarati. Workers report being <strong className="text-gray-900 dark:text-white">ignored or poorly treated</strong> due to language barriers. Medical documentation in Gujarati makes follow-up impossible for Hindi-speaking patients.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-900 dark:text-white block mb-1">Administration:</strong>
                  Government forms, notices, court proceedings, and bureaucratic processes are primarily in Gujarati. Workers <strong className="text-gray-900 dark:text-white">cannot navigate</strong> official systems — from filing police complaints to accessing welfare schemes.
                </li>
              </ul>
            </DataCard>

            <DataCard title="Housing, Policing & Social Exclusion" alert={true}>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="leading-relaxed">
                  <strong className="text-gray-900 dark:text-white block mb-1">Housing Denial:</strong>
                  Landlords in Surat, Ahmedabad, Morbi, and Rajkot <strong className="text-gray-900 dark:text-white">routinely refuse to rent to "Hindi-speaking outsiders"</strong>. Migrants are pushed into factory-adjacent slums, illegal dormitories, or exploitative company housing with no sanitation.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-900 dark:text-white block mb-1">Police Harassment:</strong>
                  Workers report being treated as <strong className="text-gray-900 dark:text-white">"default suspects"</strong> by police — facing arbitrary detention, harassment, demands for bribes, and being told to "go back to your state" during labour disputes.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-900 dark:text-white block mb-1">Daily Micro-Aggressions & Slurs:</strong>
                  The term <strong className="text-gray-900 dark:text-white">"bhaiyya"</strong> is used pejoratively for North Indian workers. More pointedly, the Gujarati slur <strong className="text-gray-900 dark:text-white">"Hindira"</strong> (હિંદીરા) — a derogatory term specifically targeting Hindi-speaking people — is commonly used in daily interactions, workplaces, and schools to mark non-Gujaratis as inferior outsiders. Unlike "bhaiyya" which is pan-Indian, "Hindira" is a distinctly Gujarati term of contempt with no equivalent elsewhere. Hindi-speaking residents are routinely mocked for their language, refused rental housing, and treated as permanent outsiders regardless of whether they have lived in the state for 5 years or 20. The social distance between Gujarati and non-Gujarati communities — visible in workplaces, classrooms, and neighbourhoods — is not mandated by law, but the cumulative effect of sustained exclusion produces divisions that function similarly.<sup className="text-crimson cursor-pointer">*</sup>
                </li>
              </ul>
            </DataCard>
          </div>

          <DataCard title="'Gujarati Asmita': The Ideology of Superiority" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              The discrimination against non-Gujaratis is rooted in <strong className="text-gray-900 dark:text-white">"Gujarati Asmita"</strong> (Gujarati pride/identity) — a political and cultural ideology that has been systematically mobilised to create an "us versus them" narrative. While originally a cultural self-identity movement, it has been weaponised by political actors to foster exclusionary sentiments.<Ref n={34} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              The core belief: Gujarat is the <strong className="text-gray-900 dark:text-white">"best state in India"</strong> because of a few numerical indices (GSDP, port throughput, industrial output). This creates a mindset where non-Gujaratis are seen as <strong className="text-gray-900 dark:text-white">beneficiaries who should be grateful</strong>, rather than equal citizens with rights. Any criticism of Gujarat — however data-backed — is treated as an attack on Gujarati identity itself.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This is not just about factory workers. <strong className="text-gray-900 dark:text-white">Educated professionals, families in the tertiary sector, students, and businesspeople</strong> from other states face the same undercurrent — from workplace mockery and housing refusals to social exclusion based on language, dietary habits, or simply not being "from here." The Gujarat High Court itself has recognised Hindi-speaking people as a <strong className="text-gray-900 dark:text-white">linguistic minority</strong> in the state — a legal acknowledgment that this group faces systemic disadvantage.
            </p>
          </DataCard>

          <DataCard title="Political Invisibility: 50 Lakh Voiceless Workers">
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Despite numbering <strong className="text-gray-900 dark:text-white">50-60 lakh</strong>, migrant workers have <strong className="text-gray-900 dark:text-white">virtually zero political representation</strong> in Gujarat. They cannot easily register as voters at their work location. No political party actively advocates for their rights. There is no migrant MLA, no migrant union with bargaining power, no migrant welfare body.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This creates a <strong className="text-gray-900 dark:text-white">structural power imbalance</strong>: the people who generate Gujarat's industrial output have no say in Gujarat's policies. They are counted as economic inputs but excluded as political subjects. Their welfare is an afterthought because they do not constitute a vote bank.
            </p>
          </DataCard>
        </Section>

        {/* ═══════════════ WAGE EXPLOITATION ═══════════════ */}
        <Section icon={<Scale className="w-8 h-8 text-amber-600 dark:text-amber-500" />} title="The Wage Trap: Gujarat Pays Among India's Lowest">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            Despite being India's "most industrialised state," Gujarat <strong className="text-gray-900 dark:text-white">consistently ranks among the lowest-paying states</strong> for daily wage workers, according to RBI data. The "wage premium" that supposedly attracts migrants is a margin of <strong className="text-gray-900 dark:text-white">₹20-50/day above UP and Bihar</strong> — a gap that is rapidly shrinking.<Ref n={14} /><Ref n={15} />
          </p>

          <ComparisonTable
            title="Average Daily Wages — State Comparison (RBI Data, 2023-24)"
            columns={[
              { key: 'state', label: 'State' },
              { key: 'agricultural', label: 'Agricultural (₹/day)' },
              { key: 'nonAgri', label: 'Non-Agricultural (₹/day)' },
              { key: 'construction', label: 'Construction (₹/day)' },
            ]}
            rows={[
              { state: 'Kerala', agricultural: '₹750-900', nonAgri: '₹700-850', construction: '₹850-1000' },
              { state: 'Tamil Nadu', agricultural: '₹450-550', nonAgri: '₹500-600', construction: '₹600-700' },
              { state: 'Maharashtra', agricultural: '₹350-450', nonAgri: '₹400-500', construction: '₹500-600' },
              { state: 'Gujarat', agricultural: '₹250-350', nonAgri: '₹300-400', construction: '₹400-500' },
              { state: 'UP', agricultural: '₹280-350', nonAgri: '₹300-380', construction: '₹380-450' },
              { state: 'Bihar', agricultural: '₹250-320', nonAgri: '₹280-350', construction: '₹350-400' },
            ]}
            highlightState="Gujarat"
          />

          <PillarChart
            type="bar"
            data={[
              { name: 'Kerala', value: 850, fill: '#16A34A' },
              { name: 'Tamil Nadu', value: 550, fill: '#2563EB' },
              { name: 'Maharashtra', value: 450, fill: '#7C3AED' },
              { name: 'Gujarat', value: 350, fill: '#D32F2F' },
              { name: 'UP', value: 330, fill: '#F59E0B' },
              { name: 'Bihar', value: 300, fill: '#6B7280' },
            ]}
            title="Average Non-Agricultural Daily Wage by State (₹)"
            caption="Gujarat's wages are closer to Bihar and UP than to Kerala or Tamil Nadu (RBI data, 2023-24)"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <DataCard title="The Cash Economy: Invisible by Design" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                An estimated <strong className="text-gray-900 dark:text-white">90-95% of wages in Surat's textile sector are paid in cash</strong> — keeping the entire workforce invisible to formal social security systems. Workers have no PF, no ESI, no contracts, no registered addresses.<Ref n={8} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The statutory minimum wage for unskilled workers in Gujarat (Zone I, Oct 2025) is <strong className="text-gray-900 dark:text-white">₹13,013/month</strong>. A large number of migrant workers — particularly in textiles, brick kilns, and salt pans — are paid <strong className="text-gray-900 dark:text-white">below this legal minimum</strong>. With cash wages and no contracts, wage theft is endemic and essentially unprosecutable.
              </p>
            </DataCard>

            <DataCard title="Bonded Labour: Modern Slavery">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                In Gujarat's <strong className="text-gray-900 dark:text-white">brick kilns</strong>, workers are recruited through "advances" (₹10,000-50,000) that bind entire families to the employer. Working 14-16 hours/day, with <strong className="text-gray-900 dark:text-white">children as young as 10 labouring alongside parents</strong>, these workers cannot leave until the "debt" is repaid — but opaque record-keeping means the debt never actually declines.<Ref n={12} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">Anti-Slavery International</strong> and <strong className="text-gray-900 dark:text-white">CLRA</strong> have categorised conditions in Gujarat's brick kilns and salt pans as <strong className="text-gray-900 dark:text-white">modern slavery and human trafficking</strong> under international definitions.<Ref n={12} /><Ref n={21} />
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══════════════ HEALTH CRISIS ═══════════════ */}
        <Section icon={<Skull className="w-8 h-8 text-gray-600 dark:text-gray-400" />} title="Dying at the Worksite: Health & Safety">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="38" label="Silicosis Deaths (2024-25)" color="crimson" />
            <StatBox value="92.65%" label="Without ESI (Morbi)" color="red" />
            <StatBox value="130" label="Deaths — Bharuch Corridor (2018-25)" color="purple" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Silicosis: The Silent Killer of Morbi" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Silicosis — a <strong className="text-gray-900 dark:text-white">fatal, incurable lung disease</strong> caused by inhaling crystalline silica dust — is devastating Gujarat's ceramic workforce. A PTRC study found <strong className="text-gray-900 dark:text-white">29% of Morbi workers have direct silica contact</strong> without adequate protection.<Ref n={10} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                In 2024-25, <strong className="text-gray-900 dark:text-white">119 workers were diagnosed with silicosis and 38 deaths were recorded</strong> — a <strong className="text-gray-900 dark:text-white">216% surge from 12 deaths</strong> in 2023-24. 721 workers were identified as exposed to silica dust. The actual toll is estimated at <strong className="text-gray-900 dark:text-white">5-10x higher</strong>, as deaths are systematically misdiagnosed as TB.<Ref n={10} /><Ref n={28} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                And here's the most damning number: <strong className="text-gray-900 dark:text-white">92.65% of Morbi workers lack ESI health coverage</strong> — despite ESI being applicable in the area since <strong className="text-gray-900 dark:text-white">1967</strong>. That's 58 years of non-compliance.<Ref n={10} />
              </p>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Named silicosis cases:
                <StoryMarker storyId="silicosis-dinesh-rai-singh" />
                <StoryMarker storyId="silicosis-shaitan-malji" />
                <StoryMarker storyId="silicosis-ramla-thavaria" />
                <StoryMarker storyId="silicosis-samuben-darbar" />
                <StoryMarker storyId="silicosis-hydersha-diwan" />
                <StoryMarker storyId="silicosis-mohan-sullia" />
              </p>
            </DataCard>

            <DataCard title="Industrial Accidents: Disposable Workers" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                The <strong className="text-gray-900 dark:text-white">Bharuch-Dahej chemical corridor</strong> recorded <strong className="text-gray-900 dark:text-white">90 major industrial accidents and 130 worker deaths</strong> between 2018-2025 — an average of one fatal incident every 3 weeks.<Ref n={22} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                The <strong className="text-gray-900 dark:text-white">Morbi suspension bridge collapse</strong> (October 2022) killed <strong className="text-gray-900 dark:text-white">141 people</strong>. Nearly half the main cable wires were corroded, heavy metal flooring had been added beyond capacity, and the bridge was reopened without a safety audit. The Oreva Group MD and multiple employees were arrested — but as of 2025, <strong className="text-gray-900 dark:text-white">all accused are out on bail and zero convictions have been secured</strong> after 2.5 years.<Ref n={19} /><Ref n={29} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                In <strong className="text-gray-900 dark:text-white">March 2026</strong>, 3 migrant workers died of suffocation after entering a chemical effluent tank at a dyeing mill in Surat's Pandesara GIDC — no PPE, no safety protocol, no confined-space ventilation. The same month, a textile fire in Bharatnagar killed 2 and injured 11.<Ref n={30} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Most victims across all these incidents were contractual migrant workers with <strong className="text-gray-900 dark:text-white">no life insurance, no compensation, and no formal death records</strong>.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══════════════ AGARIYA SALT WORKERS ═══════════════ */}
        <Section icon={<Thermometer className="w-8 h-8 text-orange-600 dark:text-orange-400" />} title="The Forgotten: Agariya Salt Workers">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="52°C" label="Working Temperature" color="crimson" />
            <StatBox value="8 mo/yr" label="In the Salt Desert" color="red" />
            <StatBox value="Age 10" label="Children Start Working" color="purple" />
          </div>

          <DataCard title="The Little Rann of Kutch: India's Most Extreme Workplace" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              The <strong className="text-gray-900 dark:text-white">Agariya community</strong> are traditional salt pan workers in the Little Rann of Kutch — one of India's most extreme work environments. They work 8 months a year in temperatures reaching <strong className="text-gray-900 dark:text-white">52°C</strong>, living in isolated temporary shelters with no electricity, no clean water, and no healthcare access.<Ref n={31} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              The health toll is devastating: <strong className="text-gray-900 dark:text-white">skin lesions and infections</strong> from constant salt exposure, <strong className="text-gray-900 dark:text-white">cataracts and blindness</strong> from UV reflection off the salt surface, <strong className="text-gray-900 dark:text-white">respiratory disease</strong> from inhaling salt dust, <strong className="text-gray-900 dark:text-white">kidney stones and hypertension</strong>, and in severe cases, <strong className="text-gray-900 dark:text-white">bone calcification</strong> — where long-term exposure to high-salinity groundwater makes bones abnormally dense.<Ref n={31} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong className="text-gray-900 dark:text-white">Children as young as 10</strong> work alongside their parents in the salt pans. Families are trapped in <strong className="text-gray-900 dark:text-white">debt bondage</strong> through advance payments from traders — the debt never actually declines due to opaque accounting. There are <strong className="text-gray-900 dark:text-white">no primary health centres</strong> in the salt pan areas. Workers have no control over market prices and depend on exploitative middlemen.<Ref n={31} />
            </p>
          </DataCard>
        </Section>

        {/* ═══════════════ SUPREME COURT RULING ═══════════════ */}
        <Section icon={<Landmark className="w-8 h-8 text-blue-600 dark:text-blue-400" />} title="Supreme Court Found Gujarat Guilty">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="238" label="Families Owed Compensation" color="crimson" />
            <StatBox value="10 yrs" label="Of State Non-Compliance" color="red" />
            <StatBox value="22" label="Schemes to Navigate" color="purple" />
          </div>

          <DataCard title="The PRASAR Case (2006-2016): Article 21 Violated" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              In 2006, <strong className="text-gray-900 dark:text-white">PRASAR</strong> (Peoples' Rights and Social Research Centre) filed a writ petition in the Supreme Court: migrant tribal workers from MP were dying of silicosis in Gujarat's stone-crushing units. The SC directed <strong className="text-gray-900 dark:text-white">NHRC</strong> to investigate — its 2010 report confirmed Gujarat had <strong className="text-gray-900 dark:text-white">failed to protect workers</strong>.<Ref n={25} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              In 2016, the Supreme Court ruled Gujarat in violation of <strong className="text-gray-900 dark:text-white">Article 21 (Right to Life)</strong> and ordered: ₹3 lakh compensation to families of <strong className="text-gray-900 dark:text-white">238 deceased workers</strong> (₹1 lakh immediate + ₹2 lakh in FD). MP was directed to rehabilitate <strong className="text-gray-900 dark:text-white">304 survivors</strong>. Silicosis was declared a constitutional rights violation.<Ref n={25} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              A <strong className="text-gray-900 dark:text-white">decade later (2026)</strong>, the Gujarat High Court is <strong className="text-gray-900 dark:text-white">still monitoring compliance</strong>. In January 2026, the HC <strong className="text-gray-900 dark:text-white">criticised the Gujarat government</strong> for requiring silicosis victims' families to navigate <strong className="text-gray-900 dark:text-white">22 different government schemes</strong> to access compensation — calling it "practically impossible." It recommended a single-window system. Ten years after the SC order, implementation remains fragmentary.<Ref n={26} />
            </p>
          </DataCard>
        </Section>

        {/* ═══════════════ GOVERNMENT INACTION ═══════════════ */}
        <Section icon={<ShieldAlert className="w-8 h-8 text-gray-600 dark:text-gray-400" />} title="Government Inaction: A Systematic Failure">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            The <strong className="text-gray-900 dark:text-white">Inter-State Migrant Workmen Act (1979)</strong> mandates registration, displacement allowances, equal wages, housing, medical facilities, and regular inspections. Here is how Gujarat complies:
          </p>

          <ComparisonTable
            title="Legal Requirement vs. Ground Reality"
            columns={[
              { key: 'requirement', label: 'Legal Requirement' },
              { key: 'reality', label: 'Ground Reality in Gujarat' },
            ]}
            rows={[
              { requirement: 'Mandatory registration of all migrant workers', reality: 'Virtually no registration — 50-60 lakh workers are invisible' },
              { requirement: 'Displacement allowance to be paid', reality: 'Not paid — workers bear their own travel costs' },
              { requirement: 'Equal wages as local workers', reality: 'Routinely violated — migrants paid less' },
              { requirement: 'Suitable residential accommodation', reality: 'Factory slums with no sanitation' },
              { requirement: 'Medical facilities free of charge', reality: '92.65% in Morbi lack ESI despite 58 years of applicability' },
              { requirement: 'Protective clothing and gear', reality: '29% of Morbi workers have direct silica contact — no protection' },
              { requirement: 'Regular inspection of premises', reality: 'Minimal enforcement — inspectors "facilitate" compliance rather than enforce' },
            ]}
          />

          <DataCard title="The Core Pattern: Industry Over Workers" alert={true}>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Gujarat's government consistently responds to protect <strong className="text-gray-900 dark:text-white">industry</strong> during crises — not workers. When 400+ Morbi units shut in 2026, the policy focus was on <strong className="text-gray-900 dark:text-white">restoring gas supply</strong>. When workers left, there was no scheme to retain them through welfare, housing, or wage guarantees.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              After the 2018 violence: police deployed, arrests made — but <strong className="text-gray-900 dark:text-white">no anti-discrimination legislation</strong>. After COVID: workers walked on highways — but <strong className="text-gray-900 dark:text-white">no transport for weeks</strong>. After each crisis, workers are treated as <strong className="text-gray-900 dark:text-white">replaceable inputs, not as human beings with rights</strong>.
            </p>
          </DataCard>
        </Section>

        {/* ═══════════════ GUJARAT vs KERALA ═══════════════ */}
        <Section icon={<Users className="w-8 h-8 text-teal-600 dark:text-teal-500" />} title="The Comparison: Gujarat vs. Kerala">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            How does India's "most industrialised" state compare to Kerala — a state with a <strong className="text-gray-900 dark:text-white">smaller GSDP</strong> — in treating its migrant workforce?<Ref n={20} />
          </p>

          <ComparisonTable
            title="Migrant Worker Treatment — Gujarat vs. Kerala"
            columns={[
              { key: 'parameter', label: 'Parameter' },
              { key: 'gujarat', label: 'Gujarat' },
              { key: 'kerala', label: 'Kerala' },
            ]}
            rows={[
              { parameter: 'Migrant population', gujarat: '50-60 lakh', kerala: '~35-40 lakh' },
              { parameter: 'Average daily wage', gujarat: '₹300-500', kerala: '₹700-1000' },
              { parameter: 'State welfare scheme', gujarat: 'None for migrants', kerala: '"Aawaz" — free health insurance' },
              { parameter: 'Housing', gujarat: 'Factory slums, unregulated', kerala: 'Government-assisted worker hostels' },
              { parameter: 'Health access', gujarat: 'Language barriers, no ESI', kerala: 'Free health camps in migrant areas' },
              { parameter: 'Children\'s education', gujarat: 'Gujarati-only — no accommodation', kerala: 'Hindi-medium bridging programs' },
              { parameter: 'Worker registration', gujarat: 'Virtually none', kerala: 'Active biometric registration drives' },
              { parameter: 'Anti-migrant violence', gujarat: '2018 state-wide pogrom', kerala: 'Isolated incidents — state prosecutes' },
              { parameter: 'Minimum wage enforcement', gujarat: 'Weak — 90%+ cash economy', kerala: 'Stronger — active unions, inspections' },
              { parameter: 'Political voice', gujarat: 'Zero representation', kerala: 'Growing recognition — local bodies' },
            ]}
            highlightState="Gujarat"
          />
        </Section>

      </div>

      <CounterArgument messages={[
        { from: 'raju', text: 'Migrants come to Gujarat because everyone is welcome here. We treat them like family. They get jobs, housing — what more do they need?' },
        { from: 'priya', text: 'In October 2018, **20,000+** workers fled after organized mobs attacked migrant settlements across the state. The leader who organized the attacks later joined the ruling party. That\'s not a welcome, Rajubhai.', source: 'Scroll.in / Indian Express Oct 2018' },
        { from: 'raju', text: 'That was one incident. One bad actor. You can\'t judge a whole state by that.' },
        { from: 'priya', text: '**589 tribal migrants** from MP\'s Alirajpur and Jhabua died of silicosis in Gujarat\'s quartz factories over a decade. Paid Rs 150/day, no masks, factory owners destroyed muster rolls weekly to avoid accountability. The NHRC had to intervene.', source: 'Business Standard / NHRC Notice 2016' },
        { from: 'raju', text: 'Working conditions are improving. The economy can\'t function without these workers — that proves we need them.' },
        { from: 'priya', text: 'Needing someone and protecting them are different things. **70%** of Morbi\'s ceramic workers are migrants — yet **92%** have no ESI coverage despite being legally entitled since 1967. Silicosis deaths surged **216%** in 2024-25. Migrants from UP and Bihar were among the **141 dead** at Morbi bridge — zero convictions. Gujarat\'s economy runs on people it won\'t even insure.', source: 'Counterview / PTRC / Morbi Commission' },
      ]} />

      {/* Author's Note */}
      <div className="mt-12 p-6 rounded-2xl border border-amber-200 dark:border-amber-900/30 bg-amber-50/50 dark:bg-amber-950/20">
        <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          <strong className="block mb-2 text-amber-900 dark:text-amber-200">* Author's Note on Everyday Discrimination</strong>
          The observations about the use of the slur "Hindira," language-based mocking, social distance in classrooms and workplaces, and the treatment of long-term residents as permanent outsiders are <strong>not sourced from any published newspaper report or academic study</strong>. This data is drawn from the <strong>direct, lived experience of the author</strong> — a non-Gujarati resident of Gujarat for over a decade — and corroborated by the shared experiences of numerous Hindi-speaking professionals, students, and workers living in the state. The absence of formal documentation on this phenomenon is itself part of the problem: everyday social exclusion rarely makes headlines, but its cumulative impact on millions of non-Gujarati residents is real, measurable in their alienation, and visible to anyone who has experienced it firsthand.
        </p>
      </div>

      <SourceList sources={sources} />
    </main>
  )
}
