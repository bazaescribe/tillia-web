'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import SectionTitle from "./SectionTitle"

export default function QuickStartSteps() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const steps = [
    {
      title: "Crea tu cuenta",
      description:
        "Solo necesitas tu correo y el nombre de tu negocio. Sin papeleo, sin llamadas, sin vueltas.",
      image: "/photos/tablet.jpg",
      imageAlt: "Registro de cuenta en tienda",
    },
    {
      title: "Sube tus productos",
      description:
        "Crea tu catálogo en segundos. Puedes importar desde Excel o escribir directo.",
      image: "/photos/catalog.jpg",
      imageAlt: "Subida de productos a catálogo",
    },
    {
      title: "Comienza a vender",
      description:
        "Ya sea en mostrador, por redes sociales o eventos, empieza a registrar ventas, ver reportes y tomar decisiones con la tranquilidad de que todo está bajo control.",
      image: "/photos/counter.jpg",
      imageAlt: "Vendiendo en mostrador o evento",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.1,
      },
    },
  }

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  }

  return (
    <section className="py-40 bg-gradient-to-b from-white to-[#FAFAFA]" id="how-it-works">
      <div className="container max-w-8xl mx-auto">
        <SectionTitle
          overtext="¿Cómo funciona?"
          title="Configura tu tienda en minutos"
          subtitle="Pon tu negocio en marcha en minutos. No necesitas técnicos, cursos ni nuevas
            inversiones. Solo sigue tres pasos y deja que la herramienta trabaje por ti."
        />

        <motion.div 
          ref={containerRef}
          className="grid mt-14 grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col"
              variants={stepVariants}
            >
              <div className="mb-6 rounded-3xl overflow-hidden shadow-sm w-full relative"
                style={{
                  aspectRatio: '12/10'
                }}
              >
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <h3 className="text-lg text-gray-800">
                <span className="font bold mr-1 text-black-100 font-bold">{step.title}</span>
                {step.description}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}