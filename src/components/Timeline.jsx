import { motion } from 'framer-motion'

const severityColors = {
  critical: { dot: 'bg-crimson', ring: 'ring-crimson/20' },
  warning: { dot: 'bg-yellow-500', ring: 'ring-yellow-500/20' },
  info: { dot: 'bg-blue-500', ring: 'ring-blue-500/20' },
}

export function Timeline({ events }) {
  return (
    <div className="space-y-0">
      {events.map((event, index) => {
        const colors = severityColors[event.severity] || severityColors.info
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex"
          >
            {/* Year */}
            <div className="min-w-[80px] text-right pr-6 pt-1">
              <span className="font-serif font-bold text-xl text-crimson">{event.year}</span>
            </div>

            {/* Center line + dot */}
            <div className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full ${colors.dot} ring-4 ${colors.ring} mt-2 shrink-0`} />
              {index < events.length - 1 && (
                <div className="w-0.5 flex-1 bg-gray-200" />
              )}
            </div>

            {/* Content */}
            <div className="pl-6 pb-10">
              <h4 className="font-serif font-bold text-lg text-gray-900 mb-2">{event.title}</h4>
              <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
