import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main className="page-container page-top">
      <Reveal>
        <h1 className="uppercase font-semibold tracking-[-0.04em] leading-[0.85] text-[clamp(3rem,10vw,8rem)] mb-16">
          About
          <span className="text-accent">.</span>
        </h1>
      </Reveal>

      <div className="page-grid gap-y-16 items-start">
        {/* Bio + meta rail — left */}
        <div className="col-span-4 sm:col-span-6 lg:col-span-6 order-2 lg:order-1">
          <Reveal delay={100}>
            <div className="space-y-6 text-ink-soft leading-relaxed text-lg">
              <p>
                {/* Placeholder bio — Harrison writes this in his own voice. */}
                I&apos;m Harrison Conant, a digital artist working in Procreate
                on iPad. I&apos;m drawn to the part of making art that most
                portfolios hide: the process. Every piece on this site leads
                with the time-lapse of how it was actually made — the early
                sketches, the wrong turns, the moment it started to work.
              </p>
              <p>
                Right now I&apos;m building this body of work as I apply to art
                programs. If you&apos;re here from one of them: welcome, and
                start with the videos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 flex flex-col gap-8 mono-label border-t border-rule pt-6">
              <div>
                <p className="text-muted mb-2">Tools</p>
                <p className="leading-6">Procreate / iPad Pro / Apple Pencil</p>
              </div>
              <div>
                <p className="text-muted mb-2">Focus</p>
                <p className="leading-6">Digital illustration / Process</p>
              </div>
              <div>
                <p className="text-muted mb-2">Contact</p>
                {/* Swap in a real address when ready */}
                <p className="leading-6">hello@harrisonconant.com</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Portrait — right. The gold block and the portrait drift at
            different speeds, so scrolling separates them. */}
        <Reveal
          delay={150}
          className="col-span-4 sm:col-span-5 lg:col-span-5 lg:col-start-8 order-1 lg:order-2"
        >
          <figure className="group w-[calc(100%-1.5rem)] ml-6 sm:w-full sm:ml-0">
            {/* The block sizes to the portrait only, so the caption below
                always sits on paper */}
            <div className="relative">
              {/* Offset accent block — one gutter down-left, drifting a touch
                faster than the portrait so scrolling separates them */}
              <Parallax
                speed={-0.05}
                className="absolute -left-6 -bottom-6 w-full h-full -z-10"
              >
                <div
                  aria-hidden
                  className="w-full h-full bg-accent art-corners"
                />
              </Parallax>

              {/* Vertical mono label riding the left edge, just clear of the
                mustard block so it stays on paper */}
              <span className="hidden sm:block absolute -left-12 top-6 z-10 mono-label text-muted [writing-mode:vertical-rl] rotate-180">
                Portrait / 2025
              </span>

              {/* Portrait drifts gently — the slower layer */}
              <Parallax speed={-0.04}>
                <div className="portrait-duotone portrait-grain relative overflow-hidden art-corners ring-1 ring-ink/10 -rotate-2 motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:rotate-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/about/harrison.jpg"
                    alt="Harrison Conant"
                    className="portrait-bw block w-full h-auto"
                  />
                </div>
              </Parallax>
            </div>

            <figcaption className="mt-12 mono-label text-muted">
              <span aria-hidden className="text-accent">
                ●
              </span>{" "}
              Harrison Conant — the artist, off the canvas
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </main>
  );
}
