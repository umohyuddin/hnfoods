const row1 = ["React", "Next.js", "Angular", "Vue", "Node.js", "NestJS", "FastAPI", "Python"];
const row2 = ["AWS", "Azure", "DigitalOcean", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "OpenAI", "AutoGen"];

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-4 whitespace-nowrap w-max animate-marquee"
        style={{ animationDirection: reverse ? "reverse" : "normal", animationDuration: reverse ? "40s" : "35s" }}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <div
            key={i}
            className="glass rounded-xl px-6 py-4 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/60 transition-colors min-w-[160px] text-center"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Tech Stack
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
            Enterprise-Grade Technologies We Work With
          </h2>
        </div>
      </div>

      <div className="mt-14 space-y-4 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <Marquee items={row1} />
        <Marquee items={row2} reverse />
      </div>
    </section>
  );
}
