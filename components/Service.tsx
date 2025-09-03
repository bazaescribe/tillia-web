'use client'

import React from "react";
import styles from "./Service.module.css"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

interface ServiceProps {
  title: string
  subtitle: string
  overtext: string
  price: string
  cta: string
  description: string
  image: string
}

export default function Service({ 
  title = "Servicio", 
  subtitle = "Subtítulo",
  overtext = "Servicio", 
  price = "Precio", 
  cta = "Comprar", 
  description = "Descripción del servicio", 
  image = "pos.png" 
}: ServiceProps) {

  const imageURL = '/shoots/' + image;

  // Animation variants for different sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <motion.div 
          className={styles.info}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <p className={styles.overtext}>{overtext}</p>
          <h1>
            <span className={styles.title}>{title}</span>  <span className={styles.follow}>{subtitle}</span>
          </h1>
          <h2 className={styles.price}>
            {price}
          </h2>
          <Button>
            {cta}
          </Button>
        </motion.div>
        <motion.div 
          className={styles.image}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
        >
          <Image
            src={imageURL}
            alt="Service"
            width={300}
            height={618}
          />
        </motion.div>
        <motion.div 
          className={styles.description}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
        >
          <p>
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Service',
  description: 'Servicios que ofrecemos',
}
