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
      setBackHref("/#projects");
    }
  }, []);

  const images = [
    "/pln1.jpeg",
    "/pln2.jpg",
    "/pln3.jpg",
    "/pln4.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState<string | null>(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

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
        <p className="text-orange-400 font-medium mb-3 text-sm sm:text-base">
          CONTRACT · FULL-STACK DEVELOPER
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          GridGuard (PLN) – Tree Risk Monitoring Application
        </h1>

        <p className="text-zinc-400 mb-8 sm:mb-10 text-sm sm:text-base max-w-2xl">
          Bandung, West Java · Sep 2022 – Jan 2026
        </p>

        {/* CAROUSEL */}
        <div className="relative mb-14 sm:mb-16">

          <div className="w-full h-[260px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              src={images[index]}
              onClick={() => setZoom(images[index])}
              className="w-full h-full object-contain cursor-zoom-in"
              alt="pln project"
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

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              Overview
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Mobile monitoring system for PLN field operations.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              Tech Stack
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Flutter · Dart · Firebase · REST API
            </p>
          </section>

        </div>

        {/* IMPACT */}
        <section className="mt-14 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Impact
          </h2>

          <div className="space-y-4 text-zinc-400 text-sm sm:text-base">

            <div>
              <p className="text-white font-medium">Field Inspection</p>
              <p>Improved workflow efficiency.</p>
            </div>

            <div>
              <p className="text-white font-medium">Real-time Sync</p>
              <p>Firebase reporting system.</p>
            </div>

            <div>
              <p className="text-white font-medium">Visibility</p>
              <p>Better operational monitoring.</p>
            </div>

          </div>
        </section>

        {/* SUMMARY */}
        <section className="mt-16 sm:mt-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Summary
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-3xl">
            Delivered a monitoring system improving inspection efficiency.
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