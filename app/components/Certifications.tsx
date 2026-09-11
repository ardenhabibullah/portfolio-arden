"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import ImageModal from "./ImageModal";

const certifications = [
  {
    name: "REST API Intermediate",
    issuer: "HackerRank",
    date: "May 2026",
    image: "/Rest.png",
  },
  {
    name: "React Basic",
    issuer: "HackerRank",
    date: "May 2026",
    image: "/React.png",
  },
  {
    name: "Go Intermediate",
    issuer: "HackerRank",
    date: "May 2026",
    image: "/GO.png",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    date: "September 2026",
    image: "/Claude101.jpg",
  },
  {
    name: "Claude Code 101",
    issuer: "Anthropic",
    date: "September 2026",
    image: "/ClaudeCode101.jpg",
  },
  {
    name: "Code Foundation for ROS",
    issuer: "The Construct",
    date: "October 2024",
    image: "/ROS.jpg",
  },
   {
    name: "Google Analytics Certification",
    issuer: "Google",
    date: "September 2026",
    image: "/GOOGLE.png",
  },
  {
    name: "Emotional Intelligence",
    issuer: "GNIK & Kemnaker",
    date: "September 2026",
    image: "/Emotional_Intelligence.jpg",
  },
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <ImageModal
        src={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <Award className="text-purple-400" size={24} />

          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Certifications
          </h2>
        </div>

        <p className="text-zinc-500 text-sm md:text-base">
          Professional certifications and technical training.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {certifications.map((cert, index) => (
          <motion.button
            key={cert.name}
            type="button"
            onClick={() => setSelectedImage(cert.image)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            className="
              text-left
              rounded-2xl
              overflow-hidden
              border border-zinc-800
              bg-zinc-900/70
              hover:border-zinc-600
              hover:bg-zinc-900
              transition
              group
            "
          >
            <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden">
              <Image
                src={cert.image}
                alt={`${cert.name} certificate`}
                fill
                className="
                  object-contain
                  p-3
                  group-hover:scale-105
                  transition-transform
                  duration-500
                "
              />
            </div>

            <div className="p-4">
              <p className="text-purple-400 text-sm flex items-center gap-2">
                <Award size={15} />
                {cert.issuer}
              </p>

              <h3 className="text-white font-semibold mt-2">
                {cert.name}
              </h3>

              <p className="text-zinc-500 text-xs mt-1">
                {cert.date}
              </p>

              <p className="text-zinc-600 text-xs mt-3">
                Click to view certificate
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}