"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export const dynamic = "force-dynamic";

export default function Page() {
  const router = useRouter();

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

  const handleBack = () => {
    router.push("/#projects");
  };

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* BACK */}
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-10"
        >
          ← Back to Projects
        </button>

        {/* HEADER */}
        <p className="text-orange-400 font-medium mb-3">
          CONTRACT · FULL-STACK DEVELOPER
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          GridGuard (PLN) – Tree Risk Monitoring Application
        </h1>

        <p className="text-zinc-400 mb-10">
          Bandung, West Java · Sep 2022 – Jan 2026
        </p>

        {/* CAROUSEL */}
        <div className="relative mb-16">

          <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black">
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
        <div className="grid md:grid-cols-2 gap-12">

          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-zinc-400">
              Mobile monitoring system for PLN field operations to manage tree risk inspections.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <p className="text-zinc-400">
              Flutter · Dart · Firebase · REST API · Field Monitoring
            </p>
          </section>

        </div>

        {/* IMPACT */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Impact</h2>

          <div className="space-y-4 text-zinc-400">
            <div>
              <p className="text-white font-medium">Field Inspection System</p>
              <p>Improved inspection workflow efficiency.</p>
            </div>

            <div>
              <p className="text-white font-medium">Real-time Sync</p>
              <p>Enabled reporting with Firebase.</p>
            </div>

            <div>
              <p className="text-white font-medium">Operational Visibility</p>
              <p>Better monitoring of maintenance tasks.</p>
            </div>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="text-zinc-400 max-w-3xl">
            Delivered a field monitoring system improving inspection efficiency and real-time reporting.
          </p>
        </section>

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