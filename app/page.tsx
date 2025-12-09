'use client';

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth bg-background selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}