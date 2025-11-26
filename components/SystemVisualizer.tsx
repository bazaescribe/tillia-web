'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Database, Server, Globe, Zap, Layers, Package, ShoppingCart, Users } from 'lucide-react'
import SectionTitle from './SectionTitle'

// Types
interface StepData {
  title: string
  description: string
}

const steps: StepData[] = [
  {
    title: "Crea tu base operativa",
    description: "Registra clientes, productos, alumnos, pedidos, lo que sea.",
  },
  {
    title: "Relaciona tu información",
    description: "de manera automática, bliqu entiende tu negocio.",
  },
  {
    title: "Automatiza",
    description: "Obtén formularios, dashboards y flujos listos para usar. Sin programar nada.",
  },
  {
    title: "Publica tus Apps",
    description: "Crea interfaces seguras para que tu equipo y clientes operen el negocio.",
  }
]

const products = [
  {
    id: 1,
    title: "Ave del Paraíso",
    description: "Planta tropical en maceta de 30 litros",
    price: "$279.50",
    color: "bg-slate-900",
    image: "https://images.unsplash.com/photo-1550951298-5c7b95a66b21?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Rosas Rojas",
    description: "Arreglo clásico de 12 rosas. Tallo corto.",
    price: "$349.50",
    color: "bg-emerald-900",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Suculentas",
    description: "Colección de plantas desérticas en contenedor múltiple",
    price: "$147.80",
    color: "bg-purple-900",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1000&auto=format&fit=crop"
  }
]

export default function SystemVisualizer() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="w-full bg-gray-50">
      <div className="flex flex-col lg:flex-row max-w-7xl px-4 mx-auto gap-16">
        {/* Left Panel - Scrollable Content */}
        <div className="w-full lg:w-1/2 space-y-[10vh] lg:space-y-[60vh]">
          {steps.map((step, index) => (
            <Step
              key={index}
              step={step}
              index={index}
              setActiveStep={setActiveStep}
            />
          ))}
          {/* Extra space at bottom to allow scrolling the last item to center */}
          <div className="h-[20vh]" />
        </div>

        {/* Right Panel - Sticky Animation */}
        <div className="hidden lg:flex lg:w-1/2 sticky top-0 h-screen items-center justify-center overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <CardDeck activeStep={activeStep} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Step({ step, index, setActiveStep }: { step: StepData, index: number, setActiveStep: (i: number) => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })

  useEffect(() => {
    if (isInView) {
      setActiveStep(index)
    }
  }, [isInView, index, setActiveStep])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center min-h-[50vh]"
    >
      <SectionTitle
        overtext="Soluciones"
        title={step.title}
        subtitle={step.description}
      />

      {/* Mobile-only simplified visual */}
      <div className="lg:hidden mt-8">
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-16 h-24 bg-white rounded-md shadow-sm flex-shrink-0" />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function CardDeck({ activeStep }: { activeStep: number }) {
  const isStacked = activeStep >= 1
  const showApp = activeStep >= 1
  const cycleContent = activeStep >= 2

  return (
    <div className="relative w-full max-w-2xl h-[600px] flex items-center justify-center">
      {/* Product Cards */}
      {products.map((product, i) => {
        // Calculate position based on state
        // Spread state: centered around 0. i=0 -> -1, i=1 -> 0, i=2 -> 1
        const spreadX = (i - 1) * 220
        const spreadRotate = (i - 1) * 5

        // Stacked state
        const stackedX = i * 4
        const stackedY = -i * 4
        const stackedRotate = (i - 1) * 3
        const stackedScale = 1 - (i * 0.05)

        return (
          <motion.div
            key={product.id}
            className={cn(
              "absolute w-64 h-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col",
              product.color
            )}
            initial={{ x: spreadX, rotate: spreadRotate, scale: 1, zIndex: 3 - i }}
            animate={{
              x: isStacked ? stackedX : spreadX,
              y: isStacked ? stackedY : 0,
              rotate: isStacked ? stackedRotate : spreadRotate,
              scale: isStacked ? stackedScale : 1,
              zIndex: 3 - i // Keep order: first card on top in spread, but in stack we want them behind? Actually usually bottom card is bottom.
            }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          >
            {/* Image Area */}
            <div className="h-48 bg-gray-800 relative">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover opacity-90" />
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md px-2 py-1 rounded-full text-xs text-white font-medium">
                Stock: 12
              </div>
            </div>
            {/* Content Area */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h4 className="text-white font-bold text-lg mb-1">{product.title}</h4>
                <p className="text-white/70 text-xs leading-relaxed">{product.description}</p>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-white font-bold text-xl">{product.price}</span>
                <div className="bg-white/10 p-2 rounded-lg">
                  <ShoppingCart className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}

      {/* Inventory App Card - Appears on top when stacked */}
      <motion.div
        className="absolute w-72 h-[420px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 flex flex-col overflow-hidden"
        initial={{ y: -400, opacity: 0 }}
        animate={{
          y: showApp ? -20 : -400,
          opacity: showApp ? 1 : 0,
          scale: showApp ? 1.05 : 0.8,
          zIndex: 10
        }}
        transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
      >
        {/* App Header */}
        <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">Inventory App</h3>
            <p className="text-xs text-gray-500">v2.4.0 • Connected</p>
          </div>
        </div>

        {/* App Content */}
        <div className="p-4 flex-1 bg-white">
          <div className="flex justify-between items-center mb-6">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Resumen</div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <Database className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Total Items</span>
              </div>
              <span className="font-bold text-gray-900">1,248</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-md">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Proveedores</span>
              </div>
              <span className="font-bold text-gray-900">24</span>
            </div>

            {/* Cycling Insight Section */}
            <div className="mt-6 p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-bold text-indigo-700">Insight Activo</span>
              </div>
              <div className="h-12 flex items-center">
                {cycleContent ? (
                  <CyclingText />
                ) : (
                  <span className="text-sm text-indigo-900 font-medium">Analizando datos...</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Automation Card - Appears on top of App Card */}
      <motion.div
        className="absolute w-72 h-[180px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col overflow-hidden"
        initial={{ y: -400, opacity: 0, scale: 0.8 }}
        animate={{
          y: activeStep >= 2 ? 100 : -400,
          x: activeStep >= 2 ? 40 : 0,
          opacity: activeStep >= 2 ? 1 : 0,
          scale: activeStep >= 2 ? 1.1 : 0.8,
          rotate: activeStep >= 2 ? 5 : 0,
          zIndex: 20
        }}
        transition={{ type: "spring", stiffness: 90, damping: 12, delay: 0.1 }}
      >
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 flex items-center gap-2">
          <Zap className="w-5 h-5 text-white fill-white" />
          <span className="text-white font-bold text-sm">Automatización Activa</span>
        </div>
        <div className="p-4 flex flex-col justify-center h-full bg-white relative">
          {/* Flow Line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gray-100" />

          <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="w-6 h-6 rounded-full bg-red-100 border-2 border-white shadow-sm flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-red-500" />
            </div>
            <div className="text-xs">
              <span className="text-gray-500 block">Trigger</span>
              <span className="font-semibold text-gray-900">Stock Bajo: Suculentas</span>
            </div>
          </div>

          <div className="flex items-center gap-3 relative z-10">
            <div className="w-6 h-6 rounded-full bg-green-100 border-2 border-white shadow-sm flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <div className="text-xs">
              <span className="text-gray-500 block">Action</span>
              <span className="font-semibold text-gray-900">Crear Orden de Compra</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Publish Card - The Final Step */}
      <motion.div
        className="absolute w-72 h-[200px] bg-slate-900 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-slate-700 flex flex-col overflow-hidden"
        initial={{ y: -400, opacity: 0, scale: 0.8 }}
        animate={{
          y: activeStep >= 3 ? 140 : -400,
          x: activeStep >= 3 ? -20 : 0,
          opacity: activeStep >= 3 ? 1 : 0,
          scale: activeStep >= 3 ? 1.15 : 0.8,
          rotate: activeStep >= 3 ? -3 : 0,
          zIndex: 30
        }}
        transition={{ type: "spring", stiffness: 90, damping: 12, delay: 0.1 }}
      >
        <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white font-bold text-sm">App Publicada</span>
          </div>
          <Globe className="w-4 h-4 text-slate-400" />
        </div>

        <div className="p-5 flex flex-col justify-center h-full relative">
          <div className="space-y-4">
            <div className="bg-slate-800 rounded-lg p-3 flex items-center justify-between group cursor-pointer hover:bg-slate-700 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                  C
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Portal Clientes</div>
                  <div className="text-slate-400 text-xs">bliqu.app/clientes</div>
                </div>
              </div>
              <Users className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </div>

            <div className="flex gap-2">
              <div className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2 rounded-lg text-center cursor-pointer transition-colors">
                Compartir
              </div>
              <div className="px-3 py-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white cursor-pointer transition-colors">
                <Globe className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div >
  )
}

function CyclingText() {
  const texts = [
    "Tendencia: +15% Ventas en Rosas",
    "Stock Bajo: Suculentas (3 items)",
    "Oportunidad: Pack de Verano",
    "Alerta: Retraso en envío #402"
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="text-sm font-medium text-indigo-900"
      >
        {texts[index]}
      </motion.div>
    </AnimatePresence>
  )
}
