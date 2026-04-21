import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import MercantileTradeMap from '../components/MercantileTradeMap'
import { tradeRouteSources } from '../data/tradeRoutesData'

export default function GlobalTradeIndex() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3E2723] pt-32 pb-32">
      <SEO 
        title="Index Mercantilis: Global Trade Dependencies" 
        description="A specialized cartographic audit of Gujarat's international maritime dependencies and supply chain chokepoints."
        path="/global-trade"
      />
      
      <main className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <header className="mb-16 border-b-4 border-[#3E2723] pb-8">
          <Link to="/" className="inline-flex items-center text-xs font-serif font-bold tracking-widest text-[#8B0000] hover:text-[#5D4037] transition-colors mb-8 uppercase">
            <ArrowLeft className="w-4 h-4 mr-2" /> Return to Domestic Dashboard
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight leading-tight mb-6">
            INDEX MERCANTILIS:<br/>
            <span className="text-[#8B0000] italic font-light">The Global Chokepoints.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            <p className="text-lg md:text-xl font-serif leading-relaxed max-w-3xl border-l-4 border-[#8B0000] pl-6 text-[#5D4037]">
              Gujarat’s highly concentrated industrial architecture is fundamentally dependent on vast, vulnerable maritime supply lines. From the coal ships of Indonesia to the massive crude tankers navigating the Strait of Hormuz, this cartographic archive maps the modern empire of trade upon which the state relies.
            </p>
            <div className="flex-1 font-serif text-sm border border-[#8D6E63] p-4 bg-[#F5EFE6]">
              <h3 className="font-bold tracking-widest uppercase mb-2 border-b border-[#8D6E63] pb-1 text-[#3E2723]">Cartographic Notes</h3>
              <p className="text-[#3E2723] mb-2"><span className="font-bold uppercase tracking-wider text-[#8B0000]">Projection:</span> Mercator</p>
              <p className="text-[#3E2723] mb-2"><span className="font-bold uppercase tracking-wider text-[#8B0000]">Visual Style:</span> Neo-Mercantile Archive</p>
              <p className="text-[#3E2723]"><span className="font-bold uppercase tracking-wider text-[#8B0000]">Note:</span> Sovereignty constraints applied overlaying domestic geographic realities onto classical trade models.</p>
            </div>
          </div>
        </header>

        {/* The Massive Interactive Map */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <MercantileTradeMap />
          </motion.div>
          <p className="text-center font-serif text-sm italic mt-4 text-[#5D4037]">
            Figure 1.0: Major Maritime Arteries connecting the global extraction zones directly to the ports of Gujarat.
          </p>
        </section>

        {/* Archival Ledgers for Flashpoints */}
        <div className="border-t-4 border-b-4 border-[#3E2723] py-16 mb-12 relative bg-[#F5EFE6]">
          {/* Subtle engraved background lines to separate the section */}
          <div className="absolute inset-0 border-y border-[#8D6E63] my-1 opacity-50 z-0 pointer-events-none"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 px-4"
            >
              <h2 className="font-serif text-4xl font-black tracking-widest uppercase text-[#3E2723] mb-4">
                Geopolitical Flashpoints & Dependencies
              </h2>
              <p className="text-[#5D4037] max-w-2xl mx-auto text-lg font-serif italic border-b border-[#8D6E63] pb-6 inline-block">
                Critical vulnerabilities within the maritime supply chain.
              </p>
            </motion.div>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-serif px-6">
              
              {[
                {
                  id: "01",
                  title: "The Hormuz Bottleneck",
                  text: "Over eighty-five percent of the crude oil driving the mega-refineries of Jamnagar sloshes its way through the narrow geopolitical flashpoint of the Strait of Hormuz. A single blockade event in this zone would immediately starve the absolute foundation of the state's GDP, exposing a dangerous lack of geographic diversification in energy procurement."
                },
                {
                  id: "02",
                  title: "The Malacca Strait",
                  text: "Eastern imports, vital to distinct sectors, are funneled entirely through the Strait of Malacca. The immense volume of cheap thermal coal required to spin the turbines of Mundra arrives from Kalimantan, Indonesia. Simultaneously, the chemical hub of Dahej relies deeply on the flow of active pharmaceutical ingredients (APIs) imported from eastern China."
                },
                {
                  id: "03",
                  title: "Australian Arteries",
                  text: "Hazira's colossal steel mills cannot fire solely on domestic supplies. They require high-grade metallurgical coking coal, the vast majority of which is pulled from the deep ports of Australia's Gladstone region. This extremely long, trans-oceanic dependency line highlights the vulnerability of heavy industry to maritime shipping cost surges."
                },
                {
                  id: "04",
                  title: "Trans-Atlantic Cargo",
                  text: "To offset Middle Eastern volatility, massive volumes of Gulf Coast petrochemicals and LNG trace across the Atlantic from Houston. Bottlenecking through the Suez Canal, this fragile Western artery feeds directly into Dahej, proving that even decentralized Western supplies remain completely exposed to Red Sea and Suez maritime instability."
                }
              ].map((card, i) => (
                <motion.article 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(62, 39, 35, 0.15)" }}
                  className="bg-[#FDFBF7] border-2 border-[#8D6E63] p-6 shadow-lg relative group flex flex-col justify-between transition-all duration-300"
                >
                  {/* Decorative corner accents */}
                  <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#8D6E63] transition-colors group-hover:border-[#8B0000]"></div>
                  <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#8D6E63] transition-colors group-hover:border-[#8B0000]"></div>
                  <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#8D6E63] transition-colors group-hover:border-[#8B0000]"></div>
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#8D6E63] transition-colors group-hover:border-[#8B0000]"></div>

                  <div>
                    <div className="text-[#8B0000] font-black text-sm tracking-widest border-b border-dotted border-[#C8B6A6] pb-2 mb-4 uppercase flex justify-between items-center">
                      <span>Ledger No. {card.id}</span>
                      <span className="font-serif text-[#C8B6A6] group-hover:text-[#8D6E63] transition-colors text-[10px]">///</span>
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-widest text-[#3E2723] mb-4 group-hover:text-[#8B0000] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[#5D4037] leading-relaxed text-justify first-letter:text-5xl first-letter:font-black first-letter:mr-1 first-letter:float-left first-letter:text-[#8B0000]">
                      {card.text}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t-2 border-[#8D6E63] group-hover:border-[#8B0000] transition-colors">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-[#8B0000] flex items-center gap-2">
                       <span className="w-2 h-2 bg-[#8B0000] inline-block shadow-sm shadow-[#8B0000]/50"></span>
                       Severity: Critical
                    </div>
                  </div>
                </motion.article>
              ))}

            </section>
          </div>
        </div>

        {/* Maritime Tonnage Classifications Section */}
        <div className="border-t-4 border-[#3E2723] pt-16 pb-8 mb-12 relative mt-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FDFBF7] px-8 text-[#8B0000] font-serif font-black tracking-widest text-sm flex items-center justify-center gap-4 border-l-2 border-r-2 border-[#3E2723]">
            <span className="w-2 h-2 rounded-full bg-[#8B0000]"></span>
            SUPPLEMENTAL DOSSIER
            <span className="w-2 h-2 rounded-full bg-[#8B0000]"></span>
          </div>
          
          <div className="text-center mb-12 mt-4">
            <h2 className="font-serif text-3xl font-black tracking-widest uppercase text-[#3E2723] mb-4">
              Vessel Classifications &amp; Tonnage Dependency
            </h2>
            <p className="text-[#5D4037] max-w-2xl mx-auto text-lg font-serif italic border-b border-dotted border-[#C8B6A6] pb-6 inline-block">
              Understanding the colossal scale of vessels that sustain the industrial complexes of the state. 
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-serif px-4">
            {/* VLCC Card */}
            <article className="border border-[#8D6E63] p-8 bg-[#F5EFE6] relative shadow-md group hover:border-[#8B0000] transition-colors">
              <div className="absolute top-0 right-0 bg-[#8B0000] text-[#F5EFE6] text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm">
                Crude Carrier
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest text-[#3E2723] mb-4 border-b-2 border-[#8D6E63] pb-2 group-hover:border-[#8B0000] transition-colors">
                VLCC Class
              </h3>
              
              {/* Image Asset: VLCC Crude Tanker Silhouette */}
              <div className="border-b border-[#C8B6A6] mb-6 pb-2 relative flex flex-col items-center">
                <img 
                  src="/images/vlcc_class.png" 
                  alt="VLCC Crude Tanker" 
                  className="w-full h-36 object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
                {/* Decorative measurement lines */}
                <div className="absolute bottom-0 left-[5%] right-[15%] h-[1px] border-t border-dotted border-[#8D6E63] flex justify-between mt-2">
                  <div className="w-[1px] h-2 bg-[#8D6E63] -mt-1"></div>
                  <span className="text-[8px] bg-[#F5EFE6] px-1 -mt-2.5 text-[#8D6E63] font-serif uppercase tracking-widest">330m Length / Tanker Profile</span>
                  <div className="w-[1px] h-2 bg-[#8D6E63] -mt-1"></div>
                </div>
              </div>

              <p className="text-[#5D4037] text-sm leading-relaxed mb-6 text-justify">
                <strong>Very Large Crude Carriers</strong> transport up to 2 million barrels of crude oil per voyage. The ultra-refineries at Jamnagar are specifically calibrated to offload these monolithic vessels directly from deep-water single point moorings (SPMs), making them highly susceptible to maritime insurance and charter rate spikes in the Middle East.
              </p>
              <div className="flex justify-between items-end border-t border-dotted border-[#8D6E63] pt-4 text-[10px] uppercase font-bold text-[#8B0000]">
                <span>Avg. Capacity: 300,000 DWT</span>
                <span>Role: Energy Security</span>
              </div>
            </article>

            {/* Capesize Card */}
            <article className="border border-[#8D6E63] p-8 bg-[#F5EFE6] relative shadow-md group hover:border-[#3E2723] transition-colors">
              <div className="absolute top-0 right-0 bg-[#3E2723] text-[#F5EFE6] text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm">
                Dry Bulk
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest text-[#3E2723] mb-4 border-b-2 border-[#8D6E63] pb-2 group-hover:border-[#3E2723] transition-colors">
                Capesize Class
              </h3>

              {/* Image Asset: Capesize Bulk Carrier Silhouette */}
              <div className="border-b border-[#C8B6A6] mb-6 pb-2 relative flex flex-col items-center">
                <img 
                  src="/images/capesize_class.png" 
                  alt="Capesize Bulk Carrier" 
                  className="w-full h-36 object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
                {/* Decorative measurement lines */}
                <div className="absolute bottom-0 left-[5%] right-[15%] h-[1px] border-t border-dotted border-[#8D6E63] flex justify-between mt-2">
                  <div className="w-[1px] h-2 bg-[#8D6E63] -mt-1"></div>
                  <span className="text-[8px] bg-[#F5EFE6] px-1 -mt-2.5 text-[#8D6E63] font-serif uppercase tracking-widest">290m Length / Dry Bulk Profile</span>
                  <div className="w-[1px] h-2 bg-[#8D6E63] -mt-1"></div>
                </div>
              </div>

              <p className="text-[#5D4037] text-sm leading-relaxed mb-6 text-justify">
                Too large to navigate the Suez or Panama canals, these massive bulk carriers must traverse the Cape of Good Hope. They exclusively transport thermal coal and iron ore, forming the physical backbone of the power generation limits at Mundra and the continuous steel manufacturing furnaces at Hazira.
              </p>
              <div className="flex justify-between items-end border-t border-dotted border-[#8D6E63] pt-4 text-[10px] uppercase font-bold text-[#3E2723]">
                <span>Avg. Capacity: 180,000 DWT</span>
                <span>Role: Heavy Industry</span>
              </div>
            </article>

            {/* Q-Max Card */}
            <article className="border border-[#8D6E63] p-8 bg-[#F5EFE6] relative shadow-md group hover:border-[#5D4037] transition-colors">
              <div className="absolute top-0 right-0 bg-[#5D4037] text-[#F5EFE6] text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm">
                Gas Carrier
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest text-[#3E2723] mb-4 border-b-2 border-[#8D6E63] pb-2 group-hover:border-[#5D4037] transition-colors">
                Q-Max LNG
              </h3>
              
              {/* Image Asset: Q-Max / Moss LNG Gas Carrier Silhouette */}
              <div className="border-b border-[#C8B6A6] mb-6 pb-2 relative flex flex-col items-center">
                <img 
                  src="/images/qmax_class.png" 
                  alt="Q-Max LNG Carrier" 
                  className="w-full h-36 object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
                {/* Decorative measurement lines */}
                <div className="absolute bottom-0 left-[5%] right-[15%] h-[1px] border-t border-dotted border-[#8D6E63] flex justify-between mt-2">
                  <div className="w-[1px] h-2 bg-[#8D6E63] -mt-1"></div>
                  <span className="text-[8px] bg-[#F5EFE6] px-1 -mt-2.5 text-[#8D6E63] font-serif uppercase tracking-widest">345m Length / Gas Carrier Profile</span>
                  <div className="w-[1px] h-2 bg-[#8D6E63] -mt-1"></div>
                </div>
              </div>

              <p className="text-[#5D4037] text-sm leading-relaxed mb-6 text-justify">
                The absolute limit of civilian maritime engineering, these specialized vessels carry super-cooled liquid natural gas largely from Qatar. Dahej hosts India's largest LNG terminal precisely to accommodate these leviathans, ensuring the uninterrupted flow of feedstock to the entire state's fertilizer supply chain.
              </p>
              <div className="flex justify-between items-end border-t border-dotted border-[#8D6E63] pt-4 text-[10px] uppercase font-bold text-[#5D4037]">
                <span>Avg. Capacity: 266,000 CBM</span>
                <span>Role: Chemical Feedstock</span>
              </div>
            </article>
          </div>
        </div>

        {/* ═══════════════════ SOURCES & CITATIONS ═══════════════════ */}
        <section className="mt-20 border-t-4 border-[#3E2723] pt-10">
          <h2 className="text-center font-serif text-4xl font-black tracking-widest uppercase mb-4 text-[#3E2723]">
            Sources &amp; References
          </h2>
          <p className="text-center font-serif text-sm italic text-[#5D4037] mb-10 max-w-3xl mx-auto">
            Every figure plotted on the cartography above — tanker volumes, refinery shares, chokepoint statistics,
            PPA details, sanctions packages — is traceable to the {tradeRouteSources.length} independent sources listed
            below. Government filings, tanker trackers (Kpler, Vortexa), industry press (S&amp;P Global, Argus, Fastmarkets),
            refinery disclosures, think-tanks (ORF, CSIS, VIF) and Indian national press.
          </p>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-3 font-serif">
            {tradeRouteSources.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-[#3E2723] hover:text-[#8B0000] group border-b border-dotted border-[#C8B6A6] pb-1.5"
              >
                <span className="font-black text-[#8B0000] shrink-0 min-w-[2rem]">[{s.id}]</span>
                <span className="group-hover:underline flex-1">{s.title}</span>
                <ExternalLink className="w-3 h-3 shrink-0 mt-1 opacity-50 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}
