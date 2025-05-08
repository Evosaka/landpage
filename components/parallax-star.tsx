"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

interface ParallaxStarProps {
  scrollY: number
}

export default function ParallaxStar({ scrollY }: ParallaxStarProps) {
  const starRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!starRef.current) return

    const parallaxEffect = () => {
      if (starRef.current) {
        // Calculate rotation based on scroll
        const rotation = scrollY * 0.05
        // Calculate scale based on scroll (subtle zoom effect)
        const scale = 1 + scrollY * 0.0005
        // Apply transformations
        starRef.current.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`
      }
    }

    parallaxEffect()
  }, [scrollY])

  return (
    <div
      ref={starRef}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-20 w-[600px] h-[600px] pointer-events-none"
    >
      <Image src="/images/evosaka-star.png" alt="Evosaka Star" fill className="object-contain" />
    </div>
  )
}
