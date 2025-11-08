'use client'

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import styles from "./CustomerTestimonial.module.css"
import Section from "./atoms/section"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Testimonial = {
  name: string
  business: string
  quote: string
  stars: number
  photo: string
  logo: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Iván Ramírez",
    business: "Panadería La Espiga, Guadalajara",
    quote:
      "bliqu nos ayudó a entender qué productos se venden más por horario y ajustar nuestros precios. Ahora vendemos más pan antes del mediodía que nunca.",
    stars: 5,
    photo: "/photos/bakery.png",
    logo: "/logos/espiga.png",
  },
  {
    name: "Sofía Torres",
    business: "Verde Vivo, CDMX",
    quote:
      "Con bliqu puedo ver qué plantas tienen más rotación y cuáles no se están vendiendo. Me ayudó a decidir qué dejar de pedir y qué promocionar.",
    stars: 5,
    photo: "/photos/garden.png",
    logo: "/logos/verde.png",
  },
  {
    name: "Renata Cordero",
    business: "Boutique Aurora, Mérida",
    quote:
      "No soy experta en tecnología, pero bliqu es facilísima de usar. Mis ventas subieron desde que empecé a seguir sus sugerencias de precio y stock.",
    stars: 4,
    photo: "/photos/clothing.png",
    logo: "/logos/aurora.png",
  },
  {
    name: "Susana Salazar",
    business: "Monkis Chop, Monterrey",
    quote:
      "Con bliqu ya no tengo que estar anotando en la libreta qué se vende y qué no. Ahora todo se actualiza solo y me dice qué modelos pedir. Parece que tengo un gerente en mi celular.",
    stars: 5,
    photo: "/photos/bicycle.jpg",
    logo: "/logos/monkis.png",
  },
  {
    name: "Carlos Méndez",
    business: "Café El Roble, CDMX",
    quote:
      "Antes tenía que cerrar cada día revisando ticket por ticket. Ahora bliqu me dice en segundos qué productos vendí más, cuánta leche se fue y hasta me sugiere cuándo hacer pedidos. Me siento libre de la caja registradora.",
    stars: 5,
    photo: "/photos/coffee.jpg",
    logo: "/logos/el-roble.png",
  },
  {
    name: "Dra. Mariana López",
    business: "Clínica Dental López, Guadalajara",
    quote:
      "bliqu me quitó de encima todo el estrés de la agenda, cobros y stock de materiales. Tengo más tiempo para mis pacientes y menos para perseguir papeles. Es como tener una asistente que nunca se cansa.",
    stars: 5,
    photo: "/photos/dentist.jpg",
    logo: "/logos/dental.png",
  },
]

export default function CustomerTestimonial() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * TESTIMONIALS.length))
    setIsLoaded(true)
  }, [])

  const testimonial = TESTIMONIALS[currentIndex]

  const next = () => setCurrentIndex((i) => (i + 1) % TESTIMONIALS.length)
  const prev = () => setCurrentIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const testimonialVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.6,
      },
    },
  }

  if (!testimonial) return null

  return (
    <Section>
      <motion.div
        variants={testimonialVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className={styles.header}>
          <div className={styles.testimonial}>
            <blockquote className={styles.quote}>{testimonial.quote}</blockquote>
            <div className="font-semibold text-md">{testimonial.name}</div>
            <div className="text-xs opacity-90">{testimonial.business}</div>        
          </div>
          <div className="mt-4 flex gap-2">
            <button onClick={prev} className="px-3 py-3 rounded-full hover:bg-zinc-100">
              <ChevronLeft size={16}/>
            </button>
            <button onClick={next} className="px-3 py-1 rounded-full hover:bg-zinc-100">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        

        <div className={styles.photo}>
          <img src={testimonial.photo} alt="" />
        </div>
      </motion.div>
    </Section>
  )
}