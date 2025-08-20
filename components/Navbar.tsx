'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show border after scrolling 20 pixels
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Call once on mount to set initial state
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <nav className={`sticky top-0 z-40 w-full transition-all duration-200 ${scrolled ? 'bg-[#FF0095] shadow-lg backdrop-blur-lg' : ''}`}>
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href='/'>
            <Image 
              src="/logo.png?height=24"
              alt="Tillia logo"
              width={91}
              height={22}
              className={`${!scrolled ? 'block' : 'hidden'}`}
            />
            <Image 
              src="/logo-white.png?height=24"
              alt="Tillia logo"
              width={91}
              height={22}
              className={`${scrolled ? 'block' : 'hidden'}`}
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium text-black/40 hover:text-black transition-colors">
            Beneficios
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-black/40 hover:text-black transition-colors">
            ¿Cómo funciona?
          </Link>
          
          <Link href="#testimonials" className="text-sm font-medium text-black/40 hover:text-black transition-colors">
            Historias de éxito
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-black/40 hover:text-black transition-colors">
            Precios
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* <Link href="#" className="text-sm font-medium hover:text-[#6A03CB] hidden md:block">
            Log in
          </Link> */}
          <Button className="text-white">
            <a href="https://1a2toy77zgg.typeform.com/to/K5rhk9Mb" target="_blank">
              Comienza gratis
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}