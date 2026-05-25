import { motion } from "framer-motion";
import { ArrowRight, Award, ChefHat } from "lucide-react";

const dishes = [
  {
    badge: "Our #1 Signature",
    icon: Award,
    title: "Ranjha Gosht",
    urdu: "رنجھا گوشت",
    desc:
      "Slow-baked in a tandoor for 7–8 hours with pure butter and select spices. A masterpiece of patience and fire — tender, juicy, smoky mutton, cooked the way legends are made.",
    tag: "Mutton • Tandoor-Baked • Slow-Cooked 7–8 Hours",
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=1400&q=80",
  },
  {
    badge: "Chef's Favourite",
    icon: ChefHat,
    title: "Heer Gosht",
    urdu: "ہیر گوشت",
    desc:
      "Delicate, rich, and unforgettable. Our tribute to the beloved heroine of Punjab — slow-simmered mutton that wraps every bite in warmth, aroma, and desi ghee.",
    tag: "Mutton • Desi Ghee • Traditional Recipe",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1400&q=80",
  },
];

export function SignatureDishes() {
  return (
    <section id="signatures" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— The Legends —</p>
          <h2 className="font-serif text-4xl md:text-6xl text-cream">
            Our Legendary <span className="italic text-gradient-gold">Signatures</span>
          </h2>
          <div className="gold-divider w-32 mx-auto my-6" />
          <p className="text-muted-foreground text-lg">Two dishes. One timeless love story.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {dishes.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.article
                key={d.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: i * 0.15 }}
                className="group relative rounded-sm overflow-hidden border border-border hover-gold-glow bg-card"
              >
                {/* Image */}
                <div className="relative h-72 md:h-96 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-110"
                    style={{ backgroundImage: `url('${d.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-4 py-1.5 border border-gold/40">
                    <Icon className="h-3.5 w-3.5 text-gold" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold">{d.badge}</span>
                  </div>
                  <p
                    className="absolute bottom-4 right-5 font-urdu text-3xl text-gold/80"
                    dir="rtl"
                  >
                    {d.urdu}
                  </p>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <h3 className="font-serif text-3xl md:text-4xl text-cream mb-3">{d.title}</h3>
                  <div className="gold-divider w-16 mb-5" />
                  <p className="text-muted-foreground leading-relaxed mb-6">{d.desc}</p>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gold/80 mb-8">
                    {d.tag}
                  </p>
                  <a
                    href="#reserve"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-cream border-b border-gold/60 pb-1 hover:text-gold transition-colors"
                  >
                    Order {d.title} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
