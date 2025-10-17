'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './CallToAction.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Tag, Timer, Smartphone, Tablet, Monitor, Earth, Fingerprint } from 'lucide-react'
import Section from './atoms/section'

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
    <Section
      variant="dark"
      aria-label="Llamados a la acción"
    >
      <div
        style={{
          padding: '128px 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
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
      <button className='bg-[#6E0EFF] text-white mb-6 px-6 py-2 rounded-full hover:opacity-90'>
        Comenzar ahora
      </button>
      </div>
    </Section>
  )
}
