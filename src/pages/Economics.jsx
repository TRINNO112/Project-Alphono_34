import { motion } from 'framer-motion'
import { TrendingUp, AlertTriangle, Landmark, Globe, CheckCircle, Building2 } from 'lucide-react'
import { Section, DataCard, Ref, SourceList, StatBox } from '../components/Shared'
import { PillarChart } from '../components/PillarChart'
import { CounterArgument } from '../components/CounterArgument'
import { ComparisonTable } from '../components/ComparisonTable'

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
]

export default function Economics() {
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
            <span>PILLAR 05</span>
            <span className="hidden md:block w-8 h-px bg-crimson" />
            <span>DEPENDENCY ANALYSIS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Governance & <span className="italic text-crimson">Fiscal</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-4xl border-l-4 border-crimson pl-6 mt-10">
            Gujarat projects fiscal discipline with India's <strong className="font-semibold text-gray-900 dark:text-white">lowest debt-to-GSDP ratio</strong>. But beneath the headline, its own tax revenue has been declining as a share of GSDP, its revenue receipts are far below the national median, and the state's economic velocity is significantly inflated by NRI diaspora capital and GIFT City's tax-exempt financial flows.
          </p>
        </motion.div>
      </section>

      <div className="space-y-20">

        {/* Fiscal Overview */}
        <Section icon={<Landmark className="w-8 h-8 text-green-600 dark:text-green-500" />} title="The Fiscal Paradox: Low Debt, Low Revenue">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="18.2%" label="Debt-to-GSDP Ratio" color="green" />
            <StatBox value="5.6%" label="Own Tax Revenue / GSDP" color="red" />
            <StatBox value="8.7%" label="Revenue Receipts / GSDP" color="crimson" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Debt Discipline — The Good">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Gujarat's debt-to-GSDP ratio fell from 18.9% in 2022-23 to <strong className="text-gray-900 dark:text-white">18.2% in 2023-24</strong>, the lowest among India's 21 major states. Over the last decade, the state reduced public debt by 4.5% of GSDP — the highest reduction nationally.<Ref n={2} />
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> Fiscal deficit 1.9% of GSDP (FY 2024-25)<Ref n={3} /></li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> Contingent liabilities only 0.2% (2021-22)<Ref n={1} /></li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> FRBM Act compliance maintained<Ref n={5} /></li>
              </ul>
            </DataCard>

            <DataCard title="Revenue Generation — The Concern" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Own Tax Revenue (OTR) as a percentage of GSDP has <strong className="text-gray-900 dark:text-white">consistently declined from 7.44% in 2012-13 to 4.35% in 2020-21</strong>, recovering only marginally to 5.6% in 2022-23.<Ref n={4} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The state collects <strong className="text-gray-900 dark:text-white">revenue receipts of just 8.7% of GSDP</strong> — compared to the median Indian state at 19.9%. Similarly, expenditure at 10.2% of GSDP is far below the median state's 24%.<Ref n={1} /> This suggests the state may be under-spending on public services relative to its economic size.
              </p>
            </DataCard>
          </div>

          <PillarChart
            type="bar"
            data={[
              { name: '2012-13', value: 7.44 },
              { name: '2016-17', value: 6.2 },
              { name: '2020-21', value: 4.35 },
              { name: '2022-23', value: 5.6 },
            ]}
            title="Own Tax Revenue as % of GSDP (Declining Trend)"
            caption="A decade-long decline from 7.44% to 5.6%, with a nadir of 4.35% during COVID"
            colors={['#16A34A', '#CA8A04', '#D32F2F', '#D32F2F']}
          />
        </Section>

        {/* Central Transfers */}
        <Section icon={<AlertTriangle className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />} title="Central Government Fiscal Relationship">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="Tax Devolution & Grants">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Gujarat's share in central taxes increased from <strong className="text-gray-900 dark:text-white">3.1% under the 14th Finance Commission to 3.5% under the 15th FC</strong>.<Ref n={3} /> In 2024-25, the state's share in central taxes was estimated at Rs 42,245 crore (+1% over previous year), while grants from the Centre totalled Rs 18,783 crore (a decrease of 10%).<Ref n={3} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The declining OTR/GSDP ratio means the state's <strong>dependency on central transfers is structurally increasing</strong>, even as its absolute fiscal numbers look healthy. If central devolution were reduced, Gujarat's low own-revenue base would become a visible vulnerability.<Ref n={4} />
              </p>
            </DataCard>

            <DataCard title="Future Fiscal Trajectory">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Debt sustainability analysis projects Gujarat's debt-to-GSDP ratio to continue declining under baseline scenarios.<Ref n={5} /> However, the government has projected <strong className="text-gray-900 dark:text-white">higher fiscal deficits of 2.3% of GSDP in both 2025-26 and 2026-27</strong>.<Ref n={3} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Outstanding public debt is estimated at 15.3% of GSDP for FY 2024-25, roughly flat year-over-year.<Ref n={3} /> The state's fiscal space remains tight given its below-median revenue generation.
              </p>
            </DataCard>
          </div>

          <PillarChart
            type="bar"
            data={[
              { name: 'Gujarat', value: 8.7 },
              { name: 'Median State', value: 19.9 },
              { name: 'Kerala', value: 25.1 },
              { name: 'Tamil Nadu', value: 16.8 },
            ]}
            title="Revenue Receipts as % of GSDP (State Comparison)"
            caption="Gujarat collects less than half the median state's revenue relative to economic size"
            colors={['#D32F2F', '#6B7280', '#2563EB', '#9333EA']}
          />
        </Section>

        {/* NRI & GIFT City */}
        <Section icon={<Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />} title="Diaspora Capital & GIFT City: External Economic Velocity">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            India received <strong className="text-gray-900 dark:text-white">$136 billion in remittances in FY25</strong>, the world's highest — a 14% jump over the previous year.<Ref n={8} /> Gujaratis make up over 60% of all Indians in North America, and the state accounts for 16% of all investments in India.<Ref n={12} />
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="NRI Deposits & Real Estate">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Gujarat has more than <strong className="text-gray-900 dark:text-white">8 lakh NRI accounts</strong> with total deposits exceeding <strong>$40 billion</strong>.<Ref n={12} /> The flow of remittances is so substantial that Madhapur village in Gujarat is ranked among the wealthiest in Asia.<Ref n={12} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                NRIs contributed approximately <strong className="text-gray-900 dark:text-white">$3.1 billion annually</strong> to Indian real estate, with NRI investment share rising from 10-12% in 2019 to 17-19% in 2024.<Ref n={10} /> This external capital velocity inflates local consumption, real estate prices, and small enterprise development.
              </p>
            </DataCard>

            <DataCard title="GIFT City: The Tax-Exempt Hub">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Investments in Gujarat International Finance Tec-City (GIFT City) funds have crossed <strong className="text-gray-900 dark:text-white">$7 billion</strong>, with projections to exceed $100 billion by 2030.<Ref n={7} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                GIFT City offers <strong>100% corporate income tax exemption for 10 of 15 years</strong>, zero GST on IFSC transactions, and full capital gains exemption on listed securities.<Ref n={11} /> Employment is projected to grow from 25,000 to 150,000 in 5 years, with 500,000+ jobs by 2030.<Ref n={11} /> While this attracts global capital, the tax exemptions mean this economic activity generates minimal state revenue.
              </p>
            </DataCard>
          </div>
        </Section>

        {/* The GIFT City Paradox */}
        <Section icon={<Building2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />} title="The GIFT City Paradox: Global Capital, Local Vacuum">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            GIFT City hosts over <strong className="text-gray-900 dark:text-white">1,000 registered entities</strong> and manages <strong className="text-gray-900 dark:text-white">$12 billion in Alternative Investment Funds</strong> — a 300% year-over-year surge.<Ref n={13} /> Yet this financial supernova operates in a near-total tax vacuum: 100% income tax holidays, zero GST, zero STT, zero stamp duty. The paradox is stark — India's most ambitious financial hub sits on Gujarat's soil but contributes almost nothing to Gujarat's treasury.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StatBox value="1,000+" label="Registered IFSC Entities" color="purple" />
            <StatBox value="$12B" label="AIF Assets (Jan 2026)" color="purple" />
            <StatBox value="~0%" label="Effective State Tax Rate" color="red" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard title="The Tax Exemption Architecture">
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                GIFT City IFSC units enjoy a <strong className="text-gray-900 dark:text-white">100% income tax exemption for 10 consecutive years out of 15</strong> under Section 80LA. Even outside this window, the Minimum Alternate Tax is just 9% — compared to 15-22% for domestic firms.<Ref n={15} /> All transactions on IFSC exchanges are exempt from Securities Transaction Tax, Commodity Transaction Tax, GST, and stamp duty.<Ref n={13} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Management fees, advisory fees, and transaction costs that attract <strong className="text-gray-900 dark:text-white">18% GST in mainland India are entirely exempt inside the IFSC</strong>.<Ref n={15} /> Budget 2025 extended these benefits through March 2030 and expanded them to cover OTC derivatives, ETF relocations, and ship leasing SPVs. The result: a financial centre processing billions in transactions that generates effectively zero state-level tax revenue.
              </p>
            </DataCard>

            <DataCard title="Scale vs. Comparable Hubs" alert={true}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Dubai's DIFC hosts over <strong className="text-gray-900 dark:text-white">3,000 firms</strong> and offers a 0% tax rate renewable for 50 years. Singapore, with corporate tax at 17%, compensates through volume — it ranks among the world's top 5 financial centres.<Ref n={14} /> GIFT City's 1,000+ entities are growing fast, but its tax concessions are among the most aggressive globally.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The critical difference: Dubai and Singapore are sovereign city-states that capture indirect economic benefits (visa fees, real estate, consumption taxes) from their financial hubs. Gujarat, as a sub-national state, captures almost <strong className="text-gray-900 dark:text-white">none of these spillovers</strong> — GIFT City's regulatory regime is controlled by the central IFSCA, and the tax exemptions are granted by the Union government.<Ref n={14} />
              </p>
            </DataCard>
          </div>

          <DataCard title="The Employment Mirage">
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              GIFT City currently employs approximately <strong className="text-gray-900 dark:text-white">25,000 professionals</strong>, with projections to scale to 150,000 within five years.<Ref n={16} /> But the talent composition reveals a structural mismatch. The rapid expansion of Global Capability Centres (GCCs) has outpaced the availability of qualified local professionals, creating what recruiters describe as intense "offer competition" — companies hiring from Mumbai, Bangalore, and NRI returnee pools rather than from Gujarat's own workforce.<Ref n={16} />
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Most roles demand high-skill profiles: risk analysts, compliance officers, KYC/AML specialists, and professionals experienced in communicating with global stakeholders and following international processes.<Ref n={16} /> GIFT City professionals earn <strong className="text-gray-900 dark:text-white">40-60% less than their Singapore counterparts</strong>, positioning the hub as a cost-arbitrage play for global firms rather than a wealth-creation engine for Gujaratis.<Ref n={14} /> The state provides PF reimbursements and hiring subsidies to attract companies — effectively paying firms to bring in workers who generate exempt income on exempt transactions.
            </p>
          </DataCard>
        </Section>

      </div>

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

      <CounterArgument
        argument="Gujarat's lowest debt-to-GSDP ratio (18.2%) proves exceptional fiscal discipline and prudent governance compared to other states."
        rebuttal="Revenue receipts at 8.7% of GSDP vs. 19.9% median means the state under-collects and under-spends on public services. Own Tax Revenue declining from 7.44% to 5.6% signals structural revenue weakness, not fiscal strength."
      />

      <SourceList sources={sources} />
    </main>
  )
}
