"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link"; // We will use img tags for now to avoid Next.js Image config issues if any, or next/image. Let's use standard img for simplicity

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Earth's Exhale
          </h1>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
            Our carefully curated collection of plants that brings the outdoors in, 
            transforming your living space into an inviting oasis.
          </p>
          
          <div className="flex items-center gap-6">
            <button className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors font-medium">
              Buy Now
            </button>
            <button className="flex items-center gap-3 text-white group hover:text-primary transition-colors">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-primary transition-colors">
                <Play size={18} className="ml-1" fill="currentColor" />
              </div>
              <span className="font-medium text-sm">See Video</span>
            </button>
          </div>
          
          {/* Review Floating Card (Bottom Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 glass-card p-4 flex gap-4 items-start max-w-sm"
          >
            <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden flex-shrink-0">
               {/* Placeholder avatar */}
               <img src="https://ui-avatars.com/api/?name=S+R&background=random" alt="User" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex text-yellow-400 text-sm mb-1">
                {'★'.repeat(5)}
              </div>
              <p className="text-xs text-gray-300">
                Our plant has been a game-changer for our indoor garden. Highly recommend!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content / Main Image Area */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Main big plant image removed as per user request */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-[500px] h-[500px] z-10"
          >
            <div className="absolute inset-0 bg-green-500/10 rounded-full blur-3xl opacity-30"></div>
          </motion.div>

          {/* Floating Product Card (Top Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-10 right-0 glass-card p-4 w-64 z-20 hidden md:block mt-12"
          >
            <div className="relative h-24 bg-white/5 rounded-xl mb-4 flex items-center justify-center">
              <img 
                src="/flower/Rose Gold Feminine Calligraphy Monogram Logo(15) 3.png" 
                alt="Aglaonema" 
                className="absolute -top-20 w-48 h-48 object-contain drop-shadow-2xl"
              />
            </div>
            <p className="text-xs text-gray-400 mb-1">Indoor Plant</p>
            <h3 className="text-white font-medium mb-3">Aglaonema plant</h3>
            <div className="flex justify-between items-center">
              <button className="border border-white/30 text-white text-xs px-4 py-1.5 rounded-full hover:bg-white/10 transition-colors">
                Buy Now
              </button>
              <button className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10">
                <span className="text-white">→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
