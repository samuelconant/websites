import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-28">
      <h1 className="uppercase font-semibold tracking-[-0.04em] leading-[0.85] text-[clamp(3rem,10vw,8rem)] mb-8">
        Nothing
        <br />
        here<span className="text-accent">.</span>
      </h1>
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors"
      >
        ← Back to the work
      </Link>
    </main>
  );
}
