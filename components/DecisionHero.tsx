// components/AIAdvisorScene.tsx
'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Section from './atoms/section'

type ScriptMsg = {
  id: string
  role: 'user' | 'assistant'
  text: string
  typingMs?: number        // tiempo de “pensando”
  afterDelayMs?: number    // pausa antes de mostrar el mensaje
}

const SCRIPT: ScriptMsg[] = [
  {
    id: 'u1',
    role: 'user',
    text: '¿Debería abrir una nueva sucursal en la colonia del Valle?',
    afterDelayMs: 300
  },
  {
    id: 'a1',
    role: 'assistant',
    text: 'Recojo tus ventas recientes y comparo márgenes por zona. Dame un segundo.',
    typingMs: 1200,
    afterDelayMs: 400
  },
  {
    id: 'a2',
    role: 'assistant',
    text: 'Con Nápoles y Narvarte al alza, Del Valle pinta bien. Te muestro un resumen.',
    typingMs: 1500,
    afterDelayMs: 500
  },
  {
    id: 'a3',
    role: 'assistant',
    text: 'Aquí van los números y una proyección conservadora de payback.',
    typingMs: 1100,
    afterDelayMs: 450
  },
  {
    id: 'a4',
    role: 'assistant',
    text: 'Y estas son ubicaciones posibles en renta que cuadran con tus márgenes.',
    typingMs: 1200,
    afterDelayMs: 450
  }
]

// utilidades UI

function TypingDots({ light = false }: { light?: boolean }) {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-white/90' : 'bg-zinc-900/80'}`}
          animate={{ opacity: [0.4, 1, 0.4], y: [0, -2, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  )
}

function Bubble({
  role,
  children,
}: {
  role: 'user' | 'assistant'
  children: React.ReactNode
}) {
  const isUser = role === 'user'
  return (
    <motion.div
      initial={{ y: 8, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      className={`max-w-[560px] rounded-2xl px-4 py-3 text-sm shadow/10
      ${isUser ? 'bg-white text-zinc-900 ring-1 ring-black/5' : 'bg-zinc-900 text-white'}`}
    >
      {children}
    </motion.div>
  )
}

function RevealFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  // marco con “scanline” para sentirse data que aparece
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 160, damping: 18 }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ x: '-110%' }}
        animate={{ x: '110%' }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/0 via-white/50 to-white/0 mix-blend-overlay"
      />
      {children}
    </motion.div>
  )
}

export default function AIAdvisorScene() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const chatRef = useRef<HTMLDivElement | null>(null)
  const inView = useInView(rootRef, { once: true, amount: 0.3 })

  const [visible, setVisible] = useState<ScriptMsg[]>([])
  const [typing, setTyping] = useState<string | null>(null)

  // Mostrar solo u1, a2, a3
  const PLAY_SCRIPT = useMemo(
    () => SCRIPT.filter(m => ['u1', 'a2', 'a3'].includes(m.id)),
    []
  )

  useEffect(() => {
    if (!inView) return
    let canceled = false
    const sleep = (ms = 0) => new Promise(r => setTimeout(r, ms))

    const play = async () => {
      for (const msg of PLAY_SCRIPT) {
        if (canceled) break
        if (msg.afterDelayMs) await sleep(msg.afterDelayMs)

        if (msg.role === 'assistant' && msg.typingMs) {
          setTyping(msg.id)
          setVisible(prev => [...prev, { ...msg, text: '' }]) // bubble con typing
          await sleep(msg.typingMs)
          if (canceled) break
          setVisible(prev => prev.map(m => (m.id === msg.id ? { ...msg } : m)))
          setTyping(null)
        } else {
          setVisible(prev => [...prev, msg])
        }

        await sleep(70)
        chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' })
      }
    }

    play()
    return () => {
      canceled = true
    }
  }, [inView, PLAY_SCRIPT])

  // Hitos que disparan cada bloque
  const showChart = visible.some(v => v.id === 'a2')
  const showNumbers = visible.some(v => v.id === 'a3')
  const showMap = visible.some(v => v.id === 'a4')

  const title = useMemo(() => 'Toma decisiones inteligentes', [])
  const subtitle = useMemo(
    () =>
      'Hazle una pregunta a tu negocio y recibe consejo y datos accionables. Todo en un solo lugar.',
    []
  )

  // Adjuntos inline de la AI dentro del chat
  function InsightCard() {
    return (
      <div className="rounded-2xl bg-zinc-900 p-5 text-sm text-white shadow-lg ring-1 ring-black/10">
        <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
          <div className="h-3.5 w-3.5 rounded-full bg-white/70" />
        </div>
        <p>
          Según tu último trimestre, Nápoles y Narvarte muestran crecimiento sostenido.
          La colonia del Valle es una extensión natural por densidad y ticket promedio.
          Recomiendo explorar apertura con inventario inicial reducido y horario extendido
          en fines de semana para validar demanda sin quemar capital.
        </p>
      </div>
    )
  }

  // Nuevo: tarjeta de gráfico simple (sin dependencias adicionales)
  function ChartCard() {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
        <div className="flex items-center justify-between text-sm text-zinc-500">
          <span className="font-medium text-zinc-700">Tendencia de ventas</span>
          <span>Últimos 3 meses ▾</span>
        </div>
        {/* Área de gráfico (placeholder visual) */}
        <div className="mt-3 h-36 w-full rounded-xl bg-gradient-to-tr from-zinc-100 to-zinc-50 ring-1 ring-black/5" />
        <div className="mt-2 flex gap-4 text-xs text-zinc-500">
          <div className="inline-flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-600" />
            Ventas
          </div>
          <div className="inline-flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-zinc-400" />
            Media móvil
          </div>
        </div>
      </div>
    )
  }

  function NumbersCard() {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
        <div className="flex items-center justify-between text-sm text-zinc-500">
          <span className="font-medium text-zinc-700">Ventas</span>
          <span>Junio — Agosto 2025 ▾</span>
        </div>
        <div className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
          $732,430.43
        </div>
        <div className="mt-1 text-xs text-zinc-500">$81,382 promedio diario</div>
        <div className="mt-5 h-36 w-full rounded-xl bg-gradient-to-tr from-zinc-100 to-zinc-50 ring-1 ring-black/5" />
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-zinc-50 p-3 ring-1 ring-black/5">
            <div className="text-xs text-zinc-500">Margen estimado</div>
            <div className="text-sm font-medium text-zinc-900">32.4%</div>
          </div>
          <div className="rounded-lg bg-zinc-50 p-3 ring-1 ring-black/5">
            <div className="text-xs text-zinc-500">Payback conservador</div>
            <div className="text-sm font-medium text-zinc-900">7.5 meses</div>
          </div>
          <div className="rounded-lg bg-zinc-50 p-3 ring-1 ring-black/5">
            <div className="text-xs text-zinc-500">Capex sugerido</div>
            <div className="text-sm font-medium text-zinc-900">$380,000</div>
          </div>
        </div>
      </div>
    )
  }

  function MapCard() {
    return (
      <div className="grid gap-6 lg:grid-cols-3">
        <div
          className="lg:col-span-2 h-[260px] w-full rounded-2xl ring-1 ring-black/5
           bg-[linear-gradient(45deg,#f4f4f5_25%,transparent_25%),linear-gradient(-45deg,#f4f4f5_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f4f4f5_75%),linear-gradient(-45deg,transparent_75%,#f4f4f5_75%)]
           bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0]"
        />
        <div className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5">
          <div className="text-sm font-medium text-zinc-700">Opciones en renta</div>
          <ul className="mt-3 space-y-3 text-sm">
            {[
              'Av. Eugenia 428 • 120 m² • renta estimada $48k',
              'Pilares 215 • 95 m² • renta estimada $39k',
              'Amores 1330 • 110 m² • renta estimada $44k',
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-violet-600" />
                <span className="text-zinc-700">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xs text-zinc-500">
            Candidatos priorizados por afluencia peatonal y ticket promedio cercano a tu mix de productos.
          </div>
        </div>
      </div>
    )
  }

  const AVATAR = {
    assistant: '/avatar/a.png',
    user: '/avatar/b.png',
  }

  function ChatRow({
    msg,
    isTyping,
  }: {
    msg: ScriptMsg
    isTyping: boolean
  }) {
    const isUser = msg.role === 'user'
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} gap-3`}>
        {!isUser && (
          <img
            src={AVATAR.assistant}
            alt="Bliqu AI"
            className="h-8 w-8 rounded-full ring-1 ring-black/5"
          />
        )}

        <div className="max-w-[560px]">
          <div className={`mb-1 text-xs ${isUser ? 'text-right text-zinc-500' : 'text-zinc-500'}`}>
            {isUser ? 'Tú' : 'Bliqu AI'} • ahora
          </div>

          <Bubble role={msg.role}>
            {msg.role === 'assistant' && isTyping ? (
              <div className="flex items-center gap-3">
                <TypingDots light />
                <span className="sr-only">Escribiendo</span>
              </div>
            ) : (
              msg.text
            )}
          </Bubble>

          {/* Adjuntos inline del asistente */}
          {!isTyping && msg.role === 'assistant' && (
            <>
              {msg.id === 'a2' && showChart && (
                <RevealFrame className="mt-2">
                  <ChartCard />
                </RevealFrame>
              )}
              {msg.id === 'a3' && showNumbers && (
                <RevealFrame className="mt-2">
                  <NumbersCard />
                </RevealFrame>
              )}
              {msg.id === 'a4' && showMap && (
                <RevealFrame className="mt-2">
                  <MapCard />
                </RevealFrame>
              )}
            </>
          )}
        </div>

        {isUser && (
          <img
            src={AVATAR.user}
            alt="Tú"
            className="h-8 w-8 rounded-full ring-1 ring-black/5"
          />
        )}
      </div>
    )
  }

  return (
    <Section>
      <section ref={rootRef} className="relative isolate w-full">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold tracking-wide text-violet-600">Bliqu AI</span>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-600">{subtitle}</p>
            <p className="mt-2 text-xs text-zinc-400">Próximamente</p>
          </div>

          {/* Conversación: dentro de un iPhone */}
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="relative w-full flex justify-center">
              {/* Imagen de iPhone como marco */}
              <div className="relative">
                <img
                  src="/assets/iphone-17-pro.png"
                  alt="iPhone frame"
                  className="pointer-events-none select-none w-[340px] sm:w-[400px]"
                  draggable={false}
                />
                {/* Pantalla del iPhone: posicionada dentro del frame */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Ajusta estos porcentajes según la imagen para centrar la pantalla */}
                  <div className="relative w-[89%] h-[78%]">
                    {/* Glow arcoiris dentro de la pantalla */}
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-[28px] blur-2xl opacity-60 pointer-events-none"
                      style={{
                        backgroundImage:
                          'linear-gradient(90deg, #ff0080, #ff8c00, #ffee00, #00ff00, #00d9ff, #7a00ff, #ff0080)',
                        backgroundSize: '300% 300%',
                        willChange: 'background-position',
                      }}
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />
                  
                  {/* Contenedor del chat dentro de la “pantalla” */}
                  <div
                    ref={chatRef}
                    className="space-y-4 rounded-[28px] overflow-hidden bg-white/95 backdrop-blur-sm p-5 shadow-sm ring-1 ring-black/5"
                  >
                    <AnimatePresence initial={false}>
                      {visible.map(m => (
                        <ChatRow key={m.id} msg={m} isTyping={typing === m.id} />
                      ))}
                    </AnimatePresence>
                  </div>
                  
                  {/* Notch sutil (opcional) */}
                  <div className="pointer-events-none absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 -translate-y-1 rounded-b-2xl bg-black/70" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* fondo suave */}
        
      </section>
    </Section>  
  )
}
