import React from 'react';
import Section from './atoms/section';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const Card: React.FC<{
  title: string;
  description: string;
  image: string;
  background: string;
  imageAlt: string;
}> = ({ title, description, image, background, imageAlt }) => {
  return (
    <div
      className=" rounded-lg shadow-[var(--shadow-card)]"
      style={{
        boxShadow: 'var(--shadow-card)',
        aspectRatio: '1 / 1.3',
      }}
    >
      <div
        className="w-full"
        style={{
          aspectRatio: '1 / 1',
        }}
      >
        <img src={image} alt={imageAlt} className="w-full object-cover rounded-t-lg" />
      </div>
      <h3 className="p-8" style={{ paddingTop: 0 }}>
        <span className="text-xl mr-1">{title}</span>
        <span className="text-xl text-black/40">{description}</span>
      </h3>
    </div>
  );
};

const SolutionSection: React.FC = () => {

  const cards = [
    {
      title: "Crea tu base operativa,",
      description: "registra clientes, productos, alumnos, pedidos, lo que sea.",
      image: "/shoots/ui-items.png",
      background: '/photos/service-bg-stock.png',
      imageAlt: "Alt text for image 1"
    },
    {
      title: "Relaciona tu información, ",
      description: "de manera automática, bliqu entiende tu negocio.",
      image: "/shoots/ui-apps.png",
      background: '/photos/service-bg-nails.png',
      imageAlt: "Alt text for image 2"
    },
    {
      title: "Automatiza",
      description: "Obtén formularios, dashboards y flujos listos para usar. Sin programar nada.",
      image: "/shoots/ui-automations.png",
      background: '/photos/service-bg-manufacture.png',
      imageAlt: "Alt text for image 2"
    }
  ]

  // Variants para el contenedor y cada tarjeta (fade + slide-up)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section>
      <SectionTitle
        overtext="Soluciones"
        title="Rápido, flexible y hecho para ti."
        subtitle="Convierte tus datos en herramientas reales para operar tu negocio. Sin integraciones, sin plantillas, sin desarrolladores."
      />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Card {...card} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export default SolutionSection;
