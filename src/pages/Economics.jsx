import { motion } from 'framer-motion'
import { TrendingUp, AlertTriangle, Landmark, Globe, CheckCircle, Building2 } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { LollipopChart } from '../components/charts/LollipopChart'
import { SlopeChart } from '../components/charts/SlopeChart'
import { ErosionPillar } from '../components/charts/ErosionPillar'
import { CounterArgument } from '../components/CounterArgument'
import { useLocalStorageToggle } from '../hooks/useLocalStorageToggle'
import { GovResponseToggle } from '../components/GovResponseToggle'
import { ComparisonTable } from '../components/ComparisonTable'
import ScrollSpy from '../components/ScrollSpy'

const spySections = [
  { id: 'the-fiscal-paradox-low-debt-low-revenue', label: 'Fiscal Paradox' },
  { id: 'central-government-fiscal-relationship', label: 'Central Transfers' },
  { id: 'diaspora-capital-gift-city-external-economic-velocity', label: 'Diaspora & GIFT' },
  { id: 'the-gift-city-paradox-global-capital-local-vacuum', label: 'GIFT Paradox' },
  { id: 'gst-collections-the-industrial-tax-gap', label: 'GST & Tax Gap' },
  { id: 'the-disinvestment-mirage-fdi-vulnerability', label: 'FDI & Disinvestment' },
  { id: 'vibrant-gujarat-summit-mous-vs-reality', label: 'Vibrant Gujarat' },
]

const sources = [
  { title: "A Macro and Fiscal Landscape of the State of Gujarat", publication: "NITI Aayog, Mar 2025", url: "https://www.niti.gov.in/sites/default/files/2025-03/Summary-Report-Gujarat.pdf" },
  { title: "Gujarat's Debt-To-GSDP Ratio Lowest Among 21 Large States", publication: "FintechBizNews", url: "https://www.fintechbiznews.com/govtregulators/gujarats-debt-to-gsdp-ratio-lowest-among-21-large-states" },
  { title: "Gujarat Budget Analysis 2024-25", publication: "PRS India", url: "https://prsindia.org/budgets/states/gujarat-budget-analysis-2024-25" },
  { title: "Evaluation of Finances of State of Gujarat — 16th Finance Commission", publication: "Finance Commission India", url: "https://fincomindia.nic.in/asset/doc/commission-reports/16th-FC/studies/evaluation/Gujarat.pdf" },
  { title: "Macro and Fiscal Landscape of the State of Gujarat (Full Report)", publication: "NITI Aayog / NCAER, 2025", url: "https://www.niti.gov.in/sites/default/files/2025-03/Macro-and-Fiscal-Landscape-of-the-State-of-Gujarat-1.pdf" },
  { title: "Outcome Evaluation of State Finances — Gujarat (15th FC)", publication: "Finance Commission India", url: "https://fincomindia.nic.in/asset/doc/commission-reports/15th-FC/reports/studies/evaluation/Outcome%20Evaluation%20of%20State%20Finances%20-%20Gujarat.pdf" },
  { title: "Indian Diaspora's Investments in GIFT City Funds Cross $7 Billion", publication: "NRI Affairs", url: "https://www.nriaffairs.com/investments-in-gift-city-funds-cross-7-billion/" },
  { title: "NRIs Sent $135.46 Billion to India in 2024-25", publication: "Abound Blog", url: "https://blog.joinabound.com/post/nris-sent-135-46-billion-to-india-in-2024-25-here-s-what-it-means" },
  { title: "The Diaspora Effect: Remittances to India Rising", publication: "IBEF", url: "https://www.ibef.org/blogs/the-diaspora-effect-driving-bilateral-ties-and-remittances-to-india" },
  { title: "How NRI Remittances Significantly Bolster India's Economy", publication: "Abound", url: "https://www.joinabound.com/blog/nri-remittances-bolster-economy/" },
  { title: "Why NRIs Should Choose India's GIFT City for Investment in 2025", publication: "Sobha Ltd", url: "https://www.sobha.com/blog/nri-invest-india-gift-city/" },
  { title: "Scholarly Research: NRI Remittances and Gujarat Economy", publication: "SRJIS, 2023", url: "https://oaji.net/articles/2023/1174-1720079546.pdf" },
  { title: "GIFT City: India's Tax And Repatriation Revolution For Global Capital: A 2026 Perspective", publication: "Mondaq, 2026", url: "https://www.mondaq.com/india/sales-taxes-vat-gst/1735786/gift-city-indias-tax-and-repatriation-revolution-for-global-capital-a-2026-perspective" },
  { title: "GIFT City vs Dubai & Singapore – India's Global Edge", publication: "Kaavya Ratna, 2025", url: "https://www.kaavyaratna.com/blogs/gift-city-vs-singapore-and-dubai-can-indias-smart-city-hub-compete" },
  { title: "GIFT City Tax Incentives 2025: Complete Business Advantage Guide", publication: "GIFT CFO, 2025", url: "https://www.giftcfo.com/post/gift-city-tax-incentives-2025-complete-business-advantage-guide" },
  { title: "GIFT City Hiring 2026: GCC Recruitment Solutions in Gujarat", publication: "RK HR Management, 2026", url: "https://www.rkhrm.com/blog/gift-city-gcc-hiring-high-value-teams/" },
  { title: "Gujarat Budget Analysis 2026-27", publication: "PRS India, 2026", url: "https://prsindia.org/budgets/states/gujarat-budget-analysis-2026-27" },
  { title: "CAG Flags Gujarat's Fiscal Paradox: 10-15% Growth Amid Declining Revenues", publication: "DeshGujarat, Mar 2026", url: "https://deshgujarat.com/2026/03/26/cag-flags-gujarats-fiscal-paradox-10-15-growth-amid-declining-revenues-overstated-surplus/" },
  { title: "Central grants to Gujarat fall to 0.53% of GSDP in 2024-25", publication: "Gujarat Samachar, 2026", url: "https://english.gujaratsamachar.com/news/gujarat/central-grants-to-gujarat-fall-to-0-53-of-gsdp-in-202425-down-13-000-cr-in-4-years-cag-11584368371.html" },
  { title: "Gujarat Drops From FDI Top Five", publication: "Vibes of India, 2026", url: "https://www.vibesofindia.com/gujarat-drops-from-fdi-top-five-but-long-term-growth-picture-holds/" },
]

export default function Economics() {
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
            <span>PILLAR 05</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 leading-tight">
            Governance & <span className="italic text-crimson">Fiscal</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat projects fiscal discipline with India's <strong className="font-semibold text-gray-900">lowest debt-to-GSDP ratio</strong>. But beneath the headline, its own tax revenue has been declining as a share of GSDP, its revenue receipts are far below the national median, and the state's economic velocity is significantly inflated by NRI diaspora capital and GIFT City's tax-exempt financial flows.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* Fiscal Overview */}
        <Section icon={<Landmark className="w-8 h-8 text-green-600" />} title="The Fiscal Paradox: Low Debt, Low Revenue">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="15.3%" label="Debt-to-GSDP (FY25)" color="green" />
            <StatBox value="5.2%" label="Own Tax Revenue / GSDP (Declining)" color="red" />
            <StatBox value="8.7%" label="Revenue Receipts / GSDP" color="crimson" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Debt Discipline — The Good">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Gujarat's debt-to-GSDP ratio continued declining — from 18.9% (2022-23) to <strong className="text-gray-900">15.3% in 2024-25</strong>, projected at 14.7% for 2026-27. This remains the lowest among India's 21 major states.<Ref n={2} /> However, CAG flagged that <strong className="text-gray-900">Gujarat's reported revenue surplus of Rs 18,943 crore is overstated by Rs 11,929 crore</strong> — because the state failed to discharge mandatory NPS contributions and Consolidated Sinking Fund obligations worth Rs 4,396 crore. The actual surplus is closer to Rs 7,000 crore.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" /> Fiscal deficit 1.9% of GSDP (FY 2024-25)<Ref n={3} /></li>
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" /> Contingent liabilities only 0.2% (2021-22)<Ref n={1} /></li>
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" /> FRBM Act compliance maintained<Ref n={5} /></li>
              </ul>
            </DataCard>

            <DataCard title="Revenue Generation — The Concern" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Own Tax Revenue (OTR) as a percentage of GSDP has <strong className="text-gray-900">consistently declined from 7.44% in 2012-13 to 4.35% in 2020-21</strong>, with only marginal recovery to 5.6% (2022-23) and further decline to <strong className="text-gray-900">5.2% in FY25, projected to hit 4.9% in FY27</strong> — now 30% below the national average for states.<Ref n={4} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                The state collects <strong className="text-gray-900">revenue receipts of just 8.7% of GSDP</strong> — compared to the median Indian state at 19.9%. Similarly, expenditure at 10.2% of GSDP is far below the median state's 24%.<Ref n={1} /> This suggests the state may be under-spending on public services relative to its economic size.
              </p>
            </DataCard>
          </div>

          <SlopeChart
            start={{ label: '2012-13', value: 7.44 }}
            end={{ label: '2026-27', value: 4.9 }}
            midpoints={[
              { label: '2016-17', value: 6.2 },
              { label: '2020-21', value: 4.35 },
              { label: '2022-23', value: 5.6 },
              { label: '2024-25', value: 5.2 },
            ]}
            unit="%"
            accentColor="#9A0007"
            title="Own Tax Revenue as % of GSDP (Declining Trend)"
            caption="15-year decline from 7.44% to 4.9% — now 30% below national average"
          />
        </Section>

        {/* Central Transfers */}
        <Section icon={<AlertTriangle className="w-8 h-8 text-yellow-600" />} title="Central Government Fiscal Relationship">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Tax Devolution & Grants">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Under the <strong className="text-gray-900">16th Finance Commission (2026-31)</strong>, Gujarat's share rose from 3.47% to <strong>3.75%</strong> — gaining Rs 4,228 crore from the revised formula that includes a new GDP-contribution criterion.<Ref n={3} /> For FY27, the state's share in central taxes is estimated at Rs 57,254 crore (+18% over FY26). However, <strong className="text-gray-900">central grants to Gujarat crashed to just 0.53% of GSDP in FY25</strong> — down from 1.68% in 2020-21, a decline of Rs 13,000 crore in absolute terms over four years.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The declining OTR/GSDP ratio means the state's <strong>dependency on central transfers is structurally increasing</strong>, even as its absolute fiscal numbers look healthy. If central devolution were reduced, Gujarat's low own-revenue base would become a visible vulnerability.<Ref n={4} />
              </p>
            </DataCard>

            <DataCard title="Future Fiscal Trajectory">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Debt sustainability analysis projects Gujarat's debt-to-GSDP ratio to continue declining under baseline scenarios.<Ref n={5} /> However, the government has projected <strong className="text-gray-900">higher fiscal deficits of 2.3% of GSDP in both 2025-26 and 2026-27</strong>.<Ref n={3} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Outstanding public debt is estimated at 15.3% of GSDP for FY 2024-25, roughly flat year-over-year.<Ref n={3} /> The state's fiscal space remains tight given its below-median revenue generation.
              </p>
            </DataCard>
          </div>

          <LollipopChart
            data={[
              { name: 'Kerala', value: 25.1 },
              { name: 'Median State', value: 19.9 },
              { name: 'Tamil Nadu', value: 16.8 },
              { name: 'Gujarat', value: 8.7, highlight: true },
            ]}
            valueSuffix="%"
            accentColor="#0891B2"
            highlightColor="#D32F2F"
            title="Revenue Receipts as % of GSDP (State Comparison)"
            caption="Gujarat collects less than half the median state's revenue relative to economic size"
            sortDescending={true}
          />

          {/* Time-Series: Central Grants as % of GSDP — Erosion Pillar */}
          <ErosionPillar
            strata={[
              { label: 'FY21', value: 1.68 },
              { label: 'FY22', value: 1.32 },
              { label: 'FY23', value: 1.05 },
              { label: 'FY24', value: 0.78 },
              { label: 'FY25', value: 0.53, note: 'a stub' },
            ]}
            unit="%"
            title="Central Grants to Gujarat as % of GSDP (The Pillar Erodes)"
            caption="A Rs 13,000 crore decline in 4 years — from 1.68% to 0.53% of GSDP. Source: CAG / Gujarat Samachar"
            lossLabel="−Rs 13,000 cr · 68% of the pillar gone"
          />

          {/* Time-Series: Debt-to-GSDP Ratio */}
          <SlopeChart
            start={{ label: 'FY20', value: 19.8 }}
            end={{ label: 'FY27', value: 14.7 }}
            midpoints={[
              { label: 'FY21', value: 21.2 },
              { label: 'FY22', value: 19.5 },
              { label: 'FY24', value: 16.1 },
              { label: 'FY25', value: 15.3 },
            ]}
            unit="%"
            accentColor="#059669"
            title="Debt-to-GSDP Ratio: Gujarat's Declining Trajectory"
            caption="The one genuinely positive fiscal metric — debt-to-GSDP remains India's lowest. Source: PRS India / FintechBizNews"
          />
        </Section>

        {/* NRI & GIFT City */}
        <Section icon={<Globe className="w-8 h-8 text-blue-600" />} title="Diaspora Capital & GIFT City: External Economic Velocity">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            India received <strong className="text-gray-900">$136 billion in remittances in FY25</strong>, the world's highest — a 14% jump over the previous year.<Ref n={8} /> Gujaratis make up over 60% of all Indians in North America, and the state accounts for 16% of all investments in India.<Ref n={12} />
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="NRI Deposits & Real Estate">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Gujarat has more than <strong className="text-gray-900">8 lakh NRI accounts</strong> with total deposits exceeding <strong>$40 billion</strong>.<Ref n={12} /> The flow of remittances is so substantial that Madhapur village in Gujarat is ranked among the wealthiest in Asia.<Ref n={12} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                NRIs contributed approximately <strong className="text-gray-900">$3.1 billion annually</strong> to Indian real estate, with NRI investment share rising from 10-12% in 2019 to 17-19% in 2024.<Ref n={10} /> This external capital velocity inflates local consumption, real estate prices, and small enterprise development.
              </p>
            </DataCard>

            <DataCard title="GIFT City: The Tax-Exempt Hub">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Investments in Gujarat International Finance Tec-City (GIFT City) funds have crossed <strong className="text-gray-900">$7 billion</strong>, with projections to exceed $100 billion by 2030.<Ref n={7} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                GIFT City offers <strong>100% corporate income tax exemption for 10 of 15 years</strong>, zero GST on IFSC transactions, and full capital gains exemption on listed securities.<Ref n={11} /> Employment is projected to grow from 25,000 to 150,000 in 5 years, with 500,000+ jobs by 2030.<Ref n={11} /> While this attracts global capital, the tax exemptions mean this economic activity generates minimal state revenue.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* The GIFT City Paradox */}
        <Section icon={<Building2 className="w-8 h-8 text-purple-600" />} title="The GIFT City Paradox: Global Capital, Local Vacuum">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            GIFT City hosts over <strong className="text-gray-900">1,034 registered entities</strong> (up from 82 in 2020 — a 12x surge in 5 years), manages <strong className="text-gray-900">$26.3 billion in fund commitments</strong>, and its banking assets have crossed <strong className="text-gray-900">$100 billion</strong>. It now ranks 43rd in the Global Financial Centres Index 2025, climbing 9 positions.<Ref n={13} /> Yet this financial supernova operates in a near-total tax vacuum — and the <strong className="text-gray-900">Union Budget 2026 doubled the IFSC tax holiday from 10 to 20 consecutive years</strong> (within a 25-year block), effectively granting tax exemptions for an entity's entire operational life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="1,000+" label="Registered IFSC Entities" color="purple" />
            <StatBox value="$12B" label="AIF Assets (Jan 2026)" color="purple" />
            <StatBox value="~0%" label="Effective State Tax Rate" color="red" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The Tax Exemption Architecture">
              <p className="text-gray-600 mb-4 leading-relaxed">
                GIFT City IFSC units now enjoy a <strong className="text-gray-900">100% income tax exemption for 20 consecutive years out of 25</strong> (doubled from the original 10/15 in Budget 2026) under Section 80LA. Even outside this window, the Minimum Alternate Tax is just 9% — compared to 15-22% for domestic firms.<Ref n={15} /> All transactions on IFSC exchanges are exempt from Securities Transaction Tax, Commodity Transaction Tax, GST, and stamp duty.<Ref n={13} />
              </p>
              <p className="text-gray-600 leading-relaxed">
                Management fees, advisory fees, and transaction costs that attract <strong className="text-gray-900">18% GST in mainland India are entirely exempt inside the IFSC</strong>.<Ref n={15} /> Budget 2025 extended these benefits through March 2030 and expanded them to cover OTC derivatives, ETF relocations, and ship leasing SPVs. The result: a financial centre processing billions in transactions that generates effectively zero state-level tax revenue.
              </p>
            </DataCard>

            <DataCard title="Scale vs. Comparable Hubs" alert={true}>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Dubai's DIFC hosts over <strong className="text-gray-900">3,000 firms</strong> and offers a 0% tax rate renewable for 50 years. Singapore, with corporate tax at 17%, compensates through volume — it ranks among the world's top 5 financial centres.<Ref n={14} /> GIFT City's 1,000+ entities are growing fast, but its tax concessions are among the most aggressive globally.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The critical difference: Dubai and Singapore are sovereign city-states that capture indirect economic benefits (visa fees, real estate, consumption taxes) from their financial hubs. Gujarat, as a sub-national state, captures almost <strong className="text-gray-900">none of these spillovers</strong> — GIFT City's regulatory regime is controlled by the central IFSCA, and the tax exemptions are granted by the Union government.<Ref n={14} />
              </p>
            </DataCard>
          </div>

          <DataCard title="The Employment Mirage">
            <p className="text-gray-600 mb-4 leading-relaxed">
              GIFT City currently employs approximately <strong className="text-gray-900">25,000 professionals</strong>, with projections to scale to 150,000 within five years.<Ref n={16} /> But the talent composition reveals a structural mismatch. The rapid expansion of Global Capability Centres (GCCs) has outpaced the availability of qualified local professionals, creating what recruiters describe as intense "offer competition" — companies hiring from Mumbai, Bangalore, and NRI returnee pools rather than from Gujarat's own workforce.<Ref n={16} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              Most roles demand high-skill profiles: risk analysts, compliance officers, KYC/AML specialists, and professionals experienced in communicating with global stakeholders and following international processes.<Ref n={16} /> GIFT City professionals earn <strong className="text-gray-900">40-60% less than their Singapore counterparts</strong>, positioning the hub as a cost-arbitrage play for global firms rather than a wealth-creation engine for Gujaratis.<Ref n={14} /> The state provides PF reimbursements and hiring subsidies to attract companies — effectively paying firms to bring in workers who generate exempt income on exempt transactions.
            </p>
          </DataCard>
        </Section>

      </div>

      {/* GST & Industrial Tax */}
      <Section icon={<Landmark className="w-8 h-8 text-blue-600" />} title="GST Collections & The Industrial Tax Gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCard title="GST Revenue: Impressive But Misleading">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Gujarat's gross GST collection was approximately <strong className="text-gray-900">Rs 95,000 crore in FY25</strong>, ranking 4th nationally after Maharashtra, Karnataka, and Tamil Nadu. However, as a consumption-based tax under the destination principle, a significant portion of Gujarat's manufacturing output generates GST revenue in <strong>consuming states rather than the producing state</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This creates a paradox for a manufacturing powerhouse: Gujarat produces goods but <strong>doesn't fully capture the tax benefit of that production</strong>. Petroleum products — Gujarat's largest industrial sector — remain outside GST entirely, further shrinking the state's tax base from its most productive industry.
            </p>
          </DataCard>

          <DataCard title="Off-Budget Borrowings: The Hidden Debt" alert={true}>
            <p className="text-gray-600 mb-4 leading-relaxed">
              While Gujarat's headline debt-to-GSDP ratio of 18.2% looks pristine, this excludes borrowings by state public sector enterprises. Gujarat's PSUs — including GUVNL, GWIL, GSPC, and various SPVs — carry <strong className="text-gray-900">additional off-budget liabilities</strong> that don't appear in the state's fiscal accounts.<Ref n={4} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              The 16th Finance Commission study specifically flagged the need to assess these <strong>quasi-fiscal activities</strong> — SPVs that borrow on the state's implicit guarantee but whose debt remains off the official balance sheet. When including these obligations, Gujarat's effective debt burden is significantly higher than the headline number suggests.<Ref n={4} />
            </p>
          </DataCard>
        </div>
      </Section>

      {/* Disinvestment & FDI */}
      <Section icon={<TrendingUp className="w-8 h-8 text-orange-600" />} title="The Disinvestment Mirage & FDI Vulnerability">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCard title="PSU Disinvestment: Zero Receipts" alert={true}>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Gujarat budgeted <strong className="text-gray-900">Rs 17,500 crore per year from PSU disinvestment</strong> in both FY24 and FY25 but received <strong className="text-gray-900">zero in both years</strong>. In FY26, the target was raised to Rs 19,700 crore, then revised down to Rs 5,000 crore. For FY27, the budget again projects Rs 20,000 crore — a pattern of systematically inflated non-debt capital receipts.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Meanwhile, <strong>24 of 97 state PSUs report negative net worth</strong>. The committed expenditure — salaries (Rs 60,427 cr) + pensions (Rs 26,530 cr) + interest (Rs 28,025 cr) + subsidies (Rs 26,212 cr) — consumes <strong className="text-gray-900">65% of all revenue receipts</strong>, leaving only 35% for developmental priorities.
            </p>
          </DataCard>

          <DataCard title="FDI: Dropped Out of Top 3">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Gujarat received <strong className="text-gray-900">$5.71 billion in FDI in FY25</strong> (ranked 3rd nationally). But in H1 FY26, inflows fell to just <strong className="text-gray-900">$2.39 billion</strong> — dropping the state from the top 3 as US tariff impacts hit core sectors (textiles, chemicals, diamond processing).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cumulatively since 2000, Gujarat accounts for 15% of India's total FDI equity at $49.9 billion. But the declining trend — combined with falling NRI deposit inflows (down 26% nationally in 2025, with Gujaratis comprising 60%+ of North American Indians) — signals vulnerability in external capital flows that have historically inflated the state's economic velocity.
            </p>
          </DataCard>
        </div>
      </Section>

      {/* Vibrant Gujarat Reality */}
      <Section icon={<Globe className="w-8 h-8 text-green-600" />} title="Vibrant Gujarat Summit: MoUs vs Reality">
        <DataCard title="The MoU Conversion Gap">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/3 space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                The Vibrant Gujarat Global Summit has attracted headline-grabbing MoU values — <strong className="text-gray-900">Rs 26.33 lakh crore for 41,299 projects</strong> in 2024 alone. However, Gujarat's own Socio-Economic Review (2011/12) revealed that <strong className="text-gray-900">just ~1% of investments promised at the 2011 summit had materialized</strong>, with another 12% in "implementation stage." Recent estimates range from 1-18% depending on methodology.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A large proportion of signed MoUs are renewal commitments, expansions of existing operations, or intent-based agreements that never materialize. The true FDI inflow to Gujarat — while significant — is a fraction of the summit's announced figures. This gap between announcement and execution inflates Gujarat's investment narrative while masking the actual pace of industrial diversification.
              </p>
            </div>
            <div className="md:w-1/3 w-full bg-green-100/50 p-6 rounded-xl border border-green-200 flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-green-600 mb-2">~1-13%</span>
              <span className="text-sm text-green-800 uppercase tracking-widest font-semibold">MoU Conversion Rate</span>
              <hr className="w-full border-green-300 my-4" />
              <span className="text-lg font-serif text-green-900">Of Rs 26.33L Cr Signed</span>
            </div>
          </div>
        </DataCard>
      </Section>

      <ComparisonTable
        title="Fiscal Comparison: Gujarat vs Major States"
        columns={[
          { key: 'debtGsdp', label: 'Debt / GSDP' },
          { key: 'otrGsdp', label: 'OTR / GSDP' },
          { key: 'revenueGsdp', label: 'Revenue / GSDP' },
          { key: 'expenditureGsdp', label: 'Expenditure / GSDP' },
        ]}
        rows={[
          { state: 'Gujarat', debtGsdp: '18.2%', otrGsdp: '5.6%', revenueGsdp: '8.7%', expenditureGsdp: '10.2%' },
          { state: 'Maharashtra', debtGsdp: '19.3%', otrGsdp: '7.1%', revenueGsdp: '12.4%', expenditureGsdp: '14.1%' },
          { state: 'Tamil Nadu', debtGsdp: '24.8%', otrGsdp: '7.8%', revenueGsdp: '16.8%', expenditureGsdp: '17.5%' },
          { state: 'Karnataka', debtGsdp: '22.1%', otrGsdp: '8.2%', revenueGsdp: '14.6%', expenditureGsdp: '15.3%' },
          { state: 'Median State', debtGsdp: '~32%', otrGsdp: '~6.5%', revenueGsdp: '19.9%', expenditureGsdp: '24.0%' },
        ]}
      />

      <div>
        <div className="flex justify-end mb-4 pr-2 sm:pr-4">
          <GovResponseToggle checked={showGov} onChange={setShowGov} />
        </div>
        <CounterArgument showGov={showGov} messages={[
        { from: 'raju', text: 'Gujarat has India\'s lowest debt-to-GSDP ratio at **18.2%**. That\'s fiscal discipline. No other state comes close.' },
        { from: 'priya', text: 'Low debt because the state barely spends on public services. Revenue receipts at **8.7%** of GSDP — the median state is at **19.9%**. That\'s not discipline, that\'s under-collection.', source: 'PRS India Budget Analysis FY27' },
        { from: 'raju', text: 'Less government spending means less waste. The private sector fills the gap more efficiently.' },
        { from: 'priya', text: 'The CAG found **Rs 11,929 Cr** of overstated surplus. Own Tax Revenue has fallen from 7.44% to **4.9%** of GSDP in a decade. Central grants crashed to **0.53%**. Who fills that gap?', source: 'CAG Gujarat Fiscal Audit FY25' },
        { from: 'raju', text: 'GST compensates for that. Gujarat is a net contributor to the national pool.' },
        { from: 'priya', text: 'GST compensation ended. And being a "net contributor" while your own revenue base erodes means you\'re subsidizing other states while under-investing in your own people. **32,000** teacher vacancies don\'t fill themselves.', source: 'NITI Aayog Macro-Fiscal Report' },
        { from: 'gov', text: `Gujarat consistently ranks among the top three states nationally for cumulative FDI inflows and attracts the highest intended investments during Vibrant Gujarat. This capital creates massive downstream employment that benefits the entire socioeconomic spectrum.`, source: `DPIIT FDI Statistics / Vibrant Gujarat 2024 Report` }
        ]} />
      </div>

      <SourceList sources={sources} />
      
    </main>
  )
}
