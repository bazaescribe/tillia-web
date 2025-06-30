import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-white pt-12 md:pt-24">
      <div className="absolute inset-0 bg-white z-0"></div>
      <div className="container relative z-10">
        <div className="flex flex-col text-left">
          <div className="flex flex-col gap-8 max-w-5xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white">
                  <Image 
                    src="/avatar/a.png" 
                    alt="User avatar" 
                    width={24} 
                    height={24} 
                    className="rounded-full object-cover opacity-20"
                  />
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white">
                  <Image 
                    src="/avatar/b.png" 
                    alt="User avatar" 
                    width={24} 
                    height={24} 
                    className="rounded-full object-cover opacity-40"
                  />
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white">
                  <Image 
                    src="/avatar/c.png" 
                    alt="User avatar" 
                    width={24} 
                    height={24} 
                    className="rounded-full object-cover opacity-60"
                  />
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white">
                  <Image 
                    src="/avatar/d.png" 
                    alt="User avatar" 
                    width={24} 
                    height={24} 
                    className="rounded-full object-cover opacity-80"
                  />
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white">
                  <Image 
                    src="/avatar/e.png" 
                    alt="User avatar" 
                    width={24} 
                    height={24} 
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <span>Con la confianza de +100 emprendedores</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-14xl font-black">
            Vende, administra y crece tu negocio fácilmente
            </h1>
            <p className="text-lg">
              Simplifica tus ventas y automatiza tu día a día. Tú enfócate en vender, del resto nos encargamos nosotros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="text-white" asChild>
                <a href="https://1a2toy77zgg.typeform.com/to/K5rhk9Mb" target="_blank">
                  Comienza gratis
                  <ArrowRight/>
                </a>
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
          <div className="w-full md:w-1/4 relative aspect-video">
            <Image 
              src="/photos/bakery.png" 
              alt="Business management" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/4 relative aspect-video">
            <Image 
              src="/photos/garden.png" 
              alt="Business growth" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/4 relative aspect-video">
            <Image 
              src="/photos/clothing.png" 
              alt="Business clarity" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/4 relative aspect-video">
            <Image 
              src="/photos/store.jpg" 
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