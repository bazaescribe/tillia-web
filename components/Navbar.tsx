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
    <nav className={`sticky top-0 z-40 w-full bg-white transition-all duration-200 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href='/'>
            <Image 
              src="/logo.svg?height=24"
              alt="Tillia logo"
              width={91}
              height={22}
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#how-it-works" className="text-sm font-medium hover:text-[#6A03CB] transition-colors">
            How It Works
          </Link>
          <Link href="#benefits" className="text-sm font-medium hover:text-[#6A03CB] transition-colors">
            Benefits
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-[#6A03CB] transition-colors">
            Success Stories
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-[#6A03CB] transition-colors">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:text-[#6A03CB] hidden md:block">
            Log in
          </Link>
          <Button className="text-white">Start Free</Button>
        </div>
      </div>
    </nav>
  )
}