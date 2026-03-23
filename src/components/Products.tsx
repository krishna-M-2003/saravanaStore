"use client";

import { motion } from "framer-motion";

export default function Products() {
  const categories = [
    {
      title: "Fresh Harvest",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600&h=800",
      description: "Daily organics, hand-selected for pristine quality.",
    },
    {
      title: "Pantry Staples",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=600&h=800",
      description: "Rare finds, local sweets, and international snacks.",
    },
    {
      title: "Finest Cellar",
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=600&h=800",
      description: "Artisan teas, rich coffees, and bespoke beverages.",
    },
    {
      title: "Home & Care",
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=600&h=800",
      description: "Gentle, eco-conscious essentials for everyday living.",
    },
  ];

  return (
    <section id="products" className="py-32 bg-background relative border-b border-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-primary font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-6">Our Collections</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">Curated Categories</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative h-[500px] overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              
              {/* Delicate Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute inset-4 border border-white/20 z-10 transition-transform duration-700 scale-95 group-hover:scale-100" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h4 className="text-2xl font-serif text-white mb-3 tracking-wide">{category.title}</h4>
                  <p className="text-white/80 font-sans font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="w-8 h-[1px] bg-accent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-16 delay-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
