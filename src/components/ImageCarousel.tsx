import { useState } from "react";
import "../styles/caroussel.css";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageCarousel({ images }: CarouselProps) {
  if (!images || !Array.isArray(images) || images.length === 0) {
    console.error("Erreur: images non valides", images);
    return <div>Erreur de chargement du carrousel</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="carousel-image"
          loading="lazy"
        />
      </div>
      <div className="carousel-buttons">
        <button onClick={prevSlide} className="carousel-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button onClick={nextSlide} className="carousel-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
