"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#051c0d] text-white/80 pt-20 border-t border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="#home" className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center p-1.5 flex-shrink-0 shadow-lg">
                <Image 
                  src="/pro_logo.png" 
                  alt="Sri Saravana Stores Logo" 
                  width={56}
                  height={56}
                  className="w-full h-full object-contain mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="font-serif italic text-2xl tracking-tight text-white hover:text-accent transition-colors">
                Sri Saravana
              </span>
            </Link>
            <p className="text-white/60 font-sans font-light leading-relaxed text-balance pr-4 text-sm mt-6">
              Your trusted neighborhood purveyor of fine organic produce, global pantry staples, and daily essentials.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary-dark transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary-dark transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary-dark transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Our Story', 'Collections', 'Gallery', 'Visit Us'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-accent transition-colors flex items-center gap-2 group text-sm font-light">
                    <span className="w-2 h-px bg-accent/50 group-hover:bg-accent group-hover:w-4 transition-all duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-8">Collections</h4>
            <ul className="space-y-4">
              {['Fresh Harvest', 'Artisan Bakery', 'Rare Spices', 'Home Boutique', 'Personal Care'].map((link) => (
                <li key={link}>
                  <a href="#products" className="hover:text-accent transition-colors flex items-center gap-2 group text-sm font-light">
                    <span className="w-2 h-px bg-accent/50 group-hover:bg-accent group-hover:w-4 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-8">The Insider</h4>
            <p className="text-white/60 font-sans font-light text-sm mb-6">
              Subscribe to receive updates on rare seasonal arrivals and exclusive community events.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors text-sm font-light"
              />
              <button 
                type="submit" 
                className="w-full bg-accent text-primary-dark font-sans font-semibold tracking-[0.2em] uppercase text-xs py-3.5 hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-white/40">
          <p>© {new Date().getFullYear()} Sri Saravana Stores. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
