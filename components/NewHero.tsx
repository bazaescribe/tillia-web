import React from "react";
import styles from "./NewHero.module.css"
import { Button } from "./ui/button";

export default function NewHero() {

  const imageCollection = [
    "/photos/bakery.png",
    "/photos/clothing.png",
    "/photos/garden.png",
    "/photos/bicycle.jpg",
    "/photos/store.jpg",
    "/photos/artist.jpg",
    "/photos/barber.jpg",
  ]

  const heroImage = imageCollection[Math.floor(Math.random() * imageCollection.length)]

  
  
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div 
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
          className={styles.card}
        >
          <h1 className="text-6xl mb-2 text-white">Administra tu negocio fácilmente</h1>
          <p className="text-xl text-white mb-6">
            Controla tus ventas, stock y operaciones sin complicaciones.
          </p>
         <div className="flex gap-4">
            {/* Botón secundario */}
            <Button
              variant="secondary"
              className="bg-black/30 text-white backdrop-blur-md hover:backdrop-blur-xl hover:bg-black/40"
            >
              Ingresar
            </Button>

            {/* Botón principal */}
            <Button
              className="bg-[#FF0095] text-white hover:opacity-80 hover:bg-[#FF0095]"
            >
              Comienza gratis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}