"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Leaf, Smartphone, Zap, CheckCircle, TreePine, Recycle } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { Card } from "./ui/card";

const paperlessFeatures = [
  {
    icon: Smartphone,
    title: "100% Digital",
    description: "Todo en tu dispositivo: ventas, inventario y reportes sin papel.",
    illustration: "/illustrations/pos.png"
  },
  {
    icon: Zap,
    title: "Instantáneo",
    description: "Procesos más rápidos sin impresoras lentas o tickets que se atascan.",
    illustration: "/illustrations/online.png"
  },
  {
    icon: TreePine,
    title: "Eco-friendly",
    description: "Reduce tu huella de carbono y contribuye al cuidado del planeta.",
    illustration: "/illustrations/notebook.png"
  }
];

const benefits = [
  "Sin costos de papel ni tinta",
  "Cero mantenimiento de impresoras",
  "Acceso instantáneo al historial",
  "Respaldos automáticos en la nube",
  "Búsqueda rápida de transacciones",
  "Reportes siempre disponibles"
];

export default function PaperlessSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="100% Digital" 
          subtitle="Olvídate de impresoras, tickets y pilas de papel. Todo es digital: rápido, claro y sustentable." 
          overtext="Ecología"
          align="center"
        />

        {/* Hero Visual */}
        <motion.div 
          className="relative max-w-4xl mx-auto mb-20 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-12 overflow-hidden"
            variants={itemVariants}
          >
            {/* Floating elements */}
            <motion.div 
              className="absolute top-8 right-8 w-16 h-16 bg-green-200 rounded-full flex items-center justify-center"
              variants={floatingVariants}
              animate="animate"
            >
              <Leaf className="w-8 h-8 text-green-600" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-8 left-8 w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: "2s" }}
            >
              <Recycle className="w-6 h-6 text-blue-600" />
            </motion.div>

            <div className="text-center relative z-10">
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
                variants={itemVariants}
              >
                <TreePine className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">Cero papel, máximo impacto</span>
              </motion.div>
              
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
                variants={itemVariants}
              >
                Cada venta digital salva el planeta
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Con Tillia, cada transacción es una decisión consciente por el medio ambiente
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Benefits List */}
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Beneficios del proceso paperless
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-200"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}