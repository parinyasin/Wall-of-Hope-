import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SymbolItem } from '../types';

interface PrayerModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  symbols: SymbolItem[];
}

export const PrayerModeModal: React.FC<PrayerModeModalProps> = ({ isOpen, onClose, symbols }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset to first slide when opened
  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % symbols.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + symbols.length) % symbols.length);
  };

  const currentSymbol = symbols[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 text-white backdrop-blur-md animate-in fade-in duration-300">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-50"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div className="w-full max-w-md mx-auto px-6 flex flex-col items-center justify-center h-full relative">
        
        {/* Navigation Arrows (Desktop) */}
        <button 
          onClick={prevSlide}
          className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all hover:scale-110"
        >
          <ChevronLeft className="w-8 h-8 opacity-75" />
        </button>
        <button 
          onClick={nextSlide}
          className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all hover:scale-110"
        >
          <ChevronRight className="w-8 h-8 opacity-75" />
        </button>

        {/* Card Display Area */}
        <div className="flex-1 flex flex-col justify-center w-full max-h-[85vh] py-8">
            {/* Image */}
            <div className="relative w-full aspect-[2/3] shrink-0 mb-8 animate-in zoom-in-95 fade-in duration-500">
            <img 
                src={currentSymbol.imageUrl} 
                alt={currentSymbol.title} 
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(251,191,36,0.2)]"
            />
            </div>

            {/* Text Content */}
            <div className="text-center space-y-4 animate-in slide-in-from-bottom-8 duration-500 delay-100 pb-8">
            <h2 className="text-3xl font-serif text-amber-400 font-bold tracking-wide drop-shadow-md">
                {currentSymbol.title}
            </h2>
            <p className="text-stone-300 leading-relaxed font-light text-lg opacity-90">
                {currentSymbol.description}
            </p>
            </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 flex gap-3">
          {symbols.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-amber-400 w-8' : 'bg-white/20 w-2 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
      
      {/* Mobile Touch Areas for Navigation */}
      <div className="md:hidden absolute inset-y-0 left-0 w-1/4 z-40" onClick={prevSlide}></div>
      <div className="md:hidden absolute inset-y-0 right-0 w-1/4 z-40" onClick={nextSlide}></div>
    </div>
  );
};