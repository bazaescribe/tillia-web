import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Smartphone, BarChart3, ShoppingBag, ArrowRight, Star } from "lucide-react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import DynamicFeatureLayout from "@/components/DynamicFeatureLayout"
import DeviceShowcase from "@/components/DeviceShowcase"
import QuickStartSteps from "@/components/QuickStartSteps"
import BusinessCategories from "@/components/BusinessCategories"
import Pricing from "@/components/Pricing" // Import the Pricing component
import TilliaVision from "@/components/TilliaVision"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        <Hero />
        
        <DynamicFeatureLayout
          title="Más ventas, menos dudas."
          subtitle="Tu negocio crece y Tillia te ayuda a llevar control de lo que vendes, lo que tienes en stock y lo que necesitas ajustar."
          imageUrl="/photos/bicycle.jpg" // Asegúrate de tener una imagen grande aquí
        />

        <QuickStartSteps />

        <DeviceShowcase/>

        <TilliaVision />
        
        <BusinessCategories />
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#BAFFFC] text-[#6A03CB] hover:bg-[#BAFFFC]/80">Success Stories</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">From Our Community</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how retail businesses like yours are growing with Tillia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Gonzalez",
                  business: "Boutique Bella, Mexico City",
                  quote:
                    "Since using Tillia, we've increased our average transaction value by 22%. The pricing suggestions are like having a retail expert on staff.",
                  stars: 5,
                },
                {
                  name: "Carlos Mendoza",
                  business: "Electro Shop, Bogotá",
                  quote:
                    "We expanded from 1 to 3 locations in just 8 months with Tillia helping us manage inventory across stores. The AI insights are game-changing.",
                  stars: 5,
                },
                {
                  name: "Luisa Vargas",
                  business: "Moda Express, Lima",
                  quote:
                    "As a non-tech person, I was worried about adopting new software. Tillia is so intuitive that my entire team was comfortable using it on day one.",
                  stars: 4,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-8 border border-gray-200">
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.stars)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#6A03CB] text-[#6A03CB]" />
                      ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.business}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section - Now using the Pricing component */}
        <Pricing />

        {/* Camera Feature Section - Added below Pricing */}
        

        {/* Closing CTA Section */}
        <section className="py-64 bg-[#FF4894]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-5xl font-bold mb-6 text-white">
                Join hundreds of stores already growing smarter with Tillia
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Start free today and see how Tillia can transform your retail business
              </p>
              <Button size="lg" className="bg-white text-[#FF3086] hover:bg-gray-100">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-[#6A03CB] font-bold">T</span>
                </div>
                <span className="font-bold text-xl text-white">Tillia</span>
              </div>
              <p className="text-gray-400 mb-4">AI-powered retail solutions for growing businesses</p>
              <div className="flex gap-4">
                {["Twitter", "Facebook", "Instagram", "LinkedIn"].map((social, index) => (
                  <Link key={index} href="#" className="text-gray-400 hover:text-white">
                    {social}
                  </Link>
                ))}
              </div>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Integrations", "Updates", "Roadmap"],
              },
              {
                title: "Resources",
                links: ["Help Center", "Guides", "API Docs", "Community", "Partners"],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Press", "Contact"],
              },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-bold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <Link href="#" className="text-gray-400 hover:text-white">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Tillia. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
