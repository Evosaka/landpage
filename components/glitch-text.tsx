"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  text: string
}

export default function GlitchText({ text }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Initial glitch
    setIsGlitching(true)
    const timeout = setTimeout(() => setIsGlitching(false), 2000)

    // Set up interval for random glitches
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 1000)
    }, 5000)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="relative inline-block">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">{text}</h1>

      {isGlitching && (
        <>
          <motion.div
            className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#e91e63] opacity-70"
            style={{ clipPath: "polygon(0 15%, 100% 15%, 100% 40%, 0 40%)" }}
            animate={{ x: [-2, 1, -1, 0] }}
            transition={{ duration: 0.2, repeat: 5, repeatType: "reverse" }}
          >
            {text}
          </motion.div>

          <motion.div
            className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#00ffff] opacity-70 mix-blend-screen"
            style={{ clipPath: "polygon(0 65%, 100% 65%, 100% 80%, 0 80%)" }}
            animate={{ x: [2, -1, 1, 0] }}
            transition={{ duration: 0.3, repeat: 4, repeatType: "reverse" }}
          >
            {text}
          </motion.div>
        </>
      )}
    </div>
  )
}
