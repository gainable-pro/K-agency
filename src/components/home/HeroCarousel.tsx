'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/images/cfc.png', alt: 'Casablanca Finance City', sector: 'Finance & Stratégie' },
  { src: '/images/tanger_med.png', alt: 'Tanger Med - Logistique Internationale', sector: 'Logistique & Supply Chain' },
  { src: '/images/developer.png', alt: 'Tech Hub Morocco - Développeurs', sector: 'IT & Digital' },
  { src: '/images/marrakech.png', alt: 'Marrakech Business', sector: 'Immobilier & Luxe' },
  { src: '/images/hotel_event.png', alt: 'Hôtellerie et Évènementiel', sector: 'Hôtellerie & Évènementiel' },
  { src: '/images/artistic.png', alt: 'Recrutement Artistique', sector: 'Art & Création' },
  { src: '/images/business.png', alt: 'Executive Business Meeting', sector: 'Direction Générale' }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-background">
      {images.map((img, index) => (
        <div 
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image 
            src={img.src} 
            alt={img.alt} 
            fill 
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}
      {/* Less aggressive overlays so we can see the realistic photos */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
      
      {/* Sector Indicator */}
      <div className="absolute bottom-8 left-8 z-20 flex items-center space-x-4">
        <div className="flex space-x-2">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1 transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/30'}`}
            ></div>
          ))}
        </div>
        <span className="text-xs tracking-widest text-primary/70 uppercase font-light">
          {images[currentIndex].sector}
        </span>
      </div>
    </div>
  );
}
