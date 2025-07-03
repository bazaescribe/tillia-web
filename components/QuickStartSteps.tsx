'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

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
    <section className="py-40 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="container max-w-8xl mx-auto">
        <motion.div 
          className="flex flex-col items-center mb-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-5xl font-bold mb-4">Comienza a vender en minutos</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Pon tu negocio en marcha en minutos. No necesitas técnicos, cursos ni nuevas
            inversiones. Solo sigue tres pasos y deja que la herramienta trabaje por ti.
          </p>
        </motion.div>

        <motion.div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center"
              variants={stepVariants}
            >
              <div className="mb-6 rounded-3xl overflow-hidden shadow-sm w-full relative"
                style={{
                  aspectRatio: '2/3'
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
              <h3 className="text-xl font-bold mb-2 mt-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}