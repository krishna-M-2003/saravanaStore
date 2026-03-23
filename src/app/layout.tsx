import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: "Sri Saravana Stores - Thevaram | Premium Supermarket",
  description: "Your Trusted Supermarket in Thevaram. Fresh Groceries, Daily Essentials, Affordable Prices, and Friendly Service. Visit Sri Saravana Stores today!",
  keywords: "Supermarket in Thevaram, Grocery store near me, Best store in Thevaram, Sri Saravana Stores, groceries, Thevaram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased smooth-scroll`}
    >
      <body className={`min-h-full flex flex-col font-sans ${inter.variable} ${playfair.variable} selection:bg-primary/20 selection:text-primary-dark`}>
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
