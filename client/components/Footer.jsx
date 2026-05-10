"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto mb-16">
          
          {/* Column 1: Logo & Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <img src="/flower/plant 2.png" alt="FloraVision Logo" className="w-10 h-10 object-contain drop-shadow-md" />
              <span className="font-semibold text-2xl tracking-tight text-white">FloraVision.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              This is a place to order plants for a more serene living. We have the best plants and we deliver them directly to your home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <span className="text-sm font-bold">tw</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#types" className="hover:text-white transition-colors">Plant Types</Link></li>
              <li><Link href="#plant" className="hover:text-white transition-colors">Plant</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">For Every Update</h4>
            <div className="flex bg-[#2A3B31] rounded-full overflow-hidden border border-white/10 mt-2">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="bg-transparent text-white px-4 py-2 outline-none w-full text-sm placeholder-gray-500"
              />
              <button className="bg-white text-black px-6 py-2 text-sm font-semibold hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex justify-end max-w-6xl mx-auto border-t border-white/10 pt-8 mt-12">
          <p className="text-xs text-gray-500">
            FloraVision © All right reserve
          </p>
        </div>
      </div>
    </footer>
  );
}
