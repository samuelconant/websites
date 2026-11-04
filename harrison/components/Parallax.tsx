"use client";

import { useEffect, useRef } from "react";

/**
 * Drifts children vertically relative to scroll. `speed` is the fraction of
 * the element's distance from viewport center applied as offset — keep it
 * small (0.03–0.05). Negative values drift opposite the scroll direction.
 * Off when the user prefers reduced motion (and follows changes to it).
 * `media` limits the drift to viewports matching that query.
 */
export default function Parallax({
  children,
  speed = 0.03,
  className = "",
  media,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  media?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const allow = media ? window.matchMedia(media) : null;
    const off = () => mq.matches || (allow ? !allow.matches : false);

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-mid * speed).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const stop = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      el.style.transform = "";
    };
    const start = () => {
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    };
    let running = false;
    const sync = () => {
      if (off() && running) {
        stop();
        running = false;
      } else if (!off() && !running) {
        start();
        running = true;
      }
    };

    sync();
    mq.addEventListener("change", sync);
    allow?.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      allow?.removeEventListener("change", sync);
      stop();
    };
  }, [speed, media]);

  return (
    <div ref={ref} className={`motion-safe:will-change-transform ${className}`}>
      {children}
    </div>
  );
}
