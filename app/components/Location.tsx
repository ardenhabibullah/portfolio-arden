export default function Location() {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold mb-4">
        Location
      </h2>

      <p className="text-zinc-400 mb-6">
        Bandung, Jawa Barat, Indonesia
      </p>

      {/* Google Maps Embed */}
      <div className="w-full h-[300px] rounded-xl overflow-hidden border border-zinc-800">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.564395!2d107.573116!3d-6.903273"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </section>
  );
}