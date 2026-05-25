import { Check, X, AlertCircle } from "lucide-react";

const rows: Array<{ feature: string; us: string; freelancers: string; agencies: string }> = [
  { feature: "Hiring Risk", us: "None", freelancers: "High", agencies: "Medium" },
  { feature: "HR & Payroll Burden", us: "Handled", freelancers: "On You", agencies: "Shared" },
  { feature: "Replacement Guarantee", us: "7 Days", freelancers: "None", agencies: "None" },
  { feature: "Transparent Pricing", us: "Yes", freelancers: "Variable", agencies: "Hidden Fees" },
  { feature: "Direct Communication", us: "Yes", freelancers: "Yes", agencies: "Account Manager" },
  { feature: "AI-Augmented Delivery", us: "Yes", freelancers: "Rare", agencies: "Rare" },
  { feature: "Scalability", us: "On Demand", freelancers: "Limited", agencies: "Slow" },
];

export function Comparison() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Comparison
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
            Why Enterprises Choose Us Over Freelancers & Agencies
          </h2>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl glass">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-5 font-semibold text-muted-foreground">Feature</th>
                  <th className="px-6 py-5 font-semibold bg-primary/15 text-foreground">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" /> CogneticAI
                    </div>
                  </th>
                  <th className="px-6 py-5 font-semibold text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-destructive" /> Freelancers
                    </div>
                  </th>
                  <th className="px-6 py-5 font-semibold text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-500" /> Agencies
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.feature}
                    className={`border-b border-border/50 last:border-0 ${
                      i % 2 === 1 ? "bg-secondary/30" : ""
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-foreground">{r.feature}</td>
                    <td className="px-6 py-4 bg-primary/10 font-semibold text-foreground">{r.us}</td>
                    <td className="px-6 py-4 text-muted-foreground">{r.freelancers}</td>
                    <td className="px-6 py-4 text-muted-foreground">{r.agencies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
