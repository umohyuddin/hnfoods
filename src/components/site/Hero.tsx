import { ArrowRight, PlayCircle } from "lucide-react";

const industries = [
  "Healthcare", "Finance", "E-commerce", "Insurance", "Telecom", "Oil & Gas",
  "Transportation", "Banking", "Construction", "Retail",
];

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      {/* Soft radial glow behind headline */}
      <div
        className="absolute left-1/2 top-[22%] -translate-x-1/2 -translate-y-1/2 h-[640px] w-[1000px] rounded-full pointer-events-none blur-3xl opacity-70"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Antigravity-style liftoff rainbow streaks */}
      <div className="liftoff-streaks" aria-hidden="true">
        <span className="liftoff-streak thin" style={{ left: "8%",  animationDelay: "0s",   animationDuration: "8s" }} />
        <span className="liftoff-streak"      style={{ left: "16%", animationDelay: "2.3s", animationDuration: "7s" }} />
        <span className="liftoff-streak wide" style={{ left: "27%", animationDelay: "4.1s", animationDuration: "9s" }} />
        <span className="liftoff-streak thin" style={{ left: "38%", animationDelay: "1.2s", animationDuration: "8.5s" }} />
        <span className="liftoff-streak"      style={{ left: "49%", animationDelay: "3.5s", animationDuration: "7.5s" }} />
        <span className="liftoff-streak thin" style={{ left: "58%", animationDelay: "5.2s", animationDuration: "9s" }} />
        <span className="liftoff-streak wide" style={{ left: "68%", animationDelay: "0.8s", animationDuration: "8s" }} />
        <span className="liftoff-streak"      style={{ left: "78%", animationDelay: "2.9s", animationDuration: "7.2s" }} />
        <span className="liftoff-streak thin" style={{ left: "88%", animationDelay: "4.6s", animationDuration: "8.8s" }} />
        <span className="liftoff-streak"      style={{ left: "94%", animationDelay: "6s",   animationDuration: "7.6s" }} />
      </div>



      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-8 animate-fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Now onboarding teams for Q1 2026
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight max-w-5xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-gradient">Scale Your Engineering Teams —</span>
          <br />
          <span className="text-gradient-blue">Without the Hiring Risk</span>
        </h1>

        <p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          CogneticAI delivers managed developers, AI automation, and full-stack software
          delivery for startups and enterprises worldwide. Zero overhead. Pure execution.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow"
          >
            Book a Free Discovery Call <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-card/80 transition-all"
          >
            <PlayCircle className="h-4 w-4" /> See How It Works
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Trusted by teams across
          </p>
          <div className="relative overflow-hidden mask-marquee">
            <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
              {[...industries, ...industries].map((name, i) => (
                <span
                  key={i}
                  className="text-sm font-medium text-muted-foreground/70 hover:text-foreground transition-colors"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
