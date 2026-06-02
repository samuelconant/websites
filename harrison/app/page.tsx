import Link from "next/link";

const pieces = [
  { slug: "piece-01", title: "Placeholder 01", hasVideo: true },
  { slug: "piece-02", title: "Placeholder 02", hasVideo: true },
  { slug: "piece-03", title: "Placeholder 03", hasVideo: false },
  { slug: "piece-04", title: "Placeholder 04", hasVideo: true },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 font-sans">

      {/* Header */}
      <header className="mb-16">
        <p className="text-sm text-zinc-400 mb-2 tracking-wide">Harrison Conant</p>
        <h1 className="text-3xl font-light text-zinc-900 leading-snug max-w-md">
          I make things. Here&apos;s how I made them.
        </h1>
      </header>

      {/* Gallery Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pieces.map((piece) => (
            <Link
              key={piece.slug}
              href={`/work/${piece.slug}`}
              className="group relative aspect-square bg-zinc-100 overflow-hidden rounded-sm"
            >
              {/* Placeholder — swap with actual image/video thumbnail */}
              <div className="absolute inset-0 bg-zinc-200 group-hover:bg-zinc-300 transition-colors" />

              {/* Process video badge */}
              {piece.hasVideo && (
                <span className="absolute top-3 left-3 text-xs bg-black/80 text-white px-2 py-1 rounded-full z-10">
                  ▶ process
                </span>
              )}

              {/* Title on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-black/60 to-transparent z-10">
                <p className="text-white text-sm font-medium">{piece.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-zinc-100 pt-8">
        <p className="text-sm text-zinc-400">harrisonconant.com</p>
      </footer>

    </main>
  );
}
