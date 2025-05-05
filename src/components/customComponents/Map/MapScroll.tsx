"use client";
import React from 'react';
import Image from 'next/image';

const MapScroll = () => {
  const logos = [
    { src: "https://hkga9exljh.ufs.sh/f/afCowHbSNqRe4cHkD6RV8xFyPjqHNRZMuDrL4CbtwQleYg06", alt: "Gallery Image 1" },
    { src: "https://hkga9exljh.ufs.sh/f/afCowHbSNqReJ2II8Mi09EUx2e3NqOBrDowW6Fb7QnSpyPX8", alt: "Gallery Image 2" },
    { src: "https://hkga9exljh.ufs.sh/f/afCowHbSNqReJ2II8Mi09EUx2e3NqOBrDowW6Fb7QnSpyPX8", alt: "Gallery Image 3" },
    { src: "https://hkga9exljh.ufs.sh/f/afCowHbSNqReIsixoHmfSemRkYtq2XpwZJ9EFjLKABxWry8h", alt: "Gallery Image 4" },
    { src: "https://hkga9exljh.ufs.sh/f/afCowHbSNqRet0g6CWOHa769PUWGMfvgOuYpeASC2lKkTwqo", alt: "Gallery Image 5" },
  
    { src: "https://hkga9exljh.ufs.sh/f/afCowHbSNqRem3nGzUoWUh9kz6Yl83vbNSxwqIL42G1yKgei", alt: "Gallery Image 7" },
    { src: "https://hkga9exljh.ufs.sh/f/afCowHbSNqRem04S2qoWUh9kz6Yl83vbNSxwqIL42G1yKgei", alt: "Gallery Image 8" },
    // { src: "https://utfs.io/f/eTRmNYrLOXzGpk7gzlWTJ5oMCX3zgnwFaikv2t87bOQyrTGW", alt: "Gallery Image 9" },
  ];

  return (
    <div className="relative overflow-hidden bg-black">
      <div className="w-full overflow-hidden whitespace-nowrap">
        {/* First Scroll Section */}
        <div className="inline-flex items-center animate-scroll w-max">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-4 w-48 flex-shrink-0 border border-gray-200 rounded-lg shadow-md p-[2px] hover:scale-105 transition-transform duration-300 bg-black"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={160} 
                  height={96} 
                  objectFit="contain" 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate Scroll Section */}
        <div className="inline-flex items-center animate-scroll w-max" aria-hidden="true">
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="mx-4 w-48 flex-shrink-0 border border-gray-200 rounded-lg shadow-md p-[2px] hover:scale-105 transition-transform duration-300 bg-black"
            >
              <div className="w-full h-full flex items-center object-fit justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={160} 
                  height={96} 
                  objectFit="contain" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MapScroll;