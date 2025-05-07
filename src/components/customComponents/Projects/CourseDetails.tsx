import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
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
  
  // Effect to create a pulsing animation every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

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
                  "w-full bg-red-600 hover:bg-red-700 text-white relative overflow-hidden transition-all duration-400 transform hover:scale-105 hover:shadow-lg",
                  isPulsing ? "animate-button-pulse" : ""
                )}
                onClick={() => window.open(registerLink, '_blank')}
              >
                <span className="relative z-10">Book now with Registration fees</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
                  "w-1/3 bg-red-600 hover:bg-red-700 text-white relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg group",
                  isPulsing ? "animate-button-pulse" : ""
                )}
                onClick={() => window.open(registerLink, '_blank')}
              >
                <span className="relative z-10">Book now with Registration fees</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}