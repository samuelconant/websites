import Link from "next/link";
import Reveal from "@/components/Reveal";

const caseStudies = [
  {
    slug: "agentic-development-program",
    title: "Agentic Development Program",
    description: "On track for 3,000 people. I lead the design track — training the non-technical builders to take an idea from a blank repo to a merged PR.",
    tags: ["AI", "Enablement", "Culture"],
    figure: { value: "3,000", caption: "people, on track" },
  },
  {
    slug: "yahoo-for-creators",
    title: "Yahoo for Creators",
    description: "A 0-to-1 creator platform. Coming in cold, aligning the org, and taking a bolder idea of what Yahoo could build all the way to the board.",
    tags: ["0→1", "Strategy", "Stakeholder Alignment"],
    figure: { value: "0→1", caption: "taken to the board" },
  },
  {
    slug: "yahoo-mail",
    title: "Yahoo Mail Reimagined",
    description: "A bento box-style life-aware inbox. Product strategy above the UI layer.",
    tags: ["Product Strategy", "Consumer", "AI"],
  },
  {
    slug: "project-orion",
    title: "Project Orion",
    description: "Yahoo's browser. Leading through ambiguity with a POV-driven product strategy.",
    tags: ["Browser", "AI Era", "Team Dynamics"],
  },
  {
    slug: "design-hub",
    title: "Central Design Studio",
    description: "Company-wide design source of truth. Tooling, culture, and design at scale.",
    tags: ["Design Systems", "Scale", "Ops"],
    figure: { value: "20+", caption: "products, one practice" },
  },
];

const experience = [
  { year: "2022–present", role: "Sr. Principal Product Designer & AI Design Lead", company: "Yahoo" },
  { year: "2019–2022", role: "Director of Design", company: "Yahoo" },
  { year: "2016–2019", role: "Senior Design Lead", company: "Yahoo" },
];

/** A memo section: mono label in the left rail, content in columns 4–11. */
function Section({ label, children, first = false }: { label: string; children: React.ReactNode; first?: boolean }) {
  return (
    <section className={`grid md:grid-cols-12 gap-x-8 py-16 md:py-20 ${first ? "" : "border-t border-rule"}`}>
      <p className="md:col-span-3 font-mono text-meta uppercase text-ink-muted mb-6 md:mb-0 md:pt-1">{label}</p>
      <div className="md:col-span-8">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="w-full max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-20">

      {/* Opening — philosophy first, not a hero */}
      <Section label="Sam Conant" first>
        <h1 className="font-serif font-light text-display mb-8 max-w-[18ch] text-balance">
          Design happens in your head before it happens in any tool.
        </h1>
        <p className="text-lede text-ink-muted max-w-[58ch]">
          I lead design strategy for products used by hundreds of millions of people. My work sits at the
          intersection of narrative, systems thinking, and the kind of clarity that makes executives
          carry ideas forward on their own.
        </p>
      </Section>

      {/* Case Studies — numbered memo entries */}
      <Section label="Work">
        <ol>
          {caseStudies.map((cs, i) => (
            <li key={cs.slug} className="border-b border-rule">
              <Reveal>
                <Link
                  href={`/work/${cs.slug}`}
                  className={`group grid sm:grid-cols-[1fr_auto] gap-x-10 gap-y-4 py-8 md:py-10 ${i === 0 ? "pt-0 md:pt-0" : ""}`}
                >
                  <div>
                    <p className="font-mono text-meta text-ink-muted mb-3">{String(i + 1).padStart(2, "0")}</p>
                    <h2 className="font-serif text-h2 mb-3">
                      <span className="memo-link">{cs.title}</span>
                      <span aria-hidden className="ml-2 text-ink-faint group-hover:text-accent transition-colors">→</span>
                    </h2>
                    <p className="text-ink-muted max-w-[60ch] mb-4">{cs.description}</p>
                    <p className="font-mono text-meta uppercase text-ink-muted">{cs.tags.join(" · ")}</p>
                  </div>
                  {cs.figure && (
                    <div className="sm:text-right sm:pt-6 sm:min-w-[9rem]">
                      <p className="font-serif font-light text-numeral text-accent">{cs.figure.value}</p>
                      <p className="font-mono text-meta uppercase text-ink-muted mt-2 whitespace-nowrap">{cs.figure.caption}</p>
                    </div>
                  )}
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* Philosophy */}
      <Section label="How I Work">
        <div className="flex flex-col gap-8 max-w-[52ch]">
          {[
            "The democratization of tools raises the value of judgment, not execution.",
            "Humanistic design means injecting human qualities into digital artifacts — not just making things pretty.",
            "The real differentiator right now is relationships and communication. Anyone can ship.",
          ].map((line, i) => (
            <Reveal key={i}>
              <p className="font-serif text-h2 font-light italic border-l border-accent pl-6">{line}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section label="Experience">
        <dl className="flex flex-col">
          {experience.map((e) => (
            <div key={e.year} className="grid sm:grid-cols-[9rem_1fr] gap-x-8 gap-y-1 py-4 border-b border-rule first:pt-0">
              <dt className="font-mono text-meta uppercase text-ink-muted sm:pt-1">{e.year}</dt>
              <dd>
                <span className="font-medium">{e.role}</span>
                <span className="text-ink-faint mx-2">·</span>
                <span className="text-ink-muted">{e.company}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* About */}
      <Section label="About">
        <p className="text-ink-muted max-w-[64ch]">
          I've spent my career building design practices, not just products. At Yahoo, that's meant
          leading teams across consumer apps, internal platforms, and AI-era products — always with
          the conviction that the most important design work happens in the room, not in the file.
          Today I sit alongside design leadership as a peer without a team of my own — weighing in
          on company-wide design decisions and leading the design track of Yahoo's Agentic
          Development Program.
        </p>
      </Section>

      {/* Footer */}
      <footer className="grid md:grid-cols-12 gap-x-8 border-t border-rule pt-8">
        <p className="md:col-start-4 md:col-span-8 font-mono text-meta uppercase text-ink-muted">
          samuelconant.com — available for select opportunities
        </p>
      </footer>

    </main>
  );
}
