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
    "/diaspora1.png",
    "/diaspora2.png",
    "/diaspora3.png",
    "/diaspora16.png",
    "/diaspora17.png",
    "/diaspora18.png",
    "/diaspora4.png",
    "/diaspora9.png",
    "/diaspora 10.png",
    "/diaspora11.png",
    "/diaspora12.png",
    "/diaspora13.png",
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
        <p className="text-cyan-400 font-medium mb-3">
          MONITORING SYSTEM · REALTIME PLATFORM
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Diaspora Monitoring Platform
        </h1>

        <p className="text-zinc-400 mb-10">
          Emergency coordination system with realtime tracking & offline-first support
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
        <div className="grid md:grid-cols-2 gap-12">

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Overview
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Built an offline-first emergency coordination platform designed for diaspora monitoring,
                enabling real-time location tracking and rapid response coordination during critical events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Key Features
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Realtime GPS tracking · Offline data sync · Push notifications · Emergency status reporting · Map-based dashboard
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
                    Realtime Coordination
                  </p>
                  <p>
                    Improved emergency response visibility with live location tracking across users.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    Offline-First Reliability
                  </p>
                  <p>
                    System continues functioning even in unstable network conditions using local sync strategy.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    Faster Response Flow
                  </p>
                  <p>
                    Reduced manual coordination delays through automated alerts and status updates.
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
            Developed a resilient monitoring system focused on real-time coordination and offline-first reliability
            for emergency and diaspora tracking scenarios.
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