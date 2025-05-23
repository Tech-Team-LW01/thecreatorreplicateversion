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
    window.open('https://wa.me/919828616335', '_blank');
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
          className="hidden lg:block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 hover:shadow-lg transition-all duration-300 text-center"
        >
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