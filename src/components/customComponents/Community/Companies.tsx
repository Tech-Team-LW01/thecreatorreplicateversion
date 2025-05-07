import React, {  } from 'react';
import { OurAlumniWorksAtCarousel } from "../../ui2/OurAlumniWorksAtCarousel";
import { Inter,Khand,Poppins } from 'next/font/google'
const khandFont = Khand({
  subsets: ['latin'],
  weight: ['700']
})
 
const Companies = () => {


  const logos = [
    { image: '/assets/companies/AurigaIT-removebg-preview.png' },
    { image: '/assets/companies/Celebal.png' },
    { image: '/assets/companies/hashedin-logo.png' },
    
    { image: '/assets/companies/HybrisWorld-removebg-preview.png' },
    { image: '/assets/companies/Red_Hat-Logo.png' },
    { image: '/assets/companies/Seclore-logo.png' },
    { image: '/assets/companies/Logo_signzy.png' },
    { image: '/assets/companies/Singhtek-removebg-preview.png' },
    
    { image: '/assets/companies/SquareOps Technologies-logo.png' },
    { image: '/assets/companies/HCL-logo.png' },
    { image: '/assets/companies/HIC Global-logo.png' },
   
    { image: '/assets/companies/Ongraph_technologies-removebg-preview.png' },
    { image: '/assets/companies/SmartBrains.png-removebg-preview.png' },
    { image: '/assets/companies/WeVois-removebg-preview.png' },
    // { image: '/assets/collogelogo/UPES,dehradun.jpeg' },
    // { image: '/assets/collogelogo/VIT,Pune.jpeg' },
  ];

 

  return (
    <div className="w-full max-w-full mx-auto h-[200px] overflow-hidden bg-white pt-4">
      <h1 className={`text-3xl md:text-4xl font-bold text-[#ff0000] text-center mb-0  ${khandFont.className}`}>
      Hiring Company Partner&apos;s
      </h1>
      {/* First row - Moving Left */}
      <div className="flex flex-col items-center justify-center bg-white  relative overflow-hidden mt-0">
        <OurAlumniWorksAtCarousel
          items={logos}
          direction="left"
          speed="slow"
          cardWidth={150}
          cardHeight={150}
        />
      </div>

    
    </div>
  );
};

export default Companies;
