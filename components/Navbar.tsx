'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, DoorOpen } from "lucide-react"
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
      <nav className="sticky top-0 left-0 right-0 z-50 bg-white">
        <div className={styles.content}>
          <a href="#">
            <Image src="/logo.svg" alt="logo" width={104.1} height={24.78} />
          </a>
          <div>
            <a href="https://app.bliqu.com" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-3xl bg-slate-100 text-gray-700 hover:bg-slate-200 hover:text-black">
                <DoorOpen size={16} />
                Ya tengo cuenta
              </Button>
            </a>
          </div>
        </div>
      </nav>
      {/* Floating Bar */}

      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-800 ease-in-out ${showFloatingBar ? 'translate-y-0' : 'translate-y-[300%]'
          }`}
      >
        <div className="container flex items-center justify-center py-4">
          <a href="https://1a2toy77zgg.typeform.com/to/K5rhk9Mb" target="_blank" rel="noopener noreferrer">
            <div
              className={styles.floatingButton}
            >
              <div className="">
                <Image src="/whale.svg" alt="logo" width={24} height={14} />
              </div>
              <span className="text-sm font-medium text-white">
                Comienza gratis
              </span>
              <div>
                <ArrowRight size={18} className="text-white" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
