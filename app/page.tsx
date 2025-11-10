// imports de la página
'use client'

import { useState } from "react"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import NewHero from "@/components/NewHero"
import CallToAction from '@/components/CallToAction'
import Logos from "@/components/logos"
import CustomerTestimonial from "@/components/CustomerTestimonial"
import SolutionSection from "@/components/SolutionSection"
import AI from "@/components/AI"
import PricingCards from "@/components/PricingCards"
import UseCases from "@/components/UseCases"
import AgentIntegration from "@/components/AgentIntegration"


export default function Home() {


  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <NewHero />
        <Logos />
        <SolutionSection />
        <AI />
        <AgentIntegration />
        <CustomerTestimonial />
        <PricingCards />
        <UseCases />
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
