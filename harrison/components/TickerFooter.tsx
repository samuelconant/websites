const items = [
  "Harrison Conant",
  "Process first",
  "Drawn in Procreate",
  "Mistakes included",
  "Time-lapse everything",
  "harrisonconant.com",
  "Usually at night",
];

/** The footer is the ticker — fixed to the bottom of the viewport. */
export default function TickerFooter() {
  const all = [`© ${new Date().getFullYear()}`, ...items];

  return (
    <footer className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-zinc-200 py-3 overflow-hidden select-none">
      <div className="animate-marquee flex w-max whitespace-nowrap font-mono text-xs uppercase tracking-widest text-zinc-500">
        {[0, 1].map((copy) => (
          <span key={copy} aria-hidden={copy === 1} className="flex">
            {all.map((item) => (
              <span key={item} className="flex items-center">
                <span className="px-6">{item}</span>
                <span className="text-accent">/</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </footer>
  );
}
