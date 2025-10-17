import { ReactNode, HTMLAttributes } from 'react'
import styles from './Section.module.css'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode,
  variant?: 'light' | 'dark'
}

export default function Section({ children, variant = 'light', ...rest }: SectionProps) {
  return (
    <section className={`${styles.wrapper} ${variant === 'light' ? styles.light : styles.dark}`} {...rest}>
      <div className={styles.bumper}/>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}
