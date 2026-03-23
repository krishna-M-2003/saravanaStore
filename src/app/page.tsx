import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Features />
      <About />
      <Products />
      <Gallery />
      <Contact />
    </main>
  );
}
