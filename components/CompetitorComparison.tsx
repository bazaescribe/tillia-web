'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { X, Check, FileSpreadsheet, FileText, Smartphone, Clock, AlertTriangle, TrendingUp, Shield, Zap } from "lucide-react"
import SectionTitle from "./SectionTitle"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

const comparisonData = [
  {
    category: "Control de Inventario",
    oldWay: {
      method: "Excel / Hojas de cálculo",
      icon: FileSpreadsheet,
      problems: [
        "Fórmulas complicadas que se rompen",
        "Errores humanos al capturar datos",
        "No se actualiza en tiempo real",
        "Se pierde o corrompe fácilmente"
      ],
      painPoints: "Horas perdidas arreglando fórmulas"
    },
    newWay: {
      method: "Tillia",
      icon: Smartphone,
      benefits: [
        "Actualización automática en tiempo real",
        "Sin fórmulas complicadas",
        "Respaldos automáticos en la nube",
        "Alertas inteligentes de stock bajo"
      ],
      advantage: "Todo automatizado y confiable"
    }
  },
  {
    category: "Registro de Ventas",
    oldWay: {
      method: "Cuaderno / Papel",
      icon: FileText,
      problems: [
        "Se puede perder o dañar",
        "Difícil de buscar información",
        "Cálculos manuales propensos a errores",
        "No hay respaldos"
      ],
      painPoints: "Información perdida para siempre"
    },
    newWay: {
      method: "Tillia",
      icon: Shield,
      benefits: [
        "Información segura en la nube",
        "Búsqueda instantánea",
        "Cálculos automáticos precisos",
        "Historial completo siempre disponible"
      ],
      advantage: "Nunca más perderás información"
    }
  },
  {
    category: "Análisis de Negocio",
    oldWay: {
      method: "Calculadora / Mental",
      icon: AlertTriangle,
      problems: [
        "Análisis superficial y limitado",
        "Toma mucho tiempo hacer reportes",
        "Difícil identificar tendencias",
        "Decisiones basadas en intuición"
      ],
      painPoints: "Decisiones a ciegas"
    },
    newWay: {
      method: "Tillia",
      icon: TrendingUp,
      benefits: [
        "Reportes automáticos detallados",
        "Identificación de patrones y tendencias",
        "Sugerencias inteligentes",
        "Decisiones basadas en datos reales"
      ],
      advantage: "Insights que impulsan tu crecimiento"
    }
  }
]

export default function CompetitorComparison() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          overtext="¿Vale la pena el cambio?"
          title="100% sí. Aquí te decimos por qué."
          subtitle="Deja atrás los métodos que te limitan y abraza la tecnología que impulsa tu negocio hacia el futuro."
          align="center"
        />

        {/* Header comparison */}
        <motion.div 
          className="max-w-4xl mx-auto mt-16 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={itemVariants}
          >
            {/* Old Way */}
            <Card className="p-8 bg-red-50 border-red-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-red-800 mb-2">Método Tradicional</h3>
                <p className="text-red-600">Excel, cuadernos y calculadora</p>
                <Badge variant="destructive" className="mt-4">Limitado y propenso a errores</Badge>
              </div>
            </Card>

            {/* New Way */}
            <Card className="p-8 bg-green-50 border-green-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Con Tillia</h3>
                <p className="text-green-600">Todo integrado y automatizado</p>
                <Badge className="mt-4 bg-green-600">Inteligente y confiable</Badge>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Detailed comparisons */}
        <motion.div 
          className="max-w-6xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {comparisonData.map((comparison, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
                <h3 className="text-2xl font-bold text-center">{comparison.category}</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                {/* Old Way */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <comparison.oldWay.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{comparison.oldWay.method}</h4>
                      <p className="text-sm text-red-600 font-medium">{comparison.oldWay.painPoints}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {comparison.oldWay.problems.map((problem, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* New Way */}
                <div className="p-8 bg-gradient-to-br from-green-50 to-blue-50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <comparison.newWay.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{comparison.newWay.method}</h4>
                      <p className="text-sm text-green-600 font-medium">{comparison.newWay.advantage}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {comparison.newWay.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6" />
              <span className="font-semibold">El tiempo que pierdes no regresa</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">¿Cuánto tiempo más vas a perder con métodos obsoletos?</h3>
            <p className="text-xl opacity-90 mb-6">
              Cada día que no uses Tillia es un día de oportunidades perdidas, errores evitables y crecimiento limitado.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Setup en 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Prueba gratis 30 días</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}