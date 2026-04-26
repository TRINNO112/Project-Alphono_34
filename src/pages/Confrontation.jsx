import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Pause, Play, ChevronLeft, ChevronRight, X } from 'lucide-react'
import SEO from '../components/SEO'

const PANELS = [
  {
    id: 1,
    speaker: 'left',
    name: 'THE STATESMAN',
    role: 'Official Narrative',
    line: 'They call this state the engine of India.',
    sub: 'Vibrant. Self-sufficient. Unstoppable.',
    tag: 'VIBRANT',
  },
  {
    id: 2,
    speaker: 'right',
    name: 'THE ANALYST',
    role: 'Evidence on Record',
    line: 'An engine running on someone else\u2019s fuel.',
    sub: '36% of our crude is Russian. When those ships stop \u2014 the engine dies.',
    tag: 'FUEL',
  },
  {
    id: 3,
    speaker: 'left',
    name: 'THE STATESMAN',
    role: 'Official Narrative',
    line: 'But the ports, the factories, the power grid \u2014 they are ours.',
    sub: 'Built here. By us. For us.',
    tag: 'INFRA',
  },
  {
    id: 4,
    speaker: 'right',
    name: 'THE ANALYST',
    role: 'Evidence on Record',
    line: 'And who runs them?',
    sub: 'Five lakh migrant workers fled in 2026. Without them, your infrastructure is empty concrete and silent machines.',
    tag: 'EXODUS',
  },
  {
    id: 5,
    speaker: 'left',
    name: 'THE STATESMAN',
    role: 'Official Narrative',
    line: 'Our digital future \u2014 GIFT City. A 1,600-km coastline of opportunity.',
    sub: 'The future is being built here.',
    tag: 'FUTURE',
  },
  {
    id: 6,
    speaker: 'right',
    name: 'THE ANALYST',
    role: 'Evidence on Record',
    line: 'Zero submarine cables.',
    sub: 'Every byte of Gujarat\u2019s data still travels to Mumbai first. You don\u2019t own the wire.',
    tag: 'SILENCE',
  },
]

const AUTOPLAY_MS = 7000

const PAGE_CSS = `
  @keyframes ink-bleed {
    0% { transform: scale(0.95); opacity: 0; filter: blur(4px); }
    100% { transform: scale(1); opacity: 1; filter: blur(0); }
  }
  @keyframes paper-shift {
    0%, 100% { transform: translate(0,0) }
    50% { transform: translate(-1px, 1px) }
  }
  .paper-bg {
    background-color: #efe7d6;
    background-image:
      radial-gradient(circle at 20% 30%, rgba(120, 80, 40, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(60, 40, 20, 0.06) 0%, transparent 40%),
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.2  0 0 0 0 0.15  0 0 0 0 0.1  0 0 0 0.18 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>");
  }
  .ink-wash-left {
    background:
      linear-gradient(135deg, rgba(211,47,47,0.12) 0%, transparent 60%),
      radial-gradient(circle at 30% 40%, rgba(154, 0, 7, 0.15) 0%, transparent 50%);
  }
  .ink-wash-right {
    background:
      linear-gradient(225deg, rgba(20,30,60,0.10) 0%, transparent 60%),
      radial-gradient(circle at 70% 60%, rgba(20, 30, 80, 0.12) 0%, transparent 50%);
  }
  .halftone {
    background-image: radial-gradient(rgba(0,0,0,0.18) 1px, transparent 1px);
    background-size: 4px 4px;
  }
  .panel-border {
    box-shadow:
      0 0 0 2px #1a1a1a,
      8px 8px 0 0 #1a1a1a;
  }
  .speech-bubble {
    position: relative;
    background: #fdfaf2;
    border: 2.5px solid #1a1a1a;
    box-shadow: 6px 6px 0 0 #1a1a1a;
  }
  .speech-bubble::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  }
  .speech-bubble.left-tail::before {
    bottom: -22px;
    left: 40px;
    border-width: 22px 0 0 22px;
    border-color: #1a1a1a transparent transparent transparent;
  }
  .speech-bubble.left-tail::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 44px;
    border-style: solid;
    border-width: 16px 0 0 16px;
    border-color: #fdfaf2 transparent transparent transparent;
  }
  .speech-bubble.right-tail::before {
    bottom: -22px;
    right: 40px;
    border-width: 22px 22px 0 0;
    border-color: #1a1a1a transparent transparent transparent;
  }
  .speech-bubble.right-tail::after {
    content: '';
    position: absolute;
    bottom: -16px;
    right: 44px;
    border-style: solid;
    border-width: 16px 16px 0 0;
    border-color: #fdfaf2 transparent transparent transparent;
  }
  .panel-enter {
    animation: ink-bleed 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }
  .grain::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1'/></filter><rect width='100' height='100' filter='url(%23n)' opacity='0.5'/></svg>");
    mix-blend-mode: multiply;
    opacity: 0.25;
    pointer-events: none;
  }
  .diagonal-divider {
    background: linear-gradient(105deg, transparent calc(50% - 1px), #1a1a1a calc(50% - 1px), #1a1a1a calc(50% + 1px), transparent calc(50% + 1px));
  }
  .progress-bar {
    background: linear-gradient(to right, #d32f2f var(--p), rgba(0,0,0,0.1) var(--p));
  }
`

function Panel({ panel, side, isActive }) {
  const isLeft = side === 'left'
  const accentRgb = isLeft ? '211, 47, 47' : '40, 60, 140'
  return (
    <div className={`relative h-full overflow-hidden ${isLeft ? 'ink-wash-left' : 'ink-wash-right'} grain`}>
      {/* halftone backdrop on inactive side */}
      <div className={`absolute inset-0 halftone transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-40'}`} />

      {/* spotlight wash — only when active */}
      <motion.div
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isLeft
            ? `radial-gradient(ellipse 70% 80% at 25% 55%, rgba(${accentRgb}, 0.28) 0%, rgba(${accentRgb}, 0.10) 35%, transparent 70%)`
            : `radial-gradient(ellipse 70% 80% at 75% 55%, rgba(${accentRgb}, 0.28) 0%, rgba(${accentRgb}, 0.10) 35%, transparent 70%)`,
        }}
      />

      {/* shadow wash — only when inactive (the listener side gets darkened) */}
      <motion.div
        animate={{ opacity: isActive ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isLeft
            ? 'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)'
            : 'linear-gradient(270deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)',
        }}
      />

      {/* pulsing rim glow on active speaker */}
      {isActive && (
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isLeft
              ? `radial-gradient(circle at 30% 70%, rgba(${accentRgb}, 0.18) 0%, transparent 45%)`
              : `radial-gradient(circle at 70% 70%, rgba(${accentRgb}, 0.18) 0%, transparent 45%)`,
            mixBlendMode: 'screen',
          }}
        />
      )}

      {/* character */}
      <motion.div
        key={panel.id + side}
        initial={{ opacity: 0, scale: 1.05, x: isLeft ? -30 : 30 }}
        animate={{
          opacity: 1,
          scale: isActive ? 1 : 0.94,
          x: 0,
          filter: isActive
            ? `grayscale(0%) contrast(1.1) brightness(1.08) drop-shadow(0 0 28px rgba(${accentRgb}, 0.55))`
            : 'grayscale(100%) brightness(0.45) contrast(1.2)',
        }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className={`absolute bottom-0 ${isLeft ? 'left-0' : 'right-0'} h-[88%] w-full flex items-end ${isLeft ? 'justify-start' : 'justify-end'}`}
      >
        <img
          src={`/reel/${side}.png`}
          alt={isActive ? panel.name : ''}
          className="h-full max-h-full w-auto object-contain object-bottom select-none pointer-events-none"
          draggable={false}
        />
      </motion.div>

      {/* role tag (top corner) */}
      <div className={`absolute top-6 ${isLeft ? 'left-6' : 'right-6'} z-20`}>
        <div className={`flex flex-col ${isLeft ? 'items-start' : 'items-end'} gap-1`}>
          <span className={`text-[10px] font-mono tracking-[0.4em] font-black ${isActive ? (isLeft ? 'text-crimson' : 'text-blue-900') : 'text-black/30'}`}>
            {isLeft ? 'PANEL A' : 'PANEL B'}
          </span>
          <span className={`text-xs font-mono tracking-widest ${isActive ? 'text-black/70' : 'text-black/30'}`}>
            {panel.role.toUpperCase()}
          </span>
        </div>
      </div>

      {/* big background tag */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.h2
            key={panel.tag}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.07, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`absolute ${isLeft ? 'left-[-2%]' : 'right-[-2%]'} top-[20%] text-[14vw] font-serif font-black text-black tracking-tighter leading-none whitespace-nowrap pointer-events-none select-none italic`}
          >
            {panel.tag}
          </motion.h2>
        )}
      </AnimatePresence>
    </div>
  )
}

function SpeechBubble({ panel, side }) {
  const isLeft = side === 'left'
  return (
    <motion.div
      key={panel.id}
      initial={{ opacity: 0, y: 24, rotate: isLeft ? -1.5 : 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: isLeft ? -0.8 : 0.8 }}
      exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
      className={`speech-bubble ${isLeft ? 'left-tail' : 'right-tail'} max-w-[520px] p-7 md:p-8`}
    >
      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'text-crimson' : 'text-blue-900'}`}>
        <span className="text-[10px] font-mono tracking-[0.4em] font-black">{panel.name}</span>
        <span className="flex-1 h-px bg-current opacity-30" />
      </div>
      <p className="font-serif text-2xl md:text-3xl font-bold text-black leading-tight tracking-tight">
        &ldquo;{panel.line}&rdquo;
      </p>
      {panel.sub && (
        <p className="mt-3 font-sans text-sm md:text-base text-black/70 leading-relaxed">
          {panel.sub}
        </p>
      )}
    </motion.div>
  )
}

export default function Confrontation() {
  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [showCta, setShowCta] = useState(false)
  const [progress, setProgress] = useState(0)

  const goNext = useCallback(() => {
    setIdx((i) => {
      if (i >= PANELS.length - 1) {
        setShowCta(true)
        setPlaying(false)
        return i
      }
      return i + 1
    })
  }, [])

  const goPrev = useCallback(() => {
    setShowCta(false)
    setIdx((i) => Math.max(0, i - 1))
  }, [])

  // autoplay — progress ticks via setInterval, no synchronous setState in effect body
  useEffect(() => {
    if (!playing || showCta) return
    const start = Date.now()
    const tick = setInterval(() => {
      const elapsed = Date.now() - start
      const p = Math.min(elapsed / AUTOPLAY_MS, 1)
      setProgress(p)
      if (p >= 1) {
        clearInterval(tick)
        goNext()
      }
    }, 50)
    return () => {
      clearInterval(tick)
      setProgress(0)
    }
  }, [idx, playing, showCta, goNext])

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === ' ') { e.preventDefault(); setPlaying((p) => !p) }
      else if (e.key === 'Escape') setShowCta(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  const panel = PANELS[idx]
  // Show whichever character is speaking; the other side shows the previous opposite-side panel for continuity
  const leftPanel = panel.speaker === 'left' ? panel : (PANELS.slice(0, idx).reverse().find((p) => p.speaker === 'left') || PANELS[0])
  const rightPanel = panel.speaker === 'right' ? panel : (PANELS.slice(0, idx).reverse().find((p) => p.speaker === 'right') || PANELS.find((p) => p.speaker === 'right'))

  return (
    <>
      <SEO title="Confrontation · Project Alphono 34" description="A graphic-novel investigation into Gujarat's structural dependencies." path="/confrontation" />
      <style>{PAGE_CSS}</style>

      <div className="relative min-h-screen w-full paper-bg overflow-hidden">
        {/* outer page frame */}
        <div className="relative max-w-[1600px] mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-10">

          {/* Header strip */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border-[2.5px] border-black flex items-center justify-center font-serif font-black italic text-lg">A</div>
              <div className="leading-tight">
                <p className="text-[10px] md:text-xs font-mono tracking-[0.35em] font-bold text-black/60">PROJECT ALPHONO 34</p>
                <h1 className="font-serif font-black text-xl md:text-2xl italic tracking-tight">Confrontation</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] text-black/50">
              <span>ISSUE 01</span>
              <span className="w-px h-3 bg-black/30" />
              <span>{String(idx + 1).padStart(2, '0')} / {String(PANELS.length).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Main two-panel comic frame */}
          <div className="relative panel-border bg-black">
            <div className="grid grid-cols-2 h-[68vh] min-h-[520px] max-h-[760px] gap-[3px] bg-black">
              <Panel panel={leftPanel} side="left" isActive={panel.speaker === 'left'} />
              <Panel panel={rightPanel} side="right" isActive={panel.speaker === 'right'} />
            </div>

            {/* Speech bubble overlay */}
            <div className="absolute inset-0 flex items-end pointer-events-none">
              <div className={`w-1/2 flex ${panel.speaker === 'left' ? 'justify-start pl-8 md:pl-14' : 'justify-end pr-8 md:pr-14'} pb-16 ${panel.speaker === 'left' ? '' : 'ml-auto'}`}>
                <AnimatePresence mode="wait">
                  <SpeechBubble panel={panel} side={panel.speaker} />
                </AnimatePresence>
              </div>
            </div>

            {/* Panel number badge */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30">
              <div className="bg-black text-[#efe7d6] font-mono font-black text-xs tracking-[0.3em] px-4 py-1.5 border-[2.5px] border-black">
                PANEL {String(panel.id).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Caption box (under the frame, like a comic narration box) */}
          <motion.div
            key={`cap-${panel.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-5 md:mt-7 max-w-3xl mx-auto bg-yellow-50 border-[2.5px] border-black panel-border px-5 py-3 md:px-7 md:py-4 -rotate-[0.4deg]"
          >
            <p className="font-serif italic text-sm md:text-base text-black/80 leading-snug">
              <span className="font-mono not-italic font-black tracking-[0.3em] text-crimson text-xs mr-2">SCENE {String(idx + 1).padStart(2, '0')} —</span>
              The conversation Gujarat refuses to have with itself.
            </p>
          </motion.div>

          {/* Controls + progress */}
          <div className="mt-6 md:mt-8 flex items-center gap-4 md:gap-6 max-w-3xl mx-auto">
            <button
              onClick={goPrev}
              disabled={idx === 0}
              className="w-11 h-11 border-[2.5px] border-black bg-[#fdfaf2] panel-border flex items-center justify-center hover:bg-black hover:text-[#efe7d6] transition-colors disabled:opacity-30 disabled:hover:bg-[#fdfaf2] disabled:hover:text-black"
              aria-label="Previous panel"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setPlaying((p) => !p)}
              className="w-11 h-11 border-[2.5px] border-black bg-crimson text-white panel-border flex items-center justify-center hover:bg-black transition-colors"
              aria-label={playing ? 'Pause' : 'Play'}
            >
              {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button
              onClick={goNext}
              className="w-11 h-11 border-[2.5px] border-black bg-[#fdfaf2] panel-border flex items-center justify-center hover:bg-black hover:text-[#efe7d6] transition-colors"
              aria-label="Next panel"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="flex-1 flex items-center gap-1.5">
              {PANELS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setShowCta(false); setIdx(i) }}
                  className="flex-1 h-2 border-[1.5px] border-black relative overflow-hidden hover:bg-black/10 transition-colors"
                  aria-label={`Go to panel ${i + 1}`}
                >
                  {i < idx && <div className="absolute inset-0 bg-black" />}
                  {i === idx && (
                    <div
                      className="absolute inset-y-0 left-0 bg-crimson transition-[width] duration-75"
                      style={{ width: `${progress * 100}%` }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="hidden md:block text-[10px] font-mono tracking-[0.3em] text-black/50">
              ← → SPACE
            </div>
          </div>

        </div>

        {/* CTA Overlay */}
        <AnimatePresence>
          {showCta && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-md"
            >
              <button
                onClick={() => setShowCta(false)}
                className="absolute top-6 right-6 w-10 h-10 border-2 border-white/30 text-white/70 hover:text-white hover:border-white flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <motion.div
                initial={{ scale: 0.92, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                className="max-w-2xl w-full bg-[#fdfaf2] border-[3px] border-black panel-border p-10 md:p-14 text-center -rotate-[0.4deg]"
              >
                <p className="text-[10px] font-mono tracking-[0.5em] font-black text-crimson mb-4">END OF SEQUENCE</p>
                <h2 className="font-serif font-black text-5xl md:text-7xl italic tracking-tight text-black leading-none">
                  Reckoning.
                </h2>
                <div className="my-7 w-16 h-[3px] bg-black mx-auto" />
                <p className="font-serif text-base md:text-lg text-black/75 italic leading-relaxed">
                  The evidence is on record. The conversation is just beginning.
                </p>
                <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/brief"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-crimson text-white font-mono text-xs tracking-[0.3em] font-black border-[2.5px] border-black panel-border hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
                  >
                    OPEN DOSSIER
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#fdfaf2] text-black font-mono text-xs tracking-[0.3em] font-bold border-[2.5px] border-black panel-border hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
                  >
                    EXIT TO HOME
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
