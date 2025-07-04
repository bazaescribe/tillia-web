import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionTitle from "./SectionTitle";

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
      icon: "/illustrations/sweets.png"
    },
    {
      title: "Reportes más claros y personalizados",
      description: "Visualiza tus ventas por producto, horario, local o canal. Y entiende qué funciona y qué no con explicaciones fáciles de leer.",
      icon: "/illustrations/macbook.png"
    },
    {
      title: "Conecta con apps de entrega",
      description: "Integra tu negocio con Uber Eats, Rappi, DiDi Food y otros servicios de entrega. Gestiona todos tus pedidos desde un solo lugar.",
      icon: "/illustrations/delivery.png"
    },
    {
      title: "Maneja a tu equipo",
      description: "Define roles para tus colaboradores, establece objetivos claros y evalúa su rendimiento en relación con tus ventas.",
      icon: "/illustrations/id.png"
    },
    {
      title: "Integración con WhatsApp, TikTok y más",
      description: "Responde a tus clientes, comparte productos y recibe pedidos directo desde las apps donde ya estás vendiendo.",
      icon: "/illustrations/tiktok.png"
    },
    {
      title: "Gestión de restaurantes",
      description: "Administra mesas, órdenes y reservaciones. Optimiza tus tiempos de servicio y mejora la experiencia de tus comensales.",
      icon: "/illustrations/tacos.png"
    },
    {
      title: "Reabastece con un clic",
      description: "Genera órdenes de compra automáticas con tus proveedores preferidos cuando tu inventario esté bajo, ahorrándote tiempo y esfuerzo.",
      icon: "/illustrations/basket.png"
    }
  ];

  return (
    <section className="py-40 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="container mx-auto px-8">
        <SectionTitle
          overtext="Roadmap"
          title="Esto apenas comienza"
          subtitle="Estamos construyendo más herramientas para ayudarte a vender mejor. Explora lo que viene y cuéntanos que es lo que tu negocio realmente necesita."
        />

        <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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