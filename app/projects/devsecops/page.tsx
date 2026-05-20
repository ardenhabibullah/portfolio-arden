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
    "/project3.jpg",
    "/devsecops2.jpg",
    "/devsecops3.jpg",
    "/devsecops5.png",
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
        <p className="text-green-400 font-medium mb-3">
          SECURITY AUTOMATION · DEVSECOPS ENGINEERING
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          DevSecOps CI/CD Security Framework
        </h1>

        <p className="text-zinc-400 mb-8 sm:mb-10 text-sm sm:text-base">
          Android security testing automation system integrating SAST & DAST into CI/CD pipelines
        </p>

        {/* IMAGE CAROUSEL */}
        <div className="relative mb-12 sm:mb-16">

          <div className="w-full h-[240px] sm:h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              src={images[index]}
              onClick={() => setZoom(images[index])}
              className="w-full h-full object-contain cursor-zoom-in transition"
              alt="project"
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

          <div className="space-y-8 sm:space-y-10">

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Overview</h2>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                Built an automated Android application security testing system.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Tech Stack</h2>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                Jenkins · Docker · CI/CD · SAST · DAST · OWASP · Git
              </p>
            </section>

          </div>

          <div className="space-y-8 sm:space-y-10">

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Impact</h2>

              <div className="space-y-5 text-zinc-400 text-sm sm:text-base">

                <div>
                  <p className="text-white font-medium">
                    CI/CD Security Automation
                  </p>
                  <p>
                    Automated vulnerability detection in pipeline.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    OWASP Compliance
                  </p>
                  <p>
                    Applied mobile security standards.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    Monitoring Dashboard
                  </p>
                  <p>
                    Real-time security tracking system.
                  </p>
                </div>

              </div>
            </section>

          </div>
        </div>

        {/* SUMMARY */}
        <section className="mt-12 sm:mt-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Summary</h2>
          <p className="text-zinc-400 max-w-3xl leading-relaxed text-sm sm:text-base">
            DevSecOps automation pipeline for Android security testing.
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
              className="max-w-full max-h-full object-contain"
              alt="zoom"
            />
          </div>
        )}

      </div>
    </main>
  );
}