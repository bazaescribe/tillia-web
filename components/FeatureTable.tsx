'use client'
import Image from "next/image"
import Section from "./atoms/section"

const features = [
  {
    title: "Tus productos bajo control",
    text: "Ve lo que tienes, lo que vendes y lo que falta, sin dolores de cabeza. Simple, claro y siempre actualizado.",
    image: "/images/market.jpg",
    bg: "bg-black text-white",
  },
  {
    title: "No pierdas más dinero",
    text: "Detecta oportunidades, sugiere cambios y optimiza precios sin que tengas que romperte la cabeza.",
    image: null,
    bg: "bg-black text-white",
  },
  {
    title: "Planea antes de que suceda",
    text: "Proyecta tus ventas y finanzas en segundos. Sin fórmulas, sin hojas de cálculo. Solo claridad para decidir mejor.",
    image: null,
    bg: "bg-black text-white",
  },
  {
    title: "Claridad hasta el último centavo",
    text: "Reúne todos tus ingresos en un solo lugar. Accede a tus fondos al instante y ahorra para gastos futuros.",
    image: "/images/coffee.jpg",
    bg: "bg-black text-white",
  },
  {
    title: "Vende sin cajas ni cables.",
    text: "Ve lo que tienes, lo que vendes y lo que falta, sin dolores de cabeza. Simple, claro y siempre actualizado.",
    image: "/images/tattoo.jpg",
    bg: "bg-black text-white",
  },
  {
    title: "No gastes más papel",
    text: "Registra, cobra y gestionas sin desperdicio. Una operación moderna y 100% digital.",
    image: "/images/plant.jpg",
    bg: "bg-green-100 text-green-900",
  },
]

export default function FeatureGrid() {
  return (
    <Section variant="light">
      <div className="text-center mb-20">
        <p className="text-sm text-gray-500">Descubre lo que Woravi puede hacer por ti</p>
        <h2 className="text-3xl font-bold mt-1 mb-3">Todo lo que necesitas en un solo lugar</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Olvídate de mantener 10 servicios distintos, integraciones frágiles y mil hojas de cálculo.
          Integra tu operación en un solo lugar y escálala cuando tú lo haces.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-4">
        {/* Columna Izquierda (2/3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card feature={features[0]} className="md:col-span-2 min-h-[280px]" />
          <Card feature={features[2]} />
          <Card feature={features[3]} />
          <Card feature={features[4]} className="md:col-span-2" />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Card feature={features[1]} className="min-h-[280px]" />
          <Card feature={features[5]} />
        </div>
      </div>
    </Section>
  )
}

function Card({ feature, className = "" }: { feature: any; className?: string }) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden flex flex-col justify-end p-6 min-h-[220px] ${feature.bg} ${className}`}
    >
      {feature.image && (
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="absolute inset-0 object-cover z-0 brightness-75"
        />
      )}
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
        <p className="text-sm max-w-md">{feature.text}</p>
      </div>
    </div>
  )
}
