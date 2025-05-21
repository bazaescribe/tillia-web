'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface DeviceShowcaseProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}

export default function DeviceShowcase({
  title = "Usa lo que ya tienes, sin gastar de más",
  subtitle = "Tillia funciona con tu computadora, tablet o celular. Empieza a vender hoy con una cuenta gratis sin invertir en lectores, cajas o licencias costosas.",
  ctaText = "Crear cuenta",
  ctaLink = "#",
}: DeviceShowcaseProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  return (
    <section className="pt-40 bg-gradient-to-b from-white to-[#FAFAFA]" ref={sectionRef}>
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center mb-32">
          <h2 className="text-5xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
          
          {ctaText && (
            <div className="mt-8">
              <Button 
                asChild
              >
                <a href={ctaLink}>{ctaText}</a>
              </Button>
            </div>
          )}
        </div>
        
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Device mockups */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Tablet device */}
            <motion.div 
              className="absolute left-0 bottom-0 w-[85%] z-10"
              initial={{ y: 200, opacity: 1 }}
              animate={isInView ? { y: 48, opacity: 1 } : { y: 200, opacity: 0 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <Image
                src="/assets/ipad.png"
                alt="Tillia en tablet"
                width={800}
                height={575}
                className="object-contain"
                style={{
                  WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                  filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                }}
              />
            </motion.div>
            
            {/* Mobile device */}
            <motion.div 
              className="absolute right-0 bottom-0 w-[25%] z-20"
              initial={{ y: 200, opacity: 1 }}
              animate={isInView ? { y: 48, opacity: 1 } : { y: 200, opacity: 0 }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut",
              }}
            >
              <Image
                src="/assets/iphone.png"
                alt="Tillia en celular"
                width={300}
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