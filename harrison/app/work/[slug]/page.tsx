"use client";

import Link from "next/link";
import { useState } from "react";
import { notFound } from "next/navigation";
import { use } from "react";

const pieces: Record<string, {
  title: string;
  medium: string;
  year: string;
  description: string;
  videoUrl?: string;
  stills: string[];
}> = {
  "piece-01": {
    title: "Placeholder 01",
    medium: "Procreate on iPad",
    year: "2024",
    description: "Harrison's description of this piece — what he was trying to do, what he learned, what surprised him.",
    videoUrl: undefined,
    stills: [],
  },
};

export default function PiecePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const piece = pieces[slug] ?? {
    title: slug,
    medium: "Procreate on iPad",
    year: "2024",
    description: "Coming soon.",
    stills: [],
  };

  const [tab, setTab] = useState<"process" | "finished">("process");

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 font-sans">

      <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-700 transition-colors mb-12 inline-block">
        ← Back
      </Link>

      {/* Video / process section — leads on all screen sizes */}
      <section className="mb-8">
        {piece.videoUrl ? (
          <video
            src={piece.videoUrl}
            controls
            className="w-full aspect-video bg-zinc-100 rounded-sm"
          />
        ) : (
          <div className="w-full aspect-video bg-zinc-100 rounded-sm flex items-center justify-center">
            <span className="text-zinc-400 text-sm">Process video coming soon</span>
          </div>
        )}
      </section>

      {/* Tab row */}
      <div className="flex gap-6 border-b border-zinc-100 mb-10">
        {(["process", "finished"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-3 text-sm capitalize transition-colors ${
              tab === t
                ? "text-zinc-900 border-b-2 border-zinc-900"
                : "text-zinc-400 hover:text-zinc-600"
            }`}
          >
            {t === "process" ? "Process" : "Finished Work"}
          </button>
        ))}
      </div>

      {/* Tab content + metadata sidebar */}
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          {tab === "process" ? (
            <p className="text-zinc-500 leading-relaxed">
              Process notes and additional video frames go here.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {piece.stills.length > 0 ? (
                piece.stills.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt="" className="w-full aspect-square object-cover bg-zinc-100 rounded-sm" />
                ))
              ) : (
                <p className="text-zinc-400 text-sm">Finished work coming soon.</p>
              )}
            </div>
          )}
        </div>

        {/* Metadata sidebar */}
        <aside className="md:w-52 shrink-0 flex flex-col gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Title</p>
            <p className="text-zinc-900 font-medium">{piece.title}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Medium</p>
            <p className="text-zinc-600">{piece.medium}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Year</p>
            <p className="text-zinc-600">{piece.year}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">About</p>
            <p className="text-zinc-500 text-sm leading-relaxed">{piece.description}</p>
          </div>
        </aside>
      </div>

    </main>
  );
}
