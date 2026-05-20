"use client";

import { useEffect, useRef, useState } from "react";
import ImageModal from "./ImageModal";
import { motion } from "framer-motion";

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      tag: "Enterprise System Development",
      tagColor: "text-purple-400",
      title: "Full-stack Developer — PT Bogart Inti Perkasa",
      date: "Jul 2025 – Sep 2025",
      desc:
        "Developed and maintained internal enterprise systems including operational dashboards, workflow automation, and data management tools to improve company productivity and reporting efficiency.",
      images: ["/bogart1.png", "/bogart2.png", "/bogart3.png", "/bogart4.png"],
      layout: "grid",
    },
    {
      tag: "Mobile Monitoring System",
      tagColor: "text-yellow-400",
      title: "Full-stack Developer — GridGuard (PLN)",
      date: "Jan 2025 – Mar 2025",
      desc:
        "Developed a monitoring application for PLN field operations to manage tree-risk inspections and preventive maintenance activities near power line infrastructure using Flutter, Firebase, and REST APIs.",
      images: ["/pln1.jpeg", "/pln2.jpg", "/pln3.jpg", "/pln4.jpg"],
      layout: "horizontal",
    },
    {
      tag: "Disaster Monitoring Platform",
      tagColor: "text-cyan-400",
      title: "Full-stack Developer — Diaspora Monitoring System",
      date: "Oct 2025 – Dec 2025",
      desc:
        "Built an offline-first Progressive Web App (PWA) for emergency coordination, realtime location tracking, notifications, and community management.",
      images: ["/diaspora1.png", "/diaspora2.png", "/diaspora3.png", "/diaspora4.png"],
      layout: "grid",
    },
  ];

  // scroll spy (active section detection)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-32 px-6 relative">

      {/* MODAL */}
      <ImageModal
        src={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-24 text-center"
      >
        Experience
      </motion.h2>

      <div className="relative space-y-32">

        {/* TIMELINE LINE (desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 -translate-x-1/2" />

        {experiences.map((exp, i) => (
          <div
            key={i}
            data-index={i}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative ${
              i % 2 === 1 ? "lg:rtl" : ""
            }`}
          >

            {/* BULLET */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
              <div
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-cyan-400 scale-125"
                    : "bg-zinc-600"
                }`}
              />
            </div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className={`${exp.tagColor} font-semibold`}>
                {exp.tag}
              </p>

              <h3 className="text-3xl lg:text-4xl font-bold">
                {exp.title}
              </h3>

              <p className="text-zinc-500">
                {exp.date}
              </p>

              <p className="text-zinc-400 leading-7 lg:leading-8">
                {exp.desc}
              </p>
            </motion.div>

            {/* IMAGES */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full"
            >
              {exp.layout === "horizontal" ? (
                <div className="flex gap-5 overflow-x-auto scrollbar-hide py-2">
                  {exp.images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className="flex-shrink-0 cursor-zoom-in"
                    >
                      <img
                        src={img}
                        className="
                          h-[220px] sm:h-[260px] lg:h-[300px]
                          w-auto object-contain
                          rounded-2xl
                          hover:scale-[1.06]
                          transition duration-500
                          shadow-lg
                        "
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                  {exp.images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className="cursor-zoom-in flex items-center justify-center"
                    >
                      <img
                        src={img}
                        className="
                          w-full
                          h-[140px] sm:h-[180px] lg:h-[230px]
                          object-contain
                          hover:scale-[1.05]
                          transition duration-500
                        "
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
}