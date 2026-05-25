import { Users, Code2, Zap, Brain, type LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
};

const services: Service[] = [
  {
    icon: Users,
    title: "Dedicated Engineering Teams",
    description:
      "Pre-vetted developers matched to your stack, integrated directly into your team. We handle HR, payroll, and management.",
    badge: "Hire in 30 Days",
  },
  {
    icon: Code2,
    title: "End-to-End Web Development",
    description:
      "From architecture to deployment — we build scalable, production-grade web applications using modern full-stack technologies.",
    badge: "React • Node • Next.js",
  },
  {
    icon: Zap,
    title: "Business Workflow Automation",
    description:
      "We map, design, and automate your internal workflows — eliminating manual bottlenecks and reducing operational overhead.",
    badge: "Save 40%+ Operations Cost",
  },
  {
    icon: Brain,
    title: "Custom AI & LLM Integration",
    description:
      "We build AI agents, RAG pipelines, and LLM-powered features integrated directly into your real business workflows.",
    badge: "Powered by OpenAI & AutoGen",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Services
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
            Everything You Need to Scale — Handled
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From talent to technology, we cover the full engineering stack.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative glass rounded-2xl p-8 transition-all duration-300 hover:border-primary/60 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-indigo/0 opacity-0 group-hover:from-primary/10 group-hover:to-indigo/10 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-indigo/20 border border-primary/30 text-accent group-hover:glow group-hover:text-white transition-all">
                  <s.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>

                <div className="mt-6 inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-accent">
                  {s.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
