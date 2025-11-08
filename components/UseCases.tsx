// use client
'use client'

import React, { useState } from 'react';
import Section from './atoms/section';
import SectionTitle from './SectionTitle';
import styles from './UseCases.module.css'
import { motion, useInView } from 'framer-motion'

import { ArrowUp } from 'lucide-react';

interface CardProps {
  title: string;
  subtitle: string;
  prompt: string;
  color: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, prompt, color, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className={`${styles.card} ${showDetails ? styles.active : ''}`}
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
        <div className={styles.prompt} style={{ color: color }}>
          {prompt}
        </div>
        <div className={styles.result} style={{ backgroundColor: color }}>
          <h3 className='text-2xl font-bold mb-2'>{title}</h3>
          <p className='text-2xl opacity-50'>{subtitle}</p>
          <div className={styles.shot}>
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
      <div className={styles.button} style={{ background: color }}>
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
    color: "#F49FBC",
    image: '/shoots/shot-pos.png'
  },
  {
    prompt: "Quiero organizar mi inventario.",
    title: "Control de inventario",
    subtitle: "Administra tus productos, lotes y existencias automáticamente.",
    color: "#A0CED9",
    image: '/shoots/shot-inventory.png'
  },
  {
    prompt: "Quiero saber cuánto estoy ganando.",
    title: "Dashboard financiero",
    subtitle: "Analiza tus ingresos, márgenes y flujo de efectivo en tiempo real.",
    color: "#FFB6B9",
    image: '/shoots/shot-report.png'
  },
  // {
  //   prompt: "Quiero tener todo mi equipo alineado.",
  //   title: "Gestión de equipo",
  //   subtitle: "Crea tareas, asigna responsables y haz seguimiento de objetivos.",
  //   color: "#E4C1F9",
  //   image: '/shoots/pos.png'
  // },
  // {
  //   prompt: "Quiero entender por qué bajaron mis ventas.",
  //   title: "Análisis de ventas",
  //   subtitle: "Detecta patrones, compara periodos y encuentra oportunidades ocultas.",
  //   color: "#FFD6A5",
  //   image: '/shoots/pos.png'
  // },
  // {
  //   prompt: "Quiero automatizar recordatorios de pago.",
  //   title: "Cobranza inteligente",
  //   subtitle: "Envía recordatorios automáticos y mejora tu flujo de efectivo.",
  //   color: "#B8E0D2",
  //   image: '/shoots/pos.png'
  // },
  // {
  //   prompt: "Quiero integrar con servicios externos.",
  //   title: "Integraciones",
  //   subtitle: "Conecta herramientas como WhatsApp, Shopify o Google Sheets en un clic.",
  //   color: "#FFD3BA"
  // },
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

  // Variants para el contenedor y cada tarjeta (fade + slide-up)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section>
      {/* UseCases component content goes here */}
      <SectionTitle 
        overtext="Casos de Uso"
        title="Lo que Bliqu puede hacer por ti." 
        subtitle='Bliqu crea automáticamente las apps y vistas que necesitas para vender, analizar o administrar sin que tengas que construir nada.'
      />

       <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {useCases.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Card {...card} />
          </motion.div>
        ))}
      </motion.div>

    </Section>
  );
};

export default UseCases;
