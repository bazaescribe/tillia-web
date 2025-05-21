import { CheckCircle, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function QuickStartSteps() {
  return (
    <section className="py-40 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/illustrations/clock.png"
              alt="Quick Start Steps"
              width={200}
              height={115}
            />
          </div>
          <h2 className="text-5xl md:text-5xl font-bold mb-4">Comienza a vender en minutos</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Pon tu negocio en marcha en minutos. No necesitas técnicos, cursos ni nuevas
            inversiones. Solo sigue tres pasos y deja que la herramienta trabaje por ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Crea tu cuenta",
              description: "Solo necesitas tu correo y el nombre de tu negocio. Sin papeleo, sin llamadas, sin vueltas.",
            },
            {
              title: "Sube tus productos",
              description: "Crea tu catálogo en segundos. Puedes importar desde Excel o escribir directo.",
            },
            {
              title: "Comienza a vender",
              description: "Ya sea en mostrador, por redes sociales o eventos, empieza a registrar ventas, ver reportes y tomar decisiones con la tranquilidad de que todo está bajo control.",
            },
          ].map((step, index) => (
            <Card
              key={index}
              className="p-8 border border-gray-100 hover:border-[#6A03CB]/20 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}