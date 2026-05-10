"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#1A251E]/90 backdrop-blur-md py-2 shadow-lg shadow-black/10" : "bg-transparent py-3"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex justify-center items-center gap-1 group">
          <img src="/flower/plant 2.png" alt="FloraVision Logo" className="w-[45px] h-[45px] object-contain drop-shadow-md -ml-2 translate-y-2" />
          <span className="font-semibold text-xl tracking-tight text-white">FloraVision.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <Link href="/" className="text-white hover:text-primary transition-colors">Home</Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors group">
            Plants Types
            <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <Link href="#plant" className="hover:text-primary transition-colors">Plant</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-white">
          <button className="hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <button className="hover:text-primary transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1.5 -right-1.5 bg-primary text-[#1A251E] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button className="md:hidden hover:text-primary transition-colors">
            <Menu size={24} />
          </button>
          <button className="hidden md:block hover:text-primary transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
