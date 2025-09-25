import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#202020] text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link href='/'>
                <Image 
                  src="/logo-white.png?height=24"
                  alt="Woravi logo"
                  width={112}
                  height={24}
                />
              </Link>
            </div>
            <p className="text-white mb-4">Todo lo que tu negocio necesita para vender mejor, tomar decisiones con datos y crecer.</p>
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
                  className="text-white/50 hover:text-white"
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
              <p className="mb-4 opacity-50 text-white">{column.title}</p>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <Link href="#" className="text-white hover:text-white/70">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center mt-12">
          <p className="text-white text-sm">© 2025 RB Technologies. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-white/50 hover:text-white text-sm">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm">
              Términos de Servicio
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}