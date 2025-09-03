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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3 // Wait for background to fade in
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
  
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div 
          style={backgroundStyle}
          className={styles.card}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="flex flex-col items-center justify-center h-full"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl font-bold mb-2 text-white md:text-6xl"
            >
              Administra tu negocio fácilmente
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-white mb-6"
            >
              Controla tus ventas, stock y operaciones sin complicaciones.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex gap-4"
            >
              {/* Botón secundario */}
              <motion.div variants={buttonVariants}>
                <Button
                  variant="secondary"
                  className="bg-black/30 text-white backdrop-blur-md hover:backdrop-blur-xl hover:bg-black/40"
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
      </div>
    </div>
  );
}