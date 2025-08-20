'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "./ui/badge"

interface DeviceShowcaseProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}

export default function WoraviVision({
  title = "Visión que transforma tus ventas",
  subtitle = "Detecta artículos en un instante, cobra con fluidez y actualiza tu inventario desde la cámara de tus dispositivos. Como por arte de magia.",
  ctaText = "Crear cuenta",
  ctaLink = "#",
}: DeviceShowcaseProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  return (
    <section className="pt-40 bg-[#0C0F12] text-white" ref={sectionRef}>
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center mb-40">
          
          <p className="text-lg text-[#FF4894] mb-2">
            Woravi Vision
          </p>
          <h2 className="text-5xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-400 mb-12">{subtitle}</p>
          
          <p className="text-sm text-gray-600">
          Disponible en otoño 2025 para usuarios del Plan Pro
          </p>
        </div>
        
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Device mockups */}
          <div className="relative h-[200px] md:h-[500px]">
            {/* Tablet device */}
            <motion.div 
              className="absolute bottom-0 w-[100%] z-10 flex justify-center"
              initial={{ y: 200, opacity: 1 }}
              animate={isInView ? { y: 48, opacity: 1 } : { y: 200, opacity: 0 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <Image
                src="/assets/ipad-vision.png"
                alt="Woravi en tablet"
                width={840}
                height={600}
                className="object-contain"
                style={{
                  WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                  filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}