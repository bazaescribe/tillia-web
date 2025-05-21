import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link href='/'>
                <Image 
                  src="/logo.svg?height=24"
                  alt="Tillia logo"
                  width={58}
                  height={22}
                />
              </Link>
            </div>
            <p className="text-gray-400 mb-4">Soluciones de retail potenciadas por Inteligencia Artificial para negocios en crecimiento</p>
            <div className="flex gap-4">
              {[
                { name: "Twitter", url: "https://x.com/mithrandir_ai", icon: <Twitter className="w-5 h-5" /> },
                { name: "Facebook", url: "https://www.facebook.com/people/Mithrandir-AI", icon: <Facebook className="w-5 h-5" /> },
                { name: "LinkedIn", url: "https://www.linkedin.com/company/mithrir", icon: <Linkedin className="w-5 h-5" /> }
              ].map((social, index) => (
                <Link 
                  key={index} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {[
            {
              title: "Producto",
              links: ["Características", "Precios", "Integraciones", "Actualizaciones", "Plan de desarrollo"],
            },
            {
              title: "Recursos",
              links: ["Centro de ayuda", "Guías", "Documentación API", "Comunidad", "Socios"],
            },
            {
              title: "Empresa",
              links: ["Sobre nosotros", "Carreras", "Blog", "Prensa", "Contacto"],
            },
          ].map((column, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Startup Programs Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 mb-8">
          <div className="text-center mb-4">
            <p className="text-gray-400 text-sm">Parte de los programas</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center rounded-lg p-4">
              <Image 
                src="/logos/google-for-startups.png" 
                alt="Google for Startups" 
                width={120} 
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center">
              <Image 
                src="/logos/microsoft-for-startups.png" 
                alt="Microsoft for Startups" 
                width={120} 
                height={40}
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Tillia. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Términos de Servicio
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}