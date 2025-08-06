'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Asterisk } from "lucide-react"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { useGeolocation } from "@/hooks/use-geolocation"

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")
  const { isInMexico, isLoading } = useGeolocation()
  
  // Pricing data for Mexico (MXN)
  const mexicoPlans = [
    {
      name: "Abre",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      period: billingPeriod === "monthly" ? " para siempre" : " para siempre",
      description: "Ideal para empezar a organizar tu negocio sin gastar de más",
      icon: '/illustrations/cart.png',
      features: [
        "1 usuario",
        "Registro de ventas básico",
        "Hasta 50 productos",
        "Soporte por email"
      ],
      cta: "Empieza gratis",
      popular: false,
    },
    {
      name: "Crece",
      monthlyPrice: "$189",
      yearlyPrice: "$1,890",
      period: billingPeriod === "monthly" ? " mes" : " año",
      description: "Para negocios que ya venden y quieren dar el siguiente paso",
      icon: '/illustrations/stand.png',
      features: [
        "1 usuario",
        "Hasta 300 productos",
        "Acceso a catálogo precargados",
        "Paquetes y promociones",
        "Reportes simples de ventas"
      ],
      cta: "Probar Starter",
      popular: true,
    },
    {
      name: "Lidera",
      monthlyPrice: "$579",
      yearlyPrice: "$5,790",
      period: billingPeriod === "monthly" ? " mes" : " año",
      description: "Para negocios que quieren vender más y estar en todos lados",
      icon: '/illustrations/store.png',
      features: [
        "Cuatro usuarios",
        "Soporte multisucursal",
        "Productos ilimitados",
        "Conecta tu tienda en línea",
        "Conecta con apps de delivery",
        "Control de inventario inteligente",
        "Woribo Vision",
        "Proyecciones de ventas",
        "Soporte prioritario por WhatsApp y correo"
      ],
      cta: "Probar Pro",
      popular: false,
    },    
    {
      name: "Empresas",
      monthlyPrice: "A medida",
      yearlyPrice: "A medida",
      period: "",
      description: "Para cadenas, franquicias o negocios con necesidades específicas",
      icon: '/illustrations/till.png',
      features: [
        "Dispositivos y sucursales ilimitadas",
        "Capacitación personalizada",
        "Hardware e instalaciones",
        "Actualizaciones y mejoras continuas",
        "Soporte dedicado",
        "Panel de control multi-sucursal"
      ],
      cta: "Habla con ventas",
      popular: false,
    }
  ]

  // Pricing data for US/International (USD)
  const usPlans = [
    {
      name: "Abre",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      period: billingPeriod === "monthly" ? " para siempre" : " para siempre",
      description: "Ideal para empezar a organizar tu negocio sin gastar de más",
      icon: '/illustrations/cart.png',
      features: [
        "1 usuario",
        "Registro de ventas básico",
        "Hasta 50 productos",
        "Soporte por email"
      ],
      cta: "Empieza gratis",
      popular: false,
    },
    {
      name: "Crece",
      monthlyPrice: "$11",
      yearlyPrice: "$110",
      period: billingPeriod === "monthly" ? " mes" : " año",
      description: "Para negocios que ya venden y quieren dar el siguiente paso",
      icon: '/illustrations/stand.png',
      features: [
        "1 usuario",
        "Hasta 300 productos",
        "Acceso a catálogo precargados",
        "Paquetes y promociones",
        "Reportes simples de ventas"
      ],
      cta: "Probar Starter",
      popular: true,
    },
    {
      name: "Lidera",
      monthlyPrice: "$34",
      yearlyPrice: "$340",
      period: billingPeriod === "monthly" ? " mes" : " año",
      description: "Para negocios que quieren vender más y estar en todos lados",
      icon: '/illustrations/store.png',
      features: [
        "Cuatro usuarios",
        "Soporte multisucursal",
        "Productos ilimitados",
        "Conecta tu tienda en línea",
        "Conecta con apps de delivery",
        "Control de inventario inteligente",
        "Woribo Vision",
        "Proyecciones de ventas",
        "Soporte prioritario por WhatsApp y correo"
      ],
      cta: "Probar Pro",
      popular: false,
    },    
    {
      name: "Empresas",
      monthlyPrice: "A medida",
      yearlyPrice: "A medida",
      period: "",
      description: "Para cadenas, franquicias o negocios con necesidades específicas",
      icon: '/illustrations/till.png',
      features: [
        "Dispositivos y sucursales ilimitadas",
        "Capacitación personalizada",
        "Hardware e instalaciones",
        "Actualizaciones y mejoras continuas",
        "Soporte dedicado",
        "Panel de control multi-sucursal"
      ],
      cta: "Habla con ventas",
      popular: false,
    }
  ]

  // Use appropriate pricing based on location
  const plans = isInMexico ? mexicoPlans : usPlans
  const currency = isInMexico ? "MXN" : "USD"
  const savingsText = "Ahorra 15%"
  const monthlyText = "Mensual"
  const yearlyText = "Anual"
  
  // Show loading state while detecting location
  if (isLoading) {
    return (
      <section id="pricing" className="py-40 bg-gradient-to-b from-white to-[#FAFAFA]">
        <div className="container">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-32 mx-auto mb-4"></div>
              <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="pricing" className="py-40 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="container">
        <div className="text-center mb-16">
          <SectionTitle
            overtext={isInMexico ? "Precios" : "Pricing"}
            title={isInMexico ? "Empieza gratis, escala al infinito" : "Start free, scale to infinity"}
            subtitle={isInMexico 
              ? "Woribo crece con tu negocio. Comienza con una cuenta gratuita, sin compromisos, y mejora tu plan sólo cuando lo necesites."
              : "Woribo grows with your business. Start with a free account, no commitments, and upgrade your plan only when you need it."
            }
          />
          
          {/* Billing period toggle */}
          <div className="flex items-center mt-3 space-x-4">
            <span className={`text-sm font-medium ${billingPeriod === "monthly" ? "text-black" : "text-gray-500"}`}>{monthlyText}</span>
            <Switch 
              checked={billingPeriod === "yearly"} 
              onCheckedChange={(checked) => setBillingPeriod(checked ? "yearly" : "monthly")}
              className="data-[state=checked]:bg-[#000]"
            />
            <div className="flex items-center">
              <span className={`text-sm font-medium ${billingPeriod === "yearly" ? "text-black" : "text-gray-500"}`}>{yearlyText}</span>
              <Badge className="ml-2 bg-green-100 text-green-800 text-xs">{savingsText}</Badge>
            </div>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.slice(0, 3).map((plan, index) => (
            <Card
              key={index}
              className={`p-8 flex flex-col justify-between relative border-gray-200 ${plan.popular ? "bg-black text-white border-black" : "bg-white text-black"}`}
            >
              <div>
                <Image
                  src={plan.icon}
                  alt={plan.name + " icon"}
                  width={128}
                  height={128}
                  className="mb-4 object-contain"
                  style={{ display: 'block' }}
                  loading="lazy"
                />
                {/* {plan.popular && <Badge className="absolute top-4 right-4 bg-white text-black">🔥</Badge>} */}
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-black"}`}>{plan.name}</h3>
                <div className="mb-4">
                  <p className={`text-4xl font-black mr-1 md:text-6xl  ${plan.popular ? "text-white" : "text-black"}`}>
                    {billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </p>
                  {plan.period && <span className={`ml-1 ${plan.popular ? "text-gray-200" : "text-gray-600"}`}>{plan.period}</span>}
                </div>
                <p className={`mb-6 ${plan.popular ? "text-gray-200" : "text-gray-600"}`}>{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Asterisk className={`h-5 w-5 ${plan.popular ? "text-white/80" : "text-black/20"}`} />
                      <span className={plan.popular ? "text-white" : undefined}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                variant={plan.popular ? "default" : "outline"}
                className={plan.popular ? "bg-white text-black hover:bg-gray-200" : undefined}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Currency indicator */}
        <div className="mt-4">
          <p className="text-xs">
            Precios en {currency} • {isInMexico ? "México" : "International"}
          </p>
        </div>
        
        {/* Enterprise plan on second row with full width */}
        {/* <div className="mt-8">
          <Card
            className="p-8 border border-gray-200 relative md:max-w-none"
          >
            <div className="md:flex md:justify-between md:items-start">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold mb-2">{plans[3].name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">
                    {billingPeriod === "monthly" ? plans[3].monthlyPrice : plans[3].yearlyPrice}
                  </span>
                  {plans[3].period && <span className="text-gray-600">{plans[3].period}</span>}
                </div>
                <p className="text-gray-600 mb-6 md:mb-0">{plans[3].description}</p>
              </div>
              
              <div className="md:w-1/3">
                <ul className="space-y-3 mb-8 md:mb-0">
                  {plans[3].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#6A03CB]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:w-1/4 md:flex md:items-center">
                <Button
                  className="w-full bg-white text-[#6A03CB] border border-[#6A03CB] hover:bg-[#6A03CB]/10"
                >
                  {plans[3].cta}
                </Button>
              </div>
            </div>
          </Card>
        </div> */}
      </div>
    </section>
  )
}