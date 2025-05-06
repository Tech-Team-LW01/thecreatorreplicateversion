import { useState } from 'react';

// Simplified Card component for demonstration
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`bg-white rounded-3xl shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default function AwardComponentPreview() {
  return (
    <div className="w-full bg-black p-8 flex justify-center">
      <div className="w-full max-w-5xl mx-auto bg-black px-4 sm:px-12 py-4">
        <Card className="relative bg-white shadow-lg rounded-[40px] px-4 sm:px-8 md:px-12 py-6 md:py-8 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between h-full w-full">
            {/* Left Section with Logo */}
            <div className="flex justify-center items-center z-10 md:w-1/6">
              <div className="relative w-20 h-20 md:w-24 md:h-24">
                <img
                  src="/assets/Learn & Build Blue Logo-01 (1).png"
                  alt="Learn & Build Logo"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            {/* Vertical Divider - only on desktop */}
            <div className="hidden md:block h-20 bg-red-500 w-[2px] mx-4"></div>

            {/* Center Section with Text */}
            <div className="flex flex-col justify-center md:w-3/5 z-10 mt-4 md:mt-0 px-2 md:px-0">
              <h2 className="text-black text-sm sm:text-xl md:text-xl lg:text-xl font-bold leading-tight text-center md:text-left">
                Authorised Industrial Training & Internship <br className="hidden md:block" /> Partner with Rajasthan Technical University (RTU)
              </h2>
            </div>

            {/* Award Image Section */}
            <div className="md:w-1/4 mt-6 md:mt-0 relative z-10">
              {/* Award image placeholder */}
              <div className="relative hidden md:block  border-white">
                <img
                  className='relative md:w-[320px] md:h-400px] w-[300px] h-full object-fit'
                  src='/assets/Award/award2.png'
                  alt="Award"
                />
              </div>
            </div>
          </div>
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500 opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </Card>
      </div>
    </div>
  );
}