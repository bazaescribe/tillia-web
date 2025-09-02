import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import DynamicFeatureLayout from "@/components/DynamicFeatureLayout"
import DeviceShowcase from "@/components/DeviceShowcase"
import AnimatedShowcase, { AnimatedElement } from "@/components/AnimatedShowcase"
import QuickStartSteps from "@/components/QuickStartSteps"
import BusinessCategories from "@/components/BusinessCategories"
import Pricing from "@/components/Pricing"
import WoraviVision from "@/components/WoraviVision"
import WoraviFeatures from "@/components/WoraviFeatures"
import Footer from "@/components/Footer"
import SocialProof from "@/components/SocialProof"
import Testimonials from "@/components/Testimonials"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import NewHero from "@/components/NewHero"
import WordArt from "@/components/WordArt"
import Service from "@/components/Service"

export default function Home() {

  const services = [
    {
      title: "Control sin esfuerzo",
      subtitle: "ni dolores de cabeza",
      overtext: "Control de inventario",
      price: "Desde $0.00",
      cta: "Comprar 1",
      description: "Gestiona existencias con precisión absoluta. Tu negocio siempre sabe qué entra, qué sale y qué falta, sin hojas de cálculo ni dolores de cabeza.",
      image: "product-report.png",
    },
    {
      title: "Servicio 1",
      subtitle: "Subtítulo 1",
      overtext: "Servicio 1",
      price: "Precio 1",
      cta: "Comprar 1",
      description: "Descripción del servicio 1",
      image: "pos.png",
    },
    {
      title: "Servicio 1",
      subtitle: "Subtítulo 1",
      overtext: "Servicio 1",
      price: "Precio 1",
      cta: "Comprar 1",
      description: "Descripción del servicio 1",
      image: "pos.png",
    },
  ]
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        <NewHero />
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

        <SocialProof />
        
        {/* <DynamicFeatureLayout
          title="La forma más fácil de administrar tus ventas."
          subtitle="Tu negocio crece y woravi te ayuda a llevar control de lo que vendes, lo que tienes en stock y lo que necesitas ajustar."
          imageUrl="/photos/bicycle.jpg" // Asegúrate de tener una imagen grande aquí
        /> */}

        {/* Example of AnimatedShowcase with device images */}
        <AnimatedShowcase
          title="Administra tus productos"
          subtitle="Todo tu inventario en orden, sin hojas de Excel ni dolores de cabeza. Crea, edita, y organiza tus productos en segundos. Control total, sin complicaciones.."
          // ctaText="Crear cuenta"
          // ctaLink="#"
          id="features"
        >
          <div className="relative h-[200px] md:h-[500px]">
            {/* Tablet device */}
            <AnimatedElement
              className="absolute left-0 bottom-0 w-[85%] z-10"
              duration={0.8}
            >
              <Image
                src="/shoots/products.png"
                alt="woravi en tablet"
                width={800}
                height={575}
                className="object-contain"
                style={{
                  WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                  filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                }}
              />
            </AnimatedElement>
            
            {/* Mobile device */}
            <AnimatedElement
              className="absolute right-0 bottom-0 w-[25%] z-20"
              duration={1.2}
              delay={0.4}
            >
              <Image
                src="/assets/iphone.png"
                alt="woravi en celular"
                width={300}
                height={600}
                className="object-contain"
                style={{
                  WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                  filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                }}
              />
            </AnimatedElement>
          </div>
        </AnimatedShowcase>

        <AnimatedShowcase
          title="Vende sin fricción"
          subtitle="Tu punto de venta, pero sin las partes molestas. Registra ventas al instante, sin errores, sin equipo extra. Solo abre woravi y empieza a vender."
          // ctaText="Crear cuenta"
          // ctaLink="#"
        >
          <div className="relative h-[200px] md:h-[500px]">
            {/* Tablet device */}
            <AnimatedElement
              className="absolute left-0 bottom-0 w-[85%] z-10"
              duration={0.8}
            >
              <Image
                src="/shoots/pos.png"
                alt="woravi en tablet"
                width={800}
                height={575}
                className="object-contain"
                style={{
                  WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                  filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                }}
              />
            </AnimatedElement>
            
            {/* Mobile device */}
            <AnimatedElement
              className="absolute right-0 bottom-0 w-[25%] z-20"
              duration={1.2}
              delay={0.4}
            >
              <Image
                src="/assets/iphone.png"
                alt="woravi en celular"
                width={300}
                height={600}
                className="object-contain"
                style={{
                  WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                  filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                }}
              />
            </AnimatedElement>
          </div>
        </AnimatedShowcase>

        <AnimatedShowcase
          title="Toma mejores decisiones"
          subtitle="No más tratar de adivinar qué está funcionando. woravi analiza tus ventas y productos para mostrarte qué hacer y cuándo. Decisiones fáciles, claras y accionables."
          // ctaText="Crear cuenta"
          // ctaLink="#"
        >
          <div className="relative h-[200px] md:h-[500px]">
            {/* Tablet device */}
            <AnimatedElement
              className="absolute left-0 bottom-0 w-[85%] z-10"
              duration={0.8}
            >
              <Image
                src="/shoots/home.png"
                alt="woravi en tablet"
                width={800}
                height={575}
                className="object-contain"
                style={{
                  WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                  filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                }}
              />
            </AnimatedElement>
            
            {/* Mobile device */}
            <AnimatedElement
              className="absolute right-0 bottom-0 w-[25%] z-20"
              duration={1.2}
              delay={0.4}
            >
              <Image
                src="/assets/iphone.png"
                alt="woravi en celular"
                width={300}
                height={600}
                className="object-contain"
                style={{
                  WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                  filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                }}
              />
            </AnimatedElement>
          </div>
        </AnimatedShowcase>

        {/* <AnimatedShowcase
          title="Tu tienda en línea en un clic"
          subtitle="Crea tu tienda online gratis y empieza a vender en minutos. Sin configuraciones complicadas, sin comisiones ocultas. Comparte tu catálogo y recibe pedidos desde cualquier lugar."
          ctaText="Crea tu tienda gratis"
          ctaLink="#"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <AnimatedElement
              className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[80%] z-10"
              duration={0.8}
            >
              <Image
                src="/assets/laptop-shop.png"
                alt="Tienda en línea woravi"
                width={900}
                height={600}
                className="object-contain"
                style={{
                  WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                  filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                }}
              />
            </AnimatedElement>
            <AnimatedElement
              className="absolute right-0 bottom-0 w-[28%] z-20"
              duration={1.1}
              delay={0.4}
            >
              <Image
                src="/assets/iphone-shop.png"
                alt="Tienda en línea woravi en celular"
                width={300}
                height={600}
                className="object-contain"
                style={{
                  WebkitFilter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                  filter: "drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.12))",
                }}
              />
            </AnimatedElement>
          </div>
        </AnimatedShowcase> */}

        <WoraviVision />

        {/* <FeatureGrid
          title="Simplifica tu día a día con woravi"
          subtitle="Olvídate de complicaciones. woravi automatiza y optimiza tus ventas, inventario y promociones, para que puedas enfocarte en crecer tu negocio."
          features={[
            {
              title: "Ultra simple de usar",
              description: "woravi fue diseñado para entenderse al primer clic. No necesitas capacitación, cursos ni tutoriales. Entras, lo usas y punto.",
              image: "/photos/tianguis.jpg",
              link: "#"
            },
            {
              title: "Funciona en cualquier dispositivo",
              description: "Desde tu celular, tableta o computadora. No importa dónde estés, tu operación siempre está a la mano.",
              image: "/photos/tianguis.jpg"
            },
            {
              title: "Usuarios ilimitados sin caos",
              description: "Agrega a tu equipo fácilmente. Cada quien tiene su cuenta, y tú puedes ver quién hizo qué sin complicaciones.",
              image: "/photos/tianguis.jpg"
            },
            {
              title: "Promociones que no se te salen de control",
              description: "Crea descuentos, combos o precios especiales de forma clara. Sin afectar tus ganancias ni perder el rastro de lo vendido.",
              image: "/photos/tianguis.jpg"
            },
            {
              title: "Historial completo de cada cambio",
              description: "Todo queda registrado: productos modificados, ventas realizadas, precios ajustados. Transparencia total, sin esfuerzo.",
              image: "/photos/tianguis.jpg"
            },
            {
              title: "Preparado para lo que sigue",
              description: "Hoy gestionas ventas e inventario. Pronto podrás controlar compras, gastos y mucho más desde el mismo lugar.",
              image: "/photos/tianguis.jpg"
            }
          ]}
        /> */}

        <QuickStartSteps />
        
        <Testimonials />

        <Pricing />

        <BusinessCategories />

        {/* Spanish Features Section - Added below Pricing */}
        <WoraviFeatures />

        {/* Closing CTA Section */}
        <section className="py-64 bg-gradient-to-b from-white to-[#FAFAFA]">
          <div className="container">
            <div
              className="text-center rounded-3xl min flex flex-col justify-center items-center relative overflow-hidden"
              style={{
                backgroundColor: "#000",
                backgroundImage: "url('/photos/barber.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              {/* Responsive aspect ratio: 4/5 on mobile, 2/3 on md+ */}
              <style>
                {`
                  .closing-cta-aspect {
                    aspect-ratio: 16/9;
                  }
                  @media (max-width: 768px) {
                    .closing-cta-aspect {
                      aspect-ratio: 2/3;
                    }
                  }
                `}
              </style>
              <div className="closing-cta-aspect w-full h-auto"></div>
              <div className="absolute inset-0 bg-black/20 z-0" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                <h2 className="text-5xl md:text-5xl font-bold mb-2 text-white">
                  Toma el control total de tu negocio
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Únete a cientos de emprendedores que ya usan woravi para vender más, preocuparse menos y crecer mejor.
                </p>
                <Button size="lg" className="bg-white text-black hover:bg-gray-100"> 
                  <a href="https://1a2toy77zgg.typeform.com/to/K5rhk9Mb" target="_blank">
                    Comienza gratis
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
