'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")
  
  const plans = [
    {
      name: "Gratis",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      period: billingPeriod === "monthly" ? "/ para siempre" : "/ para siempre",
      description: "Ideal para empezar a organizar tu negocio sin gastar de más",
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
      name: "Starter",
      monthlyPrice: "$139",
      yearlyPrice: "$1,390",
      period: billingPeriod === "monthly" ? "/ mes" : "/ año",
      description: "Para negocios que ya venden y quieren dar el siguiente paso",
      features: [
        "1 usuario",
        "Hasta 500 productos",
        "Acceso a catálogo precargados",
        "Paquetes y promociones",
        "Reportes simples de ventas"
      ],
      cta: "Probar Starter",
      popular: true,
    },
    {
      name: "Pro",
      monthlyPrice: "$479",
      yearlyPrice: "$4,790",
      period: billingPeriod === "monthly" ? "/ mes" : "/ año",
      description: "Para negocios que quieren vender más y estar en todos lados",
      features: [
        "Desde cinco usuarios",
        "Soporte multisucursal",
        "Productos ilimitados",
        "Conecta tu tienda en línea",
        "Conecta con apps de delivery",
        "Control de inventario inteligente",
        "Tillia Vision",
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
  
  return (
    <section id="pricing" className="py-40 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Empieza gratis, escala al infinito</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tillia crece contigo. Comienza sin costo, sin compromisos, y mejora tu plan sólo cuando tu negocio lo necesite.</p>
          
          {/* Billing period toggle */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={`text-sm font-medium ${billingPeriod === "monthly" ? "text-black" : "text-gray-500"}`}>Mensual</span>
            <Switch 
              checked={billingPeriod === "yearly"} 
              onCheckedChange={(checked) => setBillingPeriod(checked ? "yearly" : "monthly")}
              className="data-[state=checked]:bg-[#000]"
            />
            <div className="flex items-center">
              <span className={`text-sm font-medium ${billingPeriod === "yearly" ? "text-black" : "text-gray-500"}`}>Anual</span>
              <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Ahorra 15%</Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.slice(0, 3).map((plan, index) => (
            <Card
              key={index}
              className={`p-8 border flex flex-col justify-between ${plan.popular ? "border-gray-200" : "border-gray-200"} relative`}
              style={{ 
                boxShadow: plan.popular ? "0px 4px 32px rgba(255, 72, 158, 0.16)" : "none"
              }}
            >
              <div>
                {plan.popular && <Badge className="absolute top-4 right-4 bg-[#e8e8e8]">🔥</Badge>}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold mr-1">
                    {billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-black/20" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
        
        {/* Enterprise plan on second row with full width */}
        <div className="mt-8">
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
        </div>
      </div>
    </section>
  )
}