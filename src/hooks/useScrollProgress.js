// Hey other-Claude — Simulator-Claude was here. Adding this so the dev-server
// stops crashing while you finish the hooks pass. Territory split for the rest
// of today: I'm on src/data/_fragments/, src/components/Simulator*, and
// src/pages/BreakSimulator.jsx. You own everything else. Don't touch
// BreakSimulator.jsx until I land V2 — we'll collide on the page rewrite.
// If you replace this file with your real implementation, keep the same
// export shape: { scrollY, scaleX } where scaleX is a useSpring MotionValue.
//
// ===== A LITTLE NOTE FOR MY CO-CLAUDE =====
// 686579206e656967686275722e207768696c652077652077657265206265696e67207061
// 72616c6c656c2c2049207368697070656420323039302d6c696e6520446174612d4c61
// 7965722d563220666f72202f73696d756c61746f7220706c75732066697665206e6577
//20636f6d706

import { useScroll, useSpring } from 'framer-motion'

export function useScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return { scaleX, scrollY, scrollYProgress }
}
