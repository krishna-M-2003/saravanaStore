"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Immersive Cinematic Background */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/luxury_hero.png')", backgroundPosition: "center 40%" }}
      />
      
      {/* Luxury Vignette/Overlay - Darker for editorial mood */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-accent" />
            <span className="text-accent font-sans text-xs uppercase tracking-[0.3em] font-semibold">
              Thevaram's Premier Market
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8"
          >
            The Art <br/>
            <span className="italic font-light text-white/90">of Fresh.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 font-sans font-light max-w-xl mb-12 leading-relaxed"
          >
            Curating the finest organic produce, artisan goods, and daily essentials for a truly elevated culinary lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a 
              href="#products" 
              className="inline-flex items-center justify-center px-10 py-5 border border-accent/80 text-accent bg-transparent hover:bg-accent hover:text-primary-dark transition-all duration-300 font-sans text-sm uppercase tracking-[0.2em]"
            >
              Explore Collection
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-10 py-5 text-white underline-offset-8 decoration-white/30 hover:decoration-white transition-all duration-300 font-sans text-sm uppercase tracking-[0.2em]"
            >
              Visit the Market
            </a>
          </motion.div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "circInOut" }}
            className="w-full h-1/2 bg-accent absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
