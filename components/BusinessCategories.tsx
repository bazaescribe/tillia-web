import Image from "next/image";
import { Badge } from "@/components/ui/badge";

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
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-[#f3f3f3] text-[#484848] hover:bg-[#f3f3f3]/80">
            Para todo tipo de negocios
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Diseñado para emprendedores como tú
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desde tiendas físicas hasta emprendedores online, Tillia se adapta a cualquier
            negocio que quiera vender mejor.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
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