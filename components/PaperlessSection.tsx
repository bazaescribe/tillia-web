"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import SectionTitle from "./SectionTitle";

interface PaperlessSectionProps {
  className?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  stats?: {
    label: string;
    value: string;
  }[];
  dark?: boolean; // toggles dark/contrast variant
}

export default function PaperlessSection({
  className,
  eyebrow = "Comprometidos con el medio ambiente",
  title = "Cero papeleo, todo digital",
  subtitle =
    "Olvídate de impresoras, tickets y pilas de papel. Todo es digital: rápido, claro y sustentable.",
  primaryCtaLabel = "Comienza gratis",
  secondaryCtaLabel = "Ver cómo funciona",
  onPrimaryClick,
  onSecondaryClick,
  stats = [
    { label: "Tickets en papel ahorrados", value: "+12,000" },
    { label: "Ahorro en insumos", value: "−35%" },
    { label: "Tiempo de espera", value: "−28%" },
  ],
  dark = false,
}: PaperlessSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.2, once: true, margin: "-80px" });

  const bg = dark
    ? "bg-[#0C0F12] text-white"
    : "bg-white text-[#0C0F12]";

  return (
    <section
      ref={ref}
      className='container'
    >
      {/* subtle gradient blob */}
      <div
        aria-hidden
        className={clsx(
          "pointer-events-none absolute inset-x-0 -top-24 h-72 blur-3xl",
          dark ? "bg-white/5" : "bg-[#B8EBD0]/10"
        )}
      />

      <div className="py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <SectionTitle 
              overtext={eyebrow}
              title={title} 
              subtitle={subtitle} 
            />

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Tickets y facturas digitales",
                "Firma en pantalla y envíos por WhatsApp / email",
                "Sin impresoras, sin rollos, sin dolores de cabeza",
                "Todo queda guardado y auditable",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border px-3 py-2 text-sm border-black/10 dark:border-white/15"
                >
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black/5 dark:bg-white/10">
                    <span className="i-lucide-check h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-black/80 dark:text-white/85">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                onClick={onPrimaryClick}
                className="rounded-2xl px-5 py-5 text-base shadow-sm bg-[#FF0095] hover:opacity-90"
              >
                {primaryCtaLabel}
              </Button>
              <Button
                variant="secondary"
                onClick={onSecondaryClick}
                className={clsx(
                  "rounded-2xl px-5 py-5 text-base backdrop-blur-md",
                  dark
                    ? "bg-white/10 hover:bg-white/15"
                    : "bg-black/5 hover:bg-black/10"
                )}
              >
                {secondaryCtaLabel}
              </Button>
            </div>

            {/* Stats */}
            {stats?.length ? (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border p-4 text-center border-black/10 dark:border-white/15"
                  >
                    <div className="text-2xl font-semibold">{s.value}</div>
                    <div className="text-xs text-black/60 dark:text-white/60">{s.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </motion.div>

          {/* Visual */}
          <div className="relative">
            <PhoneMockup inView={inView} dark={!!dark} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({ inView, dark }: { inView: boolean; dark: boolean }) {
  return (
    <div className="relative mx-auto h-[520px] w-[280px] sm:h-[560px] sm:w-[300px]">
      {/* phone body */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -2 }}
        animate={inView ? { opacity: 1, y: 0, rotate: -2 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(
          "absolute inset-0 rounded-[42px] border p-2 shadow-xl",
          dark
            ? "border-white/15 bg-white/5"
            : "border-black/10 bg-white"
        )}
        style={{ boxShadow: dark ? "0 10px 40px rgba(0,0,0,.35)" : "0 10px 40px rgba(0,0,0,.12)" }}
      >
        <div
          className={clsx(
            "h-full w-full rounded-[32px] p-3",
            dark ? "bg-[#0D1013]" : "bg-[#B8EBD0]"
          )}
        >
          {/* "screen" header */}
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2 w-12 rounded-full bg-black/10 dark:bg-white/15" />
            <div className="h-2 w-6 rounded-full bg-black/10 dark:bg-white/15" />
          </div>

          {/* digital receipt card */}
          <div className="space-y-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-white/5">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">Ticket #A-5271</span>
                <span className="text-black/60 dark:text-white/60">$245.00</span>
              </div>
              <div className="mb-2 h-px bg-black/10 dark:bg-white/10" />
              <div className="space-y-1 text-xs">
                <Row label="Concha vainilla" value="$45.00" />
                <Row label="Pan de elote" value="$68.00" />
                <Row label="Café americano" value="$32.00" />
                <Row label="Galletas surtidas" value="$100.00" />
              </div>
              <div className="mt-3 flex items-center justify-between text-sm font-medium">
                <span>Total</span>
                <span>$245.00</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-3 text-xs shadow-sm dark:bg-white/5">
              <div className="mb-2 flex items-center gap-2">
                <span className="i-lucide-send h-4 w-4" />
                Enviar ticket a: WhatsApp • Email
              </div>
              <div className="flex gap-2">
                <div className="h-8 flex-1 rounded-xl bg-black/5 dark:bg-white/10" />
                <div className="h-8 w-20 rounded-xl bg-black/10 dark:bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* floating eco badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={clsx(
          "absolute -right-8 top-6 select-none rounded-2xl px-3 py-2 text-xs font-medium shadow-lg",
          dark ? "bg-white/10" : "bg-white"
        )}
      >
        <div className="flex items-center gap-2">
          <span className="i-lucide-printer h-4 w-4 opacity-60" />
          Sin impresora
        </div>
      </motion.div>

      {/* floating WhatsApp bubble */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.35, duration: 0.5 }}
        className={clsx(
          "absolute -left-10 bottom-12 select-none rounded-2xl px-3 py-2 text-xs font-medium shadow-lg",
          dark ? "bg-white/10" : "bg-white"
        )}
      >
        <div className="flex items-center gap-2">
          <span className="i-lucide-message-circle h-4 w-4 opacity-60" />
          Ticket enviado ✓
        </div>
      </motion.div>

      {/* floating recycle badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={clsx(
          "absolute -right-6 bottom-4 select-none rounded-2xl px-3 py-2 text-xs font-medium shadow-lg",
          dark ? "bg-white/10" : "bg-white"
        )}
      >
        <div className="flex items-center gap-2">
          <span className="i-lucide-recycle h-4 w-4 opacity-60" />
          Menos papel, menos CO₂
        </div>
      </motion.div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-black/70 dark:text-white/70">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
