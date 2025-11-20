// UseCases component
'use client'

import React, { useState, useEffect, useRef } from 'react';
import Section from './atoms/section';
import SectionTitle from './SectionTitle';
import styles from './UseCases.module.css'
import { motion, useInView } from 'framer-motion'

import { ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Carousel from './Carousel';

interface CardProps {
  title: string;
  subtitle: string;
  prompt: string;
  color: string;
  image?: string;
  backgroundSrc?: string;
}

// Card component
const Card: React.FC<CardProps> = ({ title, subtitle, prompt, color, image, backgroundSrc }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`${styles.card} ${showDetails ? styles.active : ''} ${backgroundSrc ? styles.withBg : ''}`}
      style={{ backgroundImage: backgroundSrc ? `url(${backgroundSrc})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}
      onClick={() => setShowDetails((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setShowDetails((prev) => !prev);
        }
      }}
    >
      <div className={styles.content}>
        <div className={styles.prompt} >
          <h3>{prompt}</h3>
        </div>
        <div className={styles.result} style={{ backgroundColor: color }}>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='text-md opacity-70 mb-8'>{subtitle}</p>
          <div className={styles.shot}>
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <ArrowUp size={24} />
      </div>
    </div>
  );
}

const useCases = [
  {
    prompt: "Quiero vender mis productos.",
    title: "Punto de venta",
    subtitle: "Registra ventas, maneja inventario y conecta tus pagos en segundos.",
    color: "#FF0E6E",
    image: '/shoots/shot-pos.png',
    backgroundSrc: '/photos/bg-market.jpg'
  },
  {
    prompt: "Quiero organizar mi inventario.",
    title: "Control de inventario",
    subtitle: "Administra tus productos, lotes y existencias automáticamente.",
    color: "#FF7A0E",
    image: '/shoots/shot-inventory.png',
    backgroundSrc: '/photos/pastries.png'
  },
  {
    prompt: "Quiero saber cuánto estoy ganando.",
    title: "Dashboard financiero",
    subtitle: "Analiza tus ingresos, márgenes y flujo de efectivo en tiempo real.",
    color: "#008F1F",
    image: '/shoots/shot-report.png',
    backgroundSrc: '/photos/green.jpg'
  },
  {
    prompt: "Quiero tener todo mi equipo alineado.",
    title: "Gestión de equipo",
    subtitle: "Crea tareas, asigna responsables y haz seguimiento de objetivos.",
    color: "#A855F7",
    image: '/shoots/pos.png',
    backgroundSrc: '/photos/sweaters.jpg'
  },
  {
    prompt: "Quiero entender por qué bajaron mis ventas.",
    title: "Análisis de ventas",
    subtitle: "Detecta patrones, compara periodos y encuentra oportunidades ocultas.",
    color: "#8ACB88",
    image: '/shoots/pos.png',
    backgroundSrc: '/photos/keyboard.jpg'
  },
  {
    prompt: "Quiero automatizar recordatorios de pago.",
    title: "Cobranza inteligente",
    subtitle: "Envía recordatorios automáticos y mejora tu flujo de efectivo.",
    color: "#177E89",
    image: '/shoots/pos.png',
    backgroundSrc: '/photos/cactus.jpg'
  },
  {
    prompt: "Quiero integrar con servicios externos.",
    title: "Integraciones",
    subtitle: "Conecta herramientas como WhatsApp, Shopify o Google Sheets en un clic.",
    color: "#FB923C",
    image: '/shoots/pos.png',
    backgroundSrc: '/photos/chocolate.jpg'
  },
  // {
  //   prompt: "Quiero crear agentes inteligentes.",
  //   title: "Agentes AI personalizados",
  //   subtitle: "Automatiza tareas repetitivas con agentes que entienden tu negocio.",
  //   color: "#9EBD6E"
  // },
  // {
  //   prompt: "Quiero generar reportes automáticos.",
  //   title: "Reportes automáticos",
  //   subtitle: "Obtén insights listos para usar sin perder tiempo en hojas de cálculo.",
  //   color: "#FFE156"
  // },
  // {
  //   prompt: "Quiero crear apps internas para mi equipo.",
  //   title: "Apps internas",
  //   subtitle: "Construye soluciones personalizadas sin depender del equipo técnico.",
  //   color: "#FF99C8"
  // },
  // {
  //   prompt: "Quiero ofrecer promociones a mis clientes.",
  //   title: "Campañas y descuentos",
  //   subtitle: "Lanza promociones inteligentes basadas en comportamiento y ventas.",
  //   color: "#C1E1C1"
  // },
  // {
  //   prompt: "Quiero mejorar la experiencia de mis clientes.",
  //   title: "Atención inteligente",
  //   subtitle: "Centraliza mensajes, responde más rápido y mejora la satisfacción del cliente.",
  //   color: "#F5CAC3"
  // },
  // {
  //   prompt: "Quiero explorar las posibilidades de AI.",
  //   title: "Exploración AI",
  //   subtitle: "Descubre cómo la inteligencia artificial puede multiplicar tu productividad.",
  //   color: "#D9ED92"
  // }
]


const UseCases: React.FC = () => {

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionTitleRef = useRef<HTMLDivElement | null>(null)

  return (
    <div>
      <div className={styles.bumper}>
      </div>
      {/* UseCases component content goes here */}
      <div className={styles.container}>
        <div ref={sectionTitleRef} style={{ marginBottom: '1rem' }}>
          <SectionTitle
            overtext="Casos de Uso"
            title="Lo que Bliqu puede hacer por ti."
            subtitle='Bliqu crea automáticamente las apps internas y vistas que necesitas para vender, analizar o administrar sin que tengas que construir nada.'
          />
        </div>
      </div>

      <Carousel alignToRef={sectionTitleRef}>
        {useCases.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Card {...card} />
          </motion.div>
        ))}
      </Carousel>

    </div>
  );
};

export default UseCases;
