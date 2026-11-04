"use client";

import { useId, useRef, useState } from "react";
import type { Piece } from "@/lib/pieces";

const tabs = ["process", "finished"] as const;
type Tab = (typeof tabs)[number];

export default function PieceTabs({ piece }: { piece: Piece }) {
  const [tab, setTab] = useState<Tab>("process");
  const id = useId();
  const refs = useRef<Record<Tab, HTMLButtonElement | null>>({
    process: null,
    finished: null,
  });

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next = tabs[(tabs.indexOf(tab) + 1) % tabs.length];
    setTab(next);
    refs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Piece views"
        onKeyDown={onKeyDown}
        className="flex gap-8 border-b border-rule mb-8 mono-label"
      >
        {tabs.map((t) => (
          <button
            key={t}
            ref={(el) => {
              refs.current[t] = el;
            }}
            role="tab"
            id={`${id}-tab-${t}`}
            aria-selected={tab === t}
            aria-controls={`${id}-panel`}
            tabIndex={tab === t ? 0 : -1}
            onClick={() => setTab(t)}
            className={`uppercase pb-3 -mb-px transition-colors ${
              tab === t
                ? "text-ink border-b-2 border-accent"
                : "text-muted hover:text-ink-soft focus-visible:text-ink-soft"
            }`}
          >
            {t === "process" ? "Process" : "Finished work"}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${tab}`}
      >
        {tab === "process" ? (
          <p className="text-ink-soft leading-relaxed max-w-prose">
            {piece.processNotes}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {piece.stills.length > 0 ? (
              piece.stills.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt={`${piece.title} — finished work ${i + 1}`}
                  className="art-corners w-full aspect-square object-cover bg-wash"
                />
              ))
            ) : (
              <p className="mono-label text-muted">Finished work coming soon</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
