"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProjectClient() {
  const [backHref, setBackHref] = useState("/#projects");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from");

    if (from === "all") {
      setBackHref("/projects/all");
    } else {
      setBackHref("/#projects");
    }
  }, []);

  const images = [
    "/jenkins-dashboard.png",
  
  "/jenkins-sast-pipeline.png",
,
  
  ];

  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState<string | null>(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <main className="bg-black text-white min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto">

        {/* NAVIGATION */}
        <div className="flex gap-4 sm:gap-6 mb-8 sm:mb-10 text-sm">
          <Link
            href="/"
            className="text-zinc-400 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="/projects/all"
            className="text-zinc-400 hover:text-white transition"
          >
            All Projects
          </Link>
        </div>

        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-8 sm:mb-10 transition"
        >
          ← Back
        </Link>

        {/* HEADER */}
        <p className="text-red-400 font-medium mb-3">
          SECURITY AUTOMATION · CI/CD · DEVSECOPS
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Automated SAST Pipeline with Jenkins & Bandit
        </h1>

        <p className="text-zinc-400 mb-8 sm:mb-10 text-sm sm:text-base">
          Automated static application security testing pipeline using
          Jenkins and Bandit to detect and verify security vulnerabilities
          during the development workflow.
        </p>

        {/* IMAGE CAROUSEL */}
        <div className="relative mb-12 sm:mb-16">
          <div className="w-full h-[240px] sm:h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              src={images[index]}
              onClick={() => setZoom(images[index])}
              className="w-full h-full object-contain cursor-zoom-in"
              alt="Jenkins and Bandit security pipeline"
            />
          </div>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full text-white hover:bg-black/80 transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full text-white hover:bg-black/80 transition"
          >
            →
          </button>

          <div className="absolute bottom-3 right-4 text-xs text-zinc-300 bg-black/60 px-3 py-1 rounded-full">
            {index + 1} / {images.length}
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">

          {/* LEFT */}
          <div className="space-y-8 sm:space-y-10">

            {/* OVERVIEW */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Overview
              </h2>

              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                Built an automated Static Application Security Testing (SAST)
                pipeline using Jenkins and Bandit to identify security issues
                in Python source code. The project uses a deliberately
                vulnerable application to demonstrate vulnerability detection,
                automated security analysis, and remediation verification.
              </p>
            </section>

            {/* SECURITY ISSUE */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Security Testing
              </h2>

              <div className="space-y-4 text-zinc-400 text-sm sm:text-base">

                <div>
                  <p className="text-white font-medium">
                    Initial Vulnerability
                  </p>

                  <p>
                    The sample application contained a command injection
                    vulnerability caused by executing user-controlled input
                    with <code className="text-red-400">shell=True</code>.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    SAST Detection
                  </p>

                  <p>
                    Bandit was used to statically analyze the Python source
                    code and identify the insecure command execution pattern.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    Remediation
                  </p>

                  <p>
                    The vulnerable implementation was replaced with safer
                    command parsing using <code className="text-green-400">
                      shlex.split()
                    </code> and execution without
                    <code className="text-green-400"> shell=True</code>.
                  </p>
                </div>

              </div>
            </section>

          </div>

          {/* RIGHT */}
          <div className="space-y-8 sm:space-y-10">

            {/* PIPELINE */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Pipeline
              </h2>

              <div className="space-y-5 text-zinc-400 text-sm sm:text-base">

                <div>
                  <p className="text-white font-medium">
                    1. Checkout
                  </p>

                  <p>
                    Jenkins retrieves the source code from the Git repository.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    2. Install Dependencies
                  </p>

                  <p>
                    Jenkins installs Bandit as the static security analysis
                    tool.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    3. SAST Analysis
                  </p>

                  <p>
                    Bandit scans the Python source code and generates a
                    security analysis report.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    4. Report
                  </p>

                  <p>
                    The generated Bandit report is published in Jenkins for
                    review and vulnerability tracking.
                  </p>
                </div>

              </div>
            </section>

            {/* TECHNOLOGIES */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Technologies
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Jenkins · Bandit · Python · Git · GitHub · Jenkinsfile · SAST ·
                DevSecOps
              </p>
            </section>

          </div>
        </div>

        {/* PIPELINE FLOW */}
        <section className="mt-12 sm:mt-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Pipeline Flow
          </h2>

          <div className="border border-white/10 rounded-2xl p-6 bg-zinc-950">
            <p className="text-zinc-300 text-sm sm:text-base text-center leading-loose">
              Git Repository
              <span className="text-zinc-600 mx-2">→</span>
              Jenkins
              <span className="text-zinc-600 mx-2">→</span>
              Checkout
              <span className="text-zinc-600 mx-2">→</span>
              Install Bandit
              <span className="text-zinc-600 mx-2">→</span>
              SAST Analysis
              <span className="text-zinc-600 mx-2">→</span>
              Security Report
            </p>
          </div>
        </section>

        {/* RESULT */}
        <section className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Result
          </h2>

          <p className="text-zinc-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            The pipeline successfully automated static security analysis
            using Jenkins and Bandit. The intentionally vulnerable code was
            detected during the SAST scan, then remediated and re-tested to
            verify that the security issue had been addressed.
          </p>
        </section>

        {/* LEARNING */}
        <section className="mt-10 sm:mt-14">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Key Learning
          </h2>

          <p className="text-zinc-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            Gained hands-on experience in SAST implementation, Jenkins
            pipeline automation, vulnerability detection, security report
            analysis, secure coding practices, and integrating security
            testing into a CI/CD workflow.
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
              alt="Zoomed Jenkins and Bandit screenshot"
            />
          </div>
        )}

      </div>
    </main>
  );
}