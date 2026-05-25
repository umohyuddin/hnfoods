import { useState } from "react";
import { Mail, MessageCircle, MapPin, Linkedin, Instagram, Facebook, Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().min(1, "Company required").max(150),
  service: z.string().min(1, "Please select"),
  message: z.string().trim().min(1, "Message required").max(1000),
});

const services = [
  "Resource Outsourcing",
  "Web Development",
  "Workflow Automation",
  "AI Automation",
  "Not Sure Yet",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Contact
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">
            Let's Build Your Vision — Together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Book a free 30-minute discovery call. No commitment required.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 glass-strong rounded-2xl p-8 relative"
            style={{ boxShadow: "0 0 60px -20px oklch(0.58 0.22 262 / 0.5)" }}
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-accent glow">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Thanks — we'll be in touch.</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our team will reach out within 24 hours to schedule your discovery call.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" error={errors.name} />
                <Field label="Email Address" name="email" type="email" error={errors.email} />
                <Field label="Company Name" name="company" error={errors.company} className="md:col-span-2" />
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-foreground/90">
                    What are you looking for?
                  </label>
                  <select
                    name="service"
                    defaultValue=""
                    className="mt-2 w-full rounded-lg bg-input border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-foreground/90">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-lg bg-input border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="btn-shimmer w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow"
                  >
                    Book My Free Call <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Info card */}
          <div className="lg:col-span-2 glass rounded-2xl p-8 space-y-6">
            <h3 className="text-lg font-semibold">Reach us directly</h3>

            <InfoRow icon={Mail} label="Email" value="contact@cogneticai.io" href="mailto:contact@cogneticai.io" />
            <InfoRow icon={MessageCircle} label="WhatsApp" value="+92-309-9440005" href="https://wa.me/923099440005" />
            <InfoRow icon={MapPin} label="Location" value="Lahore, Pakistan" />

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Follow us</p>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg glass hover:border-primary/60 hover:text-accent transition-colors"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", error, className = "",
}: { label: string; name: string; type?: string; error?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-foreground/90">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-2 w-full rounded-lg bg-input border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoRow({
  icon: Icon, label, value, href,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 border border-primary/30 text-accent">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-sm font-medium text-foreground mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a>
  ) : content;
}
