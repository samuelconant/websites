import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-20 sm:pt-28">
      <Reveal>
        <h1 className="uppercase font-semibold tracking-[-0.04em] leading-[0.85] text-[clamp(3rem,10vw,8rem)] mb-16">
          About
          <span className="text-accent">.</span>
        </h1>
      </Reveal>

      <div className="grid grid-cols-12 gap-x-5">
        <Reveal delay={100} className="col-span-12 sm:col-span-7">
          <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
            <p>
              {/* Placeholder bio — Harrison writes this in his own voice. */}
              I&apos;m Harrison Conant, a digital artist working in Procreate
              on iPad. I&apos;m drawn to the part of making art that most
              portfolios hide: the process. Every piece on this site leads with
              the time-lapse of how it was actually made — the early sketches,
              the wrong turns, the moment it started to work.
            </p>
            <p>
              Right now I&apos;m building this body of work as I apply to art
              programs. If you&apos;re here from one of them: welcome, and
              start with the videos.
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={200}
          className="col-span-12 sm:col-span-4 sm:col-start-9 mt-12 sm:mt-2"
        >
          <div className="flex flex-col gap-8 font-mono text-xs uppercase tracking-widest border-t border-zinc-200 pt-6">
            <div>
              <p className="text-zinc-400 mb-2">Tools</p>
              <p className="leading-relaxed">
                Procreate / iPad Pro / Apple Pencil
              </p>
            </div>
            <div>
              <p className="text-zinc-400 mb-2">Focus</p>
              <p className="leading-relaxed">Digital illustration / Process</p>
            </div>
            <div>
              <p className="text-zinc-400 mb-2">Contact</p>
              {/* Swap in a real address when ready */}
              <p className="leading-relaxed">hello@harrisonconant.com</p>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
