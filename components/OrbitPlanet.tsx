'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, CheckCircle, Cog } from 'lucide-react'
import styles from './AgentIntegration.module.css'

export default function OrbitPlanet({
  src,
  angle,
  radius,
  module,
  issue,
  action,
  success,
  speedClass,
  active,
}: OrbitPlanetProps) {
  const [status, setStatus] = useState<Status>('module')
  const [seqId, setSeqId] = useState(0)

  // Cuando este planeta se marca active, iniciamos un nuevo ciclo incrementando seqId
  useEffect(() => {
    if (active) {
      setSeqId((id) => id + 1)
    }
  }, [active])

  // Ejecuta el ciclo completo independientemente de que active luego cambie a false
  useEffect(() => {
    if (seqId === 0) return

    setStatus('issue')
    const t1 = setTimeout(() => setStatus('action'), 1200)
    const t2 = setTimeout(() => setStatus('success'), 2600)
    const t3 = setTimeout(() => setStatus('module'), 5200)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [seqId])

  return (
    <div
      className={styles.orbitItem}
      style={{ '--angle': `${angle}deg`, '--radius': `${radius}px` } as React.CSSProperties}
    >
      <div className={styles.anchor}>
        <div className={`${styles.contentWrap} ${styles[speedClass]}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={status}
              className={styles.content}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
            >
              {/* <div className={styles.badge}>
                <img src={src} alt="logo" />
              </div> */}
              <div className={styles.prompt}>
                {status === 'module' && <span>{module}</span>}
                {status === 'issue' && (
                  <span className="inline-flex items-center gap-1" style={{ color: 'orange' }}>
                    <AlertTriangle size={12} /> {issue}
                  </span>
                )}
                {status === 'action' && (
                  <span className="inline-flex items-center gap-1" style={{ color: '#6E0EFF' }}>
                    <Cog size={12} className="animate-spin-slow" /> {action}
                  </span>
                )}
                {status === 'success' && (
                  <span className="inline-flex items-center gap-1" style={{ color: 'green' }}>
                    <CheckCircle size={12} /> {success}
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
type OrbitPlanetProps = {
  src: string
  angle: number
  radius: number
  module: string
  issue: string
  action: string
  success: string
  speedClass: 'contentWrapFast' | 'contentWrapSlow' | 'contentWrapOuter'
  active: boolean
}
type Status = 'module' | 'issue' | 'action' | 'success'