import { motion } from 'framer-motion'
import { Factory, AlertTriangle, Wind, Droplets } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { CounterArgument } from '../components/CounterArgument'

const sources = [
  { title: "The World's Most Polluted Places — Vapi, Gujarat", publication: "TIME / Blacksmith Institute, 2007", url: "https://content.time.com/time/specials/2007/article/0,28804,1661031_1661028_1661019,00.html" },
  { title: "Critically Polluted: Treated effluents from Vapi CETP don't meet safety standards", publication: "Down To Earth / CPCB", url: "https://www.downtoearth.org.in/governance/critically-polluted-treated-effluents-from-vapi-cetp-don-t-meet-safety-standards-find-pollution-control-boards-89547" },
  { title: "CAG Report: Gujarat Pollution Control — CPCB CEPI Assessment", publication: "CAG / CPCB, 2022", url: "https://saiindia.gov.in/uploads/download_audit_report/2022/Chapter9-0632d8a52deb309.44861917.pdf" },
  { title: "Despite efforts, clean water is scarce in India's industrial Gujarat state", publication: "Down To Earth / CPCB", url: "https://www.downtoearth.org.in/news/water/despite-efforts-clean-water-is-scarce-in-india-s-industrial-gujarat-state-57603" },
  { title: "Despite efforts, clean water is scarce in India's industrial Gujarat state", publication: "The Conversation, 2016", url: "https://theconversation.com/despite-efforts-clean-water-is-scarce-in-indias-industrial-gujarat-state-74127" },
  { title: "Alang, Gujarat: The World's Biggest Ship Breaking Yard — A Dangerous Environmental Time Bomb", publication: "Marine Insight", url: "https://www.marineinsight.com/environment/alang-gujarat-the-world%E2%80%99s-biggest-ship-breaking-yard-a-dangerous-environmental-time-bomb/" },
  { title: "Projected mesothelioma cases among ship-breaking workers at Alang", publication: "ScienceDirect, 2019", url: "https://www.sciencedirect.com/science/article/abs/pii/S1438463919310016" },
  { title: "Morbi, India: Satellite Detection of a Major New SO2 Emission Source", publication: "NASA Aura, 2020", url: "https://aura.gsfc.nasa.gov/science/feature-20200302.html" },
  { title: "Morbi's Ceramic Workers Face Silicosis — 92% denied ESI coverage", publication: "Counterview / PTRC Study, 2025", url: "https://www.counterview.net/2025/08/morbis-ceramic-workers-face-silicosis.html" },
  { title: "2020 Dahej chemical plant explosion", publication: "Wikipedia", url: "https://en.wikipedia.org/wiki/2020_Dahej_chemical_plant_explosion" },
  { title: "Over 27% of Gujarat coastline eroding — highest erosion rate in India", publication: "DeshGujarat / NCCR, 2025", url: "https://deshgujarat.com/2025/08/07/over-27-of-gujarat-coastline-eroding-19-showing-growth-district-wise-figures-here/" },
  { title: "A Quarter of India's Lands Turning Into Deserts — Gujarat Over 50%", publication: "WOTR / ISRO SAC Atlas, 2016", url: "https://wotr.org/blog/a-quarter-of-indias-lands-turning-into-deserts/" },
  { title: "State-wise Analysis of Carbon Emissions in India — Gujarat Leads", publication: "India Data Map / CEEW, 2025", url: "https://indiadatamap.com/2025/11/19/state-wise-analysis-of-carbon-emissions-in-india/" },
  { title: "Sea Level Rise and Coastal Vulnerability in Gujarat", publication: "PMC / Frontiers in Marine Science, 2025", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11450030/" },
]

export default function Environment() {
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
            <span>PILLAR 08</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Environment & <span className="italic text-crimson">Climate</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat's industrial engine generates enormous <strong className="font-semibold text-gray-900 dark:text-white">environmental externalities</strong> — from CPCB-designated critically polluted zones to the world's largest ship-breaking yard. Coastal erosion threatens 27.6% of its coastline, over 50% of land faces desertification, and per capita carbon emissions run 91% above the national average.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* Industrial Pollution */}
        <Section icon={<Factory className="w-8 h-8 text-red-600 dark:text-red-400" />} title="Industrial Pollution Hotspots">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="6" label="CPCB Critically Polluted" color="red" />
            <StatBox value="90.75" label="Vapi CEPI Score (Highest)" color="crimson" />
            <StatBox value="74%" label="Rivers Severely Polluted" color="red" />
          </div>

          {/* Chart: CEPI Scores for Gujarat Industrial Clusters */}
          <PillarChart
            type="bar"
            title="CEPI Scores: Gujarat's Critically Polluted Industrial Clusters"
            caption="Figure 1: Six Gujarat industrial areas score above the CPCB critical threshold of 70. Vapi peaked at 90.75 — the highest in all of India. Source: CPCB/CAG"
            data={[
              { name: 'Vapi', value: 90.75 },
              { name: 'Ankleshwar', value: 88.50 },
              { name: 'Ahmedabad', value: 75.28 },
              { name: 'Vatva', value: 74.77 },
              { name: 'Bhavnagar', value: 70.99 },
              { name: 'Junagadh', value: 70.82 },
            ]}
            colors={['#991B1B', '#B91C1C', '#DC2626', '#EF4444', '#F87171', '#FCA5A5']}
            height={320}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Vapi: One of the World's Most Polluted" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                The Blacksmith Institute listed Vapi among the <strong className="text-gray-900 dark:text-white">world's worst polluted places</strong>. Mercury in groundwater is reportedly <strong className="text-gray-900 dark:text-white">96 times higher than WHO safety levels</strong>. Approximately 71,000 people are affected by chemicals from the industrial estate's 1,000+ manufacturers spanning a 400-km belt.<Ref n={1} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Vapi's CEPI score peaked at <strong className="text-gray-900 dark:text-white">90.75 in 2011 — the highest in all of India</strong>. Over 500 industries discharge effluents into the Daman Ganga river that still fail safety standards.<Ref n={2} />
              </p>
            </DataCard>

            <DataCard title="Six Critically Polluted Clusters">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                In the CPCB's CEPI assessment, Gujarat had <strong className="text-gray-900 dark:text-white">six Critically Polluted Areas</strong> (CEPI &ge; 70): Ankleshwar (88.50), Vapi (88.09), Ahmedabad (75.28), Vatva (74.77), Bhavnagar (70.99), and Junagadh (70.82).<Ref n={3} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                By 2018, Vatva, Ankleshwar, and Vapi remained under <strong className="text-gray-900 dark:text-white">CPCB moratorium banning industrial expansion</strong>.<Ref n={3} /> In Ankleshwar's 2,000+ registered industries, CPCB inspections found groundwater <strong>"totally unavailable"</strong> due to hazardous waste dumping.<Ref n={5} />
              </p>
            </DataCard>
          </div>

          <DataCard title="74% of Rivers Severely Polluted" alert={true}>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              CPCB reported that <strong>74% of Gujarat's 27 monitored rivers</strong> — flowing along 38 industrial townships including Ahmedabad, Surat, and Vadodara — are severely polluted.<Ref n={4} /> The Sabarmati in Ahmedabad is now India's second most polluted river with BOD levels of <strong>292 mg/L</strong>. The Amlakhadi river in Ankleshwar had pollution levels four times higher than national standards.<Ref n={4} />
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              In <strong className="text-gray-900 dark:text-white">2025, the Gujarat High Court called the Sabarmati a "cesspool"</strong>, ordering the state government to explain why untreated sewage continued to flow into a river that has been the centrepiece of Ahmedabad's urban branding. The court noted that despite Rs 1,200 crore spent on the Sabarmati Riverfront project, <strong>1,200 MLD of partially treated/untreated sewage</strong> still enters the river daily — making the aesthetic waterfront a cosmetic overlay on an ecological disaster.
            </p>
          </DataCard>
        </Section>

        {/* Alang & Morbi */}
        <Section icon={<AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />} title="Alang Ship-Breaking & Morbi Emissions">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="4,513" label="Projected Mesothelioma Cases" color="crimson" />
            <StatBox value="300%" label="SO2 Increase (Morbi)" color="red" />
            <StatBox value="16%" label="Alang Workers w/ Asbestosis" color="red" />
          </div>

          {/* Chart: Morbi SO2 Emissions Growth */}
          <PillarChart
            type="bar"
            title="Morbi SO2 Emissions Detected by NASA OMI (kt/year)"
            caption="Figure 3: NASA satellite data shows Morbi's SO2 emissions tripled from ~100 kt/year to ~300 kt/year between 2009-2016. Source: NASA Aura"
            data={[
              { name: '2009', value: 100 },
              { name: '2011', value: 150 },
              { name: '2013', value: 220 },
              { name: '2015', value: 270 },
              { name: '2016', value: 300 },
            ]}
            colors={['#F59E0B', '#F59E0B', '#EF4444', '#DC2626', '#991B1B']}
            height={280}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Alang: World's Largest Ship-Breaking Yard" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Alang-Sosiya spans <strong className="text-gray-900 dark:text-white">183 plots along 14 km of coast</strong>, responsible for 47% of all ships recycled globally.<Ref n={6} /> A Supreme Court expert report found <strong className="text-gray-900 dark:text-white">1 in 6 workers (16%) suffer from early-stage asbestosis</strong>. Airborne lead concentrations reach 60 times India's standard.<Ref n={6} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                A projection model estimated <strong className="text-gray-900 dark:text-white">4,513 mesothelioma cases</strong> among workers — yet Gujarat government records show <strong>zero reported occupational cancers</strong> under the Factories Act.<Ref n={7} /> 8,062 ships have been scrapped at Alang from 1982 to 2020, releasing asbestos, PCBs, and heavy metals. Critically, <strong className="text-gray-900 dark:text-white">Alang's ship-breaking volume has declined 75% from its peak</strong> as the EU Ship Recycling Regulation (2020) and the Hong Kong Convention push vessels toward cleaner yards in Turkey and China — threatening 25,000+ livelihoods without reducing the accumulated environmental damage.
              </p>
            </DataCard>

            <DataCard title="Morbi: NASA Detects 300% SO2 Surge">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                NASA's OMI satellite detected a <strong className="text-gray-900 dark:text-white">SO2 hotspot over Morbi</strong>, with emissions surging ~300% from ~100 kt/year (2009) to ~300 kt/year (2016).<Ref n={8} /> This makes Morbi's ~1,200 ceramic factories one of India's largest SO2 sources — despite having no power plants or refineries.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                A PTRC study of 2,000 workers found <strong className="text-gray-900 dark:text-white">29% have direct silica contact</strong> (risk of TB, silicosis, lung cancer). <strong>92.65% of workers reported no ESI health coverage</strong> despite the area being under ESI since 1967.<Ref n={9} />
              </p>
            </DataCard>
          </div>

          <DataCard title="Recurring Chemical Disasters">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Major incidents include: <strong>Dahej 2020</strong> — 5 killed, 57 injured, 4,800 evacuated from Yashashvi Rasayan plant; <strong>Ahmedabad 2020</strong> — 12 killed at Sahil Enterprise; <strong>Surat 2022</strong> — 6 killed by illegally dumped chemicals; <strong>Dahej 2024</strong> — 4 workers killed at Gujarat Fluorochemicals; <strong>GFL Panchmahal 2025</strong> — 2 killed (same plant where 7 died in 2021); <strong className="text-gray-900 dark:text-white">Deesa (Banaskantha) 2025 — 21 killed in a fireworks factory explosion</strong>, the single deadliest industrial incident in Gujarat since 2020.<Ref n={10} />
            </p>
          </DataCard>
        </Section>

        {/* Coastal Erosion & Climate */}
        <Section icon={<Droplets className="w-8 h-8 text-blue-600 dark:text-blue-400" />} title="Coastal Erosion, Desertification & Climate">
          {/* Chart: Coastal Erosion by State */}
          <PillarChart
            type="bar"
            title="Coastline Under Erosion by State (%)"
            caption="Figure 2: Gujarat leads India with 27.6% of its coastline under active erosion — equivalent to 537.5 km. Source: NCCR 1990-2018 study"
            data={[
              { name: 'Gujarat', value: 27.6 },
              { name: 'West Bengal', value: 24.8 },
              { name: 'Kerala', value: 22.1 },
              { name: 'Tamil Nadu', value: 18.7 },
              { name: 'Odisha', value: 17.3 },
              { name: 'Maharashtra', value: 15.9 },
              { name: 'Karnataka', value: 12.4 },
            ]}
            colors={['#D32F2F', '#6B7280', '#6B7280', '#6B7280', '#6B7280', '#6B7280', '#6B7280']}
            height={300}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="27.6% of Coastline Eroding — Highest in India">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                According to NCCR data (1990-2018), <strong className="text-gray-900 dark:text-white">27.63% (537.5 km) of Gujarat's 1,945.6 km coastline is under constant erosion</strong> — the highest erosion rate in the country.<Ref n={11} /> A longer 42-year study (1978-2020) found 45.9% subjected to erosion.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The worst-hit districts: Kutch, Valsad, Bharuch, and Jamnagar. In south Gujarat, <strong>60.81 sq km of land eroded in 35 years</strong>.<Ref n={11} /> Additionally, <strong className="text-gray-900 dark:text-white">36.39 sq km of mangrove cover has been lost</strong> along Gujarat's coast between 2001-2021 — primarily in the Gulf of Kutch and Gulf of Khambhat — due to industrial expansion, port development, and saline ingression.
              </p>
            </DataCard>

            <DataCard title="Over 50% of Land Under Desertification">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                ISRO's Space Applications Centre found Gujarat among states where <strong className="text-gray-900 dark:text-white">more than 50% of land area is under desertification or degradation</strong>.<Ref n={12} /> Gujarat has 13 Mha of desertified land (tied second nationally with Maharashtra).
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Mean temperatures rose up to <strong className="text-gray-900 dark:text-white">2.9°C between 1986-2019</strong>, with projections of up to 5°C increase by century's end. 55% of Banni grasslands have been invaded by Prosopis juliflora.<Ref n={12} />
              </p>
            </DataCard>
          </div>

          <div className="bg-white/70 dark:bg-dark-surface/70 p-10 rounded-3xl border border-gray-200 dark:border-dark-border shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 dark:bg-red-900 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            <h3 className="text-3xl font-serif font-bold mb-6 text-gray-900 dark:text-white relative z-10">Carbon Emissions & Sea Level Rise</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed relative z-10 mb-8 max-w-3xl">
              Gujarat leads Indian states with per capita emissions of <strong className="text-gray-900 dark:text-white">4.2 metric tons CO2 — 91% above the national average of 2.2 tons</strong>.<Ref n={13} /> The state accounts for 14% of India's total manufacturing emissions and 53% of national chemical manufacturing emissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <StatBox value="4.2 tCO2" label="Per Capita Emissions" color="crimson" />
              <StatBox value="91%" label="Above National Average" color="red" />
              <StatBox value="370K" label="Coastal Residents at Risk" color="blue" />
            </div>

            {/* Chart: Per Capita CO2 Emissions Comparison */}
            <div className="relative z-10 mt-6">
              <PillarChart
                type="bar"
                title="Per Capita CO2 Emissions: Gujarat vs Major States (tCO2)"
                caption="Figure 4: Gujarat's per capita emissions are 91% above the national average, driven by refining, chemicals, and ceramics. Source: CEEW / India Data Map"
                data={[
                  { name: 'Gujarat', value: 4.2 },
                  { name: 'Chhattisgarh', value: 3.8 },
                  { name: 'Jharkhand', value: 3.1 },
                  { name: 'National Avg', value: 2.2 },
                  { name: 'Maharashtra', value: 2.0 },
                  { name: 'Tamil Nadu', value: 1.9 },
                  { name: 'Kerala', value: 0.9 },
                ]}
                colors={['#D32F2F', '#9CA3AF', '#9CA3AF', '#6B7280', '#9CA3AF', '#9CA3AF', '#16A34A']}
                height={280}
              />
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed relative z-10 mt-8">
              A rise of 0.1 to 0.5 metres in sea level would cause <strong className="text-gray-900 dark:text-white">wetland losses of 2,508-12,541 sq km</strong> in Gujarat. Surat has experienced 12 major floods since 1883, and faces projected flooding under low-emission scenarios. ~370,000 people in Surat, Navsari, and Valsad districts are at risk. The Gulf of Kutch is designated a Critically Vulnerable Coastal Area.<Ref n={14} />
            </p>
          </div>
        </Section>

      </div>

      {/* Air Quality */}
      <Section icon={<Wind className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />} title="Urban Air Quality: The Invisible Crisis">
        {/* Chart: Annual Average PM2.5 by City */}
        <PillarChart
          type="bar"
          title="Annual Average PM2.5 Concentration (µg/m³)"
          caption="Figure 5: Ahmedabad's PM2.5 at 72 µg/m³ is nearly 5x the WHO guideline of 15 µg/m³. Gujarat cities highlighted in red. Source: CPCB / NCAP"
          data={[
            { name: 'Delhi', value: 108 },
            { name: 'Ahmedabad', value: 72 },
            { name: 'Surat', value: 52 },
            { name: 'Vadodara', value: 48 },
            { name: 'Rajkot', value: 45 },
            { name: 'Mumbai', value: 39 },
            { name: 'Bangalore', value: 32 },
            { name: 'WHO Limit', value: 15 },
          ]}
          colors={['#6B7280', '#D32F2F', '#DC2626', '#EF4444', '#F87171', '#6B7280', '#6B7280', '#16A34A']}
          height={320}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCard title="Ahmedabad: Among India's Most Polluted Cities" alert={true}>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Ahmedabad's annual average PM2.5 concentration stands at approximately <strong className="text-gray-900 dark:text-white">72 µg/m³</strong> — nearly <strong>5 times the WHO guideline of 15 µg/m³</strong>. Winter months frequently see AQI readings above 300 ("Hazardous"), driven by vehicular emissions, construction dust, and industrial pollutants from the Naroda-Odhav-Vatva belt.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Ahmedabad is officially classified as a <strong className="text-gray-900 dark:text-white">CPCB Non-Attainment City</strong> — meaning it has consistently failed to meet the National Ambient Air Quality Standards. The NCAP action plan targets a 40% PM2.5 reduction by 2026 — but with vehicle registrations growing at 8% annually and industrial output expanding, current trajectories suggest the target will be missed by a wide margin.
            </p>
          </DataCard>

          <DataCard title="Surat, Rajkot & Vadodara: Industrial Emissions">
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Surat — with its <strong className="text-gray-900 dark:text-white">65,000+ textile dyeing and printing units</strong> — generates significant PM10 and SO2 emissions from coal-fired boilers (many units haven't switched to gas). The Pandesara and Sachin GIDC areas regularly exceed ambient air quality standards.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Vadodara's GIDC Makarpura industrial estate and Rajkot's Aji River industrial corridor both feature in GPCB's monitoring alerts. <strong className="text-gray-900 dark:text-white">Only 4 Gujarat cities have continuous ambient air quality monitoring stations</strong> — meaning most industrial towns have no real-time air quality data, allowing pollution to go unrecorded and unregulated.
            </p>
          </DataCard>
        </div>
      </Section>

      {/* NGT & Regulatory */}
      <Section icon={<AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />} title="Regulatory Failures & NGT Interventions">
        <DataCard title="National Green Tribunal: Gujarat's Compliance Record">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Gujarat has been among the states with the <strong className="text-gray-900 dark:text-white">highest number of NGT cases filed</strong> — particularly related to industrial effluent discharge, illegal hazardous waste disposal, and coastal zone violations. Notable interventions include:
          </p>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
              <span><strong>Sabarmati River:</strong> NGT directed Gujarat government to ensure zero untreated sewage discharge by 2024 — the deadline was missed. As of 2026, an estimated 1,200 MLD of partially treated/untreated sewage still enters the river.</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
              <span><strong>Alang Ship-Breaking:</strong> NGT ordered mandatory hazardous waste inventorying before breaking — compliance remains patchy, with many yards bypassing pre-cleaning requirements.</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
              <span><strong>CRZ Violations:</strong> Multiple coastal construction projects in Kutch, Jamnagar, and Saurashtra flagged for Coastal Regulation Zone violations — including port expansion activities and industrial facilities built within the 500m CRZ buffer.</span>
            </li>
          </ul>
        </DataCard>

        <DataCard title="GPCB: Understaffed and Overwhelmed" alert={true}>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            The Gujarat Pollution Control Board (GPCB) oversees an estimated <strong className="text-gray-900 dark:text-white">45,000+ industrial units</strong> — from large refineries to small-scale dye houses — with a staff of approximately 500 technical officers. This gives each officer responsibility for <strong>90 industrial units</strong> — an impossible oversight ratio that guarantees selective enforcement at best.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            CAG audits have repeatedly flagged GPCB's <strong>failure to conduct mandated inspections</strong>, delayed processing of Consent to Operate renewals, and lack of real-time effluent monitoring at most industrial estates. The result is a regulatory environment where compliance is voluntary for most small and medium enterprises, and enforcement targets only the most egregious violators.
          </p>
        </DataCard>
      </Section>

      <CounterArgument
        argument="Gujarat's industrial output justifies its environmental footprint. The state's pollution control infrastructure is continuously improving."
        rebuttal="6 CPCB critically polluted zones, Vapi mercury at 96x WHO limits, 74% of rivers severely polluted, zero reported occupational cancers at Alang despite 4,513 projected mesothelioma cases. Over 50% of land under desertification. The environmental costs are being externalized, not managed."
      />

      <SourceList sources={sources} />
    </main>
  )
}
