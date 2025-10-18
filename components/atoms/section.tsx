'use client'
import { ReactNode, HTMLAttributes, useEffect, useRef } from 'react'
import styles from './Section.module.css'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode,
  variant?: 'light' | 'dark'
}

export default function Section({ children, variant = 'light', ...rest }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const updateThemeColor = (color: string) => {
      let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'theme-color')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', color)
    }

    const applyTheme = () => {
      const isDark = variant === 'dark'
      updateThemeColor(isDark ? '#000000' : '#ffffff')
      document.documentElement.classList.toggle('dark', isDark)
    }

    // Initial check (in case the section is already at the top)
    const initialRect = el.getBoundingClientRect()
    if (initialRect.top <= 1 && initialRect.bottom > 1) {
      applyTheme()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rootTop = entry.rootBounds?.top ?? 0
        const atTop = entry.isIntersecting && entry.boundingClientRect.top <= rootTop + 1
        if (atTop) {
          applyTheme()
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '0px', // simpler and more predictable
      }
    )

    observer.observe(el)

    // Scroll fallback (some browsers are finicky with IO around the top edge)
    let rafId = 0
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 1 && rect.bottom > 1) {
          applyTheme()
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [variant])

  return (
    <section ref={ref} className={`${styles.wrapper} ${variant === 'light' ? styles.light : styles.dark}`} {...rest}>
      <div className={styles.bumper}/>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}
