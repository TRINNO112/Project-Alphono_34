import { ShieldCheck } from './Icons'

export function GovResponseToggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all ${
        checked
          ? 'bg-blue-50 border-blue-200 text-blue-700'
          : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
      }`}
    >
      <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
      Show Govt Response
    </button>
  )
}
