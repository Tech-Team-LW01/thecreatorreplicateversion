import { useState } from 'react';

// Sample data with placeholder image URLs
const EXPERTS_DATA = [
  {
    id: 1,
    name: "Mukul Shandilya",
    title: "Research Engineer",
    image: "/assets/Mentor/shiv.jpeg",
    description: "Mukul Shandilya is a dedicated and insightful Research Engineer currently associated with TechieNest Pvt. Ltd. (Learn and Build). With over 8+ years of expertise in Embedded Systems and IoT, he specializes in Embedded Programming (AVR, ARM), Java, Python, SQL, and mobile app development. Mukul has developed several impactful personal projects including Smart Wheelchair, Health Band, and GSM-based Energy Meters. In addition to his technical contributions, he has trained more than 20,000 students through industrial training programs and has delivered workshops at prestigious institutions like IIT Roorkee, IIT Bhilai, and MNIT Jaipur. His commitment to deep subject understanding and his ability to communicate it effectively make him a key pillar in the organization’s technical ecosystem.",
    isEven: false
  },
  {
    id: 2,
    name: "Shiv Kumar Shakya",
    title: "Associate Software Developer",
    image: "/assets/Mentor/WhatsApp Image 2025-05-06 at 5.03.01 PM.jpeg",
    description: "Shiv Kumar Shakya is a passionate Associate Software Developer currently working with TechieNest Pvt. Ltd. (Learn and Build). He has hands-on experience in Salesforce Administration and Development, including Apex, SOQL, Visualforce, LWC, and configuration. Shiv has worked on real-time industry projects like Airlines and Insurance Management Systems and actively assists in training, solving student queries, and supporting operations and technical teams. His strong technical skills combined with his eagerness to learn and collaborate make him a valuable asset in any development environment.",
    isEven: true
  }
];

interface Expert {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
  isEven: boolean;
}

const ExpertCard = ({ expert }: { expert: Expert }) => {
  return (
    <div className={`w-full flex  flex-col ${expert.isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 mb-16 rounded-lg overflow-hidden shadow-lg bg-black border border-red-800 p-6`}>
      {/* Image container */}
      <div className="w-full md:w-1/3 flex justify-center">
        <div className={`relative w-64 h-64 border-2 ${expert.isEven ? 'border-red-500' : 'border-red-500'} rounded-lg overflow-hidden shadow-md`}>
          <img 
            src={expert.image} 
            alt={expert.name}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      
      {/* Content container */}
      <div className="w-full md:w-2/3 mt-6 md:mt-0 bg-black">
        <div className={`${expert.isEven ? 'md:pr-6 md:text-right' : 'md:pl-6'}`}>
          <h3 className="text-2xl font-bold text-[#ff0000]">{expert.name}</h3>
          <p className="text-lg font-semibold text-gray-300 italic mb-2">{expert.title}</p>
          <p className="text-white text-sm leading-relaxed">{expert.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function ExpertsDemo() {
  return (
    <div className="w-full bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mentorship By Industry Experts</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {EXPERTS_DATA.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      </div>
    </div>
  );
}