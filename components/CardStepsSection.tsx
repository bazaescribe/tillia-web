'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import SectionTitle from "./SectionTitle"

interface StepItem {
  title: string
  description: string
  image: string
  imageAlt: string
  background: string
}

interface CardStepsSectionProps {
  overtext: string
  title: string
  subtitle: string
  items: StepItem[]
  className?: string
  sectionId?: string
  background?: string
}

export default function CardStepsSection({
  overtext,
  title,
  subtitle,
  items,
  className = "",
  sectionId,
  background,
}: CardStepsSectionProps) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.1,
      },
    },
  }

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 1
    },
    visible: {
      opacity: 1,
      y: 16,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  }

  return (
    <section 
      className={`py-40 bg-gradient-to-b from-white to-[#FAFAFA] ${className}`} 
      id={sectionId}
    >
      <div className="container max-w-8xl mx-auto">
        <SectionTitle
          overtext={overtext}
          title={title}
          subtitle={subtitle}
        />

        <motion.div 
          ref={containerRef}
          className="grid mt-14 grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {items.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col"
              variants={stepVariants}
            >
              <div className="mb-4 overflow-hidden shadow-lg w-full relative flex items-end justify-center"
                style={{
                  aspectRatio: '10/13',
                  borderRadius: '28px',
                  background: `url(${item.background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <motion.div
                  variants={imageVariants}
                  className="relative"
                  style={{
                    width: "80%",
                    height: "95%",
                    marginBottom: "-10%"
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    style={{ 
                      objectFit: "contain",
                      objectPosition: "bottom",
                      filter: 'drop-shadow(0px -2px 32px rgba(0, 0, 0, 0.16))',
                    }}
                    sizes="80%"
                    priority={index === 0}
                  />
                </motion.div>
              </div>
              <p className="text-md text-gray-600 px-4">
                <span className="font bold mr-1 text-black-100 font-bold">{item.title}</span>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}