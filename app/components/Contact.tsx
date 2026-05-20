"use client";

export default function Contact() {
  return (
    <section className="py-32 px-6 text-center">

      <h2 className="text-5xl font-bold mb-8">
        Let’s Build Something Great
      </h2>

      <p className="text-zinc-400 mb-10 text-lg max-w-2xl mx-auto">
        Open for collaboration, freelance work, and software engineering opportunities.
      </p>

      <a
        href="https://wa.me/628567933300?text=Halo%20saya%20Arden%20Habibullah.%20Saya%20ingin%20diskusi%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold
          hover:scale-105 transition inline-block
          shadow-lg
        "
      >
        Chat on WhatsApp
      </a>

    </section>
  );
}