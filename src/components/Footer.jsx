import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'

function FooterLink({ to, children, highlight }) {
  return (
    <li>
      <Link
        to={to}
        className={`relative inline-block transition-colors hover:text-crimson ${
          highlight ? 'text-crimson font-medium' : ''
        } group`}
      >
        {children}
        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-crimson transition-all duration-300 group-hover:w-full" />
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden border-t border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg mt-24">
      {/* Magazine Typography Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 opacity-40 dark:opacity-20 mix-blend-overlay dark:mix-blend-screen">
        <h1 className="text-[10rem] md:text-[18rem] lg:text-[24rem] font-sans font-black text-gray-900 dark:text-gray-100 uppercase tracking-tighter leading-none whitespace-nowrap">
          PROJECT 34
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">

          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-crimson">Project</span> Alphono 34
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              A critical research endeavor investigating the deep structural vulnerabilities, dependencies, and socio-economic realities of Gujarat's industrial economy.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Analysis Pillars</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <FooterLink to="/infrastructure">Infrastructure & Logistics</FooterLink>
              <FooterLink to="/labor">Migrant Labor Ecosystem</FooterLink>
              <FooterLink to="/energy">Energy Grid & Power</FooterLink>
              <FooterLink to="/water">Water Security</FooterLink>
              <FooterLink to="/migrant-discrimination" highlight>Migrant Discrimination</FooterLink>
              <FooterLink to="/agriculture">Agriculture & Agrarian Distress</FooterLink>
              <FooterLink to="/greentech">Green Tech Dependency</FooterLink>
              <FooterLink to="/chemical-governance">Chemical Governance</FooterLink>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <FooterLink to="/summary">Executive Summary</FooterLink>
              <FooterLink to="/sources">Source Data</FooterLink>
              <FooterLink to="/methodology">Research Methodology</FooterLink>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-dark-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Project Alphono 34. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Independent Research Database</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
