'use client'
import Image from "next/image"
import Section from "./atoms/section"
import SectionTitle from "./SectionTitle"
import { motion, Variants } from 'framer-motion'
import { useMemo } from "react"

const features = [
  {
    title: "Tus productos bajo control",
    text: "Ve lo que tienes, lo que vendes y lo que falta, sin dolores de cabeza. Simple, claro y siempre actualizado.",
    image: "/photos/bg-market.jpg",
    bg: "bg-black text-white",
  },
  {
    title: "No pierdas más dinero",
    text: "Detecta oportunidades, sugiere cambios y optimiza precios sin que tengas que romperte la cabeza.",
    image: "/photos/calculator.jpg",
    bg: "bg-black text-white",
  },
  {
    title: "Planea antes de que suceda",
    text: "Proyecta tus ventas y finanzas en segundos. Sin fórmulas, sin hojas de cálculo. Solo claridad para decidir mejor.",
    image: "/photos/woman-ipad.jpg",
    bg: "bg-black text-white",
  },
  {
    title: "Claridad hasta el último centavo",
    text: "Reúne todos tus ingresos en un solo lugar. Accede a tus fondos al instante y ahorra para gastos futuros.",
    image: "/photos/grocery.jpg",
    bg: "bg-black text-white",
  },
  {
    title: "Vende sin cajas ni cables.",
    text: "Ve lo que tienes, lo que vendes y lo que falta, sin dolores de cabeza. Simple, claro y siempre actualizado.",
    image: "/photos/pay.png",
    bg: "bg-black text-white",
  },
  {
    title: "No gastes más papel",
    text: "Registra, cobra y gestionas sin desperdicio. Una operación moderna y 100% digital.",
    image: "/photos/green.jpg",
    bg: "bg-green-100 text-white",
  },
]

// Variants para el “pop”
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
      mass: 0.9,
      delay,
    },
  }),
}

// PRNG determinista para evitar hydration mismatch (en base a una key)
function hashStringToDelay(key: string, min = 0.04, max = 0.22) {
  let h = 2166136261
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i)
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)
  }
  // Mapear a [0,1)
  const x = Math.abs(h % 1000) / 1000
  return min + x * (max - min)
}

export default function FeatureGrid() {
  return (
    <Section variant="light">
      <SectionTitle
        title="Todo lo que necesitas en un solo lugar"
        subtitle="Descubre las funciones clave de Woravi que te ayudarán a optimizar tu operación y mejorar tus ventas."
        overtext="Características"
      />

      <div className="grid mt-16 grid-cols-1 lg:grid-cols-[2fr,1fr] gap-4">
        {/* Columna Izquierda (2/3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card feature={features[0]} className="md:col-span-2 min-h-[280px]" />
          <Card feature={features[2]} />
          <Card feature={features[3]} />
          <Card feature={features[4]} className="md:col-span-2" />
        </div>

        {/* Columna Derecha (1/3) */}
        <div className="grid grid-cols-1 gap-4">
          <Card feature={features[1]} className="min-h-[280px]" />
          <Card feature={features[5]} />
        </div>
      </div>
    </Section>
  )
}

function Card({ feature, className = "" }: { feature: any; className?: string }) {
  // delay único por tarjeta usando su título + imagen como key
  const delay = useMemo(
    () => hashStringToDelay(`${feature.title}-${feature.image ?? ''}`),
    [feature.title, feature.image]
  )

  return (
    <motion.div
      className={`relative rounded-xl shadow-xl overflow-hidden flex flex-col justify-end p-8 min-h-[420px] ${feature.bg} ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      custom={delay}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -10% 0px" }}
    >
      {feature.image && (
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0 object-cover z-0 brightness-75"
        />
      )}

      <div
        className="relative z-10 info-overlay"
        style={{
          margin: '-2rem',
          padding: '2rem',
          textShadow: '0 0 24px rgba(0, 0, 0, 1)',
        }}
      >
        <div className="info-content">
          <h3 className="text-3xl font-bold mb-2">{feature.title}</h3>
          <p className="text-lg opacity-70 max-w-md">{feature.text}</p>
        </div>
      </div>

      <style jsx>{`
        .info-overlay {
          position: relative;
        }
        .info-overlay::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
          -webkit-mask-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 40%,
            rgba(0, 0, 0, 0) 90%
          );
          mask-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 40%,
            rgba(0, 0, 0, 0) 90%
          );
        }
        .info-content {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </motion.div>
  )
}
