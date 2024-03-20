"use client"
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./styles/carousel.css";

// Definición de la interfaz para las imágenes
interface Image {
  src: string;
  alt: string;
}

// Arreglo de imágenes con tipos explícitos
const images: Image[] = [
  { src: "/assets/bannerMural/Mesa de trabajo 2 copia-100.jpg", alt: "image" },
  { src: "/assets/bannerMural/Mesa de trabajo 2-100.jpg", alt: "image" },
  { src: "/assets/bannerMural/Mesa de trabajo 5-100.jpg", alt: "image" },
];

const MyCarousel: React.FC = () => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      interval={5000}
      showThumbs={false}
      className="car"
    >
      {images.map((item, index) => (
        <div className="content-img" key={index}>
          <img loading="lazy" src={item.src} alt={item.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
