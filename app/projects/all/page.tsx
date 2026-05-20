"use client";

import Link from "next/link";

const projects = [
  {
    slug: "cms",
    title: "CMS Platform",
    tag: "Web",
    color: "text-yellow-400",
    img: "/project1.png",
  },
  {
    slug: "diaspora",
    title: "Diaspora Monitoring Platform",
    tag: "System",
    color: "text-cyan-400",
    img: "/project2.png",
  },
  {
    slug: "bip-finance",
    title: "BIP Finance Platform",
    tag: "Finance",
    color: "text-blue-400",
    img: "/bogart4.png",
  },
  {
    slug: "devsecops",
    title: "DevSecOps CI/CD Security Framework",
    tag: "Security Automation",
    color: "text-green-400",
    img: "/project3.jpg",
  },
  {
    slug: "gridguard",
    title: "GridGuard PLN System",
    tag: "Field System",
    color: "text-orange-400",
    img: "/pln1.jpeg",
  },
  {
    slug: "bandung-barber-map",
    title: "Barber Map Bandung",
    tag: "Mapping",
    color: "text-pink-400",
    img: "/project6.webp",
  },
  {
    slug: "borcelle-beautyverse",
    title: "Beautyverse Design",
    tag: "Design",
    color: "text-rose-400",
    img: "/project8.png",
  },
  {
    slug: "classcompanion",
    title: "ClassCompanion",
    tag: "Product",
    color: "text-emerald-400",
    img: "/project9.png",
  },
];

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      {/* HEADER */}
      <div className="mb-10">

        {/* BACK TO HOME */}
        <div className="mb-4">
          <Link
            href="/#projects"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold">
          All Projects
        </h1>

        <p className="text-zinc-500 mt-2 text-sm">
          Collection of all engineering, design, and system projects
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}?from=all`}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:scale-[1.03] transition group"
          >

            {/* IMAGE */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover group-hover:opacity-90 transition"
            />

            {/* TEXT */}
            <div className="p-4">

              <p className={`${p.color} text-sm font-medium`}>
                {p.tag}
              </p>

              <h3 className="text-lg font-bold mt-1">
                {p.title}
              </h3>

            </div>

          </Link>
        ))}

      </div>

    </main>
  );
}