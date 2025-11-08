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
      className=" rounded-md shadow-[var(--shadow-card)]" 
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
      title: "Crea",
      description: "la base de tu negocio, sin hojas de cálculo ni plantillas complicadas.",
      image: "/shoots/ui-items.png",
      background: '/photos/service-bg-stock.png',
      imageAlt: "Alt text for image 1"
    },
    {
      title: "Organiza",
      description: " tu operación en un solo lugar, con permisos claros y apps compartidas.",
      image: "/shoots/ui-apps.png",
      background: '/photos/service-bg-nails.png',
      imageAlt: "Alt text for image 2"
    },
    {
      title: "Automatiza",
      description: "lo que nadie quiere hacer, sin escribir una línea de código.",
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
        title="Un sistema moderno que se adapta a tu forma de trabajar."
        subtitle="Bliqu entiende tu operación, conecta tus tablas automáticamente y las transforma en apps funcionales sin que tengas que programar nada."
        overtext="Soluciones"
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
