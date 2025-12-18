// imports de la página
'use client'

import { useState } from "react"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import NewHero from "@/components/NewHero"
import CallToAction from '@/components/CallToAction'
import CustomerTestimonial from "@/components/CustomerTestimonial"
import SolutionSection from "@/components/SolutionSection"
import FeaturesGrid from "@/components/FeaturesGrid"
import AI from "@/components/AI"
import PricingCards from "@/components/PricingCards"
import AgentIntegration from "@/components/AgentIntegration"
import SystemVisualizer from "@/components/SystemVisualizer"
import UseCasesShowcase from "@/components/UseCasesShowcase"
import AIFeatures from "@/components/AIFeatures"
import IndustryTabs from "@/components/IndustryTabs"
import GrowthStories from "@/components/GrowthStories"



export default function Home() {


  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col gap-32">
        <NewHero />
        <FeaturesGrid />
        <IndustryTabs />
        <GrowthStories />
        {/* <SolutionSection /> */}
        {/* <SystemVisualizer /> */}
        {/* <UseCasesShowcase /> */}
        {/* <AIFeatures /> */}
        {/* <AI /> */}
        {/* <AgentIntegration /> */}
        {/* <CustomerTestimonial /> */}
        <PricingCards />
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
