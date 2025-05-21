import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TilliaFeatures() {
  const features = [
    {
      title: "Conecta tus tiendas en línea",
      description: "Gestiona tu inventario y catálogo desde Tillia y publícalo automáticamente en Shopify, WooCommerce, Mercado Libre, Amazon y más.",
      icon: "/illustrations/online.png"
    },
    {
      title: "Compras más inteligentes",
      description: "Te diremos qué productos necesitas resurtir, cuándo y en qué cantidad, con base en tus ventas reales y temporadas.",
      icon: "/illustrations/fruits.png"
    },
    {
      title: "Reportes más claros y personalizados",
      description: "Visualiza tus ventas por producto, horario, local o canal. Y entiende qué funciona y qué no con explicaciones fáciles de leer.",
      icon: "/illustrations/fruits.png"
    },
    {
      title: "App móvil más robusta",
      description: "Visualiza tus ventas por producto, horario, local o canal. Y entiende qué funciona y qué no con explicaciones fáciles de leer.",
      icon: "/illustrations/fruits.png"
    },
    {
      title: "Administra tu equipo",
      description: "Define permisos para que tus vendedores solo vean lo que necesitan. Seguridad sin enredos.",
      icon: "/illustrations/fruits.png"
    },
    {
      title: "Integración con WhatsApp, TikTok y más",
      description: "Responde a tus clientes, comparte productos y recibe pedidos directo desde las apps donde ya estás vendiendo.",
      icon: "/illustrations/fruits.png"
    }
  ];

  return (
    <section className="py-40 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Esto apenas comienza</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crecemos junto con tu negocio. Aquí te contamos lo que viene para que te emociones con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 relative">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-4">¿Tienes ideas o necesidades?</h3>
          <p className="text-xl text-gray-600 mb-8">
            Esto lo construimos contigo. Escríbenos y cuéntanos qué te gustaría ver en Tillia.
          </p>
          <Button variant='outline'>
            Tengo una idea ✨
          </Button>
        </div>
      </div>
    </section>
  );
}