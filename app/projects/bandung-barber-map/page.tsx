"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function PageClient() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const backHref = from === "all" ? "/projects/all" : "/#projects";

  const project = {
    slug: "bandung-barber-map",
    img: "/project6.webp",
    tag: "Mapping Platform",
    title: "Greater Bandung Barber & Salon Map",
    desc:
      "Interactive web platform that displays barber shops and salons across Greater Bandung.",
    color: "text-pink-400",
  };

  const images = ["/project6.webp", "/barber1.png"];

  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState<string | null>(null);

  const next = () => setIndex((p) => (p + 1) % images.length);

  const prev = () =>
    setIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* BACK BUTTON */}
        <Link
          href={backHref}
          className="text-sm text-zinc-400 hover:text-white mb-10 inline-block"
        >
          ← Back
        </Link>

        {/* HEADER */}
        <p className={`${project.color} font-medium mb-3`}>
          {project.tag}
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {project.title}
        </h1>

        <p className="text-zinc-400 mb-10 max-w-2xl">
          {project.desc}
        </p>

        {/* IMAGE CAROUSEL */}
        <div className="relative mb-16">
          <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              src={images[index]}
              onClick={() => setZoom(images[index])}
              className="w-full h-full object-cover cursor-zoom-in"
              alt="project"
            />
          </div>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full"
          >
            →
          </button>

          <div className="absolute bottom-3 right-4 text-xs bg-black/60 px-3 py-1 rounded-full">
            {index + 1} / {images.length}
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-zinc-400 leading-relaxed">
              I built an interactive web platform that displays barber shops and salons across Greater Bandung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <p className="text-zinc-400">
              Next.js · TypeScript · Tailwind CSS · Leaflet Maps
            </p>
          </section>
        </div>

        {/* ZOOM */}
        {zoom && (
          <div
            onClick={() => setZoom(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          >
            <img
              src={zoom}
              className="max-w-[90%] max-h-[90%] object-contain"
              alt="zoom"
            />
          </div>
        )}
      </div>
    </main>
  );
}