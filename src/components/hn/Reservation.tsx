import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Clock, Instagram, MessageCircle, Check } from "lucide-react";

const BG =
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=2000&q=80";

export function Reservation() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="reserve" className="relative py-28 md:py-36 overflow-hidden grain">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${BG}')` }}
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— Reserve —</p>
          <h2 className="font-serif text-4xl md:text-6xl text-cream">
            Ready for the <span className="italic text-gradient-gold">Experience?</span>
          </h2>
          <div className="gold-divider w-32 mx-auto my-6" />
          <p className="text-muted-foreground text-lg">
            Reserve your table or reach us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 p-8 md:p-10 bg-card/80 backdrop-blur border border-border rounded-sm"
          >
            {sent ? (
              <div className="text-center py-12">
                <div className="inline-flex h-16 w-16 rounded-full border border-gold/60 items-center justify-center mb-6">
                  <Check className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-serif text-3xl text-cream mb-3">Reservation Received</h3>
                <p className="text-muted-foreground">
                  Shukriya! Our team will confirm your table shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name">
                    <input required className={inputCls} placeholder="Your name" />
                  </Field>
                  <Field label="Phone Number">
                    <input required type="tel" className={inputCls} placeholder="03XX-XXXXXXX" />
                  </Field>
                </div>
                <Field label="City">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Select a city</option>
                    <option>Multan</option>
                    <option>Lahore</option>
                    <option>Islamabad</option>
                    <option>Karachi</option>
                  </select>
                </Field>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Date">
                    <input required type="date" className={inputCls} />
                  </Field>
                  <Field label="Time">
                    <input required type="time" className={inputCls} />
                  </Field>
                </div>
                <Field label="Special Request (optional)">
                  <textarea rows={3} className={inputCls} placeholder="Anniversary, seating preference…" />
                </Field>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-full bg-gold py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground hover:opacity-90 transition-all"
                >
                  Reserve My Table
                </button>
              </form>
            )}
          </motion.div>

          {/* Direct contact */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 p-8 md:p-10 border border-gold/30 rounded-sm bg-background/60 backdrop-blur flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-2xl text-cream mb-2">Direct Contact</h3>
              <p className="font-urdu text-xl text-gold/70 mb-6" dir="rtl">رابطہ کریں</p>
              <div className="gold-divider w-12 mb-8" />

              <ContactRow icon={Phone} label="Call / WhatsApp" value="0304-1110915" href="tel:+923041110915" />
              <ContactRow icon={Clock} label="Timings" value="05 AM – 10 PM Daily" />
              <ContactRow icon={Instagram} label="Instagram" value="@hnfoodspk" href="https://instagram.com/hnfoodspk" />
            </div>

            <a
              href="https://wa.me/923041110915"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream hover:bg-gold/10 transition-all"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full bg-background/60 border border-border rounded-sm px-4 py-3 text-sm text-cream placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold/60 transition-colors";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined } : {})}
      className="flex items-start gap-4 py-4 border-b border-border/60 last:border-0 hover:text-gold transition-colors"
    >
      <div className="h-10 w-10 shrink-0 rounded-full border border-gold/40 flex items-center justify-center">
        <Icon className="h-4 w-4 text-gold" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">{label}</p>
        <p className="font-serif text-lg text-cream">{value}</p>
      </div>
    </Wrapper>
  );
}
