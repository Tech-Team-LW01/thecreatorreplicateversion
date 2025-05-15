// VideoCarousel.tsx
import React, { useEffect } from 'react';
import Card from './Card';
import { register } from 'swiper/element/bundle';
import { Poppins } from 'next/font/google';
import localFont from "next/font/local";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
});

const khandFont = localFont({
    src: '../../../app/fonts/Khand-SemiBold.woff',
    weight: '100 900',
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': any;
      'swiper-slide': any;
    }
  }
}

// Register Swiper once
register();

const VideoCarousel = () => {
    const videos = [
      {
        id: 1,
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1?autoplay=1',
        thumbnail:"/assets/Thumbnail/1.jpg",
      },
      {
        id: 2,
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2?autoplay=1',
        thumbnail:"/assets/Thumbnail/2.jpg",
      },
      {
        id: 3,
        videoUrl: ' https://youtu.be/iAbbo8kymI8',
        thumbnail:"/assets/Thumbnail/3.jpg",
      },
      {
        id: 4,
        videoUrl: 'https://youtu.be/bbZdkF7jjUg',
        thumbnail:"/assets/Thumbnail/4.jpg",
      },
      {
        id: 5,
        videoUrl: 'https://youtu.be/lq5cFsWSqMA',
        thumbnail:"/assets/Thumbnail/5.jpg",
      },
      {
        id: 6,
        videoUrl: 'https://youtu.be/xdVdOeRmEKg',
        thumbnail:"/assets/Thumbnail/6.jpg",
      },
    ];
  
    // Initialize Swiper properly with useEffect
    useEffect(() => {
      // This ensures Swiper initializes correctly after component mounts
      const swiperEl = document.querySelector('swiper-container');
      
      // Optional: Apply any additional configuration if needed
      if (swiperEl) {
        const swiperParams = {
          slidesPerView: 3,
          spaceBetween: 24,
          loop: true,
          navigation: true,
          pagination: {
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          },
        };
        
        
        Object.assign(swiperEl, swiperParams);
        
        
        swiperEl.initialize();
      }
    }, []);

    return (
      <div className="w-full bg-black py-16">
        <div className="max-w-6xl h-full mx-auto px-4">
          <div className='w-full mb-10 flex items-center justify-center'>
            <h1 className={`text-[#ff0000] text-center text-3xl md:text-4xl ${khandFont.className}`}>
              Hear what Investors & Industry Experts have to say
            </h1>
          </div>
          
          {/* Swiper Container */}
          <swiper-container
            init="false" 
            slides-per-view="3"
            space-between="24"
            loop="true"
            navigation="true"
            pagination="true"
            class="mySwiper w-full"
          >
            {videos.map((video) => (
              <swiper-slide key={video.id} class="pb-10">
                <Card
                  thumbnail={video.thumbnail}
                  videoUrl={video.videoUrl}
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    );
  };
  
  export default VideoCarousel;