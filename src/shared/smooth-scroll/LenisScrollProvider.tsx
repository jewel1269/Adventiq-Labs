'use client'

import { FC, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ReactLenis, type LenisRef } from 'lenis/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type LenisScrollProviderProps = {
  children: React.ReactNode
}

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<LenisRef | null>(null)

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    // Run the ticker at a higher framerate for smoother feel
    gsap.ticker.lagSmoothing(0) // disables GSAP’s catch-up jumps
    gsap.ticker.fps(120) 

    gsap.ticker.add(update)
    return () => gsap.ticker.remove(update)
  }, [])

  useEffect(() => {
  lenisRef.current?.lenis?.on('scroll', ScrollTrigger.update)
  return () => lenisRef.current?.lenis?.off('scroll', ScrollTrigger.update)
}, [])

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        autoRaf: false,
        duration: 1, 
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default LenisScrollProvider
