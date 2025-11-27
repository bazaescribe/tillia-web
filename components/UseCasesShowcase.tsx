'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import SectionTitle from './SectionTitle';

// --- Types ---

export interface Feature {
  title: string;
  description: string;
}

export interface UseCase {
  industry: string;
  headline: string;
  description: string;
  features: Feature[];
  image: string;
}

interface UseCasesShowcaseProps {
  items?: UseCase[];
  className?: string;
}

// --- Subcomponents ---

const FeatureItem = ({ feature }: { feature: Feature }) => {
  return (
    <div className="flex flex-col gap-2 border-l-2 border-slate-200 pl-4 transition-colors hover:border-indigo-500">
      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
        {feature.title}
      </h4>
      <p className="text-slate-600 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

const StickyImage = ({
  src,
  alt,
  isVisible
}: {
  src: string;
  alt: string;
  isVisible: boolean
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform",
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95"
      )}
      aria-hidden={!isVisible}
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl border border-slate-200/50 bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={isVisible}
        />
        {/* Overlay gradient for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

const UseCaseItem = ({
  useCase,
  isActive,
  innerRef,
  isLast,
  isFirst
}: {
  useCase: UseCase;
  isActive: boolean;
  innerRef?: React.Ref<HTMLDivElement>;
  isLast?: boolean;
  isFirst?: boolean;
}) => {
  return (
    <div
      ref={innerRef}
      className={cn(
        "flex flex-col gap-8 py-12 lg:py-32 transition-opacity duration-500",
        isActive ? "opacity-100" : "lg:opacity-40",
        isLast && "lg:pb-[30vh]",
        isFirst && "lg:pt-[25vh]"
      )}
    >
      {/* Mobile Image (Visible only on small screens) */}
      <div className="lg:hidden w-full aspect-[15/10] relative rounded-lg overflow-hidden shadow-lg mb-6">
        <Image
          src={useCase.image}
          alt={`Illustration for ${useCase.industry}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle
          overtext={useCase.industry}
          title={useCase.headline}
          subtitle={useCase.description}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
        {useCase.features.map((feature, idx) => (
          <FeatureItem key={idx} feature={feature} />
        ))}
      </div>
    </div>
  );
};

// --- Main Component ---

// --- Example Data ---

const DEFAULT_USE_CASES: UseCase[] = [
  {
    industry: "Retail",
    headline: "Convierte tu operación en una máquina precisa",
    description:
      "Organiza tu inventario, automatiza reposiciones, conecta ventas con proveedores y entiende tu negocio en tiempo real. Todo desde un solo panel que se arma solo.",
    image:
      "/photos/grocery.jpg",
    features: [
      {
        title: "Inventario Vivo",
        description:
          "Registra productos, lotes y existencias. Blikku calcula stock total, costos promedios y alertas inteligentes."
      },
      {
        title: "Catálogo Conectado",
        description:
          "Todos tus productos como entidades vivas que pueden relacionarse con ventas, proveedores y promociones."
      },
      {
        title: "Flujos de Venta",
        description:
          "Captura ventas rápido, actualiza inventario automáticamente y gatilla reportes diarios sin hacer nada."
      },
      {
        title: "Seguimiento de Proveedores",
        description:
          "Crea órdenes de reposición y deja que el sistema te avise cuando toca volver a surtir."
      }
    ]
  },
  {
    industry: "Servicios",
    headline: "Estandariza tu operación y deja de apagar incendios",
    description:
      "Define procesos repetibles, registra clientes, asigna tareas recurrentes y automatiza seguimientos sin perder control.",
    image:
      "/photos/barber.jpg",
    features: [
      {
        title: "Gestión de Clientes",
        description:
          "Guarda historial de servicios, notas, archivos y próximos pasos. Todo ordenado por entidad."
      },
      {
        title: "Flujos Automáticos",
        description:
          "Programas tareas recurrentes como recordatorios, visitas o renovaciones y el sistema las dispara solo."
      },
      {
        title: "Panel Operativo",
        description:
          "Tu equipo ve exactamente qué hacer hoy, qué está pendiente y qué viene mañana."
      },
      {
        title: "Tickets y Seguimiento",
        description:
          "Registra incidentes y deja que el proceso avance solo con reglas simples."
      }
    ]
  },
  {
    industry: "Restaurantes",
    headline: "Controla la cocina, el inventario y las ventas sin caos",
    description:
      "Modela tus recetas, gestiona insumos, recibe alertas de bajo stock y conecta ventas con merma sin cargar con otro POS.",
    image:
      "/photos/chocolate.jpg",
    features: [
      {
        title: "Recetas Inteligentes",
        description:
          "Cada platillo se conecta a sus insumos. Cada venta descuenta inventario automáticamente."
      },
      {
        title: "Control de Merma",
        description:
          "Registra pérdidas y ajusta inventario sin estrés. Todo transparente."
      },
      {
        title: "Ventas Integradas",
        description:
          "Registra ventas desde una UI sencilla y deja que todo se actualice debajo del agua."
      },
      {
        title: "Alertas de Insumos",
        description:
          "El sistema te dice cuándo se te está acabando algo antes de que lo notes."
      }
    ]
  },
  {
    industry: "Consultoría",
    headline: "Entrega proyectos con procesos claros y sin retrasos",
    description:
      "Administra clientes, fases, entregables, contratos y facturación interna desde un espacio modular que se adapta solo.",
    image:
      "/photos/woman-ipad.jpg",
    features: [
      {
        title: "Pipeline de Proyectos",
        description:
          "Organiza proyectos por etapas y avanza con un click mientras el sistema genera las tareas siguientes."
      },
      {
        title: "Control de Entregables",
        description:
          "Archivos, revisiones, fechas límite y responsables en un solo lugar."
      },
      {
        title: "Clientes y Contratos",
        description:
          "Cada cliente tiene su espacio con contratos, acuerdos y notas."
      },
      {
        title: "Reportes Operativos",
        description:
          "Visualiza cargas de trabajo, avances y qué proyecto está atorado."
      }
    ]
  }
];


export default function UseCasesShowcase({ items = DEFAULT_USE_CASES, className }: UseCasesShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the index of the intersecting element
          const index = itemRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when the element is in the middle 20% of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <section className={cn("w-full bg-slate-50 py-16", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left Column: Scrollable Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {items.map((item, index) => (
              <UseCaseItem
                key={index}
                useCase={item}
                isActive={activeIndex === index}
                isFirst={index === 0}
                isLast={index === items.length - 1}
                innerRef={(el) => {
                  // Assign to the ref array without returning anything
                  itemRefs.current[index] = el;
                }}
              />
            ))}
          </div>

          {/* Right Column: Sticky Image Panel */}
          <div className="hidden lg:block w-full lg:w-1/2 relative">
            <div className="sticky top-0 h-screen flex items-center justify-center pt-16 pb-6">
              <div className="relative w-full h-[85%] max-w-xl">
                {items.map((item, index) => (
                  <StickyImage
                    key={index}
                    src={item.image}
                    alt={`Visual for ${item.industry}`}
                    isVisible={activeIndex === index}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
