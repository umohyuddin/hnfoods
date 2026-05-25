import {
  HeartPulse, HardHat, ShoppingBag, Fuel, Truck, Landmark, ShieldCheck, Radio,
  type LucideIcon,
} from "lucide-react";

const items: Array<{ icon: LucideIcon; label: string }> = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: HardHat, label: "Construction" },
  { icon: ShoppingBag, label: "E-commerce & Retail" },
  { icon: Fuel, label: "Oil & Gas" },
  { icon: Truck, label: "Transportation" },
  { icon: Landmark, label: "Banking & Finance" },
  { icon: ShieldCheck, label: "Insurance" },
  { icon: Radio, label: "Telecommunications" },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Industries
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
            We Understand Domain Complexity — Not Just Code
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our engineers bring industry-specific experience across verticals.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="group glass rounded-xl p-6 text-center transition-all hover:border-primary/60 hover:-translate-y-1 hover:glow"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-indigo/20 border border-primary/30 text-accent group-hover:text-white transition-colors">
                <it.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-medium">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
