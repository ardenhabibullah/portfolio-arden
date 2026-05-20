import Link from "next/link";

type Project = {
  title: string;
  desc: string;
  tag: string;
  color: string;
  images: string[];
};

const projects: Record<string, Project> = {
  "smart-diffuser": {
    title: "Smart Diffuser",
    desc: "IoT aromatherapy system berbasis Arduino dengan sensor kelembapan dan kontrol otomatis.",
    tag: "IoT Project",
    color: "text-blue-400",
    images: ["/diffuser1.png", "/diffuser2.png", "/diffuser3.png"],
  },

  cms: {
    title: "CMS Platform",
    desc: "Company CMS system untuk manajemen konten modern.",
    tag: "Web Project",
    color: "text-yellow-400",
    images: ["/project1.png"],
  },
};

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects[params.slug];

  if (!project) {
    return (
      <div className="text-white p-10">
        Project not found (slug: {params.slug})
      </div>
    );
  }

  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState<string | null>(null);

  const images = project.images;

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* BACK BUTTON */}
        <Link
          href="/#projects"
          className="text-sm text-zinc-400 mb-10 inline-block"
        >
          ← Back to Projects
        </Link>

        {/* TAG */}
        <p className={project.color}>{project.tag}</p>

        {/* TITLE */}
        <h1 className="text-4xl font-bold mt-2">
          {project.title}
        </h1>

        {/* DESC */}
        <p className="text-zinc-400 mt-4">
          {project.desc}
        </p>

        {/* IMAGE SLIDER SIMPLE */}
        <div className="relative mt-10">
          <img
            src={images[index]}
            className="w-full h-[420px] object-cover rounded-xl cursor-zoom-in"
            onClick={() => setZoom(images[index])}
          />

          {/* LEFT */}
          <button
            onClick={() =>
              setIndex((p) => (p === 0 ? images.length - 1 : p - 1))
            }
            className="absolute left-3 top-1/2 bg-black/60 px-3 py-2 rounded-full"
          >
            ←
          </button>

          {/* RIGHT */}
          <button
            onClick={() =>
              setIndex((p) => (p + 1) % images.length)
            }
            className="absolute right-3 top-1/2 bg-black/60 px-3 py-2 rounded-full"
          >
            →
          </button>
        </div>

        {/* ZOOM MODAL */}
        {zoom && (
          <div
            onClick={() => setZoom(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center"
          >
            <img
              src={zoom}
              className="max-w-[90%] max-h-[90%]"
            />
          </div>
        )}

      </div>
    </main>
  );
}