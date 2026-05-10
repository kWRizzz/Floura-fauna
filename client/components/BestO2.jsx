"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BestO2() {
  return (
    <section className="py-20 relative z-10" id="best-o2">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-block">
            <div className="absolute top-0 left-0 w-4 h-full border-t border-b border-l border-white/50"></div>
            <div className="absolute top-0 right-0 w-4 h-full border-t border-b border-r border-white/50"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white px-8 py-2">
              Our Best o2
            </h2>
          </div>
        </div>

        {/* Large Layout Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#202E25]/80 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center max-w-5xl mx-auto overflow-visible"
        >
          {/* Left Image Area */}
          <div className="w-full md:w-5/12 relative mb-12 md:mb-0 h-[300px] md:h-auto">
            {/* Image is absolutely positioned to pop out slightly from the left/bottom depending on design */}
            <div className="md:absolute md:-left-24 md:-top-32 md:-bottom-12 w-full h-full md:w-[130%] md:h-[130%] pointer-events-none drop-shadow-2xl z-20">
              <img 
                src="/flower/Rose Gold Feminine Calligraphy Monogram Logo(15) 2 (1).png" 
                alt="O2 Plant" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Text Area */}
          <div className="w-full md:w-7/12 md:pl-16 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              We Have Small And Best O2 Plants Collections
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6 font-light">
              Certain houseplants, often referred to as "O2 plants," are championed for their remarkable ability to filter out indoor pollutants through the process of photosynthesis.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mb-10 font-light">
              Many plants act as natural air purifiers, drawing in toxins and releasing fresh, clean oxygen into your home. This makes for a cleaner and healthier living space.
            </p>
            
            <div className="flex items-center gap-6">
              <button className="border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors font-medium text-sm tracking-wide">
                Explore
              </button>
              
              <div className="flex items-center gap-2 ml-4">
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>

      </div>
    </section>
  );
}
