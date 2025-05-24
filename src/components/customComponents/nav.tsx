"use client";

import React, { useState, useEffect, useRef } from "react";
import { List, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import LOGO from "../../../public/assets/LW-white.png";
import LOGO1 from "../../../public/assets/LNB.png";
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Animation Variants
const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
};

const Nav: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    // Pre-filled message
    const message = encodeURIComponent("Hello!! I want to enroll for the Internship program.");
    window.open(`https://wa.me/919828616335?text=${message}`, '_blank');
    closeMobileMenu();
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled ? "bg-black shadow-lg" : "bg-black"
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={LOGO}
              alt="Logo"
              width={0}
              height={45}
              className="h-[45px] w-auto object-contain overflow-hidden"
              priority
            />
          </Link>
          
          <Link href="/" className="flex items-center ml-4">
            <Image
              src={LOGO1}
              alt="Logo"
              width={0}
              height={42}
              className="h-[42px] w-auto object-contain overflow-hidden"
              priority
            />
          </Link>
        </div>

        {/* Desktop WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className=" bg-green-600 text-white  px-8 py-3 rounded-lg hover:bg-green-700 hover:shadow-lg transition-all duration-300 text-center flex items-center gap-2  "
        >
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 8 0 7.91 7.91 0 0 0 .05 8.028a7.97 7.97 0 0 0 1.167 4.157l-.5 1.83A.5.5 0 0 0 1.225 15h.5a.5.5 0 0 0 .374-.155l1.516-1.716a8.01 8.01 0 0 0 4.395 1.11c4.395.15 8.168-3.408 8.168-7.934 0-1.463-.396-2.822-1.068-4.013zm-6.598 9.79A6.5 6.5 0 0 1 1.5 8a6.5 6.5 0 0 1 6.5-6.5A6.5 6.5 0 0 1 14.5 8a6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-3.597-1.084L1.4 14.48V14.5a.5.5 0 0 1-.5-.5v-2l1.126-1.264a6.5 6.5 0 0 1-.93-3.236 6.5 6.5 0 0 1 6.5-6.5 6.5 6.5 0 0 1 6.5 6.5 6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-1.593-.2z"/>
                    </svg>
          Start Chat on Whatsapp
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-white hover:text-[#ff0000] transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <List className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute right-4 top-full bg-black w-64 shadow-lg z-10 rounded-lg border border-gray-800"
          >
            <div className="p-4">
              {/* Mobile WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="block w-full mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:shadow-lg transition-all duration-300 text-center"
              >
                Start Chat on Whatsapp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;