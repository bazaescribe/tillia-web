'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(1280) // valor default SSR-safe

  useEffect(() => {
    const updateSize = () => setViewportWidth(window.innerWidth)
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const maxScroll = 300
  const scrollProgress = Math.min(scrollY / maxScroll, 1)
  const borderRadius = scrollProgress * 24

  const isMobile = viewportWidth < 768
  const containerWidth = isMobile ? viewportWidth - 32 : 1336
  const maxImageWidth = isMobile ? viewportWidth - 32 : 1600
  const widthReduction = (maxImageWidth - containerWidth) * scrollProgress
  const imageWidth = maxImageWidth - widthReduction

  const baseHeight = isMobile 
    ? maxImageWidth * 0.625 
    : maxImageWidth * 0.5625
  const finalHeight = isMobile ? 400 : 700
  const heightReduction = (baseHeight - finalHeight) * scrollProgress
  const imageHeight = baseHeight - heightReduction

  return (
    <header className="relative overflow-hidden bg-white pt-12 md:pt-24">
      <div className="absolute inset-0 bg-white z-0"></div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col gap-8 max-w-5xl items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap justify-center">
              <div className="flex -space-x-2">
                {["a", "b", "c", "d", "e"].map((letter, i) => (
                  <div
                    key={letter}
                    className={`w-6 h-6 rounded-full border-2 border-white bg-gray-${200 + i * 100}`}
                  >
                    <Image 
                      src={`/avatar/${letter}.png`} 
                      alt={`User avatar ${letter}`} 
                      width={24} 
                      height={24} 
                      className="rounded-full object-cover"
                      style={{ opacity: (i + 1) * 0.2 }}
                    />
                  </div>
                ))}
              </div>
              <span>Con la confianza de +100 emprendedores</span>
            </div>

            <h1 className="text-4xl md:text-8xl lg:text-14xl font-black text-center"> 
              La forma más simple de operar tu negocio
            </h1>
            <p className="text-lg text-center">
              Organiza tus productos, ventas e inventario para que tomes mejores decisiones todos los días.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
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

      {/* Imagen con animación progresiva */}
      <div className="w-full mt-32 overflow-hidden">
        <div 
          ref={imageRef}
          className="relative mx-auto transition-all duration-300 ease-out overflow-hidden"
          style={{
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
            borderRadius: `${borderRadius}px`
          }}
        >
          <Image 
            src="/photos/store.jpg" 
            alt="Business showcase" 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </div>
    </header>
  )
}
