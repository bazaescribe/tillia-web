'use client'

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./NewHero.module.css"
import { Button } from "./ui/button";
import Section from "./atoms/section";
import { ArrowRight } from "lucide-react";

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

  const testimonials: Testimonial[] = [
  {
    name: "Iván Ramírez",
    business: "Panadería La Espiga, Guadalajara",
    quote:
      "woravi nos ayudó a entender qué productos se venden más por horario y ajustar nuestros precios. Ahora vendemos más pan antes del mediodía que nunca.",
    stars: 5,
    photo: "/photos/bakery.png",
    logo: "/logos/espiga.png",
  },
  {
    name: "Sofía Torres",
    business: "Verde Vivo, CDMX",
    quote:
      "Con woravi puedo ver qué plantas tienen más rotación y cuáles no se están vendiendo. Me ayudó a decidir qué dejar de pedir y qué promocionar.",
    stars: 5,
    photo: "/photos/garden.png",
    logo: "/logos/verde.png",
  },
  {
    name: "Renata Cordero",
    business: "Boutique Aurora, Mérida",
    quote:
      "No soy experta en tecnología, pero woravi es facilísima de usar. Mis ventas subieron desde que empecé a seguir sus sugerencias de precio y stock.",
    stars: 4,
    photo: "/photos/clothing.png",
    logo: "/logos/aurora.png",
  },
  {
    name: "Susana Salazar",
    business: "Monkis Chop, Monterrey",
    quote:
      "Con woravi ya no tengo que estar anotando en la libreta qué se vende y qué no. Ahora todo se actualiza solo y me dice qué modelos pedir. Parece que tengo un gerente en mi celular.",
    stars: 5,
    photo: "/photos/bicycle.jpg",
    logo: "/logos/monkis.png",
  },
  {
    "name": "Carlos Méndez",
    "business": "Café El Roble, CDMX",
    "quote": "Antes tenía que cerrar cada día revisando ticket por ticket. Ahora Woravi me dice en segundos qué productos vendí más, cuánta leche se fue y hasta me sugiere cuándo hacer pedidos. Me siento libre de la caja registradora.",
    "stars": 5,
    "photo": "/photos/coffee.jpg",
    "logo": "/logos/el-roble.png"
  },
  {
    "name": "Dra. Mariana López",
    "business": "Clínica Dental López, Guadalajara",
    "quote": "Woravi me quitó de encima todo el estrés de la agenda, cobros y stock de materiales. Tengo más tiempo para mis pacientes y menos para perseguir papeles. Es como tener una asistente que nunca se cansa.",
    "stars": 5,
    "photo": "/photos/dentist.jpg",
    "logo": "/logos/dental.png"
  }

]

  // Initialize with proper typing to allow null or Testimonial
  const [heroImage, setHeroImage] = useState("")
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const testimonial = testimonials[Math.floor(Math.random() * testimonials.length)]
    setHeroImage(testimonial.photo)
    setCurrentTestimonial(testimonial)
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
            <motion.h1 
              variants={itemVariants}
              className="text-3xl mb-2 md:text-3xl text-bold"
            >
              Tu negocio en modo crecimiento
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-md text-black/50 mb-6"
              style={{
                maxWidth: '560px',
              }}
            >
              Lanza, administra y escala tu negocio sin necesidad de ser experto.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex gap-4"
            >
              <motion.div variants={buttonVariants}>
                <a href="https://1a2toy77zgg.typeform.com/to/K5rhk9Mb" target="_blank" rel="noopener noreferrer">
                  <Button
                    className="bg-[#000000] px-6 text-white rounded-full transition-all duration-300 hover:opacity-90 hover:gap-4"
                  >
                    Comienza gratis
                    <ArrowRight size={16}/>
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        {/* Card container with relative positioning for glow effect */}
        <div className="relative">
          {/* Glow effect - blurred copy of the image */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            style={{
              ...backgroundStyle,
              position: 'absolute',
              top: '10px',
              left: '0',
              right: '0',
              zIndex: 0,
              filter: 'blur(48px)',
              opacity: 0.99,
              transform: 'scale(0.95)',
            }}
            className={styles.card + " shadow-xl"}
          />
          {/* Main card - now empty of testimonial content */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            style={{
              ...backgroundStyle,
              position: 'relative',
              zIndex: 1,
            }}
            className={styles.card + " shadow-xl"}
          >
          </motion.div>
        </div>
        
        {/* Testimonial content moved below the card */}
        {currentTestimonial && (
          <motion.div
            variants={testimonialVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="mt-8"
          >
            <div className={styles.testimonial}>
              
              {/* Author info */}
              <div className={styles.author}>
                {currentTestimonial.logo && (
                  <img 
                    src={currentTestimonial.logo} 
                    alt={`${currentTestimonial.business} logo`}
                    className="w-12 h-12 rounded-full object-cover bg-white p-1"
                  />
                )}
                <div className="text-left">
                  <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                  <div className="text-sm opacity-90">{currentTestimonial.business}</div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className={styles.quote}>
                {currentTestimonial.quote}
              </blockquote>
            </div>
          </motion.div>
        )}
      </div>
    </Section>
  );
}