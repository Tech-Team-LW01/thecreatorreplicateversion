"use client";

import React from "react";
import { Companies as Ourcompanies } from "./Ourcompanies"; // Update the path to the correct file
// Define the OurcompaniesProps type locally
type OurcompaniesProps = {
  items: { image: string; component: JSX.Element }[];
  direction: "left" | "right";
  speed: "slow" | "fast";
  cardWidth: number;
  cardHeight: number;
};
import Image from "next/image";

// Company logos imports
import AurigaIT from "../../../../public/assets/companies/AurigaIT.png";
import TCS from "../../../../public/assets/companyLogo/tcs.png";
import Celebal from "../../../../public/assets/companies/Celebal Technologies.webp";
import HashedIn from "../../../../public/assets/companies/HashedIn by Deloitte.webp";
import HCL from "../../../../public/assets/companies/HCL.png";
import HIC from "../../../../public/assets/companies/HIC Global.webp";
import HybrisWorld from "../../../../public/assets/companies/HybrisWorld.png";
import Ongraph from "../../../../public/assets/companies/Ongraph technologies.png";
import RedHat from "../../../../public/assets/companies/RedHat.png";
import Seclore from "../../../../public/assets/companies/seclore.png";
import Signzy from "../../../../public/assets/companies/signzy.png";
import Singhtek from "../../../../public/assets/companies/Singhtek.png";
import SmartBrains from "../../../../public/assets/companies/SmartBrains.jpg";
import SquareOps from "../../../../public/assets/companies/SquareOps Technologies.webp";
import WeVois from "../../../../public/assets/companies/WeVois.avif";

import localFont from "next/font/local";
const khandFont = localFont(
  {
    src: '../../../app/fonts/Khand-SemiBold.woff',
    weight: '100 900',
  }
)

export function Companies(props: OurcompaniesProps) {
  return (
    <div className="max-w-full px-4 md:py-6 lg:py-6 py-6 mx-auto relative bg-white">
      <div className="text-center mb-8">
        <div className="font-bold text-3xl md:text-4xl lg:text-4xl inline-block ">
          <span className={`text-[#ff0000] ${khandFont.className} text-3xl`}>Our Hiring Company Partner&apos;s </span>
        </div>
      </div>

      {/* First row - Moving Left */}
      <div className="flex flex-col items-center justify-center relative overflow-hidden mt-6">
        <Ourcompanies
          items={companiesRow1}
          direction="left"
          speed="slow"
          cardWidth={200}
          cardHeight={100}
        />
      </div>

      {/* Second row - Moving Right */}
      <div className="flex flex-col items-center justify-center relative overflow-hidden">
        <Ourcompanies
          items={companiesRow2}
          direction="right"
          speed="slow"
          cardWidth={200}
          cardHeight={100}
        />
      </div>
    </div>    
  );
}

// Custom company logo component with consistent sizing
const CompanyLogo: React.FC<{ src: string; alt?: string }> = ({ src, alt = "Company Logo" }) => {
  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <Image 
        src={src} 
        alt={alt} 
        width={140} 
        height={70} 
        style={{ 
          objectFit: "contain",
          maxWidth: "100%",
          maxHeight: "100%"
        }} 
      />
    </div>
  );
};

export const companiesRow1 = [
  { image: AurigaIT.src, component: <CompanyLogo src={AurigaIT.src} alt="AurigaIT" /> },
  { image: Celebal.src, component: <CompanyLogo src={Celebal.src} alt="Celebal" /> },
  { image: HashedIn.src, component: <CompanyLogo src={HashedIn.src} alt="HashedIn" /> },
  { image: HCL.src, component: <CompanyLogo src={HCL.src} alt="HCL" /> },
  { image: TCS.src, component: <CompanyLogo src={TCS.src} alt="TCS" /> },
  { image: HybrisWorld.src, component: <CompanyLogo src={HybrisWorld.src} alt="HybrisWorld" /> },
  { image: SquareOps.src, component: <CompanyLogo src={SquareOps.src} alt="SquareOps" /> },
];

const companiesRow2 = [
  { image: Ongraph.src, component: <CompanyLogo src={Ongraph.src} alt="Ongraph" /> },
  { image: RedHat.src, component: <CompanyLogo src={RedHat.src} alt="RedHat" /> },
  { image: Seclore.src, component: <CompanyLogo src={Seclore.src} alt="Seclore" /> },
  { image: Singhtek.src, component: <CompanyLogo src={Singhtek.src} alt="Singhtek" /> },
  { image: Signzy.src, component: <CompanyLogo src={Signzy.src} alt="Signzy" /> },
  { image: SmartBrains.src, component: <CompanyLogo src={SmartBrains.src} alt="SmartBrains" /> },
  { image: WeVois.src, component: <CompanyLogo src={WeVois.src} alt="WeVois" /> },
];