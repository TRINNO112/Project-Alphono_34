import { Link } from 'react-router-dom'
import { ShieldAlert, BookOpen, AlertTriangle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
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
              <li><Link to="/infrastructure" className="hover:text-crimson transition-colors">Infrastructure & Logistics</Link></li>
              <li><Link to="/labor" className="hover:text-crimson transition-colors">Migrant Labor Ecosystem</Link></li>
              <li><Link to="/energy" className="hover:text-crimson transition-colors">Energy Grid & Power</Link></li>
              <li><Link to="/water" className="hover:text-crimson transition-colors">Water Security</Link></li>
              <li><Link to="/migrant-discrimination" className="hover:text-crimson transition-colors text-crimson font-medium">Migrant Discrimination</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/summary" className="hover:text-crimson transition-colors">Executive Summary</Link></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-crimson transition-colors">Source Data</a></li>
              <li><a href="#" className="hover:text-crimson transition-colors">Research Methodology</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-dark-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Project Alphono 34. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Independent Research Database</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
