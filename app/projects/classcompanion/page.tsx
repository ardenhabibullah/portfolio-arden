"use client";

import Link from "next/link";

export default function Page() {
  const images = [
    "/classcompanion1.png",
    "/classcompanion2.png",
    "/classcompanion3.png",
  ];

  // ❌ HAPUS useSearchParams
  const backHref = "/#projects";

  return (
    <main className="bg-black text-white min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto">

        {/* BACK */}
        <Link
          href={backHref}
          className="text-xs sm:text-sm text-zinc-400 hover:text-white transition inline-flex items-center gap-2"
        >
          ← Back
        </Link>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-5 sm:mt-6 mb-3 leading-tight">
          ClassCompanion
        </h1>

        <p className="text-zinc-400 max-w-2xl mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed">
          A student productivity UI/UX concept designed to help manage study schedules,
          tasks, and learning flow in a simple and structured interface.
        </p>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-white/10 bg-black"
            >
              <img
                src={img}
                alt={`classcompanion-${i}`}
                className="w-full h-52 sm:h-60 md:h-[260px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-4 text-zinc-400 leading-relaxed mb-10 text-sm sm:text-base">
          <p>
            ClassCompanion is a productivity-focused design system built for students
            to manage tasks, schedules, and study habits in one unified platform.
          </p>

          <p>
            The goal is to reduce complexity and distraction by providing a clean,
            minimal, and structured interface that supports daily learning activities.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">

          <div className="p-4 sm:p-5 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-white font-semibold mb-2">Focus</h3>
            <p className="text-zinc-400 text-sm">
              Productivity system for students with clean and distraction-free UI.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-white font-semibold mb-2">Goal</h3>
            <p className="text-zinc-400 text-sm">
              Improve learning efficiency by organizing tasks and study flow in one system.
            </p>
          </div>

        </div>

        {/* SUMMARY */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Summary</h2>

          <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
            A minimal and structured UI/UX concept designed to help students stay organized,
            manage learning schedules, and improve productivity through a simple digital system.
          </p>
        </div>

        {/* BUTTON */}
        <a
          href="https://www.figma.com/design/ikLE0hEqWqLtmWpXiF2Sx5/Untitled?node-id=0-1&t=F9Z1m5Sal2Yz2DUk-1"
          target="_blank"
          className="inline-block px-5 sm:px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition text-sm sm:text-base"
        >
          View Figma Design
        </a>

      </div>
    </main>
  );
}