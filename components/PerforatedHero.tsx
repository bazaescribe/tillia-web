// components/PerforatedHero.tsx
'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import styles from './PerforatedHero.module.css'
import SectionTitle from './SectionTitle'

export default function PerforatedHero() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    let raf = 0
    const state = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 }

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      state.tx = (e.clientX - rect.left) / rect.width
      state.ty = (e.clientY - rect.top) / rect.height
    }

    const tick = () => {
      state.x += (state.tx - state.x) * 0.05
      state.y += (state.ty - state.y) * 0.05
      el.style.setProperty('--mx', `${state.x * 100}%`)
      el.style.setProperty('--my', `${state.y * 100}%`)

      const maxShadow = 40
      const offsetX = (0.5 - state.x) * maxShadow
      const offsetY = (0.5 - state.y) * maxShadow
      el.style.setProperty('--shadow-x', `${offsetX}px`)
      el.style.setProperty('--shadow-y', `${offsetY}px`)

      // Move image towards cursor (opposite of shadow)
      const maxImgTranslate = 16 // tune softness here (px)
      const imgX = (state.x - 0.5) * maxImgTranslate
      const imgY = (state.y - 0.5) * maxImgTranslate
      el.style.setProperty('--img-x', `${imgX}px`)
      el.style.setProperty('--img-y', `${imgY}px`)

      raf = requestAnimationFrame(tick)
    }

    el.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      el.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // justo donde ya tienes el tick
  


  return (
    <section className="relative">
      {/* Barra sticky fuera del contenedor con overflow */}
      <div className="sticky top-0 z-[30] h-14 w-full bg-white" />

      {/* Wrapper que sí puede tener overflow para las capas */}
      <div
        ref={rootRef}
        className="relative isolate min-h-[80svh] overflow-hidden py-16 flex items-center justify-center"
      >
        {/* Capa 1: fondo arcoíris animado */}
        <div
          className="absolute inset-0 -z-30 animate-[rainbow_12s_linear_infinite] bg-[length:300%_300%]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #ff0080, #ff8a00, rgb(157,255,0), rgb(0,69,230), #00b0ff, rgb(100,35,243), rgb(255,50,153))',
          }}
        />

        {/* Capa 2: radial follower */}
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            background:
              'radial-gradient(circle at var(--mx,50%) var(--my,50%), transparent 10%, white 30%)',
          }}
        />

        {/* Capa 3: perforado */}
        <div className={`absolute inset-0 -z-10 ${styles.perforated}`} />

        {/* Contenido principal */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <SectionTitle
            title="Toma decisiones inteligentes"
            subtitle="Pregúntale a Bliqu cualquier cosa sobre tu negocio para obtener información inmediata y tomar decisiones informadas fácilmente."
            overtext="Bliqu AI"
            align="center"
          />

          {/* Imagen superior con slide in y crossfade */}
          <motion.div
            className="relative mx-auto mt-20 w-[min(360px,92%)] origin-bottom"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => setEntered(true)}
            style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))' }}
          >
            {/* Wireframe visible durante el slide in */}
            <motion.img
              src="/assets/wireframe.png"
              alt="Wireframe"
              className="absolute inset-0 h-auto w-full"
              initial={{ opacity: 1 }}
              animate={{ opacity: entered ? 0 : 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />

            {/* Final chat que aparece al terminar el slide in */}
            <motion.img
              src="/assets/chat.png"
              alt="Mockup"
              className="relative h-auto w-full"
              style={{
                filter: 'drop-shadow(var(--shadow-x) var(--shadow-y) 48px rgba(0,0,0,0.04))',
                transform: 'translate(var(--img-x, 0px), var(--img-y, 0px))',
                transition: 'filter 0.05s linear, transform 0.05s linear',
                willChange: 'filter, transform',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: entered ? 1 : 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />

          </motion.div>
        </div>

        <style jsx>{`
          @keyframes rainbow {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
