"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const images = [
    "/bogart4.png",
    "/bogart5.png",
    "/bogart6.png",
    "/bogart7.png",
    "/bogart8.png",
  ];

  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState<string | null>(null);

  const next = () => setIndex((p) => (p + 1) % images.length);
  const prev = () =>
    setIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  // ✅ BACK LOGIC (penting)
  const backHref = from === "all" ? "/projects/all" : "/#projects";

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* BACK */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-10"
        >
          ← Back
        </Link>

        {/* HEADER */}
        <p className="text-blue-400 font-medium mb-3">
          FINANCE SYSTEM · INTERNAL APPLICATION
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          BIP Finance Platform
        </h1>

        <p className="text-zinc-400 mb-10 max-w-2xl">
          Internal financial management system for transaction & reporting optimization
        </p>

        {/* CAROUSEL */}
        <div className="relative mb-16">

          <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              src={images[index]}
              onClick={() => setZoom(images[index])}
              className="w-full h-full object-contain cursor-zoom-in"
              alt="bip finance"
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

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-zinc-400 leading-relaxed">
                Built and improved an internal financial system to manage transactions,
                invoices, and reporting in a structured and efficient workflow.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Core Features</h2>
              <p className="text-zinc-400 leading-relaxed">
                Transaction management · Invoice system · Purchase order · Delivery order · Financial reporting · Data filtering
              </p>
            </section>

          </div>

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-bold mb-4">Impact</h2>

              <div className="space-y-5 text-zinc-400">

                <div>
                  <p className="text-white font-medium">Transaction System</p>
                  <p>Built structured workflow for quotation, invoice, and purchase flow.</p>
                </div>

                <div>
                  <p className="text-white font-medium">Data Management</p>
                  <p>Designed database structure for financial tracking and reporting.</p>
                </div>

                <div>
                  <p className="text-white font-medium">Visualization</p>
                  <p>Implemented dashboard reporting for financial analytics.</p>
                </div>

                <div>
                  <p className="text-white font-medium">Efficiency</p>
                  <p>Improved accuracy and speed of financial operations.</p>
                </div>

              </div>
            </section>

          </div>
        </div>

        {/* SUMMARY */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="text-zinc-400 max-w-3xl leading-relaxed">
            Internal finance platform that improves transaction processing,
            reporting accuracy, and operational efficiency.
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