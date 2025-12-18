'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from './atoms/section'
import SectionTitle from './SectionTitle'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Notification03Icon,
  CloudIcon,
  SparklesIcon,
  Attachment01Icon,
  MachineRobotIcon,
  SmartPhone02Icon,
  ChartEvaluationIcon
} from '@hugeicons/core-free-icons'


const features = [
  {
    title: "Tus datos a tu manera",
    description: "Registra clientes, productos, servicios y más sin bases de datos complejas ni plantillas rígidas.",
    icon: Notification03Icon,
  },
  {
    title: "Se construye mientras tú trabajas",
    description: "Olvida las instalaciones de meses. El sistema aprende de tu operación diaria y se configura solo.",
    icon: CloudIcon,
  },
  {
    title: "Todo tu negocio conectado",
    description: "Ventas, inventarios y pagos en un solo lugar. Sin archivos perdidos ni información duplicada.",
    icon: Attachment01Icon,
  },
  {
    title: "Tareas en piloto automático",
    description: "La IA detecta tus procesos repetitivos y crea flujos para que tú no tengas que hacer lo mismo dos veces.",
    icon: MachineRobotIcon,
  },
  {
    title: "Tu empresa en el bolsillo",
    description: "Accede desde cualquier dispositivo con una interfaz limpia que todo tu equipo entenderá al instante.",
    icon: SmartPhone02Icon,
  },
  {
    title: "Reportes sin esfuerzo",
    description: "Olvida el Excel. Obtén gráficas de salud financiera y operativa generadas automáticamente.",
    icon: ChartEvaluationIcon,
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function FeaturesGrid() {
  return (
    <Section>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-8 py-12"
      >
        <motion.div variants={itemVariants} className="max-w-3xl">
          <SectionTitle
            title="La mejor manera de operar y escalar tu negocio."
            subtitle="El core de negocio que se adapta a cualquier industria y se construye solo con IA."
            overtext="Beneficios"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#F9FAFB]/50 aspect-video  border border-black/[0.03] rounded-lg p-6 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:shadow-black/[0.02] hover:border-black/[0.06] transition-all duration-500 group"
            >
              <div className="flex items-center justify-start">
                <HugeiconsIcon icon={feature.icon as any} size={24} color="currentColor" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-black/90 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-black/40 group-hover:text-black/50 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
