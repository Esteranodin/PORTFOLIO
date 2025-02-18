import { useState } from 'react';

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const styles = {
  carousel: {
    position: 'relative' as const,
    width: '100%',
    maxWidth: '800px',
    margin: '2rem auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  carouselButton: {
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '1rem',
    cursor: 'pointer',
    borderRadius: '50%',
  },
  prevButton: {
    left: '1rem',
  },
  nextButton: {
    right: '1rem',
  },
};

export default function ImageCarousel({ images }: CarouselProps) {
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
    <div style={styles.carousel}>
      <button 
        onClick={prevSlide} 
        style={{...styles.carouselButton, ...styles.prevButton}}
      >
        ←
      </button>
      <img 
        src={images[currentIndex].src} 
        alt={images[currentIndex].alt} 
        style={styles.carouselImage}
      />
      <button 
        onClick={nextSlide} 
        style={{...styles.carouselButton, ...styles.nextButton}}
      >
        →
      </button>
    </div>
  );
}

