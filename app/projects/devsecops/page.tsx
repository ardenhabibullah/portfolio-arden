"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const backHref = from === "all" ? "/projects/all" : "/#projects";

  const images = [
    "/project3.jpg",
    "/devsecops2.jpg",
    "/devsecops3.jpg",
    "/devsecops5.png",
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
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* BACK */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-10"
        >
          ← Kembali ke Projects
        </Link>

        {/* HEADER */}
        <p className="text-green-400 font-medium mb-3">
          SECURITY AUTOMATION · DEVSECOPS ENGINEERING
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          DevSecOps CI/CD Security Framework
        </h1>

        <p className="text-zinc-400 mb-10">
          Android security testing automation system integrating SAST & DAST into CI/CD pipelines
        </p>

        {/* IMAGE CAROUSEL */}
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
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full text-white hover:bg-black"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full text-white hover:bg-black"
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
              <h2 className="text-2xl font-bold mb-4">
                Overview
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Built an automated Android application security testing system that integrates
                SAST and DAST tools directly into CI/CD pipelines to detect vulnerabilities early
                in the development lifecycle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Tech Stack
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Jenkins · Docker · CI/CD Pipelines · OWASP Mobile Top 10 · SAST · DAST · Android Security Testing · Automation · Bash · Git
              </p>
            </section>

          </div>

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Impact
              </h2>

              <div className="space-y-6 text-zinc-400">

                <div>
                  <p className="text-white font-medium">
                    CI/CD Security Automation
                  </p>
                  <p>
                    Integrated automated security scanning into Jenkins pipelines for continuous vulnerability detection during builds.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    OWASP Compliance Testing
                  </p>
                  <p>
                    Implemented security validation workflows based on OWASP Mobile Top 10 risk categories.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    Centralized Security Monitoring
                  </p>
                  <p>
                    Built dashboards to track vulnerabilities and CI/CD security results in real-time.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    Reduced Manual Effort
                  </p>
                  <p>
                    Automated security testing workflows, significantly reducing manual validation workload.
                  </p>
                </div>

              </div>
            </section>

          </div>
        </div>

        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-4">
            Summary
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            Designed and implemented a full DevSecOps automation pipeline for Android applications,
            improving security visibility, deployment efficiency, and continuous testing through CI/CD integration.
          </p>
        </section>

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