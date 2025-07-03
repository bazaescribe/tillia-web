'use client'

import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef, ReactNode, createContext, useContext } from "react"
import SectionTitle from "./SectionTitle"

// Create context for sharing isInView state
const AnimationContext = createContext<boolean>(false)

export function useAnimationContext() {
  return useContext(AnimationContext)
}

interface AnimatedShowcaseProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
}

export default function AnimatedShowcase({
  title,
  subtitle,
  ctaText,
  ctaLink,
  children,
  className = "pt-40 bg-gradient-to-b from-white to-[#FAFAFA]",
  containerClassName = "relative mt-32 max-w-4xl mx-auto",
  id,
}: AnimatedShowcaseProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.6 })
  
  return (
    <AnimationContext.Provider value={isInView}>
      <section className={className} ref={sectionRef} id={id}>
        <div className="container mx-auto px-4 overflow-hidden">
          {(title || subtitle) && (
            <SectionTitle
              // overtext="Roadmap"
              title={title ?? ""}
              subtitle={subtitle ?? ""}
              align="center"
            />
            // <div className="max-w-3xl mx-auto text-center mb-32">
            //   {title && (
            //     <h2 className="text-5xl md:text-5xl font-bold mb-4">{title}</h2>
            //   )}
            //   {subtitle && (
            //     <p className="text-xl text-gray-600">{subtitle}</p>
            //   )}
              
            //   {ctaText && (
            //     <div className="mt-8">
            //       <Button asChild>
            //         <a href={ctaLink}>{ctaText}</a>
            //       </Button>
            //     </div>
            //   )}
            // </div>
          )}
          <div className={containerClassName}>
            {children}
          </div>
        </div>
      </section>
    </AnimationContext.Provider>
  )
}

// Helper component for animated elements
interface AnimatedElementProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  initialY?: number
  isInView?: boolean
}

export function AnimatedElement({
  children,
  className,
  delay = 0,
  duration = 0.8,
  initialY = 200,
  isInView: parentIsInView,
}: AnimatedElementProps) {
  const elementRef = useRef(null)
  const elementIsInView = useInView(elementRef, { once: true, amount: 0.1 })
  const contextIsInView = useAnimationContext()
  
  // Use parent's isInView if provided, otherwise use context, otherwise use element's own
  const shouldAnimate = parentIsInView !== undefined ? parentIsInView : contextIsInView || elementIsInView
  
  return (
    <motion.div 
      ref={elementRef}
      className={className}
      initial={{ y: initialY, opacity: 0 }}
      animate={shouldAnimate ? { y: 48, opacity: 1 } : { y: initialY, opacity: 0 }}
      transition={{ 
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
} 