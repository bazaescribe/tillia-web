'use client'

import React from 'react';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VisionComponent = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <div className="bg-[#0C0F12] min-h-screen text-white font-sans py-40">
      {/* Sección Superior */}
      <div className="max-w-4xl mx-auto px-4 py-40 pt-32 text-center md:text-left">
        <p className="text-lg mb-2 bg-gradient-to-r from-[#F800AD] to-[#B3FFF9] bg-clip-text text-transparent">Tillia Vision</p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
          Tu cámara. Tu negocio. Bajo control.
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto md:mx-0 mb-12">
          Convierte la cámara de tu celular en una herramienta de trabajo: vende, actualiza
          precios o revisa historial con solo enfocar un producto.
        </p>

        {/* Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Vende con una fotografía</h3>
            <p className="text-gray-400">
              Captura productos, vende y registra la venta en segundos, sin buscarlo en el
              catálogo.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Actualiza inventario en físico</h3>
            <p className="text-gray-400">
              Escanea un anaquel y actualiza stock, precios o descripciones
              directamente.
            </p>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-8">
          Disponible Otoño de 2025 desde el Plan Pro
        </p>
      </div>

      <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Device mockups */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Tablet device */}
            <motion.div 
              className="absolute left-0 bottom-0 w-[85%] z-10"
              initial={{ y: 200, opacity: 1 }}
              animate={isInView ? { y: 48, opacity: 1 } : { y: 200, opacity: 0 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <Image
                src="/assets/ipad.png"
                alt="Tillia en tablet"
                width={800}
                height={575}
                className="object-contain"
                style={{
                  WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                  filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                }}
              />
            </motion.div>
            
            {/* Mobile device */}
            <motion.div 
              className="absolute right-0 bottom-0 w-[25%] z-20"
              initial={{ y: 200, opacity: 1 }}
              animate={isInView ? { y: 48, opacity: 1 } : { y: 200, opacity: 0 }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut",
              }}
            >
              <Image
                src="/assets/iphone.png"
                alt="Tillia en celular"
                width={300}
                height={600}
                className="object-contain"
                style={{
                  WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                  filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                }}
              />
            </motion.div>
          </div>
        </div>

      {/* Sección Inferior con los iPhones */}
      <div className="flex flex-col md:flex-row justify-center items-end py-16 space-y-8 md:space-y-0 md:space-x-8">
        {/* iPhone 1 */}
        <div className="relative w-72 h-auto">
          {/* Sombra del iPhone */}
          <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl transform rotate-3 scale-95 opacity-75 blur-2xl"></div>

          <div className="relative border-[14px] border-gray-800 bg-black rounded-[3rem] shadow-xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl"></div> {/* Notch */}
            <div className="h-full flex flex-col pt-4 pb-2 px-3">
              {/* Barra de estado */}
              <div className="flex justify-between items-center px-2 py-1">
                <span className="text-sm font-semibold">9:41</span>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/></svg> {/* Wifi icon placeholder */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/></svg> {/* Battery icon placeholder */}
                </div>
              </div>

              {/* Contenido de la pantalla */}
              <div className="flex-grow bg-white rounded-xl mt-2 overflow-hidden text-black flex flex-col justify-between">
                <div className="p-4 flex justify-between items-center border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Nueva venta</h2>
                  <button className="text-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
                <div className="p-4 text-sm text-gray-500">
                  <p>19 Noviembre, 11:30 PM</p>
                </div>
                <div className="flex-grow flex items-center justify-center p-4">
                  <img src="https://via.placeholder.com/150/0000FF/FFFFFF?text=Cesta" alt="Cesta de Frutas" className="max-w-full h-auto" /> {/* Imagen de la cesta */}
                </div>
                <div className="p-4 text-center border-t border-gray-200">
                  <p className="text-lg font-semibold">Carrito vacío</p>
                  <p className="text-sm text-gray-500">Agrega productos a tu venta</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* iPhone 2 */}
        <div className="relative w-72 h-auto">
          {/* Sombra del iPhone */}
          <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl transform -rotate-3 scale-95 opacity-75 blur-2xl"></div>

          <div className="relative border-[14px] border-gray-800 bg-black rounded-[3rem] shadow-xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl"></div> {/* Notch */}
            <div className="h-full flex flex-col pt-4 pb-2 px-3">
              {/* Barra de estado */}
              <div className="flex justify-between items-center px-2 py-1">
                <span className="text-sm font-semibold">9:43</span>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/></svg> {/* Wifi icon placeholder */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/></svg> {/* Battery icon placeholder */}
                </div>
              </div>

              {/* Contenido de la pantalla */}
              <div className="flex-grow bg-white rounded-xl mt-2 overflow-hidden text-black flex flex-col justify-between">
                <div className="p-4 flex justify-between items-center border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Nueva venta</h2>
                  <button className="text-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
                <div className="p-4 text-sm text-gray-500">
                  <p>19 Noviembre, 11:32 PM</p>
                </div>
                <div className="flex-grow flex items-center justify-center p-4">
                  <img src="https://via.placeholder.com/150/FF0000/FFFFFF?text=Cesta" alt="Cesta de Frutas" className="max-w-full h-auto" /> {/* Imagen de la cesta */}
                </div>
                <div className="p-4 text-center border-t border-gray-200">
                  <p className="text-lg font-semibold">Carrito vacío</p>
                  <p className="text-sm text-gray-500">Agrega productos a tu venta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionComponent;