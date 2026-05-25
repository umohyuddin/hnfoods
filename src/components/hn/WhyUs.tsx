import { motion } from "framer-motion";
import { Flame, Soup, MapPin, Star } from "lucide-react";

const items = [
  {
    icon: Flame,
    title: "Slow Cooked",
    body: "Our Ranjha Gosht bakes in a tandoor for 7–8 hours. You can't rush perfection.",
  },
  {
    icon: Soup,
    title: "Pure Desi Ghee",
    body: "We cook in pure desi ghee — no shortcuts, no compromises. Taste it in every bite.",
  },
  {
    icon: MapPin,
    title: "4 Cities, 1 Standard",
    body: "Multan. Lahore. Islamabad. Karachi. Same recipe. Same passion. Same legendary taste.",
  },
  {
    icon: Star,
    title: "Premium Fusion",
    body: "Traditional Punjabi roots, modern presentation. We call it Premium Pakistani Fusion.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-28 md:py-36 bg-card/30 grain">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— The HN Difference —</p>
          <h2 className="font-serif text-4xl md:text-6xl text-cream">
            What Makes Us <span className="italic text-gradient-gold">Legendary</span>
          </h2>
          <div className="gold-divider w-32 mx-auto my-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-8 border border-border bg-background/40 hover-gold-glow rounded-sm text-center"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full border border-gold/40 bg-gold/5 mb-5">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-cream mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
