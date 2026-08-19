import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdjacent, getPiece, pieces } from "@/lib/pieces";
import PieceTabs from "@/components/PieceTabs";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return pieces.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = getPiece(slug);
  return { title: piece?.title ?? "Work" };
}

export default async function PiecePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) notFound();

  const i = pieces.findIndex((p) => p.slug === slug);
  const index = String(i + 1).padStart(2, "0");
  const { prev, next } = getAdjacent(slug);

  return (
    <main className="max-w-6xl mx-auto px-6 pt-12">
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors inline-block mb-14"
      >
        ← All work
      </Link>

      {/* Title block */}
      <Reveal>
        <div className="flex items-start justify-between gap-6 mb-12">
          <h1 className="uppercase font-semibold tracking-[-0.03em] leading-[0.9] text-[clamp(2.5rem,8vw,6rem)] text-balance">
            {piece.title}
            <span className="text-accent">.</span>
          </h1>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 pt-3 shrink-0">
            <span className="text-accent">{index}</span> /{" "}
            {String(pieces.length).padStart(2, "0")}
          </span>
        </div>
      </Reveal>

      {/* Process video leads when it exists; the finished piece stands in until then */}
      <Reveal delay={100}>
        <section className="mb-6">
          {piece.videoUrl ? (
            <video
              src={piece.videoUrl}
              controls
              playsInline
              className="art-corners w-full aspect-video bg-zinc-950"
            />
          ) : piece.stills[0] ? (
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={piece.stills[0]}
                alt={piece.title}
                className="art-corners w-full h-auto ring-1 ring-black/5"
              />
              <figcaption className="mt-3 font-mono text-xs uppercase tracking-widest text-zinc-400">
                <span className="text-accent">▶</span> Process time-lapse
                coming soon
              </figcaption>
            </figure>
          ) : (
            <div
              className="art-corners w-full aspect-video flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${piece.tone[0]}, ${piece.tone[1]})`,
              }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-950/70">
                ▶ Process video coming soon
              </span>
            </div>
          )}
        </section>
      </Reveal>

      {/* Metadata rail */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-zinc-200 py-5 mb-14 font-mono text-xs uppercase tracking-widest">
        <div>
          <p className="text-zinc-400 mb-1">Index</p>
          <p>{index}</p>
        </div>
        <div>
          <p className="text-zinc-400 mb-1">Medium</p>
          <p>{piece.medium}</p>
        </div>
        <div>
          <p className="text-zinc-400 mb-1">Year</p>
          <p>{piece.year}</p>
        </div>
        <div>
          <p className="text-zinc-400 mb-1">Format</p>
          <p>{piece.videoUrl ? "Time-lapse + stills" : "Stills"}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-14">
        <div className="flex-1 min-w-0">
          <PieceTabs piece={piece} />
        </div>
        <aside className="md:w-72 shrink-0">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-3">
            About this piece
          </p>
          <p className="text-zinc-600 leading-relaxed">{piece.description}</p>
        </aside>
      </div>

      {/* Prev / next — big type */}
      <nav className="mt-24 border-t border-zinc-200 pt-10 grid grid-cols-2 gap-6">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="group">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2">
              ← Previous
            </p>
            <p className="uppercase font-semibold tracking-tight text-2xl sm:text-3xl group-hover:text-accent transition-colors">
              {prev.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/work/${next.slug}`} className="group text-right">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2">
              Next →
            </p>
            <p className="uppercase font-semibold tracking-tight text-2xl sm:text-3xl group-hover:text-accent transition-colors">
              {next.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
