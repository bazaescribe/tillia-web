'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useId, useState } from "react"
import React from "react"
import Section from "@/components/atoms/section"

// Tipos para las props del componente
interface CTA {
  label: string
  href: string
  variant?: 'primary' | 'ghost'
}

interface HeroProps {
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  ctas?: CTA[]
  imageAspect?: '16/9' | '4/3' | '1/1' | '9/19.5' // Agregada proporción de iPhone
}

// Variants para animaciones de Framer Motion
const fadeInUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

const slideInRight = {
  hidden: { x: 0, y: 160, opacity: 0 },
  visible: { x: 0, y: 48, opacity: 1 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

export function HeroWaves({
  className = "",
  intensity = 18,
  speed = 14,
  lines = 8,
  strokeWidth = 2,
}: {
  className?: string;
  intensity?: number;
  speed?: number;
  lines?: number;
  strokeWidth?: number;
}) {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Distribuye Y de cada línea
  const yStart = 120;
  const yGap = 28;

  // Genera paths horizontales suaves con curvas cúbicas, pensadas para ser “rizadas” por el filtro
  const buildPath = (y: number) =>
    [
      `M -50 ${y}`,
      `C 150 ${y - 20}, 300 ${y + 20}, 500 ${y}`,
      `S 850 ${y - 20}, 1050 ${y}`,
    ].join(" ");

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
      style={{ contain: "paint layout", zIndex: 5 }} // detrás del screenshot, arriba del fondo
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 600"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradiente de trazo: hot pink de marca → aqua foam sutil */}
          <linearGradient id="wave-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF0095" />
            <stop offset="60%" stopColor="#FF66C2" />
            <stop offset="100%" stopColor="#BAFFFC" />
          </linearGradient>

          {/* Vignetting para que se desvanezcan a los lados y arriba/abajo */}
          <radialGradient id="fade-mask" cx="50%" cy="45%" r="70%">
            <stop offset="70%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>

          <mask id="waves-mask">
            <rect width="100%" height="100%" fill="url(#fade-mask)" />
          </mask>

          {/* Ruido de alta resolución para evitar pixelado */}
          {!reduced && (
            <filter
              id="waves-displace"
              x="-20%"
              y="-40%"
              width="140%"
              height="200%"
              // @ts-ignore: filterRes no está tipado en TS, pero lo soportan los navegadores
              filterRes="1024"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.004 0.009"
                numOctaves="2"
                seed="2"
                stitchTiles="stitch"
                result="noise"
              >
                <animate
                  attributeName="seed"
                  values="2;8;14;2"
                  dur={`${speed}s`}
                  repeatCount="indefinite"
                />
              </feTurbulence>
              {/* Suaviza el ruido para ondas más “caras” */}
              <feGaussianBlur in="noise" stdDeviation="3" result="softNoise" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="softNoise"
                scale={intensity}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          )}
        </defs>

        {/* Grupo de líneas, con blend para integrarse con el fondo/screenshot */}
        <g
          mask="url(#waves-mask)"
          style={{
            mixBlendMode: "screen", // prueba 'overlay' o 'soft-light' según tu fondo
            opacity: 0.9,
          }}
          filter={!reduced ? "url(#waves-displace)" : undefined}
        >
          {Array.from({ length: lines }).map((_, i) => {
            const y = yStart + i * yGap;
            const d = buildPath(y);
            const delay = (i * speed) / lines; // leves desfases entre líneas
            return (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="url(#wave-stroke)"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.85 - i * (0.5 / lines)}
              >
                {!reduced && (
                  <animate
                    attributeName="stroke-dasharray"
                    values="1, 200; 120, 200; 1, 200"
                    dur={`${speed * 1.2}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                )}
              </path>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export function HeroStripeBands({
  className = "",
  bands = 7,
  stroke = 110,
  intensity = 18,
  speed = 22,
  angle = -18,
  blend = "normal",
}: {
  className?: string;
  bands?: number;
  stroke?: number;
  intensity?: number;
  speed?: number;
  angle?: number;
  blend?: "normal" | "screen" | "soft-light" | "overlay";
}) {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // separaciones verticales entre bandas dentro del SVG base
  const gap = stroke * 0.55; // compacto sin encimarse

  // path base: curva horizontal larga (se deforma con el filtro)
  const makePath = (y: number) =>
    [
      `M -200 ${y}`,
      `C 300 ${y - 60}, 900 ${y + 60}, 1500 ${y}`,
      `S 2700 ${y - 60}, 3300 ${y}`,
    ].join(" ");

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
      style={{ contain: "layout paint", zIndex: 0 }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        shapeRendering="geometricPrecision"
      >
        <defs>
          {/* Gradiente rosa -> naranja con un toque magenta al centro */}
          <linearGradient id="band-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF0095" />
            <stop offset="55%" stopColor="#FF3FA1" />
            <stop offset="100%" stopColor="#FF8C5F" />
          </linearGradient>

          {/* Vignette para perderse en bordes y no competir con el contenido */}
          <radialGradient id="fade" cx="65%" cy="75%" r="90%">
            <stop offset="60%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <mask id="fade-mask">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>

          {/* Cuña diagonal que “corta” como en el ejemplo de Stripe */}
          <clipPath id="wedge">
            <polygon
              points="
                500,0   1600,0
                1600,900  900,900
              "
            />
          </clipPath>

          {/* Filtro de ondas de alta calidad */}
          {!reduced && (
            <filter
              id="liquid"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
              colorInterpolationFilters="sRGB"
              // @ts-ignore: filterRes existe aunque TS no lo tipa
              filterRes="1024"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.004 0.008"
                numOctaves="2"
                seed="4"
                stitchTiles="stitch"
                result="noise"
              >
                <animate
                  attributeName="baseFrequency"
                  dur={`${speed}s`}
                  values="0.004 0.008; 0.005 0.010; 0.004 0.008"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feGaussianBlur in="noise" stdDeviation="2.5" result="soft" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="soft"
                scale={intensity}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          )}
        </defs>

        {/* Grupo rotado y recortado a la cuña, luego enmascarado con fade */}
        <g
          clipPath="url(#wedge)"
          mask="url(#fade-mask)"
          filter={!reduced ? "url(#liquid)" : undefined}
          style={{ mixBlendMode: blend, opacity: 0.95 }}
          transform={`rotate(${angle} 1200 700)`} // pivote hacia abajo-derecha
        >
          {Array.from({ length: bands }).map((_, i) => {
            const y = 350 + i * gap;
            const d = makePath(y);
            const op = 0.82 - i * (0.5 / Math.max(1, bands - 1)); // banditas delgadas al fondo
            const w = stroke * (1 - i * 0.06); // muy leve taper
            return (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="url(#band-grad)"
                strokeWidth={w}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={Math.max(0.12, op)}
                vectorEffect="non-scaling-stroke"
              >
                {!reduced && (
                  // micro movimiento longitudinal para que "respiren"
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to={stroke * 6}
                    dur={`${speed * 3}s`}
                    repeatCount="indefinite"
                  />
                )}
              </path>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

// Subcomponente: Imagen del hero
function HeroImage({ 
  imageSrc, 
  imageAlt, 
  imageAspect = '9/19.5'
}: { 
  imageSrc?: string
  imageAlt?: string
  imageAspect?: '16/9' | '4/3' | '1/1' | '9/19.5'
}) {
  const aspectClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '9/19.5': 'aspect-[9/19.5]'
  }

  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-xs center" // Cambia max-w-sm por: max-w-xs, max-w-md, max-w-lg, etc.
      style={{
        margin: '0 auto'
      }}
    >
      <div className={`relative ${aspectClasses[imageAspect]} w-full`}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || "Hero image"}
            fill
            className="object-contain"
            priority
            style={{
              filter: 'drop-shadow(0px 16px 48px rgba(0, 0, 0, 0.16))'
            }}  
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-100">
            <div className="text-gray-400 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-lg"></div>
              <p className="text-sm">Imagen placeholder</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

// Subcomponente: Contenido del hero
function HeroContent({ 
  title, 
  description, 
  ctas 
}: { 
  title: string
  description?: string
  ctas?: CTA[]
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center space-y-6 pt-32 md:py-0 md:space-y-8"
    >
      {/* Social proof */}
      <motion.div 
        variants={fadeInUp}
        className="flex items-center gap-2 text-sm text-muted-foreground"
      >
        <div className="flex -space-x-2">
          {["a", "b", "c", "d", "e"].map((letter, i) => (
            <div
              key={letter}
              className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
            >
              <Image 
                src={`/avatar/${letter}.png`} 
                alt={`User avatar ${letter}`} 
                width={24} 
                height={24} 
                className="rounded-full object-cover"
              />
            </div>
          ))}
        </div>
        <span>Con la confianza de +100 emprendedores</span>
      </motion.div>

      {/* Título principal */}
      <motion.h1 
        variants={fadeInUp}
        className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight"
      >
        {title}
      </motion.h1>

      {/* Descripción */}
      {description && (
        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-lg text-black-500 leading-relaxed max-w-lg"
        >
          {description}
        </motion.p>
      )}

      {/* CTAs */}
      {ctas && ctas.length > 0 && (
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4"
        >
          {ctas.map((cta, index) => (
            <Button
              key={index}
              asChild
              size="lg"
              variant={cta.variant === 'ghost' ? 'outline' : 'default'}
            >
              <a href={cta.href} target="_blank" rel="noopener noreferrer">
                {cta.label}
                {cta.variant !== 'ghost' && <ArrowRight className="ml-2 h-4 w-4" />}
              </a>
            </Button>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

// Subcomponente: Wrapper principal
function HeroWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Section>
      {children}
    </Section>
  )
}

// Componente principal Hero
export default function Hero({
  title = "Opera tu negocio desde aquí",
  description = "Punto de venta, inventario y reportes en un solo lugar. Fácil, rápido y hecho para crecer contigo.",
  imageSrc = "/shoots/product-shot.png", // Actualizada la ruta de la imagen
  imageAlt = "woravi punto de venta", // Actualizado el alt text
  ctas = [
    {
      label: "Comienza gratis",
      href: "https://1a2toy77zgg.typeform.com/to/K5rhk9Mb",
      variant: "primary" as const
    },
    {
      label: "Ya tengo cuenta",
      href: "#",
      variant: "ghost" as const
    }
  ],
  imageAspect = "9/19.5" as const // Cambiado el default para iPhone
}: HeroProps) {
  return (
    <HeroWrapper>
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Texto - En mobile va arriba */}
        <div className="order-1 lg:order-1">
          <HeroContent 
            title={title}
            description={description}
            ctas={ctas}
          />
        </div>
        
        {/* Imagen - En mobile va abajo */}
        <div className="order-2 lg:order-2">
          <HeroImage 
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            imageAspect={imageAspect}
          />
        </div>
      </div>
    </HeroWrapper>
  )
}
