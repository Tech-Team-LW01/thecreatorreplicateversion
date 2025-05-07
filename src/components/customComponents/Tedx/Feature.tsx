// FeatureGrid.tsx
import React, { useState } from "react";
import Tedx2 from "./Tedx2";
import { speakersData } from "./TedxData";
import { Poppins } from 'next/font/google';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
});

const FeatureGrid = () => {
  // State to track the current set of visible speakers
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Number of cards to show based on screen size
  const getCardsToShow = () => {
    // We'll determine this based on window width
    // Default to 1 for mobile
    if (typeof window === 'undefined') return 1;
    
    if (window.innerWidth >= 1024) return 3; // Desktop
    if (window.innerWidth >= 768) return 2; // Tablet
    return 1; // Mobile
  };
  
  // Slides to show (will be set in useEffect)
  const [cardsToShow, setCardsToShow] = useState(1);
  
  // Update cardsToShow when component mounts and on window resize
  React.useEffect(() => {
    // Set initial value
    setCardsToShow(getCardsToShow());
    
    // Update on resize
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Navigation functions
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, speakersData.length - cardsToShow) : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= speakersData.length - cardsToShow ? 0 : prevIndex + 1
    );
  };
  
  // Get current visible speakers
  const visibleSpeakers = speakersData.slice(currentIndex, currentIndex + cardsToShow);
  
  // Handle case where we need to wrap around to the beginning
  if (visibleSpeakers.length < cardsToShow) {
    const remaining = cardsToShow - visibleSpeakers.length;
    visibleSpeakers.push(...speakersData.slice(0, remaining));
  }

  return (
    <div className="w-full py-12 bg-black flex flex-col items-center justify-center p-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ff0000] mb-4">Voices of Impact: JAZBAA & Beyond</h2>
        <p className={`text-white text-lg md:text-2xl ${poppins.className}`}>How One Vision is Turning Engineering Students into Tech Creators! </p>
      </div>
      
      <div className="w-full max-w-6xl relative px-4 md:px-10">
        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 focus:outline-none"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          {/* Speaker Cards */}
          <div className="flex justify-center transition-all duration-500 overflow-hidden">
            <div className="flex justify-center gap-4 md:gap-8 transition-transform duration-500">
              {visibleSpeakers.map((speaker, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-auto" style={{ 
                  width: cardsToShow === 1 ? '100%' : 
                         cardsToShow === 2 ? 'calc(50% - 16px)' : 
                         'calc(33.333% - 22px)' 
                }}>
                  <Tedx2
                    imageUrl={speaker.imageUrl}
                    badge={speaker.badge}
                    firstName={speaker.firstName}
                    lastName={speaker.lastName}
                    link={speaker.link}
                    socialLinks={speaker.socialLinks}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Next Button */}
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 focus:outline-none"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: speakersData.length }).map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index >= currentIndex && index < currentIndex + cardsToShow ? 'w-4 bg-red-500' : 'w-2 bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;