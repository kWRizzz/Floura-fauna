"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function TrendyPlants() {
  return (
    <section className="py-20 relative z-10" id="trendy-plants">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex justify-center mb-24">
          <div className="relative inline-block">
            {/* Minimalist Bracket style border */}
            <div className="absolute top-0 left-0 w-4 h-full border-t border-b border-l border-white/50"></div>
            <div className="absolute top-0 right-0 w-4 h-full border-t border-b border-r border-white/50"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white px-8 py-2">
              Our Trendy plants
            </h2>
          </div>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-32 max-w-5xl mx-auto">
          
          {/* First Card - Image Left, Text Right */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative glass-card rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-end"
          >
            {/* Image overlapping the card */}
            <div className="md:absolute left-0 top-[-60px] md:-left-12 lg:-left-20 w-64 md:w-80 h-[300px] md:h-[400px] z-20 mb-8 md:mb-0">
              <img 
                src="/flower/Rose Gold Feminine Calligraphy Monogram Logo(20) 1.png" 
                alt="Desk Plant" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Content Area */}
            <div className="w-full md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold text-white mb-4">For Your Desks Decorations</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Our plants have the unique ability to filter out pollutants and naturally improve air quality while bringing a touch of nature indoors.
              </p>
              <div className="text-white font-semibold text-xl mb-6">Rs. 300/-</div>
              
              <div className="flex items-center gap-4">
                <button className="border border-white/30 text-white px-6 py-2 rounded-full hover:bg-white/10 transition-colors font-medium text-sm">
                  Explore
                </button>
                <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 text-white transition-colors">
                  <ShoppingBag size={16} />
                </button>
              </div>
            </div>
          </motion.div>


          {/* Second Card - Text Left, Image Right */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative glass-card rounded-[3rem] p-8 md:p-12 flex flex-col-reverse md:flex-row items-center justify-start"
          >
            {/* Content Area */}
            <div className="w-full md:w-1/2 md:pr-12">
              <h3 className="text-2xl font-bold text-white mb-4">For Your Desks Decorations</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                These plants have the unique ability to filter out pollutants and toxins that make it an essential part of your indoor sanctuary.
              </p>
              <div className="text-white font-semibold text-xl mb-6">Rs. 300/-</div>
              
              <div className="flex items-center gap-4">
                <button className="border border-white/30 text-white px-6 py-2 rounded-full hover:bg-white/10 transition-colors font-medium text-sm">
                  Explore
                </button>
                <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 text-white transition-colors">
                  <ShoppingBag size={16} />
                </button>
              </div>
            </div>

            {/* Image overlapping the card */}
            <div className="md:absolute right-0 top-[-60px] md:-right-12 lg:-right-16 w-64 md:w-80 h-[300px] md:h-[400px] z-20 mb-8 md:mb-0">
              <img 
                src="/flower/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png" 
                alt="Desk Plant" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
