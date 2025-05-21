import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-white pt-12 md:pt-24">
      <div className="absolute inset-0 bg-white z-0"></div>
      <div className="container relative z-10">
        <div className="flex flex-col gap-12 text-left">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-12xl font-bold tracking-tight">
              Administra tu negocio sin complicaciones
            </h1>
            <p className="text-lg">
              Haz crecer tu negocio con claridad. Desde el punto de venta hasta tus decisiones clave, todo en un mismo lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="text-white">
                Comienza gratis
                <ArrowRight/>
              </Button>
              <Button size="lg" variant="outline">
                Ya tengo cuenta
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-width photo row that breaks out of container */}
      <div className="w-full mt-32 overflow-hidden">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/3 relative aspect-video">
            <Image 
              src="/photos/bakery.png" 
              alt="Business management" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/3 relative aspect-video">
            <Image 
              src="/photos/garden.png" 
              alt="Business growth" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/3 relative aspect-video">
            <Image 
              src="/photos/clothing.png" 
              alt="Business clarity" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  )
}