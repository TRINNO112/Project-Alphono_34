import { memo } from 'react'
import { motion } from 'framer-motion'

const CHARACTERS = {
  raju: {
    name: 'Rajubhai',
    location: 'Ahmedabad',
    emoji: '\u{1F5E3}\u{FE0F}',
  },
  priya: {
    name: 'Priya',
    location: 'Delhi',
    emoji: '\u{1F4CA}',
  },
  gov: {
    name: 'Gov\'t Spokesperson',
    location: 'Gandhinagar',
    emoji: '\u{2696}\u{FE0F}', // Scales emoji
  },
}

/**
 * CounterArgument - Chat-style debate component between Rajubhai and Priya
 *
 * Features:
 * - Animated message bubbles with entrance effects
 * - Character avatars with distinct styling
 * - Scrollable message container
 * - Memoized for performance
 * - Supports both new messages format and legacy props
 *
 * @param {Object} props
 * @param {Array<Object>} [props.messages] - Array of message objects (new format)
 * @param {string} props.messages[].from - Speaker identifier ("raju", "priya", or "gov")
 * @param {string} props.messages[].text - Message content
 * @param {string} [props.messages[].source] - Optional source citation
 * @param {string} [props.argument] - Legacy prop: Rajubhai's argument text
 * @param {string} [props.rebuttal] - Legacy prop: Priya's rebuttal text
 * @param {Array<Object>} [props.stats] - Legacy prop: Array of stats for Priya's message
 * @param {boolean} [props.showGov=false] - Whether to show government spokesperson messages
 * @returns {JSX.Element} The rendered chat component
 */

function parseBold(text) {
  const parts = text.split(/\*\*/)
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} className="text-crimson font-bold">{part}</strong>
      : <span key={i}>{part}</span>
  )
}

function fakeTime(index) {
  const base = 9
  const min = index * 1 + 1
  const h = base + Math.floor(min / 60)
  const m = min % 60
  return `${h}:${String(m).padStart(2, '0')} AM`
}

function CounterArgumentInner({ messages, argument, rebuttal, stats, showGov }) {
  // Backwards compatibility: convert old props to messages format
  const chatMessages = messages || [
    { from: 'raju', text: argument || '' },
    {
      from: 'priya',
      text: (stats ? stats.map(s => `**${s.value}** ${s.label}`).join('. ') + '. ' : '') + (rebuttal || ''),
    },
  ]

  const visibleMessages = chatMessages.filter(msg => {
    if (msg.from === 'gov' && !showGov) return false
    return true
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-border my-8 bg-stone-50/80 dark:bg-dark-surface/30"
    >
      {/* Header */}
      <div role="heading" aria-level={3} className="px-5 py-3.5 bg-emerald-800 dark:bg-emerald-950 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-200/80">The Debate</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-sm" aria-hidden="true">{CHARACTERS.raju.emoji}</span>
            <span className="text-[10px] text-emerald-200/70 font-semibold">{CHARACTERS.raju.name}</span>
          </div>
          <span className="text-emerald-400/40 text-xs" aria-hidden="true">vs</span>
          <div className="flex items-center gap-1.5">
            <span className="text-sm" aria-hidden="true">{CHARACTERS.priya.emoji}</span>
            <span className="text-[10px] text-emerald-200/70 font-semibold">{CHARACTERS.priya.name}</span>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="px-4 py-5 space-y-3 min-h-[200px]" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(16,185,129,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(211,47,47,0.03) 0%, transparent 50%)' }}>
        {visibleMessages.map((msg, i) => {
          const char = CHARACTERS[msg.from] || CHARACTERS.raju
          const isLeft = msg.from === 'raju' || msg.from === 'gov'
          const isRaju = msg.from === 'raju'
          const msgKey = `${msg.from}-${(msg.text || '').slice(0, 30)}-${i}`

          return (
            <motion.div
              key={msgKey}
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.12 }}
              className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-[78%] ${isLeft ? 'pr-8' : 'pl-8'}`}>
                {/* Bubble */}
                <div
                  className={`relative px-4 py-3 text-[15px] leading-relaxed ${
                    msg.from === 'gov'
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100 rounded-2xl rounded-bl-sm border border-blue-200 dark:border-blue-800/50'
                      : isRaju
                      ? 'bg-green-100/90 dark:bg-green-950/50 text-green-900 dark:text-green-200 rounded-2xl rounded-bl-sm'
                      : 'bg-white dark:bg-dark-surface/80 text-gray-800 dark:text-gray-200 rounded-2xl rounded-br-sm border-l-[3px] border-crimson/60'
                  }`}
                >
                  {/* Character tag */}
                  <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                    msg.from === 'gov'
                      ? 'text-blue-700 dark:text-blue-400'
                      : isRaju
                      ? 'text-green-700 dark:text-green-400'
                      : 'text-crimson/80 dark:text-red-400'
                  }`}>
                    <span aria-hidden="true">{char.emoji}</span> {char.name}
                  </span>

                  <p className="font-sans">{parseBold(msg.text)}</p>

                  {/* Source citation */}
                  {msg.source && (
                    <span className="mt-1.5 flex items-center gap-1 text-[10px] text-gray-400 dark:text-gray-500">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                      {msg.source}
                    </span>
                  )}
                </div>

                {/* Timestamp */}
                <span className={`text-[9px] text-gray-400 dark:text-gray-600 mt-0.5 block ${isLeft ? 'text-left ml-2' : 'text-right mr-2'}`}>
                  {fakeTime(i)}
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Footer disclaimer */}
      <div className="px-5 py-2.5 border-t border-gray-200 dark:border-dark-border bg-gray-50/50 dark:bg-dark-bg/30">
        <p className="text-[9px] text-gray-400 dark:text-gray-600 text-center uppercase tracking-widest">
          Dramatized exchange based on documented claims and verified data
        </p>
      </div>
    </motion.div>
  )
}

export const CounterArgument = memo(CounterArgumentInner)
