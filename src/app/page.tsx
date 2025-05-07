




"use client"
import { useEffect, useState } from 'react';
import Hero from "@/components/customComponents/Hero/Hero";
import TechStack from "@/components/customComponents/Technology/Technology";
import {TopLeaders} from "@/components/customComponents/TopLeaders/TopLeaders";
import {LeftRightAlumniCarousel} from "@/components/customComponents/CompaniesCarousel/CompaniesCarousel"; 
import Projets from "@/components/customComponents/Projects/Project";
import {OutCome} from "@/components/customComponents/OutCome/OutCome";
import VideoTestimonials from "@/components/customComponents/Testimonials/VideoTestimonials";
import Awards from "@/components/customComponents/Awards/Awards";
import Benifits from "@/components/customComponents/Benefits/Benefits";
import FeatureGrid from "@/components/customComponents/Tedx/Feature";
import MediaSection from "@/components/customComponents/Media/Media";
import Mentor from "@/components/customComponents/Mentor/Mentor";
import Gallery from "@/components/customComponents/Gallery/Gallery";
import Blogs from "@/components/customComponents/Blogs/Blogs";
import ImageTestimonials from "@/components/customComponents/Testimonials/TestimonialsImage";
import Query from "@/components/customComponents/Query/Query";
import OutComeGallary from "@/components/customComponents/OutCome/OutComeGallary";
import JazbaaStartupPlatform from "@/components/customComponents/OutCome/JazbaaStartp/JazbaaStartup";
import Community from "@/components/customComponents/Community/Community";
import { MentorScroll } from "@/components/customComponents/Mentor/mentorScroll";
import Map from "@/components/customComponents/Map/Map";
import { JazbaaTimeLine } from "@/components/customComponents/JazbaaTimeLine/JazbaaTimeLine";
import Footer3 from "@/components/Footer3";
import Hero2 from "@/components/customComponents/Hero/Hero2";
import Timeline from "@/components/customComponents/TimeLine/TimeLine";
import InvestorCarousel from "@/components/customComponents/InverterVideo/Carousel ";
import RecapPreviousYear from "@/components/customComponents/recap-previous-year/RecapPreviousYear";
import SupportContact from "@/components/customComponents/Support/Support";
import BentoGallery from "@/components/customComponents/Gallery/Gallery";
import Experts from "@/components/customComponents/Mentor/Experts";
import Awards2 from "@/components/customComponents/Awards/Awards2";
import QueryModal from "@/components/customComponents/QueryModal";

import Companies from "@/components/customComponents/Community/Companies";


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 10 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <QueryModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
{/* <ContactForm/> */}
      <Hero2 />
      <TechStack />
      <RecapPreviousYear />
      <Mentor />
      <MentorScroll />
      <Experts />
      <Awards />
      <Companies/>
      <TopLeaders />
      <Community />
      <Projets />
      <Awards2 />
      <Map />
      <BentoGallery />
      <Benifits />
      <Timeline />
      <OutCome />
      <JazbaaStartupPlatform />
      <OutComeGallary />
      <InvestorCarousel />
      <JazbaaTimeLine />
      <LeftRightAlumniCarousel />
      <VideoTestimonials />
      <ImageTestimonials />
      <FeatureGrid />
      <Query />
      <MediaSection />
      <SupportContact />
    </div>
  );
}