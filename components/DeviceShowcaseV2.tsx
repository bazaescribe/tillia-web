'use client'

import Image from "next/image"
import AnimatedShowcase, { AnimatedElement } from "./AnimatedShowcase"
import { useRef } from "react"
import { useInView } from "framer-motion"

interface DeviceShowcaseProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}

export default function DeviceShowcaseV2({
  title = "Vende desde cualquier dispositivo",
  subtitle = "Woravi funciona con tu computadora, tablet o celular. Empieza a vender hoy con una cuenta gratis sin invertir en lectores, cajas o licencias costosas.",
  ctaText = "Crear cuenta",
  ctaLink = "#",
}: DeviceShowcaseProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  return (
    <AnimatedShowcase
      title={title}
      subtitle={subtitle}
      ctaText={ctaText}
      ctaLink={ctaLink}
    >
      <div className="relative h-[400px] md:h-[500px]" ref={sectionRef}>
        {/* Tablet device */}
        <AnimatedElement
          className="absolute left-0 bottom-0 w-[85%] z-10"
          isInView={isInView}
          duration={0.8}
        >
          <Image
            src="/assets/ipad.png"
            alt="Woravi en tablet"
            width={800}
            height={575}
            className="object-contain"
            style={{
              WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
              filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
            }}
          />
        </AnimatedElement>
        
        {/* Mobile device */}
        <AnimatedElement
          className="absolute right-0 bottom-0 w-[25%] z-20"
          isInView={isInView}
          duration={1.2}
          delay={0.4}
        >
          <Image
            src="/assets/iphone.png"
            alt="Woravi en celular"
            width={300}
            height={600}
            className="object-contain"
            style={{
              WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
              filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
            }}
          />
        </AnimatedElement>
      </div>
    </AnimatedShowcase>
  )
}