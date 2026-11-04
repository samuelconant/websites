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
    <main className="page-container page-top">
      <Link
        href="/"
        className="mono-label text-muted hover:text-ink focus-visible:text-ink transition-colors inline-block mb-12"
      >
        ← All work
      </Link>

      {/* Title block */}
      <Reveal>
        <div className="flex items-baseline justify-between gap-6 mb-12">
          <h1 className="uppercase font-semibold tracking-[-0.03em] leading-[0.9] text-[clamp(2.5rem,8vw,6rem)] text-balance">
            {piece.title}
            <span className="text-accent">.</span>
          </h1>
          <span className="mono-label text-muted shrink-0">
            <span className="text-accent-ink">{index}</span> /{" "}
            {String(pieces.length).padStart(2, "0")}
          </span>
        </div>
      </Reveal>

      {/* Process video leads when it exists; the finished piece stands in
          until then. Not wrapped in Reveal: it's the main image, so it
          paints straight away. */}
      <section className="mb-6">
          {piece.videoUrl ? (
            <video
              src={piece.videoUrl}
              controls
              playsInline
              className="art-corners w-full aspect-video bg-ink"
            />
          ) : piece.stills[0] ? (
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={piece.stills[0]}
                alt={piece.title}
                className="art-corners block w-auto max-w-full h-auto max-h-[85svh] ring-1 ring-ink/5"
              />
              <figcaption className="mt-3 mono-label text-muted">
                <span aria-hidden className="text-accent">▶</span> Process time-lapse
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
              <span className="mono-label text-ink/70">
                ▶ Process video coming soon
              </span>
            </div>
          )}
      </section>

      {/* Metadata rail */}
      <div className="page-grid gap-y-6 border-y border-rule py-4 mb-16 mono-label">
        <div className="col-span-2 lg:col-span-3">
          <p className="text-muted mb-1">Index</p>
          <p>{index}</p>
        </div>
        <div className="col-span-2 lg:col-span-3">
          <p className="text-muted mb-1">Medium</p>
          <p>{piece.medium}</p>
        </div>
        <div className="col-span-2 lg:col-span-3">
          <p className="text-muted mb-1">Year</p>
          <p>{piece.year}</p>
        </div>
        <div className="col-span-2 lg:col-span-3">
          <p className="text-muted mb-1">Format</p>
          <p>{piece.videoUrl ? "Time-lapse + stills" : "Stills"}</p>
        </div>
      </div>

      <div className="page-grid gap-y-12">
        <div className="col-span-4 sm:col-span-8 lg:col-span-8 min-w-0">
          <PieceTabs piece={piece} />
        </div>
        <aside className="col-span-4 sm:col-span-8 lg:col-span-4">
          <p className="mono-label text-muted mb-3">About this piece</p>
          <p className="text-ink-soft leading-relaxed">{piece.description}</p>
        </aside>
      </div>

      {/* Prev / next — big type */}
      <nav className="mt-24 border-t border-rule pt-12 page-grid">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="group col-span-2 sm:col-span-4 lg:col-span-6"
          >
            <p className="mono-label text-muted mb-2">
              ← Previous
            </p>
            <p className="uppercase font-semibold tracking-tight text-2xl sm:text-3xl group-hover:text-accent-ink group-focus-visible:text-accent-ink transition-colors">
              {prev.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group col-span-2 sm:col-span-4 lg:col-span-6 col-start-3 sm:col-start-5 lg:col-start-7 text-right"
          >
            <p className="mono-label text-muted mb-2">
              Next →
            </p>
            <p className="uppercase font-semibold tracking-tight text-2xl sm:text-3xl group-hover:text-accent-ink group-focus-visible:text-accent-ink transition-colors">
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
