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
          <Image src="/logo.svg" alt="logo" width={100} height={28} />
        </div>
        <div>
          <a href="https://app.bliqu.com" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-3xl font-light">
              Ya tengo cuenta
            </Button>
          </a>
        </div>
      </div>

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
