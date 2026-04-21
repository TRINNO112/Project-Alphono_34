// ============================================================================
// Human Stories Layer — named individuals behind Gujarat's structural stats
// ----------------------------------------------------------------------------
// ETHICAL SOURCING RULES (non-negotiable):
//   - Only names published in mainstream print/TV news (Indian Express, Business
//     Standard, BBC, The Hindu, NDTV, Reuters, The Wire, Scroll, Down to Earth,
//     PARI, Hindustan Times, Times of India, Deccan Herald, Frontline).
//   - NO social-media sourcing, NO speculative names.
//   - NO photos anywhere in the UI (explicit product decision).
//   - NO home addresses or family members beyond what the linked article names.
//   - If a family member requests removal, delete the entry and commit.
//
// Entry shape:
//   {
//     id:                 kebab-case unique slug
//     pillar:             'labor' | 'migrant-discrimination' | 'environment' |
//                         'agriculture' | 'infrastructure' | 'materials' |
//                         'chemical-governance'
//     anchorText:         short label shown near the marker (e.g., "Surat, 2024")
//     name:               as published
//     age:                number | null
//     origin:             { district, state }   — home region
//     eventDate:          ISO date string or year
//     circumstance:       2–3 sentence neutral narrative from the cited article
//     sourcePublication:  'Indian Express' | etc.
//     sourceTitle:        article headline
//     sourceUrl:          canonical URL
//   }
// ============================================================================

/** @type {Array<{
 *   id: string, pillar: string, anchorText: string, name: string,
 *   age: number | null, origin: { district: string, state: string },
 *   eventDate: string, circumstance: string,
 *   sourcePublication: string, sourceTitle: string, sourceUrl: string,
 * }>} */
export const humanStories = [
  // ==========================================================================
  // 1. Diamond Worker Suicides — Surat (Saurashtra Patels, 71+ in 18 months)
  // ==========================================================================
  {
    id: 'diamond-pravin-sarvaiya',
    pillar: 'labor',
    anchorText: 'Surat, Apr 2023',
    name: 'Pravin Sarvaiya',
    age: 54,
    origin: { district: 'Amroli (Saurashtra origin)', state: 'Gujarat' },
    eventDate: '2023-04-25',
    circumstance:
      'A second-generation diamond polisher who moved to Surat 30 years ago, Sarvaiya hanged himself from the terrace of his Katargam apartment six months after losing his job. His wife Parvaben told reporters he would cry at night, saying "the industry had sucked his blood."',
    sourcePublication: 'ThePrint',
    sourceTitle: "Surat's diamond industry has a suicide problem. Police to bosses, nobody wants to join the dots",
    sourceUrl: 'https://theprint.in/ground-reports/surats-diamond-industry-has-a-suicide-problem-police-to-bosses-nobody-wants-to-join-the-dots/1641302/',
  },
  {
    id: 'diamond-vinu-moradiya',
    pillar: 'labor',
    anchorText: 'Bhavnagar → Surat, Jun 2023',
    name: 'Vinu (Vinubhai) Moradiya',
    age: 50,
    origin: { district: 'Sihor taluka, Bhavnagar', state: 'Gujarat' },
    eventDate: '2023-06',
    circumstance:
      'Moradiya, his wife Shardaben (45), son Krish (20) and a younger daughter consumed aluminium phosphide tablets near a Surat canal. His polisher income had fallen from ₹25,000 to ₹15,000 a month during the industry slump. His cousin Praveen had urged him hours before: "Wait for better times."',
    sourcePublication: 'ThePrint',
    sourceTitle: "Surat's diamond industry has a suicide problem",
    sourceUrl: 'https://theprint.in/ground-reports/surats-diamond-industry-has-a-suicide-problem-police-to-bosses-nobody-wants-to-join-the-dots/1641302/',
  },
  {
    id: 'diamond-nikunj-tank',
    pillar: 'labor',
    anchorText: 'Surat, Aug 2024',
    name: 'Nikunj Tank',
    age: null,
    origin: { district: 'Saurashtra (village not published)', state: 'Gujarat' },
    eventDate: '2024-08',
    circumstance:
      'Tank, the sole breadwinner for his family, took his own life in August 2024 after losing his job three months earlier at a diamond unit where he had worked for seven years. His father Jayanti Tank told reporters: "He couldn\'t find a job and unable to bear the loss, he took the extreme step."',
    sourcePublication: 'TheUNN',
    sourceTitle: 'Diamond Industry Crisis in Surat: Job Losses, Suicides, and Hope for Recovery',
    sourceUrl: 'https://theunn.com/diamond-industry-crisis-in-surat-job-losses-suicides-and-hope-for-recovery-amid-global-downturn/',
  },
  {
    id: 'diamond-jyanti',
    pillar: 'labor',
    anchorText: 'Surat, Aug 2024',
    name: 'Jyanti',
    age: null,
    origin: { district: 'Surat (Saurashtra origin implied)', state: 'Gujarat' },
    eventDate: '2024-08',
    circumstance:
      'Known in Surat for careful attention to detail in polishing. After losing his job in the 2024 slump, he succumbed to mounting financial pressure and ended his life.',
    sourcePublication: 'TheUNN',
    sourceTitle: 'Diamond Industry Crisis in Surat',
    sourceUrl: 'https://theunn.com/diamond-industry-crisis-in-surat-job-losses-suicides-and-hope-for-recovery-amid-global-downturn/',
  },

  // ==========================================================================
  // 2. Silicosis Migrant Deaths — Gujarat quartz/agate/ceramic industry
  // ==========================================================================
  {
    id: 'silicosis-dinesh-rai-singh',
    pillar: 'migrant-discrimination',
    anchorText: 'Jhabua → Gujarat, 2001',
    name: 'Dinesh Rai Singh',
    age: 34,
    origin: { district: 'Kasuldara, Jhabua (tribal)', state: 'Madhya Pradesh' },
    eventDate: '2001',
    circumstance:
      'Contracted silicosis while working at a quartz factory in Gujarat. Returned to his village bedridden in 2001 and has lived on his family\'s earnings since. In 2005 his wife and sister — who had worked alongside him — died of silicosis.',
    sourcePublication: 'The Wire',
    sourceTitle: 'From Drought to Deadly Disease – No Respite for Migrant Tribal Farmers',
    sourceUrl: 'https://science.thewire.in/health/from-drought-to-deadly-disease-no-respite-for-migrant-tribal-farmers/',
  },
  {
    id: 'silicosis-shaitan-malji',
    pillar: 'migrant-discrimination',
    anchorText: 'Jhabua → Gujarat, 2014',
    name: 'Shaitan Malji',
    age: 45,
    origin: { district: 'Meghnagar, Jhabua (tribal)', state: 'Madhya Pradesh' },
    eventDate: '2014',
    circumstance:
      'Contracted silicosis at a Gujarat quartz-crushing unit in 2014. "After a few months of work, I found I was having difficulty breathing. I started losing weight and energy... Doctors have told me there is very little possibility of getting cured."',
    sourcePublication: 'The Wire',
    sourceTitle: 'From Drought to Deadly Disease',
    sourceUrl: 'https://science.thewire.in/health/from-drought-to-deadly-disease-no-respite-for-migrant-tribal-farmers/',
  },
  {
    id: 'silicosis-ramla-thavaria',
    pillar: 'migrant-discrimination',
    anchorText: 'MP/Gujarat border, 2010s',
    name: 'Ramla Thavaria',
    age: null,
    origin: { district: 'Adivasi (Warli) belt', state: 'MP/Gujarat border' },
    eventDate: '2010s',
    circumstance:
      'Worked at Jyoti Minerals in Balasinor, Gujarat, as part of a 14-labourer team recruited by a relative-mukaddam named Dursingh. Thavaria returned home dying of silicosis; Dursingh, the recruiter, also died of silicosis.',
    sourcePublication: 'Caravan Magazine',
    sourceTitle: "The deadly malady stalking India's workers",
    sourceUrl: 'https://caravanmagazine.in/health/silicosis-india-silica-dust-killing-workers',
  },
  {
    id: 'silicosis-samuben-darbar',
    pillar: 'migrant-discrimination',
    anchorText: 'Khambhat, Sep 2012',
    name: 'Samuben Darbar',
    age: null,
    origin: { district: 'Shakarpur, Khambhat', state: 'Gujarat' },
    eventDate: '2012-09-23',
    circumstance:
      'Her husband ran a small agate-grinding unit in front of their house; she was not an agate worker herself but contracted silicosis from ambient silica dust. One of several hundred Khambhat-area deaths from the gemstone bead industry.',
    sourcePublication: 'The World (PRX) / Pulitzer Center',
    sourceTitle: "How the shiny 'agate' stones in jewelry and rosary beads are killing workers",
    sourceUrl: 'https://theworld.org/stories/2016/07/30/how-shiny-agate-stones-jewelry-and-rosary-beads-are-killing-workers',
  },
  {
    id: 'silicosis-hydersha-diwan',
    pillar: 'migrant-discrimination',
    anchorText: 'Khambhat, 2016',
    name: 'Hydersha Diwan',
    age: 50,
    origin: { district: 'Khambhat', state: 'Gujarat' },
    eventDate: '2016',
    circumstance:
      'Former supervisor at a Khambhat agate grinding/polishing unit for ~10 years, then did grinding himself for 3–4 years after workers stopped coming. Emaciated, unable to sleep or eat due to hacking cough. "I drove [safety activists] away with threats... Today, I wish I\'d listened."',
    sourcePublication: 'The World (PRX)',
    sourceTitle: "How the shiny 'agate' stones in jewelry and rosary beads are killing workers",
    sourceUrl: 'https://theworld.org/stories/2016/07/30/how-shiny-agate-stones-jewelry-and-rosary-beads-are-killing-workers',
  },
  {
    id: 'silicosis-mohan-sullia',
    pillar: 'migrant-discrimination',
    anchorText: 'Meghnagar, 2010s',
    name: 'Mohan Sullia',
    age: null,
    origin: { district: 'Meghnagar, Jhabua (tribal)', state: 'Madhya Pradesh' },
    eventDate: '2010s',
    circumstance:
      'Silicosis survivor and member of a tribal workers\' group from Meghnagar. Documented that 589 tribal labourers from Alirajpur, Dhar and Jhabua died of silicosis contracted in Gujarat quartz units over 15 years. In MP villages, silicosis is called "Godhra ki beemari" — the Godhra illness.',
    sourcePublication: 'Down to Earth',
    sourceTitle: "Gujarat's silent epidemic: Silicosis is killing workers while the state looks away",
    sourceUrl: 'https://www.downtoearth.org.in/health/gujarats-silent-epidemic-silicosis-is-killing-workers-while-the-state-looks-away',
  },

  // ==========================================================================
  // 3. Morbi Bridge Collapse — 30 Oct 2022 (141 dead)
  // ==========================================================================
  {
    id: 'morbi-bodha-family',
    pillar: 'infrastructure',
    anchorText: 'Morbi, Oct 2022',
    name: 'Sundarji Bodha (family of 12 killed)',
    age: null,
    origin: { district: 'Morbi', state: 'Gujarat' },
    eventDate: '2022-10-30',
    circumstance:
      'Sundarji Bodha lost 5 grandchildren, 4 daughters and 3 sons-in-law on the bridge during a family Diwali outing. His brother Prabhulal Bodha told reporters: "The children are not here and it is so painful. How will we bear this?"',
    sourcePublication: 'CNN',
    sourceTitle: 'Morbi bridge collapse: Indian family lost 12 members in the Gujarat disaster',
    sourceUrl: 'https://www.cnn.com/2022/11/08/india/india-morbi-bridge-deadly-children-intl-hnk-dst',
  },
  {
    id: 'morbi-kundariya-family',
    pillar: 'infrastructure',
    anchorText: 'Tankara, Oct 2022',
    name: "Mohan Kundariya's extended family (12 killed)",
    age: null,
    origin: { district: 'Tankara taluka, Morbi', state: 'Gujarat' },
    eventDate: '2022-10-30',
    circumstance:
      "Twelve relatives of BJP Rajkot MP Mohan Kundariya's elder brother — five children, four women, three men — all died when the bridge collapsed. Kundariya attributed the cause to overloading.",
    sourcePublication: 'India TV News',
    sourceTitle: "Morbi cable bridge collapse: Five children among 12 members of BJP MP's family dead",
    sourceUrl: 'https://www.indiatvnews.com/news/india/morbi-cable-bridge-collapse-gujarat-bjp-mp-mohanbhai-kundariya-12-family-members-dead-gujarat-morbi-bridge-2022-10-31-820146',
  },
  {
    id: 'morbi-majothi-siblings',
    pillar: 'infrastructure',
    anchorText: 'Morbi, Oct 2022',
    name: 'Faizan (8) and Mahinoor (5) Majothi',
    age: null,
    origin: { district: 'Morbi', state: 'Gujarat' },
    eventDate: '2022-10-30',
    circumstance:
      'The two siblings were days away from returning to school after the Diwali holidays when the bridge collapsed. Their grandmother Himilaben Khumbhar was with them on the bridge.',
    sourcePublication: 'Al Jazeera',
    sourceTitle: "'Morbi is devastated': India mourns after Gujarat bridge collapse",
    sourceUrl: 'https://www.aljazeera.com/news/2022/11/1/morbi-is-devastated-india-mourns-after-gujarat-bridge-collapse',
  },
  {
    id: 'morbi-faldu-parents',
    pillar: 'infrastructure',
    anchorText: 'Morbi, Oct 2022',
    name: 'Hardik & Miral Faldu (parents of Jiyansh, 4)',
    age: null,
    origin: { district: 'Morbi', state: 'Gujarat' },
    eventDate: '2022-10-30',
    circumstance:
      'Both parents died in the collapse, leaving 4-year-old son Jiyansh an orphan; neighbours entertained the crying child with toys and sweets after the tragedy.',
    sourcePublication: 'Al Jazeera',
    sourceTitle: "'Morbi is devastated': India mourns after Gujarat bridge collapse",
    sourceUrl: 'https://www.aljazeera.com/news/2022/11/1/morbi-is-devastated-india-mourns-after-gujarat-bridge-collapse',
  },
  {
    id: 'morbi-habibul',
    pillar: 'infrastructure',
    anchorText: 'West Bengal → Morbi, Oct 2022',
    name: 'Habibul',
    age: null,
    origin: { district: 'unspecified', state: 'West Bengal' },
    eventDate: '2022-10-30',
    circumstance:
      '"Habibul went alone to see the bridge, the biggest attraction in Morbi, but he never came back." His family was en route from West Bengal to join him when he died.',
    sourcePublication: 'Al Jazeera',
    sourceTitle: "'Morbi is devastated': India mourns after Gujarat bridge collapse",
    sourceUrl: 'https://www.aljazeera.com/news/2022/11/1/morbi-is-devastated-india-mourns-after-gujarat-bridge-collapse',
  },
  {
    id: 'morbi-up-family',
    pillar: 'infrastructure',
    anchorText: 'UP → Morbi, Oct 2022',
    name: 'UP family of 7 (name not published)',
    age: null,
    origin: { district: 'unspecified', state: 'Uttar Pradesh' },
    eventDate: '2022-10-30',
    circumstance:
      'Seven members of a single family visiting Morbi from UP died during the collapse. The family name was not published in the accessed reporting — listed here to reflect the migrant-visitor toll.',
    sourcePublication: 'Business Today',
    sourceTitle: 'Morbi bridge collapse: Seven members of a family in UP die in tragedy',
    sourceUrl: 'https://www.businesstoday.in/latest/trends/story/morbi-bridge-collapse-seven-members-of-a-family-in-up-die-in-tragedy-351276-2022-10-31',
  },

  // ==========================================================================
  // 4. 2018 Sabarkantha Anti-Migrant Pogrom
  // ==========================================================================
  {
    id: 'pogrom2018-ravindra-sahu',
    pillar: 'migrant-discrimination',
    anchorText: 'Sabarkantha, Sep–Oct 2018',
    name: 'Ravindra Sahu (accused in trigger case)',
    age: null,
    origin: { district: 'unspecified', state: 'Bihar' },
    eventDate: '2018-09-28',
    circumstance:
      'A labourer at a ceramic factory in Dhundhar village near Himmatnagar, arrested for the alleged rape of a 14-month-old girl from the Thakor community. His Bihari identity became the pretext for mob attacks across six Gujarat districts, triggering the exodus of ~20,000 Hindi-speaking migrants. The actual pogrom victims remain anonymised in the public record for their safety.',
    sourcePublication: 'Outlook India',
    sourceTitle: "Gujarat: 150 Arrested For Attacking Migrants From UP, Bihar After 14-Month-Old's Rape",
    sourceUrl: 'https://www.outlookindia.com/national/gujarat-150-arrested-for-attacking-migrants-from-up-bihar-after-14-month-olds-rape-news-317802',
  },

  // ==========================================================================
  // 5. Farmer Suicides — Gujarat Cotton/Groundnut Belt (Nov 2025 rain crisis)
  // ==========================================================================
  {
    id: 'farmer-shailesh-savaliya',
    pillar: 'agriculture',
    anchorText: 'Junagadh, Nov 2025',
    name: 'Shaileshbhai Savaliya',
    age: 42,
    origin: { district: 'Ishwariya, Visavadar, Junagadh', state: 'Gujarat' },
    eventDate: '2025-11',
    circumstance:
      'Consumed poison in his own field after unseasonal rains washed out his groundnut and pigeon pea crops on an 8-bigha plot. He had also sown onion. Mounting debt and uncertainty pushed him to the extreme step.',
    sourcePublication: 'Gujarat Samachar (English)',
    sourceTitle: 'Unseasonal rain pushes Gujarat farmers to extreme action: 6 suicides in 25 days',
    sourceUrl: 'https://english.gujaratsamachar.com/news/gujarat/unseasonal-rain-pushes-gujarat-farmers-to-extreme-action-6-suicides-in-25-days',
  },
  {
    id: 'farmer-gaffar-unde',
    pillar: 'agriculture',
    anchorText: 'Rajkot, Nov 2025',
    name: 'Gaffarbhai Unde',
    age: 49,
    origin: { district: 'Revaniya, Vinchhiya, Rajkot', state: 'Gujarat' },
    eventDate: '2025-11',
    circumstance:
      'Jumped into a well after his crops were devastated by unseasonal rain. His death was one of six farmer suicides in 25 days linked to the same rain event and delayed state relief.',
    sourcePublication: 'Gujarat Samachar (English)',
    sourceTitle: 'Unseasonal rain pushes Gujarat farmers to extreme action',
    sourceUrl: 'https://english.gujaratsamachar.com/news/gujarat/unseasonal-rain-pushes-gujarat-farmers-to-extreme-action-6-suicides-in-25-days',
  },
  {
    id: 'farmer-karshan-vanoriya',
    pillar: 'agriculture',
    anchorText: 'Dwarka, Nov 2025',
    name: 'Karshanbhai Vanoriya',
    age: 37,
    origin: { district: 'Manpur, Devbhoomi Dwarka', state: 'Gujarat' },
    eventDate: '2025-11',
    circumstance:
      'Died by suicide during the wave of unseasonal-rain-triggered farmer deaths; crop wiped out, relief package had not reached affected farmers.',
    sourcePublication: 'Gujarat Samachar (English)',
    sourceTitle: 'Unseasonal rain pushes Gujarat farmers to extreme action',
    sourceUrl: 'https://english.gujaratsamachar.com/news/gujarat/unseasonal-rain-pushes-gujarat-farmers-to-extreme-action-6-suicides-in-25-days',
  },
  {
    id: 'farmer-rabarika-65',
    pillar: 'agriculture',
    anchorText: 'Bhavnagar, Nov 2025',
    name: '65-year-old farmer (name withheld in report)',
    age: 65,
    origin: { district: 'Rabarika, Shihor, Bhavnagar', state: 'Gujarat' },
    eventDate: '2025-11',
    circumstance:
      'Ended his life during the November 2025 unseasonal-rain crisis. Name was not disclosed in the public report; listed here to reflect the full toll.',
    sourcePublication: 'Gujarat Samachar (English)',
    sourceTitle: 'Unseasonal rain pushes Gujarat farmers to extreme action',
    sourceUrl: 'https://english.gujaratsamachar.com/news/gujarat/unseasonal-rain-pushes-gujarat-farmers-to-extreme-action-6-suicides-in-25-days',
  },

  // ==========================================================================
  // 6. Alang Shipbreaking Worker Deaths
  // ==========================================================================
  {
    id: 'alang-satur-bhai',
    pillar: 'environment',
    anchorText: 'Alang, May 2025',
    name: 'Satur Bhai',
    age: 20,
    origin: { district: 'unspecified', state: 'Gujarat' },
    eventDate: '2025-05-20',
    circumstance:
      'Fell to his death while dismantling the 279m LNG tanker REM (ex-SK Supreme) at plot No. 50, Alang. He had been tasked with removing furniture from the ship\'s seventh level without a safety harness.',
    sourcePublication: 'Offshore Energy / NGO Shipbreaking Platform',
    sourceTitle: 'Fatal accident in Alang raises fresh concerns as Hong Kong Convention nears entry into force',
    sourceUrl: 'https://www.offshore-energy.biz/fatal-accident-in-alang-raises-fresh-concerns-as-hong-kong-convention-nears-entry-into-force/',
  },
  {
    id: 'alang-subash-vishwakarma',
    pillar: 'environment',
    anchorText: 'Alang, Jul 2019',
    name: 'Subash Vishwakarma',
    age: 50,
    origin: { district: 'unspecified (migrant worker)', state: 'unspecified' },
    eventDate: '2019-07-29',
    circumstance:
      'Killed by a falling metal plate at Priya Blue yard, Plot V1, Alang, while working on a ship. He was pronounced dead on arrival at the nearest hospital. Priya Blue held HKC class certification at the time.',
    sourcePublication: 'Maritime Executive',
    sourceTitle: 'Report: Two Workers Killed at HKC-Certified Shipbreaking Yards',
    sourceUrl: 'https://www.maritime-executive.com/article/report-two-workers-killed-at-hkc-certified-shipbreaking-yards',
  },
  {
    id: 'alang-bhuddabhai',
    pillar: 'environment',
    anchorText: 'Alang, 2020s',
    name: 'Bhuddabhai (Kholi caste)',
    age: null,
    origin: { district: 'unspecified', state: 'unspecified' },
    eventDate: '2020s',
    circumstance:
      'Profiled by Public Eye while removing toilets from the MV Ocean Gala — fixtures later resold at second-hand shops on the road to Alang. He was injured in a workplace accident covered in the feature.',
    sourcePublication: 'Public Eye',
    sourceTitle: 'Where ships go to die',
    sourceUrl: 'https://stories.publiceye.ch/ships/',
  },

  // ==========================================================================
  // 7. Chemical Cluster Accidents — Ankleshwar GIDC gas leak, Dec 2015
  // ==========================================================================
  {
    id: 'chemical-rajabhaiya-singh',
    pillar: 'environment',
    anchorText: 'Ankleshwar, Dec 2015',
    name: 'Rajabhaiya Singh',
    age: 31,
    origin: { district: 'migrant (home state not specified)', state: 'unspecified' },
    eventDate: '2015-12-10',
    circumstance:
      'Killed by a toxic gas leak at a chemical unit in Ankleshwar GIDC, Bharuch district. Two colleagues died in the same incident.',
    sourcePublication: 'Business Standard',
    sourceTitle: 'Gas leak kills three workers in Ankleshwar GIDC',
    sourceUrl: 'https://www.business-standard.com/article/pti-stories/gas-leak-kills-three-workers-in-ankleshwar-gidc-115121000977_1.html',
  },
  {
    id: 'chemical-satyendra-singh',
    pillar: 'environment',
    anchorText: 'Ankleshwar, Dec 2015',
    name: 'Satyendra Singh',
    age: 22,
    origin: { district: 'migrant (home state not specified)', state: 'unspecified' },
    eventDate: '2015-12-10',
    circumstance:
      'Died alongside Rajabhaiya Singh and Raju Prajapati in the Ankleshwar GIDC gas leak.',
    sourcePublication: 'Business Standard',
    sourceTitle: 'Gas leak kills three workers in Ankleshwar GIDC',
    sourceUrl: 'https://www.business-standard.com/article/pti-stories/gas-leak-kills-three-workers-in-ankleshwar-gidc-115121000977_1.html',
  },
  {
    id: 'chemical-raju-prajapati',
    pillar: 'environment',
    anchorText: 'Ankleshwar, Dec 2015',
    name: 'Raju Prajapati',
    age: 22,
    origin: { district: 'migrant (home state not specified)', state: 'unspecified' },
    eventDate: '2015-12-10',
    circumstance:
      'Third fatality in the Ankleshwar GIDC gas leak; welding/maintenance-related exposure.',
    sourcePublication: 'Business Standard',
    sourceTitle: 'Gas leak kills three workers in Ankleshwar GIDC',
    sourceUrl: 'https://www.business-standard.com/article/pti-stories/gas-leak-kills-three-workers-in-ankleshwar-gidc-115121000977_1.html',
  },
]

export function getStoryById(id) {
  return humanStories.find((s) => s.id === id) || null
}

export function getStoriesByPillar(pillar) {
  return humanStories.filter((s) => s.pillar === pillar)
}
