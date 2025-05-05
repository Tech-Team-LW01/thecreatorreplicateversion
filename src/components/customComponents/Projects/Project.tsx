import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { data } from './data';
import { Project } from './types';
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import { MdCircle } from "react-icons/md";
import { Inter,Khand,Poppins } from 'next/font/google'
import Link from 'next/link';
const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
})
const khandFont = Khand({
  subsets: ['latin'],
  weight: ['700']
})

export default function Projects(): JSX.Element {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);

    const handleScroll = () => {
      projectRefs.current.forEach((ref) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;

        if (isInView) {
          ref.style.opacity = '1';
          ref.style.transform = 'translateY(0)';
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const renderProjectContent = (project: Project): JSX.Element => (
    <div className="mb-4 bg-[#202020]  p-6 rounded-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      {/* Project Code Badge */}
      <div className="absolute top-0 right-0 sm:block md:hidden pb-4">
        <Badge
          variant="secondary"
          className="h-6 pt-2 pb-2 bg-[#4a4a4a] text-sm text-white border-none shrink-0"
        >
          Project {project.projectCode}
        </Badge>
      </div>

      {/* Project Code Badge for larger screens */}
      <div className="hidden md:block absolute top-0 right-0">
        <Badge
          variant="secondary"
          className="h-6 pt-2 pb-2 bg-[#4a4a4a] text-sm text-white border-none shrink-0"
        >
          Project {project.projectCode}
        </Badge>
      </div>

      {/* Project Title */}
      <h2 className="text-xl md:text-xl font-bold tracking-tight text-[#ff0000] whitespace-pre-wrap">
        {project.title}
      </h2>

      {/* Project Description */}
      <p className="text-xs pl-6 md:text-base text-white leading-relaxed">
        {project.description}
      </p>
      <div className='w-full h-[2px] mt-2 bg-white'/>

      {/* Project Sections */}
      <div className="space-y-2">
        {project.sections.map((section, idx) => (
          <div key={idx} className="text-white">
            <div className="flex space-x-3">
              <MdCircle
                className="text-[#ff0000] flex-shrink-0"
                size={8}
                style={{ marginTop: '18px' }}
              />
              <div className="flex-1">
                <h3 className="text-sm md:text-sm font-bold text-[#ff0000] mt-2">
                  {section.heading}
                </h3>
                <p className={`text-xs md:text-xs text-gray-200 leading-relaxed ${poppins.className}`}>
                  {section.content.split('|').map((item, i) => (
                    <span key={i} className="inline-block">
                      {item.trim()}
                      {i < section.content.split('|').length - 1 && (
                        <span className="mx-2 text-gray-500">|</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex mt-4 justify-center py-0">
        <Link href="/application-form">
            <Button
              size="lg"
              className={`${data.button.className} hover:bg-[#e00000] transform transition-all duration-300 hover:scale-105 px-8 py-3  shadow-lg hover:shadow-xl`}
              aria-label={data.button.text}
            >
              {data.button.text}
            </Button>
            </Link>
          </div>
    </div>
  );

  const renderImageContent = (project: Project): JSX.Element => (
    <div className="relative w-full max-w-[400px] sticky mx-auto md:pt-24 lg:pt-24 pt-0">
      <div className="relative group">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className={`${project.image.className} transition-transform duration-300 group-hover:scale-105 bg-white`}
          priority={project.image.priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );

  const renderProject = (project: Project, index: number): JSX.Element => {
    const isEven = index % 2 === 0;

    return (
      <div
        ref={(el) => { projectRefs.current[index] = el }}
        key={index}
        className="grid grid-cols-1 gap-8 md:grid-cols-2  md:py-6 py-1 lg:py-6 opacity-0 transform translate-y-4 transition-all duration-500 ease-out"
        style={{ 
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
        }}
      >
        {/* Mobile View (Image always on top) */}
        {/* todo hide this renderImage in mobile  */}
        {/* <div className="md:hidden w-full">
          {renderImageContent(project)}
        </div> */}

        {/* Desktop View (Alternating layout) */}
        {isEven ? (
          <>
            <div className="hidden md:block md:sticky md:top-0 self-start md:h-[calc(100vh-80px)] flex items-start">
              {renderImageContent(project)}
            </div>
            <div className="flex flex-col space-y-4">
              {renderProjectContent(project)}
            
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col space-y-6">
              {renderProjectContent(project)}
              {/* <div className="flex justify-center py-0">
            <Button
              size="lg"
              className={`${data.button.className} hover:bg-[#e00000] transform transition-all duration-300 hover:scale-105 px-8 py-3  shadow-lg hover:shadow-xl`}
              aria-label={data.button.text}
            >
              {data.button.text}
            </Button>
          </div> */}
            </div>
            <div className="hidden md:block md:sticky md:top-0 self-start md:h-[calc(100vh-80px)] flex items-start">
              {renderImageContent(project)}
            </div>
          </>
        )}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative bg-black">
      {/* Added Main Heading Section */}
      <div className="w-full text-center py-4 " id="#Projects">
        <h1 className={`text-3xl  md:text-4xl mt-4 text-[#ff0000]  ${khandFont.className}` }>Unique Summer Projects</h1>
        <p className={`text-white text-sm md:text-lg ${poppins.className}`}>Learn & Develop a Levek Of Project Which You Can't Find Anywhere – Internet / Google / Chatgpt</p>
      </div>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="container mx-auto max-w-6xl px-4 pt-4">
          {/* Projects Section */}
          <div className="space-y-8">
            {data.projects.map((project, index) => renderProject(project, index))}
          </div>

          {/* <div className="flex justify-center py-12">
            <Button
              size="lg"
              className={`${data.button.className} hover:bg-[#e00000] transform transition-all duration-300 hover:scale-105 px-8 py-3 rounded-full shadow-lg hover:shadow-xl`}
              aria-label={data.button.text}
            >
              {data.button.text}
            </Button>
          </div> */}
        </div>

        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }

          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #1a1a1a;
          }

          ::-webkit-scrollbar-thumb {
            background: #ff0000;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #e00000;
          }

          .project-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}</style>
      </div>
      
    </div>
  );
}