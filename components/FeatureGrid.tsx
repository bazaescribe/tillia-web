import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface Feature {
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

export default function FeatureGrid({ title, subtitle, features }: FeatureGridProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col ">
              <div className="w-full aspect-[16/10] relative rounded-xl overflow-hidden shadow-sm mb-6">
                <Image 
                  src={feature.image} 
                  alt={feature.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
              {feature.link && (
                <Button asChild variant="ghost" size="sm" className="align-self-start">
                  <a href={feature.link} target="_blank" rel="noopener noreferrer">
                    Ver más
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 