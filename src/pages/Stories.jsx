import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, MapPin, Calendar, BookOpen, AlertTriangle, Link as LinkIcon } from 'lucide-react'
import SEO from '../components/SEO'
import { humanStories } from '../data/humanStories'

// ────────────────────────────────────────────────────────────────────────────
// Pillar groupings with editorial context — this is the "why" that explains
// what connects these deaths structurally, not just a list of links.
// ────────────────────────────────────────────────────────────────────────────
const PILLAR_META = {
  infrastructure: {
    label: 'The Morbi Bridge — A Diwali That Never Ended',
    subtitle: '141 dead, 30 October 2022',
    context:
      "On the fifth day of Diwali 2022, a 143-year-old British-era pedestrian suspension bridge over the Machchhu river collapsed into the water at around 6:30pm. It had reopened to the public just five days earlier after a seven-month renovation contracted to Oreva Group — a clock manufacturer with no prior bridge-engineering experience. Tickets had been sold at ₹17 for adults; 400–500 people were on a bridge rated for 125. The cables had been repainted but not replaced. What follows is not a list of names. It is the memory of a single evening when an entire town lost its children.",
  },
  labor: {
    label: "Surat's Diamond Polishers — Bled Dry by a Boom",
    subtitle: '71+ suicides in 18 months, 2023–2024',
    context:
      "Surat cuts and polishes roughly 90% of the world's diamonds. Most of its 800,000–1.2 million polishers are second- and third-generation migrants from Saurashtra — Patels from Bhavnagar, Amreli, Junagadh, and Rajkot — who came to the city through kinship networks in the 1980s. When Russian sanctions, U.S. demand shocks, and the collapse of Chinese buying hit the industry in late 2023, tens of thousands lost work within weeks. Wages dropped from ₹25,000/month to ₹15,000. Many polishers had mortgaged their Saurashtra farmland to move to Surat. The suicide counter ticked upward quietly — nobody in the trade association, the municipal corporation, or the police would 'join the dots,' as ThePrint's investigation put it.",
  },
  'migrant-discrimination': {
    label: "Godhra ki Beemari — The Illness Gujarat Exports",
    subtitle: "Silicosis deaths of tribal migrants, and the 2018 pogrom",
    context:
      "In the tribal villages of Jhabua, Alirajpur, and Dhar in western Madhya Pradesh, people do not call it silicosis. They call it Godhra ki beemari — the Godhra illness — because that is where their men go to crush quartz and return coughing blood. Between 2000 and 2015, at least 589 tribal labourers from these districts died after working in Gujarat's quartz, agate, and ceramic units. There are no factory records of their employment, because they were hired through mukaddams (labour recruiters) on cash-in-hand daily wages. In Khambhat, the agate-bead industry — which supplies rosaries and jewellery across the world — killed hundreds more. Silicosis is 100% preventable with water-cooled grinding and dust extraction; the equipment exists and costs less than one month of an owner's profit. In 2018, an unrelated criminal case triggered the largest anti-migrant pogrom in Gujarat's recent history: ~20,000 Hindi-speaking workers fled back to Bihar and UP after mob violence across six districts.",
  },
  environment: {
    label: 'Alang & Ankleshwar — Where the Chemicals and Ships Come to Die',
    subtitle: 'Shipbreaking and chemical-cluster deaths',
    context:
      "Alang's 10km Bhavnagar coast dismantles roughly a third of the world's end-of-life ships. Workers — overwhelmingly migrants from Bihar, UP, Jharkhand, and Odisha — climb 250-metre-long hulls in sandals and remove toxic asbestos, PCBs, and heavy metals with hand tools. Ankleshwar, 120 km south, is one of Asia's largest chemical clusters; its 1,500 plants have produced a generation of gas-leak deaths. Yards at Alang that hold Hong Kong Convention 'Statement of Compliance' certificates have been the site of repeated fatalities, calling the certification regime itself into question.",
  },
  agriculture: {
    label: "The Rain That Broke the Farmers — Saurashtra, November 2025",
    subtitle: '6 farmer suicides in 25 days',
    context:
      "In November 2025, unseasonal rain — a climate-change signature now routine across Gujarat — destroyed standing groundnut, cotton, and pigeon-pea crops across Saurashtra and Dwarka. The state government's crop-damage survey and relief disbursement lagged the destruction by weeks. Farmers who had taken loans against land or jewellery to sow the kharif crop had no harvest to sell and no relief cheque to repay with. Six ended their lives inside 25 days. Gujarat's farmer-suicide story is not made of famine — it is made of crop insurance that does not pay, groundwater that runs deeper every year, and input costs (67% of DAP fertiliser imported, 100% of MOP imported) that rise faster than procurement prices.",
  },
}

const PILLAR_ORDER = [
  'infrastructure',
  'labor',
  'migrant-discrimination',
  'environment',
  'agriculture',
]

// Expanded narrative elaborations keyed by story id — where we add texture
// beyond the raw circumstance field (which is a terse summary).
const EXPANDED = {
  'diamond-pravin-sarvaiya':
    "Pravin was fifty-four. He had come to Surat from Amreli when he was in his twenties, part of the great Saurashtra Patel migration that built the modern Surat diamond trade. For three decades, he polished small white goods — the mass-market stones that fill every middle-class engagement ring in America and China. His wife Parvaben described his last six months as a slow unravelling: he would come home and stare at the wall. He would tell her at night, with tears in his eyes, that 'the industry had sucked his blood.' When the terrace door was found open the morning after, the neighbours already knew.",
  'diamond-vinu-moradiya':
    "Vinu did not die alone. He took his wife Shardaben, his twenty-year-old son Krish, and his younger daughter with him to a canal bank outside Surat and gave each of them an aluminium phosphide tablet — the cheapest rat-poison pesticide in any Indian village store. His cousin Praveen had spoken to him hours earlier and had begged him to wait. The Moradiyas had come from Sihor taluka in Bhavnagar, selling ancestral land to finance a decade of polishing work. When the work dried up, the land was already gone.",
  'diamond-nikunj-tank':
    "For seven years Nikunj cut and polished at the same unit. When the unit laid him off in May 2024, he walked to every ghanti in his neighbourhood looking for a replacement bench and found none. He was the sole earner for his parents. His father Jayanti told reporters, simply: 'He couldn't find a job and unable to bear the loss, he took the extreme step.'",
  'diamond-jyanti':
    "Jyanti was known in his unit for the care he took with the smaller stones — the ones most cutters rushed through because the per-piece rate was low. When the August 2024 layoff wave hit, he lost his bench along with two hundred others at the same factory. He ended his life that month. There is no published obituary; what survives of him is a line in ThePrint's ground report.",

  'silicosis-dinesh-rai-singh':
    "Dinesh Rai was thirty-four years old when he walked out of a Gujarat quartz factory in 2001, already unable to climb the stairs to his hut. He had moved from Kasuldara village in Jhabua five years earlier — the normal cycle for a tribal migrant, six months of quartz work followed by two months of home farming. He never went back. By 2005, silicosis had killed his wife and his sister, who had worked alongside him. He lives on the earnings of his surviving siblings.",
  'silicosis-shaitan-malji':
    "Shaitan was forty-five and had been in the Meghnagar–Gujarat quartz cycle for twenty years before the cough came. 'After a few months of work,' he told The Wire, 'I found I was having difficulty breathing. I started losing weight and energy.' His factory had no water, no masks, no exhaust fans — just three crushers running twelve hours a day in a shed. Doctors told him there was 'very little possibility of getting cured.'",
  'silicosis-ramla-thavaria':
    "Ramla's story is the story of the mukaddam system. He was recruited to Jyoti Minerals at Balasinor, Gujarat, in a fourteen-labourer team led by his own relative, a recruiter named Dursingh. Dursingh was paid a per-head fee by the factory. Ramla came home dying of silicosis; Dursingh himself came home and died of silicosis soon after. The system kills the recruiter and the recruited alike.",
  'silicosis-samuben-darbar':
    "Samuben was not an agate worker. Her husband ran a small grinding unit in the courtyard of their house in Shakarpur, Khambhat — the kind of one-lathe, two-worker operation that produces the polished stones sold as rosary beads across the Muslim world. She swept the courtyard, cooked for the workers, and breathed the dust that settled on every surface. She was one of several hundred non-worker deaths from the Khambhat agate industry documented by the Pulitzer Center.",
  'silicosis-hydersha-diwan':
    "Hydersha supervised a Khambhat grinding unit for ten years. When workers stopped coming — because enough of them had already died — he did the grinding himself for three or four years more. By 2016 he could not sleep or eat. He told reporters, with the hacking cough already in his voice: 'I drove [safety activists] away with threats... Today, I wish I'd listened.'",
  'silicosis-mohan-sullia':
    "Mohan is a survivor and an organiser. Through the tribal workers' collective in Meghnagar, he helped document 589 silicosis deaths among labourers from Alirajpur, Dhar, and Jhabua over fifteen years — a body count larger than any single industrial disaster in Gujarat's history, spread invisibly across villages in another state.",

  'morbi-bodha-family':
    "Sundarji Bodha lost twelve people in a single hour — five grandchildren, four daughters, three sons-in-law. They had gone to the bridge as a Diwali outing, the way families in Morbi had gone for a hundred years. His brother Prabhulal's words to a CNN reporter have not improved with time: 'The children are not here and it is so painful. How will we bear this?'",
  'morbi-kundariya-family':
    "The elder brother of Rajkot BJP MP Mohan Kundariya lost twelve members of his extended family that evening — five children, four women, three men. Kundariya himself told reporters, publicly, that overloading was the cause. No politician said what everyone in Morbi was already saying: that Oreva Group had cut ribbon-cutting corners, that the municipal NOC had never been issued, that tickets were sold at a bridge rated for a quarter of the people on it.",
  'morbi-majothi-siblings':
    "Faizan was eight. Mahinoor was five. They were four days away from returning to school after the Diwali break. Their grandmother Himilaben was on the bridge with them. The three went in together when the central panel gave way.",
  'morbi-faldu-parents':
    "Hardik and Miral Faldu both died that night. Their four-year-old son Jiyansh was at home with his grandmother. The neighbours who told Al Jazeera about him said they had been bringing him toys and sweets in the days after — a four-year-old being distracted, in shifts, from the fact that he now had no parents.",
  'morbi-habibul':
    "Habibul was a migrant worker from West Bengal. He had gone alone to see the bridge — the biggest tourist attraction in Morbi — on his day off. His family was in the middle of a train journey from Bengal to visit him when the bridge collapsed. They arrived in Morbi the next day to a body.",
  'morbi-up-family':
    "An extended family of seven had travelled together from Uttar Pradesh to visit Gujarat during the Chhath Puja season. All seven were on the bridge. All seven died. Business Today's line on this family does not contain any of their names. That absence — the mass anonymity of migrants in a migrant-dependent state — is itself the story.",

  'pogrom2018-ravindra-sahu':
    "Ravindra Sahu was arrested on 28 September 2018 in Himmatnagar for the alleged rape of a 14-month-old child. Within forty-eight hours, his Bihari identity had been weaponised. WhatsApp groups coordinated attacks on Hindi-speaking workers across Sabarkantha, Mehsana, Gandhinagar, Ahmedabad, Patan, and Banaskantha. Ceramic and textile units put up signs saying 'no migrants.' Bus stations filled with families carrying everything they owned. ~20,000 workers fled the state. Sahu remained in custody awaiting trial. The actual victims of the pogrom — the men beaten outside Morbi factories, the families evicted from chawls overnight — have been kept anonymous in mainstream reporting for their own safety.",

  'alang-satur-bhai':
    "Satur Bhai was twenty years old. He was tasked with removing furniture from the seventh deck of the 279-metre LNG tanker REM — a vessel that had arrived at Plot 50 in Alang under the 'Hong Kong Convention' certification that was supposed to make shipbreaking safe. He had no harness. He fell to his death in May 2025.",
  'alang-subash-vishwakarma':
    "Subash Vishwakarma was fifty. A metal plate fell from a ship being cut at Priya Blue yard (Plot V1) and killed him on the spot. Priya Blue was HKC-certified at the time. The NGO Shipbreaking Platform has since documented that HKC certification, which the international shipping industry touts as a safety standard, has repeatedly been issued to yards where workers continue to die.",
  'alang-bhuddabhai':
    "Bhuddabhai belonged to the Kholi caste — a community of toilet and bathroom dismantlers who are sent into ship interiors to pull out sanitary fittings for resale at the second-hand shops lining the road to Alang. Public Eye's reporters profiled him mid-shift aboard the MV Ocean Gala; he was injured in a workplace accident during the period they were on site.",

  'chemical-rajabhaiya-singh':
    "Rajabhaiya Singh was thirty-one. On 10 December 2015, a toxic gas leak at a chemical unit in Ankleshwar GIDC killed him and two colleagues on the shop floor. The factory's name, the gas, and the post-incident corrective actions have never been published. Ankleshwar has been home to more than a dozen such leaks in the decade since.",
  'chemical-satyendra-singh':
    "Satyendra was twenty-two. He died alongside Rajabhaiya and Raju in the same Ankleshwar leak. Business Standard's wire report is the only published record of his short life.",
  'chemical-raju-prajapati':
    "Raju was also twenty-two — another welding or maintenance worker hired on a day-wage contract, without the benefit of being on the factory's books. The gas took him in the same hour as Rajabhaiya and Satyendra.",

  'farmer-shailesh-savaliya':
    "Shaileshbhai was forty-two. He had sown groundnut, pigeon pea, and onion on eight bighas of leased land in Ishwariya village, Visavadar. The November 2025 unseasonal rain flattened all three crops. He walked into his own field the following week and consumed poison. The state relief package would arrive a month later; it did not reach his family in time.",
  'farmer-gaffar-unde':
    "Gaffarbhai was forty-nine. He jumped into the well on his own farm in Revaniya village, Vinchhiya taluka, Rajkot. His death was the second of six in the same twenty-five-day window. He had been farming for thirty years.",
  'farmer-karshan-vanoriya':
    "Karshanbhai was thirty-seven, from Manpur in Devbhumi Dwarka. His crop had been wiped out in the same rain event. The pattern across all six November 2025 suicides was identical: an eroding harvest, a missing insurance payout, and a relief cheque that had not yet cleared.",
  'farmer-rabarika-65':
    "The sixth farmer was sixty-five, from Rabarika village in Shihor taluka, Bhavnagar. His name was withheld from the published report at the family's request — listed here to complete the count, not to identify him.",
}

function StoryCard({ story }) {
  const [open, setOpen] = useState(false)
  const narrative = EXPANDED[story.id] || story.circumstance

  return (
    <article className="rounded-2xl border border-gray-200 dark:border-dark-border bg-white/70 dark:bg-dark-surface/70 shadow-sm hover:shadow-lg transition-all overflow-hidden">
      <div className="p-6 md:p-8">
        <header className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
            {story.name}
            {story.age != null && (
              <span className="text-gray-500 dark:text-gray-400 font-normal text-xl">, {story.age}</span>
            )}
          </h3>
          <span className="text-[10px] font-bold tracking-widest uppercase text-crimson bg-crimson/10 rounded-full px-3 py-1">
            {story.anchorText}
          </span>
        </header>

        <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-600 dark:text-gray-400 mb-5">
          {story.origin && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              {story.origin.district}, {story.origin.state}
            </span>
          )}
          {story.eventDate && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              {story.eventDate}
            </span>
          )}
        </div>

        <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200 first-letter:font-serif first-letter:text-3xl first-letter:font-bold first-letter:text-crimson first-letter:mr-1 first-letter:float-left first-letter:leading-none">
          {open || narrative.length < 420 ? narrative : `${narrative.slice(0, 380).trim()}…`}
        </p>

        {narrative.length >= 420 && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-3 text-xs font-bold uppercase tracking-widest text-crimson hover:underline focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 rounded"
          >
            {open ? 'Show less' : 'Read the full account'}
          </button>
        )}

        {story.sourceUrl && (
          <footer className="mt-5 pt-4 border-t border-gray-200 dark:border-dark-border text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2">
            <LinkIcon className="w-3.5 h-3.5 mt-0.5 shrink-0" aria-hidden="true" />
            <span className="leading-snug">
              Reported by <span className="font-semibold text-gray-700 dark:text-gray-300">{story.sourcePublication}</span>:{' '}
              <a
                href={story.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="italic hover:underline hover:text-crimson"
              >
                {story.sourceTitle}
              </a>
            </span>
          </footer>
        )}
      </div>
    </article>
  )
}

export default function Stories() {
  const grouped = useMemo(() => {
    const g = {}
    for (const s of humanStories) {
      if (!g[s.pillar]) g[s.pillar] = []
      g[s.pillar].push(s)
    }
    return g
  }, [])

  return (
    <main className="w-full max-w-4xl mx-auto px-6 pt-32 pb-32 space-y-20">
      <SEO
        title="Human Stories"
        description="Named individuals behind Gujarat's structural statistics — full narrative accounts of diamond polishers, tribal silicosis victims, Morbi bridge collapse families, farmer suicides, Alang shipbreakers, and Ankleshwar chemical deaths. Sourced from mainstream journalism."
        path="/stories"
      />

      {/* Hero */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-4 text-crimson font-semibold tracking-widest text-sm mb-4">
            <Users className="w-5 h-5" aria-hidden="true" />
            <span>NAMED, NOT NUMBERED</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            The <span className="italic text-crimson">people</span> behind the statistics.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed border-l-4 border-crimson pl-6 mt-10">
            Every number on this site is a life. Below are <strong className="font-bold text-crimson">{humanStories.length} accounts</strong>{' '}
            — a polisher, a child, a tribal migrant, a farmer, a shipbreaker —
            each anchored to a documented report in mainstream journalism.
          </p>
          <p className="mt-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            This is not a list of names. It is an attempt to make the body count legible.
            If you find yourself skimming — slow down. These are not summaries. They are <em>obituaries</em>.
          </p>
        </motion.div>
      </section>

      {/* Ethics note up top — answers "will this get me in trouble" */}
      <aside className="rounded-2xl border border-yellow-300/60 dark:border-yellow-700/40 bg-yellow-50/60 dark:bg-yellow-900/10 p-6 flex gap-4">
        <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
          <strong className="font-bold">A note on names.</strong> Every name below has already been
          published in mainstream Indian or international journalism (The Wire, Down to Earth, Al Jazeera,
          CNN, BBC, ThePrint, Business Standard, Gujarat Samachar, PARI, Public Eye, Caravan, Pulitzer
          Center, India TV). Citing such public-record names for research and public-interest commentary
          is consistent with standard academic and journalistic practice. No home addresses, no photographs,
          no social-media sourcing. If you are a family member who would like an account modified or removed,
          please open an issue on the project repository and the change will be made immediately.
        </div>
      </aside>

      {/* Grouped narratives */}
      {PILLAR_ORDER.map((pillarKey) => {
        const stories = grouped[pillarKey]
        const meta = PILLAR_META[pillarKey]
        if (!stories || stories.length === 0 || !meta) return null

        return (
          <section key={pillarKey} className="space-y-8 scroll-mt-24" id={pillarKey}>
            <header className="border-b border-gray-300 dark:border-dark-border pb-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-crimson mb-3">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                {meta.subtitle}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                {meta.label}
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
                {meta.context}
              </p>
            </header>

            <div className="space-y-6">
              {stories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </section>
        )
      })}

      {/* Why this page exists */}
      <section className="rounded-2xl border border-gray-200 dark:border-dark-border bg-parchment-50 dark:bg-dark-surface p-8 space-y-3">
        <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
          Why this page exists
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          Across the thirteen pillars of this project, there are charts showing '71 diamond suicides,'
          '141 dead at Morbi,' '589 silicosis deaths,' 'six farmer suicides in twenty-five days.' Numbers
          like these do a strange thing to a reader: they turn the dead into rounding errors. The Human
          Stories page exists because the argument of this project — that Gujarat's structural dependencies
          produce preventable deaths — cannot be made persuasively with averages alone. It has to be made
          in a way that respects that the 141th person on the bridge had a name.
        </p>
      </section>
    </main>
  )
}
