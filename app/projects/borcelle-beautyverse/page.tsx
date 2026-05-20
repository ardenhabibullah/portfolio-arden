"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [from, setFrom] = useState<string | null>(null);

  // SAME AS BIP STYLE (SAFE CLIENT DETECTION)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFrom(params.get("from"));
  }, []);

  const backHref = from === "all" ? "/projects/all" : "/#projects";

  const images = ["/beauty1.png", "/beauty2.png", "/beauty3.png"];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-black text-white min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto">

        {/* BACK */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-400 hover:text-white mb-8 sm:mb-10 transition"
        >
          ← Back
        </Link>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-4 sm:mt-6 mb-3 leading-tight">
          Borcelle Beautyverse
        </h1>

        <p className="text-zinc-400 max-w-2xl mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed">
          A beauty-tech UI/UX concept design that analyzes facial skin conditions and provides personalized skincare recommendations.
        </p>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 sm:mb-12">

          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-zinc-900"
            >
              <img
                src={img}
                alt={`beauty-${i}`}
                className="w-full h-56 sm:h-64 md:h-72 object-contain hover:scale-[1.03] transition duration-300"
                loading="lazy"
              />
            </div>
          ))}

        </div>

        {/* DESCRIPTION */}
        <div className="space-y-4 text-zinc-400 leading-relaxed mb-10 text-sm sm:text-base">

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
          className="inline-flex px-5 sm:px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition text-sm sm:text-base"
        >
          View Figma Design
        </a>

      </div>

      {/* LIGHTBOX */}
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