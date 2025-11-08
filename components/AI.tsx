

'use client'

import React, { useRef } from 'react';
import Section from './atoms/section';
import SectionTitle from './SectionTitle';
import styles from './AI.module.css'
import { motion, useInView } from 'framer-motion'

export default function AI() {
  const photoRef = useRef(null)
  const isInView = useInView(photoRef, { once: true, amount: 0.3 })

  return (
    <Section>
      <SectionTitle 
        overtext="Inteligencia Artificial"
        title="Toma decisiones inteligentes." 
        subtitle='Pregúntale a Bliqu cualquier cosa sobre tu negocio para obtener información inmediata y tomar decisiones informadas fácilmente.'
      />
      <div className={styles.photo} ref={photoRef}>
        <div className={styles.shotWrap}>
          <motion.div
            className={styles.shot}
            initial={{ y: 200, opacity: 0 }}
            animate={isInView ? { y: 60, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="/photos/shot-ai.png" alt="Aurora" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
