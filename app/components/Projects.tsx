"use client";

import { useState, useMemo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import ImageModal from "./ImageModal";

type Project = {
  img: string;
  tag: string;
  title: string;
  desc: string;
  color: string;
};

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const baseProjects: Project[] = useMemo(
    () => [
      {
        img: "/project1.png",
        tag: "CMS",
        title: "CMS-Driven Company Website",
        desc: "Modern company profile platform with CMS architecture, SEO-ready publishing, and structured product management.",
        color: "text-yellow-400",
      },
      {
        img: "/project2.png",
        tag: "Monitoring System",
        title: "Diaspora Monitoring Platform",
        desc: "Offline-first emergency coordination system with realtime location tracking and push notifications.",
        color: "text-cyan-400",
      },
      {
        img: "/project3.jpg",
        tag: "Security Automation",
        title: "DevSecOps CI/CD Security Framework",
        desc: "CI/CD integrated mobile security testing pipeline using Jenkins, Docker, SAST, and DAST workflows.",
        color: "text-green-400",
      },
    ],
    []
  );

  // 🔥 duplicate biar loop tetap smooth
  const projects = useMemo(
    () => [...baseProjects, ...baseProjects, ...baseProjects],
    [baseProjects]
  );

  const handleOpenImage = useCallback((img: string) => {
    setSelectedImage(img);
  }, []);

  const activeProject = baseProjects[activeIndex % baseProjects.length];

  return (
    <section className="max-w-5xl mx-auto py-16 md:py-24 px-4 sm:px-6">

      <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* HEADER */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Selected Projects
        </h2>

        <p className="text-zinc-500 text-sm md:text-base">
          Explore selected engineering & product work
        </p>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
        }}

        loop={true}
        centeredSlides={true}
        watchSlidesProgress={true}
        loopAdditionalSlides={3}

        spaceBetween={25}
        speed={900}

        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}

        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.05 },
          1024: { slidesPerView: 1.1 },
          1280: { slidesPerView: 1.2 },
        }}
      >

        {projects.map((project, i) => (
          <SwiperSlide key={`${project.img}-${i}`} className="h-auto">

            {/* CARD */}
            <div className="
              w-full max-w-4xl mx-auto
              bg-zinc-900 border border-zinc-800
              rounded-3xl overflow-hidden shadow-xl
              group
            ">

              {/* IMAGE (🔥 HEIGHT DITAMBAH DIKIT) */}
              <div className="relative overflow-hidden">

                <img
                  src={project.img}
                  alt={project.title}
                  onClick={() => handleOpenImage(project.img)}
                  className="
                    w-full

                    /* 🔥 FIX: lebih tinggi sedikit biar tidak ke-crop */
                    aspect-[21/11]

                    object-cover object-center

                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.06]

                    cursor-zoom-in
                  "
                />

                <div className="
                  absolute inset-0
                  bg-gradient-to-t from-black/40 via-transparent to-transparent
                " />

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      {/* INFO PANEL */}
      <div className="mt-8 text-center">

        <p className={`${activeProject.color} text-sm font-semibold`}>
          {activeProject.tag}
        </p>

        <h3 className="text-2xl md:text-4xl font-bold mt-2 mb-3">
          {activeProject.title}
        </h3>

        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
          {activeProject.desc}
        </p>

        <button className="
          mt-6 px-6 py-2
          bg-white text-black
          rounded-full font-medium
          hover:bg-zinc-200 transition
        ">
          Explore Project
        </button>

      </div>

    </section>
  );
}