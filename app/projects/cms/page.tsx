"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Page() {
  const [backHref, setBackHref] = useState("/#projects");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from");

    if (from === "all") {
      setBackHref("/projects/all");
    } else {
      setBackHref("/#projects"); // default = HOME
    }
  }, []);

  const images = [
    "/bogart1.png",
    "/cms1.png",
    "/cms12.png",
    "/cms11.png",
    "/bogart2.png",
    "/bogart3.png",
    "/cms2.png",
    "/cms3.png",
    "/cms4.png",
    "/cms5.png",
    "/cms6.png",
    "/cms7.png",
    "/cms8.png",
    "/cms9.png",
    "/cms10.png",
  ];

  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState<string | null>(null);

  const next = () => setIndex((p) => (p + 1) % images.length);

  const prev = () =>
    setIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  return (
    <main className="bg-black text-white min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto">

        {/* BACK */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-8 sm:mb-10 transition"
        >
          ← Back 
        </Link>

        {/* HEADER */}
        <p className="text-yellow-400 font-medium mb-3 text-sm sm:text-base">
          INTERNSHIP · FULL-STACK DEVELOPER
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          CMS-Driven Company Profile Platform
        </h1>

        <p className="text-zinc-400 mb-8 sm:mb-10 text-sm sm:text-base">
          PT Bogart Inti Perkasa – Jul 2025 – Sep 2025
        </p>

        {/* CAROUSEL */}
        <div className="relative mb-12 sm:mb-16">

          <div className="w-full h-[240px] sm:h-[340px] md:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              src={images[index]}
              onClick={() => setZoom(images[index])}
              className="w-full h-full object-contain cursor-zoom-in"
              alt="cms project"
            />
          </div>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full text-white"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full text-white"
          >
            →
          </button>

          <div className="absolute bottom-3 right-4 text-xs text-zinc-300 bg-black/60 px-3 py-1 rounded-full">
            {index + 1} / {images.length}
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">

          <div className="space-y-8 sm:space-y-10">

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Overview</h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Developed a CMS-driven company profile platform for an industrial company
                to improve digital presence and enable structured product content management.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Tech Stack</h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Laravel · Filament · PHP · Vue.js · Tailwind CSS · CMS Architecture · SEO · Git
              </p>
            </section>

          </div>

          <div className="space-y-8 sm:space-y-10">

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Impact</h2>

              <div className="space-y-5 text-zinc-400 text-sm sm:text-base">

                <div>
                  <p className="text-white font-medium">Centralized CMS System</p>
                  <p>Reduced content update time and minimized developer dependency.</p>
                </div>

                <div>
                  <p className="text-white font-medium">Structured Data</p>
                  <p>Improved consistency of product information across pages.</p>
                </div>

                <div>
                  <p className="text-white font-medium">SEO Improvement</p>
                  <p>Increased searchable content through CMS-driven publishing.</p>
                </div>

              </div>
            </section>

          </div>
        </div>

        {/* SUMMARY */}
        <section className="mt-12 sm:mt-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Summary</h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
            Built a scalable CMS platform that improved efficiency, content structure,
            and SEO performance for company profile management.
          </p>
        </section>

        {/* ZOOM */}
        {zoom && (
          <div
            onClick={() => setZoom(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          >
            <img
              src={zoom}
              className="max-w-full max-h-full object-contain rounded-lg"
              alt="zoom"
            />
          </div>
        )}

      </div>
    </main>
  );
}