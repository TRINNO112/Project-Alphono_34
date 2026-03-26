import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Factory, Droplets, Users, TrendingUp, Ship, ArrowRight, Lock } from 'lucide-react'

export default function Home() {
  const sectors = [
    { 
      id: 'infrastructure', 
      title: "Infrastructure & Logistics", 
      icon: <Ship className="w-8 h-8 text-blue-600 dark:text-blue-400" />, 
      desc: "An analysis of maritime gateway concentration and structural bottlenecks.", 
      path: "/infrastructure", 
      ready: true 
    },
    { 
      id: 'energy', 
      title: "Energy Grid & Power Supply", 
      icon: <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />, 
      desc: "Evaluating imported fuel reliance and central grid stability.", 
      path: "/energy", 
      ready: false 
    },
    { 
      id: 'materials', 
      title: "Industrial Raw Materials", 
      icon: <Factory className="w-8 h-8 text-gray-600 dark:text-gray-400" />, 
      desc: "Tracking the true origins of manufacturing base ingredients.", 
      path: "/materials", 
      ready: false 
    },
    { 
      id: 'water', 
      title: "Water Security", 
      icon: <Droplets className="w-8 h-8 text-teal-600 dark:text-teal-500" />, 
      desc: "Evaluating the vulnerability of the Sardar Sarovar single point of failure.", 
      path: "/water", 
      ready: false 
    },
    { 
      id: 'labor', 
      title: "Migrant Labor Ecosystem", 
      icon: <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />, 
      desc: "Understanding the migrant workforce fueling mega-industries.", 
      path: "/labor", 
      ready: false 
    },
    { 
      id: 'economics', 
      title: "Governance & Fiscal", 
      icon: <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-500" />, 
      desc: "The impact of diaspora remittances and central subsidization.", 
      path: "/economics", 
      ready: false 
    }
  ]

  return (
    <main className="w-full max-w-6xl mx-auto px-6 pt-40 pb-32 space-y-32">
      {/* Hero Section */}
      <section className="text-center space-y-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-crimson/10 dark:bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight tracking-tight text-gray-900 dark:text-white">
            Anatomy of a <br/><span className="text-crimson italic pr-4">Dependent State</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-8 font-light leading-relaxed">
            A critical analysis of the structural vulnerabilities, systemic dependencies, and external supply chains underpinning the state of Gujarat.
          </p>
        </motion.div>
      </section>

      <hr className="border-gray-300 dark:border-dark-border w-1/2 mx-auto" />

      {/* Directory Grid */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Five Pillars of Analysis</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Select a sector to explore the fully detailed research findings, quantitative dependencies, and bottlenecks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {sector.ready ? (
                <Link to={sector.path} className="group block h-full">
                  <div className="h-full p-8 rounded-3xl border border-gray-200 dark:border-dark-border bg-white/60 dark:bg-dark-surface/60 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-crimson/30 dark:hover:border-crimson/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-crimson/20 group-hover:bg-crimson transition-colors" />
                    <div className="mb-6 p-4 bg-gray-100 dark:bg-dark-bg inline-block rounded-2xl">
                      {sector.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900 dark:text-white group-hover:text-crimson transition-colors">{sector.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{sector.desc}</p>
                    <div className="flex items-center text-crimson font-semibold">
                      Read Analysis <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="h-full p-8 rounded-3xl border border-gray-200 dark:border-dark-border bg-gray-100/50 dark:bg-dark-surface/30 backdrop-blur-sm relative overflow-hidden opacity-75">
                  <div className="mb-6 p-4 bg-gray-200 dark:bg-dark-bg inline-block rounded-2xl filter grayscale opacity-50">
                    {sector.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 text-gray-500 dark:text-gray-400 flex items-center gap-3">
                    {sector.title} <Lock className="w-5 h-5 text-gray-400" />
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500 leading-relaxed mb-6">{sector.desc}</p>
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-500 text-sm font-medium">
                    Research Pending
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
