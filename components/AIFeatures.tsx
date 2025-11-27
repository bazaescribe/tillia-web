'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Search, Shield, MessageSquare, BarChart3 } from 'lucide-react'
import Section from './atoms/section'
import SectionTitle from './SectionTitle'

const features = [
  {
    id: "configuracion-rapida",
    title: "Configuración en minutos",
    description: "Dile a Bliqu qué negocio tienes y el sistema se arma solo. Modela tus productos, servicios, clientes y flujos sin plantillas, sin tablas, sin estrés y comienza a operar en minutos como si fuera en un cuaderno.",
    image: "/shoots/ui-config.jpg",
    important: false
  },
  {
    id: "apps-reportes-auto",
    title: "Apps y reportes generados automáticamente",
    description: "Tu operación se convierte en una app completa. Bliqu crea pantallas, flujos, dashboards y reportes listos para usar desde tus propios datos. Todo ajustado a tu industria, sin programar ni un botón.",
    image: "/shoots/ui-gen.jpg",
    important: false
  },
  {
    id: "interfaces-clientes",
    title: "Interfaces para tus clientes sin escribir código",
    description: "Vende, toma pedidos o registra servicios con micro apps hechas por AI. Formularios, portales, catálogos y flujos externos que se generan solos y se conectan directo a tu operación interna.",
    image: "/shoots/ui-client.jpg",
    important: false
  },
  {
    id: "inteligencia-proactiva",
    title: "Inteligencia que te avisa qué hacer",
    description: "Detecta anomalias, proyecta escenarios y te sugiere acciones directas. Si algo se está acabando, subiendo, bajando, fallando o desviando, Bliqu lo ve primero y te dice exactamente qué hacer para corregirlo.",
    image: "/shoots/ui-alert.jpg",
    important: false
  }
];


interface Feature {
  id: string;
  title?: string;
  description?: string;
  important: boolean;
  image: string;
}

interface ProcessedFeature extends Feature {
  startSlot: number;
  endSlot: number;
}

export default function AIFeatures() {
  return (
    <Section>
      <SectionTitle
        overtext="Inteligencia Artificial"
        title="Operación asistida por IA"
        subtitle="Automatiza tareas complejas y toma mejores decisiones con nuestras herramientas de inteligencia artificial integradas."
        align='center'
      />

      <div className="mx-auto full-width">
        {/* Grid Container with gap for inner borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-black/10 rounded-2xl overflow-hidden">
          {/* First item with special animation */}
          <div className="group relative bg-white transition-colors duration-300 md:col-span-2">
            <div className="w-full">
              <motion.img
                src="/shoots/ui-spotlight.jpg"
                alt="Análisis Inteligente"
                className="w-full h-auto object-cover"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>

          {features.reduce((acc: ProcessedFeature[], feature) => {
            const prevEnd = acc.length > 0 ? acc[acc.length - 1].endSlot : 0;
            // If the previous item ended on an odd slot (1, 3, etc) and the current is full width (2 slots),
            // the grid will wrap the full width item to the next line (next even slot).
            // So if prevEnd % 2 !== 0 and feature.important, startSlot should be prevEnd + 1.
            let startSlot = prevEnd;
            if (feature.important && startSlot % 2 !== 0) {
              startSlot++;
            }

            const endSlot = startSlot + (feature.important ? 2 : 1);
            acc.push({ ...feature, startSlot, endSlot });
            return acc;
          }, []).map((feature, index) => {
            const isFull = feature.important;
            const isLeft = !isFull && feature.startSlot % 2 === 0;
            const isRight = !isFull && feature.startSlot % 2 !== 0;

            let paddingClasses = "p-12 pb-0"; // Mobile base (includes top padding)

            if (isFull) {
              paddingClasses += " md:px-0";
            } else if (isLeft) {
              paddingClasses += " md:pl-0 md:pr-12";
            } else if (isRight) {
              paddingClasses += " md:pl-12 md:pr-0";
            }

            return (
              <div
                key={index}
                className={`group relative bg-white transition-colors duration-300 ${feature.important ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
              >
                {feature.title && feature.description && (
                  <div className={paddingClasses}>
                    <h3 className="text-lg font-semibold text-black">
                      {feature.title}
                    </h3>
                    <p className="text-black/40 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )}
                <div className="mt-8 w-full">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
