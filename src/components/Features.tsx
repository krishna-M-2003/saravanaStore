"use client";

import { motion } from "framer-motion";
import { Leaf, Package, BadgePercent, HeartHandshake } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 stroke-[1px]" />,
      title: "Artisanal Produce",
      desc: "Sourced with extreme care directly from local organic farms to your table.",
    },
    {
      icon: <Package className="w-8 h-8 stroke-[1px]" />,
      title: "Curated Essentials",
      desc: "A hand-selected collection of premium pantry staples and rare household finds.",
    },
    {
      icon: <BadgePercent className="w-8 h-8 stroke-[1px]" />,
      title: "Unmatched Value",
      desc: "Luxury quality and service maintained faithfully at competitive community pricing.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 stroke-[1px]" />,
      title: "Concierge Service",
      desc: "A deeply personalized shopping experience governed by tradition and trust.",
    },
  ];

  return (
    <section id="features" className="py-32 bg-background relative z-10 border-b border-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-6">Our Philosophy</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
              Where Quality <br/> <span className="italic text-primary-dark">meets precision.</span>
            </h3>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground/70 font-sans font-light max-w-sm"
          >
            We believe grocery shopping should be an experience of discovery, not a chore. Every aisle is a testament to our commitment to excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10 pl-px pt-px border border-primary/10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group bg-background p-12 hover:bg-primary/5 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-8 right-8 text-primary/10 font-serif text-6xl font-bold group-hover:text-primary/20 transition-colors duration-500 select-none">
                0{idx + 1}
              </div>
              
              <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-foreground mb-4 relative z-10">
                {feature.title}
              </h4>
              <p className="text-foreground/70 font-sans font-light leading-relaxed relative z-10">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
