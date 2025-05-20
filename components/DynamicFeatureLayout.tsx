'use client'

// components/DynamicFeatureLayout.js
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShoppingCart, 
  BarChart, 
  Package, 
  Tag, 
  Clock, 
  DollarSign, 
  Percent, 
  Smartphone, 
  AlertCircle, 
  TrendingUp, 
  Calendar, 
  Search, 
  PieChart, 
  ArrowUpRight, 
  Edit, 
  Eye, 
  RefreshCw 
} from 'lucide-react';

const featuresData = [
  {
    id: 'feature-1',
    title: 'Tillia es cool',
    description: 'Super cool.',
    bulletPoints: [
      { icon: ShoppingCart, text: 'Ventas rápidas y sencillas' },
      { icon: BarChart, text: 'Análisis de rendimiento' },
    ]
  },
  {
    id: 'feature-2',
    title: 'POS CON AI',
    description: 'Yes it is!!.',
    bulletPoints: [
      { icon: Package, text: 'Gestión inteligente de inventario' },
      { icon: Tag, text: 'Recomendaciones personalizadas' },
    ]
  },
  {
    id: 'feature-3',
    title: 'Administra tu inventario sin enredos',
    description: 'Lleva el control de tus productos, existencias y catálogo desde un solo lugar, sin hojas de cálculo ni sorpresas.',
    bulletPoints: [
      { icon: Edit, text: 'Crea y edita tu catálogo en minutos, con nombres, precios, fotos y categorías.' },
      { icon: Eye, text: 'Visualiza tu inventario en tiempo real y evita quedarte sin lo que más se vende.' },
      { icon: RefreshCw, text: 'Ajusta precios con base en rendimiento, demanda o temporadas.' },
      { icon: TrendingUp, text: 'Recibe sugerencias inteligentes sobre qué productos resurtir primero (y cuáles ya no tanto).' },
    ]
  },
  {
    id: 'feature-4',
    title: 'Vende con un PDV simple y completo',
    description: 'Vende desde cualquier dispositivo, con una interfaz que entiende tu ritmo y no te estorba.',
    bulletPoints: [
      { icon: ShoppingCart, text: 'Haz ventas en segundos con una interfaz clara y sin pasos innecesarios.' },
      { icon: Percent, text: 'Aplica descuentos, observa totales, y cambia entre productos sin perder tiempo.' },
      { icon: Smartphone, text: 'Accede desde donde estés, sin necesidad de lectores, cajas o instalaciones.' },
      { icon: AlertCircle, text: 'Recibe alertas si algo se vende más de lo normal o si hay un pico inesperado.' },
    ]
  },
  {
    id: 'feature-5',
    title: 'Entiende y mejora tus ventas sin ser contador',
    description: 'Consulta tu historial, márgenes y productos estrella para tomar decisiones con certeza (y sin fórmulas raras).',
    bulletPoints: [
      { icon: Calendar, text: 'Revisa cuánto vendiste, cuándo, y qué productos están impulsando tu negocio.' },
      { icon: Search, text: 'Detecta tus mejores días, horarios y tendencias sin hacer cálculos.' },
      { icon: DollarSign, text: 'Conoce tu ganancia real después de costos y descuentos.' },
      { icon: ArrowUpRight, text: 'Descubre oportunidades para vender más y mejorar tus márgenes.' },
    ]
  },
];

const DynamicFeatureLayout = ({ title, subtitle, imageUrl }: { title: string; subtitle: string; imageUrl: string }) => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'], // Monitorea el scroll desde el inicio hasta el final del componente
  });

  // Animación de la imagen: tamaño y posición
  // La imagen reduce su tamaño y se mueve a la izquierda en el primer 50% del scroll.
  const imageWidth = useTransform(scrollYProgress, [0, 0.5], ['100%', '50%']);
  // const imageTranslateX = useTransform(scrollYProgress, [0, 0.5], ['0%', '-25%']); 

  // Controla la visibilidad de las features basándose en el progreso del scroll.
  // Las features se hacen visibles solo cuando el scrollYProgress supera el 0.5 (imagen en posición).
  const featuresOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]); // Fade in de 0.5 a 0.55
  const featuresDisplay = useTransform(scrollYProgress, (pos) => (pos > 0.5 ? 'block' : 'hidden')); // Muestra/oculta

  // Animación para la altura del contenedor de la imagen
  const imageContainerHeight = useTransform(scrollYProgress, [0, 0.5], ['calc(100vh - 6rem)', 'calc(100vh - 6em)']);

  return (
    <div className='bg-gradient-to-b from-white to-[#FAFAFA]'>
      <div ref={containerRef} className="container">
        <div className=""> {/* Contenedor de Tailwind */}
          {/* Título y Subtítulo */}
          <div ref={headerRef} className="text-center py-16">
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>

          {/* Contenedor principal para la imagen y las features */}
          <div className="relative flex flex-col md:flex-row min-h-[150vh] py-4">
            {/* Columna de la Imagen */}
            <motion.div
              style={{
                width: imageWidth,
                // x: imageTranslateX,
              }}
              className="md:flex-shrink-0 md:w-1/2 h-auto mb-8 md:mb-0"
            >
              <motion.div 
                className='bg-[#f00] md:sticky md:top-[80px] overflow-hidden' 
                style={{
                  height: imageContainerHeight
                }}
              >
                <img
                  src={imageUrl}
                  alt="Feature Illustration"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
            </motion.div>

            {/* Columna de las Features (Scrollable) */}
            <motion.div
              style={{
                opacity: featuresOpacity,
                display: featuresDisplay,
              }}
              className="md:flex-grow md:w-1/2 md:pl-8 space-y-24"
            >
              {featuresData.map((feature) => (
                <FeatureBlock key={feature.id} feature={feature} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// components/FeatureBlock.js (sin cambios)
const FeatureBlock = ({ feature }: { feature: { id: string; title: string; description: string; bulletPoints: Array<{ icon: any; text: string }> } }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5, // cuando el 50% del elemento es visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ color: '#9CA3AF' }} // Color gris inicial (Tailwind gray-400)
        animate={{ color: isInView ? '#000000' : '#9CA3AF' }} // Color negro o gris
        transition={{ duration: 0.3 }}
        className="max-w-md mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4">{feature.title}</h2>
        <p className="text-lg leading-relaxed mb-6">{feature.description}</p>

        <hr />
        
        {/* Bullet Points with Icons */}
        <div className="space-y-6 mt-6">
          {feature.bulletPoints.map((bullet, index) => {
            const IconComponent = bullet.icon;
            return (
              <div key={index} className="flex space-x-5">
                <IconComponent className="w-6 h-6 text-[#FF4894]" />
                <span className="text-md">{bullet.text}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default DynamicFeatureLayout;