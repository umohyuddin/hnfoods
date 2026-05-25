import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Dedicated Developer",
    description: "Ideal when you need to extend your in-house team.",
    features: [
      "1 or more engineers",
      "Monthly fixed cost",
      "Direct reporting to you",
      "Fully managed by CogneticAI",
    ],
    highlighted: false,
  },
  {
    name: "Managed Team",
    description: "We own delivery. You own the business outcomes.",
    features: [
      "Tech Lead + Developers + QA",
      "We manage delivery end-to-end",
      "You manage business goals",
      "Weekly progress reports",
    ],
    highlighted: true,
  },
  {
    name: "Project-Based Delivery",
    description: "Defined scope, guaranteed outcomes.",
    features: [
      "Fixed scope",
      "Fixed timeline",
      "Fixed cost",
      "Milestone-based payment",
    ],
    highlighted: false,
  },
];

export function Engagement() {
  return (
    <section id="engagement" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Engagement Models
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
            Flexible Engagement. Built Around You.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                p.highlighted
                  ? "glass-strong border-primary/60 glow"
                  : "glass hover:border-primary/40"
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-indigo px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                  p.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 btn-shimmer"
                    : "border border-border bg-secondary/60 text-foreground hover:bg-secondary"
                }`}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
