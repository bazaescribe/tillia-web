import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import SectionTitle from "./SectionTitle";

// Definición de tipos para las categorías
type BusinessCategory = {
  name: string;
  icon: string;
};

export default function BusinessCategories() {
  // Lista de categorías de negocios
  const categories: BusinessCategory[] = [
    { name: "Abarrotes", icon: "/illustrations/soda.png" },
    { name: "Jugueterías", icon: "/illustrations/toys.png" },
    { name: "Mueblerías", icon: "/illustrations/furniture.png" },
    { name: "Cafeterías", icon: "/illustrations/coffee.png" },
    { name: "Panaderías", icon: "/illustrations/bakery.png" },
    { name: "Mascotas", icon: "/illustrations/pets.png" },
    { name: "Nail saloon", icon: "/illustrations/nails.png" },
    { name: "Ropa y accesorios", icon: "/illustrations/blouse.png" },
    { name: "Papelerías", icon: "/illustrations/notebook.png" },
    { name: "Ferreterías", icon: "/illustrations/hardware.png" },
  ];

  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto">
        <SectionTitle
          overtext="Productos"
          title="Una experiencia distinta para cada negocio"
          subtitle="Pensado para ajustarse, no para encajar a la fuerza. Tillia entiende lo que necesitas, cuando lo necesitas."
        />

        <div className="grid grid-cols-2 mt-16 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-40 h-40 mb-3 relative">
                <Image
                  src={category.icon}
                  alt={category.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="text-gray-600 text-center">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}