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
    "/grafana.png",
    "/grafana1.png",
    "/grafana 2.png",
    "/grafana3.png",
    "/prometheus.png",
    "/jaeger.png",
    
  ];

  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState<string | null>(null);

  const next = () => {
    setIndex((p) => (p + 1) % images.length);
  };

  const prev = () => {
    setIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  };

  return (
    <main className="bg-black text-white min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto">

        {/* NAV */}
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

        {/* BACK */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-8 sm:mb-10 transition"
        >
          ← Back
        </Link>

        {/* HEADER */}
        <p className="text-orange-400 font-medium mb-3">
          MONITORING & OBSERVABILITY · IT OPERATIONS
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          System Monitoring with Prometheus & Grafana
        </h1>

        <p className="text-zinc-400 mb-8 sm:mb-10 text-sm sm:text-base">
          System and application monitoring setup for collecting,
          visualizing, and analyzing performance metrics.
        </p>

        {/* CAROUSEL */}
        <div className="relative mb-12 sm:mb-16">

          <div className="w-full h-[240px] sm:h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              src={images[index]}
              onClick={() => setZoom(images[index])}
              className="w-full h-full object-contain cursor-zoom-in"
              alt="Monitoring and observability dashboard"
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
                Built a hands-on monitoring and observability environment
                using Prometheus, Node Exporter, and Grafana to collect and
                visualize system-level metrics such as CPU, memory, disk,
                and network usage.
              </p>
            </section>

            {/* MONITORING STACK */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Monitoring Stack
              </h2>

              <div className="space-y-4 text-zinc-400 text-sm sm:text-base">

                <div>
                  <p className="text-white font-medium">
                    Prometheus
                  </p>
                  <p>
                    Collects and stores time-series metrics from monitored
                    systems and applications.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    Node Exporter
                  </p>
                  <p>
                    Exposes system-level metrics including CPU, memory,
                    disk, and network usage.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    Grafana
                  </p>
                  <p>
                    Visualizes collected metrics through monitoring
                    dashboards for easier performance analysis.
                  </p>
                </div>

              </div>
            </section>

          </div>

          {/* RIGHT */}
          <div className="space-y-8 sm:space-y-10">

            {/* IMPLEMENTATION */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Implementation
              </h2>

              <div className="space-y-5 text-zinc-400 text-sm sm:text-base">

                <div>
                  <p className="text-white font-medium">
                    System Monitoring
                  </p>

                  <p>
                    Configured Prometheus and Node Exporter to collect
                    system performance metrics.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    Dashboard Visualization
                  </p>

                  <p>
                    Connected Grafana to Prometheus and configured
                    dashboards for system performance monitoring.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    Application Observability
                  </p>

                  <p>
                    Instrumented a Python Flask application using
                    OpenTelemetry to collect metrics, structured logs,
                    and traces.
                  </p>
                </div>

                <div>
                  <p className="text-white font-medium">
                    Distributed Tracing
                  </p>

                  <p>
                    Configured Jaeger to analyze application request
                    behavior and response latency.
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
                Prometheus · Node Exporter · Grafana · OpenTelemetry ·
                Jaeger · Python · Flask · Linux · Systemd
              </p>
            </section>

          </div>
        </div>

        {/* OUTCOME */}
        <section className="mt-12 sm:mt-20">

          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Outcome
          </h2>

          <p className="text-zinc-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            Successfully configured a monitoring and observability
            environment capable of collecting system metrics, visualizing
            performance data, and analyzing application telemetry through
            metrics, logs, and distributed traces.
          </p>

        </section>

        {/* KEY LEARNING */}
        <section className="mt-10 sm:mt-14">

          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Key Learning
          </h2>

          <p className="text-zinc-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            Gained hands-on experience in IT monitoring, system
            observability, Linux services, metrics collection, dashboard
            visualization, and application performance analysis.
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
              alt="Zoomed monitoring screenshot"
            />
          </div>
        )}

      </div>
    </main>
  );
}