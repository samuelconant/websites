"use client";

import { useState } from "react";
import type { Piece } from "@/lib/pieces";

export default function PieceTabs({ piece }: { piece: Piece }) {
  const [tab, setTab] = useState<"process" | "finished">("process");

  return (
    <div>
      <div className="flex gap-8 border-b border-zinc-200 mb-8 font-mono text-xs uppercase tracking-widest">
        {(["process", "finished"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-3 -mb-px transition-colors ${
              tab === t
                ? "text-zinc-950 border-b-2 border-accent"
                : "text-zinc-400 hover:text-zinc-600"
            }`}
          >
            {t === "process" ? "Process" : "Finished work"}
          </button>
        ))}
      </div>

      {tab === "process" ? (
        <p className="text-zinc-600 leading-relaxed max-w-prose">
          {piece.processNotes}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {piece.stills.length > 0 ? (
            piece.stills.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt={`${piece.title} — finished work ${i + 1}`}
                className="art-corners w-full aspect-square object-cover bg-zinc-100"
              />
            ))
          ) : (
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              Finished work coming soon
            </p>
          )}
        </div>
      )}
    </div>
  );
}
