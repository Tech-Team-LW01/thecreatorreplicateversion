import { useState, useEffect } from "react";
import { Zap, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Assuming you have this utility from shadcn/ui

interface CourseDetailsProps {
  title: string;
  description: string;
  content: string[];
  registerLink: string;
  originalPrice: string;
  price: string;
}

export default function CourseDetails({
  title,
  description,
  content,
  registerLink,
  originalPrice,
  price,
}: CourseDetailsProps) {
  const [isPulsing, setIsPulsing] = useState(false);
  const [glowIndex, setGlowIndex] = useState(0);
  
  // Effect to create a pulsing animation every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Effect to rotate the glowing button
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIndex((prev) => (prev + 1) % content.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <Card className="bg-pink-50 border-none shadow-sm max-w-3xl">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-orange-500" />
          <span className="font-medium text-red-600 text-xl">{title}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {content.map((item, index) => (
            <Button
              key={index}
              variant="secondary"
              className="bg-pink-200 hover:bg-pink-300 border-none text-gray-800"
            >
              {item}
            </Button>
          ))}
        </div>
        
        <div className="pt-2 space-y-2">
          {/* Mobile view - stacked layout */}
          <div className="md:hidden">
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-lg font-medium mr-2">In Just</span>
                <span className="text-xl font-bold text-red-600">₹{price}</span>
                <span className="text-lg text-red-600 ml-2">(inclusive of taxes)</span>
              </div>
             
              <Button
                className={cn(
                  "w-full text-white font-bold relative overflow-hidden transition-all duration-300 shadow-xl",
                  "bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500",
                  "rounded-full py-6 transform hover:scale-105",
                  isPulsing ? "animate-pulse shadow-orange-300" : "shadow-orange-200"
                )}
                onClick={() => window.open(registerLink, '_blank')}
              >
                <div className="flex items-center justify-center gap-2 px-8">
                  <span className="relative z-10 text-black py-1 px-6">Book now with Registration fees</span>
                </div>
                {/* Shine effect */}
                <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 translate-x-full animate-shine"></span>
              </Button>
            </div>
          </div>

          {/* Desktop view - original layout */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>in just </span>
                <span className="text-xl font-bold text-red-600">₹{price} (inclusive of taxes)</span>
              </div>
              
              <Button 
                className={cn(
                  "w-2/5 text-white font-bold relative overflow-hidden transition-all duration-300",
                  "rounded-full py-3 transform hover:scale-105",
                  "bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-600 hover:to-yellow-500",
                  "shadow-lg", isPulsing ? "animate-pulse shadow-orange-300" : "shadow-orange-200"
                )}
                onClick={() => window.open(registerLink, '_blank')}
              >
                <div className="flex items-center justify-center gap-2 px-8">
                  <span className="relative z-10 py-1 px-8 text-black">Book now with Registration fees</span>
                </div>
                {/* Shine effect */}
                <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 translate-x-full animate-shine"></span>
              </Button>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes shine {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(400%) skewX(-12deg); }
          }
          
          .animate-shine {
            animation: shine 3s infinite;
          }
        `}</style>
      </CardContent>
    </Card>
  )
}