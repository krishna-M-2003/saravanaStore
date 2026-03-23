"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-primary/10 py-3 shadow-sm"
          : "bg-gradient-to-b from-black/50 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center p-1.5 flex-shrink-0 shadow-lg border border-primary/5">
              <img 
                src="/pro_logo.png" 
                alt="Sri Saravana Stores Logo" 
                className="w-full h-full object-contain mix-blend-multiply flex-shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/100x100?text=Logo';
                }} 
              />
            </div>
            <span className={`font-serif text-xl sm:text-2xl tracking-wide flex-shrink-0 transition-colors duration-500 ${isScrolled ? "text-primary-dark" : "text-white drop-shadow-md"}`}>
              Sri Saravana Stores
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-sans uppercase tracking-[0.15em] relative group transition-colors duration-300 ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Quick Contact Badge */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919566520607"
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all duration-300 font-sans text-xs uppercase tracking-[0.1em] font-semibold ${
                isScrolled
                  ? "border-primary text-primary hover:bg-primary hover:text-white"
                  : "border-white/50 text-white hover:bg-white hover:text-primary-dark"
              }`}
            >
              095665 20607
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-primary/10 overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground text-sm uppercase tracking-[0.15em] font-medium p-3 hover:bg-primary/5 rounded-lg transition-colors border-l-2 border-transparent hover:border-accent"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+919566520607"
                className="mt-4 flex items-center justify-center gap-2 bg-primary text-white p-4 rounded-xl font-bold uppercase tracking-widest text-xs"
              >
                Call: 095665 20607
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
