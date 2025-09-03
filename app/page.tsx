import Navbar from "@/components/Navbar"
import QuickStartSteps from "@/components/QuickStartSteps"
import Footer from "@/components/Footer"
import SocialProof from "@/components/SocialProof"
import Testimonials from "@/components/Testimonials"
import NewHero from "@/components/NewHero"
import WordArt from "@/components/WordArt"
import Service from "@/components/Service"
import CallToAction from '@/components/CallToAction'
import PaperlessSection from "@/components/PaperlessSection"

export default function Home() {

  const services = [
    {
      title: "Control sin esfuerzo",
      subtitle: "tu inventario siempre claro",
      overtext: "Administración de Inventario",
      price: "Desde $0.00",
      cta: "Probar gratis",
      description:
        "Gestiona existencias con precisión absoluta. Tu negocio siempre sabe qué entra, qué sale y qué falta, sin hojas de cálculo ni dolores de cabeza.",
      image: "product-report.png",
    },
    {
      title: "Vende fácil",
      subtitle: "desde cualquier dispositivo",
      overtext: "Punto de Venta",
      price: "Desde $0.00",
      cta: "Probar gratis",
      description:
        "Olvídate de llamadas largas, equipo costoso o instalaciones complejas. Abre tu punto de venta en minutos y empieza a cobrar sin fricciones.",
      image: "pos.png",
    },
    {
      title: "Producción simple",
      subtitle: "resultados grandes",
      overtext: "Manufactura",
      price: "Desde $479.00 / al mes",
      cta: "Empezar ahora",
      description:
        "Organiza tu producción como si fuera magia. Ve de materias primas a productos terminados con la claridad y el orden que siempre quisiste.",
      image: "production.png",
    },
    {
      title: "Tu tienda online",
      subtitle: "lista en un click",
      overtext: "Venta en Línea",
      price: "Próximamente",
      cta: "Unirme a la lista",
      description:
        "Crea tu tienda digital con un click o conéctala a los grandes marketplaces. Tú decides hasta dónde crecer, nosotros lo hacemos simple.",
      image: "store.png",
    },
    {
      title: "Restaurantes sin fricción",
      subtitle: "del pedido a la mesa",
      overtext: "Restaurantes",
      price: "Próximamente",
      cta: "Unirme a la lista",
      description:
        "Comanda, cocina y caja en perfecta armonía. Que tu equipo fluya y tus clientes disfruten sin esperas ni complicaciones.",
      image: "food.png",
    },
    {
      title: "Agenda simple",
      subtitle: "tiempos siempre en orden",
      overtext: "Citas y Espacios",
      price: "Próximamente",
      cta: "Unirme a la lista",
      description:
        "Organiza citas, reservas y espacios sin complicaciones. Tus clientes encuentran el momento perfecto y tú mantienes todo bajo control, sin llamadas ni confusión.",
      image: "reservation.png",
    }

  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        <NewHero />
        <SocialProof />
        <WordArt />

        {services.map((service, index) => (
          <Service 
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            overtext={service.overtext}
            price={service.price}
            cta={service.cta}
            description={service.description}
            image={service.image}
          />
        ))}
        <QuickStartSteps />
        <PaperlessSection />
        <Testimonials />
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
