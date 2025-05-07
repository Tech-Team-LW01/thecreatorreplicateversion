



// Card.tsx
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Play } from 'lucide-react';

interface CardProps {
  thumbnail: string;
  videoUrl: string;
}

const Card = ({ thumbnail, videoUrl }: CardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative w-full aspect-video cursor-pointer group rounded-lg overflow-hidden">
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-red-600 rounded-full p-3">
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <div className="aspect-video w-full">
          <iframe
            src={videoUrl}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Card;