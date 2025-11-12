import React from 'react';
import Section from './atoms/section';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const Card: React.FC<{
  title: string;
  main: boolean;
  price: string;
  featuresTitle: string;
  features: string[];
  cta: string;
  onClick: () => void;
 
}> = ({ title, main, price, featuresTitle, features, cta, onClick}) => {
  return (
    <div 
      className="rounded-md p-8 flex flex-col gap-4" 
      style={{ 
        boxShadow: 'var(--shadow-card)',
        aspectRatio: '1 / 1.2',
      }}
    >
      <div>
        <div className='flex gap-3 mb-1'>
          <h2 className="text-3xl">{title}</h2>
          {main && <h3 className="text-3xl text-[#6E0EFF]">Recomendado</h3>}
        </div>
        <h3 className="text-3xl text-zinc-400/70">{price}</h3>
      </div>
      <div className='flex flex-col gap-2 flex-1'>
        <div className="text-black/40 text-sm mt-4">{featuresTitle}</div>
        <div className="list-disc list-inside">
          {features.map((feature) => (
            <p key={feature} className="text-black/60 text-md">{feature}</p>
          ))}
        </div>
      </div>
      <div className='flex'>
        <button 
          className={`p-2 px-4 rounded-full transition-colors duration-300 ${main ? 'bg-black hover:bg-black/60 text-white' : 'bg-black/10 hover:bg-black/20'}`}
          onClick={onClick}
        >
          {cta}
        </button>
      </div>
    </div>
  );
};

const PricingCards: React.FC = () => {

  const plans = [
    {
      title: 'Basic',
      main: false,
      price: '$99 / mes',
      featuresTitle: 'Incluye',
      features: ['Hasta 3 tablas', '200 registros por tablas', 'AI limitada'],
      cta: 'Comenzar',
      onClick: () => console.log('Comenzar'),
    },
    {
      title: 'Pro',
      main: true,
      price: '$299 / mes',
      featuresTitle: 'Todo en Basic, mas:',
      features: [
        'Tablas ilimitadas.',
        'Registros ilimitados.',
        'Integración de AI extendida.',
        'Tablas inteligentes.',
        'Automatizaciones básicas.',
      ],
      cta: 'Comenzar',
      onClick: () => console.log('Comenzar'),
    },
    {
      title: 'Advance',
      main: false,
      price: '$449 / mes',
      featuresTitle: 'Todo en Pro, mas:',
      features: [
        'Invita a tu equipo.',
        'Integración con servicios externos.',
        'Creación de agentes inteligentes.',
        'Reportes automáticos.',
        'Apps internas de tu negocio.',
        '4x de uso de AI.',
      ],
      cta: 'Comenzar',
      onClick: () => console.log('Comenzar'),
    },
  ]


  // Stagger the cards and slide them in from below with fade
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
    <Section >
      <SectionTitle 
        overtext="Precios"
        title="Planes para todo tipo de negocios." 
        subtitle='Elige el plan de uso que mejor se adapte a tu negocio, cada uno pensado para las diferentes etapas de crecimiento que experimentes.'
      />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.title}
            variants={itemVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Card
              {...plan}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default PricingCards;
