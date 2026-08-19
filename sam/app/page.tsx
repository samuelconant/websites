import Link from "next/link";

const caseStudies = [
  {
    slug: "agentic-development-program",
    title: "Agentic Development Program",
    description: "600+ people, three waves. Making agentic development real for designers, PMs, and everyone in between.",
    tags: ["AI", "Enablement", "Culture"],
  },
  {
    slug: "yahoo-for-creators",
    title: "Yahoo for Creators",
    description: "0-to-1 creator platform. Stakeholder alignment from zero to board-level buy-in.",
    tags: ["0→1", "Strategy", "Stakeholder Alignment"],
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
  },
];

const experience = [
  { year: "2022–present", role: "VP of Design", company: "Yahoo" },
  { year: "2019–2022", role: "Director of Design", company: "Yahoo" },
  { year: "2016–2019", role: "Senior Design Lead", company: "Yahoo" },
];

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 font-sans">

      {/* Opening — philosophy first, not a hero */}
      <section className="mb-24">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-6">Sam Conant</p>
        <h1 className="text-4xl font-light leading-snug text-zinc-900 mb-8 max-w-xl">
          Design happens in your head before it happens in any tool.
        </h1>
        <p className="text-lg text-zinc-500 leading-relaxed max-w-lg">
          I lead design strategy for products used by hundreds of millions of people. My work sits at the
          intersection of narrative, systems thinking, and the kind of clarity that makes executives
          carry ideas forward on their own.
        </p>
      </section>

      {/* Case Studies */}
      <section className="mb-24">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-8">Work</p>
        <div className="flex flex-col gap-px bg-zinc-100">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group bg-white px-0 py-8 flex flex-col gap-3 hover:bg-zinc-50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">
                  {cs.title}
                </h2>
                <span className="text-zinc-300 group-hover:text-zinc-500 transition-colors mt-1">↗</span>
              </div>
              <p className="text-zinc-500 leading-relaxed">{cs.description}</p>
              <div className="flex gap-2 flex-wrap">
                {cs.tags.map((t) => (
                  <span key={t} className="text-xs text-zinc-400 border border-zinc-200 px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="mb-24">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-8">How I Work</p>
        <div className="flex flex-col gap-6 max-w-lg">
          {[
            "The democratization of tools raises the value of judgment, not execution.",
            "Humanistic design means injecting human qualities into digital artifacts — not just making things pretty.",
            "The real differentiator right now is relationships and communication. Anyone can ship.",
          ].map((line, i) => (
            <p key={i} className="text-zinc-600 leading-relaxed border-l-2 border-zinc-200 pl-5">
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-24">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-8">Experience</p>
        <div className="flex flex-col gap-6">
          {experience.map((e) => (
            <div key={e.year} className="flex gap-8 items-baseline">
              <span className="text-sm text-zinc-400 w-28 shrink-0">{e.year}</span>
              <div>
                <span className="text-zinc-900 font-medium">{e.role}</span>
                <span className="text-zinc-400 mx-2">·</span>
                <span className="text-zinc-500">{e.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mb-24">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-6">About</p>
        <p className="text-zinc-500 leading-relaxed max-w-lg">
          I've spent my career building design practices, not just products. At Yahoo, that's meant
          leading teams across consumer apps, internal platforms, and AI-era products — always with
          the conviction that the most important design work happens in the room, not in the file.
          Today I sit alongside design leadership as a peer without a team of my own — weighing in
          on company-wide design decisions and leading the design track of Yahoo's Agentic
          Development Program.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 pt-8">
        <p className="text-sm text-zinc-400">samuelconant.com — available for select opportunities</p>
      </footer>

    </main>
  );
}
