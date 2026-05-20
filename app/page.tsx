import Hero from "./components/Hero";
import TechStack from "./components/TechStackWrapper";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <Hero />

      {/* TECH STACK */}
      <TechStack />

      {/* PROJECTS */}
      <Projects />

      {/* EXPERIENCE */}
      <Experience />

      {/* CONTACT */}
      <Contact />

    </main>
  );
}