'use client'

import React, { useRef, useState, useEffect } from 'react'
import Section from './atoms/section'
import SectionTitle from './SectionTitle'
import { motion, useInView } from 'framer-motion'
import styles from './AgentIntegration.module.css'
import OrbitPlanet from './OrbitPlanet'
import { Workflow, Clapperboard, Shield } from 'lucide-react'

type CardItem = {
  title: string
  description: string
  icon: React.ReactNode
}

export default function AgentIntegration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const items: CardItem[] = [
    {
      icon: <Workflow className={styles.icon} size={16} />,
      title: 'Conecta',
      description:
        'Integra cualquier servicio “agentic” con tus datos y apps en Bliqu, sin rehacer tu operación.',
    },
    {
      icon: <Clapperboard className={styles.icon} size={16} />, 
      title: 'Orquesta',
      description:
        'Activa agentes con eventos reales (ventas, inventario, reservas) y define qué deben leer y hacer.',
    },
    {
      icon: <Shield className={styles.icon} size={16} />,
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

  // Orbit data, refs and animation state moved inside the component
  const orbitRef = useRef(null)
  const isOrbitInView = useInView(orbitRef, { once: false, amount: 0.2 }) // aseguramos que observe mientras esté visible
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  type OrbitItem = {
    src: string
    angle: number
    radius: number
    module: string
    issue: string
    action: string
    success: string
  }

  // radios ajustados: 160 (ring1), 240 (ring2), 320 (ring3)
  const orbitItems: OrbitItem[] = [
    { 
      src: '/logos/google.png',
      angle: 20, radius: 160,
      module: '🏷️ Ventas',
      issue: 'Las ventas bajaron esta semana',
      action: 'Sugerimos descuentos y combos',
      success: 'Ventas +12%'
    },
    { 
      src: '/logos/microsoft.png',
      angle: 140, radius: 160,
      module: '💰 Finanzas',
      issue: 'Flujo de caja en rojo',
      action: 'Reprogramando pagos y gastos',
      success: 'Balance positivo'
    },
    { 
      src: '/logos/DEVF.png',
      angle: 260, radius: 160,
      module: '🪴 Inventario',
      issue: 'Productos agotados',
      action: 'Generando orden automática al proveedor',
      success: 'Stock estable'
    },
    { 
      src: '/logos/chain.png',
      angle: 60, radius: 240,
      module: '📆 Agenda / Reservas',
      issue: 'Horarios sin ocupar',
      action: 'Abriendo nuevos turnos y recordatorios',
      success: 'Agenda llena'
    },
    { 
      src: '/logos/brw.png',
      angle: 180, radius: 240,
      module: '🚛 Logística / Envíos',
      issue: 'Pedidos retrasados',
      action: 'Reasignando rutas y priorizando entregas',
      success: '99% entregas a tiempo'
    },
    { 
      src: '/logos/rb.png',
      angle: 300, radius: 240,
      module: '🛒 Catálogo / Productos',
      issue: 'Precios desactualizados',
      action: 'Sincronizando con proveedores',
      success: 'Precios actualizados'
    },
    { 
      src: '/logos/aurora.png',
      angle: 100, radius: 320,
      module: '📣 Marketing',
      issue: 'Clientes inactivos',
      action: 'Enviando campañas de reactivación',
      success: 'Retención +18%'
    },
    { 
      src: '/logos/verde.png',
      angle: 220, radius: 320,
      module: '📊 Operaciones',
      issue: 'Procesos lentos en caja',
      action: 'Reasignando personal y cajas',
      success: 'Tiempo de espera -35%'
    },
    { 
      src: '/logos/chat.png',
      angle: 280, radius: 320,
      module: '💬 Atención al cliente',
      issue: 'Consultas sin respuesta',
      action: 'Automatizando respuestas frecuentes',
      success: 'Satisfacción +25%'
    },
  ];


  // Inicia un flujo aleatorio cada ~2.5s mientras el orbital esté visible
  useEffect(() => {
    if (!isOrbitInView) return

    const tick = () => {
      setActiveIndex(prev => {
        let idx = Math.floor(Math.random() * orbitItems.length)
        // evita repetir el mismo índice consecutivamente para reiniciar la animación
        if (prev !== null && orbitItems.length > 1 && idx === prev) {
          idx = (idx + 1) % orbitItems.length
        }
        return idx
      })
    }

    // dispara uno al inicio y luego periódicamente
    tick()
    const id = setInterval(tick, 3000)

    return () => clearInterval(id)
  }, [isOrbitInView, orbitItems.length])

  useEffect(() => {
    if (isOrbitInView && activeIndex === null) {
      const idx = Math.floor(Math.random() * orbitItems.length)
      setActiveIndex(idx)
    }
  }, [isOrbitInView, activeIndex, orbitItems.length])

  return (
    <Section>
      <SectionTitle
        overtext="Agentes inteligentes"
        title="Conecta cualquier agente a tu operación."
        subtitle="Integra agentes que actualizan inventario, crean órdenes o generan reportes sin que tengas que mover un dedo.
        Tus datos, eventos y procesos viven en un mismo lugar, para que todo funcione como un equipo."
        underline='Próximamente'
      />

      {/* Orbital visual with Bliqu as the “sun” */}
      <div>
        <div className="w-full flex justify-center"
          style={{
            overflow:'hidden',
            borderRadius: '0.5rem',
            background: '#FDFDFD',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <motion.div
            ref={orbitRef}
            className={styles.orbitWrap}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={`${styles.ring} ${styles.ring1}`} />
            <div className={`${styles.ring} ${styles.ring2}`} />
            <div className={`${styles.ring} ${styles.ring3}`} />

            <div className={styles.sun}>
              <img src="/whale.svg" alt="Bliqu" />
            </div>

            <div className={`${styles.spinLayer} ${styles.spinFast}`}>
              {orbitItems.filter(i => i.radius === 160).map((item) => (
                <OrbitPlanet
                  key={`fast-${item.src}-${item.angle}`}
                  src={item.src}
                  angle={item.angle}
                  radius={item.radius}
                  module={item.module}
                  issue={item.issue}
                  action={item.action}
                  success={item.success}
                  speedClass="contentWrapFast"
                  active={activeIndex === orbitItems.indexOf(item)}
                />
              ))}
            </div>

            <div className={`${styles.spinLayer} ${styles.spinSlow}`}>
              {orbitItems.filter(i => i.radius === 240).map((item) => (
                <OrbitPlanet
                  key={`slow-${item.src}-${item.angle}`}
                  src={item.src}
                  angle={item.angle}
                  radius={item.radius}
                  module={item.module}
                  issue={item.issue}
                  action={item.action}
                  success={item.success}
                  speedClass="contentWrapSlow"
                  active={activeIndex === orbitItems.indexOf(item)}
                />
              ))}
            </div>

            {/* órbita exterior */}
            <div className={`${styles.spinLayer} ${styles.spinOuter}`}>
              {orbitItems.filter(i => i.radius === 320).map((item) => (
                <OrbitPlanet
                  key={`outer-${item.src}-${item.angle}`}
                  src={item.src}
                  angle={item.angle}
                  radius={item.radius}
                  module={item.module}
                  issue={item.issue}
                  action={item.action}
                  success={item.success}
                  speedClass="contentWrapOuter"
                  active={activeIndex === orbitItems.indexOf(item)}
                />
              ))}
            </div>
          </motion.div>
          
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div>
                <div className='flex gap-2 items-center'>
                  <span className='text-[#6E0EFF]'>{item.icon}</span>
                  <h3 className="text-lg">{item.title}</h3>
                </div>
                <p className="text-md text-black/50 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}