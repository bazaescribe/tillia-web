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
      className={styles.wrapper}
      aria-label="Llamados a la acción"
    >
      <Image
        src="/narwhal.png"
        width={99}
        height={64}
        alt="Persona emprendedora usando el punto de venta en su negocio"
        className="mb-6 rounded-xl"
        priority
      />
      <h2 className='text-4xl text-white mb-6'>
        ¡Al infinito y más allá!
      </h2>
      <button className='bg-[#FB0069] text-white mb-6 px-6 py-2 rounded-full hover:opacity-90'>
        Comenzar ahora
      </button>
      <Link href="/pricing" className='text-white/50'>
        Ver planes
      </Link>
    </section>
  )
}
