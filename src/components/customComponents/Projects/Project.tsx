// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { NewData } from './data';
// // Update the Project type to ensure it has a title property
// interface Project {
//   title: string;
//   description: string;
//   image: {
//     src: string;
//     alt: string;
//     width: number;
//     height: number;
//     className: string;
//     priority: boolean;
//   };
//   content: string[];
//   registerLink: string;
//   originalPrice: string;
//   price: string;
//   projectCode?: string;
// }

// import { Inter, Khand, Poppins } from 'next/font/google';
// import CourseDetails from './CourseDetails';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400']
// });
// const khandFont = Khand({
//   subsets: ['latin'],
//   weight: ['700']
// });

// export default function GitiProjects(): JSX.Element {
//   const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setIsLoading(false);

//     const handleScroll = () => {
//       projectRefs.current.forEach((ref) => {
//         if (!ref) return;

//         const rect = ref.getBoundingClientRect();
//         const isInView = rect.top <= window.innerHeight * 0.75;

//         if (isInView) {
//           ref.style.opacity = '1';
//           ref.style.transform = 'translateY(0)';
//         }
//       });
//     };

//     handleScroll();
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const renderProjectContent = (project: Project): JSX.Element => (
//     <CourseDetails
//       title={project.title}
//       description={project.description}
//       content={project.content}
//       registerLink={project.registerLink}
//       originalPrice={project.originalPrice}
//       price={project.price}
//     />
//   );

//   const renderImageContent = (project: Project): JSX.Element => (
//     <div className="w-full max-w-[400px] mx-auto flex items-center justify-center">
//       <div className="relative group w-full">
//         <Image
//           src={project.image.src}
//           alt={project.image.alt}
//           width={project.image.width}
//           height={project.image.height}
//           className={`${project.image.className} transition-transform duration-300 group-hover:scale-105 bg-white w-full object-contain`}
//           priority={project.image.priority}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>
//     </div>
//   );

//   const renderProject = (project: Project, index: number, refIndex: number): JSX.Element => {
//     const isEven = index % 2 === 0;

//     return (
//       <div
//         ref={(el) => { projectRefs.current[refIndex] = el }}
//         key={`project-${project.title}-${index}`}
//         className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:py-4 md:py-4 py-1 opacity-0 transform translate-y-4 transition-all duration-500 ease-out"
//         style={{
//           opacity: 0,
//           transform: 'translateY(20px)',
//           transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
//         }}
//       >
//         {isEven ? (
//           <>
//             <div className="md:order-1 order-2 flex flex-col justify-center">
//               {renderProjectContent(project)}
//             </div>
//             <div className="md:order-2 order-1 flex items-center justify-center">
//               {renderImageContent(project)}
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="md:order-1 order-1 flex items-center justify-center">
//               {renderImageContent(project)}
//             </div>
//             <div className="md:order-2 order-2 flex flex-col justify-center">
//               {renderProjectContent(project)}
//             </div>
//           </>
//         )}
//       </div>
//     );
//   };

//   if (isLoading) {
//     return (
//       <div className="bg-black flex items-center justify-center">
//         <div className="text-white text-xl">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative bg-black" id="Projects">
//       {/* Multiple Technology Summer Track Section */}
//       <div className="w-full text-center py-4" id="MultipleProjects">
//         <h1 className={`text-3xl md:text-4xl mt-4 text-[#ff0000] ${khandFont.className}`}>
//          Option 1 : <span className='text-white'> Multiple Technology Summer Track</span>
//         </h1>
//         <p className={`text-white text-sm md:text-lg ${poppins.className}`}>
          
//         </p>
//       </div>

//       <div className="container mx-auto max-w-6xl px-4">
//         <div className="space-y-2">
//           {NewData.multipleProjects.map((project, index) => renderProject(project, index, index))}
//         </div>
//       </div>

//       {/* Individual Technology Summer Track Section */}
//       <div className="w-full text-center py-4 mt-8" id="IndividualProjects">
//         <h1 className={`text-3xl md:text-4xl mt-4 text-[#ff0000] ${khandFont.className}`}>
//         Option 2 : <span className='text-white'>Individual Technology Summer Track</span>
//         </h1>
//         <p className={`text-white text-sm md:text-lg ${poppins.className}`}>
          
//         </p>
//       </div>

//       <div className="container mx-auto max-w-6xl px-4">
//         <div className="space-y-2">
//           {NewData.individualProjects.map((project, index) => 
//             renderProject(project, index, index + NewData.multipleProjects.length)
//           )}
//         </div>
//       </div>

//       <style jsx global>{`
//         html {
//           scroll-behavior: smooth;
//         }

//         ::-webkit-scrollbar {
//           width: 8px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #1a1a1a;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: #ff0000;
//           border-radius: 4px;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: #e00000;
//         }

//         .project-visible {
//           opacity: 1 !important;
//           transform: translateY(0) !important;
//         }
//       `}</style>
//     </div>
//   );
// }




import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { NewData } from './data';
import { Inter, Khand, Poppins } from 'next/font/google';
import CourseDetails from './CourseDetails';

// Font optimization
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const khandFont = Khand({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap'
});

// Types
interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  priority: boolean;
}

interface Project {
  title: string;
  description: string;
  image: ProjectImage;
  content: string[];
  registerLink: string;
  originalPrice: string;
  price: string;
  projectCode?: string;
}

export default function GitiProjects(): JSX.Element {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);

    const handleScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('project-visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      projectRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => observer.disconnect();
    };

    handleScroll();
  }, []);

  const ProjectContent: React.FC<Project> = ({ 
    title, 
    description, 
    content, 
    registerLink, 
    originalPrice, 
    price 
  }) => (
    <CourseDetails
      title={title}
      description={description}
      content={content}
      registerLink={registerLink}
      originalPrice={originalPrice}
      price={price}
    />
  );

  const ProjectImage: React.FC<{ image: ProjectImage }> = ({ image }) => (
    <div className="w-full sm:max-w-[400px] mx-auto p-2 sm:p-4">
      <div className="relative group w-full aspect-square sm:aspect-video">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={`${image.className} transition-transform duration-300 group-hover:scale-105 bg-white object-contain`}
          priority={image.priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );

  const ProjectSection: React.FC<{ project: Project; index: number; refIndex: number }> = ({ 
    project, 
    index, 
    refIndex 
  }) => {
    const isEven = index % 2 === 0;

    return (
      <div
        ref={(el) => { projectRefs.current[refIndex] = el }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 sm:py-8 opacity-0 transform translate-y-4 transition-all duration-500 ease-out"
      >
        {isEven ? (
          <>
            <div className="md:order-1 order-2">
              <ProjectContent {...project} />
            </div>
            <div className="md:order-2 order-1">
              <ProjectImage image={project.image} />
            </div>
          </>
        ) : (
          <>
            <div className="md:order-1 order-1">
              <ProjectImage image={project.image} />
            </div>
            <div className="md:order-2 order-2">
              <ProjectContent {...project} />
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
    <div className="relative bg-black min-h-screen" id="Projects">
      {/* Track Sections */}
      {['Multiple', 'Individual'].map((type, idx) => (
        <section key={type} className="py-8 sm:py-12">
          <div className="w-full text-center pb-6 sm:pb-8" id={`${type}Projects`}>
            <h1 className={`text-2xl sm:text-3xl md:text-4xl mt-4 text-[#ff0000] ${khandFont.className}`}>
              Option {idx + 1} : <span className='text-white'>{type} Technology Summer Track</span>
            </h1>
          </div>

          <div className="container mx-auto max-w-6xl px-4">
            <div className="space-y-6 sm:space-y-8">
              {(type === 'Multiple' ? NewData.multipleProjects : NewData.individualProjects)
                .map((project, index) => (
                  <ProjectSection
                    key={`${type}-${index}`}
                    project={project}
                    index={index}
                    refIndex={index + (type === 'Individual' ? NewData.multipleProjects.length : 0)}
                  />
                ))}
            </div>
          </div>
        </section>
      ))}

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

        @media (max-width: 640px) {
          .container {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
    </div>
  );
}