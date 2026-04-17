import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import MercantileTradeMap from '../components/MercantileTradeMap'

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
              <h3 className="font-bold tracking-widest uppercase mb-2 border-b border-[#8D6E63] pb-1">Cartographic Notes</h3>
              <p className="italic text-[#5D4037] mb-2">Projection: Mercator</p>
              <p className="italic text-[#5D4037] mb-2">Visual Style: Neo-Mercantile Archive</p>
              <p className="italic text-[#5D4037]">Sovereignty constraints applied overlaying domestic geographic realities onto classical trade models.</p>
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

        {/* Narrative Columns below the map mimicking newspaper layout */}
        <div className="border-t-4 border-b-4 border-[#3E2723] py-8 mb-12">
          <h2 className="text-center font-serif text-4xl font-black tracking-widest uppercase mb-12 text-[#3E2723]">
            Geopolitical Flashpoints & Dependencies
          </h2>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-serif">
            
            <article className="border-r border-[#8D6E63] pr-8 last:border-0 last:pr-0">
              <h3 className="text-xl font-black uppercase tracking-widest border-b-2 border-[#8B0000] pb-2 mb-4 leading-snug">
                The Hormuz Bottleneck
              </h3>
              <p className="text-[#5D4037] leading-relaxed text-justify first-letter:text-5xl first-letter:font-black first-letter:mr-1 first-letter:float-left first-letter:text-[#8B0000]">
                Over eighty-five percent of the crude oil driving the mega-refineries of Jamnagar sloshes its way through the narrow geopolitical flashpoint of the Strait of Hormuz. A single blockade event in this zone would immediately starve the absolute foundation of the state's GDP, exposing a dangerous lack of geographic diversification in energy procurement.
              </p>
            </article>

            <article className="border-r border-[#8D6E63] pr-8 last:border-0 last:pr-0 lg:border-r lg:border-[#8D6E63]">
              <h3 className="text-xl font-black uppercase tracking-widest border-b-2 border-[#8B0000] pb-2 mb-4 leading-snug">
                The Malacca Strait
              </h3>
              <p className="text-[#5D4037] leading-relaxed text-justify first-letter:text-5xl first-letter:font-black first-letter:mr-1 first-letter:float-left first-letter:text-[#8B0000]">
                Eastern imports, vital to distinct sectors, are funneled entirely through the Strait of Malacca. The immense volume of cheap thermal coal required to spin the turbines of Mundra arrives from Kalimantan, Indonesia. Simultaneously, the chemical hub of Dahej relies deeply on the flow of active pharmaceutical ingredients (APIs) imported from eastern China.
              </p>
            </article>

            <article className="border-r border-[#8D6E63] pr-8 last:border-0 last:pr-0">
              <h3 className="text-xl font-black uppercase tracking-widest border-b-2 border-[#8B0000] pb-2 mb-4 leading-snug">
                Australian Arteries
              </h3>
              <p className="text-[#5D4037] leading-relaxed text-justify first-letter:text-5xl first-letter:font-black first-letter:mr-1 first-letter:float-left first-letter:text-[#8B0000]">
                Hazira's colossal steel mills cannot fire solely on domestic supplies. They require high-grade metallurgical coking coal, the vast majority of which is pulled from the deep ports of Australia's Gladstone region. This extremely long, trans-oceanic dependency line highlights the vulnerability of heavy industry to maritime shipping cost surges.
              </p>
            </article>

            <article className="border-r border-[#8D6E63] pr-8 last:border-0 last:pr-0 lg:border-none lg:pr-0">
              <h3 className="text-xl font-black uppercase tracking-widest border-b-2 border-[#8B0000] pb-2 mb-4 leading-snug">
                Trans-Atlantic Cargo
              </h3>
              <p className="text-[#5D4037] leading-relaxed text-justify first-letter:text-5xl first-letter:font-black first-letter:mr-1 first-letter:float-left first-letter:text-[#8B0000]">
                To offset Middle Eastern volatility, massive volumes of Gulf Coast petrochemicals and LNG trace across the Atlantic from Houston. Bottlenecking through the Suez Canal, this fragile Western artery feeds directly into Dahej, proving that even decentralized Western supplies remain completely exposed to Red Sea and Suez maritime instability.
              </p>
            </article>

          </section>
        </div>

      </main>
    </div>
  )
}
