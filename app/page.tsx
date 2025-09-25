'use client'

import { useState } from "react"

import Navbar from "@/components/Navbar"
import QuickStartSteps from "@/components/QuickStartSteps"
import Footer from "@/components/Footer"
import SocialProof from "@/components/SocialProof"
import Testimonials from "@/components/Testimonials"
import NewHero from "@/components/NewHero"
import WordArt from "@/components/WordArt"
import Service from "@/components/Service"
import CompetitorComparison from "@/components/CompetitorComparison"
import CallToAction from '@/components/CallToAction'
import PaperlessSection from "@/components/PaperlessSection"

import CardStepsSection from "@/components/CardStepsSection"
import { steps } from "framer-motion"
import ComparisonUpgrade from "@/components/ComparisonUpgrade"

export default function Home() {

  const services = [
    {
      title: "Control sin esfuerzo",
      subtitle: "tu inventario siempre claro",
      overtext: "Administración de Inventario",
      price: "Desde $0.00",
      cta: "Probar gratis",
      description:
        "Gestiona existencias con precisión absoluta. Tu negocio siempre sabe qué entra, qué sale y qué falta, sin hojas de cálculo ni dolores de cabeza.",
      image: "product-report.png",
    },
    {
      title: "Vende fácil",
      subtitle: "desde cualquier dispositivo",
      overtext: "Punto de Venta",
      price: "Desde $0.00",
      cta: "Probar gratis",
      description:
        "Olvídate de llamadas largas, equipo costoso o instalaciones complejas. Abre tu punto de venta en minutos y empieza a cobrar sin fricciones.",
      image: "pos.png",
    },
    {
      title: "Producción simple",
      subtitle: "resultados grandes",
      overtext: "Manufactura",
      price: "Desde $479.00 / al mes",
      cta: "Empezar ahora",
      description:
        "Organiza tu producción como si fuera magia. Ve de materias primas a productos terminados con la claridad y el orden que siempre quisiste.",
      image: "production.png",
    },
    {
      title: "Tu tienda online",
      subtitle: "lista en un click",
      overtext: "Venta en Línea",
      price: "Próximamente",
      cta: "Unirme a la lista",
      description:
        "Crea tu tienda digital con un click o conéctala a los grandes marketplaces. Tú decides hasta dónde crecer, nosotros lo hacemos simple.",
      image: "store.png",
    },
    {
      title: "Vende en todos lados",
      subtitle: "sin esfuerzo extra",
      overtext: "Ventas omnicanal",
      price: "Próximamente",
      cta: "Explorar",
      description: "Tu catálogo conectado a apps de delivery, marketplaces y redes sociales con un solo clic. Todo desde el mismo inventario centralizado.",
      image: "delivery.png",
    },
    {
      title: "Restaurantes sin fricción",
      subtitle: "del pedido a la mesa",
      overtext: "Restaurantes",
      price: "Próximamente",
      cta: "Unirme a la lista",
      description:
        "Comanda, cocina y caja en perfecta armonía. Que tu equipo fluya y tus clientes disfruten sin esperas ni complicaciones.",
      image: "food.png",
    },
    {
      title: "Agenda simple",
      subtitle: "tiempos siempre en orden",
      overtext: "Citas y Espacios",
      price: "Próximamente",
      cta: "Unirme a la lista",
      description:
        "Organiza citas, reservas y espacios sin complicaciones. Tus clientes encuentran el momento perfecto y tú mantienes todo bajo control, sin llamadas ni confusión.",
      image: "reservation.png",
    },
  ];

  const opsFeatures = [
    {
      title: "Administra con precisión absoluta.",
      description: "Tu negocio siempre sabe qué entra, qué sale y qué falta, sin hojas de cálculo ni dolores de cabeza.",
      image: "/shoots/product-report.png",
      background: '/photos/service-bg-stock.png',
      imageAlt: "Alt text for image 1"
    },
    {
      title: "Tu tiempo y espacios, bien organizados",
      description: "Citas fáciles, reservas sin estrés y un calendario que nunca se pierde.",
      image: "/shoots/reservation.png",
      background: '/photos/service-bg-nails.png',
      imageAlt: "Alt text for image 2"
    },
    {
      title: "Produce como si fuera magia",
      description: "Ve de materias primas a productos terminados con la claridad y el orden que siempre quisiste.",
      image: "/shoots/production.png",
      background: '/photos/service-bg-manufacture.png',
      imageAlt: "Alt text for image 2"
    },
    {
      title: "Administra tu restaurante",
      description: "Organiza tu restaurante con facilidad. Controla tu menú, pedidos y reservas en un solo lugar.",
      image: "/shoots/food.png",
      background: '/photos/service-bg-food.png',
      imageAlt: "Alt text for image 2"
    },
    {
      title: "Tus gastos bajo control",
      description: "Controla tus gastos con precisión y claridad. No más hojas de cálculo confusas ni dudas sobre tu finanzas.",
      image: "/shoots/finance.png",
      background: '/photos/service-bg-finance.png',
      imageAlt: "Alt text for image 2"
    },
    // ... more steps
  ]

  const salesFeatures = [
      {
        title: "Vende fácil desde cualquier dispositivo",
        description: "Abre tu punto de venta en minutos y empieza a cobrar sin fricciones.",
        image: "/shoots/pos.png",
        background: '/photos/service-bg-sneakers.png',
        imageAlt: "Alt text for image 2"
      },
      {
        title: "Tu tienda online lista en un click",
        description: "Crea o conecta tu tienda en minutos y comienza a despachar pedidos.",
        image: "/shoots/store.png",
        background: '/photos/service-bg-store.png',
        imageAlt: "Alt text for image 2"
      },
      {
        title: "Vende en todos lados",
        description: "Conecta tu tienda a los grandes marketplaces y a las apps de delivery.",
        image: "/shoots/delivery.png",
        background: '/photos/service-bg-delivery.png',
        imageAlt: "Alt text for image 2"
      },
    ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <NewHero />
        {/* <SocialProof /> */}
        {/* <WordArt /> */}
        <CardStepsSection 
          overtext="Operaciones"
          title="El poder de tu negocio, en la palma de tu mano."
          subtitle="Desde que lo compras hasta que lo vendes. Todo fluye en un mismo sistema."
          items={opsFeatures}
        />
        <CardStepsSection 
          overtext="Ventas"
          title="Vende en todos lados, sin perder el ritmo."
          subtitle="Haz que tu negocio esté donde están tus clientes: en tu tienda, en línea o en las apps que ya conoces, siempre con la misma facilidad."
          items={salesFeatures}
        />
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
