'use client'

import React from "react";
import { motion } from "framer-motion";

export default function WordArt() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
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
        duration: 1,
        ease: "backOut",
        delay: 0.5
      }
    }
  };

  return (
    <div className="container flex items-center flex-col justify-center mx-auto text-center p-12" style={{ height: "90dvh" }}>
      <motion.h1 
        className="text-6xl mb-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
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
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Sin configuraciones complejas, inicia simple y crece cuando lo necesites.
      </motion.p>
    </div>
  )
}