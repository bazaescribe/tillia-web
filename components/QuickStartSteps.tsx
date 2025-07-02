import Image from "next/image"

export default function QuickStartSteps() {
  const steps = [
    {
      title: "Crea tu cuenta",
      description:
        "Solo necesitas tu correo y el nombre de tu negocio. Sin papeleo, sin llamadas, sin vueltas.",
      image: "/photos/store.jpg",
      imageAlt: "Registro de cuenta en tienda",
    },
    {
      title: "Sube tus productos",
      description:
        "Crea tu catálogo en segundos. Puedes importar desde Excel o escribir directo.",
      image: "/photos/bakery.png",
      imageAlt: "Subida de productos a catálogo",
    },
    {
      title: "Comienza a vender",
      description:
        "Ya sea en mostrador, por redes sociales o eventos, empieza a registrar ventas, ver reportes y tomar decisiones con la tranquilidad de que todo está bajo control.",
      image: "/photos/tianguis.jpg",
      imageAlt: "Vendiendo en mostrador o evento",
    },
  ]

  return (
    <section className="py-40 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-5xl md:text-5xl font-bold mb-4">Comienza a vender en minutos</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Pon tu negocio en marcha en minutos. No necesitas técnicos, cursos ni nuevas
            inversiones. Solo sigue tres pasos y deja que la herramienta trabaje por ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-xl overflow-hidden shadow-sm w-full h-48 relative">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 mt-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}