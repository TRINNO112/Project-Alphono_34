import { motion } from 'framer-motion'
import { Landmark, ScrollText, TrendingDown, Building, Coins, Gem } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { LollipopChart } from '../components/charts/LollipopChart'
import { ComparisonTable } from '../components/ComparisonTable'
import { CounterArgument } from '../components/CounterArgument'
import { useLocalStorageToggle } from '../hooks/useLocalStorageToggle'
import { GovResponseToggle } from '../components/GovResponseToggle'
import ScrollSpy from '../components/ScrollSpy'

const sources = [
  { title: "Madhavpura Mercantile Cooperative Bank — Overview", publication: "Wikipedia (secondary aggregation; primary refs validated below)", url: "https://en.wikipedia.org/wiki/Madhavpura_Mercantile_Cooperative_Bank" },
  { title: "Gujarat's urban cooperative banks (post-MMCB autopsy)", publication: "Business Standard, 4 July 2012", url: "https://www.business-standard.com/article/finance/gujarat-s-urban-cooperative-banks-112070400046_1.html" },
  { title: "RBI cancels licence of scam-tainted Madhavpura Mercantile Bank", publication: "Moneylife, 5 June 2012", url: "https://www.moneylife.in/article/rbi-cancels-licence-of-scamtainted-madhavpura-mercantile-bank/26275.html" },
  { title: "45,000 Madhavpura bank depositors to get their money back — 17 years later", publication: "DNA India, 12 April 2018", url: "https://www.dnaindia.com/ahmedabad/report-gujarat-45000-madhavpura-bank-depositors-to-get-their-money-back-2670580" },
  { title: "RBI Press Release on Madhavpura licence cancellation", publication: "Reserve Bank of India, 4 June 2012", url: "https://www.rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=26606" },
  { title: "Visnagar Nagrik Sahakari Bank Ltd v DICGC — Gujarat HC judgement", publication: "Gujarat High Court (via LexTechSuite), 6 July 2015", url: "https://lextechsuite.com/The-Visnagar-Nagrik-Sahakari-Bank-Ltd-Under-Liquidation-and-Others-Versus-Deposit-Insurance-and-Credit-Guarantee-Corporation-and-Others-2015-07-06" },
  { title: "Gujarat panel to probe Visnagar scam", publication: "Business Standard, 5 September 2002", url: "https://www.business-standard.com/article/finance/gujarat-panel-to-probe-visnagar-scam-102090501028_1.html" },
  { title: "Shree Mahalaxmi Mercantile Cooperative Bank licence cancelled", publication: "Moneylife, 12 January 2024", url: "https://www.moneylife.in/article/shree-mahalaxmi-mercantile-cooperative-bank-and-hiriyur-urban-cooperative-banks-licence-cancelled/73130.html" },
  { title: "RBI cancels banking licence of Colour Merchants Co-op Bank, Ahmedabad", publication: "Indian Cooperative, 17 April 2025", url: "https://www.indiancooperative.com/from-states/ahmedabad-rbi-cancels-banking-licence-of-colour-merchants-co-op-bank/" },
  { title: "RBI Cancels Sarvodaya Commercial Co-operative Bank's Licence", publication: "The420.in, 15 November 2024", url: "https://the420.in/rbi-sarvodaya-cooperative-bank-licence-cancelled-depositor-protection/" },
  { title: "Nirav Modi case: How PNB was defrauded of ₹11,400 crore", publication: "Business Today, 15 February 2018", url: "https://www.businesstoday.in/sectors/banks/nirav-modi-case-pnb-fraud-11400-crore-scam-ed-cbi-raid/story/270708.html" },
  { title: "Punjab National Bank Scam — timeline and actors", publication: "Wikipedia (validates BS/BT primary reporting)", url: "https://en.wikipedia.org/wiki/Punjab_National_Bank_Scam" },
  { title: "What is the PNB Scam", publication: "Business Standard, 14 February 2018", url: "https://www.business-standard.com/about/what-is-pnb-scam" },
  { title: "CBI files 3 fresh FIRs against Mehul Choksi in ₹6,700 cr fraud case", publication: "Outlook India, 28 May 2022", url: "https://www.outlookindia.com/national/pnb-fraud-case-cbi-files-3-fresh-firs-against-mehul-choksi-in-over-rs-6-700-cr-fraud-case-news-245689" },
  { title: "Who is Mehul Choksi?", publication: "Business Standard, 15 April 2025", url: "https://www.business-standard.com/about/who-is-mehul-choksi" },
  { title: "SLBC Gujarat 182nd Meeting Agenda (June 2024 banking parameters)", publication: "State Level Bankers' Committee Gujarat / Bank of Baroda, August 2024", url: "https://slbcgujarat.in/wp-content/uploads/2024/08/182-SLBC-Agenda-Final.pdf" },
  { title: "Credit-Deposit Ratio reaches a high of 80% as RBI Governor flags concerns", publication: "FACTLY, 22 August 2024", url: "https://factly.in/data-credit-deposit-ratio-cdr-reaches-a-high-of-80-as-rbi-governor-flags-concerns/" },
  { title: "Credit-Deposit Ratio of Scheduled Commercial Banks in Gujarat (Place of Sanction vs Utilisation)", publication: "Indiastat, December 2024", url: "https://www.indiastat.com/gujarat-state/data/banks-and-financial-institutions/credit-deposit-c-d-ratio" },
  { title: "GIFT City's IFSC banking assets cross USD 106 billion", publication: "The Tribune, 18 February 2026", url: "https://www.tribuneindia.com/news/business/gift-citys-ifsc-banking-assets-surge-over-7x-in-five-years-cross-usd-106-billion/" },
  { title: "The GIFT City Advantage — EY-HSBC report on IFSC banking 2024-25", publication: "EY India, December 2025", url: "https://www.ey.com/content/dam/ey-unified-site/ey-com/en-in/newsroom/2025/12/ey-the-gift-city-advantage-doing-business-in-india-s-international-financial-services-centre.pdf" },
  { title: "Banking in GIFT IFSC (April 2024 baseline report)", publication: "PwC India, 15 April 2024", url: "https://www.pwc.in/assets/pdfs/banking-in-gift-ifsc.pdf" },
  { title: "India's gold imports surge to record $71.98 bn in FY26", publication: "Business Standard, 13 May 2026", url: "https://www.business-standard.com/economy/news/india-s-gold-policy-trap-cut-duty-to-curb-smuggling-raise-to-save-rupee-126051301012_1.html" },
  { title: "India's goods trade deficit October 2025 — gold imports surge 200%", publication: "CNBC, 18 November 2025", url: "https://www.cnbc.com/2025/11/18/indias-goods-trade-deficit-october-record-high-tariffs-gold-imports-.html" },
  { title: "Job losses, factory closures pushing Surat's diamond workers to the edge — 71 suicides in 18 months", publication: "The Print, 25 November 2024", url: "https://theprint.in/india/job-losses-factory-closures-pushing-surats-diamond-workers-to-the-edge-71-suicides-in-18-months/2339805/" },
  { title: "US tariffs ruin education dreams for children in India's diamond hub", publication: "Al Jazeera, 9 December 2025", url: "https://www.aljazeera.com/economy/2025/12/9/us-tariffs-ruin-education-dreams-for-children-in-indias-diamond-hub" },
  { title: "SBI's total exposure to Adani Group at ₹27,000 crore", publication: "Business Today, 3 February 2023", url: "https://www.businesstoday.in/latest/corporate/story/adani-hindenburg-row-sbis-total-exposure-to-adani-group-is-09-of-overall-loan-book-says-chairman-368869-2023-02-03" },
  { title: "India's LIC and public sector banks are reassessing Adani stakes", publication: "Quartz India, 9 February 2023", url: "https://qz.com/indias-lic-and-public-banks-reassess-adani-stakes-1850052061" },
  { title: "To pacify stakeholders, top banks declare their exposure to Adani Group", publication: "Business Standard, 7 February 2023", url: "https://www.business-standard.com/amp/article/companies/to-pacify-stakeholders-top-banks-declare-their-exposure-to-adani-group-123020700508_1.html" },
  { title: "A timeline of the crises that brought India's $370 billion shadow banking sector to its knees", publication: "Quartz India, 4 June 2020", url: "https://qz.com/india/1860466/how-indias-nbfc-crisis-deepened-from-ilfs-defaults-to-covid-19" },
  { title: "The NBFC Real Estate Crisis After IL&FS Defaults", publication: "Moneylife, 16 September 2019", url: "https://www.moneylife.in/article/the-nbfc-real-estate-crisis-after-ilfs-defaults-what-why-and-what-next/55845.html" },
]

const spySections = [
  { id: 'cooperative-bank-graveyard', label: 'UCB Graveyard' },
  { id: 'lou-heist-palanpur-to-pnb', label: 'PNB LoU Heist' },
  { id: 'cd-ratio-gap', label: 'CD-Ratio Gap' },
  { id: 'gift-city-booking-centre', label: 'GIFT Mirage' },
  { id: 'diamond-adani-gold-triangle', label: 'Risk Triangle' },
]

export default function Banking() {
  const [showGov, setShowGov] = useLocalStorageToggle('showGovResponse', false)

  return (
    <main className="w-full max-w-5xl mx-auto px-6 pt-32 pb-32 space-y-24">
      <ScrollSpy sections={spySections} />

      {/* Hero */}
      <section className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-4 text-crimson font-semibold tracking-widest text-sm mb-4">
            <span>PILLAR 14</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>EXTRACTIVE FINANCE</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 leading-tight">
            Banking & the <span className="italic text-crimson">Extractive Periphery</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat manufactures India's largest banking frauds — <strong className="font-semibold text-gray-900">Madhavpura (₹1,200 cr), Nirav Modi-PNB (₹14,357 cr)</strong> — and warehouses 90% of the world's cut diamonds, yet its banks lend less per ₹100 of deposits than Tamil Nadu or Maharashtra.<Ref n={2} /><Ref n={11} /> GIFT City advertises USD 106 billion in "assets" against just USD 8 billion in customer deposits.<Ref n={19} /><Ref n={20} /> The state is a savings pool, a fraud factory, and a derivative booking centre — not a banking ecosystem.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* ═══ Section 1: Cooperative Bank Graveyard ═══ */}
        <Section icon={<Landmark className="w-8 h-8 text-amber-600" />} title="The Cooperative Bank Graveyard">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="₹1,200 cr" label="MMCB Collapse (2001)" color="crimson" />
            <StatBox value="17 yrs" label="Wait for Depositors" color="red" />
            <StatBox value="~100" label="UCBs Shut Post-MMCB" color="purple" />
          </div>

          <LollipopChart
            title="Deposit Base of Collapsed Gujarat Cooperative Banks (₹ crore)"
            caption="Figure 1: The cooperative graveyard ranked by deposits at collapse. MMCB (2001) dwarfs everything that followed — but the steady drip of liquidations from 2003 to 2025 shows a system that never recovered. Sources: Business Standard 2012, Moneylife 2012, 2024."
            data={[
              { name: 'MMCB (2001)', value: 1200, highlight: true },
              { name: 'Visnagar Nagrik (2003)', value: 450 },
              { name: 'Charotar Nagrik (2003)', value: 270 },
              { name: 'General Co-op (2003)', value: 67 },
              { name: 'Shree Mahalaxmi (2024)', value: 25 },
              { name: 'Colour Merchants (2025)', value: 15 },
            ]}
            valueSuffix=" cr"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Madhavpura — the Bank a Stockbroker Ate" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                On 13 March 2001 the RBI froze Madhavpura Mercantile Co-op Bank, Ahmedabad — Gujarat's largest UCB. Stockbroker Ketan Parekh, also <strong className="text-gray-900">a director of the bank</strong>, had drawn ₹1,200 crore in pay orders to fund the K-10 share manipulation scheme.<Ref n={2} /><Ref n={3} /> The legal cap on broker-lending at the time was ₹15 crore.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Gross NPAs hit 88.2%; deposit erosion 90.9%. Net worth at licence cancellation in 2012: <strong className="text-gray-900">NEGATIVE ₹1,316 crore</strong>.<Ref n={3} /><Ref n={5} /> Total recovery from Parekh by 2004: ₹6 crore.<Ref n={1} />
              </p>
            </DataCard>

            <DataCard title="The 17-Year Depositor Wait">
              <p className="text-gray-600 mb-4 leading-relaxed">
                MMCB held the savings of <strong className="text-gray-900">45,000 small depositors</strong>. They were repaid the ₹2-lakh insurance limit only in <strong className="text-gray-900">2018 — seventeen years</strong> after the collapse.<Ref n={4} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Contagion was just as quiet: 250 other cooperative banks held ~₹800 cr in inter-bank deposits at MMCB. Gujarat UCB deposits dropped by ₹3,000+ cr in the years after.<Ref n={2} /> The system never fully rebuilt — Sarvodaya Co-op (Nov 2024), Shree Mahalaxmi (Jan 2024), Colour Merchants Ahmedabad (Apr 2025) are the latest entries.<Ref n={8} /><Ref n={9} /><Ref n={10} />
              </p>
            </DataCard>
          </div>
        </Section>

        {/* ═══ Section 2: PNB LoU Heist ═══ */}
        <Section icon={<ScrollText className="w-8 h-8 text-rose-600" />} title="The LoU Heist — Palanpur to PNB">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="₹14,357 cr" label="Total Fraud Size" color="crimson" />
            <StatBox value="49x" label="PNB Q3-FY18 Net Profit" color="red" />
            <StatBox value="2 days" label="Modi's Lead Over PNB Complaint" color="purple" />
          </div>

          <DataCard title="India's Largest Banking Fraud — Born in Palanpur, Booked in Mumbai" alert={true}>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Nirav Modi, born in Palanpur (Banaskantha), and his uncle Mehul Choksi (Gitanjali Gems, 4,000 stores) orchestrated <strong className="text-gray-900">₹14,357 crore</strong> in fraudulent Letters of Undertaking issued by PNB's Brady House branch to overseas branches of Allahabad, Axis, and Union Bank — entirely bypassing PNB's core banking system. Loans were rolled by issuing fresh LoUs to repay the old ones.<Ref n={11} /><Ref n={13} />
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong className="text-gray-900">Modi fled India on 1 January 2018; Choksi on 7 January</strong> — both BEFORE PNB filed its CBI complaint on 29 January.<Ref n={12} /> Moody's downgraded PNB from Baa3 to Ba1; India Ratings cut it from IND AAA to IND AA+.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Three fresh CBI FIRs in 2022 added <strong className="text-gray-900">₹6,746 crore</strong> in losses across a 28-bank ICICI consortium, a 9-bank PNB consortium, and Gili India.<Ref n={14} /> Choksi was arrested in Antwerp in April 2025; the Belgian Court of Appeals rejected his extradition appeal in October 2025.<Ref n={15} /> RBI banned LoUs entirely in March 2018 — the instrument was deemed structurally unsafe.<Ref n={12} />
            </p>
          </DataCard>

          <ComparisonTable
            title="The PNB Fraud — by the Numbers"
            columns={[
              { key: 'amount', label: 'Amount' },
              { key: 'context', label: 'Context' },
              { key: 'status', label: 'Status' },
            ]}
            rows={[
              { state: 'Primary LoU fraud', amount: '₹14,356.84 cr', context: 'PNB Brady House branch, Mumbai', status: 'CBI complaint Jan 2018' },
              { state: 'Choksi fresh FIRs (2022)', amount: '+₹6,746 cr', context: 'ICICI + PNB consortia + Gili India', status: 'Pending trial' },
              { state: 'PNB Q3-FY18 profit', amount: '₹296 cr', context: 'Fraud = 49x profit', status: 'Stock down 12% same day' },
              { state: 'Modi extradition', amount: '—', context: 'Arrested London 2019', status: 'UK approved; SC India pending' },
              { state: 'Choksi extradition', amount: '—', context: 'Arrested Antwerp Apr 2025', status: 'Appeal rejected Oct 2025' },
            ]}
            highlightState="Primary LoU fraud"
          />
        </Section>

        {/* ═══ Section 3: CD Ratio Gap ═══ */}
        <Section icon={<TrendingDown className="w-8 h-8 text-blue-600" />} title="Collected Here, Lent Elsewhere — the CD-Ratio Gap">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="80%" label="All-India CD Ratio (Mar 2024)" color="blue" />
            <StatBox value="< Avg" label="Gujarat CD Ratio" color="crimson" />
            <StatBox value="15%" label="Gujarat BCs IIBF-Certified" color="red" />
          </div>

          <DataCard title="Stable at a Lower Level" alert={true}>
            <p className="text-gray-600 mb-4 leading-relaxed">
              India's all-bank credit-deposit ratio hit <strong className="text-gray-900">80% in March 2024 — the highest since 2005</strong>.<Ref n={17} /> Peer-reviewed work on western India places Gujarat <em>below</em> the national average and well behind Tamil Nadu and Maharashtra — described in academic literature as "stable at a lower level."
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The official metric to watch is <strong className="text-gray-900">Place of Sanction vs Place of Utilisation</strong>. Credit can be sanctioned in Gujarat to a Gujarat-domiciled corporate, then deployed at a plant in Maharashtra, Tamil Nadu, or Odisha. The SLBC Gujarat 182nd Agenda (June 2024) discloses this gap; Indiastat publishes the year-by-year series.<Ref n={16} /><Ref n={18} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              On financial inclusion, the same SLBC agenda admits: of Gujarat's 65,643 Banking Correspondents, only <strong className="text-gray-900">9,578 (15%) are IIBF-certified</strong>.<Ref n={16} /> The deposits are mobilised; the quality of the last-mile service is not.
            </p>
          </DataCard>
        </Section>

        {/* ═══ Section 4: GIFT City Mirage ═══ */}
        <Section icon={<Building className="w-8 h-8 text-purple-600" />} title="GIFT City — A USD 106 Billion Booking Centre, USD 8 Billion Bank">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="$106.7 B" label="GIFT-IFSC 'Assets'" color="crimson" />
            <StatBox value="$7.9 B" label="Actual Customer Deposits" color="red" />
            <StatBox value="7.6x" label="Asset Growth (5.5 yrs)" color="teal" />
          </div>

          <LollipopChart
            title="GIFT-IFSC Banking 'Asset' Composition — Sept 2025 (USD billion)"
            caption="Figure 2: GIFT's headline 'assets' are dominated by derivative notionals and interbank placements booked at the IFSC for tax arbitrage. Real customer deposits are a rounding error. Source: EY-HSBC GIFT City Advantage report, December 2025."
            data={[
              { name: 'Derivative notionals', value: 198 },
              { name: 'Trade finance / loans', value: 70, highlight: true },
              { name: 'Interbank / placements', value: 24 },
              { name: 'Customer deposits', value: 8 },
              { name: 'Investments', value: 6 },
            ]}
            valueSuffix=" B"
          />

          <DataCard title="The Scale Dishonesty" alert={true}>
            <p className="text-gray-600 mb-4 leading-relaxed">
              GIFT-IFSC's banking assets crossed <strong className="text-gray-900">USD 106.7 billion in February 2026</strong> — a 7.6x jump from USD 14 bn in September 2020. 37 IBUs (20 foreign + 17 domestic).<Ref n={19} /> But the EY-HSBC report breaks down the line items: <strong className="text-gray-900">derivative notional outstandings of USD 198 bn</strong>, interbank placements USD 24 bn, trade finance + commercial loans USD 70 bn — <em>most of the trade-finance book is foreign-branch lending rebooked to GIFT</em> to capture tax arbitrage on ECB-style transactions.<Ref n={20} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              Actual customer deposits at GIFT IBUs: <strong className="text-gray-900">USD 7.9 billion (Sept 2025)</strong>. The entire deposit base of all GIFT-IFSC banks combined is smaller than a single mid-sized Indian PSB's branch network.<Ref n={20} /><Ref n={21} /> Genealogical irony: GIFT City was originally co-developed by IL&FS — the firm whose September 2018 default triggered the NBFC crisis.<Ref n={29} />
            </p>
          </DataCard>
        </Section>

        {/* ═══ Section 5: Diamond-Adani-Gold Triangle ═══ */}
        <Section icon={<Gem className="w-8 h-8 text-emerald-600" />} title="The Diamond–Adani–Gold Triangle">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="71+" label="Surat Diamond Suicides (18 mo)" color="crimson" />
            <StatBox value="₹74,000 cr" label="LIC's Adani Equity Exposure" color="red" />
            <StatBox value="$72 B" label="India Gold Imports FY26" color="yellow" />
          </div>

          <LollipopChart
            title="PSB & LIC Exposure to Adani Group (₹ crore)"
            caption="Figure 3: LIC's equity exposure dwarfs every bank — and is concentrated in three Adani entities (Enterprises, Ports, Total Gas). SBI's 0.88%-of-loan-book disclosure obscures the systemic risk concentration when LIC + PSBs are aggregated. Source: Business Today Feb 2023, Quartz India Feb 2023, Business Standard Feb 2023."
            data={[
              { name: 'LIC (equity)', value: 74000, highlight: true },
              { name: 'SBI', value: 27000 },
              { name: 'PNB', value: 7000 },
              { name: 'Bank of Baroda', value: 5380 },
            ]}
            valueSuffix=" cr"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Surat: When Banks Pull, Workers Hang" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Surat polishes <strong className="text-gray-900">~90% of the world's diamonds</strong>. Exports collapsed from USD 23 bn (2022) to ~USD 12 bn (2024) — a 48% drop, then a Trump 50% tariff in 2025 cut US shipments from USD 5.93 bn (2023) to ~USD 2.42 bn run-rate.<Ref n={24} /> 400,000 workers laid off or on reduced hours; even Kiran Gems (50,000 workers) imposed forced vacation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Print's November 2024 ground report counted <strong className="text-gray-900">71 suicides in 18 months</strong>; the Al Jazeera December 2025 update places the rolling figure above 100. The mechanism is debt: workers carrying ₹3–5 lakh personal loans against ₹15,000–25,000 monthly salaries; EMIs of ₹20,000 against frozen wages and zero gratuity.<Ref n={23} /><Ref n={24} />
              </p>
            </DataCard>

            <DataCard title="Concentration Risk: One Group, Multiple Lenders">
              <p className="text-gray-600 mb-4 leading-relaxed">
                SBI's Adani exposure of <strong className="text-gray-900">₹27,000 crore is 0.88% of its loan book</strong> — the figure publicly disclosed during the Hindenburg-induced panic of February 2023.<Ref n={25} /> Bank of Baroda's CEO confirmed BoB's ₹5,380 cr exposure and said it would <em>continue</em> lending.<Ref n={27} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                The deeper concentration is at LIC: <strong className="text-gray-900">~₹74,000 crore = 8% of its equity AUM</strong>, in three Adani entities (4.23% of Adani Enterprises, 9.14% of Adani Ports, 5.96% of Adani Total Gas).<Ref n={26} /><Ref n={27} /> Hindenburg's January 2023 report wiped over USD 100 bn off seven Adani stocks; LIC's mark-to-market loss was a portfolio-level shock that the state insurer absorbed without a public stress test.
              </p>
            </DataCard>
          </div>

          <DataCard title="The Gold Trap">
            <p className="text-gray-600 mb-4 leading-relaxed">
              India's gold imports hit a <strong className="text-gray-900">record USD 71.98 bn in FY26</strong> (vs USD 58 bn FY25, USD 45.54 bn FY24).<Ref n={22} /> Volumes actually fell — 721t (FY26) vs 757t (FY25) vs 795t (FY24) — the entire rise is price-driven. Gold is now <strong className="text-gray-900">9–11% of total merchandise imports</strong>, the biggest secondary driver of India's current account deficit after crude.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Q3-FY26 trade deficit hit a record USD 93.6 bn partly on October 2025's 200% YoY gold import surge.<Ref n={23} /> Surat sits inside this loop: one of five Indian jewellery hubs, sharing a Common Facility Centre with Mumbai's SEEPZ — yet the financing rails are tightening exactly when global demand is softest.
            </p>
          </DataCard>
        </Section>

        {/* ═══ Counter-argument ═══ */}
        <Section icon={<Coins className="w-8 h-8 text-gray-600" />} title="The Debate">
          <div>
            <div className="flex justify-end mb-4 pr-2 sm:pr-4">
              <GovResponseToggle checked={showGov} onChange={setShowGov} />
            </div>
            <CounterArgument showGov={showGov} messages={[
              { from: 'raju', text: "Bhai, Gujarat banking is rock-solid. MMCB was 25 years ago. Look at our debt-to-GSDP, lowest among 21 large states. What is the problem?" },
              { from: 'priya', text: "MMCB depositors waited **17 years** to get back their ₹2 lakh. ₹6 crore was recovered out of ₹1,200 crore. That isn't ancient history — Shree Mahalaxmi (Jan 2024), Sarvodaya (Nov 2024), Colour Merchants (Apr 2025) are this year's cancellations.", source: 'DNA India 2018 · Moneylife 2024 · Indian Cooperative 2025' },
              { from: 'raju', text: "Okay, but PNB-Nirav Modi was a Mumbai branch failure, not Gujarat banking. Don't blame us." },
              { from: 'priya', text: "Modi was born in **Palanpur**. Choksi runs Gitanjali — a Gujarati gems empire. The fraud was an export of Gujarat's diamond-trade trust networks into PNB's SWIFT system. ₹14,357 crore. 49x PNB's quarterly profit. Both fled before the complaint was filed.", source: 'Business Today 2018 · Wikipedia PNB Scam' },
              { from: 'raju', text: "GIFT City has $106 billion in assets! That's bigger than Singapore was at this stage." },
              { from: 'priya', text: "**$8 billion** are real customer deposits. **$198 billion** are derivative notionals. The other 'assets' are foreign branches rebooking trades for tax arbitrage. Singapore in the 1970s built deposit-taking banks. GIFT is a booking centre.", source: 'EY-HSBC GIFT City Advantage Dec 2025' },
              { from: 'raju', text: "SBI's Adani exposure is 0.88% of its book. The RBI itself said the system is resilient." },
              { from: 'priya', text: "SBI is one lender. LIC is at **8% of equity AUM = ₹74,000 crore**, second-largest holding. PNB ₹7,000 cr, BoB ₹5,380 cr. Aggregate state-owned exposure to one promoter group is the concentration story — not a single bank's loan book ratio.", source: 'Quartz Feb 2023 · Business Standard Feb 2023' },
              { from: 'gov', text: `GIFT-IFSC has emerged as a regulated, world-class international financial centre under IFSCA, with USD 106 bn in banking assets, robust dual-regulator oversight, and a transparent compliance regime that has attracted 37 banking units in five years.`, source: `IFSCA / Government of Gujarat` }
            ]} />
          </div>
        </Section>

      </div>

      <SourceList sources={sources} />
    </main>
  )
}
