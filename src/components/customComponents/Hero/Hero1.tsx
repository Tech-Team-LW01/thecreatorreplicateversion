import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineHourglass } from "react-icons/ai";
import { Album, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
});

import localFont from "next/font/local";
const khandFont = localFont({
    src: '../../../app/fonts/Khand-SemiBold.woff',
    weight: '100 900',
});

const Hero2 = () => {    
    return (
        <div className="h-full mx-auto w-full bg-black">
            {/* Hero Content - Centered */}
            <div className="container mx-auto px-4 pt-12 pb-8 text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#ff0000] mb-4">
                    Summer Internship 2025
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                    Industrial Training Program
                </h2>
                <h3 className="text-xl md:text-3xl font-medium text-white mb-2">
                    For Engineering Students
                </h3>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    (Open for B.Tech | M.Tech | BCA | MCA | B.Sc IT)
                </p>
                
                {/* WhatsApp Button */}
                <button
                    onClick={() => window.open('https://wa.me/919828616335', '_blank')}
                    className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 hover:shadow-lg transition-all duration-300 text-center flex items-center gap-2 mx-auto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 8 0 7.91 7.91 0 0 0 .05 8.028a7.97 7.97 0 0 0 1.167 4.157l-.5 1.83A.5.5 0 0 0 1.225 15h.5a.5.5 0 0 0 .374-.155l1.516-1.716a8.01 8.01 0 0 0 4.395 1.11c4.395.15 8.168-3.408 8.168-7.934 0-1.463-.396-2.822-1.068-4.013zm-6.598 9.79A6.5 6.5 0 0 1 1.5 8a6.5 6.5 0 0 1 6.5-6.5A6.5 6.5 0 0 1 14.5 8a6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-3.597-1.084L1.4 14.48V14.5a.5.5 0 0 1-.5-.5v-2l1.126-1.264a6.5 6.5 0 0 1-.93-3.236 6.5 6.5 0 0 1 6.5-6.5 6.5 6.5 0 0 1 6.5 6.5 6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-1.593-.2z"/>
                    </svg>
                    Start Chat on WhatsApp
                </button>
            </div>

            {/* Info Strip */}
            <div className="w-full">
                <div className="bg-black rounded-lg p-3 sm:p-5 md:p-6 border border-white max-w-xs sm:max-w-md md:max-w-lg lg:max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        {/* Admission Section */}
                        <div className="flex items-start gap-2">
                            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-red-50 rounded-lg">
                                <BsCalendarCheck className="w-5 h-5 text-[#ff0000]" />
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-[#ff0000] text-sm font-medium uppercase tracking-wide ${khandFont.className}`}>
                                    TENTATIVE START DATES
                                </span>
                                <span className={`font-bold text-sm text-white mt-1 ${poppins.className}`}>
                                    26th May | 2nd June | 15th June | 23rd June, 2025 
                                </span>
                                <Badge variant="outline" className="text-[#ff0000] border-red-200 text-[10px] mt-2 w-fit">
                                    Limited seats
                                </Badge>
                            </div>
                        </div>

                        {/* Duration Section */}
                        <div className="flex items-start gap-2">
                            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-red-50 rounded-lg">
                                <AiOutlineHourglass className="w-5 h-5 text-[#ff0000]" />
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-[#ff0000] text-sm font-medium uppercase tracking-wide ${khandFont.className}`}>
                                    DURATION SUMMER PROGRAM
                                </span>
                                <span className={`font-bold text-sm text-white mt-1 ${poppins.className}`}>
                                    6 weeks / 8 weeks
                                </span>
                            </div>
                        </div>

                        {/* Internship Section */}
                        <div className="flex items-start gap-2">
                            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-red-50 rounded-lg">
                                <Album className="w-5 h-5 text-[#ff0000]" />
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-[#ff0000] text-sm font-medium uppercase tracking-wide ${khandFont.className}`}>
                                    INTERNSHIP
                                </span>
                                <span className={`font-bold text-sm text-white mt-1 ${poppins.className}`}>
                                    Industry Recognised Internship (Project) Certificate
                                </span>
                            </div>
                        </div>

                        {/* Training Certificate Section */}
                        <div className="flex items-start gap-2">
                            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-red-50 rounded-lg">
                                <ShieldCheck className="w-5 h-5 text-[#ff0000]" />
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-[#ff0000] text-sm font-medium uppercase tracking-wide ${khandFont.className}`}>
                                    TRAINING CERTIFICATE
                                </span>
                                <span className={`font-bold text-sm text-white mt-1 ${poppins.className}`}>
                                    Training Certificate from LinuxWorld Informatics Pvt Ltd
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Button below on mobile, centered */}
                    {/* <div className="mt-8 flex justify-center">
                        <button
                            onClick={() => window.open('https://wa.me/919828616335', '_blank')}
                            className="bg-[#ff0000] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#ff0000]/90 hover:shadow-lg transition-all duration-300"
                        >
                            Enquire Now
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Hero2;