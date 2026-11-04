"use client";

import { useState } from "react";

const items = [
  "Harrison Conant",
  "Process first",
  "Drawn in Procreate",
  "Mistakes included",
  "Time-lapse everything",
  "harrisonconant.com",
  "Usually at night",
];

/**
 * The footer is the ticker — fixed to the bottom of the viewport.
 * Pauses on hover, on keyboard focus, and with the Pause toggle (WCAG 2.2.2).
 */
export default function TickerFooter() {
  const [paused, setPaused] = useState(false);
  const all = [`© ${new Date().getFullYear()}`, ...items];

  return (
    <footer
      data-paused={paused ? "" : undefined}
      className="fixed bottom-0 inset-x-0 z-40 bg-paper border-t border-rule overflow-hidden flex items-stretch"
    >
      <div className="flex-1 min-w-0 overflow-hidden py-3 select-none">
        <div className="animate-marquee flex w-max whitespace-nowrap mono-label text-muted">
          {[0, 1].map((copy) => (
            <span key={copy} aria-hidden={copy === 1} className="flex">
              {all.map((item) => (
                <span key={item} className="flex items-center">
                  <span className="px-6">{item}</span>
                  <span aria-hidden className="text-accent">
                    /
                  </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Play ticker" : "Pause ticker"}
        className="shrink-0 border-l border-rule bg-paper px-4 mono-label text-muted hover:text-ink focus-visible:text-ink focus-visible:-outline-offset-4 transition-colors"
      >
        {paused ? "Play" : "Pause"}
      </button>
    </footer>
  );
}
