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
import Pricing from "@/components/Pricing"
import TilliaVision from "@/components/TilliaVision"
import TilliaFeatures from "@/components/TilliaFeatures"
import Footer from "@/components/Footer" // Importar el nuevo componente Footer
import FeatureGrid from "@/components/FeatureGrid"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        <Hero />
        
        <DynamicFeatureLayout
          title="La forma más fácil de administrar tus ventas."
          subtitle="Tu negocio crece y Tillia te ayuda a llevar control de lo que vendes, lo que tienes en stock y lo que necesitas ajustar."
          imageUrl="/photos/bicycle.jpg" // Asegúrate de tener una imagen grande aquí
        />

        <QuickStartSteps />

        <DeviceShowcase/>

        <TilliaVision />

        <FeatureGrid
          title="Simplifica tu día a día con Tillia"
          subtitle="Olvídate de complicaciones. Tillia automatiza y optimiza tus ventas, inventario y promociones, para que puedas enfocarte en crecer tu negocio."
          features={[
            {
              title: "Cobra sin complicaciones",
              description: "Tillia identifica automáticamente tus productos y acelera el proceso de venta. Menos filas, clientes más felices y ventas más rápidas.",
              image: "/photos/tianguis.jpg",
              link: "#"
            },
            {
              title: "Reportes claros, decisiones fáciles",
              description: "Accede a información clara sobre qué vendes, qué no, y recibe recomendaciones prácticas para mejorar tu negocio.",
              image: "/photos/tianguis.jpg"
            },
            {
              title: "Control total de tu inventario",
              description: "Mantén el inventario al día de manera automática, evita errores humanos y optimiza tu flujo de mercancía.",
              image: "/photos/tianguis.jpg"
            },
            {
              title: "Promociones que sí funcionan",
              description: "Crea promociones inteligentes basadas en el comportamiento de tus clientes, impulsando tus ventas en los momentos clave.",
              image: "/photos/tianguis.jpg"
            }
          ]}
        />
        
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

        {/* Spanish Features Section - Added below Pricing */}
        <TilliaFeatures />

        {/* Closing CTA Section */}
        <section className="py-64 bg-[#FF4894]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-5xl font-bold mb-6 text-white">
                Toma el control total de tu negocio
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Únete a cientos de emprendedores que ya usan Tillia para vender más, preocuparse menos y crecer mejor.
              </p>
              <Button size="lg" className="bg-white text-[#FF3086] hover:bg-gray-100">
                Crea una cuenta ahora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
