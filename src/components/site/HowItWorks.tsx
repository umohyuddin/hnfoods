import { Phone, UsersRound, Rocket, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Discovery Call",
    description: "We understand your tech stack, team size, goals, and timeline.",
  },
  {
    icon: UsersRound,
    title: "Team Matching",
    description: "We match pre-vetted engineers from our talent pool within 72 hours.",
  },
  {
    icon: Rocket,
    title: "Execution Begins",
    description: "Your team integrates, reports directly to you, and starts shipping.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Process
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
            From Intro Call to Deployed Team in Days — Not Months
          </h2>
        </div>

        <div className="mt-16 relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-2xl glass mx-auto">
                  <div className="absolute -top-3 -right-3 h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center glow">
                    {i + 1}
                  </div>
                  <s.icon className="h-9 w-9 text-accent" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Replace any developer in 7 days if there's a mismatch.
          </div>
        </div>
      </div>
    </section>
  );
}
