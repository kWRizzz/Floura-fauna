"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      name: "Shelly Russel",
      initials: "SR",
      rating: 5,
      text: "Our plant has been a game-changer for our indoor garden. Highly recommend!"
    },
    {
      name: "Livia Rosson",
      initials: "LR",
      rating: 5,
      text: "I am incredibly pleased with my plant from this nursery. The vibrant leaves and overall health of the plant have completely transformed my home."
    },
    {
      name: "Carol Husin",
      initials: "CH",
      rating: 5,
      text: "I was looking for a plant to brighten up my living room and I found the perfect one here. The quality and the visual appeal are beyond what I expected."
    }
  ];

  return (
    <section className="py-20 relative z-10" id="reviews">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-block">
            <div className="absolute top-0 left-0 w-4 h-full border-t border-b border-l border-white/50"></div>
            <div className="absolute top-0 right-0 w-4 h-full border-t border-b border-r border-white/50"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white px-8 py-2">
              Customer Review
            </h2>
          </div>
        </div>

        {/* Grid of Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#202E25]/80 backdrop-blur-md border border-white/10 p-6 rounded-3xl flex flex-col"
            >
              {/* Top part: Avatar, Name, Stars */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-primary/20">
                   <img 
                      src={`https://ui-avatars.com/api/?name=${review.initials}&background=random&color=fff`} 
                      alt={review.name} 
                      className="w-full h-full object-cover" 
                   />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{review.name}</h4>
                  <div className="flex text-yellow-400 text-xs">
                    {'★'.repeat(review.rating)}
                  </div>
                </div>
              </div>
              
              {/* Bottom part: Text */}
              <p className="text-[13px] text-gray-400 leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
