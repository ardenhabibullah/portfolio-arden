"use client";

import { useEffect } from "react";

import Hero from "./components/Hero";
import TechStack from "./components/TechStackWrapper";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Page() {
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("scroll-position");

    if (savedScroll) {
      window.scrollTo({
        top: Number(savedScroll),
        behavior: "smooth",
      });

      sessionStorage.removeItem("scroll-position");
    }
  }, []);

  return (
    <main className="bg-black text-white overflow-hidden min-h-screen">
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}