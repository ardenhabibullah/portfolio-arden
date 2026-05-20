"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // ✅ TAMBAHAN WAJIB

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import ImageModal from "./ImageModal";

import type { Swiper as SwiperType } from "swiper";

type Project = {
  slug: string;
  img: string;
  tag: string;
  title: string;
  desc: string;
  color: string;
};

export default function Projects() {
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const baseProjects: Project[] = useMemo(
    () => [
      {
        slug: "cms",
        img: "/project1.png",
        tag: "CMS Platform",
        title: "CMS-Driven Company Website",
        desc: "Modern company profile platform with CMS architecture, SEO-ready publishing, and structured product management.",
        color: "text-yellow-400",
      },
      {
        slug: "diaspora",
        img: "/project2.png",
        tag: "Monitoring System",
        title: "Diaspora Monitoring Platform",
        desc: "Offline-first emergency coordination system with realtime location tracking and push notifications.",
        color: "text-cyan-400",
      },
      {
        slug: "devsecops",
        img: "/project3.jpg",
        tag: "Security Automation",
        title: "DevSecOps CI/CD Security Framework",
        desc: "CI/CD integrated mobile security testing pipeline using Jenkins, Docker, SAST, and DAST workflows.",
        color: "text-green-400",
      },
      {
        slug: "bip-finance",
        img: "/bogart4.png",
        tag: "Finance Platform",
        title: "BIP Finance Platform",
        desc: "Internal financial management system for transaction processing and reporting optimization.",
        color: "text-blue-400",
      },
      {
        slug: "gridguard",
        img: "/pln1.jpeg",
        tag: "Field Monitoring System",
        title: "GridGuard (PLN) – Tree Risk Monitoring Application",
        desc: "Mobile field monitoring system for PLN to manage tree risk inspections and preventive maintenance near power lines.",
        color: "text-orange-400",
      },
      {
        slug: "bandung-barber-map",
        img: "/project6.webp",
        tag: "Mapping Platform",
        title: "Greater Bandung Barber & Salon Map",
        desc: "I built an interactive website that maps barber shops and salons across Greater Bandung.",
        color: "text-pink-400",
      },
      {
        slug: "borcelle-beautyverse",
        img: "/project8.png",
        tag: "Figma Design",
        title: "Borcelle Beautyverse Web Design",
        desc: "Beauty recommendation concept design.",
        color: "text-rose-400",
      },
      {
        slug: "classcompanion",
        img: "/project9.png",
        tag: "Product Design",
        title: "ClassCompanion – Study Life Optimizer",
        desc: "Productivity design concept for students.",
        color: "text-emerald-400",
      },
    ],
    []
  );

  const projects = baseProjects;

  const handleOpenImage = useCallback((img: string) => {
    setSelectedImage(img);
  }, []);

  const handleExplore = (slug: string) => {
    sessionStorage.setItem("scroll-position", window.scrollY.toString());
    router.push(`/projects/${slug}`);
  };

  const activeProject =
    baseProjects[activeIndex % baseProjects.length];

  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto py-16 md:py-24 px-4 sm:px-6"
    >
      {/* IMAGE MODAL */}
      <ImageModal
        src={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

     {/* HEADER */}
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10 md:mb-14">

  {/* LEFT TEXT */}
  <div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
      Selected Projects
    </h2>

    <p className="text-zinc-500 text-sm md:text-base">
      Explore selected engineering & product work
    </p>
  </div>

  {/* RIGHT BUTTON */}
  <Link
    href="/projects/all"
    className="
      w-fit
      self-start sm:self-auto
      px-4 sm:px-5 py-2
      bg-white text-black
      rounded-full text-xs sm:text-sm font-medium
      hover:bg-zinc-200 transition
      whitespace-nowrap
    "
  >
    View All Projects →
  </Link>

</div>

      {/* SWIPER WRAPPER */}
      <div className="relative">

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black text-white px-3 py-2 rounded-full"
        >
          ←
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black text-white px-3 py-2 rounded-full"
        >
          →
        </button>

        <div className="absolute top-3 right-3 z-10 bg-black/60 px-3 py-1 rounded-full text-xs text-white">
          Project {activeIndex + 1} / {baseProjects.length}
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
          loop
          centeredSlides
          watchSlidesProgress
          spaceBetween={25}
          speed={900}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex)
          }
        >
          {projects.map((project) => (
            <SwiperSlide key={project.slug}>
              <div className="w-full max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl group">

                <img
                  src={project.img}
                  alt={project.title}
                  onClick={() => handleOpenImage(project.img)}
                  className="w-full aspect-[21/11] object-cover cursor-zoom-in"
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
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

        <button
          onClick={() => handleExplore(activeProject.slug)}
          className="inline-flex mt-6 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition"
        >
          Explore Project
        </button>
      </div>

    </section>
  );
}