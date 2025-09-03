'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './CallToAction.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Tag, Timer, Smartphone, Tablet, Monitor, Earth, Fingerprint } from 'lucide-react'

interface CallToActionProps {
  showHardwareSales?: boolean
  className?: string
}

export default function CallToAction({
  showHardwareSales = true,
  className = '',
}: CallToActionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.06 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  }

  return (
    <section
      className={`py-24 bg-gradient-to-br from-white to-[#FAFAFA] ${className}`}
      aria-label="Llamados a la acción"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          className={`grid gap-8 ${
            showHardwareSales ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-2xl mx-auto'
          }`}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Columna principal: Product-Led Growth */}
          <motion.article
            className={`${styles.callToAction} relative overflow-hidden`}
            variants={cardVariants}
            aria-labelledby="cta-free-title"
          >
            <Image
              src="/shoots/cta.png"
              width={420}
              height={326}
              alt="Persona emprendedora usando el punto de venta en su negocio"
              className="mb-6 rounded-xl"
              priority
            />

            <header className="flex items-center mb-4 justify-center flex-col text-center">
              <h2 id="cta-free-title" className="text-4xl font-bold tracking-tight mb-2">
                Empieza gratis hoy
              </h2>
              <p className="text-md">
                Vende, controla inventario y entiende tus números. Sin drama.
              </p>
            </header>

            <ul className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
              <li className="flex gap-2 items-center">
                <Tag className="inline-block w-4 h-4 mr-1" />
                Sin tarjeta
              </li>
              <li className="flex gap-2 items-center">
                <Timer className="inline-block w-4 h-4 mr-1" />
                Configura en 5 min
              </li>
              <li className="flex gap-2 items-center">
                <Smartphone className="inline-block w-4 h-4 mr-1" />
                En cualquier dispositivo
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/login"
                aria-label="Ingresar a mi cuenta"
                className="inline-flex h-11 items-center justify-center rounded-xl px-5 font-medium bg-white text-black backdrop-blur-md transition-[filter] focus:outline-none focus:ring-2 focus:ring-black/20 hover:backdrop-blur-xl"
              >
                Ingresar
              </Link>
            </div>
          </motion.article>

          <motion.article
            className={`${styles.callToActionAccent} relative overflow-hidden`}
            variants={cardVariants}
            aria-labelledby="cta-free-title"
          >
            <Image
              src="/shoots/cta.png"
              width={420}
              height={326}
              alt="Persona emprendedora usando el punto de venta en su negocio"
              className="mb-6 rounded-xl"
              priority
            />

            <header className="flex items-center mb-4 justify-center flex-col text-center">
              <h2 id="cta-free-title" className="text-4xl font-bold tracking-tight mb-2">
                ¿Necesitas equipo?
              </h2>
              <p className="text-md">
                Te armamos el kit ideal. Tú te enfocas en vender.
              </p>
            </header>

            <ul className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
              <li className="flex gap-2 items-center">
                <Tablet className="inline-block w-4 h-4 mr-1" />
                Tablets
              </li>
              <li className="flex gap-2 items-center">
                <Smartphone className="inline-block w-4 h-4 mr-1" />
                Teléfonos
              </li>
              <li className="flex gap-2 items-center">
                <Monitor className="inline-block w-4 h-4 mr-1" />
                Equipo de cómputo
              </li>
              <li className="flex gap-2 items-center">
                <Fingerprint className="inline-block w-4 h-4 mr-1" />
                Kioscos táctiles
              </li>
              <li className="flex gap-2 items-center">
                <Earth className="inline-block w-4 h-4 mr-1" />
                Planes de datos
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/login"
                aria-label="Ingresar a mi cuenta"
                className="inline-flex h-11 items-center justify-center rounded-xl px-5 font-medium bg-white text-black backdrop-blur-md transition-[filter] focus:outline-none focus:ring-2 focus:ring-black/20 hover:backdrop-blur-xl"
              >
                Solicitar información
              </Link>
            </div>
          </motion.article>

        </motion.div>
      </div>
    </section>
  )
}
