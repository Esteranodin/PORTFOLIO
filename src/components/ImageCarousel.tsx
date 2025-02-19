import { useState, useEffect } from 'react';
import '../styles/caroussel.css';

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const styles = {
  carouselButton: {
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '1.5rem',
    cursor: 'pointer',
    borderRadius: '50%',
    transition: 'background 0.3s ease',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.8)',
    },
  },
  prevButton: {
    left: '1rem',
  },
  nextButton: {
    right: '1rem',
  },
};

export default function ImageCarousel({ images }: CarouselProps) {
  
  if (!images || !Array.isArray(images) || images.length === 0) {
    console.error('Erreur: images non valides', images);
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
    <div className="carousel">
    <button onClick={prevSlide} style={{...styles.carouselButton, ...styles.prevButton}}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
      <img 
        src={images[currentIndex].src} 
        alt={images[currentIndex].alt} 
        className="carousel-image"
      />
      
      <button 
        onClick={nextSlide} 
        style={{...styles.carouselButton, ...styles.nextButton}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      </button>
    </div>
  );
}
