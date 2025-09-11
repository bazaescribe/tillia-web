'use client'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./NewHero.module.css"
import { Button } from "./ui/button";

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
  const imageCollection = [
    "/photos/bakery.png",
    "/photos/clothing.png",
    "/photos/garden.png",
    "/photos/bicycle.jpg",
    "/photos/store.jpg",
    "/photos/artist.jpg",
    "/photos/barber.jpg",
  ]

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
  }  
]

  // Initialize with proper typing to allow null or Testimonial
  const [heroImage, setHeroImage] = useState("")
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const testimonial = testimonials[Math.floor(Math.random() * testimonials.length)]
    setHeroImage(testimonial.photo)
    setCurrentTestimonial(testimonial)
    setIsLoaded(true)
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
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="flex flex-col items-center justify-center h-full"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl font-black mb-3 md:text-7xl"
            >
              Administra tu negocio fácilmente
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl mb-6"
            >
              Controla tus ventas, gastos, operaciones y más, <br /> todo desde un mismo lugar.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex gap-4"
            >
              {/* Botón secundario */}
              <motion.div variants={buttonVariants}>
                <Button
                  variant="secondary"
                  className="bg-transparent text-gray-70 hover:bg-black/10"
                >
                  Ingresar
                </Button>
              </motion.div>

              {/* Botón principal */}
              <motion.div variants={buttonVariants}>
                <Button
                  className="bg-[#FF0095] text-white hover:opacity-80 hover:bg-[#FF0095]"
                >
                  Comienza gratis
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          style={backgroundStyle}
          className={styles.card}
        >
          {currentTestimonial && (
            <motion.div
              variants={testimonialVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="flex flex-col justify-end h-full text-white"
            >
              <div style={{
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(64px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '14px',
                padding: '20px',
              }}>
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < currentTestimonial.stars ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-md md:text-md font-medium mb-6 leading-relaxed">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                {/* Author info */}
                <div className="flex items-center gap-4">
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
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}