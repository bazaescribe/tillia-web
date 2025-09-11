'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showFloatingBar, setShowFloatingBar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show border after scrolling 20 pixels
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }

      // Show floating bar after scrolling 80dvh
      const scrollThreshold = window.innerHeight * 0.8
      const shouldShowFloatingBar = window.scrollY > scrollThreshold
      if (shouldShowFloatingBar !== showFloatingBar) {
        setShowFloatingBar(shouldShowFloatingBar)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Call once on mount to set initial state
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled, showFloatingBar])

  return (
    <>
      <nav className={`sticky bg-white  top-0 z-40 w-full transition-all duration-200`}>
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href='/'>
              <Image 
                src="/logo.png?height=24"
                alt="Woravi logo"
                width={112}
                height={24}
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium text-black/40 hover:text-black transition-colors">
              Servicios
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-black/40 hover:text-black transition-colors">
              ¿Cómo funciona?
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-black/40 hover:text-black transition-colors">
              Historias de éxito
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button 
              variant="secondary"
              className="rounded-full bg-black/10" 
              style={{
                width: 40,
                height: 40,
              }}
            >
              <a href="https://1a2toy77zgg.typeform.com/to/K5rhk9Mb" target="_blank">
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Floating Bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        showFloatingBar ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="container flex items-center justify-center py-4">
          <div className="flex items-center gap-3 p-2 pl-6 rounded-full shadow-lg"
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <span className="text-sm font-medium text-white">
              Comienza gratis hoy mismo
            </span>
            <Button 
              className="bg-[#FF0095] text-white transition-colors rounded-full"
              asChild
            >
              <a href="https://1a2toy77zgg.typeform.com/to/K5rhk9Mb" target="_blank">
                <ArrowRight size={32} />
              </a>
            </Button>
          </div>
          
        </div>
      </div>
    </>
  )
}