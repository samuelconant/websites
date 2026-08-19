import Link from "next/link";
import { notFound } from "next/navigation";

const caseStudies: Record<string, {
  title: string;
  subtitle: string;
  tags: string[];
  overview: string;
  sections: { heading: string; body: string }[];
}> = {
  "agentic-development-program": {
    title: "Agentic Development Program",
    subtitle: "600+ people, three waves. Making agentic development real for designers, PMs, and everyone in between.",
    tags: ["AI", "Enablement", "Culture"],
    overview: `
      Agentic coding tools didn't need another demo — they needed an on-ramp. With two co-leads,
      I run the design track of a company-wide program that has now put over 600 people, including
      about a hundred designers, through hands-on agentic development. Three waves in, it keeps
      growing — and it's changed who gets to build at Yahoo.
    `,
    sections: [
      {
        heading: "The Problem",
        body: `Agentic tools were everywhere and adoption was nowhere. The people with the most to gain —
        designers, PMs, non-technical builders — were the least equipped to start. Repos assumed engineering
        context, documentation assumed fluency, and the gap between "this is the future" and "I can actually
        do this" was widening. Enthusiasm without an on-ramp curdles into skepticism.`,
      },
      {
        heading: "The Work",
        body: `The program evolved from teaching sessions into something much more hands-on: working directly
        with nearly every squad at Yahoo to bring whole teams — PM, design, and engineering together — to a level
        of agentic maturity where their repos can accept contributions from technical and non-technical folks
        alike. A designer or PM can open a real codebase and ship real work with an agent alongside them. Just as
        important as the technical scaffolding was the human side — empathetic, one-on-one relationship building
        with people who'd been told for years that code wasn't for them. I lead the design track with two
        co-leads, shaping the curriculum around how designers actually think and work.`,
      },
      {
        heading: "The Outcome",
        body: `Three waves and counting. Over 600 people through the program, roughly a hundred of them designers.
        The program keeps growing and evolving, and it's shifted my own role too — I now sit alongside design
        leadership, weighing in on company-wide design decisions from the vantage point of where the practice
        is heading.`,
      },
    ],
  },
  "yahoo-for-creators": {
    title: "Yahoo for Creators",
    subtitle: "0-to-1 creator platform. From blank whiteboard to board-level buy-in.",
    tags: ["0→1", "Strategy", "Stakeholder Alignment"],
    overview: `
      Yahoo had no creator story. The brief was vague — "build something for creators" — and the
      organization had every reason to second-guess it. What followed was a year of translating
      ambiguity into alignment, and alignment into a product that could survive contact with executives.
    `,
    sections: [
      {
        heading: "The Problem",
        body: `Placeholder — add the real story here. What was broken, who felt it, and why it was hard to fix.`,
      },
      {
        heading: "The Work",
        body: `Placeholder — the actual design and strategy work. Not the deliverables, the decisions.`,
      },
      {
        heading: "The Outcome",
        body: `Placeholder — what changed. Metrics if they exist, but also organizational and cultural shifts.`,
      },
    ],
  },
  "yahoo-mail": {
    title: "Yahoo Mail Reimagined",
    subtitle: "A bento box-style life-aware inbox. Product strategy above the UI layer.",
    tags: ["Product Strategy", "Consumer", "AI"],
    overview: `
      Email hasn't changed in 20 years. Not the UX — the assumption. We asked what it would look like
      if your inbox understood your life, not just your messages.
    `,
    sections: [
      { heading: "The Problem", body: `Placeholder` },
      { heading: "The Work", body: `Placeholder` },
      { heading: "The Outcome", body: `Placeholder` },
    ],
  },
  "project-orion": {
    title: "Project Orion",
    subtitle: "Yahoo's browser. Leading through ambiguity with a POV-driven product strategy.",
    tags: ["Browser", "AI Era", "Team Dynamics"],
    overview: `
      Building a browser in the AI era is a bet on what browsers become, not what they are.
      This is a story about leading a team when no one knows what winning looks like.
    `,
    sections: [
      { heading: "The Problem", body: `Placeholder` },
      { heading: "The Work", body: `Placeholder` },
      { heading: "The Outcome", body: `Placeholder` },
    ],
  },
  "design-hub": {
    title: "Central Design Studio",
    subtitle: "Company-wide design source of truth. Tooling, culture, and design at scale.",
    tags: ["Design Systems", "Scale", "Ops"],
    overview: `
      When design sprawls across 20+ products and hundreds of contributors, the real product is
      the practice itself. This is how we built the infrastructure for design to work at Yahoo's scale.
    `,
    sections: [
      { heading: "The Problem", body: `Placeholder` },
      { heading: "The Work", body: `Placeholder` },
      { heading: "The Outcome", body: `Placeholder` },
    ],
  },
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-24 font-sans">

      <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-700 transition-colors mb-16 inline-block">
        ← Back
      </Link>

      <div className="flex gap-2 flex-wrap mb-6">
        {cs.tags.map((t) => (
          <span key={t} className="text-xs text-zinc-400 border border-zinc-200 px-2 py-0.5 rounded-full">
            {t}
          </span>
        ))}
      </div>

      <h1 className="text-4xl font-light text-zinc-900 mb-4">{cs.title}</h1>
      <p className="text-xl text-zinc-500 mb-16 leading-relaxed">{cs.subtitle}</p>

      <p className="text-zinc-600 leading-relaxed mb-16 text-lg border-l-2 border-zinc-200 pl-6">
        {cs.overview.trim()}
      </p>

      <div className="flex flex-col gap-16">
        {cs.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-4">{s.heading}</h2>
            <p className="text-zinc-600 leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>

      <div className="border-t border-zinc-100 mt-24 pt-8">
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-700 transition-colors">
          ← All work
        </Link>
      </div>

    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}
