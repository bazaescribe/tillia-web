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
  addOns?: string[];
  cta: string;
  onClick: () => void;
 
}> = ({ title, main, price, featuresTitle, features, addOns, cta, onClick}) => {
  return (
    <div 
      className="rounded-lg p-8 flex flex-col gap-7" 
      style={{ 
        boxShadow: 'var(--shadow-card)',
        // aspectRatio: '1 / 1.2',
        minHeight: '420px',
        height: '100%',
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
        <div className="text-black/40 text-sm">{featuresTitle}</div>
        <div className="list-disc list-inside">
          {features.map((feature) => (
            <p key={feature} className="text-black/60 text-md">{feature}</p>
          ))}
        </div>
      </div>
      {addOns && (
          <div className="list-disc list-inside">
            {addOns.map((addOn) => (
              <p key={addOn} className="text-black/40 text-xs">{addOn}</p>
            ))}
          </div>
        )}
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
      price: '$79 / mes',
      featuresTitle: 'Incluye',
      features: [
        '1 administrador.',
        '10 colecciones.',
        '1,000 registros por colección',
      ],
      cta: 'Comenzar',
      onClick: () => console.log('Comenzar'),
    },
    {
      title: 'Pro',
      main: true,
      price: '$279 / mes',
      featuresTitle: 'Todo en Basic, mas:',
      features: [
        '1 administrador.',
        '100 colecciones.',
        '10,000 registros por colección.',
        'Tablas inteligentes.',
        'Automatizaciones básicas.',
      ],
      addOns: [
        'Administrador adicional: $199 / mes',
      ],
      cta: 'Comenzar',
      onClick: () => console.log('Comenzar'),
    },
    {
      title: 'Advance',
      main: false,
      price: '$639 / mes',
      featuresTitle: 'Todo en Pro, mas:',
      features: [
        '1 administrador.',
        '1 operador.',
        '1,000 colecciones.',
        '100,000 registros por colección.',
        'Integración con servicios externos.',
        'Creación de agentes inteligentes.',
        'Reportes automáticos.',
        'Constructor de Apps automáticas.',
      ],
      addOns: [
        'Administrador adicional: $179 / mes',
        'Operador adicional: $79 / mes',
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

      <div>
        <h4>¿Necesitas una solución a la medida?</h4>
        <p className="text-md text-black/60">
          Contactanos para discutir tu caso de uso y cómo podemos ayudarte.
        </p>
      </div>
    </Section>
  );
};

export default PricingCards;
