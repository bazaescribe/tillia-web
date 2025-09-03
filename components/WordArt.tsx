'use client'

import React from "react";
import { motion } from "framer-motion";

export default function WordArt() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Reducido de 0.3 a 0.15
        delayChildren: 0.1 // Reducido de 0.2 a 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5, // Reducido de 0.8 a 0.5
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120, // Aumentado de 100 a 120 para más velocidad
        damping: 12 // Reducido de 15 a 12 para menos resistencia
      }
    }
  };

  const highlightVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -5
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.9, // Reducido de 1 a 0.6
        ease: "backOut",
        delay: 0.3 // Reducido de 0.5 a 0.3
      }
    }
  };

  return (
    <div className="container flex items-center flex-col justify-center mx-auto text-center p-12" style={{ height: "90dvh" }}>
      <motion.h1 
        className="text-4xl mb-3 md:text-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ 
          scale: 1.04, // Reducido de 1.02 a 1.01 para efecto más sutil
          transition: { duration: 0.5 } // Reducido de 0.3 a 0.2
        }}
      >
        <motion.span variants={wordVariants}>El sistema </motion.span>
        <motion.span 
          className="text-[#FF0095]"
          variants={highlightVariants}
        >
          inteligente ✨
        </motion.span>
        <motion.span variants={wordVariants}> que </motion.span>
        <br /> 
        <motion.span variants={wordVariants}>se adapta a tu negocio.</motion.span>
      </motion.h1>
      <motion.p 
        className="text-xl mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }} // Duración reducida de 0.8 a 0.5 y delay de 1.5 a 0.8
        viewport={{ once: true, margin: "-100px" }}
      >
        Sin configuraciones complejas, inicia simple y crece cuando lo necesites.
      </motion.p>
    </div>
  )
}