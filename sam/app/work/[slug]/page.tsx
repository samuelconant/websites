import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";

const caseStudies: Record<string, {
  title: string;
  subtitle: string;
  tags: string[];
  /** Lead outcome shown large in the margin. Only figures already stated in the copy. */
  figure?: { value: string; caption: string };
  overview: string;
  sections: { heading: string; body: string }[];
}> = {
  "agentic-development-program": {
    title: "Agentic Development Program",
    subtitle: "3,000 people. Six months. Giving non-technical builders a real path from idea to merged PR.",
    tags: ["AI", "Enablement", "Culture", "Operations"],
    figure: { value: "3,000", caption: "people on track through the program" },
    overview: `
      Agentic coding tools didn't need another demo — they needed an on-ramp. I lead the design track
      of Yahoo's company-wide Agentic Development Program, now on track to put 3,000 people through it.
      My charge is the 250–300 non-technical builders — product designers, centralized design partners
      like UXR and content design, and PMs — the people with the most to gain and the steepest curve.
      The goal is democratization in the literal sense: anyone can take an idea from a blank repo all
      the way to a merged PR.
    `,
    sections: [
      {
        heading: "The Problem",
        body: `Agentic tools were everywhere and adoption was nowhere. The people with the most to gain —
        product designers, UXR, content designers, PMs — were the least equipped to start. Repos assumed
        engineering context, documentation assumed fluency, and the gap between "this is the future" and
        "I can actually do this" kept widening. Enthusiasm without an on-ramp curdles into skepticism.`,
      },
      {
        heading: "The Work",
        body: `I lead, develop, and teach the design track — and we built the airplane while flying it, because
        the marketplace is moving too fast to wait for a finished curriculum. The program grew from teaching
        sessions into hands-on work with squads across Yahoo, bringing whole teams — PM, design, and engineering —
        to a level of agentic maturity where their repos can accept contributions from technical and non-technical
        people alike. I'm personally responsible for training the 250–300 non-technical builders, and I own
        planning and operations for the Central Design Partners cohort — roughly 60 people across design
        disciplines — taking every one of them through to agentic maturity. Just as important as the technical
        scaffolding was the human side: empathetic, one-on-one relationship building with people who'd been told
        for years that code wasn't for them.`,
      },
      {
        heading: "The Outcome",
        body: `On track for 3,000 people through the program. The design track wraps in November 2026 after a
        six-month run, having given non-technical builders a real path from idea to committed code. It's shifted
        my own role too — I now sit alongside design leadership, weighing in on company-wide design decisions from
        the vantage point of where the practice is heading.`,
      },
    ],
  },
  "yahoo-for-creators": {
    title: "Yahoo for Creators",
    subtitle: "A 0-to-1 creator platform — and the first time a designer reset how Yahoo thought about what it could build.",
    tags: ["0→1", "Strategy", "Stakeholder Alignment"],
    figure: { value: "0→1", caption: "taken all the way to the board" },
    overview: `
      I wasn't handed a brief — I was brought in to shake up how Yahoo built. The mandate was to
      stress-test the CMS and push on what the engineering org could actually deliver for the front
      end, and Yahoo for Creators became the vehicle. It was the first time legacy engineering teams
      had to build alongside a designer and a design team as real partners, and the first time the
      company seriously entertained handing creative control to the people using the product.
    `,
    sections: [
      {
        heading: "The Problem",
        body: `Yahoo wasn't a briefs-and-PRDs company — I came in cold, without a spec, into an org that had
        never really designed around giving creators autonomy. The technical challenge was pushing the CMS far
        enough that editors could build their own layouts and designers could affect the codebase directly, all
        inside guardrails that kept everything on brand. The harder problem was cultural: legacy engineering
        teams weren't used to a designer at the table with a point of view on the technical underpinnings, and
        leadership had never considered ceding creative expression and control to the user in the first place.`,
      },
      {
        heading: "The Work",
        body: `I'd come out of Hearst working on editorial surfaces, so I understood the CMS from both sides —
        how editors actually use them, and how much power there is in giving designers the autonomy to shape the
        system and editors the freedom to build within it. I knew what we could push on and what we could pull
        off; I just had to find the right engineers to build it with. The bigger job was alignment — making the
        case, all the way up to the board, for a kind of creative freedom Yahoo had never offered. Most of that
        came down to story. I partnered with a visionary product lead, David Lundblad, and we mind-melded — we
        spoke one language, and I could translate what he was describing into something people could see. That
        partnership is where I really learned how much of the value lives in the narrative, and how the visuals
        are there to carry the story, not the other way around.`,
      },
      {
        heading: "The Outcome",
        body: `The board saw the future in it — a real monetization opportunity, and something that felt
        genuinely different for Yahoo for the first time in years. It's one of the things I'm proudest of: I was
        the first designer to come in and reset how the company thought about what it could build and still be on
        brand. From there it went the way these things often go — handed to squads to carry forward, where a
        business call landed on not giving users that creative expression and control after all. The program and
        the monetization model shipped and found mild success. What got lost was the part that would have made
        creators want to evangelize it — the excitement, the visual pull. It's a case study in both what design
        can unlock at the strategy level, and what quietly leaks out when the boldest idea gets value-engineered
        downstream.`,
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
    figure: { value: "20+", caption: "products, one source of truth" },
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.subtitle,
    openGraph: {
      title: `${cs.title} — Sam Conant`,
      description: cs.subtitle,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) notFound();

  return (
    <main className="w-full max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-20">

      <nav className="grid md:grid-cols-12 gap-x-8 mb-12 md:mb-20">
        <Link href="/" className="md:col-span-3 font-mono text-meta uppercase text-ink-muted hover:text-accent transition-colors w-fit">
          ← Sam Conant
        </Link>
      </nav>

      {/* Header */}
      <header className="grid md:grid-cols-12 gap-x-8 pb-16 md:pb-20">
        <p className="md:col-start-4 md:col-span-8 font-mono text-meta uppercase text-ink-muted mb-6">
          {cs.tags.join(" · ")}
        </p>
        <h1 className="md:col-start-4 md:col-span-8 font-serif font-light text-h1 mb-6 text-balance">{cs.title}</h1>
        <p className="md:col-start-4 md:col-span-7 text-lede text-ink-muted">{cs.subtitle}</p>
      </header>

      {/* Overview, with the lead outcome in the margin */}
      <section className="grid md:grid-cols-12 gap-x-8 gap-y-8 py-16 border-t border-rule">
        <div className="md:col-span-3">
          {cs.figure ? (
            <>
              <p className="font-serif font-light text-numeral text-accent">{cs.figure.value}</p>
              <p className="font-mono text-meta uppercase text-ink-muted mt-3 max-w-[16ch]">{cs.figure.caption}</p>
            </>
          ) : (
            <p className="font-mono text-meta uppercase text-ink-muted md:pt-1">Overview</p>
          )}
        </div>
        <p className="md:col-span-7 font-serif text-h2 font-light max-w-[40ch]">{cs.overview.trim()}</p>
      </section>

      {cs.sections.map((s) => {
        const isPlaceholder = s.body.trim() === "Placeholder";
        return (
          <section key={s.heading} className="grid md:grid-cols-12 gap-x-8 py-16 border-t border-rule">
            <h2 className="md:col-span-3 font-mono text-meta uppercase text-ink-muted mb-6 md:mb-0 md:pt-1 md:sticky md:top-8 md:self-start">
              {s.heading.replace(/^The /, "")}
            </h2>
            <Reveal className="md:col-span-7">
              <p className={`max-w-[64ch] ${isPlaceholder ? "text-ink-muted italic" : ""}`}>
                {isPlaceholder ? "Write-up in progress." : s.body}
              </p>
            </Reveal>
          </section>
        );
      })}

      <footer className="grid md:grid-cols-12 gap-x-8 border-t border-rule pt-8">
        <Link href="/" className="md:col-start-4 md:col-span-8 font-mono text-meta uppercase text-ink-muted hover:text-accent transition-colors w-fit">
          ← All work
        </Link>
      </footer>

    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}
