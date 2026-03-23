"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      title: "Address",
      details: ["12, Main Bazar,", "Thevaram, Tamil Nadu 625530"],
    },
    {
      icon: <Phone className="w-5 h-5 text-accent" />,
      title: "Phone",
      details: ["+91 95665 20607"],
    },
    {
      icon: <Clock className="w-5 h-5 text-accent" />,
      title: "Working Hours",
      details: ["Monday - Sunday", "6:00 AM - 9:00 PM"],
    },
    {
      icon: <Mail className="w-5 h-5 text-accent" />,
      title: "Email",
      details: ["contact@srisaravanastores.com"],
    },
  ];

  return (
    <section id="contact" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-primary font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-6"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-foreground"
          >
            Visit the Market
          </motion.h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <div className="bg-primary/5 p-10 h-full border border-primary/10">
              <h4 className="text-2xl font-serif text-foreground mb-10">Concierge Info</h4>
              <div className="space-y-10">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center flex-shrink-0 bg-background">
                      {info.icon}
                    </div>
                    <div>
                      <h5 className="font-serif font-bold text-foreground mb-1 tracking-wide">{info.title}</h5>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-foreground/70 font-sans font-light text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-14 space-y-4">
                <a
                  href="tel:+919566520607"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 font-sans font-semibold uppercase tracking-[0.15em] text-xs hover:bg-primary-dark transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919566520607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] bg-transparent hover:bg-[#25D366] hover:text-white py-4 font-sans font-semibold uppercase tracking-[0.15em] text-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            <div className="w-full h-[500px] lg:h-full min-h-[500px] border border-primary/10 overflow-hidden relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <iframe
                  src="https://maps.google.com/maps?q=Sri+Saravana+Stores,+Thevaram,+Tamil+Nadu+625530&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Sri Saravana Stores Location"
                />
              </motion.div>
            </div>
            {/* Open in Map Button */}
            <a
              href="https://maps.app.goo.gl/V8kLQaxFH3QiWj4D7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 bg-background border border-primary/20 text-foreground hover:bg-primary hover:text-white transition-colors duration-300 font-sans font-semibold text-xs tracking-[0.15em] uppercase"
            >
              Open in Google Maps <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
