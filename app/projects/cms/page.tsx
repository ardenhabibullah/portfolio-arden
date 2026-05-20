"use client";

import Link from "next/link";
import { useState } from "react";

export const dynamic = "force-dynamic";

export default function Page() {
  // ❌ REMOVED useSearchParams (fix Vercel build crash)

  const from = null;

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

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // ✅ SAFE BACK LOGIC (no query params)
  const backHref = "/#projects";

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* BACK */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-10"
        >
          ← Kembali
        </Link>

        {/* HEADER */}
        <p className="text-yellow-400 font-medium mb-3">
          INTERNSHIP · FULL-STACK DEVELOPER
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          CMS-Driven Company Profile Platform
        </h1>

        <p className="text-zinc-400 mb-10">
          PT Bogart Inti Perkasa – Jul 2025 – Sep 2025
        </p>

        {/* CAROUSEL */}
        <div className="relative mb-16">

          <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              src={images[index]}
              onClick={() => setZoom(images[index])}
              className="w-full h-full object-contain cursor-zoom-in"
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

          <div className="absolute bottom-3 right-4 text-xs text-zinc-300 bg-black/60 px-3 py-1 rounded-full">
            {index + 1} / {images.length}
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-zinc-400 leading-relaxed">
                Developed a CMS-driven company profile platform for an industrial water pump distributor
                to strengthen digital presence and enable structured product content management with SEO-ready workflow.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <p className="text-zinc-400 leading-relaxed">
                Laravel · Filament · PHP · Vue.js · JavaScript · Tailwind CSS · CMS Architecture · SEO · Git
              </p>
            </section>

          </div>

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-bold mb-4">Impact</h2>

              <div className="space-y-6 text-zinc-400">

                <div>
                  <p className="text-white font-medium">Centralized CMS System</p>
                  <p>Reduced content update time from days to same-day and cut developer dependency up to ~90%.</p>
                </div>

                <div>
                  <p className="text-white font-medium">Structured Product Data</p>
                  <p>Reduced spec inconsistency by ~50% through standardized content modeling.</p>
                </div>

                <div>
                  <p className="text-white font-medium">SEO Growth</p>
                  <p>Increased indexable pages by 3–5× via CMS-driven publishing workflow.</p>
                </div>

              </div>
            </section>

          </div>
        </div>

        {/* SUMMARY */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            Delivered a scalable CMS platform that improved operational efficiency,
            structured product data, and strengthened digital presence through SEO-driven architecture.
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
            />
          </div>
        )}

      </div>
    </main>
  );
}