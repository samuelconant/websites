import Link from "next/link";
import { pieces } from "@/lib/pieces";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

/**
 * Exploded-grid placement per gallery position (12-col grid on sm+).
 * Class names stay literal so Tailwind picks them up.
 */
const placements = [
  {
    cell: "col-span-12 sm:col-span-7",
    aspect: "aspect-[4/5]",
    speed: 0.05,
    delay: 0,
  },
  {
    cell: "col-span-12 sm:col-span-4 sm:col-start-9 sm:mt-40",
    aspect: "aspect-square",
    speed: -0.04,
    delay: 100,
  },
  {
    cell: "col-span-12 sm:col-span-5 sm:col-start-8 sm:-mt-24",
    aspect: "aspect-[3/4]",
    speed: 0.07,
    delay: 0,
  },
  {
    cell: "col-span-12 sm:col-span-6 sm:col-start-2 sm:mt-20",
    aspect: "aspect-[4/5]",
    speed: -0.05,
    delay: 100,
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero — type is the image */}
      <section className="max-w-6xl mx-auto px-6 pt-20 sm:pt-28 pb-16">
        <h1 className="uppercase font-semibold tracking-[-0.04em] leading-[0.85] text-[clamp(3.5rem,13vw,11rem)]">
          <Reveal>I draw</Reveal>
          <Reveal delay={100}>
            things<span className="text-accent">.</span>
          </Reveal>
        </h1>

        <Reveal delay={250}>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              Portfolio — {new Date().getFullYear()}
              <br />
              Digital art / Procreate on iPad
            </p>
            <p className="text-zinc-500 leading-relaxed max-w-sm sm:text-right">
              Every piece here leads with the time-lapse of how it was actually
              made — the early sketches, the wrong turns, the moment it started
              to work.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Exploded gallery */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-widest text-zinc-400 border-t border-zinc-200 pt-5 mb-12">
          <p>Selected work</p>
          <p>({String(pieces.length).padStart(2, "0")})</p>
        </div>

        <div className="grid grid-cols-12 gap-x-5 gap-y-20 sm:gap-y-8">
          {pieces.map((piece, i) => {
            const p = placements[i % placements.length];
            const index = String(i + 1).padStart(2, "0");
            return (
              <div key={piece.slug} className={p.cell}>
                <Parallax speed={p.speed}>
                  <Reveal delay={p.delay}>
                    <Link href={`/work/${piece.slug}`} className="group block">
                      <div
                        className={`art-corners relative ${p.aspect} overflow-hidden bg-zinc-100 ring-1 ring-black/5`}
                      >
                        {piece.thumbnail ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={piece.thumbnail}
                            alt={piece.title}
                            loading={i > 3 ? "lazy" : undefined}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                        ) : (
                          <div
                            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                            style={{
                              background: `linear-gradient(${135 + i * 40}deg, ${piece.tone[0]}, ${piece.tone[1]})`,
                            }}
                          />
                        )}

                        {/* Oversized index, revealed on hover */}
                        <span className="absolute bottom-2 right-4 font-semibold tracking-tighter text-[clamp(3rem,6vw,5rem)] leading-none text-zinc-950/0 group-hover:text-zinc-950/80 transition-colors duration-300">
                          {index}
                        </span>

                        {piece.videoUrl && (
                          <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest bg-zinc-950 text-white px-2 py-1">
                            ▶ Process
                          </span>
                        )}
                      </div>

                      {/* Swiss caption row */}
                      <div className="mt-3 flex items-baseline gap-3 font-mono text-xs uppercase tracking-widest">
                        <span className="text-accent">{index}</span>
                        <span className="text-zinc-950 group-hover:text-accent transition-colors">
                          {piece.title}
                        </span>
                        <span className="ml-auto text-zinc-400">
                          {piece.year}
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                </Parallax>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
