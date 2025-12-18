'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Section from './atoms/section'
import SectionTitle from './SectionTitle'
import { cn } from '@/lib/utils'


const industries = [
  {
    id: 'retail',
    name: 'Retail',
    image: '/photos/picture-retail.jpg',
    title: 'Control absoluto sin mover un dedo extra',
    description: 'Administra inventario, conecta ventas con proveedores y entiende tu operación en tiempo real. Un panel que se arma solo y te deja respirar.'
  },
  {
    id: 'restaurants',
    name: 'Restaurantes y cafés',
    image: '/photos/picture-restaurant.jpg',
    title: 'Controla cocina, inventario y ventas sin caos',
    description: 'Arma recetas, gestiona insumos, recibe alertas de bajo stock y conecta ventas con merma sin sumar otro POS.'
  },
  {
    id: 'services',
    name: 'Servicios',
    image: '/photos/picture-service.jpg',
    title: 'Estandariza tu operación y respira tranquilo',
    description: 'Define procesos repetibles, gestiona clientes y automatiza tareas sin perder claridad ni control.'
  },
  {
    id: 'production',
    name: 'Producción ligera',
    image: '/photos/picture-production.jpg',
    title: 'Coordina insumos, procesos y entregas',
    description: 'Ideal para talleres, empaquetado, ensamble y laboratorios. Controla insumos, procesos, lotes y entregas desde un espacio visual.'
  },
  {
    id: 'consulting',
    name: 'Consultoria',
    image: '/photos/picture-consulting.jpg',
    title: 'Proyectos claros, entregas a tiempo',
    description: 'Administra clientes, etapas, entregables y facturación interna desde un espacio modular que trabaja contigo.'
  }
]

export default function IndustryTabs() {
  const [activeTab, setActiveTab] = useState(industries[0].id)

  const activeIndustry = industries.find(i => i.id === activeTab) || industries[0]

  return (
    <Section>
      <div className="flex flex-col gap-12 py-12">
        <SectionTitle
          title="Una solución, infinitas posibilidades."
          subtitle="No importa qué vendas o cómo operes, tu sistema se adapta a tu flujo de trabajo real."
          overtext='Casos de uso'
        />



        {/* Content Area */}
        <div className="flex flex-col gap-6 items-start min-h-[500px]">

          {/* Tabs Row */}
          <div className="flex flex-wrap items-center gap-2">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={cn(
                  "pr-6 rounded-full text-xl font-semibold transition-all duration-300 relative",
                  activeTab === industry.id
                    ? "text-[#5729FF]"
                    : "text-black/40 hover:text-black/60"
                )}
              >
                {industry.name}
                {activeTab === industry.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-black/[0.04] rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Image Side */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/[0.05] bg-slate-050">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Text Side */}
          <div className="flex flex-col gap-8">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col max-w-lg"
              >
                <h4 className='text-lg font-semibold'>
                  Soluciones para {activeIndustry.name}
                </h4>
                <p className='text-md'>
                  {activeIndustry.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  )
}
