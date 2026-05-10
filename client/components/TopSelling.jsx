"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function TopSelling() {
  const plants = [
    {
      name: "Aglaonema plant",
      description: "The Aglaonema plant is a popular indoor plant known for its beautiful foliage and easy care.",
      price: "Rs. 300/-",
      image: "/flower/Rose Gold Feminine Calligraphy Monogram Logo(15) 2 (1).png"
    },
    {
      name: "Plantain Lilies",
      description: "Hosta is a genus of plants commonly known as hostas, grown for their shade-tolerant foliage.",
      price: "Rs. 350/-",
      image: "/flower/Rose Gold Feminine Calligraphy Monogram Logo(15) 2 (2).png"
    },
    {
      name: "Cactus",
      description: "A cactus is a great plant for busy people, requiring minimal water and attention.",
      price: "Rs. 350/-",
      image: "/flower/Rose Gold Feminine Calligraphy Monogram Logo(15) 2.png"
    },
    {
      name: "Swiss cheese Plant",
      description: "Monstera deliciosa is a species of flowering plant native to tropical forests.",
      price: "Rs. 400/-",
      image: "/flower/Rose Gold Feminine Calligraphy Monogram Logo(15) 3.png"
    },
    {
      name: "Sansevieria plant",
      description: "Sansevieria is a species of flowering plant known for its air-purifying qualities.",
      price: "Rs. 450/-",
      image: "/flower/Rose Gold Feminine Calligraphy Monogram Logo(20) 1.png"
    },
    {
      name: "Agave plant",
      description: "Agave is a genus of monocots native to the hot and arid regions of the Americas.",
      price: "Rs. 350/-",
      image: "/flower/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png"
    }
  ];

  return (
    <section className="py-20 relative z-10" id="top-selling">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex justify-center mb-24">
          <div className="relative inline-block">
            <div className="absolute top-0 left-0 w-4 h-full border-t border-b border-l border-white/50"></div>
            <div className="absolute top-0 right-0 w-4 h-full border-t border-b border-r border-white/50"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white px-8 py-2">
              Our Top Selling Plants
            </h2>
          </div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20 max-w-5xl mx-auto mt-20">
          {plants.map((plant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-[#202E25]/80 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] flex flex-col mt-16"
            >
              {/* Plant Image over top border */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-56 h-56 pointer-events-none drop-shadow-2xl">
                <img 
                  src={plant.image} 
                  alt={plant.name} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Spacer for the absolute image */}
              <div className="h-24"></div>

              <h3 className="text-lg font-medium text-white/90 mb-2 mt-4">{plant.name}</h3>
              <p className="text-[13px] text-gray-400/90 leading-snug mb-5 flex-grow pr-2">
                {plant.description}
              </p>
              
              <div className="flex justify-between items-center mt-auto">
                <div className="text-white/90 text-lg">{plant.price}</div>
                <button className="w-9 h-9 rounded-xl border border-white/20 flex items-center justify-center hover:bg-white/10 text-white/70 transition-colors">
                  <ShoppingBag size={16} strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
