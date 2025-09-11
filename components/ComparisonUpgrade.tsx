import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

/**
 * ComparisonUpgrade
 * A reusable component that lets users pick a competitor and immediately see
 * why your product is better. It auto-generates advantage tiles from metrics
 * (numbers) and features (booleans) and renders punchy, Apple-like cards.
 *
 * Tailwind-only. Drop-in friendly.
 */

// -----------------------------
// Types
// -----------------------------

export type Metric = {
  label: string;
  value: number; // numeric value for the metric
  higherIsBetter?: boolean; // default: true
  unit?: string; // e.g. "hours", "MP", "fps"
  // Optional custom formatter for the value difference
  format?: (n: number) => string;
};

export type Feature = {
  label: string;
  has: boolean;
  description?: string; // small caption
};

export type Product = {
  id: string;
  name: string;
  imageUrl?: string;
  metrics: Record<string, Metric>; // e.g. { battery: {value: 29, unit: 'hours'} }
  features: Record<string, Feature>; // e.g. { camera48mp: {has: true, label: '48MP camera'} }
};

export type ComparisonUpgradeProps = {
  base: Product; // your product (the one you want to promote)
  competitors: Product[]; // options to compare against
  cardsLimit?: number; // how many tiles to render
  // Optional order/priority for metrics & features
  metricPriority?: string[]; // keys in base.metrics order
  featurePriority?: string[]; // keys in base.features order
  className?: string;
};

// -----------------------------
// Helpers
// -----------------------------

const formatPercent = (x: number) => `${Math.round(x)}%`;

const defaultMetricCopy = (
  label: string,
  diffPct: number,
  unit?: string,
  format?: (n: number) => string
) => {
  // Create punchy copy like: "Up to 40% faster" or "Up to 10 more hours"
  if (unit) {
    // Convert percent to additive difference wording when unit exists
    return `Up to ${format ? format(diffPct) : formatPercent(diffPct)} better ${label.toLowerCase()}`;
  }
  return `Up to ${formatPercent(diffPct)} better ${label.toLowerCase()}`;
};

function percentGain(baseValue: number, otherValue: number, higherIsBetter = true) {
  if (baseValue === 0 && otherValue === 0) return 0;
  if (higherIsBetter) {
    return ((baseValue - otherValue) / Math.max(otherValue, 1e-9)) * 100;
  }
  // lower is better => invert values
  return ((otherValue - baseValue) / Math.max(baseValue, 1e-9)) * 100;
}

// Build a friendly sentence like: "Record video in 4K 120fps Dolby Vision"
const featureCopy = (f: Feature) => f.label;

// Decide a nice icon per tile (emoji for simplicity, swap for icons if needed)
const pickIcon = (kind: "metric" | "feature", key: string) => {
  if (kind === "feature") return "🎬"; // default
  const k = key.toLowerCase();
  if (k.includes("cpu") || k.includes("speed") || k.includes("performance")) return "⚡";
  if (k.includes("battery") || k.includes("video") || k.includes("hours")) return "🔋";
  if (k.includes("camera") || k.includes("mp")) return "📷";
  if (k.includes("display") || k.includes("screen")) return "🖥️";
  return "✨";
};

// -----------------------------
// Component
// -----------------------------

export default function ComparisonUpgrade({
  base,
  competitors,
  cardsLimit = 6,
  metricPriority,
  featurePriority,
  className,
}: ComparisonUpgradeProps) {
  const [selectedId, setSelectedId] = useState(competitors[0]?.id);
  const competitor = useMemo(
    () => competitors.find((c) => c.id === selectedId) ?? competitors[0],
    [selectedId, competitors]
  );

  // Compute advantages
  const advantages = useMemo(() => {
    const cards: Array<{
      kind: "metric" | "feature";
      key: string;
      title: string;
      caption?: string;
      magnitude?: number; // for sorting
    }> = [];

    // Metrics: where base beats competitor
    const metricKeys = metricPriority ?? Object.keys(base.metrics);
    for (const key of metricKeys) {
      const mBase = base.metrics[key];
      const mOther = competitor?.metrics[key];
      if (!mBase || !mOther) continue;

      const hib = mBase.higherIsBetter ?? true;
      const gain = percentGain(mBase.value, mOther.value, hib);
      if (gain > 0.5) {
        const label = mBase.label;
        const copy = defaultMetricCopy(label, gain, mBase.unit, mBase.format);
        cards.push({
          kind: "metric",
          key,
          title: copy,
          caption: `${mBase.value}${mBase.unit ? ` ${mBase.unit}` : ""} vs ${mOther.value}${mBase.unit ? ` ${mBase.unit}` : ""}`,
          magnitude: gain,
        });
      }
    }

    // Features: base has it, competitor doesn't
    const featureKeys = featurePriority ?? Object.keys(base.features);
    for (const key of featureKeys) {
      const fBase = base.features[key];
      const fOther = competitor?.features[key];
      if (!fBase) continue;
      if (fBase.has && (!fOther || !fOther.has)) {
        cards.push({
          kind: "feature",
          key,
          title: featureCopy(fBase),
          caption: fBase.description,
          magnitude: 999 - cards.length, // keep features after strong metrics by default
        });
      }
    }

    // Sort by magnitude desc (biggest gains first)
    return cards
      .sort((a, b) => (b.magnitude ?? 0) - (a.magnitude ?? 0))
      .slice(0, cardsLimit);
  }, [base, competitor, cardsLimit, metricPriority, featurePriority]);

  return (
    <div className={"w-full rounded-3xl bg-neutral-900 text-white p-6 md:p-10 " + (className ?? "") }>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">Worth the upgrade?<br className="hidden md:block"/> 100 percent.</h2>
          <p className="mt-3 text-neutral-300">A few ways <span className="font-semibold">{base.name}</span> gives you more.</p>
        </div>
        <div className="shrink-0">
          <label className="block text-sm text-neutral-400 mb-1">Select a product to compare with {base.name}:</label>
          <div className="relative">
            <select
              value={competitor?.id}
              onChange={(e) => setSelectedId(e.target.value)}
              className="appearance-none w-72 bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              {competitors.map((c) => (
                <option value={c.id} key={c.id}>{c.name}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">▾</span>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {advantages.map((card, idx) => (
          <motion.div
            key={card.key + idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.03 }}
            className="rounded-2xl bg-neutral-800/60 border border-white/5 p-6 min-h-[180px] flex flex-col justify-between shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:bg-neutral-800/80 transition"
          >
            <div>
              <div className="text-3xl mb-3">{pickIcon(card.kind, card.key)}</div>
              <h3 className="text-2xl font-semibold leading-snug">{card.title}</h3>
              {card.caption && <p className="mt-2 text-sm text-neutral-300">{card.caption}</p>}
            </div>
            <div className="text-xs text-neutral-400">Compared with {competitor?.name}</div>
          </motion.div>
        ))}

        {advantages.length === 0 && (
          <div className="col-span-full rounded-2xl bg-neutral-800/60 border border-white/5 p-8 text-center text-neutral-300">
            No clear advantages found for this selection. Try a different competitor or update your data model.
          </div>
        )}
      </div>
    </div>
  );
}

// -----------------------------
// Demo (you can delete below in production)
// -----------------------------

export function DemoComparison() {
  const base: Product = {
    id: "iphone17pro",
    name: "iPhone 17 Pro",
    metrics: {
      cpu: { label: "CPU performance", value: 140, higherIsBetter: true }, // synthetic score
      batteryVideo: { label: "video playback", value: 35, higherIsBetter: true, unit: "hours" },
    },
    features: {
      camera48: { label: "48MP rear cameras and Camera Control", has: true },
      centerStage: { label: "18MP Center Stage front camera", has: true },
      dolby: { label: "Record video in 4K 120fps Dolby Vision", has: true },
      forgedAl: { label: "Forged aluminum unibody design", has: true },
    },
  };

  const competitorA: Product = {
    id: "iphone14promax",
    name: "iPhone 14 Pro Max",
    metrics: {
      cpu: { label: "CPU performance", value: 100, higherIsBetter: true },
      batteryVideo: { label: "video playback", value: 25, higherIsBetter: true, unit: "hours" },
    },
    features: {
      camera48: { label: "48MP rear cameras and Camera Control", has: false },
      centerStage: { label: "18MP Center Stage front camera", has: false },
      dolby: { label: "Record video in 4K 120fps Dolby Vision", has: false },
      forgedAl: { label: "Forged aluminum unibody design", has: false },
    },
  };

  const competitorB: Product = {
    id: "iphone15",
    name: "iPhone 15",
    metrics: {
      cpu: { label: "CPU performance", value: 90, higherIsBetter: true },
      batteryVideo: { label: "video playback", value: 22, higherIsBetter: true, unit: "hours" },
    },
    features: {
      camera48: { label: "48MP rear cameras and Camera Control", has: true },
      centerStage: { label: "18MP Center Stage front camera", has: false },
      dolby: { label: "Record video in 4K 120fps Dolby Vision", has: false },
      forgedAl: { label: "Forged aluminum unibody design", has: false },
    },
  };

  return (
    <div className="p-6 bg-neutral-950 min-h-screen">
      <ComparisonUpgrade base={base} competitors={[competitorA, competitorB]} />
    </div>
  );
}
