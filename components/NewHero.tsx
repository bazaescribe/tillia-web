'use client'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./NewHero.module.css"
import { Button } from "./ui/button";

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

  // Initialize with a default image to prevent hydration mismatch
  const [heroImage, setHeroImage] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const randomImage = imageCollection[Math.floor(Math.random() * imageCollection.length)]
    setHeroImage(randomImage)
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
        />
      </div>
    </div>
  );
}