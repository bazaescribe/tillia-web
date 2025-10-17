'use client'

import { useState } from "react"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import NewHero from "@/components/NewHero"
import CallToAction from '@/components/CallToAction'
import CardStepsSection from "@/components/CardStepsSection"
import Logos from "@/components/logos"
import FeatureGrid from "@/components/FeatureTable"
import DecisionHero from "@/components/DecisionHero"
import PricingPlan from "@/components/PricingPlan"
import PerforatedHero from "@/components/PerforatedHero"



export default function Home() {

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

        <Logos />

        <FeatureGrid />

        <PerforatedHero />

        {/* <DecisionHero /> */}

        <PricingPlan />

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
