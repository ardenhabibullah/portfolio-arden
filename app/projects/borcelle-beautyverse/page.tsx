"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const dynamic = "force-dynamic";

export default function Page() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const images = ["/beauty1.png", "/beauty2.png", "/beauty3.png"];

  const backHref = from === "all" ? "/projects/all" : "/#projects";

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-black text-white min-h-screen px-4 md:px-6 py-14 md:py-20">
      <div className="max-w-5xl mx-auto">

        {/* BACK */}
        <Link
          href={backHref}
          className="text-sm text-zinc-400 hover:text-white inline-flex items-center gap-2"
        >
          ← Back
        </Link>

        {/* TITLE */}
        <h1 className="text-3xl md:text-6xl font-bold mt-6 mb-3 leading-tight">
          Borcelle Beautyverse
        </h1>

        <p className="text-zinc-400 max-w-2xl mb-10 text-sm md:text-base">
          A beauty-tech UI/UX concept design that analyzes facial skin conditions and provides personalized skincare recommendations.
        </p>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-zinc-900"
            >
              <img
                src={img}
                alt={`beauty-${i}`}
                className="w-full h-60 md:h-72 object-contain hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-4 text-zinc-400 leading-relaxed mb-10 text-sm md:text-base">
          <p>
            This project focuses on a futuristic skincare recommendation system.
            Users can scan their face and receive personalized beauty product suggestions
            based on skin condition analysis.
          </p>

          <p>
            The UI is designed with a clean, modern aesthetic to highlight beauty,
            simplicity, and user-friendly interaction.
          </p>
        </div>

        {/* BUTTON */}
        <a
          href="https://www.figma.com/design/7maPtV7x3qKoePR3pMOLPl/Borcelle?node-id=0-1&t=fss8KreWJvA33dHN-1"
          target="_blank"
          className="inline-flex px-5 md:px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition text-sm md:text-base"
        >
          View Figma Design
        </a>
      </div>

      {/* LIGHTBOX / ZOOM MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
        >
          <img
            src={selectedImage}
            className="max-w-full max-h-full object-contain rounded-xl"
            alt="preview"
          />
        </div>
      )}
    </main>
  );
}