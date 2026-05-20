"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";

import {
  siReact,
  siVuedotjs,
  siTypescript,
  siJavascript,
  siHtml5,
  siCss,
  siTailwindcss,
  siFlutter,

  siNodedotjs,
  siLaravel,
  siPhp,

  siPostgresql,
  siMysql,
  siFirebase,

  siGit,
  siDocker,
  siJenkins,
  siKubernetes,
  siPrometheus,
  siGrafana,
  siVercel,

  siFigma,
  siCanvas,

  siLinux,
  siArduino,
} from "simple-icons/icons";

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll();

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 1.2,
  });

  const opacityTitle = useTransform(smoothScroll, [0, 0.3, 0.6], [1, 1, 0]);
  const ySection = useTransform(smoothScroll, [0, 1], [0, 80]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const icons = [
    siReact,
    siVuedotjs,
    siTypescript,
    siJavascript,
    siHtml5,
    siCss,
    siTailwindcss,
    siFlutter,

    siNodedotjs,
    siLaravel,
    siPhp,

    siPostgresql,
    siMysql,
    siFirebase,

    siGit,
    siDocker,
    siJenkins,
    siKubernetes,
    siPrometheus,
    siGrafana,
    siVercel,

    siFigma,
    siCanvas,

    siLinux,
    siArduino,
  ];

  return (
    <motion.section style={{ y: ySection }} className="py-32 overflow-hidden">

      {/* TITLE */}
      <motion.h2
        style={{ opacity: opacityTitle }}
        className="text-5xl font-bold text-center mb-20"
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CLOUD */}
        <div className="flex justify-center items-center">
          <Cloud
            options={{
              reverse: true,
              depth: 1,
              maxSpeed: 0.02,
              minSpeed: 0.008,
              wheelZoom: false,
              imageScale: 1.1,
              activeCursor: "default",
              tooltip: false,
              initial: [0.1, -0.1],
              clickToFront: 300,
              outlineColour: "transparent",
            }}
          >
            {icons.map((icon, i) =>
              renderSimpleIcon({
                key: i,
                icon,
                bgHex: "#000000",
                fallbackHex: "#ffffff",
                size: 48,
              })
            )}
          </Cloud>
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-semibold">Frontend</h3>
            <p className="text-gray-400 mt-1">
              React.js • Vue.js • TypeScript • JavaScript • HTML • CSS • Tailwind CSS • Flutter
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Backend</h3>
            <p className="text-gray-400 mt-1">
              Node.js • Laravel • PHP
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Databases</h3>
            <p className="text-gray-400 mt-1">
              PostgreSQL • MySQL • Firebase
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">DevOps & Tools</h3>
            <p className="text-gray-400 mt-1">
              Git • Docker • Jenkins • Kubernetes • Prometheus • Grafana • Vercel
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Design</h3>
            <p className="text-gray-400 mt-1">
              Figma • Canva
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Others</h3>
            <p className="text-gray-400 mt-1">
              Linux • Arduino
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}