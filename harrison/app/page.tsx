import Link from "next/link";
import { pieces } from "@/lib/pieces";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

/**
 * Gallery placement per position, repeating every two rows.
 * Mobile: 1 column. sm: 2 equal columns. lg: a mirrored 7/4 then 4/7 split
 * on the 12-column grid. Only the narrow item is staggered (one row gap)
 * and only it drifts, always in the same direction.
 * Class names stay literal so Tailwind picks them up.
 */
const placements = [
  {
    // Row A, wide, left
    cell: "lg:col-span-7 lg:col-start-1",
    aspect: "aspect-[4/5]",
    narrow: false,
    delay: 0,
  },
  {
    // Row A, narrow, right
    cell: "lg:col-span-4 lg:col-start-9 lg:mt-24",
    aspect: "aspect-square",
    narrow: true,
    delay: 100,
  },
  {
    // Row B, narrow, left
    cell: "lg:col-span-4 lg:col-start-1 lg:mt-24",
    aspect: "aspect-[3/4]",
    narrow: true,
    delay: 0,
  },
  {
    // Row B, wide, right
    cell: "lg:col-span-7 lg:col-start-6",
    aspect: "aspect-[4/5]",
    narrow: false,
    delay: 100,
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero — type is the image */}
      <section className="page-container page-top pb-16">
        <h1 className="uppercase font-semibold tracking-[-0.04em] leading-[0.85] text-[clamp(3.5rem,13vw,11rem)]">
          <Reveal>I draw</Reveal>
          <Reveal delay={100}>
            things<span className="text-accent">.</span>
          </Reveal>
        </h1>

        <Reveal delay={250}>
          <div className="page-grid mt-12 gap-y-6 items-baseline">
            <p className="col-span-4 lg:col-span-4 mono-label text-muted">
              Portfolio — {new Date().getFullYear()}
              <br />
              Digital art / Procreate on iPad
            </p>
            <p className="col-span-4 lg:col-span-5 lg:col-start-8 text-ink-soft leading-relaxed">
              Every piece here leads with the time-lapse of how it was actually
              made — the early sketches, the wrong turns, the moment it started
              to work.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="page-container">
        <div className="flex items-baseline justify-between mono-label text-muted border-t border-rule pt-4 mb-12">
          <p>Selected work</p>
          <p>({String(pieces.length).padStart(2, "0")})</p>
        </div>

        <div className="page-grid items-start gap-y-16 lg:gap-y-24">
          {pieces.map((piece, i) => {
            const p = placements[i % placements.length];
            const index = String(i + 1).padStart(2, "0");
            const card = (
              <Reveal delay={p.delay}>
                <Link href={`/work/${piece.slug}`} className="group block">
                  <div
                    className={`art-corners relative ${p.aspect} overflow-hidden bg-wash ring-1 ring-ink/5`}
                  >
                    {piece.thumbnail ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={piece.thumbnail}
                        alt={piece.title}
                        loading={i > 3 ? "lazy" : undefined}
                        className="absolute inset-0 w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.04] motion-safe:group-focus-visible:scale-[1.04]"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.04] motion-safe:group-focus-visible:scale-[1.04]"
                        style={{
                          background: `linear-gradient(${135 + i * 40}deg, ${piece.tone[0]}, ${piece.tone[1]})`,
                        }}
                      />
                    )}

                    {piece.videoUrl && (
                      <span className="absolute top-4 left-4 mono-label bg-ink text-paper px-2 py-1">
                        ▶ Process
                      </span>
                    )}
                  </div>

                  {/* Swiss caption row — the index lives here, off the art */}
                  <div className="mt-3 flex items-baseline gap-3 mono-label">
                    <span className="text-accent-ink">{index}</span>
                    <span className="text-ink group-hover:text-accent-ink group-focus-visible:text-accent-ink transition-colors">
                      {piece.title}
                    </span>
                    <span className="ml-auto text-muted">{piece.year}</span>
                  </div>
                </Link>
              </Reveal>
            );
            return (
              <div key={piece.slug} className={`col-span-4 ${p.cell}`}>
                {p.narrow ? <Parallax speed={0.03} media="(min-width: 64rem)">{card}</Parallax> : card}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
