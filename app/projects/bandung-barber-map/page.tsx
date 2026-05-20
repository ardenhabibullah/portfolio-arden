"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

export default function Page() {
  const [from, setFrom] = useState<string | null>(null);

  // SAFE read query param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFrom(params.get("from"));
  }, []);

  const backHref = from === "all" ? "/projects/all" : "/#projects";

  const images = ["/project6.webp", "/barber1.png"];

  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState<string | null>(null);

  // ✅ optimize re-render function
  const next = useCallback(() => {
    setIndex((p) => (p + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  }, []);

  return (
    <main className="bg-black text-white min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto">

        {/* BACK */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-400 hover:text-white mb-8 sm:mb-10 transition"
        >
          ← Back
        </Link>

        {/* HEADER */}
        <p className="text-pink-400 font-medium mb-2 sm:mb-3 text-xs sm:text-sm">
          Mapping Platform
        </p>

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight mb-3 sm:mb-4">
          Greater Bandung Barber & Salon Map
        </h1>

        <p className="text-zinc-400 mb-8 sm:mb-10 max-w-2xl text-sm sm:text-base leading-relaxed">
          Interactive web platform that displays barber shops and salons across Greater Bandung.
        </p>

        {/* CAROUSEL */}
        <div className="relative mb-12 sm:mb-16">

          {/* IMAGE */}
          <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              src={images[index]}
              onClick={() => setZoom(images[index])}
              className="w-full h-full object-cover cursor-zoom-in transition duration-300 hover:scale-[1.02]"
              alt="project"
              loading="lazy"
            />
          </div>

          {/* NAV BUTTONS */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 transition px-2 sm:px-3 py-1 sm:py-2 rounded-full text-white text-sm sm:text-base"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 transition px-2 sm:px-3 py-1 sm:py-2 rounded-full text-white text-sm sm:text-base"
          >
            →
          </button>

          {/* INDICATOR */}
          <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-4 text-[10px] sm:text-xs text-zinc-300 bg-black/60 px-2 sm:px-3 py-1 rounded-full">
            {index + 1} / {images.length}
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Overview
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              I built an interactive web platform that displays barber shops and salons across Greater Bandung.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Tech Stack
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Next.js · TypeScript · Tailwind CSS · Leaflet Maps
            </p>
          </section>

        </div>

        {/* ZOOM MODAL */}
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