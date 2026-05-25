import { motion } from "framer-motion";
import { ArrowRight, UtensilsCrossed } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1633237308525-cd587cf71926?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden grain">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 ken-burns bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMG}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Steam wisps */}
      <div className="absolute inset-x-0 bottom-0 h-72 pointer-events-none">
        <span className="steam" style={{ left: "30%", animationDelay: "0s" }} />
        <span className="steam" style={{ left: "48%", animationDelay: "1.6s" }} />
        <span className="steam" style={{ left: "62%", animationDelay: "3.1s" }} />
        <span className="steam" style={{ left: "72%", animationDelay: "4.2s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm uppercase tracking-[0.45em] text-gold/90 mb-6"
        >
          Since Multan • Served Across Pakistan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05]"
        >
          Where Every Bite
          <br />
          Tells a <span className="italic text-gradient-gold">Love Story</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-urdu text-2xl md:text-3xl text-gold/80 mt-6"
          dir="rtl"
        >
          ہیر رانجھا
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Taste the legendary <span className="text-cream">Ranjha Gosht</span> &{" "}
          <span className="text-cream">Heer Gosht</span> — slow-cooked recipes born from
          the heart of Punjab.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition-all"
          >
            <UtensilsCrossed className="h-4 w-4" /> Explore Our Menu
          </a>
          <a
            href="#reserve"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream hover:bg-gold/10 transition-all"
          >
            Book a Table <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground shimmer-gold">
          Scroll
        </div>
      </div>
    </section>
  );
}
