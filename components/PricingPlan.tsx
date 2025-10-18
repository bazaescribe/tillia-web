'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Section from "./atoms/section"
import SectionTitle from "./SectionTitle"

type Plan = {
  name: string
  price: string
  note?: string
  description?: string
  cta?: string
  main?: boolean
}



const plans: Plan[] = [
  {
    name: "Basic",
    price: "$0.00",
    note: "Para siempre",
    description: "Para emprendedores que van comenzando.",
    cta: "Comenzar gratis",
  },
  {
    name: "Pro",
    price: "$477.00",
    note: "al mes por sucursal",
    description: "Para empresas que ya la están rompiendo.",
    cta: "Contáctanos",
    main: true,
  },
  {
    name: "Advance",
    price: "CUSTOM",
    note: "Según tus necesidades",
    description: "Para negocios con necesidades específicas",
    cta: "Contáctanos",
  },
]

type FeatureRow = {
  label: string
  values: [string, string, string]
}

const rows: FeatureRow[] = [
  { label: "Usuarios", values: ["1", "5 *", "Ilimitados"] },
  { label: "Productos", values: ["30", "Ilimitados", "Ilimitados"] },
  { label: "Registro de ventas", values: ["90 días", "Hasta 2 años", "Hasta 5 años"] },
  { label: "Finanzas", values: ["Básicas", "Avanzadas", "Personalizado"] },
  { label: "Asistente de precios", values: ["Básico", "Avanzado", "Avanzado"] },
  { label: "Asistente con AI", values: ["No", "Sí", "Sí"] },
  { label: "Gestión de citas", values: ["No", "Sí", "Sí"] },
  { label: "Proyecciones", values: ["No", "Sí", "Sí"] },
  { label: "Tienda en línea", values: ["No", "Sí **", "Sí **"] },
  { label: "Gestión de empleados", values: ["No", "Sí **", "Sí"] },
  { label: "Gestión de clientes", values: ["No", "Sí **", "Sí"] },
  { label: "Herramientas para restaurante", values: ["No", "Sí **", "Sí"] },
  { label: "Integraciones", values: ["No", "Sí **", "Sí"] },
  { label: "Acceso a API", values: ["No", "No", "Sí"] },
]

export default function PricingPlan() {
  return (
    <Section variant="dark">
      {/* Desktop / Tablet: Table with sticky header */}
      <div className="py-24 pb-14">
        <SectionTitle 
          title="Planes para todo tipo de negocios" 
          subtitle="Empieza gratis y escala cuando tu negocio lo necesite. Sin comisiones raras, ni cobros sorpresa."
          overtext="Precios y paquetes"
          variant="dark" 
        />
      </div>
      <div className="hidden md:block">
        <div className="border-neutral-800 bg-black text-white">
          <div className="overflow-y-auto">
            {/* Grid header (sticky) */}
            <div className="sticky top-12 z-10 bg-black">
              <div className="grid grid-cols-4 border-b border-neutral-800">
                <div className="text-left py-4 px-4 text-sm font-medium text-gray-300">
                  Elige tu plan
                </div>
                {plans.map((plan) => (
                  <div key={plan.name} className="text-left py-6 px-4">
                    <div className="text-sm font-medium text-gray-300">{plan.name}</div>
                    <div className={`text-3xl md:text-4xl font-black ${plan.main ? "text-[#9D5CFF]" : "text-white"}`}>{plan.price}</div>
                    {plan.note && (
                      <div className="text-xs md:text-sm text-gray-400 mt-1">{plan.note}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Features grid rows */}
            <div>
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-4 border-t border-neutral-800 ${i % 2 === 0 ? "bg-black" : "bg-[#0B0B0B]"}`}
                >
                  <div className="py-3 px-4 text-sm text-gray-300">
                    {row.label}
                  </div>
                  {row.values.map((val, idx) => (
                    <div key={`${row.label}-${idx}`} className="py-3 px-4 text-sm text-white/90">
                      {val}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="grid grid-cols-4 gap-6 p-4 border-t border-neutral-800">
            <div></div>
            {plans.map((plan) => (
              <div key={plan.name} className="flex items-center">
                <Button
                  variant="outline"
                  className="w-full bg-white text-black hover:bg-gray-200 border-none"
                >
                  {plan.cta || "Seleccionar"}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          * Puedes incluir más empleados a precio preferencial. <br />
          ** Próximamente, puede generar cargos adicionales.
        </p>
      </div>

      {/* Mobile: Cards scrolling normally */}
      <div className="md:hidden space-y-4">
        {plans.map((plan, planIndex) => (
          <Card
            key={plan.name}
            className="p-6 bg-black text-white border-neutral-800"
          >
            <div className="flex items-baseline justify-between">
              <div>
                <h3 className="text-lg font-bold">{plan.name}</h3>
                {plan.note && <p className="text-xs text-gray-400">{plan.note}</p>}
              </div>
              <div className="text-2xl font-black">{plan.price}</div>
            </div>

            {plan.description && (
              <p className="mt-2 text-sm text-gray-300">{plan.description}</p>
            )}

            <ul className="mt-4 space-y-2">
              {rows.map((row) => (
                <li key={`${plan.name}-${row.label}`} className="flex items-start justify-between gap-3">
                  <span className="text-sm text-gray-400">{row.label}</span>
                  <span className="text-sm text-white/90">{row.values[planIndex]}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              className="mt-6 w-full bg-white text-black hover:bg-gray-200 border-none"
            >
              {plan.cta || "Seleccionar"}
            </Button>

            <p className="mt-3 text-[10px] leading-relaxed text-gray-500">
              * Puedes incluir más empleados a precio preferencial. ** Próximamente, puede generar cargos adicionales.
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}