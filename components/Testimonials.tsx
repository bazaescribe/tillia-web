'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const TESTIMONIALS = [
  {
    name: "Sofía Ramírez",
    business: "Panadería La Espiga, Guadalajara",
    quote:
      "Tillia nos ayudó a entender qué productos se venden más por horario y ajustar nuestros precios. Ahora vendemos más pan antes del mediodía que nunca.",
    stars: 5,
    photo: "/photos/bakery-owner-smiling.jpg",
    logo: "/logos/google-for-startups.png",
  },
  {
    name: "Iván Torres",
    business: "Verde Vivo, CDMX",
    quote:
      "Con Tillia puedo ver qué plantas tienen más rotación y cuáles no se están vendiendo. Me ayudó a decidir qué dejar de pedir y qué promocionar.",
    stars: 5,
    photo: "/photos/plant-shop-owner-standing.jpg",
    logo: "/logos/microsoft-for-startups.png",
  },
  {
    name: "Renata Cordero",
    business: "Boutique Aurora, Mérida",
    quote:
      "No soy experta en tecnología, pero Tillia es facilísima de usar. Mis ventas subieron desde que empecé a seguir sus sugerencias de precio y stock.",
    stars: 4,
    photo: "/photos/fashion-store-owner-holding-clothes.jpg",
    logo: "/logo.svg",
  },
]

export default function Testimonials() {
  const [selected, setSelected] = useState(0)

  // Auto-loop every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSelected((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex justify-center gap-6 mb-8">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.name}
                className={cn(
                  "transition-all border-2 rounded-full p-1 bg-white hover:scale-110",
                  selected === idx
                    ? "border-[#6A03CB] shadow-lg"
                    : "border-transparent opacity-60"
                )}
                onClick={() => setSelected(idx)}
                aria-label={`Show testimonial from ${t.name}`}
              >
                <Image
                  src={t.logo}
                  alt={t.business + " logo"}
                  width={56}
                  height={56}
                  className="rounded-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {TESTIMONIALS.map((t, idx) => (
              <CarouselItem key={t.name} className={cn("duration-500 transition-all", selected === idx ? "opacity-100" : "opacity-0 pointer-events-none absolute top-0 left-0 w-full")}> 
                <div className="relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden flex items-end shadow-xl">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    className="object-cover object-center w-full h-full"
                    style={{ filter: "brightness(0.6) blur(0px)" }}
                    priority={selected === idx}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="flex gap-1 mb-2">
                      {Array(t.stars)
                        .fill(0)
                        .map((_, i) => (
                          <svg key={i} className="h-6 w-6 text-[#FFD700] fill-[#FFD700]" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        ))}
                    </div>
                    <p className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">{t.quote}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden">
                        <Image src={t.photo} alt={t.name} width={56} height={56} className="object-cover w-full h-full" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{t.name}</p>
                        <p className="text-md text-white/80">{t.business}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
} 