import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Gratis",
      price: "$0",
      period: "/mes",
      description: "Ideal para empezar a organizar tu negocio sin gastar de más",
      features: [
        "1 usuarios",
        "Registro de ventas básico",
        "Hasta 50 productos",
        "Catálogo digital",
        "Soporte por email"
      ],
      cta: "Empieza gratis",
      popular: false,
    },
    {
      name: "Starter",
      price: "$139",
      period: "/mes",
      description: "Para negocios que ya venden y quieren dar el siguiente paso",
      features: [
        "2 usuarios",
        "Hasta 500 productos",
        "Acceso a catálogo precargados",
        "Soporte vía WhatsApp",
        "Precios inteligentes (básico)",
        "Reportes simples de ventas"
      ],
      cta: "Probar Starter",
      popular: false,
    },
    {
      name: "Pro",
      price: "$479",
      period: "/mes",
      description: "Para negocios que quieren vender más y estar en todos lados",
      features: [
        "Hasta 5 dispositivos",
        "Productos ilimitados",
        "Integración con tiendas en línea (Shopify, WooCommerce, etc.)",
        "Conecta con apps de delivery (Uber Eats, Rappi, etc.)",
        "Sugerencias de resurtido y precios inteligentes avanzados",
        "Vende con tu cámara",
        "Reportes personalizados y análisis de ventas",
        "Soporte prioritario por WhatsApp y correo"
      ],
      cta: "Probar Pro",
      popular: true,
    },    
    {
      name: "Empresas",
      price: "A medida",
      period: "",
      description: "Para cadenas, franquicias o negocios con necesidades específicas",
      features: [
        "Dispositivos y sucursales ilimitadas",
        "Capacitación personalizada",
        "Integraciones especiales (ERP, ecommerce, etc.)",
        "Soporte dedicado",
        "Panel de control multi-sucursal"
      ],
      cta: "Habla con ventas",
      popular: false,
    }
  ]
  
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#BAFFFC] text-[#6A03CB] hover:bg-[#BAFFFC]/80">Simple Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plans That Grow With You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Affordable options for businesses of all sizes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.slice(0, 3).map((plan, index) => (
            <Card
              key={index}
              className={`p-8 border ${plan.popular ? "border-[#6A03CB] ring-1 ring-[#6A03CB]" : "border-gray-200"} relative`}
            >
              {plan.popular && <Badge className="absolute top-4 right-4 bg-[#6A03CB]">Most Popular</Badge>}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-600">{plan.period}</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#6A03CB]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${plan.popular ? "bg-[#6A03CB] hover:bg-[#5502a3]" : "bg-white text-[#6A03CB] border border-[#6A03CB] hover:bg-[#6A03CB]/10"}`}
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
                  <span className="text-3xl font-bold">{plans[3].price}</span>
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