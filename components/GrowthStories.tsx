'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Section from './atoms/section'
import SectionTitle from './SectionTitle'

const stories = [
  {
    id: 1,
    logo: '/logos/P54-white.png',
    metric: '-12 horas',
    description: 'De administración y cuentas por pagar.',
    image: '/photos/home.jpg',
    logoType: 'image'
  },
  {
    id: 2,
    logo: '/logos/magnolia-white.png',
    metric: '+22%',
    description: 'Aumento en ticket promedio de venta.',
    image: '/photos/chocolate.jpg',
    logoType: 'image'
  },
  {
    id: 3,
    logo: '/logos/maxehual-white.png',
    metric: '-35%',
    description: 'Menos merma por caducidad y errores de surtido.',
    image: '/photos/candy.jpg',
    logoType: 'image'
  }
]

export default function GrowthStories() {
  return (
    <Section>
      <div className="flex flex-col gap-12 py-24">
        <SectionTitle
          title="Historias de crecimiento real."
          subtitle="Bliqu no solo es software; es el motor que ayuda a los negocios a escalar su operación sin complicaciones técnicas."
          overtext="Casos de éxito"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: story.id * 0.1 }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden group cursor-pointer shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={story.image}
                alt={story.description}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Logo Area */}
                <div className="h-8 flex items-start">
                  {story.logoType === 'image' ? (
                    <img
                      src={story.logo}
                      alt="Logo"
                      className="h-8 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-white text-4xl font-serif italic lowercase tracking-tight">
                      {story.logo}
                    </span>
                  )}
                </div>

                {/* Metric Area */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-6xl font-bold tracking-tighter">
                    {story.metric}
                  </h3>
                  <p className="text-white/90 text-sm max-w-[220px] leading-snug font-medium">
                    {story.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
