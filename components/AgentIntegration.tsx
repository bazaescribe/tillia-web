'use client'

import React, { useRef } from 'react'
import Section from './atoms/section'
import SectionTitle from './SectionTitle'
import { motion, useInView } from 'framer-motion'
import styles from './AgentIntegration.module.css'

type CardItem = {
  title: string
  description: string
}

export default function AgentIntegration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const items: CardItem[] = [
    {
      title: 'Conecta',
      description:
        'Integra cualquier servicio “agentic” con tus datos y apps en Bliqu, sin rehacer tu operación.',
    },
    {
      title: 'Orquesta',
      description:
        'Activa agentes con eventos reales (ventas, inventario, reservas) y define qué deben leer y hacer.',
    },
    {
      title: 'Ejecución segura',
      description:
        'Cada agente opera con permisos claros y deja trazas de lo que hizo, para auditar y mejorar.',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  // Definición de los elementos en órbita (logos + prompts)
  type OrbitItem = { src: string; angle: number; radius: number; label: string }
  const orbitItems: OrbitItem[] = [
    { src: '/logos/google.png',    angle:  20, radius: 140, label: 'Genera reporte de ventas' },
    { src: '/logos/microsoft.png', angle: 140, radius: 140, label: 'Sincroniza pedidos' },
    { src: '/logos/DEVF.png',      angle: 260, radius: 140, label: 'Actualiza catálogo' },
    { src: '/logos/chain.png',     angle:  60, radius: 200, label: 'Crea orden de compra' },
    { src: '/logos/brw.png',       angle: 180, radius: 200, label: 'Programa envío' },
    { src: '/logos/rb.png',        angle: 300, radius: 200, label: 'Revisar stock bajo' },
  ]

  return (
    <Section>
      <SectionTitle
        overtext="Agentes inteligentes"
        title="Conecta cualquier agente a tu operación."
        subtitle="Bliqu es tu back office as a service, listo para trabajar con servicios
        de agentes. Tus datos, eventos y acciones viven en un mismo lugar para que los agentes resuelvan tareas de punta a punta."
      />

      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="rounded-md shadow-[var(--shadow-card)] bg-white"
            style={{ boxShadow: 'var(--shadow-card)' }}
            variants={itemVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="p-6">
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-black/50">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Visual orbital con el logo de Bliqu como “sol” */}
      <motion.div
        className={styles.orbitWrap}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={`${styles.ring} ${styles.ring1}`} />
        <div className={`${styles.ring} ${styles.ring2}`} />
        <div className={`${styles.ring} ${styles.ring3}`} />

        <div className={styles.sun}>
          <img src="/logo.png" alt="Bliqu" />
        </div>

        {orbitItems.map((item, i) => (
          <div key={i} className={styles.orbitItem} style={{ '--angle': `${item.angle}deg`, '--radius': `${item.radius}px` } as React.CSSProperties}>
            <div className={styles.badge}>
              <img src={item.src} alt="logo" />
            </div>
            <div className={styles.prompt}>{item.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Ejemplo simple del flujo A2A */}
      <motion.div
        className="mt-8 rounded-lg border border-black/10 p-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="text-sm text-black/60">
          Ejemplo: cuando una venta baja tu inventario, un agente propone reordenar, calcula cantidades y
          programa la compra en tu app — todo con permisos y registro.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs px-3 py-1 rounded-full bg-[#F3EDFF] text-[#6E0EFF]">Evento</span>
          <span className="text-xs text-black/30">→</span>
          <span className="text-xs px-3 py-1 rounded-full bg-[#F3EDFF] text-[#6E0EFF]">Agente</span>
          <span className="text-xs text-black/30">→</span>
          <span className="text-xs px-3 py-1 rounded-full bg-[#F3EDFF] text-[#6E0EFF]">Acción en Bliqu</span>
          <span className="text-xs text-black/30">→</span>
          <span className="text-xs px-3 py-1 rounded-full bg-[#F3EDFF] text-[#6E0EFF]">Trazabilidad</span>
        </div>
      </motion.div>
    </Section>
  )
}