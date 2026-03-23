"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Heart } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    { value: "15+", label: "Years of Trust", icon: <Award className="w-6 h-6 stroke-[1px]" /> },
    { value: "50k+", label: "Happy Customers", icon: <Heart className="w-6 h-6 stroke-[1px]" /> },
    { value: "100%", label: "Quality Guaranteed", icon: <ShieldCheck className="w-6 h-6 stroke-[1px]" /> },
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Image & Brand Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* The Cinematic Store Image */}
            <div className="relative aspect-[4/5] overflow-hidden border border-primary/10">
              <Image
                src="/about_luxury_store.png"
                alt="Sri Saravana Stores interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
              
              {/* Elegant floating branded badge */}
              <div className="absolute bottom-8 right-8 bg-white shadow-2xl p-6 md:p-8 flex flex-col items-center justify-center border border-white/40">
                <Image 
                  src="/top_logo.png" 
                  alt="Sri Saravana Stores Logo" 
                  width={150}
                  height={80}
                  className="h-16 md:h-20 w-auto object-contain flex-shrink-0 drop-shadow-sm mb-3"
                />
                <p className="text-primary font-serif font-bold text-sm text-center leading-tight mb-2">Sri Saravana Stores</p>
                <div className="w-8 h-[1px] bg-primary mb-2" />
                <p className="text-primary font-sans font-bold uppercase tracking-[0.3em] text-[10px] text-center">Serving<br/>Thevaram</p>
              </div>
            </div>
          </motion.div>

          {/* Typography Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div>
              <h2 className="text-primary font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-6">Our Heritage</h2>
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-8">
                A legacy of <br className="hidden md:block"/>
                <span className="italic font-light text-primary-dark">authentic quality.</span>
              </h3>
              
              <div className="space-y-6 text-foreground/70 font-sans font-light leading-relaxed text-lg max-w-xl">
                <p>
                  Established in the heart of Thevaram, Sri Saravana Stores is more than a supermarket—it is a cornerstone of the community. We embarked on this journey with a singular vision: to bring the finest array of global and local produce directly to your neighborhood.
                </p>
                <p>
                  Every item on our shelves is scrutinized for uncompromising quality. From farm-fresh organic vegetables to rare culinary ingredients, our curation process ensures that only the exceptional reaches your home. Shopping here is an experience rooted in respect, luxury, and warmth.
                </p>
              </div>
            </div>

            {/* Premium Stat Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-primary/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-start gap-4">
                  <div className="text-accent">{stat.icon}</div>
                  <div>
                    <div className="font-serif text-3xl text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs uppercase tracking-[0.1em] text-foreground/50 font-semibold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
