'use client'

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./NewHero.module.css"
import { Button } from "./ui/button";
import Section from "./atoms/section";
import { ArrowRight } from "lucide-react";
import CustomerTestimonial from "./CustomerTestimonial"

// Define the testimonial type
type Testimonial = {
  name: string;
  business: string;
  quote: string;
  stars: number;
  photo: string;
  logo: string;
};

export default function NewHero() {

  // Initialize with proper typing to allow null or Testimonial
  const [heroImage, setHeroImage] = useState("")
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Pointer-follow effect (shadow opposite, card translates toward cursor)
  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    let raf = 0
    const state = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 }

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      state.tx = (e.clientX - rect.left) / rect.width
      state.ty = (e.clientY - rect.top) / rect.height
    }

    const tick = () => {
      state.x += (state.tx - state.x) * 0.06
      state.y += (state.ty - state.y) * 0.06

      const maxShadow = 40
      const offsetX = (0.5 - state.x) * maxShadow
      const offsetY = (0.5 - state.y) * maxShadow
      el.style.setProperty('--shadow-x', `${offsetX}px`)
      el.style.setProperty('--shadow-y', `${offsetY}px`)

      const maxTranslate = 16
      const imgX = (state.x - 0.5) * maxTranslate
      const imgY = (state.y - 0.5) * maxTranslate
      el.style.setProperty('--img-x', `${imgX}px`)
      el.style.setProperty('--img-y', `${imgY}px`)

      raf = requestAnimationFrame(tick)
    }

    el.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      el.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Add a smooth transition
  const backgroundStyle = {
    backgroundImage: heroImage ? `url(${heroImage})` : 'none',
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out'
  }

  // Animation variants for content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  // Animation variants for card - slides from bottom to top after content
  const cardVariants = {
    hidden: { 
      y: 100, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.2 // Wait for content animation to complete
      }
    }
  }

  // Animation variants for testimonial content inside card
  const testimonialVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.6 // Appear after card animation
      }
    }
  }
  
  return (
    <Section>
      <div>
        <div className={styles.content}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="flex flex-col h-full"
          >
            <h1 className="max-w-2xl mb-6">
              <motion.span variants={itemVariants} className="text-3xl mb-2 md:text-2xl text-bold mr-2">
                Crea, conecta y automatiza tu negocio desde un solo lugar,
              </motion.span>  
              <motion.span variants={itemVariants} className="text-3xl mb-2 md:text-2xl text-bold text-zinc-400/70">
                sin necesidad de un equipo técnico.
              </motion.span>
            </h1>
            
            <motion.div 
              variants={itemVariants}
              className="flex gap-4"
            >
              <motion.div variants={buttonVariants}>
                <a href="https://1a2toy77zgg.typeform.com/to/K5rhk9Mb" target="_blank" rel="noopener noreferrer">
                  <Button
                    className="bg-[#000000] px-6 text-white text-sm rounded-full transition-all duration-300 hover:opacity-90 hover:gap-4"
                  >
                    Comienza gratis
                    <ArrowRight size={16}/>
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className={styles.photo}
        ref={rootRef}
        variants={cardVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Main front frame */}
        <div className={`${styles.frame} ${styles.frameA}`}>
          <img src="/photos/shot-payments.jpg" alt="Demo: Pagos" className={styles.frameImg} />
        </div>
        
        {/* Secondary back frame */}
        <div className={`${styles.frame} ${styles.frameB}`}>
          <img src="/photos/shot-finance.jpg" alt="Panel de métricas" className={styles.frameImg} />
        </div>
      </motion.div>
    </Section>
  );
}