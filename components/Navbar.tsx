'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showFloatingBar, setShowFloatingBar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) setScrolled(isScrolled)

      const shouldShowFloatingBar = window.scrollY > window.innerHeight * 0.8
      if (shouldShowFloatingBar !== showFloatingBar) setShowFloatingBar(shouldShowFloatingBar)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled, showFloatingBar])

  return (
    <>
      <div className={styles.content}>
        <div className={styles.p}>
          <Image src="/logo.svg" alt="logo" width={86} height={24} />
        </div>
        <div>
          <Button>
            Comenzar ahora
          </Button>
        </div>
      </div>

      {/* Floating Bar igual que antes */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          showFloatingBar ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="container flex items-center justify-center py-4">
          <div
            className="flex items-center gap-3 p-2 pl-6 rounded-full shadow-lg"
            style={{
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 0px 0px 1px rgba(0, 0, 0, 0.12)',
            }}
          >
            <span className="text-sm font-medium text-white">
              Comienza gratis hoy mismo
            </span>
            <Button className="bg-[#6E0EFF] text-white transition-colors rounded-full" asChild>
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
