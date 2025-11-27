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
    <div className="flex flex-col gap-2 border-l-2 border-gray-200 pl-4 transition-colors hover:border-indigo-500">
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
      <div className="lg:hidden w-full aspect-video relative rounded-lg overflow-hidden shadow-lg mb-2">
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
    headline: "Control absoluto sin mover un dedo extra",
    description:
      "Administra inventario, conecta ventas con proveedores y entiende tu operación en tiempo real. Un panel que se arma solo y te deja respirar.",
    image: "/photos/picture-retail.jpg",
    features: [
      {
        title: "Inventario Vivo",
        description:
          "Registra productos, lotes y existencias. Blikku calcula stock, costos promedios y genera alertas que sí sirven."
      },
      {
        title: "Catálogo Conectado",
        description:
          "Cada producto vive dentro del sistema y se relaciona con ventas, proveedores y promociones."
      },
      {
        title: "Flujos de Venta",
        description:
          "Registra ventas rápido, actualiza inventario al momento y genera reportes diarios automáticos."
      },
      {
        title: "Seguimiento de Proveedores",
        description:
          "Crea órdenes de reposición y deja que el sistema te avise cuando toca surtir."
      }
    ]
  },
  {
    industry: "Servicios",
    headline: "Estandariza tu operación y respira tranquilo",
    description:
      "Define procesos repetibles, gestiona clientes y automatiza tareas sin perder claridad ni control.",
    image: "/photos/picture-service.jpg",
    features: [
      {
        title: "Gestión de Clientes",
        description:
          "Historial, archivos, próximos pasos y notas. Todo viviendo en una sola entidad."
      },
      {
        title: "Flujos Automáticos",
        description:
          "Tareas recurrentes, recordatorios y visitas programadas que el sistema ejecuta sin que tengas que perseguir a nadie."
      },
      {
        title: "Panel Operativo",
        description:
          "Tu equipo ve qué hacer hoy, qué está pendiente y qué viene mañana."
      },
      {
        title: "Tickets y Seguimiento",
        description:
          "Registra incidentes y deja que el proceso avance solo con reglas claras."
      }
    ]
  },
  {
    industry: "Restaurantes",
    headline: "Controla cocina, inventario y ventas sin caos",
    description:
      "Arma recetas, gestiona insumos, recibe alertas de bajo stock y conecta ventas con merma sin sumar otro POS.",
    image: "/photos/picture-restaurant.jpg",
    features: [
      {
        title: "Recetas Inteligentes",
        description:
          "Cada platillo se conecta con sus insumos. Cada venta descuenta inventario automáticamente."
      },
      {
        title: "Control de Merma",
        description:
          "Registra pérdidas y ajusta inventario sin drama. Todo transparente."
      },
      {
        title: "Ventas Integradas",
        description:
          "Registra ventas desde una UI sencilla y deja que el sistema haga el resto."
      },
      {
        title: "Alertas de Insumos",
        description:
          "El sistema te avisa cuando algo está por agotarse antes de que te afecte."
      }
    ]
  },
  {
    industry: "Consultoría",
    headline: "Proyectos claros, entregas a tiempo y cero caos",
    description:
      "Administra clientes, etapas, entregables y facturación interna desde un espacio modular que trabaja contigo.",
    image: "/photos/picture-consulting.jpg",
    features: [
      {
        title: "Pipeline de Proyectos",
        description:
          "Organiza etapas y avanza con un click mientras el sistema genera las tareas siguientes."
      },
      {
        title: "Control de Entregables",
        description:
          "Archivos, revisiones, deadlines y responsables en un lugar que no se pierde."
      },
      {
        title: "Clientes y Contratos",
        description:
          "Cada cliente con su propio espacio, contratos, notas y acuerdos claros."
      },
      {
        title: "Reportes Operativos",
        description:
          "Carga de trabajo, avances y dónde está atorado cada proyecto."
      }
    ]
  },
  {
    industry: "Producción Ligera",
    headline: "Coordina insumos, procesos y entregas sin planillas eternas",
    description:
      "Ideal para talleres, empaquetado, ensamble, laboratorios y producción artesanal. Controla insumos, procesos, lotes y entregas desde un espacio visual y flexible.",
    image: "/photos/picture-production.jpg",
    features: [
      {
        title: "Control de Insumos",
        description:
          "Registra materiales, lotes y costos para mantener precisión en cada orden."
      },
      {
        title: "Órdenes de Producción",
        description:
          "Define etapas, responsables y cantidades. El sistema avanza contigo."
      },
      {
        title: "Trazabilidad Simple",
        description:
          "Sigue cada producción desde materia prima hasta producto final."
      },
      {
        title: "Alertas y Reposiciones",
        description:
          "Evita pausas. Blikku te avisa cuando falta material para la siguiente tanda."
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
      <div className="mx-auto px-4 sm:px-6 lg:px-6" style={{ maxWidth: "1200px" }}>
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
