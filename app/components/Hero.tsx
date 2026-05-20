"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12, // 🔥 lebih smooth & ringan
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 }, // 🔥 dari 50 → 20 (lebih smooth)
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // 🔥 lebih cepat & ringan
      ease: [0.25, 0.1, 0.25, 1], // cubic bezier smooth (Apple feel)
    },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-black">

      {/* BACKGROUND (OPTIMIZED) */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg"
          alt="background"
          fill
          priority
          className="object-cover scale-105 opacity-40"
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* 🔥 blur diperkecil biar GPU ringan */}
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/15 blur-[120px]" />
      </div>

      {/* GLASS FRAME (SIMPLIFIED FOR PERFORMANCE) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="
          w-[92%]
          max-w-5xl
          h-[82%]
          rounded-3xl
          bg-white/5
          border border-white/10
          backdrop-blur-xl
        " />
      </div>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center"
      >

        {/* PROFILE (OPTIMIZED IMAGE) */}
        <motion.div variants={fadeUp}>
          <Image
            src="/profile.jpg"
            alt="profile"
            width={260}
            height={340}
            priority
            className="
              object-cover rounded-3xl
              border border-white/10
              shadow-lg
              mb-6
              w-[150px] h-[200px]
              md:w-[260px] md:h-[340px]
            "
          />
        </motion.div>

        {/* NAME */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-7xl font-semibold tracking-tight text-white"
        >
          Arden{" "}
          <span className="text-white/60">Habibullah</span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeUp}
          className="text-zinc-400 text-sm md:text-lg max-w-2xl mt-4 leading-relaxed"
        >
          Full-stack developer building scalable web, mobile, and desktop applications
          with clean architecture and modern UI systems.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={fadeUp}
          className="flex gap-4 mt-6"
        >

          {/* GITHUB */}
          <a
            href="https://github.com"
            className="
              flex items-center gap-2
              px-5 py-3 rounded-2xl
              bg-white text-black
              font-medium
              hover:scale-[1.03]
              transition-transform duration-200
            "
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58v-2.02..." />
            </svg>
            GitHub
          </a>

          {/* CONTACT */}
          <a
            href="mailto:test@gmail.com"
            className="
              flex items-center gap-2
              px-5 py-3 rounded-2xl
              border border-white/15 text-white
              bg-white/5
              hover:bg-white hover:text-black
              transition-colors duration-200
            "
          >
            <Mail size={18} />
            Contact
          </a>

        </motion.div>

      </motion.div>
    </section>
  );
}