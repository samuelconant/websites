import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-container page-top">
      <h1 className="uppercase font-semibold tracking-[-0.04em] leading-[0.85] text-[clamp(3rem,10vw,8rem)] mb-8">
        Nothing
        <br />
        here<span className="text-accent">.</span>
      </h1>
      <Link
        href="/"
        className="mono-label text-muted hover:text-ink focus-visible:text-ink transition-colors"
      >
        ← Back to the work
      </Link>
    </main>
  );
}
